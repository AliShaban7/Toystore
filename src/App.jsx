import Navbar from './components/Navbar'
import BackgroundEffects from './components/BackgroundEffects'
import Hero from './components/Hero'

function App() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <BackgroundEffects />
      <Navbar />

      {/* Main content centered */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 w-full">
        <Hero />
      </main>

      {/* Bottom section with status pill and footer */}
      <div className="relative z-10 flex flex-col items-center pb-8 space-y-4 opacity-0 animate-fade-in-delay-2">
        {/* Glassmorphism status pill */}
        <div className="glass-strong rounded-full px-8 py-3 flex items-center gap-3 hover:scale-105 transition-transform duration-500 cursor-default">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/50" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white/80" />
          </span>
          <span className="text-sm font-body text-white/70 tracking-wide">
            Çox yaxında
          </span>
        </div>

        {/* Footer */}
        <p className="text-[11px] tracking-[0.3em] uppercase text-white/20 font-body">
          © 2026 Toystore.az
        </p>
      </div>
    </div>
  )
}

export default App
