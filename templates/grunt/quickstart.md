From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install {%= name %} --save-dev
```

Now, configure the `{%= shortname(name) %}` task in your project's Gruntfile:

```js
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    {%= shortname(name) %}: {
      options: {},
      files: {
        './': ['src/*']
      }
    }
  });

  // And be sure to load the plugin here
  grunt.loadNpmTasks('{%= shortname(name) %}');
  grunt.registerTask('default', ['{%= shortname(name) %}']);
};
```

If everything was installed and configured correctly, you should be ready to go!