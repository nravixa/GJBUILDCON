import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names safely without style conflicts.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format numerical square footage with Indian locale formatting (e.g. 25,00,000 sq. ft.)
 */
export function formatSqFt(sqft: number): string {
  return new Intl.NumberFormat("en-IN").format(sqft);
}
