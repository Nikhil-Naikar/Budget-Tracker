

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
   <div className="relative flex flex-col">
      <main className="relative flex bg-[#34b66e]">
        {children}
      </main>
   </div>
  );
}