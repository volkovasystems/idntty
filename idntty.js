"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "idntty",
			"path": "idntty/idntty.js",
			"file": "idntty.js",
			"module": "idntty",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/idntty.git",
			"test": "idntty-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Get trace identity.
	@end-module-documentation

	@include:
		{
			"falzy": "falzy",
			"kurse": "kurse",
			"ntrprt": "ntrprt",
			"protype": "protype",
			"truly": "truly"
		}
	@end-include
*/

const falzy = require( "falzy" );
const kurse = require( "kurse" );
const ntrprt = require( "ntrprt" );
const protype = require( "protype" );
const truly = require( "truly" );

const ID = Symbol( "id" );

const idntty = function idntty( entity ){
	/*;
		@meta-configuration:
			{
				"entity:required": [
					"function",
					"object"
				]
			}
		@end-meta-configuration
	*/

	if( falzy( entity ) || !protype( entity, FUNCTION + OBJECT ) ){
		throw new Error( "invalid entity" );
	}

 	let identity = ntrprt( ID, entity );

	if( truly( identity ) && typeof identity == "symbol" ){
		return identity;

	}else if( falzy( identity ) ){
		kurse( entity );

		return ntrprt( ID, entity );

	}else{
		throw new Error( `invalid embedded trace identity, ${ identity }` );
	}
};

module.exports = idntty;
