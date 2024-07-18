"use client"

import { useEffect, useState } from "react"

function BlurryMouseFollower() {
  const size = 125

  const [mousePos, setMousePos] = useState({ left: 0, top: 0 })
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMousePos({ left: e.clientX, top: e.clientY })
    })
  }, [])
  return (
    <div className="blurry-bg-element blurry-mouse-follower" style={{ left: mousePos.left - (size / 2), top: mousePos.top - (size / 2), "--width": `${size}px` } as React.CSSProperties}></div>
  )
}

export default BlurryMouseFollower