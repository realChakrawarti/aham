import { join } from 'path';

export const navPaths = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Blogs',
    path: '/blog',
  },
  {
    label: 'Notes',
    path: '/note',
  },
  {
    label: 'Profile',
    path: '/profile',
  },
  {
    label: 'Projects',
    path: '/project'
  }
];

export const blogsDirectory = join(process.cwd(), 'documents', 'blogs');
export const notesDirectory = join(process.cwd(), 'documents', 'notes');
export const profileDirectory = join(process.cwd(), 'documents', 'profile');
export const projectsDirectory = join(process.cwd(), 'documents', 'projects');
export const notableArticlesDirectory = join(
  process.cwd(),
  'documents',
  'notable',
);
