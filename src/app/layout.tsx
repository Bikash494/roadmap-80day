import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "80-Day FAANG Study Roadmap | Java Spring DevOps Engineer",
  description: "Day-wise 80-day study plan for senior Java/SpringBoot/DevOps engineers targeting FAANG, Flipkart, Myntra, Nike, SolarWinds, Jio Hotstar at 30+ LPA.",
  keywords: ["FAANG", "interview prep", "Java", "SpringBoot", "Kubernetes", "DevOps", "system design", "DSA", "30 LPA"],
  authors: [{ name: "Roadmap Generator" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "80-Day FAANG Study Roadmap",
    description: "Day-wise plan for senior Java/Spring/DevOps engineers targeting 30+ LPA at FAANG & top product companies.",
    url: "https://chat.z.ai",
    siteName: "FAANG Prep",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "80-Day FAANG Study Roadmap",
    description: "Day-wise plan for senior Java/Spring/DevOps engineers targeting 30+ LPA.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
