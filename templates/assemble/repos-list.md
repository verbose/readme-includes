Here are some related projects you might be interested in from the [Assemble](http://assemble.io) core team.
{% _.each(repos, function(repo) { %}
+ [{%= repo.name %}]({%= repo.html_url %}): {%= repo.description %} {% }); %}

Visit [assemble.io/assemble-middleware](http:/assemble.io/assemble-middleware/) for more information about [Assemble](http:/assemble.io/) middleware.
