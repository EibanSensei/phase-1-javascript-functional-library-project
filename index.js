function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }

function myMap(collection, callback) {
    let result = [];
  
    if (Array.isArray(collection)) {
      // If collection is array, iterate over array
      for (let i = 0; i < collection.length; i++) {
        // Pass all potentially necessary args to the callback. This is apparently standard practice.
        result.push(callback(collection[i], i, collection));
      }
    } else {
      // If collection is an object, iterate over the object's own properties
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          // same as above pass it everything
          result.push(callback(collection[key], key, collection));
        }
      }
    }
  
    return result; 
  }

  function myReduce(collection, callback, acc) {
    let isInitialValueProvided = acc !== undefined;
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (!isInitialValueProvided) {
          acc = collection[i];
          isInitialValueProvided = true;
        } else {
          acc = callback(acc, collection[i], collection);
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (!isInitialValueProvided) {
            acc = collection[key];
            isInitialValueProvided = true;
          } else {
            acc = callback(acc, collection[key], collection);
          }
        }
      }
    }
  
    return acc;
  }

  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key])) {
            return collection[key];
          }
        }
      }
    }
    return undefined;
  }

  function myFilter(collection, predicate) {
    let result = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          if (predicate(collection[key])) {
            result.push(collection[key]);
          }
        }
      }
    }
  
    return result;
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }

  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }

  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }

  function myKeys(object) {
    let keys = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }

  function myValues(object) {
    let values = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    return values;
  }