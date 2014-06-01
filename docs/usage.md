Provide the name of the include you want to use without the file extension:

```js
{%%= include("footer") %}
```

[footer.md](./templates/footer.md) will be included, resulting in:

<!-- DON'T ESCAPE THIS TEMPLATE! -->

```markdown
{%= include("footer") %}
```

Some includes accept options as a second parameter (most do not), for exmple:

```js
{%%= include("install", {save: '--save'}) %}
```

Browse the includes to learn more about them, or see the [Verb documentation](https://github.com/assemble/verb/DOCS.md#include) for more information about includes in general.
