/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: '768px',  // Custom breakpoint for tablets
        laptop: '1024px', // Custom breakpoint for laptops
        desktop: '1440px' // Custom breakpoint for desktops
      },
      colors: {
        "white": "hsl(0, 0%, 100%)",
        "orange": "hsl(25, 97%, 53%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 54%)",
        "light-dark-blue": "hsl(213, 19%, 30%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: [],
}

