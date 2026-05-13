import { NavLink, Outlet, useParams, Navigate } from "react-router-dom";
import { BookOpen, Calendar, UserCircle2, Users, Lightbulb, GraduationCap } from "lucide-react";
import { getCarrera } from "@/data/carreras";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "", label: "General", icon: BookOpen, end: true },
  { to: "materias", label: "Materias", icon: Calendar },
  { to: "perfil", label: "Perfil", icon: UserCircle2 },
  { to: "docentes", label: "Docentes", icon: Users },
  { to: "proyectos", label: "Proyectos", icon: Lightbulb },
  { to: "graduados", label: "Graduados", icon: GraduationCap },
];

const CarreraLayout = () => {
  const { slug } = useParams();
  const carrera = getCarrera(slug ?? "");
  if (!carrera) return <Navigate to="/" replace />;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-soft border-b border-border">
        <div className="container-page py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in-slow">
            <div className="size-14 rounded-2xl bg-gradient-brand grid place-items-center mb-6 shadow-glow">
              <BookOpen className="size-7 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-brand-navy">
              {carrera.nombre}
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">{carrera.tagline}</p>
            <ul className="mt-8 space-y-2 text-sm text-foreground/80">
              {carrera.destacados.map(d => (
                <li key={d} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-primary-glow mt-2 shrink-0" /> {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg animate-scale-in">
            <img src={carrera.imagen} alt={carrera.nombre} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Body with sidebar */}
      <section className="container-page py-10 md:py-14">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav className="surface-card p-2 flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
              {tabs.map(t => (
                <NavLink
                  key={t.label}
                  to={t.to}
                  end={t.end}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap",
                      isActive
                        ? "bg-accent text-primary"
                        : "text-foreground/70 hover:bg-accent/50 hover:text-foreground"
                    )
                  }
                >
                  <t.icon className="size-4 shrink-0" />
                  <span>{t.label}</span>
                </NavLink>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 animate-fade-in">
            <Outlet context={{ carrera }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CarreraLayout;

import { useOutletContext } from "react-router-dom";
import type { Carrera } from "@/data/carreras";
export const useCarrera = () => useOutletContext<{ carrera: Carrera }>().carrera;