import { useState } from "react";
import { BookOpen, Clock, Users, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useCarrera } from "./CarreraLayout";
import type { Materia } from "@/data/carreras";

const Materias = () => {
  const carrera = useCarrera();
  const [selected, setSelected] = useState<Materia | null>(null);
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {carrera.semestres.map(s => (
          <div key={s.numero} className="surface-card p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-xl bg-gradient-brand text-primary-foreground grid place-items-center font-heading font-bold">{s.numero}</div>
              <div>
                <h3 className="font-heading font-bold">Semestre {s.numero}</h3>
                <p className="text-xs text-muted-foreground">{s.materias.length} materias</p>
              </div>
            </div>
            <ul className="space-y-1.5">
              {s.materias.map(m => (
                <li key={m.nombre}>
                  <button onClick={() => setSelected(m)} className="w-full text-left text-sm flex items-start gap-2 px-2 py-1.5 rounded-lg text-primary-glow hover:bg-accent transition-colors">
                    <BookOpen className="size-3.5 mt-0.5 shrink-0" /><span className="truncate">{m.nombre}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Dialog open={!!selected} onOpenChange={o => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selected && (
            <div className="space-y-6">
              <DialogTitle className="font-heading text-2xl font-bold">{selected.nombre}</DialogTitle>
              <div className="grid grid-cols-3 gap-3">
                <div className="surface-card p-4 text-center"><BookOpen className="size-4 mx-auto text-primary-glow" /><p className="text-xs text-muted-foreground mt-1">Créditos</p><p className="font-heading font-bold text-lg">{selected.creditos}</p></div>
                <div className="surface-card p-4 text-center"><Clock className="size-4 mx-auto text-primary-glow" /><p className="text-xs text-muted-foreground mt-1">Horas</p><p className="font-heading font-bold text-lg">6h</p></div>
                <div className="surface-card p-4 text-center"><Users className="size-4 mx-auto text-primary-glow" /><p className="text-xs text-muted-foreground mt-1">Estudiantes</p><p className="font-heading font-bold text-lg">{selected.estudiantes}</p></div>
              </div>
              <div className="surface-card p-5 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading font-semibold mb-2">Descripción</h4>
                  <p className="text-sm text-muted-foreground">{selected.descripcion}</p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-2 text-primary-glow">Prerrequisitos</h4>
                  {selected.prerrequisitos.length ? (
                    <ul className="space-y-1 text-sm">{selected.prerrequisitos.map(p => <li key={p} className="flex gap-2"><span className="size-1.5 rounded-full bg-primary-glow mt-2" />{p}</li>)}</ul>
                  ) : <p className="text-sm text-muted-foreground">Sin prerrequisitos</p>}
                </div>
                <div className="md:col-span-2 flex items-center gap-3 p-3 rounded-xl bg-accent/50">
                  <div className="size-10 rounded-full bg-gradient-brand text-primary-foreground grid place-items-center text-sm font-bold">{selected.docente.iniciales}</div>
                  <div><p className="font-medium text-sm">{selected.docente.nombre}</p><p className="text-xs text-muted-foreground">{selected.docente.titulo}</p></div>
                </div>
              </div>
              <div className="surface-card p-5">
                <h4 className="font-heading font-semibold flex items-center gap-2 mb-4"><Calendar className="size-4 text-primary-glow" /> Contenido por Semanas</h4>
                <ol className="space-y-2">
                  {selected.contenido.map(c => (
                    <li key={c.semana} className="flex gap-3 p-3 rounded-xl bg-accent/40 border-l-4 border-primary-glow">
                      <div className="size-8 shrink-0 rounded-lg bg-gradient-brand text-primary-foreground grid place-items-center text-xs font-bold">{c.semana}</div>
                      <div><p className="text-xs text-muted-foreground">Semana {c.semana}</p><p className="text-sm font-medium">{c.titulo}</p></div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Materias;
