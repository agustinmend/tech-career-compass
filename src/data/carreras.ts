import heroSoftware from "@/assets/hero-software.jpg";
import heroAi from "@/assets/hero-ai.jpg";
import heroMecatronica from "@/assets/hero-mecatronica.jpg";

export type Materia = {
  nombre: string;
  creditos: number;
  estudiantes: number;
  descripcion: string;
  prerrequisitos: string[];
  docente: { nombre: string; titulo: string; iniciales: string };
  contenido: { semana: number; titulo: string }[];
};

export type Semestre = {
  numero: number;
  materias: Materia[];
};

export type Docente = {
  iniciales: string;
  nombre: string;
  titulo: string;
  rol: string;
  bio: string;
  materias: string[];
  linkedin: string;
  email: string;
};

export type Proyecto = {
  titulo: string;
  descripcion: string;
  estudiantes: string[];
  tags: string[];
  anio: number;
};

export type Graduado = {
  iniciales: string;
  nombre: string;
  promocion: string;
  empresa: string;
  cargo: string;
  linkedin: string;
  email: string;
};

export type Carrera = {
  slug: string;
  nombre: string;
  nombreCorto: string;
  tagline: string;
  descripcion: string;
  duracion: string;
  modalidad: string;
  imagen: string;
  destacados: string[];
  semestres: Semestre[];
  docentes: Docente[];
  proyectos: Proyecto[];
  graduados: Graduado[];
};

const buildContenido = (titulos: string[]) =>
  titulos.map((t, i) => ({ semana: i + 1, titulo: t }));

const materiasSoftware: Semestre[] = [
  {
    numero: 1,
    materias: [
      {
        nombre: "Introducción a la Programación",
        creditos: 6,
        estudiantes: 42,
        descripcion: "Fundamentos de programación estructurada con Python: variables, control de flujo, funciones y estructuras de datos básicas.",
        prerrequisitos: [],
        docente: { nombre: "Ing. María Vargas", titulo: "MSc. en Computación", iniciales: "MV" },
        contenido: buildContenido(["Pensamiento computacional", "Variables y tipos de datos", "Estructuras de control", "Funciones y modularidad"]),
      },
      {
        nombre: "Cálculo I",
        creditos: 5,
        estudiantes: 48,
        descripcion: "Cálculo diferencial de una variable, límites, derivadas y aplicaciones.",
        prerrequisitos: [],
        docente: { nombre: "Dr. Luis Mendoza", titulo: "PhD en Matemáticas", iniciales: "LM" },
        contenido: buildContenido(["Funciones y límites", "Derivadas", "Aplicaciones de derivadas", "Optimización"]),
      },
      {
        nombre: "Álgebra Lineal",
        creditos: 4,
        estudiantes: 40,
        descripcion: "Vectores, matrices, sistemas de ecuaciones y transformaciones lineales.",
        prerrequisitos: [],
        docente: { nombre: "Ing. Carla Suárez", titulo: "MSc. Matemática Aplicada", iniciales: "CS" },
        contenido: buildContenido(["Vectores en Rn", "Matrices y operaciones", "Sistemas lineales", "Transformaciones"]),
      },
      {
        nombre: "Escritura Académica",
        creditos: 3,
        estudiantes: 45,
        descripcion: "Habilidades de comunicación escrita y lectura crítica para ingeniería.",
        prerrequisitos: [],
        docente: { nombre: "Lic. Ana Torrico", titulo: "MA en Lingüística", iniciales: "AT" },
        contenido: buildContenido(["Lectura crítica", "Estructura de textos", "Citas y referencias", "Documentación técnica"]),
      },
      {
        nombre: "Fundamentos de Ingeniería de Software",
        creditos: 4,
        estudiantes: 42,
        descripcion: "Introducción al ciclo de vida del software, procesos y prácticas profesionales.",
        prerrequisitos: [],
        docente: { nombre: "Ing. Roberto Quispe", titulo: "MSc. Ing. Software", iniciales: "RQ" },
        contenido: buildContenido(["Historia del software", "Ciclo de vida", "Metodologías ágiles", "Calidad y ética"]),
      },
    ],
  },
  {
    numero: 2,
    materias: [
      {
        nombre: "Programación Orientada a Objetos",
        creditos: 6,
        estudiantes: 40,
        descripcion: "POO con Java/Kotlin: clases, herencia, polimorfismo, interfaces y patrones básicos.",
        prerrequisitos: ["Introducción a la Programación"],
        docente: { nombre: "Ing. Pablo Rivera", titulo: "MSc. en Software", iniciales: "PR" },
        contenido: buildContenido(["Clases y objetos", "Herencia", "Polimorfismo", "Interfaces y abstractas"]),
      },
      {
        nombre: "Estructuras de Datos",
        creditos: 5,
        estudiantes: 38,
        descripcion: "Listas, pilas, colas, árboles, grafos y análisis de complejidad.",
        prerrequisitos: ["Introducción a la Programación"],
        docente: { nombre: "Ing. Daniela Paz", titulo: "MSc. Computer Science", iniciales: "DP" },
        contenido: buildContenido(["Arrays y listas", "Pilas y colas", "Árboles", "Grafos"]),
      },
      {
        nombre: "Cálculo II",
        creditos: 5,
        estudiantes: 38,
        descripcion: "Cálculo integral y series.",
        prerrequisitos: ["Cálculo I"],
        docente: { nombre: "Dr. Luis Mendoza", titulo: "PhD en Matemáticas", iniciales: "LM" },
        contenido: buildContenido(["Integral indefinida", "Integral definida", "Aplicaciones", "Series"]),
      },
      {
        nombre: "Matemática Discreta",
        creditos: 4,
        estudiantes: 40,
        descripcion: "Lógica, conjuntos, combinatoria y grafos para computación.",
        prerrequisitos: [],
        docente: { nombre: "Ing. Carla Suárez", titulo: "MSc. Matemática Aplicada", iniciales: "CS" },
        contenido: buildContenido(["Lógica proposicional", "Teoría de conjuntos", "Combinatoria", "Grafos"]),
      },
      {
        nombre: "Física I y Laboratorio",
        creditos: 5,
        estudiantes: 36,
        descripcion: "Mecánica clásica con prácticas de laboratorio.",
        prerrequisitos: [],
        docente: { nombre: "Dr. Andrés Calle", titulo: "PhD en Física", iniciales: "AC" },
        contenido: buildContenido(["Cinemática", "Dinámica", "Trabajo y energía", "Laboratorios"]),
      },
    ],
  },
  {
    numero: 3,
    materias: [
      {
        nombre: "Algoritmos Avanzados",
        creditos: 5,
        estudiantes: 35,
        descripcion: "Diseño y análisis de algoritmos: divide y vencerás, programación dinámica, algoritmos voraces.",
        prerrequisitos: ["Estructuras de Datos"],
        docente: { nombre: "Ing. Daniela Paz", titulo: "MSc. Computer Science", iniciales: "DP" },
        contenido: buildContenido(["Análisis asintótico", "Divide y vencerás", "Programación dinámica", "Algoritmos voraces"]),
      },
      {
        nombre: "Bases de Datos",
        creditos: 5,
        estudiantes: 36,
        descripcion: "Modelado relacional, SQL, normalización y diseño de bases de datos.",
        prerrequisitos: ["Estructuras de Datos"],
        docente: { nombre: "Ing. Pablo Rivera", titulo: "MSc. en Software", iniciales: "PR" },
        contenido: buildContenido(["Modelo entidad-relación", "SQL básico", "SQL avanzado", "Normalización"]),
      },
      {
        nombre: "Arquitectura de Computadores",
        creditos: 4,
        estudiantes: 32,
        descripcion: "Organización de computadores, ensamblador, memoria y pipeline.",
        prerrequisitos: ["Matemática Discreta"],
        docente: { nombre: "Ing. Roberto Quispe", titulo: "MSc. Ing. Software", iniciales: "RQ" },
        contenido: buildContenido(["Sistemas numéricos", "ISA", "Memoria caché", "Pipeline"]),
      },
      {
        nombre: "Probabilidad y Estadística",
        creditos: 4,
        estudiantes: 38,
        descripcion: "Probabilidad, variables aleatorias y estadística inferencial.",
        prerrequisitos: ["Cálculo II"],
        docente: { nombre: "Dr. Luis Mendoza", titulo: "PhD en Matemáticas", iniciales: "LM" },
        contenido: buildContenido(["Probabilidad", "Distribuciones", "Estimación", "Pruebas de hipótesis"]),
      },
      {
        nombre: "Desarrollo Web",
        creditos: 5,
        estudiantes: 40,
        descripcion: "HTML, CSS, JavaScript moderno y frameworks como React.",
        prerrequisitos: ["Programación Orientada a Objetos"],
        docente: { nombre: "Ing. María Vargas", titulo: "MSc. en Computación", iniciales: "MV" },
        contenido: buildContenido(["HTML/CSS", "JavaScript ES6+", "React fundamentals", "APIs y deploy"]),
      },
    ],
  },
];

// Generate semesters 4-9 by reusing structure with variations
const generarRestantes = (base: Semestre[], total: number, prefix: string): Semestre[] => {
  const result = [...base];
  const labels: Record<string, string[][]> = {
    soft: [
      ["Ingeniería de Requisitos", "Diseño de Software", "Sistemas Operativos", "Redes de Computadoras", "Interacción Humano-Computador"],
      ["Patrones de Diseño", "Bases de Datos NoSQL", "Desarrollo Móvil", "Seguridad de Software", "Inglés Técnico I"],
      ["Arquitectura de Software", "DevOps y CI/CD", "Cloud Computing", "Testing y QA", "Inglés Técnico II"],
      ["Inteligencia Artificial Aplicada", "Big Data", "Microservicios", "Gestión de Proyectos", "Emprendimiento Tech"],
      ["Ética y Profesión", "Práctica Empresarial", "Seminario de Tesis I", "Tópicos Avanzados", "Electiva I"],
      ["Trabajo de Grado", "Seminario de Tesis II", "Electiva II", "Electiva III", "Liderazgo en TI"],
    ],
    ai: [
      ["Aprendizaje Automático", "Estadística Bayesiana", "Sistemas Operativos", "Redes Neuronales", "Inglés Técnico I"],
      ["Deep Learning", "Procesamiento de Lenguaje Natural", "Visión por Computadora", "Optimización", "Ética en IA"],
      ["Aprendizaje por Refuerzo", "MLOps", "Sistemas Distribuidos", "Big Data", "Inglés Técnico II"],
      ["IA Generativa", "Robótica e IA", "Computación en la Nube", "Análisis de Datos", "Emprendimiento Tech"],
      ["IA Explicable", "Práctica Empresarial", "Seminario de Tesis I", "Tópicos Avanzados", "Electiva I"],
      ["Trabajo de Grado", "Seminario de Tesis II", "Electiva II", "Electiva III", "Liderazgo en IA"],
    ],
    mec: [
      ["Circuitos Eléctricos", "Mecánica de Materiales", "Termodinámica", "Diseño Mecánico", "Inglés Técnico I"],
      ["Electrónica Analógica", "Sistemas de Control", "Microcontroladores", "Sensores y Actuadores", "Inglés Técnico II"],
      ["Robótica I", "Hidráulica y Neumática", "Procesos de Manufactura", "PLC y Automatización", "Diseño CAD/CAM"],
      ["Robótica II", "Visión Artificial", "IoT Industrial", "Mecatrónica Aplicada", "Emprendimiento Tech"],
      ["Sistemas Embebidos", "Práctica Empresarial", "Seminario de Tesis I", "Tópicos Avanzados", "Electiva I"],
      ["Trabajo de Grado", "Seminario de Tesis II", "Electiva II", "Electiva III", "Gestión de Proyectos Industriales"],
    ],
  };
  const docentes = base[0].materias[0].docente;
  const grupo = labels[prefix];
  for (let i = 4; i <= total; i++) {
    const nombres = grupo[i - 4] ?? grupo[grupo.length - 1];
    result.push({
      numero: i,
      materias: nombres.map((nombre, idx) => ({
        nombre,
        creditos: 4 + (idx % 2),
        estudiantes: 28 + ((i * idx) % 12),
        descripcion: `Curso de ${nombre} del semestre ${i}, con enfoque práctico y proyectos integradores.`,
        prerrequisitos: idx === 0 ? [] : [nombres[Math.max(0, idx - 1)]],
        docente: { ...docentes },
        contenido: buildContenido(["Fundamentos", "Conceptos avanzados", "Casos de estudio", "Proyecto integrador"]),
      })),
    });
  }
  return result;
};

const docentesSoftware: Docente[] = [
  { iniciales: "MV", nombre: "Ing. María Vargas", titulo: "MSc. en Computación", rol: "Coordinadora de Carrera", bio: "10+ años desarrollando productos digitales y liderando equipos de ingeniería en Latinoamérica.", materias: ["Introducción a la Programación", "Desarrollo Web"], linkedin: "#", email: "mvargas@techhub.edu" },
  { iniciales: "PR", nombre: "Ing. Pablo Rivera", titulo: "MSc. en Software", rol: "Docente Tiempo Completo", bio: "Especialista en arquitectura de software y patrones de diseño aplicados a sistemas empresariales.", materias: ["POO", "Bases de Datos"], linkedin: "#", email: "privera@techhub.edu" },
  { iniciales: "DP", nombre: "Ing. Daniela Paz", titulo: "MSc. Computer Science", rol: "Investigadora", bio: "Investigación activa en algoritmos eficientes y optimización combinatoria.", materias: ["Estructuras de Datos", "Algoritmos"], linkedin: "#", email: "dpaz@techhub.edu" },
  { iniciales: "RQ", nombre: "Ing. Roberto Quispe", titulo: "MSc. Ing. Software", rol: "Docente Tiempo Completo", bio: "Experto en metodologías ágiles y transformación digital de organizaciones.", materias: ["Fundamentos Ing. Software", "Arquitectura"], linkedin: "#", email: "rquispe@techhub.edu" },
  { iniciales: "LM", nombre: "Dr. Luis Mendoza", titulo: "PhD en Matemáticas", rol: "Docente Tiempo Completo", bio: "Doctor en matemáticas aplicadas con enfoque en análisis numérico para computación.", materias: ["Cálculo I", "Cálculo II", "Probabilidad"], linkedin: "#", email: "lmendoza@techhub.edu" },
  { iniciales: "CS", nombre: "Ing. Carla Suárez", titulo: "MSc. Matemática Aplicada", rol: "Docente Tiempo Parcial", bio: "Apasionada por enseñar matemáticas con enfoque computacional.", materias: ["Álgebra Lineal", "Matemática Discreta"], linkedin: "#", email: "csuarez@techhub.edu" },
];

const proyectosSoftware: Proyecto[] = [
  { titulo: "EduPlatform — LMS para colegios rurales", descripcion: "Plataforma educativa offline-first que llega a 500+ estudiantes en zonas sin conectividad estable.", estudiantes: ["A. Choque", "M. Rojas", "J. Pérez"], tags: ["React", "PWA", "Node.js"], anio: 2025 },
  { titulo: "FinTrack — Finanzas personales con IA", descripcion: "App móvil que categoriza gastos automáticamente y proyecta presupuestos.", estudiantes: ["L. Gómez", "S. Vaca"], tags: ["React Native", "Python", "ML"], anio: 2025 },
  { titulo: "MediConnect — Telemedicina rural", descripcion: "Sistema de teleconsulta integrado con expediente clínico digital.", estudiantes: ["R. Antezana", "K. Suárez", "P. Salazar"], tags: ["Next.js", "WebRTC", "Postgres"], anio: 2024 },
  { titulo: "DevOps Toolkit académico", descripcion: "Suite de scripts y plantillas para acelerar despliegues en proyectos universitarios.", estudiantes: ["C. Ortiz", "J. Mamani"], tags: ["Docker", "GitHub Actions", "Terraform"], anio: 2024 },
];

const graduadosSoftware: Graduado[] = [
  { iniciales: "AC", nombre: "Andrea Cuéllar", promocion: "2022", empresa: "Mercado Libre", cargo: "Senior Software Engineer", linkedin: "#", email: "andrea@example.com" },
  { iniciales: "JM", nombre: "Javier Méndez", promocion: "2021", empresa: "Globant", cargo: "Tech Lead", linkedin: "#", email: "javier@example.com" },
  { iniciales: "SR", nombre: "Sofía Ribera", promocion: "2023", empresa: "Stripe", cargo: "Backend Engineer", linkedin: "#", email: "sofia@example.com" },
  { iniciales: "DV", nombre: "Diego Velasco", promocion: "2020", empresa: "Microsoft", cargo: "Engineering Manager", linkedin: "#", email: "diego@example.com" },
  { iniciales: "PG", nombre: "Paula Guzmán", promocion: "2023", empresa: "Rappi", cargo: "Mobile Engineer", linkedin: "#", email: "paula@example.com" },
  { iniciales: "LH", nombre: "Luis Herrera", promocion: "2022", empresa: "Auth0 (Okta)", cargo: "Security Engineer", linkedin: "#", email: "luis@example.com" },
];

const docentesAi: Docente[] = [
  { iniciales: "EM", nombre: "Dr. Elena Montaño", titulo: "PhD en Inteligencia Artificial", rol: "Coordinadora de Carrera", bio: "Investigadora en NLP y modelos de lenguaje aplicados al español andino.", materias: ["NLP", "Aprendizaje Automático"], linkedin: "#", email: "emontano@techhub.edu" },
  { iniciales: "FN", nombre: "Dr. Felipe Navarro", titulo: "PhD en Computer Vision", rol: "Investigador Senior", bio: "Visión por computadora aplicada a agricultura de precisión y salud.", materias: ["Visión por Computadora", "Deep Learning"], linkedin: "#", email: "fnavarro@techhub.edu" },
  { iniciales: "VM", nombre: "Ing. Valeria Murillo", titulo: "MSc. Data Science", rol: "Docente Tiempo Completo", bio: "Construyó pipelines de ML en producción para fintech latinoamericanas.", materias: ["MLOps", "Big Data"], linkedin: "#", email: "vmurillo@techhub.edu" },
  { iniciales: "GT", nombre: "Ing. Gustavo Téllez", titulo: "MSc. en IA", rol: "Docente Tiempo Completo", bio: "Apasionado por la IA generativa y la enseñanza interactiva.", materias: ["IA Generativa", "Aprendizaje por Refuerzo"], linkedin: "#", email: "gtellez@techhub.edu" },
  { iniciales: "RA", nombre: "Dra. Romina Áñez", titulo: "PhD en Estadística", rol: "Docente Tiempo Completo", bio: "Estadística bayesiana y métodos probabilísticos para IA.", materias: ["Estadística", "Optimización"], linkedin: "#", email: "ranez@techhub.edu" },
  { iniciales: "JC", nombre: "Ing. José Camacho", titulo: "MSc. en Ética Digital", rol: "Docente Tiempo Parcial", bio: "Ética, regulación y gobernanza de la IA.", materias: ["Ética en IA", "IA Explicable"], linkedin: "#", email: "jcamacho@techhub.edu" },
];

const proyectosAi: Proyecto[] = [
  { titulo: "AgroVision — Detección de plagas con drones", descripcion: "Modelo de visión por computadora que identifica plagas en cultivos de soya con 94% de precisión.", estudiantes: ["M. Saavedra", "T. Aguilar"], tags: ["PyTorch", "YOLO", "Drones"], anio: 2025 },
  { titulo: "QuechuaGPT — Asistente conversacional en quechua", descripcion: "Modelo de lenguaje fine-tuned para preservación y enseñanza del quechua.", estudiantes: ["I. Mamani", "N. Choque"], tags: ["NLP", "Transformers", "HuggingFace"], anio: 2025 },
  { titulo: "MediScan — Diagnóstico asistido por IA", descripcion: "Análisis de radiografías para detección temprana de neumonía.", estudiantes: ["R. Vargas", "L. Peña"], tags: ["TensorFlow", "Medical AI"], anio: 2024 },
  { titulo: "RecoMusic Bolivia", descripcion: "Sistema de recomendación de música boliviana con embeddings personalizados.", estudiantes: ["F. Aramayo"], tags: ["Embeddings", "FastAPI"], anio: 2024 },
];

const graduadosAi: Graduado[] = [
  { iniciales: "MS", nombre: "Mariana Salinas", promocion: "2023", empresa: "OpenAI", cargo: "Research Engineer", linkedin: "#", email: "mariana@example.com" },
  { iniciales: "RC", nombre: "Ricardo Cuéllar", promocion: "2022", empresa: "Anthropic", cargo: "ML Engineer", linkedin: "#", email: "ricardo@example.com" },
  { iniciales: "AB", nombre: "Ana Bustamante", promocion: "2023", empresa: "Hugging Face", cargo: "NLP Engineer", linkedin: "#", email: "ana@example.com" },
  { iniciales: "JT", nombre: "Jorge Tapia", promocion: "2021", empresa: "NVIDIA", cargo: "Deep Learning Engineer", linkedin: "#", email: "jorge@example.com" },
  { iniciales: "VP", nombre: "Valentina Pérez", promocion: "2022", empresa: "Spotify", cargo: "Data Scientist", linkedin: "#", email: "vale@example.com" },
  { iniciales: "EC", nombre: "Esteban Cruz", promocion: "2023", empresa: "MercadoLibre AI", cargo: "ML Researcher", linkedin: "#", email: "esteban@example.com" },
];

const docentesMec: Docente[] = [
  { iniciales: "HF", nombre: "Ing. Hernán Fuentes", titulo: "MSc. Mecatrónica", rol: "Coordinador de Carrera", bio: "15 años diseñando sistemas automatizados para la industria minera y agroindustrial.", materias: ["Robótica I", "PLC y Automatización"], linkedin: "#", email: "hfuentes@techhub.edu" },
  { iniciales: "BC", nombre: "Dra. Beatriz Cossío", titulo: "PhD en Robótica", rol: "Investigadora Senior", bio: "Robótica colaborativa y sistemas autónomos.", materias: ["Robótica II", "Visión Artificial"], linkedin: "#", email: "bcossio@techhub.edu" },
  { iniciales: "OL", nombre: "Ing. Oscar Limpias", titulo: "MSc. Sistemas de Control", rol: "Docente Tiempo Completo", bio: "Especialista en control automático y sistemas embebidos.", materias: ["Sistemas de Control", "Microcontroladores"], linkedin: "#", email: "olimpias@techhub.edu" },
  { iniciales: "NM", nombre: "Ing. Natalia Méndez", titulo: "MSc. Diseño Mecánico", rol: "Docente Tiempo Completo", bio: "Diseño mecánico avanzado con CAD/CAM y manufactura aditiva.", materias: ["Diseño Mecánico", "CAD/CAM"], linkedin: "#", email: "nmendez@techhub.edu" },
  { iniciales: "AT", nombre: "Ing. Adolfo Terán", titulo: "MSc. Ing. Eléctrica", rol: "Docente Tiempo Completo", bio: "Electrónica de potencia y energías renovables.", materias: ["Electrónica", "Circuitos"], linkedin: "#", email: "ateran@techhub.edu" },
  { iniciales: "PV", nombre: "Ing. Patricia Vélez", titulo: "MSc. IoT Industrial", rol: "Docente Tiempo Parcial", bio: "Industria 4.0 y conectividad de plantas industriales.", materias: ["IoT Industrial", "Mecatrónica Aplicada"], linkedin: "#", email: "pvelez@techhub.edu" },
];

const proyectosMec: Proyecto[] = [
  { titulo: "RoboArm SC — Brazo robótico de bajo costo", descripcion: "Brazo robótico educativo de 6 grados de libertad fabricado con impresión 3D.", estudiantes: ["G. Rocha", "T. Soruco"], tags: ["ROS", "Arduino", "3D Printing"], anio: 2025 },
  { titulo: "AquaSense — Monitoreo de calidad de agua", descripcion: "Red de sensores IoT para monitoreo en tiempo real de cuencas hidrográficas.", estudiantes: ["J. Cabrera", "M. Loayza"], tags: ["LoRaWAN", "ESP32", "IoT"], anio: 2025 },
  { titulo: "AGV Industrial autónomo", descripcion: "Vehículo guiado automáticamente para logística interna en plantas.", estudiantes: ["P. Justiniano", "L. Núñez"], tags: ["LiDAR", "ROS", "SLAM"], anio: 2024 },
  { titulo: "Prótesis mioeléctrica", descripcion: "Prótesis de mano controlada por señales musculares con impresión 3D.", estudiantes: ["A. Rivero"], tags: ["EMG", "Bioingeniería", "3D Printing"], anio: 2024 },
];

const graduadosMec: Graduado[] = [
  { iniciales: "FS", nombre: "Fernando Salazar", promocion: "2022", empresa: "Tesla", cargo: "Manufacturing Engineer", linkedin: "#", email: "fernando@example.com" },
  { iniciales: "CM", nombre: "Camila Montero", promocion: "2023", empresa: "Siemens", cargo: "Automation Engineer", linkedin: "#", email: "camila@example.com" },
  { iniciales: "BR", nombre: "Bruno Reyes", promocion: "2021", empresa: "ABB Robotics", cargo: "Robotics Engineer", linkedin: "#", email: "bruno@example.com" },
  { iniciales: "MO", nombre: "Marina Ortiz", promocion: "2023", empresa: "Boston Dynamics", cargo: "Mechanical Designer", linkedin: "#", email: "marina@example.com" },
  { iniciales: "RG", nombre: "Raúl Gutiérrez", promocion: "2022", empresa: "John Deere", cargo: "Control Systems Engineer", linkedin: "#", email: "raul@example.com" },
  { iniciales: "EL", nombre: "Elena López", promocion: "2020", empresa: "Schneider Electric", cargo: "Industrial IoT Lead", linkedin: "#", email: "elena@example.com" },
];

export const carreras: Carrera[] = [
  {
    slug: "software",
    nombre: "Ingeniería de Software",
    nombreCorto: "Software",
    tagline: "Construye los productos digitales que transforman industrias",
    descripcion: "Forma profesionales capaces de diseñar, construir y mantener sistemas de software escalables, seguros y centrados en el usuario. Combina fundamentos sólidos de computación con prácticas modernas de la industria: arquitectura, DevOps, cloud y desarrollo full-stack.",
    duracion: "10 semestres · 5 años",
    modalidad: "Presencial / Híbrida",
    imagen: heroSoftware,
    destacados: [
      "Currícula alineada con la industria global",
      "Convenios con empresas tech líderes",
      "Laboratorios de innovación y hackathons",
    ],
    semestres: generarRestantes(materiasSoftware, 9, "soft"),
    docentes: docentesSoftware,
    proyectos: proyectosSoftware,
    graduados: graduadosSoftware,
  },
  {
    slug: "ia",
    nombre: "Ingeniería en Inteligencia Artificial",
    nombreCorto: "IA",
    tagline: "Diseña los sistemas inteligentes del futuro",
    descripcion: "Programa pionero que forma ingenieros e ingenieras capaces de construir soluciones basadas en aprendizaje automático, deep learning, NLP y visión por computadora, con foco en impacto social y aplicaciones para Latinoamérica.",
    duracion: "10 semestres · 5 años",
    modalidad: "Presencial",
    imagen: heroAi,
    destacados: [
      "Investigación aplicada con grupos internacionales",
      "Acceso a GPUs y plataformas de cloud computing",
      "Énfasis en ética y gobernanza de la IA",
    ],
    semestres: generarRestantes(
      materiasSoftware.map(s => ({ ...s, materias: s.materias })),
      9,
      "ai"
    ),
    docentes: docentesAi,
    proyectos: proyectosAi,
    graduados: graduadosAi,
  },
  {
    slug: "mecatronica",
    nombre: "Ingeniería Mecatrónica",
    nombreCorto: "Mecatrónica",
    tagline: "Donde la mecánica, la electrónica y el software convergen",
    descripcion: "Forma profesionales que integran mecánica, electrónica, control y programación para diseñar sistemas automatizados, robots y soluciones para la Industria 4.0, con visión emprendedora y enfoque sostenible.",
    duracion: "10 semestres · 5 años",
    modalidad: "Presencial",
    imagen: heroMecatronica,
    destacados: [
      "Talleres y laboratorios de robótica equipados",
      "Vínculo directo con la industria manufacturera",
      "Proyectos integradores cada semestre",
    ],
    semestres: generarRestantes(materiasSoftware, 9, "mec"),
    docentes: docentesMec,
    proyectos: proyectosMec,
    graduados: graduadosMec,
  },
];

export const getCarrera = (slug: string) => carreras.find(c => c.slug === slug);