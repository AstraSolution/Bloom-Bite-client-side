// Import the Tailwind CSS types
import type { Configuration } from 'tailwindcss';

// Import the Tailwind CSS plugin
const plugin = require("tailwindcss/plugin");

// Create your custom plugin
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

// Define your Tailwind CSS configuration
const tailwindConfig: Configuration = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: "'Raleway', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        source: " 'Source Sans 3', sans-serif",
        open: "'Open Sans', sans-serif",
      }
    },
  },
  plugins: [Myclass, require("daisyui"), require("tw-elements/dist/plugin.cjs")],
};

// Export the Tailwind CSS configuration
export default tailwindConfig;
