import Footer from "@/components/ui/Footer";
import "./globals.css";
import "./tailwind.css"
import Nav from "@/components/ui/Nav";
import BlurryMouseFollower from "@/components/ui/BlurryMouseFollower";

export const metadata = {
  title: "Honzoraptor's portfolio",
  description: 'Here you can find all of my cool projects!',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <BlurryMouseFollower />
        {children}
        <Footer />
      </body>
    </html>
  )
}
