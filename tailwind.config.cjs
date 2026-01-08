/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f2437',
        amber: '#f4a64c',
        lightgray: '#e5e7eb',
        prussian: '#072338',
        pumpkin: '#ff6700',
        mustard: '#ff9f1c',
        steel: '#0582CA',
        sky: '#8ecae6',
        grayx: '#adb5bd',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(99,102,241,0.15), 0 0 40px -8px rgba(99,102,241,0.35)',
      },
    },
  },
}