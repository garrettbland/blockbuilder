import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        dedupe: ['react', 'react-dom', 'react/jsx-runtime'],
        alias: {
            'blockbuilder/styles.css': resolve(__dirname, '../dist/styles.css'),
            blockbuilder: resolve(__dirname, '../src/index.ts'),
        },
    },
})
