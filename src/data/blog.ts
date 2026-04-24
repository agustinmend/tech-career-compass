export type Articulo = {
  id: string;
  titulo: string;
  resumen: string;
  categoria: "Inteligencia Artificial" | "Desarrollo de Software" | "Mecatrónica" | "Seguridad" | "IoT";
  autor: string;
  fecha: string;
  lectura: string;
  destacado?: boolean;
};

export const articulos: Articulo[] = [
  {
    id: "futuro-ia-educacion",
    titulo: "El Futuro de la Inteligencia Artificial en la Educación",
    resumen: "Exploramos cómo la IA está transformando la manera en que aprendemos y enseñamos, desde sistemas adaptativos hasta tutores virtuales inteligentes.",
    categoria: "Inteligencia Artificial",
    autor: "Dr. Carlos Mendoza",
    fecha: "19 de marzo de 2026",
    lectura: "8 min de lectura",
    destacado: true,
  },
  { id: "zero-trust", titulo: "Zero Trust: por qué tu empresa lo necesita", resumen: "Una guía pragmática para implementar arquitecturas de seguridad modernas.", categoria: "Seguridad", autor: "Ing. Luis Herrera", fecha: "12 de marzo de 2026", lectura: "6 min" },
  { id: "rag-produccion", titulo: "RAG en producción: lecciones aprendidas", resumen: "Cómo escalar sistemas de Retrieval Augmented Generation sin romper el banco.", categoria: "Inteligencia Artificial", autor: "Ing. Valeria Murillo", fecha: "5 de marzo de 2026", lectura: "10 min" },
  { id: "monorepos", titulo: "Monorepos: cuándo sí y cuándo no", resumen: "Análisis honesto sobre los trade-offs de adoptar un monorepo en tu equipo.", categoria: "Desarrollo de Software", autor: "Ing. Pablo Rivera", fecha: "28 de febrero de 2026", lectura: "7 min" },
  { id: "iot-agro", titulo: "IoT para agricultura de precisión en Bolivia", resumen: "Casos reales de sensores LoRaWAN aplicados al cultivo de soya y quinua.", categoria: "IoT", autor: "Ing. Patricia Vélez", fecha: "20 de febrero de 2026", lectura: "9 min" },
  { id: "robots-colaborativos", titulo: "Robots colaborativos en pymes manufactureras", resumen: "Cómo los cobots están democratizando la automatización industrial.", categoria: "Mecatrónica", autor: "Dra. Beatriz Cossío", fecha: "10 de febrero de 2026", lectura: "6 min" },
  { id: "owasp-2025", titulo: "OWASP Top 10 2025: lo que cambió", resumen: "Las nuevas amenazas que dominan el panorama de seguridad de aplicaciones.", categoria: "Seguridad", autor: "Ing. Luis Herrera", fecha: "1 de febrero de 2026", lectura: "5 min" },
];