/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "hsl(198, 93%, 60%)",
        secondary: "hsl(234, 89%, 74%)",
        accent: "hsl(329, 86%, 70%)",
        neutral: "hsl(217, 33%, 17%)",
        base100: "hsl(222, 47%, 11%)",
        baseContent: "hsl(222, 66%, 82%)"
      },
    },
  },
  plugins: [],
};
