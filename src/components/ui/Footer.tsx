import { creationYear, socials } from "@/lib/constants/app"
import Link from "next/link"

function Footer() {
  return (
    <footer className="flex-between flex-center-all flex-column sec-bg-transparent">
      <div className="w-full footer-top">
        <Link href="/#" className="nav-logo">Honzoraptor</Link>
      </div>
      <div className="flex-between w-full footer-content">
        <div className="footer-side">
          <p className="footer-text grey">&copy; Honzoraptor {creationYear} - {new Date().getFullYear()} ✌️</p>
        </div>
        <div className="footer-side gap-20 flex-wrap">
          {socials.map(({ linkUrl, iconUrl }, i) => {
            return (
              <Link key={i} href={linkUrl} target="_blank" className="no-style grid socials-link active-opacity">
                <img src={iconUrl} className="no-select" alt="" />
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer