function $m(u, s) {
  for (var f = 0; f < s.length; f++) {
    const o = s[f];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const m in o)
        if (m !== "default" && !(m in u)) {
          const A = Object.getOwnPropertyDescriptor(o, m);
          A &&
            Object.defineProperty(
              u,
              m,
              A.get ? A : { enumerable: !0, get: () => o[m] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const m of document.querySelectorAll('link[rel="modulepreload"]')) o(m);
  new MutationObserver((m) => {
    for (const A of m)
      if (A.type === "childList")
        for (const U of A.addedNodes)
          U.tagName === "LINK" && U.rel === "modulepreload" && o(U);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(m) {
    const A = {};
    return (
      m.integrity && (A.integrity = m.integrity),
      m.referrerPolicy && (A.referrerPolicy = m.referrerPolicy),
      m.crossOrigin === "use-credentials"
        ? (A.credentials = "include")
        : m.crossOrigin === "anonymous"
          ? (A.credentials = "omit")
          : (A.credentials = "same-origin"),
      A
    );
  }
  function o(m) {
    if (m.ep) return;
    m.ep = !0;
    const A = f(m);
    fetch(m.href, A);
  }
})();
function Pm(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default")
    ? u.default
    : u;
}
var os = { exports: {} },
  Sn = {};
var Md;
function Im() {
  if (Md) return Sn;
  Md = 1;
  var u = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.fragment");
  function f(o, m, A) {
    var U = null;
    if (
      (A !== void 0 && (U = "" + A),
      m.key !== void 0 && (U = "" + m.key),
      "key" in m)
    ) {
      A = {};
      for (var D in m) D !== "key" && (A[D] = m[D]);
    } else A = m;
    return (
      (m = A.ref),
      { $$typeof: u, type: o, key: U, ref: m !== void 0 ? m : null, props: A }
    );
  }
  return ((Sn.Fragment = s), (Sn.jsx = f), (Sn.jsxs = f), Sn);
}
var Rd;
function ty() {
  return (Rd || ((Rd = 1), (os.exports = Im())), os.exports);
}
var d = ty(),
  ds = { exports: {} },
  xn = {},
  hs = { exports: {} },
  ms = {};
var _d;
function ey() {
  return (
    _d ||
      ((_d = 1),
      (function (u) {
        function s(R, w) {
          var k = R.length;
          R.push(w);
          t: for (; 0 < k; ) {
            var ht = (k - 1) >>> 1,
              y = R[ht];
            if (0 < m(y, w)) ((R[ht] = w), (R[k] = y), (k = ht));
            else break t;
          }
        }
        function f(R) {
          return R.length === 0 ? null : R[0];
        }
        function o(R) {
          if (R.length === 0) return null;
          var w = R[0],
            k = R.pop();
          if (k !== w) {
            R[0] = k;
            t: for (var ht = 0, y = R.length, N = y >>> 1; ht < N; ) {
              var B = 2 * (ht + 1) - 1,
                H = R[B],
                L = B + 1,
                nt = R[L];
              if (0 > m(H, k))
                L < y && 0 > m(nt, H)
                  ? ((R[ht] = nt), (R[L] = k), (ht = L))
                  : ((R[ht] = H), (R[B] = k), (ht = B));
              else if (L < y && 0 > m(nt, k))
                ((R[ht] = nt), (R[L] = k), (ht = L));
              else break t;
            }
          }
          return w;
        }
        function m(R, w) {
          var k = R.sortIndex - w.sortIndex;
          return k !== 0 ? k : R.id - w.id;
        }
        if (
          ((u.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var A = performance;
          u.unstable_now = function () {
            return A.now();
          };
        } else {
          var U = Date,
            D = U.now();
          u.unstable_now = function () {
            return U.now() - D;
          };
        }
        var T = [],
          b = [],
          z = 1,
          O = null,
          S = 3,
          q = !1,
          Y = !1,
          Q = !1,
          K = !1,
          ut = typeof setTimeout == "function" ? setTimeout : null,
          pt = typeof clearTimeout == "function" ? clearTimeout : null,
          gt = typeof setImmediate < "u" ? setImmediate : null;
        function Ht(R) {
          for (var w = f(b); w !== null; ) {
            if (w.callback === null) o(b);
            else if (w.startTime <= R)
              (o(b), (w.sortIndex = w.expirationTime), s(T, w));
            else break;
            w = f(b);
          }
        }
        function tt(R) {
          if (((Q = !1), Ht(R), !Y))
            if (f(T) !== null) ((Y = !0), wt || ((wt = !0), Bt()));
            else {
              var w = f(b);
              w !== null && Yt(tt, w.startTime - R);
            }
        }
        var wt = !1,
          Wt = -1,
          $t = 5,
          xe = -1;
        function Hl() {
          return K ? !0 : !(u.unstable_now() - xe < $t);
        }
        function De() {
          if (((K = !1), wt)) {
            var R = u.unstable_now();
            xe = R;
            var w = !0;
            try {
              t: {
                ((Y = !1), Q && ((Q = !1), pt(Wt), (Wt = -1)), (q = !0));
                var k = S;
                try {
                  e: {
                    for (
                      Ht(R), O = f(T);
                      O !== null && !(O.expirationTime > R && Hl());
                    ) {
                      var ht = O.callback;
                      if (typeof ht == "function") {
                        ((O.callback = null), (S = O.priorityLevel));
                        var y = ht(O.expirationTime <= R);
                        if (((R = u.unstable_now()), typeof y == "function")) {
                          ((O.callback = y), Ht(R), (w = !0));
                          break e;
                        }
                        (O === f(T) && o(T), Ht(R));
                      } else o(T);
                      O = f(T);
                    }
                    if (O !== null) w = !0;
                    else {
                      var N = f(b);
                      (N !== null && Yt(tt, N.startTime - R), (w = !1));
                    }
                  }
                  break t;
                } finally {
                  ((O = null), (S = k), (q = !1));
                }
                w = void 0;
              }
            } finally {
              w ? Bt() : (wt = !1);
            }
          }
        }
        var Bt;
        if (typeof gt == "function")
          Bt = function () {
            gt(De);
          };
        else if (typeof MessageChannel < "u") {
          var yl = new MessageChannel(),
            gl = yl.port2;
          ((yl.port1.onmessage = De),
            (Bt = function () {
              gl.postMessage(null);
            }));
        } else
          Bt = function () {
            ut(De, 0);
          };
        function Yt(R, w) {
          Wt = ut(function () {
            R(u.unstable_now());
          }, w);
        }
        ((u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (u.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : ($t = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (u.unstable_next = function (R) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var w = 3;
                break;
              default:
                w = S;
            }
            var k = S;
            S = w;
            try {
              return R();
            } finally {
              S = k;
            }
          }),
          (u.unstable_requestPaint = function () {
            K = !0;
          }),
          (u.unstable_runWithPriority = function (R, w) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var k = S;
            S = R;
            try {
              return w();
            } finally {
              S = k;
            }
          }),
          (u.unstable_scheduleCallback = function (R, w, k) {
            var ht = u.unstable_now();
            switch (
              (typeof k == "object" && k !== null
                ? ((k = k.delay),
                  (k = typeof k == "number" && 0 < k ? ht + k : ht))
                : (k = ht),
              R)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = k + y),
              (R = {
                id: z++,
                callback: w,
                priorityLevel: R,
                startTime: k,
                expirationTime: y,
                sortIndex: -1,
              }),
              k > ht
                ? ((R.sortIndex = k),
                  s(b, R),
                  f(T) === null &&
                    R === f(b) &&
                    (Q ? (pt(Wt), (Wt = -1)) : (Q = !0), Yt(tt, k - ht)))
                : ((R.sortIndex = y),
                  s(T, R),
                  Y || q || ((Y = !0), wt || ((wt = !0), Bt()))),
              R
            );
          }),
          (u.unstable_shouldYield = Hl),
          (u.unstable_wrapCallback = function (R) {
            var w = S;
            return function () {
              var k = S;
              S = w;
              try {
                return R.apply(this, arguments);
              } finally {
                S = k;
              }
            };
          }));
      })(ms)),
    ms
  );
}
var Ud;
function ly() {
  return (Ud || ((Ud = 1), (hs.exports = ey())), hs.exports);
}
var ys = { exports: {} },
  $ = {};
var Cd;
function ay() {
  if (Cd) return $;
  Cd = 1;
  var u = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    f = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    A = Symbol.for("react.consumer"),
    U = Symbol.for("react.context"),
    D = Symbol.for("react.forward_ref"),
    T = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    z = Symbol.for("react.lazy"),
    O = Symbol.iterator;
  function S(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (O && y[O]) || y["@@iterator"]),
        typeof y == "function" ? y : null);
  }
  var q = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Y = Object.assign,
    Q = {};
  function K(y, N, B) {
    ((this.props = y),
      (this.context = N),
      (this.refs = Q),
      (this.updater = B || q));
  }
  ((K.prototype.isReactComponent = {}),
    (K.prototype.setState = function (y, N) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, y, N, "setState");
    }),
    (K.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    }));
  function ut() {}
  ut.prototype = K.prototype;
  function pt(y, N, B) {
    ((this.props = y),
      (this.context = N),
      (this.refs = Q),
      (this.updater = B || q));
  }
  var gt = (pt.prototype = new ut());
  ((gt.constructor = pt), Y(gt, K.prototype), (gt.isPureReactComponent = !0));
  var Ht = Array.isArray,
    tt = { H: null, A: null, T: null, S: null, V: null },
    wt = Object.prototype.hasOwnProperty;
  function Wt(y, N, B, H, L, nt) {
    return (
      (B = nt.ref),
      { $$typeof: u, type: y, key: N, ref: B !== void 0 ? B : null, props: nt }
    );
  }
  function $t(y, N) {
    return Wt(y.type, N, void 0, void 0, void 0, y.props);
  }
  function xe(y) {
    return typeof y == "object" && y !== null && y.$$typeof === u;
  }
  function Hl(y) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (B) {
        return N[B];
      })
    );
  }
  var De = /\/+/g;
  function Bt(y, N) {
    return typeof y == "object" && y !== null && y.key != null
      ? Hl("" + y.key)
      : N.toString(36);
  }
  function yl() {}
  function gl(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (
          (typeof y.status == "string"
            ? y.then(yl, yl)
            : ((y.status = "pending"),
              y.then(
                function (N) {
                  y.status === "pending" &&
                    ((y.status = "fulfilled"), (y.value = N));
                },
                function (N) {
                  y.status === "pending" &&
                    ((y.status = "rejected"), (y.reason = N));
                },
              )),
          y.status)
        ) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function Yt(y, N, B, H, L) {
    var nt = typeof y;
    (nt === "undefined" || nt === "boolean") && (y = null);
    var W = !1;
    if (y === null) W = !0;
    else
      switch (nt) {
        case "bigint":
        case "string":
        case "number":
          W = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case u:
            case s:
              W = !0;
              break;
            case z:
              return ((W = y._init), Yt(W(y._payload), N, B, H, L));
          }
      }
    if (W)
      return (
        (L = L(y)),
        (W = H === "" ? "." + Bt(y, 0) : H),
        Ht(L)
          ? ((B = ""),
            W != null && (B = W.replace(De, "$&/") + "/"),
            Yt(L, N, B, "", function (Le) {
              return Le;
            }))
          : L != null &&
            (xe(L) &&
              (L = $t(
                L,
                B +
                  (L.key == null || (y && y.key === L.key)
                    ? ""
                    : ("" + L.key).replace(De, "$&/") + "/") +
                  W,
              )),
            N.push(L)),
        1
      );
    W = 0;
    var Pt = H === "" ? "." : H + ":";
    if (Ht(y))
      for (var vt = 0; vt < y.length; vt++)
        ((H = y[vt]), (nt = Pt + Bt(H, vt)), (W += Yt(H, N, B, nt, L)));
    else if (((vt = S(y)), typeof vt == "function"))
      for (y = vt.call(y), vt = 0; !(H = y.next()).done; )
        ((H = H.value), (nt = Pt + Bt(H, vt++)), (W += Yt(H, N, B, nt, L)));
    else if (nt === "object") {
      if (typeof y.then == "function") return Yt(gl(y), N, B, H, L);
      throw (
        (N = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(y).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return W;
  }
  function R(y, N, B) {
    if (y == null) return y;
    var H = [],
      L = 0;
    return (
      Yt(y, H, "", "", function (nt) {
        return N.call(B, nt, L++);
      }),
      H
    );
  }
  function w(y) {
    if (y._status === -1) {
      var N = y._result;
      ((N = N()),
        N.then(
          function (B) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = B));
          },
          function (B) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = B));
          },
        ),
        y._status === -1 && ((y._status = 0), (y._result = N)));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var k =
    typeof reportError == "function"
      ? reportError
      : function (y) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var N = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof y == "object" &&
                y !== null &&
                typeof y.message == "string"
                  ? String(y.message)
                  : String(y),
              error: y,
            });
            if (!window.dispatchEvent(N)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", y);
            return;
          }
          console.error(y);
        };
  function ht() {}
  return (
    ($.Children = {
      map: R,
      forEach: function (y, N, B) {
        R(
          y,
          function () {
            N.apply(this, arguments);
          },
          B,
        );
      },
      count: function (y) {
        var N = 0;
        return (
          R(y, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (y) {
        return (
          R(y, function (N) {
            return N;
          }) || []
        );
      },
      only: function (y) {
        if (!xe(y))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return y;
      },
    }),
    ($.Component = K),
    ($.Fragment = f),
    ($.Profiler = m),
    ($.PureComponent = pt),
    ($.StrictMode = o),
    ($.Suspense = T),
    ($.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = tt),
    ($.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (y) {
        return tt.H.useMemoCache(y);
      },
    }),
    ($.cache = function (y) {
      return function () {
        return y.apply(null, arguments);
      };
    }),
    ($.cloneElement = function (y, N, B) {
      if (y == null)
        throw Error(
          "The argument must be a React element, but you passed " + y + ".",
        );
      var H = Y({}, y.props),
        L = y.key,
        nt = void 0;
      if (N != null)
        for (W in (N.ref !== void 0 && (nt = void 0),
        N.key !== void 0 && (L = "" + N.key),
        N))
          !wt.call(N, W) ||
            W === "key" ||
            W === "__self" ||
            W === "__source" ||
            (W === "ref" && N.ref === void 0) ||
            (H[W] = N[W]);
      var W = arguments.length - 2;
      if (W === 1) H.children = B;
      else if (1 < W) {
        for (var Pt = Array(W), vt = 0; vt < W; vt++)
          Pt[vt] = arguments[vt + 2];
        H.children = Pt;
      }
      return Wt(y.type, L, void 0, void 0, nt, H);
    }),
    ($.createContext = function (y) {
      return (
        (y = {
          $$typeof: U,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (y.Provider = y),
        (y.Consumer = { $$typeof: A, _context: y }),
        y
      );
    }),
    ($.createElement = function (y, N, B) {
      var H,
        L = {},
        nt = null;
      if (N != null)
        for (H in (N.key !== void 0 && (nt = "" + N.key), N))
          wt.call(N, H) &&
            H !== "key" &&
            H !== "__self" &&
            H !== "__source" &&
            (L[H] = N[H]);
      var W = arguments.length - 2;
      if (W === 1) L.children = B;
      else if (1 < W) {
        for (var Pt = Array(W), vt = 0; vt < W; vt++)
          Pt[vt] = arguments[vt + 2];
        L.children = Pt;
      }
      if (y && y.defaultProps)
        for (H in ((W = y.defaultProps), W)) L[H] === void 0 && (L[H] = W[H]);
      return Wt(y, nt, void 0, void 0, null, L);
    }),
    ($.createRef = function () {
      return { current: null };
    }),
    ($.forwardRef = function (y) {
      return { $$typeof: D, render: y };
    }),
    ($.isValidElement = xe),
    ($.lazy = function (y) {
      return { $$typeof: z, _payload: { _status: -1, _result: y }, _init: w };
    }),
    ($.memo = function (y, N) {
      return { $$typeof: b, type: y, compare: N === void 0 ? null : N };
    }),
    ($.startTransition = function (y) {
      var N = tt.T,
        B = {};
      tt.T = B;
      try {
        var H = y(),
          L = tt.S;
        (L !== null && L(B, H),
          typeof H == "object" &&
            H !== null &&
            typeof H.then == "function" &&
            H.then(ht, k));
      } catch (nt) {
        k(nt);
      } finally {
        tt.T = N;
      }
    }),
    ($.unstable_useCacheRefresh = function () {
      return tt.H.useCacheRefresh();
    }),
    ($.use = function (y) {
      return tt.H.use(y);
    }),
    ($.useActionState = function (y, N, B) {
      return tt.H.useActionState(y, N, B);
    }),
    ($.useCallback = function (y, N) {
      return tt.H.useCallback(y, N);
    }),
    ($.useContext = function (y) {
      return tt.H.useContext(y);
    }),
    ($.useDebugValue = function () {}),
    ($.useDeferredValue = function (y, N) {
      return tt.H.useDeferredValue(y, N);
    }),
    ($.useEffect = function (y, N, B) {
      var H = tt.H;
      if (typeof B == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return H.useEffect(y, N);
    }),
    ($.useId = function () {
      return tt.H.useId();
    }),
    ($.useImperativeHandle = function (y, N, B) {
      return tt.H.useImperativeHandle(y, N, B);
    }),
    ($.useInsertionEffect = function (y, N) {
      return tt.H.useInsertionEffect(y, N);
    }),
    ($.useLayoutEffect = function (y, N) {
      return tt.H.useLayoutEffect(y, N);
    }),
    ($.useMemo = function (y, N) {
      return tt.H.useMemo(y, N);
    }),
    ($.useOptimistic = function (y, N) {
      return tt.H.useOptimistic(y, N);
    }),
    ($.useReducer = function (y, N, B) {
      return tt.H.useReducer(y, N, B);
    }),
    ($.useRef = function (y) {
      return tt.H.useRef(y);
    }),
    ($.useState = function (y) {
      return tt.H.useState(y);
    }),
    ($.useSyncExternalStore = function (y, N, B) {
      return tt.H.useSyncExternalStore(y, N, B);
    }),
    ($.useTransition = function () {
      return tt.H.useTransition();
    }),
    ($.version = "19.1.0"),
    $
  );
}
var Nd;
function Vi() {
  return (Nd || ((Nd = 1), (ys.exports = ay())), ys.exports);
}
var gs = { exports: {} },
  Xt = {};
var qd;
function ny() {
  if (qd) return Xt;
  qd = 1;
  var u = Vi();
  function s(T) {
    var b = "https://react.dev/errors/" + T;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var z = 2; z < arguments.length; z++)
        b += "&args[]=" + encodeURIComponent(arguments[z]);
    }
    return (
      "Minified React error #" +
      T +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f() {}
  var o = {
      d: {
        f,
        r: function () {
          throw Error(s(522));
        },
        D: f,
        C: f,
        L: f,
        m: f,
        X: f,
        S: f,
        M: f,
      },
      p: 0,
      findDOMNode: null,
    },
    m = Symbol.for("react.portal");
  function A(T, b, z) {
    var O =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: m,
      key: O == null ? null : "" + O,
      children: T,
      containerInfo: b,
      implementation: z,
    };
  }
  var U = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function D(T, b) {
    if (T === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return (
    (Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Xt.createPortal = function (T, b) {
      var z =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11))
        throw Error(s(299));
      return A(T, b, null, z);
    }),
    (Xt.flushSync = function (T) {
      var b = U.T,
        z = o.p;
      try {
        if (((U.T = null), (o.p = 2), T)) return T();
      } finally {
        ((U.T = b), (o.p = z), o.d.f());
      }
    }),
    (Xt.preconnect = function (T, b) {
      typeof T == "string" &&
        (b
          ? ((b = b.crossOrigin),
            (b =
              typeof b == "string"
                ? b === "use-credentials"
                  ? b
                  : ""
                : void 0))
          : (b = null),
        o.d.C(T, b));
    }),
    (Xt.prefetchDNS = function (T) {
      typeof T == "string" && o.d.D(T);
    }),
    (Xt.preinit = function (T, b) {
      if (typeof T == "string" && b && typeof b.as == "string") {
        var z = b.as,
          O = D(z, b.crossOrigin),
          S = typeof b.integrity == "string" ? b.integrity : void 0,
          q = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        z === "style"
          ? o.d.S(T, typeof b.precedence == "string" ? b.precedence : void 0, {
              crossOrigin: O,
              integrity: S,
              fetchPriority: q,
            })
          : z === "script" &&
            o.d.X(T, {
              crossOrigin: O,
              integrity: S,
              fetchPriority: q,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
      }
    }),
    (Xt.preinitModule = function (T, b) {
      if (typeof T == "string")
        if (typeof b == "object" && b !== null) {
          if (b.as == null || b.as === "script") {
            var z = D(b.as, b.crossOrigin);
            o.d.M(T, {
              crossOrigin: z,
              integrity: typeof b.integrity == "string" ? b.integrity : void 0,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
          }
        } else b == null && o.d.M(T);
    }),
    (Xt.preload = function (T, b) {
      if (
        typeof T == "string" &&
        typeof b == "object" &&
        b !== null &&
        typeof b.as == "string"
      ) {
        var z = b.as,
          O = D(z, b.crossOrigin);
        o.d.L(T, z, {
          crossOrigin: O,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          type: typeof b.type == "string" ? b.type : void 0,
          fetchPriority:
            typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
          referrerPolicy:
            typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
          imageSrcSet:
            typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
          imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
          media: typeof b.media == "string" ? b.media : void 0,
        });
      }
    }),
    (Xt.preloadModule = function (T, b) {
      if (typeof T == "string")
        if (b) {
          var z = D(b.as, b.crossOrigin);
          o.d.m(T, {
            as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
            crossOrigin: z,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          });
        } else o.d.m(T);
    }),
    (Xt.requestFormReset = function (T) {
      o.d.r(T);
    }),
    (Xt.unstable_batchedUpdates = function (T, b) {
      return T(b);
    }),
    (Xt.useFormState = function (T, b, z) {
      return U.H.useFormState(T, b, z);
    }),
    (Xt.useFormStatus = function () {
      return U.H.useHostTransitionStatus();
    }),
    (Xt.version = "19.1.0"),
    Xt
  );
}
var Hd;
function iy() {
  if (Hd) return gs.exports;
  Hd = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (s) {
        console.error(s);
      }
  }
  return (u(), (gs.exports = ny()), gs.exports);
}
var wd;
function uy() {
  if (wd) return xn;
  wd = 1;
  var u = ly(),
    s = Vi(),
    f = iy();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function m(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function A(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function U(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function D(t) {
    if (A(t) !== t) throw Error(o(188));
  }
  function T(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = A(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return (D(n), t);
          if (i === a) return (D(n), e);
          i = i.sibling;
        }
        throw Error(o(188));
      }
      if (l.return !== a.return) ((l = n), (a = i));
      else {
        for (var c = !1, r = n.child; r; ) {
          if (r === l) {
            ((c = !0), (l = n), (a = i));
            break;
          }
          if (r === a) {
            ((c = !0), (a = n), (l = i));
            break;
          }
          r = r.sibling;
        }
        if (!c) {
          for (r = i.child; r; ) {
            if (r === l) {
              ((c = !0), (l = i), (a = n));
              break;
            }
            if (r === a) {
              ((c = !0), (a = i), (l = n));
              break;
            }
            r = r.sibling;
          }
          if (!c) throw Error(o(189));
        }
      }
      if (l.alternate !== a) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? t : e;
  }
  function b(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = b(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var z = Object.assign,
    O = Symbol.for("react.element"),
    S = Symbol.for("react.transitional.element"),
    q = Symbol.for("react.portal"),
    Y = Symbol.for("react.fragment"),
    Q = Symbol.for("react.strict_mode"),
    K = Symbol.for("react.profiler"),
    ut = Symbol.for("react.provider"),
    pt = Symbol.for("react.consumer"),
    gt = Symbol.for("react.context"),
    Ht = Symbol.for("react.forward_ref"),
    tt = Symbol.for("react.suspense"),
    wt = Symbol.for("react.suspense_list"),
    Wt = Symbol.for("react.memo"),
    $t = Symbol.for("react.lazy"),
    xe = Symbol.for("react.activity"),
    Hl = Symbol.for("react.memo_cache_sentinel"),
    De = Symbol.iterator;
  function Bt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (De && t[De]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var yl = Symbol.for("react.client.reference");
  function gl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === yl ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case Y:
        return "Fragment";
      case K:
        return "Profiler";
      case Q:
        return "StrictMode";
      case tt:
        return "Suspense";
      case wt:
        return "SuspenseList";
      case xe:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case q:
          return "Portal";
        case gt:
          return (t.displayName || "Context") + ".Provider";
        case pt:
          return (t._context.displayName || "Context") + ".Consumer";
        case Ht:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Wt:
          return (
            (e = t.displayName || null),
            e !== null ? e : gl(t.type) || "Memo"
          );
        case $t:
          ((e = t._payload), (t = t._init));
          try {
            return gl(t(e));
          } catch {}
      }
    return null;
  }
  var Yt = Array.isArray,
    R = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    w = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = { pending: !1, data: null, method: null, action: null },
    ht = [],
    y = -1;
  function N(t) {
    return { current: t };
  }
  function B(t) {
    0 > y || ((t.current = ht[y]), (ht[y] = null), y--);
  }
  function H(t, e) {
    (y++, (ht[y] = t.current), (t.current = e));
  }
  var L = N(null),
    nt = N(null),
    W = N(null),
    Pt = N(null);
  function vt(t, e) {
    switch ((H(W, e), H(nt, t), H(L, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? ad(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = ad(e)), (t = nd(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (B(L), H(L, t));
  }
  function Le() {
    (B(L), B(nt), B(W));
  }
  function Wi(t) {
    t.memoizedState !== null && H(Pt, t);
    var e = L.current,
      l = nd(e, t.type);
    e !== l && (H(nt, t), H(L, l));
  }
  function zn(t) {
    (nt.current === t && (B(L), B(nt)),
      Pt.current === t && (B(Pt), (yn._currentValue = k)));
  }
  var $i = Object.prototype.hasOwnProperty,
    Pi = u.unstable_scheduleCallback,
    Ii = u.unstable_cancelCallback,
    Mh = u.unstable_shouldYield,
    Rh = u.unstable_requestPaint,
    je = u.unstable_now,
    _h = u.unstable_getCurrentPriorityLevel,
    qs = u.unstable_ImmediatePriority,
    Hs = u.unstable_UserBlockingPriority,
    On = u.unstable_NormalPriority,
    Uh = u.unstable_LowPriority,
    ws = u.unstable_IdlePriority,
    Ch = u.log,
    Nh = u.unstable_setDisableYieldValue,
    ja = null,
    It = null;
  function Ve(t) {
    if (
      (typeof Ch == "function" && Nh(t),
      It && typeof It.setStrictMode == "function")
    )
      try {
        It.setStrictMode(ja, t);
      } catch {}
  }
  var te = Math.clz32 ? Math.clz32 : wh,
    qh = Math.log,
    Hh = Math.LN2;
  function wh(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((qh(t) / Hh) | 0)) | 0);
  }
  var Dn = 256,
    Mn = 4194304;
  function vl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Rn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      i = t.suspendedLanes,
      c = t.pingedLanes;
    t = t.warmLanes;
    var r = a & 134217727;
    return (
      r !== 0
        ? ((a = r & ~i),
          a !== 0
            ? (n = vl(a))
            : ((c &= r),
              c !== 0
                ? (n = vl(c))
                : l || ((l = r & ~t), l !== 0 && (n = vl(l)))))
        : ((r = a & ~i),
          r !== 0
            ? (n = vl(r))
            : c !== 0
              ? (n = vl(c))
              : l || ((l = a & ~t), l !== 0 && (n = vl(l)))),
      n === 0
        ? 0
        : e !== 0 &&
            e !== n &&
            (e & i) === 0 &&
            ((i = n & -n),
            (l = e & -e),
            i >= l || (i === 32 && (l & 4194048) !== 0))
          ? e
          : n
    );
  }
  function Ta(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Bh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Bs() {
    var t = Dn;
    return ((Dn <<= 1), (Dn & 4194048) === 0 && (Dn = 256), t);
  }
  function Ys() {
    var t = Mn;
    return ((Mn <<= 1), (Mn & 62914560) === 0 && (Mn = 4194304), t);
  }
  function tu(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ea(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Yh(t, e, l, a, n, i) {
    var c = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var r = t.entanglements,
      h = t.expirationTimes,
      x = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var M = 31 - te(l),
        C = 1 << M;
      ((r[M] = 0), (h[M] = -1));
      var j = x[M];
      if (j !== null)
        for (x[M] = null, M = 0; M < j.length; M++) {
          var E = j[M];
          E !== null && (E.lane &= -536870913);
        }
      l &= ~C;
    }
    (a !== 0 && Qs(t, a, 0),
      i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(c & ~e)));
  }
  function Qs(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - te(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194090)));
  }
  function Gs(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - te(l),
        n = 1 << a;
      ((n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n));
    }
  }
  function eu(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function lu(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Xs() {
    var t = w.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Td(t.type));
  }
  function Qh(t, e) {
    var l = w.p;
    try {
      return ((w.p = t), e());
    } finally {
      w.p = l;
    }
  }
  var Ke = Math.random().toString(36).slice(2),
    Qt = "__reactFiber$" + Ke,
    Vt = "__reactProps$" + Ke,
    wl = "__reactContainer$" + Ke,
    au = "__reactEvents$" + Ke,
    Gh = "__reactListeners$" + Ke,
    Xh = "__reactHandles$" + Ke,
    Zs = "__reactResources$" + Ke,
    Aa = "__reactMarker$" + Ke;
  function nu(t) {
    (delete t[Qt], delete t[Vt], delete t[au], delete t[Gh], delete t[Xh]);
  }
  function Bl(t) {
    var e = t[Qt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[wl] || l[Qt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = sd(t); t !== null; ) {
            if ((l = t[Qt])) return l;
            t = sd(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function Yl(t) {
    if ((t = t[Qt] || t[wl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function za(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Ql(t) {
    var e = t[Zs];
    return (
      e ||
        (e = t[Zs] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Mt(t) {
    t[Aa] = !0;
  }
  var Ls = new Set(),
    Vs = {};
  function bl(t, e) {
    (Gl(t, e), Gl(t + "Capture", e));
  }
  function Gl(t, e) {
    for (Vs[t] = e, t = 0; t < e.length; t++) Ls.add(e[t]);
  }
  var Zh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ks = {},
    Js = {};
  function Lh(t) {
    return $i.call(Js, t)
      ? !0
      : $i.call(Ks, t)
        ? !1
        : Zh.test(t)
          ? (Js[t] = !0)
          : ((Ks[t] = !0), !1);
  }
  function _n(t, e, l) {
    if (Lh(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Un(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Me(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  var iu, ks;
  function Xl(t) {
    if (iu === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((iu = (e && e[1]) || ""),
          (ks =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      iu +
      t +
      ks
    );
  }
  var uu = !1;
  function cu(t, e) {
    if (!t || uu) return "";
    uu = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var C = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(C.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(C, []);
                } catch (E) {
                  var j = E;
                }
                Reflect.construct(t, [], C);
              } else {
                try {
                  C.call();
                } catch (E) {
                  j = E;
                }
                t.call(C.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (E) {
                j = E;
              }
              (C = t()) &&
                typeof C.catch == "function" &&
                C.catch(function () {});
            }
          } catch (E) {
            if (E && j && typeof E.stack == "string") return [E.stack, j.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = a.DetermineComponentFrameRoot(),
        c = i[0],
        r = i[1];
      if (c && r) {
        var h = c.split(`
`),
          x = r.split(`
`);
        for (
          n = a = 0;
          a < h.length && !h[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < x.length && !x[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === h.length || n === x.length)
          for (
            a = h.length - 1, n = x.length - 1;
            1 <= a && 0 <= n && h[a] !== x[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== x[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || h[a] !== x[n])) {
                  var M =
                    `
` + h[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      M.includes("<anonymous>") &&
                      (M = M.replace("<anonymous>", t.displayName)),
                    M
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((uu = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : "") ? Xl(l) : "";
  }
  function Vh(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Xl(t.type);
      case 16:
        return Xl("Lazy");
      case 13:
        return Xl("Suspense");
      case 19:
        return Xl("SuspenseList");
      case 0:
      case 15:
        return cu(t.type, !1);
      case 11:
        return cu(t.type.render, !1);
      case 1:
        return cu(t.type, !0);
      case 31:
        return Xl("Activity");
      default:
        return "";
    }
  }
  function Fs(t) {
    try {
      var e = "";
      do ((e += Vh(t)), (t = t.return));
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function se(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Ws(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Kh(t) {
    var e = Ws(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        i = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (c) {
            ((a = "" + c), i.call(this, c));
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Cn(t) {
    t._valueTracker || (t._valueTracker = Kh(t));
  }
  function $s(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = Ws(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Nn(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Jh = /[\n"\\]/g;
  function re(t) {
    return t.replace(Jh, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function su(t, e, l, a, n, i, c, r) {
    ((t.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (t.type = c)
        : t.removeAttribute("type"),
      e != null
        ? c === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + se(e))
          : t.value !== "" + se(e) && (t.value = "" + se(e))
        : (c !== "submit" && c !== "reset") || t.removeAttribute("value"),
      e != null
        ? ru(t, c, se(e))
        : l != null
          ? ru(t, c, se(l))
          : a != null && t.removeAttribute("value"),
      n == null && i != null && (t.defaultChecked = !!i),
      n != null &&
        (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      r != null &&
      typeof r != "function" &&
      typeof r != "symbol" &&
      typeof r != "boolean"
        ? (t.name = "" + se(r))
        : t.removeAttribute("name"));
  }
  function Ps(t, e, l, a, n, i, c, r) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.type = i),
      e != null || l != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || e != null)) return;
      ((l = l != null ? "" + se(l) : ""),
        (e = e != null ? "" + se(e) : l),
        r || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = r ? t.checked : !!a),
      (t.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.name = c));
  }
  function ru(t, e, l) {
    (e === "number" && Nn(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function Zl(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        ((n = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0));
    } else {
      for (l = "" + se(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          ((t[n].selected = !0), a && (t[n].defaultSelected = !0));
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Is(t, e, l) {
    if (
      e != null &&
      ((e = "" + se(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + se(l) : "";
  }
  function tr(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (Yt(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (e = l));
    }
    ((l = se(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a));
  }
  function Ll(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var kh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function er(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, l)
        : typeof l != "number" || l === 0 || kh.has(e)
          ? e === "float"
            ? (t.cssFloat = l)
            : (t[e] = ("" + l).trim())
          : (t[e] = l + "px");
  }
  function lr(t, e, l) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var n in e)
        ((a = e[n]), e.hasOwnProperty(n) && l[n] !== a && er(t, n, a));
    } else for (var i in e) e.hasOwnProperty(i) && er(t, i, e[i]);
  }
  function fu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fh = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Wh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function qn(t) {
    return Wh.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var ou = null;
  function du(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Vl = null,
    Kl = null;
  function ar(t) {
    var e = Yl(t);
    if (e && (t = e.stateNode)) {
      var l = t[Vt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (su(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + re("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Vt] || null;
                if (!n) throw Error(o(90));
                su(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (e = 0; e < l.length; e++)
              ((a = l[e]), a.form === t.form && $s(a));
          }
          break t;
        case "textarea":
          Is(t, l.value, l.defaultValue);
          break t;
        case "select":
          ((e = l.value), e != null && Zl(t, !!l.multiple, e, !1));
      }
    }
  }
  var hu = !1;
  function nr(t, e, l) {
    if (hu) return t(e, l);
    hu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((hu = !1),
        (Vl !== null || Kl !== null) &&
          (Si(), Vl && ((e = Vl), (t = Kl), (Kl = Vl = null), ar(e), t)))
      )
        for (e = 0; e < t.length; e++) ar(t[e]);
    }
  }
  function Oa(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Vt] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
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
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(o(231, e, typeof l));
    return l;
  }
  var Re = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    mu = !1;
  if (Re)
    try {
      var Da = {};
      (Object.defineProperty(Da, "passive", {
        get: function () {
          mu = !0;
        },
      }),
        window.addEventListener("test", Da, Da),
        window.removeEventListener("test", Da, Da));
    } catch {
      mu = !1;
    }
  var Je = null,
    yu = null,
    Hn = null;
  function ir() {
    if (Hn) return Hn;
    var t,
      e = yu,
      l = e.length,
      a,
      n = "value" in Je ? Je.value : Je.textContent,
      i = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var c = l - t;
    for (a = 1; a <= c && e[l - a] === n[i - a]; a++);
    return (Hn = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function wn(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Bn() {
    return !0;
  }
  function ur() {
    return !1;
  }
  function Kt(t) {
    function e(l, a, n, i, c) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = c),
        (this.currentTarget = null));
      for (var r in t)
        t.hasOwnProperty(r) && ((l = t[r]), (this[r] = l ? l(i) : i[r]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Bn
          : ur),
        (this.isPropagationStopped = ur),
        this
      );
    }
    return (
      z(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Bn));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Bn));
        },
        persist: function () {},
        isPersistent: Bn,
      }),
      e
    );
  }
  var pl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Yn = Kt(pl),
    Ma = z({}, pl, { view: 0, detail: 0 }),
    $h = Kt(Ma),
    gu,
    vu,
    Ra,
    Qn = z({}, Ma, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: pu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ra &&
              (Ra && t.type === "mousemove"
                ? ((gu = t.screenX - Ra.screenX), (vu = t.screenY - Ra.screenY))
                : (vu = gu = 0),
              (Ra = t)),
            gu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : vu;
      },
    }),
    cr = Kt(Qn),
    Ph = z({}, Qn, { dataTransfer: 0 }),
    Ih = Kt(Ph),
    t0 = z({}, Ma, { relatedTarget: 0 }),
    bu = Kt(t0),
    e0 = z({}, pl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    l0 = Kt(e0),
    a0 = z({}, pl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    n0 = Kt(a0),
    i0 = z({}, pl, { data: 0 }),
    sr = Kt(i0),
    u0 = {
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
      MozPrintableKey: "Unidentified",
    },
    c0 = {
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
      224: "Meta",
    },
    s0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function r0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = s0[t])
        ? !!e[t]
        : !1;
  }
  function pu() {
    return r0;
  }
  var f0 = z({}, Ma, {
      key: function (t) {
        if (t.key) {
          var e = u0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = wn(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? c0[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pu,
      charCode: function (t) {
        return t.type === "keypress" ? wn(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? wn(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    o0 = Kt(f0),
    d0 = z({}, Qn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    rr = Kt(d0),
    h0 = z({}, Ma, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pu,
    }),
    m0 = Kt(h0),
    y0 = z({}, pl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    g0 = Kt(y0),
    v0 = z({}, Qn, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    b0 = Kt(v0),
    p0 = z({}, pl, { newState: 0, oldState: 0 }),
    S0 = Kt(p0),
    x0 = [9, 13, 27, 32],
    Su = Re && "CompositionEvent" in window,
    _a = null;
  Re && "documentMode" in document && (_a = document.documentMode);
  var j0 = Re && "TextEvent" in window && !_a,
    fr = Re && (!Su || (_a && 8 < _a && 11 >= _a)),
    or = " ",
    dr = !1;
  function hr(t, e) {
    switch (t) {
      case "keyup":
        return x0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function mr(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var Jl = !1;
  function T0(t, e) {
    switch (t) {
      case "compositionend":
        return mr(e);
      case "keypress":
        return e.which !== 32 ? null : ((dr = !0), or);
      case "textInput":
        return ((t = e.data), t === or && dr ? null : t);
      default:
        return null;
    }
  }
  function E0(t, e) {
    if (Jl)
      return t === "compositionend" || (!Su && hr(t, e))
        ? ((t = ir()), (Hn = yu = Je = null), (Jl = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return fr && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var A0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function yr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!A0[t.type] : e === "textarea";
  }
  function gr(t, e, l, a) {
    (Vl ? (Kl ? Kl.push(a) : (Kl = [a])) : (Vl = a),
      (e = zi(e, "onChange")),
      0 < e.length &&
        ((l = new Yn("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e })));
  }
  var Ua = null,
    Ca = null;
  function z0(t) {
    Po(t, 0);
  }
  function Gn(t) {
    var e = za(t);
    if ($s(e)) return t;
  }
  function vr(t, e) {
    if (t === "change") return e;
  }
  var br = !1;
  if (Re) {
    var xu;
    if (Re) {
      var ju = "oninput" in document;
      if (!ju) {
        var pr = document.createElement("div");
        (pr.setAttribute("oninput", "return;"),
          (ju = typeof pr.oninput == "function"));
      }
      xu = ju;
    } else xu = !1;
    br = xu && (!document.documentMode || 9 < document.documentMode);
  }
  function Sr() {
    Ua && (Ua.detachEvent("onpropertychange", xr), (Ca = Ua = null));
  }
  function xr(t) {
    if (t.propertyName === "value" && Gn(Ca)) {
      var e = [];
      (gr(e, Ca, t, du(t)), nr(z0, e));
    }
  }
  function O0(t, e, l) {
    t === "focusin"
      ? (Sr(), (Ua = e), (Ca = l), Ua.attachEvent("onpropertychange", xr))
      : t === "focusout" && Sr();
  }
  function D0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Gn(Ca);
  }
  function M0(t, e) {
    if (t === "click") return Gn(e);
  }
  function R0(t, e) {
    if (t === "input" || t === "change") return Gn(e);
  }
  function _0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ee = typeof Object.is == "function" ? Object.is : _0;
  function Na(t, e) {
    if (ee(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!$i.call(e, n) || !ee(t[n], e[n])) return !1;
    }
    return !0;
  }
  function jr(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Tr(t, e) {
    var l = jr(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = jr(l);
    }
  }
  function Er(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Er(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Ar(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Nn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Nn(t.document);
    }
    return e;
  }
  function Tu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var U0 = Re && "documentMode" in document && 11 >= document.documentMode,
    kl = null,
    Eu = null,
    qa = null,
    Au = !1;
  function zr(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Au ||
      kl == null ||
      kl !== Nn(a) ||
      ((a = kl),
      "selectionStart" in a && Tu(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (qa && Na(qa, a)) ||
        ((qa = a),
        (a = zi(Eu, "onSelect")),
        0 < a.length &&
          ((e = new Yn("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = kl))));
  }
  function Sl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var Fl = {
      animationend: Sl("Animation", "AnimationEnd"),
      animationiteration: Sl("Animation", "AnimationIteration"),
      animationstart: Sl("Animation", "AnimationStart"),
      transitionrun: Sl("Transition", "TransitionRun"),
      transitionstart: Sl("Transition", "TransitionStart"),
      transitioncancel: Sl("Transition", "TransitionCancel"),
      transitionend: Sl("Transition", "TransitionEnd"),
    },
    zu = {},
    Or = {};
  Re &&
    ((Or = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Fl.animationend.animation,
      delete Fl.animationiteration.animation,
      delete Fl.animationstart.animation),
    "TransitionEvent" in window || delete Fl.transitionend.transition);
  function xl(t) {
    if (zu[t]) return zu[t];
    if (!Fl[t]) return t;
    var e = Fl[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Or) return (zu[t] = e[l]);
    return t;
  }
  var Dr = xl("animationend"),
    Mr = xl("animationiteration"),
    Rr = xl("animationstart"),
    C0 = xl("transitionrun"),
    N0 = xl("transitionstart"),
    q0 = xl("transitioncancel"),
    _r = xl("transitionend"),
    Ur = new Map(),
    Ou =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Ou.push("scrollEnd");
  function ve(t, e) {
    (Ur.set(t, e), bl(e, [t]));
  }
  var Cr = new WeakMap();
  function fe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Cr.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: Fs(e) }), Cr.set(t, e), e);
    }
    return { value: t, source: e, stack: Fs(e) };
  }
  var oe = [],
    Wl = 0,
    Du = 0;
  function Xn() {
    for (var t = Wl, e = (Du = Wl = 0); e < t; ) {
      var l = oe[e];
      oe[e++] = null;
      var a = oe[e];
      oe[e++] = null;
      var n = oe[e];
      oe[e++] = null;
      var i = oe[e];
      if (((oe[e++] = null), a !== null && n !== null)) {
        var c = a.pending;
        (c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (a.pending = n));
      }
      i !== 0 && Nr(l, n, i);
    }
  }
  function Zn(t, e, l, a) {
    ((oe[Wl++] = t),
      (oe[Wl++] = e),
      (oe[Wl++] = l),
      (oe[Wl++] = a),
      (Du |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function Mu(t, e, l, a) {
    return (Zn(t, e, l, a), Ln(t));
  }
  function $l(t, e) {
    return (Zn(t, null, null, e), Ln(t));
  }
  function Nr(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = t.return; i !== null; )
      ((i.childLanes |= l),
        (a = i.alternate),
        a !== null && (a.childLanes |= l),
        i.tag === 22 &&
          ((t = i.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = i),
        (i = i.return));
    return t.tag === 3
      ? ((i = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - te(l)),
          (t = i.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        i)
      : null;
  }
  function Ln(t) {
    if (50 < cn) throw ((cn = 0), (qc = null), Error(o(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Pl = {};
  function H0(t, e, l, a) {
    ((this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function le(t, e, l, a) {
    return new H0(t, e, l, a);
  }
  function Ru(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function _e(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = le(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function qr(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Vn(t, e, l, a, n, i) {
    var c = 0;
    if (((a = t), typeof t == "function")) Ru(t) && (c = 1);
    else if (typeof t == "string")
      c = Bm(t, l, L.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case xe:
          return (
            (t = le(31, l, e, n)),
            (t.elementType = xe),
            (t.lanes = i),
            t
          );
        case Y:
          return jl(l.children, n, i, e);
        case Q:
          ((c = 8), (n |= 24));
          break;
        case K:
          return (
            (t = le(12, l, e, n | 2)),
            (t.elementType = K),
            (t.lanes = i),
            t
          );
        case tt:
          return (
            (t = le(13, l, e, n)),
            (t.elementType = tt),
            (t.lanes = i),
            t
          );
        case wt:
          return (
            (t = le(19, l, e, n)),
            (t.elementType = wt),
            (t.lanes = i),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case ut:
              case gt:
                c = 10;
                break t;
              case pt:
                c = 9;
                break t;
              case Ht:
                c = 11;
                break t;
              case Wt:
                c = 14;
                break t;
              case $t:
                ((c = 16), (a = null));
                break t;
            }
          ((c = 29),
            (l = Error(o(130, t === null ? "null" : typeof t, ""))),
            (a = null));
      }
    return (
      (e = le(c, l, e, n)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = i),
      e
    );
  }
  function jl(t, e, l, a) {
    return ((t = le(7, t, a, e)), (t.lanes = l), t);
  }
  function _u(t, e, l) {
    return ((t = le(6, t, null, e)), (t.lanes = l), t);
  }
  function Uu(t, e, l) {
    return (
      (e = le(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Il = [],
    ta = 0,
    Kn = null,
    Jn = 0,
    de = [],
    he = 0,
    Tl = null,
    Ue = 1,
    Ce = "";
  function El(t, e) {
    ((Il[ta++] = Jn), (Il[ta++] = Kn), (Kn = t), (Jn = e));
  }
  function Hr(t, e, l) {
    ((de[he++] = Ue), (de[he++] = Ce), (de[he++] = Tl), (Tl = t));
    var a = Ue;
    t = Ce;
    var n = 32 - te(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var i = 32 - te(e) + n;
    if (30 < i) {
      var c = n - (n % 5);
      ((i = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (Ue = (1 << (32 - te(e) + n)) | (l << n) | a),
        (Ce = i + t));
    } else ((Ue = (1 << i) | (l << n) | a), (Ce = t));
  }
  function Cu(t) {
    t.return !== null && (El(t, 1), Hr(t, 1, 0));
  }
  function Nu(t) {
    for (; t === Kn; )
      ((Kn = Il[--ta]), (Il[ta] = null), (Jn = Il[--ta]), (Il[ta] = null));
    for (; t === Tl; )
      ((Tl = de[--he]),
        (de[he] = null),
        (Ce = de[--he]),
        (de[he] = null),
        (Ue = de[--he]),
        (de[he] = null));
  }
  var Zt = null,
    xt = null,
    ct = !1,
    Al = null,
    Te = !1,
    qu = Error(o(519));
  function zl(t) {
    var e = Error(o(418, ""));
    throw (Ba(fe(e, t)), qu);
  }
  function wr(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Qt] = t), (e[Vt] = a), l)) {
      case "dialog":
        (lt("cancel", e), lt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        lt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < rn.length; l++) lt(rn[l], e);
        break;
      case "source":
        lt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (lt("error", e), lt("load", e));
        break;
      case "details":
        lt("toggle", e);
        break;
      case "input":
        (lt("invalid", e),
          Ps(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ),
          Cn(e));
        break;
      case "select":
        lt("invalid", e);
        break;
      case "textarea":
        (lt("invalid", e), tr(e, a.value, a.defaultValue, a.children), Cn(e));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      ld(e.textContent, l)
        ? (a.popover != null && (lt("beforetoggle", e), lt("toggle", e)),
          a.onScroll != null && lt("scroll", e),
          a.onScrollEnd != null && lt("scrollend", e),
          a.onClick != null && (e.onclick = Oi),
          (e = !0))
        : (e = !1),
      e || zl(t));
  }
  function Br(t) {
    for (Zt = t.return; Zt; )
      switch (Zt.tag) {
        case 5:
        case 13:
          Te = !1;
          return;
        case 27:
        case 3:
          Te = !0;
          return;
        default:
          Zt = Zt.return;
      }
  }
  function Ha(t) {
    if (t !== Zt) return !1;
    if (!ct) return (Br(t), (ct = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || $c(t.type, t.memoizedProps))),
        (l = !l)),
      l && xt && zl(t),
      Br(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                xt = pe(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        xt = null;
      }
    } else
      e === 27
        ? ((e = xt), rl(t.type) ? ((t = es), (es = null), (xt = t)) : (xt = e))
        : (xt = Zt ? pe(t.stateNode.nextSibling) : null);
    return !0;
  }
  function wa() {
    ((xt = Zt = null), (ct = !1));
  }
  function Yr() {
    var t = Al;
    return (
      t !== null &&
        (Ft === null ? (Ft = t) : Ft.push.apply(Ft, t), (Al = null)),
      t
    );
  }
  function Ba(t) {
    Al === null ? (Al = [t]) : Al.push(t);
  }
  var Hu = N(null),
    Ol = null,
    Ne = null;
  function ke(t, e, l) {
    (H(Hu, e._currentValue), (e._currentValue = l));
  }
  function qe(t) {
    ((t._currentValue = Hu.current), B(Hu));
  }
  function wu(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Bu(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var c = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var r = i;
          i = n;
          for (var h = 0; h < e.length; h++)
            if (r.context === e[h]) {
              ((i.lanes |= l),
                (r = i.alternate),
                r !== null && (r.lanes |= l),
                wu(i.return, l, t),
                a || (c = null));
              break t;
            }
          i = r.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(o(341));
        ((c.lanes |= l),
          (i = c.alternate),
          i !== null && (i.lanes |= l),
          wu(c, l, t),
          (c = null));
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (((n = c.sibling), n !== null)) {
            ((n.return = c.return), (c = n));
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function Ya(t, e, l, a) {
    t = null;
    for (var n = e, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(o(387));
        if (((c = c.memoizedProps), c !== null)) {
          var r = n.type;
          ee(n.pendingProps.value, c.value) ||
            (t !== null ? t.push(r) : (t = [r]));
        }
      } else if (n === Pt.current) {
        if (((c = n.alternate), c === null)) throw Error(o(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(yn) : (t = [yn]));
      }
      n = n.return;
    }
    (t !== null && Bu(e, t, l, a), (e.flags |= 262144));
  }
  function kn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ee(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Dl(t) {
    ((Ol = t),
      (Ne = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Gt(t) {
    return Qr(Ol, t);
  }
  function Fn(t, e) {
    return (Ol === null && Dl(t), Qr(t, e));
  }
  function Qr(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Ne === null)) {
      if (t === null) throw Error(o(308));
      ((Ne = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else Ne = Ne.next = e;
    return l;
  }
  var w0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                }));
            };
          },
    B0 = u.unstable_scheduleCallback,
    Y0 = u.unstable_NormalPriority,
    Ot = {
      $$typeof: gt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Yu() {
    return { controller: new w0(), data: new Map(), refCount: 0 };
  }
  function Qa(t) {
    (t.refCount--,
      t.refCount === 0 &&
        B0(Y0, function () {
          t.controller.abort();
        }));
  }
  var Ga = null,
    Qu = 0,
    ea = 0,
    la = null;
  function Q0(t, e) {
    if (Ga === null) {
      var l = (Ga = []);
      ((Qu = 0),
        (ea = Xc()),
        (la = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (Qu++, e.then(Gr, Gr), e);
  }
  function Gr() {
    if (--Qu === 0 && Ga !== null) {
      la !== null && (la.status = "fulfilled");
      var t = Ga;
      ((Ga = null), (ea = 0), (la = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function G0(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = "fulfilled"), (a.value = e));
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var Xr = R.S;
  R.S = function (t, e) {
    (typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Q0(t, e),
      Xr !== null && Xr(t, e));
  };
  var Ml = N(null);
  function Gu() {
    var t = Ml.current;
    return t !== null ? t : yt.pooledCache;
  }
  function Wn(t, e) {
    e === null ? H(Ml, Ml.current) : H(Ml, e.pool);
  }
  function Zr() {
    var t = Gu();
    return t === null ? null : { parent: Ot._currentValue, pool: t };
  }
  var Xa = Error(o(460)),
    Lr = Error(o(474)),
    $n = Error(o(542)),
    Xu = { then: function () {} };
  function Vr(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function Pn() {}
  function Kr(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Pn, Pn), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), kr(t), t);
      default:
        if (typeof e.status == "string") e.then(Pn, Pn);
        else {
          if (((t = yt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), kr(t), t);
        }
        throw ((Za = e), Xa);
    }
  }
  var Za = null;
  function Jr() {
    if (Za === null) throw Error(o(459));
    var t = Za;
    return ((Za = null), t);
  }
  function kr(t) {
    if (t === Xa || t === $n) throw Error(o(483));
  }
  var Fe = !1;
  function Zu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Lu(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function We(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function $e(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (st & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = Ln(t)),
        Nr(t, null, l),
        e
      );
    }
    return (Zn(t, a, e, l), Ln(t));
  }
  function La(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), Gs(t, l));
    }
  }
  function Vu(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (i === null ? (n = i = c) : (i = i.next = c), (l = l.next));
        } while (l !== null);
        i === null ? (n = i = e) : (i = i.next = e);
      } else n = i = e;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l));
      return;
    }
    ((t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e));
  }
  var Ku = !1;
  function Va() {
    if (Ku) {
      var t = la;
      if (t !== null) throw t;
    }
  }
  function Ka(t, e, l, a) {
    Ku = !1;
    var n = t.updateQueue;
    Fe = !1;
    var i = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var h = r,
        x = h.next;
      ((h.next = null), c === null ? (i = x) : (c.next = x), (c = h));
      var M = t.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (r = M.lastBaseUpdate),
        r !== c &&
          (r === null ? (M.firstBaseUpdate = x) : (r.next = x),
          (M.lastBaseUpdate = h)));
    }
    if (i !== null) {
      var C = n.baseState;
      ((c = 0), (M = x = h = null), (r = i));
      do {
        var j = r.lane & -536870913,
          E = j !== r.lane;
        if (E ? (at & j) === j : (a & j) === j) {
          (j !== 0 && j === ea && (Ku = !0),
            M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  tag: r.tag,
                  payload: r.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var F = t,
              V = r;
            j = e;
            var dt = l;
            switch (V.tag) {
              case 1:
                if (((F = V.payload), typeof F == "function")) {
                  C = F.call(dt, C, j);
                  break t;
                }
                C = F;
                break t;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = V.payload),
                  (j = typeof F == "function" ? F.call(dt, C, j) : F),
                  j == null)
                )
                  break t;
                C = z({}, C, j);
                break t;
              case 2:
                Fe = !0;
            }
          }
          ((j = r.callback),
            j !== null &&
              ((t.flags |= 64),
              E && (t.flags |= 8192),
              (E = n.callbacks),
              E === null ? (n.callbacks = [j]) : E.push(j)));
        } else
          ((E = {
            lane: j,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          }),
            M === null ? ((x = M = E), (h = C)) : (M = M.next = E),
            (c |= j));
        if (((r = r.next), r === null)) {
          if (((r = n.shared.pending), r === null)) break;
          ((E = r),
            (r = E.next),
            (E.next = null),
            (n.lastBaseUpdate = E),
            (n.shared.pending = null));
        }
      } while (!0);
      (M === null && (h = C),
        (n.baseState = h),
        (n.firstBaseUpdate = x),
        (n.lastBaseUpdate = M),
        i === null && (n.shared.lanes = 0),
        (il |= c),
        (t.lanes = c),
        (t.memoizedState = C));
    }
  }
  function Fr(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function Wr(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) Fr(l[t], e);
  }
  var aa = N(null),
    In = N(0);
  function $r(t, e) {
    ((t = Xe), H(In, t), H(aa, e), (Xe = t | e.baseLanes));
  }
  function Ju() {
    (H(In, Xe), H(aa, aa.current));
  }
  function ku() {
    ((Xe = In.current), B(aa), B(In));
  }
  var Pe = 0,
    P = null,
    ft = null,
    At = null,
    ti = !1,
    na = !1,
    Rl = !1,
    ei = 0,
    Ja = 0,
    ia = null,
    X0 = 0;
  function Tt() {
    throw Error(o(321));
  }
  function Fu(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ee(t[l], e[l])) return !1;
    return !0;
  }
  function Wu(t, e, l, a, n, i) {
    return (
      (Pe = i),
      (P = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (R.H = t === null || t.memoizedState === null ? qf : Hf),
      (Rl = !1),
      (i = l(a, n)),
      (Rl = !1),
      na && (i = Ir(e, l, a, n)),
      Pr(t),
      i
    );
  }
  function Pr(t) {
    R.H = ci;
    var e = ft !== null && ft.next !== null;
    if (((Pe = 0), (At = ft = P = null), (ti = !1), (Ja = 0), (ia = null), e))
      throw Error(o(300));
    t === null ||
      Rt ||
      ((t = t.dependencies), t !== null && kn(t) && (Rt = !0));
  }
  function Ir(t, e, l, a) {
    P = t;
    var n = 0;
    do {
      if ((na && (ia = null), (Ja = 0), (na = !1), 25 <= n))
        throw Error(o(301));
      if (((n += 1), (At = ft = null), t.updateQueue != null)) {
        var i = t.updateQueue;
        ((i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0));
      }
      ((R.H = F0), (i = e(l, a)));
    } while (na);
    return i;
  }
  function Z0() {
    var t = R.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? ka(e) : e),
      (t = t.useState()[0]),
      (ft !== null ? ft.memoizedState : null) !== t && (P.flags |= 1024),
      e
    );
  }
  function $u() {
    var t = ei !== 0;
    return ((ei = 0), t);
  }
  function Pu(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function Iu(t) {
    if (ti) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      ti = !1;
    }
    ((Pe = 0), (At = ft = P = null), (na = !1), (Ja = ei = 0), (ia = null));
  }
  function Jt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (At === null ? (P.memoizedState = At = t) : (At = At.next = t), At);
  }
  function zt() {
    if (ft === null) {
      var t = P.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ft.next;
    var e = At === null ? P.memoizedState : At.next;
    if (e !== null) ((At = e), (ft = t));
    else {
      if (t === null)
        throw P.alternate === null ? Error(o(467)) : Error(o(310));
      ((ft = t),
        (t = {
          memoizedState: ft.memoizedState,
          baseState: ft.baseState,
          baseQueue: ft.baseQueue,
          queue: ft.queue,
          next: null,
        }),
        At === null ? (P.memoizedState = At = t) : (At = At.next = t));
    }
    return At;
  }
  function tc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ka(t) {
    var e = Ja;
    return (
      (Ja += 1),
      ia === null && (ia = []),
      (t = Kr(ia, t, e)),
      (e = P),
      (At === null ? e.memoizedState : At.next) === null &&
        ((e = e.alternate),
        (R.H = e === null || e.memoizedState === null ? qf : Hf)),
      t
    );
  }
  function li(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ka(t);
      if (t.$$typeof === gt) return Gt(t);
    }
    throw Error(o(438, String(t)));
  }
  function ec(t) {
    var e = null,
      l = P.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = P.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = tc()), (P.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Hl;
    return (e.index++, l);
  }
  function He(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ai(t) {
    var e = zt();
    return lc(e, ft, t);
  }
  function lc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var c = n.next;
        ((n.next = i.next), (i.next = c));
      }
      ((e.baseQueue = n = i), (a.pending = null));
    }
    if (((i = t.baseState), n === null)) t.memoizedState = i;
    else {
      e = n.next;
      var r = (c = null),
        h = null,
        x = e,
        M = !1;
      do {
        var C = x.lane & -536870913;
        if (C !== x.lane ? (at & C) === C : (Pe & C) === C) {
          var j = x.revertLane;
          if (j === 0)
            (h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: x.action,
                  hasEagerState: x.hasEagerState,
                  eagerState: x.eagerState,
                  next: null,
                }),
              C === ea && (M = !0));
          else if ((Pe & j) === j) {
            ((x = x.next), j === ea && (M = !0));
            continue;
          } else
            ((C = {
              lane: 0,
              revertLane: x.revertLane,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null,
            }),
              h === null ? ((r = h = C), (c = i)) : (h = h.next = C),
              (P.lanes |= j),
              (il |= j));
          ((C = x.action),
            Rl && l(i, C),
            (i = x.hasEagerState ? x.eagerState : l(i, C)));
        } else
          ((j = {
            lane: C,
            revertLane: x.revertLane,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null,
          }),
            h === null ? ((r = h = j), (c = i)) : (h = h.next = j),
            (P.lanes |= C),
            (il |= C));
        x = x.next;
      } while (x !== null && x !== e);
      if (
        (h === null ? (c = i) : (h.next = r),
        !ee(i, t.memoizedState) && ((Rt = !0), M && ((l = la), l !== null)))
      )
        throw l;
      ((t.memoizedState = i),
        (t.baseState = c),
        (t.baseQueue = h),
        (a.lastRenderedState = i));
    }
    return (n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function ac(t) {
    var e = zt(),
      l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      i = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = (n = n.next);
      do ((i = t(i, c.action)), (c = c.next));
      while (c !== n);
      (ee(i, e.memoizedState) || (Rt = !0),
        (e.memoizedState = i),
        e.baseQueue === null && (e.baseState = i),
        (l.lastRenderedState = i));
    }
    return [i, a];
  }
  function tf(t, e, l) {
    var a = P,
      n = zt(),
      i = ct;
    if (i) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = e();
    var c = !ee((ft || n).memoizedState, l);
    (c && ((n.memoizedState = l), (Rt = !0)), (n = n.queue));
    var r = af.bind(null, a, n, t);
    if (
      (Fa(2048, 8, r, [t]),
      n.getSnapshot !== e || c || (At !== null && At.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ua(9, ni(), lf.bind(null, a, n, l, e), null),
        yt === null)
      )
        throw Error(o(349));
      i || (Pe & 124) !== 0 || ef(a, e, l);
    }
    return l;
  }
  function ef(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = P.updateQueue),
      e === null
        ? ((e = tc()), (P.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function lf(t, e, l, a) {
    ((e.value = l), (e.getSnapshot = a), nf(e) && uf(t));
  }
  function af(t, e, l) {
    return l(function () {
      nf(e) && uf(t);
    });
  }
  function nf(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ee(t, l);
    } catch {
      return !0;
    }
  }
  function uf(t) {
    var e = $l(t, 2);
    e !== null && ce(e, t, 2);
  }
  function nc(t) {
    var e = Jt();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Rl)) {
        Ve(!0);
        try {
          l();
        } finally {
          Ve(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: He,
        lastRenderedState: t,
      }),
      e
    );
  }
  function cf(t, e, l, a) {
    return ((t.baseState = l), lc(t, ft, typeof a == "function" ? a : He));
  }
  function L0(t, e, l, a, n) {
    if (ui(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var i = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          i.listeners.push(c);
        },
      };
      (R.T !== null ? l(!0) : (i.isTransition = !1),
        a(i),
        (l = e.pending),
        l === null
          ? ((i.next = e.pending = i), sf(e, i))
          : ((i.next = l.next), (e.pending = l.next = i)));
    }
  }
  function sf(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var i = R.T,
        c = {};
      R.T = c;
      try {
        var r = l(n, a),
          h = R.S;
        (h !== null && h(c, r), rf(t, e, r));
      } catch (x) {
        ic(t, e, x);
      } finally {
        R.T = i;
      }
    } else
      try {
        ((i = l(n, a)), rf(t, e, i));
      } catch (x) {
        ic(t, e, x);
      }
  }
  function rf(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            ff(t, e, a);
          },
          function (a) {
            return ic(t, e, a);
          },
        )
      : ff(t, e, l);
  }
  function ff(t, e, l) {
    ((e.status = "fulfilled"),
      (e.value = l),
      of(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), sf(t, l))));
  }
  function ic(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = "rejected"), (e.reason = l), of(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function of(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function df(t, e) {
    return e;
  }
  function hf(t, e) {
    if (ct) {
      var l = yt.formState;
      if (l !== null) {
        t: {
          var a = P;
          if (ct) {
            if (xt) {
              e: {
                for (var n = xt, i = Te; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break e;
                  }
                  if (((n = pe(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                ((i = n.data), (n = i === "F!" || i === "F" ? n : null));
              }
              if (n) {
                ((xt = pe(n.nextSibling)), (a = n.data === "F!"));
                break t;
              }
            }
            zl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = Jt()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: df,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Uf.bind(null, P, a)),
      (a.dispatch = l),
      (a = nc(!1)),
      (i = fc.bind(null, P, !1, a.queue)),
      (a = Jt()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = L0.bind(null, P, n, i, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function mf(t) {
    var e = zt();
    return yf(e, ft, t);
  }
  function yf(t, e, l) {
    if (
      ((e = lc(t, e, df)[0]),
      (t = ai(He)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = ka(e);
      } catch (c) {
        throw c === Xa ? $n : c;
      }
    else a = e;
    e = zt();
    var n = e.queue,
      i = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((P.flags |= 2048), ua(9, ni(), V0.bind(null, n, l), null)),
      [a, i, t]
    );
  }
  function V0(t, e) {
    t.action = e;
  }
  function gf(t) {
    var e = zt(),
      l = ft;
    if (l !== null) return yf(e, l, t);
    (zt(), (e = e.memoizedState), (l = zt()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = t), [e, a, !1]);
  }
  function ua(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = P.updateQueue),
      e === null && ((e = tc()), (P.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function ni() {
    return { destroy: void 0, resource: void 0 };
  }
  function vf() {
    return zt().memoizedState;
  }
  function ii(t, e, l, a) {
    var n = Jt();
    ((a = a === void 0 ? null : a),
      (P.flags |= t),
      (n.memoizedState = ua(1 | e, ni(), l, a)));
  }
  function Fa(t, e, l, a) {
    var n = zt();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    ft !== null && a !== null && Fu(a, ft.memoizedState.deps)
      ? (n.memoizedState = ua(e, i, l, a))
      : ((P.flags |= t), (n.memoizedState = ua(1 | e, i, l, a)));
  }
  function bf(t, e) {
    ii(8390656, 8, t, e);
  }
  function pf(t, e) {
    Fa(2048, 8, t, e);
  }
  function Sf(t, e) {
    return Fa(4, 2, t, e);
  }
  function xf(t, e) {
    return Fa(4, 4, t, e);
  }
  function jf(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Tf(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), Fa(4, 4, jf.bind(null, e, t), l));
  }
  function uc() {}
  function Ef(t, e) {
    var l = zt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Fu(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function Af(t, e) {
    var l = zt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Fu(e, a[1])) return a[0];
    if (((a = t()), Rl)) {
      Ve(!0);
      try {
        t();
      } finally {
        Ve(!1);
      }
    }
    return ((l.memoizedState = [a, e]), a);
  }
  function cc(t, e, l) {
    return l === void 0 || (Pe & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Mo()), (P.lanes |= t), (il |= t), l);
  }
  function zf(t, e, l, a) {
    return ee(l, e)
      ? l
      : aa.current !== null
        ? ((t = cc(t, l, a)), ee(t, e) || (Rt = !0), t)
        : (Pe & 42) === 0
          ? ((Rt = !0), (t.memoizedState = l))
          : ((t = Mo()), (P.lanes |= t), (il |= t), e);
  }
  function Of(t, e, l, a, n) {
    var i = w.p;
    w.p = i !== 0 && 8 > i ? i : 8;
    var c = R.T,
      r = {};
    ((R.T = r), fc(t, !1, e, l));
    try {
      var h = n(),
        x = R.S;
      if (
        (x !== null && x(r, h),
        h !== null && typeof h == "object" && typeof h.then == "function")
      ) {
        var M = G0(h, a);
        Wa(t, e, M, ue(t));
      } else Wa(t, e, a, ue(t));
    } catch (C) {
      Wa(t, e, { then: function () {}, status: "rejected", reason: C }, ue());
    } finally {
      ((w.p = i), (R.T = c));
    }
  }
  function K0() {}
  function sc(t, e, l, a) {
    if (t.tag !== 5) throw Error(o(476));
    var n = Df(t).queue;
    Of(
      t,
      n,
      e,
      k,
      l === null
        ? K0
        : function () {
            return (Mf(t), l(a));
          },
    );
  }
  function Df(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: He,
        lastRenderedState: k,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: He,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Mf(t) {
    var e = Df(t).next.queue;
    Wa(t, e, {}, ue());
  }
  function rc() {
    return Gt(yn);
  }
  function Rf() {
    return zt().memoizedState;
  }
  function _f() {
    return zt().memoizedState;
  }
  function J0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ue();
          t = We(l);
          var a = $e(e, t, l);
          (a !== null && (ce(a, e, l), La(a, e, l)),
            (e = { cache: Yu() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function k0(t, e, l) {
    var a = ue();
    ((l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ui(t)
        ? Cf(e, l)
        : ((l = Mu(t, e, l, a)), l !== null && (ce(l, t, a), Nf(l, e, a))));
  }
  function Uf(t, e, l) {
    var a = ue();
    Wa(t, e, l, a);
  }
  function Wa(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ui(t)) Cf(e, n);
    else {
      var i = t.alternate;
      if (
        t.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = e.lastRenderedReducer), i !== null)
      )
        try {
          var c = e.lastRenderedState,
            r = i(c, l);
          if (((n.hasEagerState = !0), (n.eagerState = r), ee(r, c)))
            return (Zn(t, e, n, 0), yt === null && Xn(), !1);
        } catch {}
      if (((l = Mu(t, e, n, a)), l !== null))
        return (ce(l, t, a), Nf(l, e, a), !0);
    }
    return !1;
  }
  function fc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Xc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ui(t))
    ) {
      if (e) throw Error(o(479));
    } else ((e = Mu(t, l, a, 2)), e !== null && ce(e, t, 2));
  }
  function ui(t) {
    var e = t.alternate;
    return t === P || (e !== null && e === P);
  }
  function Cf(t, e) {
    na = ti = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function Nf(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (l |= a), (e.lanes = l), Gs(t, l));
    }
  }
  var ci = {
      readContext: Gt,
      use: li,
      useCallback: Tt,
      useContext: Tt,
      useEffect: Tt,
      useImperativeHandle: Tt,
      useLayoutEffect: Tt,
      useInsertionEffect: Tt,
      useMemo: Tt,
      useReducer: Tt,
      useRef: Tt,
      useState: Tt,
      useDebugValue: Tt,
      useDeferredValue: Tt,
      useTransition: Tt,
      useSyncExternalStore: Tt,
      useId: Tt,
      useHostTransitionStatus: Tt,
      useFormState: Tt,
      useActionState: Tt,
      useOptimistic: Tt,
      useMemoCache: Tt,
      useCacheRefresh: Tt,
    },
    qf = {
      readContext: Gt,
      use: li,
      useCallback: function (t, e) {
        return ((Jt().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Gt,
      useEffect: bf,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          ii(4194308, 4, jf.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return ii(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ii(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Jt();
        e = e === void 0 ? null : e;
        var a = t();
        if (Rl) {
          Ve(!0);
          try {
            t();
          } finally {
            Ve(!1);
          }
        }
        return ((l.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, l) {
        var a = Jt();
        if (l !== void 0) {
          var n = l(e);
          if (Rl) {
            Ve(!0);
            try {
              l(e);
            } finally {
              Ve(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = k0.bind(null, P, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Jt();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = nc(t);
        var e = t.queue,
          l = Uf.bind(null, P, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: uc,
      useDeferredValue: function (t, e) {
        var l = Jt();
        return cc(l, t, e);
      },
      useTransition: function () {
        var t = nc(!1);
        return (
          (t = Of.bind(null, P, t.queue, !0, !1)),
          (Jt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = P,
          n = Jt();
        if (ct) {
          if (l === void 0) throw Error(o(407));
          l = l();
        } else {
          if (((l = e()), yt === null)) throw Error(o(349));
          (at & 124) !== 0 || ef(a, e, l);
        }
        n.memoizedState = l;
        var i = { value: l, getSnapshot: e };
        return (
          (n.queue = i),
          bf(af.bind(null, a, i, t), [t]),
          (a.flags |= 2048),
          ua(9, ni(), lf.bind(null, a, i, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Jt(),
          e = yt.identifierPrefix;
        if (ct) {
          var l = Ce,
            a = Ue;
          ((l = (a & ~(1 << (32 - te(a) - 1))).toString(32) + l),
            (e = "«" + e + "R" + l),
            (l = ei++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "»"));
        } else ((l = X0++), (e = "«" + e + "r" + l.toString(32) + "»"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: rc,
      useFormState: hf,
      useActionState: hf,
      useOptimistic: function (t) {
        var e = Jt();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = fc.bind(null, P, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: ec,
      useCacheRefresh: function () {
        return (Jt().memoizedState = J0.bind(null, P));
      },
    },
    Hf = {
      readContext: Gt,
      use: li,
      useCallback: Ef,
      useContext: Gt,
      useEffect: pf,
      useImperativeHandle: Tf,
      useInsertionEffect: Sf,
      useLayoutEffect: xf,
      useMemo: Af,
      useReducer: ai,
      useRef: vf,
      useState: function () {
        return ai(He);
      },
      useDebugValue: uc,
      useDeferredValue: function (t, e) {
        var l = zt();
        return zf(l, ft.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ai(He)[0],
          e = zt().memoizedState;
        return [typeof t == "boolean" ? t : ka(t), e];
      },
      useSyncExternalStore: tf,
      useId: Rf,
      useHostTransitionStatus: rc,
      useFormState: mf,
      useActionState: mf,
      useOptimistic: function (t, e) {
        var l = zt();
        return cf(l, ft, t, e);
      },
      useMemoCache: ec,
      useCacheRefresh: _f,
    },
    F0 = {
      readContext: Gt,
      use: li,
      useCallback: Ef,
      useContext: Gt,
      useEffect: pf,
      useImperativeHandle: Tf,
      useInsertionEffect: Sf,
      useLayoutEffect: xf,
      useMemo: Af,
      useReducer: ac,
      useRef: vf,
      useState: function () {
        return ac(He);
      },
      useDebugValue: uc,
      useDeferredValue: function (t, e) {
        var l = zt();
        return ft === null ? cc(l, t, e) : zf(l, ft.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ac(He)[0],
          e = zt().memoizedState;
        return [typeof t == "boolean" ? t : ka(t), e];
      },
      useSyncExternalStore: tf,
      useId: Rf,
      useHostTransitionStatus: rc,
      useFormState: gf,
      useActionState: gf,
      useOptimistic: function (t, e) {
        var l = zt();
        return ft !== null
          ? cf(l, ft, t, e)
          : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: ec,
      useCacheRefresh: _f,
    },
    ca = null,
    $a = 0;
  function si(t) {
    var e = $a;
    return (($a += 1), ca === null && (ca = []), Kr(ca, t, e));
  }
  function Pa(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function ri(t, e) {
    throw e.$$typeof === O
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function wf(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Bf(t) {
    function e(v, g) {
      if (t) {
        var p = v.deletions;
        p === null ? ((v.deletions = [g]), (v.flags |= 16)) : p.push(g);
      }
    }
    function l(v, g) {
      if (!t) return null;
      for (; g !== null; ) (e(v, g), (g = g.sibling));
      return null;
    }
    function a(v) {
      for (var g = new Map(); v !== null; )
        (v.key !== null ? g.set(v.key, v) : g.set(v.index, v), (v = v.sibling));
      return g;
    }
    function n(v, g) {
      return ((v = _e(v, g)), (v.index = 0), (v.sibling = null), v);
    }
    function i(v, g, p) {
      return (
        (v.index = p),
        t
          ? ((p = v.alternate),
            p !== null
              ? ((p = p.index), p < g ? ((v.flags |= 67108866), g) : p)
              : ((v.flags |= 67108866), g))
          : ((v.flags |= 1048576), g)
      );
    }
    function c(v) {
      return (t && v.alternate === null && (v.flags |= 67108866), v);
    }
    function r(v, g, p, _) {
      return g === null || g.tag !== 6
        ? ((g = _u(p, v.mode, _)), (g.return = v), g)
        : ((g = n(g, p)), (g.return = v), g);
    }
    function h(v, g, p, _) {
      var G = p.type;
      return G === Y
        ? M(v, g, p.props.children, _, p.key)
        : g !== null &&
            (g.elementType === G ||
              (typeof G == "object" &&
                G !== null &&
                G.$$typeof === $t &&
                wf(G) === g.type))
          ? ((g = n(g, p.props)), Pa(g, p), (g.return = v), g)
          : ((g = Vn(p.type, p.key, p.props, null, v.mode, _)),
            Pa(g, p),
            (g.return = v),
            g);
    }
    function x(v, g, p, _) {
      return g === null ||
        g.tag !== 4 ||
        g.stateNode.containerInfo !== p.containerInfo ||
        g.stateNode.implementation !== p.implementation
        ? ((g = Uu(p, v.mode, _)), (g.return = v), g)
        : ((g = n(g, p.children || [])), (g.return = v), g);
    }
    function M(v, g, p, _, G) {
      return g === null || g.tag !== 7
        ? ((g = jl(p, v.mode, _, G)), (g.return = v), g)
        : ((g = n(g, p)), (g.return = v), g);
    }
    function C(v, g, p) {
      if (
        (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
      )
        return ((g = _u("" + g, v.mode, p)), (g.return = v), g);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case S:
            return (
              (p = Vn(g.type, g.key, g.props, null, v.mode, p)),
              Pa(p, g),
              (p.return = v),
              p
            );
          case q:
            return ((g = Uu(g, v.mode, p)), (g.return = v), g);
          case $t:
            var _ = g._init;
            return ((g = _(g._payload)), C(v, g, p));
        }
        if (Yt(g) || Bt(g))
          return ((g = jl(g, v.mode, p, null)), (g.return = v), g);
        if (typeof g.then == "function") return C(v, si(g), p);
        if (g.$$typeof === gt) return C(v, Fn(v, g), p);
        ri(v, g);
      }
      return null;
    }
    function j(v, g, p, _) {
      var G = g !== null ? g.key : null;
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return G !== null ? null : r(v, g, "" + p, _);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case S:
            return p.key === G ? h(v, g, p, _) : null;
          case q:
            return p.key === G ? x(v, g, p, _) : null;
          case $t:
            return ((G = p._init), (p = G(p._payload)), j(v, g, p, _));
        }
        if (Yt(p) || Bt(p)) return G !== null ? null : M(v, g, p, _, null);
        if (typeof p.then == "function") return j(v, g, si(p), _);
        if (p.$$typeof === gt) return j(v, g, Fn(v, p), _);
        ri(v, p);
      }
      return null;
    }
    function E(v, g, p, _, G) {
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return ((v = v.get(p) || null), r(g, v, "" + _, G));
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case S:
            return (
              (v = v.get(_.key === null ? p : _.key) || null),
              h(g, v, _, G)
            );
          case q:
            return (
              (v = v.get(_.key === null ? p : _.key) || null),
              x(g, v, _, G)
            );
          case $t:
            var I = _._init;
            return ((_ = I(_._payload)), E(v, g, p, _, G));
        }
        if (Yt(_) || Bt(_))
          return ((v = v.get(p) || null), M(g, v, _, G, null));
        if (typeof _.then == "function") return E(v, g, p, si(_), G);
        if (_.$$typeof === gt) return E(v, g, p, Fn(g, _), G);
        ri(g, _);
      }
      return null;
    }
    function F(v, g, p, _) {
      for (
        var G = null, I = null, Z = g, J = (g = 0), Ut = null;
        Z !== null && J < p.length;
        J++
      ) {
        Z.index > J ? ((Ut = Z), (Z = null)) : (Ut = Z.sibling);
        var it = j(v, Z, p[J], _);
        if (it === null) {
          Z === null && (Z = Ut);
          break;
        }
        (t && Z && it.alternate === null && e(v, Z),
          (g = i(it, g, J)),
          I === null ? (G = it) : (I.sibling = it),
          (I = it),
          (Z = Ut));
      }
      if (J === p.length) return (l(v, Z), ct && El(v, J), G);
      if (Z === null) {
        for (; J < p.length; J++)
          ((Z = C(v, p[J], _)),
            Z !== null &&
              ((g = i(Z, g, J)),
              I === null ? (G = Z) : (I.sibling = Z),
              (I = Z)));
        return (ct && El(v, J), G);
      }
      for (Z = a(Z); J < p.length; J++)
        ((Ut = E(Z, v, J, p[J], _)),
          Ut !== null &&
            (t &&
              Ut.alternate !== null &&
              Z.delete(Ut.key === null ? J : Ut.key),
            (g = i(Ut, g, J)),
            I === null ? (G = Ut) : (I.sibling = Ut),
            (I = Ut)));
      return (
        t &&
          Z.forEach(function (ml) {
            return e(v, ml);
          }),
        ct && El(v, J),
        G
      );
    }
    function V(v, g, p, _) {
      if (p == null) throw Error(o(151));
      for (
        var G = null, I = null, Z = g, J = (g = 0), Ut = null, it = p.next();
        Z !== null && !it.done;
        J++, it = p.next()
      ) {
        Z.index > J ? ((Ut = Z), (Z = null)) : (Ut = Z.sibling);
        var ml = j(v, Z, it.value, _);
        if (ml === null) {
          Z === null && (Z = Ut);
          break;
        }
        (t && Z && ml.alternate === null && e(v, Z),
          (g = i(ml, g, J)),
          I === null ? (G = ml) : (I.sibling = ml),
          (I = ml),
          (Z = Ut));
      }
      if (it.done) return (l(v, Z), ct && El(v, J), G);
      if (Z === null) {
        for (; !it.done; J++, it = p.next())
          ((it = C(v, it.value, _)),
            it !== null &&
              ((g = i(it, g, J)),
              I === null ? (G = it) : (I.sibling = it),
              (I = it)));
        return (ct && El(v, J), G);
      }
      for (Z = a(Z); !it.done; J++, it = p.next())
        ((it = E(Z, v, J, it.value, _)),
          it !== null &&
            (t &&
              it.alternate !== null &&
              Z.delete(it.key === null ? J : it.key),
            (g = i(it, g, J)),
            I === null ? (G = it) : (I.sibling = it),
            (I = it)));
      return (
        t &&
          Z.forEach(function (Wm) {
            return e(v, Wm);
          }),
        ct && El(v, J),
        G
      );
    }
    function dt(v, g, p, _) {
      if (
        (typeof p == "object" &&
          p !== null &&
          p.type === Y &&
          p.key === null &&
          (p = p.props.children),
        typeof p == "object" && p !== null)
      ) {
        switch (p.$$typeof) {
          case S:
            t: {
              for (var G = p.key; g !== null; ) {
                if (g.key === G) {
                  if (((G = p.type), G === Y)) {
                    if (g.tag === 7) {
                      (l(v, g.sibling),
                        (_ = n(g, p.props.children)),
                        (_.return = v),
                        (v = _));
                      break t;
                    }
                  } else if (
                    g.elementType === G ||
                    (typeof G == "object" &&
                      G !== null &&
                      G.$$typeof === $t &&
                      wf(G) === g.type)
                  ) {
                    (l(v, g.sibling),
                      (_ = n(g, p.props)),
                      Pa(_, p),
                      (_.return = v),
                      (v = _));
                    break t;
                  }
                  l(v, g);
                  break;
                } else e(v, g);
                g = g.sibling;
              }
              p.type === Y
                ? ((_ = jl(p.props.children, v.mode, _, p.key)),
                  (_.return = v),
                  (v = _))
                : ((_ = Vn(p.type, p.key, p.props, null, v.mode, _)),
                  Pa(_, p),
                  (_.return = v),
                  (v = _));
            }
            return c(v);
          case q:
            t: {
              for (G = p.key; g !== null; ) {
                if (g.key === G)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === p.containerInfo &&
                    g.stateNode.implementation === p.implementation
                  ) {
                    (l(v, g.sibling),
                      (_ = n(g, p.children || [])),
                      (_.return = v),
                      (v = _));
                    break t;
                  } else {
                    l(v, g);
                    break;
                  }
                else e(v, g);
                g = g.sibling;
              }
              ((_ = Uu(p, v.mode, _)), (_.return = v), (v = _));
            }
            return c(v);
          case $t:
            return ((G = p._init), (p = G(p._payload)), dt(v, g, p, _));
        }
        if (Yt(p)) return F(v, g, p, _);
        if (Bt(p)) {
          if (((G = Bt(p)), typeof G != "function")) throw Error(o(150));
          return ((p = G.call(p)), V(v, g, p, _));
        }
        if (typeof p.then == "function") return dt(v, g, si(p), _);
        if (p.$$typeof === gt) return dt(v, g, Fn(v, p), _);
        ri(v, p);
      }
      return (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
        ? ((p = "" + p),
          g !== null && g.tag === 6
            ? (l(v, g.sibling), (_ = n(g, p)), (_.return = v), (v = _))
            : (l(v, g), (_ = _u(p, v.mode, _)), (_.return = v), (v = _)),
          c(v))
        : l(v, g);
    }
    return function (v, g, p, _) {
      try {
        $a = 0;
        var G = dt(v, g, p, _);
        return ((ca = null), G);
      } catch (Z) {
        if (Z === Xa || Z === $n) throw Z;
        var I = le(29, Z, null, v.mode);
        return ((I.lanes = _), (I.return = v), I);
      }
    };
  }
  var sa = Bf(!0),
    Yf = Bf(!1),
    me = N(null),
    Ee = null;
  function Ie(t) {
    var e = t.alternate;
    (H(Dt, Dt.current & 1),
      H(me, t),
      Ee === null &&
        (e === null || aa.current !== null || e.memoizedState !== null) &&
        (Ee = t));
  }
  function Qf(t) {
    if (t.tag === 22) {
      if ((H(Dt, Dt.current), H(me, t), Ee === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (Ee = t);
      }
    } else tl();
  }
  function tl() {
    (H(Dt, Dt.current), H(me, me.current));
  }
  function we(t) {
    (B(me), Ee === t && (Ee = null), B(Dt));
  }
  var Dt = N(0);
  function fi(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || ts(l))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  function oc(t, e, l, a) {
    ((e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : z({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var dc = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = ue(),
        n = We(a);
      ((n.payload = e),
        l != null && (n.callback = l),
        (e = $e(t, n, a)),
        e !== null && (ce(e, t, a), La(e, t, a)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = ue(),
        n = We(a);
      ((n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = $e(t, n, a)),
        e !== null && (ce(e, t, a), La(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = ue(),
        a = We(l);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = $e(t, a, l)),
        e !== null && (ce(e, t, l), La(e, t, l)));
    },
  };
  function Gf(t, e, l, a, n, i, c) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, i, c)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Na(l, a) || !Na(n, i)
          : !0
    );
  }
  function Xf(t, e, l, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && dc.enqueueReplaceState(e, e.state, null));
  }
  function _l(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = z({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  var oi =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Zf(t) {
    oi(t);
  }
  function Lf(t) {
    console.error(t);
  }
  function Vf(t) {
    oi(t);
  }
  function di(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Kf(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function hc(t, e, l) {
    return (
      (l = We(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        di(t, e);
      }),
      l
    );
  }
  function Jf(t) {
    return ((t = We(t)), (t.tag = 3), t);
  }
  function kf(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      ((t.payload = function () {
        return n(i);
      }),
        (t.callback = function () {
          Kf(e, l, a);
        }));
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (t.callback = function () {
        (Kf(e, l, a),
          typeof n != "function" &&
            (ul === null ? (ul = new Set([this])) : ul.add(this)));
        var r = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: r !== null ? r : "",
        });
      });
  }
  function W0(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && Ya(e, l, n, !0),
        (l = me.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Ee === null ? wc() : l.alternate === null && jt === 0 && (jt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Xu
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  Yc(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Xu
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  Yc(t, a, n)),
              !1
            );
        }
        throw Error(o(435, l.tag));
      }
      return (Yc(t, a, n), wc(), !1);
    }
    if (ct)
      return (
        (e = me.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== qu && ((t = Error(o(422), { cause: a })), Ba(fe(t, l))))
          : (a !== qu && ((e = Error(o(423), { cause: a })), Ba(fe(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = fe(a, l)),
            (n = hc(t.stateNode, a, n)),
            Vu(t, n),
            jt !== 4 && (jt = 2)),
        !1
      );
    var i = Error(o(520), { cause: a });
    if (
      ((i = fe(i, l)),
      un === null ? (un = [i]) : un.push(i),
      jt !== 4 && (jt = 2),
      e === null)
    )
      return !0;
    ((a = fe(a, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = hc(l.stateNode, a, t)),
            Vu(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (ul === null || !ul.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Jf(n)),
              kf(n, t, l, a),
              Vu(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Ff = Error(o(461)),
    Rt = !1;
  function Ct(t, e, l, a) {
    e.child = t === null ? Yf(e, null, l, a) : sa(e, t.child, l, a);
  }
  function Wf(t, e, l, a, n) {
    l = l.render;
    var i = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var r in a) r !== "ref" && (c[r] = a[r]);
    } else c = a;
    return (
      Dl(e),
      (a = Wu(t, e, l, c, i, n)),
      (r = $u()),
      t !== null && !Rt
        ? (Pu(t, e, n), Be(t, e, n))
        : (ct && r && Cu(e), (e.flags |= 1), Ct(t, e, a, n), e.child)
    );
  }
  function $f(t, e, l, a, n) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" &&
        !Ru(i) &&
        i.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = i), Pf(t, e, i, a, n))
        : ((t = Vn(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((i = t.child), !xc(t, n))) {
      var c = i.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Na), l(c, a) && t.ref === e.ref)
      )
        return Be(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = _e(i, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Pf(t, e, l, a, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (Na(i, a) && t.ref === e.ref)
        if (((Rt = !1), (e.pendingProps = a = i), xc(t, n)))
          (t.flags & 131072) !== 0 && (Rt = !0);
        else return ((e.lanes = t.lanes), Be(t, e, n));
    }
    return mc(t, e, l, a, n);
  }
  function If(t, e, l) {
    var a = e.pendingProps,
      n = a.children,
      i = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = i !== null ? i.baseLanes | l : l), t !== null)) {
          for (n = e.child = t.child, i = 0; n !== null; )
            ((i = i | n.lanes | n.childLanes), (n = n.sibling));
          e.childLanes = i & ~a;
        } else ((e.childLanes = 0), (e.child = null));
        return to(t, e, a, l);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Wn(e, i !== null ? i.cachePool : null),
          i !== null ? $r(e, i) : Ju(),
          Qf(e));
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          to(t, e, i !== null ? i.baseLanes | l : l, l)
        );
    } else
      i !== null
        ? (Wn(e, i.cachePool), $r(e, i), tl(), (e.memoizedState = null))
        : (t !== null && Wn(e, null), Ju(), tl());
    return (Ct(t, e, n, l), e.child);
  }
  function to(t, e, l, a) {
    var n = Gu();
    return (
      (n = n === null ? null : { parent: Ot._currentValue, pool: n }),
      (e.memoizedState = { baseLanes: l, cachePool: n }),
      t !== null && Wn(e, null),
      Ju(),
      Qf(e),
      t !== null && Ya(t, e, a, !0),
      null
    );
  }
  function hi(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(o(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function mc(t, e, l, a, n) {
    return (
      Dl(e),
      (l = Wu(t, e, l, a, void 0, n)),
      (a = $u()),
      t !== null && !Rt
        ? (Pu(t, e, n), Be(t, e, n))
        : (ct && a && Cu(e), (e.flags |= 1), Ct(t, e, l, n), e.child)
    );
  }
  function eo(t, e, l, a, n, i) {
    return (
      Dl(e),
      (e.updateQueue = null),
      (l = Ir(e, a, l, n)),
      Pr(t),
      (a = $u()),
      t !== null && !Rt
        ? (Pu(t, e, i), Be(t, e, i))
        : (ct && a && Cu(e), (e.flags |= 1), Ct(t, e, l, i), e.child)
    );
  }
  function lo(t, e, l, a, n) {
    if ((Dl(e), e.stateNode === null)) {
      var i = Pl,
        c = l.contextType;
      (typeof c == "object" && c !== null && (i = Gt(c)),
        (i = new l(a, i)),
        (e.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = dc),
        (e.stateNode = i),
        (i._reactInternals = e),
        (i = e.stateNode),
        (i.props = a),
        (i.state = e.memoizedState),
        (i.refs = {}),
        Zu(e),
        (c = l.contextType),
        (i.context = typeof c == "object" && c !== null ? Gt(c) : Pl),
        (i.state = e.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == "function" && (oc(e, l, c, a), (i.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((c = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          c !== i.state && dc.enqueueReplaceState(i, i.state, null),
          Ka(e, a, i, n),
          Va(),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      i = e.stateNode;
      var r = e.memoizedProps,
        h = _l(l, r);
      i.props = h;
      var x = i.context,
        M = l.contextType;
      ((c = Pl), typeof M == "object" && M !== null && (c = Gt(M)));
      var C = l.getDerivedStateFromProps;
      ((M =
        typeof C == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (r = e.pendingProps !== r),
        M ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((r || x !== c) && Xf(e, i, a, c)),
        (Fe = !1));
      var j = e.memoizedState;
      ((i.state = j),
        Ka(e, a, i, n),
        Va(),
        (x = e.memoizedState),
        r || j !== x || Fe
          ? (typeof C == "function" && (oc(e, l, C, a), (x = e.memoizedState)),
            (h = Fe || Gf(e, l, h, a, j, x, c))
              ? (M ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = x)),
            (i.props = a),
            (i.state = x),
            (i.context = c),
            (a = h))
          : (typeof i.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1)));
    } else {
      ((i = e.stateNode),
        Lu(t, e),
        (c = e.memoizedProps),
        (M = _l(l, c)),
        (i.props = M),
        (C = e.pendingProps),
        (j = i.context),
        (x = l.contextType),
        (h = Pl),
        typeof x == "object" && x !== null && (h = Gt(x)),
        (r = l.getDerivedStateFromProps),
        (x =
          typeof r == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((c !== C || j !== h) && Xf(e, i, a, h)),
        (Fe = !1),
        (j = e.memoizedState),
        (i.state = j),
        Ka(e, a, i, n),
        Va());
      var E = e.memoizedState;
      c !== C ||
      j !== E ||
      Fe ||
      (t !== null && t.dependencies !== null && kn(t.dependencies))
        ? (typeof r == "function" && (oc(e, l, r, a), (E = e.memoizedState)),
          (M =
            Fe ||
            Gf(e, l, M, a, j, E, h) ||
            (t !== null && t.dependencies !== null && kn(t.dependencies)))
            ? (x ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(a, E, h),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(a, E, h)),
              typeof i.componentDidUpdate == "function" && (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (c === t.memoizedProps && j === t.memoizedState) ||
                (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (c === t.memoizedProps && j === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = E)),
          (i.props = a),
          (i.state = E),
          (i.context = h),
          (a = M))
        : (typeof i.componentDidUpdate != "function" ||
            (c === t.memoizedProps && j === t.memoizedState) ||
            (e.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (c === t.memoizedProps && j === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      hi(t, e),
      (a = (e.flags & 128) !== 0),
      i || a
        ? ((i = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = sa(e, t.child, null, n)),
              (e.child = sa(e, null, l, n)))
            : Ct(t, e, l, n),
          (e.memoizedState = i.state),
          (t = e.child))
        : (t = Be(t, e, n)),
      t
    );
  }
  function ao(t, e, l, a) {
    return (wa(), (e.flags |= 256), Ct(t, e, l, a), e.child);
  }
  var yc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function gc(t) {
    return { baseLanes: t, cachePool: Zr() };
  }
  function vc(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= ye), t);
  }
  function no(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      i = (e.flags & 128) !== 0,
      c;
    if (
      ((c = i) ||
        (c =
          t !== null && t.memoizedState === null ? !1 : (Dt.current & 2) !== 0),
      c && ((n = !0), (e.flags &= -129)),
      (c = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (ct) {
        if ((n ? Ie(e) : tl(), ct)) {
          var r = xt,
            h;
          if ((h = r)) {
            t: {
              for (h = r, r = Te; h.nodeType !== 8; ) {
                if (!r) {
                  r = null;
                  break t;
                }
                if (((h = pe(h.nextSibling)), h === null)) {
                  r = null;
                  break t;
                }
              }
              r = h;
            }
            r !== null
              ? ((e.memoizedState = {
                  dehydrated: r,
                  treeContext: Tl !== null ? { id: Ue, overflow: Ce } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (h = le(18, null, null, 0)),
                (h.stateNode = r),
                (h.return = e),
                (e.child = h),
                (Zt = e),
                (xt = null),
                (h = !0))
              : (h = !1);
          }
          h || zl(e);
        }
        if (
          ((r = e.memoizedState),
          r !== null && ((r = r.dehydrated), r !== null))
        )
          return (ts(r) ? (e.lanes = 32) : (e.lanes = 536870912), null);
        we(e);
      }
      return (
        (r = a.children),
        (a = a.fallback),
        n
          ? (tl(),
            (n = e.mode),
            (r = mi({ mode: "hidden", children: r }, n)),
            (a = jl(a, n, l, null)),
            (r.return = e),
            (a.return = e),
            (r.sibling = a),
            (e.child = r),
            (n = e.child),
            (n.memoizedState = gc(l)),
            (n.childLanes = vc(t, c, l)),
            (e.memoizedState = yc),
            a)
          : (Ie(e), bc(e, r))
      );
    }
    if (
      ((h = t.memoizedState), h !== null && ((r = h.dehydrated), r !== null))
    ) {
      if (i)
        e.flags & 256
          ? (Ie(e), (e.flags &= -257), (e = pc(t, e, l)))
          : e.memoizedState !== null
            ? (tl(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (tl(),
              (n = a.fallback),
              (r = e.mode),
              (a = mi({ mode: "visible", children: a.children }, r)),
              (n = jl(n, r, l, null)),
              (n.flags |= 2),
              (a.return = e),
              (n.return = e),
              (a.sibling = n),
              (e.child = a),
              sa(e, t.child, null, l),
              (a = e.child),
              (a.memoizedState = gc(l)),
              (a.childLanes = vc(t, c, l)),
              (e.memoizedState = yc),
              (e = n));
      else if ((Ie(e), ts(r))) {
        if (((c = r.nextSibling && r.nextSibling.dataset), c)) var x = c.dgst;
        ((c = x),
          (a = Error(o(419))),
          (a.stack = ""),
          (a.digest = c),
          Ba({ value: a, source: null, stack: null }),
          (e = pc(t, e, l)));
      } else if (
        (Rt || Ya(t, e, l, !1), (c = (l & t.childLanes) !== 0), Rt || c)
      ) {
        if (
          ((c = yt),
          c !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : eu(a)),
            (a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== h.retryLane))
        )
          throw ((h.retryLane = a), $l(t, a), ce(c, t, a), Ff);
        (r.data === "$?" || wc(), (e = pc(t, e, l)));
      } else
        r.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = h.treeContext),
            (xt = pe(r.nextSibling)),
            (Zt = e),
            (ct = !0),
            (Al = null),
            (Te = !1),
            t !== null &&
              ((de[he++] = Ue),
              (de[he++] = Ce),
              (de[he++] = Tl),
              (Ue = t.id),
              (Ce = t.overflow),
              (Tl = e)),
            (e = bc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (tl(),
        (n = a.fallback),
        (r = e.mode),
        (h = t.child),
        (x = h.sibling),
        (a = _e(h, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 65011712),
        x !== null ? (n = _e(x, n)) : ((n = jl(n, r, l, null)), (n.flags |= 2)),
        (n.return = e),
        (a.return = e),
        (a.sibling = n),
        (e.child = a),
        (a = n),
        (n = e.child),
        (r = t.child.memoizedState),
        r === null
          ? (r = gc(l))
          : ((h = r.cachePool),
            h !== null
              ? ((x = Ot._currentValue),
                (h = h.parent !== x ? { parent: x, pool: x } : h))
              : (h = Zr()),
            (r = { baseLanes: r.baseLanes | l, cachePool: h })),
        (n.memoizedState = r),
        (n.childLanes = vc(t, c, l)),
        (e.memoizedState = yc),
        a)
      : (Ie(e),
        (l = t.child),
        (t = l.sibling),
        (l = _e(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((c = e.deletions),
          c === null ? ((e.deletions = [t]), (e.flags |= 16)) : c.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function bc(t, e) {
    return (
      (e = mi({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function mi(t, e) {
    return (
      (t = le(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function pc(t, e, l) {
    return (
      sa(e, t.child, null, l),
      (t = bc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function io(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), wu(t.return, e, l));
  }
  function Sc(t, e, l, a, n) {
    var i = t.memoizedState;
    i === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((i.isBackwards = e),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n));
  }
  function uo(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      i = a.tail;
    if ((Ct(t, e, a.children, l), (a = Dt.current), (a & 2) !== 0))
      ((a = (a & 1) | 2), (e.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && io(t, l, e);
          else if (t.tag === 19) io(t, l, e);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      a &= 1;
    }
    switch ((H(Dt, a), n)) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          ((t = l.alternate),
            t !== null && fi(t) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Sc(e, !1, n, l, i));
        break;
      case "backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && fi(t) === null)) {
            e.child = n;
            break;
          }
          ((t = n.sibling), (n.sibling = l), (l = n), (n = t));
        }
        Sc(e, !0, l, null, i);
        break;
      case "together":
        Sc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Be(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (il |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ya(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, l = _e(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (l = l.sibling = _e(t, t.pendingProps)),
          (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function xc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && kn(t)));
  }
  function $0(t, e, l) {
    switch (e.tag) {
      case 3:
        (vt(e, e.stateNode.containerInfo),
          ke(e, Ot, t.memoizedState.cache),
          wa());
        break;
      case 27:
      case 5:
        Wi(e);
        break;
      case 4:
        vt(e, e.stateNode.containerInfo);
        break;
      case 10:
        ke(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Ie(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? no(t, e, l)
              : (Ie(e), (t = Be(t, e, l)), t !== null ? t.sibling : null);
        Ie(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (Ya(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return uo(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          H(Dt, Dt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((e.lanes = 0), If(t, e, l));
      case 24:
        ke(e, Ot, t.memoizedState.cache);
    }
    return Be(t, e, l);
  }
  function co(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Rt = !0;
      else {
        if (!xc(t, l) && (e.flags & 128) === 0) return ((Rt = !1), $0(t, e, l));
        Rt = (t.flags & 131072) !== 0;
      }
    else ((Rt = !1), ct && (e.flags & 1048576) !== 0 && Hr(e, Jn, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            n = a._init;
          if (((a = n(a._payload)), (e.type = a), typeof a == "function"))
            Ru(a)
              ? ((t = _l(a, t)), (e.tag = 1), (e = lo(null, e, a, t, l)))
              : ((e.tag = 0), (e = mc(null, e, a, t, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === Ht)) {
                ((e.tag = 11), (e = Wf(null, e, a, t, l)));
                break t;
              } else if (n === Wt) {
                ((e.tag = 14), (e = $f(null, e, a, t, l)));
                break t;
              }
            }
            throw ((e = gl(a) || a), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return mc(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((a = e.type), (n = _l(a, e.pendingProps)), lo(t, e, a, n, l));
      case 3:
        t: {
          if ((vt(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          ((n = i.element), Lu(t, e), Ka(e, a, null, l));
          var c = e.memoizedState;
          if (
            ((a = c.cache),
            ke(e, Ot, a),
            a !== i.cache && Bu(e, [Ot], l, !0),
            Va(),
            (a = c.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: c.cache }),
              (e.updateQueue.baseState = i),
              (e.memoizedState = i),
              e.flags & 256)
            ) {
              e = ao(t, e, a, l);
              break t;
            } else if (a !== n) {
              ((n = fe(Error(o(424)), e)), Ba(n), (e = ao(t, e, a, l)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  xt = pe(t.firstChild),
                  Zt = e,
                  ct = !0,
                  Al = null,
                  Te = !0,
                  l = Yf(e, null, a, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((wa(), a === n)) {
              e = Be(t, e, l);
              break t;
            }
            Ct(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          hi(t, e),
          t === null
            ? (l = dd(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : ct ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Di(W.current).createElement(l)),
                (a[Qt] = e),
                (a[Vt] = t),
                qt(a, l, t),
                Mt(a),
                (e.stateNode = a))
            : (e.memoizedState = dd(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Wi(e),
          t === null &&
            ct &&
            ((a = e.stateNode = rd(e.type, e.pendingProps, W.current)),
            (Zt = e),
            (Te = !0),
            (n = xt),
            rl(e.type) ? ((es = n), (xt = pe(a.firstChild))) : (xt = n)),
          Ct(t, e, e.pendingProps.children, l),
          hi(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            ct &&
            ((n = a = xt) &&
              ((a = Am(a, e.type, e.pendingProps, Te)),
              a !== null
                ? ((e.stateNode = a),
                  (Zt = e),
                  (xt = pe(a.firstChild)),
                  (Te = !1),
                  (n = !0))
                : (n = !1)),
            n || zl(e)),
          Wi(e),
          (n = e.type),
          (i = e.pendingProps),
          (c = t !== null ? t.memoizedProps : null),
          (a = i.children),
          $c(n, i) ? (a = null) : c !== null && $c(n, c) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = Wu(t, e, Z0, null, null, l)), (yn._currentValue = n)),
          hi(t, e),
          Ct(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            ct &&
            ((t = l = xt) &&
              ((l = zm(l, e.pendingProps, Te)),
              l !== null
                ? ((e.stateNode = l), (Zt = e), (xt = null), (t = !0))
                : (t = !1)),
            t || zl(e)),
          null
        );
      case 13:
        return no(t, e, l);
      case 4:
        return (
          vt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = sa(e, null, a, l)) : Ct(t, e, a, l),
          e.child
        );
      case 11:
        return Wf(t, e, e.type, e.pendingProps, l);
      case 7:
        return (Ct(t, e, e.pendingProps, l), e.child);
      case 8:
        return (Ct(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return (Ct(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return (
          (a = e.pendingProps),
          ke(e, e.type, a.value),
          Ct(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Dl(e),
          (n = Gt(n)),
          (a = a(n)),
          (e.flags |= 1),
          Ct(t, e, a, l),
          e.child
        );
      case 14:
        return $f(t, e, e.type, e.pendingProps, l);
      case 15:
        return Pf(t, e, e.type, e.pendingProps, l);
      case 19:
        return uo(t, e, l);
      case 31:
        return (
          (a = e.pendingProps),
          (l = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((l = mi(a, l)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l))
            : ((l = _e(t.child, a)),
              (l.ref = e.ref),
              (e.child = l),
              (l.return = e),
              (e = l)),
          e
        );
      case 22:
        return If(t, e, l);
      case 24:
        return (
          Dl(e),
          (a = Gt(Ot)),
          t === null
            ? ((n = Gu()),
              n === null &&
                ((n = yt),
                (i = Yu()),
                (n.pooledCache = i),
                i.refCount++,
                i !== null && (n.pooledCacheLanes |= l),
                (n = i)),
              (e.memoizedState = { parent: a, cache: n }),
              Zu(e),
              ke(e, Ot, n))
            : ((t.lanes & l) !== 0 && (Lu(t, e), Ka(e, null, null, l), Va()),
              (n = t.memoizedState),
              (i = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  ke(e, Ot, a))
                : ((a = i.cache),
                  ke(e, Ot, a),
                  a !== n.cache && Bu(e, [Ot], l, !0))),
          Ct(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function Ye(t) {
    t.flags |= 4;
  }
  function so(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !vd(e))) {
      if (
        ((e = me.current),
        e !== null &&
          ((at & 4194048) === at
            ? Ee !== null
            : ((at & 62914560) !== at && (at & 536870912) === 0) || e !== Ee))
      )
        throw ((Za = Xu), Lr);
      t.flags |= 8192;
    }
  }
  function yi(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Ys() : 536870912), (t.lanes |= e), (da |= e)));
  }
  function Ia(t, e) {
    if (!ct)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            (e.alternate !== null && (l = e), (e = e.sibling));
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function St(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling));
    else
      for (n = t.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = l), e);
  }
  function P0(t, e, l) {
    var a = e.pendingProps;
    switch ((Nu(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (St(e), null);
      case 1:
        return (St(e), null);
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          qe(Ot),
          Le(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ha(e)
              ? Ye(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Yr())),
          St(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (Ye(e),
              l !== null ? (St(e), so(e, l)) : (St(e), (e.flags &= -16777217)))
            : l
              ? l !== t.memoizedState
                ? (Ye(e), St(e), so(e, l))
                : (St(e), (e.flags &= -16777217))
              : (t.memoizedProps !== a && Ye(e), St(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        (zn(e), (l = W.current));
        var n = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && Ye(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(o(166));
            return (St(e), null);
          }
          ((t = L.current),
            Ha(e) ? wr(e) : ((t = rd(n, a, l)), (e.stateNode = t), Ye(e)));
        }
        return (St(e), null);
      case 5:
        if ((zn(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Ye(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(o(166));
            return (St(e), null);
          }
          if (((t = L.current), Ha(e))) wr(e);
          else {
            switch (((n = Di(W.current)), t)) {
              case 1:
                t = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
                    );
                    break;
                  case "script":
                    ((t = n.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild)));
                    break;
                  case "select":
                    ((t =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size));
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            ((t[Qt] = e), (t[Vt] = a));
            t: for (n = e.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                ((n.child.return = n), (n = n.child));
                continue;
              }
              if (n === e) break t;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === e) break t;
                n = n.return;
              }
              ((n.sibling.return = n.return), (n = n.sibling));
            }
            e.stateNode = t;
            t: switch ((qt(t, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Ye(e);
          }
        }
        return (St(e), (e.flags &= -16777217), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Ye(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = W.current), Ha(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = Zt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((t[Qt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                ld(t.nodeValue, l)
              )),
              t || zl(e));
          } else
            ((t = Di(t).createTextNode(a)), (t[Qt] = e), (e.stateNode = t));
        }
        return (St(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = Ha(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(o(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(o(317));
              n[Qt] = e;
            } else
              (wa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (St(e), (n = !1));
          } else
            ((n = Yr()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return e.flags & 256 ? (we(e), e) : (we(e), null);
        }
        if ((we(e), (e.flags & 128) !== 0)) return ((e.lanes = l), e);
        if (
          ((l = a !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          ((a = e.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool));
          var i = null;
          (a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (i = a.memoizedState.cachePool.pool),
            i !== n && (a.flags |= 2048));
        }
        return (
          l !== t && l && (e.child.flags |= 8192),
          yi(e, e.updateQueue),
          St(e),
          null
        );
      case 4:
        return (Le(), t === null && Kc(e.stateNode.containerInfo), St(e), null);
      case 10:
        return (qe(e.type), St(e), null);
      case 19:
        if ((B(Dt), (n = e.memoizedState), n === null)) return (St(e), null);
        if (((a = (e.flags & 128) !== 0), (i = n.rendering), i === null))
          if (a) Ia(n, !1);
          else {
            if (jt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((i = fi(t)), i !== null)) {
                  for (
                    e.flags |= 128,
                      Ia(n, !1),
                      t = i.updateQueue,
                      e.updateQueue = t,
                      yi(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (qr(l, t), (l = l.sibling));
                  return (H(Dt, (Dt.current & 1) | 2), e.child);
                }
                t = t.sibling;
              }
            n.tail !== null &&
              je() > bi &&
              ((e.flags |= 128), (a = !0), Ia(n, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = fi(i)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                yi(e, t),
                Ia(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !i.alternate &&
                  !ct)
              )
                return (St(e), null);
            } else
              2 * je() - n.renderingStartTime > bi &&
                l !== 536870912 &&
                ((e.flags |= 128), (a = !0), Ia(n, !1), (e.lanes = 4194304));
          n.isBackwards
            ? ((i.sibling = e.child), (e.child = i))
            : ((t = n.last),
              t !== null ? (t.sibling = i) : (e.child = i),
              (n.last = i));
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = je()),
            (e.sibling = null),
            (t = Dt.current),
            H(Dt, a ? (t & 1) | 2 : t & 1),
            e)
          : (St(e), null);
      case 22:
      case 23:
        return (
          we(e),
          ku(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (St(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : St(e),
          (l = e.updateQueue),
          l !== null && yi(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && B(Ml),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          qe(Ot),
          St(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function I0(t, e) {
    switch ((Nu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          qe(Ot),
          Le(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (zn(e), null);
      case 13:
        if (
          (we(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          wa();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (B(Dt), null);
      case 4:
        return (Le(), null);
      case 10:
        return (qe(e.type), null);
      case 22:
      case 23:
        return (
          we(e),
          ku(),
          t !== null && B(Ml),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (qe(Ot), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ro(t, e) {
    switch ((Nu(e), e.tag)) {
      case 3:
        (qe(Ot), Le());
        break;
      case 26:
      case 27:
      case 5:
        zn(e);
        break;
      case 4:
        Le();
        break;
      case 13:
        we(e);
        break;
      case 19:
        B(Dt);
        break;
      case 10:
        qe(e.type);
        break;
      case 22:
      case 23:
        (we(e), ku(), t !== null && B(Ml));
        break;
      case 24:
        qe(Ot);
    }
  }
  function tn(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var i = l.create,
              c = l.inst;
            ((a = i()), (c.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (r) {
      mt(e, e.return, r);
    }
  }
  function el(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst,
              r = c.destroy;
            if (r !== void 0) {
              ((c.destroy = void 0), (n = e));
              var h = l,
                x = r;
              try {
                x();
              } catch (M) {
                mt(n, h, M);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (M) {
      mt(e, e.return, M);
    }
  }
  function fo(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Wr(e, l);
      } catch (a) {
        mt(t, t.return, a);
      }
    }
  }
  function oo(t, e, l) {
    ((l.props = _l(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      mt(t, e, a);
    }
  }
  function en(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      mt(t, e, n);
    }
  }
  function Ae(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          mt(t, e, n);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          mt(t, e, n);
        }
      else l.current = null;
  }
  function ho(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      mt(t, t.return, n);
    }
  }
  function jc(t, e, l) {
    try {
      var a = t.stateNode;
      (Sm(a, t.type, l, e), (a[Vt] = e));
    } catch (n) {
      mt(t, t.return, n);
    }
  }
  function mo(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && rl(t.type)) ||
      t.tag === 4
    );
  }
  function Tc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || mo(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && rl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ec(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Oi)));
    else if (
      a !== 4 &&
      (a === 27 && rl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Ec(t, e, l), t = t.sibling; t !== null; )
        (Ec(t, e, l), (t = t.sibling));
  }
  function gi(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && rl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (gi(t, e, l), t = t.sibling; t !== null; )
        (gi(t, e, l), (t = t.sibling));
  }
  function yo(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      (qt(e, a, l), (e[Qt] = t), (e[Vt] = l));
    } catch (i) {
      mt(t, t.return, i);
    }
  }
  var Qe = !1,
    Et = !1,
    Ac = !1,
    go = typeof WeakSet == "function" ? WeakSet : Set,
    _t = null;
  function tm(t, e) {
    if (((t = t.containerInfo), (Fc = Ni), (t = Ar(t)), Tu(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, i.nodeType);
            } catch {
              l = null;
              break t;
            }
            var c = 0,
              r = -1,
              h = -1,
              x = 0,
              M = 0,
              C = t,
              j = null;
            e: for (;;) {
              for (
                var E;
                C !== l || (n !== 0 && C.nodeType !== 3) || (r = c + n),
                  C !== i || (a !== 0 && C.nodeType !== 3) || (h = c + a),
                  C.nodeType === 3 && (c += C.nodeValue.length),
                  (E = C.firstChild) !== null;
              )
                ((j = C), (C = E));
              for (;;) {
                if (C === t) break e;
                if (
                  (j === l && ++x === n && (r = c),
                  j === i && ++M === a && (h = c),
                  (E = C.nextSibling) !== null)
                )
                  break;
                ((C = j), (j = C.parentNode));
              }
              C = E;
            }
            l = r === -1 || h === -1 ? null : { start: r, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Wc = { focusedElem: t, selectionRange: l }, Ni = !1, _t = e;
      _t !== null;
    )
      if (
        ((e = _t), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        ((t.return = e), (_t = t));
      else
        for (; _t !== null; ) {
          switch (((e = _t), (i = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                ((t = void 0),
                  (l = e),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = l.stateNode));
                try {
                  var F = _l(l.type, n, l.elementType === l.type);
                  ((t = a.getSnapshotBeforeUpdate(F, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
                } catch (V) {
                  mt(l, l.return, V);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  Ic(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ic(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (_t = t));
            break;
          }
          _t = e.return;
        }
  }
  function vo(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (ll(t, l), a & 4 && tn(5, l));
        break;
      case 1:
        if ((ll(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (c) {
              mt(l, l.return, c);
            }
          else {
            var n = _l(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              mt(l, l.return, c);
            }
          }
        (a & 64 && fo(l), a & 512 && en(l, l.return));
        break;
      case 3:
        if ((ll(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Wr(t, e);
          } catch (c) {
            mt(l, l.return, c);
          }
        }
        break;
      case 27:
        e === null && a & 4 && yo(l);
      case 26:
      case 5:
        (ll(t, l), e === null && a & 4 && ho(l), a & 512 && en(l, l.return));
        break;
      case 12:
        ll(t, l);
        break;
      case 13:
        (ll(t, l),
          a & 4 && So(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = rm.bind(null, l)), Om(t, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Qe), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || Et), (n = Qe));
          var i = Et;
          ((Qe = a),
            (Et = e) && !i ? al(t, l, (l.subtreeFlags & 8772) !== 0) : ll(t, l),
            (Qe = n),
            (Et = i));
        }
        break;
      case 30:
        break;
      default:
        ll(t, l);
    }
  }
  function bo(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), bo(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && nu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var bt = null,
    kt = !1;
  function Ge(t, e, l) {
    for (l = l.child; l !== null; ) (po(t, e, l), (l = l.sibling));
  }
  function po(t, e, l) {
    if (It && typeof It.onCommitFiberUnmount == "function")
      try {
        It.onCommitFiberUnmount(ja, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Et || Ae(l, e),
          Ge(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Et || Ae(l, e);
        var a = bt,
          n = kt;
        (rl(l.type) && ((bt = l.stateNode), (kt = !1)),
          Ge(t, e, l),
          on(l.stateNode),
          (bt = a),
          (kt = n));
        break;
      case 5:
        Et || Ae(l, e);
      case 6:
        if (
          ((a = bt),
          (n = kt),
          (bt = null),
          Ge(t, e, l),
          (bt = a),
          (kt = n),
          bt !== null)
        )
          if (kt)
            try {
              (bt.nodeType === 9
                ? bt.body
                : bt.nodeName === "HTML"
                  ? bt.ownerDocument.body
                  : bt
              ).removeChild(l.stateNode);
            } catch (i) {
              mt(l, e, i);
            }
          else
            try {
              bt.removeChild(l.stateNode);
            } catch (i) {
              mt(l, e, i);
            }
        break;
      case 18:
        bt !== null &&
          (kt
            ? ((t = bt),
              cd(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                l.stateNode,
              ),
              pn(t))
            : cd(bt, l.stateNode));
        break;
      case 4:
        ((a = bt),
          (n = kt),
          (bt = l.stateNode.containerInfo),
          (kt = !0),
          Ge(t, e, l),
          (bt = a),
          (kt = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Et || el(2, l, e), Et || el(4, l, e), Ge(t, e, l));
        break;
      case 1:
        (Et ||
          (Ae(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && oo(l, e, a)),
          Ge(t, e, l));
        break;
      case 21:
        Ge(t, e, l);
        break;
      case 22:
        ((Et = (a = Et) || l.memoizedState !== null), Ge(t, e, l), (Et = a));
        break;
      default:
        Ge(t, e, l);
    }
  }
  function So(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        pn(t);
      } catch (l) {
        mt(e, e.return, l);
      }
  }
  function em(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new go()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new go()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function zc(t, e) {
    var l = em(t);
    e.forEach(function (a) {
      var n = fm.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function ae(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          i = t,
          c = e,
          r = c;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (rl(r.type)) {
                ((bt = r.stateNode), (kt = !1));
                break t;
              }
              break;
            case 5:
              ((bt = r.stateNode), (kt = !1));
              break t;
            case 3:
            case 4:
              ((bt = r.stateNode.containerInfo), (kt = !0));
              break t;
          }
          r = r.return;
        }
        if (bt === null) throw Error(o(160));
        (po(i, c, n),
          (bt = null),
          (kt = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null));
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) (xo(e, t), (e = e.sibling));
  }
  var be = null;
  function xo(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ae(e, t),
          ne(t),
          a & 4 && (el(3, t, t.return), tn(3, t), el(5, t, t.return)));
        break;
      case 1:
        (ae(e, t),
          ne(t),
          a & 512 && (Et || l === null || Ae(l, l.return)),
          a & 64 &&
            Qe &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = be;
        if (
          (ae(e, t),
          ne(t),
          a & 512 && (Et || l === null || Ae(l, l.return)),
          a & 4)
        ) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type),
                    (l = t.memoizedProps),
                    (n = n.ownerDocument || n));
                  e: switch (a) {
                    case "title":
                      ((i = n.getElementsByTagName("title")[0]),
                        (!i ||
                          i[Aa] ||
                          i[Qt] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = n.createElement(a)),
                          n.head.insertBefore(
                            i,
                            n.querySelector("head > title"),
                          )),
                        qt(i, a, l),
                        (i[Qt] = t),
                        Mt(i),
                        (a = i));
                      break t;
                    case "link":
                      var c = yd("link", "href", n).get(a + (l.href || ""));
                      if (c) {
                        for (var r = 0; r < c.length; r++)
                          if (
                            ((i = c[r]),
                            i.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              i.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              i.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              i.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(r, 1);
                            break e;
                          }
                      }
                      ((i = n.createElement(a)),
                        qt(i, a, l),
                        n.head.appendChild(i));
                      break;
                    case "meta":
                      if (
                        (c = yd("meta", "content", n).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (r = 0; r < c.length; r++)
                          if (
                            ((i = c[r]),
                            i.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              i.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              i.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(r, 1);
                            break e;
                          }
                      }
                      ((i = n.createElement(a)),
                        qt(i, a, l),
                        n.head.appendChild(i));
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  ((i[Qt] = t), Mt(i), (a = i));
                }
                t.stateNode = a;
              } else gd(n, t.type, t.stateNode);
            else t.stateNode = md(n, a, t.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                a === null
                  ? gd(n, t.type, t.stateNode)
                  : md(n, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                jc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (ae(e, t),
          ne(t),
          a & 512 && (Et || l === null || Ae(l, l.return)),
          l !== null && a & 4 && jc(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (ae(e, t),
          ne(t),
          a & 512 && (Et || l === null || Ae(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            Ll(n, "");
          } catch (E) {
            mt(t, t.return, E);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), jc(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Ac = !0));
        break;
      case 6:
        if ((ae(e, t), ne(t), a & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          ((a = t.memoizedProps), (l = t.stateNode));
          try {
            l.nodeValue = a;
          } catch (E) {
            mt(t, t.return, E);
          }
        }
        break;
      case 3:
        if (
          ((_i = null),
          (n = be),
          (be = Mi(e.containerInfo)),
          ae(e, t),
          (be = n),
          ne(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            pn(e.containerInfo);
          } catch (E) {
            mt(t, t.return, E);
          }
        Ac && ((Ac = !1), jo(t));
        break;
      case 4:
        ((a = be),
          (be = Mi(t.stateNode.containerInfo)),
          ae(e, t),
          ne(t),
          (be = a));
        break;
      case 12:
        (ae(e, t), ne(t));
        break;
      case 13:
        (ae(e, t),
          ne(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Uc = je()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), zc(t, a))));
        break;
      case 22:
        n = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null,
          x = Qe,
          M = Et;
        if (
          ((Qe = x || n),
          (Et = M || h),
          ae(e, t),
          (Et = M),
          (Qe = x),
          ne(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || h || Qe || Et || Ul(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                h = l = e;
                try {
                  if (((i = h.stateNode), n))
                    ((c = i.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none"));
                  else {
                    r = h.stateNode;
                    var C = h.memoizedProps.style,
                      j =
                        C != null && C.hasOwnProperty("display")
                          ? C.display
                          : null;
                    r.style.display =
                      j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (E) {
                  mt(h, h.return, E);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                h = e;
                try {
                  h.stateNode.nodeValue = n ? "" : h.memoizedProps;
                } catch (E) {
                  mt(h, h.return, E);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (l === e && (l = null), (e = e.return));
            }
            (l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), zc(t, l))));
        break;
      case 19:
        (ae(e, t),
          ne(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), zc(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ae(e, t), ne(t));
    }
  }
  function ne(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (mo(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              i = Tc(t);
            gi(t, i, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (Ll(c, ""), (l.flags &= -33));
            var r = Tc(t);
            gi(t, r, c);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              x = Tc(t);
            Ec(t, x, h);
            break;
          default:
            throw Error(o(161));
        }
      } catch (M) {
        mt(t, t.return, M);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function jo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (jo(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function ll(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (vo(t, e.alternate, e), (e = e.sibling));
  }
  function Ul(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (el(4, e, e.return), Ul(e));
          break;
        case 1:
          Ae(e, e.return);
          var l = e.stateNode;
          (typeof l.componentWillUnmount == "function" && oo(e, e.return, l),
            Ul(e));
          break;
        case 27:
          on(e.stateNode);
        case 26:
        case 5:
          (Ae(e, e.return), Ul(e));
          break;
        case 22:
          e.memoizedState === null && Ul(e);
          break;
        case 30:
          Ul(e);
          break;
        default:
          Ul(e);
      }
      t = t.sibling;
    }
  }
  function al(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        i = e,
        c = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (al(n, i, l), tn(4, i));
          break;
        case 1:
          if (
            (al(n, i, l),
            (a = i),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (x) {
              mt(a, a.return, x);
            }
          if (((a = i), (n = a.updateQueue), n !== null)) {
            var r = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  Fr(h[n], r);
            } catch (x) {
              mt(a, a.return, x);
            }
          }
          (l && c & 64 && fo(i), en(i, i.return));
          break;
        case 27:
          yo(i);
        case 26:
        case 5:
          (al(n, i, l), l && a === null && c & 4 && ho(i), en(i, i.return));
          break;
        case 12:
          al(n, i, l);
          break;
        case 13:
          (al(n, i, l), l && c & 4 && So(n, i));
          break;
        case 22:
          (i.memoizedState === null && al(n, i, l), en(i, i.return));
          break;
        case 30:
          break;
        default:
          al(n, i, l);
      }
      e = e.sibling;
    }
  }
  function Oc(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && Qa(l)));
  }
  function Dc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Qa(t)));
  }
  function ze(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (To(t, e, l, a), (e = e.sibling));
  }
  function To(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ze(t, e, l, a), n & 2048 && tn(9, e));
        break;
      case 1:
        ze(t, e, l, a);
        break;
      case 3:
        (ze(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Qa(t))));
        break;
      case 12:
        if (n & 2048) {
          (ze(t, e, l, a), (t = e.stateNode));
          try {
            var i = e.memoizedProps,
              c = i.id,
              r = i.onPostCommit;
            typeof r == "function" &&
              r(
                c,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (h) {
            mt(e, e.return, h);
          }
        } else ze(t, e, l, a);
        break;
      case 13:
        ze(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        ((i = e.stateNode),
          (c = e.alternate),
          e.memoizedState !== null
            ? i._visibility & 2
              ? ze(t, e, l, a)
              : ln(t, e)
            : i._visibility & 2
              ? ze(t, e, l, a)
              : ((i._visibility |= 2),
                ra(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
          n & 2048 && Oc(c, e));
        break;
      case 24:
        (ze(t, e, l, a), n & 2048 && Dc(e.alternate, e));
        break;
      default:
        ze(t, e, l, a);
    }
  }
  function ra(t, e, l, a, n) {
    for (n = n && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var i = t,
        c = e,
        r = l,
        h = a,
        x = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (ra(i, c, r, h, n), tn(8, c));
          break;
        case 23:
          break;
        case 22:
          var M = c.stateNode;
          (c.memoizedState !== null
            ? M._visibility & 2
              ? ra(i, c, r, h, n)
              : ln(i, c)
            : ((M._visibility |= 2), ra(i, c, r, h, n)),
            n && x & 2048 && Oc(c.alternate, c));
          break;
        case 24:
          (ra(i, c, r, h, n), n && x & 2048 && Dc(c.alternate, c));
          break;
        default:
          ra(i, c, r, h, n);
      }
      e = e.sibling;
    }
  }
  function ln(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (ln(l, a), n & 2048 && Oc(a.alternate, a));
            break;
          case 24:
            (ln(l, a), n & 2048 && Dc(a.alternate, a));
            break;
          default:
            ln(l, a);
        }
        e = e.sibling;
      }
  }
  var an = 8192;
  function fa(t) {
    if (t.subtreeFlags & an)
      for (t = t.child; t !== null; ) (Eo(t), (t = t.sibling));
  }
  function Eo(t) {
    switch (t.tag) {
      case 26:
        (fa(t),
          t.flags & an &&
            t.memoizedState !== null &&
            Qm(be, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        fa(t);
        break;
      case 3:
      case 4:
        var e = be;
        ((be = Mi(t.stateNode.containerInfo)), fa(t), (be = e));
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = an), (an = 16777216), fa(t), (an = e))
            : fa(t));
        break;
      default:
        fa(t);
    }
  }
  function Ao(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function nn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((_t = a), Oo(a, t));
        }
      Ao(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (zo(t), (t = t.sibling));
  }
  function zo(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (nn(t), t.flags & 2048 && el(9, t, t.return));
        break;
      case 3:
        nn(t);
        break;
      case 12:
        nn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), vi(t))
          : nn(t);
        break;
      default:
        nn(t);
    }
  }
  function vi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ((_t = a), Oo(a, t));
        }
      Ao(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (el(8, e, e.return), vi(e));
          break;
        case 22:
          ((l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), vi(e)));
          break;
        default:
          vi(e);
      }
      t = t.sibling;
    }
  }
  function Oo(t, e) {
    for (; _t !== null; ) {
      var l = _t;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          el(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Qa(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (_t = a));
      else
        t: for (l = t; _t !== null; ) {
          a = _t;
          var n = a.sibling,
            i = a.return;
          if ((bo(a), a === l)) {
            _t = null;
            break t;
          }
          if (n !== null) {
            ((n.return = i), (_t = n));
            break t;
          }
          _t = i;
        }
    }
  }
  var lm = {
      getCacheForType: function (t) {
        var e = Gt(Ot),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
    },
    am = typeof WeakMap == "function" ? WeakMap : Map,
    st = 0,
    yt = null,
    et = null,
    at = 0,
    rt = 0,
    ie = null,
    nl = !1,
    oa = !1,
    Mc = !1,
    Xe = 0,
    jt = 0,
    il = 0,
    Cl = 0,
    Rc = 0,
    ye = 0,
    da = 0,
    un = null,
    Ft = null,
    _c = !1,
    Uc = 0,
    bi = 1 / 0,
    pi = null,
    ul = null,
    Nt = 0,
    cl = null,
    ha = null,
    ma = 0,
    Cc = 0,
    Nc = null,
    Do = null,
    cn = 0,
    qc = null;
  function ue() {
    if ((st & 2) !== 0 && at !== 0) return at & -at;
    if (R.T !== null) {
      var t = ea;
      return t !== 0 ? t : Xc();
    }
    return Xs();
  }
  function Mo() {
    ye === 0 && (ye = (at & 536870912) === 0 || ct ? Bs() : 536870912);
    var t = me.current;
    return (t !== null && (t.flags |= 32), ye);
  }
  function ce(t, e, l) {
    (((t === yt && (rt === 2 || rt === 9)) || t.cancelPendingCommit !== null) &&
      (ya(t, 0), sl(t, at, ye, !1)),
      Ea(t, l),
      ((st & 2) === 0 || t !== yt) &&
        (t === yt &&
          ((st & 2) === 0 && (Cl |= l), jt === 4 && sl(t, at, ye, !1)),
        Oe(t)));
  }
  function Ro(t, e, l) {
    if ((st & 6) !== 0) throw Error(o(327));
    var a = (!l && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Ta(t, e),
      n = a ? um(t, e) : Bc(t, e, !0),
      i = a;
    do {
      if (n === 0) {
        oa && !a && sl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), i && !nm(l))) {
          ((n = Bc(t, e, !1)), (i = !1));
          continue;
        }
        if (n === 2) {
          if (((i = e), t.errorRecoveryDisabledLanes & i)) var c = 0;
          else
            ((c = t.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
          if (c !== 0) {
            e = c;
            t: {
              var r = t;
              n = un;
              var h = r.current.memoizedState.isDehydrated;
              if ((h && (ya(r, c).flags |= 256), (c = Bc(r, c, !1)), c !== 2)) {
                if (Mc && !h) {
                  ((r.errorRecoveryDisabledLanes |= i), (Cl |= i), (n = 4));
                  break t;
                }
                ((i = Ft),
                  (Ft = n),
                  i !== null &&
                    (Ft === null ? (Ft = i) : Ft.push.apply(Ft, i)));
              }
              n = c;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (ya(t, 0), sl(t, e, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (i = n), i)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              sl(a, e, ye, !nl);
              break t;
            case 2:
              Ft = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((n = Uc + 300 - je()), 10 < n)) {
            if ((sl(a, e, ye, !nl), Rn(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = id(
              _o.bind(null, a, l, Ft, pi, _c, e, ye, Cl, da, nl, i, 2, -0, 0),
              n,
            );
            break t;
          }
          _o(a, l, Ft, pi, _c, e, ye, Cl, da, nl, i, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Oe(t);
  }
  function _o(t, e, l, a, n, i, c, r, h, x, M, C, j, E) {
    if (
      ((t.timeoutHandle = -1),
      (C = e.subtreeFlags),
      (C & 8192 || (C & 16785408) === 16785408) &&
        ((mn = { stylesheets: null, count: 0, unsuspend: Ym }),
        Eo(e),
        (C = Gm()),
        C !== null))
    ) {
      ((t.cancelPendingCommit = C(
        Bo.bind(null, t, e, i, l, a, n, c, r, h, M, 1, j, E),
      )),
        sl(t, i, c, !x));
      return;
    }
    Bo(t, e, i, l, a, n, c, r, h);
  }
  function nm(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!ee(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        ((l.return = e), (e = l));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function sl(t, e, l, a) {
    ((e &= ~Rc),
      (e &= ~Cl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var n = e; 0 < n; ) {
      var i = 31 - te(n),
        c = 1 << i;
      ((a[i] = -1), (n &= ~c));
    }
    l !== 0 && Qs(t, l, e);
  }
  function Si() {
    return (st & 6) === 0 ? (sn(0), !1) : !0;
  }
  function Hc() {
    if (et !== null) {
      if (rt === 0) var t = et.return;
      else ((t = et), (Ne = Ol = null), Iu(t), (ca = null), ($a = 0), (t = et));
      for (; t !== null; ) (ro(t.alternate, t), (t = t.return));
      et = null;
    }
  }
  function ya(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), jm(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Hc(),
      (yt = t),
      (et = l = _e(t.current, null)),
      (at = e),
      (rt = 0),
      (ie = null),
      (nl = !1),
      (oa = Ta(t, e)),
      (Mc = !1),
      (da = ye = Rc = Cl = il = jt = 0),
      (Ft = un = null),
      (_c = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - te(a),
          i = 1 << n;
        ((e |= t[n]), (a &= ~i));
      }
    return ((Xe = e), Xn(), l);
  }
  function Uo(t, e) {
    ((P = null),
      (R.H = ci),
      e === Xa || e === $n
        ? ((e = Jr()), (rt = 3))
        : e === Lr
          ? ((e = Jr()), (rt = 4))
          : (rt =
              e === Ff
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (ie = e),
      et === null && ((jt = 1), di(t, fe(e, t.current))));
  }
  function Co() {
    var t = R.H;
    return ((R.H = ci), t === null ? ci : t);
  }
  function No() {
    var t = R.A;
    return ((R.A = lm), t);
  }
  function wc() {
    ((jt = 4),
      nl || ((at & 4194048) !== at && me.current !== null) || (oa = !0),
      ((il & 134217727) === 0 && (Cl & 134217727) === 0) ||
        yt === null ||
        sl(yt, at, ye, !1));
  }
  function Bc(t, e, l) {
    var a = st;
    st |= 2;
    var n = Co(),
      i = No();
    ((yt !== t || at !== e) && ((pi = null), ya(t, e)), (e = !1));
    var c = jt;
    t: do
      try {
        if (rt !== 0 && et !== null) {
          var r = et,
            h = ie;
          switch (rt) {
            case 8:
              (Hc(), (c = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              me.current === null && (e = !0);
              var x = rt;
              if (((rt = 0), (ie = null), ga(t, r, h, x), l && oa)) {
                c = 0;
                break t;
              }
              break;
            default:
              ((x = rt), (rt = 0), (ie = null), ga(t, r, h, x));
          }
        }
        (im(), (c = jt));
        break;
      } catch (M) {
        Uo(t, M);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Ne = Ol = null),
      (st = a),
      (R.H = n),
      (R.A = i),
      et === null && ((yt = null), (at = 0), Xn()),
      c
    );
  }
  function im() {
    for (; et !== null; ) qo(et);
  }
  function um(t, e) {
    var l = st;
    st |= 2;
    var a = Co(),
      n = No();
    yt !== t || at !== e
      ? ((pi = null), (bi = je() + 500), ya(t, e))
      : (oa = Ta(t, e));
    t: do
      try {
        if (rt !== 0 && et !== null) {
          e = et;
          var i = ie;
          e: switch (rt) {
            case 1:
              ((rt = 0), (ie = null), ga(t, e, i, 1));
              break;
            case 2:
            case 9:
              if (Vr(i)) {
                ((rt = 0), (ie = null), Ho(e));
                break;
              }
              ((e = function () {
                ((rt !== 2 && rt !== 9) || yt !== t || (rt = 7), Oe(t));
              }),
                i.then(e, e));
              break t;
            case 3:
              rt = 7;
              break t;
            case 4:
              rt = 5;
              break t;
            case 7:
              Vr(i)
                ? ((rt = 0), (ie = null), Ho(e))
                : ((rt = 0), (ie = null), ga(t, e, i, 7));
              break;
            case 5:
              var c = null;
              switch (et.tag) {
                case 26:
                  c = et.memoizedState;
                case 5:
                case 27:
                  var r = et;
                  if (!c || vd(c)) {
                    ((rt = 0), (ie = null));
                    var h = r.sibling;
                    if (h !== null) et = h;
                    else {
                      var x = r.return;
                      x !== null ? ((et = x), xi(x)) : (et = null);
                    }
                    break e;
                  }
              }
              ((rt = 0), (ie = null), ga(t, e, i, 5));
              break;
            case 6:
              ((rt = 0), (ie = null), ga(t, e, i, 6));
              break;
            case 8:
              (Hc(), (jt = 6));
              break t;
            default:
              throw Error(o(462));
          }
        }
        cm();
        break;
      } catch (M) {
        Uo(t, M);
      }
    while (!0);
    return (
      (Ne = Ol = null),
      (R.H = a),
      (R.A = n),
      (st = l),
      et !== null ? 0 : ((yt = null), (at = 0), Xn(), jt)
    );
  }
  function cm() {
    for (; et !== null && !Mh(); ) qo(et);
  }
  function qo(t) {
    var e = co(t.alternate, t, Xe);
    ((t.memoizedProps = t.pendingProps), e === null ? xi(t) : (et = e));
  }
  function Ho(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = eo(l, e, e.pendingProps, e.type, void 0, at);
        break;
      case 11:
        e = eo(l, e, e.pendingProps, e.type.render, e.ref, at);
        break;
      case 5:
        Iu(e);
      default:
        (ro(l, e), (e = et = qr(e, Xe)), (e = co(l, e, Xe)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? xi(t) : (et = e));
  }
  function ga(t, e, l, a) {
    ((Ne = Ol = null), Iu(e), (ca = null), ($a = 0));
    var n = e.return;
    try {
      if (W0(t, n, e, l, at)) {
        ((jt = 1), di(t, fe(l, t.current)), (et = null));
        return;
      }
    } catch (i) {
      if (n !== null) throw ((et = n), i);
      ((jt = 1), di(t, fe(l, t.current)), (et = null));
      return;
    }
    e.flags & 32768
      ? (ct || a === 1
          ? (t = !0)
          : oa || (at & 536870912) !== 0
            ? (t = !1)
            : ((nl = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = me.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        wo(e, t))
      : xi(e);
  }
  function xi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        wo(e, nl);
        return;
      }
      t = e.return;
      var l = P0(e.alternate, e, Xe);
      if (l !== null) {
        et = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        et = e;
        return;
      }
      et = e = t;
    } while (e !== null);
    jt === 0 && (jt = 5);
  }
  function wo(t, e) {
    do {
      var l = I0(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (et = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        et = t;
        return;
      }
      et = t = l;
    } while (t !== null);
    ((jt = 6), (et = null));
  }
  function Bo(t, e, l, a, n, i, c, r, h) {
    t.cancelPendingCommit = null;
    do ji();
    while (Nt !== 0);
    if ((st & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((i = e.lanes | e.childLanes),
        (i |= Du),
        Yh(t, l, i, c, r, h),
        t === yt && ((et = yt = null), (at = 0)),
        (ha = e),
        (cl = t),
        (ma = l),
        (Cc = i),
        (Nc = n),
        (Do = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            om(On, function () {
              return (Zo(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = R.T), (R.T = null), (n = w.p), (w.p = 2), (c = st), (st |= 4));
        try {
          tm(t, e, l);
        } finally {
          ((st = c), (w.p = n), (R.T = a));
        }
      }
      ((Nt = 1), Yo(), Qo(), Go());
    }
  }
  function Yo() {
    if (Nt === 1) {
      Nt = 0;
      var t = cl,
        e = ha,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ((l = R.T), (R.T = null));
        var a = w.p;
        w.p = 2;
        var n = st;
        st |= 4;
        try {
          xo(e, t);
          var i = Wc,
            c = Ar(t.containerInfo),
            r = i.focusedElem,
            h = i.selectionRange;
          if (
            c !== r &&
            r &&
            r.ownerDocument &&
            Er(r.ownerDocument.documentElement, r)
          ) {
            if (h !== null && Tu(r)) {
              var x = h.start,
                M = h.end;
              if ((M === void 0 && (M = x), "selectionStart" in r))
                ((r.selectionStart = x),
                  (r.selectionEnd = Math.min(M, r.value.length)));
              else {
                var C = r.ownerDocument || document,
                  j = (C && C.defaultView) || window;
                if (j.getSelection) {
                  var E = j.getSelection(),
                    F = r.textContent.length,
                    V = Math.min(h.start, F),
                    dt = h.end === void 0 ? V : Math.min(h.end, F);
                  !E.extend && V > dt && ((c = dt), (dt = V), (V = c));
                  var v = Tr(r, V),
                    g = Tr(r, dt);
                  if (
                    v &&
                    g &&
                    (E.rangeCount !== 1 ||
                      E.anchorNode !== v.node ||
                      E.anchorOffset !== v.offset ||
                      E.focusNode !== g.node ||
                      E.focusOffset !== g.offset)
                  ) {
                    var p = C.createRange();
                    (p.setStart(v.node, v.offset),
                      E.removeAllRanges(),
                      V > dt
                        ? (E.addRange(p), E.extend(g.node, g.offset))
                        : (p.setEnd(g.node, g.offset), E.addRange(p)));
                  }
                }
              }
            }
            for (C = [], E = r; (E = E.parentNode); )
              E.nodeType === 1 &&
                C.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
            for (
              typeof r.focus == "function" && r.focus(), r = 0;
              r < C.length;
              r++
            ) {
              var _ = C[r];
              ((_.element.scrollLeft = _.left), (_.element.scrollTop = _.top));
            }
          }
          ((Ni = !!Fc), (Wc = Fc = null));
        } finally {
          ((st = n), (w.p = a), (R.T = l));
        }
      }
      ((t.current = e), (Nt = 2));
    }
  }
  function Qo() {
    if (Nt === 2) {
      Nt = 0;
      var t = cl,
        e = ha,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = R.T), (R.T = null));
        var a = w.p;
        w.p = 2;
        var n = st;
        st |= 4;
        try {
          vo(t, e.alternate, e);
        } finally {
          ((st = n), (w.p = a), (R.T = l));
        }
      }
      Nt = 3;
    }
  }
  function Go() {
    if (Nt === 4 || Nt === 3) {
      ((Nt = 0), Rh());
      var t = cl,
        e = ha,
        l = ma,
        a = Do;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Nt = 5)
        : ((Nt = 0), (ha = cl = null), Xo(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (ul = null),
        lu(l),
        (e = e.stateNode),
        It && typeof It.onCommitFiberRoot == "function")
      )
        try {
          It.onCommitFiberRoot(ja, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((e = R.T), (n = w.p), (w.p = 2), (R.T = null));
        try {
          for (var i = t.onRecoverableError, c = 0; c < a.length; c++) {
            var r = a[c];
            i(r.value, { componentStack: r.stack });
          }
        } finally {
          ((R.T = e), (w.p = n));
        }
      }
      ((ma & 3) !== 0 && ji(),
        Oe(t),
        (n = t.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0
          ? t === qc
            ? cn++
            : ((cn = 0), (qc = t))
          : (cn = 0),
        sn(0));
    }
  }
  function Xo(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Qa(e)));
  }
  function ji(t) {
    return (Yo(), Qo(), Go(), Zo());
  }
  function Zo() {
    if (Nt !== 5) return !1;
    var t = cl,
      e = Cc;
    Cc = 0;
    var l = lu(ma),
      a = R.T,
      n = w.p;
    try {
      ((w.p = 32 > l ? 32 : l), (R.T = null), (l = Nc), (Nc = null));
      var i = cl,
        c = ma;
      if (((Nt = 0), (ha = cl = null), (ma = 0), (st & 6) !== 0))
        throw Error(o(331));
      var r = st;
      if (
        ((st |= 4),
        zo(i.current),
        To(i, i.current, c, l),
        (st = r),
        sn(0, !1),
        It && typeof It.onPostCommitFiberRoot == "function")
      )
        try {
          It.onPostCommitFiberRoot(ja, i);
        } catch {}
      return !0;
    } finally {
      ((w.p = n), (R.T = a), Xo(t, e));
    }
  }
  function Lo(t, e, l) {
    ((e = fe(l, e)),
      (e = hc(t.stateNode, e, 2)),
      (t = $e(t, e, 2)),
      t !== null && (Ea(t, 2), Oe(t)));
  }
  function mt(t, e, l) {
    if (t.tag === 3) Lo(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Lo(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ul === null || !ul.has(a)))
          ) {
            ((t = fe(l, t)),
              (l = Jf(2)),
              (a = $e(e, l, 2)),
              a !== null && (kf(l, a, e, t), Ea(a, 2), Oe(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Yc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new am();
      var n = new Set();
      a.set(e, n);
    } else ((n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n)));
    n.has(l) ||
      ((Mc = !0), n.add(l), (t = sm.bind(null, t, e, l)), e.then(t, t));
  }
  function sm(t, e, l) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      yt === t &&
        (at & l) === l &&
        (jt === 4 || (jt === 3 && (at & 62914560) === at && 300 > je() - Uc)
          ? (st & 2) === 0 && ya(t, 0)
          : (Rc |= l),
        da === at && (da = 0)),
      Oe(t));
  }
  function Vo(t, e) {
    (e === 0 && (e = Ys()), (t = $l(t, e)), t !== null && (Ea(t, e), Oe(t)));
  }
  function rm(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), Vo(t, l));
  }
  function fm(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (a !== null && a.delete(e), Vo(t, l));
  }
  function om(t, e) {
    return Pi(t, e);
  }
  var Ti = null,
    va = null,
    Qc = !1,
    Ei = !1,
    Gc = !1,
    Nl = 0;
  function Oe(t) {
    (t !== va &&
      t.next === null &&
      (va === null ? (Ti = va = t) : (va = va.next = t)),
      (Ei = !0),
      Qc || ((Qc = !0), hm()));
  }
  function sn(t, e) {
    if (!Gc && Ei) {
      Gc = !0;
      do
        for (var l = !1, a = Ti; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var c = a.suspendedLanes,
                r = a.pingedLanes;
              ((i = (1 << (31 - te(42 | t) + 1)) - 1),
                (i &= n & ~(c & ~r)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0));
            }
            i !== 0 && ((l = !0), Fo(a, i));
          } else
            ((i = at),
              (i = Rn(
                a,
                a === yt ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (i & 3) === 0 || Ta(a, i) || ((l = !0), Fo(a, i)));
          a = a.next;
        }
      while (l);
      Gc = !1;
    }
  }
  function dm() {
    Ko();
  }
  function Ko() {
    Ei = Qc = !1;
    var t = 0;
    Nl !== 0 && (xm() && (t = Nl), (Nl = 0));
    for (var e = je(), l = null, a = Ti; a !== null; ) {
      var n = a.next,
        i = Jo(a, e);
      (i === 0
        ? ((a.next = null),
          l === null ? (Ti = n) : (l.next = n),
          n === null && (va = l))
        : ((l = a), (t !== 0 || (i & 3) !== 0) && (Ei = !0)),
        (a = n));
    }
    sn(t);
  }
  function Jo(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        i = t.pendingLanes & -62914561;
      0 < i;
    ) {
      var c = 31 - te(i),
        r = 1 << c,
        h = n[c];
      (h === -1
        ? ((r & l) === 0 || (r & a) !== 0) && (n[c] = Bh(r, e))
        : h <= e && (t.expiredLanes |= r),
        (i &= ~r));
    }
    if (
      ((e = yt),
      (l = at),
      (l = Rn(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (rt === 2 || rt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Ii(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ta(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && Ii(a), lu(l))) {
        case 2:
        case 8:
          l = Hs;
          break;
        case 32:
          l = On;
          break;
        case 268435456:
          l = ws;
          break;
        default:
          l = On;
      }
      return (
        (a = ko.bind(null, t)),
        (l = Pi(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && Ii(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function ko(t, e) {
    if (Nt !== 0 && Nt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (ji() && t.callbackNode !== l) return null;
    var a = at;
    return (
      (a = Rn(
        t,
        t === yt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Ro(t, a, e),
          Jo(t, je()),
          t.callbackNode != null && t.callbackNode === l
            ? ko.bind(null, t)
            : null)
    );
  }
  function Fo(t, e) {
    if (ji()) return null;
    Ro(t, e, !0);
  }
  function hm() {
    Tm(function () {
      (st & 6) !== 0 ? Pi(qs, dm) : Ko();
    });
  }
  function Xc() {
    return (Nl === 0 && (Nl = Bs()), Nl);
  }
  function Wo(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : qn("" + t);
  }
  function $o(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function mm(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var i = Wo((n[Vt] || null).action),
        c = a.submitter;
      c &&
        ((e = (e = c[Vt] || null)
          ? Wo(e.formAction)
          : c.getAttribute("formAction")),
        e !== null && ((i = e), (c = null)));
      var r = new Yn("action", "action", null, a, n);
      t.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Nl !== 0) {
                  var h = c ? $o(n, c) : new FormData(n);
                  sc(
                    l,
                    { pending: !0, data: h, method: n.method, action: i },
                    null,
                    h,
                  );
                }
              } else
                typeof i == "function" &&
                  (r.preventDefault(),
                  (h = c ? $o(n, c) : new FormData(n)),
                  sc(
                    l,
                    { pending: !0, data: h, method: n.method, action: i },
                    i,
                    h,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Zc = 0; Zc < Ou.length; Zc++) {
    var Lc = Ou[Zc],
      ym = Lc.toLowerCase(),
      gm = Lc[0].toUpperCase() + Lc.slice(1);
    ve(ym, "on" + gm);
  }
  (ve(Dr, "onAnimationEnd"),
    ve(Mr, "onAnimationIteration"),
    ve(Rr, "onAnimationStart"),
    ve("dblclick", "onDoubleClick"),
    ve("focusin", "onFocus"),
    ve("focusout", "onBlur"),
    ve(C0, "onTransitionRun"),
    ve(N0, "onTransitionStart"),
    ve(q0, "onTransitionCancel"),
    ve(_r, "onTransitionEnd"),
    Gl("onMouseEnter", ["mouseout", "mouseover"]),
    Gl("onMouseLeave", ["mouseout", "mouseover"]),
    Gl("onPointerEnter", ["pointerout", "pointerover"]),
    Gl("onPointerLeave", ["pointerout", "pointerover"]),
    bl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    bl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    bl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    bl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    bl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    bl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var rn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    vm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(rn),
    );
  function Po(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var r = a[c],
              h = r.instance,
              x = r.currentTarget;
            if (((r = r.listener), h !== i && n.isPropagationStopped()))
              break t;
            ((i = r), (n.currentTarget = x));
            try {
              i(n);
            } catch (M) {
              oi(M);
            }
            ((n.currentTarget = null), (i = h));
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((r = a[c]),
              (h = r.instance),
              (x = r.currentTarget),
              (r = r.listener),
              h !== i && n.isPropagationStopped())
            )
              break t;
            ((i = r), (n.currentTarget = x));
            try {
              i(n);
            } catch (M) {
              oi(M);
            }
            ((n.currentTarget = null), (i = h));
          }
      }
    }
  }
  function lt(t, e) {
    var l = e[au];
    l === void 0 && (l = e[au] = new Set());
    var a = t + "__bubble";
    l.has(a) || (Io(e, t, 2, !1), l.add(a));
  }
  function Vc(t, e, l) {
    var a = 0;
    (e && (a |= 4), Io(l, t, a, e));
  }
  var Ai = "_reactListening" + Math.random().toString(36).slice(2);
  function Kc(t) {
    if (!t[Ai]) {
      ((t[Ai] = !0),
        Ls.forEach(function (l) {
          l !== "selectionchange" && (vm.has(l) || Vc(l, !1, t), Vc(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ai] || ((e[Ai] = !0), Vc("selectionchange", !1, e));
    }
  }
  function Io(t, e, l, a) {
    switch (Td(e)) {
      case 2:
        var n = Lm;
        break;
      case 8:
        n = Vm;
        break;
      default:
        n = us;
    }
    ((l = n.bind(null, e, l, t)),
      (n = void 0),
      !mu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
          ? t.addEventListener(e, l, { passive: n })
          : t.addEventListener(e, l, !1));
  }
  function Jc(t, e, l, a, n) {
    var i = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var r = a.stateNode.containerInfo;
          if (r === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var h = c.tag;
              if ((h === 3 || h === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; r !== null; ) {
            if (((c = Bl(r)), c === null)) return;
            if (((h = c.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              a = i = c;
              continue t;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
    nr(function () {
      var x = i,
        M = du(l),
        C = [];
      t: {
        var j = Ur.get(t);
        if (j !== void 0) {
          var E = Yn,
            F = t;
          switch (t) {
            case "keypress":
              if (wn(l) === 0) break t;
            case "keydown":
            case "keyup":
              E = o0;
              break;
            case "focusin":
              ((F = "focus"), (E = bu));
              break;
            case "focusout":
              ((F = "blur"), (E = bu));
              break;
            case "beforeblur":
            case "afterblur":
              E = bu;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              E = cr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = Ih;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = m0;
              break;
            case Dr:
            case Mr:
            case Rr:
              E = l0;
              break;
            case _r:
              E = g0;
              break;
            case "scroll":
            case "scrollend":
              E = $h;
              break;
            case "wheel":
              E = b0;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = n0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = rr;
              break;
            case "toggle":
            case "beforetoggle":
              E = S0;
          }
          var V = (e & 4) !== 0,
            dt = !V && (t === "scroll" || t === "scrollend"),
            v = V ? (j !== null ? j + "Capture" : null) : j;
          V = [];
          for (var g = x, p; g !== null; ) {
            var _ = g;
            if (
              ((p = _.stateNode),
              (_ = _.tag),
              (_ !== 5 && _ !== 26 && _ !== 27) ||
                p === null ||
                v === null ||
                ((_ = Oa(g, v)), _ != null && V.push(fn(g, _, p))),
              dt)
            )
              break;
            g = g.return;
          }
          0 < V.length &&
            ((j = new E(j, F, null, l, M)), C.push({ event: j, listeners: V }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((j = t === "mouseover" || t === "pointerover"),
            (E = t === "mouseout" || t === "pointerout"),
            j &&
              l !== ou &&
              (F = l.relatedTarget || l.fromElement) &&
              (Bl(F) || F[wl]))
          )
            break t;
          if (
            (E || j) &&
            ((j =
              M.window === M
                ? M
                : (j = M.ownerDocument)
                  ? j.defaultView || j.parentWindow
                  : window),
            E
              ? ((F = l.relatedTarget || l.toElement),
                (E = x),
                (F = F ? Bl(F) : null),
                F !== null &&
                  ((dt = A(F)),
                  (V = F.tag),
                  F !== dt || (V !== 5 && V !== 27 && V !== 6)) &&
                  (F = null))
              : ((E = null), (F = x)),
            E !== F)
          ) {
            if (
              ((V = cr),
              (_ = "onMouseLeave"),
              (v = "onMouseEnter"),
              (g = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((V = rr),
                (_ = "onPointerLeave"),
                (v = "onPointerEnter"),
                (g = "pointer")),
              (dt = E == null ? j : za(E)),
              (p = F == null ? j : za(F)),
              (j = new V(_, g + "leave", E, l, M)),
              (j.target = dt),
              (j.relatedTarget = p),
              (_ = null),
              Bl(M) === x &&
                ((V = new V(v, g + "enter", F, l, M)),
                (V.target = p),
                (V.relatedTarget = dt),
                (_ = V)),
              (dt = _),
              E && F)
            )
              e: {
                for (V = E, v = F, g = 0, p = V; p; p = ba(p)) g++;
                for (p = 0, _ = v; _; _ = ba(_)) p++;
                for (; 0 < g - p; ) ((V = ba(V)), g--);
                for (; 0 < p - g; ) ((v = ba(v)), p--);
                for (; g--; ) {
                  if (V === v || (v !== null && V === v.alternate)) break e;
                  ((V = ba(V)), (v = ba(v)));
                }
                V = null;
              }
            else V = null;
            (E !== null && td(C, j, E, V, !1),
              F !== null && dt !== null && td(C, dt, F, V, !0));
          }
        }
        t: {
          if (
            ((j = x ? za(x) : window),
            (E = j.nodeName && j.nodeName.toLowerCase()),
            E === "select" || (E === "input" && j.type === "file"))
          )
            var G = vr;
          else if (yr(j))
            if (br) G = R0;
            else {
              G = D0;
              var I = O0;
            }
          else
            ((E = j.nodeName),
              !E ||
              E.toLowerCase() !== "input" ||
              (j.type !== "checkbox" && j.type !== "radio")
                ? x && fu(x.elementType) && (G = vr)
                : (G = M0));
          if (G && (G = G(t, x))) {
            gr(C, G, l, M);
            break t;
          }
          (I && I(t, j, x),
            t === "focusout" &&
              x &&
              j.type === "number" &&
              x.memoizedProps.value != null &&
              ru(j, "number", j.value));
        }
        switch (((I = x ? za(x) : window), t)) {
          case "focusin":
            (yr(I) || I.contentEditable === "true") &&
              ((kl = I), (Eu = x), (qa = null));
            break;
          case "focusout":
            qa = Eu = kl = null;
            break;
          case "mousedown":
            Au = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Au = !1), zr(C, l, M));
            break;
          case "selectionchange":
            if (U0) break;
          case "keydown":
          case "keyup":
            zr(C, l, M);
        }
        var Z;
        if (Su)
          t: {
            switch (t) {
              case "compositionstart":
                var J = "onCompositionStart";
                break t;
              case "compositionend":
                J = "onCompositionEnd";
                break t;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break t;
            }
            J = void 0;
          }
        else
          Jl
            ? hr(t, l) && (J = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (J = "onCompositionStart");
        (J &&
          (fr &&
            l.locale !== "ko" &&
            (Jl || J !== "onCompositionStart"
              ? J === "onCompositionEnd" && Jl && (Z = ir())
              : ((Je = M),
                (yu = "value" in Je ? Je.value : Je.textContent),
                (Jl = !0))),
          (I = zi(x, J)),
          0 < I.length &&
            ((J = new sr(J, t, null, l, M)),
            C.push({ event: J, listeners: I }),
            Z ? (J.data = Z) : ((Z = mr(l)), Z !== null && (J.data = Z)))),
          (Z = j0 ? T0(t, l) : E0(t, l)) &&
            ((J = zi(x, "onBeforeInput")),
            0 < J.length &&
              ((I = new sr("onBeforeInput", "beforeinput", null, l, M)),
              C.push({ event: I, listeners: J }),
              (I.data = Z))),
          mm(C, t, x, l, M));
      }
      Po(C, e);
    });
  }
  function fn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function zi(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t,
        i = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = Oa(t, l)),
          n != null && a.unshift(fn(t, n, i)),
          (n = Oa(t, e)),
          n != null && a.push(fn(t, n, i))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function ba(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function td(t, e, l, a, n) {
    for (var i = e._reactName, c = []; l !== null && l !== a; ) {
      var r = l,
        h = r.alternate,
        x = r.stateNode;
      if (((r = r.tag), h !== null && h === a)) break;
      ((r !== 5 && r !== 26 && r !== 27) ||
        x === null ||
        ((h = x),
        n
          ? ((x = Oa(l, i)), x != null && c.unshift(fn(l, x, h)))
          : n || ((x = Oa(l, i)), x != null && c.push(fn(l, x, h)))),
        (l = l.return));
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var bm = /\r\n?/g,
    pm = /\u0000|\uFFFD/g;
  function ed(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        bm,
        `
`,
      )
      .replace(pm, "");
  }
  function ld(t, e) {
    return ((e = ed(e)), ed(t) === e);
  }
  function Oi() {}
  function ot(t, e, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Ll(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Ll(t, "" + a);
        break;
      case "className":
        Un(t, "class", a);
        break;
      case "tabIndex":
        Un(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Un(t, l, a);
        break;
      case "style":
        lr(t, a, i);
        break;
      case "data":
        if (e !== "object") {
          Un(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        ((a = qn("" + a)), t.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof i == "function" &&
            (l === "formAction"
              ? (e !== "input" && ot(t, e, "name", n.name, n, null),
                ot(t, e, "formEncType", n.formEncType, n, null),
                ot(t, e, "formMethod", n.formMethod, n, null),
                ot(t, e, "formTarget", n.formTarget, n, null))
              : (ot(t, e, "encType", n.encType, n, null),
                ot(t, e, "method", n.method, n, null),
                ot(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        ((a = qn("" + a)), t.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (t.onclick = Oi);
        break;
      case "onScroll":
        a != null && lt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && lt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(o(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((l = qn("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(l, a)
            : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        (lt("beforetoggle", t), lt("toggle", t), _n(t, "popover", a));
        break;
      case "xlinkActuate":
        Me(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Me(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Me(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Me(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Me(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Me(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Me(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Me(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Me(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        _n(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Fh.get(l) || l), _n(t, l, a));
    }
  }
  function kc(t, e, l, a, n, i) {
    switch (l) {
      case "style":
        lr(t, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(o(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Ll(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Ll(t, "" + a);
        break;
      case "onScroll":
        a != null && lt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && lt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Oi);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Vs.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (i = t[Vt] || null),
              (i = i != null ? i[l] : null),
              typeof i == "function" && t.removeEventListener(e, i, n),
              typeof a == "function")
            ) {
              (typeof i != "function" &&
                i !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n));
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
                ? t.setAttribute(l, "")
                : _n(t, l, a);
          }
    }
  }
  function qt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (lt("error", t), lt("load", t));
        var a = !1,
          n = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var c = l[i];
            if (c != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  ot(t, e, i, c, l, null);
              }
          }
        (n && ot(t, e, "srcSet", l.srcSet, l, null),
          a && ot(t, e, "src", l.src, l, null));
        return;
      case "input":
        lt("invalid", t);
        var r = (i = c = n = null),
          h = null,
          x = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var M = l[a];
            if (M != null)
              switch (a) {
                case "name":
                  n = M;
                  break;
                case "type":
                  c = M;
                  break;
                case "checked":
                  h = M;
                  break;
                case "defaultChecked":
                  x = M;
                  break;
                case "value":
                  i = M;
                  break;
                case "defaultValue":
                  r = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null) throw Error(o(137, e));
                  break;
                default:
                  ot(t, e, a, M, l, null);
              }
          }
        (Ps(t, i, r, h, x, c, n, !1), Cn(t));
        return;
      case "select":
        (lt("invalid", t), (a = c = i = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((r = l[n]), r != null))
            switch (n) {
              case "value":
                i = r;
                break;
              case "defaultValue":
                c = r;
                break;
              case "multiple":
                a = r;
              default:
                ot(t, e, n, r, l, null);
            }
        ((e = i),
          (l = c),
          (t.multiple = !!a),
          e != null ? Zl(t, !!a, e, !1) : l != null && Zl(t, !!a, l, !0));
        return;
      case "textarea":
        (lt("invalid", t), (i = n = a = null));
        for (c in l)
          if (l.hasOwnProperty(c) && ((r = l[c]), r != null))
            switch (c) {
              case "value":
                a = r;
                break;
              case "defaultValue":
                n = r;
                break;
              case "children":
                i = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(o(91));
                break;
              default:
                ot(t, e, c, r, l, null);
            }
        (tr(t, a, n, i), Cn(t));
        return;
      case "option":
        for (h in l)
          l.hasOwnProperty(h) &&
            ((a = l[h]), a != null) &&
            (h === "selected"
              ? (t.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : ot(t, e, h, a, l, null));
        return;
      case "dialog":
        (lt("beforetoggle", t),
          lt("toggle", t),
          lt("cancel", t),
          lt("close", t));
        break;
      case "iframe":
      case "object":
        lt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < rn.length; a++) lt(rn[a], t);
        break;
      case "image":
        (lt("error", t), lt("load", t));
        break;
      case "details":
        lt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (lt("error", t), lt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (x in l)
          if (l.hasOwnProperty(x) && ((a = l[x]), a != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                ot(t, e, x, a, l, null);
            }
        return;
      default:
        if (fu(e)) {
          for (M in l)
            l.hasOwnProperty(M) &&
              ((a = l[M]), a !== void 0 && kc(t, e, M, a, l, void 0));
          return;
        }
    }
    for (r in l)
      l.hasOwnProperty(r) && ((a = l[r]), a != null && ot(t, e, r, a, l, null));
  }
  function Sm(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          i = null,
          c = null,
          r = null,
          h = null,
          x = null,
          M = null;
        for (E in l) {
          var C = l[E];
          if (l.hasOwnProperty(E) && C != null)
            switch (E) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = C;
              default:
                a.hasOwnProperty(E) || ot(t, e, E, null, a, C);
            }
        }
        for (var j in a) {
          var E = a[j];
          if (((C = l[j]), a.hasOwnProperty(j) && (E != null || C != null)))
            switch (j) {
              case "type":
                i = E;
                break;
              case "name":
                n = E;
                break;
              case "checked":
                x = E;
                break;
              case "defaultChecked":
                M = E;
                break;
              case "value":
                c = E;
                break;
              case "defaultValue":
                r = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(o(137, e));
                break;
              default:
                E !== C && ot(t, e, j, E, a, C);
            }
        }
        su(t, c, r, h, x, M, i, n);
        return;
      case "select":
        E = c = r = j = null;
        for (i in l)
          if (((h = l[i]), l.hasOwnProperty(i) && h != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                E = h;
              default:
                a.hasOwnProperty(i) || ot(t, e, i, null, a, h);
            }
        for (n in a)
          if (
            ((i = a[n]),
            (h = l[n]),
            a.hasOwnProperty(n) && (i != null || h != null))
          )
            switch (n) {
              case "value":
                j = i;
                break;
              case "defaultValue":
                r = i;
                break;
              case "multiple":
                c = i;
              default:
                i !== h && ot(t, e, n, i, a, h);
            }
        ((e = r),
          (l = c),
          (a = E),
          j != null
            ? Zl(t, !!l, j, !1)
            : !!a != !!l &&
              (e != null ? Zl(t, !!l, e, !0) : Zl(t, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        E = j = null;
        for (r in l)
          if (
            ((n = l[r]),
            l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r))
          )
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                ot(t, e, r, null, a, n);
            }
        for (c in a)
          if (
            ((n = a[c]),
            (i = l[c]),
            a.hasOwnProperty(c) && (n != null || i != null))
          )
            switch (c) {
              case "value":
                j = n;
                break;
              case "defaultValue":
                E = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== i && ot(t, e, c, n, a, i);
            }
        Is(t, j, E);
        return;
      case "option":
        for (var F in l)
          ((j = l[F]),
            l.hasOwnProperty(F) &&
              j != null &&
              !a.hasOwnProperty(F) &&
              (F === "selected" ? (t.selected = !1) : ot(t, e, F, null, a, j)));
        for (h in a)
          ((j = a[h]),
            (E = l[h]),
            a.hasOwnProperty(h) &&
              j !== E &&
              (j != null || E != null) &&
              (h === "selected"
                ? (t.selected =
                    j && typeof j != "function" && typeof j != "symbol")
                : ot(t, e, h, j, a, E)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var V in l)
          ((j = l[V]),
            l.hasOwnProperty(V) &&
              j != null &&
              !a.hasOwnProperty(V) &&
              ot(t, e, V, null, a, j));
        for (x in a)
          if (
            ((j = a[x]),
            (E = l[x]),
            a.hasOwnProperty(x) && j !== E && (j != null || E != null))
          )
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(o(137, e));
                break;
              default:
                ot(t, e, x, j, a, E);
            }
        return;
      default:
        if (fu(e)) {
          for (var dt in l)
            ((j = l[dt]),
              l.hasOwnProperty(dt) &&
                j !== void 0 &&
                !a.hasOwnProperty(dt) &&
                kc(t, e, dt, void 0, a, j));
          for (M in a)
            ((j = a[M]),
              (E = l[M]),
              !a.hasOwnProperty(M) ||
                j === E ||
                (j === void 0 && E === void 0) ||
                kc(t, e, M, j, a, E));
          return;
        }
    }
    for (var v in l)
      ((j = l[v]),
        l.hasOwnProperty(v) &&
          j != null &&
          !a.hasOwnProperty(v) &&
          ot(t, e, v, null, a, j));
    for (C in a)
      ((j = a[C]),
        (E = l[C]),
        !a.hasOwnProperty(C) ||
          j === E ||
          (j == null && E == null) ||
          ot(t, e, C, j, a, E));
  }
  var Fc = null,
    Wc = null;
  function Di(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function ad(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function nd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function $c(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Pc = null;
  function xm() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Pc
        ? !1
        : ((Pc = t), !0)
      : ((Pc = null), !1);
  }
  var id = typeof setTimeout == "function" ? setTimeout : void 0,
    jm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ud = typeof Promise == "function" ? Promise : void 0,
    Tm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ud < "u"
          ? function (t) {
              return ud.resolve(null).then(t).catch(Em);
            }
          : id;
  function Em(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function rl(t) {
    return t === "head";
  }
  function cd(t, e) {
    var l = e,
      a = 0,
      n = 0;
    do {
      var i = l.nextSibling;
      if ((t.removeChild(l), i && i.nodeType === 8))
        if (((l = i.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var c = t.ownerDocument;
            if ((l & 1 && on(c.documentElement), l & 2 && on(c.body), l & 4))
              for (l = c.head, on(l), c = l.firstChild; c; ) {
                var r = c.nextSibling,
                  h = c.nodeName;
                (c[Aa] ||
                  h === "SCRIPT" ||
                  h === "STYLE" ||
                  (h === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(c),
                  (c = r));
              }
          }
          if (n === 0) {
            (t.removeChild(i), pn(e));
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? n++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = i;
    } while (l);
    pn(e);
  }
  function Ic(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Ic(l), nu(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Am(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Aa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((i = t.getAttribute("rel")),
                i === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== n.rel ||
                t.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                t.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((i = t.getAttribute("src")),
                (i !== (n.src == null ? null : n.src) ||
                  t.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  t.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  i &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === i) return t;
      } else return t;
      if (((t = pe(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function zm(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = pe(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function ts(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function Om(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete") e();
    else {
      var a = function () {
        (e(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
    }
  }
  function pe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var es = null;
  function sd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function rd(t, e, l) {
    switch (((e = Di(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function on(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    nu(t);
  }
  var ge = new Map(),
    fd = new Set();
  function Mi(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Ze = w.d;
  w.d = { f: Dm, r: Mm, D: Rm, C: _m, L: Um, m: Cm, X: qm, S: Nm, M: Hm };
  function Dm() {
    var t = Ze.f(),
      e = Si();
    return t || e;
  }
  function Mm(t) {
    var e = Yl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Mf(e) : Ze.r(t);
  }
  var pa = typeof document > "u" ? null : document;
  function od(t, e, l) {
    var a = pa;
    if (a && typeof e == "string" && e) {
      var n = re(e);
      ((n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        fd.has(n) ||
          (fd.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement("link")),
            qt(e, "link", t),
            Mt(e),
            a.head.appendChild(e))));
    }
  }
  function Rm(t) {
    (Ze.D(t), od("dns-prefetch", t, null));
  }
  function _m(t, e) {
    (Ze.C(t, e), od("preconnect", t, e));
  }
  function Um(t, e, l) {
    Ze.L(t, e, l);
    var a = pa;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + re(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + re(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + re(l.imageSizes) + '"]'))
        : (n += '[href="' + re(t) + '"]');
      var i = n;
      switch (e) {
        case "style":
          i = Sa(t);
          break;
        case "script":
          i = xa(t);
      }
      ge.has(i) ||
        ((t = z(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        ge.set(i, t),
        a.querySelector(n) !== null ||
          (e === "style" && a.querySelector(dn(i))) ||
          (e === "script" && a.querySelector(hn(i))) ||
          ((e = a.createElement("link")),
          qt(e, "link", t),
          Mt(e),
          a.head.appendChild(e)));
    }
  }
  function Cm(t, e) {
    Ze.m(t, e);
    var l = pa;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n =
          'link[rel="modulepreload"][as="' + re(a) + '"][href="' + re(t) + '"]',
        i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = xa(t);
      }
      if (
        !ge.has(i) &&
        ((t = z({ rel: "modulepreload", href: t }, e)),
        ge.set(i, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(hn(i))) return;
        }
        ((a = l.createElement("link")),
          qt(a, "link", t),
          Mt(a),
          l.head.appendChild(a));
      }
    }
  }
  function Nm(t, e, l) {
    Ze.S(t, e, l);
    var a = pa;
    if (a && t) {
      var n = Ql(a).hoistableStyles,
        i = Sa(t);
      e = e || "default";
      var c = n.get(i);
      if (!c) {
        var r = { loading: 0, preload: null };
        if ((c = a.querySelector(dn(i)))) r.loading = 5;
        else {
          ((t = z({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = ge.get(i)) && ls(t, l));
          var h = (c = a.createElement("link"));
          (Mt(h),
            qt(h, "link", t),
            (h._p = new Promise(function (x, M) {
              ((h.onload = x), (h.onerror = M));
            })),
            h.addEventListener("load", function () {
              r.loading |= 1;
            }),
            h.addEventListener("error", function () {
              r.loading |= 2;
            }),
            (r.loading |= 4),
            Ri(c, e, a));
        }
        ((c = { type: "stylesheet", instance: c, count: 1, state: r }),
          n.set(i, c));
      }
    }
  }
  function qm(t, e) {
    Ze.X(t, e);
    var l = pa;
    if (l && t) {
      var a = Ql(l).hoistableScripts,
        n = xa(t),
        i = a.get(n);
      i ||
        ((i = l.querySelector(hn(n))),
        i ||
          ((t = z({ src: t, async: !0 }, e)),
          (e = ge.get(n)) && as(t, e),
          (i = l.createElement("script")),
          Mt(i),
          qt(i, "link", t),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function Hm(t, e) {
    Ze.M(t, e);
    var l = pa;
    if (l && t) {
      var a = Ql(l).hoistableScripts,
        n = xa(t),
        i = a.get(n);
      i ||
        ((i = l.querySelector(hn(n))),
        i ||
          ((t = z({ src: t, async: !0, type: "module" }, e)),
          (e = ge.get(n)) && as(t, e),
          (i = l.createElement("script")),
          Mt(i),
          qt(i, "link", t),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function dd(t, e, l, a) {
    var n = (n = W.current) ? Mi(n) : null;
    if (!n) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Sa(l.href)),
            (l = Ql(n).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Sa(l.href);
          var i = Ql(n).hoistableStyles,
            c = i.get(t);
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(t, c),
              (i = n.querySelector(dn(t))) &&
                !i._p &&
                ((c.instance = i), (c.state.loading = 5)),
              ge.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                ge.set(t, l),
                i || wm(n, t, l, c.state))),
            e && a === null)
          )
            throw Error(o(528, ""));
          return c;
        }
        if (e && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = xa(l)),
              (l = Ql(n).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function Sa(t) {
    return 'href="' + re(t) + '"';
  }
  function dn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function hd(t) {
    return z({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function wm(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        qt(e, "link", l),
        Mt(e),
        t.head.appendChild(e));
  }
  function xa(t) {
    return '[src="' + re(t) + '"]';
  }
  function hn(t) {
    return "script[async]" + t;
  }
  function md(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + re(l.href) + '"]');
          if (a) return ((e.instance = a), Mt(a), a);
          var n = z({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Mt(a),
            qt(a, "style", n),
            Ri(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          n = Sa(l.href);
          var i = t.querySelector(dn(n));
          if (i) return ((e.state.loading |= 4), (e.instance = i), Mt(i), i);
          ((a = hd(l)),
            (n = ge.get(n)) && ls(a, n),
            (i = (t.ownerDocument || t).createElement("link")),
            Mt(i));
          var c = i;
          return (
            (c._p = new Promise(function (r, h) {
              ((c.onload = r), (c.onerror = h));
            })),
            qt(i, "link", a),
            (e.state.loading |= 4),
            Ri(i, l.precedence, t),
            (e.instance = i)
          );
        case "script":
          return (
            (i = xa(l.src)),
            (n = t.querySelector(hn(i)))
              ? ((e.instance = n), Mt(n), n)
              : ((a = l),
                (n = ge.get(i)) && ((a = z({}, l)), as(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement("script")),
                Mt(n),
                qt(n, "link", a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Ri(a, l.precedence, t));
    return e.instance;
  }
  function Ri(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        i = n,
        c = 0;
      c < a.length;
      c++
    ) {
      var r = a[c];
      if (r.dataset.precedence === e) i = r;
      else if (i !== n) break;
    }
    i
      ? i.parentNode.insertBefore(t, i.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function ls(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function as(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var _i = null;
  function yd(t, e, l) {
    if (_i === null) {
      var a = new Map(),
        n = (_i = new Map());
      n.set(l, a);
    } else ((n = _i), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var i = l[n];
      if (
        !(
          i[Aa] ||
          i[Qt] ||
          (t === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = i.getAttribute(e) || "";
        c = t + c;
        var r = a.get(c);
        r ? r.push(i) : a.set(c, [i]);
      }
    }
    return a;
  }
  function gd(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function Bm(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function vd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var mn = null;
  function Ym() {}
  function Qm(t, e, l) {
    if (mn === null) throw Error(o(475));
    var a = mn;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var n = Sa(l.href),
          i = t.querySelector(dn(n));
        if (i) {
          ((t = i._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Ui.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = i),
            Mt(i));
          return;
        }
        ((i = t.ownerDocument || t),
          (l = hd(l)),
          (n = ge.get(n)) && ls(l, n),
          (i = i.createElement("link")),
          Mt(i));
        var c = i;
        ((c._p = new Promise(function (r, h) {
          ((c.onload = r), (c.onerror = h));
        })),
          qt(i, "link", l),
          (e.instance = i));
      }
      (a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = Ui.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e)));
    }
  }
  function Gm() {
    if (mn === null) throw Error(o(475));
    var t = mn;
    return (
      t.stylesheets && t.count === 0 && ns(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && ns(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                ((t.unsuspend = null), a());
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                ((t.unsuspend = null), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function Ui() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) ns(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Ci = null;
  function ns(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Ci = new Map()),
        e.forEach(Xm, t),
        (Ci = null),
        Ui.call(t)));
  }
  function Xm(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Ci.get(t);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), Ci.set(t, l));
        for (
          var n = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            i = 0;
          i < n.length;
          i++
        ) {
          var c = n[i];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (l.set(c.dataset.precedence, c), (a = c));
        }
        a && l.set(null, a);
      }
      ((n = e.instance),
        (c = n.getAttribute("data-precedence")),
        (i = l.get(c) || a),
        i === a && l.set(null, n),
        l.set(c, n),
        this.count++,
        (a = Ui.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        i
          ? i.parentNode.insertBefore(n, i.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var yn = {
    $$typeof: gt,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0,
  };
  function Zm(t, e, l, a, n, i, c, r) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = tu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = tu(0)),
      (this.hiddenUpdates = tu(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = r),
      (this.incompleteTransitions = new Map()));
  }
  function bd(t, e, l, a, n, i, c, r, h, x, M, C) {
    return (
      (t = new Zm(t, e, l, c, r, h, x, C)),
      (e = 1),
      i === !0 && (e |= 24),
      (i = le(3, null, null, e)),
      (t.current = i),
      (i.stateNode = t),
      (e = Yu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (i.memoizedState = { element: a, isDehydrated: l, cache: e }),
      Zu(i),
      t
    );
  }
  function pd(t) {
    return t ? ((t = Pl), t) : Pl;
  }
  function Sd(t, e, l, a, n, i) {
    ((n = pd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = We(e)),
      (a.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (l = $e(t, a, e)),
      l !== null && (ce(l, t, e), La(l, t, e)));
  }
  function xd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function is(t, e) {
    (xd(t, e), (t = t.alternate) && xd(t, e));
  }
  function jd(t) {
    if (t.tag === 13) {
      var e = $l(t, 67108864);
      (e !== null && ce(e, t, 67108864), is(t, 67108864));
    }
  }
  var Ni = !0;
  function Lm(t, e, l, a) {
    var n = R.T;
    R.T = null;
    var i = w.p;
    try {
      ((w.p = 2), us(t, e, l, a));
    } finally {
      ((w.p = i), (R.T = n));
    }
  }
  function Vm(t, e, l, a) {
    var n = R.T;
    R.T = null;
    var i = w.p;
    try {
      ((w.p = 8), us(t, e, l, a));
    } finally {
      ((w.p = i), (R.T = n));
    }
  }
  function us(t, e, l, a) {
    if (Ni) {
      var n = cs(a);
      if (n === null) (Jc(t, e, a, qi, l), Ed(t, a));
      else if (Jm(n, t, e, l, a)) a.stopPropagation();
      else if ((Ed(t, a), e & 4 && -1 < Km.indexOf(t))) {
        for (; n !== null; ) {
          var i = Yl(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var c = vl(i.pendingLanes);
                  if (c !== 0) {
                    var r = i;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; c; ) {
                      var h = 1 << (31 - te(c));
                      ((r.entanglements[1] |= h), (c &= ~h));
                    }
                    (Oe(i), (st & 6) === 0 && ((bi = je() + 500), sn(0)));
                  }
                }
                break;
              case 13:
                ((r = $l(i, 2)), r !== null && ce(r, i, 2), Si(), is(i, 2));
            }
          if (((i = cs(a)), i === null && Jc(t, e, a, qi, l), i === n)) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else Jc(t, e, a, null, l);
    }
  }
  function cs(t) {
    return ((t = du(t)), ss(t));
  }
  var qi = null;
  function ss(t) {
    if (((qi = null), (t = Bl(t)), t !== null)) {
      var e = A(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = U(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((qi = t), null);
  }
  function Td(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (_h()) {
          case qs:
            return 2;
          case Hs:
            return 8;
          case On:
          case Uh:
            return 32;
          case ws:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rs = !1,
    fl = null,
    ol = null,
    dl = null,
    gn = new Map(),
    vn = new Map(),
    hl = [],
    Km =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Ed(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        fl = null;
        break;
      case "dragenter":
      case "dragleave":
        ol = null;
        break;
      case "mouseover":
      case "mouseout":
        dl = null;
        break;
      case "pointerover":
      case "pointerout":
        gn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        vn.delete(e.pointerId);
    }
  }
  function bn(t, e, l, a, n, i) {
    return t === null || t.nativeEvent !== i
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [n],
        }),
        e !== null && ((e = Yl(e)), e !== null && jd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function Jm(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return ((fl = bn(fl, t, e, l, a, n)), !0);
      case "dragenter":
        return ((ol = bn(ol, t, e, l, a, n)), !0);
      case "mouseover":
        return ((dl = bn(dl, t, e, l, a, n)), !0);
      case "pointerover":
        var i = n.pointerId;
        return (gn.set(i, bn(gn.get(i) || null, t, e, l, a, n)), !0);
      case "gotpointercapture":
        return (
          (i = n.pointerId),
          vn.set(i, bn(vn.get(i) || null, t, e, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function Ad(t) {
    var e = Bl(t.target);
    if (e !== null) {
      var l = A(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = U(l)), e !== null)) {
            ((t.blockedOn = e),
              Qh(t.priority, function () {
                if (l.tag === 13) {
                  var a = ue();
                  a = eu(a);
                  var n = $l(l, a);
                  (n !== null && ce(n, l, a), is(l, a));
                }
              }));
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Hi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = cs(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((ou = a), l.target.dispatchEvent(a), (ou = null));
      } else return ((e = Yl(l)), e !== null && jd(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function zd(t, e, l) {
    Hi(t) && l.delete(e);
  }
  function km() {
    ((rs = !1),
      fl !== null && Hi(fl) && (fl = null),
      ol !== null && Hi(ol) && (ol = null),
      dl !== null && Hi(dl) && (dl = null),
      gn.forEach(zd),
      vn.forEach(zd));
  }
  function wi(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      rs ||
        ((rs = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, km)));
  }
  var Bi = null;
  function Od(t) {
    Bi !== t &&
      ((Bi = t),
      u.unstable_scheduleCallback(u.unstable_NormalPriority, function () {
        Bi === t && (Bi = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != "function") {
            if (ss(a || l) === null) continue;
            break;
          }
          var i = Yl(l);
          i !== null &&
            (t.splice(e, 3),
            (e -= 3),
            sc(i, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function pn(t) {
    function e(h) {
      return wi(h, t);
    }
    (fl !== null && wi(fl, t),
      ol !== null && wi(ol, t),
      dl !== null && wi(dl, t),
      gn.forEach(e),
      vn.forEach(e));
    for (var l = 0; l < hl.length; l++) {
      var a = hl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < hl.length && ((l = hl[0]), l.blockedOn === null); )
      (Ad(l), l.blockedOn === null && hl.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          i = l[a + 1],
          c = n[Vt] || null;
        if (typeof i == "function") c || Od(l);
        else if (c) {
          var r = null;
          if (i && i.hasAttribute("formAction")) {
            if (((n = i), (c = i[Vt] || null))) r = c.formAction;
            else if (ss(n) !== null) continue;
          } else r = c.action;
          (typeof r == "function" ? (l[a + 1] = r) : (l.splice(a, 3), (a -= 3)),
            Od(l));
        }
      }
  }
  function fs(t) {
    this._internalRoot = t;
  }
  ((Yi.prototype.render = fs.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var l = e.current,
        a = ue();
      Sd(l, a, t, e, null, null);
    }),
    (Yi.prototype.unmount = fs.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Sd(t.current, 2, null, t, null, null), Si(), (e[wl] = null));
        }
      }));
  function Yi(t) {
    this._internalRoot = t;
  }
  Yi.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Xs();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < hl.length && e !== 0 && e < hl[l].priority; l++);
      (hl.splice(l, 0, t), l === 0 && Ad(t));
    }
  };
  var Dd = s.version;
  if (Dd !== "19.1.0") throw Error(o(527, Dd, "19.1.0"));
  w.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = T(e)),
      (t = t !== null ? b(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Fm = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qi.isDisabled && Qi.supportsFiber)
      try {
        ((ja = Qi.inject(Fm)), (It = Qi));
      } catch {}
  }
  return (
    (xn.createRoot = function (t, e) {
      if (!m(t)) throw Error(o(299));
      var l = !1,
        a = "",
        n = Zf,
        i = Lf,
        c = Vf,
        r = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (r = e.unstable_transitionCallbacks)),
        (e = bd(t, 1, !1, null, null, l, a, n, i, c, r, null)),
        (t[wl] = e.current),
        Kc(t),
        new fs(e)
      );
    }),
    (xn.hydrateRoot = function (t, e, l) {
      if (!m(t)) throw Error(o(299));
      var a = !1,
        n = "",
        i = Zf,
        c = Lf,
        r = Vf,
        h = null,
        x = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (r = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (h = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (x = l.formState)),
        (e = bd(t, 1, !0, e, l ?? null, a, n, i, c, r, h, x)),
        (e.context = pd(null)),
        (l = e.current),
        (a = ue()),
        (a = eu(a)),
        (n = We(a)),
        (n.callback = null),
        $e(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Ea(e, l),
        Oe(e),
        (t[wl] = e.current),
        Kc(t),
        new Yi(e)
      );
    }),
    (xn.version = "19.1.0"),
    xn
  );
}
var Bd;
function cy() {
  if (Bd) return ds.exports;
  Bd = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (s) {
        console.error(s);
      }
  }
  return (u(), (ds.exports = uy()), ds.exports);
}
var sy = cy(),
  X = Vi();
const ry = Pm(X),
  fy = $m({ __proto__: null, default: ry }, [X]);
function oy(u, s) {
  if (u instanceof RegExp) return { keys: !1, pattern: u };
  var f,
    o,
    m,
    A,
    U = [],
    D = "",
    T = u.split("/");
  for (T[0] || T.shift(); (m = T.shift()); )
    ((f = m[0]),
      f === "*"
        ? (U.push(f), (D += m[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : f === ":"
          ? ((o = m.indexOf("?", 1)),
            (A = m.indexOf(".", 1)),
            U.push(m.substring(1, ~o ? o : ~A ? A : m.length)),
            (D += ~o && !~A ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~A && (D += (~o ? "?" : "") + "\\" + m.substring(A)))
          : (D += "/" + m));
  return {
    keys: U,
    pattern: new RegExp("^" + D + (s ? "(?=$|/)" : "/?$"), "i"),
  };
}
var vs = { exports: {} },
  bs = {};
var Yd;
function dy() {
  if (Yd) return bs;
  Yd = 1;
  var u = Vi();
  function s(O, S) {
    return (O === S && (O !== 0 || 1 / O === 1 / S)) || (O !== O && S !== S);
  }
  var f = typeof Object.is == "function" ? Object.is : s,
    o = u.useState,
    m = u.useEffect,
    A = u.useLayoutEffect,
    U = u.useDebugValue;
  function D(O, S) {
    var q = S(),
      Y = o({ inst: { value: q, getSnapshot: S } }),
      Q = Y[0].inst,
      K = Y[1];
    return (
      A(
        function () {
          ((Q.value = q), (Q.getSnapshot = S), T(Q) && K({ inst: Q }));
        },
        [O, q, S],
      ),
      m(
        function () {
          return (
            T(Q) && K({ inst: Q }),
            O(function () {
              T(Q) && K({ inst: Q });
            })
          );
        },
        [O],
      ),
      U(q),
      q
    );
  }
  function T(O) {
    var S = O.getSnapshot;
    O = O.value;
    try {
      var q = S();
      return !f(O, q);
    } catch {
      return !0;
    }
  }
  function b(O, S) {
    return S();
  }
  var z =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? b
      : D;
  return (
    (bs.useSyncExternalStore =
      u.useSyncExternalStore !== void 0 ? u.useSyncExternalStore : z),
    bs
  );
}
var Qd;
function hy() {
  return (Qd || ((Qd = 1), (vs.exports = dy())), vs.exports);
}
var my = hy();
const yy = fy.useInsertionEffect,
  gy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  vy = gy ? X.useLayoutEffect : X.useEffect,
  by = yy || vy,
  sh = (u) => {
    const s = X.useRef([u, (...f) => s[0](...f)]).current;
    return (
      by(() => {
        s[0] = u;
      }),
      s[1]
    );
  },
  py = "popstate",
  Os = "pushState",
  Ds = "replaceState",
  Sy = "hashchange",
  Gd = [py, Os, Ds, Sy],
  xy = (u) => {
    for (const s of Gd) addEventListener(s, u);
    return () => {
      for (const s of Gd) removeEventListener(s, u);
    };
  },
  rh = (u, s) => my.useSyncExternalStore(xy, u, s),
  Xd = () => location.search,
  jy = ({ ssrSearch: u } = {}) => rh(Xd, u != null ? () => u : Xd),
  Zd = () => location.pathname,
  Ty = ({ ssrPath: u } = {}) => rh(Zd, u != null ? () => u : Zd),
  Ey = (u, { replace: s = !1, state: f = null } = {}) =>
    history[s ? Ds : Os](f, "", u),
  Ay = (u = {}) => [Ty(u), Ey],
  Ld = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Ld] > "u") {
  for (const u of [Os, Ds]) {
    const s = history[u];
    history[u] = function () {
      const f = s.apply(this, arguments),
        o = new Event(u);
      return ((o.arguments = arguments), dispatchEvent(o), f);
    };
  }
  Object.defineProperty(window, Ld, { value: !0 });
}
const zy = (u, s) =>
    s.toLowerCase().indexOf(u.toLowerCase())
      ? "~" + s
      : s.slice(u.length) || "/",
  fh = (u = "") => (u === "/" ? "" : u),
  Oy = (u, s) => (u[0] === "~" ? u.slice(1) : fh(s) + u),
  Dy = (u = "", s) => zy(Vd(fh(u)), Vd(s)),
  Vd = (u) => {
    try {
      return decodeURI(u);
    } catch {
      return u;
    }
  },
  oh = {
    hook: Ay,
    searchHook: jy,
    parser: oy,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (u) => u,
    aroundNav: (u, s, f) => u(s, f),
  },
  dh = X.createContext(oh),
  An = () => X.useContext(dh),
  hh = {},
  mh = X.createContext(hh),
  yh = () => X.useContext(mh),
  Ki = (u) => {
    const [s, f] = u.hook(u);
    return [Dy(u.base, s), sh((o, m) => u.aroundNav(f, Oy(o, u.base), m))];
  },
  Ms = () => Ki(An()),
  gh = (u, s, f, o) => {
    const { pattern: m, keys: A } =
        s instanceof RegExp ? { keys: !1, pattern: s } : u(s || "*", o),
      U = m.exec(f) || [],
      [D, ...T] = U;
    return D !== void 0
      ? [
          !0,
          (() => {
            const b =
              A !== !1
                ? Object.fromEntries(A.map((O, S) => [O, T[S]]))
                : U.groups;
            let z = { ...T };
            return (b && Object.assign(z, b), z);
          })(),
          ...(o ? [D] : []),
        ]
      : [!1, null];
  },
  vh = ({ children: u, ...s }) => {
    const f = An(),
      o = s.hook ? oh : f;
    let m = o;
    const [A, U = s.ssrSearch ?? ""] = s.ssrPath?.split("?") ?? [];
    (A && ((s.ssrSearch = U), (s.ssrPath = A)),
      (s.hrefs = s.hrefs ?? s.hook?.hrefs),
      (s.searchHook = s.searchHook ?? s.hook?.searchHook));
    let D = X.useRef({}),
      T = D.current,
      b = T;
    for (let z in o) {
      const O = z === "base" ? o[z] + (s[z] ?? "") : (s[z] ?? o[z]);
      (T === b && O !== b[z] && (D.current = b = { ...b }),
        (b[z] = O),
        (O !== o[z] || O !== m[z]) && (m = b));
    }
    return X.createElement(dh.Provider, { value: m, children: u });
  },
  Kd = ({ children: u, component: s }, f) =>
    s ? X.createElement(s, { params: f }) : typeof u == "function" ? u(f) : u,
  My = (u) => {
    let s = X.useRef(hh);
    const f = s.current;
    return (s.current =
      Object.keys(u).length !== Object.keys(f).length ||
      Object.entries(u).some(([o, m]) => m !== f[o])
        ? u
        : f);
  },
  ql = ({ path: u, nest: s, match: f, ...o }) => {
    const m = An(),
      [A] = Ki(m),
      [U, D, T] = f ?? gh(m.parser, u, A, s),
      b = My({ ...yh(), ...D });
    if (!U) return null;
    const z = T ? X.createElement(vh, { base: T }, Kd(o, b)) : Kd(o, b);
    return X.createElement(mh.Provider, { value: b, children: z });
  };
X.forwardRef((u, s) => {
  const f = An(),
    [o, m] = Ki(f),
    {
      to: A = "",
      href: U = A,
      onClick: D,
      asChild: T,
      children: b,
      className: z,
      replace: O,
      state: S,
      transition: q,
      ...Y
    } = u,
    Q = sh((ut) => {
      ut.ctrlKey ||
        ut.metaKey ||
        ut.altKey ||
        ut.shiftKey ||
        ut.button !== 0 ||
        (D?.(ut), ut.defaultPrevented || (ut.preventDefault(), m(U, u)));
    }),
    K = f.hrefs(U[0] === "~" ? U.slice(1) : f.base + U, f);
  return T && X.isValidElement(b)
    ? X.cloneElement(b, { onClick: Q, href: K })
    : X.createElement("a", {
        ...Y,
        onClick: Q,
        href: K,
        className: z?.call ? z(o === U) : z,
        children: b,
        ref: s,
      });
});
const bh = (u) =>
    Array.isArray(u)
      ? u.flatMap((s) => bh(s && s.type === X.Fragment ? s.props.children : s))
      : [u],
  Ry = ({ children: u, location: s }) => {
    const f = An(),
      [o] = Ki(f);
    for (const m of bh(u)) {
      let A = 0;
      if (
        X.isValidElement(m) &&
        (A = gh(f.parser, m.props.path, s || o, m.props.nest))[0]
      )
        return X.cloneElement(m, { match: A });
    }
    return null;
  };
var Ji = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(u) {
      return (
        this.listeners.add(u),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(u), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  _y = {
    setTimeout: (u, s) => setTimeout(u, s),
    clearTimeout: (u) => clearTimeout(u),
    setInterval: (u, s) => setInterval(u, s),
    clearInterval: (u) => clearInterval(u),
  },
  Uy = class {
    #t = _y;
    #l = !1;
    setTimeoutProvider(u) {
      this.#t = u;
    }
    setTimeout(u, s) {
      return this.#t.setTimeout(u, s);
    }
    clearTimeout(u) {
      this.#t.clearTimeout(u);
    }
    setInterval(u, s) {
      return this.#t.setInterval(u, s);
    }
    clearInterval(u) {
      this.#t.clearInterval(u);
    }
  },
  js = new Uy();
function Cy(u) {
  setTimeout(u, 0);
}
var ki = typeof window > "u" || "Deno" in globalThis;
function Se() {}
function Ny(u, s) {
  return typeof u == "function" ? u(s) : u;
}
function qy(u) {
  return typeof u == "number" && u >= 0 && u !== 1 / 0;
}
function Hy(u, s) {
  return Math.max(u + (s || 0) - Date.now(), 0);
}
function Ts(u, s) {
  return typeof u == "function" ? u(s) : u;
}
function wy(u, s) {
  return typeof u == "function" ? u(s) : u;
}
function Jd(u, s) {
  const {
    type: f = "all",
    exact: o,
    fetchStatus: m,
    predicate: A,
    queryKey: U,
    stale: D,
  } = u;
  if (U) {
    if (o) {
      if (s.queryHash !== Rs(U, s.options)) return !1;
    } else if (!En(s.queryKey, U)) return !1;
  }
  if (f !== "all") {
    const T = s.isActive();
    if ((f === "active" && !T) || (f === "inactive" && T)) return !1;
  }
  return !(
    (typeof D == "boolean" && s.isStale() !== D) ||
    (m && m !== s.state.fetchStatus) ||
    (A && !A(s))
  );
}
function kd(u, s) {
  const { exact: f, status: o, predicate: m, mutationKey: A } = u;
  if (A) {
    if (!s.options.mutationKey) return !1;
    if (f) {
      if (Tn(s.options.mutationKey) !== Tn(A)) return !1;
    } else if (!En(s.options.mutationKey, A)) return !1;
  }
  return !((o && s.state.status !== o) || (m && !m(s)));
}
function Rs(u, s) {
  return (s?.queryKeyHashFn || Tn)(u);
}
function Tn(u) {
  return JSON.stringify(u, (s, f) =>
    Es(f)
      ? Object.keys(f)
          .sort()
          .reduce((o, m) => ((o[m] = f[m]), o), {})
      : f,
  );
}
function En(u, s) {
  return u === s
    ? !0
    : typeof u != typeof s
      ? !1
      : u && s && typeof u == "object" && typeof s == "object"
        ? Object.keys(s).every((f) => En(u[f], s[f]))
        : !1;
}
var By = Object.prototype.hasOwnProperty;
function ph(u, s, f = 0) {
  if (u === s) return u;
  if (f > 500) return s;
  const o = Fd(u) && Fd(s);
  if (!o && !(Es(u) && Es(s))) return s;
  const A = (o ? u : Object.keys(u)).length,
    U = o ? s : Object.keys(s),
    D = U.length,
    T = o ? new Array(D) : {};
  let b = 0;
  for (let z = 0; z < D; z++) {
    const O = o ? z : U[z],
      S = u[O],
      q = s[O];
    if (S === q) {
      ((T[O] = S), (o ? z < A : By.call(u, O)) && b++);
      continue;
    }
    if (
      S === null ||
      q === null ||
      typeof S != "object" ||
      typeof q != "object"
    ) {
      T[O] = q;
      continue;
    }
    const Y = ph(S, q, f + 1);
    ((T[O] = Y), Y === S && b++);
  }
  return A === D && b === A ? u : T;
}
function Fd(u) {
  return Array.isArray(u) && u.length === Object.keys(u).length;
}
function Es(u) {
  if (!Wd(u)) return !1;
  const s = u.constructor;
  if (s === void 0) return !0;
  const f = s.prototype;
  return !(
    !Wd(f) ||
    !f.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(u) !== Object.prototype
  );
}
function Wd(u) {
  return Object.prototype.toString.call(u) === "[object Object]";
}
function Yy(u) {
  return new Promise((s) => {
    js.setTimeout(s, u);
  });
}
function Qy(u, s, f) {
  return typeof f.structuralSharing == "function"
    ? f.structuralSharing(u, s)
    : f.structuralSharing !== !1
      ? ph(u, s)
      : s;
}
function Gy(u, s, f = 0) {
  const o = [...u, s];
  return f && o.length > f ? o.slice(1) : o;
}
function Xy(u, s, f = 0) {
  const o = [s, ...u];
  return f && o.length > f ? o.slice(0, -1) : o;
}
var _s = Symbol();
function Sh(u, s) {
  return !u.queryFn && s?.initialPromise
    ? () => s.initialPromise
    : !u.queryFn || u.queryFn === _s
      ? () => Promise.reject(new Error(`Missing queryFn: '${u.queryHash}'`))
      : u.queryFn;
}
function Zy(u, s, f) {
  let o = !1,
    m;
  return (
    Object.defineProperty(u, "signal", {
      enumerable: !0,
      get: () => (
        (m ??= s()),
        o ||
          ((o = !0),
          m.aborted ? f() : m.addEventListener("abort", f, { once: !0 })),
        m
      ),
    }),
    u
  );
}
var Ly = class extends Ji {
    #t;
    #l;
    #e;
    constructor() {
      (super(),
        (this.#e = (u) => {
          if (!ki && window.addEventListener) {
            const s = () => u();
            return (
              window.addEventListener("visibilitychange", s, !1),
              () => {
                window.removeEventListener("visibilitychange", s);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#l || this.setEventListener(this.#e);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#l?.(), (this.#l = void 0));
    }
    setEventListener(u) {
      ((this.#e = u),
        this.#l?.(),
        (this.#l = u((s) => {
          typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
        })));
    }
    setFocused(u) {
      this.#t !== u && ((this.#t = u), this.onFocus());
    }
    onFocus() {
      const u = this.isFocused();
      this.listeners.forEach((s) => {
        s(u);
      });
    }
    isFocused() {
      return typeof this.#t == "boolean"
        ? this.#t
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  xh = new Ly();
function Vy() {
  let u, s;
  const f = new Promise((m, A) => {
    ((u = m), (s = A));
  });
  ((f.status = "pending"), f.catch(() => {}));
  function o(m) {
    (Object.assign(f, m), delete f.resolve, delete f.reject);
  }
  return (
    (f.resolve = (m) => {
      (o({ status: "fulfilled", value: m }), u(m));
    }),
    (f.reject = (m) => {
      (o({ status: "rejected", reason: m }), s(m));
    }),
    f
  );
}
var Ky = Cy;
function Jy() {
  let u = [],
    s = 0,
    f = (D) => {
      D();
    },
    o = (D) => {
      D();
    },
    m = Ky;
  const A = (D) => {
      s
        ? u.push(D)
        : m(() => {
            f(D);
          });
    },
    U = () => {
      const D = u;
      ((u = []),
        D.length &&
          m(() => {
            o(() => {
              D.forEach((T) => {
                f(T);
              });
            });
          }));
    };
  return {
    batch: (D) => {
      let T;
      s++;
      try {
        T = D();
      } finally {
        (s--, s || U());
      }
      return T;
    },
    batchCalls:
      (D) =>
      (...T) => {
        A(() => {
          D(...T);
        });
      },
    schedule: A,
    setNotifyFunction: (D) => {
      f = D;
    },
    setBatchNotifyFunction: (D) => {
      o = D;
    },
    setScheduler: (D) => {
      m = D;
    },
  };
}
var Lt = Jy(),
  ky = class extends Ji {
    #t = !0;
    #l;
    #e;
    constructor() {
      (super(),
        (this.#e = (u) => {
          if (!ki && window.addEventListener) {
            const s = () => u(!0),
              f = () => u(!1);
            return (
              window.addEventListener("online", s, !1),
              window.addEventListener("offline", f, !1),
              () => {
                (window.removeEventListener("online", s),
                  window.removeEventListener("offline", f));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#l || this.setEventListener(this.#e);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#l?.(), (this.#l = void 0));
    }
    setEventListener(u) {
      ((this.#e = u), this.#l?.(), (this.#l = u(this.setOnline.bind(this))));
    }
    setOnline(u) {
      this.#t !== u &&
        ((this.#t = u),
        this.listeners.forEach((f) => {
          f(u);
        }));
    }
    isOnline() {
      return this.#t;
    }
  },
  Zi = new ky();
function Fy(u) {
  return Math.min(1e3 * 2 ** u, 3e4);
}
function jh(u) {
  return (u ?? "online") === "online" ? Zi.isOnline() : !0;
}
var As = class extends Error {
  constructor(u) {
    (super("CancelledError"),
      (this.revert = u?.revert),
      (this.silent = u?.silent));
  }
};
function Th(u) {
  let s = !1,
    f = 0,
    o;
  const m = Vy(),
    A = () => m.status !== "pending",
    U = (Q) => {
      if (!A()) {
        const K = new As(Q);
        (S(K), u.onCancel?.(K));
      }
    },
    D = () => {
      s = !0;
    },
    T = () => {
      s = !1;
    },
    b = () =>
      xh.isFocused() &&
      (u.networkMode === "always" || Zi.isOnline()) &&
      u.canRun(),
    z = () => jh(u.networkMode) && u.canRun(),
    O = (Q) => {
      A() || (o?.(), m.resolve(Q));
    },
    S = (Q) => {
      A() || (o?.(), m.reject(Q));
    },
    q = () =>
      new Promise((Q) => {
        ((o = (K) => {
          (A() || b()) && Q(K);
        }),
          u.onPause?.());
      }).then(() => {
        ((o = void 0), A() || u.onContinue?.());
      }),
    Y = () => {
      if (A()) return;
      let Q;
      const K = f === 0 ? u.initialPromise : void 0;
      try {
        Q = K ?? u.fn();
      } catch (ut) {
        Q = Promise.reject(ut);
      }
      Promise.resolve(Q)
        .then(O)
        .catch((ut) => {
          if (A()) return;
          const pt = u.retry ?? (ki ? 0 : 3),
            gt = u.retryDelay ?? Fy,
            Ht = typeof gt == "function" ? gt(f, ut) : gt,
            tt =
              pt === !0 ||
              (typeof pt == "number" && f < pt) ||
              (typeof pt == "function" && pt(f, ut));
          if (s || !tt) {
            S(ut);
            return;
          }
          (f++,
            u.onFail?.(f, ut),
            Yy(Ht)
              .then(() => (b() ? void 0 : q()))
              .then(() => {
                s ? S(ut) : Y();
              }));
        });
    };
  return {
    promise: m,
    status: () => m.status,
    cancel: U,
    continue: () => (o?.(), m),
    cancelRetry: D,
    continueRetry: T,
    canStart: z,
    start: () => (z() ? Y() : q().then(Y), m),
  };
}
var Eh = class {
    #t;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        qy(this.gcTime) &&
          (this.#t = js.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(u) {
      this.gcTime = Math.max(this.gcTime || 0, u ?? (ki ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#t && (js.clearTimeout(this.#t), (this.#t = void 0));
    }
  },
  Wy = class extends Eh {
    #t;
    #l;
    #e;
    #n;
    #a;
    #u;
    #c;
    constructor(u) {
      (super(),
        (this.#c = !1),
        (this.#u = u.defaultOptions),
        this.setOptions(u.options),
        (this.observers = []),
        (this.#n = u.client),
        (this.#e = this.#n.getQueryCache()),
        (this.queryKey = u.queryKey),
        (this.queryHash = u.queryHash),
        (this.#t = Pd(this.options)),
        (this.state = u.state ?? this.#t),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#a?.promise;
    }
    setOptions(u) {
      if (
        ((this.options = { ...this.#u, ...u }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const s = Pd(this.options);
        s.data !== void 0 &&
          (this.setState($d(s.data, s.dataUpdatedAt)), (this.#t = s));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#e.remove(this);
    }
    setData(u, s) {
      const f = Qy(this.state.data, u, this.options);
      return (
        this.#i({
          data: f,
          type: "success",
          dataUpdatedAt: s?.updatedAt,
          manual: s?.manual,
        }),
        f
      );
    }
    setState(u, s) {
      this.#i({ type: "setState", state: u, setStateOptions: s });
    }
    cancel(u) {
      const s = this.#a?.promise;
      return (this.#a?.cancel(u), s ? s.then(Se).catch(Se) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    reset() {
      (this.destroy(), this.setState(this.#t));
    }
    isActive() {
      return this.observers.some((u) => wy(u.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === _s ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((u) => Ts(u.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((u) => u.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(u = 0) {
      return this.state.data === void 0
        ? !0
        : u === "static"
          ? !1
          : this.state.isInvalidated
            ? !0
            : !Hy(this.state.dataUpdatedAt, u);
    }
    onFocus() {
      (this.observers
        .find((s) => s.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue());
    }
    onOnline() {
      (this.observers
        .find((s) => s.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue());
    }
    addObserver(u) {
      this.observers.includes(u) ||
        (this.observers.push(u),
        this.clearGcTimeout(),
        this.#e.notify({ type: "observerAdded", query: this, observer: u }));
    }
    removeObserver(u) {
      this.observers.includes(u) &&
        ((this.observers = this.observers.filter((s) => s !== u)),
        this.observers.length ||
          (this.#a &&
            (this.#c ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()),
          this.scheduleGc()),
        this.#e.notify({ type: "observerRemoved", query: this, observer: u }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#i({ type: "invalidate" });
    }
    async fetch(u, s) {
      if (
        this.state.fetchStatus !== "idle" &&
        this.#a?.status() !== "rejected"
      ) {
        if (this.state.data !== void 0 && s?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
      }
      if ((u && this.setOptions(u), !this.options.queryFn)) {
        const D = this.observers.find((T) => T.options.queryFn);
        D && this.setOptions(D.options);
      }
      const f = new AbortController(),
        o = (D) => {
          Object.defineProperty(D, "signal", {
            enumerable: !0,
            get: () => ((this.#c = !0), f.signal),
          });
        },
        m = () => {
          const D = Sh(this.options, s),
            b = (() => {
              const z = {
                client: this.#n,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return (o(z), z);
            })();
          return (
            (this.#c = !1),
            this.options.persister ? this.options.persister(D, b, this) : D(b)
          );
        },
        U = (() => {
          const D = {
            fetchOptions: s,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#n,
            state: this.state,
            fetchFn: m,
          };
          return (o(D), D);
        })();
      (this.options.behavior?.onFetch(U, this),
        (this.#l = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== U.fetchOptions?.meta) &&
          this.#i({ type: "fetch", meta: U.fetchOptions?.meta }),
        (this.#a = Th({
          initialPromise: s?.initialPromise,
          fn: U.fetchFn,
          onCancel: (D) => {
            (D instanceof As &&
              D.revert &&
              this.setState({ ...this.#l, fetchStatus: "idle" }),
              f.abort());
          },
          onFail: (D, T) => {
            this.#i({ type: "failed", failureCount: D, error: T });
          },
          onPause: () => {
            this.#i({ type: "pause" });
          },
          onContinue: () => {
            this.#i({ type: "continue" });
          },
          retry: U.options.retry,
          retryDelay: U.options.retryDelay,
          networkMode: U.options.networkMode,
          canRun: () => !0,
        })));
      try {
        const D = await this.#a.start();
        if (D === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(D),
          this.#e.config.onSuccess?.(D, this),
          this.#e.config.onSettled?.(D, this.state.error, this),
          D
        );
      } catch (D) {
        if (D instanceof As) {
          if (D.silent) return this.#a.promise;
          if (D.revert) {
            if (this.state.data === void 0) throw D;
            return this.state.data;
          }
        }
        throw (
          this.#i({ type: "error", error: D }),
          this.#e.config.onError?.(D, this),
          this.#e.config.onSettled?.(this.state.data, D, this),
          D
        );
      } finally {
        this.scheduleGc();
      }
    }
    #i(u) {
      const s = (f) => {
        switch (u.type) {
          case "failed":
            return {
              ...f,
              fetchFailureCount: u.failureCount,
              fetchFailureReason: u.error,
            };
          case "pause":
            return { ...f, fetchStatus: "paused" };
          case "continue":
            return { ...f, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...f,
              ...$y(f.data, this.options),
              fetchMeta: u.meta ?? null,
            };
          case "success":
            const o = {
              ...f,
              ...$d(u.data, u.dataUpdatedAt),
              dataUpdateCount: f.dataUpdateCount + 1,
              ...(!u.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return ((this.#l = u.manual ? o : void 0), o);
          case "error":
            const m = u.error;
            return {
              ...f,
              error: m,
              errorUpdateCount: f.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: f.fetchFailureCount + 1,
              fetchFailureReason: m,
              fetchStatus: "idle",
              status: "error",
              isInvalidated: !0,
            };
          case "invalidate":
            return { ...f, isInvalidated: !0 };
          case "setState":
            return { ...f, ...u.state };
        }
      };
      ((this.state = s(this.state)),
        Lt.batch(() => {
          (this.observers.forEach((f) => {
            f.onQueryUpdate();
          }),
            this.#e.notify({ query: this, type: "updated", action: u }));
        }));
    }
  };
function $y(u, s) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: jh(s.networkMode) ? "fetching" : "paused",
    ...(u === void 0 && { error: null, status: "pending" }),
  };
}
function $d(u, s) {
  return {
    data: u,
    dataUpdatedAt: s ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function Pd(u) {
  const s =
      typeof u.initialData == "function" ? u.initialData() : u.initialData,
    f = s !== void 0,
    o = f
      ? typeof u.initialDataUpdatedAt == "function"
        ? u.initialDataUpdatedAt()
        : u.initialDataUpdatedAt
      : 0;
  return {
    data: s,
    dataUpdateCount: 0,
    dataUpdatedAt: f ? (o ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: f ? "success" : "pending",
    fetchStatus: "idle",
  };
}
function Id(u) {
  return {
    onFetch: (s, f) => {
      const o = s.options,
        m = s.fetchOptions?.meta?.fetchMore?.direction,
        A = s.state.data?.pages || [],
        U = s.state.data?.pageParams || [];
      let D = { pages: [], pageParams: [] },
        T = 0;
      const b = async () => {
        let z = !1;
        const O = (Y) => {
            Zy(
              Y,
              () => s.signal,
              () => (z = !0),
            );
          },
          S = Sh(s.options, s.fetchOptions),
          q = async (Y, Q, K) => {
            if (z) return Promise.reject();
            if (Q == null && Y.pages.length) return Promise.resolve(Y);
            const pt = (() => {
                const wt = {
                  client: s.client,
                  queryKey: s.queryKey,
                  pageParam: Q,
                  direction: K ? "backward" : "forward",
                  meta: s.options.meta,
                };
                return (O(wt), wt);
              })(),
              gt = await S(pt),
              { maxPages: Ht } = s.options,
              tt = K ? Xy : Gy;
            return {
              pages: tt(Y.pages, gt, Ht),
              pageParams: tt(Y.pageParams, Q, Ht),
            };
          };
        if (m && A.length) {
          const Y = m === "backward",
            Q = Y ? Py : th,
            K = { pages: A, pageParams: U },
            ut = Q(o, K);
          D = await q(K, ut, Y);
        } else {
          const Y = u ?? A.length;
          do {
            const Q = T === 0 ? (U[0] ?? o.initialPageParam) : th(o, D);
            if (T > 0 && Q == null) break;
            ((D = await q(D, Q)), T++);
          } while (T < Y);
        }
        return D;
      };
      s.options.persister
        ? (s.fetchFn = () =>
            s.options.persister?.(
              b,
              {
                client: s.client,
                queryKey: s.queryKey,
                meta: s.options.meta,
                signal: s.signal,
              },
              f,
            ))
        : (s.fetchFn = b);
    },
  };
}
function th(u, { pages: s, pageParams: f }) {
  const o = s.length - 1;
  return s.length > 0 ? u.getNextPageParam(s[o], s, f[o], f) : void 0;
}
function Py(u, { pages: s, pageParams: f }) {
  return s.length > 0 ? u.getPreviousPageParam?.(s[0], s, f[0], f) : void 0;
}
var Iy = class extends Eh {
  #t;
  #l;
  #e;
  #n;
  constructor(u) {
    (super(),
      (this.#t = u.client),
      (this.mutationId = u.mutationId),
      (this.#e = u.mutationCache),
      (this.#l = []),
      (this.state = u.state || tg()),
      this.setOptions(u.options),
      this.scheduleGc());
  }
  setOptions(u) {
    ((this.options = u), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(u) {
    this.#l.includes(u) ||
      (this.#l.push(u),
      this.clearGcTimeout(),
      this.#e.notify({ type: "observerAdded", mutation: this, observer: u }));
  }
  removeObserver(u) {
    ((this.#l = this.#l.filter((s) => s !== u)),
      this.scheduleGc(),
      this.#e.notify({ type: "observerRemoved", mutation: this, observer: u }));
  }
  optionalRemove() {
    this.#l.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#e.remove(this));
  }
  continue() {
    return this.#n?.continue() ?? this.execute(this.state.variables);
  }
  async execute(u) {
    const s = () => {
        this.#a({ type: "continue" });
      },
      f = {
        client: this.#t,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#n = Th({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(u, f)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (A, U) => {
        this.#a({ type: "failed", failureCount: A, error: U });
      },
      onPause: () => {
        this.#a({ type: "pause" });
      },
      onContinue: s,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#e.canRun(this),
    });
    const o = this.state.status === "pending",
      m = !this.#n.canStart();
    try {
      if (o) s();
      else {
        (this.#a({ type: "pending", variables: u, isPaused: m }),
          this.#e.config.onMutate &&
            (await this.#e.config.onMutate(u, this, f)));
        const U = await this.options.onMutate?.(u, f);
        U !== this.state.context &&
          this.#a({ type: "pending", context: U, variables: u, isPaused: m });
      }
      const A = await this.#n.start();
      return (
        await this.#e.config.onSuccess?.(A, u, this.state.context, this, f),
        await this.options.onSuccess?.(A, u, this.state.context, f),
        await this.#e.config.onSettled?.(
          A,
          null,
          this.state.variables,
          this.state.context,
          this,
          f,
        ),
        await this.options.onSettled?.(A, null, u, this.state.context, f),
        this.#a({ type: "success", data: A }),
        A
      );
    } catch (A) {
      try {
        await this.#e.config.onError?.(A, u, this.state.context, this, f);
      } catch (U) {
        Promise.reject(U);
      }
      try {
        await this.options.onError?.(A, u, this.state.context, f);
      } catch (U) {
        Promise.reject(U);
      }
      try {
        await this.#e.config.onSettled?.(
          void 0,
          A,
          this.state.variables,
          this.state.context,
          this,
          f,
        );
      } catch (U) {
        Promise.reject(U);
      }
      try {
        await this.options.onSettled?.(void 0, A, u, this.state.context, f);
      } catch (U) {
        Promise.reject(U);
      }
      throw (this.#a({ type: "error", error: A }), A);
    } finally {
      this.#e.runNext(this);
    }
  }
  #a(u) {
    const s = (f) => {
      switch (u.type) {
        case "failed":
          return { ...f, failureCount: u.failureCount, failureReason: u.error };
        case "pause":
          return { ...f, isPaused: !0 };
        case "continue":
          return { ...f, isPaused: !1 };
        case "pending":
          return {
            ...f,
            context: u.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: u.isPaused,
            status: "pending",
            variables: u.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...f,
            data: u.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...f,
            data: void 0,
            error: u.error,
            failureCount: f.failureCount + 1,
            failureReason: u.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = s(this.state)),
      Lt.batch(() => {
        (this.#l.forEach((f) => {
          f.onMutationUpdate(u);
        }),
          this.#e.notify({ mutation: this, type: "updated", action: u }));
      }));
  }
};
function tg() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var eg = class extends Ji {
  constructor(u = {}) {
    (super(),
      (this.config = u),
      (this.#t = new Set()),
      (this.#l = new Map()),
      (this.#e = 0));
  }
  #t;
  #l;
  #e;
  build(u, s, f) {
    const o = new Iy({
      client: u,
      mutationCache: this,
      mutationId: ++this.#e,
      options: u.defaultMutationOptions(s),
      state: f,
    });
    return (this.add(o), o);
  }
  add(u) {
    this.#t.add(u);
    const s = Gi(u);
    if (typeof s == "string") {
      const f = this.#l.get(s);
      f ? f.push(u) : this.#l.set(s, [u]);
    }
    this.notify({ type: "added", mutation: u });
  }
  remove(u) {
    if (this.#t.delete(u)) {
      const s = Gi(u);
      if (typeof s == "string") {
        const f = this.#l.get(s);
        if (f)
          if (f.length > 1) {
            const o = f.indexOf(u);
            o !== -1 && f.splice(o, 1);
          } else f[0] === u && this.#l.delete(s);
      }
    }
    this.notify({ type: "removed", mutation: u });
  }
  canRun(u) {
    const s = Gi(u);
    if (typeof s == "string") {
      const o = this.#l.get(s)?.find((m) => m.state.status === "pending");
      return !o || o === u;
    } else return !0;
  }
  runNext(u) {
    const s = Gi(u);
    return typeof s == "string"
      ? (this.#l
          .get(s)
          ?.find((o) => o !== u && o.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    Lt.batch(() => {
      (this.#t.forEach((u) => {
        this.notify({ type: "removed", mutation: u });
      }),
        this.#t.clear(),
        this.#l.clear());
    });
  }
  getAll() {
    return Array.from(this.#t);
  }
  find(u) {
    const s = { exact: !0, ...u };
    return this.getAll().find((f) => kd(s, f));
  }
  findAll(u = {}) {
    return this.getAll().filter((s) => kd(u, s));
  }
  notify(u) {
    Lt.batch(() => {
      this.listeners.forEach((s) => {
        s(u);
      });
    });
  }
  resumePausedMutations() {
    const u = this.getAll().filter((s) => s.state.isPaused);
    return Lt.batch(() => Promise.all(u.map((s) => s.continue().catch(Se))));
  }
};
function Gi(u) {
  return u.options.scope?.id;
}
var lg = class extends Ji {
    constructor(u = {}) {
      (super(), (this.config = u), (this.#t = new Map()));
    }
    #t;
    build(u, s, f) {
      const o = s.queryKey,
        m = s.queryHash ?? Rs(o, s);
      let A = this.get(m);
      return (
        A ||
          ((A = new Wy({
            client: u,
            queryKey: o,
            queryHash: m,
            options: u.defaultQueryOptions(s),
            state: f,
            defaultOptions: u.getQueryDefaults(o),
          })),
          this.add(A)),
        A
      );
    }
    add(u) {
      this.#t.has(u.queryHash) ||
        (this.#t.set(u.queryHash, u), this.notify({ type: "added", query: u }));
    }
    remove(u) {
      const s = this.#t.get(u.queryHash);
      s &&
        (u.destroy(),
        s === u && this.#t.delete(u.queryHash),
        this.notify({ type: "removed", query: u }));
    }
    clear() {
      Lt.batch(() => {
        this.getAll().forEach((u) => {
          this.remove(u);
        });
      });
    }
    get(u) {
      return this.#t.get(u);
    }
    getAll() {
      return [...this.#t.values()];
    }
    find(u) {
      const s = { exact: !0, ...u };
      return this.getAll().find((f) => Jd(s, f));
    }
    findAll(u = {}) {
      const s = this.getAll();
      return Object.keys(u).length > 0 ? s.filter((f) => Jd(u, f)) : s;
    }
    notify(u) {
      Lt.batch(() => {
        this.listeners.forEach((s) => {
          s(u);
        });
      });
    }
    onFocus() {
      Lt.batch(() => {
        this.getAll().forEach((u) => {
          u.onFocus();
        });
      });
    }
    onOnline() {
      Lt.batch(() => {
        this.getAll().forEach((u) => {
          u.onOnline();
        });
      });
    }
  },
  ag = class {
    #t;
    #l;
    #e;
    #n;
    #a;
    #u;
    #c;
    #i;
    constructor(u = {}) {
      ((this.#t = u.queryCache || new lg()),
        (this.#l = u.mutationCache || new eg()),
        (this.#e = u.defaultOptions || {}),
        (this.#n = new Map()),
        (this.#a = new Map()),
        (this.#u = 0));
    }
    mount() {
      (this.#u++,
        this.#u === 1 &&
          ((this.#c = xh.subscribe(async (u) => {
            u && (await this.resumePausedMutations(), this.#t.onFocus());
          })),
          (this.#i = Zi.subscribe(async (u) => {
            u && (await this.resumePausedMutations(), this.#t.onOnline());
          }))));
    }
    unmount() {
      (this.#u--,
        this.#u === 0 &&
          (this.#c?.(), (this.#c = void 0), this.#i?.(), (this.#i = void 0)));
    }
    isFetching(u) {
      return this.#t.findAll({ ...u, fetchStatus: "fetching" }).length;
    }
    isMutating(u) {
      return this.#l.findAll({ ...u, status: "pending" }).length;
    }
    getQueryData(u) {
      const s = this.defaultQueryOptions({ queryKey: u });
      return this.#t.get(s.queryHash)?.state.data;
    }
    ensureQueryData(u) {
      const s = this.defaultQueryOptions(u),
        f = this.#t.build(this, s),
        o = f.state.data;
      return o === void 0
        ? this.fetchQuery(u)
        : (u.revalidateIfStale &&
            f.isStaleByTime(Ts(s.staleTime, f)) &&
            this.prefetchQuery(s),
          Promise.resolve(o));
    }
    getQueriesData(u) {
      return this.#t.findAll(u).map(({ queryKey: s, state: f }) => {
        const o = f.data;
        return [s, o];
      });
    }
    setQueryData(u, s, f) {
      const o = this.defaultQueryOptions({ queryKey: u }),
        A = this.#t.get(o.queryHash)?.state.data,
        U = Ny(s, A);
      if (U !== void 0)
        return this.#t.build(this, o).setData(U, { ...f, manual: !0 });
    }
    setQueriesData(u, s, f) {
      return Lt.batch(() =>
        this.#t
          .findAll(u)
          .map(({ queryKey: o }) => [o, this.setQueryData(o, s, f)]),
      );
    }
    getQueryState(u) {
      const s = this.defaultQueryOptions({ queryKey: u });
      return this.#t.get(s.queryHash)?.state;
    }
    removeQueries(u) {
      const s = this.#t;
      Lt.batch(() => {
        s.findAll(u).forEach((f) => {
          s.remove(f);
        });
      });
    }
    resetQueries(u, s) {
      const f = this.#t;
      return Lt.batch(
        () => (
          f.findAll(u).forEach((o) => {
            o.reset();
          }),
          this.refetchQueries({ type: "active", ...u }, s)
        ),
      );
    }
    cancelQueries(u, s = {}) {
      const f = { revert: !0, ...s },
        o = Lt.batch(() => this.#t.findAll(u).map((m) => m.cancel(f)));
      return Promise.all(o).then(Se).catch(Se);
    }
    invalidateQueries(u, s = {}) {
      return Lt.batch(
        () => (
          this.#t.findAll(u).forEach((f) => {
            f.invalidate();
          }),
          u?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...u, type: u?.refetchType ?? u?.type ?? "active" },
                s,
              )
        ),
      );
    }
    refetchQueries(u, s = {}) {
      const f = { ...s, cancelRefetch: s.cancelRefetch ?? !0 },
        o = Lt.batch(() =>
          this.#t
            .findAll(u)
            .filter((m) => !m.isDisabled() && !m.isStatic())
            .map((m) => {
              let A = m.fetch(void 0, f);
              return (
                f.throwOnError || (A = A.catch(Se)),
                m.state.fetchStatus === "paused" ? Promise.resolve() : A
              );
            }),
        );
      return Promise.all(o).then(Se);
    }
    fetchQuery(u) {
      const s = this.defaultQueryOptions(u);
      s.retry === void 0 && (s.retry = !1);
      const f = this.#t.build(this, s);
      return f.isStaleByTime(Ts(s.staleTime, f))
        ? f.fetch(s)
        : Promise.resolve(f.state.data);
    }
    prefetchQuery(u) {
      return this.fetchQuery(u).then(Se).catch(Se);
    }
    fetchInfiniteQuery(u) {
      return ((u.behavior = Id(u.pages)), this.fetchQuery(u));
    }
    prefetchInfiniteQuery(u) {
      return this.fetchInfiniteQuery(u).then(Se).catch(Se);
    }
    ensureInfiniteQueryData(u) {
      return ((u.behavior = Id(u.pages)), this.ensureQueryData(u));
    }
    resumePausedMutations() {
      return Zi.isOnline()
        ? this.#l.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#t;
    }
    getMutationCache() {
      return this.#l;
    }
    getDefaultOptions() {
      return this.#e;
    }
    setDefaultOptions(u) {
      this.#e = u;
    }
    setQueryDefaults(u, s) {
      this.#n.set(Tn(u), { queryKey: u, defaultOptions: s });
    }
    getQueryDefaults(u) {
      const s = [...this.#n.values()],
        f = {};
      return (
        s.forEach((o) => {
          En(u, o.queryKey) && Object.assign(f, o.defaultOptions);
        }),
        f
      );
    }
    setMutationDefaults(u, s) {
      this.#a.set(Tn(u), { mutationKey: u, defaultOptions: s });
    }
    getMutationDefaults(u) {
      const s = [...this.#a.values()],
        f = {};
      return (
        s.forEach((o) => {
          En(u, o.mutationKey) && Object.assign(f, o.defaultOptions);
        }),
        f
      );
    }
    defaultQueryOptions(u) {
      if (u._defaulted) return u;
      const s = {
        ...this.#e.queries,
        ...this.getQueryDefaults(u.queryKey),
        ...u,
        _defaulted: !0,
      };
      return (
        s.queryHash || (s.queryHash = Rs(s.queryKey, s)),
        s.refetchOnReconnect === void 0 &&
          (s.refetchOnReconnect = s.networkMode !== "always"),
        s.throwOnError === void 0 && (s.throwOnError = !!s.suspense),
        !s.networkMode && s.persister && (s.networkMode = "offlineFirst"),
        s.queryFn === _s && (s.enabled = !1),
        s
      );
    }
    defaultMutationOptions(u) {
      return u?._defaulted
        ? u
        : {
            ...this.#e.mutations,
            ...(u?.mutationKey && this.getMutationDefaults(u.mutationKey)),
            ...u,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#t.clear(), this.#l.clear());
    }
  },
  ng = X.createContext(void 0),
  ig = ({ client: u, children: s }) => (
    X.useEffect(
      () => (
        u.mount(),
        () => {
          u.unmount();
        }
      ),
      [u],
    ),
    d.jsx(ng.Provider, { value: u, children: s })
  );
const Us = "sweet-therapy-visits";
function Cs() {
  return new Date().toISOString().split("T")[0];
}
function ug() {
  const u = new Date();
  return (u.setDate(u.getDate() - 1), u.toISOString().split("T")[0]);
}
function Fi() {
  try {
    const u = localStorage.getItem(Us);
    if (u) return JSON.parse(u);
  } catch {}
  return {
    lastVisit: "",
    streak: 0,
    totalDays: 0,
    visitDates: [],
    lastMessageShown: "",
  };
}
function cg() {
  const u = Cs(),
    s = Fi();
  if (s.lastVisit === u) return { data: s, isNewDay: !1 };
  const f = s.lastVisit === ug() ? s.streak + 1 : 1,
    o = s.visitDates.includes(u)
      ? s.visitDates
      : [...s.visitDates, u].slice(-365),
    m = {
      lastVisit: u,
      streak: f,
      totalDays: o.length,
      visitDates: o,
      lastMessageShown: s.lastMessageShown,
    };
  return (
    localStorage.setItem(Us, JSON.stringify(m)),
    { data: m, isNewDay: !0 }
  );
}
function sg() {
  const u = Cs(),
    s = Fi();
  ((s.lastMessageShown = u), localStorage.setItem(Us, JSON.stringify(s)));
}
function rg() {
  const u = Cs();
  return Fi().lastMessageShown !== u;
}
function fg() {
  const u = Fi();
  let s = 0;
  try {
    const A = JSON.parse(localStorage.getItem("sweet-therapy-diary") || "{}");
    s = Object.keys(A).length;
  } catch {}
  let f = 0;
  try {
    const A = JSON.parse(
      localStorage.getItem("sweet-therapy-mood-tracker") || "{}",
    );
    f = Object.keys(A).length;
  } catch {}
  const o = localStorage.getItem("quiz-result");
  let m = 0;
  try {
    const U =
      JSON.parse(localStorage.getItem("sweet-therapy-weekly-planner") || "{}")
        .cells || {};
    m = Object.values(U).filter((D) => String(D).trim().length > 0).length;
  } catch {}
  return {
    streak: u.streak,
    totalDays: u.totalDays,
    diaryCount: s,
    moodCount: f,
    quizResult: o,
    weeklyFilled: m,
  };
}
const Li = [
    {
      text: "في تجمع اجتماعي كبير، إنتِ عادةً...",
      hint: "تخيّلي نفسك في حفلة أو رحلة مع ناس كتير",
      answers: [
        "في النص ومع الكل",
        "بحدد ناس معينين وأفضل معاهم",
        "بفضّل أقعد على الهامش أو أمشي بدري",
      ],
      scores: {
        "في النص ومع الكل": { social: 2 },
        "بحدد ناس معينين وأفضل معاهم": { balanced: 2 },
        "بفضّل أقعد على الهامش أو أمشي بدري": { introvert: 2 },
      },
    },
    {
      text: "بعد يوم طويل مع الناس بتحسي بـ...",
      hint: "فكري في اليوم الأخير اللي قضيتِه مع ناس كتير",
      answers: [
        "طاقة وعايزة أكمل!",
        "عادي، مش فارقة معايا",
        "إرهاق وعايزة وقت لوحدي",
      ],
      scores: {
        "طاقة وعايزة أكمل!": { social: 2 },
        "عادي، مش فارقة معايا": { balanced: 2 },
        "إرهاق وعايزة وقت لوحدي": { introvert: 2 },
      },
    },
    {
      text: "لو حد غريب بدأ يتكلم معاكِ في مكان عام، ردة فعلك...",
      answers: [
        "بفرح وأبدأ محادثة عادية",
        "بأتعامل معاه بأدب بس محتاطة",
        "بتضايق أو بحس بعدم ارتياح",
      ],
      scores: {
        "بفرح وأبدأ محادثة عادية": { social: 2 },
        "بأتعامل معاه بأدب بس محتاطة": { balanced: 1, empathetic: 1 },
        "بتضايق أو بحس بعدم ارتياح": { introvert: 2 },
      },
    },
    {
      text: "لما بيتقالك 'اعملي عرض قدام فريق'، أول إحساس بيجيلك...",
      answers: ["تحدي ومتحمسة!", "قلق شوية بس هتتعدى", "خوف شديد وعايزة أهرب"],
      scores: {
        "تحدي ومتحمسة!": { social: 2 },
        "قلق شوية بس هتتعدى": { balanced: 1, anxious: 1 },
        "خوف شديد وعايزة أهرب": { anxious: 2, introvert: 1 },
      },
    },
    {
      text: "لما بتواجهي مشكلة مفاجأة، تفكيرك الأول...",
      hint: "مستوحاة من مقياس GAD-7 للقلق",
      answers: [
        "أدور على حل فوراً",
        "بقلق شوية وبعدين بفكر",
        "بتشتت وبفضل أفكر في أسوأ احتمالات",
      ],
      scores: {
        "أدور على حل فوراً": { social: 1, balanced: 1 },
        "بقلق شوية وبعدين بفكر": { balanced: 2 },
        "بتشتت وبفضل أفكر في أسوأ احتمالات": { anxious: 2 },
      },
    },
    {
      text: "بتفكري في المستقبل بشكل...",
      answers: [
        "متفائل، بشوف الفرص أكتر من المخاوف",
        "واقعي، بوازن بين الأمل والخوف",
        "قلقان، الأفكار السلبية بتيجي أول",
      ],
      scores: {
        "متفائل، بشوف الفرص أكتر من المخاوف": { social: 1, balanced: 1 },
        "واقعي، بوازن بين الأمل والخوف": { balanced: 2 },
        "قلقان، الأفكار السلبية بتيجي أول": { anxious: 2 },
      },
    },
    {
      text: "لو حد انتقدك أمام ناس، بتحسي...",
      answers: [
        "بتعاملي معاه بهدوء وبتأخدي المفيد",
        "بتضايقي بس بتتعدى بسرعة",
        "بتجرحي جداً وبتفضلي تفكري فيها",
      ],
      scores: {
        "بتعاملي معاه بهدوء وبتأخدي المفيد": { balanced: 2, social: 1 },
        "بتضايقي بس بتتعدى بسرعة": { balanced: 1 },
        "بتجرحي جداً وبتفضلي تفكري فيها": { anxious: 2 },
      },
    },
    {
      text: "نومك بشكل عام...",
      hint: "النوم مرتبط كثيراً بالصحة النفسية",
      answers: [
        "كويس ومنتظم",
        "متقلب أحياناً",
        "مضطرب، بصحى كتير أو بصعوبة أنام",
      ],
      scores: {
        "كويس ومنتظم": { balanced: 2 },
        "متقلب أحياناً": { balanced: 1, anxious: 1 },
        "مضطرب، بصحى كتير أو بصعوبة أنام": { anxious: 2, lazy: 1 },
      },
    },
    {
      text: "لما بتعمل غلطة، بتتعاملي معاها إزاي؟",
      answers: [
        "بتعلم منها وبمشي",
        "بتحاسب نفسي شوية وبعدين بتعدى",
        "بتعذّبي نفسك وبيفضل معاكِ فترة طويلة",
      ],
      scores: {
        "بتعلم منها وبمشي": { balanced: 2, social: 1 },
        "بتحاسب نفسي شوية وبعدين بتعدى": { balanced: 2 },
        "بتعذّبي نفسك وبيفضل معاكِ فترة طويلة": { anxious: 2 },
      },
    },
    {
      text: "علاقتك بالمواعيد والالتزام؟",
      hint: "مستوحاة من مقياس Big Five - Conscientiousness",
      answers: [
        "بجيب في موعدي أو قبله دايماً",
        "أحياناً بتأخر وأحياناً بالتزام",
        "التأخير والتأجيل جزء من حياتي",
      ],
      scores: {
        "بجيب في موعدي أو قبله دايماً": { balanced: 2 },
        "أحياناً بتأخر وأحياناً بالتزام": { balanced: 1 },
        "التأخير والتأجيل جزء من حياتي": { lazy: 2 },
      },
    },
    {
      text: "لما بتبدأي مهمة مهمة، بتعمليها...",
      answers: [
        "بخطة واضحة وخطوات محددة",
        "بأبدأ وبشوف على المشي",
        "بأأجلها لآخر لحظة أو مش بخلصها",
      ],
      scores: {
        "بخطة واضحة وخطوات محددة": { balanced: 2 },
        "بأبدأ وبشوف على المشي": { balanced: 1, social: 1 },
        "بأأجلها لآخر لحظة أو مش بخلصها": { lazy: 2 },
      },
    },
    {
      text: "غرفتك ومكان شغلك عادةً...",
      answers: ["مرتبين ومنظمين", "شبه مرتبين", "فوضى ومش مهمة بالنسبالي"],
      scores: {
        "مرتبين ومنظمين": { balanced: 2 },
        "شبه مرتبين": { balanced: 1 },
        "فوضى ومش مهمة بالنسبالي": { lazy: 2 },
      },
    },
    {
      text: "بخصوص عاداتك الصحية (نوم، أكل، رياضة)...",
      answers: [
        "بحاول أحافظ عليهم بانتظام",
        "أحياناً بالتزم وأحياناً لأ",
        "صعب أكون منتظمة فيهم",
      ],
      scores: {
        "بحاول أحافظ عليهم بانتظام": { balanced: 2 },
        "أحياناً بالتزم وأحياناً لأ": { balanced: 1, lazy: 1 },
        "صعب أكون منتظمة فيهم": { lazy: 2 },
      },
    },
    {
      text: "بخصوص الأشياء الجديدة في حياتك...",
      hint: "مستوحاة من Big Five - Openness to Experience",
      answers: [
        "بحب أجرب كل جديد وبيعجبني التغيير",
        "بقبل التغيير بس بحتاج وقت",
        "بفضل اللي عارفاه وبحس بعدم ارتياح من التغيير",
      ],
      scores: {
        "بحب أجرب كل جديد وبيعجبني التغيير": { creative: 2, social: 1 },
        "بقبل التغيير بس بحتاج وقت": { balanced: 2 },
        "بفضل اللي عارفاه وبحس بعدم ارتياح من التغيير": {
          introvert: 1,
          anxious: 1,
        },
      },
    },
    {
      text: "لما بتتفرجي على فيلم أو بتقري كتاب...",
      answers: [
        "بغوص فيه وبأثر بيه جداً",
        "بحب المحتوى المسلي بس مش بتعمق",
        "نادراً بيأثر فيا حاجة تأثير عميق",
      ],
      scores: {
        "بغوص فيه وبأثر بيه جداً": { creative: 2, empathetic: 1 },
        "بحب المحتوى المسلي بس مش بتعمق": { social: 1 },
        "نادراً بيأثر فيا حاجة تأثير عميق": { introvert: 1 },
      },
    },
    {
      text: "لما بتواجهي مشكلة صعبة...",
      answers: [
        "بفكر في حلول غير تقليدية",
        "بدور على الحل الأشهر والأأمن",
        "بحس إن مفيش حل وبأيأس بسرعة",
      ],
      scores: {
        "بفكر في حلول غير تقليدية": { creative: 2, balanced: 1 },
        "بدور على الحل الأشهر والأأمن": { balanced: 1 },
        "بحس إن مفيش حل وبأيأس بسرعة": { anxious: 2 },
      },
    },
    {
      text: "بخصوص الفن والإبداع (رسم، موسيقى، كتابة...)...",
      answers: [
        "أحبهم جداً وبمارسهم أو بتأثر بيهم",
        "بأقدرهم بس مش جزء من حياتي",
        "مش مهمين بالنسبالي",
      ],
      scores: {
        "أحبهم جداً وبمارسهم أو بتأثر بيهم": { creative: 2 },
        "بأقدرهم بس مش جزء من حياتي": { balanced: 1 },
        "مش مهمين بالنسبالي": { lazy: 1 },
      },
    },
    {
      text: "لما حد قريب منك بيكون حزين أو في مشكلة...",
      hint: "مستوحاة من مقياس التعاطف (Empathy Quotient)",
      answers: [
        "بحس بيه وبحاول أساعده بكل طريقة",
        "بسأل عنه وبعرض مساعدتي",
        "بحاول أساعد بس بيكون صعب أعرف أعمل إيه",
      ],
      scores: {
        "بحس بيه وبحاول أساعده بكل طريقة": { empathetic: 2 },
        "بسأل عنه وبعرض مساعدتي": { empathetic: 1, balanced: 1 },
        "بحاول أساعد بس بيكون صعب أعرف أعمل إيه": { introvert: 1, anxious: 1 },
      },
    },
    {
      text: "لما بتشوفي حد بيعاني (حتى في فيلم أو أخبار)...",
      answers: [
        "بتأثر جداً وأحياناً بأعيط",
        "بحس بيه بس بتعدى",
        "مش بتأثر كتير",
      ],
      scores: {
        "بتأثر جداً وأحياناً بأعيط": { empathetic: 2 },
        "بحس بيه بس بتعدى": { empathetic: 1, balanced: 1 },
        "مش بتأثر كتير": { introvert: 1 },
      },
    },
    {
      text: "لما بيكون في خلاف بينك وبين حد تحبّيه...",
      answers: [
        "بحاول أفهم وجهة نظره حتى لو مش موافقة",
        "بدافع عن نفسي وبعدين أسمعه",
        "بتمسك برأيي وصعب أتنازل",
      ],
      scores: {
        "بحاول أفهم وجهة نظره حتى لو مش موافقة": { empathetic: 2, balanced: 1 },
        "بدافع عن نفسي وبعدين أسمعه": { balanced: 1 },
        "بتمسك برأيي وصعب أتنازل": { social: 1, anxious: 1 },
      },
    },
    {
      text: "بتقدري تقولي 'لأ' لناس بتحبيهم لما الطلب يتعبك؟",
      answers: [
        "آه، صحتي النفسية أولاً",
        "بصعوبة، بس بقدر أحياناً",
        "صعب جداً عليا، بأقول آه وأندم",
      ],
      scores: {
        "آه، صحتي النفسية أولاً": { balanced: 2, social: 1 },
        "بصعوبة، بس بقدر أحياناً": { balanced: 1, empathetic: 1 },
        "صعب جداً عليا، بأقول آه وأندم": { empathetic: 1, anxious: 1 },
      },
    },
    {
      text: "بخصوص معرفتك لنفسك...",
      hint: "الوعي الذاتي هو أساس الصحة النفسية",
      answers: [
        "بعرف نقاط قوتي وضعفي كويس",
        "عارفة بعضها بس في حاجات مش واثقة فيها",
        "مش عارفة نفسي أوي",
      ],
      scores: {
        "بعرف نقاط قوتي وضعفي كويس": { balanced: 2, social: 1 },
        "عارفة بعضها بس في حاجات مش واثقة فيها": { balanced: 1 },
        "مش عارفة نفسي أوي": { anxious: 1, lazy: 1 },
      },
    },
    {
      text: "لو في جانب في شخصيتك عايزة تغيره، موقفك...",
      answers: [
        "بشتغل عليه بجدية وبخطوات",
        "بفكر فيه بس التغيير صعب",
        "بأتمنى التغيير بس مش بعمل حاجة",
      ],
      scores: {
        "بشتغل عليه بجدية وبخطوات": { balanced: 2 },
        "بفكر فيه بس التغيير صعب": { balanced: 1, anxious: 1 },
        "بأتمنى التغيير بس مش بعمل حاجة": { lazy: 2 },
      },
    },
    {
      text: "بخصوص أحلامك وطموحاتك...",
      answers: [
        "عندي أحلام واضحة وباشتغل عليها",
        "عندي أحلام بس مش دايماً بخطو ناحيتها",
        "أحلامي ضبابية أو بحس إنها بعيدة",
      ],
      scores: {
        "عندي أحلام واضحة وباشتغل عليها": { balanced: 2, social: 1 },
        "عندي أحلام بس مش دايماً بخطو ناحيتها": { balanced: 1, lazy: 1 },
        "أحلامي ضبابية أو بحس إنها بعيدة": { anxious: 2 },
      },
    },
    {
      text: "لما بتاخدي قرار مهم، بتعتمدي على...",
      answers: [
        "التفكير المنطقي بالدرجة الأولى",
        "التوازن بين المنطق والمشاعر",
        "المشاعر والحدس بشكل أساسي",
      ],
      scores: {
        "التفكير المنطقي بالدرجة الأولى": { balanced: 2, introvert: 1 },
        "التوازن بين المنطق والمشاعر": { balanced: 2 },
        "المشاعر والحدس بشكل أساسي": { empathetic: 1, creative: 1 },
      },
    },
    {
      text: "بتقيّمي يومك إزاي عادةً؟",
      answers: [
        "بفكر في اللي عملته وأتعلم منه",
        "أحياناً بحاسب نفسي وأحياناً لأ",
        "مش بفكر كتير في اللي فات",
      ],
      scores: {
        "بفكر في اللي عملته وأتعلم منه": { balanced: 2 },
        "أحياناً بحاسب نفسي وأحياناً لأ": { balanced: 1 },
        "مش بفكر كتير في اللي فات": { lazy: 1, social: 1 },
      },
    },
  ],
  Ah = {
    social: {
      label: "اجتماعية / واثقة",
      emoji: "🌸",
      color: "#f48fb1",
      trait: "Extraverted & Confident",
      clouds: [
        "إنتِ تمتلكي طاقة اجتماعية رائعة! بتتواصلي مع الناس بسهولة وعندك ثقة في نفسك وقراراتك. ده ميزة كبيرة بتساعدك تعدّي تحديات الحياة بخفة.",
        "بس خلي بالك: الثقة الزيادة أحياناً ممكن تخليكِ مش تسمعي الآراء التانية. حافظي على الاتزان بين ثقتك وانفتاحك على الآخرين. ♡",
      ],
      tips: [
        "مارسي الاستماع الفعّال مع الناس من حواليكِ",
        "خذي وقت هادي لنفسك بين الفترة والأخرى",
        "استخدمي طاقتك الاجتماعية في مساعدة اللي حواليكِ",
      ],
    },
    anxious: {
      label: "قلق زائد / حساسة",
      emoji: "🌼",
      color: "#FFD700",
      trait: "High Neuroticism",
      clouds: [
        "القلق اللي بتحسي بيه إنتِ مش الوحيدة فيه — كتير من الناس بيمروا بنفس الإحساس. الأفكار السلبية اللي بتيجيلك مش حقيقة، هي مجرد أفكار وبتعدي.",
        "إنتِ حساسة جداً وده يمكن يكون موهبة لو اتعلمتِ توجهيها صح. أول خطوة هي إنك تعرفي إن اللحظة الحالية أحسن كتير من اللي بتتخيليه. 💛",
      ],
      tips: [
        "جربي تمرين التنفس العميق: 4 ثواني شهيق، 4 احتباس، 6 زفير",
        "اكتبي أفكارك القلقة في يومياتك وشوفي إذا كانت اتحققت فعلاً",
        "ابعدي عن مقارنة حياتك بالسوشيال ميديا",
      ],
    },
    lazy: {
      label: "كسولة / تحتاج تنظيم",
      emoji: "🌻",
      color: "#FFA07A",
      trait: "Low Conscientiousness",
      clouds: [
        "التسويف والكسل مش عيب في شخصيتك، أحياناً بيكون علامة على إن جسمك أو عقلك محتاجين راحة حقيقية أو تحفيز مختلف.",
        "الخبر الجيد: الانضباط مش صفة بتولدي بيها، هي عضلة بتتدرب عليها. ابدأي بعشر دقايق بس كل يوم، وهتبهري نفسك. ✨",
      ],
      tips: [
        "قسّمي المهام الكبيرة لخطوات صغيرة جداً",
        "جربي Pomodoro: 25 دقيقة شغل + 5 دقايق راحة",
        "كافئي نفسك على كل إنجاز صغير",
      ],
    },
    introvert: {
      label: "انطوائية / عمق داخلي",
      emoji: "🌷",
      color: "#DDA0DD",
      trait: "Introverted",
      clouds: [
        "الانطوائية مش خجل أو خوف — هي ببساطة إنك بتشحني طاقتك من الداخل ومن العلاقات العميقة بدل الكتيرة. ده ليس ضعفاً، ده طريقة تفكير مختلفة وعميقة.",
        "إنتِ عادةً بتكوني أكتر تأملاً وأعمق في التفكير من غيرك. استخدمي ده في الإبداع والتطوير الذاتي. قدرتك على التركيز مميزة جداً. 🌷",
      ],
      tips: [
        "خصصي وقتاً يومياً لنفسك بدون ضغط اجتماعي",
        "ابدأي بخطوات صغيرة في التفاعل الاجتماعي",
        "الكتابة أو الفن قناة ممتازة للتعبير عن نفسك",
      ],
    },
    balanced: {
      label: "متوازنة / منظمة",
      emoji: "✨",
      color: "#90EE90",
      trait: "High Conscientiousness & Balance",
      clouds: [
        "إنتِ عندك نضج عاطفي وقدرة على اتخاذ قرارات متزنة. بتعرفي تتعاملي مع الضغوط بهدوء وبتنجزي بثبات. ده اللي بيخلي الناس تثق فيكِ.",
        "استمري على هذا التوازن الجميل! والأهم من كده، انقلي هذه الطاقة الإيجابية للمحيطين بكِ وساعديهم يوصلوا لنفس المستوى. 💪",
      ],
      tips: [
        "شاركي خبراتك في التنظيم مع من حواليكِ",
        "لا تنسي أن تخصصي وقتاً للمرح والعفوية",
        "استمري في تطوير عاداتك الإيجابية",
      ],
    },
    creative: {
      label: "مبدعة / خيالية",
      emoji: "🎨",
      color: "#87CEEB",
      trait: "High Openness to Experience",
      clouds: [
        "عندك خيال واسع وقدرة على رؤية الأشياء من زوايا مختلفة. بتتأثري بالفن والأفكار العميقة وبتحبي الاستكشاف. ده هدية نادرة.",
        "الإبداع هو قوتك الكبيرة، بس خلي بالك من التشتت. حاولي توجهي طاقتك الإبداعية في مشاريع محددة وهتعمل أشياء مذهلة. 🎨",
      ],
      tips: [
        "خصصي وقتاً أسبوعياً لهواية إبداعية",
        "دوّني أفكارك في دفتر أفكار خاص",
        "الإبداع + التنظيم = نتائج رائعة",
      ],
    },
    empathetic: {
      label: "متعاطفة / قلبها كبير",
      emoji: "💕",
      color: "#FFB6C1",
      trait: "High Agreeableness & Empathy",
      clouds: [
        "قلبك الكبير ده من أجمل صفاتك! إنتِ بتحسي بمشاعر الناس وبتدي من نفسك بسخاء. ده بيخليكِ محبوبة ومؤثرة في حياة اللي حواليكِ.",
        "بس خلي بالك: مهم جداً تحطي حدوداً لنفسك وتحافظي على طاقتك. مينفعش تملي كوباية حد تانية وكوباياتك فاضية. اهتمي بنفسك الأول. 💕",
      ],
      tips: [
        "تعلمي تقولي 'لأ' من غير إحساس بالذنب",
        "خصصي وقتاً يومياً لتجديد طاقتك",
        "التعاطف مع نفسك بنفس قد تعاطفك مع الناس",
      ],
    },
  },
  eh = [
    { path: "/", label: "الرئيسية", icon: "🏠" },
    { path: "/quiz", label: "اختبري شخصيتك", icon: "🧠" },
    { path: "/weekly-planner", label: "الجدول الأسبوعي", icon: "📅" },
    { path: "/mood-tracker", label: "تتبع المزاج", icon: "🎨" },
    { path: "/diary", label: "يومياتي", icon: "📔" },
  ];
function og() {
  const [u, s] = Ms(),
    [f, o] = X.useState(!1),
    [m, A] = X.useState(null),
    [U, D] = X.useState(!1);
  X.useEffect(() => {
    A(fg());
  }, [f]);
  const T = m?.quizResult ? Ah[m.quizResult] : null,
    b = m
      ? [
          {
            icon: "📅",
            label: "إجمالي الزيارات",
            value: `${m.totalDays} يوم`,
            color: "#f48fb1",
          },
          {
            icon: "📔",
            label: "يوميات مكتوبة",
            value: `${m.diaryCount}`,
            color: "#DDA0DD",
          },
          {
            icon: "🎨",
            label: "أيام تتبع المزاج",
            value: `${m.moodCount}`,
            color: "#7BC67E",
          },
          {
            icon: "✅",
            label: "مهام الجدول",
            value: `${m.weeklyFilled}`,
            color: "#87CEEB",
          },
        ]
      : [];
  return d.jsxs("nav", {
    style: {
      position: "fixed",
      top: 0,
      right: 0,
      left: 0,
      zIndex: 1e3,
      background: "rgba(255, 240, 245, 0.96)",
      backdropFilter: "blur(12px)",
      borderBottom: "2px solid #f8bbd0",
      boxShadow: "0 2px 20px rgba(240,100,140,0.12)",
      fontFamily: "Tajawal, sans-serif",
      direction: "rtl",
    },
    children: [
      d.jsxs("div", {
        style: {
          maxWidth: 1e3,
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        },
        children: [
          d.jsxs("div", {
            style: {
              fontWeight: 900,
              fontSize: "1.25rem",
              color: "#b5004e",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            },
            onClick: () => {
              (s("/"), o(!1));
            },
            children: [
              d.jsx("img", {
                src: "/assets/dr-basma.jpg",
                alt: "Dr Basma",
                style: {
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #f8bbd0",
                },
              }),
              d.jsx("span", { children: "Sweet Therapy 🌸" }),
            ],
          }),
          d.jsx("div", {
            style: { display: "flex", gap: "0.3rem", alignItems: "center" },
            className: "nav-desktop",
            children: eh.map((z) =>
              d.jsxs(
                "button",
                {
                  onClick: () => s(z.path),
                  style: {
                    background: u === z.path ? "#f8bbd0" : "transparent",
                    border:
                      u === z.path
                        ? "2px solid #f48fb1"
                        : "2px solid transparent",
                    borderRadius: "2rem",
                    padding: "0.4rem 0.9rem",
                    fontFamily: "Tajawal, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: u === z.path ? "#b5004e" : "#6d3054",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  },
                  children: [
                    d.jsx("span", {
                      style: { marginLeft: "0.25rem" },
                      children: z.icon,
                    }),
                    z.label,
                  ],
                },
                z.path,
              ),
            ),
          }),
          d.jsxs("div", {
            style: { display: "flex", alignItems: "center", gap: "0.5rem" },
            children: [
              m !== null &&
                d.jsxs("div", {
                  title: `ستريك: ${m.streak} أيام متتالية`,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    background:
                      m.streak >= 3
                        ? "linear-gradient(135deg, #FF8C42, #FFD700)"
                        : m.streak >= 1
                          ? "#fce4ec"
                          : "#f5f5f5",
                    border:
                      m.streak >= 1 ? "2px solid #FF8C42" : "2px solid #e0e0e0",
                    borderRadius: "2rem",
                    padding: "0.25rem 0.7rem",
                    fontFamily: "Tajawal, sans-serif",
                    fontWeight: 900,
                    fontSize: "0.85rem",
                    color:
                      m.streak >= 3
                        ? "white"
                        : m.streak >= 1
                          ? "#FF8C42"
                          : "#aaa",
                    boxShadow:
                      m.streak >= 3
                        ? "0 2px 10px rgba(255,140,66,0.4)"
                        : "none",
                    cursor: "default",
                    userSelect: "none",
                    flexShrink: 0,
                    transition: "all 0.3s",
                  },
                  children: ["🔥 ", m.streak],
                }),
              d.jsx("button", {
                className: "nav-hamburger",
                onClick: () => {
                  (o(!f), D(!1));
                },
                style: {
                  background: "none",
                  border: "2px solid #f48fb1",
                  borderRadius: "0.5rem",
                  padding: "0.4rem 0.6rem",
                  cursor: "pointer",
                  fontSize: "1.3rem",
                  color: "#b5004e",
                  display: "none",
                },
                children: f ? "✕" : "☰",
              }),
            ],
          }),
        ],
      }),
      f &&
        d.jsxs("div", {
          style: {
            background: "rgba(255, 240, 245, 0.98)",
            borderTop: "1px solid #f8bbd0",
            padding: "0.5rem 1rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
          },
          children: [
            eh.map((z) =>
              d.jsxs(
                "button",
                {
                  onClick: () => {
                    (s(z.path), o(!1));
                  },
                  style: {
                    background: u === z.path ? "#f8bbd0" : "transparent",
                    border: "none",
                    borderRadius: "1rem",
                    padding: "0.7rem 1rem",
                    fontFamily: "Tajawal, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: u === z.path ? "#b5004e" : "#6d3054",
                    cursor: "pointer",
                    textAlign: "right",
                    width: "100%",
                  },
                  children: [z.icon, " ", z.label],
                },
                z.path,
              ),
            ),
            d.jsxs("div", {
              style: {
                borderTop: "1px solid #f8bbd0",
                marginTop: "0.4rem",
                paddingTop: "0.6rem",
              },
              children: [
                d.jsxs("button", {
                  onClick: () => D(!U),
                  style: {
                    background: "transparent",
                    border: "none",
                    borderRadius: "1rem",
                    padding: "0.7rem 1rem",
                    fontFamily: "Tajawal, sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    color: "#b5004e",
                    cursor: "pointer",
                    textAlign: "right",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                  children: [
                    d.jsx("span", { children: "📊 إحصائياتك" }),
                    d.jsx("span", {
                      style: { fontSize: "0.8rem", color: "#aaa" },
                      children: U ? "▲" : "▼",
                    }),
                  ],
                }),
                U &&
                  m &&
                  d.jsxs("div", {
                    style: {
                      padding: "0.4rem 0.5rem 0.8rem",
                      animation: "fadeInBg 0.3s ease",
                    },
                    children: [
                      d.jsxs("div", {
                        style: {
                          background:
                            m.streak >= 3
                              ? "linear-gradient(135deg, #FF8C42, #FFD700)"
                              : "#fce4ec",
                          borderRadius: "1rem",
                          padding: "0.7rem 1rem",
                          textAlign: "center",
                          color: m.streak >= 3 ? "white" : "#c2185b",
                          fontWeight: 900,
                          fontSize: "0.95rem",
                          marginBottom: "0.6rem",
                        },
                        children: [
                          "🔥 ستريك ",
                          m.streak,
                          " ",
                          m.streak === 1 ? "يوم" : "أيام",
                          " متتالية",
                          m.streak >= 3 && " 🎉",
                        ],
                      }),
                      d.jsx("div", {
                        style: {
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "0.5rem",
                          marginBottom: "0.6rem",
                        },
                        children: b.map((z, O) =>
                          d.jsxs(
                            "div",
                            {
                              style: {
                                background: "white",
                                borderRadius: "0.8rem",
                                padding: "0.6rem",
                                textAlign: "center",
                                border: `2px solid ${z.color}40`,
                              },
                              children: [
                                d.jsx("div", {
                                  style: { fontSize: "1.3rem" },
                                  children: z.icon,
                                }),
                                d.jsx("div", {
                                  style: {
                                    fontWeight: 900,
                                    color: z.color,
                                    fontSize: "1.1rem",
                                  },
                                  children: z.value,
                                }),
                                d.jsx("div", {
                                  style: {
                                    fontWeight: 600,
                                    color: "#888",
                                    fontSize: "0.72rem",
                                  },
                                  children: z.label,
                                }),
                              ],
                            },
                            O,
                          ),
                        ),
                      }),
                      T &&
                        d.jsxs("div", {
                          style: {
                            background: `${T.color}20`,
                            border: `2px solid ${T.color}50`,
                            borderRadius: "0.8rem",
                            padding: "0.6rem 0.8rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                          },
                          children: [
                            d.jsx("span", {
                              style: { fontSize: "1.4rem" },
                              children: T.emoji,
                            }),
                            d.jsxs("div", {
                              children: [
                                d.jsx("div", {
                                  style: {
                                    fontWeight: 800,
                                    color: "#b5004e",
                                    fontSize: "0.8rem",
                                  },
                                  children: "نوع شخصيتك:",
                                }),
                                d.jsx("div", {
                                  style: {
                                    fontWeight: 700,
                                    color: "#555",
                                    fontSize: "0.85rem",
                                  },
                                  children: T.label,
                                }),
                              ],
                            }),
                          ],
                        }),
                      !T &&
                        d.jsx("button", {
                          onClick: () => {
                            (s("/quiz"), o(!1));
                          },
                          style: {
                            width: "100%",
                            background: "#fce4ec",
                            border: "2px dashed #f48fb1",
                            borderRadius: "0.8rem",
                            padding: "0.6rem",
                            fontFamily: "Tajawal, sans-serif",
                            fontWeight: 700,
                            color: "#b5004e",
                            fontSize: "0.85rem",
                            cursor: "pointer",
                          },
                          children: "🧠 خدي اختبار الشخصية!",
                        }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      d.jsx("style", {
        children: `
        @keyframes fadeInBg { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
      `,
      }),
    ],
  });
}
function dg() {
  return d.jsx("div", {
    style: {
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      zIndex: 0,
      overflow: "hidden",
    },
    "aria-hidden": "true",
    children: [
      { top: "8%", right: "3%", size: 28, color: "#f8bbd0", shape: "heart" },
      { top: "15%", left: "4%", size: 22, color: "#fce4ec", shape: "star" },
      { top: "35%", right: "5%", size: 18, color: "#f48fb1", shape: "circle" },
      { top: "50%", left: "2%", size: 24, color: "#f8bbd0", shape: "heart" },
      { top: "65%", right: "4%", size: 20, color: "#fce4ec", shape: "star" },
      { top: "80%", left: "5%", size: 16, color: "#f48fb1", shape: "circle" },
      { top: "90%", right: "6%", size: 22, color: "#f8bbd0", shape: "heart" },
      { top: "25%", left: "8%", size: 14, color: "#fce4ec", shape: "star" },
      { top: "72%", left: "3%", size: 18, color: "#f48fb1", shape: "heart" },
    ].map((u, s) =>
      d.jsxs(
        "div",
        {
          style: {
            position: "absolute",
            top: u.top,
            right: "right" in u ? u.right : void 0,
            left: "left" in u ? u.left : void 0,
            opacity: 0.35,
            animation: `float-${s % 3} ${3 + (s % 3)}s ease-in-out infinite`,
          },
          children: [
            u.shape === "heart" &&
              d.jsx("svg", {
                width: u.size,
                height: u.size,
                viewBox: "0 0 24 24",
                fill: u.color,
                children: d.jsx("path", {
                  d: "M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z",
                }),
              }),
            u.shape === "star" &&
              d.jsx("svg", {
                width: u.size,
                height: u.size,
                viewBox: "0 0 24 24",
                fill: u.color,
                children: d.jsx("path", {
                  d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                }),
              }),
            u.shape === "circle" &&
              d.jsx("svg", {
                width: u.size,
                height: u.size,
                viewBox: "0 0 24 24",
                fill: u.color,
                children: d.jsx("circle", { cx: "12", cy: "12", r: "10" }),
              }),
          ],
        },
        s,
      ),
    ),
  });
}
const lh = [
  {
    text: "إنتِ أقوى مما تعتقدي",
    subtext: "كل يوم بتصحيه وتكملي فيه هو انتصار. متقللي من قوتك أبداً. 🌸",
    emoji: "💪",
    color: "#f48fb1",
  },
  {
    text: "الأفكار السلبية مش حقيقة",
    subtext: "مخك بيكذب عليكِ أحياناً. الواقع أحسن بكتير مما بيخيّلوه. ✨",
    emoji: "🌟",
    color: "#FFD700",
  },
  {
    text: "خطوة صغيرة أحسن من مفيش خطوات",
    subtext: "مش محتاجة تغيري كل حاجة في يوم واحد. ابدأي بأصغر خطوة ممكنة. 💕",
    emoji: "👣",
    color: "#90EE90",
  },
  {
    text: "إنتِ مش لازم تكوني perfect",
    subtext: "الكمال وهم. ما بتعمليه دلوقتي كافي. إنتِ كافية. 🌷",
    emoji: "🌺",
    color: "#DDA0DD",
  },
  {
    text: "راحتك مش كسل، هي ضرورة",
    subtext: "جسمك وعقلك محتاجين وقفة. إعطي نفسك الإذن بالراحة من غير ذنب. 🌙",
    emoji: "🌙",
    color: "#87CEEB",
  },
  {
    text: "مشاعرك صح ومهمة",
    subtext: "كل إحساس عندك له قيمة وسبب. لا تكتميه ولا تتجاهليه. 💝",
    emoji: "💝",
    color: "#FFB6C1",
  },
  {
    text: "المقارنة سارق السعادة",
    subtext: "رحلتك مختلفة عن رحلة أي حد تانية. شوفي تقدمك الخاص فقط. 🌸",
    emoji: "🚀",
    color: "#f48fb1",
  },
  {
    text: "كل يوم فرصة جديدة",
    subtext: "أمبارح راح. النهارده لوحة بيضاء تكتبي عليها اللي إنتِ عايزاه. 🌅",
    emoji: "🌅",
    color: "#FFA07A",
  },
  {
    text: "طلب المساعدة شجاعة",
    subtext:
      "الأقوياء هم اللي بيعترفوا إنهم محتاجين دعم. ماحدش قادر يعمل كل حاجة لوحده. 💪",
    emoji: "🤝",
    color: "#90EE90",
  },
  {
    text: "جسمك بيستاهل العناية",
    subtext: "نوّمي كويس، اشربي مياه، تحركي شوية. جسمك صاحبك مش عدوك. 💚",
    emoji: "🌿",
    color: "#7BC67E",
  },
  {
    text: "الصبر على نفسك فضيلة",
    subtext:
      "التغيير بياخد وقت. كوني رحيمة مع نفسك زي ما بتكوني رحيمة مع غيرك. 🌼",
    emoji: "🌼",
    color: "#FFD700",
  },
  {
    text: "إنتِ مش ما بتنجزيه بس",
    subtext: "قيمتك مش في إنتاجيتك. إنتِ إنسانة كاملة بمجرد وجودك. ✨",
    emoji: "⭐",
    color: "#FFD700",
  },
  {
    text: "الهدوء قوة مش ضعف",
    subtext:
      "الناس الهادية بتشتغل في العمق. صمتك وتأملك ده ليس خمول، ده نضج. 🌊",
    emoji: "🌊",
    color: "#87CEEB",
  },
  {
    text: "إنتِ لستِ أفكارك",
    subtext: "الأفكار بتيجي وبتروح. إنتِ اللي بتراقبيها، مش إنتِ هي. 🧘",
    emoji: "🧘",
    color: "#DDA0DD",
  },
  {
    text: "التقدم مش خط مستقيم",
    subtext:
      "أيام رجعة للوراء هي جزء طبيعي من كل رحلة تطوير. متحكميش على نفسك. 📈",
    emoji: "🌀",
    color: "#87CEEB",
  },
  {
    text: "حواليكِ ناس بتحبك",
    subtext: "حتى لو أحياناً مش حاسة بده. الحب موجود ومحيط بيكِ. 💕",
    emoji: "💕",
    color: "#FFB6C1",
  },
  {
    text: "النوم استثمار مش وقت ضايع",
    subtext: "لما بتنامي كويس، دماغك بتتجدد وبتقدري تواجهي الدنيا أحسن. 🌙",
    emoji: "😴",
    color: "#DDA0DD",
  },
  {
    text: "هواياتك مش رفاهية",
    subtext:
      "اللي بتحبيه وبيفرحك ده جزء أساسي من صحتك النفسية. مش وقت ضايع أبداً. 🎨",
    emoji: "🎨",
    color: "#FFA07A",
  },
  {
    text: "شكري نفسك على اللي بتعمليه",
    subtext:
      "اليوم اللي بتعدّيه ده مش سهل. إنتِ بتشتغلي وبتحاولي وده يستاهل تقدير. 🌟",
    emoji: "🏆",
    color: "#FFD700",
  },
  {
    text: "البكاء مش علامة ضعف",
    subtext:
      "البكاء بيساعد جسمك يطلق التوتر المتراكم. السماح لنفسك بالتعبير شجاعة. 💙",
    emoji: "💧",
    color: "#87CEEB",
  },
  {
    text: "إنتِ قادرة تغيري ما بتحسي بيه",
    subtext:
      "مش كل حاجة في إيدك، بس إيدك مش فاضية تماماً. خطوة صغيرة كل يوم. 🌱",
    emoji: "🌱",
    color: "#90EE90",
  },
  {
    text: "السلام الداخلي ممكن",
    subtext:
      "حتى في الدنيا الصاخبة دي، في جوّاكِ مكان هادي تقدري ترجعيله دايماً. 🕊️",
    emoji: "🕊️",
    color: "#f48fb1",
  },
  {
    text: "إنتِ مش مضطرة تشرحي نفسك",
    subtext:
      "قراراتك وحدودك لا تحتاج موافقة من حد. إنتِ تعرفي نفسك أكتر من غيرك. 👑",
    emoji: "👑",
    color: "#FFD700",
  },
  {
    text: "الامتنان بيغير كيمياء المخ",
    subtext:
      "حاولي تفكري في 3 حاجات زينة حصلت اليوم، حتى لو صغيرة. هيغير مزاجك. 🙏",
    emoji: "🙏",
    color: "#90EE90",
  },
  {
    text: "جسمك بيستمع لكلامك الداخلي",
    subtext:
      "الأفكار اللي بتقوليها لنفسك بتأثر على صحتك. خلي الكلام الداخلي لطيفاً. 💗",
    emoji: "💗",
    color: "#FFB6C1",
  },
  {
    text: "إنتِ لستِ عبئاً على أحد",
    subtext: "اللي بيهتموا بيكِ بيعملوا ده لأنهم بيحبوكِ مش لأنهم مضطرين. 🌸",
    emoji: "🤗",
    color: "#f48fb1",
  },
  {
    text: "الرحلة أهم من الوصول",
    subtext: "كل لحظة بتعيشيها دلوقتي لها قيمة. مش كل حاجة هدف بعيد. 🛤️",
    emoji: "🌈",
    color: "#87CEEB",
  },
  {
    text: "تقبّلي نفسك ببعيوبها",
    subtext:
      "نقاط ضعفك هي جزء من قصتك الكاملة. مش لازم تكوني مختلفة عشان تكوني محبوبة. 🦋",
    emoji: "🦋",
    color: "#DDA0DD",
  },
  {
    text: "النهارده هيتعدى",
    subtext: "حتى لو بيجيكِ صعب أو تقيل، تعدّي النهارده. بكره بداية جديدة. 🌙",
    emoji: "⭐",
    color: "#DDA0DD",
  },
  {
    text: "إنتِ هنا ومهمة",
    subtext:
      "وجودك بيفرق في حياة ناس ممكن متعرفيهاش. الدنيا أحسن بوجودك فيها. 💖",
    emoji: "💖",
    color: "#FFB6C1",
  },
];
function hg() {
  const u = new Date(),
    s = Math.floor(
      (u.getTime() - new Date(u.getFullYear(), 0, 0).getTime()) / 864e5,
    );
  return lh[s % lh.length];
}
function mg() {
  const [u, s] = X.useState(!1),
    [f, o] = X.useState(!1),
    m = hg();
  X.useEffect(() => {
    if (rg()) {
      const U = setTimeout(() => s(!0), 800);
      return () => clearTimeout(U);
    }
  }, []);
  const A = () => {
    (o(!0), sg(), setTimeout(() => s(!1), 400));
  };
  return u
    ? d.jsxs("div", {
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 2e3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(180, 60, 100, 0.18)",
          backdropFilter: "blur(4px)",
          animation: f
            ? "fadeOut 0.4s ease forwards"
            : "fadeInBg 0.4s ease forwards",
          padding: "1rem",
        },
        onClick: A,
        children: [
          d.jsxs("div", {
            onClick: (U) => U.stopPropagation(),
            style: {
              background: "white",
              borderRadius: "2rem",
              padding: "2.5rem 2rem",
              maxWidth: 420,
              width: "100%",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(240,100,140,0.25)",
              border: `3px solid ${m.color}`,
              animation: f
                ? "slideOut 0.4s ease forwards"
                : "slideIn 0.5s cubic-bezier(.34,1.56,.64,1) forwards",
              position: "relative",
              direction: "rtl",
              fontFamily: "Tajawal, sans-serif",
            },
            children: [
              d.jsx("div", {
                style: {
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: `${m.color}30`,
                  border: `3px solid ${m.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.2rem",
                  margin: "0 auto 1.2rem",
                },
                children: m.emoji,
              }),
              d.jsx("div", {
                style: {
                  background: `${m.color}15`,
                  borderRadius: "1rem",
                  padding: "0.4rem 1rem",
                  display: "inline-block",
                  marginBottom: "1rem",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#888",
                },
                children: "💌 رسالة يومك",
              }),
              d.jsx("h2", {
                style: {
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  color: "#b5004e",
                  marginBottom: "0.8rem",
                  lineHeight: 1.4,
                },
                children: m.text,
              }),
              d.jsx("p", {
                style: {
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#555",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                },
                children: m.subtext,
              }),
              d.jsx("div", {
                style: {
                  display: "flex",
                  gap: "0.8rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                },
                children: d.jsx("button", {
                  onClick: A,
                  style: {
                    background: m.color,
                    color: "white",
                    border: "none",
                    borderRadius: "2rem",
                    padding: "0.7rem 2rem",
                    fontFamily: "Tajawal, sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow: `0 4px 14px ${m.color}60`,
                    transition: "transform 0.15s",
                  },
                  onMouseEnter: (U) =>
                    (U.currentTarget.style.transform = "scale(1.05)"),
                  onMouseLeave: (U) =>
                    (U.currentTarget.style.transform = "scale(1)"),
                  children: "شكراً ♡",
                }),
              }),
              d.jsx("p", {
                style: {
                  fontSize: "0.75rem",
                  color: "#ccc",
                  marginTop: "1rem",
                },
                children: "هتشوفي رسالة جديدة كل يوم 🌸",
              }),
            ],
          }),
          d.jsx("style", {
            children: `
        @keyframes fadeInBg { from { opacity:0 } to { opacity:1 } }
        @keyframes fadeOut { from { opacity:1 } to { opacity:0 } }
        @keyframes slideIn { from { opacity:0; transform:scale(0.8) translateY(30px) } to { opacity:1; transform:scale(1) translateY(0) } }
        @keyframes slideOut { from { opacity:1; transform:scale(1) } to { opacity:0; transform:scale(0.9) } }
      `,
          }),
        ],
      })
    : null;
}
function yg() {
  const [u, s] = X.useState(!1),
    [f, o] = X.useState(0.4),
    [m, A] = X.useState(!1),
    U = X.useRef(null);
  (X.useEffect(() => {
    const T = new Audio("/assets/background-music.mp3");
    return (
      (T.loop = !0),
      (T.volume = f),
      (U.current = T),
      () => {
        (T.pause(), (T.src = ""));
      }
    );
  }, []),
    X.useEffect(() => {
      U.current && (U.current.volume = f);
    }, [f]));
  const D = () => {
    U.current &&
      (u
        ? (U.current.pause(), s(!1))
        : (U.current.play().catch(() => {}), s(!0)));
  };
  return d.jsxs("div", {
    style: {
      position: "fixed",
      bottom: "1.5rem",
      left: "1.5rem",
      zIndex: 1500,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "0.5rem",
      fontFamily: "Tajawal, sans-serif",
      direction: "rtl",
    },
    children: [
      m &&
        d.jsxs("div", {
          style: {
            background: "rgba(255,240,245,0.97)",
            border: "2px solid #f8bbd0",
            borderRadius: "1rem",
            padding: "0.7rem 1rem",
            boxShadow: "0 4px 16px rgba(240,100,140,0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
            alignItems: "center",
            minWidth: 130,
          },
          children: [
            d.jsx("span", {
              style: { fontSize: "0.8rem", fontWeight: 700, color: "#b5004e" },
              children: "مستوى الصوت",
            }),
            d.jsx("input", {
              type: "range",
              min: 0,
              max: 1,
              step: 0.05,
              value: f,
              onChange: (T) => o(Number(T.target.value)),
              style: { width: "100%", accentColor: "#f48fb1" },
            }),
          ],
        }),
      d.jsx("button", {
        onClick: D,
        onContextMenu: (T) => {
          (T.preventDefault(), A((b) => !b));
        },
        title: u
          ? "إيقاف الموسيقى (كليك يمين للصوت)"
          : "تشغيل موسيقى هادية (كليك يمين للصوت)",
        style: {
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: u
            ? "linear-gradient(135deg, #f48fb1, #c2185b)"
            : "rgba(255,240,245,0.95)",
          border: u ? "none" : "2px solid #f8bbd0",
          boxShadow: u
            ? "0 4px 20px rgba(240,100,140,0.4), 0 0 0 6px rgba(240,100,140,0.12)"
            : "0 2px 10px rgba(240,100,140,0.15)",
          cursor: "pointer",
          fontSize: "1.4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s",
          animation: u ? "musicPulse 2s ease-in-out infinite" : "none",
        },
        children: u ? "🎵" : "🎶",
      }),
      d.jsx("style", {
        children: `
        @keyframes musicPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(240,100,140,0.4), 0 0 0 6px rgba(240,100,140,0.12); }
          50% { box-shadow: 0 4px 20px rgba(240,100,140,0.6), 0 0 0 12px rgba(240,100,140,0.06); }
        }
      `,
      }),
    ],
  });
}
const Ns = [
    {
      id: "sleep-distractions",
      title: "السهر والمشتتات",
      number: "١",
      section: "affects",
      images: [
        { src: "/assets/hh_1777917733954.jpg", alt: "النوم يؤثر على مزاجنا" },
        { src: "/assets/hh2_1777917741758.jpg", alt: "جدول النوم والمشتتات" },
        { src: "/assets/نوم_1777917751000.jpg", alt: "جدول النوم والصحيان" },
      ],
    },
    {
      id: "food-laziness",
      title: "الاكل والكسل",
      number: "٢",
      section: "affects",
      images: [
        { src: "/assets/gg_1777917756052.jpg", alt: "الاكل يؤثر على مزاجك" },
        { src: "/assets/gg3_1777917760448.jpg", alt: "عادات الاكل" },
        { src: "/assets/اكل_1777917769318.jpg", alt: "جدول اكل يومي" },
      ],
    },
    {
      id: "environment-people",
      title: "البيئة والناس",
      number: "٣",
      section: "affects",
      images: [
        { src: "/assets/ii_1777917806454.jpg", alt: "البيئة والناس" },
        { src: "/assets/ii3_1777917814878.jpg", alt: "المكان المرتب والخضرة" },
      ],
    },
    {
      id: "hobbies",
      title: "الهوايات",
      number: "١",
      section: "improves",
      images: [
        { src: "/assets/kk_1777917848119.jpg", alt: "الهوايات مش وقت ضايع" },
        { src: "/assets/kk4_1777917854068.jpg", alt: "الهواية بتشحن طاقتك" },
      ],
    },
    {
      id: "learning-skills",
      title: "تعلم المهارات",
      number: "٢",
      section: "improves",
      images: [
        {
          src: "/assets/IMG-20260428-WA0088_1777917964837.jpg",
          alt: "تعلم مهارات جديدة",
        },
        {
          src: "/assets/IMG-20260428-WA0071_1777917974417.jpg",
          alt: "Pomodoro Timer",
        },
      ],
    },
    {
      id: "reading",
      title: "القراءة",
      number: "٣",
      section: "improves",
      images: [
        { src: "/assets/uu_1777917983932.jpg", alt: "القراءة تقلل التوتر" },
      ],
    },
  ],
  gg = Ns.filter((u) => u.section === "affects"),
  vg = Ns.filter((u) => u.section === "improves");
function ah({ title: u, number: s, onClick: f }) {
  return d.jsx("button", {
    className: "scallop-circle",
    onClick: f,
    style: { width: 160, height: 160, flexDirection: "column" },
    "aria-label": u,
    children: d.jsxs("span", {
      style: {
        fontSize: "1.05rem",
        fontWeight: 900,
        color: "#c2185b",
        textAlign: "center",
        lineHeight: 1.3,
        padding: "0 12px",
      },
      children: [
        d.jsx("sup", {
          style: {
            fontSize: "0.75rem",
            marginLeft: "4px",
            fontWeight: 700,
            color: "#e91e8c",
          },
          children: s,
        }),
        u,
      ],
    }),
  });
}
function bg() {
  const [, u] = Ms();
  return d.jsx("div", {
    className: "page-bg",
    style: { paddingTop: 80 },
    children: d.jsxs("div", {
      style: {
        maxWidth: 900,
        margin: "0 auto",
        padding: "2rem 1rem 3rem",
        position: "relative",
        zIndex: 1,
      },
      children: [
        d.jsx("div", {
          style: { textAlign: "center", marginBottom: "1.5rem" },
          children: d.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "1.5rem",
              marginBottom: "1rem",
              flexWrap: "wrap",
            },
            children: [
              d.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
                children: [
                  d.jsx("div", {
                    className: "speech-bubble-home",
                    children: "أهلاً بيكم! أنا بسمه 🎀",
                  }),
                  d.jsx("img", {
                    src: "/assets/dr-basma.jpg",
                    alt: "دكتور بسمة",
                    style: {
                      width: 100,
                      height: 100,
                      objectFit: "cover",
                      borderRadius: "50%",
                      border: "3px solid #f8bbd0",
                      boxShadow: "0 4px 16px rgba(240,100,140,0.2)",
                    },
                  }),
                ],
              }),
              d.jsxs("div", {
                style: { textAlign: "center", padding: "0 1rem" },
                children: [
                  d.jsx("h1", {
                    style: {
                      fontFamily: "Tajawal, sans-serif",
                      fontWeight: 900,
                      fontSize: "2.2rem",
                      color: "#b5004e",
                      margin: "0 0 0.3rem",
                      textShadow: "2px 2px 6px rgba(229,0,100,0.1)",
                    },
                    children: "Sweet Therapy 🌸",
                  }),
                  d.jsx("p", {
                    style: {
                      color: "#c2185b",
                      fontSize: "1rem",
                      fontWeight: 600,
                      margin: 0,
                    },
                    children: "إضغطي على كل دايرة عشان تعرفي أكتر",
                  }),
                ],
              }),
              d.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
                children: [
                  d.jsx("div", {
                    className: "speech-bubble-home",
                    children: "وأنا سارة، يلا نبدأ! 🎀",
                  }),
                  d.jsx("img", {
                    src: "/assets/dr-sarah.jpg",
                    alt: "دكتور سارة",
                    style: {
                      width: 100,
                      height: 100,
                      objectFit: "cover",
                      borderRadius: "50%",
                      border: "3px solid #f8bbd0",
                      boxShadow: "0 4px 16px rgba(240,100,140,0.2)",
                    },
                  }),
                ],
              }),
            ],
          }),
        }),
        d.jsx("div", { className: "heart-divider", children: "♡ ♡ ♡" }),
        d.jsxs("section", {
          style: { marginBottom: "3rem" },
          children: [
            d.jsx("h2", {
              className: "section-title",
              children: "إيه ممكن يأثر على الصحة النفسية؟",
            }),
            d.jsx("div", {
              style: {
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                flexWrap: "wrap",
              },
              children: gg.map((s) =>
                d.jsx(
                  ah,
                  {
                    title: s.title,
                    number: s.number,
                    onClick: () => u(`/category/${s.id}`),
                  },
                  s.id,
                ),
              ),
            }),
          ],
        }),
        d.jsx("div", { className: "heart-divider", children: "♡ ♡ ♡" }),
        d.jsxs("section", {
          style: { marginBottom: "3rem" },
          children: [
            d.jsx("h2", {
              className: "section-title",
              children: "إيه ممكن يحسن من صحتنا النفسية؟",
            }),
            d.jsx("div", {
              style: {
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                flexWrap: "wrap",
              },
              children: vg.map((s) =>
                d.jsx(
                  ah,
                  {
                    title: s.title,
                    number: s.number,
                    onClick: () => u(`/category/${s.id}`),
                  },
                  s.id,
                ),
              ),
            }),
          ],
        }),
        d.jsx("div", { className: "heart-divider", children: "♡ ♡ ♡" }),
        d.jsxs("section", {
          style: { marginBottom: "2rem" },
          children: [
            d.jsx("h2", {
              className: "section-title",
              children: "شوفي شخصيتك هتطلع إيه 📝",
            }),
            d.jsx("div", {
              style: { textAlign: "center" },
              children: d.jsx("button", {
                className: "back-btn",
                onClick: () => u("/quiz"),
                style: { margin: "0 auto", fontSize: "1.1rem" },
                children: "🧠 خدي الاختبار دلوقتي!",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function pg() {
  const u = yh(),
    [, s] = Ms(),
    f = Ns.find((m) => m.id === u.id);
  if (!f)
    return d.jsx("div", {
      className: "page-bg",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      },
      children: d.jsxs("div", {
        style: { textAlign: "center" },
        children: [
          d.jsx("p", {
            style: { fontSize: "1.5rem", color: "#c2185b" },
            children: "الصفحة مش موجودة 😔",
          }),
          d.jsx("button", {
            className: "back-btn",
            onClick: () => s("/"),
            style: { margin: "1rem auto" },
            children: "← ارجعي للرئيسية",
          }),
        ],
      }),
    });
  const o =
    f.section === "affects"
      ? "إيه ممكن يأثر على الصحة النفسية؟"
      : "إيه ممكن يحسن من صحتنا النفسية؟";
  return d.jsx("div", {
    className: "page-bg",
    children: d.jsxs("div", {
      style: { maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 3rem" },
      children: [
        d.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
            gap: "1rem",
            flexWrap: "wrap",
          },
          children: [
            d.jsx("button", {
              className: "back-btn",
              onClick: () => s("/"),
              children: "← رجوع",
            }),
            d.jsx("span", {
              style: { color: "#e91e8c", fontSize: "0.95rem", fontWeight: 600 },
              children: o,
            }),
          ],
        }),
        d.jsxs("div", {
          style: { textAlign: "center", marginBottom: "2rem" },
          children: [
            d.jsx("div", {
              style: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "#fce4ec",
                border: "4px dashed #f8bbd0",
                marginBottom: "1rem",
                boxShadow: "0 4px 16px rgba(240,100,140,0.18)",
              },
              children: d.jsx("span", {
                style: {
                  fontWeight: 900,
                  fontSize: "1.2rem",
                  color: "#c2185b",
                  textAlign: "center",
                  padding: "0 10px",
                },
                children: f.title,
              }),
            }),
            d.jsx("h1", {
              style: {
                fontFamily: "Tajawal, sans-serif",
                fontWeight: 900,
                fontSize: "2rem",
                color: "#b5004e",
                margin: 0,
              },
              children: f.title,
            }),
          ],
        }),
        d.jsx("div", { className: "heart-divider", children: "♡ ♡ ♡" }),
        d.jsx("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginTop: "1.5rem",
          },
          children: f.images.map((m, A) =>
            d.jsx(
              "div",
              {
                className: "image-card",
                children: d.jsx("img", {
                  src: m.src,
                  alt: m.alt,
                  style: {
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                  },
                  loading: "lazy",
                }),
              },
              A,
            ),
          ),
        }),
        d.jsx("div", {
          style: { textAlign: "center", marginTop: "2.5rem" },
          children: d.jsx("button", {
            className: "back-btn",
            onClick: () => s("/"),
            children: "← ارجعي للرئيسية",
          }),
        }),
      ],
    }),
  });
}
function Sg({ onStart: u }) {
  return d.jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
      paddingTop: "1rem",
    },
    children: [
      d.jsxs("div", {
        className: "belief-cloud",
        children: [
          d.jsx("p", { children: "إحنا مؤمنين إن الصحة النفسية مهمة جداً" }),
          d.jsx("p", {
            children: "وإن أيّ حد فينا يستحق يلاقي مكان آمن ولطيف",
          }),
          d.jsx("p", {
            style: { marginTop: "0.5rem", fontWeight: 700, color: "#b5004e" },
            children: "يساعده ويشجعه يطور من نفسه ويكون أحسن ♡",
          }),
        ],
      }),
      d.jsxs("div", {
        style: {
          background: "#c0392b",
          color: "white",
          fontSize: "1.2rem",
          fontWeight: 800,
          padding: "1.2rem 3rem",
          borderRadius: "0.75rem",
          textAlign: "center",
          lineHeight: 1.7,
          boxShadow: "0 6px 20px rgba(192,57,43,0.30)",
          clipPath:
            "polygon(4% 0%, 96% 0%, 100% 50%, 96% 100%, 4% 100%, 0% 50%)",
          maxWidth: 500,
        },
        children: [
          "تعالو معانا.. نكتشف نفسنا",
          d.jsx("br", {}),
          "بشوية أسئلة ودردشة بسيطة ♡",
        ],
      }),
      d.jsx("button", {
        onClick: u,
        style: {
          width: 160,
          height: 160,
          borderRadius: "50%",
          background:
            "repeating-linear-gradient(45deg, #f5dde0 0px, #f5dde0 12px, #fdeaea 12px, #fdeaea 24px)",
          border: "4px solid #d9a0a8",
          cursor: "pointer",
          boxShadow: "0 6px 24px rgba(200,100,120,0.2)",
          transition: "transform 0.2s, box-shadow 0.2s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Tajawal, sans-serif",
        },
        onMouseEnter: (s) => {
          s.currentTarget.style.transform = "scale(1.08)";
        },
        onMouseLeave: (s) => {
          s.currentTarget.style.transform = "scale(1)";
        },
        children: d.jsx("span", {
          style: {
            background: "white",
            border: "3px solid #c08088",
            borderRadius: "1rem",
            padding: "0.6rem 1.4rem",
            fontSize: "1.3rem",
            fontWeight: 900,
            color: "#8a3050",
          },
          children: "يلا نبدا",
        }),
      }),
    ],
  });
}
function xg({ currentQ: u, onAnswer: s }) {
  const [f, o] = X.useState(null),
    m = Li[u],
    A = Li.length,
    U = (u / A) * 100;
  X.useEffect(() => {
    o(null);
  }, [u]);
  const D = (T) => {
    f || (o(T), setTimeout(() => s(T), 380));
  };
  return d.jsxs("div", {
    style: { width: "100%", maxWidth: 680, margin: "0 auto" },
    children: [
      d.jsxs("div", {
        style: { marginBottom: "0.5rem" },
        children: [
          d.jsx("div", {
            style: {
              background: "rgba(255,255,255,0.5)",
              borderRadius: 20,
              height: 10,
              overflow: "hidden",
              border: "1px solid #f8bbd0",
            },
            children: d.jsx("div", {
              style: {
                height: "100%",
                background: "linear-gradient(90deg, #c2185b, #f48fb1)",
                borderRadius: 20,
                width: `${U}%`,
                transition: "width 0.4s ease",
              },
            }),
          }),
          d.jsxs("p", {
            style: {
              textAlign: "center",
              fontSize: "0.85rem",
              color: "#888",
              marginTop: "0.3rem",
              fontWeight: 600,
            },
            children: ["سؤال ", u + 1, " من ", A],
          }),
        ],
      }),
      d.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
          justifyContent: "flex-end",
          marginBottom: "2rem",
        },
        children: [
          d.jsxs("div", {
            style: {
              background: "#fde0e8",
              border: "2px dashed #e898b0",
              borderRadius: "1.2rem 1.2rem 0.3rem 1.2rem",
              padding: "1.2rem 1.5rem",
              flex: 1,
              boxShadow: "0 4px 16px rgba(240,100,140,0.1)",
            },
            children: [
              d.jsx("p", {
                style: {
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#2c2c2c",
                  lineHeight: 1.65,
                  margin: 0,
                },
                children: m.text,
              }),
              m.hint &&
                d.jsxs("p", {
                  style: {
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#999",
                    margin: "0.5rem 0 0",
                    fontStyle: "italic",
                  },
                  children: ["💡 ", m.hint],
                }),
            ],
          }),
          d.jsx("img", {
            src: "/assets/dr-sarah.jpg",
            alt: "دكتور سارة",
            style: {
              width: 80,
              height: 80,
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #f8bbd0",
              flexShrink: 0,
            },
          }),
        ],
      }),
      d.jsx("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          alignItems: "stretch",
        },
        children: m.answers.map((T) => {
          const b = f === T,
            z = f && !b;
          return d.jsxs(
            "button",
            {
              onClick: () => D(T),
              disabled: !!f,
              style: {
                background: b
                  ? "linear-gradient(135deg, #f8bbd0, #fce4ec)"
                  : "rgba(255,255,255,0.7)",
                border: "none",
                borderRadius: "1.5rem",
                padding: "0.9rem 1.5rem",
                fontSize: "1.05rem",
                fontWeight: 800,
                color: b ? "#b5004e" : "#4a2040",
                cursor: f ? "default" : "pointer",
                textAlign: "right",
                fontFamily: "Tajawal, sans-serif",
                transition: "all 0.2s",
                transform: b ? "scale(1.02) translateX(-4px)" : "scale(1)",
                opacity: z ? 0.4 : 1,
                boxShadow: b ? "0 4px 16px rgba(240,100,140,0.25)" : "none",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              },
              onMouseEnter: (O) => {
                f ||
                  (O.currentTarget.style.background = "rgba(255,220,230,0.7)");
              },
              onMouseLeave: (O) => {
                !f &&
                  !b &&
                  (O.currentTarget.style.background = "rgba(255,255,255,0.7)");
              },
              children: [
                d.jsx("span", {
                  style: {
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: b ? "#f48fb1" : "#fce4ec",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.85rem",
                    transition: "all 0.2s",
                  },
                  children: b ? "✓" : "🩷",
                }),
                T,
              ],
            },
            T,
          );
        }),
      }),
    ],
  });
}
function jg({ resultKey: u, onReset: s }) {
  const f = Ah[u],
    o = X.useRef(null),
    [m, A] = X.useState(!1),
    [U, D] = X.useState(!1);
  if (!f) return null;
  const T = `🌸 نتيجة اختبار Sweet Therapy 🌸

شخصيتي: ${f.emoji} ${f.label}

${f.clouds[0]}

#SweetTherapy #صحة_نفسية`,
    b = async () => {
      A(!0);
      try {
        navigator.share
          ? await navigator.share({
              title: "نتيجة اختبار Sweet Therapy 🌸",
              text: T,
            })
          : (await navigator.clipboard.writeText(T),
            D(!0),
            setTimeout(() => D(!1), 2500));
      } catch {}
      A(!1);
    },
    z = () => {
      const O = document.createElement("canvas");
      ((O.width = 800), (O.height = 1e3));
      const S = O.getContext("2d"),
        q = S.createLinearGradient(0, 0, 0, 1e3);
      (q.addColorStop(0, "#fff0f5"),
        q.addColorStop(1, "#fce4ec"),
        (S.fillStyle = q),
        S.roundRect(0, 0, 800, 1e3, 40),
        S.fill(),
        (S.fillStyle = f.color + "30"));
      for (let pt = 0; pt < 8; pt++)
        (S.beginPath(),
          S.arc(
            Math.random() * 800,
            Math.random() * 1e3,
            20 + Math.random() * 60,
            0,
            Math.PI * 2,
          ),
          S.fill());
      ((S.fillStyle = f.color),
        S.roundRect(50, 50, 700, 120, 30),
        S.fill(),
        (S.fillStyle = "white"),
        (S.font = "bold 52px serif"),
        (S.textAlign = "center"),
        S.fillText("Sweet Therapy 🌸", 400, 130),
        (S.fillStyle = f.color),
        S.beginPath(),
        S.arc(400, 300, 100, 0, Math.PI * 2),
        S.fill(),
        (S.fillStyle = "white"),
        (S.font = "80px serif"),
        (S.textAlign = "center"),
        S.fillText(f.emoji, 400, 330),
        (S.fillStyle = "#b5004e"),
        (S.font = "bold 44px serif"),
        (S.textAlign = "center"),
        S.fillText(f.label, 400, 460),
        (S.fillStyle = "#555"),
        (S.font = "28px serif"),
        (S.textAlign = "center"));
      const Y = f.clouds[0].split(" ");
      let Q = "",
        K = 530;
      for (const pt of Y) {
        const gt = Q + pt + " ";
        S.measureText(gt).width > 660 && Q
          ? (S.fillText(Q.trim(), 400, K), (Q = pt + " "), (K += 44))
          : (Q = gt);
      }
      (Q && S.fillText(Q.trim(), 400, K),
        (S.fillStyle = "#f48fb1"),
        (S.font = "bold 32px serif"),
        (S.textAlign = "center"),
        S.fillText("#SweetTherapy  #صحة_نفسية", 400, 950));
      const ut = document.createElement("a");
      ((ut.download = `sweet-therapy-result-${u}.png`),
        (ut.href = O.toDataURL("image/png")),
        ut.click());
    };
  return d.jsxs("div", {
    ref: o,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.5rem",
      maxWidth: 680,
      margin: "0 auto",
    },
    children: [
      d.jsx("h2", {
        style: {
          fontSize: "2rem",
          fontWeight: 900,
          color: "#b5004e",
          textAlign: "center",
        },
        children: "🌸 نتيجتك 🌸",
      }),
      d.jsxs("div", {
        style: {
          background: f.color + "25",
          border: `3px solid ${f.color}`,
          borderRadius: "3rem",
          padding: "0.75rem 2.5rem",
          fontSize: "1.4rem",
          fontWeight: 900,
          color: "#2a2a2a",
          textAlign: "center",
        },
        children: [f.emoji, " ", f.label],
      }),
      f.clouds.map((O, S) =>
        d.jsx(
          "div",
          {
            style: {
              background: "white",
              border: "2.5px solid #90c8e8",
              borderRadius:
                "3.5rem 3.5rem 3rem 3rem / 2.5rem 2.5rem 3.5rem 3.5rem",
              padding: "1.3rem 1.8rem",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#2c2c2c",
              lineHeight: 1.8,
              textAlign: "center",
              boxShadow: "0 4px 18px rgba(100,180,220,0.12)",
              width: "100%",
            },
            children: O,
          },
          S,
        ),
      ),
      f.tips &&
        f.tips.length > 0 &&
        d.jsxs("div", {
          style: {
            background: f.color + "15",
            border: `2px solid ${f.color}50`,
            borderRadius: "1.5rem",
            padding: "1.2rem 1.5rem",
            width: "100%",
          },
          children: [
            d.jsx("h3", {
              style: {
                fontFamily: "Tajawal, sans-serif",
                fontWeight: 900,
                color: "#b5004e",
                margin: "0 0 0.8rem",
                fontSize: "1rem",
              },
              children: "💡 نصايح ليكِ:",
            }),
            d.jsx("ul", {
              style: {
                margin: 0,
                paddingRight: "1.2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              },
              children: f.tips.map((O, S) =>
                d.jsx(
                  "li",
                  {
                    style: {
                      fontFamily: "Tajawal, sans-serif",
                      fontWeight: 700,
                      color: "#444",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                    },
                    children: O,
                  },
                  S,
                ),
              ),
            }),
          ],
        }),
      d.jsx("div", {
        className: "image-card",
        style: { width: "100%", maxWidth: 560 },
        children: d.jsx("img", {
          src: "/assets/الملاححظات_1777917695821.jpg",
          alt: "ملاحظات - تحليل الشخصية",
          style: { width: "100%", display: "block", borderRadius: "1rem" },
        }),
      }),
      d.jsxs("div", {
        style: {
          background: "white",
          border: "3px solid #c89ad0",
          borderRadius: "1.8rem",
          padding: "1.5rem 2rem",
          textAlign: "center",
          width: "100%",
        },
        children: [
          d.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginBottom: "1rem",
            },
            children: [
              d.jsx("img", {
                src: "/assets/dr-basma.jpg",
                alt: "دكتور بسمة",
                style: {
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #f8bbd0",
                },
              }),
              d.jsx("img", {
                src: "/assets/dr-sarah.jpg",
                alt: "دكتور سارة",
                style: {
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid #f8bbd0",
                },
              }),
            ],
          }),
          d.jsx("p", {
            style: {
              fontWeight: 800,
              fontSize: "1.1rem",
              color: "#b5004e",
              margin: 0,
            },
            children: "متقلقوش.. إحنا معاكم",
          }),
          d.jsx("p", {
            style: { fontWeight: 700, color: "#555", margin: "0.4rem 0 0" },
            children: '"بخطوات بسيطه وروتين صغنن كل يوم هنكون أحسن" ♡',
          }),
        ],
      }),
      d.jsxs("div", {
        style: {
          display: "flex",
          gap: "0.8rem",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        },
        children: [
          d.jsx("button", {
            onClick: b,
            disabled: m,
            style: {
              background: "linear-gradient(135deg, #f48fb1, #c2185b)",
              color: "white",
              border: "none",
              borderRadius: "2rem",
              padding: "0.85rem 2rem",
              fontFamily: "Tajawal, sans-serif",
              fontWeight: 800,
              fontSize: "1.05rem",
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(240,100,140,0.35)",
              transition: "transform 0.15s",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            },
            onMouseEnter: (O) =>
              (O.currentTarget.style.transform = "scale(1.04)"),
            onMouseLeave: (O) => (O.currentTarget.style.transform = "scale(1)"),
            children: U ? "✅ تم النسخ!" : m ? "جاري..." : "📤 شاري نتيجتك",
          }),
          d.jsx("button", {
            onClick: z,
            style: {
              background: "white",
              color: "#b5004e",
              border: "2px solid #f48fb1",
              borderRadius: "2rem",
              padding: "0.85rem 2rem",
              fontFamily: "Tajawal, sans-serif",
              fontWeight: 800,
              fontSize: "1.05rem",
              cursor: "pointer",
              transition: "transform 0.15s",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            },
            onMouseEnter: (O) =>
              (O.currentTarget.style.transform = "scale(1.04)"),
            onMouseLeave: (O) => (O.currentTarget.style.transform = "scale(1)"),
            children: "🖼️ حملي الكارت",
          }),
          d.jsx("button", {
            onClick: s,
            className: "back-btn",
            style: { fontSize: "1rem" },
            children: "🔄 خدي الاختبار تاني",
          }),
        ],
      }),
    ],
  });
}
function Tg() {
  const [u, s] = X.useState("intro"),
    [f, o] = X.useState(0),
    [m, A] = X.useState({
      social: 0,
      anxious: 0,
      lazy: 0,
      introvert: 0,
      balanced: 0,
      creative: 0,
      empathetic: 0,
    }),
    [U, D] = X.useState("");
  X.useEffect(() => {
    const z = localStorage.getItem("quiz-result");
    z && (D(z), s("result"));
  }, []);
  const T = (z) => {
      const O = Li[f],
        S = { ...m };
      if (O.scores[z])
        for (const Y of Object.keys(O.scores[z]))
          S[Y] = (S[Y] || 0) + O.scores[z][Y];
      A(S);
      const q = f + 1;
      if (q < Li.length) o(q);
      else {
        let Y = "balanced",
          Q = -1;
        for (const K of Object.keys(S)) S[K] > Q && ((Q = S[K]), (Y = K));
        (D(Y), localStorage.setItem("quiz-result", Y), s("result"));
      }
    },
    b = () => {
      (s("intro"),
        o(0),
        A({
          social: 0,
          anxious: 0,
          lazy: 0,
          introvert: 0,
          balanced: 0,
          creative: 0,
          empathetic: 0,
        }),
        D(""),
        localStorage.removeItem("quiz-result"));
    };
  return d.jsx("div", {
    className: "page-bg",
    style: { paddingTop: 80 },
    children: d.jsxs("div", {
      style: {
        maxWidth: 800,
        margin: "0 auto",
        padding: "2rem 1rem 3rem",
        position: "relative",
        zIndex: 1,
      },
      children: [
        d.jsx("h1", {
          style: {
            textAlign: "center",
            fontFamily: "Tajawal, sans-serif",
            fontWeight: 900,
            fontSize: "1.8rem",
            color: "#b5004e",
            marginBottom: "2rem",
          },
          children: "اكتشفي شخصيتك 🌸",
        }),
        u === "intro" && d.jsx(Sg, { onStart: () => s("quiz") }),
        u === "quiz" && d.jsx(xg, { currentQ: f, onAnswer: T }),
        u === "result" && d.jsx(jg, { resultKey: U, onReset: b }),
      ],
    }),
  });
}
const nh = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ],
  zh = [
    "الصحة",
    "الدراسة",
    "الرياضة",
    "الهوايات",
    "المهام",
    "الاجتماعي",
    "النوم",
    "أخرى",
  ],
  Oh = "sweet-therapy-weekly-planner";
function Eg() {
  try {
    const u = localStorage.getItem(Oh);
    if (u) return JSON.parse(u);
  } catch {}
  return { topics: [...zh], cells: {} };
}
function Ag() {
  const [u, s] = X.useState(Eg);
  X.useEffect(() => {
    localStorage.setItem(Oh, JSON.stringify(u));
  }, [u]);
  const f = (T, b) => `${T}-${b}`,
    o = (T, b, z) => {
      s((O) => ({ ...O, cells: { ...O.cells, [f(T, b)]: z } }));
    },
    m = (T, b) => {
      s((z) => {
        const O = [...z.topics];
        return ((O[T] = b), { ...z, topics: O });
      });
    },
    A = () => {
      s((T) => ({ ...T, topics: [...T.topics, "موضوع جديد"] }));
    },
    U = (T) => {
      s((b) => {
        const z = b.topics.filter((S, q) => q !== T),
          O = {};
        for (const S of Object.keys(b.cells)) {
          const [q, Y] = S.split("-").map(Number);
          if (q !== T) {
            const Q = q > T ? q - 1 : q;
            O[`${Q}-${Y}`] = b.cells[S];
          }
        }
        return { ...b, topics: z, cells: O };
      });
    },
    D = () => {
      confirm("هتمسحي كل البيانات؟") && s({ topics: [...zh], cells: {} });
    };
  return d.jsx("div", {
    className: "page-bg",
    style: { paddingTop: 80 },
    children: d.jsxs("div", {
      style: {
        maxWidth: 1100,
        margin: "0 auto",
        padding: "2rem 1rem 3rem",
        position: "relative",
        zIndex: 1,
      },
      children: [
        d.jsxs("div", {
          style: { textAlign: "center", marginBottom: "1.5rem" },
          children: [
            d.jsx("img", {
              src: "/assets/dr-basma.jpg",
              alt: "دكتور بسمة",
              style: {
                width: 70,
                height: 70,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #f8bbd0",
                marginBottom: "0.5rem",
              },
            }),
            d.jsx("h1", {
              style: {
                fontFamily: "Tajawal, sans-serif",
                fontWeight: 900,
                fontSize: "2rem",
                color: "#b5004e",
                margin: 0,
              },
              children: "الجدول الأسبوعي 📅",
            }),
            d.jsx("p", {
              style: { color: "#c2185b", fontWeight: 600, marginTop: "0.4rem" },
              children: "سجّلي مهامك الأسبوعية واتحققي منها ✓",
            }),
          ],
        }),
        d.jsx("div", { className: "heart-divider", children: "♡ ♡ ♡" }),
        d.jsx("div", {
          style: {
            overflowX: "auto",
            borderRadius: "1.2rem",
            boxShadow: "0 4px 24px rgba(240,100,140,0.12)",
            marginBottom: "1.5rem",
          },
          children: d.jsxs("table", {
            style: {
              width: "100%",
              borderCollapse: "collapse",
              background: "white",
              minWidth: 680,
            },
            children: [
              d.jsx("thead", {
                children: d.jsxs("tr", {
                  children: [
                    d.jsx("th", {
                      style: ps("#f8bbd0", "#b5004e"),
                      children: "الموضوع",
                    }),
                    nh.map((T) =>
                      d.jsx(
                        "th",
                        { style: ps("#fce4ec", "#c2185b"), children: T },
                        T,
                      ),
                    ),
                    d.jsx("th", {
                      style: ps("#f8bbd0", "#b5004e"),
                      children: "حذف",
                    }),
                  ],
                }),
              }),
              d.jsx("tbody", {
                children: u.topics.map((T, b) =>
                  d.jsxs(
                    "tr",
                    {
                      style: { background: b % 2 === 0 ? "#fff" : "#fff9fb" },
                      children: [
                        d.jsx("td", {
                          style: {
                            padding: "0.4rem",
                            borderBottom: "1px solid #f8bbd0",
                            minWidth: 100,
                          },
                          children: d.jsx("input", {
                            value: T,
                            onChange: (z) => m(b, z.target.value),
                            style: zg,
                          }),
                        }),
                        nh.map((z, O) =>
                          d.jsx(
                            "td",
                            {
                              style: {
                                padding: "0.3rem",
                                borderBottom: "1px solid #f8bbd0",
                                borderRight: "1px solid #f8bbd0",
                              },
                              children: d.jsx("textarea", {
                                value: u.cells[f(b, O)] || "",
                                onChange: (S) => o(b, O, S.target.value),
                                placeholder: "اكتبي هنا...",
                                style: Og,
                              }),
                            },
                            O,
                          ),
                        ),
                        d.jsx("td", {
                          style: {
                            padding: "0.4rem",
                            textAlign: "center",
                            borderBottom: "1px solid #f8bbd0",
                          },
                          children: d.jsx("button", {
                            onClick: () => U(b),
                            style: {
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              fontSize: "1.1rem",
                              color: "#e91e8c",
                            },
                            children: "✕",
                          }),
                        }),
                      ],
                    },
                    b,
                  ),
                ),
              }),
            ],
          }),
        }),
        d.jsxs("div", {
          style: {
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          },
          children: [
            d.jsx("button", {
              onClick: A,
              className: "back-btn",
              children: "+ أضيفي موضوع جديد",
            }),
            d.jsx("button", {
              onClick: D,
              style: {
                background: "#fff",
                color: "#e91e8c",
                border: "2px solid #f48fb1",
                borderRadius: "2rem",
                padding: "0.6rem 1.8rem",
                fontFamily: "Tajawal, sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
              },
              children: "🗑 مسح الكل",
            }),
          ],
        }),
        d.jsx("p", {
          style: {
            textAlign: "center",
            color: "#aaa",
            fontSize: "0.85rem",
            marginTop: "1rem",
          },
          children: "💾 البيانات بتتحفظ تلقائياً على جهازك",
        }),
      ],
    }),
  });
}
const ps = (u, s) => ({
    background: u,
    color: s,
    fontFamily: "Tajawal, sans-serif",
    fontWeight: 800,
    fontSize: "0.95rem",
    padding: "0.8rem 0.5rem",
    textAlign: "center",
    border: "1px solid #f8bbd0",
    whiteSpace: "nowrap",
  }),
  zg = {
    width: "100%",
    border: "none",
    outline: "none",
    fontFamily: "Tajawal, sans-serif",
    fontWeight: 700,
    fontSize: "0.9rem",
    color: "#b5004e",
    background: "transparent",
    textAlign: "center",
    padding: "0.2rem",
  },
  Og = {
    width: "100%",
    minHeight: 60,
    resize: "none",
    border: "1px solid transparent",
    borderRadius: "0.5rem",
    fontFamily: "Tajawal, sans-serif",
    fontSize: "0.85rem",
    color: "#444",
    background: "transparent",
    padding: "0.3rem",
    outline: "none",
    direction: "rtl",
  },
  Dg = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ],
  Mg = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  Rg = Array.from({ length: 31 }, (u, s) => s + 1),
  jn = [
    { key: "happy", label: "سعيدة", color: "#FFD700", emoji: "😊" },
    { key: "excited", label: "متحمسة", color: "#FF8C42", emoji: "🎉" },
    { key: "calm", label: "هادية", color: "#7BC67E", emoji: "😌" },
    { key: "tired", label: "تعبانة", color: "#87CEEB", emoji: "😴" },
    { key: "sad", label: "حزينة", color: "#DDA0DD", emoji: "😢" },
    { key: "angry", label: "متوترة", color: "#FF6B6B", emoji: "😤" },
  ],
  Dh = "sweet-therapy-mood-tracker",
  ih = "sweet-therapy-mood-goal";
function _g() {
  try {
    const u = localStorage.getItem(Dh);
    if (u) return JSON.parse(u);
  } catch {}
  return {};
}
function Ug() {
  const [u, s] = X.useState(_g),
    [f, o] = X.useState(jn[0].key),
    [m, A] = X.useState(() => localStorage.getItem(ih) || ""),
    [U] = X.useState(new Date().getFullYear());
  (X.useEffect(() => {
    localStorage.setItem(Dh, JSON.stringify(u));
  }, [u]),
    X.useEffect(() => {
      localStorage.setItem(ih, m);
    }, [m]));
  const D = (O, S) => `${U}-${S}-${O}`,
    T = (O, S) => {
      const q = D(O, S);
      s((Y) => {
        if (Y[q] === f) {
          const Q = { ...Y };
          return (delete Q[q], Q);
        }
        return { ...Y, [q]: f };
      });
    },
    b = (O, S) => {
      const q = D(O, S),
        Y = u[q];
      return (Y && jn.find((Q) => Q.key === Y)?.color) || "transparent";
    },
    z = () => {
      confirm("هتمسحي كل بيانات المزاج؟") && s({});
    };
  return d.jsx("div", {
    className: "page-bg",
    style: { paddingTop: 80 },
    children: d.jsxs("div", {
      style: {
        maxWidth: 1e3,
        margin: "0 auto",
        padding: "2rem 1rem 3rem",
        position: "relative",
        zIndex: 1,
      },
      children: [
        d.jsxs("div", {
          style: { textAlign: "center", marginBottom: "1.5rem" },
          children: [
            d.jsx("img", {
              src: "/assets/dr-sarah.jpg",
              alt: "دكتور سارة",
              style: {
                width: 70,
                height: 70,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #f8bbd0",
                marginBottom: "0.5rem",
              },
            }),
            d.jsx("h1", {
              style: {
                fontFamily: "Tajawal, sans-serif",
                fontWeight: 900,
                fontSize: "2rem",
                color: "#b5004e",
                margin: 0,
              },
              children: "Mood Tracker 🎨",
            }),
            d.jsxs("p", {
              style: { color: "#c2185b", fontWeight: 600, marginTop: "0.4rem" },
              children: ["سجّلي مزاجك كل يوم وشوفي نمط حياتك — ", U],
            }),
          ],
        }),
        d.jsx("div", { className: "heart-divider", children: "♡ ♡ ♡" }),
        d.jsxs("div", {
          style: {
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "1.5rem",
          },
          children: [
            d.jsxs("div", {
              style: {
                background: "white",
                borderRadius: "1.2rem",
                padding: "1.2rem",
                boxShadow: "0 4px 20px rgba(240,100,140,0.12)",
                flex: "1",
                minWidth: 280,
              },
              children: [
                d.jsx("p", {
                  style: {
                    fontFamily: "Tajawal, sans-serif",
                    fontWeight: 800,
                    color: "#b5004e",
                    marginBottom: "0.8rem",
                    fontSize: "1rem",
                  },
                  children: "🎨 اختاري لون المزاج:",
                }),
                d.jsx("div", {
                  style: { display: "flex", flexWrap: "wrap", gap: "0.5rem" },
                  children: jn.map((O) =>
                    d.jsxs(
                      "button",
                      {
                        onClick: () => o(O.key),
                        style: {
                          background: O.color,
                          border:
                            f === O.key
                              ? "3px solid #b5004e"
                              : "3px solid transparent",
                          borderRadius: "2rem",
                          padding: "0.4rem 0.9rem",
                          fontFamily: "Tajawal, sans-serif",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          cursor: "pointer",
                          color: "#333",
                          boxShadow:
                            f === O.key ? "0 2px 8px rgba(0,0,0,0.2)" : "none",
                          transform: f === O.key ? "scale(1.05)" : "scale(1)",
                          transition: "all 0.15s",
                        },
                        children: [O.emoji, " ", O.label],
                      },
                      O.key,
                    ),
                  ),
                }),
              ],
            }),
            d.jsxs("div", {
              style: {
                background: "white",
                borderRadius: "1.2rem",
                padding: "1.2rem",
                boxShadow: "0 4px 20px rgba(240,100,140,0.12)",
                minWidth: 200,
              },
              children: [
                d.jsx("p", {
                  style: {
                    fontFamily: "Tajawal, sans-serif",
                    fontWeight: 800,
                    color: "#b5004e",
                    marginBottom: "0.6rem",
                  },
                  children: "🎯 هدفي:",
                }),
                d.jsx("textarea", {
                  value: m,
                  onChange: (O) => A(O.target.value),
                  placeholder: "اكتبي هدفك لهذا العام...",
                  style: {
                    width: "100%",
                    minHeight: 70,
                    border: "2px solid #f8bbd0",
                    borderRadius: "0.8rem",
                    fontFamily: "Tajawal, sans-serif",
                    fontSize: "0.9rem",
                    padding: "0.5rem",
                    resize: "none",
                    outline: "none",
                    color: "#444",
                    direction: "rtl",
                  },
                }),
              ],
            }),
          ],
        }),
        d.jsx("div", {
          style: {
            overflowX: "auto",
            borderRadius: "1.2rem",
            boxShadow: "0 4px 24px rgba(240,100,140,0.12)",
          },
          children: d.jsxs("table", {
            style: {
              borderCollapse: "collapse",
              background: "white",
              minWidth: 600,
            },
            children: [
              d.jsx("thead", {
                children: d.jsxs("tr", {
                  children: [
                    d.jsx("th", { style: uh, children: "♡" }),
                    Mg.map((O, S) =>
                      d.jsx(
                        "th",
                        {
                          style: {
                            ...uh,
                            minWidth: 32,
                            fontSize: "0.75rem",
                            color: "#c2185b",
                          },
                          children: O,
                        },
                        S,
                      ),
                    ),
                  ],
                }),
              }),
              d.jsx("tbody", {
                children: Rg.map((O) =>
                  d.jsxs(
                    "tr",
                    {
                      children: [
                        d.jsx("td", {
                          style: { ...Cg, fontFamily: "Tajawal, sans-serif" },
                          children: O,
                        }),
                        Dg.map((S, q) => {
                          const Y = b(O, q + 1),
                            Q = Y !== "transparent";
                          return d.jsx(
                            "td",
                            {
                              onClick: () => T(O, q + 1),
                              title: Q
                                ? jn.find((K) => K.key === u[D(O, q + 1)])
                                    ?.label
                                : "اضغطي لتسجيل مزاجك",
                              style: {
                                width: 32,
                                height: 24,
                                background: Y,
                                border: "1px solid #f8bbd0",
                                cursor: "pointer",
                                transition: "transform 0.1s",
                              },
                              onMouseEnter: (K) => {
                                ((K.currentTarget.style.transform =
                                  "scale(1.2)"),
                                  (K.currentTarget.style.zIndex = "10"));
                              },
                              onMouseLeave: (K) => {
                                ((K.currentTarget.style.transform = "scale(1)"),
                                  (K.currentTarget.style.zIndex = "1"));
                              },
                            },
                            q,
                          );
                        }),
                      ],
                    },
                    O,
                  ),
                ),
              }),
            ],
          }),
        }),
        d.jsx("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          },
          children: jn.map((O) =>
            d.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "Tajawal, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                },
                children: [
                  d.jsx("div", {
                    style: {
                      width: 18,
                      height: 18,
                      background: O.color,
                      borderRadius: "0.3rem",
                      border: "1px solid #ddd",
                    },
                  }),
                  O.emoji,
                  " ",
                  O.label,
                ],
              },
              O.key,
            ),
          ),
        }),
        d.jsxs("div", {
          style: { textAlign: "center", marginTop: "1.5rem" },
          children: [
            d.jsx("button", {
              onClick: z,
              style: {
                background: "#fff",
                color: "#e91e8c",
                border: "2px solid #f48fb1",
                borderRadius: "2rem",
                padding: "0.5rem 1.5rem",
                fontFamily: "Tajawal, sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
              },
              children: "🗑 مسح كل البيانات",
            }),
            d.jsx("p", {
              style: {
                color: "#aaa",
                fontSize: "0.85rem",
                marginTop: "0.8rem",
              },
              children: "💾 البيانات بتتحفظ تلقائياً على جهازك",
            }),
          ],
        }),
      ],
    }),
  });
}
const uh = {
    background: "#fce4ec",
    fontWeight: 800,
    fontSize: "0.8rem",
    padding: "0.5rem 0.3rem",
    textAlign: "center",
    border: "1px solid #f8bbd0",
    color: "#b5004e",
  },
  Cg = {
    padding: "0 0.5rem",
    fontSize: "0.8rem",
    fontWeight: 700,
    color: "#c2185b",
    textAlign: "center",
    border: "1px solid #f8bbd0",
    background: "#fff9fb",
    minWidth: 28,
  },
  Ss = [
    { key: "happy", label: "سعيدة", emoji: "😊", color: "#FFD700" },
    { key: "excited", label: "متحمسة", emoji: "🎉", color: "#FF8C42" },
    { key: "calm", label: "هادية", emoji: "😌", color: "#7BC67E" },
    { key: "tired", label: "تعبانة", emoji: "😴", color: "#87CEEB" },
    { key: "sad", label: "حزينة", emoji: "😢", color: "#DDA0DD" },
    { key: "angry", label: "متوترة", emoji: "😤", color: "#FF6B6B" },
  ],
  zs = "sweet-therapy-diary";
function Ng() {
  try {
    const u = localStorage.getItem(zs);
    if (u) return JSON.parse(u);
  } catch {}
  return {};
}
function qg() {
  return new Date().toISOString().split("T")[0];
}
function ch(u) {
  try {
    return new Date(u).toLocaleDateString("ar-EG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return u;
  }
}
function Hg() {
  const [u, s] = X.useState(Ng),
    [f, o] = X.useState(qg()),
    [m, A] = X.useState({ mood: "happy", title: "", content: "" }),
    [U, D] = X.useState(!1);
  X.useEffect(() => {
    const S = u[f];
    (A(
      S
        ? { mood: S.mood, title: S.title, content: S.content }
        : { mood: "happy", title: "", content: "" },
    ),
      D(!1));
  }, [f]);
  const T = () => {
      const S = {
          date: f,
          mood: m.mood,
          title: m.title,
          content: m.content,
          savedAt: new Date().toISOString(),
        },
        q = { ...u, [f]: S };
      (s(q),
        localStorage.setItem(zs, JSON.stringify(q)),
        D(!0),
        setTimeout(() => D(!1), 2e3));
    },
    b = (S) => {
      if (!confirm("هتمسحي هذه اليومية؟")) return;
      const q = { ...u };
      (delete q[S], s(q), localStorage.setItem(zs, JSON.stringify(q)));
    },
    z = Object.values(u).sort((S, q) => q.date.localeCompare(S.date)),
    O = (S) => Ss.find((q) => q.key === S) || Ss[0];
  return d.jsx("div", {
    className: "page-bg",
    style: { paddingTop: 80 },
    children: d.jsxs("div", {
      style: {
        maxWidth: 900,
        margin: "0 auto",
        padding: "2rem 1rem 3rem",
        position: "relative",
        zIndex: 1,
      },
      children: [
        d.jsxs("div", {
          style: { textAlign: "center", marginBottom: "1.5rem" },
          children: [
            d.jsx("img", {
              src: "/assets/dr-basma.jpg",
              alt: "دكتور بسمة",
              style: {
                width: 70,
                height: 70,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #f8bbd0",
                marginBottom: "0.5rem",
              },
            }),
            d.jsx("h1", {
              style: {
                fontFamily: "Tajawal, sans-serif",
                fontWeight: 900,
                fontSize: "2rem",
                color: "#b5004e",
                margin: 0,
              },
              children: "يومياتي 📔",
            }),
            d.jsx("p", {
              style: { color: "#c2185b", fontWeight: 600, marginTop: "0.4rem" },
              children: "سجّلي أفكارك ومشاعرك كل يوم ♡",
            }),
          ],
        }),
        d.jsx("div", { className: "heart-divider", children: "♡ ♡ ♡" }),
        d.jsxs("div", {
          style: { display: "flex", gap: "1.5rem", flexWrap: "wrap" },
          children: [
            d.jsx("div", {
              style: { flex: "1.5", minWidth: 280 },
              children: d.jsxs("div", {
                style: {
                  background: "white",
                  borderRadius: "1.5rem",
                  padding: "1.5rem",
                  boxShadow: "0 4px 24px rgba(240,100,140,0.12)",
                  marginBottom: "1.5rem",
                },
                children: [
                  d.jsx("h2", {
                    style: {
                      fontFamily: "Tajawal, sans-serif",
                      fontWeight: 800,
                      color: "#b5004e",
                      fontSize: "1.1rem",
                      marginBottom: "1rem",
                    },
                    children: "✏️ يومية جديدة",
                  }),
                  d.jsxs("div", {
                    style: { marginBottom: "1rem" },
                    children: [
                      d.jsx("label", { style: Xi, children: "📅 التاريخ:" }),
                      d.jsx("input", {
                        type: "date",
                        value: f,
                        onChange: (S) => o(S.target.value),
                        style: xs,
                      }),
                      d.jsx("p", {
                        style: {
                          color: "#b5004e",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          marginTop: "0.3rem",
                          fontFamily: "Tajawal, sans-serif",
                        },
                        children: ch(f),
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    style: { marginBottom: "1rem" },
                    children: [
                      d.jsx("label", {
                        style: Xi,
                        children: "😊 مزاجك النهارده:",
                      }),
                      d.jsx("div", {
                        style: {
                          display: "flex",
                          gap: "0.5rem",
                          flexWrap: "wrap",
                          marginTop: "0.4rem",
                        },
                        children: Ss.map((S) =>
                          d.jsxs(
                            "button",
                            {
                              onClick: () => A((q) => ({ ...q, mood: S.key })),
                              style: {
                                background: m.mood === S.key ? S.color : "#fff",
                                border:
                                  m.mood === S.key
                                    ? `3px solid ${S.color}`
                                    : "2px solid #f8bbd0",
                                borderRadius: "2rem",
                                padding: "0.35rem 0.75rem",
                                fontFamily: "Tajawal, sans-serif",
                                fontWeight: 700,
                                fontSize: "0.85rem",
                                cursor: "pointer",
                                color: "#333",
                                transition: "all 0.15s",
                              },
                              children: [S.emoji, " ", S.label],
                            },
                            S.key,
                          ),
                        ),
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    style: { marginBottom: "1rem" },
                    children: [
                      d.jsx("label", {
                        style: Xi,
                        children: "📝 عنوان اليومية:",
                      }),
                      d.jsx("input", {
                        type: "text",
                        value: m.title,
                        onChange: (S) =>
                          A((q) => ({ ...q, title: S.target.value })),
                        placeholder: "عنوان ليومك...",
                        style: xs,
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    style: { marginBottom: "1.2rem" },
                    children: [
                      d.jsx("label", {
                        style: Xi,
                        children: "💭 اكتبي عن يومك:",
                      }),
                      d.jsx("textarea", {
                        value: m.content,
                        onChange: (S) =>
                          A((q) => ({ ...q, content: S.target.value })),
                        placeholder:
                          "إيه اللي حصل النهارده؟ إيه اللي حسيتي بيه؟ إيه اللي تمنيتي لو اتغير؟...",
                        rows: 6,
                        style: { ...xs, resize: "vertical", minHeight: 120 },
                      }),
                    ],
                  }),
                  d.jsx("button", {
                    onClick: T,
                    className: "back-btn",
                    style: {
                      width: "100%",
                      justifyContent: "center",
                      background: U ? "#7BC67E" : "#f48fb1",
                    },
                    children: U ? "✓ اتحفظت!" : "💾 احفظي اليومية",
                  }),
                ],
              }),
            }),
            d.jsx("div", {
              style: { flex: "1", minWidth: 240 },
              children: d.jsxs("div", {
                style: {
                  background: "white",
                  borderRadius: "1.5rem",
                  padding: "1.2rem",
                  boxShadow: "0 4px 24px rgba(240,100,140,0.12)",
                },
                children: [
                  d.jsxs("h2", {
                    style: {
                      fontFamily: "Tajawal, sans-serif",
                      fontWeight: 800,
                      color: "#b5004e",
                      fontSize: "1rem",
                      marginBottom: "1rem",
                    },
                    children: ["📚 يومياتك السابقة (", z.length, ")"],
                  }),
                  z.length === 0 &&
                    d.jsxs("p", {
                      style: {
                        color: "#aaa",
                        textAlign: "center",
                        fontFamily: "Tajawal, sans-serif",
                        padding: "1rem",
                      },
                      children: [
                        "مفيش يوميات لحد دلوقتي ♡",
                        d.jsx("br", {}),
                        "ابدأي باليوم!",
                      ],
                    }),
                  d.jsx("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      maxHeight: 500,
                      overflowY: "auto",
                    },
                    children: z.map((S) => {
                      const q = O(S.mood);
                      return d.jsx(
                        "div",
                        {
                          onClick: () => o(S.date),
                          style: {
                            background: f === S.date ? "#fce4ec" : "#fff9fb",
                            border: `2px solid ${f === S.date ? "#f48fb1" : "#f8bbd0"}`,
                            borderRadius: "1rem",
                            padding: "0.8rem 1rem",
                            cursor: "pointer",
                            transition: "all 0.15s",
                          },
                          children: d.jsxs("div", {
                            style: {
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                            },
                            children: [
                              d.jsxs("div", {
                                style: { flex: 1 },
                                children: [
                                  d.jsxs("div", {
                                    style: {
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "0.4rem",
                                      marginBottom: "0.3rem",
                                    },
                                    children: [
                                      d.jsx("span", {
                                        style: { fontSize: "1.2rem" },
                                        children: q.emoji,
                                      }),
                                      d.jsx("span", {
                                        style: {
                                          fontFamily: "Tajawal, sans-serif",
                                          fontWeight: 800,
                                          fontSize: "0.85rem",
                                          color: "#b5004e",
                                        },
                                        children: ch(S.date).split("،")[0],
                                      }),
                                    ],
                                  }),
                                  S.title &&
                                    d.jsx("p", {
                                      style: {
                                        fontFamily: "Tajawal, sans-serif",
                                        fontWeight: 700,
                                        fontSize: "0.9rem",
                                        color: "#555",
                                        margin: 0,
                                      },
                                      children: S.title,
                                    }),
                                  S.content &&
                                    d.jsxs("p", {
                                      style: {
                                        fontFamily: "Tajawal, sans-serif",
                                        fontSize: "0.8rem",
                                        color: "#999",
                                        margin: "0.2rem 0 0",
                                        lineClamp: 2,
                                      },
                                      children: [
                                        S.content.substring(0, 60),
                                        S.content.length > 60 ? "..." : "",
                                      ],
                                    }),
                                ],
                              }),
                              d.jsx("button", {
                                onClick: (Y) => {
                                  (Y.stopPropagation(), b(S.date));
                                },
                                style: {
                                  background: "none",
                                  border: "none",
                                  cursor: "pointer",
                                  color: "#ccc",
                                  fontSize: "1rem",
                                  padding: "0 0.3rem",
                                },
                                children: "✕",
                              }),
                            ],
                          }),
                        },
                        S.date,
                      );
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        d.jsx("p", {
          style: {
            textAlign: "center",
            color: "#aaa",
            fontSize: "0.85rem",
            marginTop: "1rem",
          },
          children: "💾 يومياتك بتتحفظ تلقائياً على جهازك",
        }),
      ],
    }),
  });
}
const Xi = {
    display: "block",
    fontFamily: "Tajawal, sans-serif",
    fontWeight: 700,
    color: "#6d3054",
    fontSize: "0.9rem",
    marginBottom: "0.3rem",
  },
  xs = {
    width: "100%",
    border: "2px solid #f8bbd0",
    borderRadius: "0.8rem",
    padding: "0.6rem 0.8rem",
    fontFamily: "Tajawal, sans-serif",
    fontSize: "0.95rem",
    color: "#444",
    outline: "none",
    direction: "rtl",
    background: "#fff9fb",
  },
  wg = new ag();
function Bg() {
  return (
    X.useEffect(() => {
      cg();
    }, []),
    d.jsxs(d.Fragment, {
      children: [
        d.jsx(og, {}),
        d.jsx(dg, {}),
        d.jsx(mg, {}),
        d.jsx(yg, {}),
        d.jsxs(Ry, {
          children: [
            d.jsx(ql, { path: "/", component: bg }),
            d.jsx(ql, { path: "/category/:id", component: pg }),
            d.jsx(ql, { path: "/quiz", component: Tg }),
            d.jsx(ql, { path: "/weekly-planner", component: Ag }),
            d.jsx(ql, { path: "/mood-tracker", component: Ug }),
            d.jsx(ql, { path: "/diary", component: Hg }),
            d.jsx(ql, {
              children: d.jsx("div", {
                style: {
                  minHeight: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff0f3",
                  fontFamily: "Tajawal, sans-serif",
                  direction: "rtl",
                  paddingTop: 80,
                },
                children: d.jsxs("div", {
                  style: { textAlign: "center" },
                  children: [
                    d.jsx("p", {
                      style: { fontSize: "2rem", color: "#c2185b" },
                      children: "404 😔",
                    }),
                    d.jsx("a", {
                      href: "/",
                      style: {
                        color: "#e91e8c",
                        fontFamily: "Tajawal, sans-serif",
                        fontWeight: 700,
                      },
                      children: "ارجعي للرئيسية",
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function Yg() {
  return d.jsx(ig, {
    client: wg,
    children: d.jsx(vh, {
      base: "/".replace(/\/$/, ""),
      children: d.jsx(Bg, {}),
    }),
  });
}
sy.createRoot(document.getElementById("root")).render(d.jsx(Yg, {}));
