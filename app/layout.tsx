import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FE-AA2 | Interactive 3D Experience",
  description:
    "An interactive 3D product viewer built with Next.js, React Three Fiber and Three.js.",
  openGraph: {
    title: "FE-AA2 | Interactive 3D Experience",
    description:
      "Explore an interactive 3D product viewer built with Next.js, React Three Fiber and Three.js.",
    type: "website",
    url: "https://fe-aa2-3d-experience.vercel.app",
    siteName: "FE-AA2 3D Experience",
  },
  twitter: {
    card: "summary",
    title: "FE-AA2 | Interactive 3D Experience",
    description:
      "An interactive 3D product viewer built with Next.js, React Three Fiber and Three.js.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}