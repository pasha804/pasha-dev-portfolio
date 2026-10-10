/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#050508',
          subtle: '#090A10',
          card: '#0D0F18',
          cardHover: '#131622',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          purple: 'rgba(192, 132, 252, 0.35)',
          glow: 'rgba(168, 85, 247, 0.6)',
        },
        purple: {
          neon: '#C084FC',
          glow: '#A855F7',
          electric: '#D946EF',
          deep: '#7E22CE',
          dark: '#3B0764',
          metal: '#9333EA',
        },
        grey: {
          dark: '#12141C',
          steel: '#222735',
          slate: '#384156',
          light: '#94A3B8',
          bright: '#CBD5E1',
        },
      },
      fontFamily: {
        heading: ['Poppins', '-apple-system', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'bounce-x': 'bounce-x 1.5s infinite',
        'glow-whatsapp': 'glowPulseWhatsapp 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.5))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 35px rgba(217, 70, 239, 0.8))' },
        },
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'translateX(-25%)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        glowPulseWhatsapp: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 211, 102, 0.4), 0 0 0 1px rgba(37, 211, 102, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(37, 211, 102, 0.8), 0 0 0 1px rgba(37, 211, 102, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
