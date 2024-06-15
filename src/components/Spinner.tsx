"use client"

interface props {
  size: number
  color: string
  borderWidth: number
}

function Spinner({ size, color, borderWidth }: props) {
  return (
    <>
      <span
        className="loader-spinner"
        style={{ "--size": `${size}px`, "--color": `${color}`, "--border-width": `${borderWidth}px` } as React.CSSProperties}
      ></span>
    </>
  )
}

export default Spinner