"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "idntty",
              			"path": "idntty/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/idntty.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should/as-function",
              			"idntty": "idntty"
              		}
              	@end-include
              */var _defineProperty2 = require("babel-runtime/helpers/defineProperty");var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var idntty = require("./idntty.support.js");
//: @end-client







//: @client:

describe("idntty", function () {

	describe("`idntty( { [ Symbol( 'id' ) ]: Symbol( 'sample-identity' ) } )`", function () {
		it("should be equal to Symbol( 'sample-identity' )", function () {

			var ID = (0, _symbol2.default)("id");
			var identity = (0, _symbol2.default)("sample-identity");
			var source = (0, _defineProperty3.default)({}, ID, identity);

			assert.equal(idntty(source), identity);

		});
	});

	describe("`idntty with function type`", function () {
		it("should be equal to Symbol( 'sample-identity' )", function () {
			var ID = (0, _symbol2.default)("id");
			var identity = (0, _symbol2.default)("sample-identity");
			var source = function Hello() {};
			source[ID] = identity;

			assert.equal(idntty(source), identity);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiaWRudHR5IiwiZGVzY3JpYmUiLCJpdCIsIklEIiwiaWRlbnRpdHkiLCJzb3VyY2UiLCJlcXVhbCIsIkhlbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSxpRUFBVixFQUE2RSxZQUFPO0FBQ25GQyxLQUFJLGdEQUFKLEVBQXNELFlBQU87O0FBRTVELE9BQU1DLEtBQUssc0JBQVEsSUFBUixDQUFYO0FBQ0EsT0FBTUMsV0FBVyxzQkFBUSxpQkFBUixDQUFqQjtBQUNBLE9BQUlDLDJDQUFhRixFQUFiLEVBQW1CQyxRQUFuQixDQUFKOztBQUVBTixVQUFPUSxLQUFQLENBQWNOLE9BQVFLLE1BQVIsQ0FBZCxFQUFnQ0QsUUFBaEM7O0FBRUEsR0FSRDtBQVNBLEVBVkQ7O0FBWUFILFVBQVUsNkJBQVYsRUFBeUMsWUFBTztBQUMvQ0MsS0FBSSxnREFBSixFQUFzRCxZQUFPO0FBQzVELE9BQU1DLEtBQUssc0JBQVEsSUFBUixDQUFYO0FBQ0EsT0FBTUMsV0FBVyxzQkFBUSxpQkFBUixDQUFqQjtBQUNBLE9BQUlDLFNBQVMsU0FBU0UsS0FBVCxHQUFpQixDQUFHLENBQWpDO0FBQ0FGLFVBQVFGLEVBQVIsSUFBZUMsUUFBZjs7QUFFQU4sVUFBT1EsS0FBUCxDQUFjTixPQUFRSyxNQUFSLENBQWQsRUFBZ0NELFFBQWhDOztBQUVBLEdBUkQ7QUFTQSxFQVZEOztBQVlBLENBMUJEOztBQTRCQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImlkbnR0eVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiaWRudHR5L3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9pZG50dHkuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcImlkbnR0eVwiOiBcImlkbnR0eVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgaWRudHR5ID0gcmVxdWlyZSggXCIuL2lkbnR0eS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwiaWRudHR5XCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYGlkbnR0eSggeyBbIFN5bWJvbCggJ2lkJyApIF06IFN5bWJvbCggJ3NhbXBsZS1pZGVudGl0eScgKSB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbCggJ3NhbXBsZS1pZGVudGl0eScgKVwiLCAoICkgPT4ge1xuXG5cdFx0XHRjb25zdCBJRCA9IFN5bWJvbCggXCJpZFwiICk7XG5cdFx0XHRjb25zdCBpZGVudGl0eSA9IFN5bWJvbCggXCJzYW1wbGUtaWRlbnRpdHlcIiApO1xuXHRcdFx0bGV0IHNvdXJjZSA9IHsgWyBJRCBdOiBpZGVudGl0eSB9O1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGlkbnR0eSggc291cmNlICksIGlkZW50aXR5ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgaWRudHR5IHdpdGggZnVuY3Rpb24gdHlwZWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sKCAnc2FtcGxlLWlkZW50aXR5JyApXCIsICggKSA9PiB7XG5cdFx0XHRjb25zdCBJRCA9IFN5bWJvbCggXCJpZFwiICk7XG5cdFx0XHRjb25zdCBpZGVudGl0eSA9IFN5bWJvbCggXCJzYW1wbGUtaWRlbnRpdHlcIiApO1xuXHRcdFx0bGV0IHNvdXJjZSA9IGZ1bmN0aW9uIEhlbGxvKCApeyB9O1xuXHRcdFx0c291cmNlWyBJRCBdID0gaWRlbnRpdHk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggaWRudHR5KCBzb3VyY2UgKSwgaWRlbnRpdHkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
