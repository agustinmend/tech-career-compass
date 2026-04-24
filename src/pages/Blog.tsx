import { useState } from "react";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { articulos, type Articulo } from "@/data/blog";
import { cn } from "@/lib/utils";

const cats: (Articulo["categoria"] | "Todos")[] = ["Todos","Inteligencia Artificial","Desarrollo de Software","Mecatrónica","Seguridad","IoT"];

const Blog = () => {
  const [f, setF] = useState<typeof cats[number]>("Todos");
  const lista = f === "Todos" ? articulos : articulos.filter(a => a.categoria === f);
  const dest = articulos.find(a => a.destacado) ?? articulos[0];
  const rest = lista.filter(a => a.id !== dest.id);
  return (
    <div className="container-page py-16">
      <div className="text-center max-w-2xl mx-auto">
        <div className="size-12 mx-auto rounded-2xl bg-accent text-primary grid place-items-center mb-3"><BookOpen className="size-6" /></div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-glow">Blog</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3">Blog Tech</h1>
        <p className="text-muted-foreground mt-3">Artículos, noticias y tendencias sobre tecnología e innovación.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {cats.map(c => (
          <button key={c} onClick={() => setF(c)} className={cn("px-4 py-1.5 rounded-full text-sm font-medium border transition-colors", f === c ? "bg-brand-navy text-primary-foreground border-brand-navy" : "border-border hover:bg-accent")}>{c}</button>
        ))}
      </div>
      {f === "Todos" && (
        <article className="mt-10 rounded-3xl bg-gradient-dark text-primary-foreground p-8 md:p-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs px-2.5 py-1 rounded-full bg-primary-glow font-medium">Destacado</span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-primary-foreground/15">{dest.categoria}</span>
          </div>
          <h2 className="font-heading text-2xl md:text-4xl font-bold">{dest.titulo}</h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl">{dest.resumen}</p>
          <div className="mt-6 text-xs text-primary-foreground/60 flex flex-wrap gap-x-4 gap-y-1">
            <span>{dest.autor}</span><span>{dest.fecha}</span><span>{dest.lectura}</span>
          </div>
        </article>
      )}
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map(a => (
          <article key={a.id} className="surface-card overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="aspect-[16/9] bg-gradient-dark relative">
              <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-primary-foreground/90 text-brand-navy font-medium">{a.categoria}</span>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-heading font-bold leading-snug">{a.titulo}</h3>
              <p className="text-sm text-muted-foreground mt-2 flex-1">{a.resumen}</p>
              <div className="text-xs text-muted-foreground mt-4 flex items-center justify-between border-t border-border pt-3">
                <span className="flex items-center gap-1.5"><Calendar className="size-3.5" />{a.fecha}</span>
                <span>{a.lectura}</span>
              </div>
              <button className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-glow transition-colors self-start">Leer más <ArrowRight className="size-4" /></button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
export default Blog;
