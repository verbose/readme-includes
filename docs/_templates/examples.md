# Examples

> Usage examples for all of the included templates

{% _.forIn(templates, function(template) { %}
{%= mdu.h3(mdu.link(template.name, relative(dest.dirname, template.path))) %}

{%= pre(template.name) %}
{% }) %}
