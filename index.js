'use strict';

/* based on sizeof.js by Stephen Morley - http://code.stephenmorley.org/ */

module.exports = sizeof;

/* Returns the approximate memory usage */
function sizeof( object ) {
    var objects = [ object ];
    var processed = [];
    var size = 0;

    for ( var index = 0; index < objects.length; ++index ) {
        var _object = objects[ index ];
        switch ( typeof _object ) {
            case 'boolean':
                size += 4;
                break;
            case 'number':
                size += 8;
                break;
            case 'string':
                size += 2 * _object.length;
                break;
            case 'object':
                if ( _object === null ) {
                    size += 4; // assume null is the same size as a boolean
                    break;
                }
                
                // if it's an array, the keys add no size. if it's an object, keys
                // add size based on their length (keys must be strings according to spec)
                var keySizeFactor = Array.isArray( _object ) ? 0 : 1;

                // coerces even array indices to strings, so we can use key.length safely
                for ( var key in _object ) {
                    size += keySizeFactor * 2 * key.length;
                    if ( processed.indexOf( _object[ key ] ) === -1 ) {
                        objects.push( _object[ key ] );
                        if ( typeof _object[ key ] === 'object' ) {
                            processed.push( _object[ key ] );
                        }
                    }
                }
                break;
        }
    }

    return size;
}