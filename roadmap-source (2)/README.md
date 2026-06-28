# 80-Day FAANG Study Roadmap

Day-wise study plan for senior Java/SpringBoot/DevOps engineers targeting
FAANG and top product companies (Nike, Flipkart, Myntra, SolarWinds, Jio
Hotstar) at 30+ LPA.

Built with **Next.js 15** + React 18 + TypeScript + Tailwind CSS 3.
This version is Vercel-tested and known-good.

## Quick start (local)

```bash
npm install
npm run dev
```
Open http://localhost:3000

## Access from your mobile (same Wi-Fi as laptop)

1. Find your laptop's local IP:
   - Windows: `ipconfig | findstr IPv4` (look for Wi-Fi adapter)
   - macOS: `ipconfig getifaddr en0`
   - Linux: `ip addr show | grep "inet "`
2. `npm run dev` already binds to `0.0.0.0` (all interfaces).
3. On your phone (same Wi-Fi), open `http://YOUR_LAPTOP_IP:3000`
4. Bookmark / "Add to Home Screen" for app-like access.
5. Allow Node through your firewall if prompted (Windows).

## Deploy on Vercel (recommended — gives a public URL)

This bundle is **pre-configured for Vercel** with:
- `vercel.json` — explicit Next.js framework
- `.nvmrc` — pins Node 20
- `next.config.ts` — Vercel-safe (no `output: "standalone"`)
- Standard Next.js 15 + React 18 + Tailwind 3 (Vercel's most-tested stack)

### Steps

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/roadmap-80day.git
   git push -u origin main
   ```
   (Use a Personal Access Token as password if you haven't set up SSH.)

2. **Import on Vercel:**
   - Go to https://vercel.com → sign in with GitHub
   - "Add New..." → "Project"
   - Pick your `roadmap-80day` repo → "Import"

3. **Leave all build settings at defaults.** Vercel will auto-detect Next.js.
   - Framework Preset: Next.js
   - Build Command: `next build` (auto-filled)
   - Install Command: `npm install` (auto-filled)

4. Click **Deploy**. Build takes ~1-2 minutes.

5. You'll get a URL like `https://roadmap-80day.vercel.app`.
   Visit it on any device — phone, laptop, anywhere.

### If Vercel still returns 404

The 404 means the deployment exists but Vercel isn't serving the homepage.
Check these in order:

1. **Build status**: In your Vercel dashboard → click the latest deployment →
   check if the build says "Ready" (green) or "Error" (red). If Error, open
   "Build Logs" and look at the last 30 lines.

2. **Verify the homepage exists in your repo**: Make sure
   `src/app/page.tsx` is committed. Run `git ls-files src/app/` — you should
   see `page.tsx`, `layout.tsx`, `globals.css`. If missing, `git add src/`
   and re-push.

3. **Don't visit a stale URL**: Vercel gives a unique URL per deployment.
   In the dashboard, click "Visit" — don't manually type the URL. After a
   new push, the same production URL will reflect the new build within ~30
   seconds.

4. **Force a clean rebuild**: Vercel dashboard → Deployments tab → click the
   latest → "..." menu → "Redeploy" → uncheck "Use existing Build Cache".

5. **Check Node version**: Vercel project Settings → "General" → "Node.js
   Version" should be 20.x (driven by `.nvmrc`). If it's 18.x, change it.

6. **Verify framework**: Vercel project Settings → "General" → "Framework
   Preset" should say "Next.js". If not, set it manually.

### Other public-access options

- **Cloudflare Tunnel** (free, exposes localhost):
  ```
  npm install -g cloudflared
  cloudflared tunnel --url http://localhost:3000
  ```
- **ngrok** (free tier): `ngrok http 3000`

## Troubleshooting local

**`npm install` fails on sharp**: Try `npm install --ignore-scripts` then
`npm run dev` — sharp is optional for dev mode.

**Port 3000 in use**: Edit `package.json` → change `-p 3000` to `-p 3001`.

**Phone can't reach server**: Make sure both are on the same Wi-Fi (not a
guest network). Some routers have "AP Isolation" on by default — disable it
in router settings.

**Progress resets**: Saved per-device in browser localStorage. To sync,
deploy on Vercel and use the same browser.
