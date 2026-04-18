import baseConfig from '@repo/config/tailwind.config.js';

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    '../../packages/components/ui/**/*.{js,jsx}',
    '../../packages/components/lib/**/*.{js,jsx}',
  ],
};
