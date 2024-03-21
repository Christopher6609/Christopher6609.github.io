/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Open Sans", defaultTheme.fontFamily.sans],
        Mono: ["DM Mono"],
      },
     
    },
  },
  plugins: [],
}

