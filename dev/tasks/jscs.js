/* jshint node: true */

'use strict';

var tools = require( './utils/tools' );

module.exports = function( grunt ) {
	grunt.loadNpmTasks( 'grunt-jscs' );
	grunt.renameTask( 'jscs', 'jscs-contrib' );

	grunt.registerMultiTask( 'jscs', function() {
		var data = this.data();
		var options = grunt.file.readJSON( 'dev/tasks/jscs-config.json' );
		var ignores = grunt.config.get( 'ignoreFiles' ).concat( tools.getGitIgnore( grunt ) );

		options.excludeFiles = ignores;

		grunt.config.set( 'jscs-contrib', {
			all: data,
			options: options
		} );

		grunt.task.run( [ 'jscs-contrib' ] );
	} );
};
