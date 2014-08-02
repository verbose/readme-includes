```js
var assemble = require('assemble');
var {%= varname(name) %} = require('{%= name %}');

assemble.task('default', function() {
  assemble.src('templates/*.hbs')
    .pipe({%= varname(name) %}())
    .pipe(assemble.dest('dist'));
});
```