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
      provided.  This means that it fails on 'TRUE'/'FALSE' (because they're 
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
      theCallback. It doesn't care what's inside the function.  It can even be
      blank, like:
      () => {}
      But it must be a function of some kind.
    */
}
```

### .anArray()

```javascript
const doSomething = theArray => {
   allow.anArray(theArray);
   /*
       This will fail unless an array is provided as the value for theArray.  
       The check doesn't examine the contents of the array.  It can be an 
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
       are not also arrays.  It does not inspect the contents of the arrays 
       inside theArrays.  They can be empty arrays, like:
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
       elements .
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
       that do not exist in the model object.  But it expects every object 
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
       has no fewer than 2 elements, and no more than 50 elements .
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
       are not also integers.  This means that it will fail on any non-numeric
       value, and it will also fail on any number that is not a "whole" 
       number.  It will accept decimal values, as long as those decimals 
       evaluate to a whole number.  So this works:
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
       fewer than 2 elements, and no more than 50 elements .
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
       fewer than 2 elements, and no more than 50 elements .
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
       are not also objects.  It does not inspect the contents of the objects 
       inside theObjects.  They can be empty objects, like:
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
       elements .
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
       are not also strings.  It does not inspect the contents of the strings 
       inside theStrings.  They can be empty strings, like:
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
       elements .
     */
}
```
