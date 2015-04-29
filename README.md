# readme-includes [![NPM version](https://badge.fury.io/js/readme-includes.svg)](http://badge.fury.io/js/readme-includes)

> Snippets for your GitHub project's readme.

[verb](https://github.com/assemble/verb) and [generator-verb](https://github.com/assemble/generator-verb) depend on this library.

## Install with [npm](npmjs.org)

```bash
npm i readme-includes --save-dev
```

## Usage

Any template from this library can be included in another template using the `{%= include() %}` tag.

**Example**

```js
// add installation instructions to a readme, like those above
{%= include('install-npm') %}
```

## Included templates

See an **up-to-date list** of the includes in the [templates/example.md](templates/examples.md) directory:

* [author](templates/author.md)
* [authors](templates/authors.md)
* [cli](templates/cli.md)
* [contributing-extra](templates/contributing-extra.md)
* [contributing](templates/contributing.md)
* [contributors](templates/contributors.md)
* [footer](templates/footer.md)
* [github](templates/github.md)
* [history](templates/history.md)
* [install-bower](templates/install-bower.md)
* [install-global](templates/install-global.md)
* [install-npm](templates/install-npm.md)
* [install](templates/install.md)
* [issues](templates/issues.md)
* [run-verb](templates/run-verb.md)
* [tests](templates/tests.md)
* [twitter](templates/twitter.md)

## Related projects

* [template](https://github.com/jonschlinkert/template): Render templates using any engine. Supports, layouts, pages, partials and custom template types. Use template… [more](https://github.com/jonschlinkert/template)
* [verb](https://github.com/assemble/verb): Documentation generator for GitHub projects. Extremely powerful, easy to use, can generate anything from API… [more](https://github.com/assemble/verb)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/assemble/readme-includes/issues)

## Author

**Jon Schlinkert**

[github/jonschlinkert](https://github.com/jonschlinkert)
[twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright (c) 2014-2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on April 29, 2015._

<!-- reflinks generated by verb-reflinks plugin -->
