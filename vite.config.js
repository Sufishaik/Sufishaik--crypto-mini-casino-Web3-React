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
      external: [
        'standardized-audio-context',
        './evaluate-audio-worklet-globalThis-scope-function'
      ],
      output: {
        globals: {
          'standardized-audio-context': 'StandardizedAudioContext',
          './evaluate-audio-worklet-globalThis-scope-function': 'AudioWorkletStub'
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
    exclude: ['standardized-audio-context'],
  },
  plugins: [
    react({ jsxRuntime: 'classic' }),
  ],
}))