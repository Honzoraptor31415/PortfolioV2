"use client"

import { useEffect, useState } from "react"

function BlurryMouseFollower() {
  const size = 125

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
    document.addEventListener("mousemove", (e) => {
      setMousePos({ x: e.pageX, y: e.pageY })
    })
  }, [])

  return (
    <div className="blurry-mouse-follower-wrp">
      <div className="blurry-bg-element blurry-mouse-follower desktop" style={{ left: mousePos.x - (size / 2), top: mousePos.y - (size / 2), "--width": `${size}px` } as React.CSSProperties}></div>
    </div>
  )
}

export default BlurryMouseFollower