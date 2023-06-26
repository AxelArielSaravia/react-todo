var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node_modules/react/cjs/react.production.min.js
var exports_react_production_min = {};
__export(exports_react_production_min, {
  version: () => {
    {
      return $version;
    }
  },
  useTransition: () => {
    {
      return $useTransition;
    }
  },
  useSyncExternalStore: () => {
    {
      return $useSyncExternalStore;
    }
  },
  useState: () => {
    {
      return $useState;
    }
  },
  useRef: () => {
    {
      return $useRef;
    }
  },
  useReducer: () => {
    {
      return $useReducer;
    }
  },
  useMemo: () => {
    {
      return $useMemo;
    }
  },
  useLayoutEffect: () => {
    {
      return $useLayoutEffect;
    }
  },
  useInsertionEffect: () => {
    {
      return $useInsertionEffect;
    }
  },
  useImperativeHandle: () => {
    {
      return $useImperativeHandle;
    }
  },
  useId: () => {
    {
      return $useId;
    }
  },
  useEffect: () => {
    {
      return $useEffect;
    }
  },
  useDeferredValue: () => {
    {
      return $useDeferredValue;
    }
  },
  useDebugValue: () => {
    {
      return $useDebugValue;
    }
  },
  useContext: () => {
    {
      return $useContext;
    }
  },
  useCallback: () => {
    {
      return $useCallback;
    }
  },
  unstable_act: () => {
    {
      return $unstable_act;
    }
  },
  startTransition: () => {
    {
      return $startTransition;
    }
  },
  memo: () => {
    {
      return $memo;
    }
  },
  lazy: () => {
    {
      return $lazy;
    }
  },
  isValidElement: () => {
    {
      return $isValidElement;
    }
  },
  forwardRef: () => {
    {
      return $forwardRef;
    }
  },
  createRef: () => {
    {
      return $createRef;
    }
  },
  createFactory: () => {
    {
      return $createFactory;
    }
  },
  createElement: () => {
    {
      return $createElement;
    }
  },
  createContext: () => {
    {
      return $createContext;
    }
  },
  cloneElement: () => {
    {
      return $cloneElement;
    }
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => {
    {
      return $__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    }
  },
  Suspense: () => {
    {
      return $Suspense;
    }
  },
  StrictMode: () => {
    {
      return $StrictMode;
    }
  },
  PureComponent: () => {
    {
      return $PureComponent;
    }
  },
  Profiler: () => {
    {
      return $Profiler;
    }
  },
  Fragment: () => {
    {
      return $Fragment;
    }
  },
  Component: () => {
    {
      return $Component;
    }
  },
  Children: () => {
    {
      return $Children;
    }
  }
});
var $Children, $Component, $Fragment, $Profiler, $PureComponent, $StrictMode, $Suspense, $__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $cloneElement, $createContext, $createElement, $createFactory, $createRef, $forwardRef, $isValidElement, $lazy, $memo, $startTransition, $unstable_act, $useCallback, $useContext, $useDebugValue, $useDeferredValue, $useEffect, $useId, $useImperativeHandle, $useInsertionEffect, $useLayoutEffect, $useMemo, $useReducer, $useRef, $useState, $useSyncExternalStore, $useTransition, $version;
var init_react_production_min = __esm(() => {
  var A = function(a) {
    if (a === null || typeof a !== "object")
      return null;
    a = z && a[z] || a["@@iterator"];
    return typeof a === "function" ? a : null;
  };
  var E = function(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  };
  var F = function() {
  };
  var G = function(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  };
  var M = function(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (b != null)
      for (d in b.ref !== undefined && (h = b.ref), b.key !== undefined && (k = "" + b.key), b)
        J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (g === 1)
      c.children = e;
    else if (1 < g) {
      for (var f = Array(g), m = 0;m < g; m++)
        f[m] = arguments[m + 2];
      c.children = f;
    }
    if (a && a.defaultProps)
      for (d in g = a.defaultProps, g)
        c[d] === undefined && (c[d] = g[d]);
    return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
  };
  var N = function(a, b) {
    return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
  };
  var O = function(a) {
    return typeof a === "object" && a !== null && a.$$typeof === l;
  };
  var escape = function(a) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  };
  var Q = function(a, b) {
    return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
  };
  var R = function(a, b, e, d, c) {
    var k = typeof a;
    if (k === "undefined" || k === "boolean")
      a = null;
    var h = false;
    if (a === null)
      h = true;
    else
      switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
    if (h)
      return h = a, c = c(h), a = d === "" ? "." + Q(h, 0) : d, I(c) ? (e = "", a != null && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : c != null && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = d === "" ? "." : d + ":";
    if (I(a))
      for (var g = 0;g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
    else if (f = A(a), typeof f === "function")
      for (a = f.call(a), g = 0;!(k = a.next()).done; )
        k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
    else if (k === "object")
      throw b = String(a), Error("Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
  };
  var S = function(a, b, e) {
    if (a == null)
      return a;
    var d = [], c = 0;
    R(a, d, "", "", function(a2) {
      return b.call(e, a2, c++);
    });
    return d;
  };
  var T = function(a) {
    if (a._status === -1) {
      var b = a._result;
      b = b();
      b.then(function(b2) {
        if (a._status === 0 || a._status === -1)
          a._status = 1, a._result = b2;
      }, function(b2) {
        if (a._status === 0 || a._status === -1)
          a._status = 2, a._result = b2;
      });
      a._status === -1 && (a._status = 0, a._result = b);
    }
    if (a._status === 1)
      return a._result.default;
    throw a._result;
  };
  var l = Symbol.for("react.element");
  var n = Symbol.for("react.portal");
  var p = Symbol.for("react.fragment");
  var q = Symbol.for("react.strict_mode");
  var r = Symbol.for("react.profiler");
  var t = Symbol.for("react.provider");
  var u = Symbol.for("react.context");
  var v = Symbol.for("react.forward_ref");
  var w = Symbol.for("react.suspense");
  var x = Symbol.for("react.memo");
  var y = Symbol.for("react.lazy");
  var z = Symbol.iterator;
  var B = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } };
  var C = Object.assign;
  var D = {};
  E.prototype.isReactComponent = {};
  E.prototype.setState = function(a, b) {
    if (typeof a !== "object" && typeof a !== "function" && a != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  F.prototype = E.prototype;
  var H = G.prototype = new F;
  H.constructor = G;
  C(H, E.prototype);
  H.isPureReactComponent = true;
  var I = Array.isArray;
  var J = Object.prototype.hasOwnProperty;
  var K = { current: null };
  var L = { key: true, ref: true, __self: true, __source: true };
  var P = /\/+/g;
  var U = { current: null };
  var V = { transition: null };
  var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
  $Children = { map: S, forEach: function(a, b, e) {
    S(a, function() {
      b.apply(this, arguments);
    }, e);
  }, count: function(a) {
    var b = 0;
    S(a, function() {
      b++;
    });
    return b;
  }, toArray: function(a) {
    return S(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!O(a))
      throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } };
  $Component = E;
  $Fragment = p;
  $Profiler = r;
  $PureComponent = G;
  $StrictMode = q;
  $Suspense = w;
  $__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
  $cloneElement = function(a, b, e) {
    if (a === null || a === undefined)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (b != null) {
      b.ref !== undefined && (k = b.ref, h = K.current);
      b.key !== undefined && (c = "" + b.key);
      if (a.type && a.type.defaultProps)
        var g = a.type.defaultProps;
      for (f in b)
        J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = b[f] === undefined && g !== undefined ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (f === 1)
      d.children = e;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0;m < f; m++)
        g[m] = arguments[m + 2];
      d.children = g;
    }
    return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
  };
  $createContext = function(a) {
    a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a.Provider = { $$typeof: t, _context: a };
    return a.Consumer = a;
  };
  $createElement = M;
  $createFactory = function(a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  };
  $createRef = function() {
    return { current: null };
  };
  $forwardRef = function(a) {
    return { $$typeof: v, render: a };
  };
  $isValidElement = O;
  $lazy = function(a) {
    return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
  };
  $memo = function(a, b) {
    return { $$typeof: x, type: a, compare: b === undefined ? null : b };
  };
  $startTransition = function(a) {
    var b = V.transition;
    V.transition = {};
    try {
      a();
    } finally {
      V.transition = b;
    }
  };
  $unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  };
  $useCallback = function(a, b) {
    return U.current.useCallback(a, b);
  };
  $useContext = function(a) {
    return U.current.useContext(a);
  };
  $useDebugValue = function() {
  };
  $useDeferredValue = function(a) {
    return U.current.useDeferredValue(a);
  };
  $useEffect = function(a, b) {
    return U.current.useEffect(a, b);
  };
  $useId = function() {
    return U.current.useId();
  };
  $useImperativeHandle = function(a, b, e) {
    return U.current.useImperativeHandle(a, b, e);
  };
  $useInsertionEffect = function(a, b) {
    return U.current.useInsertionEffect(a, b);
  };
  $useLayoutEffect = function(a, b) {
    return U.current.useLayoutEffect(a, b);
  };
  $useMemo = function(a, b) {
    return U.current.useMemo(a, b);
  };
  $useReducer = function(a, b, e) {
    return U.current.useReducer(a, b, e);
  };
  $useRef = function(a) {
    return U.current.useRef(a);
  };
  $useState = function(a) {
    return U.current.useState(a);
  };
  $useSyncExternalStore = function(a, b, e) {
    return U.current.useSyncExternalStore(a, b, e);
  };
  $useTransition = function() {
    return U.current.useTransition();
  };
  $version = "18.2.0";
});

// node_modules/react/index.js
var require_react = __commonJS((exports, module) => {
  init_react_production_min();
  if (true) {
    module.exports = (exports_react_production_min);
  } else {
  }
});

// node_modules/scheduler/cjs/scheduler.production.min.js
var exports_scheduler_production_min = {};
__export(exports_scheduler_production_min, {
  unstable_wrapCallback: () => {
    {
      return $unstable_wrapCallback;
    }
  },
  unstable_shouldYield: () => {
    {
      return $unstable_shouldYield;
    }
  },
  unstable_scheduleCallback: () => {
    {
      return $unstable_scheduleCallback;
    }
  },
  unstable_runWithPriority: () => {
    {
      return $unstable_runWithPriority;
    }
  },
  unstable_requestPaint: () => {
    {
      return $unstable_requestPaint;
    }
  },
  unstable_pauseExecution: () => {
    {
      return $unstable_pauseExecution;
    }
  },
  unstable_now: () => {
    {
      return $unstable_now;
    }
  },
  unstable_next: () => {
    {
      return $unstable_next;
    }
  },
  unstable_getFirstCallbackNode: () => {
    {
      return $unstable_getFirstCallbackNode;
    }
  },
  unstable_getCurrentPriorityLevel: () => {
    {
      return $unstable_getCurrentPriorityLevel;
    }
  },
  unstable_forceFrameRate: () => {
    {
      return $unstable_forceFrameRate;
    }
  },
  unstable_continueExecution: () => {
    {
      return $unstable_continueExecution;
    }
  },
  unstable_cancelCallback: () => {
    {
      return $unstable_cancelCallback;
    }
  },
  unstable_UserBlockingPriority: () => {
    {
      return $unstable_UserBlockingPriority;
    }
  },
  unstable_Profiling: () => {
    {
      return $unstable_Profiling;
    }
  },
  unstable_NormalPriority: () => {
    {
      return $unstable_NormalPriority;
    }
  },
  unstable_LowPriority: () => {
    {
      return $unstable_LowPriority;
    }
  },
  unstable_ImmediatePriority: () => {
    {
      return $unstable_ImmediatePriority;
    }
  },
  unstable_IdlePriority: () => {
    {
      return $unstable_IdlePriority;
    }
  }
});
var $unstable_now, $unstable_IdlePriority, $unstable_ImmediatePriority, $unstable_LowPriority, $unstable_NormalPriority, $unstable_Profiling, $unstable_UserBlockingPriority, $unstable_cancelCallback, $unstable_continueExecution, $unstable_forceFrameRate, $unstable_getCurrentPriorityLevel, $unstable_getFirstCallbackNode, $unstable_next, $unstable_pauseExecution, $unstable_requestPaint, $unstable_runWithPriority, $unstable_scheduleCallback, $unstable_shouldYield, $unstable_wrapCallback;
var init_scheduler_production_min = __esm(() => {
  var f = function(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (;0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  };
  var h = function(a) {
    return a.length === 0 ? null : a[0];
  };
  var k = function(a) {
    if (a.length === 0)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e = a.length, w2 = e >>> 1;d < w2; ) {
          var m = 2 * (d + 1) - 1, C2 = a[m], n2 = m + 1, x2 = a[n2];
          if (0 > g(C2, c))
            n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m] = c, d = m);
          else if (n2 < e && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b;
  };
  var g = function(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  };
  var G2 = function(a) {
    for (var b = h(t2);b !== null; ) {
      if (b.callback === null)
        k(t2);
      else if (b.startTime <= a)
        k(t2), b.sortIndex = b.expirationTime, f(r2, b);
      else
        break;
      b = h(t2);
    }
  };
  var H2 = function(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (h(r2) !== null)
        A2 = true, I2(J2);
      else {
        var b = h(t2);
        b !== null && K2(H2, b.startTime - a);
      }
  };
  var J2 = function(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2);v2 !== null && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if (typeof d === "function") {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = $unstable_now();
          typeof e === "function" ? v2.callback = e : v2 === h(r2) && k(r2);
          G2(b);
        } else
          k(r2);
        v2 = h(r2);
      }
      if (v2 !== null)
        var w2 = true;
      else {
        var m = h(t2);
        m !== null && K2(H2, m.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  };
  var M2 = function() {
    return $unstable_now() - Q2 < P2 ? false : true;
  };
  var R2 = function() {
    if (O2 !== null) {
      var a = $unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  };
  var I2 = function(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  };
  var K2 = function(a, b) {
    L2 = D2(function() {
      a($unstable_now());
    }, b);
  };
  if (typeof performance === "object" && typeof performance.now === "function") {
    l2 = performance;
    $unstable_now = function() {
      return l2.now();
    };
  } else {
    p2 = Date, q2 = p2.now();
    $unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var l2;
  var p2;
  var q2;
  var r2 = [];
  var t2 = [];
  var u2 = 1;
  var v2 = null;
  var y2 = 3;
  var z2 = false;
  var A2 = false;
  var B2 = false;
  var D2 = typeof setTimeout === "function" ? setTimeout : null;
  var E2 = typeof clearTimeout === "function" ? clearTimeout : null;
  var F2 = typeof setImmediate !== "undefined" ? setImmediate : null;
  typeof navigator !== "undefined" && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  var N2 = false;
  var O2 = null;
  var L2 = -1;
  var P2 = 5;
  var Q2 = -1;
  var S2;
  if (typeof F2 === "function")
    S2 = function() {
      F2(R2);
    };
  else if (typeof MessageChannel !== "undefined") {
    T2 = new MessageChannel, U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  var T2;
  var U2;
  $unstable_IdlePriority = 5;
  $unstable_ImmediatePriority = 1;
  $unstable_LowPriority = 4;
  $unstable_NormalPriority = 3;
  $unstable_Profiling = null;
  $unstable_UserBlockingPriority = 2;
  $unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  $unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  $unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1000 / a) : 5;
  };
  $unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  $unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  $unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  $unstable_pauseExecution = function() {
  };
  $unstable_requestPaint = function() {
  };
  $unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  $unstable_scheduleCallback = function(a, b, c) {
    var d = $unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5000;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f(t2, a), h(r2) === null && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  $unstable_shouldYield = M2;
  $unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
});

// node_modules/scheduler/index.js
var require_scheduler = __commonJS((exports, module) => {
  init_scheduler_production_min();
  if (true) {
    module.exports = (exports_scheduler_production_min);
  } else {
  }
});

// node_modules/react-dom/cjs/react-dom.production.min.js
var exports_react_dom_production_min = {};
__export(exports_react_dom_production_min, {
  version: () => {
    {
      return $version2;
    }
  },
  unstable_renderSubtreeIntoContainer: () => {
    {
      return $unstable_renderSubtreeIntoContainer;
    }
  },
  unstable_batchedUpdates: () => {
    {
      return $unstable_batchedUpdates;
    }
  },
  unmountComponentAtNode: () => {
    {
      return $unmountComponentAtNode;
    }
  },
  render: () => {
    {
      return $render;
    }
  },
  hydrateRoot: () => {
    {
      return $hydrateRoot;
    }
  },
  hydrate: () => {
    {
      return $hydrate;
    }
  },
  flushSync: () => {
    {
      return $flushSync;
    }
  },
  findDOMNode: () => {
    {
      return $findDOMNode;
    }
  },
  createRoot: () => {
    {
      return $createRoot;
    }
  },
  createPortal: () => {
    {
      return $createPortal;
    }
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => {
    {
      return $__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2;
    }
  }
});
var $__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2, $createPortal, $createRoot, $findDOMNode, $flushSync, $hydrate, $hydrateRoot, $render, $unmountComponentAtNode, $unstable_batchedUpdates, $unstable_renderSubtreeIntoContainer, $version2;
var init_react_dom_production_min = __esm(() => {
  var aa = __toESM(require_react(), 1);
  var ca = __toESM(require_scheduler(), 1);
  var p2 = function(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1;c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  };
  var fa = function(a, b) {
    ha(a, b);
    ha(a + "Capture", b);
  };
  var ha = function(a, b) {
    ea[a] = b;
    for (a = 0;a < b.length; a++)
      da.add(b[a]);
  };
  var oa = function(a) {
    if (ja.call(ma, a))
      return true;
    if (ja.call(la, a))
      return false;
    if (ka.test(a))
      return ma[a] = true;
    la[a] = true;
    return false;
  };
  var pa = function(a, b, c, d) {
    if (c !== null && c.type === 0)
      return false;
    switch (typeof b) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d)
          return false;
        if (c !== null)
          return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return a !== "data-" && a !== "aria-";
      default:
        return false;
    }
  };
  var qa = function(a, b, c, d) {
    if (b === null || typeof b === "undefined" || pa(a, b, c, d))
      return true;
    if (d)
      return false;
    if (c !== null)
      switch (c.type) {
        case 3:
          return !b;
        case 4:
          return b === false;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
    return false;
  };
  var v3 = function(a, b, c, d, e, f2, g2) {
    this.acceptsBooleans = b === 2 || b === 3 || b === 4;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f2;
    this.removeEmptyString = g2;
  };
  var sa = function(a) {
    return a[1].toUpperCase();
  };
  var ta = function(a, b, c, d) {
    var e = z3.hasOwnProperty(b) ? z3[b] : null;
    if (e !== null ? e.type !== 0 : d || !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N")
      qa(b, c, e, d) && (c = null), d || e === null ? oa(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
  };
  var Ka = function(a) {
    if (a === null || typeof a !== "object")
      return null;
    a = Ja && a[Ja] || a["@@iterator"];
    return typeof a === "function" ? a : null;
  };
  var Ma = function(a) {
    if (La === undefined)
      try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
      }
    return "\n" + La + a;
  };
  var Oa = function(a, b) {
    if (!a || Na)
      return "";
    Na = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = undefined;
    try {
      if (b)
        if (b = function() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect === "object" && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l2) {
            var d = l2;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l2) {
            d = l2;
          }
          a.call(b.prototype);
        }
      else {
        try {
          throw Error();
        } catch (l2) {
          d = l2;
        }
        a();
      }
    } catch (l2) {
      if (l2 && d && typeof l2.stack === "string") {
        for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g2 = e.length - 1, h2 = f2.length - 1;1 <= g2 && 0 <= h2 && e[g2] !== f2[h2]; )
          h2--;
        for (;1 <= g2 && 0 <= h2; g2--, h2--)
          if (e[g2] !== f2[h2]) {
            if (g2 !== 1 || h2 !== 1) {
              do
                if (g2--, h2--, 0 > h2 || e[g2] !== f2[h2]) {
                  var k2 = "\n" + e[g2].replace(" at new ", " at ");
                  a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                  return k2;
                }
              while (1 <= g2 && 0 <= h2);
            }
            break;
          }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
  };
  var Pa = function(a) {
    switch (a.tag) {
      case 5:
        return Ma(a.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = Oa(a.type, false), a;
      case 11:
        return a = Oa(a.type.render, false), a;
      case 1:
        return a = Oa(a.type, true), a;
      default:
        return "";
    }
  };
  var Qa = function(a) {
    if (a == null)
      return null;
    if (typeof a === "function")
      return a.displayName || a.name || null;
    if (typeof a === "string")
      return a;
    switch (a) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if (typeof a === "object")
      switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b = a.displayName || null, b !== null ? b : Qa(a.type) || "Memo";
        case Ha:
          b = a._payload;
          a = a._init;
          try {
            return Qa(a(b));
          } catch (c) {
          }
      }
    return null;
  };
  var Ra = function(a) {
    var b = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b.displayName || "Context") + ".Consumer";
      case 10:
        return (b._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b);
      case 8:
        return b === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof b === "function")
          return b.displayName || b.name || null;
        if (typeof b === "string")
          return b;
    }
    return null;
  };
  var Sa = function(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a;
      case "object":
        return a;
      default:
        return "";
    }
  };
  var Ta = function(a) {
    var b = a.type;
    return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
  };
  var Ua = function(a) {
    var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
      var { get: e, set: f2 } = c;
      Object.defineProperty(a, b, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a2) {
        d = "" + a2;
        f2.call(this, a2);
      } });
      Object.defineProperty(a, b, { enumerable: c.enumerable });
      return { getValue: function() {
        return d;
      }, setValue: function(a2) {
        d = "" + a2;
      }, stopTracking: function() {
        a._valueTracker = null;
        delete a[b];
      } };
    }
  };
  var Va = function(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  };
  var Wa = function(a) {
    if (!a)
      return false;
    var b = a._valueTracker;
    if (!b)
      return true;
    var c = b.getValue();
    var d = "";
    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), true) : false;
  };
  var Xa = function(a) {
    a = a || (typeof document !== "undefined" ? document : undefined);
    if (typeof a === "undefined")
      return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  };
  var Ya = function(a, b) {
    var c = b.checked;
    return A3({}, b, { defaultChecked: undefined, defaultValue: undefined, value: undefined, checked: c != null ? c : a._wrapperState.initialChecked });
  };
  var Za = function(a, b) {
    var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
    c = Sa(b.value != null ? b.value : c);
    a._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
  };
  var ab = function(a, b) {
    b = b.checked;
    b != null && ta(a, "checked", b, false);
  };
  var bb = function(a, b) {
    ab(a, b);
    var c = Sa(b.value), d = b.type;
    if (c != null)
      if (d === "number") {
        if (c === 0 && a.value === "" || a.value != c)
          a.value = "" + c;
      } else
        a.value !== "" + c && (a.value = "" + c);
    else if (d === "submit" || d === "reset") {
      a.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
    b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
  };
  var db = function(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (!(d !== "submit" && d !== "reset" || b.value !== undefined && b.value !== null))
        return;
      b = "" + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    c !== "" && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    c !== "" && (a.name = c);
  };
  var cb = function(a, b, c) {
    if (b !== "number" || Xa(a.ownerDocument) !== a)
      c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  };
  var fb = function(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0;e < c.length; e++)
        b["$" + c[e]] = true;
      for (c = 0;c < a.length; c++)
        e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
    } else {
      c = "" + Sa(c);
      b = null;
      for (e = 0;e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = true;
          d && (a[e].defaultSelected = true);
          return;
        }
        b !== null || a[e].disabled || (b = a[e]);
      }
      b !== null && (b.selected = true);
    }
  };
  var gb = function(a, b) {
    if (b.dangerouslySetInnerHTML != null)
      throw Error(p2(91));
    return A3({}, b, { value: undefined, defaultValue: undefined, children: "" + a._wrapperState.initialValue });
  };
  var hb = function(a, b) {
    var c = b.value;
    if (c == null) {
      c = b.children;
      b = b.defaultValue;
      if (c != null) {
        if (b != null)
          throw Error(p2(92));
        if (eb(c)) {
          if (1 < c.length)
            throw Error(p2(93));
          c = c[0];
        }
        b = c;
      }
      b == null && (b = "");
      c = b;
    }
    a._wrapperState = { initialValue: Sa(c) };
  };
  var ib = function(a, b) {
    var c = Sa(b.value), d = Sa(b.defaultValue);
    c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
    d != null && (a.defaultValue = "" + d);
  };
  var jb = function(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
  };
  var kb = function(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  };
  var lb = function(a, b) {
    return a == null || a === "http://www.w3.org/1999/xhtml" ? kb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
  };
  var ob = function(a, b) {
    if (b) {
      var c = a.firstChild;
      if (c && c === a.lastChild && c.nodeType === 3) {
        c.nodeValue = b;
        return;
      }
    }
    a.textContent = b;
  };
  var rb = function(a, b, c) {
    return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
  };
  var sb = function(a, b) {
    a = a.style;
    for (var c in b)
      if (b.hasOwnProperty(c)) {
        var d = c.indexOf("--") === 0, e = rb(c, b[c], d);
        c === "float" && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
  };
  var ub = function(a, b) {
    if (b) {
      if (tb[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
        throw Error(p2(137, a));
      if (b.dangerouslySetInnerHTML != null) {
        if (b.children != null)
          throw Error(p2(60));
        if (typeof b.dangerouslySetInnerHTML !== "object" || !("__html" in b.dangerouslySetInnerHTML))
          throw Error(p2(61));
      }
      if (b.style != null && typeof b.style !== "object")
        throw Error(p2(62));
    }
  };
  var vb = function(a, b) {
    if (a.indexOf("-") === -1)
      return typeof b.is === "string";
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  };
  var xb = function(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return a.nodeType === 3 ? a.parentNode : a;
  };
  var Bb = function(a) {
    if (a = Cb(a)) {
      if (typeof yb !== "function")
        throw Error(p2(280));
      var b = a.stateNode;
      b && (b = Db(b), yb(a.stateNode, a.type, b));
    }
  };
  var Eb = function(a) {
    zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
  };
  var Fb = function() {
    if (zb) {
      var a = zb, b = Ab;
      Ab = zb = null;
      Bb(a);
      if (b)
        for (a = 0;a < b.length; a++)
          Bb(b[a]);
    }
  };
  var Gb = function(a, b) {
    return a(b);
  };
  var Hb = function() {
  };
  var Jb = function(a, b, c) {
    if (Ib)
      return a(b, c);
    Ib = true;
    try {
      return Gb(a, b, c);
    } finally {
      if (Ib = false, zb !== null || Ab !== null)
        Hb(), Fb();
    }
  };
  var Kb = function(a, b) {
    var c = a.stateNode;
    if (c === null)
      return null;
    var d = Db(c);
    if (d === null)
      return null;
    c = d[b];
    a:
      switch (b) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
          a = !d;
          break a;
        default:
          a = false;
      }
    if (a)
      return null;
    if (c && typeof c !== "function")
      throw Error(p2(231, b, typeof c));
    return c;
  };
  var Nb = function(a, b, c, d, e, f2, g2, h2, k2) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l2);
    } catch (m) {
      this.onError(m);
    }
  };
  var Tb = function(a, b, c, d, e, f2, g2, h2, k2) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  };
  var Ub = function(a, b, c, d, e, f2, g2, h2, k2) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l2 = Pb;
        Ob = false;
        Pb = null;
      } else
        throw Error(p2(198));
      Qb || (Qb = true, Rb = l2);
    }
  };
  var Vb = function(a) {
    var b = a, c = a;
    if (a.alternate)
      for (;b.return; )
        b = b.return;
    else {
      a = b;
      do
        b = a, (b.flags & 4098) !== 0 && (c = b.return), a = b.return;
      while (a);
    }
    return b.tag === 3 ? c : null;
  };
  var Wb = function(a) {
    if (a.tag === 13) {
      var b = a.memoizedState;
      b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
      if (b !== null)
        return b.dehydrated;
    }
    return null;
  };
  var Xb = function(a) {
    if (Vb(a) !== a)
      throw Error(p2(188));
  };
  var Yb = function(a) {
    var b = a.alternate;
    if (!b) {
      b = Vb(a);
      if (b === null)
        throw Error(p2(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b;; ) {
      var e = c.return;
      if (e === null)
        break;
      var f2 = e.alternate;
      if (f2 === null) {
        d = e.return;
        if (d !== null) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f2.child) {
        for (f2 = e.child;f2; ) {
          if (f2 === c)
            return Xb(e), a;
          if (f2 === d)
            return Xb(e), b;
          f2 = f2.sibling;
        }
        throw Error(p2(188));
      }
      if (c.return !== d.return)
        c = e, d = f2;
      else {
        for (var g2 = false, h2 = e.child;h2; ) {
          if (h2 === c) {
            g2 = true;
            c = e;
            d = f2;
            break;
          }
          if (h2 === d) {
            g2 = true;
            d = e;
            c = f2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) {
          for (h2 = f2.child;h2; ) {
            if (h2 === c) {
              g2 = true;
              c = f2;
              d = e;
              break;
            }
            if (h2 === d) {
              g2 = true;
              d = f2;
              c = e;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2)
            throw Error(p2(189));
        }
      }
      if (c.alternate !== d)
        throw Error(p2(190));
    }
    if (c.tag !== 3)
      throw Error(p2(188));
    return c.stateNode.current === c ? a : b;
  };
  var Zb = function(a) {
    a = Yb(a);
    return a !== null ? $b(a) : null;
  };
  var $b = function(a) {
    if (a.tag === 5 || a.tag === 6)
      return a;
    for (a = a.child;a !== null; ) {
      var b = $b(a);
      if (b !== null)
        return b;
      a = a.sibling;
    }
    return null;
  };
  var mc = function(a) {
    if (lc && typeof lc.onCommitFiberRoot === "function")
      try {
        lc.onCommitFiberRoot(kc, a, undefined, (a.current.flags & 128) === 128);
      } catch (b) {
      }
  };
  var nc = function(a) {
    a >>>= 0;
    return a === 0 ? 32 : 31 - (pc(a) / qc | 0) | 0;
  };
  var tc = function(a) {
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  };
  var uc = function(a, b) {
    var c = a.pendingLanes;
    if (c === 0)
      return 0;
    var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g2 = c & 268435455;
    if (g2 !== 0) {
      var h2 = g2 & ~e;
      h2 !== 0 ? d = tc(h2) : (f2 &= g2, f2 !== 0 && (d = tc(f2)));
    } else
      g2 = c & ~e, g2 !== 0 ? d = tc(g2) : f2 !== 0 && (d = tc(f2));
    if (d === 0)
      return 0;
    if (b !== 0 && b !== d && (b & e) === 0 && (e = d & -d, f2 = b & -b, e >= f2 || e === 16 && (f2 & 4194240) !== 0))
      return b;
    (d & 4) !== 0 && (d |= c & 16);
    b = a.entangledLanes;
    if (b !== 0)
      for (a = a.entanglements, b &= d;0 < b; )
        c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  };
  var vc = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b + 5000;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  };
  var wc = function(a, b) {
    for (var { suspendedLanes: c, pingedLanes: d, expirationTimes: e, pendingLanes: f2 } = a;0 < f2; ) {
      var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e[g2];
      if (k2 === -1) {
        if ((h2 & c) === 0 || (h2 & d) !== 0)
          e[g2] = vc(h2, b);
      } else
        k2 <= b && (a.expiredLanes |= h2);
      f2 &= ~h2;
    }
  };
  var xc = function(a) {
    a = a.pendingLanes & -1073741825;
    return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
  };
  var yc = function() {
    var a = rc;
    rc <<= 1;
    (rc & 4194240) === 0 && (rc = 64);
    return a;
  };
  var zc = function(a) {
    for (var b = [], c = 0;31 > c; c++)
      b.push(a);
    return b;
  };
  var Ac = function(a, b, c) {
    a.pendingLanes |= b;
    b !== 536870912 && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - oc(b);
    a[b] = c;
  };
  var Bc = function(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for (a = a.expirationTimes;0 < c; ) {
      var e = 31 - oc(c), f2 = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f2;
    }
  };
  var Cc = function(a, b) {
    var c = a.entangledLanes |= b;
    for (a = a.entanglements;c; ) {
      var d = 31 - oc(c), e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  };
  var Dc = function(a) {
    a &= -a;
    return 1 < a ? 4 < a ? (a & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  };
  var Sc = function(a, b) {
    switch (a) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b.pointerId);
    }
  };
  var Tc = function(a, b, c, d, e, f2) {
    if (a === null || a.nativeEvent !== f2)
      return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, b !== null && (b = Cb(b), b !== null && Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    e !== null && b.indexOf(e) === -1 && b.push(e);
    return a;
  };
  var Uc = function(a, b, c, d, e) {
    switch (b) {
      case "focusin":
        return Lc = Tc(Lc, a, b, c, d, e), true;
      case "dragenter":
        return Mc = Tc(Mc, a, b, c, d, e), true;
      case "mouseover":
        return Nc = Tc(Nc, a, b, c, d, e), true;
      case "pointerover":
        var f2 = e.pointerId;
        Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
        return true;
      case "gotpointercapture":
        return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
    }
    return false;
  };
  var Vc = function(a) {
    var b = Wc(a.target);
    if (b !== null) {
      var c = Vb(b);
      if (c !== null) {
        if (b = c.tag, b === 13) {
          if (b = Wb(c), b !== null) {
            a.blockedOn = b;
            Ic(a.priority, function() {
              Gc(c);
            });
            return;
          }
        } else if (b === 3 && c.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  };
  var Xc = function(a) {
    if (a.blockedOn !== null)
      return false;
    for (var b = a.targetContainers;0 < b.length; ) {
      var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (c === null) {
        c = a.nativeEvent;
        var d = new c.constructor(c.type, c);
        wb = d;
        c.target.dispatchEvent(d);
        wb = null;
      } else
        return b = Cb(c), b !== null && Fc(b), a.blockedOn = c, false;
      b.shift();
    }
    return true;
  };
  var Zc = function(a, b, c) {
    Xc(a) && c.delete(b);
  };
  var $c = function() {
    Jc = false;
    Lc !== null && Xc(Lc) && (Lc = null);
    Mc !== null && Xc(Mc) && (Mc = null);
    Nc !== null && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  };
  var ad = function(a, b) {
    a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  };
  var bd = function(a) {
    function b(b2) {
      return ad(b2, a);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a);
      for (var c = 1;c < Kc.length; c++) {
        var d = Kc[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }
    Lc !== null && ad(Lc, a);
    Mc !== null && ad(Mc, a);
    Nc !== null && ad(Nc, a);
    Oc.forEach(b);
    Pc.forEach(b);
    for (c = 0;c < Qc.length; c++)
      d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for (;0 < Qc.length && (c = Qc[0], c.blockedOn === null); )
      Vc(c), c.blockedOn === null && Qc.shift();
  };
  var ed = function(a, b, c, d) {
    var e = C2, f2 = cd.transition;
    cd.transition = null;
    try {
      C2 = 1, fd(a, b, c, d);
    } finally {
      C2 = e, cd.transition = f2;
    }
  };
  var gd = function(a, b, c, d) {
    var e = C2, f2 = cd.transition;
    cd.transition = null;
    try {
      C2 = 4, fd(a, b, c, d);
    } finally {
      C2 = e, cd.transition = f2;
    }
  };
  var fd = function(a, b, c, d) {
    if (dd) {
      var e = Yc(a, b, c, d);
      if (e === null)
        hd(a, b, d, id, c), Sc(a, d);
      else if (Uc(e, a, b, c, d))
        d.stopPropagation();
      else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
        for (;e !== null; ) {
          var f2 = Cb(e);
          f2 !== null && Ec(f2);
          f2 = Yc(a, b, c, d);
          f2 === null && hd(a, b, d, id, c);
          if (f2 === e)
            break;
          e = f2;
        }
        e !== null && d.stopPropagation();
      } else
        hd(a, b, d, null, c);
    }
  };
  var Yc = function(a, b, c, d) {
    id = null;
    a = xb(d);
    a = Wc(a);
    if (a !== null)
      if (b = Vb(a), b === null)
        a = null;
      else if (c = b.tag, c === 13) {
        a = Wb(b);
        if (a !== null)
          return a;
        a = null;
      } else if (c === 3) {
        if (b.stateNode.current.memoizedState.isDehydrated)
          return b.tag === 3 ? b.stateNode.containerInfo : null;
        a = null;
      } else
        b !== a && (a = null);
    id = a;
    return null;
  };
  var jd = function(a) {
    switch (a) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  };
  var nd = function() {
    if (md)
      return md;
    var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
    for (a = 0;a < c && b[a] === e[a]; a++)
      ;
    var g2 = c - a;
    for (d = 1;d <= g2 && b[c - d] === e[f2 - d]; d++)
      ;
    return md = e.slice(a, 1 < d ? 1 - d : undefined);
  };
  var od = function(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
    a === 10 && (a = 13);
    return 32 <= a || a === 13 ? a : 0;
  };
  var pd = function() {
    return true;
  };
  var qd = function() {
    return false;
  };
  var rd = function(a) {
    function b(b2, d, e, f2, g2) {
      this._reactName = b2;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f2;
      this.target = g2;
      this.currentTarget = null;
      for (var c in a)
        a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
      this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A3(b.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a2 = this.nativeEvent;
      a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a2 = this.nativeEvent;
      a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b;
  };
  var Pd = function(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
  };
  var zd = function() {
    return Pd;
  };
  var ge = function(a, b) {
    switch (a) {
      case "keyup":
        return $d.indexOf(b.keyCode) !== -1;
      case "keydown":
        return b.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  };
  var he = function(a) {
    a = a.detail;
    return typeof a === "object" && ("data" in a) ? a.data : null;
  };
  var je = function(a, b) {
    switch (a) {
      case "compositionend":
        return he(b);
      case "keypress":
        if (b.which !== 32)
          return null;
        fe = true;
        return ee;
      case "textInput":
        return a = b.data, a === ee && fe ? null : a;
      default:
        return null;
    }
  };
  var ke = function(a, b) {
    if (ie)
      return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b.char && 1 < b.char.length)
            return b.char;
          if (b.which)
            return String.fromCharCode(b.which);
        }
        return null;
      case "compositionend":
        return de && b.locale !== "ko" ? null : b.data;
      default:
        return null;
    }
  };
  var me = function(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
  };
  var ne = function(a, b, c, d) {
    Eb(d);
    b = oe(b, "onChange");
    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
  };
  var re = function(a) {
    se(a, 0);
  };
  var te = function(a) {
    var b = ue(a);
    if (Wa(b))
      return a;
  };
  var ve = function(a, b) {
    if (a === "change")
      return b;
  };
  var Ae = function() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  };
  var Be = function(a) {
    if (a.propertyName === "value" && te(qe)) {
      var b = [];
      ne(b, qe, a, xb(a));
      Jb(re, b);
    }
  };
  var Ce = function(a, b, c) {
    a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
  };
  var De = function(a) {
    if (a === "selectionchange" || a === "keyup" || a === "keydown")
      return te(qe);
  };
  var Ee = function(a, b) {
    if (a === "click")
      return te(b);
  };
  var Fe = function(a, b) {
    if (a === "input" || a === "change")
      return te(b);
  };
  var Ge = function(a, b) {
    return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
  };
  var Ie = function(a, b) {
    if (He(a, b))
      return true;
    if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
      return false;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length)
      return false;
    for (d = 0;d < c.length; d++) {
      var e = c[d];
      if (!ja.call(b, e) || !He(a[e], b[e]))
        return false;
    }
    return true;
  };
  var Je = function(a) {
    for (;a && a.firstChild; )
      a = a.firstChild;
    return a;
  };
  var Ke = function(a, b) {
    var c = Je(a);
    a = 0;
    for (var d;c; ) {
      if (c.nodeType === 3) {
        d = a + c.textContent.length;
        if (a <= b && d >= b)
          return { node: c, offset: b - a };
        a = d;
      }
      a: {
        for (;c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = undefined;
      }
      c = Je(c);
    }
  };
  var Le = function(a, b) {
    return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Le(a, b.parentNode) : ("contains" in a) ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
  };
  var Me = function() {
    for (var a = window, b = Xa();b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = typeof b.contentWindow.location.href === "string";
      } catch (d) {
        c = false;
      }
      if (c)
        a = b.contentWindow;
      else
        break;
      b = Xa(a.document);
    }
    return b;
  };
  var Ne = function(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
  };
  var Oe = function(a) {
    var b = Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
      if (d !== null && Ne(c)) {
        if (b = d.start, a = d.end, a === undefined && (a = b), ("selectionStart" in c))
          c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
        else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
          a = a.getSelection();
          var e = c.textContent.length, f2 = Math.min(d.start, e);
          d = d.end === undefined ? f2 : Math.min(d.end, e);
          !a.extend && f2 > d && (e = d, d = f2, f2 = e);
          e = Ke(c, f2);
          var g2 = Ke(c, d);
          e && g2 && (a.rangeCount !== 1 || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g2.node, g2.offset)) : (b.setEnd(g2.node, g2.offset), a.addRange(b)));
        }
      }
      b = [];
      for (a = c;a = a.parentNode; )
        a.nodeType === 1 && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      typeof c.focus === "function" && c.focus();
      for (c = 0;c < b.length; c++)
        a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  };
  var Ue = function(a, b, c) {
    var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
    Te || Qe == null || Qe !== Xa(d) || (d = Qe, ("selectionStart" in d) && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
  };
  var Ve = function(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
  };
  var Ze = function(a) {
    if (Xe[a])
      return Xe[a];
    if (!We[a])
      return a;
    var b = We[a], c;
    for (c in b)
      if (b.hasOwnProperty(c) && (c in Ye))
        return Xe[a] = b[c];
    return a;
  };
  var ff = function(a, b) {
    df.set(a, b);
    fa(b, [a]);
  };
  var nf = function(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    Ub(d, b, undefined, a);
    a.currentTarget = null;
  };
  var se = function(a, b) {
    b = (b & 4) !== 0;
    for (var c = 0;c < a.length; c++) {
      var d = a[c], e = d.event;
      d = d.listeners;
      a: {
        var f2 = undefined;
        if (b)
          for (var g2 = d.length - 1;0 <= g2; g2--) {
            var h2 = d[g2], k2 = h2.instance, l2 = h2.currentTarget;
            h2 = h2.listener;
            if (k2 !== f2 && e.isPropagationStopped())
              break a;
            nf(e, h2, l2);
            f2 = k2;
          }
        else
          for (g2 = 0;g2 < d.length; g2++) {
            h2 = d[g2];
            k2 = h2.instance;
            l2 = h2.currentTarget;
            h2 = h2.listener;
            if (k2 !== f2 && e.isPropagationStopped())
              break a;
            nf(e, h2, l2);
            f2 = k2;
          }
      }
    }
    if (Qb)
      throw a = Rb, Qb = false, Rb = null, a;
  };
  var D3 = function(a, b) {
    var c = b[of];
    c === undefined && (c = b[of] = new Set);
    var d = a + "__bubble";
    c.has(d) || (pf(b, a, 2, false), c.add(d));
  };
  var qf = function(a, b, c) {
    var d = 0;
    b && (d |= 4);
    pf(c, a, d, b);
  };
  var sf = function(a) {
    if (!a[rf]) {
      a[rf] = true;
      da.forEach(function(b2) {
        b2 !== "selectionchange" && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
      });
      var b = a.nodeType === 9 ? a : a.ownerDocument;
      b === null || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
    }
  };
  var pf = function(a, b, c, d) {
    switch (jd(b)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c = e.bind(null, b, c, a);
    e = undefined;
    !Lb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
    d ? e !== undefined ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : e !== undefined ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
  };
  var hd = function(a, b, c, d, e) {
    var f2 = d;
    if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
      a:
        for (;; ) {
          if (d === null)
            return;
          var g2 = d.tag;
          if (g2 === 3 || g2 === 4) {
            var h2 = d.stateNode.containerInfo;
            if (h2 === e || h2.nodeType === 8 && h2.parentNode === e)
              break;
            if (g2 === 4)
              for (g2 = d.return;g2 !== null; ) {
                var k2 = g2.tag;
                if (k2 === 3 || k2 === 4) {
                  if (k2 = g2.stateNode.containerInfo, k2 === e || k2.nodeType === 8 && k2.parentNode === e)
                    return;
                }
                g2 = g2.return;
              }
            for (;h2 !== null; ) {
              g2 = Wc(h2);
              if (g2 === null)
                return;
              k2 = g2.tag;
              if (k2 === 5 || k2 === 6) {
                d = f2 = g2;
                continue a;
              }
              h2 = h2.parentNode;
            }
          }
          d = d.return;
        }
    Jb(function() {
      var d2 = f2, e2 = xb(c), g3 = [];
      a: {
        var h3 = df.get(a);
        if (h3 !== undefined) {
          var k3 = td, n2 = a;
          switch (a) {
            case "keypress":
              if (od(c) === 0)
                break a;
            case "keydown":
            case "keyup":
              k3 = Rd;
              break;
            case "focusin":
              n2 = "focus";
              k3 = Fd;
              break;
            case "focusout":
              n2 = "blur";
              k3 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k3 = Fd;
              break;
            case "click":
              if (c.button === 2)
                break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k3 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k3 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k3 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k3 = Hd;
              break;
            case cf:
              k3 = Xd;
              break;
            case "scroll":
              k3 = vd;
              break;
            case "wheel":
              k3 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k3 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k3 = Td;
          }
          var t3 = (b & 4) !== 0, J3 = !t3 && a === "scroll", x2 = t3 ? h3 !== null ? h3 + "Capture" : null : h3;
          t3 = [];
          for (var w2 = d2, u3;w2 !== null; ) {
            u3 = w2;
            var F3 = u3.stateNode;
            u3.tag === 5 && F3 !== null && (u3 = F3, x2 !== null && (F3 = Kb(w2, x2), F3 != null && t3.push(tf(w2, F3, u3))));
            if (J3)
              break;
            w2 = w2.return;
          }
          0 < t3.length && (h3 = new k3(h3, n2, null, c, e2), g3.push({ event: h3, listeners: t3 }));
        }
      }
      if ((b & 7) === 0) {
        a: {
          h3 = a === "mouseover" || a === "pointerover";
          k3 = a === "mouseout" || a === "pointerout";
          if (h3 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
            break a;
          if (k3 || h3) {
            h3 = e2.window === e2 ? e2 : (h3 = e2.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
            if (k3) {
              if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, n2 !== null && (J3 = Vb(n2), n2 !== J3 || n2.tag !== 5 && n2.tag !== 6))
                n2 = null;
            } else
              k3 = null, n2 = d2;
            if (k3 !== n2) {
              t3 = Bd;
              F3 = "onMouseLeave";
              x2 = "onMouseEnter";
              w2 = "mouse";
              if (a === "pointerout" || a === "pointerover")
                t3 = Td, F3 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
              J3 = k3 == null ? h3 : ue(k3);
              u3 = n2 == null ? h3 : ue(n2);
              h3 = new t3(F3, w2 + "leave", k3, c, e2);
              h3.target = J3;
              h3.relatedTarget = u3;
              F3 = null;
              Wc(e2) === d2 && (t3 = new t3(x2, w2 + "enter", n2, c, e2), t3.target = u3, t3.relatedTarget = J3, F3 = t3);
              J3 = F3;
              if (k3 && n2)
                b: {
                  t3 = k3;
                  x2 = n2;
                  w2 = 0;
                  for (u3 = t3;u3; u3 = vf(u3))
                    w2++;
                  u3 = 0;
                  for (F3 = x2;F3; F3 = vf(F3))
                    u3++;
                  for (;0 < w2 - u3; )
                    t3 = vf(t3), w2--;
                  for (;0 < u3 - w2; )
                    x2 = vf(x2), u3--;
                  for (;w2--; ) {
                    if (t3 === x2 || x2 !== null && t3 === x2.alternate)
                      break b;
                    t3 = vf(t3);
                    x2 = vf(x2);
                  }
                  t3 = null;
                }
              else
                t3 = null;
              k3 !== null && wf(g3, h3, k3, t3, false);
              n2 !== null && J3 !== null && wf(g3, J3, n2, t3, true);
            }
          }
        }
        a: {
          h3 = d2 ? ue(d2) : window;
          k3 = h3.nodeName && h3.nodeName.toLowerCase();
          if (k3 === "select" || k3 === "input" && h3.type === "file")
            var na = ve;
          else if (me(h3))
            if (we)
              na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
          else
            (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (na = Ee);
          if (na && (na = na(a, d2))) {
            ne(g3, na, c, e2);
            break a;
          }
          xa && xa(a, h3, d2);
          a === "focusout" && (xa = h3._wrapperState) && xa.controlled && h3.type === "number" && cb(h3, "number", h3.value);
        }
        xa = d2 ? ue(d2) : window;
        switch (a) {
          case "focusin":
            if (me(xa) || xa.contentEditable === "true")
              Qe = xa, Re = d2, Se = null;
            break;
          case "focusout":
            Se = Re = Qe = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g3, c, e2);
            break;
          case "selectionchange":
            if (Pe)
              break;
          case "keydown":
          case "keyup":
            Ue(g3, c, e2);
        }
        var $a;
        if (ae)
          b: {
            switch (a) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = undefined;
          }
        else
          ie ? ge(a, c) && (ba = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (ba = "onCompositionStart");
        ba && (de && c.locale !== "ko" && (ie || ba !== "onCompositionStart" ? ba === "onCompositionEnd" && ie && ($a = nd()) : (kd = e2, ld = ("value" in kd) ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), $a !== null && (ba.data = $a))));
        if ($a = ce ? je(a, c) : ke(a, c))
          d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g3.push({ event: e2, listeners: d2 }), e2.data = $a);
      }
      se(g3, b);
    });
  };
  var tf = function(a, b, c) {
    return { instance: a, listener: b, currentTarget: c };
  };
  var oe = function(a, b) {
    for (var c = b + "Capture", d = [];a !== null; ) {
      var e = a, f2 = e.stateNode;
      e.tag === 5 && f2 !== null && (e = f2, f2 = Kb(a, c), f2 != null && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), f2 != null && d.push(tf(a, f2, e)));
      a = a.return;
    }
    return d;
  };
  var vf = function(a) {
    if (a === null)
      return null;
    do
      a = a.return;
    while (a && a.tag !== 5);
    return a ? a : null;
  };
  var wf = function(a, b, c, d, e) {
    for (var f2 = b._reactName, g2 = [];c !== null && c !== d; ) {
      var h2 = c, k2 = h2.alternate, l2 = h2.stateNode;
      if (k2 !== null && k2 === d)
        break;
      h2.tag === 5 && l2 !== null && (h2 = l2, e ? (k2 = Kb(c, f2), k2 != null && g2.unshift(tf(c, k2, h2))) : e || (k2 = Kb(c, f2), k2 != null && g2.push(tf(c, k2, h2))));
      c = c.return;
    }
    g2.length !== 0 && a.push({ event: b, listeners: g2 });
  };
  var zf = function(a) {
    return (typeof a === "string" ? a : "" + a).replace(xf, "\n").replace(yf, "");
  };
  var Af = function(a, b, c) {
    b = zf(b);
    if (zf(a) !== b && c)
      throw Error(p2(425));
  };
  var Bf = function() {
  };
  var Ef = function(a, b) {
    return a === "textarea" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
  };
  var If = function(a) {
    setTimeout(function() {
      throw a;
    });
  };
  var Kf = function(a, b) {
    var c = b, d = 0;
    do {
      var e = c.nextSibling;
      a.removeChild(c);
      if (e && e.nodeType === 8)
        if (c = e.data, c === "/$") {
          if (d === 0) {
            a.removeChild(e);
            bd(b);
            return;
          }
          d--;
        } else
          c !== "$" && c !== "$?" && c !== "$!" || d++;
      c = e;
    } while (c);
    bd(b);
  };
  var Lf = function(a) {
    for (;a != null; a = a.nextSibling) {
      var b = a.nodeType;
      if (b === 1 || b === 3)
        break;
      if (b === 8) {
        b = a.data;
        if (b === "$" || b === "$!" || b === "$?")
          break;
        if (b === "/$")
          return null;
      }
    }
    return a;
  };
  var Mf = function(a) {
    a = a.previousSibling;
    for (var b = 0;a; ) {
      if (a.nodeType === 8) {
        var c = a.data;
        if (c === "$" || c === "$!" || c === "$?") {
          if (b === 0)
            return a;
          b--;
        } else
          c === "/$" && b++;
      }
      a = a.previousSibling;
    }
    return null;
  };
  var Wc = function(a) {
    var b = a[Of];
    if (b)
      return b;
    for (var c = a.parentNode;c; ) {
      if (b = c[uf] || c[Of]) {
        c = b.alternate;
        if (b.child !== null || c !== null && c.child !== null)
          for (a = Mf(a);a !== null; ) {
            if (c = a[Of])
              return c;
            a = Mf(a);
          }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  };
  var Cb = function(a) {
    a = a[Of] || a[uf];
    return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
  };
  var ue = function(a) {
    if (a.tag === 5 || a.tag === 6)
      return a.stateNode;
    throw Error(p2(33));
  };
  var Db = function(a) {
    return a[Pf] || null;
  };
  var Uf = function(a) {
    return { current: a };
  };
  var E3 = function(a) {
    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
  };
  var G3 = function(a, b) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b;
  };
  var Yf = function(a, b) {
    var c = a.type.contextTypes;
    if (!c)
      return Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
      return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f2;
    for (f2 in c)
      e[f2] = b[f2];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  };
  var Zf = function(a) {
    a = a.childContextTypes;
    return a !== null && a !== undefined;
  };
  var $f = function() {
    E3(Wf);
    E3(H3);
  };
  var ag = function(a, b, c) {
    if (H3.current !== Vf)
      throw Error(p2(168));
    G3(H3, b);
    G3(Wf, c);
  };
  var bg = function(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if (typeof d.getChildContext !== "function")
      return c;
    d = d.getChildContext();
    for (var e in d)
      if (!(e in b))
        throw Error(p2(108, Ra(a) || "Unknown", e));
    return A3({}, c, d);
  };
  var cg = function(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H3.current;
    G3(H3, a);
    G3(Wf, Wf.current);
    return true;
  };
  var dg = function(a, b, c) {
    var d = a.stateNode;
    if (!d)
      throw Error(p2(169));
    c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E3(Wf), E3(H3), G3(H3, a)) : E3(Wf);
    G3(Wf, c);
  };
  var hg = function(a) {
    eg === null ? eg = [a] : eg.push(a);
  };
  var ig = function(a) {
    fg = true;
    hg(a);
  };
  var jg = function() {
    if (!gg && eg !== null) {
      gg = true;
      var a = 0, b = C2;
      try {
        var c = eg;
        for (C2 = 1;a < c.length; a++) {
          var d = c[a];
          do
            d = d(true);
          while (d !== null);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw eg !== null && (eg = eg.slice(a + 1)), ac(fc, jg), e;
      } finally {
        C2 = b, gg = false;
      }
    }
    return null;
  };
  var tg = function(a, b) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b;
  };
  var ug = function(a, b, c) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d = rg;
    a = sg;
    var e = 32 - oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f2 = 32 - oc(b) + e;
    if (30 < f2) {
      var g2 = e - e % 5;
      f2 = (d & (1 << g2) - 1).toString(32);
      d >>= g2;
      e -= g2;
      rg = 1 << 32 - oc(b) + e | c << e | d;
      sg = f2 + a;
    } else
      rg = 1 << f2 | c << e | d, sg = a;
  };
  var vg = function(a) {
    a.return !== null && (tg(a, 1), ug(a, 1, 0));
  };
  var wg = function(a) {
    for (;a === mg; )
      mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (;a === qg; )
      qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  };
  var Ag = function(a, b) {
    var c = Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    b === null ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  };
  var Cg = function(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
        return b !== null ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
      case 6:
        return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, xg = a, yg = null, true) : false;
      case 13:
        return b = b.nodeType !== 8 ? null : b, b !== null ? (c = qg !== null ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
      default:
        return false;
    }
  };
  var Dg = function(a) {
    return (a.mode & 1) !== 0 && (a.flags & 128) === 0;
  };
  var Eg = function(a) {
    if (I3) {
      var b = yg;
      if (b) {
        var c = b;
        if (!Cg(a, b)) {
          if (Dg(a))
            throw Error(p2(418));
          b = Lf(c.nextSibling);
          var d = xg;
          b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I3 = false, xg = a);
        }
      } else {
        if (Dg(a))
          throw Error(p2(418));
        a.flags = a.flags & -4097 | 2;
        I3 = false;
        xg = a;
      }
    }
  };
  var Fg = function(a) {
    for (a = a.return;a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
      a = a.return;
    xg = a;
  };
  var Gg = function(a) {
    if (a !== xg)
      return false;
    if (!I3)
      return Fg(a), I3 = true, false;
    var b;
    (b = a.tag !== 3) && !(b = a.tag !== 5) && (b = a.type, b = b !== "head" && b !== "body" && !Ef(a.type, a.memoizedProps));
    if (b && (b = yg)) {
      if (Dg(a))
        throw Hg(), Error(p2(418));
      for (;b; )
        Ag(a, b), b = Lf(b.nextSibling);
    }
    Fg(a);
    if (a.tag === 13) {
      a = a.memoizedState;
      a = a !== null ? a.dehydrated : null;
      if (!a)
        throw Error(p2(317));
      a: {
        a = a.nextSibling;
        for (b = 0;a; ) {
          if (a.nodeType === 8) {
            var c = a.data;
            if (c === "/$") {
              if (b === 0) {
                yg = Lf(a.nextSibling);
                break a;
              }
              b--;
            } else
              c !== "$" && c !== "$!" && c !== "$?" || b++;
          }
          a = a.nextSibling;
        }
        yg = null;
      }
    } else
      yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return true;
  };
  var Hg = function() {
    for (var a = yg;a; )
      a = Lf(a.nextSibling);
  };
  var Ig = function() {
    yg = xg = null;
    I3 = false;
  };
  var Jg = function(a) {
    zg === null ? zg = [a] : zg.push(a);
  };
  var Lg = function(a, b) {
    if (a && a.defaultProps) {
      b = A3({}, b);
      a = a.defaultProps;
      for (var c in a)
        b[c] === undefined && (b[c] = a[c]);
      return b;
    }
    return b;
  };
  var Qg = function() {
    Pg = Og = Ng = null;
  };
  var Rg = function(a) {
    var b = Mg.current;
    E3(Mg);
    a._currentValue = b;
  };
  var Sg = function(a, b, c) {
    for (;a !== null; ) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, d !== null && (d.childLanes |= b)) : d !== null && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c)
        break;
      a = a.return;
    }
  };
  var Tg = function(a, b) {
    Ng = a;
    Pg = Og = null;
    a = a.dependencies;
    a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (Ug = true), a.firstContext = null);
  };
  var Vg = function(a) {
    var b = a._currentValue;
    if (Pg !== a)
      if (a = { context: a, memoizedValue: b, next: null }, Og === null) {
        if (Ng === null)
          throw Error(p2(308));
        Og = a;
        Ng.dependencies = { lanes: 0, firstContext: a };
      } else
        Og = Og.next = a;
    return b;
  };
  var Xg = function(a) {
    Wg === null ? Wg = [a] : Wg.push(a);
  };
  var Yg = function(a, b, c, d) {
    var e = b.interleaved;
    e === null ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return Zg(a, d);
  };
  var Zg = function(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    c !== null && (c.lanes |= b);
    c = a;
    for (a = a.return;a !== null; )
      a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
    return c.tag === 3 ? c.stateNode : null;
  };
  var ah = function(a) {
    a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  };
  var bh = function(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
  };
  var ch = function(a, b) {
    return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
  };
  var dh = function(a, b, c) {
    var d = a.updateQueue;
    if (d === null)
      return null;
    d = d.shared;
    if ((K3 & 2) !== 0) {
      var e = d.pending;
      e === null ? b.next = b : (b.next = e.next, e.next = b);
      d.pending = b;
      return Zg(a, c);
    }
    e = d.interleaved;
    e === null ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return Zg(a, c);
  };
  var eh = function(a, b, c) {
    b = b.updateQueue;
    if (b !== null && (b = b.shared, (c & 4194240) !== 0)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  };
  var fh = function(a, b) {
    var { updateQueue: c, alternate: d } = a;
    if (d !== null && (d = d.updateQueue, c === d)) {
      var e = null, f2 = null;
      c = c.firstBaseUpdate;
      if (c !== null) {
        do {
          var g2 = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          f2 === null ? e = f2 = g2 : f2 = f2.next = g2;
          c = c.next;
        } while (c !== null);
        f2 === null ? e = f2 = b : f2 = f2.next = b;
      } else
        e = f2 = b;
      c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    a === null ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  };
  var gh = function(a, b, c, d) {
    var e = a.updateQueue;
    $g = false;
    var { firstBaseUpdate: f2, lastBaseUpdate: g2 } = e, h2 = e.shared.pending;
    if (h2 !== null) {
      e.shared.pending = null;
      var k2 = h2, l2 = k2.next;
      k2.next = null;
      g2 === null ? f2 = l2 : g2.next = l2;
      g2 = k2;
      var m = a.alternate;
      m !== null && (m = m.updateQueue, h2 = m.lastBaseUpdate, h2 !== g2 && (h2 === null ? m.firstBaseUpdate = l2 : h2.next = l2, m.lastBaseUpdate = k2));
    }
    if (f2 !== null) {
      var q2 = e.baseState;
      g2 = 0;
      m = l2 = k2 = null;
      h2 = f2;
      do {
        var { lane: r3, eventTime: y3 } = h2;
        if ((d & r3) === r3) {
          m !== null && (m = m.next = {
            eventTime: y3,
            lane: 0,
            tag: h2.tag,
            payload: h2.payload,
            callback: h2.callback,
            next: null
          });
          a: {
            var n2 = a, t3 = h2;
            r3 = b;
            y3 = c;
            switch (t3.tag) {
              case 1:
                n2 = t3.payload;
                if (typeof n2 === "function") {
                  q2 = n2.call(y3, q2, r3);
                  break a;
                }
                q2 = n2;
                break a;
              case 3:
                n2.flags = n2.flags & -65537 | 128;
              case 0:
                n2 = t3.payload;
                r3 = typeof n2 === "function" ? n2.call(y3, q2, r3) : n2;
                if (r3 === null || r3 === undefined)
                  break a;
                q2 = A3({}, q2, r3);
                break a;
              case 2:
                $g = true;
            }
          }
          h2.callback !== null && h2.lane !== 0 && (a.flags |= 64, r3 = e.effects, r3 === null ? e.effects = [h2] : r3.push(h2));
        } else
          y3 = { eventTime: y3, lane: r3, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, m === null ? (l2 = m = y3, k2 = q2) : m = m.next = y3, g2 |= r3;
        h2 = h2.next;
        if (h2 === null)
          if (h2 = e.shared.pending, h2 === null)
            break;
          else
            r3 = h2, h2 = r3.next, r3.next = null, e.lastBaseUpdate = r3, e.shared.pending = null;
      } while (1);
      m === null && (k2 = q2);
      e.baseState = k2;
      e.firstBaseUpdate = l2;
      e.lastBaseUpdate = m;
      b = e.shared.interleaved;
      if (b !== null) {
        e = b;
        do
          g2 |= e.lane, e = e.next;
        while (e !== b);
      } else
        f2 === null && (e.shared.lanes = 0);
      hh |= g2;
      a.lanes = g2;
      a.memoizedState = q2;
    }
  };
  var ih = function(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (a !== null)
      for (b = 0;b < a.length; b++) {
        var d = a[b], e = d.callback;
        if (e !== null) {
          d.callback = null;
          d = c;
          if (typeof e !== "function")
            throw Error(p2(191, e));
          e.call(d);
        }
      }
  };
  var kh = function(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = c === null || c === undefined ? b : A3({}, b, c);
    a.memoizedState = c;
    a.lanes === 0 && (a.updateQueue.baseState = c);
  };
  var oh = function(a, b, c, d, e, f2, g2) {
    a = a.stateNode;
    return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f2, g2) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
  };
  var ph = function(a, b, c) {
    var d = false, e = Vf;
    var f2 = b.contextType;
    typeof f2 === "object" && f2 !== null ? f2 = Vg(f2) : (e = Zf(b) ? Xf : H3.current, d = b.contextTypes, f2 = (d = d !== null && d !== undefined) ? Yf(a, e) : Vf);
    b = new b(c, f2);
    a.memoizedState = b.state !== null && b.state !== undefined ? b.state : null;
    b.updater = nh;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
    return b;
  };
  var qh = function(a, b, c, d) {
    a = b.state;
    typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
    typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && nh.enqueueReplaceState(b, b.state, null);
  };
  var rh = function(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = jh;
    ah(a);
    var f2 = b.contextType;
    typeof f2 === "object" && f2 !== null ? e.context = Vg(f2) : (f2 = Zf(b) ? Xf : H3.current, e.context = Yf(a, f2));
    e.state = a.memoizedState;
    f2 = b.getDerivedStateFromProps;
    typeof f2 === "function" && (kh(a, b, f2, c), e.state = a.memoizedState);
    typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
    typeof e.componentDidMount === "function" && (a.flags |= 4194308);
  };
  var sh = function(a, b, c) {
    a = c.ref;
    if (a !== null && typeof a !== "function" && typeof a !== "object") {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (c.tag !== 1)
            throw Error(p2(309));
          var d = c.stateNode;
        }
        if (!d)
          throw Error(p2(147, a));
        var e = d, f2 = "" + a;
        if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === f2)
          return b.ref;
        b = function(a2) {
          var b2 = e.refs;
          b2 === jh && (b2 = e.refs = {});
          a2 === null ? delete b2[f2] : b2[f2] = a2;
        };
        b._stringRef = f2;
        return b;
      }
      if (typeof a !== "string")
        throw Error(p2(284));
      if (!c._owner)
        throw Error(p2(290, a));
    }
    return a;
  };
  var th = function(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(p2(31, a === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  };
  var uh = function(a) {
    var b = a._init;
    return b(a._payload);
  };
  var vh = function(a) {
    function b(b2, c2) {
      if (a) {
        var d2 = b2.deletions;
        d2 === null ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
      }
    }
    function c(c2, d2) {
      if (!a)
        return null;
      for (;d2 !== null; )
        b(c2, d2), d2 = d2.sibling;
      return null;
    }
    function d(a2, b2) {
      for (a2 = new Map;b2 !== null; )
        b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
      return a2;
    }
    function e(a2, b2) {
      a2 = wh(a2, b2);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f2(b2, c2, d2) {
      b2.index = d2;
      if (!a)
        return b2.flags |= 1048576, c2;
      d2 = b2.alternate;
      if (d2 !== null)
        return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
      b2.flags |= 2;
      return c2;
    }
    function g2(b2) {
      a && b2.alternate === null && (b2.flags |= 2);
      return b2;
    }
    function h2(a2, b2, c2, d2) {
      if (b2 === null || b2.tag !== 6)
        return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function k2(a2, b2, c2, d2) {
      var f3 = c2.type;
      if (f3 === ya)
        return m(a2, b2, c2.props.children, d2, c2.key);
      if (b2 !== null && (b2.elementType === f3 || typeof f3 === "object" && f3 !== null && f3.$$typeof === Ha && uh(f3) === b2.type))
        return d2 = e(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
      d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
      d2.ref = sh(a2, b2, c2);
      d2.return = a2;
      return d2;
    }
    function l2(a2, b2, c2, d2) {
      if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
        return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2.children || []);
      b2.return = a2;
      return b2;
    }
    function m(a2, b2, c2, d2, f3) {
      if (b2 === null || b2.tag !== 7)
        return b2 = Ah(c2, a2.mode, d2, f3), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function q2(a2, b2, c2) {
      if (typeof b2 === "string" && b2 !== "" || typeof b2 === "number")
        return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
      if (typeof b2 === "object" && b2 !== null) {
        switch (b2.$$typeof) {
          case va:
            return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
          case wa:
            return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
          case Ha:
            var d2 = b2._init;
            return q2(a2, d2(b2._payload), c2);
        }
        if (eb(b2) || Ka(b2))
          return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
        th(a2, b2);
      }
      return null;
    }
    function r3(a2, b2, c2, d2) {
      var e2 = b2 !== null ? b2.key : null;
      if (typeof c2 === "string" && c2 !== "" || typeof c2 === "number")
        return e2 !== null ? null : h2(a2, b2, "" + c2, d2);
      if (typeof c2 === "object" && c2 !== null) {
        switch (c2.$$typeof) {
          case va:
            return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
          case wa:
            return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
          case Ha:
            return e2 = c2._init, r3(a2, b2, e2(c2._payload), d2);
        }
        if (eb(c2) || Ka(c2))
          return e2 !== null ? null : m(a2, b2, c2, d2, null);
        th(a2, c2);
      }
      return null;
    }
    function y3(a2, b2, c2, d2, e2) {
      if (typeof d2 === "string" && d2 !== "" || typeof d2 === "number")
        return a2 = a2.get(c2) || null, h2(b2, a2, "" + d2, e2);
      if (typeof d2 === "object" && d2 !== null) {
        switch (d2.$$typeof) {
          case va:
            return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
          case wa:
            return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
          case Ha:
            var f3 = d2._init;
            return y3(a2, b2, c2, f3(d2._payload), e2);
        }
        if (eb(d2) || Ka(d2))
          return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
        th(b2, d2);
      }
      return null;
    }
    function n2(e2, g3, h3, k3) {
      for (var l3 = null, m2 = null, u3 = g3, w2 = g3 = 0, x2 = null;u3 !== null && w2 < h3.length; w2++) {
        u3.index > w2 ? (x2 = u3, u3 = null) : x2 = u3.sibling;
        var n3 = r3(e2, u3, h3[w2], k3);
        if (n3 === null) {
          u3 === null && (u3 = x2);
          break;
        }
        a && u3 && n3.alternate === null && b(e2, u3);
        g3 = f2(n3, g3, w2);
        m2 === null ? l3 = n3 : m2.sibling = n3;
        m2 = n3;
        u3 = x2;
      }
      if (w2 === h3.length)
        return c(e2, u3), I3 && tg(e2, w2), l3;
      if (u3 === null) {
        for (;w2 < h3.length; w2++)
          u3 = q2(e2, h3[w2], k3), u3 !== null && (g3 = f2(u3, g3, w2), m2 === null ? l3 = u3 : m2.sibling = u3, m2 = u3);
        I3 && tg(e2, w2);
        return l3;
      }
      for (u3 = d(e2, u3);w2 < h3.length; w2++)
        x2 = y3(u3, e2, w2, h3[w2], k3), x2 !== null && (a && x2.alternate !== null && u3.delete(x2.key === null ? w2 : x2.key), g3 = f2(x2, g3, w2), m2 === null ? l3 = x2 : m2.sibling = x2, m2 = x2);
      a && u3.forEach(function(a2) {
        return b(e2, a2);
      });
      I3 && tg(e2, w2);
      return l3;
    }
    function t3(e2, g3, h3, k3) {
      var l3 = Ka(h3);
      if (typeof l3 !== "function")
        throw Error(p2(150));
      h3 = l3.call(h3);
      if (h3 == null)
        throw Error(p2(151));
      for (var u3 = l3 = null, m2 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next();m2 !== null && !n3.done; w2++, n3 = h3.next()) {
        m2.index > w2 ? (x2 = m2, m2 = null) : x2 = m2.sibling;
        var t4 = r3(e2, m2, n3.value, k3);
        if (t4 === null) {
          m2 === null && (m2 = x2);
          break;
        }
        a && m2 && t4.alternate === null && b(e2, m2);
        g3 = f2(t4, g3, w2);
        u3 === null ? l3 = t4 : u3.sibling = t4;
        u3 = t4;
        m2 = x2;
      }
      if (n3.done)
        return c(e2, m2), I3 && tg(e2, w2), l3;
      if (m2 === null) {
        for (;!n3.done; w2++, n3 = h3.next())
          n3 = q2(e2, n3.value, k3), n3 !== null && (g3 = f2(n3, g3, w2), u3 === null ? l3 = n3 : u3.sibling = n3, u3 = n3);
        I3 && tg(e2, w2);
        return l3;
      }
      for (m2 = d(e2, m2);!n3.done; w2++, n3 = h3.next())
        n3 = y3(m2, e2, w2, n3.value, k3), n3 !== null && (a && n3.alternate !== null && m2.delete(n3.key === null ? w2 : n3.key), g3 = f2(n3, g3, w2), u3 === null ? l3 = n3 : u3.sibling = n3, u3 = n3);
      a && m2.forEach(function(a2) {
        return b(e2, a2);
      });
      I3 && tg(e2, w2);
      return l3;
    }
    function J3(a2, d2, f3, h3) {
      typeof f3 === "object" && f3 !== null && f3.type === ya && f3.key === null && (f3 = f3.props.children);
      if (typeof f3 === "object" && f3 !== null) {
        switch (f3.$$typeof) {
          case va:
            a: {
              for (var k3 = f3.key, l3 = d2;l3 !== null; ) {
                if (l3.key === k3) {
                  k3 = f3.type;
                  if (k3 === ya) {
                    if (l3.tag === 7) {
                      c(a2, l3.sibling);
                      d2 = e(l3, f3.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                  } else if (l3.elementType === k3 || typeof k3 === "object" && k3 !== null && k3.$$typeof === Ha && uh(k3) === l3.type) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props);
                    d2.ref = sh(a2, l3, f3);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                  c(a2, l3);
                  break;
                } else
                  b(a2, l3);
                l3 = l3.sibling;
              }
              f3.type === ya ? (d2 = Ah(f3.props.children, a2.mode, h3, f3.key), d2.return = a2, a2 = d2) : (h3 = yh(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = sh(a2, d2, f3), h3.return = a2, a2 = h3);
            }
            return g2(a2);
          case wa:
            a: {
              for (l3 = f3.key;d2 !== null; ) {
                if (d2.key === l3)
                  if (d2.tag === 4 && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f3.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                else
                  b(a2, d2);
                d2 = d2.sibling;
              }
              d2 = zh(f3, a2.mode, h3);
              d2.return = a2;
              a2 = d2;
            }
            return g2(a2);
          case Ha:
            return l3 = f3._init, J3(a2, d2, l3(f3._payload), h3);
        }
        if (eb(f3))
          return n2(a2, d2, f3, h3);
        if (Ka(f3))
          return t3(a2, d2, f3, h3);
        th(a2, f3);
      }
      return typeof f3 === "string" && f3 !== "" || typeof f3 === "number" ? (f3 = "" + f3, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f3, a2.mode, h3), d2.return = a2, a2 = d2), g2(a2)) : c(a2, d2);
    }
    return J3;
  };
  var Hh = function(a) {
    if (a === Dh)
      throw Error(p2(174));
    return a;
  };
  var Ih = function(a, b) {
    G3(Gh, b);
    G3(Fh, a);
    G3(Eh, Dh);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
        break;
      default:
        a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
    }
    E3(Eh);
    G3(Eh, b);
  };
  var Jh = function() {
    E3(Eh);
    E3(Fh);
    E3(Gh);
  };
  var Kh = function(a) {
    Hh(Gh.current);
    var b = Hh(Eh.current);
    var c = lb(b, a.type);
    b !== c && (G3(Fh, a), G3(Eh, c));
  };
  var Lh = function(a) {
    Fh.current === a && (E3(Eh), E3(Fh));
  };
  var Mh = function(a) {
    for (var b = a;b !== null; ) {
      if (b.tag === 13) {
        var c = b.memoizedState;
        if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
          return b;
      } else if (b.tag === 19 && b.memoizedProps.revealOrder !== undefined) {
        if ((b.flags & 128) !== 0)
          return b;
      } else if (b.child !== null) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a)
        break;
      for (;b.sibling === null; ) {
        if (b.return === null || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  };
  var Oh = function() {
    for (var a = 0;a < Nh.length; a++)
      Nh[a]._workInProgressVersionPrimary = null;
    Nh.length = 0;
  };
  var Q3 = function() {
    throw Error(p2(321));
  };
  var Wh = function(a, b) {
    if (b === null)
      return false;
    for (var c = 0;c < b.length && c < a.length; c++)
      if (!He(a[c], b[c]))
        return false;
    return true;
  };
  var Xh = function(a, b, c, d, e, f2) {
    Rh = f2;
    N3 = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Ph.current = a === null || a.memoizedState === null ? Yh : Zh;
    a = c(d, e);
    if (Th) {
      f2 = 0;
      do {
        Th = false;
        Uh = 0;
        if (25 <= f2)
          throw Error(p2(301));
        f2 += 1;
        P3 = O3 = null;
        b.updateQueue = null;
        Ph.current = $h;
        a = c(d, e);
      } while (Th);
    }
    Ph.current = ai;
    b = O3 !== null && O3.next !== null;
    Rh = 0;
    P3 = O3 = N3 = null;
    Sh = false;
    if (b)
      throw Error(p2(300));
    return a;
  };
  var bi = function() {
    var a = Uh !== 0;
    Uh = 0;
    return a;
  };
  var ci = function() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    P3 === null ? N3.memoizedState = P3 = a : P3 = P3.next = a;
    return P3;
  };
  var di = function() {
    if (O3 === null) {
      var a = N3.alternate;
      a = a !== null ? a.memoizedState : null;
    } else
      a = O3.next;
    var b = P3 === null ? N3.memoizedState : P3.next;
    if (b !== null)
      P3 = b, O3 = a;
    else {
      if (a === null)
        throw Error(p2(310));
      O3 = a;
      a = { memoizedState: O3.memoizedState, baseState: O3.baseState, baseQueue: O3.baseQueue, queue: O3.queue, next: null };
      P3 === null ? N3.memoizedState = P3 = a : P3 = P3.next = a;
    }
    return P3;
  };
  var ei = function(a, b) {
    return typeof b === "function" ? b(a) : b;
  };
  var fi = function(a) {
    var b = di(), c = b.queue;
    if (c === null)
      throw Error(p2(311));
    c.lastRenderedReducer = a;
    var d = O3, e = d.baseQueue, f2 = c.pending;
    if (f2 !== null) {
      if (e !== null) {
        var g2 = e.next;
        e.next = f2.next;
        f2.next = g2;
      }
      d.baseQueue = e = f2;
      c.pending = null;
    }
    if (e !== null) {
      f2 = e.next;
      d = d.baseState;
      var h2 = g2 = null, k2 = null, l2 = f2;
      do {
        var m = l2.lane;
        if ((Rh & m) === m)
          k2 !== null && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
        else {
          var q2 = {
            lane: m,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          k2 === null ? (h2 = k2 = q2, g2 = d) : k2 = k2.next = q2;
          N3.lanes |= m;
          hh |= m;
        }
        l2 = l2.next;
      } while (l2 !== null && l2 !== f2);
      k2 === null ? g2 = d : k2.next = h2;
      He(d, b.memoizedState) || (Ug = true);
      b.memoizedState = d;
      b.baseState = g2;
      b.baseQueue = k2;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (a !== null) {
      e = a;
      do
        f2 = e.lane, N3.lanes |= f2, hh |= f2, e = e.next;
      while (e !== a);
    } else
      e === null && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  };
  var gi = function(a) {
    var b = di(), c = b.queue;
    if (c === null)
      throw Error(p2(311));
    c.lastRenderedReducer = a;
    var { dispatch: d, pending: e } = c, f2 = b.memoizedState;
    if (e !== null) {
      c.pending = null;
      var g2 = e = e.next;
      do
        f2 = a(f2, g2.action), g2 = g2.next;
      while (g2 !== e);
      He(f2, b.memoizedState) || (Ug = true);
      b.memoizedState = f2;
      b.baseQueue === null && (b.baseState = f2);
      c.lastRenderedState = f2;
    }
    return [f2, d];
  };
  var hi = function() {
  };
  var ii = function(a, b) {
    var c = N3, d = di(), e = b(), f2 = !He(d.memoizedState, e);
    f2 && (d.memoizedState = e, Ug = true);
    d = d.queue;
    ji(ki.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f2 || P3 !== null && P3.memoizedState.tag & 1) {
      c.flags |= 2048;
      li(9, mi.bind(null, c, d, e, b), undefined, null);
      if (R3 === null)
        throw Error(p2(349));
      (Rh & 30) !== 0 || ni(c, b, e);
    }
    return e;
  };
  var ni = function(a, b, c) {
    a.flags |= 16384;
    a = { getSnapshot: b, value: c };
    b = N3.updateQueue;
    b === null ? (b = { lastEffect: null, stores: null }, N3.updateQueue = b, b.stores = [a]) : (c = b.stores, c === null ? b.stores = [a] : c.push(a));
  };
  var mi = function(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    oi(b) && pi(a);
  };
  var ki = function(a, b, c) {
    return c(function() {
      oi(b) && pi(a);
    });
  };
  var oi = function(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !He(a, c);
    } catch (d) {
      return true;
    }
  };
  var pi = function(a) {
    var b = Zg(a, 1);
    b !== null && mh(b, a, 1, -1);
  };
  var qi = function(a) {
    var b = ci();
    typeof a === "function" && (a = a());
    b.memoizedState = b.baseState = a;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
    b.queue = a;
    a = a.dispatch = ri.bind(null, N3, a);
    return [b.memoizedState, a];
  };
  var li = function(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = N3.updateQueue;
    b === null ? (b = { lastEffect: null, stores: null }, N3.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  };
  var si = function() {
    return di().memoizedState;
  };
  var ti = function(a, b, c, d) {
    var e = ci();
    N3.flags |= a;
    e.memoizedState = li(1 | b, c, undefined, d === undefined ? null : d);
  };
  var ui = function(a, b, c, d) {
    var e = di();
    d = d === undefined ? null : d;
    var f2 = undefined;
    if (O3 !== null) {
      var g2 = O3.memoizedState;
      f2 = g2.destroy;
      if (d !== null && Wh(d, g2.deps)) {
        e.memoizedState = li(b, c, f2, d);
        return;
      }
    }
    N3.flags |= a;
    e.memoizedState = li(1 | b, c, f2, d);
  };
  var vi = function(a, b) {
    return ti(8390656, 8, a, b);
  };
  var ji = function(a, b) {
    return ui(2048, 8, a, b);
  };
  var wi = function(a, b) {
    return ui(4, 2, a, b);
  };
  var xi = function(a, b) {
    return ui(4, 4, a, b);
  };
  var yi = function(a, b) {
    if (typeof b === "function")
      return a = a(), b(a), function() {
        b(null);
      };
    if (b !== null && b !== undefined)
      return a = a(), b.current = a, function() {
        b.current = null;
      };
  };
  var zi = function(a, b, c) {
    c = c !== null && c !== undefined ? c.concat([a]) : null;
    return ui(4, 4, yi.bind(null, b, a), c);
  };
  var Ai = function() {
  };
  var Bi = function(a, b) {
    var c = di();
    b = b === undefined ? null : b;
    var d = c.memoizedState;
    if (d !== null && b !== null && Wh(b, d[1]))
      return d[0];
    c.memoizedState = [a, b];
    return a;
  };
  var Ci = function(a, b) {
    var c = di();
    b = b === undefined ? null : b;
    var d = c.memoizedState;
    if (d !== null && b !== null && Wh(b, d[1]))
      return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  };
  var Di = function(a, b, c) {
    if ((Rh & 21) === 0)
      return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
    He(c, b) || (c = yc(), N3.lanes |= c, hh |= c, a.baseState = true);
    return b;
  };
  var Ei = function(a, b) {
    var c = C2;
    C2 = c !== 0 && 4 > c ? c : 4;
    a(true);
    var d = Qh.transition;
    Qh.transition = {};
    try {
      a(false), b();
    } finally {
      C2 = c, Qh.transition = d;
    }
  };
  var Fi = function() {
    return di().memoizedState;
  };
  var Gi = function(a, b, c) {
    var d = lh(a);
    c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (Hi(a))
      Ii(b, c);
    else if (c = Yg(a, b, c, d), c !== null) {
      var e = L3();
      mh(c, a, d, e);
      Ji(c, b, d);
    }
  };
  var ri = function(a, b, c) {
    var d = lh(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (Hi(a))
      Ii(b, e);
    else {
      var f2 = a.alternate;
      if (a.lanes === 0 && (f2 === null || f2.lanes === 0) && (f2 = b.lastRenderedReducer, f2 !== null))
        try {
          var g2 = b.lastRenderedState, h2 = f2(g2, c);
          e.hasEagerState = true;
          e.eagerState = h2;
          if (He(h2, g2)) {
            var k2 = b.interleaved;
            k2 === null ? (e.next = e, Xg(b)) : (e.next = k2.next, k2.next = e);
            b.interleaved = e;
            return;
          }
        } catch (l2) {
        } finally {
        }
      c = Yg(a, b, e, d);
      c !== null && (e = L3(), mh(c, a, d, e), Ji(c, b, d));
    }
  };
  var Hi = function(a) {
    var b = a.alternate;
    return a === N3 || b !== null && b === N3;
  };
  var Ii = function(a, b) {
    Th = Sh = true;
    var c = a.pending;
    c === null ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  };
  var Ji = function(a, b, c) {
    if ((c & 4194240) !== 0) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  };
  var Ki = function(a, b) {
    try {
      var c = "", d = b;
      do
        c += Pa(d), d = d.return;
      while (d);
      var e = c;
    } catch (f2) {
      e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a, source: b, stack: e, digest: null };
  };
  var Li = function(a, b, c) {
    return { value: a, source: null, stack: c != null ? c : null, digest: b != null ? b : null };
  };
  var Mi = function(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  };
  var Oi = function(a, b, c) {
    c = ch(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function() {
      Pi || (Pi = true, Qi = d);
      Mi(a, b);
    };
    return c;
  };
  var Ri = function(a, b, c) {
    c = ch(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if (typeof d === "function") {
      var e = b.value;
      c.payload = function() {
        return d(e);
      };
      c.callback = function() {
        Mi(a, b);
      };
    }
    var f2 = a.stateNode;
    f2 !== null && typeof f2.componentDidCatch === "function" && (c.callback = function() {
      Mi(a, b);
      typeof d !== "function" && (Si === null ? Si = new Set([this]) : Si.add(this));
      var c2 = b.stack;
      this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
    });
    return c;
  };
  var Ti = function(a, b, c) {
    var d = a.pingCache;
    if (d === null) {
      d = a.pingCache = new Ni;
      var e = new Set;
      d.set(b, e);
    } else
      e = d.get(b), e === undefined && (e = new Set, d.set(b, e));
    e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
  };
  var Vi = function(a) {
    do {
      var b;
      if (b = a.tag === 13)
        b = a.memoizedState, b = b !== null ? b.dehydrated !== null ? true : false : true;
      if (b)
        return a;
      a = a.return;
    } while (a !== null);
    return null;
  };
  var Wi = function(a, b, c, d, e) {
    if ((a.mode & 1) === 0)
      return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  };
  var Yi = function(a, b, c, d) {
    b.child = a === null ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
  };
  var Zi = function(a, b, c, d, e) {
    c = c.render;
    var f2 = b.ref;
    Tg(b, e);
    d = Xh(a, b, c, d, f2, e);
    c = bi();
    if (a !== null && !Ug)
      return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
    I3 && c && vg(b);
    b.flags |= 1;
    Yi(a, b, d, e);
    return b.child;
  };
  var aj = function(a, b, c, d, e) {
    if (a === null) {
      var f2 = c.type;
      if (typeof f2 === "function" && !bj(f2) && f2.defaultProps === undefined && c.compare === null && c.defaultProps === undefined)
        return b.tag = 15, b.type = f2, cj(a, b, f2, d, e);
      a = yh(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    f2 = a.child;
    if ((a.lanes & e) === 0) {
      var g2 = f2.memoizedProps;
      c = c.compare;
      c = c !== null ? c : Ie;
      if (c(g2, d) && a.ref === b.ref)
        return $i(a, b, e);
    }
    b.flags |= 1;
    a = wh(f2, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  };
  var cj = function(a, b, c, d, e) {
    if (a !== null) {
      var f2 = a.memoizedProps;
      if (Ie(f2, d) && a.ref === b.ref)
        if (Ug = false, b.pendingProps = d = f2, (a.lanes & e) !== 0)
          (a.flags & 131072) !== 0 && (Ug = true);
        else
          return b.lanes = a.lanes, $i(a, b, e);
    }
    return dj(a, b, c, d, e);
  };
  var ej = function(a, b, c) {
    var d = b.pendingProps, e = d.children, f2 = a !== null ? a.memoizedState : null;
    if (d.mode === "hidden")
      if ((b.mode & 1) === 0)
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G3(fj, gj), gj |= c;
      else {
        if ((c & 1073741824) === 0)
          return a = f2 !== null ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G3(fj, gj), gj |= a, null;
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d = f2 !== null ? f2.baseLanes : c;
        G3(fj, gj);
        gj |= d;
      }
    else
      f2 !== null ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G3(fj, gj), gj |= d;
    Yi(a, b, e, c);
    return b.child;
  };
  var hj = function(a, b) {
    var c = b.ref;
    if (a === null && c !== null || a !== null && a.ref !== c)
      b.flags |= 512, b.flags |= 2097152;
  };
  var dj = function(a, b, c, d, e) {
    var f2 = Zf(c) ? Xf : H3.current;
    f2 = Yf(b, f2);
    Tg(b, e);
    c = Xh(a, b, c, d, f2, e);
    d = bi();
    if (a !== null && !Ug)
      return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
    I3 && d && vg(b);
    b.flags |= 1;
    Yi(a, b, c, e);
    return b.child;
  };
  var ij = function(a, b, c, d, e) {
    if (Zf(c)) {
      var f2 = true;
      cg(b);
    } else
      f2 = false;
    Tg(b, e);
    if (b.stateNode === null)
      jj(a, b), ph(b, c, d), rh(b, c, d, e), d = true;
    else if (a === null) {
      var { stateNode: g2, memoizedProps: h2 } = b;
      g2.props = h2;
      var k2 = g2.context, l2 = c.contextType;
      typeof l2 === "object" && l2 !== null ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H3.current, l2 = Yf(b, l2));
      var m = c.getDerivedStateFromProps, q2 = typeof m === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
      q2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d || k2 !== l2) && qh(b, g2, d, l2);
      $g = false;
      var r3 = b.memoizedState;
      g2.state = r3;
      gh(b, d, g2, e);
      k2 = b.memoizedState;
      h2 !== d || r3 !== k2 || Wf.current || $g ? (typeof m === "function" && (kh(b, c, m, d), k2 = b.memoizedState), (h2 = $g || oh(b, c, h2, d, r3, k2, l2)) ? (q2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b.flags |= 4194308)) : (typeof g2.componentDidMount === "function" && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g2.props = d, g2.state = k2, g2.context = l2, d = h2) : (typeof g2.componentDidMount === "function" && (b.flags |= 4194308), d = false);
    } else {
      g2 = b.stateNode;
      bh(a, b);
      h2 = b.memoizedProps;
      l2 = b.type === b.elementType ? h2 : Lg(b.type, h2);
      g2.props = l2;
      q2 = b.pendingProps;
      r3 = g2.context;
      k2 = c.contextType;
      typeof k2 === "object" && k2 !== null ? k2 = Vg(k2) : (k2 = Zf(c) ? Xf : H3.current, k2 = Yf(b, k2));
      var y3 = c.getDerivedStateFromProps;
      (m = typeof y3 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== q2 || r3 !== k2) && qh(b, g2, d, k2);
      $g = false;
      r3 = b.memoizedState;
      g2.state = r3;
      gh(b, d, g2, e);
      var n2 = b.memoizedState;
      h2 !== q2 || r3 !== n2 || Wf.current || $g ? (typeof y3 === "function" && (kh(b, c, y3, d), n2 = b.memoizedState), (l2 = $g || oh(b, c, l2, d, r3, n2, k2) || false) ? (m || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d, n2, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d, n2, k2)), typeof g2.componentDidUpdate === "function" && (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b.flags |= 1024)) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && r3 === a.memoizedState || (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && r3 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g2.props = d, g2.state = n2, g2.context = k2, d = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a.memoizedProps && r3 === a.memoizedState || (b.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a.memoizedProps && r3 === a.memoizedState || (b.flags |= 1024), d = false);
    }
    return kj(a, b, c, d, f2, e);
  };
  var kj = function(a, b, c, d, e, f2) {
    hj(a, b);
    var g2 = (b.flags & 128) !== 0;
    if (!d && !g2)
      return e && dg(b, c, false), $i(a, b, f2);
    d = b.stateNode;
    Xi.current = b;
    var h2 = g2 && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
    b.flags |= 1;
    a !== null && g2 ? (b.child = Bh(b, a.child, null, f2), b.child = Bh(b, null, h2, f2)) : Yi(a, b, h2, f2);
    b.memoizedState = d.state;
    e && dg(b, c, true);
    return b.child;
  };
  var lj = function(a) {
    var b = a.stateNode;
    b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
    Ih(a, b.containerInfo);
  };
  var mj = function(a, b, c, d, e) {
    Ig();
    Jg(e);
    b.flags |= 256;
    Yi(a, b, c, d);
    return b.child;
  };
  var oj = function(a) {
    return { baseLanes: a, cachePool: null, transitions: null };
  };
  var pj = function(a, b, c) {
    var d = b.pendingProps, e = M3.current, f2 = false, g2 = (b.flags & 128) !== 0, h2;
    (h2 = g2) || (h2 = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
    if (h2)
      f2 = true, b.flags &= -129;
    else if (a === null || a.memoizedState !== null)
      e |= 1;
    G3(M3, e & 1);
    if (a === null) {
      Eg(b);
      a = b.memoizedState;
      if (a !== null && (a = a.dehydrated, a !== null))
        return (b.mode & 1) === 0 ? b.lanes = 1 : a.data === "$!" ? b.lanes = 8 : b.lanes = 1073741824, null;
      g2 = d.children;
      a = d.fallback;
      return f2 ? (d = b.mode, f2 = b.child, g2 = { mode: "hidden", children: g2 }, (d & 1) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d, 0, null), a = Ah(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g2);
    }
    e = a.memoizedState;
    if (e !== null && (h2 = e.dehydrated, h2 !== null))
      return sj(a, b, g2, d, h2, e, c);
    if (f2) {
      f2 = d.fallback;
      g2 = b.mode;
      e = a.child;
      h2 = e.sibling;
      var k2 = { mode: "hidden", children: d.children };
      (g2 & 1) === 0 && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = wh(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
      h2 !== null ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c, null), f2.flags |= 2);
      f2.return = b;
      d.return = b;
      d.sibling = f2;
      b.child = d;
      d = f2;
      f2 = b.child;
      g2 = a.child.memoizedState;
      g2 = g2 === null ? oj(c) : { baseLanes: g2.baseLanes | c, cachePool: null, transitions: g2.transitions };
      f2.memoizedState = g2;
      f2.childLanes = a.childLanes & ~c;
      b.memoizedState = nj;
      return d;
    }
    f2 = a.child;
    a = f2.sibling;
    d = wh(f2, { mode: "visible", children: d.children });
    (b.mode & 1) === 0 && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    a !== null && (c = b.deletions, c === null ? (b.deletions = [a], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  };
  var rj = function(a, b) {
    b = qj({ mode: "visible", children: b }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
  };
  var tj = function(a, b, c, d) {
    d !== null && Jg(d);
    Bh(b, a.child, null, c);
    a = rj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  };
  var sj = function(a, b, c, d, e, f2, g2) {
    if (c) {
      if (b.flags & 256)
        return b.flags &= -257, d = Li(Error(p2(422))), tj(a, b, g2, d);
      if (b.memoizedState !== null)
        return b.child = a.child, b.flags |= 128, null;
      f2 = d.fallback;
      e = b.mode;
      d = qj({ mode: "visible", children: d.children }, e, 0, null);
      f2 = Ah(f2, e, g2, null);
      f2.flags |= 2;
      d.return = b;
      f2.return = b;
      d.sibling = f2;
      b.child = d;
      (b.mode & 1) !== 0 && Bh(b, a.child, null, g2);
      b.child.memoizedState = oj(g2);
      b.memoizedState = nj;
      return f2;
    }
    if ((b.mode & 1) === 0)
      return tj(a, b, g2, null);
    if (e.data === "$!") {
      d = e.nextSibling && e.nextSibling.dataset;
      if (d)
        var h2 = d.dgst;
      d = h2;
      f2 = Error(p2(419));
      d = Li(f2, d, undefined);
      return tj(a, b, g2, d);
    }
    h2 = (g2 & a.childLanes) !== 0;
    if (Ug || h2) {
      d = R3;
      if (d !== null) {
        switch (g2 & -g2) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = (e & (d.suspendedLanes | g2)) !== 0 ? 0 : e;
        e !== 0 && e !== f2.retryLane && (f2.retryLane = e, Zg(a, e), mh(d, a, e, -1));
      }
      uj();
      d = Li(Error(p2(421)));
      return tj(a, b, g2, d);
    }
    if (e.data === "$?")
      return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
    a = f2.treeContext;
    yg = Lf(e.nextSibling);
    xg = b;
    I3 = true;
    zg = null;
    a !== null && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
    b = rj(b, d.children);
    b.flags |= 4096;
    return b;
  };
  var wj = function(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    d !== null && (d.lanes |= b);
    Sg(a.return, b, c);
  };
  var xj = function(a, b, c, d, e) {
    var f2 = a.memoizedState;
    f2 === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
  };
  var yj = function(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
    Yi(a, b, d.children, c);
    d = M3.current;
    if ((d & 2) !== 0)
      d = d & 1 | 2, b.flags |= 128;
    else {
      if (a !== null && (a.flags & 128) !== 0)
        a:
          for (a = b.child;a !== null; ) {
            if (a.tag === 13)
              a.memoizedState !== null && wj(a, c, b);
            else if (a.tag === 19)
              wj(a, c, b);
            else if (a.child !== null) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b)
              break a;
            for (;a.sibling === null; ) {
              if (a.return === null || a.return === b)
                break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
      d &= 1;
    }
    G3(M3, d);
    if ((b.mode & 1) === 0)
      b.memoizedState = null;
    else
      switch (e) {
        case "forwards":
          c = b.child;
          for (e = null;c !== null; )
            a = c.alternate, a !== null && Mh(a) === null && (e = c), c = c.sibling;
          c = e;
          c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          xj(b, false, e, c, f2);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null;e !== null; ) {
            a = e.alternate;
            if (a !== null && Mh(a) === null) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          xj(b, true, c, null, f2);
          break;
        case "together":
          xj(b, false, null, null, undefined);
          break;
        default:
          b.memoizedState = null;
      }
    return b.child;
  };
  var jj = function(a, b) {
    (b.mode & 1) === 0 && a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
  };
  var $i = function(a, b, c) {
    a !== null && (b.dependencies = a.dependencies);
    hh |= b.lanes;
    if ((c & b.childLanes) === 0)
      return null;
    if (a !== null && b.child !== a.child)
      throw Error(p2(153));
    if (b.child !== null) {
      a = b.child;
      c = wh(a, a.pendingProps);
      b.child = c;
      for (c.return = b;a.sibling !== null; )
        a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  };
  var zj = function(a, b, c) {
    switch (b.tag) {
      case 3:
        lj(b);
        Ig();
        break;
      case 5:
        Kh(b);
        break;
      case 1:
        Zf(b.type) && cg(b);
        break;
      case 4:
        Ih(b, b.stateNode.containerInfo);
        break;
      case 10:
        var d = b.type._context, e = b.memoizedProps.value;
        G3(Mg, d._currentValue);
        d._currentValue = e;
        break;
      case 13:
        d = b.memoizedState;
        if (d !== null) {
          if (d.dehydrated !== null)
            return G3(M3, M3.current & 1), b.flags |= 128, null;
          if ((c & b.child.childLanes) !== 0)
            return pj(a, b, c);
          G3(M3, M3.current & 1);
          a = $i(a, b, c);
          return a !== null ? a.sibling : null;
        }
        G3(M3, M3.current & 1);
        break;
      case 19:
        d = (c & b.childLanes) !== 0;
        if ((a.flags & 128) !== 0) {
          if (d)
            return yj(a, b, c);
          b.flags |= 128;
        }
        e = b.memoizedState;
        e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
        G3(M3, M3.current);
        if (d)
          break;
        else
          return null;
      case 22:
      case 23:
        return b.lanes = 0, ej(a, b, c);
    }
    return $i(a, b, c);
  };
  var Ej = function(a, b) {
    if (!I3)
      switch (a.tailMode) {
        case "hidden":
          b = a.tail;
          for (var c = null;b !== null; )
            b.alternate !== null && (c = b), b = b.sibling;
          c === null ? a.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a.tail;
          for (var d = null;c !== null; )
            c.alternate !== null && (d = c), c = c.sibling;
          d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
      }
  };
  var S3 = function(a) {
    var b = a.alternate !== null && a.alternate.child === a.child, c = 0, d = 0;
    if (b)
      for (var e = a.child;e !== null; )
        c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else
      for (e = a.child;e !== null; )
        c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  };
  var Fj = function(a, b, c) {
    var d = b.pendingProps;
    wg(b);
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S3(b), null;
      case 1:
        return Zf(b.type) && $f(), S3(b), null;
      case 3:
        d = b.stateNode;
        Jh();
        E3(Wf);
        E3(H3);
        Oh();
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (a === null || a.child === null)
          Gg(b) ? b.flags |= 4 : a === null || a.memoizedState.isDehydrated && (b.flags & 256) === 0 || (b.flags |= 1024, zg !== null && (Gj(zg), zg = null));
        Bj(a, b);
        S3(b);
        return null;
      case 5:
        Lh(b);
        var e = Hh(Gh.current);
        c = b.type;
        if (a !== null && b.stateNode != null)
          Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        else {
          if (!d) {
            if (b.stateNode === null)
              throw Error(p2(166));
            S3(b);
            return null;
          }
          a = Hh(Eh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.type;
            var f2 = b.memoizedProps;
            d[Of] = b;
            d[Pf] = f2;
            a = (b.mode & 1) !== 0;
            switch (c) {
              case "dialog":
                D3("cancel", d);
                D3("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                D3("load", d);
                break;
              case "video":
              case "audio":
                for (e = 0;e < lf.length; e++)
                  D3(lf[e], d);
                break;
              case "source":
                D3("error", d);
                break;
              case "img":
              case "image":
              case "link":
                D3("error", d);
                D3("load", d);
                break;
              case "details":
                D3("toggle", d);
                break;
              case "input":
                Za(d, f2);
                D3("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!f2.multiple };
                D3("invalid", d);
                break;
              case "textarea":
                hb(d, f2), D3("invalid", d);
            }
            ub(c, f2);
            e = null;
            for (var g2 in f2)
              if (f2.hasOwnProperty(g2)) {
                var h2 = f2[g2];
                g2 === "children" ? typeof h2 === "string" ? d.textContent !== h2 && (f2.suppressHydrationWarning !== true && Af(d.textContent, h2, a), e = ["children", h2]) : typeof h2 === "number" && d.textContent !== "" + h2 && (f2.suppressHydrationWarning !== true && Af(d.textContent, h2, a), e = ["children", "" + h2]) : ea.hasOwnProperty(g2) && h2 != null && g2 === "onScroll" && D3("scroll", d);
              }
            switch (c) {
              case "input":
                Va(d);
                db(d, f2, true);
                break;
              case "textarea":
                Va(d);
                jb(d);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f2.onClick === "function" && (d.onclick = Bf);
            }
            d = e;
            b.updateQueue = d;
            d !== null && (b.flags |= 4);
          } else {
            g2 = e.nodeType === 9 ? e : e.ownerDocument;
            a === "http://www.w3.org/1999/xhtml" && (a = kb(c));
            a === "http://www.w3.org/1999/xhtml" ? c === "script" ? (a = g2.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g2.createElement(c, { is: d.is }) : (a = g2.createElement(c), c === "select" && (g2 = a, d.multiple ? g2.multiple = true : d.size && (g2.size = d.size))) : a = g2.createElementNS(a, c);
            a[Of] = b;
            a[Pf] = d;
            Aj(a, b, false, false);
            b.stateNode = a;
            a: {
              g2 = vb(c, d);
              switch (c) {
                case "dialog":
                  D3("cancel", a);
                  D3("close", a);
                  e = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D3("load", a);
                  e = d;
                  break;
                case "video":
                case "audio":
                  for (e = 0;e < lf.length; e++)
                    D3(lf[e], a);
                  e = d;
                  break;
                case "source":
                  D3("error", a);
                  e = d;
                  break;
                case "img":
                case "image":
                case "link":
                  D3("error", a);
                  D3("load", a);
                  e = d;
                  break;
                case "details":
                  D3("toggle", a);
                  e = d;
                  break;
                case "input":
                  Za(a, d);
                  e = Ya(a, d);
                  D3("invalid", a);
                  break;
                case "option":
                  e = d;
                  break;
                case "select":
                  a._wrapperState = { wasMultiple: !!d.multiple };
                  e = A3({}, d, { value: undefined });
                  D3("invalid", a);
                  break;
                case "textarea":
                  hb(a, d);
                  e = gb(a, d);
                  D3("invalid", a);
                  break;
                default:
                  e = d;
              }
              ub(c, e);
              h2 = e;
              for (f2 in h2)
                if (h2.hasOwnProperty(f2)) {
                  var k2 = h2[f2];
                  f2 === "style" ? sb(a, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : undefined, k2 != null && nb(a, k2)) : f2 === "children" ? typeof k2 === "string" ? (c !== "textarea" || k2 !== "") && ob(a, k2) : typeof k2 === "number" && ob(a, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ea.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && D3("scroll", a) : k2 != null && ta(a, f2, k2, g2));
                }
              switch (c) {
                case "input":
                  Va(a);
                  db(a, d, false);
                  break;
                case "textarea":
                  Va(a);
                  jb(a);
                  break;
                case "option":
                  d.value != null && a.setAttribute("value", "" + Sa(d.value));
                  break;
                case "select":
                  a.multiple = !!d.multiple;
                  f2 = d.value;
                  f2 != null ? fb(a, !!d.multiple, f2, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
                  break;
                default:
                  typeof e.onClick === "function" && (a.onclick = Bf);
              }
              switch (c) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break a;
                case "img":
                  d = true;
                  break a;
                default:
                  d = false;
              }
            }
            d && (b.flags |= 4);
          }
          b.ref !== null && (b.flags |= 512, b.flags |= 2097152);
        }
        S3(b);
        return null;
      case 6:
        if (a && b.stateNode != null)
          Dj(a, b, a.memoizedProps, d);
        else {
          if (typeof d !== "string" && b.stateNode === null)
            throw Error(p2(166));
          c = Hh(Gh.current);
          Hh(Eh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.memoizedProps;
            d[Of] = b;
            if (f2 = d.nodeValue !== c) {
              if (a = xg, a !== null)
                switch (a.tag) {
                  case 3:
                    Af(d.nodeValue, c, (a.mode & 1) !== 0);
                    break;
                  case 5:
                    a.memoizedProps.suppressHydrationWarning !== true && Af(d.nodeValue, c, (a.mode & 1) !== 0);
                }
            }
            f2 && (b.flags |= 4);
          } else
            d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
        }
        S3(b);
        return null;
      case 13:
        E3(M3);
        d = b.memoizedState;
        if (a === null || a.memoizedState !== null && a.memoizedState.dehydrated !== null) {
          if (I3 && yg !== null && (b.mode & 1) !== 0 && (b.flags & 128) === 0)
            Hg(), Ig(), b.flags |= 98560, f2 = false;
          else if (f2 = Gg(b), d !== null && d.dehydrated !== null) {
            if (a === null) {
              if (!f2)
                throw Error(p2(318));
              f2 = b.memoizedState;
              f2 = f2 !== null ? f2.dehydrated : null;
              if (!f2)
                throw Error(p2(317));
              f2[Of] = b;
            } else
              Ig(), (b.flags & 128) === 0 && (b.memoizedState = null), b.flags |= 4;
            S3(b);
            f2 = false;
          } else
            zg !== null && (Gj(zg), zg = null), f2 = true;
          if (!f2)
            return b.flags & 65536 ? b : null;
        }
        if ((b.flags & 128) !== 0)
          return b.lanes = c, b;
        d = d !== null;
        d !== (a !== null && a.memoizedState !== null) && d && (b.child.flags |= 8192, (b.mode & 1) !== 0 && (a === null || (M3.current & 1) !== 0 ? T2 === 0 && (T2 = 3) : uj()));
        b.updateQueue !== null && (b.flags |= 4);
        S3(b);
        return null;
      case 4:
        return Jh(), Bj(a, b), a === null && sf(b.stateNode.containerInfo), S3(b), null;
      case 10:
        return Rg(b.type._context), S3(b), null;
      case 17:
        return Zf(b.type) && $f(), S3(b), null;
      case 19:
        E3(M3);
        f2 = b.memoizedState;
        if (f2 === null)
          return S3(b), null;
        d = (b.flags & 128) !== 0;
        g2 = f2.rendering;
        if (g2 === null)
          if (d)
            Ej(f2, false);
          else {
            if (T2 !== 0 || a !== null && (a.flags & 128) !== 0)
              for (a = b.child;a !== null; ) {
                g2 = Mh(a);
                if (g2 !== null) {
                  b.flags |= 128;
                  Ej(f2, false);
                  d = g2.updateQueue;
                  d !== null && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child;c !== null; )
                    f2 = c, a = d, f2.flags &= 14680066, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G3(M3, M3.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
            f2.tail !== null && B3() > Hj && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
          }
        else {
          if (!d)
            if (a = Mh(g2), a !== null) {
              if (b.flags |= 128, d = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Ej(f2, true), f2.tail === null && f2.tailMode === "hidden" && !g2.alternate && !I3)
                return S3(b), null;
            } else
              2 * B3() - f2.renderingStartTime > Hj && c !== 1073741824 && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
          f2.isBackwards ? (g2.sibling = b.child, b.child = g2) : (c = f2.last, c !== null ? c.sibling = g2 : b.child = g2, f2.last = g2);
        }
        if (f2.tail !== null)
          return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B3(), b.sibling = null, c = M3.current, G3(M3, d ? c & 1 | 2 : c & 1), b;
        S3(b);
        return null;
      case 22:
      case 23:
        return Ij(), d = b.memoizedState !== null, a !== null && a.memoizedState !== null !== d && (b.flags |= 8192), d && (b.mode & 1) !== 0 ? (gj & 1073741824) !== 0 && (S3(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S3(b), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p2(156, b.tag));
  };
  var Jj = function(a, b) {
    wg(b);
    switch (b.tag) {
      case 1:
        return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 3:
        return Jh(), E3(Wf), E3(H3), Oh(), a = b.flags, (a & 65536) !== 0 && (a & 128) === 0 ? (b.flags = a & -65537 | 128, b) : null;
      case 5:
        return Lh(b), null;
      case 13:
        E3(M3);
        a = b.memoizedState;
        if (a !== null && a.dehydrated !== null) {
          if (b.alternate === null)
            throw Error(p2(340));
          Ig();
        }
        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 19:
        return E3(M3), null;
      case 4:
        return Jh(), null;
      case 10:
        return Rg(b.type._context), null;
      case 22:
      case 23:
        return Ij(), null;
      case 24:
        return null;
      default:
        return null;
    }
  };
  var Mj = function(a, b) {
    var c = a.ref;
    if (c !== null)
      if (typeof c === "function")
        try {
          c(null);
        } catch (d) {
          W2(a, b, d);
        }
      else
        c.current = null;
  };
  var Nj = function(a, b, c) {
    try {
      c();
    } catch (d) {
      W2(a, b, d);
    }
  };
  var Pj = function(a, b) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
      if ("selectionStart" in a)
        var c = { start: a.selectionStart, end: a.selectionEnd };
      else
        a: {
          c = (c = a.ownerDocument) && c.defaultView || window;
          var d = c.getSelection && c.getSelection();
          if (d && d.rangeCount !== 0) {
            c = d.anchorNode;
            var { anchorOffset: e, focusNode: f2 } = d;
            d = d.focusOffset;
            try {
              c.nodeType, f2.nodeType;
            } catch (F3) {
              c = null;
              break a;
            }
            var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m = 0, q2 = a, r3 = null;
            b:
              for (;; ) {
                for (var y3;; ) {
                  q2 !== c || e !== 0 && q2.nodeType !== 3 || (h2 = g2 + e);
                  q2 !== f2 || d !== 0 && q2.nodeType !== 3 || (k2 = g2 + d);
                  q2.nodeType === 3 && (g2 += q2.nodeValue.length);
                  if ((y3 = q2.firstChild) === null)
                    break;
                  r3 = q2;
                  q2 = y3;
                }
                for (;; ) {
                  if (q2 === a)
                    break b;
                  r3 === c && ++l2 === e && (h2 = g2);
                  r3 === f2 && ++m === d && (k2 = g2);
                  if ((y3 = q2.nextSibling) !== null)
                    break;
                  q2 = r3;
                  r3 = q2.parentNode;
                }
                q2 = y3;
              }
            c = h2 === -1 || k2 === -1 ? null : { start: h2, end: k2 };
          } else
            c = null;
        }
      c = c || { start: 0, end: 0 };
    } else
      c = null;
    Df = { focusedElem: a, selectionRange: c };
    dd = false;
    for (V2 = b;V2 !== null; )
      if (b = V2, a = b.child, (b.subtreeFlags & 1028) !== 0 && a !== null)
        a.return = b, V2 = a;
      else
        for (;V2 !== null; ) {
          b = V2;
          try {
            var n2 = b.alternate;
            if ((b.flags & 1024) !== 0)
              switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (n2 !== null) {
                    var { memoizedProps: t3, memoizedState: J3 } = n2, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t3 : Lg(b.type, t3), J3);
                    x2.__reactInternalSnapshotBeforeUpdate = w2;
                  }
                  break;
                case 3:
                  var u3 = b.stateNode.containerInfo;
                  u3.nodeType === 1 ? u3.textContent = "" : u3.nodeType === 9 && u3.documentElement && u3.removeChild(u3.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p2(163));
              }
          } catch (F3) {
            W2(b, b.return, F3);
          }
          a = b.sibling;
          if (a !== null) {
            a.return = b.return;
            V2 = a;
            break;
          }
          V2 = b.return;
        }
    n2 = Oj;
    Oj = false;
    return n2;
  };
  var Qj = function(a, b, c) {
    var d = b.updateQueue;
    d = d !== null ? d.lastEffect : null;
    if (d !== null) {
      var e = d = d.next;
      do {
        if ((e.tag & a) === a) {
          var f2 = e.destroy;
          e.destroy = undefined;
          f2 !== undefined && Nj(b, c, f2);
        }
        e = e.next;
      } while (e !== d);
    }
  };
  var Rj = function(a, b) {
    b = b.updateQueue;
    b = b !== null ? b.lastEffect : null;
    if (b !== null) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  };
  var Sj = function(a) {
    var b = a.ref;
    if (b !== null) {
      var c = a.stateNode;
      switch (a.tag) {
        case 5:
          a = c;
          break;
        default:
          a = c;
      }
      typeof b === "function" ? b(a) : b.current = a;
    }
  };
  var Tj = function(a) {
    var b = a.alternate;
    b !== null && (a.alternate = null, Tj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    a.tag === 5 && (b = a.stateNode, b !== null && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  };
  var Uj = function(a) {
    return a.tag === 5 || a.tag === 3 || a.tag === 4;
  };
  var Vj = function(a) {
    a:
      for (;; ) {
        for (;a.sibling === null; ) {
          if (a.return === null || Uj(a.return))
            return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling;a.tag !== 5 && a.tag !== 6 && a.tag !== 18; ) {
          if (a.flags & 2)
            continue a;
          if (a.child === null || a.tag === 4)
            continue a;
          else
            a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2))
          return a.stateNode;
      }
  };
  var Wj = function(a, b, c) {
    var d = a.tag;
    if (d === 5 || d === 6)
      a = a.stateNode, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== undefined || b.onclick !== null || (b.onclick = Bf));
    else if (d !== 4 && (a = a.child, a !== null))
      for (Wj(a, b, c), a = a.sibling;a !== null; )
        Wj(a, b, c), a = a.sibling;
  };
  var Xj = function(a, b, c) {
    var d = a.tag;
    if (d === 5 || d === 6)
      a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (d !== 4 && (a = a.child, a !== null))
      for (Xj(a, b, c), a = a.sibling;a !== null; )
        Xj(a, b, c), a = a.sibling;
  };
  var Zj = function(a, b, c) {
    for (c = c.child;c !== null; )
      ak(a, b, c), c = c.sibling;
  };
  var ak = function(a, b, c) {
    if (lc && typeof lc.onCommitFiberUnmount === "function")
      try {
        lc.onCommitFiberUnmount(kc, c);
      } catch (h2) {
      }
    switch (c.tag) {
      case 5:
        U2 || Mj(c, b);
      case 6:
        var d = X, e = Yj;
        X = null;
        Zj(a, b, c);
        X = d;
        Yj = e;
        X !== null && (Yj ? (a = X, c = c.stateNode, a.nodeType === 8 ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
        break;
      case 18:
        X !== null && (Yj ? (a = X, c = c.stateNode, a.nodeType === 8 ? Kf(a.parentNode, c) : a.nodeType === 1 && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
        break;
      case 4:
        d = X;
        e = Yj;
        X = c.stateNode.containerInfo;
        Yj = true;
        Zj(a, b, c);
        X = d;
        Yj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U2 && (d = c.updateQueue, d !== null && (d = d.lastEffect, d !== null))) {
          e = d = d.next;
          do {
            var f2 = e, g2 = f2.destroy;
            f2 = f2.tag;
            g2 !== undefined && ((f2 & 2) !== 0 ? Nj(c, b, g2) : (f2 & 4) !== 0 && Nj(c, b, g2));
            e = e.next;
          } while (e !== d);
        }
        Zj(a, b, c);
        break;
      case 1:
        if (!U2 && (Mj(c, b), d = c.stateNode, typeof d.componentWillUnmount === "function"))
          try {
            d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
          } catch (h2) {
            W2(c, b, h2);
          }
        Zj(a, b, c);
        break;
      case 21:
        Zj(a, b, c);
        break;
      case 22:
        c.mode & 1 ? (U2 = (d = U2) || c.memoizedState !== null, Zj(a, b, c), U2 = d) : Zj(a, b, c);
        break;
      default:
        Zj(a, b, c);
    }
  };
  var bk = function(a) {
    var b = a.updateQueue;
    if (b !== null) {
      a.updateQueue = null;
      var c = a.stateNode;
      c === null && (c = a.stateNode = new Lj);
      b.forEach(function(b2) {
        var d = ck.bind(null, a, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  };
  var dk = function(a, b) {
    var c = b.deletions;
    if (c !== null)
      for (var d = 0;d < c.length; d++) {
        var e = c[d];
        try {
          var f2 = a, g2 = b, h2 = g2;
          a:
            for (;h2 !== null; ) {
              switch (h2.tag) {
                case 5:
                  X = h2.stateNode;
                  Yj = false;
                  break a;
                case 3:
                  X = h2.stateNode.containerInfo;
                  Yj = true;
                  break a;
                case 4:
                  X = h2.stateNode.containerInfo;
                  Yj = true;
                  break a;
              }
              h2 = h2.return;
            }
          if (X === null)
            throw Error(p2(160));
          ak(f2, g2, e);
          X = null;
          Yj = false;
          var k2 = e.alternate;
          k2 !== null && (k2.return = null);
          e.return = null;
        } catch (l2) {
          W2(e, b, l2);
        }
      }
    if (b.subtreeFlags & 12854)
      for (b = b.child;b !== null; )
        ek(b, a), b = b.sibling;
  };
  var ek = function(a, b) {
    var { alternate: c, flags: d } = a;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        dk(b, a);
        fk(a);
        if (d & 4) {
          try {
            Qj(3, a, a.return), Rj(3, a);
          } catch (t3) {
            W2(a, a.return, t3);
          }
          try {
            Qj(5, a, a.return);
          } catch (t3) {
            W2(a, a.return, t3);
          }
        }
        break;
      case 1:
        dk(b, a);
        fk(a);
        d & 512 && c !== null && Mj(c, c.return);
        break;
      case 5:
        dk(b, a);
        fk(a);
        d & 512 && c !== null && Mj(c, c.return);
        if (a.flags & 32) {
          var e = a.stateNode;
          try {
            ob(e, "");
          } catch (t3) {
            W2(a, a.return, t3);
          }
        }
        if (d & 4 && (e = a.stateNode, e != null)) {
          var f2 = a.memoizedProps, g2 = c !== null ? c.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
          a.updateQueue = null;
          if (k2 !== null)
            try {
              h2 === "input" && f2.type === "radio" && f2.name != null && ab(e, f2);
              vb(h2, g2);
              var l2 = vb(h2, f2);
              for (g2 = 0;g2 < k2.length; g2 += 2) {
                var m = k2[g2], q2 = k2[g2 + 1];
                m === "style" ? sb(e, q2) : m === "dangerouslySetInnerHTML" ? nb(e, q2) : m === "children" ? ob(e, q2) : ta(e, m, q2, l2);
              }
              switch (h2) {
                case "input":
                  bb(e, f2);
                  break;
                case "textarea":
                  ib(e, f2);
                  break;
                case "select":
                  var r3 = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = !!f2.multiple;
                  var y3 = f2.value;
                  y3 != null ? fb(e, !!f2.multiple, y3, false) : r3 !== !!f2.multiple && (f2.defaultValue != null ? fb(e, !!f2.multiple, f2.defaultValue, true) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
              }
              e[Pf] = f2;
            } catch (t3) {
              W2(a, a.return, t3);
            }
        }
        break;
      case 6:
        dk(b, a);
        fk(a);
        if (d & 4) {
          if (a.stateNode === null)
            throw Error(p2(162));
          e = a.stateNode;
          f2 = a.memoizedProps;
          try {
            e.nodeValue = f2;
          } catch (t3) {
            W2(a, a.return, t3);
          }
        }
        break;
      case 3:
        dk(b, a);
        fk(a);
        if (d & 4 && c !== null && c.memoizedState.isDehydrated)
          try {
            bd(b.containerInfo);
          } catch (t3) {
            W2(a, a.return, t3);
          }
        break;
      case 4:
        dk(b, a);
        fk(a);
        break;
      case 13:
        dk(b, a);
        fk(a);
        e = a.child;
        e.flags & 8192 && (f2 = e.memoizedState !== null, e.stateNode.isHidden = f2, !f2 || e.alternate !== null && e.alternate.memoizedState !== null || (gk = B3()));
        d & 4 && bk(a);
        break;
      case 22:
        m = c !== null && c.memoizedState !== null;
        a.mode & 1 ? (U2 = (l2 = U2) || m, dk(b, a), U2 = l2) : dk(b, a);
        fk(a);
        if (d & 8192) {
          l2 = a.memoizedState !== null;
          if ((a.stateNode.isHidden = l2) && !m && (a.mode & 1) !== 0)
            for (V2 = a, m = a.child;m !== null; ) {
              for (q2 = V2 = m;V2 !== null; ) {
                r3 = V2;
                y3 = r3.child;
                switch (r3.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Qj(4, r3, r3.return);
                    break;
                  case 1:
                    Mj(r3, r3.return);
                    var n2 = r3.stateNode;
                    if (typeof n2.componentWillUnmount === "function") {
                      d = r3;
                      c = r3.return;
                      try {
                        b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                      } catch (t3) {
                        W2(d, c, t3);
                      }
                    }
                    break;
                  case 5:
                    Mj(r3, r3.return);
                    break;
                  case 22:
                    if (r3.memoizedState !== null) {
                      hk(q2);
                      continue;
                    }
                }
                y3 !== null ? (y3.return = r3, V2 = y3) : hk(q2);
              }
              m = m.sibling;
            }
          a:
            for (m = null, q2 = a;; ) {
              if (q2.tag === 5) {
                if (m === null) {
                  m = q2;
                  try {
                    e = q2.stateNode, l2 ? (f2 = e.style, typeof f2.setProperty === "function" ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = k2 !== undefined && k2 !== null && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                  } catch (t3) {
                    W2(a, a.return, t3);
                  }
                }
              } else if (q2.tag === 6) {
                if (m === null)
                  try {
                    q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                  } catch (t3) {
                    W2(a, a.return, t3);
                  }
              } else if ((q2.tag !== 22 && q2.tag !== 23 || q2.memoizedState === null || q2 === a) && q2.child !== null) {
                q2.child.return = q2;
                q2 = q2.child;
                continue;
              }
              if (q2 === a)
                break a;
              for (;q2.sibling === null; ) {
                if (q2.return === null || q2.return === a)
                  break a;
                m === q2 && (m = null);
                q2 = q2.return;
              }
              m === q2 && (m = null);
              q2.sibling.return = q2.return;
              q2 = q2.sibling;
            }
        }
        break;
      case 19:
        dk(b, a);
        fk(a);
        d & 4 && bk(a);
        break;
      case 21:
        break;
      default:
        dk(b, a), fk(a);
    }
  };
  var fk = function(a) {
    var b = a.flags;
    if (b & 2) {
      try {
        a: {
          for (var c = a.return;c !== null; ) {
            if (Uj(c)) {
              var d = c;
              break a;
            }
            c = c.return;
          }
          throw Error(p2(160));
        }
        switch (d.tag) {
          case 5:
            var e = d.stateNode;
            d.flags & 32 && (ob(e, ""), d.flags &= -33);
            var f2 = Vj(a);
            Xj(a, f2, e);
            break;
          case 3:
          case 4:
            var g2 = d.stateNode.containerInfo, h2 = Vj(a);
            Wj(a, h2, g2);
            break;
          default:
            throw Error(p2(161));
        }
      } catch (k2) {
        W2(a, a.return, k2);
      }
      a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
  };
  var ik = function(a, b, c) {
    V2 = a;
    jk(a, b, c);
  };
  var jk = function(a, b, c) {
    for (var d = (a.mode & 1) !== 0;V2 !== null; ) {
      var e = V2, f2 = e.child;
      if (e.tag === 22 && d) {
        var g2 = e.memoizedState !== null || Kj;
        if (!g2) {
          var h2 = e.alternate, k2 = h2 !== null && h2.memoizedState !== null || U2;
          h2 = Kj;
          var l2 = U2;
          Kj = g2;
          if ((U2 = k2) && !l2)
            for (V2 = e;V2 !== null; )
              g2 = V2, k2 = g2.child, g2.tag === 22 && g2.memoizedState !== null ? kk(e) : k2 !== null ? (k2.return = g2, V2 = k2) : kk(e);
          for (;f2 !== null; )
            V2 = f2, jk(f2, b, c), f2 = f2.sibling;
          V2 = e;
          Kj = h2;
          U2 = l2;
        }
        lk(a, b, c);
      } else
        (e.subtreeFlags & 8772) !== 0 && f2 !== null ? (f2.return = e, V2 = f2) : lk(a, b, c);
    }
  };
  var lk = function(a) {
    for (;V2 !== null; ) {
      var b = V2;
      if ((b.flags & 8772) !== 0) {
        var c = b.alternate;
        try {
          if ((b.flags & 8772) !== 0)
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                U2 || Rj(5, b);
                break;
              case 1:
                var d = b.stateNode;
                if (b.flags & 4 && !U2)
                  if (c === null)
                    d.componentDidMount();
                  else {
                    var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                var f2 = b.updateQueue;
                f2 !== null && ih(b, f2, d);
                break;
              case 3:
                var g2 = b.updateQueue;
                if (g2 !== null) {
                  c = null;
                  if (b.child !== null)
                    switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                  ih(b, g2, c);
                }
                break;
              case 5:
                var h2 = b.stateNode;
                if (c === null && b.flags & 4) {
                  c = h2;
                  var k2 = b.memoizedProps;
                  switch (b.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k2.autoFocus && c.focus();
                      break;
                    case "img":
                      k2.src && (c.src = k2.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (b.memoizedState === null) {
                  var l2 = b.alternate;
                  if (l2 !== null) {
                    var m = l2.memoizedState;
                    if (m !== null) {
                      var q2 = m.dehydrated;
                      q2 !== null && bd(q2);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p2(163));
            }
          U2 || b.flags & 512 && Sj(b);
        } catch (r3) {
          W2(b, b.return, r3);
        }
      }
      if (b === a) {
        V2 = null;
        break;
      }
      c = b.sibling;
      if (c !== null) {
        c.return = b.return;
        V2 = c;
        break;
      }
      V2 = b.return;
    }
  };
  var hk = function(a) {
    for (;V2 !== null; ) {
      var b = V2;
      if (b === a) {
        V2 = null;
        break;
      }
      var c = b.sibling;
      if (c !== null) {
        c.return = b.return;
        V2 = c;
        break;
      }
      V2 = b.return;
    }
  };
  var kk = function(a) {
    for (;V2 !== null; ) {
      var b = V2;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b.return;
            try {
              Rj(4, b);
            } catch (k2) {
              W2(b, c, k2);
            }
            break;
          case 1:
            var d = b.stateNode;
            if (typeof d.componentDidMount === "function") {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k2) {
                W2(b, e, k2);
              }
            }
            var f2 = b.return;
            try {
              Sj(b);
            } catch (k2) {
              W2(b, f2, k2);
            }
            break;
          case 5:
            var g2 = b.return;
            try {
              Sj(b);
            } catch (k2) {
              W2(b, g2, k2);
            }
        }
      } catch (k2) {
        W2(b, b.return, k2);
      }
      if (b === a) {
        V2 = null;
        break;
      }
      var h2 = b.sibling;
      if (h2 !== null) {
        h2.return = b.return;
        V2 = h2;
        break;
      }
      V2 = b.return;
    }
  };
  var L3 = function() {
    return (K3 & 6) !== 0 ? B3() : Bk !== -1 ? Bk : Bk = B3();
  };
  var lh = function(a) {
    if ((a.mode & 1) === 0)
      return 1;
    if ((K3 & 2) !== 0 && Z !== 0)
      return Z & -Z;
    if (Kg.transition !== null)
      return Ck === 0 && (Ck = yc()), Ck;
    a = C2;
    if (a !== 0)
      return a;
    a = window.event;
    a = a === undefined ? 16 : jd(a.type);
    return a;
  };
  var mh = function(a, b, c, d) {
    if (50 < zk)
      throw zk = 0, Ak = null, Error(p2(185));
    Ac(a, c, d);
    if ((K3 & 2) === 0 || a !== R3)
      a === R3 && ((K3 & 2) === 0 && (rk |= c), T2 === 4 && Dk(a, Z)), Ek(a, d), c === 1 && K3 === 0 && (b.mode & 1) === 0 && (Hj = B3() + 500, fg && jg());
  };
  var Ek = function(a, b) {
    var c = a.callbackNode;
    wc(a, b);
    var d = uc(a, a === R3 ? Z : 0);
    if (d === 0)
      c !== null && bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
      c != null && bc(c);
      if (b === 1)
        a.tag === 0 ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
          (K3 & 6) === 0 && jg();
        }), c = null;
      else {
        switch (Dc(d)) {
          case 1:
            c = fc;
            break;
          case 4:
            c = gc;
            break;
          case 16:
            c = hc;
            break;
          case 536870912:
            c = jc;
            break;
          default:
            c = hc;
        }
        c = Gk(c, Hk.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  };
  var Hk = function(a, b) {
    Bk = -1;
    Ck = 0;
    if ((K3 & 6) !== 0)
      throw Error(p2(327));
    var c = a.callbackNode;
    if (Ik() && a.callbackNode !== c)
      return null;
    var d = uc(a, a === R3 ? Z : 0);
    if (d === 0)
      return null;
    if ((d & 30) !== 0 || (d & a.expiredLanes) !== 0 || b)
      b = Jk(a, d);
    else {
      b = d;
      var e = K3;
      K3 |= 2;
      var f2 = Kk();
      if (R3 !== a || Z !== b)
        vk = null, Hj = B3() + 500, Lk(a, b);
      do
        try {
          Mk();
          break;
        } catch (h2) {
          Nk(a, h2);
        }
      while (1);
      Qg();
      nk.current = f2;
      K3 = e;
      Y !== null ? b = 0 : (R3 = null, Z = 0, b = T2);
    }
    if (b !== 0) {
      b === 2 && (e = xc(a), e !== 0 && (d = e, b = Ok(a, e)));
      if (b === 1)
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B3()), c;
      if (b === 6)
        Dk(a, d);
      else {
        e = a.current.alternate;
        if ((d & 30) === 0 && !Pk(e) && (b = Jk(a, d), b === 2 && (f2 = xc(a), f2 !== 0 && (d = f2, b = Ok(a, f2))), b === 1))
          throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B3()), c;
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(p2(345));
          case 2:
            Qk(a, uk, vk);
            break;
          case 3:
            Dk(a, d);
            if ((d & 130023424) === d && (b = gk + 500 - B3(), 10 < b)) {
              if (uc(a, 0) !== 0)
                break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                L3();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
              break;
            }
            Qk(a, uk, vk);
            break;
          case 4:
            Dk(a, d);
            if ((d & 4194240) === d)
              break;
            b = a.eventTimes;
            for (e = -1;0 < d; ) {
              var g2 = 31 - oc(d);
              f2 = 1 << g2;
              g2 = b[g2];
              g2 > e && (e = g2);
              d &= ~f2;
            }
            d = e;
            d = B3() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3000 > d ? 3000 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
              break;
            }
            Qk(a, uk, vk);
            break;
          case 5:
            Qk(a, uk, vk);
            break;
          default:
            throw Error(p2(329));
        }
      }
    }
    Ek(a, B3());
    return a.callbackNode === c ? Hk.bind(null, a) : null;
  };
  var Ok = function(a, b) {
    var c = tk;
    a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
    a = Jk(a, b);
    a !== 2 && (b = uk, uk = c, b !== null && Gj(b));
    return a;
  };
  var Gj = function(a) {
    uk === null ? uk = a : uk.push.apply(uk, a);
  };
  var Pk = function(a) {
    for (var b = a;; ) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (c !== null && (c = c.stores, c !== null))
          for (var d = 0;d < c.length; d++) {
            var e = c[d], f2 = e.getSnapshot;
            e = e.value;
            try {
              if (!He(f2(), e))
                return false;
            } catch (g2) {
              return false;
            }
          }
      }
      c = b.child;
      if (b.subtreeFlags & 16384 && c !== null)
        c.return = b, b = c;
      else {
        if (b === a)
          break;
        for (;b.sibling === null; ) {
          if (b.return === null || b.return === a)
            return true;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return true;
  };
  var Dk = function(a, b) {
    b &= ~sk;
    b &= ~rk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes;0 < b; ) {
      var c = 31 - oc(b), d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  };
  var Fk = function(a) {
    if ((K3 & 6) !== 0)
      throw Error(p2(327));
    Ik();
    var b = uc(a, 0);
    if ((b & 1) === 0)
      return Ek(a, B3()), null;
    var c = Jk(a, b);
    if (a.tag !== 0 && c === 2) {
      var d = xc(a);
      d !== 0 && (b = d, c = Ok(a, d));
    }
    if (c === 1)
      throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B3()), c;
    if (c === 6)
      throw Error(p2(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Qk(a, uk, vk);
    Ek(a, B3());
    return null;
  };
  var Rk = function(a, b) {
    var c = K3;
    K3 |= 1;
    try {
      return a(b);
    } finally {
      K3 = c, K3 === 0 && (Hj = B3() + 500, fg && jg());
    }
  };
  var Sk = function(a) {
    xk !== null && xk.tag === 0 && (K3 & 6) === 0 && Ik();
    var b = K3;
    K3 |= 1;
    var c = pk.transition, d = C2;
    try {
      if (pk.transition = null, C2 = 1, a)
        return a();
    } finally {
      C2 = d, pk.transition = c, K3 = b, (K3 & 6) === 0 && jg();
    }
  };
  var Ij = function() {
    gj = fj.current;
    E3(fj);
  };
  var Lk = function(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    c !== -1 && (a.timeoutHandle = -1, Gf(c));
    if (Y !== null)
      for (c = Y.return;c !== null; ) {
        var d = c;
        wg(d);
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            d !== null && d !== undefined && $f();
            break;
          case 3:
            Jh();
            E3(Wf);
            E3(H3);
            Oh();
            break;
          case 5:
            Lh(d);
            break;
          case 4:
            Jh();
            break;
          case 13:
            E3(M3);
            break;
          case 19:
            E3(M3);
            break;
          case 10:
            Rg(d.type._context);
            break;
          case 22:
          case 23:
            Ij();
        }
        c = c.return;
      }
    R3 = a;
    Y = a = wh(a.current, null);
    Z = gj = b;
    T2 = 0;
    qk = null;
    sk = rk = hh = 0;
    uk = tk = null;
    if (Wg !== null) {
      for (b = 0;b < Wg.length; b++)
        if (c = Wg[b], d = c.interleaved, d !== null) {
          c.interleaved = null;
          var e = d.next, f2 = c.pending;
          if (f2 !== null) {
            var g2 = f2.next;
            f2.next = e;
            d.next = g2;
          }
          c.pending = d;
        }
      Wg = null;
    }
    return a;
  };
  var Nk = function(a, b) {
    do {
      var c = Y;
      try {
        Qg();
        Ph.current = ai;
        if (Sh) {
          for (var d = N3.memoizedState;d !== null; ) {
            var e = d.queue;
            e !== null && (e.pending = null);
            d = d.next;
          }
          Sh = false;
        }
        Rh = 0;
        P3 = O3 = N3 = null;
        Th = false;
        Uh = 0;
        ok.current = null;
        if (c === null || c.return === null) {
          T2 = 1;
          qk = b;
          Y = null;
          break;
        }
        a: {
          var f2 = a, g2 = c.return, h2 = c, k2 = b;
          b = Z;
          h2.flags |= 32768;
          if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
            var l2 = k2, m = h2, q2 = m.tag;
            if ((m.mode & 1) === 0 && (q2 === 0 || q2 === 11 || q2 === 15)) {
              var r3 = m.alternate;
              r3 ? (m.updateQueue = r3.updateQueue, m.memoizedState = r3.memoizedState, m.lanes = r3.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var y3 = Vi(g2);
            if (y3 !== null) {
              y3.flags &= -257;
              Wi(y3, g2, h2, f2, b);
              y3.mode & 1 && Ti(f2, l2, b);
              b = y3;
              k2 = l2;
              var n2 = b.updateQueue;
              if (n2 === null) {
                var t3 = new Set;
                t3.add(k2);
                b.updateQueue = t3;
              } else
                n2.add(k2);
              break a;
            } else {
              if ((b & 1) === 0) {
                Ti(f2, l2, b);
                uj();
                break a;
              }
              k2 = Error(p2(426));
            }
          } else if (I3 && h2.mode & 1) {
            var J3 = Vi(g2);
            if (J3 !== null) {
              (J3.flags & 65536) === 0 && (J3.flags |= 256);
              Wi(J3, g2, h2, f2, b);
              Jg(Ki(k2, h2));
              break a;
            }
          }
          f2 = k2 = Ki(k2, h2);
          T2 !== 4 && (T2 = 2);
          tk === null ? tk = [f2] : tk.push(f2);
          f2 = g2;
          do {
            switch (f2.tag) {
              case 3:
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var x2 = Oi(f2, k2, b);
                fh(f2, x2);
                break a;
              case 1:
                h2 = k2;
                var { type: w2, stateNode: u3 } = f2;
                if ((f2.flags & 128) === 0 && (typeof w2.getDerivedStateFromError === "function" || u3 !== null && typeof u3.componentDidCatch === "function" && (Si === null || !Si.has(u3)))) {
                  f2.flags |= 65536;
                  b &= -b;
                  f2.lanes |= b;
                  var F3 = Ri(f2, h2, b);
                  fh(f2, F3);
                  break a;
                }
            }
            f2 = f2.return;
          } while (f2 !== null);
        }
        Tk(c);
      } catch (na) {
        b = na;
        Y === c && c !== null && (Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  };
  var Kk = function() {
    var a = nk.current;
    nk.current = ai;
    return a === null ? ai : a;
  };
  var uj = function() {
    if (T2 === 0 || T2 === 3 || T2 === 2)
      T2 = 4;
    R3 === null || (hh & 268435455) === 0 && (rk & 268435455) === 0 || Dk(R3, Z);
  };
  var Jk = function(a, b) {
    var c = K3;
    K3 |= 2;
    var d = Kk();
    if (R3 !== a || Z !== b)
      vk = null, Lk(a, b);
    do
      try {
        Uk();
        break;
      } catch (e) {
        Nk(a, e);
      }
    while (1);
    Qg();
    K3 = c;
    nk.current = d;
    if (Y !== null)
      throw Error(p2(261));
    R3 = null;
    Z = 0;
    return T2;
  };
  var Uk = function() {
    for (;Y !== null; )
      Vk(Y);
  };
  var Mk = function() {
    for (;Y !== null && !cc(); )
      Vk(Y);
  };
  var Vk = function(a) {
    var b = Wk(a.alternate, a, gj);
    a.memoizedProps = a.pendingProps;
    b === null ? Tk(a) : Y = b;
    ok.current = null;
  };
  var Tk = function(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if ((b.flags & 32768) === 0) {
        if (c = Fj(c, b, gj), c !== null) {
          Y = c;
          return;
        }
      } else {
        c = Jj(c, b);
        if (c !== null) {
          c.flags &= 32767;
          Y = c;
          return;
        }
        if (a !== null)
          a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          T2 = 6;
          Y = null;
          return;
        }
      }
      b = b.sibling;
      if (b !== null) {
        Y = b;
        return;
      }
      Y = b = a;
    } while (b !== null);
    T2 === 0 && (T2 = 5);
  };
  var Qk = function(a, b, c) {
    var d = C2, e = pk.transition;
    try {
      pk.transition = null, C2 = 1, Xk(a, b, c, d);
    } finally {
      pk.transition = e, C2 = d;
    }
    return null;
  };
  var Xk = function(a, b, c, d) {
    do
      Ik();
    while (xk !== null);
    if ((K3 & 6) !== 0)
      throw Error(p2(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (c === null)
      return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current)
      throw Error(p2(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f2 = c.lanes | c.childLanes;
    Bc(a, f2);
    a === R3 && (Y = R3 = null, Z = 0);
    (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || wk || (wk = true, Gk(hc, function() {
      Ik();
      return null;
    }));
    f2 = (c.flags & 15990) !== 0;
    if ((c.subtreeFlags & 15990) !== 0 || f2) {
      f2 = pk.transition;
      pk.transition = null;
      var g2 = C2;
      C2 = 1;
      var h2 = K3;
      K3 |= 4;
      ok.current = null;
      Pj(a, c);
      ek(c, a);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a.current = c;
      ik(c, a, e);
      dc();
      K3 = h2;
      C2 = g2;
      pk.transition = f2;
    } else
      a.current = c;
    wk && (wk = false, xk = a, yk = e);
    f2 = a.pendingLanes;
    f2 === 0 && (Si = null);
    mc(c.stateNode, d);
    Ek(a, B3());
    if (b !== null)
      for (d = a.onRecoverableError, c = 0;c < b.length; c++)
        e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
    if (Pi)
      throw Pi = false, a = Qi, Qi = null, a;
    (yk & 1) !== 0 && a.tag !== 0 && Ik();
    f2 = a.pendingLanes;
    (f2 & 1) !== 0 ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
    jg();
    return null;
  };
  var Ik = function() {
    if (xk !== null) {
      var a = Dc(yk), b = pk.transition, c = C2;
      try {
        pk.transition = null;
        C2 = 16 > a ? 16 : a;
        if (xk === null)
          var d = false;
        else {
          a = xk;
          xk = null;
          yk = 0;
          if ((K3 & 6) !== 0)
            throw Error(p2(331));
          var e = K3;
          K3 |= 4;
          for (V2 = a.current;V2 !== null; ) {
            var f2 = V2, g2 = f2.child;
            if ((V2.flags & 16) !== 0) {
              var h2 = f2.deletions;
              if (h2 !== null) {
                for (var k2 = 0;k2 < h2.length; k2++) {
                  var l2 = h2[k2];
                  for (V2 = l2;V2 !== null; ) {
                    var m = V2;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(8, m, f2);
                    }
                    var q2 = m.child;
                    if (q2 !== null)
                      q2.return = m, V2 = q2;
                    else
                      for (;V2 !== null; ) {
                        m = V2;
                        var { sibling: r3, return: y3 } = m;
                        Tj(m);
                        if (m === l2) {
                          V2 = null;
                          break;
                        }
                        if (r3 !== null) {
                          r3.return = y3;
                          V2 = r3;
                          break;
                        }
                        V2 = y3;
                      }
                  }
                }
                var n2 = f2.alternate;
                if (n2 !== null) {
                  var t3 = n2.child;
                  if (t3 !== null) {
                    n2.child = null;
                    do {
                      var J3 = t3.sibling;
                      t3.sibling = null;
                      t3 = J3;
                    } while (t3 !== null);
                  }
                }
                V2 = f2;
              }
            }
            if ((f2.subtreeFlags & 2064) !== 0 && g2 !== null)
              g2.return = f2, V2 = g2;
            else
              b:
                for (;V2 !== null; ) {
                  f2 = V2;
                  if ((f2.flags & 2048) !== 0)
                    switch (f2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, f2, f2.return);
                    }
                  var x2 = f2.sibling;
                  if (x2 !== null) {
                    x2.return = f2.return;
                    V2 = x2;
                    break b;
                  }
                  V2 = f2.return;
                }
          }
          var w2 = a.current;
          for (V2 = w2;V2 !== null; ) {
            g2 = V2;
            var u3 = g2.child;
            if ((g2.subtreeFlags & 2064) !== 0 && u3 !== null)
              u3.return = g2, V2 = u3;
            else
              b:
                for (g2 = w2;V2 !== null; ) {
                  h2 = V2;
                  if ((h2.flags & 2048) !== 0)
                    try {
                      switch (h2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Rj(9, h2);
                      }
                    } catch (na) {
                      W2(h2, h2.return, na);
                    }
                  if (h2 === g2) {
                    V2 = null;
                    break b;
                  }
                  var F3 = h2.sibling;
                  if (F3 !== null) {
                    F3.return = h2.return;
                    V2 = F3;
                    break b;
                  }
                  V2 = h2.return;
                }
          }
          K3 = e;
          jg();
          if (lc && typeof lc.onPostCommitFiberRoot === "function")
            try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {
            }
          d = true;
        }
        return d;
      } finally {
        C2 = c, pk.transition = b;
      }
    }
    return false;
  };
  var Yk = function(a, b, c) {
    b = Ki(c, b);
    b = Oi(a, b, 1);
    a = dh(a, b, 1);
    b = L3();
    a !== null && (Ac(a, 1, b), Ek(a, b));
  };
  var W2 = function(a, b, c) {
    if (a.tag === 3)
      Yk(a, a, c);
    else
      for (;b !== null; ) {
        if (b.tag === 3) {
          Yk(b, a, c);
          break;
        } else if (b.tag === 1) {
          var d = b.stateNode;
          if (typeof b.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Si === null || !Si.has(d))) {
            a = Ki(c, a);
            a = Ri(b, a, 1);
            b = dh(b, a, 1);
            a = L3();
            b !== null && (Ac(b, 1, a), Ek(b, a));
            break;
          }
        }
        b = b.return;
      }
  };
  var Ui = function(a, b, c) {
    var d = a.pingCache;
    d !== null && d.delete(b);
    b = L3();
    a.pingedLanes |= a.suspendedLanes & c;
    R3 === a && (Z & c) === c && (T2 === 4 || T2 === 3 && (Z & 130023424) === Z && 500 > B3() - gk ? Lk(a, 0) : sk |= c);
    Ek(a, b);
  };
  var Zk = function(a, b) {
    b === 0 && ((a.mode & 1) === 0 ? b = 1 : (b = sc, sc <<= 1, (sc & 130023424) === 0 && (sc = 4194304)));
    var c = L3();
    a = Zg(a, b);
    a !== null && (Ac(a, b, c), Ek(a, c));
  };
  var vj = function(a) {
    var b = a.memoizedState, c = 0;
    b !== null && (c = b.retryLane);
    Zk(a, c);
  };
  var ck = function(a, b) {
    var c = 0;
    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        e !== null && (c = e.retryLane);
        break;
      case 19:
        d = a.stateNode;
        break;
      default:
        throw Error(p2(314));
    }
    d !== null && d.delete(b);
    Zk(a, c);
  };
  var Gk = function(a, b) {
    return ac(a, b);
  };
  var al = function(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  };
  var Bg = function(a, b, c, d) {
    return new al(a, b, c, d);
  };
  var bj = function(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  };
  var $k = function(a) {
    if (typeof a === "function")
      return bj(a) ? 1 : 0;
    if (a !== undefined && a !== null) {
      a = a.$$typeof;
      if (a === Da)
        return 11;
      if (a === Ga)
        return 14;
    }
    return 2;
  };
  var wh = function(a, b) {
    var c = a.alternate;
    c === null ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = b === null ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  };
  var yh = function(a, b, c, d, e, f2) {
    var g2 = 2;
    d = a;
    if (typeof a === "function")
      bj(a) && (g2 = 1);
    else if (typeof a === "string")
      g2 = 5;
    else
      a:
        switch (a) {
          case ya:
            return Ah(c.children, e, f2, b);
          case za:
            g2 = 8;
            e |= 8;
            break;
          case Aa:
            return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
          case Ea:
            return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
          case Fa:
            return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
          case Ia:
            return qj(c, e, f2, b);
          default:
            if (typeof a === "object" && a !== null)
              switch (a.$$typeof) {
                case Ba:
                  g2 = 10;
                  break a;
                case Ca:
                  g2 = 9;
                  break a;
                case Da:
                  g2 = 11;
                  break a;
                case Ga:
                  g2 = 14;
                  break a;
                case Ha:
                  g2 = 16;
                  d = null;
                  break a;
              }
            throw Error(p2(130, a == null ? a : typeof a, ""));
        }
    b = Bg(g2, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f2;
    return b;
  };
  var Ah = function(a, b, c, d) {
    a = Bg(7, a, d, b);
    a.lanes = c;
    return a;
  };
  var qj = function(a, b, c, d) {
    a = Bg(22, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    a.stateNode = { isHidden: false };
    return a;
  };
  var xh = function(a, b, c) {
    a = Bg(6, a, null, b);
    a.lanes = c;
    return a;
  };
  var zh = function(a, b, c) {
    b = Bg(4, a.children !== null ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b;
  };
  var bl = function(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  };
  var cl = function(a, b, c, d, e, f2, g2, h2, k2) {
    a = new bl(a, b, c, h2, k2);
    b === 1 ? (b = 1, f2 === true && (b |= 8)) : b = 0;
    f2 = Bg(3, null, null, b);
    a.current = f2;
    f2.stateNode = a;
    f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    ah(f2);
    return a;
  };
  var dl = function(a, b, c) {
    var d = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : null;
    return { $$typeof: wa, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c };
  };
  var el = function(a) {
    if (!a)
      return Vf;
    a = a._reactInternals;
    a: {
      if (Vb(a) !== a || a.tag !== 1)
        throw Error(p2(170));
      var b = a;
      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;
          case 1:
            if (Zf(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b = b.return;
      } while (b !== null);
      throw Error(p2(171));
    }
    if (a.tag === 1) {
      var c = a.type;
      if (Zf(c))
        return bg(a, c, b);
    }
    return b;
  };
  var fl = function(a, b, c, d, e, f2, g2, h2, k2) {
    a = cl(c, d, true, a, e, f2, g2, h2, k2);
    a.context = el(null);
    c = a.current;
    d = L3();
    e = lh(c);
    f2 = ch(d, e);
    f2.callback = b !== undefined && b !== null ? b : null;
    dh(c, f2, e);
    a.current.lanes = e;
    Ac(a, e, d);
    Ek(a, d);
    return a;
  };
  var gl = function(a, b, c, d) {
    var e = b.current, f2 = L3(), g2 = lh(e);
    c = el(c);
    b.context === null ? b.context = c : b.pendingContext = c;
    b = ch(f2, g2);
    b.payload = { element: a };
    d = d === undefined ? null : d;
    d !== null && (b.callback = d);
    a = dh(e, b, g2);
    a !== null && (mh(a, e, g2, f2), eh(a, e, g2));
    return g2;
  };
  var hl = function(a) {
    a = a.current;
    if (!a.child)
      return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  };
  var il = function(a, b) {
    a = a.memoizedState;
    if (a !== null && a.dehydrated !== null) {
      var c = a.retryLane;
      a.retryLane = c !== 0 && c < b ? c : b;
    }
  };
  var jl = function(a, b) {
    il(a, b);
    (a = a.alternate) && il(a, b);
  };
  var kl = function() {
    return null;
  };
  var ml = function(a) {
    this._internalRoot = a;
  };
  var nl = function(a) {
    this._internalRoot = a;
  };
  var ol = function(a) {
    return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11);
  };
  var pl = function(a) {
    return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
  };
  var ql = function() {
  };
  var rl = function(a, b, c, d, e) {
    if (e) {
      if (typeof d === "function") {
        var f2 = d;
        d = function() {
          var a2 = hl(g2);
          f2.call(a2);
        };
      }
      var g2 = fl(b, d, a, 0, null, false, false, "", ql);
      a._reactRootContainer = g2;
      a[uf] = g2.current;
      sf(a.nodeType === 8 ? a.parentNode : a);
      Sk();
      return g2;
    }
    for (;e = a.lastChild; )
      a.removeChild(e);
    if (typeof d === "function") {
      var h2 = d;
      d = function() {
        var a2 = hl(k2);
        h2.call(a2);
      };
    }
    var k2 = cl(a, 0, false, null, null, false, false, "", ql);
    a._reactRootContainer = k2;
    a[uf] = k2.current;
    sf(a.nodeType === 8 ? a.parentNode : a);
    Sk(function() {
      gl(b, k2, c, d);
    });
    return k2;
  };
  var sl = function(a, b, c, d, e) {
    var f2 = c._reactRootContainer;
    if (f2) {
      var g2 = f2;
      if (typeof e === "function") {
        var h2 = e;
        e = function() {
          var a2 = hl(g2);
          h2.call(a2);
        };
      }
      gl(b, g2, a, e);
    } else
      g2 = rl(c, b, a, e, d);
    return hl(g2);
  };
  var da = new Set;
  var ea = {};
  var ia = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
  var ja = Object.prototype.hasOwnProperty;
  var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  var la = {};
  var ma = {};
  var z3 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    z3[a] = new v3(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b = a[0];
    z3[b] = new v3(b, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    z3[a] = new v3(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    z3[a] = new v3(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    z3[a] = new v3(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    z3[a] = new v3(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    z3[a] = new v3(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    z3[a] = new v3(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    z3[a] = new v3(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z3[b] = new v3(b, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z3[b] = new v3(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b = a.replace(ra, sa);
    z3[b] = new v3(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    z3[a] = new v3(a, 1, false, a.toLowerCase(), null, false, false);
  });
  z3.xlinkHref = new v3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    z3[a] = new v3(a, 1, false, a.toLowerCase(), null, true, true);
  });
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  var va = Symbol.for("react.element");
  var wa = Symbol.for("react.portal");
  var ya = Symbol.for("react.fragment");
  var za = Symbol.for("react.strict_mode");
  var Aa = Symbol.for("react.profiler");
  var Ba = Symbol.for("react.provider");
  var Ca = Symbol.for("react.context");
  var Da = Symbol.for("react.forward_ref");
  var Ea = Symbol.for("react.suspense");
  var Fa = Symbol.for("react.suspense_list");
  var Ga = Symbol.for("react.memo");
  var Ha = Symbol.for("react.lazy");
  Symbol.for("react.scope");
  Symbol.for("react.debug_trace_mode");
  var Ia = Symbol.for("react.offscreen");
  Symbol.for("react.legacy_hidden");
  Symbol.for("react.cache");
  Symbol.for("react.tracing_marker");
  var Ja = Symbol.iterator;
  var A3 = Object.assign;
  var La;
  var Na = false;
  var eb = Array.isArray;
  var mb;
  var nb = function(a) {
    return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a(b, c, d, e);
      });
    } : a;
  }(function(a, b) {
    if (a.namespaceURI !== "http://www.w3.org/2000/svg" || ("innerHTML" in a))
      a.innerHTML = b;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = mb.firstChild;a.firstChild; )
        a.removeChild(a.firstChild);
      for (;b.firstChild; )
        a.appendChild(b.firstChild);
    }
  });
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  };
  var qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a) {
    qb.forEach(function(b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      pb[b] = pb[a];
    });
  });
  var tb = A3({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  var wb = null;
  var yb = null;
  var zb = null;
  var Ab = null;
  var Ib = false;
  var Lb = false;
  if (ia)
    try {
      Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
  var Mb;
  var Ob = false;
  var Pb = null;
  var Qb = false;
  var Rb = null;
  var Sb = { onError: function(a) {
    Ob = true;
    Pb = a;
  } };
  var ac = ca.unstable_scheduleCallback;
  var bc = ca.unstable_cancelCallback;
  var cc = ca.unstable_shouldYield;
  var dc = ca.unstable_requestPaint;
  var B3 = ca.unstable_now;
  var ec = ca.unstable_getCurrentPriorityLevel;
  var fc = ca.unstable_ImmediatePriority;
  var gc = ca.unstable_UserBlockingPriority;
  var hc = ca.unstable_NormalPriority;
  var ic = ca.unstable_LowPriority;
  var jc = ca.unstable_IdlePriority;
  var kc = null;
  var lc = null;
  var oc = Math.clz32 ? Math.clz32 : nc;
  var pc = Math.log;
  var qc = Math.LN2;
  var rc = 64;
  var sc = 4194304;
  var C2 = 0;
  var Ec;
  var Fc;
  var Gc;
  var Hc;
  var Ic;
  var Jc = false;
  var Kc = [];
  var Lc = null;
  var Mc = null;
  var Nc = null;
  var Oc = new Map;
  var Pc = new Map;
  var Qc = [];
  var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  var cd = ua.ReactCurrentBatchConfig;
  var dd = true;
  var id = null;
  var kd = null;
  var ld = null;
  var md = null;
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 };
  var td = rd(sd);
  var ud = A3({}, sd, { view: 0, detail: 0 });
  var vd = rd(ud);
  var wd;
  var xd;
  var yd;
  var Ad = A3({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
    return a.relatedTarget === undefined ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
  }, movementX: function(a) {
    if ("movementX" in a)
      return a.movementX;
    a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
    return wd;
  }, movementY: function(a) {
    return "movementY" in a ? a.movementY : xd;
  } });
  var Bd = rd(Ad);
  var Cd = A3({}, Ad, { dataTransfer: 0 });
  var Dd = rd(Cd);
  var Ed = A3({}, ud, { relatedTarget: 0 });
  var Fd = rd(Ed);
  var Gd = A3({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
  var Hd = rd(Gd);
  var Id = A3({}, sd, { clipboardData: function(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } });
  var Jd = rd(Id);
  var Kd = A3({}, sd, { data: 0 });
  var Ld = rd(Kd);
  var Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  };
  var Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  };
  var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  var Qd = A3({}, ud, { key: function(a) {
    if (a.key) {
      var b = Md[a.key] || a.key;
      if (b !== "Unidentified")
        return b;
    }
    return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
    return a.type === "keypress" ? od(a) : 0;
  }, keyCode: function(a) {
    return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
  }, which: function(a) {
    return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
  } });
  var Rd = rd(Qd);
  var Sd = A3({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
  var Td = rd(Sd);
  var Ud = A3({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
  var Vd = rd(Ud);
  var Wd = A3({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
  var Xd = rd(Wd);
  var Yd = A3({}, Ad, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : ("wheelDeltaX" in a) ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : ("wheelDeltaY" in a) ? -a.wheelDeltaY : ("wheelDelta" in a) ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  });
  var Zd = rd(Yd);
  var $d = [9, 13, 27, 32];
  var ae = ia && ("CompositionEvent" in window);
  var be = null;
  ia && ("documentMode" in document) && (be = document.documentMode);
  var ce = ia && ("TextEvent" in window) && !be;
  var de = ia && (!ae || be && 8 < be && 11 >= be);
  var ee = String.fromCharCode(32);
  var fe = false;
  var ie = false;
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  var pe = null;
  var qe = null;
  var we = false;
  if (ia) {
    if (ia) {
      ye = ("oninput" in document);
      if (!ye) {
        ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = typeof ze.oninput === "function";
      }
      xe = ye;
    } else
      xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  var xe;
  var ye;
  var ze;
  var He = typeof Object.is === "function" ? Object.is : Ge;
  var Pe = ia && ("documentMode" in document) && 11 >= document.documentMode;
  var Qe = null;
  var Re = null;
  var Se = null;
  var Te = false;
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
  var Xe = {};
  var Ye = {};
  ia && (Ye = document.createElement("div").style, ("AnimationEvent" in window) || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), ("TransitionEvent" in window) || delete We.transitionend.transition);
  var $e = Ze("animationend");
  var af = Ze("animationiteration");
  var bf = Ze("animationstart");
  var cf = Ze("transitionend");
  var df = new Map;
  var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  for (gf = 0;gf < ef.length; gf++) {
    hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  var hf;
  var jf;
  var kf;
  var gf;
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  var xf = /\r\n?/g;
  var yf = /\u0000|\uFFFD/g;
  var Cf = null;
  var Df = null;
  var Ff = typeof setTimeout === "function" ? setTimeout : undefined;
  var Gf = typeof clearTimeout === "function" ? clearTimeout : undefined;
  var Hf = typeof Promise === "function" ? Promise : undefined;
  var Jf = typeof queueMicrotask === "function" ? queueMicrotask : typeof Hf !== "undefined" ? function(a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
  var Nf = Math.random().toString(36).slice(2);
  var Of = "__reactFiber$" + Nf;
  var Pf = "__reactProps$" + Nf;
  var uf = "__reactContainer$" + Nf;
  var of = "__reactEvents$" + Nf;
  var Qf = "__reactListeners$" + Nf;
  var Rf = "__reactHandles$" + Nf;
  var Sf = [];
  var Tf = -1;
  var Vf = {};
  var H3 = Uf(Vf);
  var Wf = Uf(false);
  var Xf = Vf;
  var eg = null;
  var fg = false;
  var gg = false;
  var kg = [];
  var lg = 0;
  var mg = null;
  var ng = 0;
  var og = [];
  var pg = 0;
  var qg = null;
  var rg = 1;
  var sg = "";
  var xg = null;
  var yg = null;
  var I3 = false;
  var zg = null;
  var Kg = ua.ReactCurrentBatchConfig;
  var Mg = Uf(null);
  var Ng = null;
  var Og = null;
  var Pg = null;
  var Wg = null;
  var $g = false;
  var jh = new aa.Component().refs;
  var nh = { isMounted: function(a) {
    return (a = a._reactInternals) ? Vb(a) === a : false;
  }, enqueueSetState: function(a, b, c) {
    a = a._reactInternals;
    var d = L3(), e = lh(a), f2 = ch(d, e);
    f2.payload = b;
    c !== undefined && c !== null && (f2.callback = c);
    b = dh(a, f2, e);
    b !== null && (mh(b, a, e, d), eh(b, a, e));
  }, enqueueReplaceState: function(a, b, c) {
    a = a._reactInternals;
    var d = L3(), e = lh(a), f2 = ch(d, e);
    f2.tag = 1;
    f2.payload = b;
    c !== undefined && c !== null && (f2.callback = c);
    b = dh(a, f2, e);
    b !== null && (mh(b, a, e, d), eh(b, a, e));
  }, enqueueForceUpdate: function(a, b) {
    a = a._reactInternals;
    var c = L3(), d = lh(a), e = ch(c, d);
    e.tag = 2;
    b !== undefined && b !== null && (e.callback = b);
    b = dh(a, e, d);
    b !== null && (mh(b, a, d, c), eh(b, a, d));
  } };
  var Bh = vh(true);
  var Ch = vh(false);
  var Dh = {};
  var Eh = Uf(Dh);
  var Fh = Uf(Dh);
  var Gh = Uf(Dh);
  var M3 = Uf(0);
  var Nh = [];
  var Ph = ua.ReactCurrentDispatcher;
  var Qh = ua.ReactCurrentBatchConfig;
  var Rh = 0;
  var N3 = null;
  var O3 = null;
  var P3 = null;
  var Sh = false;
  var Th = false;
  var Uh = 0;
  var Vh = 0;
  var ai = { readContext: Vg, useCallback: Q3, useContext: Q3, useEffect: Q3, useImperativeHandle: Q3, useInsertionEffect: Q3, useLayoutEffect: Q3, useMemo: Q3, useReducer: Q3, useRef: Q3, useState: Q3, useDebugValue: Q3, useDeferredValue: Q3, useTransition: Q3, useMutableSource: Q3, useSyncExternalStore: Q3, useId: Q3, unstable_isNewReconciler: false };
  var Yh = { readContext: Vg, useCallback: function(a, b) {
    ci().memoizedState = [a, b === undefined ? null : b];
    return a;
  }, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
    c = c !== null && c !== undefined ? c.concat([a]) : null;
    return ti(4194308, 4, yi.bind(null, b, a), c);
  }, useLayoutEffect: function(a, b) {
    return ti(4194308, 4, a, b);
  }, useInsertionEffect: function(a, b) {
    return ti(4, 2, a, b);
  }, useMemo: function(a, b) {
    var c = ci();
    b = b === undefined ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  }, useReducer: function(a, b, c) {
    var d = ci();
    b = c !== undefined ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
    d.queue = a;
    a = a.dispatch = Gi.bind(null, N3, a);
    return [d.memoizedState, a];
  }, useRef: function(a) {
    var b = ci();
    a = { current: a };
    return b.memoizedState = a;
  }, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
    return ci().memoizedState = a;
  }, useTransition: function() {
    var a = qi(false), b = a[0];
    a = Ei.bind(null, a[1]);
    ci().memoizedState = a;
    return [b, a];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a, b, c) {
    var d = N3, e = ci();
    if (I3) {
      if (c === undefined)
        throw Error(p2(407));
      c = c();
    } else {
      c = b();
      if (R3 === null)
        throw Error(p2(349));
      (Rh & 30) !== 0 || ni(d, b, c);
    }
    e.memoizedState = c;
    var f2 = { value: c, getSnapshot: b };
    e.queue = f2;
    vi(ki.bind(null, d, f2, a), [a]);
    d.flags |= 2048;
    li(9, mi.bind(null, d, f2, c, b), undefined, null);
    return c;
  }, useId: function() {
    var a = ci(), b = R3.identifierPrefix;
    if (I3) {
      var c = sg;
      var d = rg;
      c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
      b = ":" + b + "R" + c;
      c = Uh++;
      0 < c && (b += "H" + c.toString(32));
      b += ":";
    } else
      c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
    return a.memoizedState = b;
  }, unstable_isNewReconciler: false };
  var Zh = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: fi,
    useRef: si,
    useState: function() {
      return fi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function(a) {
      var b = di();
      return Di(b, O3.memoizedState, a);
    },
    useTransition: function() {
      var a = fi(ei)[0], b = di().memoizedState;
      return [a, b];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: false
  };
  var $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
    return gi(ei);
  }, useDebugValue: Ai, useDeferredValue: function(a) {
    var b = di();
    return O3 === null ? b.memoizedState = a : Di(b, O3.memoizedState, a);
  }, useTransition: function() {
    var a = gi(ei)[0], b = di().memoizedState;
    return [a, b];
  }, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
  var Ni = typeof WeakMap === "function" ? WeakMap : Map;
  var Xi = ua.ReactCurrentOwner;
  var Ug = false;
  var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
  var Aj;
  var Bj;
  var Cj;
  var Dj;
  Aj = function(a, b) {
    for (var c = b.child;c !== null; ) {
      if (c.tag === 5 || c.tag === 6)
        a.appendChild(c.stateNode);
      else if (c.tag !== 4 && c.child !== null) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b)
        break;
      for (;c.sibling === null; ) {
        if (c.return === null || c.return === b)
          return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  Bj = function() {
  };
  Cj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
      a = b.stateNode;
      Hh(Eh.current);
      var f2 = null;
      switch (c) {
        case "input":
          e = Ya(a, e);
          d = Ya(a, d);
          f2 = [];
          break;
        case "select":
          e = A3({}, e, { value: undefined });
          d = A3({}, d, { value: undefined });
          f2 = [];
          break;
        case "textarea":
          e = gb(a, e);
          d = gb(a, d);
          f2 = [];
          break;
        default:
          typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = Bf);
      }
      ub(c, d);
      var g2;
      c = null;
      for (l2 in e)
        if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && e[l2] != null)
          if (l2 === "style") {
            var h2 = e[l2];
            for (g2 in h2)
              h2.hasOwnProperty(g2) && (c || (c = {}), c[g2] = "");
          } else
            l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
      for (l2 in d) {
        var k2 = d[l2];
        h2 = e != null ? e[l2] : undefined;
        if (d.hasOwnProperty(l2) && k2 !== h2 && (k2 != null || h2 != null))
          if (l2 === "style")
            if (h2) {
              for (g2 in h2)
                !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c || (c = {}), c[g2] = "");
              for (g2 in k2)
                k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c || (c = {}), c[g2] = k2[g2]);
            } else
              c || (f2 || (f2 = []), f2.push(l2, c)), c = k2;
          else
            l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : undefined, h2 = h2 ? h2.__html : undefined, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ea.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && D3("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
      }
      c && (f2 = f2 || []).push("style", c);
      var l2 = f2;
      if (b.updateQueue = l2)
        b.flags |= 4;
    }
  };
  Dj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
  };
  var Kj = false;
  var U2 = false;
  var Lj = typeof WeakSet === "function" ? WeakSet : Set;
  var V2 = null;
  var Oj = false;
  var X = null;
  var Yj = false;
  var mk = Math.ceil;
  var nk = ua.ReactCurrentDispatcher;
  var ok = ua.ReactCurrentOwner;
  var pk = ua.ReactCurrentBatchConfig;
  var K3 = 0;
  var R3 = null;
  var Y = null;
  var Z = 0;
  var gj = 0;
  var fj = Uf(0);
  var T2 = 0;
  var qk = null;
  var hh = 0;
  var rk = 0;
  var sk = 0;
  var tk = null;
  var uk = null;
  var gk = 0;
  var Hj = Infinity;
  var vk = null;
  var Pi = false;
  var Qi = null;
  var Si = null;
  var wk = false;
  var xk = null;
  var yk = 0;
  var zk = 0;
  var Ak = null;
  var Bk = -1;
  var Ck = 0;
  var Wk;
  Wk = function(a, b, c) {
    if (a !== null)
      if (a.memoizedProps !== b.pendingProps || Wf.current)
        Ug = true;
      else {
        if ((a.lanes & c) === 0 && (b.flags & 128) === 0)
          return Ug = false, zj(a, b, c);
        Ug = (a.flags & 131072) !== 0 ? true : false;
      }
    else
      Ug = false, I3 && (b.flags & 1048576) !== 0 && ug(b, ng, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        jj(a, b);
        a = b.pendingProps;
        var e = Yf(b, H3.current);
        Tg(b, c);
        e = Xh(null, b, d, a, e, c);
        var f2 = bi();
        b.flags |= 1;
        typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === undefined ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = e.state !== null && e.state !== undefined ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f2, c)) : (b.tag = 0, I3 && f2 && vg(b), Yi(null, b, e, c), b = b.child);
        return b;
      case 16:
        d = b.elementType;
        a: {
          jj(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = $k(d);
          a = Lg(d, a);
          switch (e) {
            case 0:
              b = dj(null, b, d, a, c);
              break a;
            case 1:
              b = ij(null, b, d, a, c);
              break a;
            case 11:
              b = Zi(null, b, d, a, c);
              break a;
            case 14:
              b = aj(null, b, d, Lg(d.type, a), c);
              break a;
          }
          throw Error(p2(306, d, ""));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
      case 3:
        a: {
          lj(b);
          if (a === null)
            throw Error(p2(387));
          d = b.pendingProps;
          f2 = b.memoizedState;
          e = f2.element;
          bh(a, b);
          gh(b, d, null, c);
          var g2 = b.memoizedState;
          d = g2.element;
          if (f2.isDehydrated)
            if (f2 = { element: d, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
              e = Ki(Error(p2(423)), b);
              b = mj(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ki(Error(p2(424)), b);
              b = mj(a, b, d, c, e);
              break a;
            } else
              for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I3 = true, zg = null, c = Ch(b, null, d, c), b.child = c;c; )
                c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            Ig();
            if (d === e) {
              b = $i(a, b, c);
              break a;
            }
            Yi(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return Kh(b), a === null && Eg(b), d = b.type, e = b.pendingProps, f2 = a !== null ? a.memoizedProps : null, g2 = e.children, Ef(d, e) ? g2 = null : f2 !== null && Ef(d, f2) && (b.flags |= 32), hj(a, b), Yi(a, b, g2, c), b.child;
      case 6:
        return a === null && Eg(b), null;
      case 13:
        return pj(a, b, c);
      case 4:
        return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
      case 7:
        return Yi(a, b, b.pendingProps, c), b.child;
      case 8:
        return Yi(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return Yi(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f2 = b.memoizedProps;
          g2 = e.value;
          G3(Mg, d._currentValue);
          d._currentValue = g2;
          if (f2 !== null)
            if (He(f2.value, g2)) {
              if (f2.children === e.children && !Wf.current) {
                b = $i(a, b, c);
                break a;
              }
            } else
              for (f2 = b.child, f2 !== null && (f2.return = b);f2 !== null; ) {
                var h2 = f2.dependencies;
                if (h2 !== null) {
                  g2 = f2.child;
                  for (var k2 = h2.firstContext;k2 !== null; ) {
                    if (k2.context === d) {
                      if (f2.tag === 1) {
                        k2 = ch(-1, c & -c);
                        k2.tag = 2;
                        var l2 = f2.updateQueue;
                        if (l2 !== null) {
                          l2 = l2.shared;
                          var m = l2.pending;
                          m === null ? k2.next = k2 : (k2.next = m.next, m.next = k2);
                          l2.pending = k2;
                        }
                      }
                      f2.lanes |= c;
                      k2 = f2.alternate;
                      k2 !== null && (k2.lanes |= c);
                      Sg(f2.return, c, b);
                      h2.lanes |= c;
                      break;
                    }
                    k2 = k2.next;
                  }
                } else if (f2.tag === 10)
                  g2 = f2.type === b.type ? null : f2.child;
                else if (f2.tag === 18) {
                  g2 = f2.return;
                  if (g2 === null)
                    throw Error(p2(341));
                  g2.lanes |= c;
                  h2 = g2.alternate;
                  h2 !== null && (h2.lanes |= c);
                  Sg(g2, c, b);
                  g2 = f2.sibling;
                } else
                  g2 = f2.child;
                if (g2 !== null)
                  g2.return = f2;
                else
                  for (g2 = f2;g2 !== null; ) {
                    if (g2 === b) {
                      g2 = null;
                      break;
                    }
                    f2 = g2.sibling;
                    if (f2 !== null) {
                      f2.return = g2.return;
                      g2 = f2;
                      break;
                    }
                    g2 = g2.return;
                  }
                f2 = g2;
              }
          Yi(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
      case 14:
        return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
      case 15:
        return cj(a, b, b.type, b.pendingProps, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, true, a, c);
      case 19:
        return yj(a, b, c);
      case 22:
        return ej(a, b, c);
    }
    throw Error(p2(156, b.tag));
  };
  var ll = typeof reportError === "function" ? reportError : function(a) {
    console.error(a);
  };
  nl.prototype.render = ml.prototype.render = function(a) {
    var b = this._internalRoot;
    if (b === null)
      throw Error(p2(409));
    gl(a, b, null, null);
  };
  nl.prototype.unmount = ml.prototype.unmount = function() {
    var a = this._internalRoot;
    if (a !== null) {
      this._internalRoot = null;
      var b = a.containerInfo;
      Sk(function() {
        gl(null, a, null, null);
      });
      b[uf] = null;
    }
  };
  nl.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var b = Hc();
      a = { blockedOn: null, target: a, priority: b };
      for (var c = 0;c < Qc.length && b !== 0 && b < Qc[c].priority; c++)
        ;
      Qc.splice(c, 0, a);
      c === 0 && Vc(a);
    }
  };
  Ec = function(a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = tc(b.pendingLanes);
          c !== 0 && (Cc(b, c | 1), Ek(b, B3()), (K3 & 6) === 0 && (Hj = B3() + 500, jg()));
        }
        break;
      case 13:
        Sk(function() {
          var b2 = Zg(a, 1);
          if (b2 !== null) {
            var c2 = L3();
            mh(b2, a, 1, c2);
          }
        }), jl(a, 1);
    }
  };
  Fc = function(a) {
    if (a.tag === 13) {
      var b = Zg(a, 134217728);
      if (b !== null) {
        var c = L3();
        mh(b, a, 134217728, c);
      }
      jl(a, 134217728);
    }
  };
  Gc = function(a) {
    if (a.tag === 13) {
      var b = lh(a), c = Zg(a, b);
      if (c !== null) {
        var d = L3();
        mh(c, a, b, d);
      }
      jl(a, b);
    }
  };
  Hc = function() {
    return C2;
  };
  Ic = function(a, b) {
    var c = C2;
    try {
      return C2 = a, b();
    } finally {
      C2 = c;
    }
  };
  yb = function(a, b, c) {
    switch (b) {
      case "input":
        bb(a, c);
        b = c.name;
        if (c.type === "radio" && b != null) {
          for (c = a;c.parentNode; )
            c = c.parentNode;
          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
          for (b = 0;b < c.length; b++) {
            var d = c[b];
            if (d !== a && d.form === a.form) {
              var e = Db(d);
              if (!e)
                throw Error(p2(90));
              Wa(d);
              bb(d, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a, c);
        break;
      case "select":
        b = c.value, b != null && fb(a, !!c.multiple, b, false);
    }
  };
  Gb = Rk;
  Hb = Sk;
  var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] };
  var ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
  var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
    a = Zb(a);
    return a === null ? null : a.stateNode;
  }, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
    wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wl.isDisabled && wl.supportsFiber)
      try {
        kc = wl.inject(vl), lc = wl;
      } catch (a) {
      }
  }
  var wl;
  $__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2 = tl;
  $createPortal = function(a, b) {
    var c = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : null;
    if (!ol(b))
      throw Error(p2(200));
    return dl(a, b, null, c);
  };
  $createRoot = function(a, b) {
    if (!ol(a))
      throw Error(p2(299));
    var c = false, d = "", e = ll;
    b !== null && b !== undefined && (b.unstable_strictMode === true && (c = true), b.identifierPrefix !== undefined && (d = b.identifierPrefix), b.onRecoverableError !== undefined && (e = b.onRecoverableError));
    b = cl(a, 1, false, null, null, c, false, d, e);
    a[uf] = b.current;
    sf(a.nodeType === 8 ? a.parentNode : a);
    return new ml(b);
  };
  $findDOMNode = function(a) {
    if (a == null)
      return null;
    if (a.nodeType === 1)
      return a;
    var b = a._reactInternals;
    if (b === undefined) {
      if (typeof a.render === "function")
        throw Error(p2(188));
      a = Object.keys(a).join(",");
      throw Error(p2(268, a));
    }
    a = Zb(b);
    a = a === null ? null : a.stateNode;
    return a;
  };
  $flushSync = function(a) {
    return Sk(a);
  };
  $hydrate = function(a, b, c) {
    if (!pl(b))
      throw Error(p2(200));
    return sl(null, a, b, true, c);
  };
  $hydrateRoot = function(a, b, c) {
    if (!ol(a))
      throw Error(p2(405));
    var d = c != null && c.hydratedSources || null, e = false, f2 = "", g2 = ll;
    c !== null && c !== undefined && (c.unstable_strictMode === true && (e = true), c.identifierPrefix !== undefined && (f2 = c.identifierPrefix), c.onRecoverableError !== undefined && (g2 = c.onRecoverableError));
    b = fl(b, null, a, 1, c != null ? c : null, e, false, f2, g2);
    a[uf] = b.current;
    sf(a);
    if (d)
      for (a = 0;a < d.length; a++)
        c = d[a], e = c._getVersion, e = e(c._source), b.mutableSourceEagerHydrationData == null ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
    return new nl(b);
  };
  $render = function(a, b, c) {
    if (!pl(b))
      throw Error(p2(200));
    return sl(null, a, b, false, c);
  };
  $unmountComponentAtNode = function(a) {
    if (!pl(a))
      throw Error(p2(40));
    return a._reactRootContainer ? (Sk(function() {
      sl(null, null, a, false, function() {
        a._reactRootContainer = null;
        a[uf] = null;
      });
    }), true) : false;
  };
  $unstable_batchedUpdates = Rk;
  $unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
    if (!pl(c))
      throw Error(p2(200));
    if (a == null || a._reactInternals === undefined)
      throw Error(p2(38));
    return sl(a, b, c, false, d);
  };
  $version2 = "18.2.0-next-9e3b772b8-20220608";
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS((exports, module) => {
  init_react_dom_production_min();
  var checkDCE = function() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    if (false) {
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  };
  if (true) {
    checkDCE();
    module.exports = (exports_react_dom_production_min);
  } else {
  }
});

// src/index.jsx
var React = __toESM(require_react(), 1);

// node_modules/react-dom/client.js
var m = __toESM(require_react_dom(), 1);
var $createRoot2;
var $hydrateRoot2;
if (true) {
  $createRoot2 = m.createRoot;
  $hydrateRoot2 = m.hydrateRoot;
} else {
}
var i;

// src/utils.js
var fakeDispatch = function() {
};
var changeState = function(bool) {
  return !bool;
};
var createId = function() {
  let id2 = Date.now().toString();
  for (let i = 0;i < 8; i += 1) {
    const char = CHARS[Math.floor(Math.random() * CHARS.length)];
    const position = Math.floor(Math.random() * id2.length);
    if (position === id2.length) {
      id2 = String.prototype.concat.call(id2, char);
    } else if (position === 0) {
      id2 = String.prototype.concat.call(char, id2);
    } else {
      id2 = String.prototype.concat.call(String.prototype.slice.call(id2, 0, position), char, String.prototype.slice.call(id2, position));
    }
  }
  return id2;
};
var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_";

// src/context.js
var compareArrays = function(A4, B4) {
  if (A4.length !== B4.length && (A4.length === 0 || B4.length === 0)) {
    return 0;
  }
  const min = A4.length < B4.length ? A4.length : B4.length;
  for (let i = 0;i < min; i += 1) {
    if (A4[i] !== B4[i]) {
      return i;
    }
  }
  if (A4.length !== B4.length) {
    return min;
  }
  return -1;
};
var fixRootOverflow = function() {
  const HRoot = document.getElementById("root");
  if (HRoot === null) {
    return;
  }
  HRoot.style.overflow = "hidden";
};
var removeRootOverflow = function() {
  const HRoot = document.getElementById("root");
  if (HRoot === null) {
    return;
  }
  HRoot.style.overflow = "";
};
var TodosState = {
  ids: function() {
    const storageIds = localStorage.getItem("todo.ids");
    if (storageIds !== null) {
      if (storageIds.length > 2) {
        try {
          return JSON.parse(localStorage["todo.ids"]);
        } catch {
          const theme = localStorage.getItem("theme");
          localStorage.clear();
          localStorage.setItem("todo.ids", "[]");
          if (theme !== null) {
            localStorage.setItem("theme", theme);
          }
        }
      }
    } else {
      localStorage.setItem("todo.ids", "[]");
    }
    return [];
  }(),
  todos: {},
  selected: [],
  selectedDispatch: fakeDispatch,
  todosDispatch: {},
  addTodo(id2, todo) {
    TodosState.ids.push(id2);
    TodosState.todos[id2] = todo;
    TodosState.todosDispatch[id2] = fakeDispatch;
  },
  removeTodo(id2) {
    let i = TodosState.ids.indexOf(id2);
    if (i !== -1) {
      delete TodosState.todos[id2];
      delete TodosState.todosDispatch[id2];
      for (;i < TodosState.ids.length - 1; i += 1) {
        TodosState.ids[i] = TodosState.ids[i + 1];
      }
      TodosState.ids.pop();
      return true;
    }
    return false;
  },
  removeSelected(id2) {
    let i = TodosState.selected.indexOf(id2);
    if (i !== -1) {
      const selected = TodosState.selected;
      for (;i < selected.length - 1; i += 1) {
        selected[i] = selected[i + 1];
      }
      TodosState.selected.pop();
      return true;
    }
    return false;
  },
  filterByColor(color) {
    let head = 0;
    for (const id2 of TodosState.selected) {
      if (TodosState.todos[id2].color === color) {
        TodosState.selected[head] = id2;
        head += 1;
      }
    }
    if (head < TodosState.selected.length) {
      TodosState.selected.length = head;
    }
  },
  filterByTag(tag) {
    let head = 0;
    for (const id2 of TodosState.selected) {
      const todo = TodosState.todos[id2];
      for (const todoTag of todo.tags) {
        if (todoTag === tag) {
          TodosState.selected[head] = id2;
          head += 1;
        }
      }
    }
    if (head < TodosState.selected.length) {
      TodosState.selected.length = head;
    }
  },
  filter(filterState) {
    if (filterState.status === "active") {
      let head = 0;
      for (const id2 of TodosState.ids) {
        if (!TodosState.todos[id2].completed) {
          TodosState.selected[head] = id2;
          head += 1;
        }
      }
      if (head < TodosState.selected.length) {
        TodosState.selected.length = head;
      }
    } else if (filterState.status === "completed") {
      let head = 0;
      for (const id2 of TodosState.ids) {
        if (TodosState.todos[id2].completed) {
          TodosState.selected[head] = id2;
          head += 1;
        }
      }
      if (head < TodosState.selected.length) {
        TodosState.selected.length = head;
      }
    } else {
      for (let i = 0;i < TodosState.ids.length; i += 1) {
        TodosState.selected[i] = TodosState.ids[i];
      }
    }
    if (filterState.colors.length > 0) {
      let head = 0;
      for (const id2 of TodosState.selected) {
        for (const color of filterState.colors) {
          if (TodosState.todos[id2].color === color) {
            TodosState.selected[head] = id2;
            head += 1;
            break;
          }
        }
      }
      if (head < TodosState.selected.length) {
        TodosState.selected.length = head;
      }
    }
    if (filterState.tags.length > 0) {
      let head = 0;
      for (const id2 of TodosState.selected) {
        include:
          for (const tag of filterState.tags) {
            for (const todotag of TodosState.todos[id2].tags) {
              if (todotag === tag) {
                TodosState.selected[head] = id2;
                head += 1;
                break include;
              }
            }
          }
      }
      if (head < TodosState.selected.length) {
        TodosState.selected.length = head;
      }
    }
  }
};
var ModalState = {
  type: "edit",
  show: false,
  editId: "",
  dispatch: fakeDispatch
};
var FilterState = {
  colors: [],
  status: "all",
  tags: [],
  includeSomeTag(tags) {
    for (const filterTag of FilterState.tags) {
      for (const tag of tags) {
        if (tag === filterTag) {
          return true;
        }
      }
    }
    return false;
  },
  includeColor(color) {
    for (const filterColor of FilterState.colors) {
      if (color === filterColor) {
        return true;
      }
    }
    return false;
  }
};
var TagsState = {
  tags: {},
  addTags(tags, i) {
    if (i === undefined) {
      i = 0;
    }
    for (;i < tags.length; i += 1) {
      const tag = tags[i];
      if (TagsState.tags[tag] !== undefined) {
        TagsState.tags[tag] += 1;
      } else {
        TagsState.tags[tag] = 1;
      }
    }
  },
  removeTags(tags, i) {
    if (i === undefined) {
      i = 0;
    }
    for (;i < tags.length; i += 1) {
      const tag = tags[i];
      if (TagsState.tags[tag] !== undefined) {
        TagsState.tags[tag] -= 1;
        if (TagsState.tags[tag] === 0) {
          delete TagsState.tags[tag];
        }
      }
    }
  }
};
var TodoActions = {
  edit(id2, date, text, color, tags) {
    const todo = TodosState.todos[id2];
    if (todo !== undefined) {
      let change = false;
      if (date) {
        change = true;
        todo.date = Date.now();
        let i = TodosState.ids.indexOf(id2);
        let end = TodosState.ids.length - 1;
        for (;i < end; i += 1) {
          TodosState.ids[i] = TodosState.ids[i + 1];
        }
        TodosState.ids[end] = id2;
        i = TodosState.selected.indexOf(id2);
        end = TodosState.selected.length - 1;
        for (;i < end; i += 1) {
          TodosState.selected[i] = TodosState.selected[i + 1];
        }
        TodosState.selected[end] = id2;
        localStorage.setItem("todo.ids", JSON.stringify(TodosState.ids));
        TodosState.selectedDispatch(changeState);
      }
      if (text !== undefined && text !== todo.text) {
        change = true;
        todo.text = text;
      }
      if (color !== undefined && color !== todo.color) {
        change = true;
        todo.color = color;
      }
      if (tags !== undefined) {
        const index = compareArrays(tags, todo.tags);
        if (index !== -1) {
          change = true;
          TagsState.removeTags(todo.tags, index);
          for (let i = index;i < tags.length; i += 1) {
            todo.tags[i] = tags[i];
          }
          if (tags.length < todo.tags.length) {
            todo.tags.length = tags.length;
          }
          TagsState.addTags(tags, index);
        }
      }
      if (change) {
        localStorage.setItem(`todo.${id2}`, JSON.stringify(todo));
        TodosState.todosDispatch[id2](changeState);
      }
    }
  },
  toggleComplete(id2) {
    const todo = TodosState.todos[id2];
    if (todo !== undefined) {
      todo.completed = !todo.completed;
      localStorage.setItem(`todo.${id2}`, JSON.stringify(todo));
      TodosState.todosDispatch[id2](changeState);
      if (todo.completed && FilterState.status === "active" || !todo.completed && FilterState.status === "completed") {
        TodosState.removeSelected(id2);
        TodosState.selectedDispatch(changeState);
      }
    }
  }
};
var TodoListActions = {
  add(text, color, tags) {
    const id2 = createId();
    const newTodo = {
      color: color === undefined ? "default" : color,
      completed: false,
      date: Date.now(),
      id: id2,
      tags: tags === undefined ? [] : Array.from(tags),
      text
    };
    TodosState.addTodo(id2, newTodo);
    localStorage.setItem(`todo.${id2}`, JSON.stringify(newTodo));
    localStorage.setItem("todo.ids", JSON.stringify(TodosState.ids));
    if (newTodo.tags.length > 0) {
      TagsState.addTags(newTodo.tags);
    }
    if (FilterState.status !== "completed") {
      if (FilterState.colors.length > 0 && !FilterState.includeColor(newTodo.color)) {
        return;
      }
      if (FilterState.tags.length > 0 && (newTodo.tags.length === 0 || !FilterState.includeSomeTag(newTodo.tags))) {
        return;
      }
      TodosState.selected.push(id2);
      TodosState.selectedDispatch(changeState);
    }
  },
  clearCompleted() {
    let todoTr = -1;
    for (let i = 0;i < TodosState.ids.length; i += 1) {
      const id2 = TodosState.ids[i];
      const todo = TodosState.todos[id2];
      if (todo.completed) {
        TagsState.removeTags(todo.tags);
        delete TodosState.todos[id2];
        delete TodosState.todosDispatch[id2];
        localStorage.removeItem(`todo.${id2}`);
        if (todoTr === -1) {
          todoTr = i;
        }
      } else {
        if (todoTr !== -1) {
          TodosState.ids[todoTr] = TodosState.ids[i];
          todoTr += 1;
        }
      }
    }
    if (todoTr === -1) {
      return;
    }
    TodosState.ids.length = todoTr;
    localStorage.setItem("todo.ids", JSON.stringify(TodosState.ids));
    switch (FilterState.status) {
      case "active":
        return;
      case "all":
        {
          let selectTr = -1;
          for (let i = 0;i < TodosState.selected.length; i += 1) {
            const id2 = TodosState.selected[i];
            if (TodosState.todos[id2] === undefined) {
              if (selectTr === -1) {
                selectTr = i;
              }
            } else {
              if (selectTr !== -1) {
                TodosState.selected[selectTr] = TodosState.selected[i];
                selectTr += 1;
              }
            }
          }
          if (selectTr !== -1) {
            TodosState.selected.length = selectTr;
          }
        }
        ;
        break;
      case "completed": {
        TodosState.selected.length = 0;
      }
    }
    TodosState.selectedDispatch(changeState);
  },
  completeAll() {
    let change = false;
    for (const id2 of TodosState.ids) {
      const todo = TodosState.todos[id2];
      if (!todo.completed) {
        change = true;
        todo.completed = true;
        localStorage.setItem(`todo.${id2}`, JSON.stringify(todo));
        if (FilterState.status === "completed") {
          TodosState.selected.push(id2);
        } else if (FilterState.status === "all") {
          TodosState.todosDispatch[id2](changeState);
        }
      }
    }
    if (!change || FilterState.status === "all") {
      return;
    }
    if (FilterState.status === "active") {
      TodosState.selected.length = 0;
    }
    TodosState.selectedDispatch(changeState);
  },
  delete(id2) {
    if (TodosState.todos[id2] !== undefined) {
      TagsState.removeTags(TodosState.todos[id2].tags);
      TodosState.removeTodo(id2);
      localStorage.removeItem(`todo.${id2}`);
      localStorage.setItem("todo.ids", JSON.stringify(TodosState.ids));
      if (TodosState.removeSelected(id2)) {
        TodosState.selectedDispatch(changeState);
      }
    }
  }
};
var FilterActions = {
  changeColors(color, add) {
    if (FilterState.colors.length > 0) {
      const i = FilterState.colors.indexOf(color);
      if (add) {
        if (i !== -1) {
          return;
        }
        FilterState.colors.push(color);
        TodosState.filter(FilterState);
      } else {
        if (i === -1) {
          return;
        }
        FilterState.colors[i] = FilterState.colors[FilterState.colors.length - 1];
        FilterState.colors.pop();
        TodosState.filter(FilterState);
      }
      TodosState.selectedDispatch(changeState);
    } else {
      if (add) {
        FilterState.colors.push(color);
        TodosState.filterByColor(color);
        TodosState.selectedDispatch(changeState);
      }
    }
  },
  changeTags(tag, add) {
    if (FilterState.tags.length > 0) {
      const i = FilterState.tags.indexOf(tag);
      if (add) {
        if (i !== -1) {
          return;
        }
        FilterState.tags.push(tag);
        TodosState.filterByTag(tag);
      } else {
        if (i === -1) {
          return;
        }
        FilterState.tags[i] = FilterState.tags[FilterState.tags.length - 1];
        FilterState.tags.pop();
        TodosState.filter(FilterState);
      }
      TodosState.selectedDispatch(changeState);
    } else {
      if (add) {
        FilterState.tags.push(tag);
        TodosState.filterByTag(tag);
        TodosState.selectedDispatch(changeState);
      }
    }
  },
  changeStatus(s) {
    if (FilterState.status !== s) {
      FilterState.status = s;
      TodosState.filter(FilterState);
      TodosState.selectedDispatch(changeState);
    }
  }
};
var ModalActions = {
  openEdit(id2) {
    ModalState.show = true;
    ModalState.type = "edit";
    ModalState.editId = id2;
    fixRootOverflow();
    ModalState.dispatch(changeState);
  },
  editComplete(date, text, color, tags) {
    ModalState.show = false;
    TodoActions.edit(ModalState.editId, date, text, color, tags);
    ModalState.dispatch(changeState);
    removeRootOverflow();
  },
  openAdd() {
    ModalState.show = true;
    ModalState.type = "add";
    fixRootOverflow();
    ModalState.dispatch(changeState);
  },
  addCompleted(text, color, tags) {
    ModalState.show = false;
    TodoListActions.add(text, color, tags);
    removeRootOverflow();
    ModalState.dispatch(changeState);
  },
  openFilter() {
    ModalState.show = true;
    ModalState.type = "filter";
    fixRootOverflow();
    ModalState.dispatch(changeState);
  },
  close() {
    ModalState.show = false;
    removeRootOverflow();
    ModalState.dispatch(changeState);
  }
};
{
  let tr = -1;
  const end = TodosState.ids.length;
  for (let i = 0;i < end; i += 1) {
    const id2 = TodosState.ids[i];
    const todo = localStorage.getItem(`todo.${id2}`);
    if (todo !== null) {
      try {
        TodosState.todos[id2] = JSON.parse(todo);
      } catch {
        localStorage.removeItem(`todo.${id2}`);
        if (tr === -1) {
          tr = i;
        }
        continue;
      }
      TodosState.todosDispatch[id2] = fakeDispatch;
      if (tr !== -1) {
        TodosState.ids[tr] = TodosState.ids[i];
        tr += 1;
      }
    } else {
      if (tr === -1) {
        tr = i;
      }
    }
  }
  if (tr !== -1) {
    TodosState.ids.length = tr;
  }
}
{
  for (const id2 of TodosState.ids) {
    const todo = TodosState.todos[id2];
    TagsState.addTags(todo.tags);
  }
}
TodosState.filter(FilterState);

// src/components/todoList.jsx
var import_react4 = __toESM(require_react(), 1);

// src/components/todoItem.jsx
var import_react3 = __toESM(require_react(), 1);
// src/components/tag.jsx
var TagSection = function({ TagInput, TagsSuggested, addButton, addNewTag }) {
  return React.createElement("div", {
    className: "add-tags"
  }, React.createElement("div", {
    className: "input-tags"
  }, TagInput, TagsSuggested), addButton && React.createElement("button", {
    className: "add-button",
    type: "button",
    onClick: addNewTag
  }, React.createElement("p", null, "add")));
};
var TagDeleteButton = function({ tag: tag2, index, onClick }) {
  return React.createElement("button", {
    type: "button",
    title: `remove ${tag2} tag`,
    className: "tag-button",
    "data-index": index,
    onClick
  }, React.createElement("span", null, tag2));
};
var TagAddButton = function({ tag: tag2, onClick }) {
  return React.createElement("button", {
    type: "button",
    title: `add ${tag2} tag`,
    className: "tag-button",
    "data-value": tag2,
    onPointerDown: onClick
  }, React.createElement("span", null, tag2));
};
var Tag = function({ text }) {
  return React.createElement("div", {
    className: "tag",
    title: `tag: ${text}`
  }, React.createElement("span", null, text));
};

// src/components/todoModal.jsx
var import_react2 = __toESM(require_react(), 1);

// src/components/color.jsx
var import_react = __toESM(require_react(), 1);
var Color = function({
  color: color2,
  check,
  onChange,
  dispatch,
  type
}) {
  dispatch[color2] = import_react.useState(true)[1];
  return React.createElement("label", {
    className: "color-item"
  }, React.createElement("input", {
    className: "display-none",
    type,
    value: color2,
    checked: check(color2),
    onChange
  }), React.createElement("div", {
    role: "radio",
    className: `color-view ${color2}`,
    title: color2
  }));
};
var ColorContainer = function({ type, check, onChange, dispatch }) {
  return React.createElement("div", {
    className: "color-container",
    role: "radiogroup"
  }, React.createElement(Color, {
    color: "default",
    check,
    onChange,
    dispatch,
    type
  }), React.createElement(Color, {
    color: "blue",
    check,
    onChange,
    dispatch,
    type
  }), React.createElement(Color, {
    color: "purple",
    check,
    onChange,
    dispatch,
    type
  }), React.createElement(Color, {
    color: "pink",
    check,
    onChange,
    dispatch,
    type
  }), React.createElement(Color, {
    color: "red",
    check,
    onChange,
    dispatch,
    type
  }), React.createElement(Color, {
    color: "brown",
    check,
    onChange,
    dispatch,
    type
  }), React.createElement(Color, {
    color: "yellow",
    check,
    onChange,
    dispatch,
    type
  }), React.createElement(Color, {
    color: "green",
    check,
    onChange,
    dispatch,
    type
  }));
};
var color_default = ColorContainer;

// src/components/icons.jsx
var IconOptions = function() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-options",
    viewBox: "0 0 512 512"
  }, React.createElement("title", null, "Options"), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"
  }), React.createElement("circle", {
    cx: "336",
    cy: "128",
    r: "32",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32"
  }), React.createElement("circle", {
    cx: "176",
    cy: "256",
    r: "32",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32"
  }), React.createElement("circle", {
    cx: "336",
    cy: "384",
    r: "32",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32"
  }));
};
var IconAdd = function({ title }) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-add",
    viewBox: "0 0 512 512"
  }, React.createElement("title", null, title), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M256 112v288M400 256H112"
  }));
};
var IconClose = function({ stroke }) {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-close",
    viewBox: "0 0 512 512"
  }, React.createElement("path", {
    fill: "none",
    stroke: stroke !== undefined ? stroke : "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M368 368L144 144M368 144L144 368"
  }));
};
var IconMoon = function() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-moon",
    viewBox: "0 0 512 512"
  }, React.createElement("title", null, "Dark"), React.createElement("path", {
    d: "M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32"
  }));
};
var IconSunny = function() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-sunny",
    viewBox: "0 0 512 512"
  }, React.createElement("title", null, "Light"), React.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "32",
    d: "M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
  }), React.createElement("circle", {
    cx: "256",
    cy: "256",
    r: "80",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "32"
  }));
};
// src/components/todoModal.jsx
var setText = function(e) {
  const value = e.currentTarget.value;
  TodoModalState.text = value;
  TodoModalDispatch.text(changeState);
};
var TodoText = function() {
  TodoModalDispatch.text = import_react2.useState(true)[1];
  return React.createElement("textarea", {
    name: "text",
    title: "todo text",
    value: TodoModalState.text,
    onChange: setText,
    rows: 2,
    required: true
  });
};
var TodoDateRadio = function({
  value,
  onChange,
  TodoModalDispatchName
}) {
  TodoModalDispatch.date[TodoModalDispatchName] = import_react2.useState(false)[1];
  return React.createElement("input", {
    className: "display-none",
    type: "radio",
    checked: value === TodoModalState.date,
    onChange
  });
};
var setColor = function(e) {
  const color3 = e.currentTarget.value;
  const prevColor = TodoModalState.color;
  if (color3 !== prevColor) {
    TodoModalState.color = color3;
    TodoModalDispatch.color[color3](changeState);
    TodoModalDispatch.color[prevColor](changeState);
  }
};
var checkColor = function(color3) {
  return TodoModalState.color === color3;
};
var populateTagsSelected = function(tags) {
  TodoModalState.tagsSelected.length = 0;
  TMTagsSelectedArray.length = 0;
  for (let i = 0;i < tags.length; i += 1) {
    const tag3 = tags[i];
    TodoModalState.tagsSelected.push(tag3);
    TMTagsSelectedArray.push(React.createElement(TagDeleteButton, {
      tag: tag3,
      index: i,
      onClick: removeTag,
      key: `tag-${tag3}`
    }));
  }
};
var removeTag = function(e) {
  const i = e.currentTarget.getAttribute("data-index");
  if (i !== null) {
    for (let j = Number(i);j < TodoModalState.tagsSelected.length - 1; j += 1) {
      TodoModalState.tagsSelected[j] = TodoModalState.tagsSelected[j + 1];
      TMTagsSelectedArray[j] = TMTagsSelectedArray[j + 1];
    }
    TodoModalState.tagsSelected.pop();
    TMTagsSelectedArray.pop();
    TodoModalDispatch.tagsSelected(changeState);
  }
};
var addNewTag = function() {
  if (TodoModalState.newTag !== "") {
    if (!TodoModalState.tagsSelected.includes(TodoModalState.newTag)) {
      TodoModalState.tagsSelected.push(TodoModalState.newTag);
      TMTagsSelectedArray.push(React.createElement(TagDeleteButton, {
        tag: TodoModalState.newTag,
        index: TMTagsSelectedArray.length,
        onClick: removeTag,
        key: `tag-${TodoModalState.newTag}`
      }));
      TodoModalDispatch.tagsSelected(changeState);
    }
    TodoModalState.newTag = "";
    TodoModalState.tagsSuggested.length = 0;
    TMTagsSuggestedArray.length = 0;
    TodoModalDispatch.newTag(changeState);
    TodoModalDispatch.tagsSuggested(changeState);
  }
};
var selectSuggestedTag = function(e) {
  const value = e.currentTarget.getAttribute("data-value");
  if (value !== null) {
    TodoModalState.newTag = value;
    addNewTag();
  }
};
var onChangeTagsInput = function(e) {
  const value = e.currentTarget.value;
  if (value[value.length - 1] !== " ") {
    let change = false;
    if (value === "") {
      change = true;
      TodoModalState.tagsSuggested.length = 0;
      TMTagsSuggestedArray.length = 0;
    } else if (value.length === 1) {
      change = true;
      if (TMSuggestedTemporal.char === value) {
        for (let i = 0;i < TMSuggestedTemporal.tags.length; i += 1) {
          TodoModalState.tagsSuggested[i] = TMSuggestedTemporal.tags[i];
          TMTagsSuggestedArray[i] = TMSuggestedTemporal.react[i];
        }
      } else {
        TMSuggestedTemporal.char = value;
        TMSuggestedTemporal.tags.length = 0;
        TMSuggestedTemporal.react.length = 0;
        TodoModalState.tagsSuggested.length = 0;
        TMTagsSuggestedArray.length = 0;
        let i = 0;
        for (const tag3 in TagsState.tags) {
          if (value === tag3[0]) {
            TodoModalState.tagsSuggested.push(tag3);
            TMTagsSuggestedArray.push(React.createElement(TagAddButton, {
              tag: tag3,
              onClick: selectSuggestedTag,
              key: `tag-${tag3}`
            }));
            TMSuggestedTemporal.tags.push(tag3);
            TMSuggestedTemporal.react.push(TMTagsSuggestedArray[i]);
            i += 1;
          }
        }
      }
    } else if (value.length > TodoModalState.newTag.length && TodoModalState.tagsSuggested.length !== 0) {
      change = true;
      let head = 0;
      for (let i = 0;i < TodoModalState.tagsSuggested.length; i += 1) {
        const tag3 = TodoModalState.tagsSuggested[i];
        if (tag3.startsWith(value)) {
          TodoModalState.tagsSuggested[head] = tag3;
          TMTagsSuggestedArray[head] = TMTagsSuggestedArray[i];
          head += 1;
        }
      }
      TodoModalState.tagsSuggested.length = head;
      TMTagsSuggestedArray.length = head;
    } else if (value.length < TodoModalState.newTag.length) {
      change = true;
      let head = 0;
      for (let i = 0;i < TMSuggestedTemporal.tags.length; i += 1) {
        const tag3 = TMSuggestedTemporal.tags[i];
        if (tag3.startsWith(value)) {
          TodoModalState.tagsSuggested[head] = tag3;
          TMTagsSuggestedArray[head] = TMSuggestedTemporal.react[i];
          head += 1;
        }
      }
    }
    TodoModalState.newTag = value;
    TodoModalDispatch.newTag(changeState);
    if (change) {
      TodoModalDispatch.tagsSuggested(changeState);
    }
  }
};
var onEnterTagsInput = function(e) {
  if (e.key === "Enter") {
    addNewTag();
  }
};
var TagInput = function() {
  TodoModalDispatch.newTag = import_react2.useState(true)[1];
  return React.createElement("input", {
    name: "tag",
    type: "text",
    value: TodoModalState.newTag,
    placeholder: "add a tag",
    onChange: onChangeTagsInput,
    onKeyDown: onEnterTagsInput
  });
};
var RemoveTagsSection = function() {
  TodoModalDispatch.tagsSelected = import_react2.useState(true)[1];
  if (TodoModalState.tagsSelected.length === 0) {
    return;
  }
  return React.createElement("section", {
    className: "tags-selected-section"
  }, React.createElement("p", null, "Remove tags:"), React.createElement("div", {
    className: "tags-selected"
  }, TMTagsSelectedArray));
};
var TagsSuggested = function() {
  TodoModalDispatch.tagsSuggested = import_react2.useState(true)[1];
  if (TMTagsSuggestedArray.length === 0) {
    return;
  }
  return React.createElement("div", {
    className: "suggested-tags"
  }, TMTagsSuggestedArray);
};
var TodoModal = function({
  title,
  editmode,
  onClickClose,
  onClickComplete,
  completeText
}) {
  return React.createElement("div", {
    className: "todo-parent"
  }, React.createElement("button", {
    type: "button",
    className: "close-button",
    title: "close",
    onClick: onClickClose
  }, React.createElement(IconClose, null)), React.createElement("h3", {
    className: "todo title"
  }, title), React.createElement("section", {
    className: "section todo text-section"
  }, React.createElement("h4", null, "What do you need to do?"), React.createElement(TodoText, null)), editmode && React.createElement("section", {
    className: "section todo date-section"
  }, React.createElement("h4", null, "Set date to now:"), React.createElement("div", null, React.createElement("label", {
    className: "radio"
  }, React.createElement(TodoDateRadio, {
    value: false,
    onChange: setDate.toFalse,
    TodoModalDispatchName: "false"
  }), React.createElement("p", null, "No")), React.createElement("label", {
    className: "radio"
  }, React.createElement(TodoDateRadio, {
    value: true,
    onChange: setDate.toTrue,
    TodoModalDispatchName: "true"
  }), React.createElement("p", null, "Yes")))), React.createElement("section", {
    className: "section todo color-section"
  }, React.createElement("h4", null, "Select Color:"), React.createElement(color_default, {
    check: checkColor,
    onChange: setColor,
    dispatch: TodoModalDispatch.color,
    type: "radio"
  })), React.createElement("section", {
    className: "section todo tags-section"
  }, React.createElement("h4", null, "Tags:"), React.createElement(TagSection, {
    TagInput: React.createElement(TagInput, null),
    TagsSuggested: React.createElement(TagsSuggested, null),
    addButton: true,
    addNewTag
  })), React.createElement(RemoveTagsSection, null), React.createElement("div", {
    className: "complete-button-parent"
  }, React.createElement("button", {
    type: "button",
    className: "complete-button",
    onClick: onClickComplete
  }, completeText)));
};
var addComplete = function() {
  if (TodoModalState.text === "") {
    return;
  }
  ModalActions.addCompleted(TodoModalState.text, TodoModalState.color, TodoModalState.tagsSelected);
};
var AddTodoModal = function() {
  return React.createElement(TodoModal, {
    title: "New Todo",
    editmode: false,
    onClickClose: ModalActions.close,
    onClickComplete: addComplete,
    completeText: "create"
  });
};
var editComplete = function() {
  if (TodoModalState.text === "") {
    return;
  }
  ModalActions.editComplete(TodoModalState.date, TodoModalState.text, TodoModalState.color, TodoModalState.tagsSelected);
};
var EditTodoModal = function() {
  return React.createElement(TodoModal, {
    title: "Edit Todo",
    editmode: true,
    onClickClose: ModalActions.close,
    onClickComplete: editComplete,
    completeText: "edit"
  });
};
var openAdd = function() {
  TodoModalState.reset();
  TMTagsSelectedArray.length = 0;
  TMTagsSuggestedArray.length = 0;
  TMSuggestedTemporal.reset();
  ModalActions.openAdd();
};
var AddTodoButton = function({ className }) {
  return React.createElement("button", {
    type: "button",
    className,
    onClick: openAdd
  }, React.createElement(IconAdd, {
    title: "Add a new todo"
  }));
};
var openEdit = function(e) {
  const id2 = e.currentTarget.getAttribute("data-id");
  if (id2 !== null) {
    const todo = TodosState.todos[id2];
    TodoModalState.text = todo.text;
    TodoModalState.date = false;
    TodoModalState.color = todo.color;
    TodoModalState.tagsSuggested.length = 0;
    TodoModalState.newTag = "";
    populateTagsSelected(todo.tags);
    TMTagsSuggestedArray.length = 0;
    TMSuggestedTemporal.reset();
    ModalActions.openEdit(id2);
  }
};
var EditTodoButton = function({ id: id2 }) {
  return React.createElement("button", {
    type: "button",
    title: "edit todo",
    "data-id": id2,
    onClick: openEdit
  }, React.createElement("p", null, "edit"));
};
var TodoModalState = {
  color: "default",
  text: "",
  date: false,
  tagsSelected: [],
  tagsSuggested: [],
  newTag: "",
  reset() {
    TodoModalState.color = "default";
    TodoModalState.text = "";
    TodoModalState.date = false;
    TodoModalState.tagsSelected.length = 0;
    TodoModalState.tagsSuggested.length = 0;
    TodoModalState.newTag = "";
  }
};
var TodoModalDispatch = {
  color: {
    default: fakeDispatch,
    purple: fakeDispatch,
    red: fakeDispatch,
    brown: fakeDispatch,
    blue: fakeDispatch,
    yellow: fakeDispatch,
    green: fakeDispatch,
    pink: fakeDispatch
  },
  date: {
    true: fakeDispatch,
    false: fakeDispatch
  },
  text: fakeDispatch,
  tagsSelected: fakeDispatch,
  tagsSuggested: fakeDispatch,
  newTag: fakeDispatch
};
var setDate = {
  toFalse() {
    TodoModalState.date = false;
    TodoModalDispatch.date.true(changeState);
    TodoModalDispatch.date.false(changeState);
  },
  toTrue() {
    TodoModalState.date = true;
    TodoModalDispatch.date.true(changeState);
    TodoModalDispatch.date.false(changeState);
  }
};
var TMTagsSelectedArray = [];
var TMTagsSuggestedArray = [];
var TMSuggestedTemporal = {
  char: "",
  tags: [],
  react: [],
  reset() {
    TMSuggestedTemporal.char = "";
    TMSuggestedTemporal.tags.length = 0;
    TMSuggestedTemporal.react.length = 0;
  }
};
// src/components/todoItem.jsx
var deleteTodo = function(e) {
  const id2 = e.currentTarget.getAttribute("data-id");
  if (id2 !== null) {
    TodoListActions.delete(id2);
  }
};
var toggleCompleted = function(e) {
  const id2 = e.currentTarget.getAttribute("data-id");
  if (id2 !== null) {
    TodoActions.toggleComplete(id2);
  }
};
var forEachTag = function(tag4) {
  return React.createElement(Tag, {
    text: tag4,
    key: `${this}-tag-${tag4}`
  });
};
var Todo = function({ id: id2 }) {
  TodosState.todosDispatch[id2] = import_react3.useState(false)[1];
  const todo = TodosState.todos[id2];
  const styleVars = {
    "--color": `var(--color-${todo.color})`,
    "--right-background-color": `var(--color-${todo.color})`
  };
  const todoClassName = todo.completed ? TODO_CLASS_NAME + " completed" : TODO_CLASS_NAME;
  return React.createElement("div", {
    className: todoClassName,
    style: styleVars
  }, React.createElement("div", {
    className: "left"
  }, React.createElement("div", {
    className: "todo-header"
  }, React.createElement("p", null, DateTimeFormatter.format(todo.date)), todo.completed ? React.createElement("button", {
    type: "button",
    "aria-label": "delete",
    title: "delete todo",
    "data-id": id2,
    onClick: deleteTodo
  }, React.createElement(IconClose, null)) : React.createElement(EditTodoButton, {
    id: id2
  })), React.createElement("div", {
    className: "todo-main"
  }, React.createElement("p", null, todo.text)), todo.tags.length > 0 && React.createElement("div", {
    className: "todo-footer"
  }, Array.from(todo.tags, forEachTag, id2))), React.createElement("div", {
    className: "right"
  }, React.createElement("button", {
    type: "button",
    "aria-label": "toggle completed",
    title: todo.completed ? "mark as non completed" : "mark as competed",
    "data-id": id2,
    onClick: toggleCompleted
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    className: "icon icon-check-square",
    viewBox: "0 0 16 16"
  }, React.createElement("path", {
    d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
  }), todo.completed && React.createElement("path", {
    d: "M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"
  })))));
};
var DateTimeFormatter = Intl.DateTimeFormat(undefined, {
  dateStyle: "short",
  timeStyle: "short"
});
var TODO_CLASS_NAME = "todo-item";
var todoItem_default = Todo;

// src/components/todoList.jsx
var TodoList = function() {
  TodosState.selectedDispatch = import_react4.useState(true)[1];
  ReactTodosSelected.length = 0;
  for (const todo of TodosState.selected) {
    ReactTodosSelected.push(React.createElement(todoItem_default, {
      id: todo,
      key: todo
    }));
  }
  return ReactTodosSelected;
};
var ReactTodosSelected = [];
var todoList_default = TodoList;

// src/components/filter.jsx
var import_react5 = __toESM(require_react(), 1);

// src/onwindowresize.js
var mnw780oc = function(e) {
  MatchDispatch.filterDesktop(changeState);
  MatchDispatch.filterBtn(changeState);
  if (e.matches && ModalState.show && ModalState.type === "filter") {
    ModalActions.close();
  }
};
var MatchDispatch = {
  filterDesktop: fakeDispatch,
  filterBtn: fakeDispatch
};
var MATCH_MIN_WIDTH_780 = window.matchMedia("(min-width: 780px)");
MATCH_MIN_WIDTH_780.onchange = mnw780oc;
// src/components/filter.jsx
var setStatus = function(e) {
  const value = e.currentTarget.value;
  const prevVal = FilterState.status;
  if (value !== prevVal) {
    FilterActions.changeStatus(value);
    FilterModalDispatch.status[prevVal](changeState);
    FilterModalDispatch.status[value](changeState);
  }
};
var StatusInput = function({ status }) {
  FilterModalDispatch.status[status] = import_react5.useState(true)[1];
  return React.createElement("input", {
    className: "display-none",
    type: "radio",
    value: status,
    checked: FilterState.status === status,
    onChange: setStatus
  });
};
var StatusContainer = function() {
  return React.createElement("div", {
    className: "status-container"
  }, React.createElement("label", {
    className: "radio"
  }, React.createElement(StatusInput, {
    status: "all"
  }), React.createElement("p", {
    title: "All"
  }, "All")), React.createElement("label", {
    className: "radio"
  }, React.createElement(StatusInput, {
    status: "active"
  }), React.createElement("p", {
    title: "Active"
  }, "Active")), React.createElement("label", {
    className: "radio"
  }, React.createElement(StatusInput, {
    status: "completed"
  }), React.createElement("p", {
    title: "Completed"
  }, "Completed")));
};
var setColor2 = function(e) {
  const color4 = e.currentTarget.value;
  const v4 = FilterModalState.color[color4];
  FilterActions.changeColors(color4, !v4);
  FilterModalState.color[color4] = !v4;
  FilterModalDispatch.color[color4](changeState);
};
var checkColor2 = function(color4) {
  return FilterModalState.color[color4];
};
var removeTag2 = function(e) {
  const i = e.currentTarget.getAttribute("data-index");
  if (i !== null) {
    let k2 = Number(i);
    FilterActions.changeTags(FilterModalState.tagsSelected[k2], false);
    for (let j = k2;j < FilterModalState.tagsSelected.length - 1; j += 1) {
      FilterModalState.tagsSelected[j] = FilterModalState.tagsSelected[j + 1];
      FTagsSelectedArray[j] = FTagsSelectedArray[j + 1];
    }
    FilterModalState.tagsSelected.pop();
    FTagsSelectedArray.pop();
    FilterModalDispatch.tagsSelected(changeState);
  }
};
var addNewTag2 = function() {
  if (FilterModalState.newTag !== "") {
    if (!FilterModalState.tagsSelected.includes(FilterModalState.newTag)) {
      FilterModalState.tagsSelected.push(FilterModalState.newTag);
      FTagsSelectedArray.push(React.createElement(TagDeleteButton, {
        tag: FilterModalState.newTag,
        index: FTagsSelectedArray.length,
        onClick: removeTag2,
        key: `tag-${FilterModalState.newTag}`
      }));
      FilterModalDispatch.tagsSelected(changeState);
      FilterActions.changeTags(FilterModalState.newTag, true);
    }
    FilterModalState.newTag = "";
    FilterModalState.tagsSuggested.length = 0;
    FTagsSuggestedArray.length = 0;
    FilterModalDispatch.newTag(changeState);
    FilterModalDispatch.tagsSuggested(changeState);
  }
};
var selectSuggestedTag2 = function(e) {
  const value = e.currentTarget.getAttribute("data-value");
  if (value !== null) {
    FilterModalState.newTag = value;
    addNewTag2();
  }
};
var onChangeTagsInput2 = function(e) {
  const value = e.currentTarget.value;
  if (value[value.length - 1] !== " ") {
    let change = false;
    if (value === "") {
      change = true;
      FilterModalState.tagsSuggested.length = 0;
      FTagsSuggestedArray.length = 0;
    } else if (value.length === 1 || value.length < FilterModalState.newTag.length) {
      change = true;
      FilterModalState.tagsSuggested.length = 0;
      FTagsSuggestedArray.length = 0;
      let i = 0;
      for (const tag5 in TagsState.tags) {
        if (value === tag5[0]) {
          FilterModalState.tagsSuggested.push(tag5);
          FTagsSuggestedArray.push(React.createElement(TagAddButton, {
            tag: tag5,
            onClick: selectSuggestedTag2,
            key: `tag-${tag5}`
          }));
          i += 1;
        }
      }
    } else if (value.length > FilterModalState.newTag.length && FilterModalState.tagsSuggested.length !== 0) {
      change = true;
      let head = 0;
      for (let i = 0;i < FilterModalState.tagsSuggested.length; i += 1) {
        const tag5 = FilterModalState.tagsSuggested[i];
        if (tag5.startsWith(value)) {
          FilterModalState.tagsSuggested[head] = tag5;
          FTagsSuggestedArray[head] = FTagsSuggestedArray[i];
          head += 1;
        }
      }
      FilterModalState.tagsSuggested.length = head;
      FTagsSuggestedArray.length = head;
    }
    FilterModalState.newTag = value;
    FilterModalDispatch.newTag(changeState);
    if (change) {
      FilterModalDispatch.tagsSuggested(changeState);
    }
  }
};
var TagInput2 = function() {
  FilterModalDispatch.newTag = import_react5.useState(true)[1];
  return React.createElement("input", {
    name: "tag",
    type: "text",
    value: FilterModalState.newTag,
    placeholder: "add a tag",
    onChange: onChangeTagsInput2
  });
};
var RemoveTagsSection2 = function() {
  FilterModalDispatch.tagsSelected = import_react5.useState(true)[1];
  if (FilterModalState.tagsSelected.length === 0) {
    return;
  }
  return React.createElement("section", {
    className: "tags-selected-section"
  }, React.createElement("p", null, "Remove tags:"), React.createElement("div", {
    className: "tags-selected"
  }, FTagsSelectedArray));
};
var TagsSuggested2 = function() {
  FilterModalDispatch.tagsSuggested = import_react5.useState(true)[1];
  if (FTagsSuggestedArray.length === 0) {
    return;
  }
  return React.createElement("div", {
    className: "suggested-tags"
  }, FTagsSuggestedArray);
};
var Filter = function() {
  return React.createElement(React.Fragment, null, React.createElement("section", {
    className: "section filter"
  }, React.createElement("h3", null, "Actions"), React.createElement("div", {
    className: "actions"
  }, React.createElement("button", {
    type: "button",
    className: "action-button",
    onClick: TodoListActions.completeAll
  }, React.createElement("p", null, "Mark all as completed")), React.createElement("button", {
    type: "button",
    className: "action-button",
    onClick: TodoListActions.clearCompleted
  }, React.createElement("p", null, "Clear completed")))), React.createElement("section", {
    className: "section filter"
  }, React.createElement("h3", null, "Filter by"), React.createElement("section", {
    className: "section status-section"
  }, React.createElement("h4", null, "Status:"), React.createElement(StatusContainer, null)), React.createElement("section", {
    className: "section color-section"
  }, React.createElement("h4", null, "Colors:"), React.createElement(color_default, {
    dispatch: FilterModalDispatch.color,
    onChange: setColor2,
    check: checkColor2,
    type: "checkbox"
  })), React.createElement("section", {
    className: "section tags-section"
  }, React.createElement("h4", null, "Tags:"), React.createElement(TagSection, {
    TagInput: React.createElement(TagInput2, null),
    TagsSuggested: React.createElement(TagsSuggested2, null),
    addButton: false
  })), React.createElement(RemoveTagsSection2, null)));
};
var FilterDesktop = function() {
  MatchDispatch.filterDesktop = import_react5.useState(true)[1];
  if (!MATCH_MIN_WIDTH_780.matches) {
    return;
  }
  return React.createElement("aside", null, React.createElement(Filter, null));
};
var FilterModal = function() {
  return React.createElement(React.Fragment, null, React.createElement("button", {
    type: "button",
    className: "close-button",
    title: "close",
    onClick: ModalActions.close
  }, React.createElement(IconClose, null)), React.createElement(Filter, null));
};
var FilterButton = function({ className, onClick, children }) {
  MatchDispatch.filterBtn = import_react5.useState(true)[1];
  if (MATCH_MIN_WIDTH_780.matches) {
    return;
  }
  return React.createElement("button", {
    type: "button",
    className,
    onClick
  }, children);
};
var FilterModalState = {
  color: {
    default: false,
    blue: false,
    purple: false,
    pink: false,
    red: false,
    brown: false,
    yellow: false,
    green: false
  },
  newTag: "",
  tagsSelected: [],
  tagsSuggested: []
};
var FilterModalDispatch = {
  status: {
    all: fakeDispatch,
    active: fakeDispatch,
    completed: fakeDispatch
  },
  color: {
    default: fakeDispatch,
    blue: fakeDispatch,
    purple: fakeDispatch,
    pink: fakeDispatch,
    red: fakeDispatch,
    brown: fakeDispatch,
    yellow: fakeDispatch,
    green: fakeDispatch
  },
  newTag: fakeDispatch,
  tagsSelected: fakeDispatch,
  tagsSuggested: fakeDispatch
};
var FTagsSelectedArray = [];
var FTagsSuggestedArray = [];

// src/components/changeTheme.jsx
var import_react6 = __toESM(require_react(), 1);
var changeTheme = function() {
  if (theme.state === "dark") {
    theme.state = "light";
  } else {
    theme.state = "dark";
  }
  document.body.className = theme.state;
  localStorage.setItem("theme", theme.state);
  theme.dispatch(changeState);
};
var IconsThemeButton = function() {
  theme.dispatch = import_react6.useState(false)[1];
  return theme.state === "dark" ? React.createElement(IconSunny, null) : React.createElement(IconMoon, null);
};
var ChangeThemeButton = function({ className }) {
  return React.createElement("button", {
    type: "button",
    className,
    onClick: changeTheme
  }, React.createElement(IconsThemeButton, null));
};
var theme = {
  state: "dark",
  dispatch: fakeDispatch
};
{
  const t3 = localStorage.getItem("theme");
  if (t3 !== null) {
    theme.state = t3;
  } else {
    if (window.matchMedia !== undefined && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme.state = "dark";
    } else {
      theme.state = "light";
    }
    localStorage.setItem("theme", theme.state);
  }
  document.body.className = theme.state;
}
var changeTheme_default = ChangeThemeButton;

// src/components/modal.jsx
var import_react7 = __toESM(require_react(), 1);
var Modal = function() {
  ModalState.dispatch = import_react7.useState(true)[1];
  const display = ModalState.show ? "" : "display-none";
  const modalChild = ModalState.type === "add" ? React.createElement(AddTodoModal, null) : ModalState.type === "edit" ? React.createElement(EditTodoModal, null) : React.createElement(FilterModal, null);
  return React.createElement("div", {
    className: `modal-root ${display}`
  }, React.createElement("div", {
    id: "modal",
    className: "modal"
  }, modalChild));
};
var modal_default = Modal;
// src/components/app.jsx
var App = function() {
  return React.createElement(React.Fragment, null, React.createElement("header", null, React.createElement(FilterButton, {
    className: "header-button left",
    onClick: ModalActions.openFilter
  }, React.createElement(IconOptions, null)), React.createElement(AddTodoButton, {
    className: "header-button center"
  }), React.createElement(changeTheme_default, {
    className: "header-button right"
  })), React.createElement("div", {
    className: "container"
  }, React.createElement("main", null, React.createElement(todoList_default, null)), React.createElement(FilterDesktop, null)), React.createElement("footer", null, React.createElement("p", null, "by ", React.createElement("a", {
    className: "",
    href: "https://github.com/AxelArielSaravia/",
    target: "_blank",
    rel: "noreferrer noopener"
  }, "Axel Ariel Saravia"))), React.createElement(modal_default, null));
};
var app_default = App;

// src/index.jsx
var container = document.getElementById("root");
if (container !== null) {
  const root = $createRoot2(container);
  root.render(React.createElement(app_default, null));
}
