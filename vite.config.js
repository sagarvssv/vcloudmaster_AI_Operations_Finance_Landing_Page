import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// VITE_BASE lets you host the page under a sub-path, e.g. VITE_BASE=/agentic-ai/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE || '/',
  // Allow VS Code port forwarding (dev tunnels) to reach the dev/preview server
  server: { allowedHosts: ['.devtunnels.ms'] },
  preview: { allowedHosts: ['.devtunnels.ms'] },
});
