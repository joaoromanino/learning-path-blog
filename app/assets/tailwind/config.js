module.exports = {
  content: [
    "./app/views/**/*.{html.erb,html.haml,html.slim}",
    "./app/helpers/**/*.rb",
    "./app/assets/javascripts/**/*.js",
    "./app/javascript/**/*.js",
    "./app/assets/stylesheets/**/*.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}