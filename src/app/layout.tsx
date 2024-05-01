import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/lib/components/Nav";

export const metadata: Metadata = {
  title: "Honzoraptor's portfolio",
  description: "Find all of my cool projects in one place and easily!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
