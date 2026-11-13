import { defineConfig } from 'astro/config';

// GitHub Pages. Override per repo via env (set in the workflow):
//   SITE_URL=https://<user>.github.io   BASE_PATH=/<repo>
// For a user/org site (<user>.github.io repo) or custom domain, set BASE_PATH=/
const site = process.env.SITE_URL || 'https://haroonfayyaz17.github.io';
const base = process.env.BASE_PATH || '/nexacare';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
