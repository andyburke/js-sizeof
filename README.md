# js-sizeof
[![NPM version](https://badge.fury.io/js/js-sizeof.png)](http://badge.fury.io/js/js-sizeof)
[![Build Status](https://travis-ci.org/andyburke/js-sizeof.png?branch=master)](https://travis-ci.org/andyburke/js-sizeof)
[![Coverage Status](https://coveralls.io/repos/andyburke/js-sizeof/badge.png)](https://coveralls.io/r/andyburke/js-sizeof)

A small (<50 loc), dependency-free library to calculate the rough size of a javascript object in memory.

## Installation

    npm install js-sizeof

## Usage

```javascript
    var sizeof = require( 'js-sizeof' );

    var obj = {
        floop: 0,
        gloop: 'gloop!',
        ploop: [ 1, 2, 3 ]
    };
    
    var foo = {
        bar: {
            fiz: 1,
            baz: 'hi!',
            buz: [ 1, 2, 3 ]
        },
        bloop: obj,
        otherBloop: obj, // shouldn't end up counted twice
    };
    
    console.log( sizeof( foo ) );
```

## CHANGELOG

0.0.1
-----
- Initial revision
  - I wanted a really small, dependency free library to get the size of objects
  - Other options either had crazy dependencies or were more than just sizeof