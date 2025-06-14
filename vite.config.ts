import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  return {
    base: isProduction ? './' : '/',
    server: {
      host: "::",
      port: 8080,
      fs: {
        strict: false
      }
    },
    build: {
      assetsDir: 'assets',
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: true,
      chunkSizeWarningLimit: 1000, // Increase chunk size warning limit (in kbs)
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          manualChunks: {
            // Split vendor and runtime chunks for better caching
            vendor: ['react', 'react-dom', 'react-router-dom'],
            // You can add more manual chunks for larger dependencies
          },
        },
      },
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Copy public assets to the dist folder
    publicDir: 'public',
    // Enable modern build for better performance
    esbuild: {
      target: 'es2020',
    },
  };
});
