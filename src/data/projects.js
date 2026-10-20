
// Import screenshots for all portfolio projects.
import noirV1 from '../assets/projects/noir-v1.png';
import noirV2 from '../assets/projects/noir-v2.png';
import noirV3 from '../assets/projects/noir-v3.png';
import orchidNoir from '../assets/projects/orchid-noir.png';
import everafter from '../assets/projects/everafter.png';
import nightshift from '../assets/projects/nightshift.png';
import casaMarea from '../assets/projects/casa-marea.png';
import velocity from '../assets/projects/velocity.png';
import formProperty from '../assets/projects/form-property.png';

// Store the project information used by the SelectedWork component.
export const projects = [
  {
    id: 'noir',
    name: 'NOIR',
    category: 'Grooming / Hospitality',
    description:
      'Three creative directions for a contemporary grooming studio.',
    type: 'Concept project',
    featured: true,

    // The default preview shown on the main NOIR portfolio card.
    image: noirV1,

    // Each NOIR version has its own preview and live website URL.
    versions: [
      {
        label: '01',
        name: 'Version 1',
        url: 'https://noir-website-olive.vercel.app/',
        image: noirV1,
      },
      {
        label: '02',
        name: 'Version 2',
        url: 'https://noir-website-olive.vercel.app/v2/',
        image: noirV2,
      },
      {
        label: '03',
        name: 'Version 3',
        url: 'https://noir-website-olive.vercel.app/v3/',
        image: noirV3,
      },
    ],
  },

  {
    id: 'orchid-noir',
    name: 'ORCHID NOIR',
    category: 'Bridal / Beauty',
    description: 'An elegant digital concept for a bridal studio.',
    type: 'Concept project',
    featured: true,
    url: 'https://orchid-noir.vercel.app/',
    image: orchidNoir,
  },

  {
    id: 'everafter',
    name: 'EVERAFTER',
    category: 'Wedding / Photography',
    description:
      'A visual-first concept for a wedding photography studio.',
    type: 'Concept project',
    featured: true,
    url: 'https://everafter-studio-wheat.vercel.app/',
    image: everafter,
  },

  {
    id: 'nightshift',
    name: 'NIGHTSHIFT ATHLETICS',
    category: 'Fitness / Sports',
    description: 'A high-energy digital identity for a training space.',
    type: 'Concept project',
    featured: false,
    url: 'https://nightshift-athletics.vercel.app/',
    image: nightshift,
  },

  {
    id: 'casa-marea',
    name: 'CASA MAREA',
    category: 'Restaurant / Hospitality',
    description:
      'A Mediterranean-inspired restaurant website concept.',
    type: 'Concept project',
    featured: false,
    url: 'https://casa-marea-zeta.vercel.app/',
    image: casaMarea,
  },

  {
    id: 'velocity',
    name: 'VELOCITY AUTOCARE',
    category: 'Automotive',
    description:
      'A performance-led concept for automotive detailing.',
    type: 'Concept project',
    featured: false,
    url: 'https://velocity-autocare.vercel.app/',
    image: velocity,
  },

  {
    id: 'form-property',
    name: 'FORM / PROPERTY',
    category: 'Real estate / Architecture',
    description: 'An editorial approach to presenting property.',
    type: 'Concept project',
    featured: false,
    url: 'https://form-property-kappa.vercel.app/',
    image: formProperty,
  },
];