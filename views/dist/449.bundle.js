"use strict";
(self["webpackChunkviews"] = self["webpackChunkviews"] || []).push([[449],{

/***/ 5836:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ routes_InfoPage; }
});

// EXTERNAL MODULE: ./src/components/Nav.js + 6 modules
var Nav = __webpack_require__(9210);
// EXTERNAL MODULE: ./src/components/Footer.js + 2 modules
var Footer = __webpack_require__(2919);
// EXTERNAL MODULE: ./src/components/assets/close.png
var assets_close = __webpack_require__(5080);
;// CONCATENATED MODULE: ./src/components/assets/email.png
var email_namespaceObject = "/images/email.png";
;// CONCATENATED MODULE: ./src/components/assets/auto.jpg
var auto_namespaceObject = "/images/auto.jpg";
;// CONCATENATED MODULE: ./src/components/assets/happyclient.jpg
var happyclient_namespaceObject = "/images/happyclient.jpg";
;// CONCATENATED MODULE: ./src/components/assets/flowchart.jpg
var flowchart_namespaceObject = "/images/flowchart.jpg";
;// CONCATENATED MODULE: ./src/components/assets/blogcover.jpg
var blogcover_namespaceObject = "/images/blogcover.jpg";
// EXTERNAL MODULE: ./node_modules/react-intersection-observer/index.mjs
var react_intersection_observer = __webpack_require__(2708);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(3745);
;// CONCATENATED MODULE: ./src/routes/Info.js
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









var Info = function Info(_ref) {
  var handleScroll = _ref.handleScroll,
    scrollPosition = _ref.scrollPosition;
  var elementRef = (0,react.useRef)(null);
  var navRef = (0,react.useRef)(null);
  var emailInput = (0,react.useRef)(null);
  var emailInvalid = (0,react.useRef)();
  var _useState = (0,react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    windowSize = _useState2[0],
    setWindowSize = _useState2[1];
  (0,react.useEffect)(function () {
    setTimeout(function () {
      elementRef.current.classList.remove('hide-i');
    }, 3000);
    var scroll = function scroll() {
      try {
        navRef.current.classList.add('scroll');
      } catch (error) {
        console.log(error);
      }
      handleScroll();
    };
    window.addEventListener('scroll', scroll);
    setWindowSize(window.innerWidth);
    return function () {
      window.removeEventListener('scroll', scroll);
    };
  }, []);
  console.log(scrollPosition);
  (0,react.useEffect)(function () {
    var btns = Array.from(navRef.current.lastChild.children);
    var currentId = '';
    if (scrollPosition < 650) {
      btns[0].firstChild.classList.add('highlight');
      currentId = btns[0].id;
    } else if (scrollPosition > 650 && scrollPosition < 1360) {
      btns[1].firstChild.classList.add('highlight');
      currentId = btns[1].id;
    } else if (scrollPosition > 1360 && scrollPosition < 2000) {
      btns[2].firstChild.classList.add('highlight');
      currentId = btns[2].id;
    } else {
      btns[3].firstChild.classList.add('highlight');
      currentId = btns[3].id;
      console.log(currentId);
    }
    btns.filter(function (b) {
      return b.id !== currentId;
    }).forEach(function (btn) {
      return btn.firstChild.classList.remove('highlight');
    });
  }, [scrollPosition]);
  function handleClose() {
    elementRef.current.classList.add('hide-i');
  }
  function handleObserve(inView, entry) {
    console.log(entry);
    switch (entry.target.id) {
      case '1':
        if (inView) entry.target.classList.remove('fade-left');
        break;
      case '2':
        if (inView) entry.target.classList.remove('fade-right');
    }
  }
  function handleSubmit(_x2) {
    return _handleSubmit.apply(this, arguments);
  }
  function _handleSubmit() {
    _handleSubmit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ref) {
      var text;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            text = [ref.current.value];
            console.log(text);
            if (!text[0].includes('@')) {
              _context.next = 8;
              break;
            }
            _context.next = 5;
            return fetch('/submit', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(text)
            }).then(function (res) {
              return alert('Email Sent');
            }).catch(function (err) {
              return alert('An error occurred, Please try again');
            });
          case 5:
            ref.current.value = '';
            _context.next = 10;
            break;
          case 8:
            emailInvalid.current.classList.add('on');
            setTimeout(function () {
              emailInvalid.current.classList.remove('on');
            }, 2500);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }
  return /*#__PURE__*/react.createElement("div", {
    className: "infopage"
  }, /*#__PURE__*/react.createElement("div", {
    className: "guide-i"
  }, /*#__PURE__*/react.createElement("div", {
    ref: navRef,
    className: "nav-section"
  }, /*#__PURE__*/react.createElement("h1", null, "Featured"), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", {
    id: "b1"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn-ip"
  }, "A1")), /*#__PURE__*/react.createElement("li", {
    id: "b2"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn-ip"
  }, "A2")), /*#__PURE__*/react.createElement("li", {
    id: "b3"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn-ip"
  }, "A3")), /*#__PURE__*/react.createElement("li", {
    id: "b4"
  }, /*#__PURE__*/react.createElement("button", {
    className: "btn-ip"
  }, "A4"))))), /*#__PURE__*/react.createElement("div", {
    ref: elementRef,
    className: "content-ip hide-i"
  }, /*#__PURE__*/react.createElement("h2", null, "Recieve Free Guide"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    name: "emailForm",
    ref: emailInput,
    placeholder: "Enter",
    type: "text",
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: email_namespaceObject,
    alt: "",
    id: "email-ip"
  })), /*#__PURE__*/react.createElement("p", {
    className: "emailSubmit",
    ref: emailInvalid
  }, "Email Invalid"), /*#__PURE__*/react.createElement("p", null, "Get an in-depth & personalized business analysis "), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("button", {
    className: "submit-ip",
    onClick: function onClick() {
      return handleSubmit(emailInput);
    }
  }, "Submit"), /*#__PURE__*/react.createElement("button", {
    onClick: function onClick() {
      return handleClose();
    },
    className: "submit-ip"
  }, "Close"))), /*#__PURE__*/react.createElement("div", {
    className: "cards-ip"
  }, /*#__PURE__*/react.createElement("div", {
    className: "c-section"
  }, /*#__PURE__*/react.createElement(react_intersection_observer/* InView */.df, {
    onChange: handleObserve,
    threshold: windowSize > 500 ? .5 : 0
  }, function (_ref2) {
    var inView = _ref2.inView,
      ref = _ref2.ref;
    return /*#__PURE__*/react.createElement("div", {
      ref: ref,
      id: 1,
      className: "card-ip f1 fade-left"
    }, /*#__PURE__*/react.createElement("img", {
      src: flowchart_namespaceObject,
      alt: "",
      id: "tech-ip"
    }), /*#__PURE__*/react.createElement("p", null, "Captivating Lead Strategy"), /*#__PURE__*/react.createElement("div", {
      className: "d d1"
    }), /*#__PURE__*/react.createElement("div", {
      className: "d d2"
    }));
  }), /*#__PURE__*/react.createElement(react_intersection_observer/* InView */.df, {
    onChange: handleObserve,
    threshold: windowSize > 500 ? .5 : 0
  }, function (_ref3) {
    var inView = _ref3.inView,
      ref = _ref3.ref;
    return /*#__PURE__*/react.createElement("div", {
      ref: ref,
      id: 2,
      className: "blog-ip fade-right"
    }, /*#__PURE__*/react.createElement("h1", null, "How It Works"), /*#__PURE__*/react.createElement("div", {
      className: "blog-content-ip"
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("h2", null, "Initital Interaction"), windowSize > 500 ? /*#__PURE__*/react.createElement("p", null, "Customers and Merchants from around the world opt into your sales funnel through Live Call/SMS/Email. Upon Interaction, LEAD begins collecting valuble consumer data.") : /*#__PURE__*/react.createElement("p", null, "Customers and Merchants from around the world opt into your sales funnel through Live Call/SMS/Email.")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("h2", null, "Prompt Retargeting"), windowSize > 500 ? /*#__PURE__*/react.createElement("p", null, "Once sufficient data is collected from Call/SMS our lead is then sent an effective follow up package containing vital onboarding information via Google & Twilio APIs") : /*#__PURE__*/react.createElement("p", null, " Once sufficient data is collected from Call/SMS our lead is then sent an effective follow up package containing vital onboarding information")), /*#__PURE__*/react.createElement("span", {
      className: "last-span-ip"
    }, /*#__PURE__*/react.createElement("h2", null, "Stored Data"), windowSize > 500 ? /*#__PURE__*/react.createElement("p", null, "LEAD then stores the data and repurposes it to automate tedious tasks (Appointment Setting, Creating Email Lists, Automatic Replies)") : /*#__PURE__*/react.createElement("p", null, " LEAD then stores the data and repurposes it to automate tedious tasks "))));
  })), /*#__PURE__*/react.createElement("div", {
    className: "c-section r2"
  }, /*#__PURE__*/react.createElement(react_intersection_observer/* InView */.df, {
    onChange: handleObserve,
    threshold: windowSize > 500 ? .5 : 0
  }, function (_ref4) {
    var inView = _ref4.inView,
      ref = _ref4.ref;
    return /*#__PURE__*/react.createElement("div", {
      ref: ref,
      id: 1,
      className: "card-ip f1 fade-left"
    }, /*#__PURE__*/react.createElement("img", {
      src: happyclient_namespaceObject,
      alt: "",
      id: "tech-ip"
    }), /*#__PURE__*/react.createElement("p", null, "Building relationships & Exceeding expectations"), /*#__PURE__*/react.createElement("div", {
      className: "d d1"
    }), /*#__PURE__*/react.createElement("div", {
      className: "d d2"
    }));
  }), /*#__PURE__*/react.createElement(react_intersection_observer/* InView */.df, {
    onChange: handleObserve,
    threshold: windowSize > 500 ? .5 : 0
  }, function (_ref5) {
    var inView = _ref5.inView,
      ref = _ref5.ref;
    return /*#__PURE__*/react.createElement("div", {
      ref: ref,
      id: 2,
      className: "blog-ip fade-right"
    }, /*#__PURE__*/react.createElement("h1", null, "Client Satisfaction"), /*#__PURE__*/react.createElement("div", {
      className: "blog-content-ip"
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("h2", null, "Happy Clients"), /*#__PURE__*/react.createElement("p", null, "Ensuring client satisfaction is a top priority for every business.LEAD ensures a great impression accross all client interactions to secure credibility without the need for human presence")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("h2", null, "Accessible Assistance"), /*#__PURE__*/react.createElement("p", null, "Clients are also free to opt for a interaction with one of your representatives from your company. This allows LEAD to act as a saftey net for any client calls or attempts to reach out are effectively recovered."))));
  })), /*#__PURE__*/react.createElement("div", {
    className: "c-section"
  }, /*#__PURE__*/react.createElement(react_intersection_observer/* InView */.df, {
    onChange: handleObserve,
    threshold: windowSize > 500 ? .5 : 0
  }, function (_ref6) {
    var inView = _ref6.inView,
      ref = _ref6.ref;
    return /*#__PURE__*/react.createElement("div", {
      ref: ref,
      id: 1,
      className: "card-ip f1 fade-left"
    }, /*#__PURE__*/react.createElement("img", {
      src: blogcover_namespaceObject,
      alt: "",
      id: "tech-ip"
    }), /*#__PURE__*/react.createElement("p", null, "Give Potential Clients Clarity In The Market"), /*#__PURE__*/react.createElement("div", {
      className: "d d1"
    }), /*#__PURE__*/react.createElement("div", {
      className: "d d2"
    }));
  }), /*#__PURE__*/react.createElement(react_intersection_observer/* InView */.df, {
    onChange: handleObserve,
    threshold: windowSize > 500 ? .5 : 0
  }, function (_ref7) {
    var inView = _ref7.inView,
      ref = _ref7.ref;
    return /*#__PURE__*/react.createElement("div", {
      ref: ref,
      id: 2,
      className: "blog-ip fade-right"
    }, /*#__PURE__*/react.createElement("h1", null, "Business Visibility"), /*#__PURE__*/react.createElement("div", {
      className: "blog-content-ip"
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("h2", null, "Stand Out"), windowSize > 500 ? /*#__PURE__*/react.createElement("p", null, "There are approximately 30 million active businesses in North America. The attributes that make your business unique are embedded in the services/product offering and how it is presented. Implementing LEAD as a co-pilot allows you to focus on what matters most") : /*#__PURE__*/react.createElement("p", null, "There are approximately 30 million active businesses in North America. The attributes that make your business unique are embedded in the services/product offering and how it is presented")), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("h2", null, "Take Control"), windowSize > 500 ? /*#__PURE__*/react.createElement("p", null, "By taking control and partnering with our web services agency, you unlock the power to elevate your online presence and drive exceptional results. Our tailored strategies and cutting-edge solutions empower you to reach new heights, captivate your target audience, and outshine your competition.") : /*#__PURE__*/react.createElement("p", null, "By taking control and partnering with our web services agency, you unlock the power to elevate your online presence and drive exceptional results."))));
  })), /*#__PURE__*/react.createElement("div", {
    className: "c-section r4"
  }, /*#__PURE__*/react.createElement(react_intersection_observer/* InView */.df, {
    onChange: handleObserve,
    threshold: windowSize > 500 ? .5 : 0
  }, function (_ref8) {
    var inView = _ref8.inView,
      ref = _ref8.ref;
    return /*#__PURE__*/react.createElement("div", {
      ref: ref,
      id: 1,
      className: "card-ip f1 fade-left"
    }, /*#__PURE__*/react.createElement("img", {
      src: auto_namespaceObject,
      alt: "",
      id: "tech-ip"
    }), /*#__PURE__*/react.createElement("p", null, "Time Is Money"), /*#__PURE__*/react.createElement("div", {
      className: "d d1"
    }), /*#__PURE__*/react.createElement("div", {
      className: "d d2"
    }));
  }), /*#__PURE__*/react.createElement(react_intersection_observer/* InView */.df, {
    onChange: handleObserve,
    threshold: windowSize > 500 ? .5 : 0
  }, function (_ref9) {
    var inView = _ref9.inView,
      ref = _ref9.ref;
    return /*#__PURE__*/react.createElement("div", {
      ref: ref,
      id: 2,
      className: "blog-ip fade-right"
    }, /*#__PURE__*/react.createElement("h1", null, "Seamless Automation"), /*#__PURE__*/react.createElement("div", {
      className: "blog-content-ip"
    }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("h2", null, "Automate Everything"), windowSize > 500 ? /*#__PURE__*/react.createElement("p", null, "Embracing automation holds the key to unlocking unprecedented efficiency and productivity for your business. By implementing automated processes, you can streamline repetitive tasks, eliminate human error, and free up valuable time for your team to focus on strategic initiatives and creative problem-solving. Experience accelerated growth, improved scalability, and a competitive edge in today's fast-paced digital landscape by harnessing the transformative power of automation.") : /*#__PURE__*/react.createElement("p", null, "  Embracing automation holds the key to unlocking unprecedented efficiency and productivity for your business. By implementing automated processes, you can streamline repetitive tasks, eliminate human error, and free up valuable time for your team to focus on strategic initiatives and creative problem-solving."))));
  }))));
};
/* harmony default export */ var routes_Info = (Info);
;// CONCATENATED MODULE: ./src/routes/InfoPage.js
function InfoPage_slicedToArray(arr, i) {
  return InfoPage_arrayWithHoles(arr) || InfoPage_iterableToArrayLimit(arr, i) || InfoPage_unsupportedIterableToArray(arr, i) || InfoPage_nonIterableRest();
}
function InfoPage_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function InfoPage_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return InfoPage_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return InfoPage_arrayLikeToArray(o, minLen);
}
function InfoPage_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function InfoPage_iterableToArrayLimit(arr, i) {
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
function InfoPage_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}





var InfoPage = function InfoPage() {
  var _useState = (0,react.useState)(0),
    _useState2 = InfoPage_slicedToArray(_useState, 2),
    scrollPosition = _useState2[0],
    setScrollPosition = _useState2[1];
  function handleScroll() {
    var position = window.scrollY;
    setScrollPosition(position);
  }
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Nav/* default */.Z, null), /*#__PURE__*/react.createElement(routes_Info, {
    handleScroll: handleScroll,
    scrollPosition: scrollPosition
  }), /*#__PURE__*/react.createElement(Footer/* default */.Z, null));
};
/* harmony default export */ var routes_InfoPage = (InfoPage);

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