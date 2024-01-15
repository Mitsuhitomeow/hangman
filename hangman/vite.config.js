import Inspect from 'vite-plugin-inspect';

export default {
  build: {
    sourcemap: true,
  },
  server: {
    host: true,
  },
  base: '/mitsuhitomeow-JSFE2023Q4/',
  plugins: [Inspect()],
};
