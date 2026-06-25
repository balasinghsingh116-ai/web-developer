export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6 text-center flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#hero" className="text-xl font-display font-bold tracking-tighter">
          Bala<span className="text-primary">Singh.</span>
        </a>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Bala Singh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
