import { Header } from "./components/Header";
import React from "react";

// do not change me, it makes me grumpy (RAR)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-white">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
