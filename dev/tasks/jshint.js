/* jshint node: true */

'use strict';

var tools = require( './utils/tools' );

module.exports = function( grunt ) {
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.renameTask( 'jshint', 'jshint-contrib' );

	grunt.registerMultiTask( 'jshint', function() {
		var data = this.data();
		var options = grunt.file.readJSON( 'dev/tasks/jshint-config.json' );
		var ignores = grunt.config.get( 'ignoreFiles' ).concat( tools.getGitIgnore( grunt ) );

		options.ignores = ignores;

		grunt.config.set( 'jshint-contrib', {
			all: data,
			options: options
		} );

		grunt.task.run( [ 'jshint-contrib' ] );
	} );
};
