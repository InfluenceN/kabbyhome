# Kabby Home — GitHub Pages

The current V2 website source and its static output are in `website/`.
The original `AmberLeaf-V2.0 copy/` remains preserved for reference.
V2 source baseline: `3f9f0941f60e8be512f4ddf10c804ebc7785d4ec`.

GitHub Pages publishes **the contents of `website/dist/`**, using `.github/workflows/pages.yml` on pushes to `main`. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.

Build locally with Node.js 22 or later:

```sh
cd website
node build-pages.mjs
node check-pages.mjs
```

The Pages adapter sets the public origin to `https://ivywang1108.github.io` and prefixes local navigation, dynamic links, assets and canonical URLs with `/kabbie/`. To preview accurately, serve `dist` at `/kabbie/`, rather than at the server root. Static JavaScript, CSS, media, and vendor libraries in `dist` are input assets as well as deployable output; retain them in the repository. The original Sites build remains available through `node build.mjs` and is not deployed by this workflow.

No email delivery backend is configured. Quote requests must accurately disclose whether anything has been sent; the current static flow does not deliver verification emails. Image rendering requires the visitor's own Gemini key. Never commit `.env.local`, provider keys, credentials, or private configuration.
