const rf = require("./index.js");

describe('factorial function',()=>{
    test("returns 1 when input is 0",()=>{
        expect(rf.factorial(0)).toBe(1);

    });

    test("returns 1 when input is 1",()=>{
        expect(rf.factorial(1)).toBe(1);
});

    test("given an input of 2, it returns 2",()=>{
    expect(rf.factorial(2)).toBe(2);

});

    test("given an input of any no., it returns the factorial",()=>{
    expect(rf.factorial(4)).toBe(24);
    expect(rf.factorial(5)).toBe(120);
    

});

describe("sum function",()=> {
    test("given the base case 1, returns 1",()=> {
        expect(rf.sum(1)).toBe(1);
    });

    test("given any input, returns the sum of the integers 1 through n",()=> {
        expect(rf.sum(2)).toBe(3);
        expect(rf.sum(3)).toBe(6);
        expect(rf.sum(0)).toBe(0);
    });

describe("reverseString function",()=> {
    test("given an empty string, it returns an empty string",()=> {
        expect(rf.reverseString("")).toBe("");
});
    test("given a letter, it returns that letter",()=> {
    expect(rf.reverseString("h")).toBe("h");

});

test("given a string with a length of 2, it returns the characters in reverse order",()=> {
    expect(rf.reverseString("he")).toBe("eh");

});
test("given a string with a length of 5, it returns the characters in reverse order",()=> {
    expect(rf.reverseString("hello")).toBe("olleh");

});

describe.skip("countWhiteSpaces function",()=> {
    test.skip("given an empty string, it returns 0",()=> {
        expect(rf.countWhiteSpaces("")).toBe(0);
});

    test.skip("given a string containing one white space, it returns 1",()=> {
        expect(rf.countWhiteSpaces(" ")).toBe(1);
});

    test("given a string containing 2 white spaces, it returns 2",()=> {
        expect(rf.countWhiteSpaces("How are you?")).toBe(2);
});
});

});

});
describe("totalInts function",()=> {
    test("given an empty array, returns 0",()=> {
        expect(rf.totalInts([])).toBe(0);
});
    test("given a flat array of ints, it returns their sum",()=> {
        expect(rf.totalInts([1,2,3])).toBe(6);
});
    test("given an array containing one nested array, it returns the sum of ints inside it",()=> {
        expect(rf.totalInts([[1,2,3]])).toBe(6);
});

});

});




