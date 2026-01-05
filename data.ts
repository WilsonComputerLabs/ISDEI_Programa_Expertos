
import { ProgramData } from './types';

export const PROGRAM_EMPRESARIAL: ProgramData = {
  id: 'empresarial',
  title: 'Programa Experto Empresarial',
  subtitle: 'Gestión Legal, Estratégica, Financiera y Operativa de la Empresa',
  presentationText: 'La empresa moderna exige profesionales capaces de tomar decisiones estratégicas, gestionar riesgos legales, optimizar recursos financieros y asegurar el cumplimiento normativo y la sostenibilidad del negocio.',
  presentationBullets: [
    "Enfoque integral: legal + estratégico + financiero + operativo",
    "Formación aplicada a casos reales empresariales",
    "Prevención de riesgos legales, financieros y operativos",
    "Metodología práctica orientada a la toma de decisiones"
  ],
  presentationQuote: "Visión integral de la empresa: Derecho, Estrategia y Finanzas",
  finalDiploma: "DIPLOMA DE EXPERTO EMPRESARIAL – ISDEI",
  participantProfile: [
    "Empresarios y emprendedores",
    "Gerentes y administradores",
    "Abogados y asesores empresariales",
    "Contadores y economistas",
    "Consultores y gestores empresariales"
  ],
  graduateProfile: [
    "Gestionar jurídicamente una empresa",
    "Diseñar estrategias empresariales sostenibles",
    "Tomar decisiones financieras informadas",
    "Optimizar procesos operativos y cumplimiento",
    "Asesorar profesionalmente empresas y negocios"
  ],
  specialties: [
    {
      title: "ESPECIALIDAD I: DERECHO Y GESTIÓN LEGAL EMPRESARIAL",
      items: ["Organización jurídica de la empresa", "Derecho societario y gobierno corporativo", "Contratación empresarial", "Responsabilidad civil, administrativa y penal", "Prevención de contingencias legales"],
      certification: "Especialista en Derecho y Gestión Legal Empresarial"
    },
    {
      title: "ESPECIALIDAD II: GESTIÓN ESTRATÉGICA Y FINANCIERA DE LA EMPRESA",
      items: ["Planeamiento estratégico empresarial", "Análisis e interpretación financiera", "Costos, presupuestos y control financiero", "Finanzas corporativas y evaluación de proyectos", "Toma de decisiones estratégicas"],
      certification: "Especialista en Gestión Estratégica y Financiera de la Empresa"
    },
    {
      title: "ESPECIALIDAD III: GESTIÓN OPERATIVA, CUMPLIMIENTO Y DESARROLLO EMPRESARIAL",
      items: ["Gestión operativa y procesos empresariales", "Compliance y gobierno corporativo", "Gestión laboral y tributación empresarial", "Estrategias de crecimiento y sostenibilidad", "Continuidad del negocio"],
      certification: "Especialista en Gestión Operativa, Cumplimiento y Desarrollo Empresarial"
    }
  ],
  syllabi: [
    {
      id: "legal-emp",
      name: "Derecho y Gestión Legal Empresarial",
      specialtyNumber: "I",
      duracion: "60 horas académicas",
      creditos: 4,
      certificacion: "Especialista en Derecho y Gestión Legal Empresarial",
      sumilla: "Desarrolla los fundamentos jurídicos necesarios para la constitución, organización, funcionamiento y control legal de la empresa, integrando el derecho societario, contractual, laboral básico y prevención de contingencias.",
      competenciaGeneral: "Analiza y gestiona jurídicamente la empresa, identificando riesgos legales y aplicando estrategias preventivas para su correcta organización, funcionamiento y sostenibilidad.",
      competenciasEspecificas: ["Interpretar el marco legal aplicable", "Analizar formas societarias", "Estructurar contratos empresariales", "Identificar responsabilidades", "Diseñar estrategias preventivas"],
      unidades: [
        { title: "UNIDAD I: FUNDAMENTOS DEL DERECHO EMPRESARIAL", hours: 15, topics: ["La empresa como sujeto jurídico", "Derecho Empresarial", "Fuentes y marco regulatorio", "Actividad empresarial", "Riesgos legales"] },
        { title: "UNIDAD II: ORGANIZACIÓN JURÍDICA DE LA EMPRESA", hours: 15, topics: ["Persona natural con negocio", "Tipos societarios", "Sociedad Anónima, SAC y EIRL", "Constitución", "Representación legal"] },
        { title: "UNIDAD III: CONTRATACIÓN EMPRESARIAL y COMERCIAL", hours: 15, topics: ["Contratos más utilizados", "Civil vs Mercantil", "Cláusulas críticas", "Incumplimiento", "Prevención de conflictos"] },
        { title: "UNIDAD IV: RESPONSABILIDAD Y CONTINGENCIAS LEGALES", hours: 15, topics: ["Responsabilidad civil empresarial", "Responsabilidad administrativa", "Responsabilidad penal", "Fiscalización y sanciones", "Estrategia preventiva"] }
      ],
      metodologia: ["Exposición teórica aplicada", "Análisis de casos reales", "Talleres prácticos"],
      sistemaEvaluacion: [{ component: "Lectura y participación", weight: "30%" }, { component: "Casos prácticos", weight: "30%" }, { component: "Trabajo final", weight: "40%" }],
      trabajoFinal: "Elaboración de un Informe de Diagnóstico Legal Empresarial.",
      bibliografia: ["Ley General de Sociedades", "Código Civil", "Normativa Penal Empresarial"],
      resultadoAprendizaje: "Capacidad de gestionar jurídicamente una empresa y prevenir contingencias."
    }
  ]
};

export const PROGRAM_URBANISMO: ProgramData = {
  id: 'urbanismo',
  title: 'Programa Experto en Urbanismo',
  subtitle: 'Planificación, Gestión Urbana, Ordenamiento Territorial y Defensa Urbanística',
  presentationText: 'Las ciudades enfrentan hoy desafíos complejos: crecimiento desordenado, informalidad urbana, déficit de servicios y conflictos por uso del suelo. Se requieren profesionales con visión integral del urbanismo, capaces de planificar y defender técnicamente el desarrollo urbano.',
  presentationBullets: [
    "Enfoque integral: legal + técnico + municipal",
    "Formación aplicada a casos reales urbanos y municipales",
    "Dominio de planificación, licencias y fiscalización",
    "Prevención y defensa frente a contingencias urbanísticas"
  ],
  presentationQuote: "Visión 360° del territorio y la ciudad: Planificación y Gestión",
  finalDiploma: "DIPLOMA DE EXPERTO EN URBANISMO – ISDEI",
  participantProfile: ["Abogados y estudiantes", "Arquitectos y urbanistas", "Ingenieros civiles", "Funcionarios municipales", "Gestores urbanos", "Consultores"],
  graduateProfile: ["Interpretar normativa urbanística", "Analizar zonificación y planes", "Gestionar planificación urbana", "Tramitar licencias urbanísticas", "Enfrentar fiscalizaciones municipales", "Asesorar regularización urbana"],
  specialties: [
    {
      title: "ESPECIALIDAD I: DERECHO URBANÍSTICO Y ORDENAMIENTO TERRITORIAL",
      items: ["Fundamentos del derecho urbanístico", "Ordenamiento territorial y uso del suelo", "Zonificación y normativa urbanística", "Planes urbanos y competencias municipales", "Defensa administrativa urbanística"],
      certification: "Especialista en Derecho Urbanístico y Ordenamiento Territorial"
    },
    {
      title: "ESPECIALIDAD II: PLANIFICACIÓN URBANA Y GESTIÓN DEL DESARROLLO URBANO",
      items: ["Planificación urbana y territorial", "Instrumentos de planificación urbana", "Gestión del suelo y habilitaciones urbanas", "Desarrollo urbano sostenible", "Equipamiento urbano y proyectos urbanos"],
      certification: "Especialista en Planificación Urbana y Gestión del Desarrollo Urbano"
    },
    {
      title: "ESPECIALIDAD III: GESTIÓN MUNICIPAL, LICENCIAS Y FISCALIZACIÓN URBANÍSTICA",
      items: ["Gestión municipal urbana", "Licencias de habilitación urbana y edificación", "Fiscalización urbanística y régimen sancionador", "Defensa administrativa y contenciosa", "Regularización urbana y edificaciones"],
      certification: "Especialista en Gestión Municipal, Licencias y Fiscalización Urbanística"
    }
  ],
  syllabi: [
    {
      id: "legal-urb",
      name: "Derecho Urbanístico y Ordenamiento Territorial",
      specialtyNumber: "I",
      duracion: "60 horas académicas",
      creditos: 4,
      certificacion: "Especialista en Derecho Urbanístico y Ordenamiento Territorial",
      sumilla: "Desarrolla los fundamentos jurídicos y técnicos que regulan el uso del suelo, la planificación urbana y el desarrollo territorial conforme a la legislación peruana.",
      competenciaGeneral: "Analiza, interpreta y aplica el marco normativo del derecho urbanístico y del ordenamiento territorial para la gestión del suelo.",
      competenciasEspecificas: ["Comprender principios urbanísticos", "Interpretar instrumentos territoriales", "Analizar zonificación", "Identificar competencias municipales", "Prevenir conflictos urbanísticos"],
      unidades: [
        { title: "UNIDAD I: FUNDAMENTOS DEL DERECHO URBANÍSTICO", hours: 15, topics: ["Evolución del derecho urbanístico", "Principios generales", "Función social de la propiedad", "Marco constitucional"] },
        { title: "UNIDAD II: ORDENAMIENTO TERRITORIAL", hours: 15, topics: ["Concepto y objetivos", "Clasificación y calificación del suelo", "Uso del suelo y restricciones", "Zonificación urbana"] },
        { title: "UNIDAD III: PLANIFICACIÓN Y NORMATIVA", hours: 15, topics: ["Planes de desarrollo urbano", "Planes específicos", "Reglamentos urbanísticos", "Instrumentos de gestión"] },
        { title: "UNIDAD IV: COMPETENCIAS Y DEFENSA", hours: 15, topics: ["Competencias municipales", "Actuación administrativa", "Procedimientos administrativos", "Defensa contenciosa"] }
      ],
      metodologia: ["Análisis de normativa peruana", "Estudio de casos reales", "Talleres técnicos"],
      sistemaEvaluacion: [{ component: "Lectura", weight: "30%" }, { component: "Casos", weight: "30%" }, { component: "Final", weight: "40%" }],
      trabajoFinal: "Elaboración de un Informe Legal Urbanístico.",
      bibliografia: ["Ley 27972", "Ley 29090", "Reglamento Nacional de Edificaciones"],
      resultadoAprendizaje: "Capacidad de interpretar y aplicar normativa urbanística y territorial."
    }
  ]
};

export const PROGRAM_PROYECTOS: ProgramData = {
  id: 'proyectos',
  title: 'Programa Experto en Proyectos Inmobiliarios',
  subtitle: 'Estructuración, Gestión y Cierre Integral de Proyectos Inmobiliarios',
  presentationText: 'El éxito de un proyecto inmobiliario no depende únicamente de la construcción, sino de una adecuada estructuración legal, técnica, financiera y comercial desde la etapa inicial. El programa forma especialistas en concebir y cerrar proyectos inmobiliarios con éxito.',
  presentationBullets: [
    "Enfoque integral 360° del proyecto inmobiliario",
    "Formación aplicada a proyectos reales del mercado peruano",
    "Prevención de riesgos legales, técnicos y financieros",
    "Dominio del ciclo completo: idea → ejecución → cierre"
  ],
  presentationQuote: "Estructuración, Gestión y Cierre Integral de Proyectos",
  finalDiploma: "DIPLOMA DE EXPERTO EN PROYECTOS INMOBILIARIOS – ISDEI",
  participantProfile: ["Desarrolladores y promotores", "Abogados inmobiliarios", "Arquitectos e ingenieros", "Gestores de proyectos", "Inversionistas", "Funcionarios públicos"],
  graduateProfile: [
    "Estructurar legal y urbanísticamente proyectos",
    "Evaluar y controlar el desarrollo técnico de obra",
    "Diseñar estructuras financieras rentables",
    "Gestionar la comercialización inmobiliaria",
    "Cerrar proyectos inmobiliarios sin contingencias"
  ],
  specialties: [
    {
      title: "ESPECIALIDAD I: GESTIÓN LEGAL Y URBANÍSTICA DEL PROYECTO INMOBILIARIO",
      items: ["Derecho inmobiliario aplicado al proyecto", "Saneamiento físico–legal del predio", "Zonificación, parámetros y planes urbanos", "Viabilidad urbanística del proyecto", "Habilitaciones urbanas y licencias"],
      certification: "Especialista en Gestión Legal y Urbanística del Proyecto Inmobiliario"
    },
    {
      title: "ESPECIALIDAD II: GESTIÓN TÉCNICA Y DESARROLLO DEL PROYECTO INMOBILIARIO",
      items: ["Diseño y planificación técnica del proyecto", "Gestión constructiva y supervisión de obra", "Control de costos, plazos y calidad", "Gestión de riesgos técnicos", "Cierre técnico y post–obra"],
      certification: "Especialista en Gestión Técnica y Desarrollo del Proyecto Inmobiliario"
    },
    {
      title: "ESPECIALIDAD III: GESTIÓN FINANCIERA, COMERCIAL Y CIERRE DEL PROYECTO INMOBILIARIO",
      items: ["Finanzas inmobiliarias y evaluación del proyecto", "Estructuración de financiamiento", "Preventas, fideicomisos y esquemas financieros", "Comercialización y contratos inmobiliarios", "Cierre del proyecto y postventa"],
      certification: "Especialista en Gestión Financiera, Comercial y Cierre del Proyecto Inmobiliario"
    }
  ],
  syllabi: [
    {
      id: "legal-proy",
      name: "Gestión Legal y Urbanística del Proyecto Inmobiliario",
      specialtyNumber: "I",
      duracion: "60 horas académicas",
      creditos: 4,
      certificacion: "Especialista en Gestión Legal y Urbanística del Proyecto Inmobiliario",
      sumilla: "Desarrolla competencias jurídicas para estructurar legalmente un proyecto, saneamiento del predio, marco urbanístico, viabilidad normativa, habilitaciones y licencias.",
      competenciaGeneral: "Analiza, estructura y gestiona los aspectos legales y urbanísticos, garantizando viabilidad normativa y seguridad jurídica.",
      competenciasEspecificas: ["Evaluar situación legal y registral", "Gestionar saneamiento físico-legal", "Analizar normativa urbanística", "Determinar viabilidad", "Prevenir contingencias"],
      unidades: [
        { title: "UNIDAD I: PROYECTO INMOBILIARIO Y MARCO LEGAL", hours: 15, topics: ["Concepto y tipologías", "Etapas del proyecto", "Marco legal del desarrollo", "Relación Inmobiliario-Urbanismo", "Riesgos legales frecuentes"] },
        { title: "UNIDAD II: SANEAMIENTO FÍSICO–LEGAL DEL PREDIO", hours: 15, topics: ["Titularidad y tracto sucesivo", "Diagnóstico legal y registral", "Saneamiento físico-legal", "Independización y subdivisión", "Contingencias registrales"] },
        { title: "UNIDAD III: NORMATIVA URBANÍSTICA Y VIABILIDAD", hours: 15, topics: ["Zonificación y uso", "Parámetros urbanísticos", "Planes urbanos aplicables", "Compatibilidad técnica-legal", "Compatibilidad técnica-legal", "Cambios de zonificación"] },
        { title: "UNIDAD IV: HABILITACIONES Y LICENCIAS", hours: 15, topics: ["Habilitaciones urbanas", "Licencias de edificación", "Procedimientos y plazos", "Silencio administrativo", "Prevención de nulidades"] }
      ],
      metodologia: ["Exposición teórica", "Análisis de normativa", "Estudio de casos reales", "Talleres de diagnóstico"],
      sistemaEvaluacion: [{ component: "Participación", weight: "30%" }, { component: "Casos prácticos", weight: "30%" }, { component: "Trabajo final", weight: "40%" }],
      trabajoFinal: "Informe de Viabilidad Legal y Urbanística del Proyecto Inmobiliario.",
      bibliografia: ["Código Civil Peruano", "Ley 29090", "Reglamento Nacional de Edificaciones"],
      resultadoAprendizaje: "Capacidad de estructurar legal y urbanísticamente un proyecto inmobiliario."
    }
  ]
};

export const PROGRAM_NEGOCIOS: ProgramData = {
  id: 'negocios',
  title: 'Programa Experto en Gestión de Negocios Inmobiliarios',
  subtitle: 'Dirección, Gestión, Rentabilidad y Comercialización Inmobiliaria',
  presentationText: 'El mercado inmobiliario actual exige profesionales capaces de gestionar el negocio inmobiliario de manera integral, combinando visión estratégica, control financiero, eficiencia operativa y capacidad comercial.',
  presentationBullets: [
    "Enfoque empresarial aplicado al sector inmobiliario",
    "Gestión integral del negocio inmobiliario",
    "Control financiero y rentabilidad real",
    "Profesionalización de la comercialización y operaciones"
  ],
  presentationQuote: "Optimización, Rentabilidad y Escalamiento del Negocio Inmobiliario",
  finalDiploma: "DIPLOMA DE EXPERTO EN GESTIÓN DE NEGOCIOS INMOBILIARIOS – ISDEI",
  participantProfile: ["Empresarios y emprendedores", "Gerentes y administradores", "Brokers y agentes", "Desarrolladores y promotores", "Abogados y asesores"],
  graduateProfile: [
    "Dirigir empresas y proyectos inmobiliarios",
    "Diseñar estrategias inmobiliarias rentables",
    "Controlar costos y rentabilidad",
    "Gestionar operaciones y comercialización profesionalmente",
    "Fidelizar clientes y escalar el negocio inmobiliario"
  ],
  specialties: [
    {
      title: "ESPECIALIDAD I: GESTIÓN ESTRATÉGICA Y ORGANIZACIÓN DEL NEGOCIO INMOBILIARIO",
      items: ["El negocio inmobiliario como empresa", "Planeamiento estratégico inmobiliario", "Modelos de negocio inmobiliario", "Organización interna y procesos", "Gobierno corporativo y gestión de riesgos"],
      certification: "Especialista en Gestión Estratégica y Organización del Negocio Inmobiliario"
    },
    {
      title: "ESPECIALIDAD II: GESTIÓN FINANCIERA, COSTOS Y RENTABILIDAD INMOBILIARIA",
      items: ["Finanzas aplicadas al negocio inmobiliario", "Estructura de costos inmobiliarios", "Presupuestos y flujo de caja", "Evaluación económica de proyectos", "Indicadores financieros inmobiliarios"],
      certification: "Especialista en Gestión Financiera y Rentabilidad Inmobiliaria"
    },
    {
      title: "ESPECIALIDAD III: GESTIÓN COMERCIAL, OPERACIONES Y EXPERIENCIA DEL CLIENTE INMOBILIARIO",
      items: ["Comercialización inmobiliaria estratégica", "Negociación y cierre de operaciones", "Operaciones inmobiliarias y postventa", "Experiencia del cliente inmobiliario", "Fidelización y escalamiento del negocio"],
      certification: "Especialista en Gestión Comercial y Operations Inmobiliarias"
    }
  ],
  syllabi: [
    {
      id: "estrat-neg",
      name: "Gestión Estratégica y Organización del Negocio Inmobiliario",
      specialtyNumber: "I",
      duracion: "60 horas académicas",
      creditos: 4,
      certificacion: "Especialista en Gestión Estratégica y Organización del Negocio Inmobiliario",
      sumilla: "Desarrolla las competencias necesarias para concebir, estructurar y dirigir el negocio inmobiliario como una empresa competitiva y eficiente.",
      competenciaGeneral: "Diseña y gestiona estratégicamente el negocio inmobiliario, organizando su estructura y recursos para asegurar rentabilidad.",
      competenciasEspecificas: ["Analizar negocio desde perspectiva empresarial", "Diseñar planes estratégicos", "Aplicar modelos de negocio adecuados", "Organizar estructura interna", "Gestionar riesgos corporativos"],
      unidades: [
        { title: "UNIDAD I: EL NEGOCIO COMO EMPRESA", hours: 15, topics: ["Evolución del mercado", "Cadena de valor inmobiliaria", "Tipos de empresas", "Riesgos del negocio informal"] },
        { title: "UNIDAD II: PLANEAMIENTO ESTRATÉGICO", hours: 15, topics: ["Misión, visión y objetivos", "Análisis FODA inmobiliario", "Estrategias de posicionamiento", "Indicadores estratégicos"] },
        { title: "UNIDAD III: MODELOS Y ORGANIZACIÓN", hours: 15, topics: ["Modelos: Intermediación, Desarrollo, Inversión", "Roles y organigramas", "Gestión por procesos", "Manuales y protocolos"] },
        { title: "UNIDAD IV: GOBIERNO Y RIESGOS", hours: 15, topics: ["Gobierno corporativo", "Gestión de riesgos legales/financieros", "Cumplimiento normativo", "Sostenibilidad del negocio"] }
      ],
      metodologia: ["Talleres de planeamiento", "Análisis de casos reales", "Trabajo colaborativo"],
      sistemaEvaluacion: [{ component: "Participación", weight: "30%" }, { component: "Casos prácticos", weight: "30%" }, { component: "Trabajo final", weight: "40%" }],
      trabajoFinal: "Plan Estratégico del Negocio Inmobiliario.",
      bibliografia: ["Porter, M. - Estrategia", "Brueggeman - Real Estate Finance"],
      resultadoAprendizaje: "Capacidad de estructurar y dirigir estratégicamente un negocio inmobiliario."
    }
  ]
};

export const PROGRAM_INMOBILIARIO: ProgramData = {
  id: 'inmobiliario',
  title: 'Programa Experto Inmobiliario',
  subtitle: 'Formación Integral en Gestión Legal, Comercial, Técnica y Financiera',
  presentationText: 'El mercado inmobiliario actual exige profesionales integrales, capaces de comprender el inmueble desde el derecho, el negocio y la inversión. El Programa Experto Inmobiliario – ISDEI ha sido diseñado para formar especialistas con una visión 360° del sector inmobiliario, capaces de evaluar, estructurar, comercializar y gestionar inmuebles con seguridad jurídica, criterio comercial y análisis técnico–financiero.',
  presentationBullets: [
    "Enfoque integral: legal + comercial + técnico–financiero",
    "Formación aplicada a casos reales del mercado peruano",
    "Prevención de riesgos legales, comerciales y técnicos",
    "Metodología práctica y estratégica",
    "Certificación modular y diploma final de Experto",
    "Diseñado por especialistas en derecho y gestión inmobiliaria"
  ],
  presentationQuote: "Visión 360° del sector inmobiliario: Legal, Comercial, Técnico y Financiero",
  finalDiploma: "DIPLOMA DE EXPERTO INMOBILIARIO – ISDEI",
  participantProfile: [
    "Abogados y estudiantes de Derecho",
    "Agentes y brokers inmobiliarios",
    "Arquitectos e ingenieros",
    "Gestores y administradores inmobiliarios",
    "Inversionistas y desarrolladores",
    "Empresarios del sector inmobiliario"
  ],
  graduateProfile: [
    "Evaluar legal, comercial y técnicamente un inmueble",
    "Detectar y prevenir riesgos inmobiliarios",
    "Estructurar y cerrar negocios inmobiliarios",
    "Gestionar inmuebles como activos de inversión",
    "Asesorar profesionalmente operaciones inmobiliarias complejas"
  ],
  specialties: [
    {
      title: "ESPECIALIDAD I: DERECHO Y GESTIÓN LEGAL INMOBILIARIA",
      items: [
        "Marco legal del inmueble",
        "Derechos reales, propiedad y posesión",
        "Saneamiento registral y municipal",
        "Contratación inmobiliaria moderna",
        "Prevención y defensa en conflictos inmobiliarios"
      ],
      certification: "Especialista en Derecho y Gestión Legal Inmobiliaria"
    },
    {
      title: "ESPECIALIDAD II: GESTIÓN COMERCIAL Y NEGOCIOS INMOBILIARIOS",
      items: [
        "Análisis del mercado inmobiliario",
        "Gestión de ventas y negociación inmobiliaria",
        "Marketing inmobiliario estratégico",
        "Estructuración de negocios inmobiliarios",
        "Modelos de negocio y joint ventures"
      ],
      certification: "Especialista en Gestión Comercial y Negocios Inmobiliarios"
    },
    {
      title: "ESPECIALIDAD III: GESTIÓN TÉCNICA y FINANCIERA DEL INMUEBLE",
      items: [
        "Evaluación técnica del inmueble",
        "Finanzas inmobiliarias y rentabilidad",
        "Tasación y valorización inmobiliaria",
        "Gestión de alquileres y administración",
        "Inversión y explotación inmobiliaria"
      ],
      certification: "Especialista en Gestión Técnica y Financiera del Inmueble"
    }
  ],
  syllabi: [
    {
      id: "legal-inm",
      name: "Derecho y Gestión Legal Inmobiliaria",
      specialtyNumber: "I",
      duracion: "60 horas académicas",
      creditos: 4,
      certificacion: "Especialista en Derecho y Gestión Legal Inmobiliaria",
      sumilla: "El curso de Derecho y Gestión Legal Inmobiliaria desarrolla de manera integral el marco jurídico aplicable a los bienes inmuebles, abordando los derechos reales, el saneamiento registral y municipal, la contratación inmobiliaria moderna y la prevención y gestión de conflictos inmobiliarios.",
      competenciaGeneral: "Analiza y gestiona jurídicamente bienes y operaciones inmobiliarias, identificando riesgos legales y aplicando estrategias preventivas y de defensa conforme al marco normativo vigente.",
      competenciasEspecificas: [
        "Interpretar los derechos reales aplicables a los bienes inmuebles.",
        "Analizar la situación registral y municipal de un inmueble.",
        "Evaluar y estructurar contratos inmobiliarios.",
        "Identificar contingencias legales en operaciones inmobiliarias.",
        "Proponer soluciones legales preventivas y correctivas ante conflictos inmobiliarios."
      ],
      unidades: [
        { title: "UNIDAD I: FUNDAMENTOS DEL DERECHO INMOBILIARIO", hours: 15, topics: ["El inmueble como objeto jurídico", "Clasificación de los bienes inmuebles", "Derechos reales: propiedad, posesión y otros", "Copropiedad y propiedad horizontal", "Diferencia entre realidad física y titularidad registral", "Riesgos jurídicos frecuentes"] },
        { title: "UNIDAD II: SANEAMIENTO REGISTRAL Y MUNICIPAL", hours: 15, topics: ["Sistema Registral Peruano – SUNARP", "Lectura e interpretación de partidas registrales", "Tracto sucesivo, cargas y gravámenes", "Saneamiento físico–legal", "Certificados municipales y catastrales", "Habilitaciones urbanas y licencias"] },
        { title: "UNIDAD III: CONTRATACIÓN INMOBILIARIA MODERNA", hours: 15, topics: ["Compraventa inmobiliaria", "Arras, opción de compra y promesa contractual", "Bienes futuros y proyectos inmobiliarios", "Cláusulas críticas y abusivas", "Responsabilidad del vendedor y promotor", "Protección al consumidor inmobiliario"] },
        { title: "UNIDAD IV: CONFLICTOS Y DEFENSA LEGAL", hours: 15, topics: ["Conflictos de posesión y propiedad", "Desalojo, reivindicación y prescripción adquisitiva", "Conflictos en propiedad horizontal y juntas", "Conciliación, arbitraje y proceso judicial", "Estrategias de prevención de conflictos"] }
      ],
      metodologia: ["Exposición teórica aplicada", "Análisis de casos reales del mercado peruano", "Talleres prácticos de lectura registral", "Simulaciones legales"],
      sistemaEvaluacion: [{ component: "Lectura y participación", weight: "30%" }, { component: "Análisis de casos prácticos", weight: "30%" }, { component: "Trabajo final aplicado", weight: "40%" }],
      trabajoFinal: "Elaboración de un Informe Legal Integral de un Inmueble, incluyendo análisis registral, municipal y contractual.",
      bibliografia: ["Código Civil Peruano", "Reglamento SUNARP", "Ley N°27157", "Ley N°29571"],
      resultadoAprendizaje: "El participante culmina el curso con la capacidad de estructurar y gestionar operaciones inmobiliarias con seguridad jurídica."
    },
    {
      id: "comerc-inm",
      name: "Gestión Comercial y Negocios Inmobiliarios",
      specialtyNumber: "II",
      duracion: "60 horas académicas",
      creditos: 4,
      certificacion: "Especialista en Gestión Comercial y Negocios Inmobiliarios",
      sumilla: "El curso desarrolla las competencias necesarias para analizar, estructurar, comercializar y cerrar negocios inmobiliarios de manera profesional, integrando estrategias comerciales, negociación y marketing.",
      competenciaGeneral: "Gestiona y estructura negocios inmobiliarios de manera estratégica, aplicando técnicas comerciales, de negociación y marketing, orientadas al cierre eficiente de operaciones.",
      competenciasEspecificas: [
        "Analizar el mercado inmobiliario y su dinámica comercial.",
        "Diseñar estrategias de comercialización inmobiliaria.",
        "Aplicar técnicas profesionales de venta y negociación.",
        "Evaluar la viabilidad comercial de operaciones.",
        "Estructurar negocios inmobiliarios con enfoque estratégico."
      ],
      unidades: [
        { title: "UNIDAD I: MERCADO INMOBILIARIO Y ANÁLISIS", hours: 15, topics: ["Mercado inmobiliario: conceptos y tipologías", "Oferta, demanda y ciclos inmobiliarios", "Análisis de precios y valorización comercial", "Segmentación de clientes inmobiliarios", "Perfil del comprador e inversionista"] },
        { title: "UNIDAD II: GESTIÓN DE VENTAS Y NEGOCIACIÓN", hours: 15, topics: ["Proceso de venta inmobiliaria profesional", "Técnicas de prospección y captación", "Negociación inmobiliaria estratégica", "Manejo de objeciones y cierre de ventas", "Ética y responsabilidad profesional"] },
        { title: "UNIDAD III: MARKETING INMOBILIARIO ESTRATÉGICO", hours: 15, topics: ["Branding inmobiliario", "Marketing digital aplicado", "Publicidad inmobiliaria y normativa", "Experiencia del cliente inmobiliario", "Posicionamiento de proyectos y propiedades"] },
        { title: "UNIDAD IV: ESTRUCTURACIÓN DE NEGOCIOS", hours: 15, topics: ["Intermediación vs. desarrollo", "Modelos de negocio inmobiliario", "Joint ventures y asociaciones estratégicas", "Evaluación de riesgos comerciales", "Toma de decisiones estratégica"] }
      ],
      metodologia: ["Exposición teórica aplicada", "Análisis de casos reales del mercado inmobiliario", "Talleres prácticos de negociación", "Simulaciones de cierre de operaciones"],
      sistemaEvaluacion: [{ component: "Lectura y participación", weight: "30%" }, { component: "Casos prácticos y simulaciones", weight: "30%" }, { component: "Trabajo final aplicado", weight: "40%" }],
      trabajoFinal: "Elaboración de un Plan Comercial Inmobiliario, que incluya análisis de mercado, estrategia y propuesta de cierre.",
      bibliografia: ["Manuales de Gestión Comercial Inmobiliaria", "Legislación sobre intermediación", "Estudios de mercado inmobiliario (Perú)"],
      resultadoAprendizaje: "El participante culmina con la capacidad de estructurar y gestionar operaciones desde el enfoque comercial."
    },
    {
      id: "tecn-inm",
      name: "Gestión Técnica y Financiera del Inmueble",
      specialtyNumber: "III",
      duracion: "60 horas académicas",
      creditos: 4,
      certificacion: "Especialista en Gestión Técnica y Financiera del Inmueble",
      sumilla: "El curso desarrolla las competencias necesarias para evaluar un inmueble como activo técnico y financiero, integrando aspectos constructivos, normativos, económicos y de inversión.",
      competenciaGeneral: "Evalúa y gestiona inmuebles desde el enfoque técnico y financiero, analizando su viabilidad, rentabilidad y riesgos para la toma de decisiones.",
      competenciasEspecificas: [
        "Analizar técnicamente un inmueble y su estado constructivo.",
        "Identificar riesgos técnicos, normativos y operativos.",
        "Valorar inmuebles mediante criterios técnicos y financieros.",
        "Evaluar la rentabilidad de proyectos y operaciones.",
        "Gestionar inmuebles como activos de inversión."
      ],
      unidades: [
        { title: "UNIDAD I: EVALUACIÓN TÉCNICA DEL INMUEBLE", hours: 15, topics: ["Lectura técnica del inmueble", "Sistemas constructivos y materiales", "Patologías constructivas frecuentes", "Inspección técnica básica", "Riesgos técnicos y normativos"] },
        { title: "UNIDAD II: FINANZAS INMOBILIARIAS", hours: 15, topics: ["Conceptos básicos de finanzas inmobiliarias", "Flujos de caja inmobiliarios", "Rentabilidad, ROI y TIR", "Costos, gastos e impuestos", "Financiamiento y créditos hipotecarios"] },
        { title: "UNIDAD III: TASACIÓN Y VALORACIÓN", hours: 15, topics: ["Valor comercial, legal y financiero", "Métodos de tasación inmobiliaria", "Factores de influencia en el valor", "Informes técnicos de tasación", "Riesgos en la valorización"] },
        { title: "UNIDAD IV: GESTIÓN Y ADMINISTRACIÓN", hours: 15, topics: ["Administración de inmuebles y condominios", "Gestión de alquileres tradicionales", "Alquileres temporales y vacacionales", "Mantenimiento, operación y sostenibilidad", "Gestión de riesgos y contingencias"] }
      ],
      metodologia: ["Exposición teórica aplicada", "Análisis de casos reales del mercado inmobiliario", "Talleres prácticos de valoración", "Simulaciones de análisis financiero"],
      sistemaEvaluacion: [{ component: "Participación y controles", weight: "30%" }, { component: "Casos prácticos aplicados", weight: "30%" }, { component: "Trabajo final", weight: "40%" }],
      trabajoFinal: "Elaboración de un Informe Técnico–Financiero de un Inmueble (evaluación, análisis, valorización).",
      bibliografia: ["Manuales de Tasación", "Normativa técnica - RNE", "Legislación inmobiliaria y financiera"],
      resultadoAprendizaje: "Capacidad de evaluar inmuebles como activos técnicos y financieros para decisiones informadas."
    }
  ]
};

export const MENU_PROGRAMAS = [
  { id: 'empresarial', name: 'Programa experto empresarial' },
  { id: 'urbanismo', name: 'Programa Experto Urbanismo' },
  { id: 'negocios', name: 'Programa Experto en Gestión de Negocios Inmobiliarios' },
  { id: 'proyectos', name: 'Programa experto en proyectos inmobiliarios' },
  { id: 'inmobiliario', name: 'Programa experto inmobiliario' }
];

export const ALL_PROGRAMS_DATA: Record<string, ProgramData> = {
  empresarial: PROGRAM_EMPRESARIAL,
  urbanismo: PROGRAM_URBANISMO,
  proyectos: PROGRAM_PROYECTOS,
  inmobiliario: PROGRAM_INMOBILIARIO,
  negocios: PROGRAM_NEGOCIOS
};
