/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Aapne jo Fonts define kiye thay unhein yahan register kiya hai
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },
      // 2. Aapka custom neon glass shadow yahan add kiya hai
      boxShadow: {
        'neon-glass': 'inset -10px -9px 23px rgba(255,255,255,0.25), inset 9px 10px 23px rgba(255,255,255,0.25)',
      },
      // 3. Website ka dark theme color
      colors: {
        darkBg: "#020617",
      }
    },
  },
  plugins: [],
}