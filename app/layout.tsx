import "./globals.css";

import { Toaster } from "react-hot-toast";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookbuddy",
  description: "Your bookstore for fantasty & mystery novels",
};

import Chat from "@/components/chat";
import Providers from "@/components/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <Toaster position="top-right" />
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  );
}
