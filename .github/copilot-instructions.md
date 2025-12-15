# Copilot Instructions

## Project Overview

**Soc Ops — Social Bingo** is an interactive bingo game designed to help people connect at social events. Players find others who match questions on a 5×5 bingo card and tap squares to mark matches. First to complete 5 in a row wins.

**Tech Stack**: React 19 + TypeScript + Tailwind CSS v4 + Vite

## Development Checklist

- [ ] Install dependencies: `npm install`
- [ ] Lint & format: `npm run lint`
- [ ] Build: `npm run build`
- [ ] Test: `npm run test`
- [ ] Dev server: `npm run dev`

## Design Guide: Cozy Coffee Shop Aesthetic

The app has been redesigned with a **Cozy Coffee Shop** theme that creates a warm, inviting atmosphere for social connection.

### Color Palette

All colors are defined as CSS variables in `src/index.css` under `@theme`:

| Purpose | Color | Hex | Usage |
|---------|-------|-----|-------|
| Dark Brown | `--color-dark-brown` | `#6B4423` | Headlines, text emphasis |
| Brown | `--color-brown` | `#8B4513` | Button backgrounds, accents |
| Warm Brown | `--color-warm-brown` | `#A0522D` | Secondary text, hover states |
| Cream | `--color-cream` | `#FFF8F0` | Primary background, cards |
| Light Cream | `--color-cream-light` | `#FAF6F1` | Subtle variations, depth |
| Gold | `--color-gold` | `#D4AF37` | Borders, marked squares, celebration |
| Warm Gold | `--color-warm-gold` | `#C9A961` | Accents, highlights |

**Palette Philosophy**: Warm, earthy browns evoke coffee, cream and gold suggest luxury and warmth. Together they create an approachable, sophisticated aesthetic.

### Typography

- **Headlines** (`h1-h6`): `Georgia, Garamond, serif` — Serif typefaces convey elegance and warmth, establishing the cozy atmosphere
- **Body Text**: System sans-serif (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`) — Readable, modern, accessible
- **Free Space**: Bold serif text to distinguish it as special

### Visual Elements

**Coffee-Themed Decorations**:
- Coffee cup emoji (☕) used throughout for warmth and thematic consistency
- Sparkle emoji (✨) for celebration and achievement moments
- Checkmarks (✓) for marked squares

**Bingo Squares** (`.coffee-square` class):
- Cream gradient background: `linear-gradient(135deg, #FFFBF7 0%, #FAF6F1 100%)`
- Gold border: `2px solid #D4AF37`
- Subtle radial gradient for depth and dimension
- Smooth transitions on all interactions
- Scale effect on click for tactile feedback

**Marked State** (`.marked` class):
- Warm tan gradient: `linear-gradient(135deg, #F5E6D3 0%, #EDD9C3 100%)`
- Gold glow effect with shimmer animation
- Checkmark indicator in top-right

**Winning State** (`.winning` class):
- Golden gradient: `linear-gradient(135deg, #FFE8A8 0%, #FFD966 100%)`
- Pulse animation (`pulse-gold`) for celebratory effect
- Enhanced glow and shadow

**Cards** (`.cozy-card` class):
- Gradient background mirroring coffee square aesthetic
- Gold border with hover elevation
- Subtle shadow with hover enhancement
- Small upward translate on hover for interactivity

**Buttons** (`.cozy-button` class):
- Warm brown gradient: `linear-gradient(135deg, #8B4513 0%, #A0522D 100%)`
- Cream text for contrast
- Hover state with gradient reversal and elevation
- Active state with reduced shadow for press effect

### Atmospheric Effects

**Background Layer** (`body::before`):
- Radial gradients at corners for subtle depth
- Repeating linear gradient pattern (45°) suggesting texture
- All effects use low opacity (0.01–0.03) for subtlety
- Fixed positioning to remain constant during scroll

**Animations**:
- `shimmer` — Subtle light movement on marked squares
- `pulse-gold` — celebratory pulse on winning squares (0.6s ease-out)
- `bounce` — Modal entrance animation (0.6s)
- All use ease timing for natural, organic feel

### Component-Specific Design

**StartScreen**:
- Large serif title "Soc Ops" in dark brown
- Subtitle "Social Bingo Café" in warm brown
- Tagline with coffee emoji and warm gold accent
- Instructions in cozy card with bullet points using coffee emoji
- Warm brown/gold button for "Start Game"

**GameScreen**:
- Header with back button, title "Soc Ops Café", and decorative coffee emoji
- Instructions text in warm brown
- 5×5 grid of coffee squares with proper spacing
- BINGO indicator when victory condition is met

**BingoModal**:
- Centered card with coffee and sparkle emojis
- "BINGO!" heading in large serif
- Celebratory message with warm-colored text
- Decorative emoji line separator
- Brown "Keep Playing" button with coffee emoji

### Best Practices

1. **Consistency**: Always use CSS variables from `@theme` instead of hardcoding hex values
2. **Gradients**: Use subtle 135° linear gradients to add dimension without noise
3. **Shadows**: Prefer soft shadows (`rgba(107, 68, 35, 0.08–0.12)`) to maintain warmth
4. **Interactions**: Scale, translate, and glow effects over opacity changes for better feel
5. **Typography**: Serif for headings (Georgian, elegant), sans-serif for body (readable, modern)
6. **Animations**: Keep durations short (0.2–0.6s) and use ease functions for organic motion

### Future Design Considerations

- Consider adding subtle coffee-stain patterns using SVG or canvas for advanced atmosphere
- Explore using actual web fonts (Georgia, Playfair) for maximum polish
- Potential for coffee-themed questions to deepen the narrative
- Dark mode variant could use deeper browns with candlelight-inspired highlights

---

## Architecture Notes

### Component Structure

```
App.tsx (entry point, state via useBingoGame)
├── StartScreen (landing page)
└── GameScreen (main game container)
    ├── BingoBoard (5×5 grid)
    │   └── BingoSquare ×25
    └── BingoModal (celebration overlay)
```

### State Management

Uses `useBingoGame` hook for:
- Game state (running/won)
- Question shuffling
- Mark tracking
- Bingo detection (5 in a row)

### Styling Approach

- **Tailwind v4** with `@theme` CSS variables
- **Global CSS** in `src/index.css` for theme and component classes
- **Inline styles** for dynamic values only
- Conditional class strings in components using template literals
