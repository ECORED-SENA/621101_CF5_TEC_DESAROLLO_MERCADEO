export default {
  global: {
    componenteFormativo: 'Segmentación y plan de distribución',
    descripcionCurso:
      'A través de este componente formativo el aprendiz debe apropiar los elementos de entrada requeridos para la elaboración del informe de segmentación de mercados y del plan de distribución para su idea de negocio o proyecto productivo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Segmentación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Segmento',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Mercado',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Marketing digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Plan de marketing digital',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estrategia digital',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Social Media Marketing',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'E- business',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Distribución comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Canales de distribución',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Intermediario',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Acuerdos comerciales',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Formatos comerciales',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Logística',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Plan de distribución',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: false,
      // },
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Nelftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Acompañamiento pedagógico',
        centro: 'Centro Agropecuario La Granja',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Claudia Juliana León Pint',
        cargo: 'Experta temática ',
        centro: 'Centro de Servicios Empresariales y Turísticos',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro Agropecuario La Granja',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Jesús Libardo Acero',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: [
          'Jorge Armando Villamizar Moreno',
          'Juan Daniel Polanco Muñoz',
        ],
        cargo: 'Diseño web',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Begoña. Trespalacios, Juan (2006). Estrategias de Distribución Comercial. Ediciones Paraninfo.',
    },
    {
      referencia:
        'Carballar, J.A. (2018) Social Media. Marketing personal y profesional. México. Alfaomega.',
    },
    {
      referencia:
        'Céspedes, A. (2008) Principios de mercadeo. Ed. 5. Bogotá. Ecoe Ediciones.',
    },
    {
      referencia:
        'Chaffey, D. (2014) Marketing digital. Estrategia, implementación y práctica. Ed. 5. México. Pearson.',
    },
    {
      referencia:
        'Fernández, R. (2009) Segmentación de mercados. Ed. 3. México. McGraw-Hill.',
    },
    {
      referencia:
        'Ferré, J. (2003). Estrategias de Distribución. Fundamentos de Marketing. México. Editorial Océano.',
    },
    {
      referencia:
        'Fisher, L. Espejo, J. (2017) Mercadotecnia. Ed. 5. México. McGraw-Hill.',
    },
    {
      referencia:
        'Hernández E. (2018) Manual del comercio electrónico. Barcelona. Marge Books.',
    },
    {
      referencia:
        'Hoyer, W. Mclnnis, D. (2018) Comportamiento del consumidor. Ed. 7. México. Cengage.',
    },
    {
      referencia:
        'Gallo, M.A (2016) Introducción a la logística, Tulua. Uceva.',
    },
    {
      referencia:
        'Gutiérrez, A. (2013). Gestión de stocks en la logística de almacenes. Bogotá. Ediciones de la U.',
    },
    {
      referencia:
        'Irureta, S. (2015) Comercio electrónico. Madrid. McGraw-Hill.',
    },
    {
      referencia:
        'Kerin, R. Harley, S. (2018). Marketing. Ed.13 México. McGraw Hill.',
    },
    {
      referencia:
        'Kloter, P. Keller, K. (2016). Dirección de marketing. Ed. 15. México. Pearson.',
    },
    {
      referencia:
        'Kotler, P. Amstrong, G. (2017). Marketing. Ed.16. México. Pearson.',
    },
    {
      referencia:
        'Lambin, J.J (2009) Dirección de marketing. Gestión estratégica y operativa de mercado. Ed. 2. México. McGraw-Hill.',
    },
    {
      referencia:
        'Prettel, G. (2016). Marketing, una herramienta para el crecimiento. Bogotá. Ediciones de la U.',
    },
    {
      referencia:
        'Prieto, J. E. (2009). Investigación de mercados. Bogotá: Ecoe Ediciones.',
    },
    {
      referencia:
        'Rivas, J. Grande, I. (2017) Comportamiento del consumidor. Decisiones y estrategias de marketing. Ed. 8. Editorial ESIC.',
    },
    {
      referencia:
        'Roldan, S. (2016) Community management 2.0. Gestión de comunidades virtuales. Bogotá. Ecoe Ediciones.',
    },
    {
      referencia:
        'Schiffman, L. (2015) Comportamiento del consumidor. Ed. 11. México. Pearson.',
    },
    {
      referencia:
        'Somalo, I. (2018) El comercio electrónico. Bogotá. Alfaomega.',
    },
    {
      referencia:
        'Soria, M. (2017) Plan de marketing empresarial. Madrid. Editorial ECP.',
    },
    {
      referencia:
        'Vélez, T. (2014) Logística empresarial, gestión eficiente del flujo de suministros. Bogotá. Ediciones de la U.',
    },
    {
      referencia:
        'West, A. (2007). Gestión de la distribución comercial. Madrid: Díaz de Santos Casielles, Rodolfo. Álvarez.',
    },
  ],
  glosario: [
    {
      termino: 'CANAL DE DISTRIBUCIÓN',
      significado:
        'Ruta que toma el producto o servicio para llegar desde el productor hasta el usuario final. El canal de distribución incluye las ventas directas, distribuidores mayoristas, vendedores independientes, correo directo y el comercio a detalle.',
    },
    {
      termino: 'COMUNICACIÓN EN LA DISTRIBUCIÓN',
      significado:
        'La estrategia en la comunicación en la distribución es un elemento estratégico de cooperación de los intermediarios hacia los clientes, que fortalece los canales de marketing.',
    },
    {
      termino: 'COMPORTAMIENTO DEL CONSUMIDOR',
      significado:
        'Forma que un individuo llega a las decisiones relativas a la selección, compra y uso de bienes y servicios.',
    },
    {
      termino: 'DISTRIBUCIÓN FÍSICA O LOGÍSTICA INTEGRAL',
      significado:
        'La logística es el proceso de planear, implementar y controlar procedimientos para transportar y almacenar bienes y servicios de manera eficiente y efectiva, además de información relacionada desde el punto de origen hasta el punto de consumo, con el propósito de cumplir con los requerimientos del consumidor. ',
    },
    {
      termino: 'ESTRATEGIAS DE DISTRIBUCIÓN',
      significado:
        'Las estrategias de distribución deben tener en cuenta las estrategias corporativas y las de mercadeo. En cuanto a estas últimas, es preciso acotar que pueden determinarse estrategias de distribución con respecto a las diferentes variables que componen la mezcla de mercadeo.',
    },
    {
      termino: 'ESTRATEGIAS DE SEGMENTACIÓN',
      significado:
        'Las empresas son conscientes que los compradores no son todos iguales y tienen necesidades distintas, por lo que pueden llevar a cabo diferentes estrategias de segmentación: Estrategia indiferenciada, estrategia de diferenciación y estrategia concentrada o de concentración.',
    },
    {
      termino: 'FORMATOS COMERCIALES',
      significado:
        'Son aquellos lugares en donde se coloca un producto a disposición del cliente de tal manera que este logre conseguirlos a un buen precio. Los formatos comerciales por lo general suelen diferenciarse por su tamaño y por la diferencia de productos existentes.',
    },
    {
      termino: 'HÁBITO DE COMPRA',
      significado:
        'Modo acostumbrado de comportarse del comprador con respecto a los lugares de compra, desplazamientos, tipos de establecimientos visitados, frecuencia de compra, momento de la compra y clases de productos adquiridos, así como los criterios de elección que regularmente utiliza y las actitudes y opiniones que suele tener sobre los establecimientos comerciales.',
    },
    {
      termino: 'LOGÍSTICA',
      significado:
        '«Conjunto de medios y métodos necesarios para llevar a cabo la organización de una empresa, o de un servicio, especialmente de distribución». Es fundamental para el comercio. Las actividades logísticas conforman un sistema que es el enlace entre la producción y los mercados que están separados por el tiempo y la distancia.',
    },
    {
      termino: 'LOGÍSTICA INVERSA',
      significado:
        'Gestiona el retorno de las mercancías en la cadena de suministro, de la forma más efectiva y económica posible, se encarga de la recuperación y reciclaje de envases, embalajes y residuos peligrosos; así como de los procesos de retorno de excesos de inventario, devoluciones de clientes, productos, entre otros.',
    },
    {
      termino: 'MARKETING DIGITAL',
      significado:
        'Está caracterizado por la combinación y utilización de estrategias de comercialización en medios digitales.',
    },
    {
      termino: 'MERCADO',
      significado:
        'Grupo identificable de consumidores con cierto poder adquisitivo, que están dispuestos y disponibles para pagar por un producto o un servicio. La totalidad de los compradores potenciales y actuales de algún producto o servicio.',
    },
    {
      termino: 'MERCADO OBJETIVO',
      significado:
        'Segmento de ese mercado seleccionado por la empresa para ofrecer sus productos o servicios y a los cuales la empresa espera cumplir sus necesidades y sobre el cual se desarrollan todas las estrategias de comercialización, penetración y posicionamiento.',
    },
    {
      termino: 'NICHO DE MERCADO',
      significado: 'Es un segmento de mercado relativamente pequeño.',
    },
    {
      termino: 'SEGMENTACIÓN DE MERCADO',
      significado:
        'Es la división de los mercados para formar grupos distintos, con base en características similares.',
    },
    {
      termino: 'SEGMENTACIÓN CONDUCTUAL',
      significado:
        'Divide a los compradores en grupos, con base a sus conocimientos sobre un producto, su actitud ante al mismo, el uso que le dan o la forma en que responden a un producto.',
    },
    {
      termino: 'SEGMENTACIÓN DEMOGRÁFICA',
      significado:
        'Es la división de grupos de consumidores en segmentos basada en características demográficas, como, edad, ingreso, género y ocupación.',
    },
    {
      termino: 'SEGMENTACIÓN PSICOGRÁFICA',
      significado:
        'Es la segmentación de los clientes por clase social, estilo de vida, características psicológicas, como las actitudes, los intereses, opiniones y valores.',
    },
    {
      termino: 'SEGMENTACIÓN GEOGRÁFICA',
      significado:
        'Es la división de grupos de consumidores en segmentos analizando el lugar donde éstos habitan.',
    },
  ],
  complementario: [
    {
      texto: 'Carballar, J. A. (2018) Social Media.',
      tipo: 'Libro',
      link:
        'https://www-alfaomegacloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alfaomegacloud-com.bdigital.sena.edu.co/reader/social-media-marketing-personal-y-profesional?location=1 ',
    },
    {
      texto: 'Céspedes, A. (2008) Principios de mercadeo.',
      tipo: 'Libro',
      link:
        'http://www.digitaliapublishing.com.bdigital.sena.edu.co/visor/30027',
    },
    {
      texto: 'Fernández, R. (2009) Segmentación de mercados.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=687&pg=1 ',
    },
    {
      texto: 'Fisher, L.; Espejo, J. (2017) Mercadotecnia.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4612&pg=1',
    },
    {
      texto: 'Hernández E. (2018) Manual del comercio electrónico.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45158?page=1 ',
    },
    {
      texto: 'Hoyer, W; Mclnnis, D. (2018) Comportamiento del consumidor.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=7493&pg=1 ',
    },
    {
      texto: 'Irureta, S. (2015) Comercio electrónico.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5357&pg=1 ',
    },
    {
      texto: 'Kerin, R; Harley, S. (2018). Marketing.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=6261&pg=1 ',
    },
    {
      texto: 'Kotler, P. (2016) Dirección de marketing.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4273&pg=1 ',
    },
    {
      texto: 'Kotler, P; Amstrong, G. (2017). Marketing.    ',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4426&pg=1 ',
    },
    {
      texto: 'Lambin, J.J (2009) Dirección de marketing.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=515&pg=1 ',
    },
    {
      texto:
        'Prettel, G. (2016) Marketing, una herramienta para el crecimiento.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5684&pg=1 ',
    },
    {
      texto: 'Prieto, J. E. (2009). Investigación de mercados.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69104?page=1 ',
    },
    {
      texto: 'Rivas, J; Grande, I. (2017) Comportamiento del consumidor.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/119581?page=1 ',
    },
    {
      texto: 'Roldan, S. (2016) Community management 2.0.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3161&pg=1 ',
    },
    {
      texto: 'Schiffman, L. (2015) Comportamiento del consumidor.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3468&pg=1 ',
    },
    {
      texto: 'Somalo, I. (2018) El comercio electrónico.',
      tipo: 'Libro',
      link:
        'https://www-alfaomegacloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alfaomegacloud-com.bdigital.sena.edu.co/reader/el-comercio-electronico?location=1 ',
    },
    {
      texto: 'Soria, M. (2017) Plan de marketing empresarial.',
      tipo: 'Libro',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=5214046&ppg=1 ',
    },
    {
      texto: 'Vélez, T. (2014) Logística empresarial.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5569&pg=1',
    },
  ],
}
