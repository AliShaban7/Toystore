const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Background Image - Full brightness, no overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bg-toys.png')`,
        }}
      />
    </div>
  )
}

export default BackgroundEffects
