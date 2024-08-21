"use client"

function BlurryBackground() {
  return (
    <>
      <div className="blurry-bg-wrp flex items-center justify-center">
        <div className="blurry-bg-element absolute first"></div>
        <div className="blurry-bg-element absolute second"></div>
      </div>
    </>
  )
}

export default BlurryBackground