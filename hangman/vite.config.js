import Inspect from 'vite-plugin-inspect';

export default {
  build: {
    sourcemap: true,
  },
  server: {
    host: true,
  },
  base: '/hangman/',
  plugins: [Inspect()],
};
