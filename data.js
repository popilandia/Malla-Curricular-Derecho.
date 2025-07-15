const mallaCurricular = {
  primerAño: {
    primerSemestre: [
      {
        nombre: "Sistema Jurídico",
        tipo: "obligatorio",
        requisitos: [],
        creditos: 7
      },
      {
        nombre: "Historia del Derecho",
        tipo: "obligatorio",
        requisitos: [],
        creditos: 5
      },
      {
        nombre: "Teoría Constitucional",
        tipo: "obligatorio",
        requisitos: [],
        creditos: 7
      },
      {
        nombre: "Jurisdicción",
        tipo: "obligatorio",
        requisitos: [],
        creditos: 5
      },
      {
        nombre: "Comunicación Oral y Escrita",
        tipo: "obligatorio",
        requisitos: [],
        creditos: 5
      },
      {
        nombre: "Educación Física y Salud",
        tipo: "obligatorio",
        requisitos: [],
        creditos: null
      }
    ],
    segundoSemestre: [
      {
        nombre: "Razonamiento Jurídico",
        tipo: "obligatorio",
        requisitos: ["Sistema Jurídico"],
        creditos: 7
      },
      {
        nombre: "Historia del Derecho Chileno",
        tipo: "obligatorio",
        requisitos: [],
        creditos: 5
      },
      {
        nombre: "Conceptos Fundamentales de Derecho Privado",
        tipo: "obligatorio",
        requisitos: [],
        creditos: 5
      },
      {
        nombre: "Derecho Constitucional Orgánico",
        tipo: "obligatorio",
        requisitos: ["Teoría Constitucional"],
        creditos: 5
      },
      {
        nombre: "Introducción a la Profesión Jurídica",
        tipo: "obligatorio",
        requisitos: [],
        creditos: 5
      }
    ]
  },

  segundoAño: {
    tercerSemestre: [
      {
        nombre: "Teoría de la Justicia",
        tipo: "obligatorio",
        requisitos: [],
        creditos: 5
      },
      {
        nombre: "Acto Jurídico",
        tipo: "obligatorio",
        requisitos: ["Conceptos Fundamentales de Derecho Privado"],
        creditos: 5
      },
      {
        nombre: "Análisis Jurisprudencial",
        tipo: "obligatorio",
        requisitos: ["Comunicación Oral y Escrita"],
        creditos: 2
      },
      {
        nombre: "Economía",
        tipo: "obligatorio",
        requisitos: [],
        creditos: 5
      },
      {
        nombre: "Derechos Fundamentales",
        tipo: "obligatorio",
        requisitos: ["Teoría Constitucional"],
        creditos: 7
      },
      {
        nombre: "Proceso Civil Ordinario",
        tipo: "obligatorio",
        requisitos: [],
        creditos: 5
      }
    ],
    cuartoSemestre: [
      {
        nombre: "Bienes",
        tipo: "obligatorio",
        requisitos: ["Acto Jurídico"],
        creditos: 5
      },
      {
        nombre: "Taller de Resolución de Casos Prácticos",
        tipo: "obligatorio",
        requisitos: [],
        creditos: null
      },
      {
        nombre: "Derecho Internacional de los Derechos Humanos",
        tipo: "obligatorio",
        requisitos: ["Derechos Fundamentales"],
        creditos: 5
      },
      {
        nombre: "Derecho Económico",
        tipo: "obligatorio",
        requisitos: ["Economía"],
        creditos: 5
      },
      {
        nombre: "Derecho Procesal Constitucional",
        tipo: "obligatorio",
        requisitos: ["Jurisdicción"],
        creditos: 5
      },
      {
        nombre: "Derecho Probatorio",
        tipo: "obligatorio",
        requisitos: [],
        creditos: 5
      },
      {
        nombre: "Optativo de Formación General",
        tipo: "optativo",
        requisitos: [],
        creditos: null
      }
    ]
  },

  tercerAño: {
    quintoSemestre: [
      {
        nombre: "Derecho Societario",
        tipo: "obligatorio",
        requisitos: ["Conceptos Fundamentales de Derecho Privado"],
        creditos: 5
      },
      {
        nombre: "Obligaciones",
        tipo: "obligatorio",
        requisitos: ["Acto Jurídico"],
        creditos: 5
      },
      {
        nombre: "Análisis Doctrinal",
        tipo: "obligatorio",
        requisitos: ["Análisis Jurisprudencial"],
        creditos: 2
      },
      {
        nombre: "Introducción al Derecho Penal",
        tipo: "obligatorio",
        requisitos: ["Derechos Fundamentales"],
        creditos: 5
      },
      {
        nombre: "Bases del Derecho Administrativo",
        tipo: "obligatorio",
        requisitos: ["Derecho Constitucional Orgánico"],
        creditos: 5
      },
      {
        nombre: "Procedimientos Especiales y Recursos Civiles",
        tipo: "obligatorio",
        requisitos: ["Proceso Civil Ordinario"],
        creditos: 5
      },
      {
        nombre: "Optativo de Formación Profesional I",
        tipo: "optativo",
        requisitos: [],
        creditos: null
      }
    ],
    sextoSemestre: [
      {
        nombre: "Contratos",
        tipo: "obligatorio",
        requisitos: ["Acto Jurídico"],
        creditos: 5
      },
      {
        nombre: "Teoría del Delito, del Sujeto Responsable y de la Pena",
        tipo: "obligatorio",
        requisitos: ["Introducción al Derecho Penal"],
        creditos: 5
      },
      {
        nombre: "Derecho Tributario",
        tipo: "obligatorio",
        requisitos: ["Bases del Derecho Administrativo"],
        creditos: 5
      },
      {
        nombre: "Control y Responsabilidad de la Administración",
        tipo: "obligatorio",
        requisitos: ["Bases del Derecho Administrativo"],
        creditos: 5
      },
      {
        nombre: "Regulaciones Ambientales y de Recursos Naturales",
        tipo: "obligatorio",
        requisitos: ["Bases del Derecho Administrativo"],
        creditos: 4
      },
      {
        nombre: "Redacción de Instrumentos Administrativos",
        tipo: "optativo",
        requisitos: [],
        creditos: null
      },
      {
        nombre: "Optativo de Formación Profesional II",
        tipo: "optativo",
        requisitos: [],
        creditos: null
      }
    ]
  },

  cuartoAño: {
    septimoSemestre: [
      {
        nombre: "Redacción de Contratos",
        tipo: "obligatorio",
        requisitos: ["Comunicación Oral y Escrita", "Obligaciones"],
        creditos: 2
      },
      {
        nombre: "Derecho Individual del Trabajo",
        tipo: "obligatorio",
        requisitos: ["Acto Jurídico"],
        creditos: 5
      },
      {
        nombre: "Responsabilidad Civil",
        tipo: "obligatorio",
        requisitos: ["Obligaciones"],
        creditos: 5
      },
      {
        nombre: "Delitos",
        tipo: "obligatorio",
        requisitos: ["Teoría del Delito, del Sujeto Responsable y de la Pena"],
        creditos: 5
      },
      {
        nombre: "Mercados Regulados",
        tipo: "obligatorio",
        requisitos: ["Bases del Derecho Administrativo"],
        creditos: 4
      },
      {
        nombre: "Proceso Penal",
        tipo: "obligatorio",
        requisitos: ["Jurisdicción", "Teoría del Delito, del Sujeto Responsable y de la Pena"],
        creditos: 5
      },
      {
        nombre: "Optativo de Formación Profesional III",
        tipo: "optativo",
        requisitos: [],
        creditos: null
      }
    ],
    octavoSemestre: [
      {
        nombre: "Resolución de Conflictos del Trabajo",
        tipo: "obligatorio",
        requisitos: ["Proceso Civil Ordinario", "Derecho Individual del Trabajo"],
        creditos: 5
      },
      {
        nombre: "Títulos de Crédito e Insolvencia",
        tipo: "obligatorio",
        requisitos: ["Obligaciones"],
        creditos: 5
      },
      {
        nombre: "Derecho y Procedimientos de Familia",
        tipo: "obligatorio",
        requisitos: ["Proceso Civil Ordinario", "Obligaciones"],
        creditos: 5
      },
      {
        nombre: "Derecho y Procedimientos de Consumo",
        tipo: "obligatorio",
        requisitos: ["Proceso Civil Ordinario", "Responsabilidad Civil"],
        creditos: 5
      },
      {
        nombre: "Informe Jurídico",
        tipo: "obligatorio",
        requisitos: ["Análisis Doctrinal"],
        creditos: 2
      },
      {
        nombre: "Litigación Penal",
        tipo: "obligatorio",
        requisitos: ["Comunicación Oral y Escrita", "Delitos", "Proceso Penal"],
        creditos: 5
      },
      {
        nombre: "Optativo de Formación Profesional IV",
        tipo: "optativo",
        requisitos: [],
        creditos: null
      }
    ]
  },

  quintoAño: {
    novenoSemestre: [
      {
        nombre: "Ética y Responsabilidad Profesional",
        tipo: "obligatorio",
        requisitos: ["Proceso Penal", "Responsabilidad Civil"],
        creditos: 5
      },
      {
        nombre: "Derecho Sucesorio",
        tipo: "obligatorio",
        requisitos: ["Bienes"],
        creditos: 5
      },
      {
        nombre: "Pasantía Profesional",
        tipo: "obligatorio",
        requisitos: [
          "Litigación Penal",
          "Resolución de Conflictos del Trabajo",
          "Derecho y Procedimientos de Familia",
          "Derecho y Procedimientos de Consumo"
        ],
        creditos: 10
      },
      {
        nombre: "Litigación Civil, de Familia y del Trabajo",
        tipo: "obligatorio",
        requisitos: [
          "Litigación Penal",
          "Resolución de Conflictos del Trabajo",
          "Derecho y Procedimientos de Familia"
        ],
        creditos: 5
      },
      {
        nombre: "Optativo de Formación Profesional V",
        tipo: "optativo",
        requisitos: [],
        creditos: null
      }
    ],
    decimoSemestre: [
      {
        nombre: "Examen de Licenciatura",
        tipo: "obligatorio",
        requisitos: ["Todas las asignaturas del 1° al 9° semestre"],
        creditos: 31
      }
    ]
  }
};
