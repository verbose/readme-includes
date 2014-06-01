{% if (contributors) { %}
## Contributors
{% contributors.forEach(function (contributor) { %}
* [{%= contributor.name %}]({%= contributor.url %}){% }) %}
{% } %}
