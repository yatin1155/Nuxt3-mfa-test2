import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    plugins: [
      federation({
        remotes: {
          dashboardApp: 'http://localhost:3001/remoteEntry.js',
        },
        shared: ['vue']
      })
    ],
  });