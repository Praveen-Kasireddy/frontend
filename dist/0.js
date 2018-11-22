(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseValues.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseValues.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/includes.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/includes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__(/*! ./isString */ "./node_modules/lodash/isString.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js"),
    values = __webpack_require__(/*! ./values */ "./node_modules/lodash/values.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/setWith.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/setWith.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js");

/**
 * This method is like `_.set` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {};
 *
 * _.setWith(object, '[0][1]', 'a', Object);
 * // => { '0': { '1': 'a' } }
 */
function setWith(object, path, value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return object == null ? object : baseSet(object, path, value, customizer);
}

module.exports = setWith;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/values.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/values.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(/*! ./_baseValues */ "./node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "./src/assets/js/Common.js":
/*!*********************************!*\
  !*** ./src/assets/js/Common.js ***!
  \*********************************/
/*! exports provided: common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "common", function() { return common; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datasets_global_terms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasets/global-terms */ "./src/assets/js/datasets/global-terms.js");



class Common {
    constructor() {
        this.formatter = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        });
    }

    formatNumber(value) {
        // If the number is zero, avoid showing "(0.0)" due to rounding errors.
        if (common.isDeltaZero(value)) {
            value = 0;
        }

        if (value < 0) {
            value = '(' + common.formatter.format(-value) + ')';
        } else {
            value = common.formatter.format(value);
        }

        return value;
    }

    formatPercent(value) {
        return this.formatNumber(value * 100) + ' %';
    }

    parseScale(scale) {
        if (!scale) {
            scale = 1;
        }

        if (typeof scale === 'string' && parseInt(scale) === 0) {
            scale = '1' + scale;
        }

        scale = parseInt(scale);

        return scale;
    }

    parseInverse(inverse) {
        if (inverse === 'No' || inverse === undefined || inverse === '') {
            inverse = 1;
        } else if (inverse === 'Yes') {
            inverse = -1;
        }

        return inverse;
    }

    getUniqueValues(data, property) {
        let names = {};
        let a = [];

        // Get all possible names.
        for (let i = 0; i < data.length; i++) {
            if (property in data[i] && data[i][property]) {
                names[data[i][property]] = true;
            }
        }

        // Convert to array.
        for (let j in names) {
            a.push(j);
        }

        return a;
    }

    getSlugFromName(name) {
        // Replace non-alphanumeric with underline.
        name = name.replace(/[^A-Za-z0-9]/g, '_');

        // Replace successive underlines with a single underline.
        name = name.replace(/[_]+/g, '_');

        // Lower case everything.
        name = name.toLowerCase();

        return name;
    }

    // https://stackoverflow.com/a/13542669
    shadeColor2(color, percent) {
        let f = parseInt(color.slice(1), 16),
            t = percent < 0 ? 0 : 255,
            p = percent < 0 ? percent * -1 : percent,
            R = f >> 16,
            G = (f >> 8) & 0x00ff,
            B = f & 0x0000ff;
        return (
            '#' +
            (
                0x1000000 +
                (Math.round((t - R) * p) + R) * 0x10000 +
                (Math.round((t - G) * p) + G) * 0x100 +
                (Math.round((t - B) * p) + B)
            )
                .toString(16)
                .slice(1)
        );
    }

    // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    getNextUuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    getGlobalTerms() {
        let globalTermsValues = [];

        _datasets_global_terms__WEBPACK_IMPORTED_MODULE_1__["globalTerms"].map(term => {
            globalTermsValues.push(term.name);
        });

        return globalTermsValues;
    }

    getGlobalTermsDictionaries() {
        let dictionaries = [];

        _datasets_global_terms__WEBPACK_IMPORTED_MODULE_1__["globalTerms"].map(term => {
            dictionaries = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])(dictionaries, term.dictionaries);
        });

        return dictionaries;
    }

    getGlobalTermsByDictionary(dictionary) {
        let globalTermsValues = [];

        _datasets_global_terms__WEBPACK_IMPORTED_MODULE_1__["globalTerms"].map(term => {
            if ($.inArray(dictionary, term.dictionaries) !== -1) {
                globalTermsValues.push(term.name);
            }
        });

        return globalTermsValues;
    }

    async showFakeLoading(callback) {
        await this.showLoading();

        setTimeout(() => {
            if (callback) {
                callback();
            }
            this.hideLoading();
        }, Object(lodash__WEBPACK_IMPORTED_MODULE_0__["random"])(250, 500));
    }

    async showLoading() {
        $('._show-loading').css('display', 'block');

        // Wait 50ms, otherwise the UI won't render and the user won't see any loading screen while other heavy code is running.
        await this.wait(50);
    }

    hideLoading() {
        $('._show-loading').css('display', 'none');
    }

    areIdentical(a, b) {
        if (a === b) {
            return true;
        }

        const fa = parseFloat(a);
        const fb = parseFloat(b);
        if (!Number.isNaN(fa) && !Number.isNaN(fb) && this.isDeltaZero(fa - fb)) {
            return true;
        }

        return false;
    }

    isDeltaZero(delta) {
        return Math.abs(delta) < 0.00000001;
    }

    // https://www.grapecity.com/en/forums/wijmo/want-to-add-wijmo-5-input-_1
    // http://jsfiddle.net/ezk43f9d/102/
    createDatePickerEditor(editColumn) {
        const grid = editColumn.grid;
        grid.formatItem.addHandler(function(s, e) {
            const editRange = grid.editRange,
                column = e.panel.columns[e.col];

            // check whether this is an editing cell of the wanted column
            if (
                !(
                    e.panel.cellType === wijmo.grid.CellType.Cell &&
                    column === editColumn &&
                    editRange &&
                    editRange.row === e.row &&
                    editRange.col === e.col
                )
            ) {
                return;
            }

            // hide standard editor (don't remove!)
            if (e.cell.firstChild) {
                e.cell.firstChild.style.display = 'none';
            }

            // add custom InputNumber editor
            const editorRoot = document.createElement('div'),
                inputDate = new wijmo.input.InputDate(editorRoot, {
                    format: 'yyyy-MM-dd'
                });

            // inputDate.format = editColumn.format;
            e.cell.appendChild(editorRoot);
            const value = grid.getCellData(e.row, e.col, false);
            if (typeof value === 'string' && value) {
                inputDate.value = value;
            }

            const editEnding1 = (s, e) => {
                if (!e.cancel) {
                    // Update editor value.
                    const value = common.dateToString(inputDate.value);
                    s.activeEditor.value = value;
                }
            };

            const editEnding2 = (s, e) => {
                if (!e.cancel) {
                    // We use "_.set" because the binding can be something like "dataStructures.timeIntervalBegin".
                    // const value = s.activeEditor.value;
                    // set(s.rows[e.row].dataItem, column.binding, value);
                }

                // Remove events. We use a second event that fires only after all other events, otherwise => bugs.
                grid.cellEditEnding.removeHandler(editEnding1);
                grid.cellEditEnding.removeHandler(editEnding2);

                inputDate.dispose();
            };

            // Add handlers as first and last events. Order is important.
            const handlers = grid.cellEditEnding._handlers.slice(0);
            grid.cellEditEnding.removeAllHandlers();
            grid.cellEditEnding.addHandler(editEnding1);
            handlers.forEach(handler => {
                grid.cellEditEnding.addHandler(handler.handler);
            });
            grid.cellEditEnding.addHandler(editEnding2);
        });
    }

    checkIfCellHasChanged(oldVal, newVal, dataType) {
        // Check if value has been changed.
        if (dataType === wijmo.DataType.Date) {
            const oldValString = common.dateToString(oldVal);
            if (oldValString === newVal) {
                return true;
            }
        } else if ((typeof oldVal === 'string' && oldVal === newVal) || common.isDeltaZero(oldVal - newVal)) {
            return true;
        }

        return false;
    }

    removeTimeZoneFromDate(s) {
        return common.stringToDate(common.dateToString(s));
    }

    stringToDate(s) {
        if (typeof s === 'string') {
            // Create moment object without timezone.
            s = s.split('-');
            const m = moment.utc({
                year: s[0],
                month: s[1] - 1,
                day: s[2]
            });

            // Convert to date object.
            return m.toDate();
        }

        return s;
    }

    dateToString(s) {
        if (typeof s === 'object') {
            // Get date with timezone.
            const m1 = moment(s);

            // Recreate date without timezone.
            const m2 = moment.utc({
                year: m1.year(),
                month: m1.month(),
                day: m1.date()
            });

            return m2.format('YYYY-MM-DD');
        }

        return s;
    }

    // This is something that Wijmo should have out-of-the-box.
    setSelectedValue(wijmoComponent, selectedValue) {
        for (let i = 0; i < wijmoComponent.itemsSource.length; i++) {
            const item = wijmoComponent.itemsSource[i];

            if (item[wijmoComponent.selectedValuePath] === selectedValue) {
                wijmoComponent.selectedItem = item;
                return;
            }
        }

        wijmoComponent.selectedItem = null;
    }

    // https://stackoverflow.com/a/39027151/148388
    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

const common = new Common();


/***/ }),

/***/ "./src/assets/js/Constants.js":
/*!************************************!*\
  !*** ./src/assets/js/Constants.js ***!
  \************************************/
/*! exports provided: constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
class Constants {
    constructor() {
        // Colors
        this.COLOR_KPMG_BLUE = '#00338d';
        this.COLOR_MEDIUM_BLUE = '#005eb8';
        this.COLOR_LIGHT_BLUE = '#0091da';
        this.COLOR_VIOLET = '#483698';
        this.COLOR_PURPLE = '#470a68';
        this.COLOR_LIGHT_PURPLE = '#6d2077';
        this.COLOR_GREEN = '#00a3a1';
        this.COLOR_DARK_GREEN = '#009a44';
        this.COLOR_LIGHT_GREEN = '#43b02a';
        this.COLOR_YELLOW = '#eaaa00';
        this.COLOR_ORANGE = '#f68d2e';
        this.COLOR_RED = '#bc204b';
        this.COLOR_PINK = '#c6007e';
        this.COLOR_DARK_BROWN = '#753f19';
        this.COLOR_LIGHT_BROWN = '#9b642e';
        this.COLOR_OLIVE = '#9d9375';
        this.COLOR_BEIGE = '#e3bc9f';
        this.COLOR_LIGHT_PINK = '#e36877';

        // Misc
        this.CANNOT_EDIT_NORMALIZED_VALUE = 'You cannot edit the normalized value directly.';
        this.CANNOT_EDIT_VALUE = 'This data point was ingested from a file, therefore you cannot change its value.';
        this.CANNOT_SET_GROUP_IF_NO_PARENT = 'You need to set the parent before setting the group.';
        this.DIMENSION_SUFFIX_GROUP = '__group';
        this.DIMENSION_SUFFIX_PARENT = '__parent';
        this.FILE_WORKFLOW_CELL_PROGRESS_COLOR_BEGIN = '#ed2d2d';
        this.FILE_WORKFLOW_CELL_PROGRESS_COLOR_END = '#49CAAE';
    }

    getAllColors() {
        const colors = [];

        Object.getOwnPropertyNames(this).forEach((property) => {
            if (property.indexOf('COLOR_') === 0) {
                colors.push(this[property]);
            }
        });

        return colors;
    }

    getTextColorForBackground(backgroundColor) {
        // Use white text for dark backgrounds.
        // A minimum contrast of 4.5:1 is recommended to ensure that text is still readable against a background color.
        // http://www.w3.org/TR/WCAG20-TECHS/G18.html
        // http://gka.github.io/chroma.js/#chroma-contrast
        if (chroma.contrast('#111111', backgroundColor) < 4.5) {
            return '#eeeeee';
        }

        return '#111111';
    }
}

const constants = new Constants();

/***/ }),

/***/ "./src/assets/js/MultiLevelHashMap.js":
/*!********************************************!*\
  !*** ./src/assets/js/MultiLevelHashMap.js ***!
  \********************************************/
/*! exports provided: MultiLevelHashMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiLevelHashMap", function() { return MultiLevelHashMap; });
class MultiLevelHashMap {
    constructor(levels) {
        this.levels = levels;
        this.map = {};
    }

    set(keys, value) {
        let currentObject = this.map;
        keys.forEach((key, index) => {
            if (index < keys.length - 1) {
                if (!currentObject.hasOwnProperty(key)) {
                    currentObject[key] = {};
                }

                currentObject = currentObject[key];
            }
            else {
                currentObject[key] = value;
            }
        });
    }

    log() {
        console.log(this.map);
    }

    getUniqueGroups() {
        return this.getUniqueGroupsHelper(this.map, 1);
    }

    getUniqueGroupsHelper(map, level) {
        if (level !== this.levels) {
            let groups = [];

            for (let i in map) {
                let subMap = map[i];

                groups = groups.concat(this.getUniqueGroupsHelper(subMap, level + 1));
            }

            return groups;
        }

        return [map];
    }
}

/***/ }),

/***/ "./src/assets/js/ResizableDivider.js":
/*!*******************************************!*\
  !*** ./src/assets/js/ResizableDivider.js ***!
  \*******************************************/
/*! exports provided: resizableDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizableDivider", function() { return resizableDivider; });
class ResizableDivider {
    enableResizable(target, secondaryTarget, direction, handle, dimensions, callback) {
        let windowSize = 0;

        if (direction === 'height') {
            windowSize = $(window).height();
        } else {
            windowSize = $(window).width();
        }

        $(target).css(direction, windowSize / 2 + 'px');

        $(target).resizable(
            {
                classes: {
                    "ui-resizable": "allow-divider"
                }
            },
            handle,
            dimensions,
            "enable",
            {
                alsoResize: secondaryTarget
            },
            {
                stop: callback()
            }
        );
    }

    resetResizable(target, callback) {
        try {
            $(target).resizable("destroy");
            callback();
        }
        catch (e) {
        }
    }
}

const resizableDivider = new ResizableDivider();

/***/ }),

/***/ "./src/assets/js/Tab.js":
/*!******************************!*\
  !*** ./src/assets/js/Tab.js ***!
  \******************************/
/*! exports provided: Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _tabs_data_explorer_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/data-explorer/DataExplorerAnalyses */ "./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js");



class Tab {
    constructor() {
        this.isDirty = false;
        this.tabHref = null;
    }

    syncIfVisible(onlyIfDirty) {
        if (onlyIfDirty && !this.isDirty) {
            return;
        }
        let currentTab = _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].getCurrentTab();

        // If this tab is not visible, postpone syncing it.
        if (currentTab !== this.tabHref) {
            this.isDirty = true;
            if (_services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].getCurrentTab() !== '#output_table') {
                _tabs_data_explorer_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_1__["dataExplorerAnalyses"].backToList();
            }
        }
        // Sync now.
        else {
            console.log('Sync Tab "' + this.tabHref + '"');
            this.isDirty = false;
            this.sync();
        }
    }

    sync() {}
}


/***/ }),

/***/ "./src/assets/js/datasets/filter-template-1.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/datasets/filter-template-1.js ***!
  \*****************************************************/
/*! exports provided: filterTemplate1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTemplate1", function() { return filterTemplate1; });
const filterTemplate1 =
    {
        title: 'Awesome Template 1',
        rows: [
            {
                name: 'row 1',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Revenue'
                    }
                ],
                in_chart: true
            },
            {
                name: 'row 2',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Cost of sales'
                    },
                    {
                        dimension: 'time',
                        value: '2015 GT'
                    }
                ],
                in_chart: true
            },
            {
                name: 'blank row',
                type: 'blank'
            },
            {
                name: 'row 3',
                filters: [
                    {
                        dimension: 'time',
                        value: '2015'
                    },
                    {
                        dimension: 'attribute',
                        value: 'Cost of sales'
                    }
                ],
                in_chart: true
            },
            {
                name: 'row 4',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Gross Profit'
                    }
                ],
                in_chart: true
            },
            {
                name: 'New Margin example',
                type: 'margin',
                year1: 'Cost of sales',
                year2: 'Revenue',
                in_chart: true
            },
            {
                name: 'New Formula example',
                type: 'formula',
                formula: 'AVERAGE(25,36)',
                in_chart: true
            },
            {
                name: 'New Formula example 2',
                type: 'formula',
                formula: 'MAX(R1,R2)',
            }
        ],
        columns: [
            {
                name: 'col 1',
                filters: [
                    {
                        dimension: 'time',
                        value: '2003 GT'
                    }
                ],
                in_chart: true
            },
            {
                name: 'col 2',
                filters: [
                    {
                        dimension: 'time',
                        value: '2015 GT'
                    },
                    {
                        dimension: 'quality',
                        value: 'Reported'
                    }
                ],
                in_chart: true
            },
            {
                name: 'blank col',
                type: 'blank',
            },
            {
                name: 'YoY example',
                type: 'yoy',
                year1: '2015 GT',
                year2: '2016 GT',
            },
            {
                name: 'CAGR example',
                type: 'cagr',
                year1: '2015 GT',
                year2: '2016 GT',
                in_chart: true
            },
            {
                name: 'Delta example',
                type: 'delta',
                year1: '2015 GT',
                year2: '2016 GT'
            },
            {
                name: 'Custom formula example',
                type: 'formula',
                formula: 'SUM(C2,C5)',
                in_chart: true
            }
        ],
        globals_headline: [
            {
                name: 'g1',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Actual'
                    }
                ]
            },
            {
                name: 'g2',
                filters: [
                    {
                        dimension: 'time',
                        value: '2016 GT'
                    }
                ]
            }
        ],
        globals_a1: [
            {
                name: 'g3',
                filters: [
                    {
                        dimension: 'time',
                        value: '2015 GT'
                    }
                ]
            },
            {
                name: 'g4',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Budget'
                    }
                ]

            }
        ],
        globals_hidden: [
            {
                name: 'g5',
                filters: [
                    {
                        dimension: 'unit',
                        value: 'EUR'
                    }
                ]
            }
        ],
        chart_options: [
            {
                _chartStackingMode: 'percent',
                _chartMode: 'line'
            }
        ]
    }
;

/***/ }),

/***/ "./src/assets/js/datasets/filter-template-2.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/datasets/filter-template-2.js ***!
  \*****************************************************/
/*! exports provided: filterTemplate2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTemplate2", function() { return filterTemplate2; });
const filterTemplate2 =
    {
        title: 'Awesome Template 2',
        rows: [
            {
                name: 'row 1',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'ebitda GT'
                    }
                ],
                in_chart: true
            },

            {
                name: 'row 2',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Cost of sales'
                    },
                    {
                        dimension: 'time',
                        value: '2016 GT'
                    }
                ]
            },

            {
                name: 'row 3',
                filters: [
                    {
                        dimension: 'time',
                        value: '2015'
                    },
                    {
                        dimension: 'attribute',
                        value: 'Cost of sales'
                    }
                ]
            },

            {
                name: 'row 4',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Gross Profit'
                    }
                ]
            }
        ],
        columns: [
            {
                name: 'col 1',
                filters: [
                    {
                        dimension: 'time',
                        value: '2003 GT'
                    }
                ],
                in_chart: true
            },
            {
                name: 'col 2',
                filters: [
                    {
                        dimension: 'time',
                        value: '2015 GT'
                    },
                    {
                        dimension: 'quality',
                        value: 'Reported'
                    }
                ]
            }
        ],
        globals_headline: [
            {
                name: 'g1',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Actual'
                    }
                ]
            },
            {
                name: 'g2',
                filters: [
                    {
                        dimension: 'time',
                        value: '2016 GT'
                    }
                ]
            }
        ],
        globals_a1: [
            {
                name: 'g3',
                filters: [
                    {
                        dimension: 'time',
                        value: '2015'
                    }
                ]
            },
            {
                name: 'g4',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Budget'
                    }
                ]

            }
        ],
        globals_hidden: [
            {
                name: 'g5',
                filters: [
                    {
                        dimension: 'unit',
                        value: 'EUR'
                    }
                ]
            }
        ],
        chart_options: [
            {
                _chartStackingMode: 'stacked',
                _chartMode: 'area'
            }
        ]
    };

/***/ }),

/***/ "./src/assets/js/datasets/filter-template-3.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/datasets/filter-template-3.js ***!
  \*****************************************************/
/*! exports provided: filterTemplate3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTemplate3", function() { return filterTemplate3; });
const filterTemplate3 =
    {
        title: 'Awesome Template 3',
        rows: [
            {
                name: 'row 1',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Revenue'
                    }
                ]
            },

            {
                name: 'row 2',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Cost of sales'
                    },
                    {
                        dimension: 'time',
                        value: '2015 GT'
                    }
                ]
            },

            {
                name: 'row 3',
                filters: [
                    {
                        dimension: 'time',
                        value: '2015'
                    },
                    {
                        dimension: 'attribute',
                        value: 'Cost of sales'
                    }
                ]
            },

            {
                name: 'row 4',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Gross Profit'
                    }
                ]
            }
        ],
        columns: [
            {
                name: 'col 1',
                filters: [
                    {
                        dimension: 'time',
                        value: '2003 GT'
                    }
                ]
            },
            {
                name: 'col 2',
                filters: [
                    {
                        dimension: 'time',
                        value: '2015 GT'
                    },
                    {
                        dimension: 'quality',
                        value: 'Reported'
                    }
                ]
            }
        ],
        globals_headline: [
            {
                name: 'g1',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Actual'
                    }
                ]
            },
            {
                name: 'g2',
                filters: [
                    {
                        dimension: 'time',
                        value: '2016'
                    }
                ]
            }
        ],
        globals_a1: [
            {
                name: 'g3',
                filters: [
                    {
                        dimension: 'time',
                        value: '2015'
                    }
                ]
            },
            {
                name: 'g4',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Budget'
                    }
                ]

            }
        ],
        globals_hidden: [
            {
                name: 'g5',
                filters: [
                    {
                        dimension: 'unit',
                        value: 'EUR'
                    }
                ]
            }
        ],
        chart_options: [
            {
                _chartStackingMode: 'normal',
                _chartMode: 'pie'
            }
        ]
    };

/***/ }),

/***/ "./src/assets/js/datasets/filter-template-4.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/datasets/filter-template-4.js ***!
  \*****************************************************/
/*! exports provided: filterTemplate4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTemplate4", function() { return filterTemplate4; });
const filterTemplate4 =
    {
        title: 'Awesome Template 2',
        rows: [
            {
                name: 'row 1',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Revenue'
                    },
                ]
            },
            {
                name: 'row 2',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Cost of Sales'
                    }
                ]
            },
            {
                name: 'row 3',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Gross Profit'
                    },
                ],
                in_chart: true
            },
            {
                name: 'row 4',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Other Income'
                    }
                ]
            },
            {
                name: 'row 5',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Selling and Distribution Expenses'
                    }
                ]
            },
            {
                name: 'row 6',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Administrative Expenses'
                    }
                ]
            },
            {
                name: 'row 7',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'R&D Expenses'
                    }
                ]
            },
            {
                name: 'row 8',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Other Expenses'
                    }
                ]
            },
            {
                name: 'row 9',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'EBITDA'
                    }
                ],
                in_chart: true
            },
            {
                name: 'row 10',
                filters: [
                    {
                        dimension: 'attribute',
                        value: 'Margin'
                    }
                ],
                in_chart: true
            },
            {
                name: 'YoY example',
                type: 'yoy',
                year1: '2016 GT',
                year2: '2017 GT',
            },
            {
                name: 'YoY example',
                type: 'yoy',
                year1: '2017 GT',
                year2: '2018 GT',
            }
        ],
        columns: [
            {
                name: 'col 1',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Actual'
                    },
                    {
                        dimension: 'time',
                        value: '2016 GT'
                    }
                ],
                in_chart: true
            },
            {
                name: 'col 2',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Actual'
                    },
                    {
                        dimension: 'time',
                        value: '2017 GT'
                    }
                ],
                in_chart: true
            },
            {
                name: 'col 3',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Actual'
                    },
                    {
                        dimension: 'time',
                        value: '2017 GT'
                    }
                ],
                in_chart: true
            },
            {
                name: 'YoY example',
                type: 'yoy',
                year1: '2016 GT',
                year2: '2017 GT',
            },
            {
                name: 'YoY example',
                type: 'yoy',
                year1: '2017 GT',
                year2: '2018 GT',
            }
        ],
        globals_headline: [
            {
                name: 'g1',
                filters: [
                    {
                        dimension: 'layer',
                        value: 'Historical Profit'
                    }
                ]
            },
            {
                name: 'g2',
                filters: [
                    {
                        dimension: 'time',
                        value: 'Loss'
                    }
                ]
            }
        ],
        globals_a1: [
            {
                name: 'g3',
                filters: [
                    {
                        dimension: 'unit',
                        value: 'EUR'
                    }
                ]
            },
            {
                name: 'g4',
                filters: [
                    {
                        dimension: 'scale',
                        value: 'Million'
                    }
                ]

            }
        ],
        globals_hidden: [
        ],
        chart_options: [
            {
                _chartStackingMode: 'stacked',
                _chartMode: 'area'
            }
        ]
    };

/***/ }),

/***/ "./src/assets/js/datasets/filter-template-5.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/datasets/filter-template-5.js ***!
  \*****************************************************/
/*! exports provided: filterTemplate5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTemplate5", function() { return filterTemplate5; });
const filterTemplate5 =
    {
        title: 'Reset (empty) Template',
        rows: [],
        columns: [],
        globals_headline: [],
        globals_a1: [],
        globals_hidden: [],
        chart_options: [
            {
                _chartStackingMode: 'stacked',
                _chartMode: 'area'
            }
        ]
    };

/***/ }),

/***/ "./src/assets/js/datasets/global-terms.js":
/*!************************************************!*\
  !*** ./src/assets/js/datasets/global-terms.js ***!
  \************************************************/
/*! exports provided: globalTerms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalTerms", function() { return globalTerms; });
const globalTerms = [
    {
        name: 'Revenue',
        dictionaries: ['V1']
    },
    {
        name: 'Cost of sales',
        dictionaries: ['V1']
    },
    {
        name: 'Gross profit',
        dictionaries: ['V1']
    },
    {
        name: 'Other income',
        dictionaries: ['V1']
    },
    {
        name: 'Selling and distribution expenses',
        dictionaries: ['V1']
    },
    {
        name: 'Administrative expenses',
        dictionaries: ['V1']
    },
    {
        name: 'Research and development expenses',
        dictionaries: ['V1']
    },
    {
        name: 'Results from operating activities',
        dictionaries: ['V1']
    },
    {
        name: 'Finance income',
        dictionaries: ['V1']
    },
    {
        name: 'Finance costs',
        dictionaries: ['V1']
    },
    {
        name: 'Net finance costs',
        dictionaries: ['V1']
    },
    {
        name: 'Share of profit of equity-accounted investees, ner of tax',
        dictionaries: ['V1']
    },
    {
        name: 'Profit before tax',
        dictionaries: ['V1']
    },
    {
        name: 'Tax expense',
        dictionaries: ['V1']
    },
    {
        name: 'Profit from continuing operations',
        dictionaries: ['V1']
    },
    {
        name: 'Net sales',
        dictionaries: ['PL']
    },
    {
        name: 'Material expenses',
        dictionaries: ['PL']
    },
    {
        name: 'Gross profit',
        dictionaries: ['PL']
    },
    {
        name: 'Personnel expenses',
        dictionaries: ['PL']
    },
    {
        name: 'Other operating income',
        dictionaries: ['PL']
    },
    {
        name: 'Other operating expenses',
        dictionaries: ['PL']
    },
    {
        name: 'EBITDA',
        dictionaries: ['PL']
    },
    {
        name: 'Depreciation/amort.',
        dictionaries: ['PL']
    },
    {
        name: 'EBIT',
        dictionaries: ['PL']
    },
    {
        name: 'Interest income',
        dictionaries: ['PL']
    },
    {
        name: 'Interest expenses',
        dictionaries: ['PL']
    },
    {
        name: 'EBT',
        dictionaries: ['PL']
    },

    {
        name: 'Taxes',
        dictionaries: ['PL']
    },
    {
        name: 'Net profit',
        dictionaries: ['PL']
    },
    {
        name: 'Intangible assets',
        dictionaries: ['BS']
    },
    {
        name: 'PPE',
        dictionaries: ['BS']
    },
    {
        name: 'Inventories',
        dictionaries: ['BS']
    },
    {
        name: 'Trade receiveables',
        dictionaries: ['BS']
    },
    {
        name: 'Trade payables',
        dictionaries: ['BS']
    },
    {
        name: 'Others assets',
        dictionaries: ['BS']
    },
    {
        name: 'Other liabilities',
        dictionaries: ['BS']
    },
    {
        name: 'Provisions',
        dictionaries: ['BS']
    },
    {
        name: 'Cash',
        dictionaries: ['BS']
    },
    {
        name: 'Shareholder loan',
        dictionaries: ['BS']
    },
    {
        name: 'Net Debt 1',
        dictionaries: ['BS']
    },
    {
        name: 'Net Debt 2',
        dictionaries: ['BS']
    },
    {
        name: 'Net Debt 3',
        dictionaries: ['BS']
    }
];

/***/ }),

/***/ "./src/assets/js/entities/DataExplorerAnalysis.js":
/*!********************************************************!*\
  !*** ./src/assets/js/entities/DataExplorerAnalysis.js ***!
  \********************************************************/
/*! exports provided: DataExplorerAnalysis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataExplorerAnalysis", function() { return DataExplorerAnalysis; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DataExplorerCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataExplorerCard */ "./src/assets/js/entities/DataExplorerCard.js");
/* harmony import */ var _DataExplorerCellData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataExplorerCellData */ "./src/assets/js/entities/DataExplorerCellData.js");




class DataExplorerAnalysis {
    constructor(dataExplorerAnalysis) {
        this.id = '';
        this.name = '';
        this.dropboxFiles = [];

        // Global filter cards
        this.globalFilters = [];

        /**
         * Column cards
         * @type {DataExplorerCard[]}
         */
        this.columns = [];

        /**
         * Row cards
         * @type {DataExplorerCard[]}
         */
        this.rows = [];

        // Scale used in analysis
        this.scale = 1000;

        /**
         * Data for each individual cell.
         * @type {DataExplorerCellData[][]}
         */
        this.cellData = {};

        this.tableRowToCardNo = {};

        this.tableRowToPath = {};

        this.tableColumnToCardNo = {};

        this.tableRowLevel = {};

        this.tableColumnLevel = {};

        // Initialize from simple object.
        if (dataExplorerAnalysis) {
            Object.assign(this, dataExplorerAnalysis);

            this.columns = this.columns.map(column => {
                return new _DataExplorerCard__WEBPACK_IMPORTED_MODULE_1__["DataExplorerCard"](column);
            });

            this.rows = this.rows.map(row => {
                return new _DataExplorerCard__WEBPACK_IMPORTED_MODULE_1__["DataExplorerCard"](row);
            });
        }
    }

    /**
     * @param row {number}
     * @param column {number}
     * @return {DataExplorerCellData}
     * */
    getCellData(row, column) {
        let cellData = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.cellData, `[${row}][${column}`);

        if (!cellData) {
            cellData = new _DataExplorerCellData__WEBPACK_IMPORTED_MODULE_2__["DataExplorerCellData"]();
        }

        return cellData;
    }

    /**
     * @param row {number}
     * @param column {number}
     * @param cellData {DataExplorerCellData}
     */
    setCellData(row, column, cellData) {
        const oldCellData = this.getCellData(row, column);

        // Be sure to make these objects, not arrays.
        if (!this.cellData[row]) {
            this.cellData[row] = {};
        }

        if (!this.cellData[column]) {
            this.cellData[column] = {};
        }

        if (cellData.customFormula === null && oldCellData.customFormula) {
            cellData.customFormula = oldCellData.customFormula;
        }

        Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(this.cellData, `[${row}][${column}]`, cellData);
    }
}


/***/ }),

/***/ "./src/assets/js/entities/DataExplorerCard.js":
/*!****************************************************!*\
  !*** ./src/assets/js/entities/DataExplorerCard.js ***!
  \****************************************************/
/*! exports provided: DataExplorerCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataExplorerCard", function() { return DataExplorerCard; });
/* harmony import */ var _DataExplorerDrillDownStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataExplorerDrillDownStatus */ "./src/assets/js/entities/DataExplorerDrillDownStatus.js");


class DataExplorerCard {
    constructor(card) {
        this.sectionType = null;

        this.title = '';

        /**
         * Filters indexed by dimension. E.g. {attribute: ['Net Revenue'], time: ['2015', '2016']}.
         * @type {{}}
         */
        this.filters = {};

        this.dataValue = '';

        this.year1 = '';

        this.year2 = '';

        /** @type {DataExplorerDrillDownStatus} */
        this.drillDownStatus = new _DataExplorerDrillDownStatus__WEBPACK_IMPORTED_MODULE_0__["DataExplorerDrillDownStatus"]();

        if (card) {
            Object.assign(this, card);

            if (this.drillDownStatus) {
                this.drillDownStatus = new _DataExplorerDrillDownStatus__WEBPACK_IMPORTED_MODULE_0__["DataExplorerDrillDownStatus"](this.drillDownStatus);
            }
        }
    }

    /**
     * Get the DrillDownStatus object corresponding to the given path. An empty path (i.e. []) will return this.drillDownStatus.
     * @param {array} path
     * @returns {DataExplorerDrillDownStatus}
     */
    getDrillDownStatusByPath(path) {
        let status = this.drillDownStatus;

        path.forEach(part => {
            status = status.childStatuses[part];
        });

        return status;
    }
}


/***/ }),

/***/ "./src/assets/js/entities/DataExplorerCellData.js":
/*!********************************************************!*\
  !*** ./src/assets/js/entities/DataExplorerCellData.js ***!
  \********************************************************/
/*! exports provided: DataExplorerCellData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataExplorerCellData", function() { return DataExplorerCellData; });
class DataExplorerCellData {
    constructor() {
        // The row-level or column-level formula that was used, if any.
        this.formula = null;
    }
}


/***/ }),

/***/ "./src/assets/js/entities/DataExplorerDrillDownStatus.js":
/*!***************************************************************!*\
  !*** ./src/assets/js/entities/DataExplorerDrillDownStatus.js ***!
  \***************************************************************/
/*! exports provided: DataExplorerDrillDownStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataExplorerDrillDownStatus", function() { return DataExplorerDrillDownStatus; });
class DataExplorerDrillDownStatus {
    constructor(drillDownStatus) {
        /**
         * Filters indexed by dimension. E.g. {attribute: ['Net Revenue'], time: ['2015', '2016']}.
         * @type {{}}
         */
        this.filters = {};

        // Is this drillable? I.e. Should we display a plus sign next to it?
        this.expandable = false;

        // Is this expanded/open or collapsed/closed?
        this.expanded = false;

        // Which dimension are we drilling down to? E.g. If we double-click "Net Revenue" to split it into countries, this.dimension would be equal to "country".
        this.dimension = '';

        /**
         * A list of child statuses, indexed by value. E.g. The "Net Revenue" child status will be indexed by "Net Revenue".
         *
         * @type {DataExplorerDrillDownStatus[]}
         **/
        this.childStatuses = {};

        if (drillDownStatus) {
            Object.assign(this, drillDownStatus);

            for (const dimension in this.childStatuses) {
                this.childStatuses[dimension] = new DataExplorerDrillDownStatus(this.childStatuses[dimension]);
            }
        }
    }
}


/***/ }),

/***/ "./src/assets/js/entities/DataStructure.js":
/*!*************************************************!*\
  !*** ./src/assets/js/entities/DataStructure.js ***!
  \*************************************************/
/*! exports provided: DataStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStructure", function() { return DataStructure; });
class DataStructure {
    constructor(object) {
        this.attribute = '';
        this.parentAttribute = '';
        this.group = '';
        this.globalTerm = '';
        this.timeIntervalBegin = '';
        this.timeIntervalEnd = '';
        this.changed = false;

        if (object) {
            Object.assign(this, object);
        }
    }
}

/***/ }),

/***/ "./src/assets/js/entities/Dimension.js":
/*!*********************************************!*\
  !*** ./src/assets/js/entities/Dimension.js ***!
  \*********************************************/
/*! exports provided: Dimension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dimension", function() { return Dimension; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants */ "./src/assets/js/Constants.js");
/* harmony import */ var _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/DimensionTypesService */ "./src/assets/js/services/DimensionTypesService.js");



class Dimension {
    constructor(object) {
        this.slug = '';
        this.label = '';
        this.hasDataStructures = false;
        this.hasGlobalTerms = false;
        this.usedAsIdentifier = true;
        this.hasTimeIntervals = false;
        this.special = false;
        this.dataType = _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_1__["dimensionTypesService"].STRING;
        this.isVisible = true;
        this.dictionaries = [];

        if (object) {
            Object.assign(this, object);
        }
    }

    getParentSlug() {
        return this.slug + _Constants__WEBPACK_IMPORTED_MODULE_0__["constants"].DIMENSION_SUFFIX_PARENT;
    }

    getGroupSlug() {
        return this.slug + _Constants__WEBPACK_IMPORTED_MODULE_0__["constants"].DIMENSION_SUFFIX_GROUP;
    }

    getGlobalTermSlug() {
        return this.slug + '__global_term';
    }

    getTimeIntervalBeginSlug() {
        return this.slug + '__time_interval_begin';
    }

    getTimeIntervalEndSlug() {
        return this.slug + '__time_interval_end';
    }

    getDictionaries() {
        return this.dictionaries;
    }
}


/***/ }),

/***/ "./src/assets/js/entities/Project.js":
/*!*******************************************!*\
  !*** ./src/assets/js/entities/Project.js ***!
  \*******************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants */ "./src/assets/js/Constants.js");
/* harmony import */ var _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DimensionTypesService */ "./src/assets/js/services/DimensionTypesService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorerAnalysis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataExplorerAnalysis */ "./src/assets/js/entities/DataExplorerAnalysis.js");
/* harmony import */ var _DataStructure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataStructure */ "./src/assets/js/entities/DataStructure.js");
/* harmony import */ var _Dimension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dimension */ "./src/assets/js/entities/Dimension.js");
/* harmony import */ var _SourceFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SourceFile */ "./src/assets/js/entities/SourceFile.js");









class Project {
    constructor(project) {
        this.name = '';

        this.dataPoints = [];

        /** @type {SourceFile[]} */
        this.sourceFiles = {};

        /** @type {DataStructure[][]} */
        this.dataStructuresPerDimension = {};

        /** @type {Dimension[]} */
        this.dimensions = [];

        /** @type {DataExplorerAnalysis[]} */
        this.analyses = [
            new _DataExplorerAnalysis__WEBPACK_IMPORTED_MODULE_4__["DataExplorerAnalysis"]({
                id: 0,
                name: 'Example Analysis'
            })
        ];

        this.calculateDeltaByAddingChildren = false;

        // Initialize from simple object.
        if (project) {
            Object.assign(this, project);

            for (const uuid in this.sourceFiles) {
                this.sourceFiles[uuid] = new _SourceFile__WEBPACK_IMPORTED_MODULE_7__["SourceFile"](this.sourceFiles[uuid]);
            }

            this.dimensions = this.dimensions.map(dimension => {
                return new _Dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"](dimension);
            });

            for (const dimension in this.dataStructuresPerDimension) {
                const dataStructures = this.dataStructuresPerDimension[dimension];
                for (const value in dataStructures) {
                    dataStructures[value] = new _DataStructure__WEBPACK_IMPORTED_MODULE_5__["DataStructure"](dataStructures[value]);
                }
            }

            this.analyses = this.analyses.map(analysis => {
                return new _DataExplorerAnalysis__WEBPACK_IMPORTED_MODULE_4__["DataExplorerAnalysis"](analysis);
            });
        }

        // Default dimensions
        if (this.dimensions.length === 0) {
            this.dimensions = [
                new _Dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"]({
                    slug: 'value',
                    label: 'Value',
                    dataType: _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_2__["dimensionTypesService"].NUMBER,
                    special: true
                }),
                new _Dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"]({
                    slug: 'attribute',
                    label: 'Attribute',
                    hasDataStructures: true,
                    hasGlobalTerms: true,
                    usedAsIdentifier: true
                }),
                new _Dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"]({
                    slug: 'legal_entity',
                    label: 'Legal Entity',
                    usedAsIdentifier: true
                }),
                new _Dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"]({
                    slug: 'time',
                    label: 'Time',
                    usedAsIdentifier: true
                }),
                new _Dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"]({
                    slug: 'layer',
                    label: 'Layer',
                    usedAsIdentifier: true
                }),
                new _Dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"]({
                    slug: 'quality',
                    label: 'Quality',
                    usedAsIdentifier: true
                }),
                new _Dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"]({
                    slug: 'unit',
                    label: 'Unit',
                    usedAsIdentifier: true
                }),
                new _Dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"]({
                    slug: 'scale',
                    label: 'Scale',
                    dataType: _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_2__["dimensionTypesService"].NUMBER,
                    special: true
                }),
                new _Dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"]({
                    slug: 'inverse',
                    label: 'Inverse',
                    special: true
                })
            ];
        }
    }

    addDataPointsWithFile(dataPoints, fileName) {
        // Create source file or set as manual.
        let uuid = '';
        if (fileName) {
            const sourceFile = new _SourceFile__WEBPACK_IMPORTED_MODULE_7__["SourceFile"]();
            sourceFile.name = fileName;
            sourceFile.hidden = true;
            uuid = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].getNextUuid();
            sourceFile.uuid = uuid;
            this.sourceFiles[uuid] = sourceFile;
        } else {
            uuid = 'manual';
        }

        // Add data points.
        dataPoints = dataPoints.map(item => {
            item.id = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].getNextUuid();
            item.source = uuid;

            // Fix time.
            if (typeof item.time !== 'undefined') {
                item.time = String(item.time);
            }

            return item;
        });
        this.dataPoints = this.dataPoints.concat(dataPoints);
    }

    /**
     * Validate a data point before adding/saving it.
     */
    validateDataPoint(dataPoint, modifiedFromAnalysis = false) {
        // Validate fields.
        if ((!dataPoint.value && dataPoint.value !== 0) || !dataPoint.attribute || !dataPoint.scale) {
            return {
                success: false,
                error: 'Value, Attribute, and Scale are required.'
            };
        }

        const dimensions = this.getDimensions();

        for (let propertyName in dataPoint) {
            if (dataPoint.hasOwnProperty(propertyName)) {
                if (dataPoint[propertyName] !== '') {
                    for (let i = 0; i < dimensions.length; i++) {
                        let currentDimension = dimensions[i];
                        let currentDimensionSlug = dimensions[i].slug;

                        if (propertyName === currentDimensionSlug) {
                            switch (currentDimension.dataType) {
                                case _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_2__["dimensionTypesService"].NUMBER:
                                    if (isNaN(dataPoint[propertyName])) {
                                        return {
                                            success: false,
                                            error: `"${dimensions[i].label}" field must be a number`
                                        };
                                    }
                                    continue;
                                case _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_2__["dimensionTypesService"].CURRENCY:
                                    if (/\d/.test(dataPoint[propertyName])) {
                                        return {
                                            success: false,
                                            error: `"${dimensions[i].label}" field must contain only letters`
                                        };
                                    }
                            }
                        }
                    }
                }
            }
        }

        // Check for duplicates.
        let matchingDataPoint = this.getMatchingDataPoint(dataPoint);
        if (matchingDataPoint && dataPoint.id !== matchingDataPoint.id) {
            return {
                success: false,
                error:
                    'This data point already exists (same dimensions and with a value of ' +
                    matchingDataPoint.value +
                    ').'
            };
        }

        // Check for source files.
        if (matchingDataPoint && !modifiedFromAnalysis) {
            dataPoint.source = matchingDataPoint.source;
        }
        if (
            !modifiedFromAnalysis &&
            matchingDataPoint &&
            dataPoint.source !== 'manual' &&
            !_Common__WEBPACK_IMPORTED_MODULE_0__["common"].isDeltaZero(dataPoint.value - matchingDataPoint.value)
        ) {
            return {
                success: false,
                error: _Constants__WEBPACK_IMPORTED_MODULE_1__["constants"].CANNOT_EDIT_VALUE
            };
        }

        return {
            success: true
        };
    }

    /**
     * If no ID is given, a new data-point will be created. Otherwise, the existing data-point will be updated.
     *
     * @param dataPoint
     * @param modifiedFromAnalysis
     * @returns {*} Returns an object with the following properties: success (bool), error (string), id (of data-point).
     */
    addDataPoint(dataPoint, modifiedFromAnalysis = false) {
        const validation = this.validateDataPoint(dataPoint, modifiedFromAnalysis);
        if (validation.success === false) {
            return validation;
        }

        // Parse scale.
        dataPoint.scale = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].parseScale(dataPoint.scale);

        // Save global stuff.
        const dimensions = this.getDimensions();
        dimensions.forEach(dimension => {
            const parentSlug = dimension.getParentSlug();
            const groupSlug = dimension.getGroupSlug();
            const globalTermSlug = dimension.getGlobalTermSlug();
            const timeIntervalBegin = dimension.getTimeIntervalBeginSlug();
            const timeIntervalEnd = dimension.getTimeIntervalEndSlug();

            // Auto-detect time intervals, if any.
            // TODO: Check project to ensure time intervals aren't already set.
            if (
                dimension.hasTimeIntervals &&
                dataPoint[dimension.slug] &&
                !dataPoint[timeIntervalBegin] &&
                !dataPoint[timeIntervalEnd]
            ) {
                // [4-digit-year]
                const justYear = /^[0-9]{4}$/i;
                // [3-character-month dash 2-digit-year]
                const monthYear = /^([a-zA-Z]{3})-([0-9]{2})$/i;
                // [3-character-month dash 4-digit-year]
                const monthFullYear = /^([a-zA-Z]{3})-([0-9]{4})$/i;

                const months = {
                    jan: '01',
                    feb: '02',
                    mar: '03',
                    apr: '04',
                    may: '05',
                    jun: '06',
                    jul: '07',
                    aug: '08',
                    sep: '09',
                    oct: '10',
                    nov: '11',
                    dec: '12'
                };

                if (justYear.test(dataPoint[dimension.slug])) {
                    dataPoint[timeIntervalBegin] = dataPoint[dimension.slug] + '-01-01';
                    dataPoint[timeIntervalEnd] = dataPoint[dimension.slug] + '-12-31';
                } else if (monthYear.test(dataPoint[dimension.slug])) {
                    const inputData = monthYear.exec(dataPoint[dimension.slug]);
                    inputData[1] = inputData[1].toLowerCase();
                    if (months.hasOwnProperty(inputData[1])) {
                        const month = months[inputData[1]];
                        const year = moment.parseTwoDigitYear(inputData[2]);

                        dataPoint[timeIntervalBegin] = year + '-' + month + '-01';
                        dataPoint[timeIntervalEnd] = moment(
                            new Date(year, parseInt(month.replace(/^0/, '')), 0)
                        ).format('YYYY-MM-DD');
                    }
                } else if (monthFullYear.test(dataPoint[dimension.slug])) {
                    const inputData = monthFullYear.exec(dataPoint[dimension.slug]);
                    inputData[1] = inputData[1].toLowerCase();

                    if (months.hasOwnProperty(inputData[1])) {
                        const month = months[inputData[1]];
                        const year = parseInt(inputData[2]);

                        dataPoint[timeIntervalBegin] = year + '-' + month + '-01';
                        dataPoint[timeIntervalEnd] = moment(
                            new Date(year, parseInt(month.replace(/^0/, '')), 0)
                        ).format('YYYY-MM-DD');
                    }
                }
            }

            this.addDataStructure(
                dimension.slug,
                dataPoint[dimension.slug],
                dataPoint[parentSlug],
                dataPoint[groupSlug],
                dataPoint[globalTermSlug],
                dataPoint[timeIntervalBegin],
                dataPoint[timeIntervalEnd]
            );

            delete dataPoint[parentSlug];
            delete dataPoint[groupSlug];
            delete dataPoint[globalTermSlug];
            delete dataPoint[timeIntervalBegin];
            delete dataPoint[timeIntervalEnd];
        });

        // Add data point.
        const dataPoints = this.dataPoints;
        if (dataPoint.id) {
            const key = this.getKeyForDataPointId(dataPoint.id);
            dataPoints[key] = dataPoint;
        } else {
            dataPoint.id = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].getNextUuid();
            dataPoints.unshift(dataPoint);
        }

        // Modify source file.
        {
            const uuid = dataPoint.source;
            const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].getCurrentProject();
            const file = project.sourceFiles[uuid];
            if (file) {
                file.dataPointsCopy.map(dp => {
                    if (dp.id === dataPoint.id) {
                        const cell = file.cellProperties[dp.col][dp.row];
                        Object.keys(dataPoint).forEach(function(key) {
                            cell[key] = dataPoint[key];
                        });

                        _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].saveCurrentProject();
                    }
                });
            }
        }

        return {
            success: true,
            id: dataPoint.id
        };
    }

    /**
     * Get dimension by slug.
     *
     * @param slug
     *
     * @returns Dimension
     */
    getDimensionBySlug(slug) {
        for (let i = 0; i < this.dimensions.length; i++) {
            const dimension = this.dimensions[i];

            if (dimension.slug === slug) {
                return dimension;
            }
        }

        return null;
    }

    /**
     * @returns {Dimension[]}
     */
    getDimensions(showAll) {
        if (!showAll) {
            return this.dimensions.filter(dimension => dimension.isVisible === true).slice();
        }
        return this.dimensions.slice();
    }

    /**
     * @returns {Dimension}
     */
    addDimension(slug, label) {
        // Check if slug is already used.
        const sameSlug = this.dimensions.filter(dimension => {
            return dimension.slug === slug;
        });
        if (sameSlug.length > 0) {
            return null;
        }

        // Add new dimension.
        const dimension = new _Dimension__WEBPACK_IMPORTED_MODULE_6__["Dimension"]({
            slug: slug,
            label: label
        });
        this.dimensions.push(dimension);

        return dimension;
    }

    /**
     * @returns {Dimension|null}
     */
    addDimensionWithPrompt() {
        let label = prompt('Enter the name of your custom dimension:');
        if (!label) {
            return null;
        }

        let slug = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].getSlugFromName(label);

        return this.addDimension(slug, label);
    }

    /**
     * @returns {Dimension[]}
     */
    getFieldsForDimensions() {
        let dimensions = this.getDimensions();

        dimensions = dimensions.reduce((a, dimension) => {
            a.push(dimension);
            if (dimension.hasDataStructures) {
                a.push({
                    slug: dimension.getParentSlug(),
                    label: dimension.label + ' (Parent)',
                    shortLabel: 'Parent',
                    child: true,
                    isParent: true,
                    attribute: dimension.slug
                });
                a.push({
                    slug: dimension.getGroupSlug(),
                    label: dimension.label + ' (Group)',
                    shortLabel: 'Group',
                    child: true,
                    isGroup: true,
                    attribute: dimension.slug
                });
            }

            if (dimension.hasGlobalTerms) {
                a.push({
                    slug: dimension.getGlobalTermSlug(),
                    label: dimension.label + ' (Global Term)',
                    shortLabel: 'Global Term',
                    child: true,
                    isGlobalTerm: true
                });
            }

            if (dimension.hasTimeIntervals) {
                a.push({
                    slug: dimension.getTimeIntervalBeginSlug(),
                    label: dimension.label + ' (Begin)',
                    shortLabel: 'Begin',
                    child: true,
                    isTime: true
                });

                a.push({
                    slug: dimension.getTimeIntervalEndSlug(),
                    label: dimension.label + ' (End)',
                    shortLabel: 'End',
                    child: true,
                    isTime: true
                });
            }

            return a;
        }, []);

        return dimensions;
    }

    /**
     * @returns {Dimension[]}
     */
    getIdentityDimensions() {
        let dimensions = this.getDimensions();

        dimensions = dimensions.filter(dimension => {
            return dimension.usedAsIdentifier;
        });

        return dimensions;
    }

    getDimensionForAutoReconciliations() {
        return {
            dimension: 'quality',
            value: 'Adjusted'
        };
    }

    /**
     * @returns {Dimension[]}
     */
    getDimensionsForDataStructureValidation(dimensionSlugToValidate) {
        let dimensions = this.getIdentityDimensions();
        const dfar = this.getDimensionForAutoReconciliations();

        // Remove dimension-to-validate and dimension used for auto-reconciliation.
        dimensions = dimensions.filter(dimension => {
            return dimension.slug !== dimensionSlugToValidate && dimension.slug !== dfar.dimension;
        });

        return dimensions;
    }

    getMatchingDataPoint(point1) {
        const dimensions = this.getIdentityDimensions();

        for (let i = 0; i < this.dataPoints.length; i++) {
            const point2 = this.dataPoints[i];
            let matching = true;

            for (let j = 0; j < dimensions.length; j++) {
                const d = dimensions[j];
                const a = typeof point1[d.slug] !== 'undefined' ? point1[d.slug] : '';
                const b = typeof point2[d.slug] !== 'undefined' ? point2[d.slug] : '';

                if (a != b) {
                    matching = false;
                    break;
                }
            }

            if (matching) {
                return point2;
            }
        }

        return false;
    }

    getKeyForDataPointId(id) {
        for (let i = 0; i < this.dataPoints.length; i++) {
            const dataPoint = this.dataPoints[i];

            if (dataPoint.id === id) {
                return i;
            }
        }

        return null;
    }

    /**
     * Get data structure objects for a certain dimension.
     *
     * @param dimensionSlug
     *
     * @returns {DataStructure[]}
     */
    getDataStructuresForDimension(dimensionSlug) {
        if (!(dimensionSlug in this.dataStructuresPerDimension)) {
            this.dataStructuresPerDimension[dimensionSlug] = {};
        }

        return this.dataStructuresPerDimension[dimensionSlug];
    }

    /**
     * This will add data-structure fields to a data point. For example, if the data-point has attribute='Net Revenue',
     * it could add 'attribute__parent'='Gross Profit'.
     */
    addDataStructuresToDataPoint(dataPoint) {
        dataPoint = Object.assign({}, dataPoint);
        const dimensions = this.getDimensions();

        dimensions.forEach(dimension => {
            const ds = this.getDataStructuresForDimension(dimension.slug)[dataPoint[dimension.slug]];

            if (ds) {
                if (dimension.hasDataStructures) {
                    dataPoint[dimension.getParentSlug()] = ds.parentAttribute;
                    dataPoint[dimension.getGroupSlug()] = ds.group;
                }

                if (dimension.hasGlobalTerms) {
                    dataPoint[dimension.getGlobalTermSlug()] = ds.globalTerm;
                }

                if (dimension.hasTimeIntervals) {
                    dataPoint[dimension.getTimeIntervalBeginSlug()] = ds.timeIntervalBegin;
                    dataPoint[dimension.getTimeIntervalEndSlug()] = ds.timeIntervalEnd;
                }
            }
        });

        return dataPoint;
    }

    /**
     *
     * @param dimension             Required
     * @param value                 Required
     * @param parent                Optional, can be null
     * @param group                 Optional, can be null
     * @param globalTerm            Optional, can be null
     * @param timeIntervalBegin     Optional, can be null
     * @param timeIntervalEnd       Optional, can be null
     * @returns {DataStructure}
     */
    addDataStructure(dimension, value, parent, group, globalTerm, timeIntervalBegin, timeIntervalEnd) {
        // Check if structure already exists.
        const dataStructures = this.getDataStructuresForDimension(dimension);
        let ds;
        if (value in dataStructures) {
            ds = dataStructures[value];
        } else {
            ds = new _DataStructure__WEBPACK_IMPORTED_MODULE_5__["DataStructure"]();
            ds.attribute = value;
            dataStructures[value] = ds;
        }

        // Apply parent attribute.
        if (typeof parent !== 'undefined' && !this.isDataStructureLoop(dataStructures, ds, parent)) {
            ds.parentAttribute = parent;
        }

        // Apply group.
        if (typeof group !== 'undefined') {
            ds.group = group;
        }

        // Apply global term.
        if (typeof globalTerm !== 'undefined') {
            ds.globalTerm = globalTerm;
        }

        // Apply time interval.
        if (typeof timeIntervalBegin !== 'undefined') {
            ds.timeIntervalBegin = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].dateToString(timeIntervalBegin);
        }
        if (typeof timeIntervalEnd !== 'undefined') {
            ds.timeIntervalEnd = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].dateToString(timeIntervalEnd);
        }

        // Remove group if parent empty.
        if (!ds.parentAttribute) {
            delete ds.group;
        }

        return ds;
    }

    getDataPointsForSource(uuid) {
        return this.dataPoints.filter(dataPoint => {
            return dataPoint.source === uuid;
        });
    }

    /**
     * Check if this new data structure would result in an endless loop.
     *
     * @param dataStructures {DataStructure[]}
     * @param dataStructure {DataStructure}
     * @param parent
     *
     * @return {boolean}
     */
    isDataStructureLoop(dataStructures, dataStructure, parent) {
        // Fetch parent data-structure.
        let parentStructure = dataStructures[parent];
        if (!parentStructure) {
            return false;
        }

        do {
            // Did we reach a loop?
            if (parentStructure.attribute === dataStructure.attribute) {
                return true;
            }

            // Fetch parent.
            parentStructure = dataStructures[parentStructure.parentAttribute];
        } while (parentStructure);

        // No loop.
        return false;
    }

    getChildren(dimensionSlug, value) {
        const children = [];
        const dimension = this.getDimensionBySlug(dimensionSlug);

        // Abort if dimension does not have data structures.
        if (!dimension || !dimension.hasDataStructures) {
            return children;
        }

        // Search for children.
        const dataStructures = this.getDataStructuresForDimension(dimensionSlug);
        for (const attribute in dataStructures) {
            const dataStructure = dataStructures[attribute];

            if (dataStructure.parentAttribute === value) {
                children.push(dataStructure.attribute);
            }
        }

        return children;
    }
}


/***/ }),

/***/ "./src/assets/js/entities/SourceFile.js":
/*!**********************************************!*\
  !*** ./src/assets/js/entities/SourceFile.js ***!
  \**********************************************/
/*! exports provided: SourceFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceFile", function() { return SourceFile; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/assets/js/entities/Project.js");



class SourceFile {
    constructor(object) {
        this.uuid = '';
        this.name = '';
        this.itemsSource = [];
        this.cellProperties = {};
        this.ingestionStep = 1;
        this.dataPoints = [];
        this.dataPointsCopy = [];
        this.formDimensions = [];
        this.hidden = false;
        this.globalMappingStructures = [];

        if (object) {
            Object.assign(this, object);

            if (object.project) {
                this.project = new _Project__WEBPACK_IMPORTED_MODULE_1__["Project"](object.project);
            }
        }
    }

    getNumberOfRows() {
        return this.itemsSource.length;
    }

    getNumberOfCols() {
        return this.itemsSource[0] ? this.itemsSource[0].length : 0;
    }

    getCellValue(row, col) {
        return this.itemsSource[row][col];
    }

    getSingleCellProperties(row, col) {
        if (!this.cellProperties.hasOwnProperty(col)) {
            this.cellProperties[col] = {};
        }

        if (!this.cellProperties[col].hasOwnProperty(row)) {
            this.cellProperties[col][row] = {};
        }

        // Assign defaults.
        // TODO: Performance issue: this is always creating new objects.
        const defaults = {
            cellType: 'none'
        };
        this.cellProperties[col][row] = Object.assign({}, defaults, this.cellProperties[col][row]);
        this.cellProperties[col][row]['value'] = this.getCellValue(row, col);

        return this.cellProperties[col][row];
    }

    getCellCompletionPercentage(row, col) {
        const cellFields = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this, `cellProperties[${col}][${row}]`);
        const totalFields = this.formDimensions.length;
        const filledFields = this.formDimensions.reduce((count, field) => {
            if (field in cellFields && cellFields[field] !== '') {
                count++;
            }

            return count;
        }, 0);

        return totalFields > 0 ? filledFields / totalFields : 1;
    }

    getTotalCompletionPercentage() {
        let dataCells = 0;
        let progress = 0;

        for (let col in this.cellProperties) {
            for (let row in this.cellProperties[col]) {
                const dataType = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this, `cellProperties[${col}][${row}].cellType`);

                if (dataType === 'data') {
                    dataCells++;
                    progress += this.getCellCompletionPercentage(row, col);
                }
            }
        }

        return dataCells === 0 ? 0 : progress / dataCells;
    }
}


/***/ }),

/***/ "./src/assets/js/entities/VirtualTableCell.js":
/*!****************************************************!*\
  !*** ./src/assets/js/entities/VirtualTableCell.js ***!
  \****************************************************/
/*! exports provided: VirtualTableCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualTableCell", function() { return VirtualTableCell; });
class VirtualTableCell {
    constructor() {
        // The cell value.
        this.value = null;

        // The total number of data-points.
        this.numberOfDataPoints = 0;

        // The IDs of the matching data-points.
        this.dataPointIds = [];

        // The IDs of the matching data-points, grouped per queries.
        this.dataPointIdsPerQuery = [];

        // A per-cell custom formula, optional.
        this.customFormula = null;
    }
}


/***/ }),

/***/ "./src/assets/js/services/DimensionTypesService.js":
/*!*********************************************************!*\
  !*** ./src/assets/js/services/DimensionTypesService.js ***!
  \*********************************************************/
/*! exports provided: dimensionTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dimensionTypesService", function() { return dimensionTypesService; });
class DimensionTypesService {
    constructor() {
        this.STRING = 0;
        this.NUMBER = 1;
        this.CURRENCY = 2;
    }
}

const dimensionTypesService = new DimensionTypesService();

/***/ }),

/***/ "./src/assets/js/services/ImportXlsxService.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/services/ImportXlsxService.js ***!
  \*****************************************************/
/*! exports provided: importXlsxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importXlsxService", function() { return importXlsxService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _entities_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/Project */ "./src/assets/js/entities/Project.js");
/* harmony import */ var _entities_SourceFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/SourceFile */ "./src/assets/js/entities/SourceFile.js");
/* harmony import */ var _backend_BackendFileWorkflowService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backend/BackendFileWorkflowService */ "./src/assets/js/services/backend/BackendFileWorkflowService.js");
/* harmony import */ var _StorageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StorageService */ "./src/assets/js/services/StorageService.js");






class ImportXlsxService {
    /**
     * Reads an XLSX file, ingests it via the backend, and saves it in the Project.
     *
     * @param file File uploaded by user.
     * @returns {Promise<String>} Return the UUID of the new file.
     */
    async importXlsx(file) {
        const sheet = await this.getSheet(file);

        const itemsSource = this.getItemsSource(sheet);

        const sourceFile = this.addSourceFile(file, itemsSource);

        await this.ingestViaBackend(file, sourceFile);

        _StorageService__WEBPACK_IMPORTED_MODULE_5__["storageService"].saveCurrentProject();

        return sourceFile.uuid;
    }

    async getSheet(f) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = e => {
                let data = e.target.result;
                let workbook = XLSX.read(data, {
                    type: 'binary',
                    cellStyles: true
                });
                let number = 0;
                const numberOfSheets = workbook.SheetNames.length;
                if (numberOfSheets > 1) {
                    number = prompt(
                        'Please choose the number of the sheet that you want to upload (1 - ' + numberOfSheets + ')'
                    );
                    if (number === null) {
                        $('#source_data_files_sidebar ._cancel').click();
                    }

                    number--;
                }

                let sheet;
                sheet = workbook.Sheets[workbook.SheetNames[number]];

                resolve(sheet);
            };

            reader.readAsBinaryString(f);
        });
    }

    getItemsSource(sheet) {
        let itemsSource = [];
        let range = XLSX.utils.decode_range(sheet['!ref']);
        let startColumn = 0;
        let endColumn = range.e.c;
        let startRow = 0;
        let endRow = range.e.r;
        const dateFormats = [moment.ISO_8601, 'MMM-DD', 'MM/DD/YYYY', 'DD/MM/YYYY'];

        // Load cells one by one.
        for (let column = startColumn; column <= endColumn; column++) {
            let index = 0;

            for (let row = startRow; row <= endRow; row++) {
                if (itemsSource[index] == null) {
                    itemsSource[index] = [];
                }

                let key = XLSX.utils.encode_cell({
                    c: column,
                    r: row
                });

                if (sheet[key]) {
                    let cellValue = sheet[key].v;

                    // Check if valid date.
                    if (moment(sheet[key].w, dateFormats, true).isValid()) {
                        cellValue = sheet[key].w;
                    }

                    // Check if percentage.
                    if (sheet[key].w) {
                        let cellString = sheet[key].w.slice(0, sheet[key].w.length);
                        cellString = cellString.replace(/ /g, '');
                        if (cellString[cellString.length - 1] === '%') {
                            cellValue = cellString;
                        }
                    }

                    if (cellValue !== null && cellValue !== undefined) {
                        itemsSource[index].push(cellValue);
                    } else {
                        itemsSource[index].push('');
                    }
                } else {
                    itemsSource[index].push('');
                }

                index++;
            }
        }

        return itemsSource;
    }

    addSourceFile(file, itemsSource) {
        let thisProject = _StorageService__WEBPACK_IMPORTED_MODULE_5__["storageService"].getCurrentProject();

        const project = thisProject == null ? new _entities_Project__WEBPACK_IMPORTED_MODULE_2__["Project"]() : thisProject;

        const sourceFile = new _entities_SourceFile__WEBPACK_IMPORTED_MODULE_3__["SourceFile"]();
        sourceFile.name = file.name;
        sourceFile.itemsSource = itemsSource;
        sourceFile.formDimensions = project.getDimensions().reduce((a, dimension) => {
            if (dimension.slug !== 'value') {
                a.push(dimension.slug);
            }

            return a;
        }, []);
        const uuid = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getNextUuid();
        sourceFile.uuid = uuid;
        project.sourceFiles[uuid] = sourceFile;
        let projectKey = localStorage.getItem('current_project_key');
        localStorage.setItem('currentFileID', uuid);
        if (thisProject == null) localStorage.setItem(projectKey, JSON.stringify(project));
        else _StorageService__WEBPACK_IMPORTED_MODULE_5__["storageService"].saveCurrentProject();

        return sourceFile;
    }

    async ingestViaBackend(file, sourceFile) {
        const data = await _backend_BackendFileWorkflowService__WEBPACK_IMPORTED_MODULE_4__["backendFileWorkflowService"].uploadExcelFile(file);
        if (!data) {
            return;
        }

        const project = _StorageService__WEBPACK_IMPORTED_MODULE_5__["storageService"].getCurrentProject() == null ? new _entities_Project__WEBPACK_IMPORTED_MODULE_2__["Project"]() : _StorageService__WEBPACK_IMPORTED_MODULE_5__["storageService"].getCurrentProject();
        //const project = storageService.getCurrentProject();

        data['labels'].forEach(data => {
            const coord = XLSX.utils.decode_cell(data.coord);
            const cell = sourceFile.getSingleCellProperties(coord.r, coord.c);
            cell.cellType = 'label';
            cell.range = data.range;

            const dimensionSlug = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(data, 'dimensions[0].SLUG');
            if (dimensionSlug) {
                const dimensionLabel = project.getDimensionBySlug(dimensionSlug).label;
                cell.labelDimension = [dimensionLabel];
            }
        });

        data['Data'].forEach(data => {
            const coord = XLSX.utils.decode_cell(data.coord);
            const cell = sourceFile.getSingleCellProperties(coord.r, coord.c);
            cell.cellType = 'data';
            data.dimensions.forEach(dimension => {
                cell[dimension.SLUG] = dimension.VALUE;
            });
        });
    }
}

const importXlsxService = new ImportXlsxService();


/***/ }),

/***/ "./src/assets/js/services/KeyboardService.js":
/*!***************************************************!*\
  !*** ./src/assets/js/services/KeyboardService.js ***!
  \***************************************************/
/*! exports provided: keyboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardService", function() { return keyboardService; });
class KeyboardService {
    constructor() {
        this.ctrlDown = false;
        this.shiftDown = false;
        this.ctrlKey = 17;
        this.shiftKey = 16;
        this.cmdKey = 91;
        this.vKey = 86;
        this.cKey = 67;

        $(document).keydown((e) => {
            if (e.keyCode === this.ctrlKey || e.keyCode === this.cmdKey) {
                this.ctrlDown = true;
            }

            if (e.keyCode === this.shiftKey) {
                this.shiftDown = true;
            }
        });

        $(document).keyup((e) => {
            if (e.keyCode === this.ctrlKey || e.keyCode === this.cmdKey) {
                this.ctrlDown = false;
            }

            if (e.keyCode === this.shiftKey) {
                this.shiftDown = false;
            }
        });
    }
}

const keyboardService = new KeyboardService();

/***/ }),

/***/ "./src/assets/js/services/SourceFilesService.js":
/*!******************************************************!*\
  !*** ./src/assets/js/services/SourceFilesService.js ***!
  \******************************************************/
/*! exports provided: sourceFilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceFilesService", function() { return sourceFilesService; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorageService */ "./src/assets/js/services/StorageService.js");



class SourceFilesService {
    constructor() {
        this.currentUuid = null;
    }

    /**
     * @returns {SourceFile}
     */
    getCurrentSourceFile() {
        return lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"], `currentProject.sourceFiles[${this.currentUuid}]`);
    }

    applyDimensionToRange(range, dimension, value, columnDefs) {
        if (!range || !dimension) {
            return;
        }
        const dimensionObject = columnDefs.filter(obj => {
            return obj.label === dimension;
        });

        const sourceFile = this.getCurrentSourceFile();
        const rangeObject = XLSX.utils.decode_range(range);

        // Apply new value to each cell in range.
        for (let row = rangeObject.s.r; row <= rangeObject.e.r; row++) {
            for (let col = rangeObject.s.c; col <= rangeObject.e.c; col++) {
                const properties = sourceFile.getSingleCellProperties(row, col);
                properties[dimensionObject[0].slug] = value;
            }
        }
    }

    applyDimensions(properties, columnDefs) {
        if (!(properties && properties.labelDimension)) {
            return;
        }

        properties.labelDimension.map((dimension, index) => {
            const overwrittenValue = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(properties, `overwriteValue[${index}]`, '');
            const value = overwrittenValue !== '' ? overwrittenValue : properties.value;

            sourceFilesService.applyDimensionToRange(properties.range, dimension, value, columnDefs);
        });
    }
}

const sourceFilesService = new SourceFilesService();


/***/ }),

/***/ "./src/assets/js/services/StorageService.js":
/*!**************************************************!*\
  !*** ./src/assets/js/services/StorageService.js ***!
  \**************************************************/
/*! exports provided: storageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageService", function() { return storageService; });
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _entities_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Project */ "./src/assets/js/entities/Project.js");
/* harmony import */ var _tabs_data_explorer_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabs/data-explorer/DataExplorerAnalyses */ "./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js");
/* harmony import */ var _tabs_data_explorer_DataExplorerStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabs/data-explorer/DataExplorerStorage */ "./src/assets/js/tabs/data-explorer/DataExplorerStorage.js");
/* harmony import */ var _tabs_DatabaseView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tabs/DatabaseView */ "./src/assets/js/tabs/DatabaseView.js");
/* harmony import */ var _tabs_dropbox_Dropbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tabs/dropbox/Dropbox */ "./src/assets/js/tabs/dropbox/Dropbox.js");
/* harmony import */ var _tabs_project_setup_ProjectSetup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tabs/project-setup/ProjectSetup */ "./src/assets/js/tabs/project-setup/ProjectSetup.js");
/* harmony import */ var _tabs_source_data_SourceData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tabs/source-data/SourceData */ "./src/assets/js/tabs/source-data/SourceData.js");









class StorageService {
    constructor() {
        this.CURRENT_PROJECT_KEY = 'current_project_key';
        this.CURRENT_TAB_KEY = 'current_tab';
        this.DATA_COCKPIT_COLUMNS_KEY = 'data_cockpit_columns';

        this.keyPrefix = 'project_';

        /** @type {Project} */
        this.currentProject = null;

        this.currentProjectKey = null;
    }

    getDefaultProjectKey() {
        return localStorage.getItem(this.CURRENT_PROJECT_KEY);
    }

    setDefaultProjectKey(key) {
        localStorage.setItem(this.CURRENT_PROJECT_KEY, key);
    }

    /** @type {Project} */
    getCurrentProject() {
        return this.currentProject;
    }

    getCurrentDataPoints() {
        return this.currentProject.dataPoints;
    }

    /**
     * Get projects as key-name pairs.
     * @returns {Object}
     */
    getAllProjects() {
        let keys = Object.keys(localStorage);
        let dbs = {};

        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];

            // Check if prefix matches.
            if (typeof key !== 'string' || key.indexOf(this.keyPrefix) !== 0) {
                continue;
            }

            let db = this.getProject(key);

            dbs[key] = db.name;
        }

        return dbs;
    }

    getAllProjectsSorted() {
        let dbs = this.getAllProjects();
        let sorted = [];

        for (let i in dbs) {
            sorted.push({
                key: i,
                name: dbs[i]
            });
        }

        sorted.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });

        return sorted;
    }

    /**
     * Create a new project and return its key.
     */
    addProject(project) {
        let key = this.keyPrefix + _Common__WEBPACK_IMPORTED_MODULE_0__["common"].getNextUuid();
        localStorage.setItem(key, JSON.stringify(project));

        return key;
    }

    getProject(key) {
        let data = localStorage.getItem(key);

        if (data) {
            data = JSON.parse(data);
        }

        return new _entities_Project__WEBPACK_IMPORTED_MODULE_1__["Project"](data);
    }

    setProject(key, project) {
        localStorage.setItem(key, JSON.stringify(project));
    }

    setCurrentProject(key) {
        let project = this.getProject(key);

        if (project) {
            localStorage.setItem('currentProject', JSON.stringify(project));
            this.currentProject = project;
            this.currentProjectKey = key;
            this.setDefaultProjectKey(key);
            this.syncViews();
        }
    }

    syncViews(onlyIfDirty) {
        console.log('syncViews');
        _tabs_source_data_SourceData__WEBPACK_IMPORTED_MODULE_7__["sourceData"].syncIfVisible(onlyIfDirty);
        _tabs_data_explorer_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_2__["dataExplorerAnalyses"].syncIfVisible(onlyIfDirty);
        _tabs_project_setup_ProjectSetup__WEBPACK_IMPORTED_MODULE_6__["projectSetup"].syncIfVisible(onlyIfDirty);
        _tabs_dropbox_Dropbox__WEBPACK_IMPORTED_MODULE_5__["dropbox"].syncIfVisible(onlyIfDirty);
        _tabs_DatabaseView__WEBPACK_IMPORTED_MODULE_4__["databaseView"].syncWithDatabase();
        _tabs_data_explorer_DataExplorerStorage__WEBPACK_IMPORTED_MODULE_3__["dataExplorerStorage"].load();
    }

    loadDefaultProjects() {
        let key = this.getDefaultProjectKey();

        if (!key) {
            // this.addProject(sampleProject.getNewProject());

            //key = this.addProject(maxGroupProject.getNewProject());
            this.setDefaultProjectKey(key);
        }

        this.setCurrentProject(key);
    }

    saveCurrentProject(projectKey, project) {
        this.setProject(projectKey, project);
    }
    saveCurrentProject() {
        this.setProject(this.currentProjectKey, this.currentProject);
    }

    removeCurrentProject() {
        localStorage.removeItem(this.currentProjectKey);

        // Set another project as default.
        let dbs = this.getAllProjects();
        for (let key in dbs) {
            this.setCurrentProject(key);
            return;
        }

        // No other project? Load the default one.
        localStorage.removeItem(this.CURRENT_PROJECT_KEY);
        this.loadDefaultProjects();
    }

    setCurrentTab(tab) {
        localStorage.setItem(this.CURRENT_TAB_KEY, tab);
    }

    getCurrentTab() {
        return localStorage.getItem(this.CURRENT_TAB_KEY);
    }

    get(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {}

        return null;
    }

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

const storageService = new StorageService();


/***/ }),

/***/ "./src/assets/js/tabs/DatabaseView.js":
/*!********************************************!*\
  !*** ./src/assets/js/tabs/DatabaseView.js ***!
  \********************************************/
/*! exports provided: databaseView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "databaseView", function() { return databaseView; });
/* harmony import */ var _entities_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/Project */ "./src/assets/js/entities/Project.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/StorageService */ "./src/assets/js/services/StorageService.js");



class DatabaseView {
    constructor() {
        this.table = null;
        this.columns = null;
    }

    init() {
        $('#current_database').on('change', function() {
            _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].setCurrentProject($(this).val());
        });

        $('#add_new_database').on('click', function() {
            let title = prompt('Enter a name for the new database');
            if (!title) {
                return;
            }

            let project = new _entities_Project__WEBPACK_IMPORTED_MODULE_0__["Project"]();
            project.name = title;

            const key = _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].addProject(project);
            _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].setCurrentProject(key);
        });

        $('#remove_current_database').on('click', function() {
            if (!confirm('Are you sure you want to remove the current database?')) {
                return;
            }

            _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].removeCurrentProject();
        });

        $('#reset_everything').on('click', function() {
            if (
                !confirm(
                    'Are you sure you want to reset everything to its initial state? This includes all datasets and data structures.'
                )
            ) {
                return;
            }

            Object.keys(_services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getAllProjects()).forEach(() => {
                _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].removeCurrentProject();
            });
        });
    }

    syncWithDatabase() {
        if (_services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getCurrentTab() !== '#database_view') {
            return;
        }

        // Database control
        {
            let currentProject = $('#current_database');
            let dbs = _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getAllProjects();

            // Remove existing options.
            currentProject.find('option').remove();

            // Add new options.
            for (let i in dbs) {
                let option = $('<option value="' + i + '">' + dbs[i] + '</option>');

                if (i === _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getDefaultProjectKey()) {
                    option.attr('selected', '');
                }

                currentProject.append(option);
            }
        }
    }
}

const databaseView = new DatabaseView();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorer.js":
/*!**********************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorer.js ***!
  \**********************************************************/
/*! exports provided: dataExplorer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorer", function() { return dataExplorer; });
/* harmony import */ var _DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataExplorerAnalyses */ "./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js");
/* harmony import */ var _DataExplorerCellFormulas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataExplorerCellFormulas */ "./src/assets/js/tabs/data-explorer/DataExplorerCellFormulas.js");
/* harmony import */ var _DataExplorerFormulas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataExplorerFormulas */ "./src/assets/js/tabs/data-explorer/DataExplorerFormulas.js");
/* harmony import */ var _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataExplorerHelper */ "./src/assets/js/tabs/data-explorer/DataExplorerHelper.js");
/* harmony import */ var _DataExplorerImport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataExplorerImport */ "./src/assets/js/tabs/data-explorer/DataExplorerImport.js");
/* harmony import */ var _DataExplorerRenderChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataExplorerRenderChart */ "./src/assets/js/tabs/data-explorer/DataExplorerRenderChart.js");
/* harmony import */ var _DataExplorerSecondarySidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataExplorerSecondarySidebar */ "./src/assets/js/tabs/data-explorer/DataExplorerSecondarySidebar.js");
/* harmony import */ var _DataExplorerSections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DataExplorerSections */ "./src/assets/js/tabs/data-explorer/DataExplorerSections.js");
/* harmony import */ var _DataExplorerSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DataExplorerSidebar */ "./src/assets/js/tabs/data-explorer/DataExplorerSidebar.js");
/* harmony import */ var _DataExplorerStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DataExplorerStorage */ "./src/assets/js/tabs/data-explorer/DataExplorerStorage.js");
/* harmony import */ var _DataExplorerTemplate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DataExplorerTemplate */ "./src/assets/js/tabs/data-explorer/DataExplorerTemplate.js");
/* harmony import */ var _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DataExplorerVirtualTable */ "./src/assets/js/tabs/data-explorer/DataExplorerVirtualTable.js");













class DataExplorer {
    constructor() {
        this.table = null;
        this.columnSequence = 1;
        this.rowSequence = 1;
        this.dataExplorerCellFormulas = new _DataExplorerCellFormulas__WEBPACK_IMPORTED_MODULE_1__["DataExplorerCellFormulas"]();
        this.SET_ROW = 'row';
        this.SET_COLUMN = 'column';
    }

    getNextInSequence(set) {
        switch (set) {
            case this.SET_ROW:
                return 'R' + this.rowSequence++;

            case this.SET_COLUMN:
                return 'C' + this.columnSequence++;
        }
    }

    addFilter(item, set) {
        let section = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_7__["dataExplorerSections"].addFilterSection(
            $('.item-group[data-set="' + set + '"]'),
            item,
            this.getNextInSequence(set)
        );

        if (item instanceof jQuery) {
            // Add item inside the filter section.
            item = item.clone();
            item.find('._id').remove();
            section.find('._filters').append(item);
        }

        return section;
    }

    addFormula(formula, set) {
        return _DataExplorerFormulas__WEBPACK_IMPORTED_MODULE_2__["dataExplorerFormulas"].addFormulaSection(
            $('.item-group[data-set="' + set + '"]'),
            this.getNextInSequence(set),
            formula
        );
    }

    init() {
        // Create this in order to drag-n-drop items back to the Available box.
        Sortable.create(
            available_box,
            $.extend({}, _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__["dataExplorerHelper"].sortableArgs, {
                sort: false,
                onAdd: function(evt) {
                    $(evt.item).remove();
                },
                handle: '.non-existent-class',
                filter: '.remove-filter'
            })
        );

        // Global filters.
        Sortable.create(
            filter_box_a1,
            $.extend({}, _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__["dataExplorerHelper"].sortableArgs, {
                sort: false,
                filter: '.remove-filter'
            })
        );
        Sortable.create(
            filter_box_headline,
            $.extend({}, _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__["dataExplorerHelper"].sortableArgs, {
                sort: false,
                filter: '.remove-filter'
            })
        );
        Sortable.create(
            filter_box_hidden,
            $.extend({}, _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__["dataExplorerHelper"].sortableArgs, {
                sort: false,
                filter: '.remove-filter'
            })
        );

        Sortable.create(
            row_box,
            $.extend({}, _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__["dataExplorerHelper"].sortableArgs, {
                onAdd: evt => {
                    let item = $(evt.item);
                    let section3;

                    switch (evt.item.attributes[2].value) {
                        case 'Margin':
                            section3 = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_7__["dataExplorerSections"].addMarginRow();
                            break;

                        case 'Custom Formula':
                            section3 = dataExplorer.addFormula('', this.SET_ROW);
                            break;

                        case 'Blank':
                            section3 = dataExplorer.addFilter(item, this.SET_ROW);
                            section3.attr('data-value', 'Blank');
                            break;

                        default:
                            section3 = dataExplorer.addFilter(item, this.SET_ROW);
                            break;
                    }

                    section3.insertAfter(item);
                    item.remove();
                },
                filter: '.remove-filter, ._prevent-sort'
            })
        );
        Sortable.create(
            column_box,
            $.extend({}, _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__["dataExplorerHelper"].sortableArgs, {
                onAdd: evt => {
                    let item = $(evt.item);
                    let section2;

                    switch (evt.item.attributes[2].value) {
                        case 'Delta':
                            section2 = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_7__["dataExplorerSections"].addYoyColumn();
                            break;
                        case 'YoY':
                            section2 = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_7__["dataExplorerSections"].addYoyColumn(null, null, true);
                            break;
                        case 'CAGR':
                            section2 = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_7__["dataExplorerSections"].addCagrColumn();
                            break;
                        case 'Custom Formula':
                            section2 = dataExplorer.addFormula('', this.SET_COLUMN);
                            break;
                        case 'Blank':
                            section2 = dataExplorer.addFilter(item, this.SET_COLUMN);
                            section2.attr('data-value', 'Blank');
                            break;
                        default:
                            section2 = dataExplorer.addFilter(item, this.SET_COLUMN);
                            break;
                    }
                    section2.insertAfter(item);
                    item.remove();
                },
                filter: '.remove-filter, ._prevent-sort'
            })
        );

        _DataExplorerSecondarySidebar__WEBPACK_IMPORTED_MODULE_6__["dataExplorerSecondarySidebar"].init();

        // Events
        $('#scale').on('change', function() {
            _DataExplorerStorage__WEBPACK_IMPORTED_MODULE_9__["dataExplorerStorage"].save(_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_0__["dataExplorerAnalyses"].currentAnalysisId);
            _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_11__["dataExplorerVirtualTable"].updateTable();
        });

        $('._outputMode input').on('change', function() {
            if (!$(this).prop('checked')) {
                return;
            }

            _DataExplorerRenderChart__WEBPACK_IMPORTED_MODULE_5__["dataExplorerRenderChart"].outputMode = $(this).val();

            switch (_DataExplorerRenderChart__WEBPACK_IMPORTED_MODULE_5__["dataExplorerRenderChart"].outputMode) {
                case 'table':
                    $('#pivot_wrapper').show();
                    $('#outputChart').hide();
                    $('.chart-related-data').hide();
                    break;

                case 'chart':
                    $('#pivot_wrapper').hide();
                    $('#outputChart').show();
                    $('.chart-related-data').show();
                    break;
            }

            _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_11__["dataExplorerVirtualTable"].renderOutputTableOrChart();
        });

        $('._chartMode input').on('change', function() {
            if (!$(this).prop('checked')) {
                return;
            }

            _DataExplorerRenderChart__WEBPACK_IMPORTED_MODULE_5__["dataExplorerRenderChart"].chartMode = $(this).val();

            _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_11__["dataExplorerVirtualTable"].renderOutputTableOrChart();
        });

        $('._chartStackingMode input').on('change', function() {
            if (!$(this).prop('checked')) {
                return;
            }

            _DataExplorerRenderChart__WEBPACK_IMPORTED_MODULE_5__["dataExplorerRenderChart"].chartStackingMode = $(this).val();

            _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_11__["dataExplorerVirtualTable"].renderOutputTableOrChart();
        });

        // Trigger template loading.
        $('#exampleFormControlSelect1').on('change', e => {
            _DataExplorerTemplate__WEBPACK_IMPORTED_MODULE_10__["dataExplorerTemplate"].loadTemplate(
                parseInt(
                    $(e.target)
                        .find(':selected')
                        .attr('data-source-template')
                ) - 1
            );
        });

        $('.main_sidebar').on('click', e => {
            let target = $(e.target);
            let className = target.attr('class');

            if (className === undefined) {
                return;
            }

            let result = target.hasClass('remove-filter');

            if (result) {
                if (target.parent().hasClass('global-filter')) {
                    target.parent().remove();
                } else {
                    let card = target.closest('.item-with-filters');
                    target.closest('li.item').remove();
                    _DataExplorerSections__WEBPACK_IMPORTED_MODULE_7__["dataExplorerSections"].syncTitle(card);
                }

                _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__["dataExplorerHelper"].saveAndUpdate();
            }
        });

        _DataExplorerSections__WEBPACK_IMPORTED_MODULE_7__["dataExplorerSections"].init();
        _DataExplorerSidebar__WEBPACK_IMPORTED_MODULE_8__["dataExplorerSidebar"].init();
        _DataExplorerImport__WEBPACK_IMPORTED_MODULE_4__["dataExplorerImport"].init();
    }
}

const dataExplorer = new DataExplorer();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js":
/*!******************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js ***!
  \******************************************************************/
/*! exports provided: dataExplorerAnalyses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerAnalyses", function() { return dataExplorerAnalyses; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _entities_DataExplorerAnalysis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/DataExplorerAnalysis */ "./src/assets/js/entities/DataExplorerAnalysis.js");
/* harmony import */ var _ResizableDivider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ResizableDivider */ "./src/assets/js/ResizableDivider.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Tab */ "./src/assets/js/Tab.js");
/* harmony import */ var _DataExplorer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataExplorer */ "./src/assets/js/tabs/data-explorer/DataExplorer.js");
/* harmony import */ var _DataExplorerImport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DataExplorerImport */ "./src/assets/js/tabs/data-explorer/DataExplorerImport.js");
/* harmony import */ var _DataExplorerStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DataExplorerStorage */ "./src/assets/js/tabs/data-explorer/DataExplorerStorage.js");
/* harmony import */ var _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table/DataExplorerRenderTable */ "./src/assets/js/tabs/data-explorer/table/DataExplorerRenderTable.js");











class DataExplorerAnalyses extends _Tab__WEBPACK_IMPORTED_MODULE_5__["Tab"] {
    constructor() {
        super();
        this.tabHref = '#output_table';
        this.currentAnalysisId = 0;
    }

    init() {
        _DataExplorer__WEBPACK_IMPORTED_MODULE_6__["dataExplorer"].init();

        // Hide single analysis div.
        $('#single_analysis').css('display', 'none');

        // Display all analyses.
        this.displayAnalyses();
        $(document).on('click', '#analyses_list ._analyses-list ._analysis', e => this.loadAnalysis(e));

        $('#single_analysis ._back-to-list').on('click', () => this.backToList());

        $('#analyses_list ._add-analysis').on('click', () => this.addNewAnalysis());

        $('#single_analysis ._edit-mode-switch input').on('change', () => this.toggleEditMode());
        $('#single_analysis ._split-screen-mode-switch input').on('change', () => this.toggleSplitScreenMode());

        $(document).on('click', '#data_explorer_imported_table ._file-tab ', e => this.switchTab(e));
    }

    sync() {
        this.displayAnalyses();
    }

    switchTab(e) {
        const uuid = $(e.target).data('uuid');
        if (uuid === _DataExplorerImport__WEBPACK_IMPORTED_MODULE_7__["dataExplorerImport"].uuid) {
            return;
        }

        _DataExplorerImport__WEBPACK_IMPORTED_MODULE_7__["dataExplorerImport"].uuid = uuid;
        $('.main-content #data_explorer_imported_table').remove();
        _DataExplorerImport__WEBPACK_IMPORTED_MODULE_7__["dataExplorerImport"].splitScreen();
        _DataExplorerImport__WEBPACK_IMPORTED_MODULE_7__["dataExplorerImport"].createRightTable(uuid);
        _DataExplorerImport__WEBPACK_IMPORTED_MODULE_7__["dataExplorerImport"].refreshFilesTabs();
    }

    toggleSplitScreenMode() {
        const checked = $('#single_analysis ._split-screen-mode-switch input').is(':checked');
        if (checked) {
            _DataExplorerImport__WEBPACK_IMPORTED_MODULE_7__["dataExplorerImport"].splitScreen();

            _ResizableDivider__WEBPACK_IMPORTED_MODULE_3__["resizableDivider"].enableResizable(
                '.main-content > .tab-content',
                '#data_explorer_imported_table',
                'width',
                { handles: 'e' },
                { minWidth: 700, maxWidth: 1200 },
                () => {
                    _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_9__["dataExplorerRenderTable"].updateTable();
                }
            );

            const dataExplorerAnalysis = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject().analyses[
                dataExplorerAnalyses.currentAnalysisId
            ];
            if (dataExplorerAnalysis.dropboxFiles.length) {
                const uuid = dataExplorerAnalysis.dropboxFiles[0];
                _DataExplorerImport__WEBPACK_IMPORTED_MODULE_7__["dataExplorerImport"].uuid = uuid;
                _DataExplorerImport__WEBPACK_IMPORTED_MODULE_7__["dataExplorerImport"].createRightTable(uuid);
            }

            _DataExplorerImport__WEBPACK_IMPORTED_MODULE_7__["dataExplorerImport"].refreshFilesTabs();
        } else {
            _ResizableDivider__WEBPACK_IMPORTED_MODULE_3__["resizableDivider"].resetResizable('.main-content > .tab-content', () => {
                _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_9__["dataExplorerRenderTable"].updateTable();
            });

            _DataExplorerImport__WEBPACK_IMPORTED_MODULE_7__["dataExplorerImport"].cancelImport();
        }
    }

    toggleEditMode() {
        if (!localStorage.getItem('blobExcelData'))
            _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_9__["dataExplorerRenderTable"].flexgrid.isReadOnly = !$('#single_analysis ._edit-mode-switch input').is(
                ':checked'
            );
    }

    loadAnalysis(e) {
        $('#analyses_list').css('display', 'none');
        $('#single_analysis').css('display', '');
        this.currentAnalysisId = $(e.currentTarget).data('id');
        $('#single_analysis ._analysis-title h3').text(
            _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject().analyses[this.currentAnalysisId].name
        );

        $('._outputMode input[value=table]')
            .prop('checked', true)
            .trigger('change');
        _DataExplorerStorage__WEBPACK_IMPORTED_MODULE_8__["dataExplorerStorage"].load();
    }

    addNewAnalysis() {
        const analysisName = prompt('Please enter the name of the analysis: ');
        if (analysisName === null) {
            return;
        }

        const analysisId = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject().analyses.length;
        const newAnalysis = new _entities_DataExplorerAnalysis__WEBPACK_IMPORTED_MODULE_2__["DataExplorerAnalysis"]({
            id: analysisId,
            name: analysisName
        });
        _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject().analyses.push(newAnalysis);

        // Save project.
        _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].saveCurrentProject();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].syncViews();
    }

    backToList() {
        $('#analyses_list').css('display', '');
        $('#single_analysis').css('display', 'none');

        $('#single_analysis ._edit-mode-switch input').prop('checked', false);
        $('#single_analysis ._split-screen-mode-switch input').prop('checked', false);
        if (!localStorage.getItem('blobExcelData')) _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_9__["dataExplorerRenderTable"].flexgrid.isReadOnly = true;

        _DataExplorerImport__WEBPACK_IMPORTED_MODULE_7__["dataExplorerImport"].cancelImport();
    }

    displayAnalyses() {
        _Common__WEBPACK_IMPORTED_MODULE_1__["common"].showFakeLoading(() => {
            const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject();
            const analyses = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(project, 'analyses', false);
            if (!analyses) {
                return;
            }

            $('#analyses_list ._analyses-list').empty();
            analyses.map(analysis => {
                $('#analyses_list ._analyses-list').append(
                    '<div class="_analysis" data-id="' + analysis.id + '">' + analysis.name + '</div>'
                );
            });
        });
    }
}

const dataExplorerAnalyses = new DataExplorerAnalyses();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerAttributesTree.js":
/*!************************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerAttributesTree.js ***!
  \************************************************************************/
/*! exports provided: DataExplorerAttributesTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataExplorerAttributesTree", function() { return DataExplorerAttributesTree; });
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataExplorerHelper */ "./src/assets/js/tabs/data-explorer/DataExplorerHelper.js");




class DataExplorerAttributesTree {
    constructor(dimensionSlug) {
        this.dimensionSlug = dimensionSlug;
    }

    init() {
        this.slugToAttrs = {};
    }

    load(tree) {
        this.container = tree;

        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getCurrentProject();
        let dataset = _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getCurrentDataPoints();
        let attributes = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].getUniqueValues(dataset, this.dimensionSlug);

        // Get attributes.
        this.slugToAttrs = {};
        attributes.forEach(attr => {
            let slug = attr;

            this.slugToAttrs[slug] = {
                label: attr,
                slug: slug,
                parentSlug: null,
                open: false,
                hasChildren: false
            };
        });

        // Get parents.
        // TODO
        const dataStructures = project.getDataStructuresForDimension(this.dimensionSlug);
        for (const attribute in dataStructures) {
            const ds = dataStructures[attribute];
            const rightSlug = ds.attribute;
            const leftSlug = ds.parentAttribute;

            if (!(leftSlug in this.slugToAttrs) || !(rightSlug in this.slugToAttrs)) {
                continue;
            }

            // Was the other parent a better match?
            if (
                this.slugToAttrs[rightSlug].parentSlug !== null &&
                rightSlug.indexOf(this.slugToAttrs[rightSlug].parentSlug) !== -1
            ) {
                continue;
            }

            this.slugToAttrs[leftSlug].hasChildren = true;
            this.slugToAttrs[rightSlug].parentSlug = leftSlug;
        }

        this.render();
    }

    render(parentSlug, parentElement) {
        let attrs = [];

        if (typeof parentSlug === 'undefined') {
            parentSlug = null;
        }

        // Get attrs.
        for (let slug in this.slugToAttrs) {
            let attr = this.slugToAttrs[slug];

            if (attr.parentSlug !== parentSlug) {
                continue;
            }

            attrs.push(attr);
        }

        // Get container.
        let container;
        if (parentSlug) {
            container = parentElement;
        } else {
            container = this.container;
            container.html('');
        }

        // Compose HTML.
        attrs.forEach(attr => {
            let button = $('<div class="_button"></div>');
            let item = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_2__["dataExplorerHelper"].createItem(null, 'filter', attr.label, this.dimensionSlug);
            let ul = $('<ul></ul>').append(item);
            let row = $('<div class="_row"></div>').append(button, ul);
            container.append(row);

            // Button
            button.addClass(attr.open ? '_open' : '_closed');
            if (attr.hasChildren) {
                button.addClass('_has-children');
                button.html(
                    attr.open
                        ? '<i class="fa fa-minus-square-o" aria-hidden="true"></i>'
                        : '<i class="fa fa-plus-square-o" aria-hidden="true"></i>'
                );
                button.on('click', () => {
                    attr.open = !attr.open;
                    this.render();

                    return false;
                });
            } else {
                button.html('<i class="fa fa-square-o" aria-hidden="true"></i>');
            }

            // Sortable item
            Sortable.create(ul[0], _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_2__["dataExplorerHelper"].sortableArgsForAttrs, {
                filter: '.remove-filter'
            });

            // Render children.
            if (attr.open) {
                let children = $('<div class="_children"></div>');
                this.render(attr.slug, children);
                row.append(children);
            }
        });
    }
}


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerCellFormulas.js":
/*!**********************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerCellFormulas.js ***!
  \**********************************************************************/
/*! exports provided: DataExplorerCellFormulas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataExplorerCellFormulas", function() { return DataExplorerCellFormulas; });
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataExplorerAnalyses */ "./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js");
/* harmony import */ var _DataExplorerFormulas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataExplorerFormulas */ "./src/assets/js/tabs/data-explorer/DataExplorerFormulas.js");
/* harmony import */ var _DataExplorerStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataExplorerStorage */ "./src/assets/js/tabs/data-explorer/DataExplorerStorage.js");
/* harmony import */ var _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataExplorerVirtualTable */ "./src/assets/js/tabs/data-explorer/DataExplorerVirtualTable.js");






class DataExplorerCellFormulas {
    constructor() {
        this.selectedCellRow = null;
        this.selectedCellColumn = null;
        this.table = $('#pivot');
        this.editor = $('#output_table ._formula-cell-editor');

        this.editor.on('blur', e => {
            const input = $(e.target);

            // Skip?
            if (input.prop('data-skip-blur')) {
                input.prop('data-skip-blur', false);
                return;
            }

            this.saveFormula();
        });
        this.editor.on('keydown', e => {
            // Enter
            if (e.keyCode === 13) {
                this.saveFormula();

                // Prevent adding a newline.
                e.preventDefault();
            }
        });
        this.editor.on('click', 'i', e => {
            _DataExplorerFormulas__WEBPACK_IMPORTED_MODULE_2__["dataExplorerFormulas"].onInputBuilderClick(e);
        });
        $('#output_table ._formula-cell-editor-query').on('click', e => {
            if (!this.editor.hasClass('_active')) {
                return;
            }

            _DataExplorerFormulas__WEBPACK_IMPORTED_MODULE_2__["dataExplorerFormulas"].onBuilderClick(this.editor, e);
        });
    }

    saveFormula() {
        // Parse input once more.
        _DataExplorerFormulas__WEBPACK_IMPORTED_MODULE_2__["dataExplorerFormulas"].parseFormulaInput(this.editor);

        // Get formula.
        let formula = this.editor.html();
        if (formula.slice(0, 1) === '=') {
            formula = '=' + this.editor.attr('data-formula');
        }

        // Check if this differs from old formula.
        const dataExplorerAnalysis = _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].getCurrentProject().analyses[
            _DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_1__["dataExplorerAnalyses"].currentAnalysisId
        ];
        const cellData = dataExplorerAnalysis.getCellData(this.selectedCellRow, this.selectedCellColumn);
        if (cellData.customFormula === formula) {
            return;
        }

        // Set custom formula.
        cellData.customFormula = formula;
        dataExplorerAnalysis.setCellData(this.selectedCellRow, this.selectedCellColumn, cellData);

        // Save table.
        _DataExplorerStorage__WEBPACK_IMPORTED_MODULE_3__["dataExplorerStorage"].save(_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_1__["dataExplorerAnalyses"].currentAnalysisId);

        // Refresh table.
        _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_4__["dataExplorerVirtualTable"].updateTable();
    }

    // Event when clicking a cell.
    onSelectionChanged(s, e) {
        // Disable editor for ranges (multiple cells) or headers (first row/col).
        if (e.range.isSingleCell === false || e.row === 0 || e.col === 0) {
            this.editor.removeClass('_active');
            this.editor.html('');
            return;
        }
        const row = e.row - 1;
        const col = e.col - 1;

        // Show formula editor.
        this.editor.addClass('_active');
        const customFormula = _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].currentProject.analyses[
            _DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_1__["dataExplorerAnalyses"].currentAnalysisId
        ].getCellData(row, col).customFormula;
        this.editor.html(customFormula);
        _DataExplorerFormulas__WEBPACK_IMPORTED_MODULE_2__["dataExplorerFormulas"].parseFormulaInput(this.editor);

        // Select cell.
        this.selectedCellRow = row;
        this.selectedCellColumn = col;
    }
}


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerEval.js":
/*!**************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerEval.js ***!
  \**************************************************************/
/*! exports provided: dataExplorerEval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerEval", function() { return dataExplorerEval; });
/* harmony import */ var _entities_VirtualTableCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../entities/VirtualTableCell */ "./src/assets/js/entities/VirtualTableCell.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataExplorer */ "./src/assets/js/tabs/data-explorer/DataExplorer.js");
/* harmony import */ var _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataExplorerHelper */ "./src/assets/js/tabs/data-explorer/DataExplorerHelper.js");





class DataExplorerEval {
    constructor() {
        this.filters = {};

        // The number of data-points that were matched in the last evaluated formula.
        this.numberOfDataPoints = 0;

        // The IDs of the data-points that were matched, per query, for the last evaluated formula.
        this.dataPointIdsPerQuery = [];
    }

    evalColumnFormula(render, formula, filters, row) {
        return this.evalFormula(render, formula, filters, row, null);
    }

    evalRowFormula(render, formula, filters, column) {
        return this.evalFormula(render, formula, filters, null, column);
    }

    evalFormula(render, formula, filters, row, column) {
        this.filters = filters;

        if ((row !== null || column !== null) && !render.previousTableData) {
            return null;
        }

        let start = null,
            prefix,
            tableIds;
        if (row !== null) {
            start = _DataExplorer__WEBPACK_IMPORTED_MODULE_2__["dataExplorer"].columnSequence - 1;
            prefix = 'C';
            tableIds = render.tableIdsToColumns;
        } else if (column !== null) {
            start = _DataExplorer__WEBPACK_IMPORTED_MODULE_2__["dataExplorer"].rowSequence - 1;
            prefix = 'R';
            tableIds = render.tableIdsToRows;
        }

        // Replace variables, if applicable.
        let processedFormula = formula;
        if (start !== null) {
            // Replace variables in reverse order, so we don't replace C11 with C1's value for example.
            for (let i = start; i >= 1; i--) {
                let variable = prefix + i;

                if (!(variable in tableIds)) {
                    continue;
                }

                let index = tableIds[variable];
                let value =
                    row !== null ? render.previousTableData[row][index] : render.previousTableData[index][column];
                let r = new RegExp(variable, 'g');

                processedFormula = processedFormula.replace(r, ' ' + value + ' ');
            }
        }

        // Evaluate formula.
        this.numberOfDataPoints = 0;
        this.dataPointIdsPerQuery = [];
        let value;
        try {
            value = eval(processedFormula);
        } catch (e) {
            value = null;
        }

        // Don't show arrays or objects, that means formula is most probably invalid.
        if (Array.isArray(value) || typeof value === 'object') {
            value = '';
        }

        // Compose result.
        const cellData = new _entities_VirtualTableCell__WEBPACK_IMPORTED_MODULE_0__["VirtualTableCell"]();
        cellData.value = value;
        cellData.formula = formula;
        cellData.numberOfDataPoints = this.numberOfDataPoints;
        cellData.dataPointIdsPerQuery = this.dataPointIdsPerQuery;
        if (this.dataPointIdsPerQuery.length === 1) {
            cellData.dataPointIds = this.dataPointIdsPerQuery[0].ids;
        }

        return cellData;
    }

    parseArguments(args) {
        if (args.length > 0 && Array.isArray(args[0])) {
            if (args[0].length > 0) {
                return args[0].map(dataPoint => dataPoint.value);
            } else {
                return [0];
            }
        }

        return args;
    }
}

const dataExplorerEval = new DataExplorerEval();

function MIN() {
    return Math.min.apply(null, dataExplorerEval.parseArguments(arguments));
}

function MAX() {
    return Math.max.apply(null, dataExplorerEval.parseArguments(arguments));
}

function SUM() {
    const args = dataExplorerEval.parseArguments(arguments);
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    return sum;
}

function AVERAGE() {
    const args = dataExplorerEval.parseArguments(arguments);
    let sum = SUM.apply(null, args);

    return sum / args.length;
}

function QUERY(filters) {
    const allFilters = Object.assign({}, dataExplorerEval.filters, filters);
    const dataPoints = _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getCurrentDataPoints();
    const results = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__["dataExplorerHelper"].getMatchingDataPoints(dataPoints, allFilters);

    // Save stats about matched data-points.
    dataExplorerEval.numberOfDataPoints += results.length;
    dataExplorerEval.dataPointIdsPerQuery.push({
        filters: filters,
        ids: results.map(dataPoint => dataPoint.id)
    });

    return results;
}


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerFormulas.js":
/*!******************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerFormulas.js ***!
  \******************************************************************/
/*! exports provided: dataExplorerFormulas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerFormulas", function() { return dataExplorerFormulas; });
/* harmony import */ var _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataExplorerHelper */ "./src/assets/js/tabs/data-explorer/DataExplorerHelper.js");
/* harmony import */ var _DataExplorerQueryBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataExplorerQueryBuilder */ "./src/assets/js/tabs/data-explorer/DataExplorerQueryBuilder.js");
/* harmony import */ var _DataExplorerSections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataExplorerSections */ "./src/assets/js/tabs/data-explorer/DataExplorerSections.js");




class DataExplorerFormulas {
    addFormulaSection(container, id, formula) {
        // Create generic section.
        let section = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_2__["dataExplorerSections"].addSection('formula', container, 'Formula', id);
        section.addClass('item-with-formula');

        // Create formula input.
        let input = $(
            '<div contenteditable="true" class="_formula _prevent-sort" name="formula" id="formula_input_' +
                id +
                '" value="">'
        );
        input.html(formula);
        this.initInput(input);
        section.append(input);

        // Create query button.
        let queryElement = $('<span class="_button _query"><i class="fa fa-flask" aria-hidden="true"></i></span>');
        queryElement.on('click', e => {
            this.onBuilderClick(input, e);
        });
        section.append(queryElement);

        return section;
    }

    initInput(input) {
        this.parseFormulaInput(input);

        input.on('blur', e => {
            this.onInputBlur(e);
        });
        input.on('click', 'i', e => {
            this.onInputBuilderClick(e);
        });
        input.on('keydown', e => {
            this.onInputKeyDown(e);
        });
    }

    onInputBlur(e) {
        const input = $(e.target);

        // Skip?
        if (input.prop('data-skip-blur')) {
            input.prop('data-skip-blur', false);
            return;
        }

        this.parseFormulaInput(input);
        _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_0__["dataExplorerHelper"].saveAndUpdate();
    }

    onInputBuilderClick(e) {
        const icon = $(e.target);
        const input = $(e.delegateTarget);
        let filters;
        try {
            filters = JSON.parse(icon.attr('data-args'));
        } catch (e) {
            filters = {};
        }

        // Skip next blur event.
        input.prop('data-skip-blur', true);
        _DataExplorerQueryBuilder__WEBPACK_IMPORTED_MODULE_1__["dataExplorerQueryBuilder"].open(filters, query => {
            // Update formula.
            query = query.slice(6, -1);
            icon.attr('data-args', query);
            this.parseFormulaInput(input);

            if (!input.attr('data-equality-prefix')) {
                _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_0__["dataExplorerHelper"].saveAndUpdate();
            } else {
                input.trigger('blur');
            }
        });

        e.preventDefault();
    }

    onInputKeyDown(e) {
        if (e.keyCode === 13) {
            $(e.target).blur();
            e.preventDefault();
        }
    }

    onBuilderClick(input, e) {
        _DataExplorerQueryBuilder__WEBPACK_IMPORTED_MODULE_1__["dataExplorerQueryBuilder"].open({}, query => {
            if (input.attr('data-equality-prefix')) {
                input.html('=' + query);
                this.parseFormulaInput(input);
                input.trigger('blur');
            } else {
                input.html(query);
                this.parseFormulaInput(input);
                _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_0__["dataExplorerHelper"].saveAndUpdate();
            }
        });

        e.preventDefault();
    }

    parseFormulaInput(input) {
        if (input.attr('data-equality-prefix')) {
            // Check if we need and have an equality prefix.
            if (input.html().slice(0, 1) !== '=') {
                return;
            }

            // Remove equality prefix.
            input.html(input.html().slice(1));

            this.parseFormulaInputWithoutPrefix(input);

            // Add back equality prefix.
            input.html('=' + input.html());
        } else {
            this.parseFormulaInputWithoutPrefix(input);
        }
    }

    parseFormulaInputWithoutPrefix(input) {
        // Do all of this twice. E.g. if user entered formula in lower-case,
        // we need to do this twice to that the data-formula is properly converted to uppercase.
        for (let i = 0; i < 2; i++) {
            // Transform images back to formulas.
            const inputClone = input.clone();
            inputClone.find('[data-args]').each((index, element) => {
                // Get original value.
                const value = $(element).attr('data-args');

                // Replace image.
                $(element).replaceWith(value);
            });

            // Get formula.
            let value = inputClone.text();
            value = value.trim();
            inputClone.remove();

            // Parse formula.
            input.attr('data-formula', value);
            const result = this.convertFormulaToHtml(value);
            input.html(result);
        }
    }

    convertFormulaToHtml(formula) {
        let rootNode;

        // Parse using math.js.
        try {
            rootNode = math.parse(formula);
        } catch (e) {
            // Cannot parse, simply return the formula as-is.
            return formula;
        }

        // Turn functions to uppercase.
        rootNode = rootNode.transform(node => {
            if (node.isFunctionNode && node.fn.isSymbolNode) {
                return new math.expression.node.FunctionNode(node.fn.name.toUpperCase(), node.args);
            } else {
                return node;
            }
        });

        // Transform to string.
        const customString = {
            QUERY: function(node, options) {
                // Remove surrounding "QUERY()".
                const args = node.toString().slice(6, -1);

                // Create image.
                const img = $('<i class="fa fa-flask" aria-hidden="true"></i>');
                img.attr('data-args', args);

                // Return string.
                return 'QUERY(' + img[0].outerHTML + ')';
            }
        };
        let newValue = rootNode.toString({
            handler: customString,
            lowerExp: -100,
            upperExp: 100
        });
        if (typeof newValue !== 'string' || newValue === 'undefined') {
            newValue = '';
        }

        return newValue;
    }
}

const dataExplorerFormulas = new DataExplorerFormulas();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerHelper.js":
/*!****************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerHelper.js ***!
  \****************************************************************/
/*! exports provided: dataExplorerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerHelper", function() { return dataExplorerHelper; });
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _entities_VirtualTableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/VirtualTableCell */ "./src/assets/js/entities/VirtualTableCell.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataExplorer */ "./src/assets/js/tabs/data-explorer/DataExplorer.js");
/* harmony import */ var _DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataExplorerAnalyses */ "./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js");
/* harmony import */ var _DataExplorerSections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataExplorerSections */ "./src/assets/js/tabs/data-explorer/DataExplorerSections.js");
/* harmony import */ var _DataExplorerStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataExplorerStorage */ "./src/assets/js/tabs/data-explorer/DataExplorerStorage.js");
/* harmony import */ var _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DataExplorerVirtualTable */ "./src/assets/js/tabs/data-explorer/DataExplorerVirtualTable.js");









class DataExplorerHelper {
    constructor() {
        const dataExplorerHelper = this;

        String.prototype.replaceBetween = function(start, end, what) {
            return this.substring(0, start) + what + this.substring(end);
        };

        this.onStart = function(evt) {
            let s = '.item-group:not(._filters)';

            $(s).each(function() {
                if (!dataExplorerHelper.doTypesMatch(evt.item, this)) {
                    $(this).addClass('_disabled');
                } else {
                    $(this).removeClass('_disabled');
                }
            });
        };

        this.onEnd = function(evt) {
            $('.item-group').removeClass('_disabled');
            dataExplorerHelper.saveAndUpdate();
        };

        this.onMove = function(evt, originalEvent) {
            // Check for matching box types.
            if (!dataExplorerHelper.doTypesMatch(evt.dragged, evt.to)) {
                return false;
            }

            // Check for duplicates in other filter sections.
            if (
                evt.to !== evt.from &&
                $(evt.to).hasClass('_filters') &&
                dataExplorerHelper.getMatchingFilters(evt.dragged, evt.to) > 0
            ) {
                return false;
            }
            return true;
        };

        this.onSort = function(evt) {
            let container = $(evt.to);

            if (container.attr('data-rows') === '') {
                dataExplorerHelper.resetRowIds();
            } else if (container.attr('data-columns') === '') {
                dataExplorerHelper.resetColumnIds();
            }

            _DataExplorerSections__WEBPACK_IMPORTED_MODULE_5__["dataExplorerSections"].syncTitle($(evt.to).closest('.row-or-column-card'));
        };

        this.onAdd = function(evt) {
            _DataExplorerSections__WEBPACK_IMPORTED_MODULE_5__["dataExplorerSections"].syncTitle($(evt.from).closest('.row-or-column-card'));
            _DataExplorerSections__WEBPACK_IMPORTED_MODULE_5__["dataExplorerSections"].syncTitle($(evt.to).closest('.row-or-column-card'));
        };

        this.sortableArgs = {
            animation: 200,
            group: 'attributes',
            filter: '._filters, input, .modal, .remove-filter',
            preventOnFilter: false,
            onStart: this.onStart,
            onEnd: this.onEnd,
            onMove: this.onMove,
            onSort: this.onSort,
            onAdd: this.onAdd
        };

        this.sortableArgsForAttrs = $.extend({}, this.sortableArgs, {
            group: {
                name: 'attributes',
                pull: 'clone',
                put: true,
                revertClone: true
            },
            animation: 0,
            sort: false,
            onAdd: function(evt) {
                // Remove everything dropped here.
                $(evt.item).remove();
            },
            filter: '.remove-filter'
        });
    }

    isChartEnabledForItem(item) {
        return (
            $(item)
                .find('._chart')
                .attr('data-checked') === 'true'
        );
    }

    isChartEnabledForColumn(index) {
        return this.isChartEnabledForItem($('#column_box > .item:nth-child(' + index + ') '));
    }

    isChartEnabledForRow(index) {
        return this.isChartEnabledForItem($('#row_box > .item:nth-child(' + index + ') '));
    }

    getFiltersFromDom(domFilters) {
        let filtersByType = {};

        // Group filters by type.
        for (let i = 0; i < domFilters.length; i++) {
            let element = $(domFilters[i]);
            let value = element.attr('data-value');
            let type = element.attr('data-filter-type');

            if (!(type in filtersByType)) {
                filtersByType[type] = [];
            }

            filtersByType[type].push(value);
        }

        return filtersByType;
    }

    checkFilters(dataPoint, filters) {
        // Match filters.
        for (let dimension in filters) {
            let dimensionFilters = filters[dimension];
            let matches = false;

            if (typeof dimensionFilters === 'undefined') {
                continue;
            } else if (!Array.isArray(dimensionFilters)) {
                dimensionFilters = [dimensionFilters];
            }

            // Match at least one filter per type.
            for (let j = 0; j < dimensionFilters.length; j++) {
                let value = dimensionFilters[j];

                if (dataPoint[dimension] == value) {
                    matches = true;
                    break;
                }
            }

            if (!matches) {
                return false;
            }
        }

        return true;
    }

    getMatchingDataPoints(dataset, filters) {
        let dataPoints = [];

        dataset.forEach(dataPoint => {
            // Check if filters match.
            if (!this.checkFilters(dataPoint, filters)) {
                return;
            }

            dataPoints.push(dataPoint);
        });

        return dataPoints;
    }

    /**
     * Sum up values of all data points.
     *
     * @param {Array} dataPoints
     * @param {boolean} sumOfMultiple If true, return a VirtualTableCell object;
     * @returns {number|VirtualTableCell}
     */
    getSumOfDataPoints(dataPoints, sumOfMultiple = false) {
        if (dataPoints.length === 0) {
            return 0;
        }

        let total = 0;
        let dataPointIds = [];

        // Group all data-points by non-empty dimensions.
        const dimensions = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject().getIdentityDimensions();
        let sets = {};
        dataPoints.forEach(dataPoint => {
            // Get the set "ID". We use "T" (true) for each non-empty dimension, and "F" (false) for each empty dimesnsion.
            let setId = '';
            dimensions.forEach(dimension => {
                if (dimension.slug in dataPoint && dataPoint[dimension.slug]) {
                    setId += 'T';
                } else {
                    setId += 'F';
                }
            });

            // Create set if it doesn't already exist.
            if (!(setId in sets)) {
                sets[setId] = [];
            }

            // Add data point to set.
            sets[setId].push(dataPoint);
        });

        // Use the set with the smallest number of non-empty dimensions.
        let setIds = Object.keys(sets);
        setIds = setIds.sort((a, b) => {
            return a.split('T').length - b.split('T').length;
        });
        dataPoints = sets[setIds[0]];

        // Sum up data-points.
        dataPoints.forEach(dataPoint => {
            // Get scale.
            let value = dataPoint['value'];
            if ('scale' in dataPoint) {
                value *= _Common__WEBPACK_IMPORTED_MODULE_0__["common"].parseScale(dataPoint['scale']);
            }

            // Add value.
            total += value;
            dataPointIds.push(dataPoint.id);
        });

        // Save data about each particular data-point.
        if (sumOfMultiple === true) {
            const cellData = new _entities_VirtualTableCell__WEBPACK_IMPORTED_MODULE_1__["VirtualTableCell"]();
            cellData.value = total;
            cellData.dataPointIds = dataPointIds;
            cellData.numberOfDataPoints = dataPointIds.length;

            return cellData;
        }

        return total;
    }

    getMatchingFilters(item, container) {
        let value = $(item).attr('data-value');
        let matches = $(container).find('[data-value="' + value + '"]');

        return matches.length;
    }

    resetColumnIds() {
        _DataExplorer__WEBPACK_IMPORTED_MODULE_3__["dataExplorer"].columnSequence = dataExplorerHelper.resetBoxIds($('#column_box'), 'C');
    }

    resetRowIds() {
        _DataExplorer__WEBPACK_IMPORTED_MODULE_3__["dataExplorer"].rowSequence = dataExplorerHelper.resetBoxIds($('#row_box'), 'R');
    }

    resetBoxIds(container, prefix) {
        let swapPrefix = '_tempswap';
        let idElements = container.find('._id');
        let originalIds = [];
        let swapIds = [];
        let newIds = [];
        let counter = 1;

        // Get IDs.
        idElements.each(function() {
            originalIds.push($(this).text());
            swapIds.push(swapPrefix + counter);
            newIds.push(prefix + counter);
            counter++;
        });

        // Replace formulas.
        this.replaceBoxFormulas(container, originalIds, swapIds);
        this.replaceBoxFormulas(container, swapIds, newIds);

        // Replace IDs.
        for (let i = 0; i < newIds.length; i++) {
            $(idElements[i]).text(newIds[i]);
        }

        return counter;
    }

    replaceBoxFormulas(container, needle, replacement) {
        container.find('._formula').each(function() {
            let $this = $(this);
            let formula = $this.val();

            for (let i = 0; i < needle.length; i++) {
                formula = dataExplorerHelper.replaceFullWord(formula, needle[i], replacement[i]);
            }

            $this.val(formula);
        });
    }

    // https://stackoverflow.com/a/27472191
    replaceFullWord(haystack, needle, replacement) {
        let regex = new RegExp('\\b' + needle + '\\b', 'g');

        return haystack.replace(regex, replacement);
    }

    createId(id) {
        let span = $('<span class="_button _id" name="id">' + id + '</span>');
        //
        // span.on('mousedown', function (e) {
        //     // Is there a formula in focus?
        //     let focused = $('._formula:focus');
        //
        //     if (focused.length > 0) {
        //         focused.val(focused.val() + $(this).text());
        //         dataExplorerHelper.saveAndUpdateDelayed();
        //     }
        //
        //     e.preventDefault();
        // });

        return span;
    }

    createItem(id, dataType, value, filterName) {
        let li = $('<li class="item" data-type="' + dataType + '" data-value="' + value + '">' + value + '</li>');

        if (id) {
            li.append(dataExplorerHelper.createId(id));
        }

        if (typeof filterName !== 'undefined') {
            li.attr('data-filter-type', filterName);
        }

        return li;
    }

    doTypesMatch(element, box) {
        let elementType = $(element).attr('data-type');
        let boxType = $(box).attr('data-type');

        if (!elementType && ($(box).attr('data-columns') === '' || $(box).attr('data-rows') === '')) {
            return true;
        }

        if (elementType === 'kpi' && boxType === 'filter') {
            return true;
        }

        if (!(boxType === 'all' || elementType === boxType)) {
            return false;
        }

        return true;
    }

    saveAndUpdate() {
        dataExplorerHelper.addFilterRemoveButton();
        _DataExplorerStorage__WEBPACK_IMPORTED_MODULE_6__["dataExplorerStorage"].save(_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_4__["dataExplorerAnalyses"].currentAnalysisId);
        _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_7__["dataExplorerVirtualTable"].updateTable();
    }

    saveAndUpdateDelayed() {
        _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_7__["dataExplorerVirtualTable"].updateTableDelayed();
        _DataExplorerStorage__WEBPACK_IMPORTED_MODULE_6__["dataExplorerStorage"].saveDelayed();
    }

    addFilterRemoveButton() {
        $('.main_sidebar')
            .find('.item-with-filters .item-group .item, .global-filter-container .item[data-type="filter"]')
            .each(function() {
                if ($(this).children('.remove-filter').length === 0) {
                    $(this).append('<i class="fa fa-icon kpmg-icon-close remove-filter"></i>');
                }
            });
    }
}

const dataExplorerHelper = new DataExplorerHelper();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerImport.js":
/*!****************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerImport.js ***!
  \****************************************************************/
/*! exports provided: dataExplorerImport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerImport", function() { return dataExplorerImport; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResizableDivider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ResizableDivider */ "./src/assets/js/ResizableDivider.js");
/* harmony import */ var _services_ImportXlsxService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ImportXlsxService */ "./src/assets/js/services/ImportXlsxService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataExplorerAnalyses */ "./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js");
/* harmony import */ var _table_DataExplorerCellEditing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/DataExplorerCellEditing */ "./src/assets/js/tabs/data-explorer/table/DataExplorerCellEditing.js");
/* harmony import */ var _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table/DataExplorerRenderTable */ "./src/assets/js/tabs/data-explorer/table/DataExplorerRenderTable.js");








class DataExplorerImport {
    constructor() {
        this.rightTableFocus = false;
        this.rigthTableSelection = {};
        this.copiedFromTable = false;

        $(document).on('paste', '#data-explorer-table .wj-cell', event => {
            let clipboardData, pastedData;

            // Stop data actually being pasted into div
            event.stopPropagation();
            event.preventDefault();

            if (!_table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_6__["dataExplorerRenderTable"].flexgrid.selection.isSingleCell) {
                return;
            }

            // Get pasted data via clipboard API
            clipboardData = event.clipboardData || window.clipboardData || event.originalEvent.clipboardData;
            pastedData = clipboardData.getData('Text');

            const rows = pastedData.split('\n');
            let cells = [];
            rows.map(row => {
                if (row) {
                    cells.push(row.split('\t'));
                }
            });
            const col = _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_6__["dataExplorerRenderTable"].flexgrid.selection._col;
            const row = _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_6__["dataExplorerRenderTable"].flexgrid.selection._row;

            if (row + cells.length > _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_6__["dataExplorerRenderTable"].flexgrid.rows.length) {
                alert("Attempted to paste selection that does not fit this table's content.");

                return;
            }

            if (col + cells[0].length > _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_6__["dataExplorerRenderTable"].flexgrid.columns.length) {
                alert("Attempted to paste selection that does not fit this table's content.");

                return;
            }

            let rowCounter = -1;
            cells.map((rowCells, rowIndex) => {
                rowCounter++;

                let colCounter = -1;
                rowCells.map((cell, colIndex) => {
                    _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_6__["dataExplorerRenderTable"].flexgrid.finishEditing(true);
                    const oldVal = _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_6__["dataExplorerRenderTable"].flexgrid.getCellData(row + rowIndex, col + colIndex, false);
                    _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_6__["dataExplorerRenderTable"].flexgrid.setCellData(row + rowIndex, col + colIndex, cell);
                    const dataType = _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_6__["dataExplorerRenderTable"].flexgrid.columns[col + colIndex].dataType;
                    const cancel = _table_DataExplorerCellEditing__WEBPACK_IMPORTED_MODULE_5__["dataExplorerCellEditing"].cellEditValidation({
                        oldVal: oldVal,
                        newVal: cell,
                        dataType: dataType,
                        row: row + rowIndex,
                        col: col + colIndex
                    });
                    colCounter++;

                    if (!cancel) {
                        _table_DataExplorerCellEditing__WEBPACK_IMPORTED_MODULE_5__["dataExplorerCellEditing"].cellEditAddDataPoint({
                            row: row + rowIndex,
                            col: col + colIndex,
                            val: cell,
                            colCounter: colCounter,
                            rowCounter: rowCounter,
                            copiedFromRightTable: this.copiedFromTable
                        });
                    } else {
                        _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_6__["dataExplorerRenderTable"].flexgrid.setCellData(row + rowIndex, col + colIndex, oldVal);
                    }
                });
            });
        });

        $(document).on('copy', event => {
            this.copiedFromTable = this.rightTableFocus;
        });
    }

    init() {
        $('#data_explorer_import_table').hide();

        $('#data_explorer_import_table_button').on('click', e => {
            $('#data_explorer_import_table').val('');
            $('#data_explorer_import_table').trigger('click');
        });

        $('#data_explorer_import_table').on('change', e => {
            $('.main-content #data_explorer_imported_table').remove();
            $('#single_analysis ._split-screen-mode-switch input').prop('checked', true);

            this.loadFile(e);
        });
    }

    cancelImport() {
        $('.main-content .tab-content').css('max-width', '100%');
        $('.main-content #data_explorer_imported_table').remove();
        $('#data_explorer_import_table').val('');
    }

    createRightTable(uuid) {
        const rightFlexgrid = new wijmo.grid.FlexGrid($('#data_explorer_imported_table')[0], {
            isReadOnly: true,
            itemsSource: [],
            onGotFocus: () => {
                this.rightTableFocus = true;
            },
            onLostFocus: () => {
                this.rightTableFocus = false;
            },
            onSelectionChanged: () => {
                const selection = rightFlexgrid.selection;
                this.rigthTableSelection = {
                    row1: Math.min(selection._row, selection._row2),
                    row2: Math.max(selection._row, selection._row2),
                    col1: Math.min(selection._col, selection._col2),
                    col2: Math.max(selection._col, selection._col2)
                };
            }
        });

        rightFlexgrid.itemsSource = _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].getCurrentProject().sourceFiles[uuid].itemsSource;
        rightFlexgrid.collectionView.refresh();
        $('#data_explorer_imported_table > div')
            .not('._files-tabs')
            .css('height', '95%');
    }

    async loadFile(e) {
        this.splitScreen();

        _ResizableDivider__WEBPACK_IMPORTED_MODULE_1__["resizableDivider"].enableResizable(
            '.main-content > .tab-content',
            '#data_explorer_imported_table',
            'width',
            { handles: 'e' },
            { minWidth: 300, maxWidth: 1000 },
            () => {
                _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_6__["dataExplorerRenderTable"].updateTable();
            }
        );

        // Load wijmo grid data.
        this.uuid = await _services_ImportXlsxService__WEBPACK_IMPORTED_MODULE_2__["importXlsxService"].importXlsx(e.target.files[0]);
        _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"]
            .getCurrentProject()
            .analyses[_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_4__["dataExplorerAnalyses"].currentAnalysisId].dropboxFiles.push(this.uuid);

        $('.allow-divider').on('resize', () => {
            _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_6__["dataExplorerRenderTable"].updateTable();
        });

        this.createRightTable(this.uuid);

        // Save project.
        _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].saveCurrentProject();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].syncViews();

        this.refreshFilesTabs();
    }

    refreshFilesTabs() {
        $('._files-tabs').empty();
        const analysis = _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].getCurrentProject().analyses[_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_4__["dataExplorerAnalyses"].currentAnalysisId];
        analysis.dropboxFiles.map(uuid => {
            const file = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"], `currentProject.sourceFiles[${uuid}]`);
            const active = this.uuid === uuid ? '_active-tab' : '';
            $('._files-tabs').prepend(
                '<div class="_file-tab ' + active + '" data-uuid="' + uuid + '">' + file.name + '</div>'
            );
        });
    }

    splitScreen() {
        $('.main-content').append('<div id="data_explorer_imported_table"><div class="_files-tabs"></div></div>');
    }
}

const dataExplorerImport = new DataExplorerImport();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerQueryBuilder.js":
/*!**********************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerQueryBuilder.js ***!
  \**********************************************************************/
/*! exports provided: dataExplorerQueryBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerQueryBuilder", function() { return dataExplorerQueryBuilder; });
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataExplorerHelper */ "./src/assets/js/tabs/data-explorer/DataExplorerHelper.js");




class DataExplorerQueryBuilder {
    constructor() {
        this.filters = {};
        this.formula = '';
        this.dimensionInputs = {};

        // DOM
        this.rootElement = $('#dataExplorerQueryBuilder');
        this.dimensionsElement = this.rootElement.find('._dimensions');
        this.dimensionsTemplate = this.dimensionsElement.find('._template').detach();
        this.formulaElement = this.rootElement.find('._formula ._text');
        if (!localStorage.getItem('blobExcelData'))
            this.flexgrid = new wijmo.grid.FlexGrid(this.rootElement.find('._preview')[0], {
                isReadOnly: true,
                selectionMode: 'Row',
                itemsSource: [],
                autoGenerateColumns: false,
                formatItem: (s, e) => {
                    if (e.panel === s.cells) {
                        const item = s.rows[e.row].dataItem;
                        const binding = s.columns[e.col].binding;

                        switch (binding) {
                            case 'value':
                            case '__normalized_value':
                                if (e.cell.childNodes[0]) {
                                    e.cell.childNodes[0].nodeValue = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].formatNumber(item[binding]);
                                }
                                break;
                        }
                    }
                }
            });

        // Events
        this.rootElement.on('hidden.bs.modal', () => {
            this.onHidden();
        });
        this.rootElement.on('shown.bs.modal', () => {
            this.onShown();
        });
        this.rootElement.find('._save-changes').on('click', () => {
            this.saveChanges();
        });
    }

    /**
     * Open the visual query builder.
     * @param filters Selected values for each dimension.
     * @param callback Function to call once the user hits "Save"
     */
    open(filters, callback) {
        // Save callback.
        this.callback = callback;

        // Add dimensions.
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getCurrentProject();
        const dimensions = project.getDimensions();
        dimensions.forEach(dimension => {
            if (dimension.slug === 'value' || dimension.slug === 'scale') {
                return;
            }

            // Label
            const d = this.dimensionsTemplate.clone();
            d.find('._label').html(dimension.label);

            // Input
            const values = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].getUniqueValues(project.dataPoints, dimension.slug);
            const input = new wijmo.input.MultiSelect(d.find('._dropdown')[0], {
                placeholder: 'Inherit',
                // isEditable: true,
                itemsSource: values,
                onCheckedItemsChanged: () => {
                    this.updateFormula();
                    this.updateFlexGrid();
                }
            });
            input.checkedItems = filters.hasOwnProperty(dimension.slug) ? filters[dimension.slug] : [];
            this.dimensionInputs[dimension.slug] = input;

            // Append.
            this.dimensionsElement.append(d);
        });

        // Show modal.
        this.rootElement.modal('show');
    }

    saveChanges() {
        // Use callback.
        this.callback(this.formula);

        // Hide modal.
        this.rootElement.modal('hide');
    }

    updateFormula() {
        const formula = {};

        // Consider each dimension input.
        for (const dimension in this.dimensionInputs) {
            const input = this.dimensionInputs[dimension];

            // Ignore inputs without any checked items.
            if (input.checkedItems.length === 0) {
                continue;
            }

            // Save checked items.
            formula[dimension] = input.checkedItems;
        }

        // Save as final formula.
        this.filters = formula;
        this.formula = 'QUERY(' + JSON.stringify(formula) + ')';
        this.formulaElement.val(this.formula);
    }

    updateFlexGrid() {
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getCurrentProject();

        // Set columns.
        {
            this.flexgrid.columns.length = 0;

            const gridCol = new wijmo.grid.Column();
            gridCol.binding = '__normalized_value';
            gridCol.header = 'Normalized Value';
            this.flexgrid.columns.push(gridCol);

            project.dimensions.forEach(dimension => {
                const gridCol = new wijmo.grid.Column();
                gridCol.binding = dimension.slug;
                gridCol.header = dimension.label;
                this.flexgrid.columns.push(gridCol);
            });
        }

        // Fetch items.
        const dataPoints = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_2__["dataExplorerHelper"].getMatchingDataPoints(project.dataPoints, this.filters);
        dataPoints.forEach(item => {
            // Normalize values.
            item['__normalized_value'] = item.value * _Common__WEBPACK_IMPORTED_MODULE_0__["common"].parseScale(item.scale) * _Common__WEBPACK_IMPORTED_MODULE_0__["common"].parseInverse(item.inverse);
        });
        this.flexgrid.itemsSource = dataPoints;
    }

    onHidden() {
        // Remove dimensions.
        for (const dimension in this.dimensionInputs) {
            const input = this.dimensionInputs[dimension];
            input.dispose();
        }
        this.dimensionInputs = {};
        this.dimensionsElement.html('');
    }

    onShown() {
        this.updateFormula();
        this.updateFlexGrid();
    }
}

const dataExplorerQueryBuilder = new DataExplorerQueryBuilder();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerRenderChart.js":
/*!*********************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerRenderChart.js ***!
  \*********************************************************************/
/*! exports provided: dataExplorerRenderChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerRenderChart", function() { return dataExplorerRenderChart; });
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataExplorerAnalyses */ "./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js");
/* harmony import */ var _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataExplorerHelper */ "./src/assets/js/tabs/data-explorer/DataExplorerHelper.js");
/* harmony import */ var _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataExplorerVirtualTable */ "./src/assets/js/tabs/data-explorer/DataExplorerVirtualTable.js");






/**
 * Class to render a SVG chart based on the HighCharts library.
 */
class DataExplorerRenderChart {
    constructor() {
        this._chart = null;
        this.outputMode = 'both';
        this.chartMode = 'bar';
        this.chartStackingMode = '';
    }

    renderChart() {
        // Convert table data into chart data.
        let series = [];
        let categories = [];

        if (this.chartMode === 'pie') {
            let data = [];

            for (let i = 0; i < _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_4__["dataExplorerVirtualTable"].tableData.length; i++) {
                let row = _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_4__["dataExplorerVirtualTable"].tableData[i];

                if (!_DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__["dataExplorerHelper"].isChartEnabledForRow(i + 1)) {
                    continue;
                }

                for (let j = 1; j < row.length; j++) {
                    if (!_DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__["dataExplorerHelper"].isChartEnabledForColumn(j)) {
                        continue;
                    }

                    let value = row[j].value;
                    value = typeof value === 'undefined' ? 0 : value;
                    if (value >= 0) {
                        data.push({
                            name: $('#row_box > .item')
                                .eq(i)
                                .find('input')
                                .val(),
                            y: value
                        });
                    }

                    break;
                }
            }

            series = [
                {
                    data: data
                }
            ];
        } else {
            for (let i = 0; i < _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_4__["dataExplorerVirtualTable"].tableData.length; i++) {
                let row = _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_4__["dataExplorerVirtualTable"].tableData[i];
                let data = [];

                const analysis = _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getCurrentProject().analyses[_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_2__["dataExplorerAnalyses"].currentAnalysisId];
                if (!_DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__["dataExplorerHelper"].isChartEnabledForRow(analysis.tableRowToCardNo[i + 1] + 1)) {
                    continue;
                }

                for (let j = 1; j < row.length; j++) {
                    if (!_DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__["dataExplorerHelper"].isChartEnabledForColumn(j)) {
                        continue;
                    }

                    let value = row[j].value;
                    value = typeof value === 'undefined' ? 0 : value;
                    data.push(value);
                }

                series.push({
                    name: row[0].value,
                    data: data
                });
            }

            let cols = $('#column_box > .item');
            for (let i = 0; i < cols.length; i++) {
                if (!_DataExplorerHelper__WEBPACK_IMPORTED_MODULE_3__["dataExplorerHelper"].isChartEnabledForItem(cols[i])) {
                    continue;
                }

                categories.push(
                    $(cols[i])
                        .find('input')
                        .val()
                );
            }
        }

        if (this._chart) {
            this._chart.destroy();
        }

        this._chart = Highcharts.chart('outputChart', {
            chart: {
                type: this.chartMode
            },
            plotOptions: {
                series: {
                    stacking: this.chartStackingMode
                },
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    showInLegend: true,
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            series: series,
            tooltip: {
                formatter: function() {
                    let val = this.y;
                    val /= parseFloat($('#scale').val());
                    val = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].formatNumber(val);

                    return val;
                }
            }
        });
    }
}

const dataExplorerRenderChart = new DataExplorerRenderChart();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerSecondarySidebar.js":
/*!**************************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerSecondarySidebar.js ***!
  \**************************************************************************/
/*! exports provided: dataExplorerSecondarySidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerSecondarySidebar", function() { return dataExplorerSecondarySidebar; });
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorerAttributesTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataExplorerAttributesTree */ "./src/assets/js/tabs/data-explorer/DataExplorerAttributesTree.js");
/* harmony import */ var _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataExplorerHelper */ "./src/assets/js/tabs/data-explorer/DataExplorerHelper.js");




class DataExplorerSecondarySidebar {
    init() {
        this.container = $('#output_table_sidebar');
        this.attrContainer = $('#attr_dim_list');
        this.secondarySidebar = this.container.find('.secondary_sidebar');
        $('._contains-visible').removeClass('_contains-visible');
        $('._search-result-hidden').removeClass('_search-result-hidden');

        // Quick search for secondary sidebar
        $('.secondary_sidebar-menu input').on('change keydown keyup', e => {
            $('._contains-visible').removeClass('_contains-visible');
            $('._search-result-hidden').removeClass('_search-result-hidden');
            let val = $(e.target)
                .val()
                .toLowerCase();

            // Reset non-matching entries within target group.
            this.attrContainer.find('._row').removeClass('_search-result-hidden');

            this.attrContainer.find('li').each((index, item) => {
                let $item = $(item);

                if (
                    $item
                        .html()
                        .toLowerCase()
                        .indexOf(val) !== -1 ||
                    val === ''
                ) {
                    $item.removeClass('_hidden');
                } else {
                    $item.addClass('_hidden');
                }
            });

            this.attrContainer.find('._group').each((index, item) => {
                let visible = $(item).find('li:not(._hidden)');

                if (visible.length !== 0) {
                    $(item).show();

                    // Special bug fix
                    visible.each((index, visibleEntry) => {
                        $(visibleEntry)
                            .parentsUntil($('#available_box_names'), '._row')
                            .addClass('_contains-visible');
                    });

                    // Hide non-matching entries within target group.
                    $(item)
                        .find('li._hidden')
                        .each((index, newItem) => {
                            $(newItem)
                                .closest('._row:not(._contains-visible)')
                                .addClass('_search-result-hidden');
                        });
                } else {
                    $(item).hide();
                }
            });
        });

        // Open secondary sidebar when clicking on the main buttons "Columns", "Rows", or "Global".
        this.container.find('#main_sidebar_nav_tabs a').on('click', e => {
            const href = $(e.target).attr('href');

            // Open sidebar.
            this.secondarySidebar.addClass('_open');

            // Hide or show KPIs group.
            this.secondarySidebar
                .find('#attr_dim_list ._group:last-child')
                .css('display', href !== '#main_sidebar_global' ? '' : 'none');

            // Hide or show specific KPIs.
            this.secondarySidebar.find('#attr_dim_list ._group:last-child li.item[data-type="kpi"]').each(function() {
                const value = $(this).attr('data-value');

                switch (value) {
                    case 'CAGR':
                    case 'YoY':
                    case 'Delta':
                        $(this).css('display', href === '#main_sidebar_columns' ? '' : 'none');
                        break;

                    case 'Margin':
                        $(this).css('display', href === '#main_sidebar_rows' ? '' : 'none');
                        break;
                }
            });
        });

        // Close secondary sidebar.
        this.secondarySidebar.find('._close').on('click', () => {
            this.secondarySidebar.removeClass('_open');
        });
    }

    load() {
        // Filtered dimensions.
        let dimensions = _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].currentProject.dimensions;
        let filteredDimensions = dimensions.filter(dimension => {
            return ['value', 'scale'].indexOf(dimension.slug) === -1;
        });

        // Attribute trees
        this.dataExplorerAttributesTree = [];
        for (let i = 0; i < filteredDimensions.length; i++) {
            this.dataExplorerAttributesTree.push(new _DataExplorerAttributesTree__WEBPACK_IMPORTED_MODULE_1__["DataExplorerAttributesTree"](filteredDimensions[i].slug));
            this.dataExplorerAttributesTree[i].init();
        }

        // Attributes tree
        this.attrContainer.html('');
        for (let i = 0; i < this.dataExplorerAttributesTree.length; i++) {
            let tree = $('<div id="available_box_names" class="available_box-sub tree-view" data-type="all"></div>');

            this.addGroup(tree, this.dataExplorerAttributesTree[i].dimensionSlug);
            this.dataExplorerAttributesTree[i].load(tree);
        }

        // Other dimensions
        {
            let kpis = ['Custom Formula', 'CAGR', 'YoY', 'Delta', 'Margin', 'Blank'];
            this.addToList(kpis, 'kpi', 'KPIs');
        }
    }

    addToList(items, dataType, filterName) {
        // Create list.
        let ul = $('<ul class="_list"></ul>');
        for (let i in items) {
            let item = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_2__["dataExplorerHelper"].createItem(
                null,
                dataType,
                items[i],
                dataType === 'filter' ? filterName : undefined
            );
            ul.append(item);
        }

        // Add to group.
        this.addGroup(ul, filterName);

        // Enable drag-and-drop.
        Sortable.create(ul[0], _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_2__["dataExplorerHelper"].sortableArgsForAttrs, {
            filter: '.remove-filter'
        });
    }

    addGroup(content, title) {
        let div = $('<div class="_group"><span class="_title">' + title + '</span></div>');
        content.appendTo(div);
        this.attrContainer.append(div);
    }
}

const dataExplorerSecondarySidebar = new DataExplorerSecondarySidebar();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerSections.js":
/*!******************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerSections.js ***!
  \******************************************************************/
/*! exports provided: dataExplorerSections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerSections", function() { return dataExplorerSections; });
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _services_KeyboardService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/KeyboardService */ "./src/assets/js/services/KeyboardService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataExplorer */ "./src/assets/js/tabs/data-explorer/DataExplorer.js");
/* harmony import */ var _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataExplorerHelper */ "./src/assets/js/tabs/data-explorer/DataExplorerHelper.js");
/* harmony import */ var _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataExplorerVirtualTable */ "./src/assets/js/tabs/data-explorer/DataExplorerVirtualTable.js");







class DataExplorerSections {
    init() {
        this.container = $('#output_table_sidebar');

        // Close button
        this.container.on('click', '._button._close', e => {
            $(e.currentTarget)
                .closest('.item')
                .remove();
            _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__["dataExplorerHelper"].resetColumnIds();
            _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__["dataExplorerHelper"].saveAndUpdate();
        });

        // Chart button
        this.container.on('click', '._button._chart', e => {
            // Switch state.
            let checked = $(e.currentTarget).attr('data-checked') === 'false';
            $(e.currentTarget).attr('data-checked', checked ? 'true' : 'false');

            // Render.
            _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_5__["dataExplorerVirtualTable"].renderOutputTableOrChart();

            e.preventDefault();
        });

        // Title
        this.container.on('change', '._title', e => {
            _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__["dataExplorerHelper"].saveAndUpdate();
        });
        this.container.on('keydown', '._title', e => {
            if (e.keyCode !== _services_KeyboardService__WEBPACK_IMPORTED_MODULE_1__["keyboardService"].ctrlKey && e.keyCode !== _services_KeyboardService__WEBPACK_IMPORTED_MODULE_1__["keyboardService"].shiftKey) {
                e.stopPropagation();
            }
        });
        this.container.on('keyup', '._title', e => {
            _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__["dataExplorerHelper"].saveAndUpdateDelayed();

            if (e.keyCode !== _services_KeyboardService__WEBPACK_IMPORTED_MODULE_1__["keyboardService"].ctrlKey && e.keyCode !== _services_KeyboardService__WEBPACK_IMPORTED_MODULE_1__["keyboardService"].shiftKey) {
                e.stopPropagation();
            }
        });
    }

    getSectionType(section) {
        return section.attr('data-section-type');
    }

    addSection(sectionType, container, title, id) {
        // Title
        let titleInput = $('<input class="_title" value="' + title + '">');
        let titleContainer = $('<span class="_title-container"></span>').append(titleInput);
        let idElement = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__["dataExplorerHelper"].createId(id);

        // Close button
        let closeButton = $(
            '<span class="_button _close"><i class="kpmg-icon kpmg-icon-close" aria-hidden="true"></i></span>'
        );

        // Chart button
        let chartElement = $(
            '<span class="_button _chart" data-checked="true"><i class="kpmg-icon kpmg-icon-graph" aria-hidden="true"></i></span>'
        );

        // Setion
        let section = $('<li class="item row-or-column-card"></li>')
            .attr('data-section-type', sectionType)
            .append(titleContainer, idElement, chartElement, closeButton)
            .appendTo(container);

        return section;
    }

    addFilterSection(container, item, id) {
        let value = item && $(item).length ? $(item).attr('data-value') : '';
        let section = this.addSection('filter', container, value, id);
        let filters = $('<span class="item-group item-group-horizontal _filters" data-type="filter">');

        section.addClass('item-with-filters').append(filters);

        Sortable.create(
            filters[0],
            $.extend({}, _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__["dataExplorerHelper"].sortableArgs, {
                filter: 'input, .remove-filter',
                preventOnFilter: false
            })
        );

        return section;
    }

    addYearOrMarginOptions(select, option) {
        select.find('option').remove();
        let dataset = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentDataPoints();
        let years = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].getUniqueValues(dataset, option);

        years.forEach(function(year) {
            select.append('<option value="' + year + '">' + year + '</option>');
        });
    }

    addYearPair(section, y1, y2, option) {
        let year1 = $('<select class="_year _year1"></select>');
        this.addYearOrMarginOptions(year1, option);
        year1.val(y1);
        year1.on('change', function() {
            dataExplorerSections.syncTitle($(this).closest('.row-or-column-card'));
            _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__["dataExplorerHelper"].saveAndUpdate();
        });

        let year2 = $('<select class="_year _year2"></select>');
        this.addYearOrMarginOptions(year2, option);
        year2.val(y2);
        year2.on('change', function() {
            dataExplorerSections.syncTitle($(this).closest('.row-or-column-card'));
            _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__["dataExplorerHelper"].saveAndUpdate();
        });

        section.append(year1, year2);
    }

    // Add YoY or Delta, depending on modeValue.
    addYoyColumn(y1, y2, modeValue) {
        let title = modeValue ? 'Yoy' : 'Delta';
        let section = this.addSection(
            title.toLowerCase(),
            $('#column_box'),
            title,
            'C' + _DataExplorer__WEBPACK_IMPORTED_MODULE_3__["dataExplorer"].columnSequence++
        );

        let container = $('<div class="extra-yoy-container">');
        section.append(container);

        this.addYearPair(container, y1, y2, 'time');

        return section;
    }

    addCagrColumn(y1, y2) {
        let section = this.addSection('cagr', $('#column_box'), 'CAGR', 'C' + _DataExplorer__WEBPACK_IMPORTED_MODULE_3__["dataExplorer"].columnSequence++);
        let container = $('<div class="extra-yoy-container">');

        section.append(container);

        this.addYearPair(container, y1, y2, 'time');
        return section;
    }

    addMarginRow(y1 = null, y2 = null) {
        let section = this.addSection('margin', $('#row_box'), 'Margin', 'R' + _DataExplorer__WEBPACK_IMPORTED_MODULE_3__["dataExplorer"].rowSequence++);
        let container = $('<div class="extra-yoy-container">');
        section.append(container);

        this.addYearPair(container, y1, y2, 'attribute');
        return section;
    }

    syncTitle(section) {
        let type = this.getSectionType(section);
        let titleElement = section.find('._title');

        switch (type) {
            case 'filter':
            case 'blank':
                let filters = section.find('.item');

                if (filters.length === 1) {
                    titleElement.val(filters.data('value'));
                }
                if (filters.length > 1) {
                    let title = '';
                    filters.each(function() {
                        title += $(this).data('value') + ' - ';
                    });
                    titleElement.val(title.substring(0, title.length - 2));
                }
                break;

            case 'yoy':
                {
                    let y1 = section.find('._year1').val();
                    let y2 = section.find('._year2').val();
                    titleElement.val('YoY ' + y1 + '-' + y2);
                }
                break;

            case 'delta':
                {
                    let y1 = section.find('._year1').val();
                    let y2 = section.find('._year2').val();
                    titleElement.val('Delta ' + y1 + '-' + y2);
                }
                break;

            case 'cagr': {
                let y1 = section.find('._year1').val();
                let y2 = section.find('._year2').val();
                titleElement.val('CAGR ' + y1 + '-' + y2);
            }
        }
    }
}

const dataExplorerSections = new DataExplorerSections();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerSidebar.js":
/*!*****************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerSidebar.js ***!
  \*****************************************************************/
/*! exports provided: dataExplorerSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerSidebar", function() { return dataExplorerSidebar; });
/* harmony import */ var _services_KeyboardService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/KeyboardService */ "./src/assets/js/services/KeyboardService.js");
/* harmony import */ var _DataExplorerFormulas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataExplorerFormulas */ "./src/assets/js/tabs/data-explorer/DataExplorerFormulas.js");
/* harmony import */ var _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataExplorerHelper */ "./src/assets/js/tabs/data-explorer/DataExplorerHelper.js");




class DataExplorerSidebar {
    init() {
        this.container = $('#output_table_sidebar');
        this.itemGroups = this.container.find('.item-group');
        this.lastSelectedItem = null;
        this.clipboardItems = [];

        $(document).on('keydown', e => {
            // Copy
            if (_services_KeyboardService__WEBPACK_IMPORTED_MODULE_0__["keyboardService"].ctrlDown && e.keyCode === _services_KeyboardService__WEBPACK_IMPORTED_MODULE_0__["keyboardService"].cKey) {
                // Save a clone of each item.
                this.clipboardItems = this.itemGroups.find('> .item._active').toArray();
                this.clipboardItems = this.clipboardItems.map(item => {
                    return $(item).clone();
                });
            }

            // Paste
            if (_services_KeyboardService__WEBPACK_IMPORTED_MODULE_0__["keyboardService"].ctrlDown && e.keyCode === _services_KeyboardService__WEBPACK_IMPORTED_MODULE_0__["keyboardService"].vKey && this.clipboardItems.length > 0) {
                // Append a clone of each item.
                this.clipboardItems.forEach(item => {
                    const newItem = $(item).clone();
                    newItem.hide();
                    this.itemGroups.filter(':visible').append(newItem);
                    _DataExplorerFormulas__WEBPACK_IMPORTED_MODULE_1__["dataExplorerFormulas"].initInput(newItem.find('._formula'));
                    newItem.fadeIn(333);
                });

                // Reset IDs.
                _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_2__["dataExplorerHelper"].resetRowIds();
                _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_2__["dataExplorerHelper"].resetColumnIds();

                // Deselect everything.
                this.deselectAll();

                // Save and update table, after fade-in animation has ended.
                setTimeout(() => {
                    _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_2__["dataExplorerHelper"].saveAndUpdate();
                }, 333);
            }
        });

        this.container.on('click', e => {
            if (!_services_KeyboardService__WEBPACK_IMPORTED_MODULE_0__["keyboardService"].ctrlDown && !_services_KeyboardService__WEBPACK_IMPORTED_MODULE_0__["keyboardService"].shiftDown) {
                this.deselectAll();
            }
        });

        this.container.on('click', '.row-or-column-card', e => {
            const item = $(e.currentTarget);

            // Deselect other cards if shift/ctrl is not pressed.
            if (!_services_KeyboardService__WEBPACK_IMPORTED_MODULE_0__["keyboardService"].ctrlDown && !_services_KeyboardService__WEBPACK_IMPORTED_MODULE_0__["keyboardService"].shiftDown) {
                this.deselectAll();
            }

            // If shift if pressed, select all items between the previous and the current one.
            if (_services_KeyboardService__WEBPACK_IMPORTED_MODULE_0__["keyboardService"].shiftDown) {
                const index1 = this.lastSelectedItem.index();
                const index2 = item.index();
                const indexMin = Math.min(index1, index2);
                const indexMax = Math.max(index1, index2);
                const parent = item.parent();

                for (let i = indexMin; i <= indexMax; i++) {
                    parent
                        .children()
                        .eq(i)
                        .addClass('_active');
                }
            } else {
                // Simply toggle the state.
                item.toggleClass('_active');
            }

            // Remember the last selected item.
            this.lastSelectedItem = item;

            e.stopPropagation();
        });
    }

    deselectAll() {
        this.itemGroups.find('.item').removeClass('_active');
    }
}

const dataExplorerSidebar = new DataExplorerSidebar();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerStorage.js":
/*!*****************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerStorage.js ***!
  \*****************************************************************/
/*! exports provided: dataExplorerStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerStorage", function() { return dataExplorerStorage; });
/* harmony import */ var _entities_DataExplorerCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../entities/DataExplorerCard */ "./src/assets/js/entities/DataExplorerCard.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataExplorer */ "./src/assets/js/tabs/data-explorer/DataExplorer.js");
/* harmony import */ var _DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataExplorerAnalyses */ "./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js");
/* harmony import */ var _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DataExplorerHelper */ "./src/assets/js/tabs/data-explorer/DataExplorerHelper.js");
/* harmony import */ var _DataExplorerSecondarySidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataExplorerSecondarySidebar */ "./src/assets/js/tabs/data-explorer/DataExplorerSecondarySidebar.js");
/* harmony import */ var _DataExplorerSections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataExplorerSections */ "./src/assets/js/tabs/data-explorer/DataExplorerSections.js");
/* harmony import */ var _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DataExplorerVirtualTable */ "./src/assets/js/tabs/data-explorer/DataExplorerVirtualTable.js");









class DataExplorerStorage {
    constructor() {
        this.saveDelayed = _.debounce(this.save, 500);
    }

    save(i) {
        console.log('dataExplorerStorage.save');

        let globalFilters = [];
        let columns = dataExplorerStorage.saveRowsOrColumns($('#column_box'));
        let rows = dataExplorerStorage.saveRowsOrColumns($('#row_box'));

        let filterCategories = ['a1', 'headline', 'hidden'];
        for (let i = 0; i < filterCategories.length; i++) {
            let category = filterCategories[i];

            $(`#filter_box_${category} > .item`).each(function() {
                let $this = $(this);

                globalFilters.push({
                    dataFilterType: $this.attr('data-filter-type'),
                    dataValue: $this.attr('data-value'),
                    dataDestination: $this.parent().attr('id')
                });
            });
        }

        _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].currentProject.analyses[i].globalFilters = globalFilters;
        _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].currentProject.analyses[i].columns = columns;
        _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].currentProject.analyses[i].rows = rows;
        _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].currentProject.analyses[i].scale = $('#scale').val();

        _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].saveCurrentProject();
    }

    saveRowsOrColumns(container) {
        let data = [];

        container.find('> .item').each(function() {
            const $this = $(this);
            const sectionType = $this.attr('data-section-type');

            // Create card.
            const card = new _entities_DataExplorerCard__WEBPACK_IMPORTED_MODULE_0__["DataExplorerCard"]();
            card.sectionType = sectionType;
            card.title = $this.find('input._title').val();
            card.dataValue = $this.attr('data-value');

            switch (sectionType) {
                case 'filter':
                    card.filters = {};

                    if (card.dataValue === 'Blank') {
                        break;
                    }

                    $this.find('.item').each(function() {
                        const dimension = $(this).attr('data-filter-type');
                        const value = $(this).attr('data-value');

                        if (!(dimension in card.filters)) {
                            card.filters[dimension] = [];
                        }
                        card.filters[dimension].push(value);
                    });
                    break;

                case 'formula':
                    card.formula = $this.find('._formula').attr('data-formula');
                    break;

                case 'yoy':
                case 'delta':
                    card.year1 = $this.find('._year1').val();
                    card.year2 = $this.find('._year2').val();
                    break;

                case 'cagr':
                    card.year1 = $this.find('._year1').val();
                    card.year2 = $this.find('._year2').val();
                    break;

                case 'margin':
                    card.attribute1 = $this.find('._year1').val();
                    card.attribute2 = $this.find('._year2').val();
                    break;
            }

            data.push(card);
        });

        return data;
    }

    load() {
        if (_services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getCurrentTab() !== '#output_table') {
            return;
        }

        console.log('dataExplorerStorage.load');

        _DataExplorerSecondarySidebar__WEBPACK_IMPORTED_MODULE_5__["dataExplorerSecondarySidebar"].load();

        // Available fields
        {
            $('#available_box ul.available_box-sub').html('');

            // Filter
            let filterTypes = ['time', 'entity', 'layer', 'quality', 'unit'];
            for (let i = 0; i < filterTypes.length; i++) {
                dataExplorerStorage.addItemsForFilterType(filterTypes[i]);
            }
        }

        const data = _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].currentProject.analyses[_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_3__["dataExplorerAnalyses"].currentAnalysisId];

        // Scale
        $('#scale').val(data.scale);

        // Global filters
        $('#filter_box_headline, #filter_box_a1, #filter_box_hidden').html('');
        for (let i = 0; i < data.globalFilters.length; i++) {
            let filterData = data.globalFilters[i];
            let filter = $(
                '.secondary_sidebar .item[data-filter-type="' +
                    filterData.dataFilterType +
                    '"][data-value="' +
                    filterData.dataValue +
                    '"]'
            );
            $('#' + filterData.dataDestination).append(filter.clone());
        }

        // Columns
        dataExplorerStorage.loadRowsOrColumns($('#column_box'), data.columns);

        // Rows
        dataExplorerStorage.loadRowsOrColumns($('#row_box'), data.rows);

        _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_7__["dataExplorerVirtualTable"].updateTable();

        _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__["dataExplorerHelper"].addFilterRemoveButton();
    }

    loadRowsOrColumns(container, data) {
        const set = container.attr('data-set');
        let isColumns = container.attr('id') === 'column_box';

        if (isColumns) {
            _DataExplorer__WEBPACK_IMPORTED_MODULE_2__["dataExplorer"].columnSequence = 1;
        } else {
            _DataExplorer__WEBPACK_IMPORTED_MODULE_2__["dataExplorer"].rowSequence = 1;
        }

        container.find('> .item').remove();
        for (let i = 0; i < data.length; i++) {
            let itemData = data[i];
            let item = null;

            switch (itemData.sectionType) {
                case 'filter':
                    if (itemData.dataValue === 'Blank') {
                        let id = isColumns ? 'C' + _DataExplorer__WEBPACK_IMPORTED_MODULE_2__["dataExplorer"].columnSequence : 'R' + _DataExplorer__WEBPACK_IMPORTED_MODULE_2__["dataExplorer"].rowSequence;
                        item = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_6__["dataExplorerSections"].addFilterSection(container, itemData, id);
                        item.attr('data-value', 'Blank');
                        break;
                    }

                    item = _DataExplorer__WEBPACK_IMPORTED_MODULE_2__["dataExplorer"].addFilter('', set);

                    const filters = item.find('._filters');

                    // Add filters one by one, per dimension.
                    for (const dimension in itemData.filters) {
                        itemData.filters[dimension].forEach(value => {
                            const filter = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__["dataExplorerHelper"].createItem(null, 'filter', value, dimension);
                            filters.append(filter.clone());
                        });
                    }
                    break;

                case 'formula':
                    if (isColumns) {
                        item = _DataExplorer__WEBPACK_IMPORTED_MODULE_2__["dataExplorer"].addFormula(itemData.formula, _DataExplorer__WEBPACK_IMPORTED_MODULE_2__["dataExplorer"].SET_COLUMN);
                    } else {
                        item = _DataExplorer__WEBPACK_IMPORTED_MODULE_2__["dataExplorer"].addFormula(itemData.formula, _DataExplorer__WEBPACK_IMPORTED_MODULE_2__["dataExplorer"].SET_ROW);
                    }
                    break;

                case 'yoy':
                    item = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_6__["dataExplorerSections"].addYoyColumn(itemData.year1, itemData.year2, itemData.mode);
                    break;

                case 'delta':
                    item = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_6__["dataExplorerSections"].addYoyColumn(itemData.year1, itemData.year2, itemData.mode);
                    break;

                case 'cagr':
                    item = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_6__["dataExplorerSections"].addCagrColumn(itemData.year1, itemData.year2);
                    break;

                case 'margin':
                    item = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_6__["dataExplorerSections"].addMarginRow();
                    break;
            }

            if (item) {
                item.find('._title').val(itemData.title);
            }
        }
    }

    addItemsForFilterType(filterName) {
        let filter = {};
        let dataset = _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getCurrentDataPoints();

        for (let i = 0; i < dataset.length; i++) {
            let key = dataset[i][filterName];

            if (!key) {
                return;
            }

            filter[key] = true;
        }

        let container = $('#available_box_' + filterName);
        container.html('');
        for (let i in filter) {
            container.append(_DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__["dataExplorerHelper"].createItem(null, 'filter', i, filterName));
        }

        _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_4__["dataExplorerHelper"].addFilterRemoveButton();
    }
}

const dataExplorerStorage = new DataExplorerStorage();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerTemplate.js":
/*!******************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerTemplate.js ***!
  \******************************************************************/
/*! exports provided: dataExplorerTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerTemplate", function() { return dataExplorerTemplate; });
/* harmony import */ var _datasets_filter_template_1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../datasets/filter-template-1 */ "./src/assets/js/datasets/filter-template-1.js");
/* harmony import */ var _datasets_filter_template_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../datasets/filter-template-2 */ "./src/assets/js/datasets/filter-template-2.js");
/* harmony import */ var _datasets_filter_template_3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../datasets/filter-template-3 */ "./src/assets/js/datasets/filter-template-3.js");
/* harmony import */ var _datasets_filter_template_4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../datasets/filter-template-4 */ "./src/assets/js/datasets/filter-template-4.js");
/* harmony import */ var _datasets_filter_template_5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../datasets/filter-template-5 */ "./src/assets/js/datasets/filter-template-5.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataExplorer */ "./src/assets/js/tabs/data-explorer/DataExplorer.js");
/* harmony import */ var _DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DataExplorerAnalyses */ "./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js");
/* harmony import */ var _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DataExplorerHelper */ "./src/assets/js/tabs/data-explorer/DataExplorerHelper.js");
/* harmony import */ var _DataExplorerSections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DataExplorerSections */ "./src/assets/js/tabs/data-explorer/DataExplorerSections.js");
/* harmony import */ var _DataExplorerStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DataExplorerStorage */ "./src/assets/js/tabs/data-explorer/DataExplorerStorage.js");
/* harmony import */ var _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DataExplorerVirtualTable */ "./src/assets/js/tabs/data-explorer/DataExplorerVirtualTable.js");













class DataExplorerTemplate {
    checkFormulaYearsGlobalTerms(item, termsToReplace, filteredTemplate) {
        const years = ['year1', 'year2'];
        let foundMatch;

        for (let i = 0; i < years.length; i++) {
            foundMatch = false;
            let year = years[i];
            let parameter = 'time';

            if (item.type === 'margin') {
                parameter = 'attribute';
            }

            for (let yearItem in termsToReplace[parameter]) {
                let intermediateTerm = termsToReplace[parameter];
                if (item[year] !== intermediateTerm[yearItem].globalTerm) {
                    continue;
                }

                foundMatch = true;
                item.localTerm = item.localTerm || {};
                item.localTerm[year] = intermediateTerm[yearItem].attribute;

                break;
            }
        }

        if (foundMatch) {
            filteredTemplate.push(item);
        }
    }

    addKpiFromTemplate(item) {
        $(
            `.main_sidebar .row-or-column-card[data-section-type="${item.type}"] ._year1 option[value="${
                item.localTerm.year1
            }"]`
        ).prop('selected', 'selected');
        $(
            `.main_sidebar .row-or-column-card[data-section-type="${item.type}"] ._year2 option[value="${
                item.localTerm.year2
            }"]`
        ).prop('selected', 'selected');

        _DataExplorerSections__WEBPACK_IMPORTED_MODULE_9__["dataExplorerSections"].syncTitle($(`.main_sidebar .row-or-column-card[data-section-type=${item.type}]`));
    }

    addCardsFromTemplate(template, termsToReplace, set) {
        // Step 1: identify valid filters for rows/columns
        let filteredTemplate = [];
        const key = set + 's';

        // Iterate through each row/column
        for (let i = 0; i < template[key].length; i++) {
            let item = template[key][i];
            let temporaryRow = [];

            if (item.hasOwnProperty('type')) {
                switch (item.type) {
                    case 'yoy':
                    case 'delta':
                    case 'cagr':
                    case 'margin':
                        this.checkFormulaYearsGlobalTerms(item, termsToReplace, filteredTemplate);
                        break;

                    case 'formula':
                    case 'blank':
                        filteredTemplate.push(item);
                        break;
                }
            } else {
                // Iterate through each row/column's filters
                for (let j = 0; j < item.filters.length; j++) {
                    let type = item.filters[j].dimension;
                    let value = item.filters[j].value;

                    let matchesGlobalTerm = undefined;

                    // If dimension has Global Term
                    if (termsToReplace.hasOwnProperty(type)) {
                        for (let instance in termsToReplace[type]) {
                            // If Global Term matches supplied value, display user selected synonim (local value)
                            if (termsToReplace[type][instance].globalTerm === value) {
                                value = termsToReplace[type][instance].attribute;
                                matchesGlobalTerm = true;
                                break;
                            } else {
                                matchesGlobalTerm = false;
                            }
                        }
                    }
                    // If filter Local Term needs to match Global Term but does not, don't display it
                    if (matchesGlobalTerm === false) {
                        continue;
                    }

                    temporaryRow.push({ type: type, value: value });
                }

                if (item.hasOwnProperty('in_chart')) {
                    temporaryRow.in_chart = true;
                }

                filteredTemplate.push(temporaryRow);
            }
        }

        // Step 2: display valid filters in main sidebar
        for (let i = 0; i < filteredTemplate.length; i++) {
            let item = filteredTemplate[i];

            if (item.hasOwnProperty('type')) {
                switch (item.type) {
                    case 'yoy':
                    case 'delta':
                        let percentMode = item.type === 'yoy';
                        _DataExplorerSections__WEBPACK_IMPORTED_MODULE_9__["dataExplorerSections"].addYoyColumn(item.year1, item.year2, percentMode);
                        this.addKpiFromTemplate(item);
                        break;

                    case 'cagr':
                        _DataExplorerSections__WEBPACK_IMPORTED_MODULE_9__["dataExplorerSections"].addCagrColumn(item.year1, item.year2);
                        this.addKpiFromTemplate(item);
                        break;

                    case 'margin':
                        _DataExplorerSections__WEBPACK_IMPORTED_MODULE_9__["dataExplorerSections"].addMarginRow(item.year1, item.year2);
                        this.addKpiFromTemplate(item);
                        break;

                    case 'formula':
                        _DataExplorer__WEBPACK_IMPORTED_MODULE_6__["dataExplorer"].addFormula(item.formula, set);
                        break;

                    case 'blank':
                        const currentItem = _DataExplorer__WEBPACK_IMPORTED_MODULE_6__["dataExplorer"].addFilter(item, set);

                        $(currentItem)
                            .attr('data-value', 'Blank')
                            .find('._title')
                            .attr('value', 'Blank');
                        break;
                }
            } else if (item.length > 0) {
                const section = _DataExplorer__WEBPACK_IMPORTED_MODULE_6__["dataExplorer"].addFilter(null, set);

                for (let j = 0; j < item.length; j++) {
                    let filterItem = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_8__["dataExplorerHelper"].createItem(null, 'filter', item[j].value, item[j].type);
                    section.find('._filters').append(filterItem);
                }

                _DataExplorerSections__WEBPACK_IMPORTED_MODULE_9__["dataExplorerSections"].syncTitle(section);
            }

            this.showInChart(item, set, i);
        }
    }

    // Load chart display options if present in template.
    loadChartOptions(template) {
        if (!template.hasOwnProperty('chart_options')) {
            return;
        }

        for (let key in template.chart_options[0]) {
            if (template.chart_options[0].hasOwnProperty(key)) {
                $(`.${key}`)
                    .find(`input[value="${template.chart_options[0][key]}"]`)
                    .trigger('click');
            }
        }
    }

    // Load template items
    showInChart(item, set, i) {
        i = i + 1;

        let itemChartOption = $(`#main_sidebar_${set}s`).find(`.row-or-column-card:nth-child(${i}) ._button._chart`);
        if (item.hasOwnProperty('in_chart')) {
            if (itemChartOption.attr('data-checked', false)) {
                itemChartOption.trigger('click');
            }
        } else {
            if (itemChartOption.attr('data-checked', true)) {
                itemChartOption.trigger('click');
            }
        }
    }

    // Template specifics.
    loadTemplate(templateSource) {
        const templateArray = [_datasets_filter_template_1__WEBPACK_IMPORTED_MODULE_0__["filterTemplate1"], _datasets_filter_template_2__WEBPACK_IMPORTED_MODULE_1__["filterTemplate2"], _datasets_filter_template_3__WEBPACK_IMPORTED_MODULE_2__["filterTemplate3"], _datasets_filter_template_4__WEBPACK_IMPORTED_MODULE_3__["filterTemplate4"], _datasets_filter_template_5__WEBPACK_IMPORTED_MODULE_4__["filterTemplate5"]];
        const template = templateArray[templateSource];

        // Get all filter-type properties
        const dimensions = _services_StorageService__WEBPACK_IMPORTED_MODULE_5__["storageService"].getCurrentProject().getDimensions();

        let termsToReplace = {};
        for (let i = 0; i < dimensions.length; i++) {
            // Filter-types that have a global term
            if (dimensions[i].hasGlobalTerms) {
                // Filter type
                let dimensionType = dimensions[i].slug;

                // All data structures of that filter-type
                termsToReplace[dimensionType] = _services_StorageService__WEBPACK_IMPORTED_MODULE_5__["storageService"]
                    .getCurrentProject()
                    .getDataStructuresForDimension(dimensionType);
            }
        }

        // Empty columns and rows
        $('#row_box, #column_box').empty();

        // Reset rows and columns counter to 1
        _DataExplorer__WEBPACK_IMPORTED_MODULE_6__["dataExplorer"].columnSequence = 1;
        _DataExplorer__WEBPACK_IMPORTED_MODULE_6__["dataExplorer"].rowSequence = 1;

        // Add rows from template
        this.addCardsFromTemplate(template, termsToReplace, _DataExplorer__WEBPACK_IMPORTED_MODULE_6__["dataExplorer"].SET_ROW);

        // Add columns from template
        this.addCardsFromTemplate(template, termsToReplace, _DataExplorer__WEBPACK_IMPORTED_MODULE_6__["dataExplorer"].SET_COLUMN);

        // Add global filters from template
        $('#filter_box_headline, #filter_box_a1, #filter_box_hidden').html('');

        const globalsSections = ['globals_headline', 'globals_a1', 'globals_hidden'];

        for (let g = 0; g < globalsSections.length; g++) {
            if (template[globalsSections[g]].length > 0) {
                for (let i = 0; i < template[globalsSections[g]].length; i++) {
                    let filterData = template[globalsSections[g]][i].filters[0];

                    let value = filterData.value;
                    let type = filterData.dimension;

                    if (
                        termsToReplace.hasOwnProperty(type) &&
                        termsToReplace[type].hasOwnProperty(value) &&
                        termsToReplace[type][value].globalTerm
                    ) {
                        value = termsToReplace[type][value].globalTerm;
                    }

                    let filter = $(
                        '.secondary_sidebar .item[data-filter-type="' + type + '"][data-value="' + value + '"]'
                    );
                    $(`.global-filter-container:nth-of-type(${g + 1}) ul`).append(filter.clone());
                }
            }
        }

        this.loadChartOptions(template);

        _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_8__["dataExplorerHelper"].addFilterRemoveButton();

        _DataExplorerStorage__WEBPACK_IMPORTED_MODULE_10__["dataExplorerStorage"].save(_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_7__["dataExplorerAnalyses"].currentAnalysisId);

        _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_11__["dataExplorerVirtualTable"].updateTable();
    }
}

const dataExplorerTemplate = new DataExplorerTemplate();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/DataExplorerVirtualTable.js":
/*!**********************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/DataExplorerVirtualTable.js ***!
  \**********************************************************************/
/*! exports provided: dataExplorerVirtualTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerVirtualTable", function() { return dataExplorerVirtualTable; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _entities_DataExplorerDrillDownStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/DataExplorerDrillDownStatus */ "./src/assets/js/entities/DataExplorerDrillDownStatus.js");
/* harmony import */ var _entities_VirtualTableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/VirtualTableCell */ "./src/assets/js/entities/VirtualTableCell.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataExplorerAnalyses */ "./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js");
/* harmony import */ var _DataExplorerEval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataExplorerEval */ "./src/assets/js/tabs/data-explorer/DataExplorerEval.js");
/* harmony import */ var _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DataExplorerHelper */ "./src/assets/js/tabs/data-explorer/DataExplorerHelper.js");
/* harmony import */ var _DataExplorerRenderChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DataExplorerRenderChart */ "./src/assets/js/tabs/data-explorer/DataExplorerRenderChart.js");
/* harmony import */ var _DataExplorerSections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DataExplorerSections */ "./src/assets/js/tabs/data-explorer/DataExplorerSections.js");
/* harmony import */ var _table_DataExplorerDrillDown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table/DataExplorerDrillDown */ "./src/assets/js/tabs/data-explorer/table/DataExplorerDrillDown.js");
/* harmony import */ var _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table/DataExplorerRenderTable */ "./src/assets/js/tabs/data-explorer/table/DataExplorerRenderTable.js");













/**
 * Class responsible for generating the underlying virtual table of the analysis, based on the columns, rows, and all the other settings provided.
 */
class DataExplorerVirtualTable {
    constructor() {
        /** @type {VirtualTableCell[][]} */
        this.tableData = null;
        this.formattedTableData = null;
        this.tableIdsToColumns = null;
        this.tableIdsToRows = null;
        this.previousTableData = null;
        this.updateTableDelayed = _.debounce(this.updateTable, 500);

        this._currentTableRow = null;
    }

    updateTable() {
        this._updateMapping();

        // Update table until nothing changes anymore. Slow but working approach for formulas.
        // Limit to 100 updates so it doesn't freeze.
        this.previousTableData = null;
        for (let i = 0; i < 20; i++) {
            this._updateData();

            // Check if anything has changed.
            let changed = false;
            if (!this.previousTableData) {
                changed = true;
            } else {
                for (let j = 0; j < this.tableData.length; j++) {
                    const row = this.tableData[j];

                    for (let k = 0; k < row.length; k++) {
                        if (!_.isEqual(row[k].value, this.previousTableData[j][k].value)) {
                            changed = true;
                            break;
                        }
                    }
                }
            }
            if (!changed) {
                break;
            }

            this.previousTableData = this.tableData;
        }

        // Format values.
        let scale = $('#scale').val();
        this.formattedTableData = [];
        for (let i = 0; i < this.tableData.length; i++) {
            let row = [this.tableData[i][0].value];
            let rowElement = $('#row_box > .item:nth-child(' + (i + 1) + ')');
            let rowSectionType = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_9__["dataExplorerSections"].getSectionType(rowElement);

            for (let j = 1; j < this.tableData[i].length; j++) {
                let value = this.tableData[i][j].value;
                let colElement = $('#column_box > .item:nth-child(' + j + ')');
                let columnSectionType = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_9__["dataExplorerSections"].getSectionType(colElement);

                if (value === null || typeof value === 'undefined' || Number.isNaN(value)) {
                    value = '-';
                } else {
                    value = this.tableData[i][j].value;

                    if (rowSectionType === 'margin' || columnSectionType === 'cagr' || columnSectionType === 'yoy') {
                        value = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].formatPercent(value);
                    } else if ($.isNumeric(value)) {
                        value /= scale;
                        value = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].formatNumber(value);
                    }
                }

                row.push(value);
            }

            this.formattedTableData.push(row);
        }

        if (_DataExplorerRenderChart__WEBPACK_IMPORTED_MODULE_8__["dataExplorerRenderChart"].outputMode === 'table') {
            _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_11__["dataExplorerRenderTable"].updateTable();
        }
        if (_DataExplorerRenderChart__WEBPACK_IMPORTED_MODULE_8__["dataExplorerRenderChart"].outputMode === 'chart') {
        }

        dataExplorerVirtualTable.renderOutputTableOrChart();
    }

    // Render the output table or chart, depending on what the user chose.
    renderOutputTableOrChart() {
        if (_DataExplorerRenderChart__WEBPACK_IMPORTED_MODULE_8__["dataExplorerRenderChart"].outputMode === 'table') {
            $('._data-explorer-template-content').css('display', '');
            $('._data-explorer-chart').css('display', 'none');
            _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_11__["dataExplorerRenderTable"].updateTable();
            _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_11__["dataExplorerRenderTable"].flexgrid.collectionView.refresh();
        }
        if (_DataExplorerRenderChart__WEBPACK_IMPORTED_MODULE_8__["dataExplorerRenderChart"].outputMode === 'chart') {
            _DataExplorerRenderChart__WEBPACK_IMPORTED_MODULE_8__["dataExplorerRenderChart"].renderChart();
            $('._data-explorer-template-content').css('display', 'none');
            $('._data-explorer-chart').css('display', '');
        }
    }

    _updateMapping() {
        let rows = $('#row_box > .item');
        let cols = $('#column_box > .item');

        // Take each row.
        this.tableIdsToRows = {};
        for (let i = 0; i < rows.length; i++) {
            this.tableIdsToRows[
                $(rows[i])
                    .find('._id')
                    .text()
            ] = i;
        }

        // Take each column.
        this.tableIdsToColumns = {};
        for (let j = 0; j < cols.length; j++) {
            this.tableIdsToColumns[
                $(cols[j])
                    .find('._id')
                    .text()
            ] = j + 1;
        }
    }

    _updateData() {
        let rows = $('#row_box > .item');
        let cols = $('#column_box > .item');
        let globalFilters = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getFiltersFromDom(
            $('#filter_box_a1 > .item, #filter_box_headline > .item, #filter_box_hidden > .item')
        );
        let dataset = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentDataPoints();
        const analysis = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].currentProject.analyses[_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_5__["dataExplorerAnalyses"].currentAnalysisId];
        analysis.tableRowLevel = {};
        analysis.tableRowToCardNo = {};
        this.tableData = [];
        this._currentTableRow = 1;

        // Take each row.
        for (let i = 0; i < rows.length; i++) {
            const rowCard = analysis.rows[i];
            let row = $(rows[i]);
            // TODO: Use analysis data instead of DOM.
            let rowFilters = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getFiltersFromDom(row.find('._filters [data-value]'));
            let isRowFormula = row.hasClass('item-with-formula');

            // Add row cells.
            let rowData = this._getColumns(i, row, cols, rowFilters, isRowFormula, dataset, globalFilters);

            // Add row title.
            let rowTitle = row.find('._title').val();
            let rowVirtualTableCell = new _entities_VirtualTableCell__WEBPACK_IMPORTED_MODULE_3__["VirtualTableCell"]();
            rowVirtualTableCell.value = rowTitle;
            rowData.unshift(rowVirtualTableCell);

            // Add row.
            this.tableData.push(rowData);

            // Save row data.
            analysis.tableRowLevel[this._currentTableRow] = 0;
            analysis.tableRowToCardNo[this._currentTableRow] = i;
            analysis.tableRowToPath[this._currentTableRow] = [];
            this._currentTableRow++;

            // Update drill-down status.
            rowCard.drillDownStatus.filters = rowCard.filters;
            rowCard.drillDownStatus.expandable = _table_DataExplorerDrillDown__WEBPACK_IMPORTED_MODULE_10__["dataExplorerDrillDown"].canBeExpanded(rowFilters);

            // Add child rows.
            if (rowCard.drillDownStatus.expanded) {
                this._addChildRows(
                    rowCard.drillDownStatus,
                    i,
                    row,
                    cols,
                    rowFilters,
                    analysis,
                    dataset,
                    globalFilters,
                    []
                );
            }
        }
    }

    /**
     *
     * @param drillDownStatus {DataExplorerDrillDownStatus}
     * @param i
     * @param row
     * @param cols
     * @param rowFilters
     * @param analysis
     * @param dataset
     * @param globalFilters
     * @param path {array}
     * @private
     */
    _addChildRows(drillDownStatus, i, row, cols, rowFilters, analysis, dataset, globalFilters, path) {
        const dimension = drillDownStatus.dimension;

        let children;
        if (dimension in rowFilters) {
            // Drill-down by data-structures.
            const value = rowFilters[dimension][0];
            children = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].currentProject.getChildren(dimension, value);
        } else {
            // Drill-down by another dimension.
            const matchingDataPoints = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getMatchingDataPoints(
                _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].currentProject.dataPoints,
                rowFilters
            );

            // Add children.
            children = matchingDataPoints.reduce((result, dataPoint) => {
                const value = dataPoint[dimension];

                if (value) {
                    result[dataPoint[dimension]] = true;
                }

                return result;
            }, {});
            children = Object.keys(children);
        }

        children.forEach(child => {
            const childPath = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["concat"])([], path, child);

            // Prepare row filters.
            const childRowFilters = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(rowFilters);
            childRowFilters[dimension] = [child];

            // Add child row cells.
            const rowData = this._getColumns(i, row, cols, childRowFilters, false, dataset, globalFilters);

            // Add title.
            let rowVirtualTableCell = new _entities_VirtualTableCell__WEBPACK_IMPORTED_MODULE_3__["VirtualTableCell"]();
            rowVirtualTableCell.value = child;
            rowData.unshift(rowVirtualTableCell);

            // Add row.
            this.tableData.push(rowData);

            // Save row data.
            analysis.tableRowLevel[this._currentTableRow] = childPath.length;
            analysis.tableRowToCardNo[this._currentTableRow] = i;
            analysis.tableRowToPath[this._currentTableRow] = childPath;
            this._currentTableRow++;

            // Update drill-down status.
            if (!(child in drillDownStatus.childStatuses)) {
                drillDownStatus.childStatuses[child] = new _entities_DataExplorerDrillDownStatus__WEBPACK_IMPORTED_MODULE_2__["DataExplorerDrillDownStatus"]();
            }
            const childDrillDownStatus = drillDownStatus.childStatuses[child];
            childDrillDownStatus.filters = childRowFilters;
            childDrillDownStatus.expandable = _table_DataExplorerDrillDown__WEBPACK_IMPORTED_MODULE_10__["dataExplorerDrillDown"].canBeExpanded(childRowFilters);

            // Add child rows.
            if (childDrillDownStatus.expanded) {
                this._addChildRows(
                    childDrillDownStatus,
                    i,
                    row,
                    cols,
                    childRowFilters,
                    analysis,
                    dataset,
                    globalFilters,
                    childPath
                );
            }
        });
    }

    _getColumns(i, row, cols, rowFilters, isRowFormula, dataset, globalFilters) {
        const rowData = [];

        // Take each column.
        for (let j = 0; j < cols.length; j++) {
            let col = $(cols[j]);
            let cell = 0;
            let colFilters = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getFiltersFromDom(col.find('[data-value]'));
            let isColFormula = col.hasClass('item-with-formula');
            let rowSectionType = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_9__["dataExplorerSections"].getSectionType(row);
            let columnSectionType = _DataExplorerSections__WEBPACK_IMPORTED_MODULE_9__["dataExplorerSections"].getSectionType(col);
            let filters = Object.assign({}, globalFilters, rowFilters, colFilters);
            let cellData = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].currentProject.analyses[_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_5__["dataExplorerAnalyses"].currentAnalysisId].getCellData(
                i,
                j
            );

            // Use custom formula, if any.
            if (cellData.customFormula) {
                if (cellData.customFormula.slice(0, 1) === '=') {
                    const customFormula = cellData.customFormula.slice(1);
                    cell = _DataExplorerEval__WEBPACK_IMPORTED_MODULE_6__["dataExplorerEval"].evalFormula(this, customFormula, filters, null, null);
                } else {
                    cell = cellData.customFormula;
                }
            } else {
                switch (rowSectionType) {
                    case 'margin':
                        if (columnSectionType === 'yoy' || columnSectionType === 'cagr' || isColFormula) {
                            cell = null;
                        } else {
                            const filters1 = Object.assign({}, filters, {
                                attribute: row.find('._year1 option:selected').text()
                            });
                            const filters2 = Object.assign({}, filters, {
                                attribute: row.find('._year2 option:selected').text()
                            });
                            let gp = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getSumOfDataPoints(
                                _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getMatchingDataPoints(dataset, filters1)
                            );
                            let rev = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getSumOfDataPoints(
                                _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getMatchingDataPoints(dataset, filters2)
                            );
                            cell = gp / rev;
                        }
                        break;

                    default:
                        if (row.attr('data-value') === 'Blank') {
                            cell = null;
                            break;
                        }

                        switch (columnSectionType) {
                            case 'yoy':
                            case 'delta':
                            case 'cagr':
                                {
                                    let y1 = col.find('._year1').val();
                                    let y2 = col.find('._year2').val();
                                    let y1item = $(
                                        '#attr_dim_list .item[data-filter-type=time][data-value="' + y1 + '"]'
                                    );
                                    let y2item = $(
                                        '#attr_dim_list .item[data-filter-type=time][data-value="' + y2 + '"]'
                                    );
                                    const filters1 = Object.assign({}, filters, { time: y1item.text() });
                                    const filters2 = Object.assign({}, filters, { time: y2item.text() });
                                    let y1value = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getSumOfDataPoints(
                                        _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getMatchingDataPoints(dataset, filters1)
                                    );
                                    let y2value = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getSumOfDataPoints(
                                        _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getMatchingDataPoints(dataset, filters2)
                                    );

                                    switch (columnSectionType) {
                                        case 'yoy':
                                            cell = y2value / y1value - 1;
                                            break;

                                        case 'delta':
                                            cell = y2value - y1value;
                                            break;

                                        case 'cagr':
                                            cell = Math.pow(y2value / y1value, 1 / (y2 - y1)) - 1;
                                            break;
                                    }
                                }
                                break;

                            default: {
                                if (col.attr('data-value') === 'Blank') {
                                    cell = null;
                                    break;
                                }

                                if (!isRowFormula && !isColFormula) {
                                    // Process multiple datapoint values if appropriate.
                                    cell = _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getSumOfDataPoints(
                                        _DataExplorerHelper__WEBPACK_IMPORTED_MODULE_7__["dataExplorerHelper"].getMatchingDataPoints(dataset, filters),
                                        true
                                    );
                                } else if (isRowFormula) {
                                    cell = _DataExplorerEval__WEBPACK_IMPORTED_MODULE_6__["dataExplorerEval"].evalRowFormula(
                                        this,
                                        row.find('._formula').attr('data-formula'),
                                        filters,
                                        j + 1
                                    );
                                } else if (isColFormula) {
                                    cell = _DataExplorerEval__WEBPACK_IMPORTED_MODULE_6__["dataExplorerEval"].evalColumnFormula(
                                        this,
                                        col.find('._formula').attr('data-formula'),
                                        filters,
                                        i
                                    );
                                }
                            }
                        }
                        break;
                }
            }

            if (!(cell instanceof _entities_VirtualTableCell__WEBPACK_IMPORTED_MODULE_3__["VirtualTableCell"])) {
                const value = cell;
                cell = new _entities_VirtualTableCell__WEBPACK_IMPORTED_MODULE_3__["VirtualTableCell"]();
                cell.value = value;
            }

            rowData.push(cell);
        }

        return rowData;
    }
}

const dataExplorerVirtualTable = new DataExplorerVirtualTable();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/table/DataExplorerCellEditing.js":
/*!***************************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/table/DataExplorerCellEditing.js ***!
  \***************************************************************************/
/*! exports provided: dataExplorerCellEditing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerCellEditing", function() { return dataExplorerCellEditing; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataExplorerAnalyses */ "./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js");
/* harmony import */ var _DataExplorerImport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DataExplorerImport */ "./src/assets/js/tabs/data-explorer/DataExplorerImport.js");
/* harmony import */ var _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../table/DataExplorerRenderTable */ "./src/assets/js/tabs/data-explorer/table/DataExplorerRenderTable.js");







class DataExplorerCellEditing {
    createDataPoint(row, col, value) {
        let success = true;
        let alertMessage = '';

        const attribute = $($('#row_box .item.row-or-column-card')[row - 1]).attr('data-value');
        const scale = $('#scale').val();

        // Create data points object.
        let datapoint = {
            value: value,
            attribute: attribute,
            scale: scale,
            source: 'manual'
        };

        const rowCard = $($('#row_box .item.row-or-column-card')[row - 1]);
        const rowDimensions = rowCard.find('.item-group .item');
        rowDimensions.each((index, el) => {
            const dimension = $(el).attr('data-filter-type');
            const val = $(el).attr('data-value');

            datapoint[dimension] = val;
        });

        const colCard = $($('#column_box .item.row-or-column-card')[col - 1]);
        const cardDimensions = colCard.find('.item-group .item');
        cardDimensions.each((index, el) => {
            const dimension = $(el).attr('data-filter-type');
            const val = $(el).attr('data-value');

            if (datapoint.hasOwnProperty(dimension)) {
                success = false;
                alertMessage =
                    'There are multiple values for the "' +
                    dimension +
                    '" dimension: ' +
                    val +
                    ' and ' +
                    datapoint[dimension] +
                    '.';

                return false;
            } else {
                datapoint[dimension] = val;
            }
        });

        $('.global-filter-container .global-filter .item').each((index, el) => {
            const dimension = $(el).attr('data-filter-type');
            const val = $(el).attr('data-value');

            if (datapoint.hasOwnProperty(dimension)) {
                success = false;
                alertMessage =
                    'There are multiple values for the "' +
                    dimension +
                    '" dimension: ' +
                    val +
                    ' and ' +
                    datapoint[dimension] +
                    '.';

                return false;
            } else {
                datapoint[dimension] = val;
            }
        });

        return {
            success: success,
            alert: alertMessage,
            datapoint: datapoint
        };
    }

    cellEditValidation(attr) {
        if (_Common__WEBPACK_IMPORTED_MODULE_1__["common"].checkIfCellHasChanged(attr.oldVal, attr.newVal, attr.dataType)) {
            return _Common__WEBPACK_IMPORTED_MODULE_1__["common"].checkIfCellHasChanged(attr.oldVal, attr.newVal, attr.dataType);
        }

        const cellVal = attr.newVal;
        if (cellVal === '' || cellVal === 'null') {
            alert('Please enter a valid value for this cell.');

            return true;
        }

        // Validate.
        const createDataPoint = this.createDataPoint(attr.row, attr.col, cellVal);
        if (!createDataPoint.success) {
            alert(createDataPoint.alert);

            return true;
        }

        let dataPoint = createDataPoint.datapoint;
        const validation = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject().validateDataPoint(dataPoint);
        const cellData = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].currentProject.analyses[_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_3__["dataExplorerAnalyses"].currentAnalysisId].getCellData(
            attr.row - 1,
            attr.col - 1
        );

        if (cellData.numberOfDataPoints > 1) {
            alert('Cannot paste into a cell formed from multiple data points.');
            return;
        }

        if (validation.success === false && cellData.numberOfDataPoints !== 1) {
            alert(validation.error);

            return true;
        }

        return false;
    }

    cellEditAddDataPoint(attr) {
        const createDataPoint = this.createDataPoint(attr.row, attr.col, attr.val);
        const dataPoint = createDataPoint.datapoint;
        const cellData = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].currentProject.analyses[_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_3__["dataExplorerAnalyses"].currentAnalysisId].getCellData(
            attr.row - 1,
            attr.col - 1
        );
        if (cellData.numberOfDataPoints === 1) {
            dataPoint.id = cellData.dataPointIds[0];
        }

        let modifiedFromAnalysis = false;
        if (attr.hasOwnProperty('copiedFromRightTable') && attr.copiedFromRightTable) {
            modifiedFromAnalysis = true;
        }
        const result = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject().addDataPoint(dataPoint, modifiedFromAnalysis);
        if (result.success === false) {
            alert(result.error);
            _table_DataExplorerRenderTable__WEBPACK_IMPORTED_MODULE_5__["dataExplorerRenderTable"].flexgrid.setCellData(attr.row, attr.col, attr.oldVal);
        }

        const tableCol = _DataExplorerImport__WEBPACK_IMPORTED_MODULE_4__["dataExplorerImport"].rigthTableSelection.col1 + attr.colCounter;
        const tableRow = _DataExplorerImport__WEBPACK_IMPORTED_MODULE_4__["dataExplorerImport"].rigthTableSelection.row1 + attr.rowCounter;
        if (attr.hasOwnProperty('copiedFromRightTable') && attr.copiedFromRightTable) {
            const matchingDataPoint = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject().getMatchingDataPoint(dataPoint);

            if (matchingDataPoint.source !== _DataExplorerImport__WEBPACK_IMPORTED_MODULE_4__["dataExplorerImport"].uuid) {
                matchingDataPoint.source = _DataExplorerImport__WEBPACK_IMPORTED_MODULE_4__["dataExplorerImport"].uuid;

                const prevTable = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject().sourceFiles[matchingDataPoint.source];
                if (prevTable.hasOwnProperty('cellProperties')) {
                    Object.keys(prevTable.cellProperties).forEach(col => {
                        Object.keys(prevTable.cellProperties[col]).forEach(row => {
                            let cell = prevTable.cellProperties[col][row];

                            if (cell.id === dataPoint.id) {
                                Object(lodash__WEBPACK_IMPORTED_MODULE_0__["setWith"])(prevTable.cellProperties, [col, row], {}, Object);
                            }
                        });
                    });
                }
            }
        }

        if (attr.hasOwnProperty('copiedFromRightTable') && attr.copiedFromRightTable) {
            let dataPointCopy = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, dataPoint);
            dataPointCopy.failedSaving = false;
            dataPointCopy.cellType = 'data';

            const importedTable = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject().sourceFiles[_DataExplorerImport__WEBPACK_IMPORTED_MODULE_4__["dataExplorerImport"].uuid];
            let cellProperties = importedTable.cellProperties;
            Object(lodash__WEBPACK_IMPORTED_MODULE_0__["setWith"])(cellProperties, [tableCol, tableRow], dataPointCopy, Object);
        }

        // Save project.
        _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
    }

    cellEditEnding(s, e) {
        const oldVal = s.getCellData(e.row, e.col);
        const newVal = s.activeEditor.value;
        const dataType = s.columns[e.col].dataType;
        const col = e._rng._col;
        const row = e._rng._row;

        e.cancel = this.cellEditValidation({
            oldVal: oldVal,
            newVal: newVal,
            dataType: dataType,
            row: row,
            col: col
        });
    }

    cellEditEnded(s, e) {
        // Edit was cancelled?
        if (e.cancel) {
            return;
        }

        // TODO: Show loading screen.
        const val = $(s._activeCell).text();
        const col = e._rng._col;
        const row = e._rng._row;

        this.cellEditAddDataPoint({
            row: row,
            col: col,
            val: val,
            oldVal: s.getCellData(row, col)
        });
    }
}

const dataExplorerCellEditing = new DataExplorerCellEditing();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/table/DataExplorerCellViewer.js":
/*!**************************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/table/DataExplorerCellViewer.js ***!
  \**************************************************************************/
/*! exports provided: dataExplorerCellViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerCellViewer", function() { return dataExplorerCellViewer; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabs_source_data_SourceDataPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../tabs/source-data/SourceDataPoints */ "./src/assets/js/tabs/source-data/SourceDataPoints.js");
/* harmony import */ var _DataExplorerFormulas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataExplorerFormulas */ "./src/assets/js/tabs/data-explorer/DataExplorerFormulas.js");




class DataExplorerCellViewer {
    constructor() {
        /** @type {VirtualTableCell} */
        this.currentCellData = null;
        this.formulaCellViewer = $('#dataExplorerFormulaCellViewer');
        this.formulaElement = this.formulaCellViewer.find('._formula');
        this.formulaElement.on('click', 'i', e => {
            const icon = $(e.target);
            let filters;
            try {
                filters = JSON.parse(icon.attr('data-args'));
            } catch (e) {
                filters = {};
            }

            let dataPointIds = [];
            this.currentCellData.dataPointIdsPerQuery.forEach(data => {
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(filters, data.filters)) {
                    dataPointIds = data.ids;
                }
            });

            this.formulaCellViewer.modal('hide');
            this.showDataPointsViewer(dataPointIds);
        });
    }

    /**
     * @param {VirtualTableCell} cellData
     */
    showCellViewer(cellData) {
        if (cellData.dataPointIdsPerQuery.length < 2) {
            this.showDataPointsViewer(cellData.dataPointIds);
        } else {
            this.showFormulaCellViewer(cellData);
        }
    }

    showDataPointsViewer(dataPointIds) {
        $('#main_nav_tabs a[href="#source_data"]').trigger('click');
        $('._mode > label:nth-of-type(2)').trigger('click');
        $('body').addClass('showing-multiple-data-values');
        $('body').append('<div class="multiple-data-close-button"><i class="fa fa-chevron-left"></i> Back</div>');
        $('#source_data_data_points .input-group, ._mode').css('visibility', 'hidden');

        $('.multiple-data-close-button').on('click', () => {
            $('#main_nav_tabs a[href="#output_table"]').trigger('click');

            this.removeMultipleDataPointsFilter();
        });

        _tabs_source_data_SourceDataPoints__WEBPACK_IMPORTED_MODULE_1__["sourceDataPoints"].setIdFilter(dataPointIds);

        $('#main_nav_tabs a').on('click', () => {
            this.removeMultipleDataPointsFilter();
        });

        _tabs_source_data_SourceDataPoints__WEBPACK_IMPORTED_MODULE_1__["sourceDataPoints"].sync();
    }

    removeMultipleDataPointsFilter() {
        _tabs_source_data_SourceDataPoints__WEBPACK_IMPORTED_MODULE_1__["sourceDataPoints"].setIdFilter([]);
        $('.multiple-data-close-button').remove();
        $('#source_data_data_points .input-group, ._mode').css('visibility', 'visible');

        _tabs_source_data_SourceDataPoints__WEBPACK_IMPORTED_MODULE_1__["sourceDataPoints"].sync();
    }

    showFormulaCellViewer(cellData) {
        this.currentCellData = cellData;
        const result = _DataExplorerFormulas__WEBPACK_IMPORTED_MODULE_2__["dataExplorerFormulas"].convertFormulaToHtml(cellData.formula);
        this.formulaElement.html(result);
        this.formulaCellViewer.modal('show');
    }
}

const dataExplorerCellViewer = new DataExplorerCellViewer();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/table/DataExplorerDrillDown.js":
/*!*************************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/table/DataExplorerDrillDown.js ***!
  \*************************************************************************/
/*! exports provided: dataExplorerDrillDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerDrillDown", function() { return dataExplorerDrillDown; });
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataExplorerAnalyses */ "./src/assets/js/tabs/data-explorer/DataExplorerAnalyses.js");
/* harmony import */ var _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataExplorerVirtualTable */ "./src/assets/js/tabs/data-explorer/DataExplorerVirtualTable.js");




class DataExplorerDrillDown {
    constructor() {
        $(document).on('click', '#data-explorer-table .wj-cell ._drilldown-button', event => {
            this._onClick(event);
        });

        $.contextMenu({
            selector:
                '#data-explorer-table .wj-cells .wj-row:not(:first-child):not(:nth-child(2)) .wj-cell:first-child',
            build: ($trigger, e) => {
                const dimensions = _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].getCurrentProject().getDimensions();
                const items = {};

                dimensions.forEach(dimension => {
                    if (dimension.special) {
                        return;
                    }

                    items[dimension.slug] = {
                        name: 'Expand by ' + dimension.label,
                        callback: (key, opt) => {
                            const $this = $($trigger.target);
                            const row = $this.attr('data-row');
                            const analysis =
                                _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].currentProject.analyses[_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_1__["dataExplorerAnalyses"].currentAnalysisId];
                            const cardNumber = analysis.tableRowToCardNo[row];
                            const card = analysis.rows[cardNumber];
                            const path = analysis.tableRowToPath[row];
                            const drillDownStatus = card.getDrillDownStatusByPath(path);
                            this._toggleDrillDownStatus(drillDownStatus, opt, true);
                        }
                    };
                });

                return {
                    items: items
                };
            }
        });
    }

    canBeExpanded(filters) {
        return this.getExpandableDimensions(filters).length > 0;
    }

    getExpandableDimensions(filters) {
        const drillable = [];

        // Check if at least one dimension
        for (const dimensionSlug in filters) {
            const values = filters[dimensionSlug];

            // Cannot filter if there is more than one value. E.g. both "2015" and "2016".
            if (values.length !== 1) {
                continue;
            }

            // Check if there is at least one children.
            const value = values[0];
            const children = _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].getCurrentProject().getChildren(dimensionSlug, value);
            if (children.length > 0) {
                drillable.push(dimensionSlug);
            }
        }

        return drillable;
    }

    _formatItem(s, e) {
        if (
            !_services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].getCurrentProject() ||
            e.panel !== s.cells || // Skip grey cells like A, B, C, 1, 2, 3, etc.
            (e.row === 0 && e.col === 0) || // Skip A1 cell.
            (e.row !== 0 && e.col !== 0) // Only consider header cells.
        ) {
            return;
        }

        const analysis = _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].currentProject.analyses[_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_1__["dataExplorerAnalyses"].currentAnalysisId];

        // Add indent.
        if (e.col === 0) {
            $(e.cell).css('padding-left', 3 + analysis.tableRowLevel[e.row] * 20 + 'px');
        }

        // TODO: Also consider other columns.
        if (e.col !== 0) {
            return;
        }

        // Remember which row this cell represents.
        $(e.cell).attr('data-row', e.row);

        // Add drill-down button.
        if (!this._addDrillDownButton(analysis, e)) {
            $(e.cell).prepend('<i class="_empty-margin"></i>');
        }
    }

    _addDrillDownButton(analysis, e) {
        const cardNumber = analysis.tableRowToCardNo[e.row];
        const card = analysis.rows[cardNumber];

        if (!card) {
            return false;
        }

        const path = analysis.tableRowToPath[e.row];
        const drillDownStatus = card.getDrillDownStatusByPath(path);

        if (!drillDownStatus.expandable && !drillDownStatus.expanded) {
            return false;
        }

        const buttonClass = drillDownStatus.expanded ? 'fa-minus' : 'fa-plus';
        const button = $(`<i class="_drilldown-button fa ${buttonClass}" data-row="${e.row}"></i>`);
        $(e.cell).prepend(button);

        return true;
    }

    _onClick(event) {
        const $this = $(event.target);
        const row = $this.attr('data-row');
        const analysis = _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].currentProject.analyses[_DataExplorerAnalyses__WEBPACK_IMPORTED_MODULE_1__["dataExplorerAnalyses"].currentAnalysisId];
        const cardNumber = analysis.tableRowToCardNo[row];
        const card = analysis.rows[cardNumber];
        const path = analysis.tableRowToPath[row];
        const drillDownStatus = card.getDrillDownStatusByPath(path);

        this._toggleDrillDownStatus(drillDownStatus);
    }

    /**
     *
     * @param drillDownStatus {DataExplorerDrillDownStatus}
     * @param dimension {string}
     * @param expanded
     * @private
     */
    _toggleDrillDownStatus(drillDownStatus, dimension = null, expanded = null) {
        // Set expanded status.
        drillDownStatus.expanded = expanded === null ? !drillDownStatus.expanded : expanded;

        if (dimension) {
            // Use provided dimension.
            drillDownStatus.dimension = dimension;
        } else if (!drillDownStatus.dimension) {
            // Automatically get dimension.
            const drillableDimensions = this.getExpandableDimensions(drillDownStatus.filters);
            drillDownStatus.dimension = drillableDimensions[0];
        }

        _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_2__["dataExplorerVirtualTable"].updateTable();
    }
}

const dataExplorerDrillDown = new DataExplorerDrillDown();


/***/ }),

/***/ "./src/assets/js/tabs/data-explorer/table/DataExplorerRenderTable.js":
/*!***************************************************************************!*\
  !*** ./src/assets/js/tabs/data-explorer/table/DataExplorerRenderTable.js ***!
  \***************************************************************************/
/*! exports provided: dataExplorerRenderTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataExplorerRenderTable", function() { return dataExplorerRenderTable; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _DataExplorer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataExplorer */ "./src/assets/js/tabs/data-explorer/DataExplorer.js");
/* harmony import */ var _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataExplorerVirtualTable */ "./src/assets/js/tabs/data-explorer/DataExplorerVirtualTable.js");
/* harmony import */ var _table_DataExplorerCellEditing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../table/DataExplorerCellEditing */ "./src/assets/js/tabs/data-explorer/table/DataExplorerCellEditing.js");
/* harmony import */ var _table_DataExplorerCellViewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../table/DataExplorerCellViewer */ "./src/assets/js/tabs/data-explorer/table/DataExplorerCellViewer.js");
/* harmony import */ var _table_DataExplorerDrillDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../table/DataExplorerDrillDown */ "./src/assets/js/tabs/data-explorer/table/DataExplorerDrillDown.js");








/**
 * Class to render a HTML table based on Wijmo's FlexGrid component.
 */
class DataExplorerRenderTable {
    constructor() {
        this._inUpdatedLayout = false;
        this._firstTimeRefreshTable = false;
        this._tableContainer = $('#data-explorer-table');
        if (!localStorage.getItem('blobExcelData'))
            this.flexgrid = new wijmo.grid.FlexGrid(this._tableContainer[0], {
                isReadOnly: true,
                itemsSource: [],
                allowSorting: false,
                allowDragging: 'None',
                updatedLayout: () => {
                    if (this._inUpdatedLayout) {
                        this._inUpdatedLayout = false;
                    } else {
                        this._inUpdatedLayout = true;
                        this.flexgrid.autoSizeColumns(0, this.flexgrid.columns.length);
                    }
                },
                formatItem: (s, e) => {
                    this._formatItem(s, e);
                    _table_DataExplorerDrillDown__WEBPACK_IMPORTED_MODULE_6__["dataExplorerDrillDown"]._formatItem(s, e);
                },
                updatedView: () => {
                    this.flexgrid.columns.map((column, index) => {
                        this.flexgrid.columns[index].header = XLSX.utils.encode_col(index);
                    });
                    $(this.flexgrid.rowHeaders._e)
                        .find('.wj-row .wj-cell.wj-header')
                        .each(function(index) {
                            $(this).text(index + 1);
                        });
                },
                beginningEdit: (s, e) => {
                    const col = e._rng._col;
                    const row = e._rng._row;

                    // Disable edits for cells matching multiple data-points.
                    let cellData = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(_DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_3__["dataExplorerVirtualTable"], `tableData[${row - 1}][${col}]`);
                    if (cellData.numberOfDataPoints > 1) {
                        // Open cell-viewer instead.
                        _table_DataExplorerCellViewer__WEBPACK_IMPORTED_MODULE_5__["dataExplorerCellViewer"].showCellViewer(cellData);

                        e.cancel = true;
                        return;
                    }

                    // Disable edits if cell has custom formula.
                    if (cellData.customFormula) {
                        e.cancel = true;
                        return;
                    }
                },
                cellEditEnding: (s, e) => {
                    _table_DataExplorerCellEditing__WEBPACK_IMPORTED_MODULE_4__["dataExplorerCellEditing"].cellEditEnding(s, e);
                },
                cellEditEnded: (s, e) => {
                    _table_DataExplorerCellEditing__WEBPACK_IMPORTED_MODULE_4__["dataExplorerCellEditing"].cellEditEnded(s, e);
                },
                selectionChanged: (s, e) => {
                    _DataExplorer__WEBPACK_IMPORTED_MODULE_2__["dataExplorer"].dataExplorerCellFormulas.onSelectionChanged(s, e);
                },
                onPastingCell: () => {
                    console.log('Do not do anything here.');
                }
            });

        console.log('this.flexgrid-->', this.flexgrid);
    }

    updateTable() {
        let cols = $('#column_box > .item');

        // Prepare new item source.
        let headerRow = [''];
        for (let i = 0; i < cols.length; i++) {
            headerRow.push(
                $(cols[i])
                    .find('input')
                    .val()
            );
        }
        let itemsSource = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["concat"])([], _DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_3__["dataExplorerVirtualTable"].formattedTableData);
        itemsSource.unshift(headerRow);

        // Change itemSource of Wijmo table, while keeping the same selection.
        const selection = this.flexgrid.selection;
        this.flexgrid.itemsSource = itemsSource;
        this.flexgrid.collectionView.refresh();
        this.flexgrid.selection = selection;

        if (!this._firstTimeRefreshTable) {
            this._firstTimeRefreshTable = true;

            setTimeout(() => {
                this.flexgrid.collectionView.refresh();
            }, 500);
        }
    }

    _formatItem(s, e) {
        if (!_services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getCurrentProject()) {
            return;
        }

        // Ignore header cells.
        if (e.panel !== s.cells) {
            return;
        }

        const col = e._rng._col;
        const row = e._rng._row;
        const cellElement = $(e.cell);

        // Cells are reused, so we need to reset styling and attributes.
        {
            cellElement.removeClass('multiple-value-datapoint');
            cellElement.attr('data-toggle', null);
            cellElement.attr('data-placement', null);
            cellElement.attr('data-title', null);
            cellElement.css({
                'padding-left': null
            });

            // Remove tooltip, if any,
            const tooltip = cellElement.data('tooltipInstance');
            if (tooltip) {
                tooltip.dispose();
            }
        }

        if (row === 0) {
            cellElement.css('font-weight', 'bold');
        }

        if (col > 0) {
            cellElement.css('text-align', 'right');
        }

        if (col === 0 && row === 0) {
            const filtersToDisplay = $(`#filter_box_a1 .item`) ? $(`#filter_box_a1 .item`) : '';
            this._displayFiltersWithSeparator(
                filtersToDisplay,
                dataExplorerRenderTable.flexgrid.cells.getCellElement(0, 0)
            );

            const headlineFilter = $(`#filter_box_headline .item`) ? $(`#filter_box_headline .item`) : '';
            this._displayFiltersWithSeparator(
                headlineFilter,
                '._data-explorer-template-content .headline-filter-container'
            );
        }

        // Add tooltip for cells matching multiple data-points.
        // TODO: Keep a reference of these tooltips and properly dispose of them. Memory leak;
        let cellData = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(_DataExplorerVirtualTable__WEBPACK_IMPORTED_MODULE_3__["dataExplorerVirtualTable"], `tableData[${row - 1}][${col}]`);
        if (cellData && cellData.numberOfDataPoints > 1) {
            const title = `This value is calculated from ${
                cellData.numberOfDataPoints
            } data points. Click for more info.`;
            cellElement.addClass('multiple-value-datapoint');

            const tooltip = new Tooltip(cellElement, {
                container: document.body,
                boundariesElement: document.body,
                placement: 'bottom',
                title: title
            });
            cellElement.data('tooltipInstance', tooltip);
        }
    }

    _displayFiltersWithSeparator(filters, target) {
        if (!filters) {
            return;
        }

        filters = filters.toArray();
        filters = filters.map(filter => {
            return $(filter).text();
        });

        const title = Object.values(filters).join(' - ');
        $(target).text(title);
        $(target).val(title);
    }
}

const dataExplorerRenderTable = new DataExplorerRenderTable();


/***/ }),

/***/ "./src/assets/js/tabs/dropbox/Dropbox.js":
/*!***********************************************!*\
  !*** ./src/assets/js/tabs/dropbox/Dropbox.js ***!
  \***********************************************/
/*! exports provided: dropbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropbox", function() { return dropbox; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants */ "./src/assets/js/Constants.js");
/* harmony import */ var _services_ImportXlsxService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ImportXlsxService */ "./src/assets/js/services/ImportXlsxService.js");
/* harmony import */ var _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/SourceFilesService */ "./src/assets/js/services/SourceFilesService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Tab */ "./src/assets/js/Tab.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js");
/* harmony import */ var _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tabs/source-data/SourceDataFiles */ "./src/assets/js/tabs/source-data/SourceDataFiles.js");










class Dropbox extends _Tab__WEBPACK_IMPORTED_MODULE_6__["Tab"] {
    constructor() {
        super();
        this.tabHref = '#dropbox';
    }

    init() {
        this.filesContainer = $('#dropbox_data_files');
        this.fileListContainer = this.filesContainer.find('.file-list');
        this.filesTemplate = this.filesContainer.find('._template').detach();
        this.fileListContainer.find('#source_data_import_table').hide();

        $(document).ready(() => {
            // Upload File

            console.log('click on source_data_import_table_button ');
            $('#source_data_import_table_button').on('click', function() {
                $('#source_data_import_table').trigger('click');
            });
            $('#source_data_import_table').on('change', e => {
                this.loadUploadedFile(e.target.files[0]);
            });

            // Show all data
            $('._submenu [value="data_points"]').on('click', function() {
                $('.extending-sub-menu a[href="#source_data"]').trigger('click');
                $('#source_data input[name="source_data_mode"][value="data_points"]').trigger('click');
            });

            // P/C & Mapping
            $('._submenu [value="data_structures"]').on('click', function() {
                $('.extending-sub-menu a[href="#source_data"]').trigger('click');
                $('#source_data input[name="source_data_mode"][value="data_structures"]').trigger('click');
            });

            dropbox.fileCounter();

            $('#dropbox_file_list').on('change', function() {
                dropbox.fileCounter();
            });
        });
    }

    sync() {
        this.displaySourceFiles();
    }

    fileCounter() {
        let fileNumber = $('#dropbox_file_list ._file').length;
        let pluralIndicator = '';
        if (fileNumber !== 1) {
            pluralIndicator = 's';
        }
        $('._file_counter').html('<strong>' + fileNumber + '</strong>' + ' document' + pluralIndicator);
    }

    displaySourceFiles() {
        let projectKey = localStorage.getItem('current_project_key');
        let thisproject = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_4__["sourceFilesService"].getCurrentSourceFile() || JSON.parse(localStorage.getItem(projectKey));

        let sourceFiles =
            thisproject == null ? _services_StorageService__WEBPACK_IMPORTED_MODULE_5__["storageService"].currentProject.sourceFiles : lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(thisproject, `sourceFiles`);

        if (!localStorage.getItem('blobExcelData')) this.filesContainer.find('._file:not(._button)').remove();
        for (const uuid in sourceFiles) {
            /** @type {SourceFile} */
            const file = sourceFiles[uuid];

            // Skip hidden files.
            if (file.hidden) {
                continue;
            }

            if (!localStorage.getItem('blobExcelData')) {
                // Create div.
                const div = this.filesTemplate.clone();
                div.removeClass('_template');
                div.find('._name').text(file.name);
                div.attr('data-uuid', uuid);

                // Show progress.
                {
                    const ratio = file.getTotalCompletionPercentage();
                    const color = chroma
                        .mix(
                            _Constants__WEBPACK_IMPORTED_MODULE_2__["constants"].FILE_WORKFLOW_CELL_PROGRESS_COLOR_BEGIN,
                            _Constants__WEBPACK_IMPORTED_MODULE_2__["constants"].FILE_WORKFLOW_CELL_PROGRESS_COLOR_END,
                            ratio,
                            'lab'
                        )
                        .hex();
                    div.find('._percentage')
                        .html(Math.round(ratio * 100) + '%')
                        .css('background-color', color);
                }
                //
                this.fileListContainer.append(div);
            }
        }

        // Load saved files.
        $('#dropbox_file_list')
            .find('._file:not(._button)')
            .on('click', e => {
                const uuid = $(e.currentTarget).data('uuid');
                this.loadFileByUuid(uuid);
            });
    }

    /**
     * Load a file already present in the project, by matching against its UUID. Jump to the File Workflow screen.
     * @param uuid
     */
    async loadFileByUuid(uuid) {
        await _Common__WEBPACK_IMPORTED_MODULE_1__["common"].showLoading();

        _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_4__["sourceFilesService"].currentUuid = uuid;
        const sourceFile = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_4__["sourceFilesService"].getCurrentSourceFile();
        _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_8__["sourceDataFiles"].flexGrid.itemsSource = sourceFile.itemsSource;
        _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_8__["sourceDataFiles"].flexGrid.collectionView.refresh();

        $('ul.nav a[href="#source_data"]').trigger('click');
        $('input[name=source_data_mode][value=files]').trigger('click');

        $('#source_data_files_pre_ingestion').data('active', true);

        // Show table title.
        $('#source_data_files_sidebar ._table-name').text(sourceFile.name);

        // Hide previous screen.
        $('#source_data_files_file_list').hide();
        $('#source_data_files_pre_ingestion').show();

        _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_7__["sourceDataFilesSidebar"].startWorkflow();
        _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_7__["sourceDataFilesSidebar"].displayLoadedFileSidebar();

        const columns = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_8__["sourceDataFiles"].flexGrid.itemsSource[0];
        columns.map((col, colNr) => {
            if (col === '') {
                _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_8__["sourceDataFiles"].flexGrid.autoSizeColumn(colNr);
            }
        });

        _Common__WEBPACK_IMPORTED_MODULE_1__["common"].hideLoading();
    }

    /**
     * Save and load an uploaded file.
     * @param file
     * @returns {Promise<void>}
     */
    async loadUploadedFile(file) {
        await _Common__WEBPACK_IMPORTED_MODULE_1__["common"].showLoading();

        const uuid = await _services_ImportXlsxService__WEBPACK_IMPORTED_MODULE_3__["importXlsxService"].importXlsx(file);
        await this.loadFileByUuid(uuid);
    }
}

const dropbox = new Dropbox();


/***/ }),

/***/ "./src/assets/js/tabs/project-setup/ProjectSetup.js":
/*!**********************************************************!*\
  !*** ./src/assets/js/tabs/project-setup/ProjectSetup.js ***!
  \**********************************************************/
/*! exports provided: projectSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectSetup", function() { return projectSetup; });
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/DimensionTypesService */ "./src/assets/js/services/DimensionTypesService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Tab */ "./src/assets/js/Tab.js");
/* harmony import */ var _tabs_source_data_SourceDataPointsSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tabs/source-data/SourceDataPointsSidebar */ "./src/assets/js/tabs/source-data/SourceDataPointsSidebar.js");






class ProjectSetup extends _Tab__WEBPACK_IMPORTED_MODULE_3__["Tab"] {
    constructor() {
        super();
        this.tabHref = '#project_setup';
        this.table = null;
        this.columns = null;
    }

    init() {
        this.container = $('#project_setup');
        this.dimensionsTable = this.container.find('._dimensions');
        this.dimensionsTableTemplate = this.dimensionsTable.find('._template').detach();

        this.container.find('._add-custom-dimension').on('click', () => {
            _tabs_source_data_SourceDataPointsSidebar__WEBPACK_IMPORTED_MODULE_4__["sourceDataPointsSidebar"].addCustomDimension();
        });
    }

    sync() {
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject();
        const tbody = this.dimensionsTable.find('tbody').html('');
        const dimensions = project.getDimensions(true);

        dimensions.forEach(dimension => {
            const tr = this.dimensionsTableTemplate.clone();

            tr.find('._name').html(dimension.label);

            if (!tr.find('._dictionary-selector').contents().length) {
                let dictionarySelect = new wijmo.input.MultiSelect(tr.find('._dictionary-selector')[0], {
                    placeholder: 'Select Dictionaries',
                    itemsSource: [],
                    headerFormat: '{count} dictionaries selected',
                    onCheckedItemsChanged: () => {
                        dimension.dictionaries = dictionarySelect.checkedItems;
                        _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
                    }
                });
                dictionarySelect.itemsSource = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].getGlobalTermsDictionaries();
                dictionarySelect.checkedItems = dimension.getDictionaries();
                tr.find('._dictionary-selector').css('display', dimension.hasGlobalTerms ? '' : 'none');
            }

            tr.find('._has-structures input')
                .css('display', dimension.special ? 'none' : '')
                .prop('checked', dimension.hasDataStructures)
                .on('change', e => {
                    dimension.hasDataStructures = e.target.checked;
                    _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
                    _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
                });

            tr.find('._has-global-terms input')
                .css('display', dimension.special ? 'none' : '')
                .prop('checked', dimension.hasGlobalTerms)
                .on('change', e => {
                    dimension.hasGlobalTerms = e.target.checked;
                    _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
                    _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
                });

            tr.find('._used-as-identifier input')
                .css('display', dimension.special ? 'none' : '')
                .prop('checked', dimension.usedAsIdentifier)
                .on('change', e => {
                    dimension.usedAsIdentifier = e.target.checked;
                    _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
                    _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
                });

            tr.find('._has-time-intervals input')
                .css('display', dimension.special ? 'none' : '')
                .prop('checked', dimension.hasTimeIntervals)
                .on('change', e => {
                    dimension.hasTimeIntervals = e.target.checked;
                    _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
                    _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
                });

            {
                let selectElement = tr.find('._data-type select');
                selectElement.css('display', dimension.special ? 'none' : '');

                let optionNumber = dimension.dataType + 1;
                selectElement.children('option:nth-child(' + optionNumber + ')').prop('selected', true);

                selectElement.on('change', e => {
                    if (parseInt($(e.target).prop('value')) === _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_1__["dimensionTypesService"].STRING) {
                        dimension.dataType = _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_1__["dimensionTypesService"].STRING;
                    } else if (parseInt($(e.target).prop('value')) === _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_1__["dimensionTypesService"].CURRENCY) {
                        dimension.dataType = _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_1__["dimensionTypesService"].CURRENCY;
                    } else {
                        dimension.dataType = _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_1__["dimensionTypesService"].NUMBER;
                    }

                    _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
                    _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
                });
            }

            tr.find('._hide-dimension')
                .css('display', dimension.special ? 'none' : '')
                .addClass(dimension.isVisible ? '' : 'active');

            tr.find('._remove-dimension').css('display', dimension.special ? 'none' : '');

            tbody.append(tr);
        });

        $('._remove-dimension').on('click', function(e) {
            let result = projectSetup.removeDimension(e, dimensions);

            if (result !== false) {
                project.dimensions = result;
                _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
                _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
            }
        });

        $('._hide-dimension').on('click', function() {
            const $this = $(this);
            $this.toggleClass('active');

            const currentDimensionName = $this
                .parent()
                .siblings('._name')
                .text();
            project.dimensions.forEach(function(dimension) {
                if (dimension.label === currentDimensionName) {
                    $this.hasClass('active') ? (dimension.isVisible = false) : (dimension.isVisible = true);
                    _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
                }
            });

            _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
        });

        // Calculate Delta by adding children.
        this.container
            .find('._delta-add-children')
            .prop('checked', project.calculateDeltaByAddingChildren)
            .on('change', e => {
                project.calculateDeltaByAddingChildren = e.target.checked;
                _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
                _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
            });
    }

    removeDimension(e, dimensionsArray) {
        let change = confirm('Remove dimension?');

        if (change) {
            let newDimensions = [];
            let dimensionName = $(e.target)
                .parent()
                .siblings('._name')
                .text();
            dimensionsArray.forEach(dimension => {
                if (dimension.label !== dimensionName) {
                    newDimensions.push(dimension);
                }
            });
            return newDimensions;
        }

        return false;
    }
}

const projectSetup = new ProjectSetup();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/SourceData.js":
/*!******************************************************!*\
  !*** ./src/assets/js/tabs/source-data/SourceData.js ***!
  \******************************************************/
/*! exports provided: sourceData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceData", function() { return sourceData; });
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Tab */ "./src/assets/js/Tab.js");
/* harmony import */ var _tabs_dropbox_Dropbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tabs/dropbox/Dropbox */ "./src/assets/js/tabs/dropbox/Dropbox.js");
/* harmony import */ var _add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-file-workflow/SourceDataFilesSidebar */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js");
/* harmony import */ var _add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-manual-workflow/AddManualSidebar */ "./src/assets/js/tabs/source-data/add-manual-workflow/AddManualSidebar.js");
/* harmony import */ var _add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-manual-workflow/AddManualTable */ "./src/assets/js/tabs/source-data/add-manual-workflow/AddManualTable.js");
/* harmony import */ var _source_data_structures_SourceDataStructures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./source-data-structures/SourceDataStructures */ "./src/assets/js/tabs/source-data/source-data-structures/SourceDataStructures.js");
/* harmony import */ var _SourceDataFiles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SourceDataFiles */ "./src/assets/js/tabs/source-data/SourceDataFiles.js");
/* harmony import */ var _SourceDataGraphView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SourceDataGraphView */ "./src/assets/js/tabs/source-data/SourceDataGraphView.js");
/* harmony import */ var _SourceDataPoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SourceDataPoints */ "./src/assets/js/tabs/source-data/SourceDataPoints.js");












class SourceData extends _Tab__WEBPACK_IMPORTED_MODULE_2__["Tab"] {
    constructor() {
        super();
        this.tabHref = '#source_data';
        this.sourceDataFiles = _SourceDataFiles__WEBPACK_IMPORTED_MODULE_8__["sourceDataFiles"];
        this.sourceDataPoints = _SourceDataPoints__WEBPACK_IMPORTED_MODULE_10__["sourceDataPoints"];
        this.sourceDataStructures = new _source_data_structures_SourceDataStructures__WEBPACK_IMPORTED_MODULE_7__["SourceDataStructures"]($('#source_data_data_structures'), () => {
            _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].saveCurrentProject();
            _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].syncViews();
        });
        this.sourceDataGraphView = _SourceDataGraphView__WEBPACK_IMPORTED_MODULE_9__["sourceDataGraphView"];
        this.addManualTable = _add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_6__["addManualTable"];

        if (this.sourceDataFilesSidebar) this.sourceDataFilesSidebar = _add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_4__["sourceDataFilesSidebar"];
        if (this.dropbox) this.dropbox = _tabs_dropbox_Dropbox__WEBPACK_IMPORTED_MODULE_3__["dropbox"];
    }

    init() {
        this.sourceDataFiles.init();
        this.sourceDataPoints.init();
        this.sourceDataGraphView.init();

        this.container = $('#source_data');

        $('input[name=source_data_mode][value=files]')
            .parent()
            .css('display', 'none');
        $('input[name=source_data_mode][value=manual_workflow]')
            .parent()
            .css('display', 'none');

        // Mode
        this.container
            .find('input[name=source_data_mode]')
            .on('change', e => {
                _Common__WEBPACK_IMPORTED_MODULE_0__["common"].showFakeLoading();
                const element = $(e.target);

                if (!element.is(':checked')) {
                    return;
                }

                const value = element.val();
                const importedTableActive = $('#source_data_files_pre_ingestion').data('active');

                $('#source_data_files').css('display', value === 'files' ? '' : 'none');
                $('#source_data_data_points').css('display', value === 'data_points' ? '' : 'none');
                $('#source_data_new_entry').css('display', value === 'data_points' ? '' : 'none');
                $('#source_data_data_structures').css('display', value === 'data_structures' ? '' : 'none');
                $('#graph_view').css('display', value === 'graph_view' ? '' : 'none');
                $('#source_data_files_sidebar').css(
                    'display',
                    importedTableActive === true && value === 'files' ? '' : 'none'
                );
                $('#add_manual_workflow').css('display', value === 'manual_workflow' ? '' : 'none');
                $('#add_manual_sidebar').css('display', value === 'manual_workflow' ? '' : 'none');

                if (value === 'manual_workflow') {
                    _add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__["addManualSidebar"].sync();
                }

                if (value === 'graph_view') {
                    _SourceDataGraphView__WEBPACK_IMPORTED_MODULE_9__["sourceDataGraphView"].syncGraph();
                }

                const header = $('#source_data .container-with-sidebar ._content ._options');
                if (value === 'manual_workflow' || value === 'files') {
                    header.css('display', 'none');
                } else {
                    header.css('display', '');
                }

                // Refresh FlexGrid.
                window.dispatchEvent(new Event('resize'));
            })
            .trigger('change');

        // Add file.
        this.container.find('._add-data-buttons ._add-file').on('click', e => {
            // $('input[name=source_data_mode][value=files]').trigger('click');
            $('#dropbox_data_files ._upload-file').trigger('click');
        });

        // Manual workflow button trigger.
        this.container.find('._add-data-buttons ._add-data-points-manually').on('click', e => {
            $('input[name=source_data_mode][value=manual_workflow]').trigger('click');
        });
    }

    sync() {
        this.sourceDataFiles.sync();
        this.sourceDataPoints.sync();
        this.sourceDataStructures.setProject(_services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].getCurrentProject());
        this.sourceDataStructures.sync();
        this.sourceDataGraphView.sync();
        this.addManualTable.sync();
        if (this.sourceDataFilesSidebar) this.sourceDataFilesSidebar.sync();
    }

    beginWorkflow() {
        $('.body-container .side-menu').css({ 'pointer-events': 'none', cursor: 'not-allowed' });
    }

    endWorkflow() {
        $('.body-container .side-menu').css({ 'pointer-events': '', cursor: '' });
        $('input[name=source_data_mode][value=data_points]').trigger('click');
    }
}

const sourceData = new SourceData();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/SourceDataFiles.js":
/*!***********************************************************!*\
  !*** ./src/assets/js/tabs/source-data/SourceDataFiles.js ***!
  \***********************************************************/
/*! exports provided: sourceDataFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceDataFiles", function() { return sourceDataFiles; });
/* harmony import */ var _add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-file-workflow/AddFileSteps */ "./src/assets/js/tabs/source-data/add-file-workflow/AddFileSteps.js");
/* harmony import */ var _add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-file-workflow/SourceDataEditTableCell */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataEditTableCell.js");
/* harmony import */ var _add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-file-workflow/SourceDataFilesSidebar */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js");
/* harmony import */ var _add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-manual-workflow/AddManualTable */ "./src/assets/js/tabs/source-data/add-manual-workflow/AddManualTable.js");





class SourceDataFiles {
    constructor() {
        this.flexgrid = null;
    }

    init() {
        _add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_2__["sourceDataFilesSidebar"].init();
        _add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_1__["sourceDataEditTableCell"].init();
        _add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_3__["addManualTable"].init();

        this.flexGrid = new wijmo.grid.FlexGrid($('#source_data_files_pre_ingestion ._table')[0], {
            allowDragging: 'None',
            allowSorting: false,
            isReadOnly: true,
            itemsSource: [],
            selectionChanged: (s, e) => _add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_0__["addFileSteps"].fileWorkflow.onTableSelectionChanged(s, e),
            formatItem: (s, e) => {
                _add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_0__["addFileSteps"].fileWorkflow.itemFormatter.formatItem(s, e);
                _add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_0__["addFileSteps"].fileWorkflow.formatTableCell(s, e);
            },
            selectionChanging: (s, e) => _add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_0__["addFileSteps"].fileWorkflow.onTableSelectionChanging(s, e),
            updatedView: () => {
                sourceDataFiles.flexGrid.columns.map((column, index) => {
                    sourceDataFiles.flexGrid.columns[index].header = XLSX.utils.encode_col(index);
                });
                $(sourceDataFiles.flexGrid.rowHeaders._e)
                    .find('.wj-row .wj-cell.wj-header')
                    .each(function(index) {
                        $(this).text(index + 1);
                    });
            },
            updatingView: () => {
                _add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_0__["addFileSteps"].fileWorkflow.itemFormatter.updatingView();
            }
        });
        this.flexGrid.hostElement.addEventListener('mousedown', () => {
            _add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_0__["addFileSteps"].fileWorkflow.onMouseDown();
        });
        $('#source_data_files_pre_ingestion').hide();

        // Initially hide add manual workflow.
        $('#add_manual_workflow').css('display', 'none');
        $('#add_manual_sidebar').css('display', 'none');
    }

    sync() {
        sourceDataFiles.flexGrid.refresh();

        _add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_2__["sourceDataFilesSidebar"].sync();

        // Edit table cell functionality.
        _add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_1__["sourceDataEditTableCell"].sync();
    }
}

const sourceDataFiles = new SourceDataFiles();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/SourceDataGraphView.js":
/*!***************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/SourceDataGraphView.js ***!
  \***************************************************************/
/*! exports provided: sourceDataGraphView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceDataGraphView", function() { return sourceDataGraphView; });
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _entities_SourceFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/SourceFile */ "./src/assets/js/entities/SourceFile.js");
/* harmony import */ var _MultiLevelHashMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MultiLevelHashMap */ "./src/assets/js/MultiLevelHashMap.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _source_data_structures_SourceDataStructureValidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./source-data-structures/SourceDataStructureValidator */ "./src/assets/js/tabs/source-data/source-data-structures/SourceDataStructureValidator.js");
/* harmony import */ var _SourceData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SourceData */ "./src/assets/js/tabs/source-data/SourceData.js");
/* harmony import */ var _SourceDataPoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SourceDataPoints */ "./src/assets/js/tabs/source-data/SourceDataPoints.js");









class SourceDataGraphView {
    constructor() {
        this.network = null;
        this.sourceDataStructureValidator = new _source_data_structures_SourceDataStructureValidator__WEBPACK_IMPORTED_MODULE_5__["SourceDataStructureValidator"]();
        this.filters = [];
        this.dataAvailability = null;
    }

    init() {
        this.container = $('#graph_view');
        this.filtersContainer = this.container.find('._row3');

        this.dimensionSelect = new wijmo.input.ComboBox(this.container.find('._dimension-selector')[0], {
            placeholder: 'Select Dimension',
            itemsSource: [],
            displayMemberPath: 'label',
            onSelectedIndexChanged: () => {
                if (!this.isSyncing) {
                    this.syncGraph();
                }
            }
        });

        this.coloringSelect = new wijmo.input.ComboBox(this.container.find('._coloring-selector')[0], {
            placeholder: 'Select Coloring',
            itemsSource: [
                {
                    label: 'File',
                    value: 'file'
                },
                {
                    label: 'Validation',
                    value: 'validation'
                },
                {
                    label: 'Data Availability',
                    value: 'data_availability'
                }
            ],
            displayMemberPath: 'label',
            onSelectedIndexChanged: () => {
                const coloring = this.coloringSelect.selectedItem.value;
                this.filtersContainer.css('display', coloring === 'data_availability' ? '' : 'none');

                if (!this.isSyncing) {
                    this.syncGraph();
                }
            }
        });

        this.sourceFileSelect = new wijmo.input.MultiSelect(this.container.find('._source-file-selector')[0], {
            placeholder: 'Select Source Files',
            itemsSource: [],
            headerFormat: '{count} files selected',
            displayMemberPath: 'name',
            checkedMemberPath: 'selected',
            onCheckedItemsChanged: () => {
                this.syncGraph();
            }
        });

        this.graphProgress = this.container.find('._graph-progress');
        this.graphContainer = this.container.find('._graph');

        this.hierarchicalCheckbox = this.container.find('._hierarchical-checkbox');
        this.hierarchicalCheckbox.on('change', () => this.syncGraph());

        this.useGlobalTermsCheckbox = this.container.find('._use-global-terms-checkbox');
        this.useGlobalTermsCheckbox.on('change', () => this.syncGraph());

        this.hideDisconnectedValuesCheckbox = this.container.find('._hide-disconnected-values');
        this.hideDisconnectedValuesCheckbox.on('change', () => this.syncGraph());
    }

    sync() {
        // Prevent multiple runs.
        if (this.isSyncing) {
            return;
        }
        this.isSyncing = true;

        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject();

        // Get dimensions that have data structures or global terms.
        let dimensions = project.getDimensions();
        dimensions = dimensions.filter(dimension => {
            return dimension.hasDataStructures;
        });
        this.dimensionSelect.itemsSource = dimensions;

        // Set source files.
        {
            // Get source files.
            let sourceFiles = Object.values(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(project.sourceFiles));
            sourceFiles.unshift(
                new _entities_SourceFile__WEBPACK_IMPORTED_MODULE_2__["SourceFile"]({
                    uuid: 'manual',
                    name: 'Manual'
                })
            );

            let colors = ['#00338d', '#0091da', '#6d2077', '#005eb8', '#00a3a1', '#eaaa00'];
            let i = 0;
            sourceFiles = sourceFiles.map(sourceFile => {
                // All are selected by default.
                sourceFile.selected = true;

                // Set color.
                sourceFile.color = colors[i % colors.length];
                i++;

                return sourceFile;
            });

            this.sourceFileSelect.itemsSource = sourceFiles;
        }

        // Create filters.
        {
            this.filters = [];
            this.filtersContainer.html('');
            const dimensions = project.getDimensions();
            dimensions.forEach(dimension => {
                // Skip certain dimensions.
                if (
                    this.dimensionSelect.selectedItem &&
                    ['value', 'scale', this.dimensionSelect.selectedItem.slug].indexOf(dimension.slug) !== -1
                ) {
                    return;
                }

                // Create DOM elements.
                const div = $('<div>' + dimension.label + '</div>');
                const filterContainer = $('<div></div>').appendTo(div);
                this.filtersContainer.append(filterContainer);
                this.filtersContainer.append('&nbsp;&nbsp;&nbsp;');

                // Get items.
                const items = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getUniqueValues(project.dataPoints, dimension.slug);
                items.unshift('');

                // Create filter.
                const comboBox = new wijmo.input.ComboBox(filterContainer[0], {
                    placeholder: 'Select ' + dimension.label,
                    itemsSource: items,
                    onSelectedIndexChanged: () => {
                        if (!this.isSyncing) {
                            this.syncGraph();
                        }
                    }
                });
                this.filters.push({
                    dimensionSlug: dimension.slug,
                    comboBox: comboBox
                });
            });
        }

        // Update graph.
        this.syncGraph();
        this.isSyncing = false;
    }

    syncGraph() {
        console.log('syncGraph');
        if (!this.dimensionSelect.selectedItem) {
            return;
        }

        this.syncDataAvailability();

        const coloring = this.coloringSelect.selectedItem.value;
        const dimensionSlug = this.dimensionSelect.selectedItem.slug;
        const files = this.sourceFileSelect.itemsSource.filter(sourceFile => {
            return sourceFile.selected;
        });

        // Get values, add nodes and index name-slugs to node-IDs.
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject();
        this.sourceDataStructureValidator.setProject(project);
        const dataStructures = project.getDataStructuresForDimension(dimensionSlug);
        let nodes = [];
        const slugsToNodes = {};
        const groupNodesToAdd = {};
        let sequence = 0;
        files.forEach(file => {
            let dataset = project.getDataPointsForSource(file.uuid);
            let values = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getUniqueValues(dataset, dimensionSlug);
            values.forEach(value => {
                /** @type {DataStructure} */
                const dataStructure = dataStructures[value] || {};

                // Don't add duplicate values.
                if (value in slugsToNodes) {
                    return;
                }

                // Get label.
                let label;
                {
                    label = value;

                    if (this.useGlobalTermsCheckbox.is(':checked') && dataStructure.globalTerm) {
                        // Use global term.
                        label = dataStructure.globalTerm;
                    } else {
                        label = value;
                    }

                    // Replace whitespaces with newlines.
                    label = label.replace(/ /g, '\n');

                    if (coloring === 'data_availability') {
                        let percentage = this.getDataAvailabilityForValue(value);
                        label += '\n ' + Math.round(percentage * 100) + '%';
                    }
                }

                // Get color.
                let color = this.getColor(file['color'], dimensionSlug, value);

                // Create node.
                let node = {
                    id: sequence++,
                    label: label,
                    color: color,
                    value: 1,
                    _parentSlug: null,
                    _dimensionValue: value
                };
                nodes.push(node);
                slugsToNodes[value] = node;

                // Save the group node for later.
                if (dataStructure.group) {
                    const slug = this.getGroupSlug(dataStructure);
                    groupNodesToAdd[slug] = dataStructure;
                }
            });
        });

        // Add group nodes.
        for (const slug in groupNodesToAdd) {
            /** @type {DataStructure} */
            const dataStructure = groupNodesToAdd[slug];

            // Get parent node.
            const parentNode = slugsToNodes[dataStructure.parentAttribute];
            if (!parentNode) {
                continue;
            }

            // Get color.
            let color = this.getColor(
                parentNode.color,
                dimensionSlug,
                dataStructure.parentAttribute,
                dataStructure.group
            );

            // Create node.
            let node = {
                id: sequence++,
                label: dataStructure.group,
                color: color,
                value: 1,
                _parentSlug: null,
                _groupValue: dataStructure.group
            };
            nodes.push(node);
            slugsToNodes[slug] = node;
        }

        // Add edges.
        const edges = [];
        const addedEdgeForGroup = {};
        for (const value in dataStructures) {
            /** @type {DataStructure} */
            const dataStructure = dataStructures[value];
            const childSlug = dataStructure.attribute;
            const parentSlug = dataStructure.parentAttribute;

            if (!(parentSlug in slugsToNodes) || !(childSlug in slugsToNodes)) {
                continue;
            }

            // Was the other parent a better match?
            if (
                slugsToNodes[childSlug]._parentSlug !== null &&
                childSlug.indexOf(slugsToNodes[childSlug]._parentSlug) !== -1
            ) {
                continue;
            }

            if (!dataStructure.group) {
                // Create parent-child edge.
                edges.push({
                    from: slugsToNodes[parentSlug].id,
                    to: slugsToNodes[childSlug].id
                });
            } else {
                const groupSlug = this.getGroupSlug(dataStructure);

                // Create parent-group edge. Prevent duplicates.
                if (!(groupSlug in addedEdgeForGroup)) {
                    addedEdgeForGroup[groupSlug] = true;
                    edges.push({
                        from: slugsToNodes[parentSlug].id,
                        to: slugsToNodes[groupSlug].id
                    });
                }

                // Create group-child edge.
                edges.push({
                    from: slugsToNodes[groupSlug].id,
                    to: slugsToNodes[childSlug].id
                });
            }

            // Increase parent node.
            slugsToNodes[childSlug]._parentSlug = parentSlug;
            slugsToNodes[parentSlug]['value']++;
        }

        // Index nodes by ID.
        const idsToNodes = nodes.reduce((a, node) => {
            a[node.id] = node;

            return a;
        }, {});

        // Hide disconnected nodes.
        if (this.hideDisconnectedValuesCheckbox.is(':checked')) {
            // Mark connected nodes.
            edges.forEach(edge => {
                idsToNodes[edge.from].connected = true;
                idsToNodes[edge.to].connected = true;
            });

            // Remove disconnected.
            nodes = nodes.filter(node => {
                return node.connected;
            });
        }

        // Adjust colors.
        if (coloring === 'file') {
            let maxValue = 0;
            nodes.forEach(node => {
                maxValue = Math.max(maxValue, node['value']);
            });
            nodes.forEach(node => {
                let percent = (maxValue - node['value']) / maxValue / 2.5;
                node['color'] = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].shadeColor2(node['color'], percent);
            });
        }

        // Compose network arguments.
        let data = {
            nodes: new vis.DataSet(nodes),
            edges: new vis.DataSet(edges)
        };
        let options = {
            nodes: {
                shape: 'box',
                font: {
                    size: 18,
                    color: '#ffffff'
                }
            },
            interaction: {
                dragNodes: false
            }
        };
        if (!this.hierarchicalCheckbox.is(':checked')) {
            options['physics'] = {
                enabled: true,
                barnesHut: {
                    gravitationalConstant: -2000,
                    centralGravity: 0.3,
                    springLength: 95,
                    springConstant: 0.04,
                    damping: 0.09,
                    avoidOverlap: 0
                },
                maxVelocity: 50,
                minVelocity: 0.1,
                stabilization: {
                    enabled: true,
                    iterations: 1000,
                    updateInterval: 10,
                    onlyDynamicEdges: false,
                    fit: true
                },
                timestep: 1,
                adaptiveTimestep: true
            };
            options['nodes']['scaling'] = {
                label: {
                    min: 15,
                    max: 20
                }
            };
        } else {
            options['physics'] = false;
            options['layout'] = {
                hierarchical: {
                    enabled: true,
                    sortMethod: 'directed',
                    nodeSpacing: 150,
                    blockShifting: false
                }
            };
            options['edges'] = {
                selectionWidth: 0
            };
        }

        // Create network.
        if (this.network) {
            this.network.destroy();
        }
        this.network = new vis.Network(this.graphContainer[0], data, options);
        this.network.on('stabilizationProgress', o => {
            this.graphProgress
                .css('display', '')
                .html('Loading ' + Math.round((o.iterations / o.total) * 100) + '%...');
        });
        this.network.on('stabilizationIterationsDone', o => {
            this.graphProgress.css('display', 'none').html('');
        });
        this.network.on('afterDrawing', o => {
            this.graphProgress.css('display', 'none').html('');
        });
        this.network.on('doubleClick', params => {
            if (params.nodes.length === 0) {
                return;
            }

            const id = params.nodes[0];
            const node = idsToNodes[id];
            const coloring = this.coloringSelect.selectedItem.value;

            if (coloring === 'data_availability') {
                // Open Data Cockpit tab.
                $('#source_data input[name="source_data_mode"]').trigger('blur');
                $('#source_data input[name="source_data_mode"][value="data_points"]').trigger('click');

                // Ensure required columns are enabled in data cockpit.
                this.filters.forEach(filter => {
                    _SourceDataPoints__WEBPACK_IMPORTED_MODULE_7__["sourceDataPoints"].columnsSelect.itemsSource.forEach(column => {
                        if (column.slug === filter.dimensionSlug) {
                            column.selected = true;
                        }
                    });
                });
                _SourceDataPoints__WEBPACK_IMPORTED_MODULE_7__["sourceDataPoints"].columnsSelect.refresh();
                _SourceDataPoints__WEBPACK_IMPORTED_MODULE_7__["sourceDataPoints"].updateColumns();

                // Get filters.
                const flexFilters = [];
                this.filters.forEach(filter => {
                    // Check if selected.
                    const selectedValue = filter.comboBox.selectedItem;
                    if (selectedValue === '') {
                        return;
                    }

                    const showValues = {};
                    showValues[filter.comboBox.selectedItem] = true;

                    const flexFilter = {
                        binding: filter.dimensionSlug,
                        type: 'value',
                        filterText: '',
                        showValues: showValues
                    };

                    flexFilters.push(flexFilter);
                });

                // Set filter definition.
                const filterDefinition = {
                    defaultFilterType: 3,
                    filters: flexFilters
                };
                _SourceDataPoints__WEBPACK_IMPORTED_MODULE_7__["sourceDataPoints"].flexGridFilter.filterDefinition = JSON.stringify(filterDefinition);
            } else {
                // Open Structures tab.
                $('#source_data input[name="source_data_mode"]').trigger('blur');
                $('#source_data input[name="source_data_mode"][value="data_structures"]').trigger('click');

                // Select dimension.
                _SourceData__WEBPACK_IMPORTED_MODULE_6__["sourceData"].sourceDataStructures.dimensionSelect.selectedValue = this.dimensionSelect.selectedValue;

                setTimeout(() => {
                    // Select relevant row.
                    const flexgrid = _SourceData__WEBPACK_IMPORTED_MODULE_6__["sourceData"].sourceDataStructures.flexgrid;
                    let row = 0;
                    for (let i = 0; i < flexgrid.rows.length; i++) {
                        const item = flexgrid.rows[i].dataItem;
                        row = i;

                        if (
                            (item.value && item.value === node._dimensionValue) ||
                            (item.group && item.group === node._groupValue)
                        ) {
                            break;
                        }
                    }
                    flexgrid.select(new wijmo.grid.CellRange(row, 0, row, 0), true);
                }, 50);
            }
        });
    }

    syncDataAvailability() {
        const coloring = this.coloringSelect.selectedItem.value;
        if (coloring !== 'data_availability') {
            return;
        }

        // Filter data points.
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject();
        let dataPoints = project.dataPoints;
        dataPoints = dataPoints.filter(dataPoint => {
            let matches = true;

            this.filters.forEach(filter => {
                const value = filter.comboBox.selectedItem;
                if (value && dataPoint[filter.dimensionSlug] !== value) {
                    matches = false;
                }
            });

            return matches;
        });

        // Group values by unique dimension-combinations.
        const dimensionSlug = this.dimensionSelect.selectedItem.slug;
        let dimensions = project.getDimensionsForDataStructureValidation(dimensionSlug);
        let map = new _MultiLevelHashMap__WEBPACK_IMPORTED_MODULE_3__["MultiLevelHashMap"](dimensions.length + 1);
        dataPoints.forEach((dataPoint, index) => {
            const key = [];
            dimensions.forEach(dimension => {
                // Undefined or an empty string must count as the same thing.
                let value = dataPoint[dimension.slug];
                if (typeof value === 'undefined') {
                    value = '';
                }

                key.push(value);
            });

            // Add copy of data-point to map.
            map.set(key.concat([dataPoint.id]), Object.assign({}, dataPoint));
        });
        let groups = map.getUniqueGroups();

        // Get availability for each value.
        this.dataAvailability = {};
        const values = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getUniqueValues(dataPoints, dimensionSlug);
        values.forEach(value => {
            let groupsFound = 0;

            groups.forEach(group => {
                let dataPointFound = false;

                for (const id in group) {
                    const dataPoint = group[id];
                    if (dataPoint[dimensionSlug] === value) {
                        dataPointFound = true;
                    }
                }

                if (dataPointFound) {
                    groupsFound++;
                }
            });

            this.dataAvailability[value] = groupsFound / groups.length;
        });
    }

    getDataAvailabilityForValue(value) {
        const percentage = this.dataAvailability[value];

        if (!percentage) {
            return 0;
        }

        if (_Common__WEBPACK_IMPORTED_MODULE_1__["common"].isDeltaZero(percentage - 1)) {
            return 1;
        }

        return percentage;
    }

    getColor(fileColor, dimensionSlug, parentAttribute, group) {
        const coloring = this.coloringSelect.selectedItem.value;
        let color;

        switch (coloring) {
            case 'validation':
                const result = this.sourceDataStructureValidator.validateValue(dimensionSlug, parentAttribute, group);
                if (result === null) {
                    color = '#888';
                } else if (result.invalid === 0) {
                    color = 'green';
                } else if (result.invalid > 0) {
                    color = 'red';
                }
                break;

            case 'file':
                color = fileColor;
                break;

            case 'data_availability':
                if (group) {
                    color = 'green';
                } else {
                    const value = this.getDataAvailabilityForValue(parentAttribute);

                    color = chroma.mix('red', 'green', value, 'lab').hex();
                }
                break;
        }

        return color;
    }

    /**
     * @param {DataStructure} dataStructure
     */
    getGroupSlug(dataStructure) {
        const slug = '__group__' + dataStructure.parentAttribute + '__' + dataStructure.group;

        return slug;
    }
}

const sourceDataGraphView = new SourceDataGraphView();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/SourceDataPoints.js":
/*!************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/SourceDataPoints.js ***!
  \************************************************************/
/*! exports provided: sourceDataPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceDataPoints", function() { return sourceDataPoints; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants */ "./src/assets/js/Constants.js");
/* harmony import */ var _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/DimensionTypesService */ "./src/assets/js/services/DimensionTypesService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _SourceDataPointsSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SourceDataPointsSidebar */ "./src/assets/js/tabs/source-data/SourceDataPointsSidebar.js");
/* harmony import */ var _SourceDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SourceDataService */ "./src/assets/js/tabs/source-data/SourceDataService.js");








class SourceDataPoints {
    constructor() {
        this.flexgrid = null;
        this.inUpdatedLayout = false;
        this.idFilter = [];
        this.columnDefs = [];
        this.scale = 1;
    }

    init() {
        _SourceDataPointsSidebar__WEBPACK_IMPORTED_MODULE_5__["sourceDataPointsSidebar"].init();

        this.container = $('#source_data_data_points');
        this.rowCounter = $('#_data-points-counter');

        this.columnsSelect = new wijmo.input.MultiSelect(this.container.find('._column-selector')[0], {
            placeholder: 'Select Columns',
            itemsSource: [],
            headerFormat: '{count} columns selected',
            displayMemberPath: 'label',
            checkedMemberPath: 'selected',
            onCheckedItemsChanged: () => {
                this.updateColumns();

                // Odd, but otherwise the filters aren't updated visually (i.e. the "wj-filter-on" classes aren't added).
                this.flexGridFilter.filterDefinition = this.flexGridFilter.filterDefinition;
            }
        });

        this.collectionView = new wijmo.collections.CollectionView([], {
            filter: item => {
                // Filter by ID.
                const matchesId = this.idFilter.length === 0 || this.idFilter.indexOf(item.id) !== -1;

                return matchesId;
            }
        });

        this.flexgrid = new wijmo.grid.FlexGrid('#source_data_all_data_table', {
            isReadOnly: false,
            selectionMode: 'Row',
            itemsSource: this.collectionView.items,
            autoGenerateColumns: false,
            formatItem: (s, e) => {
                if (e.panel === s.cells) {
                    let item = s.rows[e.row].dataItem;

                    switch (s.columns[e.col].binding) {
                        case 'value':
                            e.cell.childNodes[0].nodeValue = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].formatNumber(item.value);
                            break;

                        case '__normalized_value':
                            e.cell.innerHTML = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].formatNumber(item['__normalized_value'] / this.scale);
                            break;

                        case 'scale':
                            // e.cell.innerHTML = item.scale;
                            break;
                    }
                }
            },
            selectionChanged: (s, e) => {
                const selection = this.flexgrid.selection;
                let item;

                if (selection._row in s.rows) {
                    item = s.rows[selection._row].dataItem;
                } else {
                    item = null;
                }

                _SourceDataPointsSidebar__WEBPACK_IMPORTED_MODULE_5__["sourceDataPointsSidebar"].setSelectedItem(item);
            },
            updatedLayout: () => {
                if (this.inUpdatedLayout) {
                    this.inUpdatedLayout = false;
                } else {
                    this.inUpdatedLayout = true;
                    this.flexgrid.autoSizeRow(0, true);
                }
            },
            beginningEdit: (s, e) => {
                const col = s.columns[e.col];

                // User is allowed to edit?
                const dataPoint = s.rows[e.row].dataItem;
                if (col.binding === '__normalized_value') {
                    alert(_Constants__WEBPACK_IMPORTED_MODULE_2__["constants"].CANNOT_EDIT_NORMALIZED_VALUE);
                    e.cancel = true;
                    return;
                }
                if (col.binding === 'value' && dataPoint.source !== 'manual') {
                    alert(_Constants__WEBPACK_IMPORTED_MODULE_2__["constants"].CANNOT_EDIT_VALUE);
                    e.cancel = true;
                    return;
                }
                if (col.binding.endsWith(_Constants__WEBPACK_IMPORTED_MODULE_2__["constants"].DIMENSION_SUFFIX_GROUP)) {
                    const dimensionSlug = col.binding.slice(0, -_Constants__WEBPACK_IMPORTED_MODULE_2__["constants"].DIMENSION_SUFFIX_GROUP.length);
                    const dimensionParent = dataPoint[dimensionSlug + _Constants__WEBPACK_IMPORTED_MODULE_2__["constants"].DIMENSION_SUFFIX_PARENT];
                    if (!dimensionParent) {
                        alert(_Constants__WEBPACK_IMPORTED_MODULE_2__["constants"].CANNOT_SET_GROUP_IF_NO_PARENT);
                        e.cancel = true;
                        return;
                    }
                }

                // Get column definition.
                const columnDef = this.columnDefs.find(column => {
                    return column.slug === col.binding;
                });

                // Update data map.
                if (col.dataMap) {
                    col.dataMap = _SourceDataService__WEBPACK_IMPORTED_MODULE_6__["sourceDataService"].getDataMapForDimension(
                        columnDef.dimension,
                        _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject()
                    );
                }

                if (col.dataType !== wijmo.DataType.Date) {
                    // Always format as general cell, not as number.
                    col.format = 'g';
                }
            },
            cellEditEnding: (s, e) => {
                const oldVal = s.getCellData(e.row, e.col);
                const newVal = s.activeEditor.value;
                const dataType = s.columns[e.col].dataType;
                e.cancel = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].checkIfCellHasChanged(oldVal, newVal, dataType);

                // Validate.
                const col = s.columns[e.col];
                const dataPoint = Object.assign({}, s.rows[e.row].dataItem);
                dataPoint[col.binding] = s.activeEditor.value;
                const validation = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject().validateDataPoint(dataPoint);
                if (validation.success === false) {
                    e.cancel = true;
                    alert(validation.error);
                }
            },
            cellEditEnded: (s, e) => {
                // Edit was cancelled?
                if (e.cancel) {
                    return;
                }

                // TODO: Show loading screen.
                const dataPoint = s.rows[e.row].dataItem;
                _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject().addDataPoint(dataPoint);

                // Save project.
                _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].saveCurrentProject();
                _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].syncViews();
            }
        });

        // http://jsfiddle.net/Wijmo5/h1njyaez/
        this.flexGridFilter = new wijmo.grid.filter.FlexGridFilter(this.flexgrid, {
            filterApplied: () => {
                this.rowCounter.text(
                    'Showing ' +
                        this.flexgrid.rows.length +
                        ' data-points out of ' +
                        this.collectionView.sourceCollection.length
                );
            }
        });

        // $('#source_data_all_data_filter_by_file')[0].addEventListener('input', (e) => {
        //     this.collectionView.refresh();
        //     this.flexgrid.itemsSource = this.collectionView.items;
        // });

        this.container.find('._scale-selector').on('change', e => {
            this.scale = e.target.value;
            this.flexgrid.collectionView.refresh();
        });

        this.container.find('._clear-filters').on('click', () => {
            this.flexGridFilter.filterDefinition = '';
        });

        // Export Excel.
        this.container.find('._export-excel').on('click', e => {
            wijmo.grid.xlsx.FlexGridXlsxConverter.save(
                this.flexgrid,
                {
                    includeColumnHeaders: true,
                    includeCellStyles: false
                },
                'FlexGrid.xlsx'
            );
        });
    }

    sync() {
        _SourceDataPointsSidebar__WEBPACK_IMPORTED_MODULE_5__["sourceDataPointsSidebar"].sync();

        // Columns
        {
            // Get all columns.
            this.columnDefs = this.getAvailableColumns();

            // Get selected columns from local storageService.
            const selectedColumns = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].get(_services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].DATA_COCKPIT_COLUMNS_KEY);
            if (Array.isArray(selectedColumns)) {
                this.columnDefs.forEach(columnDef => {
                    columnDef.selected = selectedColumns.indexOf(columnDef.slug) !== -1;
                });
            }

            // Set items in combo-box.
            this.columnsSelect.itemsSource = this.columnDefs;
        }

        // Data points
        let dataPoints = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].currentProject.dataPoints;
        this.setData(dataPoints);
    }

    getAvailableColumns() {
        const cols = [];
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject();
        const dimensions = project.getFieldsForDimensions();

        cols.push({
            slug: '__normalized_value',
            label: 'Normalized Value',
            selected: true
        });

        dimensions.forEach(dimension => {
            cols.push({
                dimension: dimension,
                slug: dimension.slug,
                label: dimension.label,
                selected: true,
                dataMap: _SourceDataService__WEBPACK_IMPORTED_MODULE_6__["sourceDataService"].getDataMapForDimension(dimension, project),
                isReadOnly: false
            });
        });

        cols.push({
            slug: 'source__pretty',
            label: 'Source',
            selected: true,
            isReadOnly: true
        });

        return cols;
    }

    updateColumns() {
        // Save selected columns in local storageService.
        const selectedColumns = this.columnDefs.reduce((a, column) => {
            if (column.selected) {
                a.push(column.slug);
            }

            return a;
        }, []);
        _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].set(_services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].DATA_COCKPIT_COLUMNS_KEY, selectedColumns);

        // Create columns.
        this.flexgrid.columns.length = 0;
        this.columnDefs.forEach(column => {
            if (!column.selected) {
                return;
            }

            const isTime = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(column, 'dimension.isTime');

            // Add column to grid.
            const gridCol = new wijmo.grid.Column();
            gridCol.binding = column.slug;
            gridCol.header = column.label;
            if (!isTime) {
                gridCol.dataMap = column.dataMap;

                const dataType = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(column, 'dimension.dataType');
                if (dataType === _services_DimensionTypesService__WEBPACK_IMPORTED_MODULE_3__["dimensionTypesService"].NUMBER) {
                    gridCol.dataType = wijmo.DataType.Number;
                }
            } else {
                gridCol.dataType = wijmo.DataType.Date;
                gridCol.format = 'yyyy-MM-dd';
            }
            gridCol.isReadOnly = column.isReadOnly;
            this.flexgrid.columns.push(gridCol);

            if (isTime) {
                _Common__WEBPACK_IMPORTED_MODULE_1__["common"].createDatePickerEditor(this.flexgrid.columns.getColumn(gridCol.binding));
            }
        });
    }

    setData(dataset) {
        dataset = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(dataset);

        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject();

        const sourceFiles = project.sourceFiles;
        dataset = dataset.map(item => {
            // Process source files.
            if (item.source === 'manual') {
                item.source__pretty = 'Manual';
            } else if (item.source in sourceFiles) {
                item.source__pretty = sourceFiles[item.source].name;
            }

            // Normalize values.
            item['__normalized_value'] = item.value * _Common__WEBPACK_IMPORTED_MODULE_1__["common"].parseScale(item.scale) * _Common__WEBPACK_IMPORTED_MODULE_1__["common"].parseInverse(item.inverse);

            // Process dimensions.
            item = project.addDataStructuresToDataPoint(item);

            return item;
        });

        // Save view.
        const sortDescriptions = this.flexgrid.collectionView.sortDescriptions;
        const scrollPosition = this.flexgrid.scrollPosition;
        const selection = this.flexgrid.selection;
        const filterDefinition = this.flexGridFilter.filterDefinition;

        // Update data source.
        this.collectionView.sourceCollection = dataset;
        this.collectionView.refresh();
        this.flexgrid.itemsSource = this.collectionView.items;
        this.updateColumns();

        // Load view.
        if (sortDescriptions.length > 0) {
            this.flexgrid.collectionView.sortDescriptions.push(sortDescriptions[0]);
        }
        this.flexgrid.scrollPosition = scrollPosition;
        this.flexgrid.select(selection);
        this.flexGridFilter.filterDefinition = filterDefinition;
    }

    setIdFilter(array) {
        this.idFilter = array;
    }
}

const sourceDataPoints = new SourceDataPoints();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/SourceDataPointsSidebar.js":
/*!*******************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/SourceDataPointsSidebar.js ***!
  \*******************************************************************/
/*! exports provided: sourceDataPointsSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceDataPointsSidebar", function() { return sourceDataPointsSidebar; });
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _SourceDataPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceDataPoints */ "./src/assets/js/tabs/source-data/SourceDataPoints.js");
/* harmony import */ var _SourceDataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SourceDataService */ "./src/assets/js/tabs/source-data/SourceDataService.js");




class SourceDataPointsSidebar {
    constructor() {
        this.selectedItem = null;
        this.inputs = [];
    }

    init() {
        this.form = $('#source_data_new_entry');
        this.fieldsContainer = this.form.find('._fields');
        this.fieldTemplate = this.form
            .find('._template')
            .removeClass('_template')
            .detach();

        this.form.find('._add-data-point').on('click', () => {
            this.addDataPoint();
        });
        this.form.find('._save-data-point').on('click', () => {
            this.addDataPoint(true);
        });
        this.form.find('._delete-data-point').on('click', () => {
            this.deleteDataPoint();
        });
        this.form.find('._clear').on('click', () => {
            this.clearAllFields();
        });
        this.form.find('._add-custom-dimension').on('click', () => {
            this.addCustomDimension();
        });

        this.form.on('click', '._lock-container', e => {
            const $this = $(e.currentTarget);
            const input = $this.find('input');
            const checked = !input.prop('checked');
            input.prop('checked', checked);
            $this.toggleClass('_checked', checked);
        });

        this.form.on('click', '._data-structures-container', e => {
            const $this = $(e.currentTarget);
            const checked = !$this.hasClass('_checked');
            $this.toggleClass('_checked', checked);
            this.updateVisibleFields();
        });
    }

    sync() {
        // Save settings for previous stuff.
        const lockedFields = this.getLockedFields();
        const openDataStructured = this.getOpenFields();

        // Remove previous stuff.
        this.inputs = [];
        this.form.find('._field').remove();

        // Add fields.
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].getCurrentProject();
        const fields = project.getFieldsForDimensions();
        fields.forEach(field => {
            const e = this.fieldTemplate.clone();
            e.find('._name').text(field.shortLabel || field.label);
            this.fieldsContainer.append(e);

            let values = _SourceDataService__WEBPACK_IMPORTED_MODULE_2__["sourceDataService"].getAvailableValuesForField(field, project);

            // Create input.
            let input;
            if (field.slug === 'value') {
                input = new wijmo.input.InputNumber(e.find('._input')[0], {
                    format: 'g10',
                    isRequired: false,
                    value: null
                });
            } else if (field.isTime) {
                input = new wijmo.input.InputDate(e.find('._input')[0], {
                    format: 'yyyy-MM-dd'
                });
            } else {
                input = new wijmo.input.AutoComplete(e.find('._input')[0], {
                    itemsSource: values
                });
            }
            input._kosmosField = field.slug;
            this.inputs.push(input);

            // Default value and lock
            if (field.slug in lockedFields) {
                input._setText(lockedFields[field.slug]);
                this.getInputLock(input).prop('checked', true);
            } else {
                input._setText('');
            }

            const isChild = typeof field.child !== 'undefined' && field.child;
            e.find('._lock-container').toggleClass('_child', isChild);
            e.find('._data-structures-container').toggleClass(
                '_hidden',
                !field.hasDataStructures && !field.hasGlobalTerms && !field.hasTimeIntervals
            );
            e.find('._data-structures-container').toggleClass('_child', isChild);
            e.find('._data-structures-container').toggleClass('_checked', field.slug in openDataStructured);
        });
        this.updateVisibleFields();
    }

    getLockedFields() {
        const lockedFields = {};

        this.inputs.forEach(input => {
            if (this.isInputLocked(input)) {
                lockedFields[input._kosmosField] = input.text;
            }
        });

        return lockedFields;
    }

    getOpenFields() {
        const openFields = {};

        this.inputs.forEach(input => {
            if (
                $(input._e)
                    .closest('._field')
                    .find('._data-structures-container._checked').length > 0
            ) {
                openFields[input._kosmosField] = true;
            }
        });

        return openFields;
    }

    getDataPointFromForm() {
        // Get point.
        const dataPoint = {};
        this.inputs.forEach(input => {
            if (input._kosmosField === 'value') {
                dataPoint[input._kosmosField] = input.value;
            } else {
                dataPoint[input._kosmosField] = input.text;
            }
        });
        dataPoint.value = parseFloat(dataPoint.value);
        dataPoint.scale = parseInt(dataPoint.scale);
        dataPoint.source = 'manual';

        return dataPoint;
    }

    addDataPoint(saveInsteadOfAdding = false) {
        const dataPoint = this.getDataPointFromForm();

        if (saveInsteadOfAdding) {
            dataPoint.id = this.selectedItem.id;
            dataPoint.source = this.selectedItem.source;
        }

        const result = _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].getCurrentProject().addDataPoint(dataPoint);

        // Abort.
        if (!result.success) {
            alert(result.error);
            return;
        }

        // Deselect.
        if (!saveInsteadOfAdding) {
            _SourceDataPoints__WEBPACK_IMPORTED_MODULE_1__["sourceDataPoints"].flexgrid.select(-1, -1);
        }

        // Save project.
        _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].saveCurrentProject();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].syncViews();
    }

    deleteDataPoint() {
        const dataPoints = _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].getCurrentDataPoints();
        const key = _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].getCurrentProject().getKeyForDataPointId(this.selectedItem.id);
        dataPoints.splice(key, 1);
        _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].saveCurrentProject();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].syncViews();
    }

    clearAllFields() {
        this.form.find('._lock').prop('checked', false);
        _SourceDataPoints__WEBPACK_IMPORTED_MODULE_1__["sourceDataPoints"].flexgrid.select(-1, -1);
        this.setSelectedItem(null);
    }

    addCustomDimension() {
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].getCurrentProject();
        const dimension = project.addDimensionWithPrompt();

        if (dimension) {
            _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].saveCurrentProject();
            _services_StorageService__WEBPACK_IMPORTED_MODULE_0__["storageService"].syncViews();
        }
    }

    getInputLock(input) {
        return $(input._e)
            .closest('._field')
            .find('._lock');
    }

    isInputLocked(input) {
        return this.getInputLock(input).is(':checked');
    }

    setSelectedItem(item) {
        this.selectedItem = item;

        if (!item) {
            item = this.getLockedFields();
        }

        // Set fields.
        this.inputs.forEach(input => {
            const field = input._kosmosField;

            if (item && field in item) {
                if (field === 'value') {
                    input.value = parseFloat(item[field]);
                } else {
                    input._setText(item[field]);
                }
            } else {
                if (field === 'value') {
                    input.value = null;
                } else {
                    input._setText('');
                }
            }
        });

        // Show/hide buttons.
        this.form.find('._save-data-point').prop('disabled', !(item && item.id));
        this.form.find('._delete-data-point').prop('disabled', item && item.source !== 'manual');
    }

    updateVisibleFields() {
        let previousWasChecked = false;
        this.fieldsContainer.find('._field').each((i, field) => {
            const dataStructureContainer = $(field).find('._data-structures-container');
            const isChecked = dataStructureContainer.hasClass('_checked');
            const isChild = dataStructureContainer.hasClass('_child');

            if (isChild) {
                $(field).css('display', previousWasChecked ? '' : 'none');
            } else {
                previousWasChecked = isChecked;
            }
        });
    }
}

const sourceDataPointsSidebar = new SourceDataPointsSidebar();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/SourceDataService.js":
/*!*************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/SourceDataService.js ***!
  \*************************************************************/
/*! exports provided: sourceDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceDataService", function() { return sourceDataService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common */ "./src/assets/js/Common.js");



class SourceDataService {
    constructor() {}

    /**
     * @param field
     * @param project Project
     * @returns {Array}
     */
    getAvailableValuesForField(field, project) {
        const dataset = project.dataPoints;
        let values = [];

        if (field.isParent) {
            values = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getUniqueValues(dataset, field.attribute);
        } else if (field.isGroup) {
            const dataStructures = Object.values(project.getDataStructuresForDimension(field.attribute));
            values = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getUniqueValues(dataStructures, 'group');
        }
        // TODO
        else if (field.isGlobalTerm) {
            values = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getGlobalTerms();
        } else if (field.slug !== 'value' && field.slug !== 'inverse') {
            values = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getUniqueValues(dataset, field.slug);
        } else if (field.slug === 'inverse') {
            values = ['No', 'Yes'];
        }

        return values;
    }

    /**
     *
     * @param dimension
     * @param project Project
     * @returns {wijmo.grid.DataMap}
     */
    getDataMapForDimension(dimension, project) {
        if (dimension.slug === 'value') {
            return null;
        }

        const dictionaries = dimension.dictionaries;
        let vals = [];
        if (dictionaries) {
            dictionaries.map(dictionary => {
                vals = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["concat"])(vals, _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getGlobalTermsByDictionary(dictionary));
            });
        }

        let values = vals.map(value => {
            return {
                value: value
            };
        });

        const dataMap = new wijmo.grid.DataMap(values, 'value', 'value');

        return dataMap;
    }
}

const sourceDataService = new SourceDataService();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-file-workflow/AddFileSteps.js":
/*!**************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-file-workflow/AddFileSteps.js ***!
  \**************************************************************************/
/*! exports provided: addFileSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFileSteps", function() { return addFileSteps; });
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_setWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/setWith */ "./node_modules/lodash/setWith.js");
/* harmony import */ var lodash_setWith__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_setWith__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Constants */ "./src/assets/js/Constants.js");
/* harmony import */ var _ResizableDivider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ResizableDivider */ "./src/assets/js/ResizableDivider.js");
/* harmony import */ var _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/SourceFilesService */ "./src/assets/js/services/SourceFilesService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_FileWorkflow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/FileWorkflow */ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflow.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_FileWorkflowStep1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/FileWorkflowStep1 */ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowStep1.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_FileWorkflowStep2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/FileWorkflowStep2 */ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowStep2.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_FileWorkflowStep3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/FileWorkflowStep3 */ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowStep3.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_FileWorkflowStep4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/FileWorkflowStep4 */ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowStep4.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/SourceDataEditTableCell */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataEditTableCell.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_SourceDataFilesReviewTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/SourceDataFilesReviewTable */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesReviewTable.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js");
/* harmony import */ var _tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../tabs/source-data/add-manual-workflow/AddManualSidebar */ "./src/assets/js/tabs/source-data/add-manual-workflow/AddManualSidebar.js");
/* harmony import */ var _tabs_source_data_SourceData__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../tabs/source-data/SourceData */ "./src/assets/js/tabs/source-data/SourceData.js");
/* harmony import */ var _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../tabs/source-data/SourceDataFiles */ "./src/assets/js/tabs/source-data/SourceDataFiles.js");





















class AddFileSteps {
    constructor() {
        this.ingestionStep = 1;
        this.container = $('#source_data');
        this.fileWorkflow = new _tabs_source_data_add_file_workflow_FileWorkflow__WEBPACK_IMPORTED_MODULE_9__["FileWorkflow"]();
        this.DEFINE_DATA_STEP = 1;
        this.STRUCTURE_DATA_STEP = 2;
        this.GLOBAL_MAPPING_STEP = 3;
        this.REVIEW_STEP = 4;
        this.FINISH_STEP = 5;
        this.steps = [
            new _tabs_source_data_add_file_workflow_FileWorkflowStep1__WEBPACK_IMPORTED_MODULE_10__["FileWorkflowStep1"](this.container, this.fileWorkflow),
            new _tabs_source_data_add_file_workflow_FileWorkflowStep2__WEBPACK_IMPORTED_MODULE_11__["FileWorkflowStep2"](this.container, this.fileWorkflow),
            new _tabs_source_data_add_file_workflow_FileWorkflowStep3__WEBPACK_IMPORTED_MODULE_12__["FileWorkflowStep3"](this.container, this.fileWorkflow),
            new _tabs_source_data_add_file_workflow_FileWorkflowStep4__WEBPACK_IMPORTED_MODULE_13__["FileWorkflowStep4"](this.container, this.fileWorkflow)
        ];

        /** @type {Project} */
        this.project = null;

        this.labelBrushesColors = _Constants__WEBPACK_IMPORTED_MODULE_5__["constants"].getAllColors();
    }

    init() {
        // Back
        $('#source_data_files_sidebar ._ingestion-steps ._back').on('click', () => {
            this.ingestionPrevStepSwitch();
        });

        // Next
        $('#source_data_files_sidebar ._ingestion-steps ._next').on('click', () => {
            this.ingestionNextStepSwitch();
        });

        // Jump to a specific step.
        $('#source_data_files_pre_ingestion ._ingestion-steps-display ._step').on('click', e => {
            const step = parseInt($(e.currentTarget).attr('data-step'));
            this.headerStepNav(step);
        });

        const mySlider = $('#_zoom-slider')
            .bootstrapSlider({
                min: 25,
                max: 100,
                step: 1,
                value: 100,
                selection: 'before',
                tooltip: 'show',
                formatter: value => {
                    return value + '%';
                }
            })
            .on('slide', function(evt) {
                let zoomValue = mySlider.bootstrapSlider('getValue') / 100;

                $('#source_data_files ._table')
                    .first()
                    .css('zoom', zoomValue);
            });
    }

    sync() {}

    cancelWorkflow() {
        const confirmation = confirm('Are you sure you want to cancel?');
        if (!confirmation) {
            return;
        }

        this.steps[2].inputsValues = {};
        if (this.steps[2].dimensionSelect.selectedItem) {
            this.steps[2].changeDimension();
            this.steps[2].changeDictionary();
        }

        _tabs_source_data_SourceData__WEBPACK_IMPORTED_MODULE_18__["sourceData"].endWorkflow();
        $('#source_data_files_pre_ingestion').hide();
        $('#source_data_files_sidebar').css('display', 'none');
        $('#source_data_import_table').val('');
        $('ul.nav a[href="#dropbox"]').trigger('click');
        _tabs_source_data_add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_14__["sourceDataEditTableCell"].firstCellAutomaticSelectionFinished = false;

        // Unfreeze columns and rows.
        _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_19__["sourceDataFiles"].flexGrid.frozenColumns = 0;
        _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_19__["sourceDataFiles"].flexGrid.frozenRows = 0;

        _services_StorageService__WEBPACK_IMPORTED_MODULE_8__["storageService"].syncViews();
    }

    headerStepNav(step) {
        if (step < this.ingestionStep) {
            this.prevStep(step);
        } else {
            switch (step) {
                case 2:
                    this.updateDimensionsForDefDataPointsStep();
                    this.structureDataStep();
                    break;

                case 3:
                    this.globalMappingStep();
                    break;

                case 4:
                    this.updateDimensionsForDefDataPointsStep();
                    this.saveCurrentDataPoints();
                    this.reviewStep();
                    break;

                case 5:
                    this.finishStep();
                    break;
            }
        }
    }

    defineLabelsStep() {
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_7__["sourceFilesService"].getCurrentSourceFile();
        if (!file) {
            return;
        }

        const tableSource = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_19__["sourceDataFiles"].flexGrid.itemsSource;

        // Display the Brushes list of dimensions.
        const dimensions = _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_16__["sourceDataFilesSidebar"].columnDefs;
        dimensions.map((dimension, index) => {
            if (dimension.selected) {
                const container = $('<div class="_brush-container"></div>');
                const div = $('<div class="_brush _label-brush"></div>');
                const rangeDiv = $('<div class="_label-brush-range"></div>');
                const globalDiv = $('<div class="_label-global"></div>');
                const backgroundColor = this.labelBrushesColors[index];
                const color = _Constants__WEBPACK_IMPORTED_MODULE_5__["constants"].getTextColorForBackground(backgroundColor);
                div.css('background-color', backgroundColor);
                div.css('color', color);
                div.attr('data-dimension', dimension.label);
                div.html(dimension.label);
                div.prepend('<i class="fa fa-paint-brush" aria-hidden="true"></i> ');
                rangeDiv.css('background-color', backgroundColor);
                rangeDiv.css('color', color);
                globalDiv.css('background-color', backgroundColor);
                globalDiv.css('color', color);
                container
                    .append(div)
                    .append(rangeDiv)
                    .append(globalDiv);
                $('.brush-section').append(container);

                // Define range for each dimension.
                this.defineRangeForEachDimension(tableSource, rangeDiv, div, file, dimension);
            }
        });
    }

    defineRangeForEachDimension(tableSource, rangeDiv, div, file, dimension) {
        const ranges = [];
        const rangeText = [];
        for (let i = 0; i < tableSource.length; i++) {
            ranges[i] = new Array(tableSource[0].length);
            for (let j = 0; j < tableSource[0].length; j++) {
                ranges[i][j] = false;
            }
        }
        tableSource.map((row, r) => {
            row.map((col, c) => {
                const labelDimension = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file.cellProperties, `[${c}][${r}]['labelDimension']`, false);
                const isLabel = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file.cellProperties, `[${c}][${r}]['cellType']`, false);
                if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(labelDimension, dimension.label) && isLabel === 'label') {
                    let range = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file.cellProperties, `[${c}][${r}]['range']`, false);
                    range = range ? XLSX.utils.decode_range(range) : range;
                    if (range) {
                        for (let r = range.s.r; r <= range.e.r; r++) {
                            for (let c = range.s.c; c <= range.e.c; c++) {
                                ranges[r][c] = true;
                            }
                        }
                    }
                }
            });
        });

        const inRange = {};
        const rows = ranges.length;
        const cols = ranges[0].length;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                let lastRow = rows - 1;
                let lastCol = cols - 1;
                if (ranges[r][c] && !lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(inRange, `[${c}][${r}]`, false)) {
                    for (let i = r; i < rows; i++) {
                        if (!lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(inRange, `[${c}][${i}]`, false) && ranges[i][c]) {
                            lodash_setWith__WEBPACK_IMPORTED_MODULE_3___default()(inRange, `${c}.${i}`, true, Object);
                        } else {
                            lastRow = i - 1;
                            break;
                        }
                    }

                    for (let i = c + 1; i < cols; i++) {
                        let isRange = true;
                        for (let j = r; j <= lastRow; j++) {
                            if (ranges[j][i] && !lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(inRange, `[${i}][${j}]`, false)) {
                                lodash_setWith__WEBPACK_IMPORTED_MODULE_3___default()(inRange, `${i}.${j}`, true, Object);
                            } else {
                                isRange = false;
                                for (let k = j; k >= r; k--) {
                                    lodash_setWith__WEBPACK_IMPORTED_MODULE_3___default()(inRange, `${i}.${k}`, false, Object);
                                }
                                i--;

                                break;
                            }
                        }

                        if (!isRange) {
                            lastCol = i;
                            break;
                        }
                    }

                    rangeText.push(XLSX.utils.encode_range({ s: { r: r, c: c }, e: { r: lastRow, c: lastCol } }));
                }
            }
        }

        rangeDiv.html(rangeText.join(', '));
    }

    ingestionPrevStepSwitch() {
        const prevStep = this.ingestionStep - 1;
        _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_16__["sourceDataFilesSidebar"].syncDimensionsContainer();

        this.prevStep(prevStep);
    }

    prevStep(step) {
        this.setStep(step);

        if (step === this.DEFINE_DATA_STEP) {
            _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_16__["sourceDataFilesSidebar"].showHiddenCells();
            this.defineTablesStep();
            this.defineLabelsStep();
        }

        // Save new current ingestion step for file.
        _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_7__["sourceFilesService"].getCurrentSourceFile().ingestionStep = this.ingestionStep;
        _services_StorageService__WEBPACK_IMPORTED_MODULE_8__["storageService"].saveCurrentProject();

        // Display Sidebar for current step.
        _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_16__["sourceDataFilesSidebar"].displayLoadedFileSidebar();
    }

    ingestionNextStepSwitch() {
        const nextStep = this.ingestionStep + 1;
        _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_16__["sourceDataFilesSidebar"].syncDimensionsContainer();

        switch (nextStep) {
            case this.STRUCTURE_DATA_STEP:
                this.structureDataStep();
                break;
            case this.GLOBAL_MAPPING_STEP:
                this.globalMappingStep();
                break;
            case this.REVIEW_STEP:
                this.reviewStep();
                break;
            case this.FINISH_STEP:
                this.finishStep();
                break;
        }
    }

    async finishStep() {
        let success = true;
        let projectKey = localStorage.getItem('current_project_key');
        let thisproject = JSON.parse(localStorage.getItem(projectKey));
        localStorage.setItem('currentProject', JSON.stringify(thisproject));
        let currentFileId = localStorage.getItem('currentFileID');
        let file;
        if (!localStorage.getItem('blobExcelData')) file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_7__["sourceFilesService"].getCurrentSourceFile();
        else file = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(thisproject, `sourceFiles[${currentFileId}]`);

        this.ingestionStep--;
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_8__["storageService"].getCurrentProject() || thisproject;

        let fileDataPointsCopyArray = [];
        let successCount = 0;
        let errors = '';

        // Add new Data Points.
        file.dataPoints.map((dataPoint, index) => {
            let dataPointCopy = _.assign({}, dataPoint);

            const col = dataPointCopy.col;
            const row = dataPointCopy.row;

            // delete dataPointCopy.source;
            delete dataPointCopy.col;
            delete dataPointCopy.row;

            const result = _services_StorageService__WEBPACK_IMPORTED_MODULE_8__["storageService"].getCurrentProject().addDataPoint(dataPointCopy);
            if (result.success) {
                // Save the data point ID for cell.
                file.cellProperties[col][row]['dataPointId'] = result.id;
                file.cellProperties[col][row]['failedSaving'] = false;
                const dpCopy = Object.assign({}, dataPoint);
                dpCopy.id = result.id;
                fileDataPointsCopyArray.push(dpCopy);
                successCount++;
            } else {
                success = false;
                // Here add red warning that it did not get saved successfully.
                file.cellProperties[col][row]['failedSaving'] = true;
                errors += 'Error for data-point with the value = ' + dataPoint.value + ': ' + result.error + '\n';
            }
        });

        // Remove Data Points.
        file.dataPointsCopy.map(dataPoint => {
            let deleteDataPoint = true;

            file.dataPoints.map(dp => {
                if (dp.id === dataPoint.id) {
                    deleteDataPoint = false;
                }
            });

            if (deleteDataPoint) {
                project.dataPoints.splice(_.findIndex(project.dataPoints, dp => dp.id === dataPoint.id), 1);
                file.cellProperties[dataPoint.col][dataPoint.row]['dataPointId'] = 'initial';
            }
        });

        // Add data structures.
        _tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_17__["addManualSidebar"].sourceDataStructures.addDataStructuresFromProject(this.project);

        // Add global mapping structures.
        file.globalMappingStructures.map(el => {
            _services_StorageService__WEBPACK_IMPORTED_MODULE_8__["storageService"].getCurrentProject().addDataStructure(el.dimension, el.value, null, null, el.globalTerm);
        });
        this.steps[2].inputsValues = {};

        try {
            this.steps[2].changeDimension();
            this.steps[2].changeDictionary();
        } catch (err) {
            console.log('will change later changeDimension', err);
        }

        if (success) {
            if (_services_SourceFilesService__WEBPACK_IMPORTED_MODULE_7__["sourceFilesService"].getCurrentSourceFile()) alert('Your changes have been saved successfully.');
        } else {
            alert(
                successCount +
                    '/' +
                    file.dataPoints.length +
                    ' data-points were saved. The following errors have occurred: ' +
                    '\n' +
                    errors
            );
        }

        // If not set to true, first time clicking on a cell will not open the modal.
        _tabs_source_data_add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_14__["sourceDataEditTableCell"].firstCellAutomaticSelectionFinished = true;

        // Unfreeze columns and rows.
        //sourceDataFiles.flexGrid.frozenColumns = 0;
        //sourceDataFiles.flexGrid.frozenRows = 0;

        file.dataPointsCopy = fileDataPointsCopyArray;
        file.ingestionStep = 1;
        //sourceDataFiles.flexGrid.refresh();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_8__["storageService"].saveCurrentProject();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_8__["storageService"].syncViews();
        _tabs_source_data_SourceData__WEBPACK_IMPORTED_MODULE_18__["sourceData"].endWorkflow();
    }

    globalMappingStep() {
        this.nextStep(this.GLOBAL_MAPPING_STEP);
    }

    reviewStep() {
        this.nextStep(this.REVIEW_STEP);

        // Display new table.
        _tabs_source_data_add_file_workflow_SourceDataFilesReviewTable__WEBPACK_IMPORTED_MODULE_15__["sourceDataFilesReviewTable"].sync();

        // Change Next button to Finish.
        $('#source_data_files_sidebar ._ingestion-steps ._next').text('Finish');
    }

    saveCurrentDataPoints() {
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_7__["sourceFilesService"].getCurrentSourceFile();
        // file.dataPointsCopy = file.dataPoints;
        file.dataPoints = [];
        const columns = file.cellProperties;

        if (columns) {
            Object.keys(columns).forEach(function(i) {
                const rows = columns[i];
                Object.keys(rows).forEach(function(j) {
                    const cell = rows[j];
                    if (cell.cellType === 'data') {
                        let dataPoint = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(cell);

                        delete dataPoint.cellType;
                        delete dataPoint.appliedLabelWarning;
                        if (dataPoint.dataPointId !== 'noID' && dataPoint.dataPointId !== 'initial') {
                            dataPoint.id = dataPoint.dataPointId;
                        }

                        delete dataPoint.dataPointId;

                        // TODO: temporary solution
                        delete dataPoint.parent_attribute;
                        delete dataPoint.global_term;

                        dataPoint.source = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_7__["sourceFilesService"].currentUuid;
                        dataPoint.col = i;
                        dataPoint.row = j;

                        file.dataPoints.push(dataPoint);
                    }
                });
            });
        }
    }

    structureDataStep() {
        this.nextStep(this.STRUCTURE_DATA_STEP);

        // Save current data points for file.
        this.saveCurrentDataPoints();

        // Load data structures.
        if (addFileSteps.ingestionStep === this.STRUCTURE_DATA_STEP) {
            // Get new data points.
            const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_7__["sourceFilesService"].getCurrentSourceFile();

            // Copy new data points into our project, and assign fake IDs to them as its required by the validator.
            addFileSteps.project.dataPoints = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_0___default()(file.dataPoints);
            addFileSteps.project.dataPoints = addFileSteps.project.dataPoints.reduce((dataPoints, dataPoint) => {
                dataPoint.id = _Common__WEBPACK_IMPORTED_MODULE_4__["common"].getNextUuid();
                dataPoints.push(dataPoint);

                return dataPoints;
            }, []);

            // Use new project for data-structures screen.
            _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_16__["sourceDataFilesSidebar"].sourceDataStructures.setProject(addFileSteps.project);
            _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_16__["sourceDataFilesSidebar"].sourceDataStructures.sync();
        }

        _services_StorageService__WEBPACK_IMPORTED_MODULE_8__["storageService"].saveCurrentProject();
    }

    updateDimensionsForDefDataPointsStep() {
        // Update dimensions for cell properties.
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_7__["sourceFilesService"].getCurrentSourceFile();
        const cellProperties = file.cellProperties;
        if (cellProperties) {
            Object.keys(cellProperties).forEach(col => {
                if (cellProperties[col]) {
                    Object.keys(cellProperties[col]).forEach(row => {
                        _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_16__["sourceDataFilesSidebar"].columnDefs.map(dimension => {
                            if (!dimension.selected) {
                                if (cellProperties[col][row].hasOwnProperty(dimension.slug)) {
                                    cellProperties[col][row][dimension.slug] = '';
                                }
                            }
                        });
                    });
                }
            });
        }
    }

    defineTablesStep() {
        this.updateDimensionsForDefDataPointsStep();
    }

    nextStep(step) {
        this.setStep(step);

        // Save new current ingestion step for file.
        _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_7__["sourceFilesService"].getCurrentSourceFile().ingestionStep = this.ingestionStep;
        _services_StorageService__WEBPACK_IMPORTED_MODULE_8__["storageService"].saveCurrentProject();

        // Display Sidebar for current step and disable Data|Label Views switch.
        _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_16__["sourceDataFilesSidebar"].displayLoadedFileSidebar();
    }

    setStep(step) {
        if (this.ingestionStep === 2) {
            _ResizableDivider__WEBPACK_IMPORTED_MODULE_6__["resizableDivider"].resetResizable('#source_data_files_pre_ingestion ._table', () => {});
        }

        $('._brush-container').remove();
        this.ingestionStep = step;

        // Reset table mode.
        this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;

        // Hide all.
        this.steps.forEach(step => {
            step.hide();
        });

        // Show current step.
        this.steps[this.ingestionStep - 1].show();

        if (this.ingestionStep === 2) {
            _ResizableDivider__WEBPACK_IMPORTED_MODULE_6__["resizableDivider"].enableResizable(
                '#source_data_files_pre_ingestion ._table',
                '.dataStructuresComponent',
                'height',
                { handles: 's' },
                { minHeight: 200, maxHeight: 800 },
                () => {}
            );
        }
    }
}

const addFileSteps = new AddFileSteps();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflow.js":
/*!**************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflow.js ***!
  \**************************************************************************/
/*! exports provided: FileWorkflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileWorkflow", function() { return FileWorkflow; });
/* harmony import */ var _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/SourceFilesService */ "./src/assets/js/services/SourceFilesService.js");
/* harmony import */ var _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SourceDataFiles */ "./src/assets/js/tabs/source-data/SourceDataFiles.js");
/* harmony import */ var _FileWorkflowItemFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileWorkflowItemFormatter */ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowItemFormatter.js");
/* harmony import */ var _SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SourceDataEditTableCell */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataEditTableCell.js");





class FileWorkflow {
    constructor() {
        this.MODE_MODAL = 0;
        this.MODE_BRUSH = 1;
        this.MODE_STRUCTURE = 2;
        this.MODE_RANGE_PICKER = 3;
        this.MODE_CLICK_TO_COPY = 4;

        // Current operating mode.
        this.mode = this.MODE_MODAL;

        // Is the user making a selection using the mouse?
        this.isSelectingWithMouse = false;

        // Function to call after brush mode has ended.
        this.callback = null;

        // Disable any further selection events on the flex-grid.
        this.disableSelection = false;

        // List of cells selected while in Structure mode.
        this.selectedStructureCells = [];

        // Saves the previous cell selection when the modal mode is active.
        this.previousModalSelection = null;

        // Ignore selection-changing events, e.g. if we're programatically changing the selection.
        this.ignoreSelectionChangingEvents = false;

        // Catch mouse-up events even if they are outside the flexgrid.
        $(document).on('mouseup', () => {
            this.onMouseUp();
        });

        // Item formatter.
        this.itemFormatter = new _FileWorkflowItemFormatter__WEBPACK_IMPORTED_MODULE_2__["FileWorkflowItemFormatter"]();
    }

    enableModal() {
        this.reset();
        this.mode = this.MODE_MODAL;
        _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.selectionMode = wijmo.grid.SelectionMode.CellRange;
        _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.refresh();
    }

    enableBrush(callback) {
        this.reset();
        this.mode = this.MODE_BRUSH;
        this.callback = callback;
        _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.selectionMode = wijmo.grid.SelectionMode.CellRange;
        _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.refresh();
    }

    enableStructure() {
        this.reset();
        this.mode = this.MODE_STRUCTURE;
        this.selectedStructureCells = [];
        _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.selectionMode = wijmo.grid.SelectionMode.Cell;
        _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.selection = new wijmo.grid.CellRange(-1, -1, -1, -1);
    }

    enableRangePickerMode(callback) {
        // If multiple cells are selected, label range cannot be edited.
        if (_SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.selection.isSingleCell === false) {
            return;
        }

        // Reset.
        this.reset();

        // Save previous selection, will be used when we re-active modal mode.
        if (this.mode === this.MODE_MODAL) {
            this.previousModalSelection = _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.selection;
        }

        $(_SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.hostElement).addClass('_copy-cursor');
        this.mode = this.MODE_RANGE_PICKER;
        this.callback = callback;
        _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.refresh();
    }

    enableClickToCopyMode(callback) {
        // Reset.
        this.reset();

        // Save previous selection, will be used when we re-active modal mode.
        if (this.mode === this.MODE_MODAL) {
            this.previousModalSelection = _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.selection;
        }

        $(_SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.hostElement).addClass('_copy-cursor');
        this.mode = this.MODE_CLICK_TO_COPY;
        this.callback = callback;
        _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.refresh();
    }

    reset() {
        this.disableSelection = false;
        $(_SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.hostElement).removeClass('_copy-cursor');
    }

    onTableSelectionChanging(s, e) {
        if (this.ignoreSelectionChangingEvents) {
            return;
        }

        // If user is still dragging the selection but we already cancelled it...
        if (this.disableSelection) {
            e.cancel = true;
            return;
        }

        switch (this.mode) {
            case this.MODE_MODAL:
                // If modal is open, try to close it.
                if ($('#tableCellModal').is(':visible')) {
                    $('#tableCellModal').modal('hide');

                    // Still visible? Then the user clicked "cancel", so we should cancel too.
                    if ($('#tableCellModal').is(':visible')) {
                        e.cancel = true;
                    }
                }

                break;

            case this.MODE_BRUSH:
                break;

            case this.MODE_RANGE_PICKER:
                if (s === undefined || e === undefined) {
                    break;
                }
                this.callback(this, e);
                break;

            case this.MODE_CLICK_TO_COPY:
                if (s === undefined || e === undefined) {
                    break;
                }
                this.callback(this, e);
                break;
        }
    }

    onTableSelectionChanged(s, e) {
        if (this.ignoreSelectionChangingEvents) {
            return;
        }

        if (e.cancel || !e.range.isValid) {
            return;
        }

        // Do not call this event when first opening the table. Flexgrid automatically calls this for the [0, 0] cell.
        if (!this.firstCellAutomaticSelectionFinished) {
            this.firstCellAutomaticSelectionFinished = true;

            return;
        }

        switch (this.mode) {
            case this.MODE_MODAL:
                _SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_3__["sourceDataEditTableCell"].onTableSelectionChanged(s, e);
                break;

            case this.MODE_BRUSH:
                break;

            case this.MODE_STRUCTURE:
                const cellProperties = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_0__["sourceFilesService"].getCurrentSourceFile().getSingleCellProperties(e.row, e.col);

                // Only consider data-cells.
                if (cellProperties.cellType !== 'data') {
                    break;
                }

                // Save new cell.
                this.selectedStructureCells.push({
                    row: e.row,
                    col: e.col
                });

                // Format table.
                _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.refresh();
                break;
            case this.MODE_RANGE_PICKER:
                break;
            case this.MODE_CLICK_TO_COPY:
                break;
        }
    }

    onMouseDown() {
        if (this.disableSelection) {
            return;
        }
        this.isSelectingWithMouse = true;
    }

    onMouseUp() {
        if (!this.isSelectingWithMouse || !_SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.selection.isValid) {
            return;
        }

        this.isSelectingWithMouse = false;
        this.disableSelection = false;

        switch (this.mode) {
            case this.MODE_MODAL:
                break;

            case this.MODE_BRUSH:
                this.callback(_SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.selection);
                _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.selection = new wijmo.grid.CellRange(-1, -1, -1, -1);
                break;

            case this.MODE_RANGE_PICKER:
                if (this.previousModalSelection !== null) {
                    this.ignoreSelectionChangingEvents = true;
                    _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.selection = this.previousModalSelection;
                    this.ignoreSelectionChangingEvents = false;
                    this.previousModalSelection = null;
                }

                this.disableSelection = true;
                this.enableModal();
                break;

            case this.MODE_CLICK_TO_COPY:
                if (this.previousModalSelection !== null) {
                    this.ignoreSelectionChangingEvents = true;
                    _SourceDataFiles__WEBPACK_IMPORTED_MODULE_1__["sourceDataFiles"].flexGrid.selection = this.previousModalSelection;
                    this.ignoreSelectionChangingEvents = false;
                    this.previousModalSelection = null;
                }

                this.disableSelection = true;
                this.enableModal();
                break;
        }
    }

    formatTableCell(s, e) {
        if ($(e.cell).hasClass('wj-header')) {
            return;
        }

        $(e.cell).removeClass('_structure-mode-parent');
        $(e.cell).removeClass('_structure-mode-child');

        switch (this.mode) {
            case this.MODE_STRUCTURE:
                this.selectedStructureCells.forEach((position, index) => {
                    if (e.col === position.col && e.row === position.row) {
                        if (index === 0) {
                            $(e.cell).addClass('_structure-mode-parent');
                        } else {
                            $(e.cell).addClass('_structure-mode-child');
                        }
                    }
                });
                break;
        }
    }
}


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowAutoDetectTable.js":
/*!*****************************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowAutoDetectTable.js ***!
  \*****************************************************************************************/
/*! exports provided: FileWorkflowAutoDetectTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileWorkflowAutoDetectTable", function() { return FileWorkflowAutoDetectTable; });
/* harmony import */ var _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/SourceFilesService */ "./src/assets/js/services/SourceFilesService.js");
/* harmony import */ var _SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceDataFilesSidebar */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js");



class FileWorkflowAutoDetectTable {
    constructor() {}

    /**
     *
     * @param selection {wijmo.grid.CellRange}
     */
    autoDetectTable(selection) {
        const sourceFile = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_0__["sourceFilesService"].getCurrentSourceFile();

        // Get range of data-points.
        let dataPointsFound = false;
        let dataFirstRow = sourceFile.getNumberOfRows();
        let dataLastRow = 0;
        let dataFirstColumn = sourceFile.getNumberOfCols();
        let dataLastColumn = 0;
        for (let i = selection.leftCol; i <= selection.rightCol; i++) {
            for (let j = selection.topRow; j <= selection.bottomRow; j++) {
                const cellProperties = sourceFile.getSingleCellProperties(j, i);

                if (cellProperties.cellType !== 'data') {
                    continue;
                }

                // Found at least one data point.
                dataPointsFound = true;

                // Adjust range.
                dataFirstRow = Math.min(dataFirstRow, j);
                dataLastRow = Math.max(dataLastRow, j);
                dataFirstColumn = Math.min(dataFirstColumn, i);
                dataLastColumn = Math.max(dataLastColumn, i);
            }
        }

        // No data-points?
        if (!dataPointsFound) {
            alert('You must assign the data-points first.');
            return;
        }

        // Everything else becomes a label.
        for (let i = selection.leftCol; i <= selection.rightCol; i++) {
            for (let j = selection.topRow; j <= selection.bottomRow; j++) {
                let cellProperties = sourceFile.getSingleCellProperties(j, i);
                const cellValue = sourceFile.getCellValue(j, i);

                if (cellProperties.cellType === 'data' || cellValue === '') {
                    continue;
                }

                cellProperties.cellType = 'label';

                let range = '';

                // Check for data-point on the same row.
                let dataOnRow = false;
                for (let ii = dataFirstColumn; ii <= dataLastColumn; ii++) {
                    const thisCellProperties = sourceFile.getSingleCellProperties(j, ii);

                    if (thisCellProperties.cellType === 'data') {
                        dataOnRow = true;
                    }
                }
                if (dataOnRow) {
                    range = XLSX.utils.encode_range({ r: j, c: dataFirstColumn }, { r: j, c: dataLastColumn });
                }

                let dataOnColumn = false;
                for (let jj = dataFirstRow; jj <= dataLastRow; jj++) {
                    const thisCellProperties = sourceFile.getSingleCellProperties(jj, i);

                    if (thisCellProperties.cellType === 'data') {
                        dataOnColumn = true;
                    }
                }
                if (dataOnColumn) {
                    range = XLSX.utils.encode_range({ r: dataFirstRow, c: i }, { r: dataLastRow, c: i });
                }

                // Apply to all data-points.
                if (
                    !dataOnRow &&
                    !dataOnColumn &&
                    (j < dataFirstRow || j > dataLastRow) &&
                    (i < dataFirstColumn || i > dataLastColumn)
                ) {
                    range = XLSX.utils.encode_range(
                        { r: dataFirstRow, c: dataFirstColumn },
                        { r: dataLastRow, c: dataLastColumn }
                    );
                }

                // We must get the cellProperties again, the object might have been overwrriten.
                cellProperties = sourceFile.getSingleCellProperties(j, i);

                // Apply new range.
                cellProperties.range = range;

                // Re-apply dimensions to data-points.
                _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_0__["sourceFilesService"].applyDimensions(cellProperties, _SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_1__["sourceDataFilesSidebar"].columnDefs);
            }
        }
    }
}


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowItemFormatter.js":
/*!***************************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowItemFormatter.js ***!
  \***************************************************************************************/
/*! exports provided: FileWorkflowItemFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileWorkflowItemFormatter", function() { return FileWorkflowItemFormatter; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Constants */ "./src/assets/js/Constants.js");
/* harmony import */ var _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/SourceFilesService */ "./src/assets/js/services/SourceFilesService.js");
/* harmony import */ var _AddFileSteps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddFileSteps */ "./src/assets/js/tabs/source-data/add-file-workflow/AddFileSteps.js");
/* harmony import */ var _SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SourceDataFilesSidebar */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js");






class FileWorkflowItemFormatter {
    constructor() {
        // Used for cell warnings.
        this.cellWarnings = [];
        this.nextCellWarning = 0;

        // Used for cell triangles.
        this.style = null;
        this.previousFormDimensionsLength = null;
    }

    updatingView() {
        // Table is refreshing, so all of our cell-warning-elements have been detached.
        this.nextCellWarning = 0;

        // We need a source file.
        const sourceFile = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();
        if (!sourceFile) {
            return;
        }

        // Create style element.
        if (!this.style) {
            this.style = $('<style>');
            $('html > head').append(this.style);
        }

        // Recreate CSS rules, if necessary.
        if (this.previousFormDimensionsLength !== sourceFile.formDimensions.length) {
            this.previousFormDimensionsLength = sourceFile.formDimensions.length;
            let styleHtml = '';

            for (let i = 0; i <= sourceFile.formDimensions.length; i++) {
                const ratio = i / sourceFile.formDimensions.length;
                const color = chroma
                    .mix(
                        _Constants__WEBPACK_IMPORTED_MODULE_1__["constants"].FILE_WORKFLOW_CELL_PROGRESS_COLOR_BEGIN,
                        _Constants__WEBPACK_IMPORTED_MODULE_1__["constants"].FILE_WORKFLOW_CELL_PROGRESS_COLOR_END,
                        ratio,
                        'lab'
                    )
                    .hex();
                const background =
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='15' height='15'><polygon points='0,0 15,0 0,15' style='fill:" +
                    color +
                    '\'></polygon></svg>")';

                styleHtml +=
                    '.wj-cell[data-type="data"][data-ratio="' +
                    Math.round(ratio * 100) +
                    '"] { background-image: ' +
                    background +
                    ' !important; background-repeat: no-repeat !important; background-position: 0 0 !important; }\n';
            }

            // Save rules.
            this.style.html(styleHtml);
        }
    }

    formatItem(s, e) {
        const cellElement = $(e.cell);

        if (cellElement.hasClass('wj-header')) {
            return;
        }

        // Reset everything, because cells are reused.
        const css = {
            background: '',
            'background-color': '',
            color: ''
        };

        const col = e._rng._col;
        const row = e._rng._row;
        const sourceFile = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();
        const cell = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(sourceFile, `cellProperties[${col}][${row}]`);

        // No cell properties? Just reset everything and return early.
        if (!cell) {
            cellElement.attr('data-type', '');
            cellElement.css(css);
            return;
        }

        if (cell.cellType === 'data') {
            // Add inverse operator
            if (cell.inverse === 'Yes') {
                // Check if cell value is percentage or other format which should be ignored.
                let cellValString = cell.value.toString();
                const isPercentage = this.isPercentage(cellValString);
                cellValString = this.removePercentage(cellValString, isPercentage);

                if (!isNaN(cellValString)) {
                    cellValString = cellValString * -1;
                }

                cellValString = this.applyPercentage(cellValString, isPercentage);

                cellElement.text(cellValString);
            }

            // Add 2 decimals to numbers.
            if (cell.value !== '' && cell.value !== null) {
                // Check if cell value is percentage or other format which should be ignored.
                let cellValue = cellElement.text();
                const isPercentage = this.isPercentage(cellValue);
                cellValue = this.removePercentage(cellValue, isPercentage);

                if (!isNaN(parseFloat(cellValue.replace(/,/g, '')))) {
                    cellValue = parseFloat(cellValue.replace(/,/g, ''));
                    cellValue = this.addZeroes(cellValue);
                }

                cellValue = this.applyPercentage(cellValue, isPercentage);
                cellElement.text(cellValue);
            }

            // Set ratio.
            const ratio = sourceFile.getCellCompletionPercentage(row, col);
            cellElement.attr('data-ratio', Math.round(ratio * 100));

            if (cell.appliedLabelWarning) {
                const cellWarning = this.getNextCellWarning();
                cellElement.append(cellWarning);
            }

            if (cell.failedSaving === true) {
                css['background-color'] = '#ff5c52';
            }
        } else if (cell.cellType === 'label') {
            const dimension = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(cell, `labelDimension[0]`);
            if (dimension) {
                // Get color for dimension.
                let colorIndex = 0;
                for (let i = 0; i < _SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_4__["sourceDataFilesSidebar"].columnDefs.length; i++) {
                    if (_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_4__["sourceDataFilesSidebar"].columnDefs[i].label === dimension) {
                        colorIndex = i;
                        break;
                    }
                }

                // Apply color.
                const backgroundColor = _AddFileSteps__WEBPACK_IMPORTED_MODULE_3__["addFileSteps"].labelBrushesColors[colorIndex];
                css['background-color'] = backgroundColor;
                css['color'] = _Constants__WEBPACK_IMPORTED_MODULE_1__["constants"].getTextColorForBackground(backgroundColor);
            } else {
                css['background-color'] = '#a9e2ff';
            }
        }

        // Apply CSS in bulk.
        cellElement.css(css);

        // Save cell-type as attribute, used by CSS selectors.
        cellElement.attr('data-type', cell.cellType);
    }

    addZeroes(num) {
        num = num.toString();
        let value = Number(num);

        if (isNaN(value)) {
            return;
        }

        let res = num.split('.');
        if (res.length === 1 || res[1].length < 3) {
            value = value.toFixed(2);
        }
        return value;
    }

    isPercentage(cellValString) {
        let isPercentage = false;

        if (cellValString.indexOf('%') > -1) {
            isPercentage = true;
        }
        return isPercentage;
    }

    removePercentage(cellValString, isPercentage) {
        if (isPercentage) {
            cellValString = cellValString.replace('%', '');
        }
        return cellValString;
    }

    applyPercentage(cellValString, isPercentage) {
        if (isPercentage) {
            cellValString = cellValString + '%';
        }

        return cellValString;
    }

    getNextCellWarning() {
        if (this.cellWarnings.length > this.nextCellWarning) {
            // Reuse existing.
            return this.cellWarnings[this.nextCellWarning++];
        } else {
            // Create new element.
            const element = $(
                '<div class="_applied-label-warning"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>'
            );
            this.cellWarnings.push(element);
            this.nextCellWarning++;
            return element;
        }
    }
}


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowLegend.js":
/*!********************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowLegend.js ***!
  \********************************************************************************/
/*! exports provided: FileWorkflowLegend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileWorkflowLegend", function() { return FileWorkflowLegend; });
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Constants */ "./src/assets/js/Constants.js");


class FileWorkflowLegend {
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    sync(columnDefs) {
        this.rootElement.html('');
        const projectFields = columnDefs.filter(field => {
            return field.selected;
        });
        const totalFields = projectFields.length;

        this.rootElement.append('<span>0%</span>');

        for (let i = 0; i <= totalFields; i++) {
            const ratio = totalFields > 0 ? i / totalFields : 1;
            const color = chroma
                .mix(
                    _Constants__WEBPACK_IMPORTED_MODULE_0__["constants"].FILE_WORKFLOW_CELL_PROGRESS_COLOR_BEGIN,
                    _Constants__WEBPACK_IMPORTED_MODULE_0__["constants"].FILE_WORKFLOW_CELL_PROGRESS_COLOR_END,
                    ratio,
                    'lab'
                )
                .hex();
            const percentage = Math.round(ratio * 100);
            const div = $(`<div style='background-color: ${color}'></div>`);

            this.rootElement.append(div);
        }

        this.rootElement.append('<span>100%</span>');
    }
}


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowStep1.js":
/*!*******************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowStep1.js ***!
  \*******************************************************************************/
/*! exports provided: FileWorkflowStep1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileWorkflowStep1", function() { return FileWorkflowStep1; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/SourceFilesService */ "./src/assets/js/services/SourceFilesService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/SourceDataEditTableCell */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataEditTableCell.js");
/* harmony import */ var _SourceDataFiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SourceDataFiles */ "./src/assets/js/tabs/source-data/SourceDataFiles.js");
/* harmony import */ var _FileWorkflowAutoDetectTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FileWorkflowAutoDetectTable */ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowAutoDetectTable.js");
/* harmony import */ var _SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SourceDataFilesSidebar */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js");








class FileWorkflowStep1 {
    /**
     * @param rootElement
     * @param fileWorkflow {FileWorkflow}
     */
    constructor(rootElement, fileWorkflow) {
        this.rootElement = rootElement;
        this.fileWorkflow = fileWorkflow;

        // DOM
        this.brushSection = this.rootElement.find('.brush-section');
        this.dataPointBrush = this.brushSection.find('._data-point');
        this.freezeCol = this.brushSection.find('._freeze-col');
        this.unfreezeCol = this.brushSection.find('._unfreeze-col');
        this.freezeRow = this.brushSection.find('._freeze-row');
        this.unfreezeRow = this.brushSection.find('._unfreeze-row');
        this.notUsedBrush = this.brushSection.find('._not-used');
        this.tableBrush = this.brushSection.find('._table');
        this.table = this.rootElement.find('#source_data_files_pre_ingestion > ._table');

        // Events
        this.dataPointBrush.on('click', () => {
            const isActive = this.dataPointBrush.hasClass('_active');
            this.resetBrushes();

            if (isActive) {
                this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;
            } else {
                this.table.addClass('_brush-cursor');
                this.dataPointBrush.addClass('_active');
                this.fileWorkflow.enableBrush(this.onDataPointBrushEnd);
            }
        });
        this.notUsedBrush.on('click', () => {
            const isActive = this.notUsedBrush.hasClass('_active');
            this.resetBrushes();

            if (isActive) {
                this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;
            } else {
                this.table.addClass('_brush-cursor');
                this.notUsedBrush.addClass('_active');
                this.fileWorkflow.enableBrush(this.onNotUsedBrushEnd);
            }
        });
        this.tableBrush.on('click', () => {
            const isActive = this.tableBrush.hasClass('_active');
            this.resetBrushes();

            if (isActive) {
                this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;
            } else {
                this.table.addClass('_brush-cursor');
                this.tableBrush.addClass('_active');
                this.fileWorkflow.enableBrush(this.onTableBrushEnd);
            }
        });
        $(document.body).on('click', '._label-brush', event => {
            const brush = $(event.target);
            const isActive = brush.hasClass('_active');
            this.resetBrushes();

            if (isActive) {
                this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;
            } else {
                this.table.addClass('_brush-cursor-for-labels');
                brush.addClass('_active');
                this.fileWorkflow.enableBrush(selection => {
                    $('._show-loading').css('display', 'block');

                    // Use setTimeout because otherwise loading animation does not appear.
                    setTimeout(() => {
                        this.onLabelBrushEnd(selection, brush.attr('data-dimension'));
                        $('._show-loading').css('display', 'none');
                    }, 50);
                });
            }
        });
        $(document.body).on('click', '._label-global', event => {
            const container = $(event.target).closest('._label-global');

            if (container.find('i').length === 0) {
                container.append('<i class="fa fa-check" aria-hidden="true"></i>');
                const globalRange = this.getGlobalRange();
                const dimension = container.siblings('._label-brush').data('dimension');
                this.setGlobalRangeToLabels(globalRange, dimension);
            } else {
                container.find('i').remove();
            }
        });
        this.freezeCol.on('click', () => {
            const isActive = this.freezeCol.hasClass('_active');
            this.resetBrushes();

            if (isActive) {
                this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;
            } else {
                this.table.addClass('_brush-cursor');
                this.freezeCol.addClass('_active');
                this.fileWorkflow.enableBrush(this.onFreezeCol);
            }
        });
        this.freezeRow.on('click', () => {
            const isActive = this.freezeRow.hasClass('_active');
            this.resetBrushes();

            if (isActive) {
                this.fileWorkflow.mode = this.fileWorkflow.MODE_MODAL;
            } else {
                this.table.addClass('_brush-cursor');
                this.freezeRow.addClass('_active');
                this.fileWorkflow.enableBrush(this.onFreezeRow);
            }
        });
        this.unfreezeCol.on('click', () => {
            _SourceDataFiles__WEBPACK_IMPORTED_MODULE_4__["sourceDataFiles"].flexGrid.frozenColumns = 0;
        });
        this.unfreezeRow.on('click', () => {
            _SourceDataFiles__WEBPACK_IMPORTED_MODULE_4__["sourceDataFiles"].flexGrid.frozenRows = 0;
        });
    }

    sync() {}

    show() {
        this.brushSection.show();
        this.dataPointBrush.show();
        this.notUsedBrush.show();
        this.tableBrush.show();
        $('#source_data_files_sidebar ._ingestion-steps ._back').css('display', 'none');
        $('#source_data_files_pre_ingestion ._table').css('display', '');
        _SourceDataFiles__WEBPACK_IMPORTED_MODULE_4__["sourceDataFiles"].flexGrid.refresh();
    }

    hide() {
        this.brushSection.hide();
        this.dataPointBrush.hide();
        this.notUsedBrush.hide();
        this.tableBrush.hide();
        this.tableBrush.removeClass('_active');
        this.dataPointBrush.removeClass('_active');
        $('._label-brush').removeClass('_active');
        $('._label-brush-range').remove();
        $('#source_data_files_sidebar ._ingestion-steps ._back').css('display', '');
        this.resetBrushes();
        // Reset label brush ranges buttons.
        $('._label-brush-range').removeClass('_active');
        $('._label-brush-range').attr('data-active', false);
        _tabs_source_data_add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_3__["sourceDataEditTableCell"].resetGridBorders();
        $('#source_data_files_pre_ingestion ._table').hide();
    }

    resetBrushes() {
        this.table.removeClass('_brush-cursor');
        this.table.removeClass('_brush-cursor-for-labels');
        $('.brush-section ._brush').removeClass('_active');
        $('.brush-section ._table').removeClass('_active');
    }

    onFreezeCol(selection) {
        if (selection.isSingleCell) {
            _SourceDataFiles__WEBPACK_IMPORTED_MODULE_4__["sourceDataFiles"].flexGrid.frozenColumns = selection._col;
        }
    }

    onFreezeRow(selection) {
        if (selection.isSingleCell) {
            _SourceDataFiles__WEBPACK_IMPORTED_MODULE_4__["sourceDataFiles"].flexGrid.frozenRows = selection._row;
        }
    }

    setGlobalRangeToLabels(globalRange, dimension) {
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_1__["sourceFilesService"].getCurrentSourceFile();
        const table = _SourceDataFiles__WEBPACK_IMPORTED_MODULE_4__["sourceDataFiles"].flexGrid.itemsSource;

        for (let row = 0; row < table.length; row++) {
            for (let col = 0; col < table[row].length; col++) {
                const cellType = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(file.cellProperties, `[${col}][${row}]['cellType']`, false);
                if (cellType === 'label') {
                    const dimensions = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(file.cellProperties, `[${col}][${row}]['labelDimension']`, false);
                    if (dimensions[0] === dimension) {
                        file.cellProperties[col][row]['range'] = globalRange;
                    }
                }
            }
        }
    }

    getGlobalRange() {
        let globalRange;
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_1__["sourceFilesService"].getCurrentSourceFile();
        const table = _SourceDataFiles__WEBPACK_IMPORTED_MODULE_4__["sourceDataFiles"].flexGrid.itemsSource;
        let leftCol = table[0].length;
        let leftRow = table.length;
        let rightCol = 0;
        let rightRow = 0;

        for (let row = 0; row < table.length; row++) {
            for (let col = 0; col < table[row].length; col++) {
                const cellType = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(file.cellProperties, `[${col}][${row}]['cellType']`, false);
                if (cellType === 'data') {
                    if (leftCol > col) {
                        leftCol = col;
                    }
                    if (leftRow > row) {
                        leftRow = row;
                    }

                    break;
                }
            }
        }

        for (let row = table.length - 1; row >= 0; row--) {
            for (let col = table[row].length - 1; col >= 0; col--) {
                const cellType = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(file.cellProperties, `[${col}][${row}]['cellType']`, false);
                if (cellType === 'data') {
                    if (rightCol < col) {
                        rightCol = col;
                    }
                    if (rightRow < row) {
                        rightRow = row;
                    }

                    break;
                }
            }
        }

        globalRange = XLSX.utils.encode_range({ r: leftRow, c: leftCol }, { r: rightRow, c: rightCol });

        return globalRange;
    }

    /**
     *
     * @param selection {wijmo.grid.CellRange}
     */
    onDataPointBrushEnd(selection) {
        const sourceFile = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_1__["sourceFilesService"].getCurrentSourceFile();

        for (let row = selection.topRow; row <= selection.bottomRow; row++) {
            for (let col = selection.leftCol; col <= selection.rightCol; col++) {
                const properties = sourceFile.getSingleCellProperties(row, col);

                // Skip empty cells.
                const val = sourceFile.getCellValue(row, col);
                if (val === '') {
                    continue;
                }

                properties.cellType = 'data';
                properties.value = val;
            }
        }

        _SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_6__["sourceDataFilesSidebar"].displayLoadedFileSidebar();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
    }

    /**
     *
     * @param selection {wijmo.grid.CellRange}
     */
    onNotUsedBrushEnd(selection) {
        for (let row = selection.topRow; row <= selection.bottomRow; row++) {
            for (let col = selection.leftCol; col <= selection.rightCol; col++) {
                const properties = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_1__["sourceFilesService"].getCurrentSourceFile().getSingleCellProperties(row, col);

                properties.cellType = 'notUsed';
            }
        }

        _SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_6__["sourceDataFilesSidebar"].displayLoadedFileSidebar();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
    }

    /**
     *
     * @param selection {wijmo.grid.CellRange}
     */
    onTableBrushEnd(selection) {
        let detect = new _FileWorkflowAutoDetectTable__WEBPACK_IMPORTED_MODULE_5__["FileWorkflowAutoDetectTable"]();
        detect.autoDetectTable(selection);

        _SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_6__["sourceDataFilesSidebar"].displayLoadedFileSidebar();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
    }

    onLabelBrushEnd(selection, dimension) {
        const sourceFile = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_1__["sourceFilesService"].getCurrentSourceFile();

        for (let row = selection.topRow; row <= selection.bottomRow; row++) {
            for (let col = selection.leftCol; col <= selection.rightCol; col++) {
                const properties = sourceFile.getSingleCellProperties(row, col);

                // Skip cells that are not labels.
                if (properties.cellType !== 'label') {
                    continue;
                }

                // Skip empty cells.
                const val = sourceFile.getCellValue(row, col);
                if (!val) {
                    continue;
                }

                properties.labelDimension = [dimension];
                _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_1__["sourceFilesService"].applyDimensions(properties, _SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_6__["sourceDataFilesSidebar"].columnDefs);
                const range = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(properties, `['range']`, false);
                if (range) {
                    this.updateAppliedLabelWarning(range, true);
                }
            }
        }

        _SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_6__["sourceDataFilesSidebar"].displayLoadedFileSidebar();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
    }

    updateAppliedLabelWarning(range, onlyCheckCellsWithWarning = false) {
        const sourceFile = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_1__["sourceFilesService"].getCurrentSourceFile();
        const rangeObject = XLSX.utils.decode_range(range);

        // Apply new value to each cell in range.
        for (let row = rangeObject.s.r; row <= rangeObject.e.r; row++) {
            for (let col = rangeObject.s.c; col <= rangeObject.e.c; col++) {
                const properties = sourceFile.getSingleCellProperties(row, col);

                // Skip cells without a warning.
                if (onlyCheckCellsWithWarning && !properties.appliedLabelWarning) {
                    // continue;
                }

                properties.appliedLabelWarning = _tabs_source_data_add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_3__["sourceDataEditTableCell"].setAppliedLabelWarning(col, row, properties);
            }
        }
    }
}


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowStep2.js":
/*!*******************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowStep2.js ***!
  \*******************************************************************************/
/*! exports provided: FileWorkflowStep2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileWorkflowStep2", function() { return FileWorkflowStep2; });
/* harmony import */ var _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/SourceFilesService */ "./src/assets/js/services/SourceFilesService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _SourceDataFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SourceDataFiles */ "./src/assets/js/tabs/source-data/SourceDataFiles.js");
/* harmony import */ var _AddFileSteps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddFileSteps */ "./src/assets/js/tabs/source-data/add-file-workflow/AddFileSteps.js");
/* harmony import */ var _SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SourceDataFilesSidebar */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js");






class FileWorkflowStep2 {
    /**
     * @param rootElement
     * @param fileWorkflow {FileWorkflow}
     */
    constructor(rootElement, fileWorkflow) {
        this.rootElement = rootElement;
        this.fileWorkflow = fileWorkflow;

        // DOM
        this.dataStructureSection = this.rootElement.find('.data-structures-section');
        this.addRelationship = this.dataStructureSection.find('._add-relationship');
        this.addRelationshipContainer = this.dataStructureSection.find('._add-relationship-container');
        this.save = this.addRelationshipContainer.find('._save');
        this.cancel = this.addRelationshipContainer.find('._cancel');

        // Events
        this.addRelationship.on('click', () => {
            this.addRelationship.prop('disabled', true);
            this.addRelationshipContainer.show();
            this.fileWorkflow.enableStructure();
        });
        this.save.on('click', () => {
            const cells = this.fileWorkflow.selectedStructureCells;
            const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_0__["sourceFilesService"].getCurrentSourceFile();
            let parentValue = null;
            let parentProperties = null;

            cells.forEach((cell, index) => {
                const cellValue = file.getCellValue(cell.row, cell.col);
                const cellProperties = file.getSingleCellProperties(cell.row, cell.col);

                // First cell is always the parent.
                if (index === 0) {
                    parentValue = cellValue;
                    parentProperties = cellProperties;
                } else {
                    // Get the dimension that differs.
                    const dimensions = [];
                    file.formDimensions.forEach(dimension => {
                        let cellValue = cellProperties[dimension];
                        let parentValue = parentProperties[dimension];

                        // Consider undefined values as empty string.
                        cellValue = typeof cellValue === 'undefined' ? '' : cellValue;
                        parentValue = typeof parentValue === 'undefined' ? '' : parentValue;

                        if (cellValue !== parentValue) {
                            dimensions.push(dimension);
                        }
                    });

                    if (dimensions.length === 1) {
                        const dimension = dimensions[0];
                        const ds = _AddFileSteps__WEBPACK_IMPORTED_MODULE_3__["addFileSteps"].project.addDataStructure(
                            dimension,
                            cellProperties[dimension],
                            parentProperties[dimension]
                        );
                        ds.changed = true;
                    }
                }
            });

            _SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_4__["sourceDataFilesSidebar"].sourceDataStructures.sync();
            _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].saveCurrentProject();
            _services_StorageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].syncViews();

            this.cancel.trigger('click');
        });
        this.cancel.on('click', () => {
            this.addRelationship.prop('disabled', false);
            this.addRelationshipContainer.hide();
            this.fileWorkflow.enableModal();
        });
    }

    sync() {}

    show() {
        this.dataStructureSection.show();
        $('#source_data_files_pre_ingestion ._table').css('display', '');
        _SourceDataFiles__WEBPACK_IMPORTED_MODULE_2__["sourceDataFiles"].flexGrid.refresh();
    }

    hide() {
        this.cancel.trigger('click');
        this.dataStructureSection.hide();
        $('#source_data_files_pre_ingestion ._table').hide();
    }
}


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowStep3.js":
/*!*******************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowStep3.js ***!
  \*******************************************************************************/
/*! exports provided: FileWorkflowStep3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileWorkflowStep3", function() { return FileWorkflowStep3; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _services_KeyboardService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/KeyboardService */ "./src/assets/js/services/KeyboardService.js");
/* harmony import */ var _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/SourceFilesService */ "./src/assets/js/services/SourceFilesService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");






class FileWorkflowStep3 {
    /**
     * @param rootElement
     * @param fileWorkflow {FileWorkflow}
     */
    constructor(rootElement, fileWorkflow) {
        this.rootElement = rootElement;
        this.fileWorkflow = fileWorkflow;
        this.dataStructures = [];
        this.inputsValues = {};
        this.lastSelectedItem = null;

        const globalMappingContainer = this.rootElement.find('._add-file-global-mapping ._mapping-select-dimension');
        if (!localStorage.getItem('blobExcelData'))
            this.dimensionSelect = new wijmo.input.ComboBox(globalMappingContainer[0], {
                placeholder: 'Select Dimension',
                itemsSource: [],
                displayMemberPath: 'label',
                onSelectedIndexChanged: () => {
                    this.changeDimension();
                }
            });
        const selectDictionaryContainer = this.rootElement.find('._add-file-global-mapping ._select-dictionary');
        if (!localStorage.getItem('blobExcelData'))
            this.selectDictionary = new wijmo.input.ComboBox(selectDictionaryContainer[0], {
                placeholder: 'Select Dictionary',
                itemsSource: [],
                onSelectedIndexChanged: () => {
                    this.changeDictionary();
                }
            });
        // DOM

        // Events
        $('._add-file-global-mapping').on('click', e => {
            if (!_services_KeyboardService__WEBPACK_IMPORTED_MODULE_2__["keyboardService"].ctrlDown && !_services_KeyboardService__WEBPACK_IMPORTED_MODULE_2__["keyboardService"].shiftDown) {
                $('._values-left ._mapping-value').removeClass('_active');
            }
        });

        $('._add-file-global-mapping').on('click', '._values-left ._mapping-value', e => {
            const item = $(e.currentTarget);

            let multipleSelection = false;
            let addClass = true;
            if (item.hasClass('_active')) {
                addClass = false;
            }

            // Deselect other cards if shift/ctrl is not pressed.
            if (!_services_KeyboardService__WEBPACK_IMPORTED_MODULE_2__["keyboardService"].ctrlDown && !_services_KeyboardService__WEBPACK_IMPORTED_MODULE_2__["keyboardService"].shiftDown) {
                if ($('._values-left ._mapping-value._active').length > 1) {
                    multipleSelection = true;
                }

                $('._values-left ._mapping-value').removeClass('_active');
            }

            // If shift if pressed, select all items between the previous and the current one.
            if (_services_KeyboardService__WEBPACK_IMPORTED_MODULE_2__["keyboardService"].shiftDown) {
                const index1 = this.lastSelectedItem.index();
                const index2 = item.index();
                const indexMin = Math.min(index1, index2);
                const indexMax = Math.max(index1, index2);
                const parent = item.parent();

                for (let i = indexMin; i <= indexMax; i++) {
                    parent
                        .children()
                        .eq(i)
                        .addClass('_active');
                }
            } else {
                if (addClass || multipleSelection) {
                    item.addClass('_active');
                } else {
                    item.removeClass('_active');
                }
            }

            // Remember the last selected item.
            this.lastSelectedItem = item;

            e.stopPropagation();
        });
    }

    sync() {}

    show() {
        $('._add-file-global-mapping').css('display', 'flex');
        setTimeout(() => {
            $('#source_data_files_pre_ingestion ._table').hide();
        }, 20);
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject();
        let dimensions = project.getDimensions();
        dimensions = dimensions.filter(dimension => {
            return dimension.hasGlobalTerms;
        });

        if (!this.dimensionSelect.itemsSource.length) {
            this.dimensionSelect.itemsSource = dimensions;
        }

        this.changeDimension();
        $('._values-left ._mapping-value').removeClass('_active');
    }

    hide() {
        $('._add-file-global-mapping').css('display', 'none');

        const sourceFile = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_3__["sourceFilesService"].getCurrentSourceFile();
        if (sourceFile) {
            sourceFile.globalMappingStructures = this.dataStructures;
        }
        _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].saveCurrentProject();

        $('._values-left ._mapping-value').removeClass('_active');
    }

    changeDimension() {
        // Clear values.
        $('._add-file-global-mapping ._values-left ._mapping-value').remove();

        const slug = this.dimensionSelect.selectedItem.slug;
        if (!this.inputsValues[slug]) {
            this.inputsValues[slug] = {};
        }
        const dataStructuresForDimension = _services_StorageService__WEBPACK_IMPORTED_MODULE_4__["storageService"].getCurrentProject().getDataStructuresForDimension(slug);

        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_3__["sourceFilesService"].getCurrentSourceFile();
        const cellProperties = file.cellProperties;
        let values = [];
        Object.keys(cellProperties).forEach(col => {
            Object.keys(cellProperties[col]).forEach(row => {
                const cell = cellProperties[col][row];
                if (cell.cellType === 'data') {
                    if (cell.hasOwnProperty(slug)) {
                        if (values.length) {
                            values = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])([], values, [cell[slug]]);
                        } else {
                            values = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])([], [cell[slug]]);
                        }
                    }
                }
            });
        });

        values.map(value => {
            if (!dataStructuresForDimension.hasOwnProperty(value) || !dataStructuresForDimension[value].globalTerm) {
                if (!this.inputsValues[slug].hasOwnProperty(value) || this.inputsValues[slug][value].length === 0) {
                    this.rootElement.find('._values-left').append('<div class="_mapping-value">' + value + '</div>');
                }
            } else {
                if (this.inputsValues[slug][value]) {
                    this.inputsValues[slug][value] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])([], this.inputsValues[slug][value], [
                        dataStructuresForDimension[value].globalTerm
                    ]);
                } else {
                    this.inputsValues[slug][value] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])([], [dataStructuresForDimension[value].globalTerm]);
                }
            }
        });

        Sortable.create(this.rootElement.find('._values-left')[0], {
            group: {
                name: 'dimension-value',
                put: ['map-global-terms']
            }
        });

        this.selectDictionary.itemsSource = this.dimensionSelect.selectedItem.getDictionaries();
        this.selectDictionary.refresh();
    }

    changeDictionary() {
        // Clear values.
        $('._add-file-global-mapping ._global-term-from-dictionary').remove();

        // Create Global terms containers.
        const dictionary = this.selectDictionary.selectedItem;
        const globalTerms = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getGlobalTermsByDictionary(dictionary);
        globalTerms.map(term => {
            const divTitle = '<div class="_term-title">' + term + '</div>';
            const divSortable = '<div class="_global-term-from-dictionary-sortable"></div>';
            const div =
                '<div class="_global-term-from-dictionary" data-term="' +
                term +
                '">' +
                divTitle +
                divSortable +
                '</div>';
            this.rootElement.find('._global-terms-from-dictionary').append(div);
            const el = this.rootElement.find($('._global-term-from-dictionary[data-term="' + term + '"]'))[0];

            Sortable.create(el, {
                group: {
                    name: 'map-global-terms',
                    put: 'dimension-value'
                },
                filter: '._term-title',
                onAdd: e => {
                    $(e.item).removeClass('_active');
                    const slug = this.dimensionSelect.selectedItem.slug;
                    const value = $(e.item).text();
                    const dataStructure = {
                        dimension: slug,
                        value: value,
                        globalTerm: term
                    };
                    this.dataStructures.push(dataStructure);

                    if (this.inputsValues[slug][value]) {
                        this.inputsValues[slug][value] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])([], this.inputsValues[slug][value], [term]);
                    } else {
                        this.inputsValues[slug][value] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])([], [term]);
                    }

                    // Handle moving multiple mapping-values.
                    $('._values-left ._mapping-value').each((index, el) => {
                        if ($(el).hasClass('_active')) {
                            const value = $(el).text();
                            const dataStructure = {
                                dimension: slug,
                                value: value,
                                globalTerm: term
                            };
                            this.dataStructures.push(dataStructure);

                            if (this.inputsValues[slug][value]) {
                                this.inputsValues[slug][value] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])([], this.inputsValues[slug][value], [term]);
                            } else {
                                this.inputsValues[slug][value] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])([], [term]);
                            }

                            $(e.to).append('<div class="_mapping-value">' + value + '</div>');
                            $(el).remove();
                        }
                    });
                },
                onRemove: e => {
                    const slug = this.dimensionSelect.selectedItem.slug;
                    const value = $(e.item).text();
                    const dataStructure = {
                        dimension: slug,
                        value: $(e.item).text(),
                        globalTerm: term
                    };
                    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["remove"])(this.dataStructures, el => {
                        return (
                            dataStructure.dimension === el.dimension &&
                            dataStructure.value === el.value &&
                            dataStructure.globalTerm === el.globalTerm
                        );
                    });

                    this.inputsValues[slug][value] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["difference"])(this.inputsValues[slug][value], [term]);
                }
            });
        });

        // Add specific dimension values to each Global term container.
        const slug = this.dimensionSelect.selectedItem.slug;
        const dimensionVals = this.inputsValues[slug];
        Object.keys(dimensionVals).forEach(attr => {
            const globalTerms = dimensionVals[attr];
            const termHtml = $('._global-term-from-dictionary ._term-title').filter(function() {
                return $.inArray($(this).text(), globalTerms) !== -1;
            });

            // Used to remove from the left when val is associated to a global term and add it to the right.
            const valExists = this.rootElement.find('._values-left ._mapping-value').filter(function() {
                return $(this).text() === attr;
            });

            if (termHtml.length) {
                termHtml.after('<div class="_mapping-value">' + attr + '</div>');
                valExists.remove();
            } else {
                if (!valExists.length) {
                    this.rootElement.find('._values-left').append('<div class="_mapping-value">' + attr + '</div>');
                }
            }
        });
    }
}


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowStep4.js":
/*!*******************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowStep4.js ***!
  \*******************************************************************************/
/*! exports provided: FileWorkflowStep4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileWorkflowStep4", function() { return FileWorkflowStep4; });
class FileWorkflowStep4 {
    /**
     * @param rootElement
     * @param fileWorkflow {FileWorkflow}
     */
    constructor(rootElement, fileWorkflow) {
        this.rootElement = rootElement;
        this.fileWorkflow = fileWorkflow;

        // DOM

        // Events
    }

    sync() {
    }

    show() {
        $('#source_data_files_pre_ingestion ._review-table').css('display', '');
        $('#source_data_files_pre_ingestion ._table').hide();
    }

    hide() {
        $('#source_data_files_pre_ingestion ._review-table').hide();
    }
}

/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataEditTableCell.js":
/*!*************************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-file-workflow/SourceDataEditTableCell.js ***!
  \*************************************************************************************/
/*! exports provided: sourceDataEditTableCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceDataEditTableCell", function() { return sourceDataEditTableCell; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/SourceFilesService */ "./src/assets/js/services/SourceFilesService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/AddFileSteps */ "./src/assets/js/tabs/source-data/add-file-workflow/AddFileSteps.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_SourceDataTableCellModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/SourceDataTableCellModal */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataTableCellModal.js");
/* harmony import */ var _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../tabs/source-data/SourceDataFiles */ "./src/assets/js/tabs/source-data/SourceDataFiles.js");









class SourceDataEditTableCell {
    constructor() {
        this.newCellIsBeingEdited = false;
    }

    init() {
        _tabs_source_data_add_file_workflow_SourceDataTableCellModal__WEBPACK_IMPORTED_MODULE_6__["sourceDataTableCellModal"].init();
        this.firstCellAutomaticSelectionFinished = false;

        $('#tableCellModal .modal-footer ._close').on('click', e => {
            $('#tableCellModal').modal('hide');

            this.resetGridBorders();
        });

        $('#tableCellModal ._apply-and-next').on('click', e => this.applyAndNext(e));
    }

    sync() {
        _tabs_source_data_add_file_workflow_SourceDataTableCellModal__WEBPACK_IMPORTED_MODULE_6__["sourceDataTableCellModal"].sync();
    }

    resetGridBorders() {
        // Reset borders after highlighting a range.
        $('.wj-cell').css('border-right', '1px solid #d4d4d4');
        $('.wj-cell').css('border-bottom', '1px solid #d4d4d4');
        $('.wj-cell').css('border-top', 'initial');
        $('.wj-cell').css('border-left', 'initial');
    }

    applyAndNext(e) {
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();
        const tableSource = _.concat([], file.itemsSource);
        const fileCellProperties = file.cellProperties;
        const sel = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection;

        this.saveProperties(e);

        _tabs_source_data_add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_4__["addFileSteps"].fileWorkflow.enableModal();

        if (sel.isSingleCell) {
            let col = sel._col;
            let nextCol = col + 1;
            let row = sel._row;
            let newSelection = false;

            const columnsNumber = tableSource[0].length;
            const rowsNumber = tableSource.length;

            if (col < columnsNumber) {
                const cellProperties = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(fileCellProperties, `[${nextCol}][${row}]`);
                if (cellProperties && cellProperties.cellType === 'data') {
                    _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.select(new wijmo.grid.CellRange(row, nextCol, row, nextCol), true);
                } else {
                    while (nextCol < columnsNumber) {
                        nextCol++;
                        const cellProperties = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(fileCellProperties, `[${nextCol}][${row}]`);
                        if (cellProperties && cellProperties.cellType === 'data') {
                            _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.select(new wijmo.grid.CellRange(row, nextCol, row, nextCol), true);
                            newSelection = true;
                            break;
                        }
                    }

                    if (!newSelection) {
                        let nextRow = row + 1;
                        while (nextRow <= rowsNumber) {
                            nextCol = 0;
                            while (nextCol < columnsNumber) {
                                const cellProperties = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(fileCellProperties, `[${nextCol}][${nextRow}]`);
                                if (cellProperties && cellProperties.cellType === 'data') {
                                    _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.select(
                                        new wijmo.grid.CellRange(nextRow, nextCol, nextRow, nextCol),
                                        true
                                    );
                                    newSelection = true;
                                    break;
                                }
                                nextCol++;
                            }
                            if (newSelection) {
                                break;
                            }

                            nextRow++;
                        }
                    }
                }
            }
        } else {
            let newSelection = true;
            if (sel.leftCol < sel.rightCol && sel.topRow === sel.bottomRow) {
                const nextRow = sel.topRow + 1;

                for (let i = sel.leftCol; i <= sel.rightCol; i++) {
                    const cellProperties = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(fileCellProperties, `[${i}][${nextRow}]`);
                    if (!cellProperties || cellProperties.cellType !== 'data') {
                        newSelection = false;
                        break;
                    }
                }
                if (newSelection) {
                    _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.select(
                        new wijmo.grid.CellRange(nextRow, sel.rightCol, nextRow, sel.leftCol),
                        true
                    );
                }
            } else if (sel.topRow < sel.bottomRow && sel.leftCol === sel.rightCol) {
                const nextCol = sel.leftCol + 1;

                for (let i = sel.topRow; i <= sel.bottomRow; i++) {
                    const cellProperties = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(fileCellProperties, `[${nextCol}][${i}]`);
                    if (!cellProperties || cellProperties.cellType !== 'data') {
                        newSelection = false;
                        break;
                    }
                }
                if (newSelection) {
                    _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.select(
                        new wijmo.grid.CellRange(sel.bottomRow, nextCol, sel.topRow, nextCol),
                        true
                    );
                }
            }
        }
    }

    onTableSelectionChanged(s, e) {
        this.resetGridBorders();

        if (_tabs_source_data_add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_4__["addFileSteps"].ingestionStep === _tabs_source_data_add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_4__["addFileSteps"].STRUCTURE_DATA_STEP) {
            return;
        }

        this.newCellIsBeingEdited = true;

        if (!_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.itemsSource) {
            return;
        }

        const activeCell = $(e._p._activeCell);

        if (!$('#tableCellModal.modal.in').length) {
            $('#tableCellModal .modal-dialog').css({
                top: 0,
                left: 0
            });
        }
        $('#tableCellModal').modal({
            backdrop: false,
            show: true
        });

        $('#tableCellModal .modal-dialog').draggable({
            handle: '.modal-header'
        });
        $('#tableCellModal .modal-dialog').css('margin', 0);
        $('.modal-backdrop').css('background', 'transparent');

        $('#tableCellModal .modal-body').data('cell_type', 'notUsed');

        // Display modal content.
        if (_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection.isSingleCell) {
            $('#tableCellModal ._label-properties ._range-picker input').prop('readonly', false);
            _tabs_source_data_add_file_workflow_SourceDataTableCellModal__WEBPACK_IMPORTED_MODULE_6__["sourceDataTableCellModal"].displayContentForCellModal(activeCell);
        } else {
            $('#tableCellModal ._label-properties ._range-picker input').prop('readonly', true);
            _tabs_source_data_add_file_workflow_SourceDataTableCellModal__WEBPACK_IMPORTED_MODULE_6__["sourceDataTableCellModal"].displayContentForCellsModal();
        }

        // Position modal content.
        {
            const modalHeight = $('#tableCellModal .modal-content').height();
            const modalWidth = $('#tableCellModal .modal-content').width();
            const windowHeight = $(window).height();
            const windowWidth = $(window).width();
            const offset = activeCell.offset();
            const lineRangeOffset = $('#tableCellModal .modal-dialog').data('line_range') ? 30 : 0;
            $('#tableCellModal .modal-dialog').data('line_range', false);

            // When selecting a range larger than the screen, offset is not always available.
            if (offset) {
                if (windowHeight - offset.top > modalHeight) {
                    $('#tableCellModal .modal-dialog').css('top', offset.top + lineRangeOffset);
                } else {
                    if (offset.top - modalHeight > 150) {
                        $('#tableCellModal .modal-dialog').css('top', offset.top - modalHeight + lineRangeOffset);
                    } else {
                        $('#tableCellModal .modal-dialog').css(
                            'top',
                            windowHeight - modalHeight - 10 + lineRangeOffset
                        );
                    }
                }

                if (windowWidth - offset.left > 390 + modalWidth) {
                    $('#tableCellModal .modal-dialog').css('left', offset.left + activeCell.width() + 10);
                } else {
                    $('#tableCellModal .modal-dialog').css('left', offset.left - modalWidth - 10);
                }
            }
        }
    }

    saveProperties(e) {
        // We're saving the data, so no more unsaved changes!
        _tabs_source_data_add_file_workflow_SourceDataTableCellModal__WEBPACK_IMPORTED_MODULE_6__["sourceDataTableCellModal"].hasUnsavedChanges = false;

        e.preventDefault();
        $('#tableCellModal ._fields input').blur();

        const cellType = $('#tableCellModal input[name=data-label-switch]:checked').val();
        let commonProperties = {};
        commonProperties.labelDimension = [];
        commonProperties.overwriteValue = [];

        // Copy properties depending on cell-type.
        switch (cellType) {
            case 'label':
                $('#tableCellModal ._label-properties ._dimension-picker-container').each(function() {
                    const overwriteValue = $(this)
                        .find('._overwrite-value input')
                        .val();
                    const labelDimension = $(this)
                        .find('._dimension-picker input')
                        .val();
                    if (overwriteValue !== 'Multiple values') {
                        commonProperties.overwriteValue.push(overwriteValue);
                    }
                    if (labelDimension !== 'Multiple values') {
                        commonProperties.labelDimension.push(labelDimension);
                    }
                });

                let range = _tabs_source_data_add_file_workflow_SourceDataTableCellModal__WEBPACK_IMPORTED_MODULE_6__["sourceDataTableCellModal"].rangeInput.text;
                if (range && !this.isRangeValid(range)) {
                    alert('Invalid range entered!');
                    range = '';
                }

                _tabs_source_data_add_file_workflow_SourceDataTableCellModal__WEBPACK_IMPORTED_MODULE_6__["sourceDataTableCellModal"].setCommonProperty(commonProperties, 'range', range);
                break;

            case 'data':
                commonProperties.dataPointId = 'initial';
                commonProperties.failedSaving = false;

                _tabs_source_data_add_file_workflow_SourceDataTableCellModal__WEBPACK_IMPORTED_MODULE_6__["sourceDataTableCellModal"].modalInputs.map(input => {
                    _tabs_source_data_add_file_workflow_SourceDataTableCellModal__WEBPACK_IMPORTED_MODULE_6__["sourceDataTableCellModal"].setCommonProperty(
                        commonProperties,
                        input._kosmosField,
                        $(input._elRef).val()
                    );
                });
                break;
        }

        let sel = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection;
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();
        for (let col = sel.leftCol; col <= sel.rightCol; col++) {
            for (let row = sel.topRow; row <= sel.bottomRow; row++) {
                const properties = file.getSingleCellProperties(row, col);
                const val = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.cells.getCellData(row, col, false);

                // Skip empty cells and cells of different types.
                if (val === '' || properties.cellType !== cellType) {
                    continue;
                }

                // Overwrite cell properties.
                Object.assign(properties, commonProperties);
                properties.value = val;

                // Set applied label warning.
                properties.appliedLabelWarning = this.setAppliedLabelWarning(col, row, properties);

                // Apply range.
                if (cellType === 'label') {
                    _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].applyDimensions(properties, _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_5__["sourceDataFilesSidebar"].columnDefs);
                }
            }
        }

        // Close modal and refresh.
        $('#tableCellModal').modal('hide');
        _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_5__["sourceDataFilesSidebar"].displayLoadedFileSidebar();
        _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.refresh();
        _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.select(-1, -1);
        _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].saveCurrentProject();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].syncViews();
    }

    setAppliedLabelWarning(c, r, props) {
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();
        const table = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.itemsSource;
        const dimensions = _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_5__["sourceDataFilesSidebar"].columnDefs;
        let warning = false;

        table_loop: {
            for (let row = 0; row < table.length; row++) {
                for (let col = 0; col < table[row].length; col++) {
                    const cellType = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(file.cellProperties, `[${col}][${row}]['cellType']`, false);

                    if (cellType !== 'label') {
                        continue;
                    }

                    const range = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(file.cellProperties, `[${col}][${row}]['range']`, false);
                    const dimension = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(file.cellProperties, `[${col}][${row}]['labelDimension']`, false);

                    if (!(range && dimension[0])) {
                        continue;
                    }

                    const rangeObject = XLSX.utils.decode_range(range);

                    if (
                        !(c >= rangeObject.s.c && c <= rangeObject.e.c && r >= rangeObject.s.r && r <= rangeObject.e.r)
                    ) {
                        continue;
                    }

                    const cellProperties = file.getSingleCellProperties(row, col);
                    const selectedDimension = dimensions.find(column => {
                        return column.label === dimension[0];
                    });
                    const slug = selectedDimension.slug;

                    if (!_Common__WEBPACK_IMPORTED_MODULE_1__["common"].areIdentical(props[slug], cellProperties.value)) {
                        warning = true;

                        break table_loop;
                    }
                }
            }
        }

        return warning;
    }

    /**
     * Checks if the given range is valid.
     *
     * @param range
     * @returns {boolean} True if the range is valid, false otherwise.
     */
    isRangeValid(range) {
        const rangeSeparatorIndex = range.indexOf(':');
        if (rangeSeparatorIndex === -1) {
            return false;
        }

        const newRange = XLSX.utils.decode_range(range);

        const sourceFile = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();
        const fileRowsNumber = sourceFile.getNumberOfRows();
        const fileColsNumber = sourceFile.getNumberOfCols();

        if (newRange.e.r > fileRowsNumber || newRange.e.c > fileColsNumber) {
            return false;
        }

        return true;
    }
}

const sourceDataEditTableCell = new SourceDataEditTableCell();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesReviewTable.js":
/*!****************************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesReviewTable.js ***!
  \****************************************************************************************/
/*! exports provided: sourceDataFilesReviewTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceDataFilesReviewTable", function() { return sourceDataFilesReviewTable; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/SourceFilesService */ "./src/assets/js/services/SourceFilesService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js");






class SourceDataFilesReviewTable {
    constructor() {
        this.columnDefs = [];
        this.scale = 1;
        this.inUpdatedLayout = false;
    }

    init() {
        this.flexgrid = new wijmo.grid.FlexGrid($('#source_data_files_pre_ingestion ._review-table')[0], {
            isReadOnly: true,
            selectionMode: 'Row',
            itemsSource: [],
            autoGenerateColumns: false,
            formatItem: (s, e) => {
                if (e.panel === s.cells) {
                    let item = s.rows[e.row].dataItem;

                    switch (s.columns[e.col].binding) {
                        case 'value':
                            if (e.cell.childNodes[0]) {
                                e.cell.childNodes[0].nodeValue = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].formatNumber(item.value);
                            }
                            break;

                        case '__normalized_value':
                            e.cell.innerHTML = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].formatNumber(item['__normalized_value'] / this.scale);
                            break;

                        case 'scale':
                            // e.cell.innerHTML = item.scale;
                            break;
                    }
                }
            },
            updatedLayout: () => {
                if (this.inUpdatedLayout) {
                    this.inUpdatedLayout = false;
                } else {
                    this.inUpdatedLayout = true;
                    this.flexgrid.autoSizeRow(0, true);
                }
            }
        });
    }

    sync() {
        // Columns.
        this.columnDefs = this.getAvailableColumns();
        this.updateColumns();

        // Data points.
        let dataPoints = [];
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();
        if (file && file.dataPoints) {
            dataPoints = file.dataPoints;
        }
        this.setData(dataPoints);
    }

    getAvailableColumns() {
        const cols = [];
        const allColumns = _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_4__["sourceDataFilesSidebar"].columnDefs;

        cols.push({
            slug: '__normalized_value',
            label: 'Normalized Value',
            selected: true,
            isReadOnly: true
        });

        cols.push({
            slug: 'value',
            label: 'Value',
            selected: true,
            isReadOnly: true
        });

        allColumns.forEach(column => {
            if (column.selected) {
                cols.push({
                    slug: column.slug,
                    label: column.label,
                    selected: true,
                    isReadOnly: false
                });
            }
        });

        return cols;
    }

    updateColumns() {
        this.flexgrid.columns.length = 0;
        this.columnDefs.forEach(column => {
            if (!column.selected) {
                return;
            }

            // Add column to grid.
            const gridCol = new wijmo.grid.Column();
            gridCol.binding = column.slug;
            gridCol.header = column.label;
            gridCol.dataMap = column.dataMap;
            gridCol.isReadOnly = column.isReadOnly;
            this.flexgrid.columns.push(gridCol);
        });
    }

    setData(dataset) {
        dataset = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(dataset);

        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].getCurrentProject();
        // const sourceFiles = project.sourceFiles;

        dataset = dataset.map(item => {
            // Normalize values.
            item['__normalized_value'] = item.value * _Common__WEBPACK_IMPORTED_MODULE_1__["common"].parseScale(item.scale) * _Common__WEBPACK_IMPORTED_MODULE_1__["common"].parseInverse(item.inverse);

            // Process dimensions.
            item = project.addDataStructuresToDataPoint(item);

            return item;
        });

        // Update data source.
        this.flexgrid.itemsSource = dataset;
        this.flexgrid.collectionView.refresh();
        this.updateColumns();
    }
}

const sourceDataFilesReviewTable = new SourceDataFilesReviewTable();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js":
/*!************************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js ***!
  \************************************************************************************/
/*! exports provided: sourceDataFilesSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceDataFilesSidebar", function() { return sourceDataFilesSidebar; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/SourceFilesService */ "./src/assets/js/services/SourceFilesService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _source_data_structures_SourceDataStructures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../source-data-structures/SourceDataStructures */ "./src/assets/js/tabs/source-data/source-data-structures/SourceDataStructures.js");
/* harmony import */ var _SourceData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SourceData */ "./src/assets/js/tabs/source-data/SourceData.js");
/* harmony import */ var _SourceDataFiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SourceDataFiles */ "./src/assets/js/tabs/source-data/SourceDataFiles.js");
/* harmony import */ var _SourceDataPointsSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SourceDataPointsSidebar */ "./src/assets/js/tabs/source-data/SourceDataPointsSidebar.js");
/* harmony import */ var _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddFileSteps */ "./src/assets/js/tabs/source-data/add-file-workflow/AddFileSteps.js");
/* harmony import */ var _FileWorkflowLegend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FileWorkflowLegend */ "./src/assets/js/tabs/source-data/add-file-workflow/FileWorkflowLegend.js");
/* harmony import */ var _SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SourceDataEditTableCell */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataEditTableCell.js");
/* harmony import */ var _SourceDataFilesReviewTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SourceDataFilesReviewTable */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesReviewTable.js");
/* harmony import */ var _SourceDataTableCellModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SourceDataTableCellModal */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataTableCellModal.js");














class SourceDataFilesSidebar {
    constructor() {
        this.selectedItem = null;
        this.container = $('#source_data_files_pre_ingestion');
        this.dataStructuresContainer = this.container.find('._data-structures');
        this.sourceDataStructures = new _source_data_structures_SourceDataStructures__WEBPACK_IMPORTED_MODULE_4__["SourceDataStructures"](
            this.dataStructuresContainer,
            () => {
                this.sourceDataStructures.sync();
            },
            true,
            true
        );
        this.columnDefs = [];
        this.fileWorkflowLegend = new _FileWorkflowLegend__WEBPACK_IMPORTED_MODULE_9__["FileWorkflowLegend"]($('#source_data_files_sidebar .legend-section ._colors'));
        this.hiddenCols = [];
        this.hiddenRows = [];
    }

    init() {
        _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].init();

        $('#source_data_files_sidebar ._dimensions-section ._column-selector').on('click', () => {
            this.updateDimensionsDropdown();
        });

        $('#source_data_files_sidebar ._ingestion-steps ._cancel').on('click', () => {
            _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].cancelWorkflow();
        });

        this.columnsSelect = new wijmo.input.MultiSelect(
            $('#source_data_files_sidebar ._dimensions-section ._column-selector')[0],
            {
                placeholder: 'Select Columns',
                itemsSource: [],
                headerFormat: '{count} columns selected',
                displayMemberPath: 'label',
                checkedMemberPath: 'selected',
                onCheckedItemsChanged: () => {
                    this.updateDimensions();
                }
            }
        );
        $('#source_data_files_sidebar ._dimensions-section ._add-custom-dimension').on('click', () => {
            _SourceDataPointsSidebar__WEBPACK_IMPORTED_MODULE_7__["sourceDataPointsSidebar"].addCustomDimension();
        });

        $('._hide-cells').on('change', function() {
            if ($(this).is(':checked')) {
                sourceDataFilesSidebar.hideCells();
            } else {
                sourceDataFilesSidebar.showHiddenCells();
            }
        });

        $('._dimensions-cog, ._range-global-visibility').on('click', e => {
            let $this;
            if ($(e.target).hasClass('_dimensions-cog')) {
                $this = $('._dimensions-section');
                this.toggleClassAndShowHide(e.target);
            } else {
                $this = $('._brush-container');
                this.toggleClassAndShowHide(e.target);
            }

            const visible = !$this.hasClass('_visible');
            $this.toggleClass('_visible', visible);
        });

        $(document.body).on('click', '._label-brush-range', e => {
            const cell = $(e.currentTarget);

            if (cell.attr('data-active') == null || cell.attr('data-active') === 'false') {
                _SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_10__["sourceDataEditTableCell"].resetGridBorders();
                $('._label-brush-range').attr('data-active', false);
                $('._label-brush-range').removeClass('_active');

                cell.attr('data-active', true);
                cell.addClass('_active');
                let rangeText = cell.text();

                if (rangeText) {
                    let ranges = rangeText.split(',');
                    ranges.map(range => {
                        range = range.replace(/\s/g, '');
                        _SourceDataTableCellModal__WEBPACK_IMPORTED_MODULE_12__["sourceDataTableCellModal"].highlightRangeCells(range);
                    });
                }
            } else {
                $('._label-brush-range').removeClass('_active');
                cell.attr('data-active', false);
                _SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_10__["sourceDataEditTableCell"].resetGridBorders();
            }
        });

        _SourceDataFilesReviewTable__WEBPACK_IMPORTED_MODULE_11__["sourceDataFilesReviewTable"].init();
    }

    toggleClassAndShowHide(element) {
        const active = !$(element).hasClass('_active');
        $(element).toggleClass('_active', active);
    }

    showHiddenCells() {
        $('.hide-cells-container').css('background-color', '');

        const columnNumber = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile().itemsSource[0].length;

        this.hiddenRows.map(row => {
            let minHeight = true;

            for (let col = 0; col < columnNumber; col++) {
                if (_SourceDataFiles__WEBPACK_IMPORTED_MODULE_6__["sourceDataFiles"].flexGrid.getCellData(row, col, true)) {
                    minHeight = false;
                    break;
                }
            }

            if (minHeight) {
                _SourceDataFiles__WEBPACK_IMPORTED_MODULE_6__["sourceDataFiles"].flexGrid.autoSizeRow(row, false, 20);
            } else {
                _SourceDataFiles__WEBPACK_IMPORTED_MODULE_6__["sourceDataFiles"].flexGrid.autoSizeRow(row);
            }
        });
        this.hiddenCols.map(col => _SourceDataFiles__WEBPACK_IMPORTED_MODULE_6__["sourceDataFiles"].flexGrid.autoSizeColumn(col));
    }

    hideCells() {
        $('.hide-cells-container').css('background-color', '#6e707d');
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();
        const fileCellProperties = file.cellProperties;
        const tableSource = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat([], file.itemsSource);
        let hiddenRows = [],
            hiddenCols = [];

        // Check what rows to hide.
        tableSource.map((row, rowNumber) => {
            let hideRow = true;

            row.map((cell, colNumber) => {
                if (fileCellProperties.hasOwnProperty(colNumber)) {
                    if (fileCellProperties[colNumber].hasOwnProperty(rowNumber)) {
                        if (
                            fileCellProperties[colNumber][rowNumber].cellType === 'data' ||
                            fileCellProperties[colNumber][rowNumber].cellType === 'label'
                        ) {
                            hideRow = false;
                        } else {
                            delete fileCellProperties[colNumber][rowNumber];
                        }
                    }
                }
            });

            if (hideRow) {
                hiddenRows = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat([], hiddenRows, rowNumber);
            }
        });

        // Check what cols to hide.
        tableSource[0].map((col, colNumber) => {
            let hideCol = true;

            if (fileCellProperties.hasOwnProperty(colNumber)) {
                const columnArray = fileCellProperties[colNumber];
                Object.keys(columnArray).forEach(key => {
                    if (columnArray[key].cellType === 'data' || columnArray[key].cellType === 'label') {
                        hideCol = false;
                    } else {
                        delete columnArray[key];
                    }
                });
            }

            if (hideCol) {
                hiddenCols = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat([], hiddenCols, colNumber);
            }
        });
        hiddenCols.sort(function(a, b) {
            return b - a;
        });
        this.hiddenCols = hiddenCols;
        this.hiddenRows = hiddenRows;

        hiddenRows.map(row => (_SourceDataFiles__WEBPACK_IMPORTED_MODULE_6__["sourceDataFiles"].flexGrid.rows[row].height = 0));
        hiddenCols.map(col => (_SourceDataFiles__WEBPACK_IMPORTED_MODULE_6__["sourceDataFiles"].flexGrid.columns[col].width = 0));
    }

    sync() {
        // Last step table.
        _SourceDataFilesReviewTable__WEBPACK_IMPORTED_MODULE_11__["sourceDataFilesReviewTable"].sync();

        this.syncDimensionsColumns();
        this.fileWorkflowLegend.sync(this.columnDefs);
    }

    syncDimensionsColumns() {
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();

        this.columnDefs = this.getAvailableColumns();
        if (file) {
            if (file.formDimensions.length) {
                this.columnDefs.forEach(column => {
                    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(file.formDimensions, column.slug)) {
                        column.selected = false;
                    }
                });
            }
        }

        this.columnsSelect.itemsSource = this.columnDefs;
        this.fileWorkflowLegend.sync(this.columnDefs);
        this.updateDimensionsDropdown();
    }

    getAvailableColumns(manual = false, table = false) {
        const cols = [];
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].getCurrentProject();
        const dimensions = project.getDimensions();

        if (manual && table) {
            cols.push({
                slug: '__normalized_value',
                label: 'Normalized Value',
                selected: true,
                isReadOnly: true
            });
        }

        dimensions.forEach(dimension => {
            if (manual) {
                cols.push({
                    slug: dimension.slug,
                    label: dimension.label,
                    selected: true
                });
            } else if (dimension.slug !== 'value') {
                cols.push({
                    slug: dimension.slug,
                    label: dimension.label,
                    selected: true
                });
            }
        });

        return cols;
    }

    syncDimensionsContainer() {
        $('#source_data_files_sidebar ._dimensions-section ._add-custom-dimension').prop(
            'disabled',
            _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].ingestionStep > _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].DEFINE_DATA_STEP
        );
    }

    startWorkflow() {
        _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].setStep(_AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].DEFINE_DATA_STEP);

        // Copy current project and add new data points into it.
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].getCurrentProject();
        _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].project = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(project);

        _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].defineLabelsStep();

        _SourceData__WEBPACK_IMPORTED_MODULE_5__["sourceData"].beginWorkflow();
    }

    displayLoadedFileSidebar() {
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();

        this.dataStructuresContainer.css(
            'display',
            _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].ingestionStep === _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].STRUCTURE_DATA_STEP ? '' : 'none'
        );
        if ($('.tab-pane.active').find('._sidebar-dimension-selector').length > 0) {
            $('.tab-pane.active ._sidebar-dimension-selector').css(
                'display',
                _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].ingestionStep === _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].STRUCTURE_DATA_STEP ? '' : 'none'
            );
        }

        if (_AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].ingestionStep !== _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].REVIEW_STEP) {
            $('#source_data_files_pre_ingestion ._review-table').hide();
            $('#source_data_files_pre_ingestion ._table').css('display', '');
        } else {
            $('#source_data_files_pre_ingestion ._review-table').css('display', '');
            $('#source_data_files_pre_ingestion ._table').hide();

            _SourceDataFilesReviewTable__WEBPACK_IMPORTED_MODULE_11__["sourceDataFilesReviewTable"].flexgrid.itemsSource = file.dataPoints;
            _SourceDataFilesReviewTable__WEBPACK_IMPORTED_MODULE_11__["sourceDataFilesReviewTable"].flexgrid.refresh();
        }

        // Hightlight selected step in ingestion header.
        $('#source_data_files_pre_ingestion ._ingestion-steps-display ._step').removeClass('highlight-step');
        $(
            '#source_data_files_pre_ingestion ._ingestion-steps-display ._step[data-step=' +
                _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].ingestionStep +
                ']'
        ).addClass('highlight-step');

        // Prev and next buttons
        $('#source_data_files_sidebar ._ingestion-steps ._next').text(
            _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].ingestionStep < 4 ? 'Next' : 'Finish'
        );
        switch (_AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].ingestionStep) {
            case 1:
                if ($('.brush-section > h4.hide').length) {
                    $('.brush-section > h4').removeClass('hide');
                }
                break;
        }

        $('#source_data_files_sidebar').css('display', '');

        // Refresh FlexGrid.
        window.dispatchEvent(new Event('resize'));

        this.syncDimensionsContainer();
        this.syncDimensionsColumns();

        // Display the Brushes list of dimensions.
        $('._label-brush-range').html('');
        const tableSource = _SourceDataFiles__WEBPACK_IMPORTED_MODULE_6__["sourceDataFiles"].flexGrid.itemsSource;
        const dimensions = sourceDataFilesSidebar.columnDefs;
        dimensions.map((dimension, index) => {
            if (dimension.selected) {
                const div = $($('._brush._label-brush')[index]);
                const rangeDiv = $($('._label-brush-range')[index]);

                // Define range for each dimension.
                _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].defineRangeForEachDimension(tableSource, rangeDiv, div, file, dimension);
            }
        });

        $('#source_data_files_sidebar ._zoom-slider-container').css(
            'display',
            _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].ingestionStep > 2 ? 'none' : 'block'
        );
    }

    updateDimensions() {
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();
        file.formDimensions = [];
        this.columnDefs.forEach(column => {
            if (column.selected) {
                file.formDimensions = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat([], file.formDimensions, column.slug);
            }
        });
        this.fileWorkflowLegend.sync(this.columnDefs);
        // file.formDimensions = _.concat([], this.columnDefs);
        _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].saveCurrentProject();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].syncViews();
        _SourceDataFiles__WEBPACK_IMPORTED_MODULE_6__["sourceDataFiles"].flexGrid.refresh();
    }

    updateDimensionsDropdown() {
        $('.wj-listbox-item input').prop('disabled', _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].ingestionStep > _AddFileSteps__WEBPACK_IMPORTED_MODULE_8__["addFileSteps"].DEFINE_DATA_STEP);
        $('.wj-listbox-item label').each(function() {
            if (
                $(this)
                    .text()
                    .replace(/\s/g, '') === 'Scale'
            ) {
                $(this)
                    .find('input')
                    .prop('disabled', true);
            }
        });
    }
}

const sourceDataFilesSidebar = new SourceDataFilesSidebar();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataTableCellModal.js":
/*!**************************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-file-workflow/SourceDataTableCellModal.js ***!
  \**************************************************************************************/
/*! exports provided: sourceDataTableCellModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceDataTableCellModal", function() { return sourceDataTableCellModal; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/SourceFilesService */ "./src/assets/js/services/SourceFilesService.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/AddFileSteps */ "./src/assets/js/tabs/source-data/add-file-workflow/AddFileSteps.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/SourceDataEditTableCell */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataEditTableCell.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js");
/* harmony import */ var _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../tabs/source-data/SourceDataFiles */ "./src/assets/js/tabs/source-data/SourceDataFiles.js");









class SourceDataTableCellModal {
    constructor() {
        this.modalInputs = [];
        this.multipleCellsInputFields = {};
        this.hasUnsavedChanges = false;
        this.labelMultipleDimensions = [];
        this.labelMultipleOverwriteValues = [];
        this.dropdownValue = '';
        this.appliedLabelChangeCounter = 0;
        this.applyButton = '';
        this.previousSelection = 'notUsed';
    }

    init() {
        const fieldTemplateHtml =
            '<div class="_fields _data-properties"><div class="_field">' +
            '<div class="_name">Value</div><div class="_input"></div></div></div>';
        this.form = $('#tableCellModal .modal-body');
        this.form.append(fieldTemplateHtml);
        this.fieldTemplate = this.form.find('._data-properties ._field');
        const rangeInputHtml = $('#tableCellModal ._label-properties ._range-picker');

        this.rangeInput = new wijmo.input.AutoComplete(rangeInputHtml[0], {
            isReadOnly: false,
            onGotFocus: e => {
                _tabs_source_data_add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_4__["addFileSteps"].fileWorkflow.enableRangePickerMode((fileWorkflow, e) => {
                    const value = XLSX.utils.encode_range({
                        s: { r: e.range.topRow, c: e.range.leftCol },
                        e: { r: e.range.bottomRow, c: e.range.rightCol }
                    });

                    this.rangeInput._setText(value);
                });
            },
            lostFocus: e => {
                $(_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.hostElement).removeClass('_copy-cursor');
            }
        });

        // Prevent modal close when clicking on modal dialog.
        $('#tableCellModal > .modal-dialog').on('mousedown', e => {
            e.stopPropagation();
        });

        // Prevent modal close when clicking on dropdown.
        $('#source_data_files ._table ._modal-container').on('mousedown', '.wj-dropdown-panel', e => {
            e.stopPropagation();
        });

        // Apply changes button functionality on cell modal.
        $('._save-cell-properties').on('click', e => _tabs_source_data_add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_5__["sourceDataEditTableCell"].saveProperties(e));

        // When showing the modal...
        $('#tableCellModal').on('show.bs.modal', e => {
            this.hasUnsavedChanges = false;
        });

        // Before hiding the modal...
        $('#tableCellModal').on('hide.bs.modal', e => {
            // Prevent user from losing their changes.
            if (this.hasUnsavedChanges) {
                const userConfirmation = confirm('Are you sure you do not want to save changes before leaving?');

                if (!userConfirmation) {
                    e.preventDefault();
                }
            }
        });

        $('._add-new-label-rule').on('click', () => this.addNewLabelRule());

        $(document).on('click', '._dimension-picker-container ._remove-rule', function() {
            $(this)
                .closest('._dimension-picker-container')
                .remove();
        });

        $('#source_data_files_pre_ingestion ._table').on('keydown', e => {
            if (!$('#tableCellModal').data('bs.modal').isShown || !$('#cellModalSwitchLabel').is(':checked')) {
                return;
            }
            e.preventDefault();
            e.stopImmediatePropagation();

            const keycode = e.keyCode ? e.keyCode : e.which;
            if (keycode === 13) {
                _tabs_source_data_add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_5__["sourceDataEditTableCell"].saveProperties(e);
            }
        });
    }

    sync() {}

    getValuesForDimensionsDropdown() {
        let fields = _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_6__["sourceDataFilesSidebar"].columnDefs;
        let dimensions = [];
        for (const key in fields) {
            const field = fields[key];
            if (field.slug === 'value' || !field.selected) {
                continue;
            }
            dimensions.push(field);
        }

        return dimensions;
    }

    addNewLabelRule() {
        $('#tableCellModal .modal-body ._label-properties ._add-new-label-rule').before(
            this.generateDimensionPickerContainer()
        );

        const dimensionsSelector = $('#tableCellModal ._label-properties ._dimension-picker').last();
        const overwriteValueSelector = $('#tableCellModal ._label-properties ._overwrite-value').last();
        new wijmo.input.ComboBox(dimensionsSelector[0], {
            displayMemberPath: 'label',
            selectedValuePath: 'slug',
            isEditable: true,
            itemsSource: this.getValuesForDimensionsDropdown()
        });
        new wijmo.input.InputMask(overwriteValueSelector[0], {
            isRequired: false
        });
    }

    generateDimensionPickerContainer() {
        let removeButton = '';
        if ($('._dimension-picker-container').length) {
            removeButton = '<div class="btn btn-danger _remove-rule">Remove dimension</div>';
        }

        return (
            '<div class="_dimension-picker-container">' +
            '<div class="_field"><div class="_name">Overwrite</div><div class="_overwrite-value"></div></div>' +
            '<div class="_field"><div class="_name">Dimension</div><div class="_dimension-picker"></div></div>' +
            removeButton +
            '</div>'
        );
    }

    generateDimensionsInputContainerForLabelView() {
        const fileCellProperties = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile().cellProperties;
        this.rangeInput._setText(this.getCommonValueForSelection('range'));
        $('._dimension-picker-container').remove();
        $('#tableCellModal ._label-properties ._add-new-label-rule').css('display', '');

        if (_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection.isSingleCell) {
            const col = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection._col;
            const row = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection._row;
            const dimensions = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(fileCellProperties, `[${col}][${row}]['labelDimension']`);
            if (dimensions && dimensions.length > 1) {
                dimensions.map((dimension, index) => {
                    $('#tableCellModal .modal-body ._label-properties ._add-new-label-rule').before(
                        this.generateDimensionPickerContainer()
                    );

                    const dimensionsSelector = $('#tableCellModal ._label-properties ._dimension-picker').last();
                    const labelDimensionsInput = new wijmo.input.ComboBox(dimensionsSelector[0], {
                        displayMemberPath: 'label',
                        selectedValuePath: 'slug',
                        isEditable: true,
                        itemsSource: this.getValuesForDimensionsDropdown()
                    });
                    labelDimensionsInput.text = dimension;

                    const overwriteValueSelector = $('#tableCellModal ._label-properties ._overwrite-value').last();
                    const overwriteValueInput = new wijmo.input.InputMask(overwriteValueSelector[0], {
                        isRequired: false
                    });
                    let overwriteVal = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(fileCellProperties, `[${col}][${row}]['overwriteValue'][${index}]`);
                    overwriteVal = overwriteVal ? overwriteVal : '';
                    overwriteValueInput.rawValue = overwriteVal;
                });
            } else {
                this.createLabelPropertiesContainer(
                    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(fileCellProperties, `[${col}][${row}]['labelDimension'][0]`),
                    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(fileCellProperties, `[${col}][${row}]['overwriteValue'][0]`)
                );
            }
        } else {
            let sel = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection;
            for (let col = sel.leftCol; col <= sel.rightCol; col++) {
                for (let row = sel.topRow; row <= sel.bottomRow; row++) {
                    const dimensions = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(fileCellProperties, `[${col}][${row}]['labelDimension']`);
                    if (dimensions && dimensions.length > 1) {
                        $('#tableCellModal ._label-properties ._add-new-label-rule').css('display', 'none');

                        return;
                    }
                }
            }

            this.createLabelPropertiesContainer();
            const labelDimensionsInput = $('#tableCellModal ._label-properties ._dimension-picker input');
            const overwriteValueInput = $('#tableCellModal ._label-properties ._overwrite-value input');
            if (Array.isArray(this.labelMultipleDimensions)) {
                if (this.labelMultipleDimensions.length > 1) {
                    labelDimensionsInput.val('Multiple values');
                } else if (this.labelMultipleDimensions.length === 1) {
                    labelDimensionsInput.val(this.labelMultipleDimensions[0]);
                } else {
                    labelDimensionsInput.val('');
                }
            }

            if (Array.isArray(this.labelMultipleOverwriteValues)) {
                if (this.labelMultipleOverwriteValues.length > 1) {
                    overwriteValueInput.val('Multiple values');
                } else if (this.labelMultipleOverwriteValues.length === 1) {
                    overwriteValueInput.val(this.labelMultipleOverwriteValues[0]);
                } else {
                    overwriteValueInput.val('');
                }
            }
        }
    }

    createLabelPropertiesContainer(dimension = '', overwriteVal = '') {
        $('#tableCellModal .modal-body ._label-properties ._add-new-label-rule').before(
            this.generateDimensionPickerContainer()
        );
        const labelDimensionsInput = new wijmo.input.ComboBox(
            $('#tableCellModal ._label-properties ._dimension-picker')[0],
            {
                displayMemberPath: 'label',
                selectedValuePath: 'slug',
                isEditable: true,
                itemsSource: this.getValuesForDimensionsDropdown()
            }
        );
        labelDimensionsInput.text = dimension;

        overwriteVal = overwriteVal ? overwriteVal : '';
        const overwriteValueInput = new wijmo.input.InputMask(
            $('#tableCellModal ._label-properties ._overwrite-value')[0],
            {
                isRequired: false,
                rawValue: overwriteVal
            }
        );
    }

    highlightRangeCells(range) {
        const rangeArray = range.split(':');
        const rangeLeft = rangeArray[0].slice(0, rangeArray[0].length);
        const rangeRight = rangeArray[1].slice(0, rangeArray[1].length);
        let row = rangeLeft.replace(/^\D+/g, '');
        let col = XLSX.utils.decode_col(rangeArray[0].replace(row, ''));
        row = Number(row) - 1;
        let row1 = rangeRight.replace(/^\D+/g, '');
        let col1 = XLSX.utils.decode_col(rangeArray[1].replace(row1, ''));
        row1 = Number(row1) - 1;
        row = Math.min(row, row1);
        row1 = Math.max(row, row1);
        col = Math.min(col, col1);
        col1 = Math.max(col, col1);

        if (row === row1) {
            // First cell.
            $(_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.cells.getCellElement(row, col)).css('border-left', '1px solid #5797e9');

            // Last cell.
            $(_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.cells.getCellElement(row, col1)).css('border-right', '1px solid #5797e9');

            for (let i = col; i <= col1; i++) {
                const cell = $(_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.cells.getCellElement(row, i));
                cell.css('border-top', '1px solid #5797e9');
                cell.css('border-bottom', '1px solid #5797e9');
            }

            $('#tableCellModal .modal-dialog').data('line_range', true);

            return;
        }

        if (col === col1) {
            // First cell.
            $(_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.cells.getCellElement(row, col)).css('border-top', '1px solid #5797e9');

            // Last cell.
            $(_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.cells.getCellElement(row1, col)).css('border-bottom', '1px solid #5797e9');

            for (let i = row; i <= row1; i++) {
                const cell = $(_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.cells.getCellElement(i, col));
                cell.css('border-left', '1px solid #5797e9');
                cell.css('border-right', '1px solid #5797e9');
            }
        } else {
            for (let i = col; i <= col1; i++) {
                const cellTop = $(_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.cells.getCellElement(row, i));
                const cellBottom = $(_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.cells.getCellElement(row1, i));
                cellTop.css('border-top', '1px solid #5797e9');
                cellBottom.css('border-bottom', '1px solid #5797e9');
            }

            for (let i = row; i <= row1; i++) {
                const cellLeft = $(_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.cells.getCellElement(i, col));
                const cellRight = $(_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.cells.getCellElement(i, col1));
                cellLeft.css('border-left', '1px solid #5797e9');
                cellRight.css('border-right', '1px solid #5797e9');
            }
        }
    }

    detachSubmitFormButton(prevSelection, newSelection, button, prevBtn) {
        if (this.applyButton) {
            if (this.previousSelection === prevSelection) {
                $('.modal-footer').prepend(this.applyButton[0]);
                $(`.${prevBtn}`)
                    .attr('disabled', false)
                    .css('display', '');
                this.applyButton = $(`.${button}`).detach();
            }
        } else {
            this.applyButton = $(`.${button}`).detach();
        }
        this.previousSelection = newSelection;
    }

    displayContentForCellModalForLabelView() {
        this.detachSubmitFormButton('data', 'label', '_apply-and-next', '_save-cell-properties');

        this.generateDimensionsInputContainerForLabelView();

        // Hightlight range cells.
        if (_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection.isSingleCell) {
            const col = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection._col;
            const row = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection._row;

            const fileCellProperties = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile().cellProperties;
            const range = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(fileCellProperties, `[${col}][${row}][range]`);
            if (range) {
                this.highlightRangeCells(range);
            }
        }
    }

    generateLabelDimensionsForModalInputsInDataView() {
        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();
        const fileCellProperties = file.cellProperties;
        const formDimensions = file.formDimensions;
        let labelDimensions2 = [];
        let labelDimensions = [];

        Object.keys(fileCellProperties).forEach(col => {
            Object.keys(fileCellProperties[col]).forEach(row => {
                if (fileCellProperties[col][row].cellType === 'label') {
                    const dimension = fileCellProperties[col][row].labelDimension;
                    const value = fileCellProperties[col][row].overwriteValue
                        ? fileCellProperties[col][row].overwriteValue
                        : fileCellProperties[col][row].value;

                    if (Array.isArray(dimension)) {
                        dimension.map((dimensionValue, index) => {
                            const dimensionObject = _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_6__["sourceDataFilesSidebar"].columnDefs.filter(obj => {
                                return obj.label === dimensionValue;
                            });

                            if (dimensionObject.length) {
                                const dimensionSlug = dimensionObject[0].slug;

                                labelDimensions2 = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])(labelDimensions2, [dimensionSlug]);
                                labelDimensions[dimensionSlug] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])([], labelDimensions[dimensionSlug], [
                                    value[index]
                                ]);
                            }
                        });
                    } else {
                        labelDimensions2 = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])(labelDimensions2, [dimension]);
                        labelDimensions[dimension] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])([], labelDimensions[dimension], [value]);
                    }
                }

                if (fileCellProperties[col][row].cellType === 'data') {
                    const cell = fileCellProperties[col][row];
                    Object.keys(cell).forEach(function(key) {
                        if (formDimensions.includes(key)) {
                            if (cell[key]) {
                                const value = cell[key];
                                labelDimensions2 = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])(labelDimensions2, [key]);
                                labelDimensions[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])([], labelDimensions[key], [value]);
                            }
                        }
                    });
                }
            });
        });

        return labelDimensions;
    }

    setCellTypeForCellModal(type) {
        // $('#tableCellModal ._range-picker').parent().css('display', '');
        $('#tableCellModal .modal-body').data('cell_type', type);
        $('#tableCellModal ._range-picker')
            .parent()
            .css('display', type === 'label' ? '' : 'none');
        $('#tableCellModal ._label-properties').css('display', type === 'label' ? '' : 'none');
        $('#tableCellModal ._data-properties').css('display', type === 'data' ? '' : 'none');
        $('#tableCellModal ._apply-and-next')
            .css('display', type === 'data' ? '' : 'none')
            .prop('disabled', type === 'data' ? false : true);
        $('#tableCellModal ._save-cell-properties')
            .css('display', type !== 'data' ? '' : 'none')
            .prop('disabled', type !== 'data' ? false : true);

        switch (type) {
            case 'data':
                $('#cellModalSwitchData').prop('checked', true);
                this.displayContentForCellModalForDataView();
                break;

            case 'label':
                $('#cellModalSwitchLabel').prop('checked', true);
                this.displayContentForCellModalForLabelView();
                break;

            case 'notUsed':
            default:
                $('#cellModalSwitchNotUsed').prop('checked', true);
                break;
        }
    }

    displayContentForCellModalForDataView() {
        const labelDimensions = this.generateLabelDimensionsForModalInputsInDataView();
        const fileCellProperties = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile().cellProperties;
        this.detachSubmitFormButton('label', 'data', '_save-cell-properties', '_apply-and-next');

        // Load settings from cell data.
        let inputFields = {};
        if (_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection.isSingleCell) {
            let sel = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection;
            const cellProperties = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(fileCellProperties, `[${sel.leftCol}][${sel.topRow}]`);
            if (cellProperties) {
                Object.keys(cellProperties).forEach(function(key) {
                    inputFields[key] = cellProperties[key];
                });
            }
        } else {
            inputFields = this.multipleCellsInputFields;
        }

        // Remove previous stuff.
        this.modalInputs.forEach(modalInput => {
            modalInput.dispose();
        });
        this.modalInputs.length = 0;
        this.form.find('._data-properties ._field').remove();

        // Add fields.
        const dataset = _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].getCurrentDataPoints();
        let fields = _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_6__["sourceDataFilesSidebar"].columnDefs;
        for (const key in fields) {
            const field = fields[key];
            if (field.slug === 'value' || !field.selected) {
                continue;
            }

            const e = this.fieldTemplate.clone();
            e.find('._name').text(field.label);
            this.form.find('._fields._data-properties').append(e);

            // Dropdown values
            let values;
            switch (field.slug) {
                case 'attribute__global_terms':
                    values = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getGlobalTerms();
                    break;

                case 'parent_attribute':
                    values = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getUniqueValues(dataset, 'attribute');
                    break;

                default:
                    values = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getUniqueValues(dataset, field.slug);
                    break;
            }

            values = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])(values, labelDimensions[field.slug]);
            // Create input.
            const input = new wijmo.input.AutoComplete(e.find('._input')[0], {
                itemsSource: values.reverse(),
                onGotFocus: () => {
                    this.dropdownValue = input.text;

                    _tabs_source_data_add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_4__["addFileSteps"].fileWorkflow.enableClickToCopyMode((fileWorkflow, e) => {
                        const activeCell = $(_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.cells.getCellElement(e._rng._row, e._rng._col));
                        const inputElement = $(input._elRef);

                        // Copy value from cell to focused input.
                        sourceDataTableCellModal.hasUnsavedChanges = true;
                        inputElement.val(activeCell.text());

                        fileWorkflow.disableSelection = true;
                        e.cancel = true;
                        inputElement.animate({ backgroundColor: '#449D44' }, 200);
                        inputElement.animate({ backgroundColor: 'rgba(0, 0, 0, 0)' }, 150).blur(function(e) {
                            setTimeout(function() {
                                input.focus();
                            }, 20);
                        });
                    });
                },
                textChanged: e => {
                    if (this.dropdownValue && _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection.isSingleCell) {
                        // Check if is applied label.
                        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();
                        const table = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.itemsSource;
                        const selectedCol = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection._col;
                        const selectedRow = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection._row;

                        check_label: {
                            for (let row = 0; row < table.length; row++) {
                                for (let col = 0; col < table[row].length; col++) {
                                    const cellType = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(file.cellProperties, `[${col}][${row}]['cellType']`, false);
                                    if (cellType === 'label') {
                                        let range = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(file.cellProperties, `[${col}][${row}]['range']`, false);
                                        range = XLSX.utils.decode_range(range);
                                        const cellVal = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.getCellData(row, col, true);

                                        if (
                                            cellVal === this.dropdownValue &&
                                            selectedCol >= range.s.c &&
                                            selectedCol <= range.e.c &&
                                            selectedRow >= range.s.r &&
                                            selectedRow <= range.e.r
                                        ) {
                                            if (
                                                !confirm(
                                                    'This value was applied by a label. Are you sure you want to change it?'
                                                )
                                            ) {
                                                $(e._e)
                                                    .find('input')
                                                    .val(this.dropdownValue);
                                                this.dropdownValue = '';
                                                document.activeElement.blur();
                                                if (this.appliedLabelChangeCounter) {
                                                    this.appliedLabelChangeCounter--;
                                                }

                                                return false;
                                            } else {
                                                // file.cellProperties[selectedCol][selectedRow]['appliedLabelWarning'] = true;
                                                this.appliedLabelChangeCounter++;
                                                this.dropdownValue = input.text;
                                            }

                                            break check_label;
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                onLostFocus: () => {
                    this.dropdownValue = '';
                    _tabs_source_data_add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_4__["addFileSteps"].fileWorkflow.enableModal();
                }
            });
            input._kosmosField = field.slug;
            this.modalInputs.push(input);

            // Default value.
            if (field.slug in inputFields) {
                if (_tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection.isSingleCell) {
                    input._setText(inputFields[field.slug]);
                } else {
                    if (Array.isArray(inputFields[field.slug])) {
                        if (inputFields[field.slug].length > 1) {
                            input._setText('Multiple values');
                        } else if (inputFields[field.slug].length === 1) {
                            input._setText(inputFields[field.slug][0]);
                        } else {
                            input._setText('');
                        }
                    }
                }
            } else {
                input._setText('');
            }

            // Add events.
            input.textChanged.addHandler(() => {
                this.hasUnsavedChanges = true;
            });
        }
    }

    displayContentForCellModal(activeCell) {
        // Set title of cell modal.
        $('#tableCellModal .modal-title').text(activeCell.text());

        // Add Data | Label switch.
        if (!$('#tableCellModal ._data-label-switch').length) {
            const labelInput =
                '<label class="_modal-switch-label-left"><input disabled type="radio" id="cellModalSwitchData" name="data-label-switch" value="data">Data</label>';
            const dataInput =
                '<label class="_modal-switch-label-middle"><input disabled type="radio" id="cellModalSwitchLabel" name="data-label-switch" value="label">Label</label>';
            const notUsedInput =
                '<label class="_modal-switch-label-right"><input disabled type="radio" id="cellModalSwitchNotUsed" name="data-label-switch" value="notUsed">Not used</label>';
            const divRadioContainer =
                '<div class="_data-label-switch">' + labelInput + dataInput + notUsedInput + '</div>';
            this.form.prepend(divRadioContainer);

            $('#tableCellModal ._data-label-switch input[type=radio][name=data-label-switch]').change(e => {
                const value = $(e.currentTarget).val();
                this.setCellTypeForCellModal(value);
            });
        }

        const file = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();
        if (_tabs_source_data_add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_5__["sourceDataEditTableCell"].newCellIsBeingEdited) {
            _tabs_source_data_add_file_workflow_SourceDataEditTableCell__WEBPACK_IMPORTED_MODULE_5__["sourceDataEditTableCell"].newCellIsBeingEdited = false;

            let sel = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection;
            const cellType = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(file, `cellProperties[${sel.leftCol}][${sel.topRow}].cellType`);
            this.setCellTypeForCellModal(cellType);
        }
    }

    displayContentForCellsModal() {
        const grid = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid;
        let sel = grid.selection;
        let cellType = '';
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].getCurrentProject();
        const sourceFile = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile();
        let inputFields = {};
        project.getDimensions().map(dimension => {
            inputFields[dimension.slug] = [];
        });
        inputFields['cellType'] = [];
        inputFields['dataPointId'] = [];

        // Set title of cell modal.
        const modalTitle = XLSX.utils.encode_range({
            s: { r: sel.topRow, c: sel.leftCol },
            e: { r: sel.bottomRow, c: sel.rightCol }
        });
        $('#tableCellModal .modal-title').text(modalTitle);

        this.labelMultipleDimensions = [];
        for (let row = sel.topRow; row <= sel.bottomRow; row++) {
            for (let col = sel.leftCol; col <= sel.rightCol; col++) {
                const cellProperties = sourceFile.getSingleCellProperties(row, col);

                if (cellProperties.cellType === 'label') {
                    if (cellType !== 'data') {
                        cellType = 'label';
                    }

                    if (_tabs_source_data_add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_4__["addFileSteps"].ingestionStep === _tabs_source_data_add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_4__["addFileSteps"].DEFINE_DATA_STEP) {
                        let dimension = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(cellProperties, `['labelDimension'][0]`);
                        dimension = dimension ? dimension : '';
                        this.labelMultipleDimensions = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])(this.labelMultipleDimensions, [dimension]);

                        let overwriteValue = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(cellProperties, `['overwriteValue'][0]`);
                        overwriteValue = overwriteValue ? overwriteValue : '';
                        this.labelMultipleOverwriteValues = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])(this.labelMultipleOverwriteValues, [overwriteValue]);
                    }
                }

                if (cellProperties.cellType === 'data') {
                    cellType = 'data';
                } else {
                    continue;
                }

                // Prepare inputFields.
                Object.keys(inputFields).forEach(function(key) {
                    if (cellProperties[key]) {
                        inputFields[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])(inputFields[key], [cellProperties[key]]);
                    } else {
                        if (key !== 'cellType' && key !== 'dataPointId') {
                            if (inputFields[key].length) {
                                inputFields[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["union"])(inputFields[key], ['']);
                            } else {
                                inputFields[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["concat"])(inputFields[key], ['']);
                            }
                        }
                    }
                });
            }
        }

        this.multipleCellsInputFields = inputFields;

        this.setCellTypeForCellModal(cellType);
    }

    // Get the common value for the currect selection of cells, or a string indicating multiple values.
    getCommonValueForSelection(property) {
        const sel = _tabs_source_data_SourceDataFiles__WEBPACK_IMPORTED_MODULE_7__["sourceDataFiles"].flexGrid.selection;
        const fileCellProperties = _services_SourceFilesService__WEBPACK_IMPORTED_MODULE_2__["sourceFilesService"].getCurrentSourceFile().cellProperties;
        let values = {};

        // Get all values.
        for (let col = sel.leftCol; col <= sel.rightCol; col++) {
            for (let row = sel.topRow; row <= sel.bottomRow; row++) {
                let value = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(fileCellProperties, `[${col}][${row}][${property}]`);

                if (!value && value !== 0) {
                    value = '';
                }

                values[value] = true;
            }
        }
        values = Object.keys(values);

        if (values.length > 1) {
            return 'Multiple values';
        } else if (values.length === 1) {
            return values[0];
        }

        return '';
    }

    setCommonProperty(object, property, value) {
        if (value === 'Multiple values') {
            return;
        }

        object[property] = value;
    }
}

const sourceDataTableCellModal = new SourceDataTableCellModal();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-manual-workflow/AddManualSidebar.js":
/*!********************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-manual-workflow/AddManualSidebar.js ***!
  \********************************************************************************/
/*! exports provided: addManualSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addManualSidebar", function() { return addManualSidebar; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js");
/* harmony import */ var _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tabs/source-data/add-manual-workflow/AddManualTable */ "./src/assets/js/tabs/source-data/add-manual-workflow/AddManualTable.js");
/* harmony import */ var _tabs_source_data_source_data_structures_SourceDataStructures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../tabs/source-data/source-data-structures/SourceDataStructures */ "./src/assets/js/tabs/source-data/source-data-structures/SourceDataStructures.js");
/* harmony import */ var _tabs_source_data_SourceData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../tabs/source-data/SourceData */ "./src/assets/js/tabs/source-data/SourceData.js");
/* harmony import */ var _tabs_source_data_SourceDataPointsSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../tabs/source-data/SourceDataPointsSidebar */ "./src/assets/js/tabs/source-data/SourceDataPointsSidebar.js");
/* harmony import */ var _tabs_source_data_SourceDataService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../tabs/source-data/SourceDataService */ "./src/assets/js/tabs/source-data/SourceDataService.js");










class AddManualSidebar {
    constructor() {
        this.ingestionStep = 1;
        this.inputs = [];
        this.container = $('#add_manual_workflow');
        this.dataStructuresContainer = this.container.find('._data-structures');

        this.sourceDataStructures = new _tabs_source_data_source_data_structures_SourceDataStructures__WEBPACK_IMPORTED_MODULE_5__["SourceDataStructures"](
            this.dataStructuresContainer,
            () => {
                this.sourceDataStructures.sync();
            },
            true
        );
        /** @type {Project} */
        this.project = null;

        this.columnDefs = [];
        this.tableColumns = [];
    }

    init() {
        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].manualWorkflowContent();

        $('#add_manual_sidebar ._ingestion-steps ._back').on('click', () => this.addManualPrevStep());
        $('#add_manual_sidebar ._ingestion-steps ._next').on('click', () => this.addManualNextStep());

        this.form = $('#add_manual_form');
        this.fieldsContainer = this.form.find('._fields');
        this.fieldTemplate = this.form
            .find('._template')
            .removeClass('_template')
            .detach();

        $('#add_manual_sidebar ._cancel').on('click', () => {
            this.cancelWorkflow();
        });
        this.form.find('._add-data-point').on('click', () => {
            this.addDataPoint();
        });
        this.form.find('._delete-data-point').on('click', () => {
            this.deleteDataPoint();
        });
        this.form.find('._save-data-point').on('click', () => {
            this.saveChanges(true);
        });
        this.form.find('._clear').on('click', () => {
            this.clearAllFields();
        });
        $('#add_manual_sidebar ._dimensions-section ._add-custom-dimension').on('click', () => {
            _tabs_source_data_SourceDataPointsSidebar__WEBPACK_IMPORTED_MODULE_7__["sourceDataPointsSidebar"].addCustomDimension();
            this.sync();
            _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();
        });
        this.columnsSelect = new wijmo.input.MultiSelect(
            $('#add_manual_sidebar ._dimensions-section ._column-selector')[0],
            {
                placeholder: 'Select Columns',
                itemsSource: [],
                headerFormat: '{count} columns selected',
                displayMemberPath: 'label',
                checkedMemberPath: 'selected',
                onCheckedItemsChanged: () => {
                    this.updateDimensions();
                }
            }
        );
        $('#add_manual_sidebar ._dimensions-section ._column-selector').on('click', () => {
            $('.wj-listbox-item input').prop('disabled', this.ingestionStep !== 1);
            $('.wj-listbox-item label').each(function() {
                if (
                    $(this)
                        .text()
                        .replace(/\s/g, '') === 'Scale'
                ) {
                    $(this)
                        .find('input')
                        .prop('disabled', true);
                }
            });
        });

        this.form.on('click', '._lock-container', e => {
            const $this = $(e.currentTarget);
            const input = $this.find('input');
            const checked = !input.prop('checked');
            input.prop('checked', checked);
            $this.toggleClass('_checked', checked);
        });
    }

    sync() {
        this.columnDefs = _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_3__["sourceDataFilesSidebar"].getAvailableColumns();
        this.columnsSelect.itemsSource = this.columnDefs;
        this.displayForm();
    }

    displayForm() {
        // Save settings for previous stuff.
        const lockedFields = this.getLockedFields();

        // Remove previous stuff.
        this.inputs = [];
        this.form.find('._field').remove();

        // Add fields.
        let fields = [
            {
                slug: 'value',
                label: 'Value',
                selected: true
            }
        ];
        fields = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat([], fields, this.columnDefs);

        fields.forEach(field => {
            if (field.selected || field.slug === 'value') {
                const e = this.fieldTemplate.clone();
                e.find('._name').text(field.label);
                this.fieldsContainer.append(e);

                if (!this.project) {
                    this.project = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(_services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject());
                }
                let values = _tabs_source_data_SourceDataService__WEBPACK_IMPORTED_MODULE_8__["sourceDataService"].getAvailableValuesForField(field, this.project);

                // Create input.
                let input;
                if (field.slug === 'value') {
                    input = new wijmo.input.InputNumber(e.find('._input')[0], {
                        format: 'g10',
                        isRequired: false,
                        value: null
                    });
                } else {
                    input = new wijmo.input.AutoComplete(e.find('._input')[0], {
                        itemsSource: values
                    });
                }
                input._kosmosField = field.slug;
                this.inputs.push(input);

                // Default value and lock
                if (field.slug in lockedFields) {
                    input._setText(lockedFields[field.slug]);
                    this.getInputLock(input).prop('checked', true);
                } else {
                    input._setText('');
                }
            }
        });
    }

    getInputLock(input) {
        return $(input._e)
            .closest('._field')
            .find('._lock');
    }

    isInputLocked(input) {
        return this.getInputLock(input).is(':checked');
    }

    getLockedFields() {
        const lockedFields = {};

        this.inputs.forEach(input => {
            if (this.isInputLocked(input)) {
                lockedFields[input._kosmosField] = input.text;
            }
        });

        return lockedFields;
    }

    getDataPointFromForm() {
        // Get point.
        const dataPoint = {};
        this.inputs.forEach(input => {
            if (input._kosmosField === 'value') {
                dataPoint[input._kosmosField] = input.value;
            } else {
                dataPoint[input._kosmosField] = input.text;
            }
        });
        dataPoint.value = parseFloat(dataPoint.value);
        dataPoint.scale = parseInt(dataPoint.scale);

        return dataPoint;
    }

    addDataPoint() {
        const dataPoint = this.getDataPointFromForm();

        const validation = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject().validateDataPoint(dataPoint);
        if (validation.success === false) {
            alert(validation.error);

            return;
        }

        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].tableSource.push(dataPoint);

        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].sync();
        this.setSelectedItem(null);
    }

    saveChanges() {
        const dataPoint = this.getDataPointFromForm();

        const validation = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject().validateDataPoint(dataPoint);
        if (validation.success === false) {
            alert(validation.error);

            return;
        }

        const row = _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].flexgrid.selection.row;
        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].tableSource[row] = dataPoint;
        this.setSelectedItem(null);
        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].sync();
    }

    deleteDataPoint() {
        const row = _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].flexgrid.selection.row;
        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].tableSource.splice(row, 1);

        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].sync();
    }

    clearAllFields() {
        this.form.find('._lock').prop('checked', false);
        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].flexgrid.select(-1, -1);
        this.setSelectedItem(null);
    }

    setSelectedItem(item) {
        this.selectedItem = item;

        if (!item) {
            item = this.getLockedFields();
        }

        // Set fields.
        this.inputs.forEach(input => {
            const field = input._kosmosField;

            if (item && field in item) {
                if (field === 'value') {
                    input.value = parseFloat(item[field]);
                } else {
                    input._setText(item[field]);
                }
            } else {
                if (field === 'value') {
                    input.value = null;
                } else {
                    input._setText('');
                }
            }
        });
    }

    addManualPrevStep() {
        if (this.ingestionStep === 1) {
            return;
        }
        this.ingestionStep--;
        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].manualWorkflowContent();
        this.syncDimensionsContainer();
    }

    addManualNextStep() {
        if (this.ingestionStep === 3) {
            this.finishStep();

            return;
        }

        this.ingestionStep++;

        if (this.ingestionStep === 2) {
            this.secondStep();
        }

        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].manualWorkflowContent();
        this.syncDimensionsContainer();
    }

    secondStep() {
        // Remove unselected dimensions from table source.
        this.columnDefs.map(dimension => {
            if (!dimension.selected) {
                _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].tableSource.map(dataPoint => {
                    dataPoint[dimension.slug] = '';
                });
            }
        });

        // Load data structures.
        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject();

        // Copy current project and add new data points into it.
        /** @type {Project} */
        this.project = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_1___default()(project);
        this.project.dataPoints = this.project.dataPoints.concat(_tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].tableSource);

        // Use new project for data-structures screen.
        this.sourceDataStructures.setProject(this.project);
        this.sourceDataStructures.sync();

        // Refresh FlexGrid.
        window.dispatchEvent(new Event('resize'));
    }

    finishStep() {
        // Add new Data Points.
        let dataPoints = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat([], _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].tableSource);
        let success = true;
        let successCount = 0;
        let errors = '';
        let totalInitialDataPoints = dataPoints.length;

        for (let i = 0; i < dataPoints.length; i++) {
            let dataPoint = dataPoints[i];
            dataPoint.source = 'manual';
            const result = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject().addDataPoint(dataPoint);

            if (!result.success) {
                success = false;
                errors += 'Error for data-point with the value = ' + dataPoint.value + ': ' + result.error + '\n';
            } else {
                successCount++;
                dataPoints.splice(i, 1);
                i--;
            }
        }
        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].tableSource = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat([], dataPoints);

        // Add data structures.
        addManualSidebar.sourceDataStructures.addDataStructuresFromProject(this.project);

        _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].saveCurrentProject();
        _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].syncViews();

        this.ingestionStep = 1;
        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].manualWorkflowContent();

        if (success) {
            alert('Your changes have been saved successfully.');

            _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].flexgrid.itemsSource = _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].tableSource;
            _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].flexgrid.collectionView.refresh();

            $("input[name=source_data_mode][value='data_points']").prop('checked', true);
            $("input[name=source_data_mode][value='data_points']")
                .parent()
                .addClass('active');
            $("input[name=source_data_mode][value='manual_workflow']")
                .parent()
                .removeClass('active');
            $('.main-options-container input[name=source_data_mode]').change();
        } else {
            alert(
                successCount +
                    '/' +
                    totalInitialDataPoints +
                    ' data-points were saved. The following errors have occurred: ' +
                    '\n' +
                    errors
            );

            _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].flexgrid.itemsSource = _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].tableSource;
            _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].flexgrid.collectionView.refresh();
        }
    }

    cancelWorkflow() {
        const confirmation = confirm('Are you sure you want to cancel? You will lose all your progress.');

        if (!confirmation) {
            return;
        }

        _tabs_source_data_SourceData__WEBPACK_IMPORTED_MODULE_6__["sourceData"].endWorkflow();
        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].tableSource = [];
        this.ingestionStep = 1;
        this.setSelectedItem(null);
        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].sync();
    }

    updateDimensions() {
        this.displayForm();

        let itemsSource = [
            {
                slug: '__normalized_value',
                label: 'Normalized Value',
                selected: true,
                isReadOnly: true
            },
            {
                slug: 'value',
                label: 'Value',
                selected: true
            }
        ];
        itemsSource = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.concat([], itemsSource, this.columnDefs);
        this.tableColumns = itemsSource;
        _tabs_source_data_add_manual_workflow_AddManualTable__WEBPACK_IMPORTED_MODULE_4__["addManualTable"].sync();
    }

    syncDimensionsContainer() {
        $('#add_manual_sidebar ._dimensions-section ._add-custom-dimension').prop('disabled', this.ingestionStep !== 1);
    }
}

const addManualSidebar = new AddManualSidebar();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/add-manual-workflow/AddManualTable.js":
/*!******************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/add-manual-workflow/AddManualTable.js ***!
  \******************************************************************************/
/*! exports provided: addManualTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addManualTable", function() { return addManualTable; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/AddFileSteps */ "./src/assets/js/tabs/source-data/add-file-workflow/AddFileSteps.js");
/* harmony import */ var _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tabs/source-data/add-file-workflow/SourceDataFilesSidebar */ "./src/assets/js/tabs/source-data/add-file-workflow/SourceDataFilesSidebar.js");
/* harmony import */ var _tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../tabs/source-data/add-manual-workflow/AddManualSidebar */ "./src/assets/js/tabs/source-data/add-manual-workflow/AddManualSidebar.js");
/* harmony import */ var _tabs_source_data_SourceDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../tabs/source-data/SourceDataService */ "./src/assets/js/tabs/source-data/SourceDataService.js");








class AddManualTable {
    constructor() {
        this.tableSource = [];
        this.columnDefs = [];
        this.scale = 1;
        this.inUpdatedLayout = false;
    }

    init() {
        _tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__["addManualSidebar"].init();

        this.flexgrid = new wijmo.grid.FlexGrid('#add_manual_workflow ._table', {
            isReadOnly: false,
            selectionMode: 'Row',
            itemsSource: this.tableSource,
            autoGenerateColumns: false,
            formatItem: (s, e) => {
                if (e.panel === s.cells) {
                    let item = s.rows[e.row].dataItem;

                    switch (s.columns[e.col].binding) {
                        case 'value':
                            e.cell.childNodes[0].nodeValue = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].formatNumber(item.value);
                            break;

                        case '__normalized_value':
                            e.cell.innerHTML = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].formatNumber(item['__normalized_value'] / this.scale);
                            break;

                        case 'scale':
                            // e.cell.innerHTML = item.scale;
                            break;
                    }
                }
            },
            selectionChanged: (s, e) => {
                const selection = this.flexgrid.selection;
                let item;

                if (selection._row in s.rows) {
                    item = s.rows[selection._row].dataItem;
                } else {
                    item = null;
                }

                _tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__["addManualSidebar"].setSelectedItem(item);
            },
            updatedLayout: () => {
                if (this.inUpdatedLayout) {
                    this.inUpdatedLayout = false;
                } else {
                    this.inUpdatedLayout = true;
                    this.flexgrid.autoSizeRow(0, true);
                }
            },
            beginningEdit: (s, e) => {
                const col = s.columns[e.col];

                // User is allowed to edit?
                if (_tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__["addManualSidebar"].ingestionStep !== 1) {
                    e.cancel = true;
                    return;
                }

                // if (col.binding === 'value') {
                //     e.cancel = true;
                //     return;
                // }

                // Get column definition.
                const columnDef = this.columnDefs.find(column => {
                    return column.slug === col.binding;
                });

                // Update data map.
                if (col.dataMap) {
                    col.dataMap = _tabs_source_data_SourceDataService__WEBPACK_IMPORTED_MODULE_6__["sourceDataService"].getDataMapForDimension(
                        columnDef.dimension,
                        _tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__["addManualSidebar"].project
                    );
                }

                // Always format as general cell, not as number.
                col.format = 'g';
            },
            cellEditEnding: (s, e) => {
                // Check if value has been changed.
                const oldVal = s.getCellData(e.row, e.col);
                const newVal = s.activeEditor.value;
                if ((typeof oldVal === 'string' && oldVal === newVal) || _Common__WEBPACK_IMPORTED_MODULE_1__["common"].isDeltaZero(oldVal - newVal)) {
                    e.cancel = true;
                }

                // Validate.
                const col = s.columns[e.col];
                const dataPoint = Object.assign({}, s.rows[e.row].dataItem);
                dataPoint[col.binding] = newVal;
                const validation = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject().validateDataPoint(dataPoint);
                if (validation.success === false) {
                    e.cancel = true;
                    alert(validation.error);
                }
            },
            cellEditEnded: (s, e) => {
                // Edit was cancelled?
                if (e.cancel) {
                    return;
                }

                // TODO: Show loading screen.
                const dataPoint = s.rows[e.row].dataItem;
                const row = addManualTable.flexgrid.selection.row;
                this.tableSource[row] = dataPoint;

                addManualTable.sync();
                _tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__["addManualSidebar"].setSelectedItem(dataPoint);
            }
        });
    }

    sync() {
        this.manualWorkflowContent();

        // Columns
        if (_tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__["addManualSidebar"].tableColumns.length) {
            this.columnDefs = _tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__["addManualSidebar"].tableColumns;
        } else {
            this.columnDefs = _tabs_source_data_add_file_workflow_SourceDataFilesSidebar__WEBPACK_IMPORTED_MODULE_4__["sourceDataFilesSidebar"].getAvailableColumns(true, true);
        }
        this.updateColumns();

        // Data points
        let dataPoints = this.tableSource;
        this.setData(dataPoints);
    }

    manualWorkflowContent() {
        // Hightlight selected step in ingestion header.
        $('#add_manual_workflow ._manual-ingestion-steps-display ._step').removeClass('highlight-step');
        $(
            '#add_manual_workflow ._manual-ingestion-steps-display ._step[data-step=' +
                _tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__["addManualSidebar"].ingestionStep +
                ']'
        ).addClass('highlight-step');

        // Prev and next buttons
        $('#add_manual_sidebar ._ingestion-steps ._next').text(_tabs_source_data_add_file_workflow_AddFileSteps__WEBPACK_IMPORTED_MODULE_3__["addFileSteps"].ingestionStep < 3 ? 'Next' : 'Finish');
        $('#add_manual_sidebar ._ingestion-steps ._back').css(
            'display',
            _tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__["addManualSidebar"].ingestionStep === 1 ? 'none' : ''
        );

        // Misc
        $('#add_manual_sidebar #add_manual_form').css('display', _tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__["addManualSidebar"].ingestionStep === 1 ? '' : 'none');
        $('#add_manual_workflow ._data-structures').css('display', _tabs_source_data_add_manual_workflow_AddManualSidebar__WEBPACK_IMPORTED_MODULE_5__["addManualSidebar"].ingestionStep === 2 ? '' : 'none');
    }

    updateColumns() {
        this.flexgrid.columns.length = 0;
        this.columnDefs.forEach(column => {
            if (!column.selected) {
                return;
            }

            // Add column to grid.
            const gridCol = new wijmo.grid.Column();
            gridCol.binding = column.slug;
            gridCol.header = column.label;
            gridCol.dataMap = column.dataMap;
            gridCol.isReadOnly = column.isReadOnly;
            this.flexgrid.columns.push(gridCol);
        });
    }

    setData(dataset) {
        dataset = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(dataset);

        const project = _services_StorageService__WEBPACK_IMPORTED_MODULE_2__["storageService"].getCurrentProject();
        // const sourceFiles = project.sourceFiles;

        dataset = dataset.map(item => {
            // Normalize values.
            item['__normalized_value'] = item.value * _Common__WEBPACK_IMPORTED_MODULE_1__["common"].parseScale(item.scale) * _Common__WEBPACK_IMPORTED_MODULE_1__["common"].parseInverse(item.inverse);

            // Process dimensions.
            item = project.addDataStructuresToDataPoint(item);

            return item;
        });

        // Save view.
        const sortDescriptions = this.flexgrid.collectionView.sortDescriptions;
        const scrollPosition = this.flexgrid.scrollPosition;
        const selection = this.flexgrid.selection;

        // Update data source.
        this.flexgrid.itemsSource = dataset;
        this.flexgrid.collectionView.refresh();
        this.updateColumns();

        // Load view.
        if (sortDescriptions.length > 0) {
            this.flexgrid.collectionView.sortDescriptions.push(sortDescriptions[0]);
        }
        this.flexgrid.scrollPosition = scrollPosition;
        this.flexgrid.select(selection);
    }
}

const addManualTable = new AddManualTable();


/***/ }),

/***/ "./src/assets/js/tabs/source-data/source-data-structures/SourceDataStructureSets.js":
/*!******************************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/source-data-structures/SourceDataStructureSets.js ***!
  \******************************************************************************************/
/*! exports provided: SourceDataStructureSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceDataStructureSets", function() { return SourceDataStructureSets; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _entities_Dimension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../entities/Dimension */ "./src/assets/js/entities/Dimension.js");
/* harmony import */ var _tabs_source_data_source_data_structures_SourceDataStructureValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tabs/source-data/source-data-structures/SourceDataStructureValidator */ "./src/assets/js/tabs/source-data/source-data-structures/SourceDataStructureValidator.js");





class SourceDataStructureSets {
    constructor(container, saveHandler) {
        this.container = container;
        /** @type {Function} */
        this.saveHandler = saveHandler;
        /** @type {Project} */
        this.project = null;
        this.validFilterSelect = this.container.find('._filterByState select');
        this.autoReconcileButton = this.container.find('._auto-reconcile');
        this.setsTable = this.container.find('._setsTable');
        this.modal = this.container.find('.modal');
        this.sourceDataStructureValidator = new _tabs_source_data_source_data_structures_SourceDataStructureValidator__WEBPACK_IMPORTED_MODULE_3__["SourceDataStructureValidator"]();
        this.dataset = null;
        this.validFilter = 'invalid';
        /** @type {Dimension} */
        this.dimension = null;
        this.inUpdatedLayout = false;
        if (!localStorage.getItem('blobExcelData'))
            this.flexgrid = new wijmo.grid.FlexGrid(this.setsTable, {
                isReadOnly: true,
                allowSorting: false,
                selectionMode: 'None',
                itemsSource: [],
                autoGenerateColumns: false,
                childItemsPath: 'children',
                formatItem: (s, e) => {
                    // Row headers
                    if (e.panel.cellType === wijmo.grid.CellType.RowHeader) {
                        const item = s.rows[e.row].dataItem;
                        if (item.children && !item.valid) {
                            // Create checkbox.
                            e.cell.innerHTML = '<input type="checkbox">';
                            const checkbox = e.cell.firstChild;
                            checkbox.checked = item.selected ? true : false;

                            // On click, update selection for this row and all children as well.
                            checkbox.addEventListener('change', () => {
                                this.flexgrid.beginUpdate();
                                item.selected = checkbox.checked;
                                item.children.forEach(child => {
                                    child.selected = checkbox.checked;
                                });
                                this.flexgrid.endUpdate();
                                this.updateAutoReconcileButton();
                            });
                        } else {
                            e.cell.innerHTML = '';
                        }
                    }

                    // Top-left cell
                    if (e.panel.cellType === wijmo.grid.CellType.TopLeft) {
                        // Count selected items.
                        let selected = 0,
                            total = 0;
                        this.flexgrid.rows.forEach(row => {
                            const item = row.dataItem;
                            if (!item.children || item.valid) {
                                return;
                            }
                            if (item.selected) {
                                selected++;
                            }
                            total++;
                        });

                        // Create checkbox.
                        e.cell.innerHTML = '<input type="checkbox">';
                        const checkbox = e.cell.firstChild;
                        checkbox.checked = selected > 0 && selected === total;
                        checkbox.indeterminate = selected > 0 && selected !== total;

                        // On click, update selection for all rows.
                        checkbox.addEventListener('change', () => {
                            this.flexgrid.beginUpdate();
                            this.flexgrid.rows.forEach(row => {
                                const item = row.dataItem;
                                if (!item.children || item.valid) {
                                    return;
                                }
                                item.selected = checkbox.checked;
                                item.children.forEach(child => {
                                    child.selected = checkbox.checked;
                                });
                            });
                            this.flexgrid.endUpdate();
                            this.updateAutoReconcileButton();
                        });
                    }

                    // Regular cells
                    if (e.panel === s.cells) {
                        const sourceFiles = this.project.sourceFiles;
                        const item = s.rows[e.row].dataItem;
                        const binding = s.columns[e.col].binding;

                        // Update "source" column.
                        switch (binding) {
                            case 'source':
                                // Get name.
                                if (item.source === 'manual') {
                                    e.cell.innerHTML = 'Manual';
                                } else if (item.source in sourceFiles) {
                                    e.cell.innerHTML = sourceFiles[item.source].name;
                                }
                                break;

                            case 'value':
                                if (!item.children && !item.isDelta) {
                                    e.cell.innerHTML = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].formatNumber(item.value);
                                }
                                break;

                            case '__normalized_value':
                                if (!item.children) {
                                    e.cell.innerHTML = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].formatNumber(item['__normalized_value']);
                                }
                                break;

                            case 'scale':
                                if (item.scale) {
                                    e.cell.innerHTML = item.scale;
                                }
                                break;
                        }

                        // Make parents bold.
                        if (item.children) {
                            e.cell.style.fontWeight = 'bold';
                        } else {
                            e.cell.style.fontWeight = '';
                        }

                        if (item.isDelta) {
                            if (_Common__WEBPACK_IMPORTED_MODULE_1__["common"].isDeltaZero(item['__normalized_value'])) {
                                e.cell.style.color = 'green';
                            } else {
                                e.cell.style.color = 'red';
                            }
                        } else {
                            // Apply selection.
                            e.cell.style.color = item.selected ? 'white' : '';
                        }

                        // Parent or last in set?
                        if (
                            (binding === '__normalized_value' || binding === this.dimension.slug) &&
                            (item._isLastParent || item._isLast)
                        ) {
                            e.cell.style.borderBottom = '2px solid #aaa';
                        } else {
                            e.cell.style.borderBottom = '';
                        }

                        // Apply selection.
                        e.cell.style.background = item.selected ? '#80adbf' : '';
                    }
                },
                updatedLayout: () => {
                    if (this.inUpdatedLayout) {
                        this.inUpdatedLayout = false;
                    } else {
                        this.inUpdatedLayout = true;
                        this.flexgrid.autoSizeRow(0, true);
                    }
                }
            });

        // Filter
        this.validFilterSelect.on('change', () => {
            this.validFilter = this.validFilterSelect.val();
            this.flexgrid.collectionView.refresh();
        });

        // Show auto-reconcile modal.
        this.autoReconcileButton.on('click', () => {
            // Populate values.
            const list = this.container.find('._list-of-inputs');
            list.html('');
            list.append(
                '<div><label><input type="radio" value="' +
                    this.dataset.value +
                    '" name="attribute"> ' +
                    this.dataset.value +
                    ' (parent)</label></div>'
            );
            this.dataset.childValues.forEach(child => {
                list.append(
                    '<div><label><input type="radio" value="' +
                        child +
                        '" name="attribute"> ' +
                        child +
                        '</label></div>'
                );
            });

            this.modal.modal('show');
        });

        // Apply auto-reconciliation.
        this.modal.find('._apply').on('click', () => {
            const dfar = this.project.getDimensionForAutoReconciliations();

            // Get selected options.
            let value = this.modal.find('input[name=attribute]:checked').attr('value');
            if (value === '_new') {
                value = this.modal.find('input[name=new_attribute]').val();

                if (value) {
                    this.project.addDataStructure(
                        this.dimension.slug,
                        value,
                        this.dataset.value,
                        this.dataset.group,
                        ''
                    );
                    this.dataset.childValues.push(value);
                }
            }
            if (!value) {
                return;
            }

            // Take each selected group.
            this.flexgrid.rows.forEach(row => {
                const group = row.dataItem;

                if (group.valid || !group.selected) {
                    return;
                }

                // Get delta.
                let delta = 0;
                if (value === this.dataset.value) {
                    delta = -group.delta;
                } else {
                    delta = group.delta;
                }

                // Get data-point that needs to be adjusted.
                let dataPoint = Object.assign({}, group.dimensions);
                dataPoint[dfar.dimension] = dfar.value;
                dataPoint.source = 'manual';
                dataPoint[this.dimension.slug] = value;
                let matchingDataPoint = this.project.getMatchingDataPoint(dataPoint);
                if (matchingDataPoint) {
                    dataPoint = Object.assign({}, matchingDataPoint);
                } else {
                    dataPoint.value = 0;
                    dataPoint.scale = 1;
                }
                dataPoint.value += delta / dataPoint.scale;

                // Persist changes.
                this.project.addDataPoint(dataPoint);
            });

            // Force update of sets.
            delete this.dataset.groups;
            this.saveHandler();

            // Close modal.
            this.modal.modal('hide');
        });
    }

    setProject(project) {
        this.project = project;
        this.sourceDataStructureValidator.setProject(project);
    }

    sync() {
        this.setData(this.dataset);
    }

    setData(dataset) {
        dataset = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(dataset);
        this.dataset = dataset;
        if (!dataset) {
            return;
        }
        this.dimension = dataset.dimension;

        if (!dataset.groups) {
            const result = this.sourceDataStructureValidator.validateParentAndChildren(
                this.dimension.slug,
                dataset.value,
                dataset.childValues
            );
            Object.assign(dataset, result);
        }

        const items = [];
        dataset.groups.forEach(row => {
            const children = [];

            // Add child data-points.
            for (const i in row.dataPoints) {
                const dataPoint = row.dataPoints[i];
                dataPoint['__normalized_value'] =
                    dataPoint.value * _Common__WEBPACK_IMPORTED_MODULE_1__["common"].parseScale(dataPoint.scale) * _Common__WEBPACK_IMPORTED_MODULE_1__["common"].parseInverse(dataPoint.inverse);
                children.push(dataPoint);
            }

            // Add child for delta value.
            const child = {};
            child['__normalized_value'] = row.delta;
            child[this.dimension.slug] = 'Delta';
            child.isDelta = true;
            children.push(child);

            // Add parent.
            const item = Object.assign({}, row, {
                attribute: 'Set #' + (items.length + 1),
                valid: row.valid,
                children: children
            });

            items.push(item);
        });
        this.flexgrid.itemsSource = items;

        // Get columns.
        let dimensions = this.project.getDimensions();
        {
            dimensions.push(
                new _entities_Dimension__WEBPACK_IMPORTED_MODULE_2__["Dimension"]({
                    slug: 'source',
                    label: 'Source'
                })
            );

            dimensions.unshift(
                new _entities_Dimension__WEBPACK_IMPORTED_MODULE_2__["Dimension"]({
                    slug: '__normalized_value',
                    label: 'Normalized Value',
                    dataType: wijmo.DataType.Number
                })
            );

            // Always put the selected dimension on the 1st column.
            let selectedDimension;
            for (let i = 0; i < dimensions.length; i++) {
                if (dimensions[i].slug === this.dimension.slug) {
                    selectedDimension = dimensions[i];
                    dimensions.splice(i, 1);
                    break;
                }
            }
            dimensions.splice(0, 0, selectedDimension);
        }

        // Add columns in flexgrid.
        this.flexgrid.columns.length = 0;
        dimensions.forEach(dimension => {
            const col = new wijmo.grid.Column();
            col.binding = dimension.slug;
            col.header = dimension.label;
            if (dimension.dataType) {
                col.dataType = dimension.dataType;
            }
            this.flexgrid.columns.push(col);
        });

        // Filter
        this.flexgrid.collectionView.filter = item => {
            if (this.validFilter === 'valid') {
                return item.valid;
            }

            if (this.validFilter === 'invalid') {
                return !item.valid;
            }

            return true;
        };
        if (!dataset.invalid && this.validFilter === 'invalid') {
            this.validFilterSelect.val('all').trigger('change');
        }
        this.updateAutoReconcileButton();
    }

    updateAutoReconcileButton() {
        const selected = this.flexgrid.rows.reduce((selected, row) => {
            if (row.dataItem.selected) {
                selected++;
            }

            return selected;
        }, 0);

        this.autoReconcileButton.attr('disabled', selected === 0);
    }
}


/***/ }),

/***/ "./src/assets/js/tabs/source-data/source-data-structures/SourceDataStructureValidator.js":
/*!***********************************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/source-data-structures/SourceDataStructureValidator.js ***!
  \***********************************************************************************************/
/*! exports provided: SourceDataStructureValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceDataStructureValidator", function() { return SourceDataStructureValidator; });
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _entities_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../entities/Project */ "./src/assets/js/entities/Project.js");
/* harmony import */ var _MultiLevelHashMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../MultiLevelHashMap */ "./src/assets/js/MultiLevelHashMap.js");




class SourceDataStructureValidator {
    constructor() {
        /** @type {Project} */
        this.project = null;
    }

    setProject(project) {
        this.project = project;
    }

    /**
     * Validate a value (e.g. Gross Profit). Optionally provide a group (e.g. the Countries group for Net Revenue).
     *
     * @param dimension
     * @param parent
     * @param group
     * @returns {*}
     */
    validateValue(dimension, parent, group) {
        const dataStructures = this.project.getDataStructuresForDimension(dimension);

        // Get children.
        const children = [];
        for (let value in dataStructures) {
            /** @type {DataStructure} */
            const thisDataStructure = dataStructures[value];
            if (thisDataStructure.parentAttribute !== parent) {
                continue;
            }

            // Add child.
            if (!group || thisDataStructure.group === group) {
                children.push(thisDataStructure.attribute);
            }

            // Abort if value has groups, but no group was specified.
            if (!group && thisDataStructure.group) {
                return null;
            }
        }

        if (children.length === 0) {
            return null;
        }

        return this.validateParentAndChildren(dimension, parent, children);
    }

    /**
     * Validate a given parent value and children values.
     *
     * @param dimension
     * @param parent
     * @param children
     * @returns {{groups: *, valid, invalid: number}}
     */
    validateParentAndChildren(dimension, parent, children) {
        let dimensions = this.project.getDimensionsForDataStructureValidation(dimension);

        // Group values by unique dimension-combinations.
        let map = new _MultiLevelHashMap__WEBPACK_IMPORTED_MODULE_2__["MultiLevelHashMap"](dimensions.length + 1);
        this.project.dataPoints.forEach((dataPoint, index) => {
            // Is the dimension used?
            if (parent !== dataPoint[dimension] && children.indexOf(dataPoint[dimension]) === -1) {
                return;
            }

            const key = [];
            dimensions.forEach(dimension => {
                // Undefined or an empty string must count as the same thing.
                let value = dataPoint[dimension.slug];
                if (typeof value === 'undefined') {
                    value = '';
                }

                key.push(value);
            });

            // Add copy of data-point to map.
            map.set(key.concat([dataPoint.id]), Object.assign({}, dataPoint));
        });
        let groups = map.getUniqueGroups();

        // Validate each group.
        groups = groups.map(group => {
            let data = {
                dimensions: {},
                dataPoints: Object.values(group),
                delta: 0,
                valid: true
            };

            // Reorder data-points within group.
            let parents = 0;
            data.dataPoints = data.dataPoints.reduce((a, dataPoint) => {
                if (dataPoint[dimension] === parent) {
                    // The parent dimension goes first.
                    a.unshift(dataPoint);
                    parents++;
                } else {
                    a.push(dataPoint);
                }

                return a;
            }, []);
            if (parents) {
                data.dataPoints[parents - 1]._isLastParent = true;
            }
            data.dataPoints[data.dataPoints.length - 1]._isLast = true;

            // Extract the group's common dimensions.
            dimensions.forEach(dimension => {
                data.dimensions[dimension.slug] = data.dataPoints[0][dimension.slug];
            });

            // Calculate sum of children.
            let sumOfChildren = 0;
            children.forEach(child => {
                sumOfChildren += data.dataPoints.reduce((sum, dataPoint) => {
                    if (dataPoint[dimension] === child) {
                        sum +=
                            dataPoint.value *
                            _Common__WEBPACK_IMPORTED_MODULE_0__["common"].parseScale(dataPoint.scale) *
                            _Common__WEBPACK_IMPORTED_MODULE_0__["common"].parseInverse(dataPoint.inverse);
                    }
                    return sum;
                }, 0);
            });

            // Calculate sum of parent.
            let sumOfParent = data.dataPoints.reduce((sum, dataPoint) => {
                if (dataPoint[dimension] === parent) {
                    sum +=
                        dataPoint.value * _Common__WEBPACK_IMPORTED_MODULE_0__["common"].parseScale(dataPoint.scale) * _Common__WEBPACK_IMPORTED_MODULE_0__["common"].parseInverse(dataPoint.inverse);
                }
                return sum;
            }, 0);

            // Calculate delta.
            if (this.project.calculateDeltaByAddingChildren) {
                data.delta = sumOfParent + sumOfChildren;
            } else {
                data.delta = sumOfParent - sumOfChildren;
            }

            // Is it valid?
            data.valid = _Common__WEBPACK_IMPORTED_MODULE_0__["common"].isDeltaZero(data.delta);

            return data;
        });

        // Count valid groups.
        const valid = groups.reduce((total, group) => {
            return total + (group.valid ? 1 : 0);
        }, 0);

        return {
            groups: groups,
            valid: valid,
            invalid: groups.length - valid
        };
    }
}


/***/ }),

/***/ "./src/assets/js/tabs/source-data/source-data-structures/SourceDataStructures.js":
/*!***************************************************************************************!*\
  !*** ./src/assets/js/tabs/source-data/source-data-structures/SourceDataStructures.js ***!
  \***************************************************************************************/
/*! exports provided: SourceDataStructures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceDataStructures", function() { return SourceDataStructures; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Common */ "./src/assets/js/Common.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Constants */ "./src/assets/js/Constants.js");
/* harmony import */ var _services_StorageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/StorageService */ "./src/assets/js/services/StorageService.js");
/* harmony import */ var _tabs_source_data_source_data_structures_SourceDataStructureSets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tabs/source-data/source-data-structures/SourceDataStructureSets */ "./src/assets/js/tabs/source-data/source-data-structures/SourceDataStructureSets.js");
/* harmony import */ var _tabs_source_data_source_data_structures_SourceDataStructureValidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../tabs/source-data/source-data-structures/SourceDataStructureValidator */ "./src/assets/js/tabs/source-data/source-data-structures/SourceDataStructureValidator.js");
/* harmony import */ var _tabs_source_data_SourceDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../tabs/source-data/SourceDataService */ "./src/assets/js/tabs/source-data/SourceDataService.js");








class SourceDataStructures {
    constructor(container, saveHandler, highlightChanges = false, sidebarDimensionSelector = false) {
        this.container = container;
        /** @type {Function} */
        this.saveHandler = saveHandler;
        /** @type {Project} */
        this.project = null;
        this.structuresTable = this.container.find('._dataStructuresTable');
        this.setsTable = this.container.find('._setsTable');
        this.filterByState = this.container.find('._filterByState');
        this.sourceDataStructureValidator = new _tabs_source_data_source_data_structures_SourceDataStructureValidator__WEBPACK_IMPORTED_MODULE_5__["SourceDataStructureValidator"]();
        this.sourceDataStructureSets = new _tabs_source_data_source_data_structures_SourceDataStructureSets__WEBPACK_IMPORTED_MODULE_4__["SourceDataStructureSets"](this.container, this.saveHandler);
        this.isSyncing = false;
        this.inUpdatedLayout = false;
        let dimensionSelectorLocation = '';
        if (sidebarDimensionSelector) {
            dimensionSelectorLocation = this.container
                .closest('._content')
                .siblings('.main-sidebar')
                .find('#source_data_files_sidebar ._top')
                .append('<section class="_sidebar-dimension-selector"></section>');

            this.container.find('._submenu').appendTo(dimensionSelectorLocation.find('._sidebar-dimension-selector'));
            dimensionSelectorLocation = dimensionSelectorLocation.find('._sidebar-dimension-selector');
        } else {
            dimensionSelectorLocation = this.container.find('._dimension-selector')[0];
        }
        if (!localStorage.getItem('blobExcelData'))
            this.dimensionSelect = new wijmo.input.ComboBox(dimensionSelectorLocation, {
                placeholder: 'Select Dimension',
                itemsSource: [],
                displayMemberPath: 'label',
                onSelectedIndexChanged: () => {
                    if (!this.isSyncing) {
                        this.syncFlexGrid();
                    }
                }
            });
        if (!localStorage.getItem('blobExcelData'))
            this.flexgrid = new wijmo.grid.FlexGrid(this.structuresTable[0], {
                isReadOnly: false,
                selectionMode: 'Cell',
                itemsSource: [],
                autoGenerateColumns: false,
                childItemsPath: 'children',
                columns: [],
                formatItem: (s, e) => {
                    if (e.panel === s.cells) {
                        let color = '';
                        let backgroundColor = '';
                        const item = s.rows[e.row].dataItem;

                        if (highlightChanges && item.dataStructure) {
                            const dimension = this.getSelectedDimension();
                            const ds = this.project.getDataStructuresForDimension(dimension.slug)[
                                item.dataStructure.attribute
                            ];

                            if (ds && ds.changed) {
                                backgroundColor = '#49CAAE';
                                color = '#333';
                            }
                        }
                        // All rows must be editable, except for Groups.
                        // This is necessary to set for hierarchical flexgrids.
                        // See https://www.grapecity.com/en/forums/wijmo/flexgrid---hierarchical-vi
                        s.rows[e.row].isReadOnly = !!item.group;

                        switch (s.columns[e.col].binding) {
                            case 'title':
                                // Add invisible arrow to have all rows properly aligned.
                                if (e.cell.innerHTML.indexOf('wj-elem-collapse') === -1) {
                                    e.cell.innerHTML =
                                        '<span class="wj-elem-collapse wj-glyph-down-right _hidden"></span>' +
                                        e.cell.innerHTML;
                                }
                                break;

                            case 'validation':
                                // Button
                                if (item.validation) {
                                    e.cell.innerHTML +=
                                        '<button class="_view-sets btn btn-sm btn-default">More</button>';
                                }

                                // Color
                                if (item.invalid === 0) {
                                    color = 'green';
                                } else {
                                    color = 'red';
                                }
                                break;
                        }
                        e.cell.style.color = color;
                        e.cell.style.backgroundColor = backgroundColor;
                    }
                },
                updatedView: () => {
                    if (this.inUpdatedLayout) {
                        this.inUpdatedLayout = false;
                    } else {
                        this.inUpdatedLayout = true;
                        this.flexgrid.autoSizeRow(0, true);
                    }
                },
                beginningEdit: (s, e) => {
                    const col = s.columns[e.col];
                    const dataPoint = s.rows[e.row].dataItem;

                    // User is allowed to edit?
                    if (col.binding === 'dataStructure.group') {
                        const parent = dataPoint.dataStructure.parentAttribute;
                        if (!parent) {
                            alert(_Constants__WEBPACK_IMPORTED_MODULE_2__["constants"].CANNOT_SET_GROUP_IF_NO_PARENT);
                            e.cancel = true;
                            return;
                        }
                    }
                },
                cellEditEnding: (s, e) => {
                    const oldVal = s.getCellData(e.row, e.col);
                    const newVal = s.activeEditor.value;
                    const dataType = s.columns[e.col].dataType;
                    e.cancel = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].checkIfCellHasChanged(oldVal, newVal, dataType);
                },
                cellEditEnded: (s, e) => {
                    // Edit was cancelled?
                    if (e.cancel) {
                        return;
                    }

                    // TODO: Show loading screen.
                    const dataItem = s.rows[e.row].dataItem;
                    /** @type {DataStructure} */
                    const dataStructure = dataItem.dataStructure;
                    const ds = this.project.addDataStructure(
                        this.dimensionSelect.selectedItem.slug,
                        dataItem.value,
                        dataStructure.parentAttribute,
                        dataStructure.group,
                        dataStructure.globalTerm,
                        dataStructure.timeIntervalBegin,
                        dataStructure.timeIntervalEnd
                    );

                    if (highlightChanges) {
                        ds.changed = true;
                    }

                    this.saveHandler();
                }
            });

        this.container.on('click', '._view-sets', e => {
            const ht = this.flexgrid.hitTest(e);
            if (!ht) {
                return;
            }

            let dataItem = this.flexgrid.rows[ht._row].dataItem;
            if (!dataItem.groups) {
                return;
            }
            dataItem = Object.assign({}, dataItem);
            dataItem.dimension = this.getSelectedDimension();

            this.container.find('._back').show();
            this.container.find('._auto-reconcile').show();
            this.setsTable.show();
            this.filterByState.show();
            this.structuresTable.hide();
            this.container.find('._dimension-selector').hide();

            this.sourceDataStructureSets.setData(dataItem);
        });

        this.container.find('._back').on('click', () => {
            this.container.find('._back').hide();
            this.container.find('._auto-reconcile').hide();
            this.setsTable.hide();
            this.filterByState.hide();
            this.structuresTable.show();
            this.container.find('._dimension-selector').show();

            this.sync();

            // Force flexgrid to refresh.
            window.dispatchEvent(new Event('resize'));
        });

        this.container.find('._back-source-data-main').on('click', () => {
            this.container.find('._back-source-data-main').hide();
            this.structuresTable.show();

            // Force flexgrid to refresh.
            window.dispatchEvent(new Event('resize'));
        });
    }

    setProject(project) {
        this.project = project;
        this.sourceDataStructureSets.setProject(project);
        this.sourceDataStructureValidator.setProject(project);
    }

    sync() {
        // Prevent multiple runs.
        if (this.isSyncing) {
            return;
        }
        this.isSyncing = true;

        this.sourceDataStructureSets.sync();

        // Get dimensions that have data structures or global terms.
        let selectedDimension = this.getSelectedDimension() || null;
        let dimensions = this.project.getDimensions();
        dimensions = dimensions.filter(dimension => {
            return dimension.hasDataStructures || dimension.hasGlobalTerms || dimension.hasTimeIntervals;
        });
        this.dimensionSelect.itemsSource = dimensions;
        this.dimensionSelect.selectedItem = selectedDimension;

        this.syncFlexGrid();

        this.isSyncing = false;
    }

    syncFlexGrid() {
        let gridCol;
        this.flexgrid.columns.length = 0;
        const selectedItem = this.dimensionSelect.selectedItem || {};
        // Value
        gridCol = new wijmo.grid.Column();
        gridCol.header = 'Value';
        gridCol.binding = 'title';
        gridCol.width = '*';
        gridCol.isReadOnly = true;
        this.flexgrid.columns.push(gridCol);

        if (selectedItem.hasDataStructures) {
            // Parent
            {
                gridCol = new wijmo.grid.Column();
                gridCol.header = 'Parent';
                gridCol.binding = 'dataStructure.parentAttribute';
                gridCol.width = '*';

                // Get dataMap.
                const dimension = Object.assign({}, selectedItem);
                dimension.isParent = true;
                dimension.attribute = selectedItem.slug;
                gridCol.dataMap = _tabs_source_data_SourceDataService__WEBPACK_IMPORTED_MODULE_6__["sourceDataService"].getDataMapForDimension(dimension, this.project);

                this.flexgrid.columns.push(gridCol);
            }

            // Group
            {
                gridCol = new wijmo.grid.Column();
                gridCol.header = 'Group';
                gridCol.binding = 'dataStructure.group';
                gridCol.width = '*';

                // Get dataMap.
                const dimension = Object.assign({}, selectedItem);
                dimension.isGroup = true;
                dimension.attribute = selectedItem.slug;
                gridCol.dataMap = _tabs_source_data_SourceDataService__WEBPACK_IMPORTED_MODULE_6__["sourceDataService"].getDataMapForDimension(dimension, this.project);

                this.flexgrid.columns.push(gridCol);
            }
        }

        // Global term
        if (selectedItem.hasGlobalTerms) {
            gridCol = new wijmo.grid.Column();
            gridCol.header = 'Global Term';
            gridCol.binding = 'dataStructure.globalTerm';
            gridCol.width = '*';

            // Get dataMap.
            const dimension = Object.assign({}, selectedItem);
            dimension.isGlobalTerm = true;
            gridCol.dataMap = _tabs_source_data_SourceDataService__WEBPACK_IMPORTED_MODULE_6__["sourceDataService"].getDataMapForDimension(dimension, this.project);

            this.flexgrid.columns.push(gridCol);
        }

        // Time interval
        if (selectedItem.hasTimeIntervals) {
            gridCol = new wijmo.grid.Column();
            gridCol.header = 'Begin';
            gridCol.binding = 'dataStructure.timeIntervalBegin';
            gridCol.width = '*';
            gridCol.dataType = wijmo.DataType.Date;
            gridCol.format = 'yyyy-MM-dd';
            this.flexgrid.columns.push(gridCol);
            _Common__WEBPACK_IMPORTED_MODULE_1__["common"].createDatePickerEditor(this.flexgrid.columns.getColumn(gridCol.binding));

            gridCol = new wijmo.grid.Column();
            gridCol.header = 'End';
            gridCol.binding = 'dataStructure.timeIntervalEnd';
            gridCol.width = '*';
            gridCol.dataType = wijmo.DataType.Date;
            gridCol.format = 'yyyy-MM-dd';
            this.flexgrid.columns.push(gridCol);
            _Common__WEBPACK_IMPORTED_MODULE_1__["common"].createDatePickerEditor(this.flexgrid.columns.getColumn(gridCol.binding));
        }

        // Validation
        if (selectedItem.hasDataStructures) {
            gridCol = new wijmo.grid.Column();
            gridCol.header = 'Validation';
            gridCol.binding = 'validation';
            gridCol.width = 210;
            gridCol.isReadOnly = true;
            this.flexgrid.columns.push(gridCol);
        }

        this.flexgrid.itemsSource = this.getDataStructuresTree('');
    }

    /** @type {Dimension} */
    getSelectedDimension() {
        return this.dimensionSelect.selectedItem;
    }

    getDataStructuresTree(parent, group) {
        const dimension = this.getSelectedDimension();
        if (!dimension) {
            return;
        }
        const dataStructures = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.project.getDataStructuresForDimension(dimension.slug));
        let values = _Common__WEBPACK_IMPORTED_MODULE_1__["common"].getUniqueValues(this.project.dataPoints, dimension.slug);
        const tree = [];

        // Filter.
        let hasGroups = false;
        values = values.filter(value => {
            const ds = dataStructures[value];
            const dsParentAttribute = !ds ? '' : ds.parentAttribute;
            const dsGroup = !ds ? '' : ds.group;

            // Check parent. Special case if parent doesn't exist - put it in the root.
            if (parent !== dsParentAttribute && !(parent === '' && values.indexOf(dsParentAttribute) === -1)) {
                return false;
            }

            // Check group. Special case if group is missing - put into "Others".
            if (group && group !== dsGroup && !(group === 'Others' && dsGroup === '')) {
                return false;
            }

            // Do we have groups?
            if (!group && dsGroup) {
                hasGroups = true;
            }

            return true;
        });

        // Do we have at least one group?
        if (hasGroups) {
            // Make groups.
            const groups = [];
            values.forEach(value => {
                const ds = dataStructures[value];
                let dsGroup = !ds ? '' : ds.group;
                dsGroup = dsGroup ? dsGroup : 'Others';
                groups[dsGroup] = true;
            });

            // Create nodes for groups.
            for (const groupTitle in groups) {
                const node = {
                    title: groupTitle,
                    value: parent, // Required for validation and auto-reconciliation.
                    group: groupTitle,
                    children: this.getDataStructuresTree(parent, groupTitle)
                };
                this.validateNode(node);
                tree.push(node);
            }
        } else {
            values.forEach(value => {
                const ds = dataStructures[value];
                const node = {
                    title: value,
                    value: value,
                    dataStructure: ds || {},
                    children: this.getDataStructuresTree(value)
                };
                this.validateNode(node);
                tree.push(node);
            });
        }

        return tree;
    }

    validateNode(node) {
        const dimension = this.getSelectedDimension();
        let hasGroups = false;
        node.childValues = node.children.map(child => {
            if (child.group) {
                hasGroups = true;
            }
            return child.value;
        });

        if (!hasGroups && node.children.length > 0) {
            const result = this.sourceDataStructureValidator.validateParentAndChildren(
                dimension.slug,
                node.value,
                node.childValues
            );
            Object.assign(node, result);
            if (result.invalid === 0) {
                node.validation = 'All ' + result.valid + ' sets valid';
            } else {
                node.validation = result.invalid + '/' + result.groups.length + ' sets invalid';
            }
        }
    }

    addDataStructuresFromProject(project) {
        if (!project) {
            return;
        }

        const currentProject = _services_StorageService__WEBPACK_IMPORTED_MODULE_3__["storageService"].getCurrentProject();

        for (let dimension in project.dataStructuresPerDimension) {
            const dataStructures = project.dataStructuresPerDimension[dimension];
            for (let value in dataStructures) {
                /** @type {DataStructure} */
                const dataStructure = dataStructures[value];

                if (!dataStructure.changed) {
                    continue;
                }

                currentProject.addDataStructure(
                    dimension,
                    value,
                    dataStructure.parentAttribute,
                    dataStructure.group,
                    dataStructure.globalTerm,
                    dataStructure.timeIntervalBegin,
                    dataStructure.timeIntervalEnd
                );
            }
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=0.js.map