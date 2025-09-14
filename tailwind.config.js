/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#fc3883",
          light: "#ff74ab",
          dark: "#b02b63",
        },
        secondary: {
          DEFAULT: "#fdf8f8",
          light: "#ffffff",
          dark: "#cfc9c9",
        },
        background: {
          DEFAULT: "#141a27",
          light: "#1c2340",
          alt: "#1a2238",
        },
        accent: {
          yellow: "#ffd166",
          blue: "#3a86ff",
          green: "#06d6a0",
          red: "#ef476f",
          purple: "#9b5de5",
        },
        text: {
          light: "#fdf8f8",
          dark: "#141a27",
          muted: "#c2c2ccff",
        },

        // 🎨 Paleta para CodeBlock
        code: {
          bg: "#0f0f1c", // fundo escuro
          gradientFrom: "#1e1e2e",
          gradientVia: "#2a2a40",
          gradientTo: "#3a3a5a",
          border: "#fc3883", // rosa neon
          keyword: "#fc3883", // rosa
          string: "#06d6a0", // verde
          function: "#3a86ff", // azul
          number: "#ffd166", // amarelo
          comment: "#a0a0b0", // cinza claro
        },
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["Source Code Pro", "Consolas", "monospace"],
      },

      borderRadius: {
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
      },

      boxShadow: {
        md: "0 4px 6px rgba(0,0,0,0.25)",
        lg: "0 10px 20px rgba(0,0,0,0.35)",
        glow: "0 0 20px rgba(252,56,131,0.5)", // brilho rosa neon
        "glow-blue": "0 0 20px rgba(58,134,255,0.4)", // brilho azul
        "glow-green": "0 0 20px rgba(6,214,160,0.4)", // brilho verde
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #fc3883, #ff74ab)",
        "gradient-code":
          "linear-gradient(to bottom right, #0f0f1c, #1e1e2e, #2a2a40, #3a3a5a)",
      },

      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "pulse-glow": "pulseGlow 1.5s infinite alternate",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        pulseGlow: {
          "0%": { boxShadow: "0 0 10px rgba(252,56,131,0.4)" },
          "100%": { boxShadow: "0 0 20px rgba(252,56,131,0.8)" },
        },
      },
    },
  },
  plugins: [],
};
