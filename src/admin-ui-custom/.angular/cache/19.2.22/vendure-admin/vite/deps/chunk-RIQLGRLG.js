import {
  __commonJS
} from "./chunk-TXDUYLVM.js";

// ../../node_modules/@vendure/common/lib/normalize-string.js
var require_normalize_string = __commonJS({
  "../../node_modules/@vendure/common/lib/normalize-string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizeString = normalizeString;
    function normalizeString(input, spaceReplacer = " ") {
      const multipleSequentialReplacerRegex = new RegExp(`([${spaceReplacer}]){2,}`, "g");
      return (input || "").normalize("NFD").replace(/[\u00df]/g, "ss").replace(/[\u1e9e]/g, "SS").replace(/[\u0308]/g, "e").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[!"£$%^&*()+[\]{};:@#~?\\/,|><`¬'=‘’©®™]/g, "").replace(/\s+/g, spaceReplacer).replace(multipleSequentialReplacerRegex, spaceReplacer);
    }
  }
});

export {
  require_normalize_string
};
//# sourceMappingURL=chunk-RIQLGRLG.js.map
