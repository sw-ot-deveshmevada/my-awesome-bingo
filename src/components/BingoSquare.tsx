import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'coffee-square relative flex items-center justify-center p-3 text-center border-2 transition-all duration-200 select-none min-h-[80px] text-xs leading-tight font-medium text-dark-brown';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'winning'
      : 'marked'
    : 'hover:border-warm-gold cursor-pointer';

  const freeSpaceClasses = square.isFreeSpace 
    ? 'font-serif text-sm font-bold text-warm-brown' 
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto relative z-10">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-2 right-2 text-gold text-lg font-bold z-20 drop-shadow">✓</span>
      )}
    </button>
  );
}
