module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'primary': '#0072ce',
      'secondary': '#f03d88',
      'tertiary': '#f1c400',
      'future': '#01A64E',
      'background': '#f3f0f0',
      'bgPrimary': '#58cae7',

      'black': '#000000',
      'white':'#ffffff',

      'blue-gray-900': '#4C1D95', // Violet

      'gray-100':'#F4F4F5',
      'gray-200':'#e5e7eb',
      'gray-300':'#d1d5db',
      'gray-400':'#9ca3af',
      'gray-500': '#6b7280',
      'gray-600': '#4b5563',
      'gray-700':'#374151',

      'blue-300': '#0284c7'
    }
  },
  plugins: [],
}
