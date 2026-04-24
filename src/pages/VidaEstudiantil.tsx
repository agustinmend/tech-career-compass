import { Trophy, Users, Sparkles, Music, Code2, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";

const items = [
  { icon: Code2, nombre: "Sociedad de Software", desc: "Hackathons, code reviews y proyectos open source." },
  { icon: Sparkles, nombre: "AI Society", desc: "Lecturas y workshops de ML aplicado." },
  { icon: Rocket, nombre: "Robotics Club", desc: "Construye robots y compite a nivel nacional." },
  { icon: Users, nombre: "Women in Tech", desc: "Comunidad de mujeres en tecnología." },
  { icon: Trophy, nombre: "Competencias", desc: "ICPC, CTFs, robótica y olimpiadas." },
  { icon: Music, nombre: "Festival Tech", desc: "Música, arte digital y demos cada semestre." },
];

const VidaEstudiantil = () => (
  <div className="container-page py-16 space-y-16">
    <SectionHeading icon={Users} eyebrow="Comunidad" title="Vida Estudiantil" description="Más allá del aula: comunidad, deporte, cultura y proyectos." />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((s, i) => (
        <div key={s.nombre} className="surface-card p-6 hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
          <div className="size-12 rounded-2xl bg-gradient-brand text-primary-foreground grid place-items-center shadow-glow"><s.icon className="size-5" /></div>
          <h3 className="mt-4 font-heading font-bold text-lg">{s.nombre}</h3>
          <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
        </div>
      ))}
    </div>
    <div className="rounded-3xl bg-gradient-dark text-primary-foreground p-10 md:p-14 text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold">Sé parte de la comunidad TechHub</h2>
      <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">Inscríbete a sociedades, asiste a eventos y construye junto a personas brillantes.</p>
    </div>
  </div>
);
export default VidaEstudiantil;
