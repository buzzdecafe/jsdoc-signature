/*
 * @overview add a new tag to indicate function signature, a la Haskell  `map :: (a -> b) -> [a] -> [b]`
 * @module plugins/signature
 * @author Michael Hurley <mh@buzzdecafe.com>
 */

"use strict";


exports = {

  defineTags: function(dict) {
    dict.defineTag('signature', {
      mustHaveValue: true,
      canHaveName: true,
      onTagged: function(doclet, tag) {
        setDocletKindToTitle(doclet, tag);
        setDocletNameToValue(doclet, tag);
      }
    });
  },

  handlers: {

  }

};

