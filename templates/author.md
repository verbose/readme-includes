{%= typeof author !== 'undefined' && author.name ? '**' + author.name + '**' : '' %}
{%= include("author/github") %}
{%= include("author/twitter") %}