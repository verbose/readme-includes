### install.md

Use `install.md` to add npm installation instructions to your README.

Usage:

```js
{%%= include("install", options) %}
```

If no options are passed, the following message is printed by default:

```bash
npm i your-project-name --save-dev
```

Options:

* `command`: explicitly append any custom flags to `npm i your-project-name`
* `save`: add a `--save` flag, e.g. `{save: '--save'}`. The default is `--save-dev`, so there is no need to add the flag unless you need `--save`.
* `g`: install globally, `{g: 'true'}`