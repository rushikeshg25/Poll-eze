import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeStateProvider from "@/providers/ThemeStateProvider";
import { Toaster } from "@/components/ui/toaster";
// import ClientOnly from "@/components/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poll-eze",
  description: "A Poll creating web app made using Nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeStateProvider>
        {/* <ClientOnly> */}
        <Toaster />
        {/* </ClientOnly> */}
        <body className={inter.className}>{children}</body>
      </ThemeStateProvider>
    </html>
  );
}
