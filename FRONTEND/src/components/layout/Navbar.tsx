import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { carreras } from "@/data/carreras";
import { cn } from "@/lib/utils";

const baseLinks = [
  { label: "Inicio", to: "/" },
  { label: "Eventos", to: "/eventos" },
  { label: "Vida Estudiantil", to: "/vida-estudiantil" },
  { label: "Docentes", to: "/docentes" },
  { label: "Blog", to: "/blog" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [carrerasOpen, setCarrerasOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-9 rounded-xl bg-gradient-brand grid place-items-center text-primary-foreground font-heading font-bold shadow-glow">
            T
          </div>
          <span className="font-heading font-bold text-lg tracking-tight">TechHub</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {baseLinks.slice(0, 1).map(l => (
            <NavItem key={l.to} to={l.to} active={isActive(l.to)}>{l.label}</NavItem>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setCarrerasOpen(true)}
            onMouseLeave={() => setCarrerasOpen(false)}
          >
            <button
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-1 transition-colors",
                location.pathname.startsWith("/carrera") ? "text-primary" : "text-foreground/70 hover:text-primary"
              )}
            >
              Carreras <ChevronDown className="size-3.5" />
            </button>
            {carrerasOpen && (
              <div className="absolute top-full left-0 pt-2 w-72 animate-fade-in">
                <div className="surface-card p-2">
                  {carreras.map(c => (
                    <Link
                      key={c.slug}
                      to={`/carrera/${c.slug}`}
                      className="block px-3 py-2.5 rounded-lg hover:bg-accent transition-colors"
                    >
                      <div className="font-medium text-sm">{c.nombre}</div>
                      <div className="text-xs text-muted-foreground">{c.duracion}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {baseLinks.slice(1).map(l => (
            <NavItem key={l.to} to={l.to} active={isActive(l.to)}>{l.label}</NavItem>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Buscar">
            <Search className="size-4" />
          </Button>
          <Link to="/auth" className="text-sm text-foreground/70 hover:text-primary px-3">Register</Link>
          <Button asChild size="sm" className="bg-brand-navy hover:bg-brand-navy/90 text-primary-foreground rounded-lg">
            <Link to="/auth">Log In</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-page py-4 space-y-1">
            {baseLinks.slice(0, 1).map(l => (
              <MobileLink key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</MobileLink>
            ))}
            <div className="px-3 py-2 text-xs uppercase tracking-wider text-muted-foreground">Carreras</div>
            {carreras.map(c => (
              <MobileLink key={c.slug} to={`/carrera/${c.slug}`} onClick={() => setOpen(false)}>{c.nombre}</MobileLink>
            ))}
            {baseLinks.slice(1).map(l => (
              <MobileLink key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</MobileLink>
            ))}
            <div className="pt-3 flex gap-2">
              <Button asChild variant="outline" className="flex-1"><Link to="/auth">Register</Link></Button>
              <Button asChild className="flex-1 bg-brand-navy text-primary-foreground"><Link to="/auth">Log In</Link></Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={cn(
      "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
      active ? "text-primary" : "text-foreground/70 hover:text-primary"
    )}
  >
    {children}
  </Link>
);

const MobileLink = ({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) => (
  <Link to={to} onClick={onClick} className="block px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent">
    {children}
  </Link>
);