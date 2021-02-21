import { allow } from './allow';

const briefPerson = {
   first: '',
   last: '',
};

const person = {
   first: '',
   last: '',
   middle: '',
};

const complexPerson = {
   first: [],
   last: {},
   middle: [],
};

class AClass {
   foo = 'bar';
}

const aFalse = false;
const aFalseString = 'false';
const aFunction = () => 'foo';
const anArrayOfArrays = [[9, 8, 7], ['foo', 'fie', 'fee'], [{one: 1}, {two: 2}], []];
const anArrayOfIntegers = [2, 9, 42, 187];
const anArrayOfMixedTypes = ['string', {}, 42, 3.14, ['fee', 'fie', {}], {uno: 'one', dos: 'two'}];
const anArrayOfNumbers = [-3, 3.14, 42, 99.99];
const anArrayOfObjects = [{one: 1, two: 2}, {three: 3, four: 4}, {five: 5, six: 6}, {}];
const anArrayOfPeople = [{first: 'joe', last: 'smith', middle: 'bob'}, {first: 'mary', last: 'smits', middle: 'jane'}, {first: 'rik', last: 'tik', middle: 'tok'}];
const anArrayOfStrings = ['one', 'two', 'three'];
const aNegative1 = -1;
const aNegativePi = -3.14;
const anEmptyArray = [];
const anEmptyObject = {};
const aNull = null;
const aNumber0 = 0;
const aNumber1 = 1;
const aNumber1WithDecimals = 1.00;
const anUndefined = undefined;
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

// aBoolean()

test('aBoolean() should pass when checking a Boolean value', () => {
   expect(allow.aBoolean(aTrue)).toEqual(expect.any(Object));
   expect(allow.aBoolean(aFalse)).toEqual(expect.any(Object));
});

test('after setting allowNull to TRUE, aBoolean() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.aBoolean(aNull)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('aBoolean() should throw an error when checking anything other than a Boolean value', () => {
   expect(() => allow.aBoolean(AClass)).toThrow();
   expect(() => allow.aBoolean(aFalseString)).toThrow();
   expect(() => allow.aBoolean(aFunction)).toThrow();
   expect(() => allow.aBoolean(anArrayOfArrays)).toThrow();
   expect(() => allow.aBoolean(anArrayOfIntegers)).toThrow();
   expect(() => allow.aBoolean(anArrayOfMixedTypes)).toThrow();
   expect(() => allow.aBoolean(anArrayOfNumbers)).toThrow();
   expect(() => allow.aBoolean(anArrayOfObjects)).toThrow();
   expect(() => allow.aBoolean(anArrayOfPeople)).toThrow();
   expect(() => allow.aBoolean(anArrayOfStrings)).toThrow();
   expect(() => allow.aBoolean(aNegative1)).toThrow();
   expect(() => allow.aBoolean(aNegativePi)).toThrow();
   expect(() => allow.aBoolean(anEmptyArray)).toThrow();
   expect(() => allow.aBoolean(anEmptyObject)).toThrow();
   expect(() => allow.aBoolean(aNull)).toThrow();
   expect(() => allow.aBoolean(aNumber0)).toThrow();
   expect(() => allow.aBoolean(aNumber1)).toThrow();
   expect(() => allow.aBoolean(aNumber1WithDecimals)).toThrow();
   expect(() => allow.aBoolean(anUndefined)).toThrow();
   expect(() => allow.aBoolean(aPi)).toThrow();
   expect(() => allow.aBoolean(aTrueString)).toThrow();
});

// aFunction()

test('aFunction() should pass when checking a function', () => {
   expect(allow.aFunction(aFunction)).toEqual(expect.any(Object));
});

test('after setting allowNull to TRUE, aFunction() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.aFunction(aNull)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('aFunction() should throw an error when checking anything other than a function', () => {
   expect(() => allow.aFunction(AClass)).toThrow();
   expect(() => allow.aFunction(aFalse)).toThrow();
   expect(() => allow.aFunction(aFalseString)).toThrow();
   expect(() => allow.aFunction(anArrayOfArrays)).toThrow();
   expect(() => allow.aFunction(anArrayOfIntegers)).toThrow();
   expect(() => allow.aFunction(anArrayOfMixedTypes)).toThrow();
   expect(() => allow.aFunction(anArrayOfNumbers)).toThrow();
   expect(() => allow.aFunction(anArrayOfObjects)).toThrow();
   expect(() => allow.aFunction(anArrayOfPeople)).toThrow();
   expect(() => allow.aFunction(anArrayOfStrings)).toThrow();
   expect(() => allow.aFunction(aNegative1)).toThrow();
   expect(() => allow.aFunction(aNegativePi)).toThrow();
   expect(() => allow.aFunction(anEmptyArray)).toThrow();
   expect(() => allow.aFunction(anEmptyObject)).toThrow();
   expect(() => allow.aFunction(aNull)).toThrow();
   expect(() => allow.aFunction(aNumber0)).toThrow();
   expect(() => allow.aFunction(aNumber1)).toThrow();
   expect(() => allow.aFunction(aNumber1WithDecimals)).toThrow();
   expect(() => allow.aFunction(anUndefined)).toThrow();
   expect(() => allow.aFunction(aPi)).toThrow();
   expect(() => allow.aFunction(aTrue)).toThrow();
   expect(() => allow.aFunction(aTrueString)).toThrow();
});

// anArray()

test('anArray() should pass when checking any array', () => {
   expect(allow.anArray(anArrayOfArrays)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfIntegers)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfMixedTypes)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfNumbers)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfObjects)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfPeople)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfStrings)).toEqual(expect.any(Object));
   expect(allow.anArray(anEmptyArray)).toEqual(expect.any(Object));
});

test('after setting allowNull to TRUE, anArray() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.anArray(aNull)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('anArray() should pass when checking arrays that meet a minimal length', () => {
   expect(allow.anArray(anArrayOfArrays, 1)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfIntegers, 1)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfMixedTypes, 1)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfNumbers, 1)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfObjects, 1)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfPeople, 1)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfStrings, 1)).toEqual(expect.any(Object));
});

test('anArray() should pass when checking arrays greater than a minimal length and less than a maximum length', () => {
   expect(allow.anArray(anArrayOfArrays, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfIntegers, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfMixedTypes, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfNumbers, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfObjects, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfPeople, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfStrings, 1, 50)).toEqual(expect.any(Object));
});

test('anArray() should throw an error when checking arrays that are outside the required length limits', () => {
   expect(() => allow.anArray(anEmptyArray, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfArrays, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfIntegers, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfMixedTypes, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfNumbers, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfObjects, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfPeople, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfStrings, 20, 50)).toThrow();
});

test('anArray() should throw an error when checking anything other than an array', () => {
   expect(() => allow.anArray(AClass)).toThrow();
   expect(() => allow.anArray(aFalse)).toThrow();
   expect(() => allow.anArray(aFalseString)).toThrow();
   expect(() => allow.anArray(aFunction)).toThrow();
   expect(() => allow.anArray(aNegative1)).toThrow();
   expect(() => allow.anArray(aNegativePi)).toThrow();
   expect(() => allow.anArray(anEmptyObject)).toThrow();
   expect(() => allow.anArray(aNull)).toThrow();
   expect(() => allow.anArray(aNumber0)).toThrow();
   expect(() => allow.anArray(aNumber1)).toThrow();
   expect(() => allow.anArray(aNumber1WithDecimals)).toThrow();
   expect(() => allow.anArray(anUndefined)).toThrow();
   expect(() => allow.anArray(aPi)).toThrow();
   expect(() => allow.anArray(aTrue)).toThrow();
   expect(() => allow.anArray(aTrueString)).toThrow();
});

// anArrayOfArrays()

test('anArrayOfArrays() should pass when checking any array of arrays', () => {
   expect(allow.anArrayOfArrays(anArrayOfArrays)).toEqual(expect.any(Object));
   expect(allow.anArrayOfArrays(anEmptyArray)).toEqual(expect.any(Object));
});

test('after setting allowNull to TRUE, anArrayOfArrays() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.anArrayOfArrays(aNull)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('anArrayOfArrays() should pass when checking arrays-of-arrays that meet a minimal length', () => {
   expect(allow.anArrayOfArrays(anArrayOfArrays, 1)).toEqual(expect.any(Object));
});

test('anArrayOfArrays() should pass when checking arrays-of-arrays longer than a minimal length and shorter than a maximum length', () => {
   expect(allow.anArrayOfArrays(anArrayOfArrays, 1, 50)).toEqual(expect.any(Object));
});

test('anArrayOfArrays() should throw an error when checking arrays-of-arrays that are outside the required length limits', () => {
   expect(() => allow.anArray(anEmptyArray, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfArrays, 20, 50)).toThrow();
});

test('anArrayOfArrays() should throw an error when checking anything other than an array-of-arrays', () => {
   expect(() => allow.anArrayOfArrays(AClass)).toThrow();
   expect(() => allow.anArrayOfArrays(aFalse)).toThrow();
   expect(() => allow.anArrayOfArrays(aFalseString)).toThrow();
   expect(() => allow.anArrayOfArrays(aFunction)).toThrow();
   expect(() => allow.anArrayOfArrays(anArrayOfIntegers)).toThrow();
   expect(() => allow.anArrayOfArrays(anArrayOfMixedTypes)).toThrow();
   expect(() => allow.anArrayOfArrays(anArrayOfNumbers)).toThrow();
   expect(() => allow.anArrayOfArrays(anArrayOfObjects)).toThrow();
   expect(() => allow.anArrayOfArrays(anArrayOfPeople)).toThrow();
   expect(() => allow.anArrayOfArrays(anArrayOfStrings)).toThrow();
   expect(() => allow.anArrayOfArrays(aNegative1)).toThrow();
   expect(() => allow.anArrayOfArrays(aNegativePi)).toThrow();
   expect(() => allow.anArrayOfArrays(anEmptyObject)).toThrow();
   expect(() => allow.anArrayOfArrays(aNull)).toThrow();
   expect(() => allow.anArrayOfArrays(aNumber0)).toThrow();
   expect(() => allow.anArrayOfArrays(aNumber1)).toThrow();
   expect(() => allow.anArrayOfArrays(aNumber1WithDecimals)).toThrow();
   expect(() => allow.anArrayOfArrays(anUndefined)).toThrow();
   expect(() => allow.anArrayOfArrays(aPi)).toThrow();
   expect(() => allow.anArrayOfArrays(aTrue)).toThrow();
   expect(() => allow.anArrayOfArrays(aTrueString)).toThrow();
});

// anArrayOfInstances()

test('anArrayOfInstances() should pass when checking any array of the given instances', () => {
   expect(allow.anArrayOfInstances(anArrayOfPeople, person)).toEqual(expect.any(Object));
   expect(allow.anArrayOfInstances(anEmptyArray, person)).toEqual(expect.any(Object));
});

test('anArrayOfInstances() should pass when the supplied object has additional keys compared to the model object', () => {
   expect(allow.anArrayOfInstances(anArrayOfPeople, briefPerson)).toEqual(expect.any(Object));
   expect(allow.anArrayOfInstances(anEmptyArray, briefPerson)).toEqual(expect.any(Object));
});

test('anArrayOfInstances() should throw an error when the supplied object is missing nested arrays or objects', () => {
   expect(() => allow.anArrayOfInstances(anArrayOfPeople, complexPerson)).toThrow();
});

test('after setting allowNull to TRUE, anArrayOfInstances() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.anArrayOfInstances(aNull, person)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('anArrayOfInstances() should pass when checking arrays-of-instances that meet a minimal length', () => {
   expect(allow.anArrayOfInstances(anArrayOfPeople, person, 1)).toEqual(expect.any(Object));
});

test('anArrayOfInstances() should pass when checking arrays-of-instances longer than a minimal length and shorter than a maximum length', () => {
   expect(allow.anArrayOfInstances(anArrayOfPeople, person, 1, 50)).toEqual(expect.any(Object));
});

test('anArrayOfInstances() should throw an error when checking arrays-of-instances that are outside the required length limits', () => {
   expect(() => allow.anArrayOfInstances(anEmptyArray, person, 20, 50)).toThrow();
   expect(() => allow.anArrayOfInstances(anArrayOfPeople, person, 20, 50)).toThrow();
});

test('anArrayOfInstances() should throw an error when checking anything other than an array-of-instances', () => {
   expect(() => allow.anArrayOfInstances(AClass, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aFalse, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aFalseString, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aFunction, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anArrayOfArrays, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anArrayOfIntegers, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anArrayOfMixedTypes, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anArrayOfNumbers, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anArrayOfObjects, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anArrayOfStrings, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aNegative1, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aNegativePi, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anEmptyObject, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aNull, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aNumber0, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aNumber1, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aNumber1WithDecimals, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anUndefined, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aPi, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aTrue, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aTrueString, person)).toThrow();
});
