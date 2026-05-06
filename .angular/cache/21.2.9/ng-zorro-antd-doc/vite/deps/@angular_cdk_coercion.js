import {
  coerceCssPixelValue
} from "./chunk-3RUZQJQZ.js";
import {
  _isNumberValue,
  coerceElement,
  coerceNumberProperty
} from "./chunk-NRZQDBPA.js";
import {
  coerceArray
} from "./chunk-N4DOILP3.js";
import "./chunk-AOVFWP6H.js";
import "./chunk-YLZ4K7AH.js";
import "./chunk-ZPDA6Z6E.js";
import "./chunk-6EY7IDZ7.js";
import "./chunk-DMY7NSOM.js";
import "./chunk-HSWANC32.js";
import "./chunk-WCM3ZIVF.js";
import "./chunk-GOMI4DH3.js";

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}
function coerceStringArray(value, separator = /\s+/) {
  const result = [];
  if (value != null) {
    const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
    for (const sourceValue of sourceValues) {
      const trimmedString = `${sourceValue}`.trim();
      if (trimmedString) {
        result.push(trimmedString);
      }
    }
  }
  return result;
}
export {
  _isNumberValue,
  coerceArray,
  coerceBooleanProperty,
  coerceCssPixelValue,
  coerceElement,
  coerceNumberProperty,
  coerceStringArray
};
//# sourceMappingURL=@angular_cdk_coercion.js.map
