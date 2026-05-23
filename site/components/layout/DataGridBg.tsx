export function DataGridBg() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 data-grid-bg pointer-events-none"
      style={{ maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 80%)" }}
    />
  );
}
