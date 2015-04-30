{% if(typeof github === 'object' && github.username) { %}
  + {%= mdu.link('github/' + github.username, 'https://github.com/' + github.username) %}
{% } else if(typeof github === 'string') { %}
  + {%= mdu.link('github/' + github, 'https://github.com/' + github) %}
{% } else if(typeof username !== 'undefined') { %}
  + {%= mdu.link('github/' + username, 'https://github.com/' + username) %}
{% } else { %}
<!-- `github`, `github.username`, and `username` variables are undefined -->
{% } %}