import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { eventos } from "@/data/eventos";
import { SectionHeading } from "@/components/layout/SectionHeading";

const tipoColor: Record<string, string> = {
  Conferencia: "bg-primary-glow text-primary-foreground",
  Meetup: "bg-success text-success-foreground",
  Hackathon: "bg-warning text-warning-foreground",
  Workshop: "bg-brand-deep text-primary-foreground",
};

const Eventos = () => {
  const [exp, setExp] = useState<string | null>(null);
  return (
    <div className="container-page py-16">
      <SectionHeading icon={Calendar} eyebrow="Comunidad" title="Eventos y Actividades" description="Participa en conferencias, workshops y meetups." />
      <div className="mt-12 space-y-5">
        {eventos.map(e => (
          <article key={e.id} className="surface-card overflow-hidden grid md:grid-cols-[220px_1fr]">
            <div className="bg-gradient-dark text-primary-foreground p-5 flex flex-col justify-between min-h-40">
              <span className={`self-start text-xs px-2.5 py-1 rounded-full font-medium ${tipoColor[e.tipo]}`}>{e.tipo}</span>
              <div><p className="font-semibold">{e.ponente.nombre}</p><p className="text-xs text-primary-foreground/70">{e.ponente.rol}</p></div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold">{e.titulo}</h3>
              <div className="mt-3 grid sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Calendar className="size-4 text-primary-glow" />{e.fecha}</span>
                <span className="flex items-center gap-2"><Clock className="size-4 text-primary-glow" />{e.hora}</span>
                <span className="flex items-center gap-2"><MapPin className="size-4 text-primary-glow" />{e.ubicacion}</span>
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground"><Users className="size-4" />{e.inscritos}/{e.cupos} inscritos</span>
                <span className="text-success font-medium">{e.cupos - e.inscritos} cupos disponibles</span>
              </div>
              {exp === e.id && <p className="mt-4 text-sm text-foreground/80 animate-fade-in">{e.descripcion}</p>}
              <div className="mt-5 flex gap-3">
                <Button variant="outline" onClick={() => setExp(exp === e.id ? null : e.id)}>{exp === e.id ? "Ocultar" : "Ver detalles"}</Button>
                <Button className="bg-primary-glow text-primary-foreground hover:bg-primary-glow/90">Inscribirse <ExternalLink className="size-4 ml-1" /></Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
export default Eventos;
