test("One euro should be 1.07 dollars", function(){
    const {fromEuroToDollar} = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 149.27 yens", function(){
    const {fromDollarToYen} = require('./app.js');
    const yens = fromDollarToYen(3.5);
    const expected = 3.5 * 149.27;
    expect(fromDollarToYen(3.5)).toBe(522.445);
})

test("One yen should be 0.0053 pounds", function(){
    const {fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(3.5);
    const expected = 3.5 * 0.0053;
    expect(fromYenToPound(3.5)).toBe(0.01855);
})