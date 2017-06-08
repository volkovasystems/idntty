
const assert = require( "assert" );
const idntty = require( "./idntty.js" );

const ID = Symbol.for( "id" );
const identity = Symbol( "sample-identity" );
let source = { [ ID ]: identity };

assert.equal( idntty( source ), identity, "should be true" );

let test = { };
assert.equal( idntty( test ), test[ ID ], "should be true" );

console.log( "ok" );
