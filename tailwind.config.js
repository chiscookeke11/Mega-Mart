/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))'
      },
      boxShadow: {
        'complex-shadow': `
          0px 0px 0px 0px #0000001A,
          0px 5px 12px 0px #0000001A,
          0px 22px 22px 0px #00000017,
          0px 49px 30px 0px #0000000D,
          0px 88px 35px 0px #00000003,
          0px 137px 38px 0px #00000000
        `,
      }
    },
    
  },
  plugins: [],
}

