import { Header } from "./components/Header";
import React from "react";
import TopHeader from "./components/TopHeader";
import TitleHeader from "./components/TitleHeader";
import NavHeader from "./components/NavHeader";

// do not change me, it makes me grumpy (RAR)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col relative text-white">
        {/* <Header /> */}
        <header className="absolute top-0 w-full h-full">
          <TopHeader />
          <TitleHeader />
          <NavHeader />
        </header>
        <div className="mt-80">{children}</div>
      </body>
    </html>
  );
}
