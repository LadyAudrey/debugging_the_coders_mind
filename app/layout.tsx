import "./globals.css";
import TopHeader from "./components/TopHeader";
import TitleHeader from "./components/TitleHeader";
import NavHeader from "./components/NavHeader";
import Dashboard from "./components/Dashboard";

import React from "react";

// do not change me, it makes me grumpy (RAR)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <TopHeader />
        <TitleHeader />
        <NavHeader />
        {children}
      </body>
    </html>
  );
}
