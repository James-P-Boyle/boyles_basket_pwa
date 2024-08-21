import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import path from 'path';

const base = '/boyles_basket_pwa/'

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType:'prompt',
  includeAssets:[
    "favicon.ico",
    "android-chrome-192x192.png",
    "android-chrome-512x512.png",
    "apple-touch-icon.png",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "favicon.ico",
    "maskable_icon_192x192.png",
    "maskable_icon_512x512.png"
  ],
  manifest: {
    name:"Boyle's Basket",
    short_name:"Boyle's Basket",
    description:"I am a shopping app, made by the boyle",
    icons: [
      {
        src: `${base}android-chrome-192x192.png`,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: `${base}android-chrome-512x512.png`,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src:  `${base}apple-touch-icon.png`,
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: `${base}favicon-16x16.png`,
        sizes: '16x16',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: `${base}favicon-32x32.png`,
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: `${base}maskable_icon_192x192.png`,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: `${base}maskable_icon_512x512.png`,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    theme_color: '#1E1E1E',
    background_color:'#121212',
    display:"standalone",
    scope: '/boyles_basket_pwa/',
    start_url: '/boyles_basket_pwa/',
    orientation:'portrait'
  }
}


// https://vitejs.dev/config/
export default defineConfig({
  base: "/boyles_basket_pwa/",
  plugins: [react(), VitePWA(manifestForPlugin)],
  css: {
    preprocessorOptions: {
      scss: {
        // Optionally, you can define global SCSS variables or mixins here
        // This will prepend the specified SCSS code to every SCSS file
        // additionalData: `@import "./src/scss/variables.scss";`
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  }
})

