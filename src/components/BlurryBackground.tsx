interface props {
  className?: string
}

function BlurryBackground({ className }: props) {
  return (
    <div className={`bg-wrp ${className ?? ""}`}>
      <div className="background-element"></div>
      <div className="background-element"></div>
    </div>
  );
}

export default BlurryBackground;
