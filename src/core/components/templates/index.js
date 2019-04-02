import Home from './home';
import Generic from './generic';
import Weather from './weather';
import Time from './time';
import Google from './google';
import Presentation from './presentation';

const gmaps = !(window.cordova)
  ? [
    {
      url: '/',
      component: Home,
      name: 'Inicio',
    },
    {
      url: '*',
      component: Generic,
      name: '404',
    },
  ]
  : [
    {
      url: '/',
      component: Home,
      name: 'Inicio',
    },
    {
      url: '*',
      component: Generic,
      name: '404',
    },
  ];


export const ROUTES = [
  {
    url: '/inicio',
    component: Home,
    name: 'Inicio',
    items: [
      {
        url: '/inicio/presentacion',
        component: Presentation,
        name: 'Presentación',
      },
      {
        url: '/inicio/video-institucional',
        component: Generic,
        name: 'Video Institucional',
      },
      {
        url: '/inicio/mapa-de-contenido',
        component: Generic,
        name: 'Mapa de Contenido',
      },
    ],
  },
  {
    url: '/noticias',
    component: Generic,
    name: 'Noticias',
    items: [
      {
        url: '/noticias/gobierno',
        component: Generic,
        name: 'Gobierno',
      },
      {
        url: '/noticias/comuniti',
        component: Generic,
        name: 'COMUNITI',
      },
      {
        url: '/noticias/tiempo',
        component: Time,
        name: 'Tiempo',
      },
      {
        url: '/noticias/condiciones-clim',
        component: Weather,
        name: 'Condiciones Clim.',
      },
      {
        url: '/noticias/eventos-y-congresos',
        component: Generic,
        name: 'Eventos Y Congresos',
      },
      {
        url: '/noticias/articulos',
        component: Generic,
        name: 'Árticulos',
      },
      {
        url: '/noticias/reportes',
        component: Google,
        name: 'Reportes de Riesgos',
      },
    ],
  },
  {
    url: '/nosotros',
    component: Generic,
    name: 'Nosotros',
    items: [
      {
        url: '/nosotros/objetivos',
        component: Generic,
        name: 'Objectivos',
      },
      {
        url: '/nosotros/mision',
        component: Generic,
        name: 'Misión',
      },
      {
        url: '/nosotros/vision',
        component: Generic,
        name: 'Visión',
      },
      {
        url: '/nosotros/instituciones-y-empresas-participantes',
        component: Generic,
        name: 'Instituciones y Empresas Participantes',
      },
      {
        url: '/nosotros/comuniti-mesa-de-r-y-r',
        component: Generic,
        name: 'COMUNITI Mesa de R. Y R.',
      },
    ],
  },
  {
    url: '/mapas',
    component: Generic,
    name: 'Mapas',
    items: [
      {
        url: '/mapas/tijuana-2014',
        component: Generic,
        name: 'Tijuana 2014',
      },
      {
        url: '/mapas/rosarito-2018',
        component: Generic,
        name: 'Rosarito 2018',
      },
      {
        url: '/mapas/pmdu-y-pducp',
        component: Generic,
        name: 'PMDU Y PDUCP',
      },
      {
        url: '/mapas/links-a-paginas-externas',
        component: Generic,
        name: 'Links a Páginas externas',
      },
      {
        url: '/mapas/estudios-especiales',
        component: Generic,
        name: 'Estudios Especiales',
      },
      {
        url: '/mapas/contribuciones',
        component: Generic,
        name: 'Contribuciones',
      },
    ],
  },
  {
    url: '/contacto',
    component: Generic,
    name: 'Contacto',
    items: [
      {
        url: '/contacto/implan',
        component: Generic,
        name: 'IMPLAN',
      },
      {
        url: '/contacto/colegios',
        component: Generic,
        name: 'Colegios',
      },
      {
        url: '/contacto/correos',
        component: Generic,
        name: 'Correos',
      },
      {
        url: '/contacto/encuestas',
        component: Generic,
        name: 'Encuestas',
      },
    ],
  },
  {
    url: '/herramientas',
    component: Generic,
    name: 'Herramientas',
    items: [
      {
        url: '/herramientas/software-open-source',
        component: Generic,
        name: 'Software Open Source',
      },
      {
        url: '/herramientas/lineamientos',
        component: Generic,
        name: 'Lineamientos',
      },
      {
        url: '/herramientas/formatos',
        component: Generic,
        name: 'Formatos',
      },
      {
        url: '/herramientas/herramientas-de-calculo',
        component: Generic,
        name: 'Herramientas de Cálculo',
      },
      {
        url: '/herramientas/area-de-ninos',
        component: Generic,
        name: 'Área de niños',
      },
      {
        url: '/herramientas/plataforma-para-solicitar-op-de-riesgo',
        component: Generic,
        name: 'Plataforma Para Solicitar Op. de Riesgo',
      },
      {
        url: '/herramientas/participacion-ciudadana',
        component: Generic,
        name: 'Participación Ciudadana',
      },
      {
        url: '/herramientas/mooc',
        component: Generic,
        name: 'MOOC',
      },
    ],
  },
  {
    url: '/informacion',
    component: Generic,
    name: 'Información',
    items: [
      {
        url: '/informacion/docs-de-planeacion-riesgos-vigentes',
        component: Generic,
        name: 'Docs. de Planeación Riesgos, Vigentes',
      },
      {
        url: '/informacion/marco-normativo',
        component: Generic,
        name: 'Marco Normativo',
      },
      {
        url: '/informacion/tr-para-estudios-y-proyectos',
        component: Generic,
        name: 'TR Para Estudios Y Proyectos',
      },
      {
        url: '/informacion/estudios-especiales-para-desco',
        component: Generic,
        name: 'Estudios Especiales Para Desco',
      },
      {
        url: '/informacion/contribuciones',
        component: Generic,
        name: 'Contribuciones',
      },
    ],
  },
];

export default gmaps;
