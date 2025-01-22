/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "soft-peach": "#FFF3E2",
        "soft-blue": "#DEEDFD",
        "soft-green": "#D5F1E4",
        "soft-pink": "#FDEDED",
        "blush-rose": "#F28484", // Previously customPink
        "mint-meadow": "#48C88A", // Previously customGreen
        "skyline-blue": "#20A5F8", // Previously customBlue
        "golden-peach": "#EDB86E", // Previously customOrange
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(135deg, color-mix(in srgb, var(--accent-color), transparent 95%) 50%, color-mix(in srgb, var(--accent-color), transparent 98%) 25%, transparent 50%)",
      },
    },
  },
  plugins: [],
};
