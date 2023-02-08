/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    transform: ["responsive,group-hover,hover"],
    transformOrigin: ["responsive, group-hover, hover"],
    transitionDelay: ["responsive, group-hover,hover"],
    transitionDuration: [" group-hover,hover"],
    transitionProperty: ["responsive,group-hover,hover"],
    transitionTimingFunction: ["responsive,group-hover,hover"],
    translate: ["responsive", "hover", "focus, group-hover"],
  },
  theme: {
    extend: {
      backgroundImage: {
        "it-background": "url('/src/assets/it-background.webp')",
        "anime-project": "url('/src/assets/anime-project.png')",
      },
      keyframes: {
        scroll: {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "70%": { opacity: "100", transform: "translateY(1.6rem)" },
          "100%": { opacity: "0", transform: "translateY(1.6rem)" },
        },
      },
      animation: {
        scroll: "scroll 2.5s ease-in-out infinite",
      },
    },
    fontFamily: {
      "press-start": ["'Press Start 2P', cursive"],
      "roboto-sans": ["'Roboto', sans-serif"],
      "roboto-serif": ["'Roboto Slab', serif"],
      "roboto-mono": ["'Roboto Mono', monospace"],
    },
  },
  plugins: [],
};
