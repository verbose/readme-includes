var verb = require('verb');

verb.task('readme', function () {
  verb.src('.verb.md')
    .pipe(verb.dest('.'))
});

// verb.data({username: 'jonschlinkert'});
// verb.doc('test', {content: '{%= include("github", {username: "bar"}) %}'});
// verb.render('test', function (err, res) {
//   console.log(res)
// })

verb.task('templates', function () {
  verb.src(['templates/github.md'])
    .pipe(verb.dest('actual'))
});

verb.task('default', ['readme']);
