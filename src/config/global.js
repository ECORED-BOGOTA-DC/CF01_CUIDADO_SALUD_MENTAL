export default {
  global: {
    componenteFormativo: 'Salud mental, normas y perspectiva de derechos',
    descripcionCurso:
      'En el presente componente, el aprendiz tendrá la oportunidad de apropiar conocimientos enlazados con la salud mental en general y de manera específica en Colombia, adentrándose en la política pública para la atención en salud mental, además, conocerá las diferencias de los determinantes sociales en la salud, enmarcados en agentes de riesgo y protección de la salud mental.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Salud mental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de salud mental positiva',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Salud mental comunitaria',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Derechos en salud mental',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Plan de beneficios en salud mental',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Atención integral a personas que consumen sustancias psicoactivas',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Salud mental en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Política Nacional de Salud Mental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Riesgo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Familia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Violencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Crisis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Trastornos mentales prevalentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Signos de alarma',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Conductas asociadas',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Intervención primaria',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Afrontamiento y factor protector',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Salud mental comunitaria',
      referencia:
        'Ministerio de Salud y Protección Social. Dirección de Promoción y Prevención. (2014). <i>Componente intersectorial y comunitario de la estrategia de gestión del riesgo en salud mental</i>. ROSS.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/componente-intersectorial-comunitario-estrategia-salud-mental.pdf',
    },
    {
      tema: 'Salud mental en Colombia',
      referencia:
        'Ministerio de Salud. (s.f.). <i>Dimensión convivencia social y salud mental</i>.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/plandecenal/Documents/dimensiones/convivenciasocial-ysalud-mental.pdf',
    },
    {
      tema: 'Salud mental en Colombia',
      referencia:
        'Ley 1751 de 2015. Ministerio de Salud y de la Protección Social.  Febrero 16 de 2015.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Ley%201751%20de%202015.pdf',
    },
    {
      tema: 'Trastornos mentales prevalentes',
      referencia:
        'Ministerio de Salud y Protección Social & Colombia. COLCIENCIAS. (2015). <i>Encuesta Nacional de Salud Mental 2015</i>.',
      tipo: 'Otro',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/encuesta-nacional-salud-mental-ensm-2015.zip',
    },
  ],
  glosario: [
    {
      termino: 'Afrontamiento',
      significado:
        'es el conjunto de habilidades, destrezas y recursos psíquicos para actuar frente a un evento estresor que se le pueda presentar a lo largo de la vida.',
    },
    {
      termino: 'Crisis',
      significado: 'la reacción que puede tener una persona ante un evento.',
    },
    {
      termino: 'Demencia',
      significado:
        'la demencia es un trastorno cerebral que afecta gravemente la capacidad de una persona de llevar a cabo sus actividades diarias.',
    },
    {
      termino: 'Riesgo psicosocial',
      significado:
        'se presenta cuando el individuo posee niveles de estrés que le impiden desempeñar sus funciones de manera adecuada.',
    },
    {
      termino: 'TOC',
      significado: ' Trastorno Obsesivo Compulsivo.',
    },
    {
      termino: 'TEPT',
      significado: ' Trastorno de Estrés Post-Traumático.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abramson, L. Y., Seligman, M. E. y Teasdale, J. D. (1978). <i>Learned hel-plessness in humans: Critique and reformulation</i>. Journal of Abnormal Psychology, 87, p.p. 49-74.',
      link: '',
    },
    {
      referencia:
        'Blanco, A., Diaz, D. (2005). <i>El bienestar social: su concepto y medición</i>. Psicothema. 2005; 17 (4) p.p. 582-589.',
      link: '',
    },
    {
      referencia:
        'Fierro, M., Bustos, A., Molina, C. (2016). <i>Diferencias en la experiencia subjetiva entre depresión unipolar y bipolar</i>. Revista Colombiana de Psiquiatría. Vol. 45. Núm. 3. p.p. 162-169. ',
      link:
        'https://www.elsevier.es/es-revista-revista-colombiana-psiquiatria-379-articulo-diferencias-experiencia-subjetiva-entre-depresion-S0034745015001420#:~:text=En%20la%20depresi%C3%B3n%20unipolar%2C%20el,que%20es%20un%20cuerpo%20triste ',
    },
    {
      referencia:
        'Universidad Autónoma de México (s.f.). <i>Conceptos de crisis</i>. ',
      link: 'http://132.248.9.195/ptd2013/agosto/0698595/0698595.pdf',
    },
    {
      referencia:
        'Vázquez, C. Valverde, M. López, C. y Ring, J. (s.f.). <i>Estrategias de afrontamiento</i>. ',
      link:
        'http://www.psicosocial.net/historico/index.php?option=com_docman&view=download&alias=94-estrategias-de-afrontamiento&category_slug=trauma-duelo-y-culpa&Itemid=100225',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Patricia Díaz Gutiérrez',
          cargo: 'Experta temática',
          centro:
            'Centro de la Industria la Empresa y los Servicios - Regional Huila',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
