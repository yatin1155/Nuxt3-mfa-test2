// https://nuxt.com/docs/api/configuration/nuxt-config

import federation from '@originjs/vite-plugin-federation';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: 3001
  },
  vite: {
    plugins: [
      federation({
        name: 'dashboard',
        filename: 'remoteEntry.js',
        exposes: {
          './Lookup': './components/Lookup.vue',
        },
        shared: {
          vue:{
            generate:false
          },
          pinia:{
            generate:false
          },
          // This is to test if the custom library can be SHARED, there is no real point
          // myStore:{
          //   packagePath:'./src/store.js'
          // }
        }
      }),
    ],
    build: {
      assetsInlineLimit: 40960,
      minify: true,
      cssCodeSplit: false,
      sourcemap:true,
      rollupOptions: {
        output: {
          minifyInternalExports: false
        }
      }
    },
  },
  
})
