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
const doSomething = reallyDoIt => {
   allow.aBoolean(reallyDoIt);
   /*
      This is NOT "truthy".  It fails if anything other than a true Boolean is 
      provided.  This means that it fails on 'TRUE'/'FALSE' (because they're 
      strings), on 1/0 (because they're numbers), or any other value that is 
      not a pure TRUE/FALSE
    */
}
```

### .aFunction()

```javascript
const doSomething = callback => {
   allow.aFunction(callback);
   /*
      This will fail unless a function is provided as the value for callback.
      It doesn't care what's inside the function.  It can even be blank, like:
      () => {}
      But it must be a function of some kind.
    */
}
```

### .anArray()

```javascript
const doSomething = theValues => {
   allow.anArray(theValues);
   /*
       This will fail unless an array is provided as the value for theValues.  
       The check doesn't examine the contents of the array.  It can be an 
       empty array, like:
       [] 
       But it must be an array of some kind.
     */
}
```

```javascript
const doSomething = theValues => {
   allow.anArray(theValues, 0);
   /*
       The second argument of anArray() is the minimum length of the array. 
       So, by setting this value to 0, it ensures that theValues is a 
       non-empty array.
     */
}
```

```javascript
const doSomething = theValues => {
   allow.anArray(theValues, 2, 50);
   /*
       This ensures that theValues is an array, that has no fewer than 2 
       elements, and no more than 50 elements.
     */
}
```

### .anArrayOfArrays()

```javascript
const doSomething = nestedArray => {
   allow.anArrayOfArrays(nestedArray);
   /*
       This will fail unless an array is provided as the value for 
       nestedArray. It will also fail if any of elements inside nestedArray 
       are not also arrays.  It does not inspect the contents of the arrays 
       inside nestedArray.  They can be empty arrays, like:
       [[], [], []]
       But they must be arrays of some kind.
     */
}
```

```javascript
const doSomething = nestedArray => {
   allow.anArrayOfArrays(nestedArray, 0);
   /*
       The second argument of anArrayOfArrays() is the minimum length of the 
       array. So, by setting this value to 0, it ensures that nestedArray is 
       a non-empty array-of-arrays.
     */
}
```

```javascript
const doSomething = nestedArray => {
   allow.anArray(nestedArray, 2, 50);
   /*
       This ensures that nestedArray is an array, that all of its elements 
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

const doSomething = people => {
   allow.anArrayOfInstances(people, person);
   /*
       This will fail unless an array is provided as the value for 
       people. It will also fail if any of the elements inside people are 
       not objects, and if those objects do not have all the keys present
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

const doSomething = people => {
   allow.anArrayOfInstances(people, person, 0);
   /*
       The third argument of anArrayOfInstances() is the minimum length of 
       the array. So, by setting this value to 0, it ensures that people is 
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

const doSomething = people => {
   allow.anArrayOfInstances(people, person, 2, 50);
   /*
       This ensures that people is an array of "person" instances, that it has
       no fewer than 2 elements, and no more than 50 elements .
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
       the array. So, by setting this value to 0, it ensures that theNumbers is 
       a non-empty array of integers.
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
       the array. So, by setting this value to 0, it ensures that theNumbers is 
       a non-empty array of integers.
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
