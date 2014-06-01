## include("authors")

```js
{%%= include("authors", {
  authors: [
    {
      name: 'Jon Schlinkert',
      username: 'jonschlinkert'
    },
    {
      name: 'Brian Woodward',
      username: 'doowb'
    }
  ]
}) %}
```
Results in:

```markdown
**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb)
```