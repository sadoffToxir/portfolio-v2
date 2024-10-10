import path from 'path';
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr';

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],

  resolve: {
    alias: {
      '@components':path.resolve(__dirname,'/src/components'),
      '@styles': path.resolve(__dirname,'/src/styles'),
      '@constants': path.resolve(__dirname,'/src/constants'),
      '@types': path.resolve(__dirname,'/src/types'),
      '@assets': path.resolve(__dirname,'/src/assets'),
      '@services': path.resolve(__dirname,'/src/services'),
      '@utils': path.resolve(__dirname,'/src/utils'),
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/_variables.scss";',
      },
    },
  },
})