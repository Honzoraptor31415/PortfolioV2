"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

function BlurryMouseFollower() {
  const size = 125

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMouseHovering, setIsMouseHovering] = useState(false)
  const [bodyHeight, setBodyHeight] = useState("0px")
  const pathname = usePathname()

  useEffect(() => {
    setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
    document.addEventListener("mousemove", (e: any) => {
      setMousePos({ x: e.pageX, y: e.pageY })
      if (getComputedStyle(e.target).cursor === "pointer") {
        setIsMouseHovering(true)
      } else {
        setIsMouseHovering(false)
      }
    })
    setBodyHeight(getComputedStyle(document.body).height)
  }, [pathname])

  return (
    <div className="blurry-mouse-follower-wrp absolute desktop" style={{ height: bodyHeight }}>
      <div className={`blurry-bg-element blurry-mouse-follower ${isMouseHovering ? "blurry-mouse-follower-hovering" : ""}`} style={{ left: mousePos.x - (size / 2), top: mousePos.y - (size / 2), "--width": `${size}px` } as React.CSSProperties}></div>
    </div>
  )
}

export default BlurryMouseFollower