/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : ['Poppins'],
        'lobster' : ['Lobster'],
        'ubuntu' : ['Ubuntu'],
      },
      backgroundImage:{
        // 'background' : "url('../public/img/3d-space-scene_1_30.jpg')",
        'bg-dark' : "url('/img/nebula_30.jpg')",
        'bg-light' : "url('/img/mountain.jpg')",
        // 'bg-light' : "url('../public/img/sunset_mountains.jpg')",
        // 'background' : "url('../public/img/stars_30.jpg')",
      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
