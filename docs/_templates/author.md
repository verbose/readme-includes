# author

> Add a markdown-formatted `author` section

**Usage**

```js
{%%= include('author') %}
```

**Rendered markdown**

This is what the resulting markdown looks like:

```
{%= include('author') %}
```

**Rendered result**

View this on GitHub to see the rendered result.

{%= include('author') %}


## Data

**Required data**

- `author.name`

**Optional data**

For the `github` and/or `twitter` links, you must have one of the following defined:

- `username`: renders both links
- `twitter.username`: renders the twitter link
- `github.username`: renders the github link
