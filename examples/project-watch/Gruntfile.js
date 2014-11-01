"use strict";

module.exports = function( grunt ) {

    grunt.loadNpmTasks( "grunt-contrib-coffee" );
    grunt.loadNpmTasks( "grunt-contrib-stylus" );
    grunt.loadNpmTasks( "grunt-contrib-watch" );

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
        },
        "watch": {
            "stylesheets": {
                "files": "stylus/*.styl",
                "tasks": [ "stylus:stylesheets" ],
                "options": {
                    "livereload": true
                }
            },
            "scripts": {
                "files": "coffee/*.coffee",
                "tasks": [ "coffee:scripts" ]
            }
        }
    } );

    grunt.registerTask( "default", [
        "stylus",
        "coffee"
    ] );

    grunt.registerTask( "work", [
        "default",
        "watch"
    ] );

};
