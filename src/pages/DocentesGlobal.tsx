import { Users, Mail, Linkedin } from "lucide-react";
import { carreras } from "@/data/carreras";
import { SectionHeading } from "@/components/layout/SectionHeading";

const DocentesGlobal = () => {
  const todos = carreras.flatMap(c => c.docentes.map(d => ({ ...d, carrera: c.nombreCorto, slug: c.slug })));
  return (
    <div className="container-page py-16 space-y-12">
      <SectionHeading icon={Users} eyebrow="Equipo" title="Nuestros Docentes" description="Profesionales con experiencia industrial y vocación por la enseñanza." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {todos.map(d => (
          <div key={`${d.slug}-${d.iniciales}`} className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-brand-navy text-primary-foreground p-5 text-center">
              <div className="size-16 mx-auto rounded-full bg-primary-foreground/20 grid place-items-center font-heading font-bold">{d.iniciales}</div>
              <p className="mt-3 font-heading font-bold">{d.nombre}</p>
              <p className="text-xs text-primary-foreground/70">{d.titulo}</p>
            </div>
            <div className="p-5">
              <span className="text-xs px-2 py-1 rounded-full bg-accent text-primary">{d.carrera}</span>
              <p className="text-sm text-muted-foreground mt-3">{d.bio}</p>
              <div className="mt-4 flex gap-2">
                <a href={d.linkedin} className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-glow text-primary-foreground rounded-lg py-2 text-sm font-medium"><Linkedin className="size-4" /> LinkedIn</a>
                <a href={`mailto:${d.email}`} className="size-9 grid place-items-center rounded-lg border border-border"><Mail className="size-4" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DocentesGlobal;
