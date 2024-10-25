// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: "en",
        locales: ["fr", "es", "en"],
        routing: {
            prefixDefaultLocale: false
        },
    },
    output: "server",
    experimental: {
        serverIslands: true
    },
});
