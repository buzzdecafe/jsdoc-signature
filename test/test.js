/**
 * @name map
 * @function
 * @signature (a -> b) -> [a] -> [b]
 * @param {Function} fn A function that transforms one element into another
 * @param {Array} list A list of anything
 * @return {Array}
 * @description map takes a function that transforms an element of its input list to an element of its output list.
 */ 
function map(fn, list) {
  return list.map(fn);
}

