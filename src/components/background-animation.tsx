export function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-lighten filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-lighten filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/5 rounded-full mix-blend-lighten filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  );
}
