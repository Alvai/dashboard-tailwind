/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'navbar': 'var(--navbar-width)',
        'collapsible-panel-open': 'var(--selection-width-open)',
        'collapsible-panel-closed': 'var(--selection-width-closed)',
        'selection-open': 248,
        'selection-closed': 30,
      },
      minWidth: {
        'navbar': 'var(--navbar-width)',
      },
      boxShadow: {
        regular: '0 0 8px rgba(131,139,161,0.5)',
        regular_hover: '0 0 8px rgba(131,139,161,0.65)',
      },
      transitionDuration: {
        selection: '0.5s'
      }
    },
  },
  plugins: [],
}
