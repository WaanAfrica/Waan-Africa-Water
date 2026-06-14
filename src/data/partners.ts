export interface Partner {
  id: string;
  name: string;
  logo?: string;
  category: string;
  description?: string;
}

export const partners: Partner[] = [
  {
    id: '1',
    name: 'Vintech Nexus Solutions',
    logo: '/About/Vintech Nexus Solutions.png',
    category: 'Technology & Development',
    description: 'Software development and technology solutions for water management systems',
  },
  {
    id: '2',
    name: 'Darange Borehole Services',
    logo: '/About/Darange borehole services.jpeg',
    category: 'Borehole & Drilling',
    description: 'Expert borehole drilling and water well services',
  },
  {
    id: '3',
    name: 'Matrix Water Ltd',
    logo: '/About/Matrix Water Ltd.jpeg',
    category: 'Water Treatment',
    description: 'Advanced water treatment and purification solutions',
  },
];
