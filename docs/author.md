# author

> Add a markdown-formatted `author` section

## Markdown code example

```markdown
**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 
```

## Rendered example

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 


## Required data

```js
{author: {name: ''}}
```

## Optional data

```js
{github: {username: ''}}
// and/or
{twitter: {username: ''}}
```

## Usage

```js
{%%= include('author') %}
```
