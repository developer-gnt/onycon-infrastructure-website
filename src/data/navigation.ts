export interface NavSubItem {
  label: string;
  targetId: string;
}

export interface NavItem {
  id: string;
  label: string;
  targetId: string;
  dropdown?: NavSubItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    targetId: 'home',
  },
  {
    id: 'about',
    label: 'About Us',
    targetId: 'about',
    dropdown: [
      { label: 'Company Overview', targetId: 'about' },
      { label: 'Our History', targetId: 'company-highlights' },
      { label: 'Vision & Mission', targetId: 'about-principles' },
      { label: 'Our Values', targetId: 'about-values' },
      { label: 'Leadership & Team', targetId: 'company-highlights' },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    targetId: 'services',
    dropdown: [
      { label: 'Industrial Buildings', targetId: 'services' },
      { label: 'Tunnels & Ports', targetId: 'services' },
      { label: 'Roads & Bridges', targetId: 'services' },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    targetId: 'projects',
    dropdown: [
      { label: 'All Projects', targetId: 'projects' },
      { label: 'Ongoing Projects', targetId: 'projects' },
      { label: 'Completed Projects', targetId: 'projects' },
    ],
  },
  {
    id: 'clients',
    label: 'Clients',
    targetId: 'clients',
  },
  {
    id: 'careers',
    label: 'Careers',
    targetId: 'careers',
  },
  {
    id: 'contact',
    label: 'Contact Us',
    targetId: 'contact',
  },
];

export const CONTACT_DETAILS = {
  phoneDisplay: '+91 22 4010 0000',
  phoneHref: 'tel:+912240100000',
  email: 'ho@onyconinfra.com',
  emailHref: 'mailto:ho@onyconinfra.com',
  officeName: 'Registered Office',
  addressLines: [
    '307, Sri Krishna Towers,',
    'Near Laxmi Industrial Estate,',
    'Andheri New Link Rd, Andheri West,',
    'Mumbai - 400053.',
  ],
};
