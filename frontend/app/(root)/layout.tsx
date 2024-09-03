

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
   <div className="relative flex flex-col">
      <main className="relative flex bg-[#101114]">
        {children}
      </main>
   </div>
  );
}