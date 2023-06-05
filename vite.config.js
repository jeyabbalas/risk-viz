import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/risk-viz/',
    build: {
        outDir: "dist",
        sourcemap: true,
        lib: {
            entry: resolve(__dirname, 'riskViz.js'),
            name: 'RiskViz',
            fileName: 'risk-viz',
            formats: ['es']
        }
    }
});