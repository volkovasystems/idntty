
const assert = require( "assert" );
const idntty = require( "./idntty.js" );

const ID = Symbol( "id" );
const identity = Symbol( "sample-identity" );
let source = { [ ID ]: identity };

assert.equal( idntty( source ), identity, "should be equal to true" );

console.log( "ok" );
