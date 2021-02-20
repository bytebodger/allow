# allow

`allow`
is a library that checks data types and _allows_ the script to continue if they pass the check. If the check fails, the script can throw an `Error`, or emit a warning, or invoke a custom callback. The package was written to ensure that only the "right" kind of data is allowed into the body of a function / method / component / etc. The intention is to provide effective _runtime_ validation of data before it reaches application logic.

## Usage

After installation, import the package as such:

```javascript
import { allow } from '@toolz/allow';
```

Once imported, the assumed usage is directly after the entry to any function / method / component / etc. The idea is to check the integrity of provided inputs before further computation proceeds. This would typically look like this:

```javascript
const addSalesTax = originalPrice => {
   allow.aNumber(originalPrice, 0);
   /*
      ...proceed with the rest of the function
    */
}
```

In the above example, the assumption is that `originalPrice`should _always_ be a number. If any other data type is provided for `originalPrice`, the `allow`check will fail. This means that a value of `'32.99'`will fail (because it's a string).  `null`will fail. Boolean values will fail. Anything that is _not_ a number will fail. In this example, the second argument (which is optional), indicates the minimum acceptable value of the number. In this case, we don't want negative values for `originalPrice`, so nothing below `0`will pass the check.

## Methods

### .aBoolean()

```javascript
const doSomething = someValue => {
   allow.aBoolean(someValue);
   /*
      This is NOT "truthy".  It fails if anything other than a Boolean is 
      provided. This means that it fails on 'TRUE'/'FALSE' (because they're 
      strings), on 1/0 (because they're numbers), or any other value that is 
      not a pure TRUE/FALSE
    */
}
```

### .aFunction()

```javascript
const doSomething = theCallback => {
   allow.aFunction(theCallback);
   /*
      This will fail unless a function is provided as the value for 
      theCallback. It doesn't care what's inside the function. It can even be
      blank, like:
      () => {}
      But it must be a function of some kind.
      In JavaScript, a class will also show typeof 'function'.  However, this
      check will fail if a class is passed into theCallback.
    */
}
```

### .anArray()

```javascript
const doSomething = theArray => {
   allow.anArray(theArray);
   /*
       This will fail unless an array is provided as the value for theArray.  
       The check doesn't examine the contents of the array. It can be an 
       empty array, like:
       [] 
       But it must be an array of some kind.
     */
}
```

```javascript
const doSomething = theArray => {
   allow.anArray(theArray, 0);
   /*
       The second argument of anArray() is the minimum length of the array. 
       So, by setting this value to 0, it ensures that theArray is a 
       non-empty array.
     */
}
```

```javascript
const doSomething = theArray => {
   allow.anArray(theArray, 2, 50);
   /*
       This ensures that theArray is an array, that has no fewer than 2 
       elements, and no more than 50 elements.
     */
}
```

### .anArrayOfArrays()

```javascript
const doSomething = theArrays => {
   allow.anArrayOfArrays(theArrays);
   /*
       This will fail unless an array is provided as the value for 
       theArrays. It will also fail if any of elements inside theArrays 
       are not also arrays. It does not inspect the contents of the arrays 
       inside theArrays. They can be empty arrays, like:
       [[], [], []]
       But they must be arrays of some kind.
     */
}
```

```javascript
const doSomething = theArrays => {
   allow.anArrayOfArrays(theArrays, 0);
   /*
       The second argument of anArrayOfArrays() is the minimum length of the 
       array. So, by setting this value to 0, it ensures that theArrays is 
       a non-empty array-of-arrays.
     */
}
```

```javascript
const doSomething = theArrays => {
   allow.anArrayOfArrays(theArrays, 2, 50);
   /*
       This ensures that theArrays is an array, that all of its elements 
       are arrays, that it has no fewer than 2 elements, and no more than 50 
       elements.
     */
}
```

### .anArrayOfInstances()

```javascript
const person = {
   firstName: '',
   lastName: '',
   middleInitial: '',
}

const doSomething = thePeople => {
   allow.anArrayOfInstances(thePeople, person);
   /*
       This will fail unless an array is provided as the value for 
       thePeople. It will also fail if any of the elements inside thePeople
       are not objects, and if those objects do not have all the keys present
       in the model object (in this case: person). It does not inspect the 
       types of data held in those keys, and it will allow additional keys 
       that do not exist in the model object. But it expects every object 
       in the array to have all of the keys present in the model.
     */
}
```

```javascript
const person = {
   firstName: '',
   lastName: '',
   middleInitial: '',
}

const doSomething = thePeople => {
   allow.anArrayOfInstances(thePeople, person, 0);
   /*
       The third argument of anArrayOfInstances() is the minimum length of 
       the array. So, by setting this value to 0, it ensures that thePeople is 
       a non-empty array of "person" instances.
     */
}
```

```javascript
const person = {
   firstName: '',
   lastName: '',
   middleInitial: '',
}

const doSomething = thePeople => {
   allow.anArrayOfInstances(thePeople, person, 2, 50);
   /*
       This ensures that thePeople is an array of "person" instances, that it
       has no fewer than 2 elements, and no more than 50 elements.
     */
}
```

### .anArrayOfIntegers()

```javascript
const doSomething = theNumbers => {
   allow.anArrayOfIntegers(theNumbers);
   /*
       This will fail unless an array is provided as the value for 
       theNumbers. It will also fail if any of elements inside theNumbers 
       are not also integers. This means that it will fail on any non-numeric
       value, and it will also fail on any number that is not a "whole" 
       number. It will accept decimal values, as long as those decimals 
       evaluate to a whole number. So this works:
       [1.0, 3.00, 42.0]
       But this does not:
       [1.0, 3.14, 42.0]
     */
}
```

```javascript
const doSomething = theNumbers => {
   allow.anArrayOfIntegers(theNumbers, 0);
   /*
       The second argument of anArrayOfIntegers() is the minimum length of 
       the array. So, by setting this value to 0, it ensures that theNumbers
       is a non-empty array of integers.
     */
}
```

```javascript
const doSomething = theNumbers => {
   allow.anArrayOfIntegers(theNumbers, 2, 50);
   /*
       This ensures that theNumbers is an array of integers, that it has no 
       fewer than 2 elements, and no more than 50 elements.
     */
}
```

### .anArrayOfNumbers()

```javascript
const doSomething = theNumbers => {
   allow.anArrayOfNumbers(theNumbers);
   /*
       This will fail unless an array is provided as the value for 
       theNumbers. It will also fail if any of elements inside theNumbers 
       are not also numbers.
     */
}
```

```javascript
const doSomething = theNumbers => {
   allow.anArrayOfNumbers(theNumbers, 0);
   /*
       The third argument of anArrayOfNumbers() is the minimum length of 
       the array. So, by setting this value to 0, it ensures that theNumbers
       is a non-empty array of integers.
     */
}
```

```javascript
const doSomething = theNumbers => {
   allow.anArrayOfNumbers(theNumbers, 2, 50);
   /*
       This ensures that theNumbers is an array of integers, that it has no 
       fewer than 2 elements, and no more than 50 elements.
     */
}
```

### .anArrayOfObjects()

```javascript
const doSomething = theObjects => {
   allow.anArrayOfObjects(theObjects);
   /*
       This will fail unless an array is provided as the value for 
       theObjects. It will also fail if any of the elements inside theObjects 
       are not also objects. It does not inspect the contents of the objects 
       inside theObjects. They can be empty objects, like:
       [{}, {}, {}]
       But they must be objects of some kind.
     */
}
```

```javascript
const doSomething = theObjects => {
   allow.anArrayOfObjects(theObjects, 0);
   /*
       The second argument of anArrayOfObjects() is the minimum length of the 
       array. So, by setting this value to 0, it ensures that theObjects is 
       a non-empty array-of-objects.
     */
}
```

```javascript
const doSomething = theObjects => {
   allow.anArrayOfObjects(theObjects, 2, 50);
   /*
       This ensures that theObjects is an array, that all of its elements 
       are objects, that it has no fewer than 2 elements, and no more than 50 
       elements.
     */
}
```

### .anArrayOfStrings()

```javascript
const doSomething = theStrings => {
   allow.anArrayOfStrings(theStrings);
   /*
       This will fail unless an array is provided as the value for 
       theStrings. It will also fail if any of the elements inside theStrings 
       are not also strings. It does not inspect the contents of the strings 
       inside theStrings. They can be empty strings, like:
       ['', '', '']
       But they must be strings of some kind.
     */
}
```

```javascript
const doSomething = theStrings => {
   allow.anArrayOfStrings(theStrings, 0);
   /*
       The second argument of anArrayOfStrings() is the minimum length of the 
       array. So, by setting this value to 0, it ensures that theStrings is 
       a non-empty array-of-strings.
     */
}
```

```javascript
const doSomething = theStrings => {
   allow.anArrayOfStrings(theStrings, 2, 50);
   /*
       This ensures that theStrings is an array, that all of its elements 
       are strings, that it has no fewer than 2 elements, and no more than 50 
       elements.
     */
}
```

### .anInstanceOf()

```javascript
const person = {
   firstName: '',
   lastName: '',
   middleInitial: '',
}

const doSomething = thePerson => {
   allow.anInstanceOf(thePerson, person);
   /*
       This is a (purposely forgiving) check to ensure that the provided object
       is of a similar type to a reference object. This only checks that the
       provided object has all of the same keys that are present in the
       reference object.  It does not look at the types of data held in those
       keys. It allows additional keys that don't exist in the reference
       object. These objects will pass the check against the person reference:
       
       {
          firstName: 'Bob',
          lastName: 'Doe',
          middleInitial: null, // this does not check to ensure that 
                               // middleInitial is a string
       }
       
       {
          firstName: 'Bob',
          lastName: 'Doe',
          middleInitial: 'K',
          favoriteIceCream: 'vanilla' // the check does not fail based upon any
                                      // "extra" keys
       }
       
       This object will fail the check against the person reference:
       
       {
          firstName: 'Bob',
          lastName: 'Doe',
          // the middleInitial key is missing
       }
     */
}
```

### .anInteger()

```javascript
const doSomething = theNumber => {
   allow.anInteger(theNumber);
   /*
       This will fail unless an integer is provided as the value for
       theNumber. It will fail on any non-numeric value.  It will also
       fail on any numbers that are not "whole" numbers.  Values like
       1.00 or 42.0 are fine.  But 3.14 will fail, because it is not
       an integer.
     */
}
```

```javascript
const doSomething = theNumber => {
   allow.anInteger(theNumber, 0);
   /*
       The second argument of anInteger() is the minimum value of theNumber. 
       So, by setting this value to 0, it ensures that theNumber is a 
       positive integer.
     */
}
```

```javascript
const doSomething = theNumber => {
   allow.anInteger(theNumber, 2, 50);
   /*
       This ensures that theNumber is an integer, that the value is no less
       than 2, and no greater than 50.
     */
}
```

### .anObject()

```javascript
const doSomething = theObject => {
   allow.anObject(theObject);
   /*
       This ensures that theObject is an object. In JavaScript, an array is
       seen as having typeof 'object', but an array will fail this check.
       Similarly, NULL is seen as having typeof 'object', but it will also
       fail this check. 
     */
}
```

```javascript
const doSomething = theObject => {
   allow.anObject(theObject, 0);
   /*
       The second argument of anObject() is the minimum number of keys that
       must be present in theObject. So, by setting this value to 0, it ensure
       that theObject is a non-empty object.
     */
}
```

```javascript
const doSomething = theObject => {
   allow.anObject(theObject, 2, 50);
   /*
       This ensures that theObject is an object, with no fewer than two keys,
       and no more than 50 keys.
     */
}
```

### .aString()

```javascript
const doSomething = theString => {
   allow.aString(theString);
   /*
       This will fail unless a string is provided as the value for theString.  
       The check doesn't examine the contents of the string. It can be an 
       empty string, like:
       ''
       But it must be a string of some kind.
     */
}
```

```javascript
const doSomething = theString => {
   allow.aString(theString, 0);
   /*
       The second argument of aString() is the minimum length of the string. 
       So, by setting this value to 0, it ensures that theString is a 
       non-empty string.
     */
}
```

```javascript
const doSomething = theString => {
   allow.aString(theString, 2, 50);
   /*
       This ensures that theString is a string, that has no fewer than 2 
       characters, and no more than 50 characters.
     */
}
```

### .getFailureBehavior()

```javascript
console.log(allow.getFailureBehavior()); // 'throw'
/*
   The behavior has three possible values:
      throw
      warn
      ignore
   'throw' is the default value.
 */
```

### .getOnFailure()

```javascript
allow.getOnFailure();
/*
   returns whatever function has been set to be called onFailure
 */
```

### .oneOf()

This can be called two different ways - by passing in a reference array or a reference object.

```javascript
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

const doSomething = theDay => {
   allow.oneOf(theDay, days);
   /*
      This ensures that theDay matches one of the values in the days array.
    */
}
```

```javascript
const days = {
   0: 'Sun',
   1: 'Mon',
   2: 'Tue',
   3: 'Wed',
   4: 'Thur',
   5: 'Fri',
   6: 'Sat',
}

const doSomething = theDay => {
   allow.oneOf(theDay, days);
   /*
      This ensures that theDay matches one of the values in the days object.
      It does not try to check against any of the keys in the key/value pairs.
      It only checks against the values.
    */
}
```

### .setFailureBehavior()

```javascript
allow.setFailureBehavior('warn');
/*
   setFailureBehavior() requires one of the following three values:
      'throw'
      'warn'
      'ignore'
   'throw' is the default value.  Throwing an Error will halt JavaScript
   execution.  
   'warn' will spawn warnings to be displayed in the console.
   'ignore' will turn off all warnings and cease the throwing of all Errors.
 */
```

### .setOnFailure()

```javascript
const myCustomErrorHandler = (value, message) => {
   // do the custom error handling...
}

allow.setFailureBehavior('ignore');
allow.setOnFailure(myCustomErrorHandler);
/*
   The onFailure handler is called before any warning is displayed and before
   any Error is thrown.  Setting an onFailure callback does not halt the
   further error handling provide by allow.  If you want to turn off
   those features, you must use setFailureBehavior().
   
   When the onFailure method is invoked, it will be called with two arguments:
      The original value that failed validation
      The message spawned by that failed validation
 */
```

## Chaining

A successful call to any of the `allow` validation methods always returns the full set of methods. This allows for the chaining of multiple checks on a single line of code. That could look something like this:

```javascript
const doSomething = (patient, isAlive, age) => {
   allow.anObject(patient, 0).aBoolean(isAlive).aNumber(age, 0, 130);
   /*
      This ensures that patient is a non-empty object
      AND that isAlive is a Boolean
      AND that age is a positive number no greater than 130
    */
}
```
