const { src, dest } = require('gulp');
const svgsprite = require('gulp-svg-sprite');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');

const { paths } = require('../config');
const config = {
  mode: {
    // css: true, // Create a «css» sprite
    // view: {
    //   dest: '/src/components/sprite/',
    //   bust: false,
    //   render: {
    //     scss: true, // Activate Sass output (with default options)
    //   },
    // }, // Create a «view» sprite
    // defs: true, // Create a «defs» sprite
    symbol: {
      dest: '/src/components/sprite/',
      sprite: 'sprite.svg',
      inline: true,
    }, // Create a «symbol» sprite
    stack: { sprite: '../sprite.svg' }, // Create a «stack» sprite
  },
};
const svgSprite = () => {
  return src(paths.sprites.src)
    .pipe(plumber())
    .pipe(svgsprite(config))
    .pipe(dest(paths.sprites.dist))
    .pipe(browserSync.stream());
}

module.exports = svgSprite;
