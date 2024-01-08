import Inspect from 'vite-plugin-inspect';

export default {
  server: {
    host: true,
  },
  plugins: [Inspect()],
};
