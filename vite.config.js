import legacy from '@vitejs/plugin-legacy';
import viteRestart from 'vite-plugin-restart';
import sassGlobImports from 'vite-plugin-sass-glob-import';

export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        app: './src/scripts/main.js',
      },
    },
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    viteRestart({
      reload: ['./templates/**/*'],
    }),
    sassGlobImports(),
  ],
  server: {
    host: '0.0.0.0',
    origin: 'http://localhost:3000',
  },
});
