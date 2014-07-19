/**
 * @overview add a new tag to indicate function signature, a la Haskell  `map :: (a -> b) -> [a] -> [b]`
 * @module plugins/signature
 * @author Michael Hurley <mh@buzzdecafe.com>
 */

"use strict";

exports.defineTags = function(dictionary) {
    dictionary.defineTag('signature', {
      mustHaveValue: true,
      onTagged: function(doclet, tag) {
        doclet.type = "Function";
        doclet.signature = tag.text;
        doclet.returns = '';
      }
    });

};

