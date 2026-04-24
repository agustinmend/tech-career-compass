import { BookOpen, Clock, Layers } from "lucide-react";
import { useCarrera } from "./CarreraLayout";

const General = () => {
  const carrera = useCarrera();
  return (
    <div className="surface-card p-6 md:p-8 space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold flex items-center gap-2 text-primary">
          <BookOpen className="size-5" /> Información General
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">{carrera.descripcion}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-accent/60 border border-accent">
          <div className="flex items-center gap-2 text-primary font-heading font-semibold">
            <Clock className="size-4" /> Duración
          </div>
          <p className="mt-2 text-2xl font-heading font-bold text-brand-navy">{carrera.duracion}</p>
        </div>
        <div className="p-5 rounded-2xl bg-success/10 border border-success/20">
          <div className="flex items-center gap-2 text-success font-heading font-semibold">
            <Layers className="size-4" /> Modalidad
          </div>
          <p className="mt-2 text-2xl font-heading font-bold text-brand-navy">{carrera.modalidad}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
        <div className="p-5 rounded-2xl bg-surface">
          <h3 className="font-heading font-semibold mb-3">Requisitos de Admisión</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            {["Examen de admisión aprobado", "Certificado de bachillerato", "Entrevista personal", "Conocimientos básicos de matemáticas"].map(r => (
              <li key={r} className="flex items-start gap-2"><span className="size-1.5 rounded-full bg-primary-glow mt-2 shrink-0" /> {r}</li>
            ))}
          </ul>
        </div>
        <div className="p-5 rounded-2xl bg-surface">
          <h3 className="font-heading font-semibold mb-3">Modalidades de Titulación</h3>
          <ul className="space-y-2 text-sm text-foreground/80">
            {["Proyecto de grado", "Trabajo dirigido", "Tesis de investigación", "Excelencia académica"].map(r => (
              <li key={r} className="flex items-start gap-2"><span className="size-1.5 rounded-full bg-primary-glow mt-2 shrink-0" /> {r}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default General;