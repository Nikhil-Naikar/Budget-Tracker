"use client";

import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const pathname = usePathname()
  
  return (
   <div className="relative flex flex-col">
      <main className="relative flex">
        <NavBar path={pathname}/>
        {children}
      </main>
   </div>
  );
}