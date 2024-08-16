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

const docsDirectory = join(process.cwd(), 'documents')

export const blogsDirectory = join(docsDirectory, 'blogs');
export const notesDirectory = join(docsDirectory, 'notes');
export const miscDirectory = join(docsDirectory, 'misc')

