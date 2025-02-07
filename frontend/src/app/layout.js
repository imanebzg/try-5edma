import { Geist, Geist_Mono } from "next/font/google";
import "@/app/style/globals.css";
import { Suspense } from "react";
import Spinner from "./_components/Spinner";
import Header from "./_components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | TryKhedma",
    default: "TryKhedma",
  },
  description: "Discover your suitable job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Spinner />}>
          <Header />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
