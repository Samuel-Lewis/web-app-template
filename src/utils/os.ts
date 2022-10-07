import { OS } from '@mantine/hooks';

export const getModKey = (os: OS) => {
  switch (os) {
    case 'macos':
      return '⌘';
    case 'windows':
    case 'linux':
      return 'Ctrl';
    default:
      return null;
  }
};
