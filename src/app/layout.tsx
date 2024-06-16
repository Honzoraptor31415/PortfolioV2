import "./globals.css";

export const metadata = {
  title: "Honzoraptor's portfolio",
  description: 'Here you can find all of my cool projects!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
