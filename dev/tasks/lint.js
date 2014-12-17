/* jshint node: true */

'use strict';

var tools = require( './utils/tools' );

module.exports = function( grunt ) {
	grunt.registerTask( 'lint', function( target ) {
		grunt.task.run( grunt.config.get( this.name )[ target || 'git' ] );
	} );
};