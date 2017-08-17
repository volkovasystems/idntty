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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkbnR0eS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsImt1cnNlIiwibnRycHJ0IiwicHJvdHlwZSIsInRydWx5IiwiSUQiLCJpZG50dHkiLCJlbnRpdHkiLCJGVU5DVElPTiIsIk9CSkVDVCIsIkVycm9yIiwiaWRlbnRpdHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxTQUFTRixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1HLFVBQVVILFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1LLEtBQUssc0JBQVEsSUFBUixDQUFYOztBQUVBLElBQU1DLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdkM7Ozs7Ozs7Ozs7O0FBV0EsS0FBSVIsTUFBT1EsTUFBUCxLQUFtQixDQUFDSixRQUFTSSxNQUFULEVBQWlCQyxXQUFXQyxNQUE1QixDQUF4QixFQUE4RDtBQUM3RCxRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUEsS0FBSUMsV0FBV1QsT0FBUUcsRUFBUixFQUFZRSxNQUFaLENBQWY7O0FBRUQsS0FBSUgsTUFBT08sUUFBUCxLQUFxQixRQUFPQSxRQUFQLHVEQUFPQSxRQUFQLE1BQW1CLFFBQTVDLEVBQXNEO0FBQ3JELFNBQU9BLFFBQVA7O0FBRUEsRUFIRCxNQUdNLElBQUlaLE1BQU9ZLFFBQVAsQ0FBSixFQUF1QjtBQUM1QlYsUUFBT00sTUFBUDs7QUFFQSxTQUFPTCxPQUFRRyxFQUFSLEVBQVlFLE1BQVosQ0FBUDs7QUFFQSxFQUxLLE1BS0Q7QUFDSixRQUFNLElBQUlHLEtBQUosdUNBQWdEQyxRQUFoRCxDQUFOO0FBQ0E7QUFDRCxDQTdCRDs7QUErQkFDLE9BQU9DLE9BQVAsR0FBaUJQLE1BQWpCIiwiZmlsZSI6ImlkbnR0eS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImlkbnR0eVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJpZG50dHkvaWRudHR5LmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImlkbnR0eS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImlkbnR0eVwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9pZG50dHkuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImlkbnR0eS10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdEdldCB0cmFjZSBpZGVudGl0eS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJrdXJzZVwiOiBcImt1cnNlXCIsXHJcblx0XHRcdFwibnRycHJ0XCI6IFwibnRycHJ0XCIsXHJcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcclxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IGt1cnNlID0gcmVxdWlyZSggXCJrdXJzZVwiICk7XHJcbmNvbnN0IG50cnBydCA9IHJlcXVpcmUoIFwibnRycHJ0XCIgKTtcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XHJcblxyXG5jb25zdCBJRCA9IFN5bWJvbCggXCJpZFwiICk7XHJcblxyXG5jb25zdCBpZG50dHkgPSBmdW5jdGlvbiBpZG50dHkoIGVudGl0eSApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFwib2JqZWN0XCJcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGZhbHp5KCBlbnRpdHkgKSB8fCAhcHJvdHlwZSggZW50aXR5LCBGVU5DVElPTiArIE9CSkVDVCApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xyXG5cdH1cclxuXHJcbiBcdGxldCBpZGVudGl0eSA9IG50cnBydCggSUQsIGVudGl0eSApO1xyXG5cclxuXHRpZiggdHJ1bHkoIGlkZW50aXR5ICkgJiYgdHlwZW9mIGlkZW50aXR5ID09IFwic3ltYm9sXCIgKXtcclxuXHRcdHJldHVybiBpZGVudGl0eTtcclxuXHJcblx0fWVsc2UgaWYoIGZhbHp5KCBpZGVudGl0eSApICl7XHJcblx0XHRrdXJzZSggZW50aXR5ICk7XHJcblxyXG5cdFx0cmV0dXJuIG50cnBydCggSUQsIGVudGl0eSApO1xyXG5cclxuXHR9ZWxzZXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggYGludmFsaWQgZW1iZWRkZWQgdHJhY2UgaWRlbnRpdHksICR7IGlkZW50aXR5IH1gICk7XHJcblx0fVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpZG50dHk7XHJcbiJdfQ==
//# sourceMappingURL=idntty.support.js.map
