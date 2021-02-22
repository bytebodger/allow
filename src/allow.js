const Allow = () => {
   let allowNull = false;
   let failureBehavior = 'throw';
   let onFailure = () => {
      //
   };
   
   const aBoolean = value => {
      if (typeof value !== 'boolean')
         return fail(value, 'is not a Boolean');
      return allow;
   };
   
   const aFunction = value => {
      if (typeof value !== 'function')
         return fail(value, 'is not a function');
      return allow;
   };
   
   const anArray = (value, minLength = 0, maxLength = Number.MAX_SAFE_INTEGER) => {
      anInteger(minLength, is.not.negative).anInteger(maxLength, is.not.negative);
      if (!Array.isArray(value))
         return fail(value, 'is not an array');
      checkLength(value, minLength, maxLength);
      return allow;
   };
   
   const anArrayOfArrays = (value, minLength = 0, maxLength = Number.MAX_SAFE_INTEGER) => {
      anArray(value).anInteger(minLength, is.not.negative).anInteger(maxLength, is.not.negative);
      if (allowNull && value === null)
         return allow;
      value.forEach(item => anArray(item));
      checkLength(value, minLength, maxLength);
      return allow;
   };
   
   const anArrayOfInstances = (value, modelObject, minLength = 0, maxLength = Number.MAX_SAFE_INTEGER) => {
      anArray(value).anObject(modelObject).anInteger(minLength, is.not.negative).anInteger(maxLength, is.not.negative);
      if (allowNull && value === null)
         return allow;
      value.forEach(item => anInstanceOf(item, modelObject));
      checkLength(value, minLength, maxLength);
      return allow;
   };
   
   const anArrayOfIntegers = (value, minLength = 0, maxLength = Number.MAX_SAFE_INTEGER) => {
      anArray(value).anInteger(minLength, is.not.negative).anInteger(maxLength, is.not.negative);
      if (allowNull && value === null)
         return allow;
      value.forEach(item => anInteger(item));
      checkLength(value, minLength, maxLength);
      return allow;
   };
   
   const anArrayOfNumbers = (value, minLength = 0, maxLength = Number.MAX_SAFE_INTEGER) => {
      anArray(value).anInteger(minLength, is.not.negative).anInteger(maxLength, is.not.negative);
      if (allowNull && value === null)
         return allow;
      value.forEach(item => aNumber(item));
      checkLength(value, minLength, maxLength);
      return allow;
   };
   
   const anArrayOfObjects = (value, minLength = 0, maxLength = Number.MAX_SAFE_INTEGER) => {
      anArray(value).anInteger(minLength, is.not.negative).anInteger(maxLength, is.not.negative);
      if (allowNull && value === null)
         return allow;
      value.forEach(item => anObject(item));
      checkLength(value, minLength, maxLength);
      return allow;
   };
   
   const anArrayOfStrings = (value, minLength = 0, maxLength = Number.MAX_SAFE_INTEGER) => {
      anArray(value).anInteger(minLength, is.not.negative).anInteger(maxLength, is.not.negative);
      if (allowNull && value === null)
         return allow;
      value.forEach(item => aString(item));
      checkLength(value, minLength, maxLength);
      return allow;
   };
   
   const anInstanceOf = (suppliedObject, modelObject) => {
      anObject(suppliedObject).anObject(modelObject);
      if (allowNull && suppliedObject === null)
         return allow;
      const modelKeys = Object.keys(modelObject);
      let aKeyIsMissing = false;
      modelKeys.forEach(modelKey => {
         if (!suppliedObject.hasOwnProperty(modelKey))
            aKeyIsMissing = true;
         else {
            const suppliedValue = suppliedObject[modelKey];
            const modelValue = modelObject[modelKey];
            const isSuppliedValueAnObject = isAnObject(suppliedValue);
            const isSuppliedValueAnArray = Array.isArray(suppliedValue);
            const isModelValueAnObject = isAnObject(modelValue);
            const isModelValueAnArray = Array.isArray(modelValue);
            if (isSuppliedValueAnObject !== isModelValueAnObject || isSuppliedValueAnArray !== isModelValueAnArray)
               fail(suppliedObject, 'does not match the model object');
            else if (isModelValueAnObject)
               anInstanceOf(suppliedValue, modelValue);
         }
      });
      if (aKeyIsMissing)
         fail(suppliedObject, 'is missing a required key');
      return allow;
   };
   
   const anInteger = (value, minValue = Number.MIN_SAFE_INTEGER, maxValue = Number.MAX_SAFE_INTEGER) => {
      if (!Number.isInteger(value))
         return fail(value, 'is not an integer');
      checkRange(value, minValue, maxValue);
      return allow;
   };
   
   const anObject = (value, minNumberOfKeys = 0, maxNumberOfKeys = Number.MAX_SAFE_INTEGER) => {
      anInteger(minNumberOfKeys, is.not.negative).anInteger(maxNumberOfKeys, is.not.negative);
      if ((typeof value !== 'object' || Array.isArray(value) || value === null))
         return fail(value, 'is not an object');
      checkLength(Object.keys(value), minNumberOfKeys, maxNumberOfKeys);
      return allow;
   };
   
   const aNumber = (value, minValue = Number.MIN_SAFE_INTEGER, maxValue = Number.MAX_SAFE_INTEGER) => {
      if (typeof value !== 'number')
         return fail(value, 'is not a number');
      checkRange(value, minValue, maxValue);
      return allow;
   };
   
   const aString = (value, minLength = 0, maxLength = Number.MAX_SAFE_INTEGER) => {
      anInteger(minLength, is.not.negative).anInteger(maxLength, is.not.negative);
      if (typeof value !== 'string')
         return fail(value, 'is not a string');
      checkLength(value, minLength, maxLength);
      return allow;
   };
   
   const checkLength = (value, minLength = 0, maxLength = Number.MAX_SAFE_INTEGER) => {
      anInteger(minLength, 0).anInteger(maxLength, 0);
      if (value.length < minLength)
         return fail(value, 'is too short');
      if (value.length > maxLength)
         return fail(value, 'is too long');
      return true;
   };
   
   const checkRange = (value = 0, minValue = Number.MIN_SAFE_INTEGER, maxValue = Number.MAX_SAFE_INTEGER) => {
      if (value < minValue)
         return fail(value, 'is too small');
      if (value > maxValue)
         return fail(value, 'is too large');
      return true;
   };
   
   const fail = (value, message) => {
      if (allowNull && value === null)
         return allow;
      onFailure(value, message);
      if (failureBehavior === 'ignore')
         return allow;
      if (failureBehavior === 'warn') {
         console.warn(value);
         console.warn(`[${value.toString()}] ${message}`);
         return allow;
      }
      console.error(value);
      throw new Error(`[${value.toString()}] ${message}`);
   };
   
   const getAllowNull = () => allowNull;
   
   const getFailureBehavior = () => failureBehavior;
   
   const getOnFailure = () => onFailure;
   
   const is = {not: {negative: 0}};
   
   const isAnObject = value => typeof value === 'object' && !Array.isArray(value) && value !== null;
   
   const oneOf = (value, allowedValues) => {
      if (allowNull && value === null)
         return allow;
      if (isAnObject(value) || Array.isArray(value) || typeof value === 'function') {
         fail(value, 'cannot be an object, array, or function');
         return allow;
      }
      if (typeof allowedValues !== 'object' || allowedValues === null) {
         fail(allowedValues, 'allowedValues must be supplied in an object or an array');
         return allow;
      }
      if (Array.isArray(allowedValues)) {
         if (!allowedValues.some(allowedValue => value === allowedValue))
            return fail(value, 'is not an allowed value');
         return allow;
      }
      const entries = Object.entries(allowedValues);
      if (!entries.some(entry => entry[1] === value))
         return fail(value, 'is not an allowed value');
      return allow;
   };
   
   const setAllowNull = newAllowNull => {
      aBoolean(newAllowNull);
      allowNull = newAllowNull;
   };
   
   const setFailureBehavior = behavior => {
      oneOf(behavior, ['ignore', 'throw', 'warn']);
      failureBehavior = behavior;
   };
   
   const setOnFailure = onFailureFunction => {
      aFunction(onFailureFunction);
      onFailure = onFailureFunction;
   };
   
   return {
      aBoolean,
      aFunction,
      anArray,
      anArrayOfArrays,
      anArrayOfInstances,
      anArrayOfIntegers,
      anArrayOfNumbers,
      anArrayOfObjects,
      anArrayOfStrings,
      anInstanceOf,
      anInteger,
      anObject,
      aNumber,
      aString,
      checkLength,
      checkRange,
      fail,
      getAllowNull,
      getFailureBehavior,
      getOnFailure,
      oneOf,
      setAllowNull,
      setOnFailure,
      setFailureBehavior,
   };
};

export const allow = Allow();
