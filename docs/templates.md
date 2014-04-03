The following templates are included in this repo:

* `CHANGELOG.yml`
* `contributing.md`
* `contributors.md`
* `examples.md`
* `footer.md`
* `history.md`
* `install-bower.md`
* `install-npm.md`
* `install.md`
* `options.md`
* `release-history.md`
* `report-issues.md`
* `usage.md`

**Categories**

Specify any templates from the following directories by adding the directory name before the template name, e.g. `{%%= include("assemble/repos" %}`:

* `./assemble`
* `./grunt`
* `./gulp`
* `./helper`
* `./verb`
* `./yo`


### install.md

For adding npm installation instructions to your README.

Usage:

```js
{%%= include("install", [options]) %}
```

If no options are passed, the following message is printed by default:

```bash
npm i your-project-name --save-dev
```

Options:

* `command`: explicitly append any custom flags to `npm i your-project-name`
* `save`: add a `--save` flag, e.g. `{save: '--save'}`. The default is `--save-dev`, so there is no need to add the flag unless you need `--save`.
* `g`: install globally, `{g: 'true'}`