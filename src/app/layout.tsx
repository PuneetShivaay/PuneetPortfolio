import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

// =========================================================================
// FONT CONFIGURATION (Geist Sans & Geist Mono)
// =========================================================================
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

// =========================================================================
// SEARCH ENGINE OPTIMIZATION (SEO) & OPEN GRAPH METADATA
// =========================================================================
export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Software Engineer`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    DATA.name,
    "Software Engineer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Agentic AI",
    "TypeScript",
    "Google Cloud Certified",
    "Cognizant",
    "Portfolio",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: DATA.avatarUrl || "/puneetphoto.jpg",
    shortcut: DATA.avatarUrl || "/puneetphoto.jpg",
    apple: DATA.avatarUrl || "/puneetphoto.jpg",
  },
  openGraph: {
    title: `${DATA.name} | Software Engineer`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name} Portfolio`,
    images: [
      {
        url: DATA.avatarUrl || "/puneetphoto.jpg",
        width: 800,
        height: 600,
        alt: `${DATA.name} - Software Engineer`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: `${DATA.name} | Software Engineer`,
    card: "summary_large_image",
    description: DATA.description,
    images: [DATA.avatarUrl || "/puneetphoto.jpg"],
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
  verification: {
    google: "",
    yandex: "",
  },
};

// =========================================================================
// ROOT LAYOUT COMPONENT
// =========================================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Person structured data for Google Knowledge Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    image: `${DATA.url}${DATA.avatarUrl}`,
    sameAs: [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url,
    ],
    jobTitle: "Software Engineer",
    description: DATA.description,
    knowsAbout: DATA.skills,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data / JSON-LD for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0 pointer-events-none">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>

            {/* Floating Navigation Dock */}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}