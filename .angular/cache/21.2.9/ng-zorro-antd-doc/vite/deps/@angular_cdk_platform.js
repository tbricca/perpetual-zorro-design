import {
  _isTestEnvironment
} from "./chunk-VON75VBJ.js";
import {
  RtlScrollAxisType,
  getRtlScrollAxisType,
  supportsScrollBehavior
} from "./chunk-GUGIMSVJ.js";
import {
  normalizePassiveListenerOptions,
  supportsPassiveEventListeners
} from "./chunk-PY5PYLQN.js";
import {
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getShadowRoot,
  _supportsShadowDom
} from "./chunk-5R2VQUOI.js";
import {
  Platform
} from "./chunk-K76LFBNU.js";
import "./chunk-XGJWE5FW.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineNgModule
} from "./chunk-AOVFWP6H.js";
import {
  ɵɵdefineInjector
} from "./chunk-YLZ4K7AH.js";
import "./chunk-ZPDA6Z6E.js";
import "./chunk-6EY7IDZ7.js";
import "./chunk-DMY7NSOM.js";
import "./chunk-HSWANC32.js";
import "./chunk-WCM3ZIVF.js";
import "./chunk-GOMI4DH3.js";

// node_modules/@angular/cdk/fesm2022/platform.mjs
var PlatformModule = class _PlatformModule {
  static ɵfac = function PlatformModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PlatformModule
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var supportedInputTypes;
var candidateInputTypes = ["color", "button", "checkbox", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"];
function getSupportedInputTypes() {
  if (supportedInputTypes) {
    return supportedInputTypes;
  }
  if (typeof document !== "object" || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }
  let featureTestInput = document.createElement("input");
  supportedInputTypes = new Set(candidateInputTypes.filter((value) => {
    featureTestInput.setAttribute("type", value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}
export {
  Platform,
  PlatformModule,
  RtlScrollAxisType,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getShadowRoot,
  _isTestEnvironment,
  _supportsShadowDom,
  getRtlScrollAxisType,
  getSupportedInputTypes,
  normalizePassiveListenerOptions,
  supportsPassiveEventListeners,
  supportsScrollBehavior
};
//# sourceMappingURL=@angular_cdk_platform.js.map
