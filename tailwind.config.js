/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        text: "#ffffff",
        rowBg: "var(--gas-row-bg, #2525258C)",
        label: "#ebebf599",
        main: "var(--tg-theme-accent-text-color, #499FDF)",
        shareLinkBg: "#000000CC",
        shareLinkText: "#EBEBF599",
        buy: "#2FBD85",
        sell: "#F54660",
        white48: "rgba(255,255,255,0.48)",
        white24: "rgba(255,255,255,0.24)",
        white8: "rgba(255,255,255,0.08)",
        darkBlue100: "#007AFF",
        modal: "#1C1C1E",
        border: "#FFFFFF14",
        label30: "#ebebf54d",
        label16: "#ebebf529",
        addImageBg: "#212B32",
        dedust: "#EC502C",
      },
      animation: {
        blink: "blink 0.25s linear",
      },
      keyframes: {
        blink: {
          "0%": { background: "white" },
        },
      },
    },
  },
  plugins: [],
};