/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "12px",
        screens: {
          sm: "400px",
        },
      },
      spacing: {
        7.5: "30px",
        12.5: "50px",
        14.5: "60px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        5: "5px",
        8: "8px",
      },
      fontFamily: {
        sans: ["Gilroy", "ui-sans-serif", "system-ui", "Roboto", "sans-serif"],
      },
      fontSize: {},
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        gradientShift: 'gradientShift 3s linear infinite',
      },
    },
  },
  plugins: [],
}
