import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        react(),
        dts({
            // Generates .d.ts files from your source
            include: ['src'],
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            // Entry point — everything exported here is available to consumers
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'BlockBuilder',
            // Outputs both ESM and CommonJS
            formats: ['es'],
            fileName: (format) => `index.es.js`,
        },
        rollupOptions: {
            // Externalize deps the consumer must provide — never bundle these
            external: ['react', 'react-dom', 'react/jsx-runtime', 'zustand'],
        },

        // Emit declaration files alongside JS output
        sourcemap: true,

        // Clean dist on each build (doing this manually so we can use tailwind's CLI to watch and rebuild styles without deleting the lib output)
        emptyOutDir: false,
    },
})
