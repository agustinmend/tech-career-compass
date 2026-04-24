import { useCarrera } from "./CarreraLayout";
import { Briefcase, Target, TrendingUp } from "lucide-react";

const Perfil = () => {
  const carrera = useCarrera();
  const competencias = ["Pensamiento crítico y resolución de problemas","Comunicación en equipos multidisciplinarios","Aprendizaje continuo","Ética profesional"];
  const campos = carrera.slug === "software"
    ? ["Desarrollo full-stack","Arquitectura de software","DevOps & Cloud","Product engineering","Consultoría tech","Emprendimiento"]
    : carrera.slug === "ia"
    ? ["ML Engineer","Data Scientist","MLOps","NLP Specialist","Computer Vision","AI Researcher"]
    : ["Automatización industrial","Robótica","IoT Industrial","Industria 4.0","Manufactura aditiva","Diseño electromecánico"];
  return (
    <div className="space-y-6">
      <div className="surface-card p-6 md:p-8">
        <div className="flex items-start gap-3 mb-5">
          <Target className="size-6 text-primary-glow mt-1" />
          <div><h2 className="font-heading text-2xl font-bold">Perfil del Egresado</h2>
          <p className="text-muted-foreground mt-2">Profesional íntegro y crítico, capaz de liderar la transformación tecnológica.</p></div>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {competencias.map(c => (
            <div key={c} className="p-4 rounded-xl bg-accent/50 border border-accent text-sm flex gap-3">
              <TrendingUp className="size-4 text-primary-glow shrink-0 mt-0.5" /><span>{c}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="surface-card p-6 md:p-8">
        <h3 className="font-heading text-xl font-bold flex items-center gap-2 mb-5"><Briefcase className="size-5 text-primary-glow" /> Campo Laboral</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {campos.map(c => <div key={c} className="p-4 rounded-xl bg-gradient-soft text-sm font-medium text-brand-navy">{c}</div>)}
        </div>
      </div>
    </div>
  );
};
export default Perfil;
