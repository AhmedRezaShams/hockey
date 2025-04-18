// tailwind.config.js
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}", // or wherever your components live
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E40AF',     // Customize this
          secondary: '#F59E0B',   // Customize this
        },
      },
    },
    plugins: [],
  };
  