export type Evento = {
  id: string;
  tipo: "Conferencia" | "Meetup" | "Hackathon" | "Workshop";
  titulo: string;
  descripcion: string;
  ponente: { nombre: string; rol: string };
  fecha: string;
  hora: string;
  ubicacion: string;
  inscritos: number;
  cupos: number;
};

export const eventos: Evento[] = [
  {
    id: "tech-summit-2026",
    tipo: "Conferencia",
    titulo: "Tech Summit 2026: El Futuro de la IA",
    descripcion: "Únete a nosotros en este evento histórico donde exploraremos las últimas tendencias en IA y su impacto en la sociedad.",
    ponente: { nombre: "Dr. Carlos Mendoza", rol: "Director de Ingeniería en TechCorp" },
    fecha: "14 de abril de 2026",
    hora: "14:00 — 18:00",
    ubicacion: "Auditorio Principal · Campus Universitario",
    inscritos: 128,
    cupos: 150,
  },
  {
    id: "robotics-meetup",
    tipo: "Meetup",
    titulo: "Robotics Meetup: Robots colaborativos",
    descripcion: "Una tarde de demos en vivo, networking y café con la comunidad de robótica.",
    ponente: { nombre: "Ing. Roberto Fernández", rol: "Especialista en Robótica" },
    fecha: "27 de abril de 2026",
    hora: "18:30 — 21:00",
    ubicacion: "Lab Mecatrónica · Edificio Tech",
    inscritos: 42,
    cupos: 60,
  },
  {
    id: "hackathon-impacto",
    tipo: "Hackathon",
    titulo: "Hackathon Impacto Social 48h",
    descripcion: "Equipos multidisciplinarios resuelven retos reales de organizaciones sociales en 48 horas.",
    ponente: { nombre: "Equipos multidisciplinarios", rol: "Mentores de la industria" },
    fecha: "9–11 de mayo de 2026",
    hora: "Inicia 18:00",
    ubicacion: "TechHub Innovation Center",
    inscritos: 84,
    cupos: 120,
  },
  {
    id: "workshop-mlops",
    tipo: "Workshop",
    titulo: "Workshop MLOps en producción",
    descripcion: "Aprende a desplegar modelos de ML en producción con CI/CD, monitoreo y observabilidad.",
    ponente: { nombre: "Ing. Valeria Murillo", rol: "MLOps Engineer · TechHub" },
    fecha: "23 de mayo de 2026",
    hora: "09:00 — 13:00",
    ubicacion: "Lab IA · Edificio Tech",
    inscritos: 30,
    cupos: 40,
  },
];