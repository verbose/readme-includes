# author

> Add a markdown-formatted `author` section

**Usage**

```js
{%= include('author') %}
```

**Rendered markdown**

This is what the resulting markdown looks like:

```
****

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)
```

**Rendered result**

View this on GitHub to see the rendered result.

****

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)


## Data

**Required data**

- `author.name`

**Optional data**

For the `github` and/or `twitter` links, you must have one of the following defined:

- `username`: renders both links
- `twitter.username`: renders the twitter link
- `github.username`: renders the github link

[assemble]: http://assemble.io
[template]: https://github.com/jonschlinkert/template
[verb]: https://github.com/assemble/verb