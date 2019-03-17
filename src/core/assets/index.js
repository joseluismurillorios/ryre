/* eslint-disable quote-props */

import fullbg from './images/ui/full_bg.jpg';
import banner from './images/ui/banner.png';
import navbarDark from './images/navbar-dark.png';

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


export default {
  fullbg,
  banner,
  navbarDark,

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
};
