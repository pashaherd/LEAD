"use strict";
(self["webpackChunkviews"] = self["webpackChunkviews"] || []).push([[448],{

/***/ 421:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Shop; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(3745);
// EXTERNAL MODULE: ./src/components/assets/lead-white.png
var lead_white = __webpack_require__(9499);
;// CONCATENATED MODULE: ./src/components/SNav.js


var SNav = function SNav(_ref) {
  var handleNav = _ref.handleNav;
  var divide = (0,react.useRef)();
  var list = (0,react.useRef)();
  var menu = (0,react.useRef)();
  (0,react.useEffect)(function () {
    function clickPosition(event) {
      var clientY = event.clientY;
      console.log(clientY);
      var menuClasses = menu.current.classList;
      if (menuClasses.value.includes('active')) {
        if (clientY > 100) {
          menu.current.classList.remove('active');
          list.current.classList.add('hide');
          divide.current.classList.add('hide');
        }
      }
    }
    window.addEventListener('click', clickPosition);
  }, []);
  function handleOpen() {
    menu.current.classList.add('active');
    setTimeout(function () {
      divide.current.classList.remove('hide');
      list.current.classList.remove('hide');
    }, 300);
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "nav-s row"
  }, /*#__PURE__*/react.createElement("div", {
    onClick: function onClick() {
      return handleOpen();
    },
    ref: menu,
    className: "menu-s column"
  }, /*#__PURE__*/react.createElement("div", {
    className: "top-s row"
  }, /*#__PURE__*/react.createElement("img", {
    src: lead_white,
    alt: "",
    id: "logo-s"
  })), /*#__PURE__*/react.createElement("div", {
    ref: divide,
    className: "divide-s hide"
  }), /*#__PURE__*/react.createElement("ul", {
    ref: list,
    className: "links-n-s  hide row"
  }, /*#__PURE__*/react.createElement("li", {
    style: {
      '--order': 1
    }
  }, /*#__PURE__*/react.createElement("button", {
    id: "2",
    onClick: function onClick(e) {
      return handleNav(e);
    }
  }, "Intuitive Design")), /*#__PURE__*/react.createElement("li", {
    style: {
      '--order': 2
    }
  }, /*#__PURE__*/react.createElement("button", {
    id: "1",
    onClick: function onClick(e) {
      return handleNav(e);
    }
  }, "Color Coheison")), /*#__PURE__*/react.createElement("li", {
    style: {
      '--order': 3
    }
  }, /*#__PURE__*/react.createElement("button", {
    id: "0",
    onClick: function onClick(e) {
      return handleNav(e);
    }
  }, "Modern Masterpiece")), /*#__PURE__*/react.createElement("li", {
    style: {
      '--order': 4
    }
  }, /*#__PURE__*/react.createElement("button", {
    id: "3",
    onClick: function onClick(e) {
      return handleNav(e);
    }
  }, "Stunning Visuals"))))));
};
/* harmony default export */ var components_SNav = (SNav);
// EXTERNAL MODULE: ./src/components/assets/shopify.png
var shopify = __webpack_require__(5052);
;// CONCATENATED MODULE: ./src/components/assets/sale.png
var sale_namespaceObject = "/images/sale.png";
// EXTERNAL MODULE: ./node_modules/react-scroll/modules/index.js
var modules = __webpack_require__(7899);
;// CONCATENATED MODULE: ./src/components/SShow.js




var SShow = function SShow() {
  var divRef = (0,react.useRef)();
  var divRef2 = (0,react.useRef)();
  (0,react.useEffect)(function () {
    var childrenRef = Array.from(divRef.current.children).slice(0, 2);
    childrenRef.forEach(function (ref) {
      ref.classList.add('on');
    });
    setTimeout(function () {
      divRef2.current.classList.add('active');
    }, 500);
  }, []);
  function handleScroll() {
    modules/* animateScroll */.NY.scrollTo(1100, {
      duration: 1000,
      smooth: 'easeInOutQuart'
    });
  }
  return /*#__PURE__*/react.createElement("section", {
    className: "main-s"
  }, /*#__PURE__*/react.createElement("div", {
    ref: divRef,
    className: "left-s"
  }, /*#__PURE__*/react.createElement("div", {
    className: "slider-s",
    id: "s-1"
  }), /*#__PURE__*/react.createElement("div", {
    className: "slider-s",
    id: "s-2"
  }), /*#__PURE__*/react.createElement("div", {
    className: "slider-s",
    id: "s-3"
  }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("img", {
    className: "num-s",
    src: sale_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: shopify,
    alt: "",
    id: "shop-logo-s"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "right-s"
  }, /*#__PURE__*/react.createElement("h1", {
    id: "header-s"
  }, "E-Commerce."), /*#__PURE__*/react.createElement("h1", {
    id: "second-s"
  }, "At The Highest Standard."), /*#__PURE__*/react.createElement("span", {
    className: "column"
  }, /*#__PURE__*/react.createElement("p", null, "Utilize Shopify's Vast Ecommerce Platform At its Full Potential"), /*#__PURE__*/react.createElement("div", {
    className: "btn-wrap-shop row",
    ref: divRef2
  }, /*#__PURE__*/react.createElement("button", {
    onClick: function onClick() {
      return handleScroll();
    },
    className: "btn"
  }, "Get Started")))));
};
/* harmony default export */ var components_SShow = (SShow);
;// CONCATENATED MODULE: ./src/components/assets/ai.png
var ai_namespaceObject = "/images/ai.png";
;// CONCATENATED MODULE: ./src/components/assets/design.png
var design_namespaceObject = "/images/design.png";
;// CONCATENATED MODULE: ./src/components/assets/weakness.png
var weakness_namespaceObject = "/images/weakness.png";
;// CONCATENATED MODULE: ./src/components/assets/personal.png
var personal_namespaceObject = "/images/personal.png";
// EXTERNAL MODULE: ./node_modules/react-intersection-observer/index.mjs
var react_intersection_observer = __webpack_require__(2708);
;// CONCATENATED MODULE: ./src/components/SInfo.js






var SInfo = function SInfo() {
  return /*#__PURE__*/react.createElement("section", {
    className: "info-s column"
  }, /*#__PURE__*/react.createElement("div", {
    className: "wrap-i-s row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "content-i-s first-s"
  }, /*#__PURE__*/react.createElement("span", {
    className: "column"
  }, /*#__PURE__*/react.createElement("h2", null, "Automated Customer Support"), /*#__PURE__*/react.createElement("p", null, "Automate your entire customer service department with new artifical intelligence solutions")), /*#__PURE__*/react.createElement("img", {
    src: ai_namespaceObject,
    alt: "",
    className: "icon-s"
  })), /*#__PURE__*/react.createElement("div", {
    className: "content-i-s second-s"
  }, /*#__PURE__*/react.createElement("span", {
    className: "column"
  }, /*#__PURE__*/react.createElement("h2", null, "Intuitive Design"), /*#__PURE__*/react.createElement("p", null, "Most shopify stores struggle with distinctive uniqueness. Achieve a beautiful UI that leaves a resinous impression on clients")), /*#__PURE__*/react.createElement("img", {
    src: design_namespaceObject,
    alt: "",
    className: "icon-s"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "wrap-i-s row"
  }, /*#__PURE__*/react.createElement(react_intersection_observer/* InView */.df, {
    threshold: .5
  }, function (_ref) {
    var inView = _ref.inView,
      ref = _ref.ref;
    return /*#__PURE__*/react.createElement("div", {
      ref: ref,
      className: "content-i-s third-s ".concat(inView ? "slide" : "")
    }, /*#__PURE__*/react.createElement("span", {
      className: "column"
    }, /*#__PURE__*/react.createElement("h2", null, "Customer Accounts"), /*#__PURE__*/react.createElement("p", null, "Utilize Customer Accounts Beyond a Simple Sign In, Incorporate Rewards/Refferal Programs & Brand Events to Keep Customers Engaged.")), /*#__PURE__*/react.createElement("img", {
      src: personal_namespaceObject,
      alt: "",
      className: "icon-s"
    }));
  }), /*#__PURE__*/react.createElement(react_intersection_observer/* InView */.df, {
    threshold: .5
  }, function (_ref2) {
    var inView = _ref2.inView,
      ref = _ref2.ref;
    return /*#__PURE__*/react.createElement("div", {
      ref: ref,
      className: "content-i-s fourth-s ".concat(inView ? "slide" : "")
    }, /*#__PURE__*/react.createElement("span", {
      className: "column"
    }, /*#__PURE__*/react.createElement("h2", null, "Go Beyond"), /*#__PURE__*/react.createElement("p", null, "Elevate your Shopify Store Beyond the Generic Layout, Every Business Needs an Edge. Explore Creative Intuition")), /*#__PURE__*/react.createElement("img", {
      src: weakness_namespaceObject,
      alt: "",
      className: "icon-s"
    }));
  })));
};
/* harmony default export */ var components_SInfo = (SInfo);
;// CONCATENATED MODULE: ./src/components/SForm.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



var SForm = function SForm() {
  var _useState = (0,react.useState)(["BD 123"]),
    _useState2 = _slicedToArray(_useState, 2),
    phoneData = _useState2[0],
    setPhoneData = _useState2[1];
  (0,react.useEffect)(function () {
    getPhoneData();
  });
  function getPhoneData() {
    return _getPhoneData.apply(this, arguments);
  }
  function _getPhoneData() {
    _getPhoneData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('/api/data').then(function (res) {
              return res.json();
            }).then(function (data) {
              var viableData = Object.entries(data["codes"]);
              setPhoneData(viableData);
            }).catch(function (err) {
              return console.log(err);
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _getPhoneData.apply(this, arguments);
  }
  return /*#__PURE__*/react.createElement("section", {
    className: "form-section-s column"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-wrap-s"
  }, /*#__PURE__*/react.createElement("div", {
    className: "aside-s"
  }, /*#__PURE__*/react.createElement("h2", {
    id: "header-shop"
  }, "Elevate Your Online Business"), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("h2", null, "To The Next Level"), /*#__PURE__*/react.createElement("p", null, "Get In Touch With Us Today, Start Winning Tommorrow")), /*#__PURE__*/react.createElement("span", {
    className: "icons-s row"
  }, /*#__PURE__*/react.createElement("img", {
    src: shopify,
    alt: "",
    className: "form-icon-s"
  }), /*#__PURE__*/react.createElement("img", {
    src: lead_white,
    alt: "",
    className: "form-icon-s"
  }))), /*#__PURE__*/react.createElement("form", {
    action: "/shopify-submit",
    method: "POST",
    className: "form-s"
  }, /*#__PURE__*/react.createElement("fieldset", {
    className: "names-s row"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("label", {
    htmlFor: "fname-s"
  }, "First Name"), /*#__PURE__*/react.createElement("input", {
    required: true,
    type: "text",
    name: "fname",
    id: "fname-s",
    placeholder: "Enter"
  })), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("label", {
    htmlFor: "lname-s"
  }, "Last Name"), /*#__PURE__*/react.createElement("input", {
    required: true,
    type: "text",
    name: "lname",
    id: "lname-s",
    placeholder: "Enter"
  }))), /*#__PURE__*/react.createElement("fieldset", {
    className: "email-wrap-s"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("label", {
    htmlFor: "email-s"
  }, "Email"), /*#__PURE__*/react.createElement("input", {
    required: true,
    type: "text",
    name: "email",
    id: "email-s",
    placeholder: "Enter"
  }))), /*#__PURE__*/react.createElement("fieldset", {
    className: "phone-wrap-s"
  }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("label", {
    htmlFor: "phone-s"
  }, "Phone"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("select", {
    name: "code",
    className: "phone-codes"
  }, phoneData.map(function (data) {
    return /*#__PURE__*/react.createElement("option", null, "".concat(data[0], " ").concat(data[1]));
  })), /*#__PURE__*/react.createElement("input", {
    required: true,
    type: "text",
    name: "phone",
    id: "phone-s",
    placeholder: "Enter"
  })))), /*#__PURE__*/react.createElement("fieldset", {
    className: "message-s column"
  }, /*#__PURE__*/react.createElement("h3", null, "What Are Some of the Challenges You Face Running an Online Business?"), /*#__PURE__*/react.createElement("textarea", {
    id: "text-a",
    name: "text-a",
    placeholder: "Enter"
  })), /*#__PURE__*/react.createElement("div", {
    className: "btn-wrap-s row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "submit-btn-s row"
  }, /*#__PURE__*/react.createElement("button", {
    type: "submit"
  }, "Submit"))))));
};
/* harmony default export */ var components_SForm = (SForm);
;// CONCATENATED MODULE: ./src/components/assets/right-arrow.png
var right_arrow_namespaceObject = "/images/right-arrow.png";
;// CONCATENATED MODULE: ./src/components/assets/left-arrow.png
var left_arrow_namespaceObject = "/images/left-arrow.png";
;// CONCATENATED MODULE: ./src/components/Projects.js



var Projects = function Projects(_ref) {
  var classPosition = _ref.classPosition,
    forwardTrans = _ref.forwardTrans,
    backwardTrans = _ref.backwardTrans,
    handleHeader = _ref.handleHeader,
    headerRef = _ref.headerRef;
  return /*#__PURE__*/react.createElement("section", {
    className: "projects-s column"
  }, /*#__PURE__*/react.createElement("h1", {
    className: "header-p-s",
    ref: headerRef
  }, handleHeader()), /*#__PURE__*/react.createElement("div", {
    className: "content-p-s row"
  }, /*#__PURE__*/react.createElement("div", {
    id: "one",
    className: classPosition[0]
  }), /*#__PURE__*/react.createElement("div", {
    id: "two",
    className: classPosition[1]
  }), /*#__PURE__*/react.createElement("div", {
    id: "three",
    className: classPosition[2]
  }), /*#__PURE__*/react.createElement("div", {
    id: "four",
    className: classPosition[3]
  })), /*#__PURE__*/react.createElement("span", {
    className: "column"
  }, /*#__PURE__*/react.createElement("h3", null, "Be In Full Control of UI/UX"), /*#__PURE__*/react.createElement("p", null, "Take Your User Experience to the Next Level with Our Top Notch Designs")), /*#__PURE__*/react.createElement("div", {
    className: "arrows-s row"
  }, /*#__PURE__*/react.createElement("img", {
    src: left_arrow_namespaceObject,
    onClick: function onClick() {
      return backwardTrans();
    },
    alt: "",
    className: "icon-arrows-s"
  }), /*#__PURE__*/react.createElement("img", {
    src: right_arrow_namespaceObject,
    onClick: function onClick() {
      return forwardTrans();
    },
    alt: "",
    className: "icon-arrows-s"
  })));
};
/* harmony default export */ var components_Projects = (Projects);
// EXTERNAL MODULE: ./src/components/Footer.js + 2 modules
var Footer = __webpack_require__(2919);
;// CONCATENATED MODULE: ./src/Shop.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Shop_unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Shop_arrayLikeToArray(arr);
}
function Shop_slicedToArray(arr, i) {
  return Shop_arrayWithHoles(arr) || Shop_iterableToArrayLimit(arr, i) || Shop_unsupportedIterableToArray(arr, i) || Shop_nonIterableRest();
}
function Shop_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Shop_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Shop_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Shop_arrayLikeToArray(o, minLen);
}
function Shop_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function Shop_iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function Shop_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}









function App() {
  var _useState = (0,react.useState)(['backwards', 'before', 'forward', 'after']),
    _useState2 = Shop_slicedToArray(_useState, 2),
    classPosition = _useState2[0],
    setPosition = _useState2[1];
  var headerRef = (0,react.useRef)();
  (0,react.useEffect)(function () {
    handleHeader();
    console.log(window.scrollY);
  }, []);
  function handleHeader() {
    var header = '';
    var currentIndex = classPosition.findIndex(function (p) {
      return p === 'forward';
    });
    switch (currentIndex) {
      case 0:
        header = 'Modern Masterpiece';
        break;
      case 1:
        header = 'Colour Coheison';
        break;
      case 2:
        header = 'Intuitive Design';
        break;
      case 3:
        header = 'Stunning Visuals';
        break;
    }
    return header;
  }
  function handleBackwardsTrans() {
    var newPositions = _toConsumableArray(classPosition);
    var lastValue = newPositions.pop();
    newPositions.unshift(lastValue);
    setPosition(newPositions);
    handleHeader();
    headerRef.current.classList.add('fade');
    setTimeout(function () {
      headerRef.current.classList.remove('fade');
    }, 500);
  }
  function handleForwardTrans() {
    var newPositions = _toConsumableArray(classPosition);
    console.log(newPositions);
    var firstValue = newPositions.shift();
    newPositions.push(firstValue);
    setPosition(newPositions);
    handleHeader();
    headerRef.current.classList.add('fade');
    setTimeout(function () {
      headerRef.current.classList.remove('fade');
    }, 300);
  }
  function handleNav(e) {
    modules/* animateScroll */.NY.scrollTo(2400, {
      duration: 1000,
      smooth: 'easeInOutQuart'
    });
    console.log(e.target.id);
    var targetId = JSON.parse(e.target.id);
    var copyPositions = _toConsumableArray(classPosition);
    var j = copyPositions.findIndex(function (c) {
      return c === "forward";
    });
    while (j !== targetId) {
      var shiftPosition = copyPositions.shift();
      copyPositions.push(shiftPosition);
      setPosition(copyPositions);
      j = copyPositions.findIndex(function (c) {
        return c === "forward";
      });
    }
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(components_SNav, {
    handleNav: handleNav
  }), /*#__PURE__*/react.createElement(components_SShow, null), /*#__PURE__*/react.createElement(components_SInfo, null), /*#__PURE__*/react.createElement(components_SForm, null), /*#__PURE__*/react.createElement(components_Projects, {
    classPosition: classPosition,
    forwardTrans: handleForwardTrans,
    backwardTrans: handleBackwardsTrans,
    handleHeader: handleHeader,
    headerRef: headerRef
  }), /*#__PURE__*/react.createElement(Footer/* default */.Z, null));
}
/* harmony default export */ var Shop = (App);

/***/ }),

/***/ 2708:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   df: function() { return /* binding */ InView; }
/* harmony export */ });
/* unused harmony exports defaultFallbackInView, observe, useInView */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
"use client";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/InView.tsx


// src/observe.ts
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function defaultFallbackInView(inView) {
  unsupportedValue = inView;
}
function getRootId(root) {
  if (!root)
    return "0";
  if (RootIds.has(root))
    return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
function optionsToId(options) {
  return Object.keys(options).sort().filter(
    (key) => options[key] !== void 0
  ).map((key) => {
    return `${key}_${key === "root" ? getRootId(options.root) : options[key]}`;
  }).toString();
}
function createObserver(options) {
  let id = optionsToId(options);
  let instance = observerMap.get(id);
  if (!instance) {
    const elements = /* @__PURE__ */ new Map();
    let thresholds;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        var _a;
        const inView = entry.isIntersecting && thresholds.some((threshold) => entry.intersectionRatio >= threshold);
        if (options.trackVisibility && typeof entry.isVisible === "undefined") {
          entry.isVisible = inView;
        }
        (_a = elements.get(entry.target)) == null ? void 0 : _a.forEach((callback) => {
          callback(inView, entry);
        });
      });
    }, options);
    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id,
      observer,
      elements
    };
    observerMap.set(id, instance);
  }
  return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
  if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
    const bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return () => {
    };
  }
  const { id, observer, elements } = createObserver(options);
  let callbacks = elements.get(element) || [];
  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }
  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    callbacks.splice(callbacks.indexOf(callback), 1);
    if (callbacks.length === 0) {
      elements.delete(element);
      observer.unobserve(element);
    }
    if (elements.size === 0) {
      observer.disconnect();
      observerMap.delete(id);
    }
  };
}

// src/InView.tsx
function isPlainChildren(props) {
  return typeof props.children !== "function";
}
var InView = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    __publicField(this, "node", null);
    __publicField(this, "_unobserveCb", null);
    __publicField(this, "handleNode", (node) => {
      if (this.node) {
        this.unobserve();
        if (!node && !this.props.triggerOnce && !this.props.skip) {
          this.setState({ inView: !!this.props.initialInView, entry: void 0 });
        }
      }
      this.node = node ? node : null;
      this.observeNode();
    });
    __publicField(this, "handleChange", (inView, entry) => {
      if (inView && this.props.triggerOnce) {
        this.unobserve();
      }
      if (!isPlainChildren(this.props)) {
        this.setState({ inView, entry });
      }
      if (this.props.onChange) {
        this.props.onChange(inView, entry);
      }
    });
    this.state = {
      inView: !!props.initialInView,
      entry: void 0
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {
      this.unobserve();
      this.observeNode();
    }
  }
  componentWillUnmount() {
    this.unobserve();
    this.node = null;
  }
  observeNode() {
    if (!this.node || this.props.skip)
      return;
    const {
      threshold,
      root,
      rootMargin,
      trackVisibility,
      delay,
      fallbackInView
    } = this.props;
    this._unobserveCb = observe(
      this.node,
      this.handleChange,
      {
        threshold,
        root,
        rootMargin,
        // @ts-ignore
        trackVisibility,
        // @ts-ignore
        delay
      },
      fallbackInView
    );
  }
  unobserve() {
    if (this._unobserveCb) {
      this._unobserveCb();
      this._unobserveCb = null;
    }
  }
  render() {
    const { children } = this.props;
    if (typeof children === "function") {
      const { inView, entry } = this.state;
      return children({ inView, entry, ref: this.handleNode });
    }
    const {
      as,
      triggerOnce,
      threshold,
      root,
      rootMargin,
      onChange,
      skip,
      trackVisibility,
      delay,
      initialInView,
      fallbackInView,
      ...props
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      as || "div",
      { ref: this.handleNode, ...props },
      children
    );
  }
};

// src/useInView.tsx

function useInView({
  threshold,
  delay,
  trackVisibility,
  rootMargin,
  root,
  triggerOnce,
  skip,
  initialInView,
  fallbackInView,
  onChange
} = {}) {
  var _a;
  const [ref, setRef] = React2.useState(null);
  const callback = React2.useRef();
  const [state, setState] = React2.useState({
    inView: !!initialInView,
    entry: void 0
  });
  callback.current = onChange;
  React2.useEffect(
    () => {
      if (skip || !ref)
        return;
      let unobserve;
      unobserve = observe(
        ref,
        (inView, entry) => {
          setState({
            inView,
            entry
          });
          if (callback.current)
            callback.current(inView, entry);
          if (entry.isIntersecting && triggerOnce && unobserve) {
            unobserve();
            unobserve = void 0;
          }
        },
        {
          root,
          rootMargin,
          threshold,
          // @ts-ignore
          trackVisibility,
          // @ts-ignore
          delay
        },
        fallbackInView
      );
      return () => {
        if (unobserve) {
          unobserve();
        }
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Array.isArray(threshold) ? threshold.toString() : threshold,
      ref,
      root,
      rootMargin,
      triggerOnce,
      skip,
      trackVisibility,
      fallbackInView,
      delay
    ]
  );
  const entryTarget = (_a = state.entry) == null ? void 0 : _a.target;
  const previousEntryTarget = React2.useRef();
  if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {
    previousEntryTarget.current = entryTarget;
    setState({
      inView: !!initialInView,
      entry: void 0
    });
  }
  const result = [setRef, state.inView, state.entry];
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}

//# sourceMappingURL=index.mjs.map

/***/ })

}]);