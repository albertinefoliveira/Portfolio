export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[var(--container-max)] flex-1 flex-col justify-between px-[var(--gutter)] py-10">
      <p className="font-mono text-base text-fg">
        AF<span className="text-accent">.</span>
      </p>
      <div className="flex items-center gap-2">
        <span aria-hidden className="h-px w-8 bg-accent" />
        <p className="font-mono text-xs uppercase tracking-[0.07em] text-fg-muted">
          New portfolio in progress
        </p>
      </div>
    </main>
  );
}
