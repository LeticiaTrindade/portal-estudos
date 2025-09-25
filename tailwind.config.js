// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Rosa principal (suave)
          DEFAULT: "#E85D88",
          soft: "#F7A1BD",
          strong: "#C84B74",
        },
        surface: {
          // Fundos claros e cartões
          DEFAULT: "#FAF7FA",
          alt: "#FFFFFF",
          subtle: "#F3EFF4",
        },
        ink: {
          // Texto
          DEFAULT: "#253041",
          muted: "#5B6678",
          faint: "#8C95A5",
        },
        // Azul de apoio (desaturado)
        support: {
          blue: "#6E8ECF",
        },
        // Estado/foco/acessibilidade
        state: {
          success: "#0EA47A",
          warning: "#E2B351",
          danger: "#E35A78",
          focus: "#CF4F7D",
        },

        // Tema escuro apenas para blocos de código
        code: {
          bg: "#121420",
          border: "#E85D88",
          keyword: "#E85D88",
          string: "#23C79A",
          fn: "#6E8ECF",
          number: "#E2B351",
          comment: "#9AA3B2",
        },
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["Source Code Pro", "Consolas", "monospace"],
      },

      borderRadius: {
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
      },

      boxShadow: {
        card: "0 8px 30px rgba(20, 24, 40, 0.06)",
        cardHover: "0 10px 38px rgba(20, 24, 40, 0.10)",
        focus: "0 0 0 4px rgba(232, 93, 136, 0.20)",
      },

      backgroundImage: {
        "hero-warm":
          "radial-gradient(1200px 600px at 20% 0%, rgba(232,93,136,0.10), transparent), radial-gradient(1200px 600px at 80% 0%, rgba(110,142,207,0.10), transparent)",
      },

      animation: {
        "fade-in": "fadeIn 240ms ease-out",
        "scale-in": "scaleIn 160ms ease-out",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.98)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
