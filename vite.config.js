import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            // 'slate-dom': path.resolve(__dirname, 'node_modules/slate-dom/dist/index.es.js'),
        },
    },
    // optimizeDeps: {
    //     // Leave this here! This forces Vite to correctly optimize and pre-bundle slate-dom
    //     include: ['slate-dom'],
    // },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'BlockBuilder',
            fileName: (format) => `blockbuilder.${format}.js`,
            formats: ['es'],
        },
        publicDir: false,
        // commonjsOptions: {
        //     // transforms stuff that is using mixed ESM and CommonJS, which is the case for slate-dom
        //     transformMixedEsModules: true,
        // },
        rollupOptions: {
            // Only externalize react and react-dom (not react-redux or redux)
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})
