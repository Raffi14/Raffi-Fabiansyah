import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./provider";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raffi-fabiansyah.vercel.app"),

  title: {
    default: "Muhammad Raffi Fabiansyah | Full-Stack Developer",
    template: "%s | Muhammad Raffi Fabiansyah",
  },

  description:
    "Muhammad Raffi Fabiansyah is a Full-Stack Developer and Data Analyst specializing in Next.js, React, TypeScript, Python, and AI-powered web development.",

  keywords: [
    "Muhammad Raffi Fabiansyah",
    "Raffi Fabiansyah",
    "Full-Stack Developer",
    "Data Analyst",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Python Developer",
    "AI Web Development",
  ],

  authors: [
    {
      name: "Muhammad Raffi Fabiansyah",
    },
  ],

  creator: "Muhammad Raffi Fabiansyah",

  alternates: {
    canonical: "https://raffi-fabiansyah.vercel.app",
  },

  openGraph: {
    type: "website",
    url: "https://raffi-fabiansyah.vercel.app",
    title: "Muhammad Raffi Fabiansyah | Full-Stack Developer",
    description:
      "Personal portfolio of Muhammad Raffi Fabiansyah, a Full-Stack Developer and Data Analyst.",
    siteName: "Muhammad Raffi Fabiansyah",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  verification: {
    google: "Z81vQSRrUn8YURifXH3FWJCsHg4HxuN_YZspZ6MiIRM",
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
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
