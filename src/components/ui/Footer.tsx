import { creationYear } from "@/lib/constants/app"
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
          <a href="https://github.com/Honzoraptor31415" target="_blank" className="no-style grid socials-link active-opacity">
            <img src="socials/github.svg" className="no-select" />
          </a>
          <a href="mailto:honzoraptor@gmail.com" target="_blank" className="no-style grid socials-link active-opacity">
            <img src="socials/gmail.svg" className="no-select" />
          </a>
          <a href="https://www.codewars.com/users/Honzoraptor3.1415926535" target="_blank" className="no-style grid socials-link active-opacity">
            <img src="socials/codewars.svg" className="no-select" />
          </a>
          <a href="https://discord.com/users/1002852808221011998" target="_blank" className="no-style grid socials-link active-opacity">
            <img src="socials/discord.svg" className="no-select" />
          </a>
          <a href="https://honzoraptor.itch.io" target="_blank" className="no-style grid socials-link active-opacity">
            <img src="socials/itch.svg" className="no-select" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer