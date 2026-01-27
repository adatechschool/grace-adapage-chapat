import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
@tailwind base;
@tailwind components;
@tailwind utilities;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
