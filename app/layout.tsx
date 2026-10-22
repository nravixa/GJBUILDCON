import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | GJ Buildcon — Premier Civil Construction & Infrastructure",
    default: "GJ Buildcon | Premier Civil Construction & Infrastructure in Pune",
  },
  description:
    "Over a decade delivering premier residential towers, commercial landmarks, institutional facilities, and turnkey civil construction across Pune, supported by integrated deep foundation engineering.",
  keywords: [
    "GJ Buildcon",
    "G and J Buildcon",
    "Civil Construction Pune",
    "Building Contractors Pune",
    "Commercial Construction",
    "Residential Towers Pune",
    "Infrastructure Contractors Pune",
    "RCC Superstructure",
    "Piling Services Pune",
    "Deep Foundations",
    "Pimple Saudagar Builder",
  ],
  authors: [{ name: "GJ Buildcon" }, { name: "NRAVIXA", url: "https://nravixa.vercel.app" }],
  creator: "NRAVIXA",
  metadataBase: new URL("https://gjbuildcon.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/hero/logo.jpeg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/images/hero/logo.jpeg" },
    ],
    shortcut: [
      { url: "/images/hero/logo.jpeg" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gjbuildcon.com",
    title: "GJ Buildcon | Premier Civil Construction & Infrastructure",
    description:
      "Crafting Landmarks, Creating Legacies™. Over a decade delivering iconic residential, commercial, and civil infrastructure projects across Pune, backed by integrated foundation engineering.",
    siteName: "GJ Buildcon",
    images: [
      {
        url: "/images/hero/hero_architectural_monolith.jpg",
        width: 1200,
        height: 630,
        alt: "GJ Buildcon Architectural Construction & Infrastructure Engineering",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${headingFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('gj-theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else if (saved === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                    if (prefersDark) {
                      document.documentElement.classList.add('dark');
                      document.documentElement.classList.remove('light');
                      document.documentElement.setAttribute('data-theme', 'dark');
                    } else {
                      document.documentElement.classList.add('light');
                      document.documentElement.classList.remove('dark');
                      document.documentElement.setAttribute('data-theme', 'light');
                    }
                  }
                } catch (e) {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased transition-colors duration-300">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

