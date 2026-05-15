export const CONTENT = {
  header: {
    logo: "DEVELOPER",
    logoSuffix: "_",
    nav: [
      { label: 'Sobre mí', id: 'sobre-mí' },
      { label: 'Experiencia', id: 'experiencia' },
      { label: 'Stack', id: 'stack' }
    ],
    projects: "Proyectos"
  },
  hero: {
    tagline: "[ Full Stack & Automation 2026 ]",
    title: {
      main: "DEVELOPING",
      highlight: "EXPERIENCES"
    },
    description: {
      main: "Desarrollador de Software especializado en crear soluciones robustas, con sólida experiencia en desarrollo ",
      highlight1: "Full Stack",
      connector: ", optimización de infraestructura e ",
      highlight2: "automatización avanzada",
      suffix: "."
    },
    button: "VER PROYECTOS",
    backgroundText: "CODE"
  },
  marquee: [
    "Full Stack Development",
    "Process Automation",
    "RPA & Python Bots",
    "Internal Infrastructure"
  ],
  about: {
    title: {
      main: "Desde las Redes",
      highlight: "al Código"
    },
    paragraphs: [
      "Mi trayectoria comenzó en la base operativa. Inicié mi carrera en Zelenza como Técnico de Redes (Nivel 1) tras cursar mi grado medio en SMR, enfocándome en la resolución de incidencias de infraestructura. Con el objetivo de saltar al desarrollo de software, cursé y completé el Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM).",
      "Mi proactividad me abrió las primeras puertas en el sector: fui seleccionado para realizar mis prácticas de desarrollo de DAM en la sede central de Méndez Álvaro, compaginando este nuevo rol por las mañanas con mis labores de técnico de redes por las tardes.",
      "El valor aportado al equipo dio sus frutos. Al finalizar las prácticas, fui contratado oficialmente como Desarrollador de Software, rol desde el cual aplico una visión integral que une mi base de sistemas y redes con la construcción de aplicaciones eficientes y automatizaciones a medida."
    ],
    stats: [
      { value: "Sistemas & Dev", label: "Visión Integral" },
      { value: "+04", label: "Años de experiencia" }
    ],
    card: {
      badge: "Evolución Actual",
      role: "SOFTWARE DEVELOPER",
      company: "@ ZELENZA"
    }
  },
  experience: {
    title: {
      main: "Evolución",
      highlight: "Técnica"
    },
    button: "EXPLORAR DETALLES",
    items: [
      { title: "Full Stack Development", desc: "Interfaces dinámicas, API REST y servicios eficientes." },
      { title: "Internal Infrastructure", desc: "Desarrollo rápido de aplicaciones internas y gestión de datos." },
      { title: "Automation Engine", desc: "Optimización de procesos técnicos y desarrollo de bots a medida." }
    ]
  },
  stack: {
    title: "MY",
    highlight: "STACK",
    categories: [
      {
        name: "Languages & Core",
        skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL', 'PHP']
      },
      {
        name: "Frameworks & UI",
        skills: ['React', 'Next.js', 'Node.js', 'Vue.js 3', 'Tailwind CSS']
      },
      {
        name: "Cloud & Systems",
        skills: ['Firebase', 'Docker', 'AppSmith', 'Git']
      },
      {
        name: "Automation & RPA",
        skills: ['Python Automation', 'Power Automate', 'Automate Enterprise', 'Web Scraping']
      }
    ]
  },
  footer: {
    logo: "BRAYAN",
    logoSuffix: "_",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/bryam-amaya-3ba7941b8" },
      { label: "GitHub", url: "https://github.com/BryamDaniel" }
    ],
    copy: "© 2026 — Building Digital Resilience"
  },
  infoWork: {
    backButton: "Volver al Inicio",
    hero: {
      title: "Desarrollo &",
      highlight: "Eficiencia Operativa",
      description: "Desde la evolución técnica de herramientas internas para grandes clientes de telecomunicaciones y sector público, hasta el diseño de automatizaciones de alta precisión."
    },
    experience: [
      {
        id: "rpa-enterprise",
        type: "Bot",
        title: "RPA",
        highlight: "Enterprise",
        location: "Robotic Process Automation",
        color: "teal",
        description: [
          "Evolución de Tecnologías RPA",
          "Transición y adaptación de herramientas de automatización según las necesidades operativas de la organización:"
        ],
        items: [
          { title: "Automate Enterprise", desc: "Origen de la automatización de tareas técnicas, gestionando flujos de trabajo iniciales y procesos de validación de datos." },
          { title: "Power Automate", desc: "Migración de soluciones hacia el ecosistema de Microsoft, buscando una mayor integración con servicios cloud corporativos y un mantenimiento más ágil." }
        ]
      },
      {
        id: "python-automation",
        type: "DatabaseZap",
        title: "Python",
        highlight: "Automation",
        location: "Data & Processing",
        color: "indigo",
        description: [
          "Automatización Avanzada con Python",
          "Desarrollo de scripts y bots a medida para superar las limitaciones de las herramientas comerciales estándar en tareas críticas:"
        ],
        items: [
          { title: "Automatización Híbrida (GUI & API)", desc: "Implementación de scripts que combinan la simulación de acciones en interfaz (para sistemas sin API) con peticiones HTTP directas al servidor para optimizar tiempos." },
          { title: "Gestión de Casos Complejos", desc: "Resolución de flujos con autenticación 2FA, integrando lógica para interactuar de forma segura en procesos automatizados." },
          { title: "Ciclo de Datos", desc: "Automatización integral de la información: desde la extracción de datos mediante scraping hasta su almacenamiento en bases de datos y actualización en tiempo real." },
          { title: "Operativa Masiva", desc: "Validación, modificación y carga masiva de registros de clientes, garantizando la integridad de los datos." }
        ]
      },
      {
        id: "chrome-automation",
        type: "Globe",
        title: "Chrome Automation",
        highlight: "Engine",
        location: "Navegación & Datos",
        color: "teal",
        problem: {
          title: "El Problema",
          text: "El equipo operativo realizaba tareas manuales repetitivas de gran volumen: navegación por portales externos, recolección de datos uno a uno y ejecución manual de pruebas individuales, lo que generaba lentitud y riesgo de errores."
        },
        solution: {
          title: "La Solución",
          text: "Diseñé y desarrollé una extensión de Chrome a medida que actúa como asistente automático en el navegador, interviniendo directamente en el frontend para agilizar las tareas mediante tres ejes:",
          items: [
            { title: "Inyección y Modificación del DOM", desc: "Alteración de la interfaz de aplicaciones externas para insertar botones y controles personalizados que agilizan el trabajo del técnico." },
            { title: "Automatización de Requests", desc: "Ejecución asíncrona de peticiones para la extracción masiva de información, reduciendo consultas manuales." },
            { title: "Motor de Pruebas Autónomo", desc: "Flujo lógico que ejecuta tests técnicos en sitios web de terceros, validando resultados de forma inmediata." }
          ]
        }
      },
      {
        id: "full-stack",
        type: "Code2",
        title: "Desarrollo Full Stack",
        highlight: "Telefónica",
        location: "Sede Gran Vía, Madrid",
        color: "blue",
        description: [
          "Durante mi trayectoria como desarrollador, asumí el reto de trabajar in-house en la sede de Telefónica (Movistar) en Gran Vía. Siendo el perfil técnico de desarrollo asignado en dicha localización, me encargué de la autogestión y evolución de sus herramientas internas, cubriendo todo el ciclo de vida de las aplicaciones y manteniendo comunicación directa con el cliente."
        ],
        projects: [
          {
            title: "Fase 1: Mantenimiento Legacy",
            desc: "Gestión y soporte de sistemas internos en producción en entornos tradicionales (OVH, Hostinger), garantizando la estabilidad y resolución de incidencias en tiempo real.",
            tech: ['PHP', 'SQL', 'HTML5/CSS3/JS']
          },
          {
            title: "Fase 2: Modernización del Stack",
            desc: "Propuesta e implementación de un cambio tecnológico hacia un desarrollo moderno basado en componentes, coordinando con Ciberseguridad los requisitos para la viabilidad del nuevo entorno.",
            tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js']
          },
          {
            title: "Fase 3: Migración e Integración con Firebase",
            desc: "Migración completa del ecosistema local a servicios Cloud, realizando la transición de bases de datos relacionales a NoSQL, implementando autenticación robusta (MFA, reCAPTCHA) y configurando el despliegue.",
            tech: ['Firebase', 'Firestore', 'Auth MFA', 'Cloud Storage']
          }
        ]
      },
      {
        id: "infraestructura-interna",
        type: "Server",
        title: "Infraestructura",
        highlight: "Interna",
        location: "Sede Central, Méndez Álvaro",
        color: "purple",
        description: [
          "Tras completar con éxito los objetivos y la migración en la sede de Gran Vía, me incorporé de lleno al equipo de Infraestructura Interna en la Sede Central. En esta etapa me especialicé en el desarrollo rápido de aplicaciones de alta complejidad mediante AppSmith, centralizando y automatizando flujos críticos para grandes cuentas."
        ],
        projects: [
          {
            title: "1. Integración de Datos (MásMóvil)",
            desc: "Desarrollo de paneles y herramientas de gestión técnica integradas con la infraestructura operativa del cliente.",
            details: [
              { label: "Consumo de APIs y Seguridad:", text: "Implementación de flujos de autenticación mediante tokens y consumo optimizado de múltiples endpoints corporativos." },
              { label: "Lógica Frontend:", text: "Modelado de datos y filtros avanzados utilizando JavaScript para procesar volúmenes complejos de información operativa." }
            ],
            tech: ['AppSmith', 'APIs REST', 'JavaScript', 'OAuth']
          },
          {
            title: "2. Herramientas Operativas (AENA & Madrid Digital)",
            desc: "Creación de soluciones internas integradas en la operativa de soporte y gestión para cuentas del sector público.",
            details: [
              { label: "Madrid Digital:", text: "Desarrollo de interfaces de gestión de incidencias y generadores de plantillas automáticas para unificar y acelerar las respuestas de soporte." },
              { label: "AENA:", text: "Estructuración de cuadros de mando (dashboards) visuales para la monitorización de datos e infraestructuras operativas." }
            ],
            tech: ['AppSmith', 'Dashboards', 'JavaScript', 'Incident Management']
          }
        ]
      }
    ]
  },
  personalProjects: {
    title: {
      main: "Proyectos",
      highlight: "Personales"
    },
    items: [
      {
        id: "dragonball-api",
        title: "DragonBall API Ecosystem",
        description: "Aplicación web completa sobre el universo de Dragon Ball, integrando backend y frontend en un entorno contenedorizado.",
        link: "https://github.com/BryamDaniel/APP-DragonBall-API",
        tech: ['Python', 'FastAPI', 'Vue.js 3', 'Tailwind CSS', 'Docker Compose'],
        icon: 'Code2'
      }
    ]
  }
};