import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    react(),
    ...(process.env.NODE_ENV !== 'production' &&
    process.env.REPL_ID !== undefined
      ? [
          // Add development plugins here if needed
        ]
      : []),
  ],
  // Add compatibility settings for Node.js 20
  esbuild: {
    target: 'es2022',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./client/src', import.meta.url)),
      '@shared': fileURLToPath(new URL('./shared', import.meta.url)),
    },
  },
  root: 'client',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          vendor: ['react', 'react-dom'],
          // UI component libraries
          ui: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip',
          ],
          // Routing and navigation
          routing: ['wouter'],
          // Form handling and validation
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          // Utility libraries
          utils: ['clsx', 'tailwind-merge', 'date-fns', 'validator'],
          // Analytics and external services
          analytics: ['react-helmet-async'],
          // Charts and data visualization
          charts: ['recharts', 'embla-carousel-react'],
          // Animation libraries
          animation: ['framer-motion'],
        },
      },
    },
    // Security: Enable source maps for debugging but not in production
    sourcemap: process.env.NODE_ENV === 'development',
    // Performance: Set chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Enable modern builds with better compatibility
    target: 'es2020',
    minify: 'esbuild',
  },
  server: {
    // Security: Bind to localhost in development, allow network in production
    host: process.env.NODE_ENV === 'development' ? '127.0.0.1' : '0.0.0.0',
    port: 3001,
    strictPort: true,
  },
  // Security: Configure environment variables
  define: {
    // Ensure environment variables are properly defined
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development'
    ),
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'wouter', 'clsx', 'tailwind-merge'],
    exclude: ['@vite/client', '@vite/env'],
  },
});
