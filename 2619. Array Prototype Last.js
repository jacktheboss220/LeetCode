/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    // if (this?.length) {
    //     return this[this?.length - 1];
    // } else {
    //     return -1;
    // }
    return this?.length ? this[this?.length - 1] : -1;
};


// const arr = [1, 2, 3];
const arr = [null, {}, 3];
arr.last(); // 3
