# astro-i18n-bug
This repository contains a minimal example demonstrating a bug in **Astro v4.16.7** related to the integration of Astro islands with the i18n feature. 
The issue occurs when changing the i18n locale; Astro islands do not respond to the locale change, and `Astro.currentLanguage` continues to return the default language.

## Steps to reproduce
1. Run `npm install`
2. Run `npm run dev`
3. Navigate to a http://localhost:4321/es


