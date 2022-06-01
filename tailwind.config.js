module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/homepage/H03.jpg')",
        "hero-homepage": "url('/assets/homepage/H01.jpg')",
        "category-01": "url('/assets/homepage/P01.jpg')",
        "category-02": "url('/assets/homepage/P02.jpg')",
        "category-03": "url('/assets/homepage/P03.jpg')",
      },
    },
  },
  plugins: [],
};
