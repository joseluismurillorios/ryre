/* eslint-disable quote-props */
export const COUNTRIES = [
  {
    name: 'USA',
    id: 0,
  },
  {
    name: 'Mexico',
    id: 1,
  },
  {
    name: 'Canada',
    id: 2,
  },
];

export const COLORS = [
  '#b48cc3',
  '#d18a9a',
  '#7e90ca',
  '#ef5659',
];

export const FADEIN = {
  active: {
    animationDuration: '3s',
    animationDelay: '0s',
    animationName: 'fadeIn',
  },
  inactive: {
    visibility: 'hidden',
    animationDuration: '2s',
    animationDelay: '0.2s',
    animationName: 'none',
  },
};

export const TIJUANA = [-116.895005, 32.480795]; // [-116.952631, 32.476784];
export const IMPLANLATLONG = {
  latitude: 32.520666,
  longitude: -117.021315,
};

export const DELEGACIONES = [
  {
    id: 0,
    name: 'Playas de Tijuana',
    displayName: 'P',
    Area: 61611939.3885,
    Acres: 15224.641786,
    Hectareas: 6161.19393884972,
    HA: 6161.193939,
    POB_TOT_10: 131.143,
    Shape_Leng: 48808.581907,
    latitude: 32.522946,
    longitude: -117.112631,
  },
  {
    id: 1,
    name: 'S.A.B.',
    displayName: 'SAB',
    Area: 62421072.3632,
    Acres: 15424.582898,
    Hectareas: 6242.10723631826,
    HA: 6242.107236,
    POB_TOT_10: 206.317,
    Shape_Leng: 50045.785684,
    latitude: 32.480423,
    longitude: -117.032089,
  },
  {
    id: 2,
    name: 'Presa Este',
    displayName: 'PE',
    Area: 436548229.417,
    Acres: 107873.416759,
    Hectareas: 43654.8229417307,
    HA: 43654.822942,
    POB_TOT_10: 199.127,
    Shape_Leng: 126879.598784,
    latitude: 32.457615,
    longitude: -116.822631,
  },
  {
    id: 3,
    name: 'Resto del Municipio',
    displayName: 'RDM',
    Area: 465751505.323,
    Acres: 115089.703392,
    Hectareas: 46575.1505323007,
    HA: 46575.150532,
    POB_TOT_10: 156,
    Shape_Leng: 118101.441578,
    latitude: 32.418175,
    longitude: -116.875812,
  },
  {
    id: 4,
    name: 'Sánchez Taboada',
    displayName: 'ST',
    Area: 42628481.8495,
    Acres: 10533.727269,
    Hectareas: 4262.84818494534,
    HA: 4262.848185,
    POB_TOT_10: 190.316,
    Shape_Leng: 42498.706182,
    latitude: 32.458854,
    longitude: -117.003337,
  },
  {
    id: 5,
    name: 'Cerro Colorado',
    displayName: 'CC',
    Area: 23474290.538,
    Acres: 5800.623518,
    Hectareas: 2347.42905379833,
    HA: 2347.429054,
    POB_TOT_10: 121.02,
    Shape_Leng: 25712.189977,
    latitude: 32.497324,
    longitude: -116.917879,
  },
  {
    id: 6,
    name: 'Centro',
    displayName: 'C',
    Area: 24926755.0764,
    Acres: 6159.535322,
    Hectareas: 2492.675507645,
    HA: 2492.675508,
    POB_TOT_10: 101.113,
    Shape_Leng: 26246.993714,
    latitude: 32.538185,
    longitude: -117.0355,
  },
  {
    id: 7,
    name: 'Otay Centenario',
    displayName: 'OC',
    Area: 52610731.5633,
    Acres: 13000.394892,
    Hectareas: 5261.07315633443,
    HA: 5261.073156,
    POB_TOT_10: 205.132,
    Shape_Leng: 47976.638697,
    latitude: 32.535856,
    longitude: -116.943111,
  },
  {
    id: 8,
    name: 'La Presa',
    displayName: 'LP',
    Area: 36592689.1598,
    Acres: 9042.250414,
    Hectareas: 3659.26891598044,
    HA: 3659.268916,
    POB_TOT_10: 270.31,
    Shape_Leng: 31319.280517,
    latitude: 32.504613,
    longitude: -116.866445,
  },
  {
    id: 9,
    name: 'La Mesa',
    displayName: 'LM',
    Area: 30537115.2848,
    Acres: 7545.885521,
    Hectareas: 3053.71152847881,
    HA: 3053.711528,
    POB_TOT_10: 135.205,
    Shape_Leng: 39819.170664,
    latitude: 32.507536,
    longitude: -116.969248,
  },
];

export const TYPES = {
  4001: 'Derrumbe de inmueble',
  4011: 'Riesgo de electrocutamiento',
  4021: 'Inundacion de inmueble',
  4031: 'Arroyo crecido',
  4041: 'Azolves/Taponamientos',
  4051: 'Socavones',
  4061: 'Deslave de talud o cerro',
  4071: 'Elemento vertical colapsado',
  4081: 'Inundacion de vialidades',
  4091: 'Asentamiento grave de inmueble',
  4101: 'Bardas colapsadas o en riesgo',
  4111: 'Interrupción de energía eléctrica',
  4121: 'Fugas',
  4131: 'Otro',
};


export const CATEGORIES = {
  3: {
    name: 'Lluvia (Riesgos)',
    items: {
      0: {
        name: 'Derrumbe de inmueble',
        items: {
          4001: 'Derrumbe de inmueble',
        },
      },
      1: {
        name: 'Riesgo de electrocutamiento',
        items: {
          4011: 'Riesgo de electrocutamiento',
        },
      },
      2: {
        name: 'Inundacion de inmueble',
        items: {
          4021: 'Inundacion de inmueble',
        },
      },
      3: {
        name: 'Arroyo crecido',
        items: {
          4031: 'Arroyo crecido',
        },
      },
      4: {
        name: 'Azolves/Taponamientos',
        items: {
          4041: 'Azolves/Taponamientos',
        },
      },
      5: {
        name: 'Socavones',
        items: {
          4051: 'Socavones',
        },
      },
      6: {
        name: 'Deslave de talud o cerro',
        items: {
          4061: 'Deslave de talud o cerro',
        },
      },
      7: {
        name: 'Elemento vertical colapsado',
        items: {
          4071: 'Elemento vertical colapsado',
        },
      },
      8: {
        name: 'Inundacion de vialidades',
        items: {
          4081: 'Inundacion de vialidades',
        },
      },
      9: {
        name: 'Asentamiento grave de inmueble',
        items: {
          4091: 'Asentamiento grave de inmueble',
        },
      },
      10: {
        name: 'Bardas colapsadas o en riesgo',
        items: {
          4101: 'Bardas colapsadas o en riesgo',
        },
      },
      11: {
        name: 'Interrupción de energía eléctrica',
        items: {
          4111: 'Interrupción de energía eléctrica',
        },
      },
      12: {
        name: 'Fugas',
        items: {
          4121: 'Fugas',
        },
      },
      13: {
        name: 'Otro',
        items: {
          4131: 'Otro',
        },
      },
    },
  },
};

export const COMUNITY = [
  {
    name: 'ING. JORGE A. MUÑOZ ',
    role: 'CICTAC / ITT',
  },
  {
    name: 'ING. OSCAR F. DUARTE JARAMILLO',
    role: 'CICTAC',
  },
  {
    name: 'OC. DELIA CRISTINA CASTELLANOS ARMENDARIZ',
    role: 'IMPLAN',
  },
  {
    name: 'ING. LUIS FERNANDO GONZALEZ VERGARA',
    role: 'CICTAC / CCPT',
  },
  {
    name: 'ARQ. ALEJANDRO',
    role: 'IMPLAN',
  },
  {
    name: 'ARQ. FELIPE ALEJANDRO GARCIA CRUZ',
    role: 'CATAC',
  },
  {
    name: 'C. URIEL MANZANARES TIRADO',
    role: 'PROTECCIÓN CIVIL',
  },
  {
    name: 'ING. EVERARDO LONA LOPEZ',
    role: 'SECRETARIA DE DESARROLLO URBANO Y ECOLOGÍA',
  },
  {
    name: 'MTRO.. MARCO ANTONIO SOTOMAYOR  AMEZCUA',
    role: 'SECRETARIA DE SEGURIDAD PÚBLICA',
  },
  {
    name: 'CPTN. JOSE LUIS JIMENEZ GONZALEZ',
    role: 'DIRECCION DE BOMBEROS',
  },
  {
    name: 'ARQ. MARGARITA PATRICIA HURTADO MENDIOLA',
    role: 'DAU',
  },
  {
    name: 'ARQ. GERMAN JESUS LIZOLA MARQUEZ',
    role: 'CESPT',
  },
  {
    name: 'ING. FRANCISCO JAVIER MEJIA PANCARDO',
    role: 'INDIVI',
  },
  {
    name: 'ING. EDHER JAVIER MENDOZA GARCIA',
    role: 'COMICE TTR',
  },
  {
    name: 'ING. GABRIEL ANTON',
    role: 'CMIC TITR',
  },
  {
    name: 'DR. LUIS HUMBERTO MENDOZA GARCILAZO',
    role: 'CICESE',
  },
  {
    name: 'DR. JUAN MANUEL RODRIGUEZ ESTEVES',
    role: 'COLEF',
  },
  {
    name: 'ING. MARIO GONZALEZ DURAN',
    role: 'UABC',
  },
  {
    name: 'ING. RENE MARTINEZ LEON',
    role: 'ITT',
  },
  {
    name: 'ING. GERARDO I. TENORIO ESCARCEGA',
    role: 'CICTAC',
  },
];

export const IMPLAN_DIRECTORY = [
  {
    role: 'Director General Ejecutivo',
    name: 'Arq. Alejandro Ruiz Garcia',
  },
  {
    role: 'Asistente de Dirección',
    name: 'Lic. Alma Graciela Flores Flores',
  },
  {
    role: 'Coordinador Administrativo y de Financiero',
    name: 'C.P Ernesto Lucero Lopez',
  },
  {
    role: 'Director de Planeación Territorial',
    name: 'Arq. Alma Gloria Sevilla Vigil',
  },
  {
    role: 'Director de Planeación para el Desarrollo',
    name: 'Lic. Baudelio Benites Galvez',
  },
];

export const EXTERNAL_LINKS = {
  biology: [
    {
      subject: 'Biología',
      institution: 'Comisión Nacional para el Conocimiento y Uso de la Biodiversidad',
      title: 'Geoportal del Sistema Nacional de Información sobre Diversidad',
      description: 'La CONABIO tiene la misión de promover, coordinar, apoyar y realizar actividades dirigidas al conocimiento de la diversidad biológica, así como a su conservación y uso sustentable para beneficio de la sociedad.',
      link: 'http://www.conabio.gob.mx/informacion/gis/',
    },
  ],
  geology: [
    {
      subject: 'Geología',
      institution: 'OneGeology',
      title: 'OneGeology',
      description: 'It is an international initiative of the geological surveys of the world who are working together with the support of international organisations, regional organisations and industry sponsors to achieve this ambitious and exciting venture.',
      link: 'http://portal.onegeology.org/OnegeologyGlobal/',
    },
    {
      subject: 'Geología',
      institution: 'Servicio Geológico Mexicano',
      title: 'GeoInfoMex',
      description: 'GeoInfoMex, es el sistema de consulta del Servicio Geológico Mexicano que permite a los usuarios conocer la información geocientífica y tomar decisiones con ahorro en tiempo y recursos, coadyuvando al fomento de la actividad minera.',
      link: 'https://www.sgm.gob.mx/GeoInfoMexGobMx/',
    },
  ],
  metereology: [
    {
      subject: 'Meteorología',
      institution: 'The Weather Company',
      title: 'Weather Underground',
      description: 'Weather Underground has challenged the conventions around how weather information is shared with the public since 1993. We\'re immensely proud of the unique products that our community and meteorologists have created to improve people\'s access to meaningful weather data from around the globe. As the Internet\'s 1st weather service, we consider ourselves pioneers within our field and we\'re constantly seeking new data sets and the next technologies that will help us share more data with more people.',
      link: 'https://www.wunderground.com/wundermap',
    },
    {
      subject: 'Meteorología',
      institution: 'Earth Nullschool',
      title: 'EarthWindMap',
      description: 'An animated map of global weather conditions.',
      link: 'https://earth.nullschool.net/',
    },
    {
      subject: 'Meteorología',
      institution: 'National Aeronautics And Space Administration',
      title: 'NASA Worldview',
      description: 'This app from NASA\'s EOSDIS provides the capability to interactively browse over 800 global, full-resolution satellite imagery layers and then download the underlying data. Many of the available imagery layers are updated within three hours of observation, essentially showing the entire Earth as it looks "right now".',
      link: 'https://worldview.earthdata.nasa.gov/',
    },
    {
      subject: 'Meteorología',
      institution: 'National Oceanic and Atmospheric Administration',
      title: 'GOES Image Viewer',
      description: 'NOAA\'s mission is central to many of today\'s greatest challenges. Climate change. Severe weather. Natural and human-induced disasters. Declining biodiversity. Ocean acidification. Threatened or degraded ocean and coastal resources. These challenges convey a common message: human health, prosperity, and well-being depend upon the health and resilience of coupled natural and social ecosystems. Managing this interdependence requires timely and usable information to make decisions and the science that underpins our knowledge of these systems. NOAA\'s mission of science, service, and stewardship is directed to a vision of the future where societies and their ecosystems are healthy and resilient in the face of sudden or prolonged change.',
      link: 'https://www.star.nesdis.noaa.gov/goes/index.php',
    },
  ],
  risks: [
    {
      subject: 'Riesgos',
      institution: 'National Association of Radio Distress-Signalling and Infocommunications',
      title: 'RSOE Emergency and Disaster Information Service',
      description: 'The National Association of Radio Distress-Signalling and Infocommunications (RSOE) operates Emergency and Disaster Information Service (EDIS) within the frame of his own web site which has the objective to monitor and document all the events on Earth which may cause disaster or emergency. The main objective is to manage information about events endangering the safety of our own country.',
      link: 'http://hisz.rsoe.hu/alertmap/index2.php',
    },
    {
      subject: 'Riesgos',
      institution: 'Centro Nacional de Prevención de Desastres',
      title: 'Monitoreo de Fenómenos Naturales',
      description: 'Consulta de los fenómenos que se están generando en este momento, actualizados constantemente para su seguimiento y análisis.',
      link: 'http://www.atlasnacionalderiesgos.gob.mx/archivo/monitoreo.html',
    },
    {
      subject: 'Riesgos',
      institution: 'Centro Nacional de Prevención de Desastres',
      title: 'Sistema de información sobre riesgos',
      description: 'El sistema integra todos los mapas del Atlas Nacional de Riesgos, de peligro, exposición, vulnerabilidad y riesgo, clasificados según el tema para su visualización y análisis.',
      link: 'http://www.atlasnacionalderiesgos.gob.mx/archivo/visor-capas.html',
    },
    {
      subject: 'Riesgos',
      institution: 'Earthquake 3d',
      title: 'Earthquake 3d',
      description: 'EQ3D is a simplified version of the application program Earthquake 3D running in an internet browser.',
      link: 'http://www.earthquake3d.com/',
    },
  ],
  quakes: [
    {
      subject: 'Sismos',
      institution: 'Incorporated Research Institutions For Seismology',
      title: 'IRIS Earthquake Browser',
      description: 'The IRIS Earthquake Browser (IEB) is an interactive map for exploring millions of seismic event epicenters (normally earthquakes) on a map of the world.',
      link: 'http://ds.iris.edu/ieb',
    },
    {
      subject: 'Sismos',
      institution: 'Centro de Investigación Científica y Educación Superior de Ensenada',
      title: 'Red Sísmica del Noroeste de México',
      description: 'Proporcionar un servicio de información veraz y oportuna a la sociedad, medios de comunicación y a autoridades relacionadas con protección civil. La información proporcionada es sobre la actividad sísmica (localizaciones, magnitudes y mapas de intensidades) que ocurre en la región noroeste de México.',
      link: 'http://resnom.cicese.mx/sitio/',
    },
  ],
};

export const SPECIAL_STUDIES = [
  {
    name: 'Atlas de Riesgos Naturales para el Municipio de Tijuana',
    link: 'http://implan.tijuana.gob.mx/pdf/atlas/ATLAS%20TIJUANA%202014.pdf',
  },
  {
    name: 'Estudio de movilidad en bicicleta',
    link: 'http://implan.tijuana.gob.mx/pdf/Planes/Estudio%20de%20movilidad%20en%20bicicleta_Final.pdf',
  },
  {
    name: 'Atlas de la Región Fronteriza San Diego-Baja California',
    link: 'http://implan.tijuana.gob.mx/pdf/atlas/SanDiegoBajaCaliforniaBorderRegionAtlas.pdf',
  },
  {
    name: 'Plan Estratégico Metropolitano',
    link: 'http://implan.tijuana.gob.mx/pdf/PEM.pdf',
  },
  {
    name: 'Perfil de Resiliencia Urbana',
    link: 'http://implan.tijuana.gob.mx/pdf/Planes/tijuana_final.pdf',
  },
];
