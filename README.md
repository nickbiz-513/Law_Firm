<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/495dd5cb-8569-49ff-a627-7b4516baeafb

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

This project is configured to build the production site into the `docs/` folder, which can be served by GitHub Pages.

1. Build the app for production:
   `npm run build`
2. Commit the generated `docs/` folder to GitHub.
3. In your GitHub repo, go to Settings > Pages.
4. Set the source to the `main` branch and the `/docs` folder.
5. Save the settings and wait for the site to publish.

If your repository is published at a path like `https://<username>.github.io/<repo-name>/`, the app uses relative asset paths so the site will load correctly.
