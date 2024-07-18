"use client"

import { useEffect, useState } from "react"

function BlurryMouseFollower() {
  const size = 125

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    })
  }, [])
  return (
    <div className="blurry-bg-element blurry-mouse-follower" style={{ left: mousePos.x - (size / 2), top: mousePos.y - (size / 2), "--width": `${size}px` } as React.CSSProperties}></div>
  )
}

export default BlurryMouseFollower