import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
