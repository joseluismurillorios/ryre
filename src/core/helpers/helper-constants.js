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
  'Biología': [
    {
      subject: 'Biología',
      institution: 'Comisión Nacional para el Conocimiento y Uso de la Biodiversidad',
      title: 'Geoportal del Sistema Nacional de Información sobre Diversidad',
      description: 'La CONABIO tiene la misión de promover, coordinar, apoyar y realizar actividades dirigidas al conocimiento de la diversidad biológica, así como a su conservación y uso sustentable para beneficio de la sociedad.',
      link: 'http://www.conabio.gob.mx/informacion/gis/',
    },
  ],
  'Geología': [
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
  'Meteorología': [
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
  'Riesgos': [
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
  'Sismos': [
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

export const CONTRIBUTIONS = {
  'Geociencias': [
    {
      name: 'Geociencias',
      institution: 'Centro De Investigación Científica y de Educación Superior De Ensenada',
      title: 'Centro De Investigación Científica y de Educación Superior De Ensenada',
      description: 'El CICESE es una institución de referencia en el contexto científico nacional e internacional, su excelencia académica apoya el desarrollo nacional, la formación de recursos humanos y contribuye a generar el conocimiento que puede coadyuvar en la solución de problemas que afectan el entorno social y económico de México.',
      link: 'eeeeeee',
    },
    {
      name: 'Geociencias',
      institution: 'National Aeronautics And Space Administration',
      title: 'Earth Observing System Data And Information System (Eosdis)',
      description: 'The Earth Observing System Data and Information System (EOSDIS) is a key core capability in NASA’s Earth Science Data Systems (ESDS) Program. It provides end-to-end capabilities for managing NASA’s Earth science data from various sources – satellites, aircraft, field measurements, and various other programs.',
      link: 'eeeeeee',
    },
    {
      name: 'Geociencias',
      institution: 'Geology Page',
      title: 'Geology Page',
      description: 'Geology Page is a science website, helps geoscientist by adding geology news, new researches, videos, photos and new articles .',
      link: 'eeeeeee',
    },
    {
      name: 'Geociencias',
      institution: 'Geology.Com',
      title: 'Geology.com',
      description: 'Geology.com is one of the internet’s leading websites for earth science news and information. Every day thousands of people visit Geology.com to read about rocks, minerals, oil and gas, geologic hazards, gemstones, meteorites, and many other topics. Geology.com also connects visitors to earth science news and content on other websites with a news page that is updated daily.',
      link: 'eeeeeee',
    },
    {
      name: 'Geociencias',
      institution: 'Instituto Nacional De Estadistica Y Geografia',
      title: 'INEGI',
      description: 'El INEGI es un organismo público autónomo responsable de normar y coordinar el Sistema Nacional de Información Estadística y Geográfica, así como de captar y difundir información de México en cuanto al territorio, los recursos, la población y economía, que permita dar conocer las características de nuestro país y ayudar a la toma de decisiones.',
      link: 'eeeeeee',
    },
    {
      name: 'Geociencias',
      institution: 'US National Science Foundation',
      title: 'Interdisciplinary Earth Data Alliance',
      description: 'The IEDA data facility’s mission is to support, sustain, and advance the geosciences by providing data services for observational geoscience data from the Ocean, Earth, and Polar Sciences.',
      link: 'eeeeeee',
    },
    {
      name: 'Geociencias',
      institution: 'National Oceanic and Atmospheric Adminsitration',
      title: 'National Centers For Environmental Information',
      description: 'NCEI archives and assimilates tsunami, earthquake and volcano data to support research, planning, response and mitigation. Long-term data, including photographs, can be used to establish the history of natural hazard occurrences and help mitigate against future events.',
      link: 'eeeeeee',
    },
    {
      name: 'Geociencias',
      institution: 'National Oceanic and Atmospheric Administration',
      title: 'National Oceanic and Atmospheric Administration',
      description: 'NOAA is an agency that enriches life through science. Our reach goes from the surface of the sun to the depths of the ocean floor as we work to keep the public informed of the changing environment around them.',
      link: 'eeeeeee',
    },
    {
      name: 'Geociencias',
      institution: 'Norwegian Meteorological Institute',
      title: 'Norwegian Meteorological Institute',
      description: 'Yr is the joint online weather service from the Norwegian Meteorological Institute (met.no) and the Norwegian Broadcasting Corporation (NRK).',
      link: 'eeeeeee',
    },
    {
      name: 'Geociencias',
      institution: 'United States Geological Survey',
      title: 'U.S. Geological Survey',
      description: 'The USGS serves the Nation by providing reliable scientific information to describe and understand the Earth; minimize loss of life and property from natural disasters; manage water, biological, energy, and mineral resources; and enhance and protect our quality of life.',
      link: 'eeeeeee',
    },
    {
      name: 'Geociencias',
      institution: 'Unión Geofísica Mexicana',
      title: 'Unión Geofísica Mexicana',
      description: 'Fundada en 1960, la Unión Geofísica Mexicana (UGM) tiene la misión de promover el estudio de las Ciencias de la Tierra y del Espacio y de diseminar el conocimiento científico a través de actividades que fortalezcan la investigación y solución de problemas básicos y aplicados, la colaboración científica y la divulgación de la ciencia.',
      link: 'eeeeeee',
    },
  ],
  'Geología': [
    {
      name: 'Geologia',
      institution: 'Centro De Instrumentación y Registro Sísmico',
      title: 'Centro De Instrumentación y Registro Sísmico',
      description: 'El Centro de Instrumentación y Registro Sísmico, A.C. (CIRES), es una asociación civil no lucrativa fundada en junio de 1986, originalmente bajo el auspicio de la Fundación Javier Barros Sierra, A. C., hasta el 2002, para promover la investigación y desarrollo de tecnología aplicada a la instrumentación sísmica, como medio útil para mitigar posibles desastres sísmicos, como los que sufrió la Ciudad de México en 1985.',
      link: 'eeeeeee',
    },
    {
      name: 'Geologia',
      institution: 'Earthquake Engineering Research Institute',
      title: 'Earthquake Engineering Research Institute',
      description: 'The objective of the Earthquake Engineering Research Institute is to reduce earthquake risk by (1) advancing the science and practice of earthquake engineering, (2) improving understanding of the impact of earthquakes on the physical, social, economic, political, and cultural environment, and (3) advocating comprehensive and realistic measures for reducing the harmful effects of earthquakes.',
      link: 'eeeeeee',
    },
    {
      name: 'Geologia',
      institution: 'Incorporated Research Institutions For Seismology',
      title: 'Incorporated Research Institutions For Seismology',
      description: 'IRIS is a consortium of over 120 US universities dedicated to the operation of science facilities for the acquisition, management, and distribution of seismological data.',
      link: 'eeeeeee',
    },
    {
      name: 'Geologia',
      institution: 'Jay Patton Online',
      title: 'Jay Patton Online',
      description: 'Earthquake Reports',
      link: 'eeeeeee',
    },
    {
      name: 'Geologia',
      institution: 'United States Geological Survey',
      title: 'National Earthquake Hazards Reduction Program',
      description: 'To develop, disseminate, and promote knowledge, tools, and practices for earthquake risk reduction—through coordinated, multidisciplinary, interagency partnerships among the NEHRP agencies and their stakeholders—that improve the Nation’s earthquake resilience in public safety, economic strength, and national security.',
      link: 'eeeeeee',
    },
    {
      name: 'Geologia',
      institution: 'United States Geological Survey',
      title: 'National Landslide Hazards Program',
      description: 'The primary objective of the National Landslide Hazards Program is to reduce long-term losses from landslide hazards by improving our understanding of the causes of ground failure and suggesting mitigation strategies.',
      link: 'eeeeeee',
    },
    {
      name: 'Geologia',
      institution: 'Ayuntamiento de Tijuana',
      title: 'Programa RADIUS - Tijuana',
      description: 'Desarrollar un Escenario de Daños por Terremoto para la ciudad de Tijuana , el cual describa sus consecuencias. Elevar el nivel de conciencia sísmica en la Comunidad y Autoridades de Tijuana y el Estado.',
      link: 'eeeeeee',
    },
    {
      name: 'Geologia',
      institution: 'Servicio Geológico Mexicano',
      title: 'Servicio Geológico Mexicano',
      description: 'El Servicio Geológico Mexicano (SGM) es un organismo público descentralizado del Gobierno Federal con personalidad jurídica y patrimonio propios, regido por la Ley Minera y adscrito sectorialmente a la Secretaría de Economía a través de la Subsecretaría de Minería.',
      link: 'eeeeeee',
    },
    {
      name: 'Geologia',
      institution: 'Southern California Earthquake Center',
      title: 'Shake Out',
      description: 'Many areas of the globe are prone to earthquakes (see links below) You could be anywhere when an earthquake strikes: at home, at work, at school or even on vacation. Are you prepared to survive and to recover quickly?',
      link: 'eeeeeee',
    },
    {
      name: 'Geologia',
      institution: 'Southern California Earthquake Center',
      title: 'Southern California Earthquake Center',
      description: 'SCEC coordinates fundamental research on earthquake processes using Southern California as its principal natural laboratory. This research program is investigator-driven and supports core research and education in seismology, tectonic geodesy, earthquake geology, and computational science.',
      link: 'eeeeeee',
    },
    {
      name: 'Geologia',
      institution: 'United States Geological Survey',
      title: 'Southern California Seismic Network',
      description: 'The SCSN is the southern California portion of the California Integrated Seismic Network (CISN). The CISN is the region of the Advanced National Seismic System (ANSS) that represents the entire state of California.',
      link: 'eeeeeee',
    },
    {
      name: 'Geologia',
      institution: 'Geotecnología S.A.S.',
      title: 'Visión Geotécnica de la Amenaza Sísmica',
      description: 'Geotecnología S.A.S., es una empresa creada en 1975 por el ingeniero JAIME SUÁREZ DÍAZ con sede en la ciudad de Bucaramanga, al nororiente de Colombia, una empresa de consultoría geotécnica especializada en estabilidad de taludes y erosión, y se destaca por su rigor científico y calidad técnica con tecnologías de última generación.',
      link: 'eeeeeee',
    },
  ],
  'Ingeniería': [
    {
      name: 'Ingenieria',
      institution: 'Missouri University Of Science And Technology',
      title: 'Advanced Engineering Geology And Geotechnics Online Lectures',
      description: 'This course will seek to introduce students to advanced level lecture topics in the analysis of geologic factors for the solution of engineering problems.  Specific emphasis will be placed on state-of-the-practice procedures for site characterization, universal standards for excavation and grading, and preparation of documents summarizing such work.  ',
      link: 'eeeeeee',
    },
    {
      name: 'Ingenieria',
      institution: 'Sociedad Mexicana De Ingeniería Estructural',
      title: 'Sociedad Mexicana De Ingeniería Estructural',
      description: 'La SMIE es una Sociedad formada por personas físicas o morales dedicadas o relacionadas con la Ingeniería Estructural y cuyo objetivo es promover la importancia de la ingeniería estructural en las construcciones, como medio para salvaguardar la vida y el patrimonio de sus habitantes y usuarios de los sectores social, público y privado en todo el país.',
      link: 'eeeeeee',
    },
    {
      name: 'Ingenieria',
      institution: 'Sociedad Mexicana De Ingeniería Geotecnia',
      title: 'Sociedad Mexicana De Ingeniería Geotecnia',
      description: 'La SMIG es una asociación enfocada a proveer de elementos científicos, que permitan a profesionales de la Geotecnia mantenerse actualizados en esta ciencia, así como formar parte de una organización que busca promover y mantener vigente a la Ingeniería Geotécnica, en México.',
      link: 'eeeeeee',
    },
  ],
  'Riesgos': [
    {
      name: 'Riesgos',
      institution: 'State of California',
      title: 'Cal Fire',
      description: 'The men and women of the California Department of Forestry and Fire Protection (CAL FIRE) are dedicated to the fire protection and stewardship of over 31 million acres of California\'s privately- owned wildlands.In addition, the Department provides varied emergency services in 36 of the State\'s 58 counties via contracts with local governments.',
      link: 'eeeeeee',
    },
    {
      name: 'Riesgos',
      institution: 'Centro Nacional de Prevención de Riesgos',
      title: 'Centro Nacional de Prevención de Riesgos',
      description: 'Salvaguardar en todo momento la vida, los bienes e infraestructura de las y los mexicanos a través de la gestión continua de políticas públicas para la prevención y reducción de riesgos de desastres, por medio de la investigación y el monitoreo de fenómenos perturbadores, así como la formación educativa y la difusión de la cultura de protección civil, con objeto de lograr una sociedad más resiliente.',
      link: 'eeeeeee',
    },
    {
      name: 'Riesgos',
      institution: 'Centro Regional de Información sobre Desastres para América Latina y El Caribe',
      title: 'Centro Regional de Información sobre Desastres para América Latina y El Caribe',
      description: 'El Centro Regional de Información sobre Desastres (CRID) es una iniciativa patrocinada por seis organizaciones que decidieron mancomunar esfuerzos para asegurar la recopilación y diseminación de información disponible sobre el tema de desastres en América Latina y el Caribe.',
      link: 'eeeeeee',
    },
    {
      name: 'Riesgos',
      institution: 'Organización de las Naciones Unidas',
      title: 'Oficina de las Naciones Unidas para la Reducción del Riesgo de Desastres',
      description: 'La UNISDR se estableció en diciembre de 1999 como parte de la Secretaría de las Naciones Unidas, con el propósito de velar por la aplicación de la Estrategia Internacional para la Reducción del Riesgo de Desastres.',
      link: 'eeeeeee',
    },
    {
      name: 'Riesgos',
      institution: 'Secretaría General de Gobierno',
      title: 'Coordinación Estatal de Protección Civil',
      description: 'El objetivo fundamental del Sistema Estatal de Protección Civil es el de proteger la vida de los habitantes del Estado, la propiedad pública, la propiedad privada y el entorno ecológico ante la eventualidad de un desastre provocado por fenómenos naturales o humanos, a través de acciones que reduzcan la pérdida de vidas humanas, la destrucción de bienes materiales y el daño a la naturaleza.',
      link: 'eeeeeee',
    },
    {
      name: 'Riesgos',
      institution: 'Department Of Homeland Security',
      title: 'Ready',
      description: 'Launched in February 2003, Ready is a National public service campaign designed to educate and empower the American people to prepare for, respond to and mitigate emergencies, including natural and man-made disasters. The goal of the campaign is to promote preparedness through public involvement.',
      link: 'eeeeeee',
    },
    {
      name: 'Riesgos',
      institution: 'National Centers for Environmental Information',
      title: 'U.S. Climate Resilience Toolkit',
      description: 'The U.S. Climate Resilience Toolkit is a website designed to help people find and use tools, information, and subject matter expertise to build climate resilience. The Toolkit offers information from all across the U.S. federal government in one easy-to-use location.',
      link: 'eeeeeee',
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

export const NEWS_LINKS = {
  'GOBIERNO': {
    'tijuana.gob.mx': 'http://www.tijuana.gob.mx/noticialistado.aspx',
    'bajacalifornia.gob.mx': 'http://www.bajacalifornia.gob.mx/portal/comunicados_prensa.jsp',
    'gob.mx': 'https://www.gob.mx/presidencia#5172',
    'nehrp.gov': 'https://www.nehrp.gov/',
  },
  'CLIMA': {
    'weather.gov': 'https://www.weather.gov/forecastmaps',
    'smn.cna.gob.mx': 'https://smn.cna.gob.mx/es/',
  },
  'ARTÍCULOS': {
    // 'redalyc.org': 'https://www.redalyc.org/home.oa',
    'scielo.org': 'https://www.scielo.org/',
    'doaj.org': 'https://doaj.org/',
    'biblat.unam.mx': 'https://biblat.unam.mx/es/',
    'dialnet.unirioja.es': 'https://dialnet.unirioja.es/',
  },
};

export const RISK_PLANNING_DOCS = [
  {
    name: 'Guía sobre riesgos para el Estado de Baja California: Fenómenos Hidrometeorológicos',
    link: 'http://www.proteccioncivilbc.gob.mx/Doctos/GuiaHidrometeorologicaBC1.pdf',
  },
  {
    name: 'Plan De Contingencias Riesgos Hidrometeorológicos Baja California, México',
    link: 'http://www.proteccioncivilbc.gob.mx/Doctos/PlanContingenciasHidrometeorologicas.pdf',
  },
  {
    name: 'Plan de Contingencias para Terremotos Destructivos en el Estado de Baja California',
    link: 'http://www.proteccioncivilbc.gob.mx/Doctos/temblores/PlanContingenciasTerremoto1.pdf',
  },
  {
    name: 'Atlas de Riesgos Naturales del Municipio de Tijuana 2014',
    link: 'http://www.implan.tijuana.gob.mx/pdf/atlas/ATLAS%20TIJUANA%202014.pdf',
  },
];

export const REGULATORY_DOCS = [
  {
    name: 'Ley General De Protección Civil ',
    link: 'http://www.diputados.gob.mx/LeyesBiblio/pdf/LGPC_190118.pdf',
  },
  {
    name: 'Reglamento De La Ley General De Protección Civil',
    link: 'http://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LGPC_091215.pdf',
  },
  {
    name: 'Ley De Protección Civil Y Gestión Integral De Riesgos Del Estado De Baja California',
    link: 'http://www.congresobc.gob.mx/Parlamentarias/TomosPDF/Leyes/TOMO_VII/LEYPROCIVGESINTRIE_08SEP2017.pdf',
  },
  {
    name: 'Reglamento de Protección Civil para el Municipio de Tijuana - Junio 2017',
    link: 'http://www.proteccioncivil.tijuana.gob.mx/pdf/marco/municipal/ReglamentoPCBC_06-2017.pdf',
  },
  {
    name: 'Ley De Prevención, Mitigación Y Adaptación Del Cambio Climático Para El Estado De Baja California ',
    link: 'http://www.congresobc.gob.mx/contenido/legislacionestatal/Parlamentarias/TomosPDF/Leyes/TOMO_VII/Leycamclim-2_27MAR2015.pdf',
  },
];

export const SPECIAL_STUDIES_DOCS = [
  {
    name: 'Movimientos de Ladera o Masas de Terreno en Tijuana B. C.',
    link: 'http://www.proteccioncivil.tijuana.gob.mx/pdf/planes/estudios/Movimientos%20de%20Ladera%20o%20Masas%20de%20Terreno%20en%20Tijuana%20BC%20v%202007.pdf',
  },
  {
    name: 'Microzonación Sísmica En La Zona Urbana De Tijuana, B. C. ',
    link: 'http://www.proteccioncivilbc.gob.mx/Doctos/temblores/InformeFinalTijuana2009.pdf',
  },
  {
    name: 'Diagnóstico de Riesgos Urbanos en el Área Metropolitana de Tijuana',
    link: 'http://www.proteccioncivil.tijuana.gob.mx/pdf/planes/estudios/Diagnostico%20de%20Riesgos%20Urbanos%20en%20el%20area%20Metropolitana%20de%20Tijuana.pdf',
  },
  {
    name: 'Herramientas de Evaluación de Riesgo para Diagnóstico de Áreas Urbanas contra Desastres Sísmicos',
    link: 'http://www.proteccioncivil.tijuana.gob.mx/pdf/planes/estudios/Reporte%20Final%20del%20Proyecto%20RADIUS%20Caso%20Tijuana%202001.pdf',
  },
];

export const TOOLS = {
  'Herramientas de Cálculo': [
    {
      subject: 'Biología',
      institution: 'Universidad Nacional de Educación a Distancia',
      title: 'Cartografía Geológica',
      description: 'Con este trabajo se presenta una herramienta diseñada para ayudar al alumno a evaluar, interpretar y sintetizar información geológica elemental obtenida sobre el terreno y sobre mapas geológicos, y así, poder identificar y valorar las características geológicas básicas del planeta Tierra.',
      link: 'http://ocw.innova.uned.es/cartografia/indice_general.htm',
    },
  ],
  'Área Infantil': [
    {
      subject: 'Sismos',
      institution: 'Incorporated Research Institutions For Seismology',
      title: 'Education and Public Outreach Program',
      description: 'The IRIS Education and Public Outreach (EPO) program is committed to advancing awareness and understanding of seismology and geophysics while inspiring careers in the Earth sciences.',
      link: 'https://www.iris.edu/hq/inclass/search#type=7',
    },
    {
      subject: 'Sismos',
      institution: 'United States Geological Survey',
      title: 'Earthquakes for Kids',
      description: 'Fun and educational resources including Science Fair ideas and earthquake science you can understand.',
      link: 'https://earthquake.usgs.gov/learn/kids/',
    },
  ],
  'MOOC': [
    {
      subject: 'Massive Online Open Courses',
      title: 'MéxicoX',
      description: 'MéxicoX, es la Plataforma de cursos en línea de la SEP, operada por la Dirección General de Televisión Educativa. Inició el 23 de junio de 2015 y, a tres años de su creación, se ha convertido en la comunidad educativa digital más importante del país.',
      link: 'https://www.mexicox.gob.mx/about',
    },
    {
      subject: 'Massive Online Open Courses',
      title: 'Coursera',
      description: 'Coursera was founded in 2012 by two Stanford Computer Science professors who wanted to share their knowledge and skills with the world. Professors Daphne Koller and Andrew Ng put their courses online for anyone to take - and taught more learners in a few months than they could have in an entire lifetime in the classroom. Since then, we’ve built a platform where anyone, anywhere can learn and earn credentials from the world’s top universities and education providers.',
      link: 'https://www.coursera.org/',
    },
    {
      subject: 'Massive',
      title: 'edX',
      description: 'Founded by Harvard University and MIT in 2012, edX is an online learning destination and MOOC provider, offering high-quality courses from the world’s best universities and institutions to learners everywhere.',
      link: 'https://www.edx.org/',
    },
    {
      subject: 'Massive',
      title: 'Khan Academy',
      description: 'Khan Academy offers practice exercises, instructional videos, and a personalized learning dashboard that empower learners to study at their own pace in and outside of the classroom. We tackle math, science, computer programming, history, art history, economics, and more. ',
      link: 'https://www.khanacademy.org/',
    },
    {
      subject: 'Massive',
      title: 'Stanford Online',
      description: 'Stanford Online is administered by the Office of the Vice Provost for Teaching and Learning at Stanford University. The Office of the Vice Provost for Teaching and Learning (VPTL) is committed to creating and supporting a lifetime of learning opportunities for learners on campus and beyond. Through free online courses, graduate and professional certificates, advanced degrees, and executive education programs, we are facilitating extended and meaningful engagement with Stanford faculty and their research, for learners of different ages, regions, and backgrounds throughout many stages of their lives and careers.',
      link: 'https://online.stanford.edu/',
    },
    {
      subject: 'Massive',
      title: 'MIT OpenCourseWare',
      description: 'Through OCW, educators improve courses and curricula, making their schools more effective; students find additional resources to help them succeed; and independent learners enrich their lives and use the content to tackle some of our world’s most difficult challenges, including sustainable development, climate change, and cancer eradication.',
      link: 'https://ocw.mit.edu/index.htm',
    },
  ],
};
