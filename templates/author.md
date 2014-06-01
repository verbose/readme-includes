{% if (author && author.name) { %}
**{%= author.name %}**
{% } else if (author) { %}
**{%= author %}**
{% } %} {% if (username) { %}
+ [github/{%= username %}](https://github.com/{%= username %})
+ [twitter/{%= username %}](http://twitter.com/{%= username %}) {% } %}