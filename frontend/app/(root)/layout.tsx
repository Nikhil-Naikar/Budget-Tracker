"use client";

import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const pathname = usePathname()
  
  return (
   <main className="relative flex flex-col items-center">
      <NavBar path={pathname}/>
      <div className="flex flex-col min-h-screen py-14 items-center max-w-screen-md">
        <section className="flex flex-col gap-5">
          {children}
        </section>
      </div>
   </main>
  );
}