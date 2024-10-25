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
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      colors: {
        accent_text_color: "hsl(var(--accent_text_color))",
        bg_color: "hsl(var(--bg_color))",
        button_color: "hsl(var(--button_color))",
        button_text_color: "hsl(var(--button_text_color))",
        bottom_bar_bg_color: "hsl(var(--bottom_bar_bg_color))",
        destructive_text_color: "hsl(var(--destructive_text_color))",
        header_bg_color: "hsl(var(--header_bg_color))",
        hint_color: "hsl(var(--hint_color))",
        link_color: "hsl(var(--link_color))",
        link_color_alt: "hsl(var(--link_color_alt))",
        secondary_bg_color: "hsl(var(--secondary_bg_color))",
        section_bg_color: "hsl(var(--section_bg_color))",
        section_header_text_color: "hsl(var(--section_header_text_color))",
        subtitle_text_color: "hsl(var(--subtitle_text_color))",
        text_color: "hsl(var(--text_color))",
        border: "hsl(var(--border))",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        gradientShift: "gradientShift 3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
