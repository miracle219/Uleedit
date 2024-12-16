const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-light": "#F8F9FA",
        "text-dark": "#495057",
        "shadow-dark": "#d1d9e6",
        "shadow-light": "#ffffff",
      },
      borderRadius: {
        lg: "12px",
      },
      translate: {
        hover: "2px",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        neumorphic: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
        neumorphic2: "8px 8px 16px #d1d9e6, -8px -8px 16px #D7DEE8",
        neumorphicInset2:
          "inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #D7DEE8",
        neumorphicInset:
          "inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff",
      },
      transitionProperty: {
        transform: "transform",
      },
      transitionTimingFunction: {
        neumorphic: "ease-in-out",
      },
      transitionDuration: {
        neumorphic: "300ms",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        "code-1": {
          "0%": { opacity: 0 },
          "2.5%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-2": {
          "16.2%": { opacity: 0 },
          "18.75%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-3": {
          "32.5%": { opacity: 0 },
          "35%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-4": {
          "48.75%": { opacity: 0 },
          "51.25%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-5": {
          "65%": { opacity: 0 },
          "72.5%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "code-6": {
          "81.25%": { opacity: 0 },
          "83.75%": { opacity: 1 },
          "97.5%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        breath: {
          "0%, 100%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
        line: {
          "0%, 100%": { left: 0, opacity: 0 },
          "50%": { left: "100%", transform: "translateX(-100%)" },
          "10%, 40%, 60%, 90%": { opacity: 0 },
          "25%, 75%": { opacity: 1 },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shake: {
          "10%, 90%": { transform: "translateX(-0.5px)" },
          "20%, 80%": { transform: "translateX(1px)" },
          "30%, 50%, 70%": { transform: "translateX(-1.5px)" },
          "40%, 60%": { transform: "translateX(1.5px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        fall: {
          "0%": { transform: "translate(0%,-150%) skewX(0deg)" },
          "50%": { transform: "translate(0%,0%) skewX(-10deg)" },
          "100%": { transform: "translate(0%,150%) skewX(0deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s cubic-bezier(.36,.07,.19,.97) infinite",
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both infinite 1s",
        pulse: "pulse 1s cubic-bezier(.36,.07,.19,.97) infinite",
        fall: "fall 3s cubic-bezier(.36,.07,.19,.97) infinite",
        typewriter: "typewriter 2s steps(11) forwards",
        caret:
          "typewriter 0.1s steps(30) forwards, blink 1s steps(11) infinite 2s",
        blink: "blink 1s steps(11) infinite",
        caret23:
          "typewriter 0.1s steps(23) forwards, blink 1s steps(23) infinite 2s",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
        hkgrotesk: ["HK Grotesk", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.037em" }],
        "3xl": [
          "1.875rem",
          { lineHeight: "1.3333", letterSpacing: "-0.037em" },
        ],
        "4xl": ["2.25rem", { lineHeight: "1.2777", letterSpacing: "-0.037em" }],
        "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
        "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
      },
      animationDirection: {
        "forwards-backwards": "forwards, backwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    plugin(({ matchUtilities, theme }) => {
      //Add the css properties that you use in tailwind
      matchUtilities({
        "animation-delay": (value) => {
          return {
            "animation-delay": value,
          };
        },
      });
    }),
    require("daisyui"),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontFamily: theme("fontFamily.montserrat"),
          fontWeight: "700",
          WebkitFontSmoothing: "auto",
          color: theme("colors.text-dark"),
          fontSize: "4.1rem",
          lineHeight: "3.95rem",
          letterSpacing: "-.14rem",
        },
        h2: {
          fontFamily: theme("fontFamily.montserrat"),
          fontWeight: "600",
          WebkitFontSmoothing: "auto",
          color: theme("colors.text-dark"),
          fontSize: "2.7rem",
          lineHeight: "2",
          letterSpacing: "-.14rem",
        },
        body: {
          margin: "0px",
          fontFamily:
            "Inter var,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
          fontSize: "1rem",
          fontWeight: "400",
          lineHeight: "1.5",
          color: theme("colors.text-body"),
          textAlign: "left",
        },
      });
    }),
  ],
  daisyui: {
    themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "daisy-", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
