# allow

`allow`
is a library that checks data types and _allows_ the script to continue if they pass the check. If the check fails, the script can throw an `Error`or just a warning. The package was written to ensure that only the "right" kind of data is allowed into the body of a function / method / component / etc. The intention is to provide effective _runtime_ validation of data before it reaches application logic.

## Usage

After installation, import the package as such:

```javascript
import { allow } from '@toolz/allow';
```

Once imported, the assumed usage is directly after the entry to any function / method / component / etc. The idea is to check the integrity of provided inputs before further computation proceeds. This would typically look like this:

```javascript
const addSalesTax = (originalPrice) => {
   allow.aNumber(originalPrice, 0);
   /*
      ...proceed with the rest of the function
    */
}
```

In the above example, the assumption is that `originalPrice`should _always_ be a number. If any other data type is provided for `originalPrice`, the `allow`check will fail. This means that a value of `'32.99'`will fail (because it's a string).  `null`will fail. Boolean values will fail. Anything that is _not_ a number will fail. In this example, the second argument (which is optional), indicates the minimum acceptable value of the number. In this case, we don't want negative values for `originalPrice`, so nothing below `0`will pass the check.

## Methods

### aBoolean

```javascript
// example:
const doSomething = (reallyDoIt) => {
   allow.aBoolean(reallyDoIt);
   /*
      This is NOT "truthy".  It fails if anything other than a true Boolean is provided.  This means that it fails on 'TRUE'/'FALSE' (because they're strings), on 1/0 (because they're numbers), or any other value that is not a pure TRUE/FALSE
      ...proceed with the rest of the function
    */
}
```
