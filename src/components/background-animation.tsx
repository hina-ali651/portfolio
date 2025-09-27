export function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-lighten filter blur-3xl opacity-70 animate-blob-fast-blink"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/50 rounded-full mix-blend-lighten filter blur-3xl opacity-70 animate-blob-fast-blink-delay-1"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/15 rounded-full mix-blend-lighten filter blur-3xl opacity-70 animate-blob-fast-blink-delay-2"></div>
    </div>
  );
}
