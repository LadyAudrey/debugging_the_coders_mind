import "./dashboard.css";

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
      <body className="flex flex-col text-white">
        <TopHeader />
        <TitleHeader />
        <NavHeader />
        <div>{children}</div>
      </body>
    </html>
  );
}
