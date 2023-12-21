/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        gray: "#929489",
        tan: "#DAA468",
        customeBlue: "#98c5d2",
        orange: "#E67B60",
        olive: "#BABA8D",
        teal: "#265367"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'main': 'linear-gradient(95deg, rgba(255, 255, 255, 0.08) 2.21002%, rgba(255, 255, 255, 0) 100%)',
          'hover': 'linear-gradient( 142deg, rgba(255, 255, 255, 0.21) 34.6847%, rgba(255, 255, 255, 0) 57.165%)'
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0, 0.54, 0.1, 0.99)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    },
  },
  plugins: [],
}
