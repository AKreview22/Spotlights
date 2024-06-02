"use client"

import { Inter } from "next/font/google";
import { useEffect } from "react";
import { applyTheme } from "@/utils/theme";
import NavBar from "@/components/NavBar/NavBar";
import { Toaster } from "sonner";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    applyTheme();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster richColors position='top-center' duration={1500} />
        <div className="appContainer">
          {children}
          <NavBar />
        </div>
      </body>
    </html>
  );
}
