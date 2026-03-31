const WatermarkText = () => {
  return (
    <div className="fixed inset-0 z-[1] flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <h1
        className="font-display font-bold text-white whitespace-nowrap leading-none"
        style={{
          fontSize: 'clamp(120px, 20vw, 320px)',
          opacity: 0.03,
          filter: 'blur(1px)',
          letterSpacing: '-0.03em',
        }}
      >
        Toystore
      </h1>
    </div>
  )
}

export default WatermarkText
