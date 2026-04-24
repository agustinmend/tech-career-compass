import { GraduationCap, Briefcase, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCarrera } from "./CarreraLayout";

const Graduados = () => {
  const carrera = useCarrera();
  return (
    <div className="space-y-6">
      <div className="surface-card p-6 md:p-8">
        <h2 className="font-heading text-2xl font-bold flex items-center gap-2 mb-6"><GraduationCap className="size-5 text-primary-glow" /> Alumni</h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {carrera.graduados.map(g => (
            <div key={g.nombre} className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-3 hover:shadow-lg transition-shadow">
              <div><p className="font-heading font-bold">{g.nombre}</p><p className="text-xs text-muted-foreground">Promoción {g.promocion}</p></div>
              <div className="flex items-start gap-2 text-sm">
                <Briefcase className="size-4 text-primary-glow mt-0.5 shrink-0" />
                <div><p className="font-medium">{g.empresa}</p><p className="text-xs text-muted-foreground">{g.cargo}</p></div>
              </div>
              <div className="mt-auto flex gap-2 pt-2">
                <a href={g.linkedin} className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-glow text-primary-foreground rounded-lg py-2 text-sm font-medium"><Linkedin className="size-4" /> LinkedIn</a>
                <a href={`mailto:${g.email}`} className="size-9 grid place-items-center rounded-lg border border-border"><Mail className="size-4" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-3xl bg-brand-navy text-primary-foreground p-8 md:p-10 text-center">
        <h3 className="font-heading text-2xl md:text-3xl font-bold">¿Eres Alumni?</h3>
        <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">Comparte tu historia de éxito y mantente conectado con la comunidad TechHub.</p>
        <Button className="mt-6 bg-primary-glow hover:bg-primary-glow/90 text-primary-foreground rounded-xl px-6">Únete a la Red de Alumni</Button>
      </div>
    </div>
  );
};
export default Graduados;
