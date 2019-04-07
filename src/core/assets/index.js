/* eslint-disable quote-props */

import fullbg from './images/ui/full_bg.jpg';
import banner from './images/ui/banner.png';
import bg01 from './images/ui/bg-03.jpg';
import device from './images/ui/promo_device.png';
import navbarDark from './images/navbar-dark.png';
import navbarSmall from './images/navbar-small.png';

import IconShock from './images/categories/shock.png';
import IconSink from './images/categories/sink.png';
import IconRoad from './images/categories/road.png';
import IconDown from './images/categories/down.png';
import IconDrown from './images/categories/drown.png';
import IconFissure from './images/categories/fissure.png';
import IconCollapse from './images/categories/collapse.png';
import IconDrain from './images/categories/drain.png';
import IconFlood from './images/categories/flood.png';
import IconLandslide from './images/categories/landslide.png';
import IconCracks from './images/categories/cracks.png';
import IconElectric from './images/categories/electric.png';
import IconLeak from './images/categories/leak.png';
import IconRains from './images/categories/rains.png';
import IconOther from './images/categories/other.png';

import ayuntamiento from './images/partners/ayuntamiento.png';
import bomberos from './images/partners/bomberos.png';
import cespt from './images/partners/cespt.png';
import cicese from './images/partners/cicese.png';
import cict from './images/partners/cict.png';
import cmic from './images/partners/cmic.png';
import cocopo from './images/partners/cocopo.png';
import colearq from './images/partners/colearq.png';
import colef from './images/partners/colef.png';
import comice from './images/partners/comice.png';
import indivi from './images/partners/indivi.png';
import itt from './images/partners/itt.png';
import pc from './images/partners/pc.png';
import spm from './images/partners/spm.png';
import uabc from './images/partners/uabc.png';


export const PARTNERS = [
  {
    url: cmic,
    info: 'Cámara Mexicana de la Industria de la Construcción',
    link: 'http://www.cmicbc.com/',
  },
  {
    url: spm,
    info: 'Secretaría de Seguridad Pública Municipal',
    link: 'https://www.facebook.com/SSPMTIJUANA/',
  },
  {
    url: pc,
    info: 'Dirección de Protección Civil',
    link: 'https://www.facebook.com/proteccionciviltijuana/',
  },
  {
    url: cicese,
    info: 'Centro de Investigación Científica y de Educación Superior de Ensenada',
    link: 'https://www.cicese.edu.mx/',
  },
  {
    url: itt,
    info: 'Instituto Tecnológico de Tijuana',
    link: 'http://tectijuana.edu.mx/',
  },
  {
    url: cespt,
    info: 'Comisión Estatal de Servicios Públicos de Tijuana',
    link: 'https://www.cespt.gob.mx/',
  },
  {
    url: uabc,
    info: 'Universidad Autónoma de Baja California',
    link: 'http://www.uabc.mx/',
  },
  {
    url: cict,
    info: 'Colegio de Ingenieros Civiles de Tijuana, A.C.',
    link: 'https://www.facebook.com/colegiodeingenieroscivilesdetijuanaac/',
  },
  {
    url: cocopo,
    info: 'Colegio de Constructores Posgraduados de Tijuana, A.C.',
    link: 'https://www.facebook.com/Colegio-de-Constructores-Posgraduados-de-Tijuana-AC-190332435133673/',
  },
  {
    url: ayuntamiento,
    info: 'Dirección de Administración Urbana',
    link: 'http://www.tijuana.gob.mx/dependencias/SDUE/DAU/',
  },
  {
    url: colearq,
    info: 'Colegio de Arquitectos de Tijuana, A.C.',
    link: 'https://www.facebook.com/colearquistijuana/',
  },
  {
    url: colef,
    info: 'Colegio de la Frontera Norte',
    link: 'https://www.colef.mx/',
  },
  {
    url: comice,
    info: 'Compañías Mexicanas de la Industria de la Construcción',
    link: 'https://www.facebook.com/Comice-TTR-AC-205411686898277/',
  },
  {
    url: ayuntamiento,
    info: 'Instituto Metropolitano de Planeación',
    link: 'http://implan.tijuana.gob.mx/',
  },
  {
    url: indivi,
    info: 'Instituto Nacional para el Desarrollo Inmobiliario y de la Vivienda',
    link: 'http://www.bajacalifornia.gob.mx/portal/tramitesyservicios/dependencias/indivi.jsp',
  },
  {
    url: ayuntamiento,
    info: 'Secretaría de Desarrollo Urbano y Ecología',
    link: 'http://www.tijuana.gob.mx/dependencias/sdue/',
  },
  {
    url: bomberos,
    info: 'Dirección de Bomberos Tijuana',
    link: 'https://www.facebook.com/bomberostj/',
  },
];


export default {
  fullbg,
  banner,
  navbarDark,
  navbarSmall,
  bg01,
  device,

  'Lluvia (Riesgos)': IconRains,
  'Fugas': IconLeak,
  'Socavones': IconFissure,
  'Derrumbe de inmueble': IconCollapse,
  'Inundacion de inmueble': IconFlood,
  'Asentamiento grave de inmueble': IconSink,
  'Arroyo crecido': IconDrown,
  'Inundacion de vialidades': IconRoad,
  'Deslave de talud o cerro': IconLandslide,
  'Bardas colapsadas o en riesgo': IconCracks,
  'Elemento vertical colapsado': IconDown,
  'Interrupción de energía eléctrica': IconElectric,
  'Riesgo de electrocutamiento': IconShock,
  'Azolves/Taponamientos': IconDrain,
  'Otro': IconOther,

  cict,
  cocopo,
  colearq,
};
