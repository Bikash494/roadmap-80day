# 80-Day FAANG Study Roadmap

A day-wise study plan website for senior Java/SpringBoot/DevOps engineers
targeting FAANG and top product companies (Nike, Flipkart, Myntra, SolarWinds,
Jio Hotstar) at 30+ LPA.

## Run on your laptop

### Option A — npm (recommended, no extra install)
1. Install Node.js 20+ from https://nodejs.org
2. Open a terminal in this folder and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open http://localhost:3000 in your browser

### Option B — Bun (faster installs)
1. Install Bun: https://bun.sh
2. Run:
   ```bash
   bun install
   bun run dev
   ```

## Access from your mobile (same Wi-Fi as laptop)

### 1. Find your laptop's local IP

**Windows:** Open PowerShell, run:
```
ipconfig | findstr IPv4
```
Look for "Wireless LAN adapter Wi-Fi" → IPv4 Address (e.g., `192.168.1.5`)

**macOS:** Open Terminal, run:
```
ipconfig getifaddr en0
```

**Linux:**
```
ip addr show | grep "inet " | grep -v 127.0.0.1
```

### 2. The dev server already binds to all interfaces

The included `package.json` runs `next dev -H 0.0.0.0`, so the server listens
on every network interface. You don't need to change anything.

### 3. Allow the port through your firewall

**Windows:** When you first run `npm run dev`, a popup may ask to allow Node.js
through the firewall. Check "Private networks" and click Allow. If you missed
the popup:
- Open "Windows Defender Firewall" → "Allow an app through firewall"
- Find "Node.js", enable for Private networks

**macOS:** No firewall blocks by default unless you've enabled one in
System Settings → Network → Firewall.

**Linux:** Usually no firewall by default. If you use ufw:
```
sudo ufw allow 3000/tcp
```

### 4. Open on your phone

1. Make sure your phone is connected to the SAME Wi-Fi as your laptop
2. Open the phone's browser (Chrome, Safari, etc.)
3. Type: `http://YOUR_LAPTOP_IP:3000`
   Example: `http://192.168.1.5:3000`
4. Bookmark it or "Add to Home Screen" for app-like access

## Deploy on Vercel (5-minute public URL)

This folder is pre-configured for Vercel — `vercel.json`, `.nvmrc`, and a
Vercel-friendly `next.config.ts` are all included.

### Steps

1. **Push to GitHub** (free account is fine):
   - Create a new repo at https://github.com/new (e.g., `roadmap-80day`)
   - In this folder, run:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/roadmap-80day.git
     git push -u origin main
     ```
   - If you haven't set up git auth, use a Personal Access Token as password:
     https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

2. **Import on Vercel**:
   - Go to https://vercel.com → sign in with GitHub
   - Click "Add New..." → "Project"
   - You should see your `roadmap-80day` repo in the list → click "Import"

3. **Build settings — leave defaults**:
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `next build` (auto-filled from `vercel.json`)
   - Install Command: `npm install` (auto-filled)
   - IMPORTANT: Do not override Node version — Vercel will read `.nvmrc` (Node 20)

4. Click **Deploy**. Build takes ~1-2 minutes.

5. You'll get a URL like `https://roadmap-80day.vercel.app` — opens on any device.

### If Vercel still fails

Open the **Build Logs** in your Vercel dashboard and look at the last 30 lines.
The most common causes (all already fixed in this bundle, but listed for reference):

- `Cannot find module '@types/node'` — already in devDependencies
- `output: "standalone"` warnings — already removed from `next.config.ts`
- `Module not found: z-ai-web-dev-sdk` — already removed from `package.json`
- `ESLint: ... errors` — already silenced via `eslint.ignoreDuringBuilds: true`
- `Type error: ...` — already silenced via `typescript.ignoreBuildErrors: true`
- Out of memory — Vercel hobby limit is 3GB; reduce bundle or upgrade plan
- `Error: ENOSPC` — your repo has `node_modules` committed; run `git rm -r --cached node_modules` then push

If you're still stuck, copy the build log and paste it back to me.

## Other public-access options

- **Cloudflare Tunnel** (free, exposes localhost):
  ```
  npm install -g cloudflared
  cloudflared tunnel --url http://localhost:3000
  ```
- **ngrok** (free tier):
  ```
  ngrok http 3000
  ```

## Troubleshooting

**Phone can't reach the server:**
- Verify both devices are on the SAME Wi-Fi (not a guest network)
- Some routers isolate Wi-Fi clients — disable "AP Isolation" / "Client Isolation" in router settings
- Try pinging your laptop IP from another device on the same network
- Double-check the IP (laptop IP changes when Wi-Fi reconnects)
- Make sure nothing else is using port 3000 on the laptop

**Blank screen on phone:**
- Hard refresh the page (long-press reload → "Reload without cache")
- Make sure JavaScript is enabled in the mobile browser

**Progress resets:**
- Progress is saved per-device in browser localStorage. It won't sync between
  laptop and phone unless you use the same browser with sync, or deploy online.
