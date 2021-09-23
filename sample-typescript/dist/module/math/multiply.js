"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = exports.multiplyByTwo = exports.multiply = void 0;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
function multiplyByTwo(a) {
    return a * 2;
}
exports.multiplyByTwo = multiplyByTwo;
exports.A = 'A';
const getA = () => 'AA';
exports.default = getA;
