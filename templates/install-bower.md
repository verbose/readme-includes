Install with [bower](http://bower.io/)

```sh
$ bower install {%= typeof g !== 'undefined' ? '-g ' : '' %}{%= name %} {%= typeof save !== 'undefined' ? '--save' : '--save-dev' %}
```