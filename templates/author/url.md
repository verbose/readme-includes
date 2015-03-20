{% var author = author || {} %}{% if (author.name && author.url) { %}
+ {%= mdu.link(author.name, author.url) %}
{% } %}