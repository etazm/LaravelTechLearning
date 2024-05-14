import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        outDir: '../../public/build-dashboard',
        emptyOutDir: true,
        manifest: true,
    },
    plugins: [
        laravel({
            publicDirectory: '../../public',
            buildDirectory: 'build-dashboard',
            input: [
                __dirname + '/resources/assets/sass/App.scss',
                __dirname + '/resources/assets/js/App.js'
            ],
            refresh: true,
        }),
    ],
});

//export const paths = [
//    'Modules/Dashboard/resources/assets/sass/App.scss',
//    'Modules/Dashboard/resources/assets/js/App.js',
//];
