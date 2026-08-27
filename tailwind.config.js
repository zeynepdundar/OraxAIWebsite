/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1240px",
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
        sans: ['Barlow', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Barlow', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        condensed: [
          'Barlow Semi Condensed',
          'Barlow',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        // role-based type scale (size, { lineHeight, letterSpacing })
        eyebrow: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.12em" }],
        small: ["0.9375rem", { lineHeight: "1.6" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
        lead: ["1.25rem", { lineHeight: "1.6" }],
        h3: ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.014em" }],
        h2: ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.024em" }],
        display: ["3.75rem", { lineHeight: "1.04", letterSpacing: "-0.032em" }],
      },
      letterSpacing: {
        display: "-0.032em",
        heading: "-0.024em",
        tightish: "-0.014em",
        label: "0.12em",
      },
      maxWidth: {
        measure: "65ch",
        headline: "18ch",
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
