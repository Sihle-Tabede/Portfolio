# Verification results

Validated 8 September 2026 with Node.js 24 and headless Chromium.

- Clean dependency installation (`npm ci`): passed.
- ESLint (`npm run lint`): passed.
- Production build (`npm run build`): passed.
- Development server: all three Download CV links and the mobile navigation download returned the original PDF byte-for-byte.
- Production preview: all three Download CV links and the mobile navigation download returned the original PDF byte-for-byte.
- Download filename: Siboniso-Tabede-CV.pdf.
- PDF HTTP response in production preview: 200, application/pdf.
- Original PDF: 62,925 bytes, one A4 page, visually inspected and readable. PDF contents unchanged.
- Original/downloaded PDF SHA-256: 6b324607187d1fe9a39808c0cca81aa222976f8b9073fcedfbd6f4972372349a.
- Desktop, tablet and mobile widths: 1440, 768 and 390 pixels; no horizontal overflow after the fix.
- Mobile menu: opens, closes after CV download, and navigates to Projects.
- No browser JavaScript errors during these checks.
- Netlify headers file and actual CV are included in dist.

Scope: this package is ready to deploy but has not been published to a Netlify account. Netlify's response-header processing and the final public URL need confirmation after upload. External project links and email delivery were not tested; the form uses the visitor's email app. The GitHub billing lock and remote repository settings were not changed.
