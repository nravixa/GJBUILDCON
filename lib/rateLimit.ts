/**
 * In-Memory Sliding Window Rate Limiter
 *
 * Protects form endpoints from rapid burst abuse and automated flooding.
 * Note: In serverless environments (e.g. multi-region Vercel functions),
 * in-memory rate limits apply per warm instance. For distributed cross-instance
 * rate limiting at enterprise scale, an external KV store (e.g. Upstash Redis)
 * is recommended as a follow-up enhancement.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const ipRecords = new Map<string, RateLimitRecord>();

// Maximum records to keep in memory before full purge of stale entries
const MAX_MAP_ENTRIES = 5000;

/**
 * Prunes expired timestamps older than windowMs.
 */
function pruneStaleEntries(windowMs: number) {
  const now = Date.now();
  for (const [ip, record] of ipRecords.entries()) {
    record.timestamps = record.timestamps.filter((t) => now - t < windowMs);
    if (record.timestamps.length === 0) {
      ipRecords.delete(ip);
    }
  }
}

/**
 * Checks if a request from the given IP is within rate limits.
 *
 * @param ip Client IP address (or fallback identifier)
 * @param limit Maximum allowed requests within the window (default: 5)
 * @param windowMs Window duration in milliseconds (default: 15 minutes / 900,000 ms)
 */
export function checkRateLimit(
  ip: string,
  limit = 5,
  windowMs = 15 * 60 * 1000
): { isAllowed: boolean; remaining: number; resetMs: number } {
  const now = Date.now();

  // Safety cleanup if map grows large
  if (ipRecords.size > MAX_MAP_ENTRIES) {
    pruneStaleEntries(windowMs);
  }

  let record = ipRecords.get(ip);
  if (!record) {
    record = { timestamps: [] };
    ipRecords.set(ip, record);
  }

  // Filter timestamps within current sliding window
  record.timestamps = record.timestamps.filter((timestamp) => now - timestamp < windowMs);

  if (record.timestamps.length >= limit) {
    const oldest = record.timestamps[0];
    const resetMs = Math.max(0, windowMs - (now - oldest));
    return {
      isAllowed: false,
      remaining: 0,
      resetMs,
    };
  }

  record.timestamps.push(now);
  const remaining = Math.max(0, limit - record.timestamps.length);
  return {
    isAllowed: true,
    remaining,
    resetMs: windowMs,
  };
}

/**
 * Resets rate limit records (primarily for test suite isolation).
 */
export function resetRateLimits(): void {
  ipRecords.clear();
}
