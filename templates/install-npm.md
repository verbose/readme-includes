Install with [npm](https://www.npmjs.com/)

```sh
$ npm i {%= typeof g !== 'undefined' ? '-g ' : '' %}{%= name %} {%= typeof save !== 'undefined' ? '--save' : '--save-dev' %}
```