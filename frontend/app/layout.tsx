import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraUiProvider } from "@/providers/ChakraUiProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budget Tracker"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Budget Tracker</title>
        <link rel="icon" href="./icons/money-bag.png" type="icon" />
      </head>
      <body>
        <ChakraUiProvider>{children}</ChakraUiProvider>
      </body>
    </html>
  )
}
