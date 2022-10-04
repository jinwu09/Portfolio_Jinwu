module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    keyframes: {
      expand: {
        "0%": { transform: "translateX(1400px)" },
        "100%": { transform: "translateX(0px)" },
      },
      slideup: {
        "0%": { transform: "translateY(1400px)" },
        "100%": { transform: "translateY(0px)" },
      },
      slidedown: {
        "0%": { transform: "translateY(0px)" },
        "100%": { transform: "translateY(1400px)" },
      },
    },
    screens: {
      phone: "400px",
      desktopsml: "800px",
      desktoplg: "1000px",
    },
    extend: {
      colors: {
        primary: "#0b132b",
        secondary: "#fffded",
        third: "#4d7298",
      },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
          navigation: "var(--color-text-navigation)",
          "button-accent-inverted": "var(--color-text-button-accent-inverted)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "fill-accent": "var(--color-fill-accent)",
          focus: "var(--color-fill-focus)",
          "button-accent": "var(--color-button-accent)",
          "button-accent-hover": "var(--color-button-accent-hover)",
        },
      },
    },
  },
  plugins: [],
};
