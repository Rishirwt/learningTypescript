"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this.x = x;
        this.y = y;
        console.log("shape cons called");
    }
    Shape.prototype.getinfo = function () {
        return "x : ".concat(this.x, " y : ").concat(this.y);
    };
    return Shape;
}());
exports.Shape = Shape;
