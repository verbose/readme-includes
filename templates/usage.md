Require `{%= name %}`:

```js
var {%= _.camelCase(name) %} = require('{%= name %}');
console.log({%= _.camelCase(name) %}('foo', 'bar'));
//=> baz
```