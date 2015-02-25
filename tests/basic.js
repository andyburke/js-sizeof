'use strict';

var test = require( 'tap' ).test;
var sizeof = require( '../' );

test( 'basic object', function( t ) {
    var basic = {
        foo: 1,              // 6 (key) + 8 (number)    = 14
        bar: 'hi!',          // 6 (key) + 6 (string)    = 12
        baz: [ 1, 2, 3 ],    // 6 (key) + 24 (3*number) = 30
        bloop: {             // 10 (key)                = 10
            floop: 1         // 10 (key) + 8 (number)   = 18
        }
    };
    // =====================================================
    //                                           total:   84
    
    
    t.equal( sizeof( basic ), 84, 'sizeof test object should be 84' );
    t.end();
} );

test( 'object with multiple refs to the same object', function( t ) {
    var goo = {
        yak: 1               // 6 (key) + 8 (number)    = 14
    };
    
    var nested = {
        foo: 1,              // 6 (key) + 8 (number)               = 14
        bar: 'hi!',          // 6 (key) + 6 (string)               = 12
        baz: [ 1, 2, 3 ],    // 6 (key) + 24 (3*number)            = 30
        bloop: {             // 10 (key)                           = 10
            floop: 1         // 10 (key) + 8 (number)              = 18
        },
        goo: goo,            // 6 (key) + 14 (goo)                 = 20
        goop: goo            // 8 (key) + 0 (goo, already counted) =  8
    };
    // ================================================================
    //                                                      total:  112


    t.equal( sizeof( nested ), 112, 'sizeof test object should be 112' );
    t.end();
} );

test( 'null size is 1 byte', function( t ) {
    var nullTest = {
        foo: null            // 6 (key) + 1 (null)                 =  7
    };
    // ================================================================
    //                                                      total:    7


    t.equal( sizeof( nullTest ), 7, 'sizeof test object should be 7' );
    t.end();
} );