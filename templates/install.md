### Install with [npm](npmjs.org):
{% if (typeof command !== "undefined") { %}
```bash
npm i {%= name %} {%= command %}
```{% } else if (typeof g !== "undefined") { %}
```bash
npm i -g {%= name %}
```{% } else { %}
```bash
npm i {%= name %} {%= (typeof save !== "undefined" && save === 'save') ? "--save" : "--save-dev" %}
```{% } %}