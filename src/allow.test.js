import { allow } from './allow';

const briefPerson = {
   first: '',
   last: '',
};
const aBriefPerson = {
   first: 'john',
   last: 'doe',
};
const person = {
   first: '',
   last: '',
   middle: '',
};
const aPerson = {
   first: 'john',
   last: 'doe',
   middle: 'jake',
};
const complexPerson = {
   first: [],
   last: {},
   middle: [],
};
const longerPerson = {
   first: '',
   last: '',
   middle: '',
   eyeColor: '',
   hairColor: '',
};
const aLongerPerson = {
   first: 'john',
   last: 'doe',
   middle: 'jake',
   eyeColor: 'green',
   hairColor: 'brown',
};

class AClass {
   foo = 'bar';
}

const aFalse = false;
const aFalseString = 'false';
const aFunction = () => 'foo';
const anAlphabetString = 'abcdefghijklmnopqrstuvwxzy';
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
const anEmptyString = '';
const aNull = null;
const aNumber0 = 0;
const aNumber1 = 1;
const aNumber1WithDecimals = 1.00;
const anUndefined = undefined;
const aPi = 3.14;
const aPopulatedObject = {all: 'for', one: 'and', none: 'for', paul: ''};
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
   expect(() => allow.aBoolean(anAlphabetString)).toThrow();
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
   expect(() => allow.aBoolean(anEmptyString)).toThrow();
   expect(() => allow.aBoolean(aNull)).toThrow();
   expect(() => allow.aBoolean(aNumber0)).toThrow();
   expect(() => allow.aBoolean(aNumber1)).toThrow();
   expect(() => allow.aBoolean(aNumber1WithDecimals)).toThrow();
   expect(() => allow.aBoolean(anUndefined)).toThrow();
   expect(() => allow.aBoolean(aPi)).toThrow();
   expect(() => allow.aBoolean(aPopulatedObject)).toThrow();
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
   expect(() => allow.aFunction(anAlphabetString)).toThrow();
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
   expect(() => allow.aFunction(anEmptyString)).toThrow();
   expect(() => allow.aFunction(aNull)).toThrow();
   expect(() => allow.aFunction(aNumber0)).toThrow();
   expect(() => allow.aFunction(aNumber1)).toThrow();
   expect(() => allow.aFunction(aNumber1WithDecimals)).toThrow();
   expect(() => allow.aFunction(anUndefined)).toThrow();
   expect(() => allow.aFunction(aPi)).toThrow();
   expect(() => allow.aFunction(aPopulatedObject)).toThrow();
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

test('anArray() should pass when checking arrays that meet a minimum length', () => {
   expect(allow.anArray(anArrayOfArrays, 1)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfIntegers, 1)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfMixedTypes, 1)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfNumbers, 1)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfObjects, 1)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfPeople, 1)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfStrings, 1)).toEqual(expect.any(Object));
});

test('anArray() should pass when checking arrays greater than a minimum length and less than a maximum length', () => {
   expect(allow.anArray(anArrayOfArrays, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfIntegers, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfMixedTypes, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfNumbers, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfObjects, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfPeople, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anArray(anArrayOfStrings, 1, 50)).toEqual(expect.any(Object));
});

test('anArray() should throw an error when checking arrays that are outside the required length limits', () => {
   expect(() => allow.anArray(anArrayOfArrays, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfIntegers, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfMixedTypes, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfNumbers, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfObjects, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfPeople, 20, 50)).toThrow();
   expect(() => allow.anArray(anArrayOfStrings, 20, 50)).toThrow();
   expect(() => allow.anArray(anEmptyArray, 20, 50)).toThrow();
});

test('anArray() should throw an error when checking anything other than an array', () => {
   expect(() => allow.anArray(AClass)).toThrow();
   expect(() => allow.anArray(aFalse)).toThrow();
   expect(() => allow.anArray(aFalseString)).toThrow();
   expect(() => allow.anArray(aFunction)).toThrow();
   expect(() => allow.anArray(anAlphabetString)).toThrow();
   expect(() => allow.anArray(aNegative1)).toThrow();
   expect(() => allow.anArray(aNegativePi)).toThrow();
   expect(() => allow.anArray(anEmptyObject)).toThrow();
   expect(() => allow.anArray(anEmptyString)).toThrow();
   expect(() => allow.anArray(aNull)).toThrow();
   expect(() => allow.anArray(aNumber0)).toThrow();
   expect(() => allow.anArray(aNumber1)).toThrow();
   expect(() => allow.anArray(aNumber1WithDecimals)).toThrow();
   expect(() => allow.anArray(anUndefined)).toThrow();
   expect(() => allow.anArray(aPi)).toThrow();
   expect(() => allow.anArray(aPopulatedObject)).toThrow();
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

test('anArrayOfArrays() should pass when checking arrays-of-arrays that meet a minimum length', () => {
   expect(allow.anArrayOfArrays(anArrayOfArrays, 1)).toEqual(expect.any(Object));
});

test('anArrayOfArrays() should pass when checking arrays-of-arrays longer than a minimum length and shorter than a maximum length', () => {
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
   expect(() => allow.anArrayOfArrays(anAlphabetString)).toThrow();
   expect(() => allow.anArrayOfArrays(anArrayOfIntegers)).toThrow();
   expect(() => allow.anArrayOfArrays(anArrayOfMixedTypes)).toThrow();
   expect(() => allow.anArrayOfArrays(anArrayOfNumbers)).toThrow();
   expect(() => allow.anArrayOfArrays(anArrayOfObjects)).toThrow();
   expect(() => allow.anArrayOfArrays(anArrayOfPeople)).toThrow();
   expect(() => allow.anArrayOfArrays(anArrayOfStrings)).toThrow();
   expect(() => allow.anArrayOfArrays(aNegative1)).toThrow();
   expect(() => allow.anArrayOfArrays(aNegativePi)).toThrow();
   expect(() => allow.anArrayOfArrays(anEmptyObject)).toThrow();
   expect(() => allow.anArrayOfArrays(anEmptyString)).toThrow();
   expect(() => allow.anArrayOfArrays(aNull)).toThrow();
   expect(() => allow.anArrayOfArrays(aNumber0)).toThrow();
   expect(() => allow.anArrayOfArrays(aNumber1)).toThrow();
   expect(() => allow.anArrayOfArrays(aNumber1WithDecimals)).toThrow();
   expect(() => allow.anArrayOfArrays(anUndefined)).toThrow();
   expect(() => allow.anArrayOfArrays(aPi)).toThrow();
   expect(() => allow.anArrayOfArrays(aPopulatedObject)).toThrow();
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

test('anArrayOfInstances() should throw an error when the supplied object is missing keys in the model object', () => {
   expect(() => allow.anArrayOfInstances(anArrayOfPeople, longerPerson)).toThrow();
});

test('after setting allowNull to TRUE, anArrayOfInstances() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.anArrayOfInstances(aNull, person)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('anArrayOfInstances() should pass when checking arrays-of-instances that meet a minimum length', () => {
   expect(allow.anArrayOfInstances(anArrayOfPeople, person, 1)).toEqual(expect.any(Object));
});

test('anArrayOfInstances() should pass when checking arrays-of-instances longer than a minimum length and shorter than a maximum length', () => {
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
   expect(() => allow.anArrayOfInstances(anAlphabetString, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anArrayOfArrays, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anArrayOfIntegers, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anArrayOfMixedTypes, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anArrayOfNumbers, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anArrayOfObjects, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anArrayOfStrings, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aNegative1, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aNegativePi, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anEmptyObject, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anEmptyString, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aNull, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aNumber0, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aNumber1, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aNumber1WithDecimals, person)).toThrow();
   expect(() => allow.anArrayOfInstances(anUndefined, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aPi, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aPopulatedObject, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aTrue, person)).toThrow();
   expect(() => allow.anArrayOfInstances(aTrueString, person)).toThrow();
});

// anArrayOfIntegers()

test('anArrayOfIntegers() should pass when checking any array-of-integers', () => {
   expect(allow.anArrayOfIntegers(anArrayOfIntegers)).toEqual(expect.any(Object));
   expect(allow.anArrayOfIntegers(anEmptyArray)).toEqual(expect.any(Object));
});

test('after setting allowNull to TRUE, anArrayOfIntegers() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.anArrayOfIntegers(aNull)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('anArrayOfIntegers() should pass when checking arrays-of-integers that meet a minimum length', () => {
   expect(allow.anArrayOfIntegers(anArrayOfIntegers, 1)).toEqual(expect.any(Object));
});

test('anArrayOfIntegers() should pass when checking arrays-of-integers longer than a minimum length and shorter than a maximum length', () => {
   expect(allow.anArrayOfIntegers(anArrayOfIntegers, 1, 50)).toEqual(expect.any(Object));
});

test('anArrayOfIntegers() should throw an error when checking arrays-of-integers that are outside the required length limits', () => {
   expect(() => allow.anArrayOfIntegers(anEmptyArray, 20, 50)).toThrow();
   expect(() => allow.anArrayOfIntegers(anArrayOfIntegers, 20, 50)).toThrow();
});

test('anArrayOfIntegers() should throw an error when checking anything other than an array-of-integers', () => {
   expect(() => allow.anArrayOfIntegers(AClass)).toThrow();
   expect(() => allow.anArrayOfIntegers(aFalse)).toThrow();
   expect(() => allow.anArrayOfIntegers(aFalseString)).toThrow();
   expect(() => allow.anArrayOfIntegers(aFunction)).toThrow();
   expect(() => allow.anArrayOfIntegers(anAlphabetString)).toThrow();
   expect(() => allow.anArrayOfIntegers(anArrayOfArrays)).toThrow();
   expect(() => allow.anArrayOfIntegers(anArrayOfMixedTypes)).toThrow();
   expect(() => allow.anArrayOfIntegers(anArrayOfNumbers)).toThrow();
   expect(() => allow.anArrayOfIntegers(anArrayOfObjects)).toThrow();
   expect(() => allow.anArrayOfIntegers(anArrayOfPeople)).toThrow();
   expect(() => allow.anArrayOfIntegers(anArrayOfStrings)).toThrow();
   expect(() => allow.anArrayOfIntegers(aNegative1)).toThrow();
   expect(() => allow.anArrayOfIntegers(aNegativePi)).toThrow();
   expect(() => allow.anArrayOfIntegers(anEmptyObject)).toThrow();
   expect(() => allow.anArrayOfIntegers(anEmptyString)).toThrow();
   expect(() => allow.anArrayOfIntegers(aNull)).toThrow();
   expect(() => allow.anArrayOfIntegers(aNumber0)).toThrow();
   expect(() => allow.anArrayOfIntegers(aNumber1)).toThrow();
   expect(() => allow.anArrayOfIntegers(aNumber1WithDecimals)).toThrow();
   expect(() => allow.anArrayOfIntegers(anUndefined)).toThrow();
   expect(() => allow.anArrayOfIntegers(aPi)).toThrow();
   expect(() => allow.anArrayOfIntegers(aPopulatedObject)).toThrow();
   expect(() => allow.anArrayOfIntegers(aTrue)).toThrow();
   expect(() => allow.anArrayOfIntegers(aTrueString)).toThrow();
});

// anArrayOfNumbers()

test('anArrayOfNumbers() should pass when checking any array-of-numbers', () => {
   expect(allow.anArrayOfNumbers(anArrayOfNumbers)).toEqual(expect.any(Object));
   expect(allow.anArrayOfNumbers(anArrayOfIntegers)).toEqual(expect.any(Object));
   expect(allow.anArrayOfNumbers(anEmptyArray)).toEqual(expect.any(Object));
});

test('after setting allowNull to TRUE, anArrayOfNumbers() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.anArrayOfNumbers(aNull)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('anArrayOfNumbers() should pass when checking arrays-of-numbers that meet a minimum length', () => {
   expect(allow.anArrayOfNumbers(anArrayOfNumbers, 1)).toEqual(expect.any(Object));
});

test('anArrayOfNumbers() should pass when checking arrays-of-numbers longer than a minimum length and shorter than a maximum length', () => {
   expect(allow.anArrayOfNumbers(anArrayOfNumbers, 1, 50)).toEqual(expect.any(Object));
});

test('anArrayOfNumbers() should throw an error when checking arrays-of-numbers that are outside the required length limits', () => {
   expect(() => allow.anArrayOfNumbers(anEmptyArray, 20, 50)).toThrow();
   expect(() => allow.anArrayOfNumbers(anArrayOfNumbers, 20, 50)).toThrow();
});

test('anArrayOfNumbers() should throw an error when checking anything other than an array-of-numbers', () => {
   expect(() => allow.anArrayOfNumbers(AClass)).toThrow();
   expect(() => allow.anArrayOfNumbers(aFalse)).toThrow();
   expect(() => allow.anArrayOfNumbers(aFalseString)).toThrow();
   expect(() => allow.anArrayOfNumbers(aFunction)).toThrow();
   expect(() => allow.anArrayOfNumbers(anAlphabetString)).toThrow();
   expect(() => allow.anArrayOfNumbers(anArrayOfArrays)).toThrow();
   expect(() => allow.anArrayOfNumbers(anArrayOfMixedTypes)).toThrow();
   expect(() => allow.anArrayOfNumbers(anArrayOfObjects)).toThrow();
   expect(() => allow.anArrayOfNumbers(anArrayOfPeople)).toThrow();
   expect(() => allow.anArrayOfNumbers(anArrayOfStrings)).toThrow();
   expect(() => allow.anArrayOfNumbers(aNegative1)).toThrow();
   expect(() => allow.anArrayOfNumbers(aNegativePi)).toThrow();
   expect(() => allow.anArrayOfNumbers(anEmptyObject)).toThrow();
   expect(() => allow.anArrayOfNumbers(anEmptyString)).toThrow();
   expect(() => allow.anArrayOfNumbers(aNull)).toThrow();
   expect(() => allow.anArrayOfNumbers(aNumber0)).toThrow();
   expect(() => allow.anArrayOfNumbers(aNumber1)).toThrow();
   expect(() => allow.anArrayOfNumbers(aNumber1WithDecimals)).toThrow();
   expect(() => allow.anArrayOfNumbers(anUndefined)).toThrow();
   expect(() => allow.anArrayOfNumbers(aPi)).toThrow();
   expect(() => allow.anArrayOfNumbers(aPopulatedObject)).toThrow();
   expect(() => allow.anArrayOfNumbers(aTrue)).toThrow();
   expect(() => allow.anArrayOfNumbers(aTrueString)).toThrow();
});

// anArrayOfObjects()

test('anArrayOfObjects() should pass when checking any array-of-objects', () => {
   expect(allow.anArrayOfObjects(anArrayOfObjects)).toEqual(expect.any(Object));
   expect(allow.anArrayOfObjects(anArrayOfPeople)).toEqual(expect.any(Object));
   expect(allow.anArrayOfObjects(anEmptyArray)).toEqual(expect.any(Object));
});

test('after setting allowNull to TRUE, anArrayOfObjects() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.anArrayOfObjects(aNull)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('anArrayOfObjects() should pass when checking arrays-of-objects that meet a minimum length', () => {
   expect(allow.anArrayOfObjects(anArrayOfObjects, 1)).toEqual(expect.any(Object));
});

test('anArrayOfObjects() should pass when checking arrays-of-objects longer than a minimum length and shorter than a maximum length', () => {
   expect(allow.anArrayOfObjects(anArrayOfObjects, 1, 50)).toEqual(expect.any(Object));
});

test('anArrayOfObjects() should throw an error when checking arrays-of-objects that are outside the required length limits', () => {
   expect(() => allow.anArrayOfObjects(anEmptyArray, 20, 50)).toThrow();
   expect(() => allow.anArrayOfObjects(anArrayOfObjects, 20, 50)).toThrow();
});

test('anArrayOfObjects() should throw an error when checking anything other than an array-of-objects', () => {
   expect(() => allow.anArrayOfObjects(AClass)).toThrow();
   expect(() => allow.anArrayOfObjects(aFalse)).toThrow();
   expect(() => allow.anArrayOfObjects(aFalseString)).toThrow();
   expect(() => allow.anArrayOfObjects(aFunction)).toThrow();
   expect(() => allow.anArrayOfObjects(anAlphabetString)).toThrow();
   expect(() => allow.anArrayOfObjects(anArrayOfArrays)).toThrow();
   expect(() => allow.anArrayOfObjects(anArrayOfIntegers)).toThrow();
   expect(() => allow.anArrayOfObjects(anArrayOfMixedTypes)).toThrow();
   expect(() => allow.anArrayOfObjects(anArrayOfNumbers)).toThrow();
   expect(() => allow.anArrayOfObjects(anArrayOfStrings)).toThrow();
   expect(() => allow.anArrayOfObjects(aNegative1)).toThrow();
   expect(() => allow.anArrayOfObjects(aNegativePi)).toThrow();
   expect(() => allow.anArrayOfObjects(anEmptyObject)).toThrow();
   expect(() => allow.anArrayOfObjects(anEmptyString)).toThrow();
   expect(() => allow.anArrayOfObjects(aNull)).toThrow();
   expect(() => allow.anArrayOfObjects(aNumber0)).toThrow();
   expect(() => allow.anArrayOfObjects(aNumber1)).toThrow();
   expect(() => allow.anArrayOfObjects(aNumber1WithDecimals)).toThrow();
   expect(() => allow.anArrayOfObjects(anUndefined)).toThrow();
   expect(() => allow.anArrayOfObjects(aPi)).toThrow();
   expect(() => allow.anArrayOfObjects(aPopulatedObject)).toThrow();
   expect(() => allow.anArrayOfObjects(aTrue)).toThrow();
   expect(() => allow.anArrayOfObjects(aTrueString)).toThrow();
});

// anArrayOfStrings()

test('anArrayOfStrings() should pass when checking any array-of-strings', () => {
   expect(allow.anArrayOfStrings(anArrayOfStrings)).toEqual(expect.any(Object));
   expect(allow.anArrayOfStrings(anEmptyArray)).toEqual(expect.any(Object));
});

test('after setting allowNull to TRUE, anArrayOfStrings() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.anArrayOfStrings(aNull)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('anArrayOfStrings() should pass when checking arrays-of-strings that meet a minimum length', () => {
   expect(allow.anArrayOfStrings(anArrayOfStrings, 1)).toEqual(expect.any(Object));
});

test('anArrayOfStrings() should pass when checking arrays-of-strings longer than a minimum length and shorter than a maximum length', () => {
   expect(allow.anArrayOfStrings(anArrayOfStrings, 1, 50)).toEqual(expect.any(Object));
});

test('anArrayOfStrings() should throw an error when checking arrays-of-strings that are outside the required length limits', () => {
   expect(() => allow.anArrayOfStrings(anEmptyArray, 20, 50)).toThrow();
   expect(() => allow.anArrayOfStrings(anArrayOfStrings, 20, 50)).toThrow();
});

test('anArrayOfStrings() should throw an error when checking anything other than an array-of-strings', () => {
   expect(() => allow.anArrayOfStrings(AClass)).toThrow();
   expect(() => allow.anArrayOfStrings(aFalse)).toThrow();
   expect(() => allow.anArrayOfStrings(aFalseString)).toThrow();
   expect(() => allow.anArrayOfStrings(aFunction)).toThrow();
   expect(() => allow.anArrayOfStrings(anAlphabetString)).toThrow();
   expect(() => allow.anArrayOfStrings(anArrayOfArrays)).toThrow();
   expect(() => allow.anArrayOfStrings(anArrayOfIntegers)).toThrow();
   expect(() => allow.anArrayOfStrings(anArrayOfMixedTypes)).toThrow();
   expect(() => allow.anArrayOfStrings(anArrayOfNumbers)).toThrow();
   expect(() => allow.anArrayOfStrings(anArrayOfObjects)).toThrow();
   expect(() => allow.anArrayOfStrings(anArrayOfPeople)).toThrow();
   expect(() => allow.anArrayOfStrings(aNegative1)).toThrow();
   expect(() => allow.anArrayOfStrings(aNegativePi)).toThrow();
   expect(() => allow.anArrayOfStrings(anEmptyObject)).toThrow();
   expect(() => allow.anArrayOfStrings(anEmptyString)).toThrow();
   expect(() => allow.anArrayOfStrings(aNull)).toThrow();
   expect(() => allow.anArrayOfStrings(aNumber0)).toThrow();
   expect(() => allow.anArrayOfStrings(aNumber1)).toThrow();
   expect(() => allow.anArrayOfStrings(aNumber1WithDecimals)).toThrow();
   expect(() => allow.anArrayOfStrings(anUndefined)).toThrow();
   expect(() => allow.anArrayOfStrings(aPi)).toThrow();
   expect(() => allow.anArrayOfStrings(aPopulatedObject)).toThrow();
   expect(() => allow.anArrayOfStrings(aTrue)).toThrow();
   expect(() => allow.anArrayOfStrings(aTrueString)).toThrow();
});

// anInstanceOf()

test('anInstanceOf() should pass when checking any object against its instance', () => {
   expect(allow.anInstanceOf(aBriefPerson, briefPerson)).toEqual(expect.any(Object));
   expect(allow.anInstanceOf(aPerson, briefPerson)).toEqual(expect.any(Object));
   expect(allow.anInstanceOf(aPerson, person)).toEqual(expect.any(Object));
   expect(allow.anInstanceOf(aLongerPerson, briefPerson)).toEqual(expect.any(Object));
   expect(allow.anInstanceOf(aLongerPerson, person)).toEqual(expect.any(Object));
   expect(allow.anInstanceOf(aLongerPerson, longerPerson)).toEqual(expect.any(Object));
});

test('after setting allowNull to TRUE, anInstanceOf() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.anInstanceOf(aNull, briefPerson)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('anInstanceOf() should throw an error when the supplied object is missing keys in the model object', () => {
   expect(() => allow.anInstanceOf(aBriefPerson, person)).toThrow();
   expect(() => allow.anInstanceOf(aBriefPerson, longerPerson)).toThrow();
   expect(() => allow.anInstanceOf(aPerson, longerPerson)).toThrow();
   expect(() => allow.anInstanceOf(anEmptyObject, person)).toThrow();
   expect(() => allow.anInstanceOf(aPopulatedObject, person)).toThrow();
});

test('anInstanceOf() should throw an error when the supplied object does not contain the objects/arrays in the model object', () => {
   expect(() => allow.anInstanceOf(aBriefPerson, complexPerson)).toThrow();
   expect(() => allow.anInstanceOf(aPerson, complexPerson)).toThrow();
   expect(() => allow.anInstanceOf(aLongerPerson, complexPerson)).toThrow();
   expect(() => allow.anInstanceOf(anEmptyObject, complexPerson)).toThrow();
   expect(() => allow.anInstanceOf(aPopulatedObject, complexPerson)).toThrow();
});

test('anInstanceOf() should throw an error when checking anything other than an instance of the model object', () => {
   expect(() => allow.anInstanceOf(AClass, person)).toThrow();
   expect(() => allow.anInstanceOf(aFalse, person)).toThrow();
   expect(() => allow.anInstanceOf(aFalseString, person)).toThrow();
   expect(() => allow.anInstanceOf(aFunction, person)).toThrow();
   expect(() => allow.anInstanceOf(anAlphabetString, person)).toThrow();
   expect(() => allow.anInstanceOf(anArrayOfArrays, person)).toThrow();
   expect(() => allow.anInstanceOf(anArrayOfIntegers, person)).toThrow();
   expect(() => allow.anInstanceOf(anArrayOfMixedTypes, person)).toThrow();
   expect(() => allow.anInstanceOf(anArrayOfNumbers, person)).toThrow();
   expect(() => allow.anInstanceOf(anArrayOfObjects, person)).toThrow();
   expect(() => allow.anInstanceOf(anArrayOfPeople, person)).toThrow();
   expect(() => allow.anInstanceOf(anArrayOfStrings, person)).toThrow();
   expect(() => allow.anInstanceOf(aNegative1, person)).toThrow();
   expect(() => allow.anInstanceOf(aNegativePi, person)).toThrow();
   expect(() => allow.anInstanceOf(anEmptyArray, person)).toThrow();
   expect(() => allow.anInstanceOf(anEmptyObject, person)).toThrow();
   expect(() => allow.anInstanceOf(anEmptyString, person)).toThrow();
   expect(() => allow.anInstanceOf(aNull, person)).toThrow();
   expect(() => allow.anInstanceOf(aNumber0, person)).toThrow();
   expect(() => allow.anInstanceOf(aNumber1, person)).toThrow();
   expect(() => allow.anInstanceOf(aNumber1WithDecimals, person)).toThrow();
   expect(() => allow.anInstanceOf(anUndefined, person)).toThrow();
   expect(() => allow.anInstanceOf(aPi, person)).toThrow();
   expect(() => allow.anInstanceOf(aPopulatedObject, person)).toThrow();
   expect(() => allow.anInstanceOf(aTrue, person)).toThrow();
   expect(() => allow.anInstanceOf(aTrueString, person)).toThrow();
});

// anInteger()

test('anInteger() should pass when checking any integer', () => {
   expect(allow.anInteger(aNegative1)).toEqual(expect.any(Object));
   expect(allow.anInteger(aNumber0)).toEqual(expect.any(Object));
   expect(allow.anInteger(aNumber1)).toEqual(expect.any(Object));
   expect(allow.anInteger(aNumber1WithDecimals)).toEqual(expect.any(Object));
});

test('after setting allowNull to TRUE, anInteger() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.anInteger(aNull)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('anInteger() should pass when checking integers that meet a minimum value', () => {
   expect(allow.anInteger(aNegative1, -2)).toEqual(expect.any(Object));
   expect(allow.anInteger(aNumber0, -2)).toEqual(expect.any(Object));
   expect(allow.anInteger(aNumber1, -2)).toEqual(expect.any(Object));
   expect(allow.anInteger(aNumber1WithDecimals, -2)).toEqual(expect.any(Object));
});

test('anInteger() should pass when checking integers with a minimum value and a maximum value', () => {
   expect(allow.anInteger(aNegative1, -2, 50)).toEqual(expect.any(Object));
   expect(allow.anInteger(aNumber0, -2, 50)).toEqual(expect.any(Object));
   expect(allow.anInteger(aNumber1, -2, 50)).toEqual(expect.any(Object));
   expect(allow.anInteger(aNumber1WithDecimals, -2, 50)).toEqual(expect.any(Object));
});

test('anInteger() should throw an error when checking integers that are outside the required range', () => {
   expect(() => allow.anInteger(aNegative1, 20, 50)).toThrow();
   expect(() => allow.anInteger(aNumber0, 20, 50)).toThrow();
   expect(() => allow.anInteger(aNumber1, 20, 50)).toThrow();
   expect(() => allow.anInteger(aNumber1WithDecimals, 20, 50)).toThrow();
});

test('anInteger() should throw an error when checking anything other than an integer', () => {
   expect(() => allow.anInteger(AClass)).toThrow();
   expect(() => allow.anInteger(aFalse)).toThrow();
   expect(() => allow.anInteger(aFalseString)).toThrow();
   expect(() => allow.anInteger(aFunction)).toThrow();
   expect(() => allow.anInteger(anAlphabetString)).toThrow();
   expect(() => allow.anInteger(anArrayOfArrays)).toThrow();
   expect(() => allow.anInteger(anArrayOfIntegers)).toThrow();
   expect(() => allow.anInteger(anArrayOfMixedTypes)).toThrow();
   expect(() => allow.anInteger(anArrayOfNumbers)).toThrow();
   expect(() => allow.anInteger(anArrayOfObjects)).toThrow();
   expect(() => allow.anInteger(anArrayOfPeople)).toThrow();
   expect(() => allow.anInteger(anArrayOfStrings)).toThrow();
   expect(() => allow.anInteger(aNegativePi)).toThrow();
   expect(() => allow.anInteger(anEmptyArray)).toThrow();
   expect(() => allow.anInteger(anEmptyObject)).toThrow();
   expect(() => allow.anInteger(anEmptyString)).toThrow();
   expect(() => allow.anInteger(aNull)).toThrow();
   expect(() => allow.anInteger(anUndefined)).toThrow();
   expect(() => allow.anInteger(aPi)).toThrow();
   expect(() => allow.anInteger(aPopulatedObject)).toThrow();
   expect(() => allow.anInteger(aTrue)).toThrow();
   expect(() => allow.anInteger(aTrueString)).toThrow();
});

// anObject()

test('anObject() should pass when checking any object', () => {
   expect(allow.anObject(anEmptyObject)).toEqual(expect.any(Object));
   expect(allow.anObject(aPopulatedObject)).toEqual(expect.any(Object));
});

test('after setting allowNull to TRUE, anObject() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.anObject(aNull)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('anObject() should pass when checking objects that have a minimum number of keys', () => {
   expect(allow.anObject(aBriefPerson, 1)).toEqual(expect.any(Object));
   expect(allow.anObject(aPerson, 1)).toEqual(expect.any(Object));
   expect(allow.anObject(aLongerPerson, 1)).toEqual(expect.any(Object));
   expect(allow.anObject(aPopulatedObject, 1)).toEqual(expect.any(Object));
});

test('anObject() should pass when checking objects with a minimum and a maximum number of keys', () => {
   expect(allow.anObject(aBriefPerson, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anObject(aPerson, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anObject(aLongerPerson, 1, 50)).toEqual(expect.any(Object));
   expect(allow.anObject(aPopulatedObject, 1, 50)).toEqual(expect.any(Object));
});

test('anObject() should throw an error when checking objects that are outside the range of required keys', () => {
   expect(() => allow.anObject(aBriefPerson, 20, 50)).toThrow();
   expect(() => allow.anObject(aPerson, 20, 50)).toThrow();
   expect(() => allow.anObject(aLongerPerson, 20, 50)).toThrow();
   expect(() => allow.anObject(aPopulatedObject, 20, 50)).toThrow();
});

test('anObject() should throw an error when checking anything other than an integer', () => {
   expect(() => allow.anObject(AClass)).toThrow();
   expect(() => allow.anObject(aFalse)).toThrow();
   expect(() => allow.anObject(aFalseString)).toThrow();
   expect(() => allow.anObject(aFunction)).toThrow();
   expect(() => allow.anObject(anAlphabetString)).toThrow();
   expect(() => allow.anObject(anArrayOfArrays)).toThrow();
   expect(() => allow.anObject(anArrayOfIntegers)).toThrow();
   expect(() => allow.anObject(anArrayOfMixedTypes)).toThrow();
   expect(() => allow.anObject(anArrayOfNumbers)).toThrow();
   expect(() => allow.anObject(anArrayOfObjects)).toThrow();
   expect(() => allow.anObject(anArrayOfPeople)).toThrow();
   expect(() => allow.anObject(anArrayOfStrings)).toThrow();
   expect(() => allow.anObject(aNegative1)).toThrow();
   expect(() => allow.anObject(aNegativePi)).toThrow();
   expect(() => allow.anObject(anEmptyArray)).toThrow();
   expect(() => allow.anObject(anEmptyString)).toThrow();
   expect(() => allow.anObject(aNull)).toThrow();
   expect(() => allow.anObject(aNumber0)).toThrow();
   expect(() => allow.anObject(aNumber1)).toThrow();
   expect(() => allow.anObject(aNumber1WithDecimals)).toThrow();
   expect(() => allow.anObject(anUndefined)).toThrow();
   expect(() => allow.anObject(aPi)).toThrow();
   expect(() => allow.anObject(aTrue)).toThrow();
   expect(() => allow.anObject(aTrueString)).toThrow();
});

// aNumber()

test('aNumber() should pass when checking any number', () => {
   expect(allow.aNumber(aNegative1)).toEqual(expect.any(Object));
   expect(allow.aNumber(aNegativePi)).toEqual(expect.any(Object));
   expect(allow.aNumber(aNumber0)).toEqual(expect.any(Object));
   expect(allow.aNumber(aNumber1)).toEqual(expect.any(Object));
   expect(allow.aNumber(aNumber1WithDecimals)).toEqual(expect.any(Object));
   expect(allow.aNumber(aPi)).toEqual(expect.any(Object));
});

test('after setting allowNull to TRUE, aNumber() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.aNumber(aNull)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('aNumber() should pass when checking numbers that meet a minimum value', () => {
   expect(allow.aNumber(aNegative1, -2)).toEqual(expect.any(Object));
   expect(allow.aNumber(aNegativePi, -4)).toEqual(expect.any(Object));
   expect(allow.aNumber(aNumber0, -1)).toEqual(expect.any(Object));
   expect(allow.aNumber(aNumber1, 0)).toEqual(expect.any(Object));
   expect(allow.aNumber(aNumber1WithDecimals, 0)).toEqual(expect.any(Object));
   expect(allow.aNumber(aPi, 3)).toEqual(expect.any(Object));
});

test('aNumber() should pass when checking numbers with a minimum value and a maximum value', () => {
   expect(allow.aNumber(aNegative1, -2, 0)).toEqual(expect.any(Object));
   expect(allow.aNumber(aNegativePi, -4, -3)).toEqual(expect.any(Object));
   expect(allow.aNumber(aNumber0, -1, 1)).toEqual(expect.any(Object));
   expect(allow.aNumber(aNumber1, 0, 2)).toEqual(expect.any(Object));
   expect(allow.aNumber(aNumber1WithDecimals, 0, 2)).toEqual(expect.any(Object));
   expect(allow.aNumber(aPi, 3, 4)).toEqual(expect.any(Object));
});

test('aNumber() should throw an error when checking numbers that are outside the required range', () => {
   expect(() => allow.aNumber(aNegative1, 20, 50)).toThrow();
   expect(() => allow.aNumber(aNegativePi, 20, 50)).toThrow();
   expect(() => allow.aNumber(aNumber0, 20, 50)).toThrow();
   expect(() => allow.aNumber(aNumber1, 20, 50)).toThrow();
   expect(() => allow.aNumber(aNumber1WithDecimals, 20, 50)).toThrow();
   expect(() => allow.aNumber(aPi, 20, 50)).toThrow();
});

test('aNumber() should throw an error when checking anything other than a number', () => {
   expect(() => allow.aNumber(AClass)).toThrow();
   expect(() => allow.aNumber(aFalse)).toThrow();
   expect(() => allow.aNumber(aFalseString)).toThrow();
   expect(() => allow.aNumber(aFunction)).toThrow();
   expect(() => allow.aNumber(anAlphabetString)).toThrow();
   expect(() => allow.aNumber(anArrayOfArrays)).toThrow();
   expect(() => allow.aNumber(anArrayOfIntegers)).toThrow();
   expect(() => allow.aNumber(anArrayOfMixedTypes)).toThrow();
   expect(() => allow.aNumber(anArrayOfNumbers)).toThrow();
   expect(() => allow.aNumber(anArrayOfObjects)).toThrow();
   expect(() => allow.aNumber(anArrayOfPeople)).toThrow();
   expect(() => allow.aNumber(anArrayOfStrings)).toThrow();
   expect(() => allow.aNumber(anEmptyArray)).toThrow();
   expect(() => allow.aNumber(anEmptyObject)).toThrow();
   expect(() => allow.aNumber(anEmptyString)).toThrow();
   expect(() => allow.aNumber(aNull)).toThrow();
   expect(() => allow.aNumber(anUndefined)).toThrow();
   expect(() => allow.aNumber(aPopulatedObject)).toThrow();
   expect(() => allow.aNumber(aTrue)).toThrow();
   expect(() => allow.aNumber(aTrueString)).toThrow();
});

// aString()

test('aString() should pass when checking any string', () => {
   expect(allow.aString(aFalseString)).toEqual(expect.any(Object));
   expect(allow.aString(anAlphabetString)).toEqual(expect.any(Object));
   expect(allow.aString(anEmptyString)).toEqual(expect.any(Object));
   expect(allow.aString(aTrueString)).toEqual(expect.any(Object));
});

test('after setting allowNull to TRUE, aString() should pass when checking a NULL value', () => {
   allow.setAllowNull(true);
   expect(allow.aString(aNull)).toEqual(expect.any(Object));
   allow.setAllowNull(false);
});

test('aString() should pass when checking strings that meet a minimum length', () => {
   expect(allow.aString(aFalseString, 4)).toEqual(expect.any(Object));
   expect(allow.aString(anAlphabetString, 25)).toEqual(expect.any(Object));
   expect(allow.aString(aTrueString, 3)).toEqual(expect.any(Object));
});

test('aString() should pass when checking strings with a minimum length and a maximum length', () => {
   expect(allow.aString(aFalseString, 4, 30)).toEqual(expect.any(Object));
   expect(allow.aString(anAlphabetString, 25, 30)).toEqual(expect.any(Object));
   expect(allow.aString(aTrueString, 3, 30)).toEqual(expect.any(Object));
});

test('aString() should throw an error when checking strings that are outside the required length', () => {
   expect(() => allow.aString(aFalseString, 28, 30)).toThrow();
   expect(() => allow.aString(anAlphabetString, 28, 30)).toThrow();
   expect(() => allow.aString(anEmptyString, 28, 30)).toThrow();
   expect(() => allow.aString(aTrueString, 28, 30)).toThrow();
});

test('aString() should throw an error when checking anything other than a string', () => {
   expect(() => allow.aString(AClass)).toThrow();
   expect(() => allow.aString(aFalse)).toThrow();
   expect(() => allow.aString(aFunction)).toThrow();
   expect(() => allow.aString(anArrayOfArrays)).toThrow();
   expect(() => allow.aString(anArrayOfIntegers)).toThrow();
   expect(() => allow.aString(anArrayOfMixedTypes)).toThrow();
   expect(() => allow.aString(anArrayOfNumbers)).toThrow();
   expect(() => allow.aString(anArrayOfObjects)).toThrow();
   expect(() => allow.aString(anArrayOfPeople)).toThrow();
   expect(() => allow.aString(anArrayOfStrings)).toThrow();
   expect(() => allow.aString(aNegative1)).toThrow();
   expect(() => allow.aString(aNegativePi)).toThrow();
   expect(() => allow.aString(anEmptyArray)).toThrow();
   expect(() => allow.aString(anEmptyObject)).toThrow();
   expect(() => allow.aString(aNull)).toThrow();
   expect(() => allow.aString(aNumber0)).toThrow();
   expect(() => allow.aString(aNumber1)).toThrow();
   expect(() => allow.aString(aNumber1WithDecimals)).toThrow();
   expect(() => allow.aString(anUndefined)).toThrow();
   expect(() => allow.aString(aPi)).toThrow();
   expect(() => allow.aString(aPopulatedObject)).toThrow();
   expect(() => allow.aString(aTrue)).toThrow();
});
