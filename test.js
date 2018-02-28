var sass = require('node-sass');

sass.render({
  file: 'src/test.scss',
  outputStyle: 'expanded'
}, function(error, result) {
  if (error) {
    // Object.keys(error).forEach(key => console.log(error[key]));
    console.log(error.formatted);
  }
  else {
    console.log(result.css.toString());
    console.log(result.stats);
  }
});
