import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-mono mb-4">404</h1>
      <p className="text-[var(--color-text-muted)] mb-8">Project not found.</p>
      <Link href="/" className="text-[var(--color-accent)] hover:underline">
        ← Back home
      </Link>
    </main>
  );
}
