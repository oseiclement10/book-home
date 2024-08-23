/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

