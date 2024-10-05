/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths based on your project structure
    "./public/index.html", // Include any other relevant paths
  ],
  theme: {
    extend: {
      colors: {
        "matte-black": "#1c1c1c",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
