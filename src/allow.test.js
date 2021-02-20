import { allow } from './allow';

const person = {
   first: '',
   last: '',
   middle: '',
};

class AClass {
   foo = 'bar';
}

const aFalse = false;
const aFalseString = 'false';
const aFunction = () => 'foo';
const anArrayOfArrays = [[9, 8, 7], ['foo', 'fie', 'fee'], [{one: 1}, {two: 2}], []];
const anArrayOfIntegers = [2, 9, 42, 187];
const anArrayOfNumbers = [-3, 3.14, 42, 99.99];
const anArrayOfObjects = [{one: 1, two: 2}, {three: 3, four: 4}, {five: 5, six: 6}, {}];
const anArrayOfPeople = [{first: 'joe', last: 'smith', middle: 'bob'}, {first: 'mary', last: 'smits', middle: 'jane'}, {first: 'rik', last: 'tik', middle: 'tok'}];
const anArrayOfStrings = ['one', 'two', 'three'];
const aNegative1 = -1;
const aNegativePi = -3.14;
const anEmptyArray = [];
const anEmptyObject = {};
const aNumber0 = 0;
const aNumber1 = 1;
const aNumber1WithDecimals = 1.00;
const aPi = 3.14;
const aTrue = true;
const aTrueString = 'true';


beforeEach(() => {
   jest.spyOn(console, 'error');
   console.error.mockImplementation(() => null);
});

afterEach(() => {
   console.error.mockRestore();
});

test('aBoolean() should pass when checking a Boolean value', () => {
   expect(allow.aBoolean(aTrue)).toEqual(expect.any(Object));
   expect(allow.aBoolean(aFalse)).toEqual(expect.any(Object));
});

test('aBoolean() should throw an error when checking anything other than a Boolean value', () => {
   expect(() => allow.aBoolean(AClass)).toThrow();
   expect(() => allow.aBoolean(aFalseString)).toThrow();
   expect(() => allow.aBoolean(aFunction)).toThrow();
   expect(() => allow.aBoolean(anArrayOfArrays)).toThrow();
   expect(() => allow.aBoolean(anArrayOfIntegers)).toThrow();
   expect(() => allow.aBoolean(anArrayOfNumbers)).toThrow();
   expect(() => allow.aBoolean(anArrayOfObjects)).toThrow();
   expect(() => allow.aBoolean(anArrayOfPeople)).toThrow();
   expect(() => allow.aBoolean(anArrayOfStrings)).toThrow();
   expect(() => allow.aBoolean(aNegative1)).toThrow();
   expect(() => allow.aBoolean(aNegativePi)).toThrow();
   expect(() => allow.aBoolean(anEmptyArray)).toThrow();
   expect(() => allow.aBoolean(anEmptyObject)).toThrow();
   expect(() => allow.aBoolean(aNumber0)).toThrow();
   expect(() => allow.aBoolean(aNumber1)).toThrow();
   expect(() => allow.aBoolean(aNumber1WithDecimals)).toThrow();
   expect(() => allow.aBoolean(aPi)).toThrow();
   expect(() => allow.aBoolean(aTrueString)).toThrow();
});

test('aFunction() should pass when checking a function', () => {
   expect(allow.aFunction(aFunction)).toEqual(expect.any(Object));
});

test('aFunction() should throw an error when checking anything other than a function', () => {
   expect(() => allow.aFunction(AClass)).toThrow();
   expect(() => allow.aFunction(aFalse)).toThrow();
   expect(() => allow.aFunction(aFalseString)).toThrow();
   expect(() => allow.aFunction(anArrayOfArrays)).toThrow();
   expect(() => allow.aFunction(anArrayOfIntegers)).toThrow();
   expect(() => allow.aFunction(anArrayOfNumbers)).toThrow();
   expect(() => allow.aFunction(anArrayOfObjects)).toThrow();
   expect(() => allow.aFunction(anArrayOfPeople)).toThrow();
   expect(() => allow.aFunction(anArrayOfStrings)).toThrow();
   expect(() => allow.aFunction(aNegative1)).toThrow();
   expect(() => allow.aFunction(aNegativePi)).toThrow();
   expect(() => allow.aFunction(anEmptyArray)).toThrow();
   expect(() => allow.aFunction(anEmptyObject)).toThrow();
   expect(() => allow.aFunction(aNumber0)).toThrow();
   expect(() => allow.aFunction(aNumber1)).toThrow();
   expect(() => allow.aFunction(aNumber1WithDecimals)).toThrow();
   expect(() => allow.aFunction(aPi)).toThrow();
   expect(() => allow.aFunction(aTrue)).toThrow();
   expect(() => allow.aFunction(aTrueString)).toThrow();
});
