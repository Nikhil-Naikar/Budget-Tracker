"use client";

import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const pathname = usePathname()
  
  return (
   <main className="relative flex flex-col">
      <NavBar path={pathname}/>
      <div className="flex flex-col min-h-screen text-black w-full items-center">
        <section className="flex flex-col gap-5 w-200 pt-20 pb-10">
          {children}
        </section>
      </div>
   </main>
  );
}