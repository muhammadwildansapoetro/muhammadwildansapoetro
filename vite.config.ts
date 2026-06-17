import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages base path.
  // - User/org site (e.g. "username.github.io"): keep base as '/'
  // - Project site (e.g. "github.com/you/my-repo"): set base to '/my-repo/'
  base: '/',
})
