import { SITE_IMAGES } from './images';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  iconType: 'industrial' | 'tunnel' | 'bridge';
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'industrial-buildings',
    title: 'Industrial Buildings',
    description: 'Industrial and factory construction projects for diverse sectors.',
    image: SITE_IMAGES.serviceIndustrial,
    imageAlt: 'Industrial steel-frame building construction with blue glass facade',
    iconType: 'industrial',
  },
  {
    id: 'tunnels-ports',
    title: 'Tunnels & Ports',
    description: 'Tunnel construction for hydro dams, railways, metro and ports.',
    image: SITE_IMAGES.serviceTunnel,
    imageAlt: 'Modern illuminated underground infrastructure tunnel',
    iconType: 'tunnel',
  },
  {
    id: 'roads-bridges',
    title: 'Roads & Bridges',
    description: 'Development of roads, bridges and key infrastructure projects.',
    image: SITE_IMAGES.serviceRoads,
    imageAlt: 'Elevated concrete highway viaduct spanning across green terrain',
    iconType: 'bridge',
  },
];
