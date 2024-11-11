import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    plugins: [
      federation({
        name: 'dashboardApp',
        filename: 'remoteEntry.js',
        exposes: {
          './Lookup': './components/Lookup.vue',
        },
        shared: ['vue']
      })
    ],
  });