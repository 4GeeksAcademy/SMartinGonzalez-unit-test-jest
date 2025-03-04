const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function(){
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("One dollar should be 156.5 / 1.07 yens", function(){
    const yens = fromDollarToYen(3.5);
    const expected = (3.5 / 1.07) * 156.5; 
    expect(yens).toBeCloseTo(expected, 2); 
});

test("One yen should be 0.87 / 156.5 pounds", function(){
    const pounds = fromYenToPound(3.5);
    const expected = (3.5 / 156.5) * 0.87; 
    expect(pounds).toBeCloseTo(expected, 5);
});