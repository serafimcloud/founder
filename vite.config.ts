import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import svgrPlugin from 'vite-plugin-svgr'
import pluginChecker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    svgrPlugin(),
    pluginChecker({ typescript: true }),
  ],
})
