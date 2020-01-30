module.exports = {
  plugins: {
    precss: {},
    autoprefixer: {
      overrideBrowserslist: ["last 2 versions"],
      grid: true,
    },
    cssnano: {},
  },
}