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
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var kurse = require("kurse");
var ntrprt = require("ntrprt");
var protype = require("protype");
var truly = require("truly");

var ID = (0, _symbol2.default)("id");

var idntty = function idntty(entity) {
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

	if (falzy(entity) || !protype(entity, FUNCTION + OBJECT)) {
		throw new Error("invalid entity");
	}

	var identity = ntrprt(ID, entity);

	if (truly(identity) && (typeof identity === "undefined" ? "undefined" : (0, _typeof3.default)(identity)) == "symbol") {
		return identity;

	} else if (falzy(identity)) {
		kurse(entity);

		return ntrprt(ID, entity);

	} else {
		throw new Error("invalid embedded trace identity, " + identity);
	}
};

module.exports = idntty;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkbnR0eS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsImt1cnNlIiwibnRycHJ0IiwicHJvdHlwZSIsInRydWx5IiwiSUQiLCJpZG50dHkiLCJlbnRpdHkiLCJGVU5DVElPTiIsIk9CSkVDVCIsIkVycm9yIiwiaWRlbnRpdHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxTQUFTRixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1HLFVBQVVILFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1LLEtBQUssc0JBQVEsSUFBUixDQUFYOztBQUVBLElBQU1DLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdkM7Ozs7Ozs7Ozs7O0FBV0EsS0FBSVIsTUFBT1EsTUFBUCxLQUFtQixDQUFDSixRQUFTSSxNQUFULEVBQWlCQyxXQUFXQyxNQUE1QixDQUF4QixFQUE4RDtBQUM3RCxRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUEsS0FBSUMsV0FBV1QsT0FBUUcsRUFBUixFQUFZRSxNQUFaLENBQWY7O0FBRUQsS0FBSUgsTUFBT08sUUFBUCxLQUFxQixRQUFPQSxRQUFQLHVEQUFPQSxRQUFQLE1BQW1CLFFBQTVDLEVBQXNEO0FBQ3JELFNBQU9BLFFBQVA7O0FBRUEsRUFIRCxNQUdNLElBQUlaLE1BQU9ZLFFBQVAsQ0FBSixFQUF1QjtBQUM1QlYsUUFBT00sTUFBUDs7QUFFQSxTQUFPTCxPQUFRRyxFQUFSLEVBQVlFLE1BQVosQ0FBUDs7QUFFQSxFQUxLLE1BS0Q7QUFDSixRQUFNLElBQUlHLEtBQUosdUNBQWdEQyxRQUFoRCxDQUFOO0FBQ0E7QUFDRCxDQTdCRDs7QUErQkFDLE9BQU9DLE9BQVAsR0FBaUJQLE1BQWpCIiwiZmlsZSI6ImlkbnR0eS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJpZG50dHlcIixcblx0XHRcdFwicGF0aFwiOiBcImlkbnR0eS9pZG50dHkuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImlkbnR0eS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJpZG50dHlcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2lkbnR0eS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImlkbnR0eS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEdldCB0cmFjZSBpZGVudGl0eS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJrdXJzZVwiOiBcImt1cnNlXCIsXG5cdFx0XHRcIm50cnBydFwiOiBcIm50cnBydFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGt1cnNlID0gcmVxdWlyZSggXCJrdXJzZVwiICk7XG5jb25zdCBudHJwcnQgPSByZXF1aXJlKCBcIm50cnBydFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5cbmNvbnN0IElEID0gU3ltYm9sKCBcImlkXCIgKTtcblxuY29uc3QgaWRudHR5ID0gZnVuY3Rpb24gaWRudHR5KCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcIm9iamVjdFwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggZW50aXR5ICkgfHwgIXByb3R5cGUoIGVudGl0eSwgRlVOQ1RJT04gKyBPQkpFQ1QgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdH1cblxuIFx0bGV0IGlkZW50aXR5ID0gbnRycHJ0KCBJRCwgZW50aXR5ICk7XG5cblx0aWYoIHRydWx5KCBpZGVudGl0eSApICYmIHR5cGVvZiBpZGVudGl0eSA9PSBcInN5bWJvbFwiICl7XG5cdFx0cmV0dXJuIGlkZW50aXR5O1xuXG5cdH1lbHNlIGlmKCBmYWx6eSggaWRlbnRpdHkgKSApe1xuXHRcdGt1cnNlKCBlbnRpdHkgKTtcblxuXHRcdHJldHVybiBudHJwcnQoIElELCBlbnRpdHkgKTtcblxuXHR9ZWxzZXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIGBpbnZhbGlkIGVtYmVkZGVkIHRyYWNlIGlkZW50aXR5LCAkeyBpZGVudGl0eSB9YCApO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlkbnR0eTtcbiJdfQ==
//# sourceMappingURL=idntty.support.js.map
