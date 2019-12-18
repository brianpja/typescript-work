"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInputValue(id) {
    var inputElement = document.getElementById(id);
    return inputElement.value;
}
exports.getValue = getInputValue;
function logger(message) {
    console.log(message);
}
exports.logger = logger;
//# sourceMappingURL=utility.js.map