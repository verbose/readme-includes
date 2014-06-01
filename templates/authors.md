{% authors.forEach(function (author) { %} {% if (author && author.name) { %}
**{%= author.name %}**
{% } else if (author) { %}
**{%= author %}**
{% } %} {% if (username) { %}
+ [github/{%= author.username %}](https://github.com/{%= author.username %})
+ [twitter/{%= author.username %}](http://twitter.com/{%= author.username %}) {% } %}
{% }) %}