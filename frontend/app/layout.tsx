
import Scroll from "@/components/Scroll";
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Scroll />
        <ChakraUiProvider>{children}</ChakraUiProvider>
      </body>
    </html>
  )
}
