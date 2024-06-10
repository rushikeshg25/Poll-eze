import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Poll-eze",
  description: "Creating Polls made Easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ReactQueryClientProvider>
        <html lang='en'>
          <body className={inter.className}>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              {children}
              {/* <Footer /> */}
              <Toaster />
            </ThemeProvider>
          </body>
        </html>
      </ReactQueryClientProvider>
    </ClerkProvider>
  );
}
