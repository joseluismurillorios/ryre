import Home from './home';
import Google from './google';
import News from './news';
import AboutUs from './about';
import Contact from './contact';
import Maps from './maps';
import Information from './information';

export const ROUTES = [
  {
    url: '/inicio',
    component: Home,
    name: 'Inicio',
    items: [
    ],
  },
  {
    url: '/nosotros',
    component: AboutUs,
    name: 'Nosotros',
    items: [
    ],
  },
  {
    url: '/mapas',
    component: Maps,
    name: 'Mapas',
    items: [
    ],
  },
  {
    url: '/noticias',
    component: News,
    name: 'Noticias',
    items: [
    ],
  },
  {
    url: '/reportes',
    component: Google,
    name: 'Reportes',
    items: [
    ],
  },
  {
    url: '/informacion',
    component: Information,
    name: 'Información',
    items: [
    ],
  },
  {
    url: '/contacto',
    component: Contact,
    name: 'Contacto',
    items: [
    ],
  },
];

export default ROUTES;
