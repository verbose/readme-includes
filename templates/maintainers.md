{% if (maintainers) { %}
## Maintainers
{% maintainers.forEach(function (person) { %}
+ [{%= person.name %}]({%= person.url %})
{% }) %}
{% } %}
