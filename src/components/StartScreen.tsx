interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-to-b from-cream via-cream-light to-cream relative overflow-hidden">
      {/* Decorative coffee elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 select-none pointer-events-none">☕</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-15 select-none pointer-events-none">☕</div>
      
      <div className="text-center max-w-sm relative z-10">
        {/* Coffee shop welcome */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-dark-brown mb-2" style={{ fontFamily: 'Georgia, Garamond, serif' }}>
            Soc Ops
          </h1>
          <p className="text-xl text-warm-brown font-light tracking-wide">Social Bingo Café</p>
          <p className="text-sm text-warm-gold mt-2">Your cozy place to connect ☕</p>
        </div>
        
        {/* How to play card */}
        <div className="cozy-card p-8 mb-8 backdrop-blur-sm">
          <h2 className="font-serif text-2xl text-dark-brown mb-4">How to Play</h2>
          <ul className="text-left text-warm-brown text-sm space-y-3">
            <li className="flex items-start">
              <span className="inline-block w-6 text-gold mr-3 font-bold">☕</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 text-gold mr-3 font-bold">☕</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 text-gold mr-3 font-bold">☕</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* Start button */}
        <button
          onClick={onStart}
          className="w-full cozy-button py-4 px-8 rounded-lg text-lg font-semibold"
        >
          Start Game ☕
        </button>
      </div>
    </div>
  );
}
