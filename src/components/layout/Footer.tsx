import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { carreras } from "@/data/carreras";

export const Footer = () => (
  <footer className="bg-brand-navy text-primary-foreground mt-24">
    <div className="container-page py-16 grid gap-10 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="size-9 rounded-xl bg-gradient-brand grid place-items-center font-heading font-bold">T</div>
          <span className="font-heading font-bold text-lg">TechHub</span>
        </div>
        <p className="text-sm text-primary-foreground/70 leading-relaxed">
          Carreras tecnológicas de vanguardia para formar a los profesionales que transformarán Latinoamérica.
        </p>
      </div>
      <Col title="Carreras">
        {carreras.map(c => <Link key={c.slug} to={`/carrera/${c.slug}`} className="hover:text-primary-glow">{c.nombre}</Link>)}
      </Col>
      <Col title="Comunidad">
        <Link to="/eventos" className="hover:text-primary-glow">Eventos</Link>
        <Link to="/blog" className="hover:text-primary-glow">Blog</Link>
        <Link to="/vida-estudiantil" className="hover:text-primary-glow">Vida Estudiantil</Link>
        <Link to="/docentes" className="hover:text-primary-glow">Docentes</Link>
      </Col>
      <Col title="Contacto">
        <span className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 shrink-0" /> Campus Universitario</span>
        <span className="flex items-center gap-2"><Phone className="size-4" /> +591 (0) 000-0000</span>
        <span className="flex items-center gap-2"><Mail className="size-4" /> info@techhub.edu</span>
        <div className="pt-2 flex gap-3">
          {["a","b","c"].map(s => <a key={s} href="#" className="size-9 grid place-items-center rounded-lg bg-primary-foreground/10 hover:bg-primary-glow/20"><Instagram className="size-4" /></a>)}
        </div>
      </Col>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container-page py-5 text-xs text-primary-foreground/60 text-center">© 2026 TechHub · Carreras Tecnológicas.</div>
    </div>
  </footer>
);

const Col = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="font-heading font-semibold mb-4">{title}</h3>
    <div className="flex flex-col gap-2.5 text-sm text-primary-foreground/70">{children}</div>
  </div>
);