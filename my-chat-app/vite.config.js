import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows external access
    strictPort: true,
    port: 5173, // or the port Vite is using
    origin: 'https://5173-julm64-reactappchat-96awp9li94v.ws-eu119.gitpod.io',
    hmr: {
      protocol: 'wss',
      host: '5173-julm64-reactappchat-96awp9li94v.ws-eu119.gitpod.io',
    }
  }
})
