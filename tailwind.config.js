/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1.5rem",
      },
    },
    extend: {
      colors: {
        ink: "#1c2733",
        muted: "#6f7d89",
        brand: {
          DEFAULT: "#458bc9",
          deep: "#1f4f78",
          soft: "#d9e8f5",
        },
        accent: {
          DEFAULT: "#e49b2f",
          soft: "#f3d7a0",
        },
        steel: {
          50: "#f7f8f9",
          100: "#edf1f4",
          200: "#eceff2",
          300: "#e8ecf0",
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        panel: "0 20px 60px rgba(28, 39, 51, 0.12)",
        modal: "0 30px 90px rgba(17, 22, 28, 0.24)",
      },
      borderRadius: {
        panel: "24px",
        xl2: "32px",
      },
    },
  },
  plugins: [],
};
