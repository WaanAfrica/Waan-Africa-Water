import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj-001',
    title: 'Large-Scale Irrigation Farm',
    category: 'irrigation',
    description: 'Successfully installed a comprehensive drip irrigation system for a 500-hectare commercial farm in rural Nigeria. The system reduced water consumption by 65% and increased crop yield by 40%.',
    image: '/images/Irrigation sprinkler.jpeg',
    video: '/projects/Large-Scale Irrigation Farm.mp4',
    galleryVideos: ['/projects/Large-Scale Irrigation Farm 1.mp4'],
    location: 'Kaduna State, Nigeria',
    completionDate: '2024-06-15',
    galleryImages: [
      '/images/Rain gun.jpeg',
      '/images/Rain hose pipe for irrigation.jpeg',
      '/images/Sprinkler.jpeg',
    ]
  },
  {
    id: 'proj-002',
    title: 'Industrial Water Treatment Plant',
    category: 'water-treatment',
    description: 'Designed and installed a state-of-the-art water treatment facility for a major manufacturing company. The system processes 10,000 liters per hour with 99.9% contaminant removal.',
    image: '/images/FRP Tank for water treatment.jpeg',
    video: '/projects/Multi-Stage Water Purification System.mp4',
    location: 'Lagos, Nigeria',
    completionDate: '2024-05-20',
    galleryImages: [
      '/images/Washable membrane, water treatment.jpeg',
      '/images/Mini RO system or under sink.jpeg',
    ]
  },
  {
    id: 'proj-003',
    title: 'Community Borehole Network',
    category: 'borehole',
    description: 'Installed boreholes and water distribution systems for 15 rural communities. Provides clean water access to over 50,000 residents.',
    image: '/projects/Community Borehole Network.jpeg',
    galleryVideos: [
      '/projects/Community Borehole drilling.mp4',
      '/projects/Community Borehole pumping.mp4',
      '/projects/Community School Borehole.mp4'
    ],
    location: 'Northern Region, Nigeria',
    completionDate: '2024-03-10',
  },
  {
    id: 'proj-004',
    title: 'Shopping Mall Water System',
    category: 'commercial',
    description: 'Complete water supply, treatment, and distribution system for a large commercial shopping complex. Includes backup storage and emergency systems.',
    image: '/images/Mpv swimming pool tank.jpeg',
    location: 'Abuja, Nigeria',
    completionDate: '2024-04-05',
    galleryImages: [
      '/images/Water meter.jpeg',
      '/images/Pressure gauge.jpeg',
      '/images/Gate valves.jpeg',
    ]
  },
  {
    id: 'proj-005',
    title: 'Vegetable Greenhouse Irrigation',
    category: 'irrigation',
    description: 'Implemented precision drip and micro-sprinkler irrigation system for a high-tech greenhouse facility. Increased productivity by 35% with automated moisture monitoring.',
    image: '/images/Sprinkler 1.jpeg',
    video: '/projects/Vegetable Greenhouse Irrigation.mp4',
    location: 'Enugu State, Nigeria',
    completionDate: '2024-02-28',
  },
  {
    id: 'proj-006',
    title: 'Multi-Stage Water Purification System',
    category: 'water-treatment',
    description: 'Installed a comprehensive 5-stage water purification system for a major hotel chain with 500+ rooms. System ensures luxury-grade water quality throughout the facility.',
    image: '/images/Mini RO system or under sink.jpeg',
    location: 'Port Harcourt, Nigeria',
    completionDate: '2024-01-15',
  },
  {
    id: 'proj-007',
    title: 'Estate Irrigation Project',
    category: 'irrigation',
    description: 'Designed and implemented a modern irrigation system for a residential estate community. Automated watering schedule optimized water usage while maintaining landscape beauty.',
    image: '/images/Rain gun 2.jpeg',
    video: '/projects/Estate irrigation project.mp4',
    location: 'Oyo State, Nigeria',
    completionDate: '2023-12-20',
  },
  {
    id: 'proj-008',
    title: 'Residential Complex Water Network',
    category: 'commercial',
    description: 'Complete water infrastructure for a 2,000-unit residential complex. Includes treatment, storage, and distribution systems with real-time monitoring.',
    image: '/projects/Residential Complex Water Network.jpeg',
    location: 'Lagos State, Nigeria',
    completionDate: '2023-11-10',
    galleryImages: [
      '/images/HDPE ball valve.jpeg',
      '/images/Electronic water meter.jpeg',
    ]
  },
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'irrigation', label: 'Irrigation Projects' },
  { id: 'water-treatment', label: 'Water Treatment' },
  { id: 'borehole', label: 'Borehole Projects' },
  { id: 'commercial', label: 'Commercial Projects' },
];

