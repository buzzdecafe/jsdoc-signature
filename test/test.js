/**
 * @name map
 * @description map takes a function that transforms an element of its input list to an elemnt of its output list.
 * @signature (a -> b) -> [a] -> [b]
 */ 
function map(fn, list) {
  return list.map(fn);
}

