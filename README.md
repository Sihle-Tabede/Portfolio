# Siboniso Tabede — personal portfolio

React/Vite portfolio prepared for Netlify. No backend, GitHub Actions, or GitHub Pages is required.

## Run locally

Install Node.js 24 LTS, open a terminal in this folder (beside package.json), then run:

```sh
npm ci
npm run dev
```

Before deploying:

```sh
npm run lint
npm run build
npm run preview
```

## Deploy to Netlify without GitHub

1. Sign in at https://app.netlify.com/drop .
2. Drag the **dist folder** from this package onto the upload area. It already contains a production build, so you do not need to run commands for this first deployment.
3. Open the Netlify URL and try the navigation, hero and CV-panel Download CV buttons.
4. To update the site later, edit the source, run `npm run build`, and upload the new dist folder to the **same project's Deploys page**. Manual uploads do not update automatically when source files change.

Upload dist itself, containing index.html, assets, _headers and Siboniso-Tabede-CV.pdf. Do not upload src, public, the whole project, or node_modules as the published site. Do not open dist/index.html by double-clicking it; use a web server or Netlify.

For Netlify's repository-connected builds, use build command `npm run build`, publish directory `dist`, and Node.js 24. These settings are in netlify.toml. If package.json is inside a subfolder of your repository, set the base directory to that folder. Netlify builds do not require a GitHub Actions deployment workflow.

Official instructions:
- https://docs.netlify.com/deploy/create-deploys/
- https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/

## Stop the old GitHub deployment

The supplied ZIP contains no project `.github/workflows` directory, GitHub Pages deployment script, or gh-pages package. The existing Vite base is already `/`.

If a deployment workflow exists only in your online repository, disable it under the repository's Actions tab (select the deployment workflow, open its menu, and choose Disable workflow), or delete the relevant deployment YAML from `.github/workflows` and commit that deletion. Under Settings > Pages, unpublish the old Pages site if it remains published. This ZIP cannot change remote repository settings.

The message "The job was not started because your account is locked due to a billing issue" is an account-level block before the job runs. Source changes cannot clear that billing restriction. The manual Netlify route above avoids using that job entirely. You may still keep GitHub for source control and your public profile links.

## CV downloads

The original valid CV was named `Siboniso-Tabede-CV.pdf.pdf`, while every button requested `Siboniso-Tabede-CV.pdf`. The file has been renamed; its contents are unchanged.

- Replace `public/Siboniso-Tabede-CV.pdf` with your actual PDF when updating your CV. Keep the exact filename and casing, with only one .pdf extension.
- All three buttons use `src/components/ui/CvDownload.jsx` and the path/filename in `src/data/portfolioData.js`.
- Vite copies the PDF into dist. Same-origin download links work locally and on static hosts, including Netlify and Render.
- `public/_headers` is copied to dist and tells Netlify to serve the CV as a PDF attachment. It also requires revalidation so an updated CV is not stuck in the browser cache.
- There is no catch-all redirect: this site uses section anchors, not client-side page routes. Missing files should return an error instead of silently serving index.html as a fake PDF.

## Content and contact form

Edit portfolio details in `src/data/portfolioData.js`. LinkedIn is empty until you supply the real profile URL. The contact form opens the visitor's email application; it does not send or store messages itself.

Content to confirm: the supplied CV lists a different email address and internship dates from the website. These were left unchanged to avoid guessing which is correct. Update the website data or replace the PDF once you decide. The CV also contains an existing Netlify URL; use your intended site address when publishing.

## Cleanup

- Removed unused starter CSS, React/Vite images, and unreferenced starter SVG files.
- Removed 343 superseded top-level CSS declarations while retaining the active visual design and conditional styles.
- Consolidated repeated social/contact link validation.
- Consolidated all three CV links; downloading from the mobile menu also closes it.
- Removed the placeholder LinkedIn URL.
- Added Netlify deployment settings, response headers, Node version guidance and these instructions.
- Excluded bundled node_modules and Git history from this delivery. Use npm ci for dependencies; retain your existing repository's .git folder if copying source into it.

The production build is included for convenient manual upload. After changing source files, rebuild before uploading again.
