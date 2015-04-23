{% var authors = authors || [author] %}
{% if (authors) {
authors.forEach(function(author) {
print('\n' + include("author", {author: author}) + '\n');
});
} %}