{% var twitter = twitter || {} %}{% if (twitter.username) { %}
+ [twitter/{%= twitter.username %}](http://twitter.com/{%= twitter.username %})
{% } %}
