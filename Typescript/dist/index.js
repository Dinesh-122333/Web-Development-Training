"use strict";
let sales = 123456789;
let saler = 123456789;
let course = 'TypeScript';
function render(document) {
    console.log(document);
}
let num = [];
let numb = [1, 2, 3];
let number = [1, 2, 3];
let user = [1, 'dinesh'];
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["medium"] = 1] = "medium";
    Size[Size["large"] = 2] = "large";
})(Size || (Size = {}));
;
var Size2;
(function (Size2) {
    Size2[Size2["s"] = 0] = "s";
    Size2[Size2["m"] = 1] = "m";
    Size2[Size2["l"] = 2] = "l";
})(Size2 || (Size2 = {}));
var Size3;
(function (Size3) {
    Size3[Size3["s"] = 1] = "s";
    Size3[Size3["m"] = 2] = "m";
    Size3[Size3["l"] = 3] = "l";
})(Size3 || (Size3 = {}));
let mySize = Size.medium;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2024)
        return income * 1.2;
    return 0;
}
calculateTax(50000, 2020);
let employee = { id: 1, name: 'shen' };
let emp = {
    id: 1,
    name: 'din',
    retire: (date) => {
        console.log(date);
    }
};
let employer = {
    id: 1,
    name: 'din',
    retire: (date) => {
        console.log(date);
    }
};
function kgTolbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgTolbs(10);
kgTolbs('10kg');
//# sourceMappingURL=index.js.map