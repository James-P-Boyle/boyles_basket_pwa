import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Optionally, you can define global SCSS variables or mixins here
        // This will prepend the specified SCSS code to every SCSS file
        // additionalData: `@import "./src/scss/variables.scss";`
      },
    },
  },
})
