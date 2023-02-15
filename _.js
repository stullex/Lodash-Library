const _ = {
    clamp(number, lower, upper) {
      const lowerValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerValue, upper);
      return clampedValue;
    },
  
    inRange(number, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      }
      if (start > end) {
        const temp = end;
        end = start;
        start = temp;
      }
      const isInRange = start <= number && number < end;
      return isInRange;
    },
  
    words(string) {
      const words = string.split(" ");
      return words;
    },
  
    pad(string, length) {
      if (length <= string.length) {
        return string;
      }
      const startPaddingLength = Math.floor((length - string.length) / 2);
  
      const endPaddingLength = length - string.length - startPaddingLength;
  
      const paddedString =
        " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
  
      return paddedString;
    },
  
    has(object, key) {
      if (object[key] === undefined) return false;
      else return true;
    },
  
    invert(obj) {
      const invertedObject = {};
      let originalValue;
      for (let key in obj) {
        originalValue = obj[key];
        invertedObject[originalValue] = key;
      }
      return invertedObject;
    },
  
    findKey(obj, predicate) {
      for (let key in obj) {
        let value = obj[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key;
        }
      }
      return undefined;
    },
  
    drop(arr, number) {
      if (number === undefined) {
        number = 1;
      }
      const droppedArray = arr.slice(number);
      return droppedArray;
    },
  
    dropWhile(array, predicate) {
      let dropNumber = array.findIndex(function (element, index) {
        return !predicate(element, index, array);
      });
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
  
    chunk(arr, size) {
      const chunks = [];
      arr = [].concat(...arr);
  
      while (arr.length) {
        chunks.push(arr.splice(0, size));
      }
      return chunks;
    },
  };
  //test in terminal with: node test/any.js     any = any of the files in the test folder.
  
  // Do not write or modify code below this line.
  module.exports = _;