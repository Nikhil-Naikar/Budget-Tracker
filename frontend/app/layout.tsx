
import "./globals.css";
import { ChakraUiProvider } from "@/providers/ChakraUiProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
