# Examples

> Usage examples for all of the included templates

{% _.forIn(templates, function(template, name) { %}
{%= mdu.h3(mdu.link(name, relative(dest.dirname, template.path))) %}

{%= pre(name) %}
{% }) %}
