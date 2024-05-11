"use client"

import { useEffect, useRef, useState } from "react"
import type { MenuElement } from "@/lib/types/app"

interface props {
  wrpClass?: string
  btnClass?: string
  menuIconUrl: string
  iconClass?: string
  options: MenuElement[]
}

function HiddenMenu({ wrpClass, btnClass, menuIconUrl, iconClass, options }: props) {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)
  const menuBtn = useRef<any>(null)

  useEffect(() => {
    const handleClick = (e: any) => {
      if (menuBtn.current && menuBtn.current.contains(e.target)) {
        setIsMenuVisible(!isMenuVisible);
      } else {
        setIsMenuVisible(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isMenuVisible])

  return (
    <div className={`hidden-menu-wrp ${wrpClass ?? ""}`}>
      <button ref={menuBtn} className={`no-style hover-before flex-center-all dots-menu-btn ${btnClass ?? ""}`}>
        <img src={menuIconUrl} alt="Menu icon" className={`hidden-menu-icon ${iconClass ?? ""}`} />
      </button>
      {isMenuVisible && (
        <div className="hidden-menu-content">
          {options.map((element, index) => {
            return (
              element.type === "button" ? (
                <button key={index} onClick={element.onClick} className={`no-style menu-element ${element.className ?? ""}`}>{element.text}</button>
              ) : (
                <>
                  <a key={index} className={`no-style menu-element ${element.className}`} href={element.href}>{element.text}</a>
                </>
              )
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HiddenMenu