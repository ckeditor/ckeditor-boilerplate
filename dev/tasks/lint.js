/* jshint node: true */

'use strict';

var tools = require( './utils/tools' );

module.exports = function( grunt ) {
	grunt.registerMultiTask( 'lint', function() {
		grunt.task.run( this.data );
	} );
};