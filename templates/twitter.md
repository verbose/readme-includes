{% if(typeof twitter === 'object' && twitter.username) { %}
  + {%= mdu.link('twitter/' + twitter.username, 'http://twitter.com/' + twitter.username) %}
{% } else if(typeof twitter === 'string') { %}
  + {%= mdu.link('twitter/' + twitter, 'http://twitter.com/' + twitter) %}
{% } else if(typeof username !== 'undefined') { %}
  + {%= mdu.link('twitter/' + username, 'http://twitter.com/' + username) %}
{% } else { %}
<!-- `twitter`, `twitter.username`, and `username` variables are undefined -->
{% } %}