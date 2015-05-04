{% if (contributors) { %}
## Contributors
{% contributors.forEach(function (person) { %}
+ [{%= person.name %}]({%= person.url %})
{% }) %}
{% } %}
