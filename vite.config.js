import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optional: Optimize chunk splitting
      },
    },
  },
  server: {
    historyApiFallback: true, // Ensures all routes are redirected to index.html
  },
  preview: {
    historyApiFallback: true, // Ensures all routes are redirected to index.html during preview
  },
})
