// https://nuxt.com/docs/api/configuration/nuxt-config

import federation from '@originjs/vite-plugin-federation';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: 3000
  },
  vite: {
    plugins: [
      federation({
        name: 'mainApp',
        filename: 'remoteEntry.js',
        remotes: {
          dashboard: {
            external: `Promise.resolve('http://localhost:3001/assets/remoteEntry.js')`,
            externalType: "promise"
          }
        },
        shared: {
          vue: {
            // This is an invalid configuration, because the generate attribute is not supported on the host side
          },
          pinia: {
          }
        }
      }),
    ],
    build: {
      target: 'esnext',
      minify: false,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          minifyInternalExports: false
        }
      }
    },
  },
})
console.log('Remote URL:', 'http://localhost:3001/assets/remoteEntry.js');
