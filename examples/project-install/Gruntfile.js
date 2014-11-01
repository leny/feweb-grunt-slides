"use strict";

module.exports = function( grunt ) {

    // Partie 1 : on importe nos tâches
    grunt.loadNpmTasks( "grunt-contrib-coffee" );
    grunt.loadNpmTasks( "grunt-contrib-stylus" );

    // Partie 2 : on les configure
    grunt.initConfig( {
        "stylus": {
            "stylesheets": {
                "files": {
                    "css/styles.css": "stylus/styles.styl"
                },
                "options": {
                    "compress": false
                }
            }
        },
        "coffee": {
            "scripts": {
                "files": {
                    "js/script.js": "coffee/script.coffee"
                }
            }
        }
    } );

    // Partie 3 : on crée des alias
    grunt.registerTask( "default", [
        "stylus",
        "coffee"
    ] );

};
