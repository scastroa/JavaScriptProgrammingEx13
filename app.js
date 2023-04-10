/**
 * Wrapper function for console logging
 * @param {*} obj the object to log
 */
const l = obj => console.log(obj);

/**
 * An object literal
 */
const myFirstObject = {
    myFirstProperty: 'Chris',
    mySecondProperty: 12.9,
    /**
     * Divide the internal mySecondProperty value by 2
     * @returns {number} the answer of dividing the property by 2
     */
    divideByTwo: function () {
        return this.mySecondProperty / 2;
    },
    /**
     * Divide the mySecondProperty by the value provided
     * @param {number} value the value to divide by
     * @returns {number} the answer of dividing by the provided value
     */
    divideBy: function (value) {
        return this.mySecondProperty / value;
    }
};

l(myFirstObject);
l(myFirstObject.myFirstProperty);
l(myFirstObject.mySecondProperty);

myFirstObject.myFirstProperty = 'Christopher';
myFirstObject.lastName = 'Cusack';

l(myFirstObject);

l(myFirstObject.divideByTwo());

myFirstObject.mySecondProperty = 50;

l(myFirstObject.divideByTwo());

l(myFirstObject.divideBy(5));

myFirstObject.divideBy = 'x';

l(myFirstObject);

myFirstObject.multiplyBy = function (value) {
    return this.mySecondProperty * value;
}

l(myFirstObject.multiplyBy(3));

