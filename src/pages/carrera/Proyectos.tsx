import { Lightbulb } from "lucide-react";
import { useCarrera } from "./CarreraLayout";

const Proyectos = () => {
  const carrera = useCarrera();
  return (
    <div className="surface-card p-6 md:p-8">
      <h2 className="font-heading text-2xl font-bold flex items-center gap-2 mb-6"><Lightbulb className="size-5 text-primary-glow" /> Proyectos Estudiantiles</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {carrera.proyectos.map(p => (
          <article key={p.titulo} className="p-5 rounded-2xl border border-border bg-gradient-card hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-heading font-bold">{p.titulo}</h3>
              <span className="text-xs px-2 py-1 rounded-md bg-accent text-accent-foreground shrink-0">{p.anio}</span>
            </div>
            <p className="text-sm text-muted-foreground">{p.descripcion}</p>
            <p className="text-xs text-muted-foreground mt-3">Por: {p.estudiantes.join(", ")}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {p.tags.map(t => <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-primary-glow/10 text-primary-glow">#{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
export default Proyectos;
