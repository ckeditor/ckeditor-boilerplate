/* jshint node: true */

'use strict';

var tools = require( './dev/tasks/utils/tools' );

module.exports = function( grunt ) {
	// Basic configuration which will be overloaded by the tasks.
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		// Files that will be ignored by the "jscs" and "jshint" tasks.
		ignoreFiles: [
			// Automatically loaded from .gitignore. Add more if necessary.
		],

		jshint: tools.getLinterTaskTargets(),

		jscs: tools.getLinterTaskTargets(),

		lint: {
			all: [ 'jshint:all', 'jscs:all' ],
			git: [ 'jshint:git', 'jscs:git' ]
		}
	} );

	// Finally load the tasks.
	grunt.loadTasks( 'dev/tasks' );

	grunt.registerTask( 'default', [ 'lint:git' ] );
};
