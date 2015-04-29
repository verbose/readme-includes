{% if(typeof github === 'object' && github.username) { %}
  {%= log("github.username") %}
  + {%= mdu.link('github/' + github.username, 'https://github.com/' + github.username) %}
{% } else if(typeof github === 'string') { %}
  {%= log("github") %}
  + {%= mdu.link('github/' + github, 'https://github.com/' + github) %}
{% } else if(typeof username !== 'undefined') { %}
  {%= log("username") %}
  + {%= mdu.link('github/' + username, 'https://github.com/' + username) %}
{% } else { %}
<!-- `github`, `github.username`, and `username` variables are undefined -->
{% } %}