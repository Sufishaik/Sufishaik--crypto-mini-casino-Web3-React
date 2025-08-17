import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const ENV_PREFIX = ['VITE_']

export default defineConfig(() => ({
  envPrefix: ENV_PREFIX,
  server: { port: 4001, host: true },
  assetsInclude: ["**/*.glb"],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: (id) => {
        // Externalize problematic modules
        if (id.includes('standardized-audio-context')) return true;
        if (id.includes('audio-worklet')) return true;
        if (id === 'fs' || id === 'path' || id === 'os') return true;
        return false;
      },
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@solana')) return 'solana';
            if (id.includes('@coral-xyz')) return 'anchor';
            if (id.includes('react')) return 'react';
            return 'vendor';
          }
        }
      }
    },
  },
  define: {
    'process.env.ANCHOR_BROWSER': true,
    global: 'globalThis',
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      buffer: 'buffer',
    },
  },
  optimizeDeps: {
    include: ['buffer'],
    exclude: [
      'standardized-audio-context',
      'audio-worklet-polyfill',
      '@coral-xyz/anchor/dist/cjs/nodewallet'
    ],
  },
  plugins: [
    react({ jsxRuntime: 'classic' }),
  ],
}))