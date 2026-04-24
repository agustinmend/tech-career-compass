import { Link } from "react-router-dom";
import { ArrowRight, Calendar, BookOpen, Users, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { carreras } from "@/data/carreras";
import { eventos } from "@/data/eventos";
import { articulos } from "@/data/blog";
import { SectionHeading } from "@/components/layout/SectionHeading";
import heroMain from "@/assets/hero-main.jpg";

const Home = () => {
  const destacado = articulos.find(a => a.destacado) ?? articulos[0];
  const eventosHome = eventos.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-soft border-b border-border">
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-slow">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-glow bg-primary-glow/10 px-3 py-1.5 rounded-full">
              <Sparkles className="size-3.5" /> Carreras Tecnológicas 2026
            </span>
            <h1 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy">
              Forma parte de la próxima <span className="text-gradient-brand">generación tech</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
              Tres carreras de vanguardia, currícula alineada a la industria global y una comunidad que empuja el futuro de Latinoamérica.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-navy hover:bg-brand-navy/90 text-primary-foreground rounded-xl">
                <Link to="#carreras">Explorar carreras <ArrowRight className="size-4 ml-1" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <Link to="/blog">Ver noticias</Link>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[{ k: "3", v: "Carreras" }, { k: "+50", v: "Docentes" }, { k: "+1k", v: "Estudiantes" }].map(s => (
                <div key={s.v}>
                  <dt className="font-heading text-3xl font-bold text-brand-navy">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground uppercase tracking-wider">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg animate-scale-in">
            <img src={heroMain} alt="Estudiantes de TechHub colaborando" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Carreras */}
      <section id="carreras" className="container-page py-20">
        <SectionHeading
          eyebrow="Programas"
          title="Nuestras Carreras"
          description="Tres caminos para construir el futuro digital. Elige el que conecte con tu propósito."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {carreras.map((c, idx) => (
            <article
              key={c.slug}
              className="group surface-card overflow-hidden flex flex-col hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={c.imagen} alt={c.nombre} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-xl font-bold">{c.nombre}</h3>
                <p className="text-sm text-muted-foreground mt-2 flex-1">{c.tagline}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                  <span>{c.duracion}</span>
                  <span>{c.modalidad}</span>
                </div>
                <Button asChild variant="ghost" className="mt-4 justify-between text-primary hover:text-primary hover:bg-accent">
                  <Link to={`/carrera/${c.slug}`}>Ver malla y perfil <ArrowRight className="size-4" /></Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Actividades y Eventos */}
      <section className="bg-surface py-20">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4 mb-10">
            <SectionHeading
              icon={Calendar}
              eyebrow="Comunidad"
              title="Actividades y Eventos"
              description="Conferencias, hackathons y meetups con la industria."
              centered={false}
            />
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link to="/eventos">Ver más <ChevronRight className="size-4" /></Link>
            </Button>
          </div>
          <div className="space-y-4">
            {eventosHome.map(e => (
              <Link
                to="/eventos"
                key={e.id}
                className="block surface-card p-5 md:p-6 grid md:grid-cols-[180px_1fr_auto] gap-5 items-center hover:shadow-lg transition-shadow"
              >
                <div className="rounded-xl bg-gradient-dark text-primary-foreground p-4 aspect-[4/3] md:aspect-auto md:h-32 flex flex-col justify-between">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary-foreground/15 self-start">{e.tipo}</span>
                  <div>
                    <p className="text-sm font-semibold">{e.ponente.nombre}</p>
                    <p className="text-xs text-primary-foreground/70">{e.ponente.rol}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold">{e.titulo}</h3>
                  <div className="text-xs text-muted-foreground mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    <span>📅 {e.fecha}</span><span>🕐 {e.hora}</span><span>📍 {e.ubicacion}</span>
                  </div>
                  <p className="text-sm mt-2 text-foreground/80 line-clamp-2">{e.descripcion}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{e.inscritos}/{e.cupos} inscritos</p>
                  <p className="text-xs font-medium text-success mt-1">{e.cupos - e.inscritos} cupos</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog destacado */}
      <section className="container-page py-20">
        <div className="flex items-end justify-between gap-4 mb-10">
          <SectionHeading
            icon={BookOpen}
            eyebrow="Blog"
            title="Lo último en tech"
            centered={false}
          />
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link to="/blog">Ir al blog <ChevronRight className="size-4" /></Link>
          </Button>
        </div>
        <Link to="/blog" className="block rounded-3xl bg-gradient-dark text-primary-foreground p-8 md:p-12 hover:shadow-glow transition-shadow">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary-glow text-primary-foreground font-medium">Destacado</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary-foreground/15">{destacado.categoria}</span>
            </div>
            <h3 className="font-heading text-2xl md:text-4xl font-bold">{destacado.titulo}</h3>
            <p className="mt-4 text-primary-foreground/80">{destacado.resumen}</p>
            <div className="mt-6 text-xs text-primary-foreground/60 flex flex-wrap gap-x-4 gap-y-1">
              <span>👤 {destacado.autor}</span><span>📅 {destacado.fecha}</span><span>⏱ {destacado.lectura}</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Vida Estudiantil */}
      <section className="container-page py-20">
        <div className="flex items-end justify-between gap-4 mb-10">
          <SectionHeading
            icon={Users}
            eyebrow="Comunidad"
            title="Vida Estudiantil"
            centered={false}
          />
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link to="/vida-estudiantil">Ver más <ChevronRight className="size-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 [grid-auto-rows:140px]">
          <div className="row-span-2 rounded-3xl bg-gradient-dark relative overflow-hidden p-6 flex items-end text-primary-foreground">
            <div>
              <p className="text-xs uppercase tracking-wider opacity-70">Hackathon</p>
              <p className="font-heading font-bold text-lg">48h de innovación</p>
            </div>
          </div>
          <div className="rounded-3xl bg-brand-deep p-6 text-primary-foreground flex items-end">
            <p className="font-heading font-semibold">Sociedades Científicas</p>
          </div>
          <div className="rounded-3xl bg-primary-glow p-6 text-primary-foreground flex items-end">
            <p className="font-heading font-semibold">Meetups</p>
          </div>
          <div className="row-span-2 rounded-3xl bg-brand-navy p-6 text-primary-foreground flex items-end">
            <p className="font-heading font-semibold text-lg">Festival Tech anual</p>
          </div>
          <div className="col-span-2 rounded-3xl bg-accent p-6 text-primary flex items-end">
            <p className="font-heading font-semibold">Talleres y workshops cada semana</p>
          </div>
        </div>
      </section>

      {/* Calendario */}
      <section className="container-page pb-20">
        <SectionHeading title="Calendario Académico" eyebrow="Agenda" />
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="surface-card p-6 mx-auto">
            <CalendarUI mode="single" className="rounded-md" />
          </div>
          <div className="space-y-3">
            {[
              { f: "10 ABR", t: "Inicio del semestre I-2026" },
              { f: "15 MAY", t: "Examen parcial" },
              { f: "9 JUN", t: "Hackathon Impacto Social" },
              { f: "30 JUL", t: "Cierre de semestre" },
            ].map(d => (
              <div key={d.t} className="surface-card p-4 flex items-center gap-4">
                <div className="size-14 rounded-xl bg-gradient-brand text-primary-foreground grid place-items-center text-xs font-heading font-bold leading-tight text-center px-1">
                  {d.f}
                </div>
                <p className="font-medium">{d.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;