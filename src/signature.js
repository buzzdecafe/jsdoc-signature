/**
 * @overview add a new tag to indicate function signature, a la Haskell  `map :: (a -> b) -> [a] -> [b]`
 * @module plugins/signature
 * @author Michael Hurley <mh@buzzdecafe.com>
 */

"use strict";


exports.defineTags = function(dictionary) {
    dictionary.defineTag('signature', {
      mustHaveValue: true,
      canHaveName: true,
      onTagged: function(doclet, tag) {
        throw new Error('boom, bitches!');
        doclet.type = "Function"
      }
    });

};

