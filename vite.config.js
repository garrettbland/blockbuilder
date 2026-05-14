import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'slate-dom': path.resolve(__dirname, 'node_modules/slate-dom/dist/index.es.js'),
        },
    },
    optimizeDeps: {
        include: ['slate-dom'],
    },
})
