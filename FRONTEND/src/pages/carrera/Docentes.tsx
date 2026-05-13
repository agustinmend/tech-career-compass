import { Users, BookOpen, Mail, Linkedin } from "lucide-react";
import { useCarrera } from "./CarreraLayout";

const Docentes = () => {
  const carrera = useCarrera();
  return (
    <div className="surface-card p-6 md:p-8">
      <h2 className="font-heading text-2xl font-bold flex items-center gap-2 mb-6"><Users className="size-5 text-primary-glow" /> Docentes</h2>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {carrera.docentes.map(d => (
          <div key={d.iniciales} className="rounded-2xl border border-border overflow-hidden flex flex-col bg-card hover:shadow-lg transition-shadow">
            <div className="bg-brand-navy text-primary-foreground p-5 text-center">
              <div className="size-16 mx-auto rounded-full bg-primary-foreground/20 grid place-items-center font-heading font-bold text-lg">{d.iniciales}</div>
              <p className="font-heading font-bold mt-3">{d.nombre}</p>
              <p className="text-xs text-primary-foreground/70">{d.titulo}</p>
            </div>
            <div className="p-5 flex-1 flex flex-col gap-3">
              <span className="self-start text-xs px-2.5 py-1 rounded-full bg-warning/15 border border-warning/30">{d.rol}</span>
              <p className="text-sm text-muted-foreground">{d.bio}</p>
              <div className="pt-2">
                <p className="text-xs font-semibold mb-2 flex items-center gap-1.5 text-primary"><BookOpen className="size-3.5" /> Materias</p>
                <div className="flex flex-wrap gap-1.5">{d.materias.map(m => <span key={m} className="text-xs px-2 py-1 rounded-md bg-accent text-accent-foreground">{m}</span>)}</div>
              </div>
              <div className="mt-auto flex gap-2 pt-3">
                <a href={d.linkedin} className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-glow text-primary-foreground rounded-lg py-2 text-sm font-medium hover:opacity-90"><Linkedin className="size-4" /> LinkedIn</a>
                <a href={`mailto:${d.email}`} className="size-9 grid place-items-center rounded-lg border border-border hover:bg-accent"><Mail className="size-4" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Docentes;
