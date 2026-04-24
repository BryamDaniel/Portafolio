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
    tagline: "[ Full Stack Systems 2024 ]",
    title: {
      main: "DEVELOPING",
      highlight: "EXPERIENCES"
    },
    description: {
      main: "Desarrollador de Software especializado en crear soluciones robustas. Con amplia experiencia en ",
      highlight1: "Cloud",
      connector: ", arquitecturas escalables y ",
      highlight2: "automatización estratégica",
      suffix: "."
    },
    button: "VER PROYECTOS",
    backgroundText: "CODE"
  },
  marquee: [
    "Full Stack Development",
    "Cloud Architecture",
    "Process Automation",
    "System Resilience"
  ],
  about: {
    title: {
      main: "Desde las Redes",
      highlight: "al Código"
    },
    paragraphs: [
      "Mi trayectoria comenzó en la base operativa. Inicié mi carrera en Zelenza como Técnico de Redes (Nivel 1) tras cursar mi grado medio en SMR, enfocado en la resolución de incumbencias de infraestructura. En paralelo a mis responsabilidades laborales, completé el Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM).",
      "Mi dedicación constante me abrió nuevas puertas: fui seleccionado para realizar mis prácticas de desarrollo en la sede central de Méndez Álvaro, compaginando este nuevo rol por las mañanas con mis labores de técnico de redes por las tardes.",
      "La proactividad y el valor aportado al equipo dieron sus frutos. Al finalizar este periodo, fui promovido oficialmente al puesto de Desarrollador, rol desde el cual continúo aplicando una visión integral de sistemas para construir software que perdure."
    ],
    stats: [
      { value: "IT & Dev", label: "Visión Integral" },
      { value: "+04", label: "Años de experiencia" }
    ],
    card: {
      badge: "Evolución Actual",
      role: "SR. DEVELOPER",
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
      { title: "Full Stack Development", desc: "Interfaces dinámicas y servicios resilientes." },
      { title: "Cloud Architecture", desc: "Despliegue y escalabilidad en la nube." },
      { title: "Automation Engine", desc: "Optimización técnica y RPA estratégico." }
    ]
  },
  stack: {
    title: "MY",
    highlight: "STACK",
    categories: [
      {
        name: "Languages & Core",
        skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL']
      },
      {
        name: "Frameworks & UI",
        skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Framer Motion']
      },
      {
        name: "Cloud & Systems",
        skills: ['Firebase', 'AWS', 'Docker', 'Google Cloud']
      },
      {
        name: "Automation & RPA",
        skills: ['RPA', 'Power Automate', 'Automate Enterprise', 'Python']
      }
    ]
  },
  footer: {
    logo: "BRAYAN",
    logoSuffix: "_",
    links: [
      { label: "LinkedIn", url: "#" },
      { label: "GitHub", url: "#" }
    ],
    copy: "© 2024 — Building Digital Resilience"
  },
  infoWork: {
    backButton: "Volver al Inicio",
    hero: {
      title: "Ingeniería &",
      highlight: "Eficiencia Operativa",
      description: "Desde liderar la evolución técnica de herramientas internas para grandes clientes, hasta desarrollar automatizaciones de alta precisión. Mi enfoque es construir ecosistemas robustos y eficientes."
    },
    experience: [
      {
        id: "infraestructura-interna",
        type: "Server",
        title: "Infraestructura",
        highlight: "Interna",
        location: "Sede Central, Méndez Álvaro",
        color: "purple",
        description: [
          "Tras cuatro años de experiencia como desarrollador y una gestión exitosa en la sede de Gran Vía —donde lideré la migración tecnológica completa y consolidé los sistemas del cliente— decidí buscar nuevos desafíos técnicos que me permitieran seguir escalando mi impacto.",
          "En reconocimiento a mi trayectoria, fui asignado a la Sede Central de Méndez Álvaro para integrarme en el equipo de Infraestructura Interna. Allí me especialicé en el desarrollo de herramientas de alta complejidad bajo la plataforma AppSmith, gestionando proyectos críticos para grandes cuentas."
        ],
        projects: [
          {
            title: "1. Arquitectura de Datos (MásMóvil)",
            desc: "Desarrollo de interfaces de gestión técnica avanzada integradas directamente en la infraestructura operativa de MásMóvil.",
            details: [
              { label: "Gestión de APIs y Seguridad:", text: "Implementación de flujos de autenticación robustos mediante la obtención de Tokens y el consumo eficiente de múltiples endpoints." },
              { label: "Lógica de Negocio:", text: "Programación de lógica personalizada en JavaScript para la manipulación y visualización de datos operativos complejos." }
            ],
            tech: ['AppSmith', 'APIs REST', 'JavaScript', 'OAuth/Tokens']
          },
          {
            title: "2. Soluciones Estratégicas (AENA & Madrid Digital)",
            desc: "Lideré la creación de herramientas destinadas a la gestión de servicios públicos esenciales integrados en la operativa de Telefónica.",
            details: [
              { label: "Madrid Digital:", text: "Desarrollo de interfaces de gestión de incidencias y sistemas de plantillas automatizadas, optimizando los flujos de respuesta técnica." },
              { label: "AENA:", text: "Creación de dashboards operativos para el monitoreo y control de infraestructuras críticas en tiempo real." }
            ],
            tech: ['AppSmith', 'Data Dashboards', 'JS Automations', 'Incident Mgmt']
          }
        ]
      },
      {
        id: "full-stack",
        type: "Code2",
        title: "Desarrollo Full Stack",
        highlight: "Telefónica",
        location: "Sede Gran Vía, Madrid",
        color: "blue",
        description: [
          "Durante mi 2º año como desarrollador, me ofrecieron el desafío de trabajar con Telefónica (Movistar) en la sede de Gran Vía. Al ser el único perfil de desarrollo asignado in-house en esa sede, me autogestioné y lideré la evolución tecnológica de sus herramientas internas, asumiendo la responsabilidad total del ciclo de vida de las aplicaciones y el contacto directo con el cliente."
        ],
        projects: [
          {
            title: "Fase 1: Infraestructura Legacy",
            desc: "Gestión y mantenimiento de sistemas críticos, garantizando estabilidad en entornos de producción tradicionales (OVH, VPS Hostinger) y resolución de incidencias en tiempo real de cara al cliente.",
            tech: ['PHP', 'SQL', 'HTML5/CSS3/JS', 'WordPress']
          },
          {
            title: "Fase 2: Modernización del Stack",
            desc: "Por iniciativa propia, propuse y ejecuté el cambio hacia arquitecturas modernas y escalables, coordinando con el departamento de Ciberseguridad la viabilidad de las nuevas tecnologías.",
            tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js']
          },
          {
            title: "Fase 3: Migración Cloud (Firebase)",
            desc: "El hito principal de mi gestión: migración completa del ecosistema a Cloud. Lideré el paso de SQL a NoSQL, implementé MFA, reCAPTCHA, optimicé los costes de transferencia de datos y configuré infraestructura DevOps (Hosting Sites, SMTP).",
            tech: ['Firebase', 'Firestore', 'Auth MFA', 'Cloud Storage']
          }
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
          text: "El equipo técnico realizaba procesos manuales de gran volumen: navegación repetitiva por sitios externos, recolección manual de datos y ejecución individual de pruebas. Este flujo era propenso a errores humanos y generaba cuellos de botella en los tiempos de entrega."
        },
        solution: {
          title: "La Solución",
          text: "Desarrollé una extensión de Chrome a medida diseñada para actuar como un \"operador automático\". La herramienta interviene directamente en el frontal de las aplicaciones web para agilizar la operativa técnica mediante tres ejes principales:",
          items: [
            { title: "Inyección y Modificación del DOM", desc: "Alteración de la interfaz original de aplicaciones externas para insertar controles personalizados y mejorar la velocidad de navegación del técnico." },
            { title: "Automatización de Requests", desc: "Ejecución asíncrona de peticiones para la extracción masiva de información de diversas fuentes, eliminando la necesidad de consultas manuales." },
            { title: "Engine de Pruebas Automatizadas", desc: "Implementación de un flujo lógico que ejecuta tests técnicos en sitios web de terceros de forma autónoma, validando resultados en segundos." }
          ]
        }
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
          "Cuando las soluciones estándar alcanzaban su límite, desarrollé bots de alta precisión para tareas críticas:"
        ],
        items: [
          { title: "Automatización Híbrida (GUI & API)", desc: "Implementación de robots que combinan la ejecución mediante clics en pantalla (para sistemas sin API) con peticiones directas a servidor, optimizando la velocidad siempre que el entorno lo permitía." },
          { title: "Gestión de Casos Complejos", desc: "Resolución de flujos con autenticación 2FA, integrando lógica programática para superar barreras de seguridad en procesos automatizados." },
          { title: "Gestión de Datos", desc: "Automatización del ciclo completo de la información: desde la recolección (scraping/extracción) hasta el almacenamiento en bases de datos y actualización de estados de trabajo en tiempo real." },
          { title: "Operativa Técnica", desc: "Automatización de carga de datos de clientes y validación/modificación masiva de registros, garantizando la integridad de la información." }
        ]
      },
      {
        id: "rpa-enterprise",
        type: "Bot",
        title: "RPA",
        highlight: "Enterprise",
        location: "Robotic Process Automation",
        color: "teal",
        description: [
          "Evolución de Tecnologías RPA",
          "He liderado la transición tecnológica hacia la eficiencia operativa, adaptando el stack de herramientas según las necesidades de la organización:"
        ],
        items: [
          { title: "Automate Enterprise", desc: "Origen de la automatización de tareas técnicas, gestionando flujos de trabajo iniciales y procesos de validación de datos." },
          { title: "Power Automate", desc: "Migración y despliegue de soluciones hacia el ecosistema de Microsoft, buscando una mayor integración con servicios en la nube, escalabilidad y una arquitectura de automatización más ligera y mantenible." }
        ]
      }
    ]
  }
};
