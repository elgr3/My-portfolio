// Valeurs pseudo-aléatoires déterministes : identiques au build et dans le navigateur.
function rand(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const STREAMS = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${(rand(i + 1) * 100).toFixed(2)}%`,
  duration: `${(15 + rand(i + 21) * 20).toFixed(1)}s`,
  delay: `${(-rand(i + 41) * 30).toFixed(1)}s`,
  opacity: Number((0.03 + rand(i + 61) * 0.07).toFixed(3)),
  width: `${(1 + rand(i + 81) * 1.5).toFixed(1)}px`,
}));

export function Background() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 data-stream-bg" />
      {STREAMS.map((s) => (
        <div
          key={s.id}
          className="data-stream absolute top-0 h-[25vh] bg-linear-to-b from-transparent via-mint/20 to-transparent"
          style={{
            left: s.left,
            width: s.width,
            opacity: s.opacity,
            animationDuration: s.duration,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
