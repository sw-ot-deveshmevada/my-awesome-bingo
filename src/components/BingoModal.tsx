interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="cozy-card max-w-xs w-full text-center shadow-2xl p-8 animate-[bounce_0.6s_ease-out]">
        <div className="text-6xl mb-6 animate-pulse">☕✨</div>
        <h2 className="font-serif text-4xl text-dark-brown mb-3 font-bold">BINGO!</h2>
        <p className="text-warm-brown text-lg mb-2 font-medium">You completed a golden line!</p>
        <p className="text-warm-gold text-sm mb-8">You earned a cozy moment of victory ☕</p>
        
        {/* Decorative coffee elements */}
        <div className="flex justify-center gap-2 mb-8">
          <span className="text-2xl">☕</span>
          <span className="text-2xl">✨</span>
          <span className="text-2xl">☕</span>
        </div>

        <button
          onClick={onDismiss}
          className="w-full cozy-button py-3 px-6 rounded-lg font-semibold text-base"
        >
          Keep Playing ☕
        </button>
      </div>
    </div>
  );
}
