import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-gradient-to-b from-cream via-cream-light to-cream">
      {/* Atmospheric header */}
      <header className="bg-gradient-to-r from-brown to-warm-brown text-cream shadow-lg relative overflow-hidden">
        {/* Coffee stain decorative element */}
        <div className="absolute inset-0 opacity-10 bg-radial-gradient from-dark-brown to-transparent" />
        
        <div className="flex items-center justify-between p-4 relative z-10">
          <button
            onClick={onReset}
            className="text-cream hover:bg-warm-brown transition-colors px-4 py-2 rounded-lg font-semibold text-sm"
          >
            ← Back
          </button>
          <h1 className="font-serif text-2xl text-cream font-bold">Soc Ops Café</h1>
          <div className="w-20 text-right">
            <span className="text-2xl">☕</span>
          </div>
        </div>
      </header>

      {/* Instructions */}
      <p className="text-center text-warm-brown text-sm py-3 px-4 font-medium">
        Find & tap squares when you find someone who matches ☕
      </p>

      {/* Bingo celebration banner */}
      {hasBingo && (
        <div className="bg-gradient-to-r from-warm-gold via-gold to-warm-gold text-dark-brown text-center py-3 font-serif font-bold text-lg shadow-md animate-pulse">
          ✨ BINGO! Golden match! ✨
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
