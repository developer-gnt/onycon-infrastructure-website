import { SITE_IMAGES } from './images';

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  image: string;
  imageAlt: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'industrial-maharashtra',
    title: 'Industrial Building Project',
    location: 'Maharashtra',
    image: SITE_IMAGES.projectMaharashtra,
    imageAlt: 'Modern industrial factory complex in Maharashtra',
  },
  {
    id: 'tunnel-himachal',
    title: 'Tunnel Construction',
    location: 'Himachal Pradesh',
    image: SITE_IMAGES.projectHimachal,
    imageAlt: 'Illuminated highway tunnel interior in Himachal Pradesh',
  },
  {
    id: 'road-gujarat',
    title: 'Road Development Project',
    location: 'Gujarat',
    image: SITE_IMAGES.projectGujarat,
    imageAlt: 'Elevated highway road infrastructure in Gujarat',
  },
  {
    id: 'infrastructure-mp',
    title: 'Infrastructure Project',
    location: 'Madhya Pradesh',
    image: SITE_IMAGES.projectMadhyaPradesh,
    imageAlt: 'Large-scale infrastructure construction site with tower cranes in Madhya Pradesh',
  },
];
