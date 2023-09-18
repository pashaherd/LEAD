"use strict";
(self["webpackChunkviews"] = self["webpackChunkviews"] || []).push([[269],{

/***/ 3845:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Shop; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(3279);
// EXTERNAL MODULE: ./src/components/assets/lead-white.png
var lead_white = __webpack_require__(1711);
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
var modules = __webpack_require__(4478);
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



var SForm = function SForm() {
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
  }, "Phone"), /*#__PURE__*/react.createElement("input", {
    required: true,
    type: "text",
    name: "phone",
    id: "phone-s",
    placeholder: "Enter"
  }))), /*#__PURE__*/react.createElement("fieldset", {
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
var Footer = __webpack_require__(8621);
;// CONCATENATED MODULE: ./src/Shop.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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









function App() {
  var _useState = (0,react.useState)(['backwards', 'before', 'forward', 'after']),
    _useState2 = _slicedToArray(_useState, 2),
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3279);
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