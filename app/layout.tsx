"use client";
import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />
          <main className="m-auto bg-gray-100 p-4">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
