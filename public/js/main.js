!(function (e) {
  var t = {};
  function i(n) {
      if (t[n]) return t[n].exports;
      var r = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = e),
      (i.c = t),
      (i.d = function (e, t, n) {
          i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (i.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (i.t = function (e, t) {
          if ((1 & t && (e = i(e)), 8 & t)) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var n = Object.create(null);
          if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
              for (var r in e)
                  i.d(
                      n,
                      r,
                      function (t) {
                          return e[t];
                      }.bind(null, r)
                  );
          return n;
      }),
      (i.n = function (e) {
          var t =
              e && e.__esModule
                  ? function () {
                        return e.default;
                    }
                  : function () {
                        return e;
                    };
          return i.d(t, "a", t), t;
      }),
      (i.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (i.p = ""),
      i((i.s = 3));
})([
  function (e, t, i) {
      var n;
      /*!
       * jQuery JavaScript Library v3.6.0
       * https://jquery.com/
       *
       * Includes Sizzle.js
       * https://sizzlejs.com/
       *
       * Copyright OpenJS Foundation and other contributors
       * Released under the MIT license
       * https://jquery.org/license
       *
       * Date: 2021-03-02T17:08Z
       */ !(function (t, i) {
          "use strict";
          "object" == typeof e.exports
              ? (e.exports = t.document
                    ? i(t, !0)
                    : function (e) {
                          if (!e.document) throw new Error("jQuery requires a window with a document");
                          return i(e);
                      })
              : i(t);
      })("undefined" != typeof window ? window : this, function (i, r) {
          "use strict";
          var s = [],
              a = Object.getPrototypeOf,
              o = s.slice,
              l = s.flat
                  ? function (e) {
                        return s.flat.call(e);
                    }
                  : function (e) {
                        return s.concat.apply([], e);
                    },
              u = s.push,
              c = s.indexOf,
              d = {},
              p = d.toString,
              h = d.hasOwnProperty,
              f = h.toString,
              m = f.call(Object),
              v = {},
              g = function (e) {
                  return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
              },
              y = function (e) {
                  return null != e && e === e.window;
              },
              b = i.document,
              w = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, i) {
              var n,
                  r,
                  s = (i = i || b).createElement("script");
              if (((s.text = e), t)) for (n in w) (r = t[n] || (t.getAttribute && t.getAttribute(n))) && s.setAttribute(n, r);
              i.head.appendChild(s).parentNode.removeChild(s);
          }
          function S(e) {
              return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e;
          }
          var E = function (e, t) {
              return new E.fn.init(e, t);
          };
          function C(e) {
              var t = !!e && "length" in e && e.length,
                  i = S(e);
              return !g(e) && !y(e) && ("array" === i || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
          }
          (E.fn = E.prototype = {
              jquery: "3.6.0",
              constructor: E,
              length: 0,
              toArray: function () {
                  return o.call(this);
              },
              get: function (e) {
                  return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
              },
              pushStack: function (e) {
                  var t = E.merge(this.constructor(), e);
                  return (t.prevObject = this), t;
              },
              each: function (e) {
                  return E.each(this, e);
              },
              map: function (e) {
                  return this.pushStack(
                      E.map(this, function (t, i) {
                          return e.call(t, i, t);
                      })
                  );
              },
              slice: function () {
                  return this.pushStack(o.apply(this, arguments));
              },
              first: function () {
                  return this.eq(0);
              },
              last: function () {
                  return this.eq(-1);
              },
              even: function () {
                  return this.pushStack(
                      E.grep(this, function (e, t) {
                          return (t + 1) % 2;
                      })
                  );
              },
              odd: function () {
                  return this.pushStack(
                      E.grep(this, function (e, t) {
                          return t % 2;
                      })
                  );
              },
              eq: function (e) {
                  var t = this.length,
                      i = +e + (e < 0 ? t : 0);
                  return this.pushStack(i >= 0 && i < t ? [this[i]] : []);
              },
              end: function () {
                  return this.prevObject || this.constructor();
              },
              push: u,
              sort: s.sort,
              splice: s.splice,
          }),
              (E.extend = E.fn.extend = function () {
                  var e,
                      t,
                      i,
                      n,
                      r,
                      s,
                      a = arguments[0] || {},
                      o = 1,
                      l = arguments.length,
                      u = !1;
                  for ("boolean" == typeof a && ((u = a), (a = arguments[o] || {}), o++), "object" == typeof a || g(a) || (a = {}), o === l && ((a = this), o--); o < l; o++)
                      if (null != (e = arguments[o]))
                          for (t in e)
                              (n = e[t]),
                                  "__proto__" !== t &&
                                      a !== n &&
                                      (u && n && (E.isPlainObject(n) || (r = Array.isArray(n)))
                                          ? ((i = a[t]), (s = r && !Array.isArray(i) ? [] : r || E.isPlainObject(i) ? i : {}), (r = !1), (a[t] = E.extend(u, s, n)))
                                          : void 0 !== n && (a[t] = n));
                  return a;
              }),
              E.extend({
                  expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                  isReady: !0,
                  error: function (e) {
                      throw new Error(e);
                  },
                  noop: function () {},
                  isPlainObject: function (e) {
                      var t, i;
                      return !(!e || "[object Object]" !== p.call(e)) && (!(t = a(e)) || ("function" == typeof (i = h.call(t, "constructor") && t.constructor) && f.call(i) === m));
                  },
                  isEmptyObject: function (e) {
                      var t;
                      for (t in e) return !1;
                      return !0;
                  },
                  globalEval: function (e, t, i) {
                      x(e, { nonce: t && t.nonce }, i);
                  },
                  each: function (e, t) {
                      var i,
                          n = 0;
                      if (C(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
                      else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
                      return e;
                  },
                  makeArray: function (e, t) {
                      var i = t || [];
                      return null != e && (C(Object(e)) ? E.merge(i, "string" == typeof e ? [e] : e) : u.call(i, e)), i;
                  },
                  inArray: function (e, t, i) {
                      return null == t ? -1 : c.call(t, e, i);
                  },
                  merge: function (e, t) {
                      for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n];
                      return (e.length = r), e;
                  },
                  grep: function (e, t, i) {
                      for (var n = [], r = 0, s = e.length, a = !i; r < s; r++) !t(e[r], r) !== a && n.push(e[r]);
                      return n;
                  },
                  map: function (e, t, i) {
                      var n,
                          r,
                          s = 0,
                          a = [];
                      if (C(e)) for (n = e.length; s < n; s++) null != (r = t(e[s], s, i)) && a.push(r);
                      else for (s in e) null != (r = t(e[s], s, i)) && a.push(r);
                      return l(a);
                  },
                  guid: 1,
                  support: v,
              }),
              "function" == typeof Symbol && (E.fn[Symbol.iterator] = s[Symbol.iterator]),
              E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                  d["[object " + t + "]"] = t.toLowerCase();
              });
          var T =
              /*!
               * Sizzle CSS Selector Engine v2.3.6
               * https://sizzlejs.com/
               *
               * Copyright JS Foundation and other contributors
               * Released under the MIT license
               * https://js.foundation/
               *
               * Date: 2021-02-16
               */
              (function (e) {
                  var t,
                      i,
                      n,
                      r,
                      s,
                      a,
                      o,
                      l,
                      u,
                      c,
                      d,
                      p,
                      h,
                      f,
                      m,
                      v,
                      g,
                      y,
                      b,
                      w = "sizzle" + 1 * new Date(),
                      x = e.document,
                      S = 0,
                      E = 0,
                      C = le(),
                      T = le(),
                      k = le(),
                      M = le(),
                      P = function (e, t) {
                          return e === t && (d = !0), 0;
                      },
                      A = {}.hasOwnProperty,
                      $ = [],
                      D = $.pop,
                      O = $.push,
                      L = $.push,
                      N = $.slice,
                      _ = function (e, t) {
                          for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
                          return -1;
                      },
                      z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                      j = "[\\x20\\t\\r\\n\\f]",
                      I = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                      H = "\\[" + j + "*(" + I + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + j + "*\\]",
                      q = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                      R = new RegExp(j + "+", "g"),
                      V = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
                      B = new RegExp("^" + j + "*," + j + "*"),
                      U = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
                      F = new RegExp(j + "|>"),
                      G = new RegExp(q),
                      W = new RegExp("^" + I + "$"),
                      X = {
                          ID: new RegExp("^#(" + I + ")"),
                          CLASS: new RegExp("^\\.(" + I + ")"),
                          TAG: new RegExp("^(" + I + "|[*])"),
                          ATTR: new RegExp("^" + H),
                          PSEUDO: new RegExp("^" + q),
                          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                          bool: new RegExp("^(?:" + z + ")$", "i"),
                          needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i"),
                      },
                      Y = /HTML$/i,
                      K = /^(?:input|select|textarea|button)$/i,
                      Z = /^h\d$/i,
                      Q = /^[^{]+\{\s*\[native \w/,
                      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                      ee = /[+~]/,
                      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
                      ie = function (e, t) {
                          var i = "0x" + e.slice(1) - 65536;
                          return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320));
                      },
                      ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                      re = function (e, t) {
                          return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                      },
                      se = function () {
                          p();
                      },
                      ae = we(
                          function (e) {
                              return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                          },
                          { dir: "parentNode", next: "legend" }
                      );
                  try {
                      L.apply(($ = N.call(x.childNodes)), x.childNodes), $[x.childNodes.length].nodeType;
                  } catch (e) {
                      L = {
                          apply: $.length
                              ? function (e, t) {
                                    O.apply(e, N.call(t));
                                }
                              : function (e, t) {
                                    for (var i = e.length, n = 0; (e[i++] = t[n++]); );
                                    e.length = i - 1;
                                },
                      };
                  }
                  function oe(e, t, n, r) {
                      var s,
                          o,
                          u,
                          c,
                          d,
                          f,
                          g,
                          y = t && t.ownerDocument,
                          x = t ? t.nodeType : 9;
                      if (((n = n || []), "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))) return n;
                      if (!r && (p(t), (t = t || h), m)) {
                          if (11 !== x && (d = J.exec(e)))
                              if ((s = d[1])) {
                                  if (9 === x) {
                                      if (!(u = t.getElementById(s))) return n;
                                      if (u.id === s) return n.push(u), n;
                                  } else if (y && (u = y.getElementById(s)) && b(t, u) && u.id === s) return n.push(u), n;
                              } else {
                                  if (d[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                                  if ((s = d[3]) && i.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(s)), n;
                              }
                          if (i.qsa && !M[e + " "] && (!v || !v.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                              if (((g = e), (y = t), 1 === x && (F.test(e) || U.test(e)))) {
                                  for (((y = (ee.test(e) && ge(t.parentNode)) || t) === t && i.scope) || ((c = t.getAttribute("id")) ? (c = c.replace(ne, re)) : t.setAttribute("id", (c = w))), o = (f = a(e)).length; o--; )
                                      f[o] = (c ? "#" + c : ":scope") + " " + be(f[o]);
                                  g = f.join(",");
                              }
                              try {
                                  return L.apply(n, y.querySelectorAll(g)), n;
                              } catch (t) {
                                  M(e, !0);
                              } finally {
                                  c === w && t.removeAttribute("id");
                              }
                          }
                      }
                      return l(e.replace(V, "$1"), t, n, r);
                  }
                  function le() {
                      var e = [];
                      return function t(i, r) {
                          return e.push(i + " ") > n.cacheLength && delete t[e.shift()], (t[i + " "] = r);
                      };
                  }
                  function ue(e) {
                      return (e[w] = !0), e;
                  }
                  function ce(e) {
                      var t = h.createElement("fieldset");
                      try {
                          return !!e(t);
                      } catch (e) {
                          return !1;
                      } finally {
                          t.parentNode && t.parentNode.removeChild(t), (t = null);
                      }
                  }
                  function de(e, t) {
                      for (var i = e.split("|"), r = i.length; r--; ) n.attrHandle[i[r]] = t;
                  }
                  function pe(e, t) {
                      var i = t && e,
                          n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                      if (n) return n;
                      if (i) for (; (i = i.nextSibling); ) if (i === t) return -1;
                      return e ? 1 : -1;
                  }
                  function he(e) {
                      return function (t) {
                          return "input" === t.nodeName.toLowerCase() && t.type === e;
                      };
                  }
                  function fe(e) {
                      return function (t) {
                          var i = t.nodeName.toLowerCase();
                          return ("input" === i || "button" === i) && t.type === e;
                      };
                  }
                  function me(e) {
                      return function (t) {
                          return "form" in t
                              ? t.parentNode && !1 === t.disabled
                                  ? "label" in t
                                      ? "label" in t.parentNode
                                          ? t.parentNode.disabled === e
                                          : t.disabled === e
                                      : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                                  : t.disabled === e
                              : "label" in t && t.disabled === e;
                      };
                  }
                  function ve(e) {
                      return ue(function (t) {
                          return (
                              (t = +t),
                              ue(function (i, n) {
                                  for (var r, s = e([], i.length, t), a = s.length; a--; ) i[(r = s[a])] && (i[r] = !(n[r] = i[r]));
                              })
                          );
                      });
                  }
                  function ge(e) {
                      return e && void 0 !== e.getElementsByTagName && e;
                  }
                  for (t in ((i = oe.support = {}),
                  (s = oe.isXML = function (e) {
                      var t = e && e.namespaceURI,
                          i = e && (e.ownerDocument || e).documentElement;
                      return !Y.test(t || (i && i.nodeName) || "HTML");
                  }),
                  (p = oe.setDocument = function (e) {
                      var t,
                          r,
                          a = e ? e.ownerDocument || e : x;
                      return a != h && 9 === a.nodeType && a.documentElement
                          ? ((f = (h = a).documentElement),
                            (m = !s(h)),
                            x != h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", se, !1) : r.attachEvent && r.attachEvent("onunload", se)),
                            (i.scope = ce(function (e) {
                                return f.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                            })),
                            (i.attributes = ce(function (e) {
                                return (e.className = "i"), !e.getAttribute("className");
                            })),
                            (i.getElementsByTagName = ce(function (e) {
                                return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
                            })),
                            (i.getElementsByClassName = Q.test(h.getElementsByClassName)),
                            (i.getById = ce(function (e) {
                                return (f.appendChild(e).id = w), !h.getElementsByName || !h.getElementsByName(w).length;
                            })),
                            i.getById
                                ? ((n.filter.ID = function (e) {
                                      var t = e.replace(te, ie);
                                      return function (e) {
                                          return e.getAttribute("id") === t;
                                      };
                                  }),
                                  (n.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && m) {
                                          var i = t.getElementById(e);
                                          return i ? [i] : [];
                                      }
                                  }))
                                : ((n.filter.ID = function (e) {
                                      var t = e.replace(te, ie);
                                      return function (e) {
                                          var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                          return i && i.value === t;
                                      };
                                  }),
                                  (n.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && m) {
                                          var i,
                                              n,
                                              r,
                                              s = t.getElementById(e);
                                          if (s) {
                                              if ((i = s.getAttributeNode("id")) && i.value === e) return [s];
                                              for (r = t.getElementsByName(e), n = 0; (s = r[n++]); ) if ((i = s.getAttributeNode("id")) && i.value === e) return [s];
                                          }
                                          return [];
                                      }
                                  })),
                            (n.find.TAG = i.getElementsByTagName
                                ? function (e, t) {
                                      return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0;
                                  }
                                : function (e, t) {
                                      var i,
                                          n = [],
                                          r = 0,
                                          s = t.getElementsByTagName(e);
                                      if ("*" === e) {
                                          for (; (i = s[r++]); ) 1 === i.nodeType && n.push(i);
                                          return n;
                                      }
                                      return s;
                                  }),
                            (n.find.CLASS =
                                i.getElementsByClassName &&
                                function (e, t) {
                                    if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
                                }),
                            (g = []),
                            (v = []),
                            (i.qsa = Q.test(h.querySelectorAll)) &&
                                (ce(function (e) {
                                    var t;
                                    (f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                        e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + j + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || v.push("\\[" + j + "*(?:value|" + z + ")"),
                                        e.querySelectorAll("[id~=" + w + "-]").length || v.push("~="),
                                        (t = h.createElement("input")).setAttribute("name", ""),
                                        e.appendChild(t),
                                        e.querySelectorAll("[name='']").length || v.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"),
                                        e.querySelectorAll(":checked").length || v.push(":checked"),
                                        e.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]"),
                                        e.querySelectorAll("\\\f"),
                                        v.push("[\\r\\n\\f]");
                                }),
                                ce(function (e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = h.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length && v.push("name" + j + "*[*^$|!~]?="),
                                        2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                        (f.appendChild(e).disabled = !0),
                                        2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        v.push(",.*:");
                                })),
                            (i.matchesSelector = Q.test((y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector))) &&
                                ce(function (e) {
                                    (i.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), g.push("!=", q);
                                }),
                            (v = v.length && new RegExp(v.join("|"))),
                            (g = g.length && new RegExp(g.join("|"))),
                            (t = Q.test(f.compareDocumentPosition)),
                            (b =
                                t || Q.test(f.contains)
                                    ? function (e, t) {
                                          var i = 9 === e.nodeType ? e.documentElement : e,
                                              n = t && t.parentNode;
                                          return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
                                      }
                                    : function (e, t) {
                                          if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                          return !1;
                                      }),
                            (P = t
                                ? function (e, t) {
                                      if (e === t) return (d = !0), 0;
                                      var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                      return (
                                          n ||
                                          (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!i.sortDetached && t.compareDocumentPosition(e) === n)
                                              ? e == h || (e.ownerDocument == x && b(x, e))
                                                  ? -1
                                                  : t == h || (t.ownerDocument == x && b(x, t))
                                                  ? 1
                                                  : c
                                                  ? _(c, e) - _(c, t)
                                                  : 0
                                              : 4 & n
                                              ? -1
                                              : 1)
                                      );
                                  }
                                : function (e, t) {
                                      if (e === t) return (d = !0), 0;
                                      var i,
                                          n = 0,
                                          r = e.parentNode,
                                          s = t.parentNode,
                                          a = [e],
                                          o = [t];
                                      if (!r || !s) return e == h ? -1 : t == h ? 1 : r ? -1 : s ? 1 : c ? _(c, e) - _(c, t) : 0;
                                      if (r === s) return pe(e, t);
                                      for (i = e; (i = i.parentNode); ) a.unshift(i);
                                      for (i = t; (i = i.parentNode); ) o.unshift(i);
                                      for (; a[n] === o[n]; ) n++;
                                      return n ? pe(a[n], o[n]) : a[n] == x ? -1 : o[n] == x ? 1 : 0;
                                  }),
                            h)
                          : h;
                  }),
                  (oe.matches = function (e, t) {
                      return oe(e, null, null, t);
                  }),
                  (oe.matchesSelector = function (e, t) {
                      if ((p(e), i.matchesSelector && m && !M[t + " "] && (!g || !g.test(t)) && (!v || !v.test(t))))
                          try {
                              var n = y.call(e, t);
                              if (n || i.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                          } catch (e) {
                              M(t, !0);
                          }
                      return oe(t, h, null, [e]).length > 0;
                  }),
                  (oe.contains = function (e, t) {
                      return (e.ownerDocument || e) != h && p(e), b(e, t);
                  }),
                  (oe.attr = function (e, t) {
                      (e.ownerDocument || e) != h && p(e);
                      var r = n.attrHandle[t.toLowerCase()],
                          s = r && A.call(n.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
                      return void 0 !== s ? s : i.attributes || !m ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null;
                  }),
                  (oe.escape = function (e) {
                      return (e + "").replace(ne, re);
                  }),
                  (oe.error = function (e) {
                      throw new Error("Syntax error, unrecognized expression: " + e);
                  }),
                  (oe.uniqueSort = function (e) {
                      var t,
                          n = [],
                          r = 0,
                          s = 0;
                      if (((d = !i.detectDuplicates), (c = !i.sortStable && e.slice(0)), e.sort(P), d)) {
                          for (; (t = e[s++]); ) t === e[s] && (r = n.push(s));
                          for (; r--; ) e.splice(n[r], 1);
                      }
                      return (c = null), e;
                  }),
                  (r = oe.getText = function (e) {
                      var t,
                          i = "",
                          n = 0,
                          s = e.nodeType;
                      if (s) {
                          if (1 === s || 9 === s || 11 === s) {
                              if ("string" == typeof e.textContent) return e.textContent;
                              for (e = e.firstChild; e; e = e.nextSibling) i += r(e);
                          } else if (3 === s || 4 === s) return e.nodeValue;
                      } else for (; (t = e[n++]); ) i += r(t);
                      return i;
                  }),
                  ((n = oe.selectors = {
                      cacheLength: 50,
                      createPseudo: ue,
                      match: X,
                      attrHandle: {},
                      find: {},
                      relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                      preFilter: {
                          ATTR: function (e) {
                              return (e[1] = e[1].replace(te, ie)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                          },
                          CHILD: function (e) {
                              return (
                                  (e[1] = e[1].toLowerCase()),
                                  "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && oe.error(e[0]),
                                  e
                              );
                          },
                          PSEUDO: function (e) {
                              var t,
                                  i = !e[6] && e[2];
                              return X.CHILD.test(e[0])
                                  ? null
                                  : (e[3] ? (e[2] = e[4] || e[5] || "") : i && G.test(i) && (t = a(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))), e.slice(0, 3));
                          },
                      },
                      filter: {
                          TAG: function (e) {
                              var t = e.replace(te, ie).toLowerCase();
                              return "*" === e
                                  ? function () {
                                        return !0;
                                    }
                                  : function (e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t;
                                    };
                          },
                          CLASS: function (e) {
                              var t = C[e + " "];
                              return (
                                  t ||
                                  ((t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) &&
                                      C(e, function (e) {
                                          return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                      }))
                              );
                          },
                          ATTR: function (e, t, i) {
                              return function (n) {
                                  var r = oe.attr(n, e);
                                  return null == r
                                      ? "!=" === t
                                      : !t ||
                                            ((r += ""),
                                            "=" === t
                                                ? r === i
                                                : "!=" === t
                                                ? r !== i
                                                : "^=" === t
                                                ? i && 0 === r.indexOf(i)
                                                : "*=" === t
                                                ? i && r.indexOf(i) > -1
                                                : "$=" === t
                                                ? i && r.slice(-i.length) === i
                                                : "~=" === t
                                                ? (" " + r.replace(R, " ") + " ").indexOf(i) > -1
                                                : "|=" === t && (r === i || r.slice(0, i.length + 1) === i + "-"));
                              };
                          },
                          CHILD: function (e, t, i, n, r) {
                              var s = "nth" !== e.slice(0, 3),
                                  a = "last" !== e.slice(-4),
                                  o = "of-type" === t;
                              return 1 === n && 0 === r
                                  ? function (e) {
                                        return !!e.parentNode;
                                    }
                                  : function (t, i, l) {
                                        var u,
                                            c,
                                            d,
                                            p,
                                            h,
                                            f,
                                            m = s !== a ? "nextSibling" : "previousSibling",
                                            v = t.parentNode,
                                            g = o && t.nodeName.toLowerCase(),
                                            y = !l && !o,
                                            b = !1;
                                        if (v) {
                                            if (s) {
                                                for (; m; ) {
                                                    for (p = t; (p = p[m]); ) if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                                    f = m = "only" === e && !f && "nextSibling";
                                                }
                                                return !0;
                                            }
                                            if (((f = [a ? v.firstChild : v.lastChild]), a && y)) {
                                                for (
                                                    b = (h = (u = (c = (d = (p = v)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === S && u[1]) && u[2], p = h && v.childNodes[h];
                                                    (p = (++h && p && p[m]) || (b = h = 0) || f.pop());

                                                )
                                                    if (1 === p.nodeType && ++b && p === t) {
                                                        c[e] = [S, h, b];
                                                        break;
                                                    }
                                            } else if ((y && (b = h = (u = (c = (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === S && u[1]), !1 === b))
                                                for (
                                                    ;
                                                    (p = (++h && p && p[m]) || (b = h = 0) || f.pop()) &&
                                                    ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((c = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [S, b]), p !== t));

                                                );
                                            return (b -= r) === n || (b % n == 0 && b / n >= 0);
                                        }
                                    };
                          },
                          PSEUDO: function (e, t) {
                              var i,
                                  r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                              return r[w]
                                  ? r(t)
                                  : r.length > 1
                                  ? ((i = [e, e, "", t]),
                                    n.setFilters.hasOwnProperty(e.toLowerCase())
                                        ? ue(function (e, i) {
                                              for (var n, s = r(e, t), a = s.length; a--; ) e[(n = _(e, s[a]))] = !(i[n] = s[a]);
                                          })
                                        : function (e) {
                                              return r(e, 0, i);
                                          })
                                  : r;
                          },
                      },
                      pseudos: {
                          not: ue(function (e) {
                              var t = [],
                                  i = [],
                                  n = o(e.replace(V, "$1"));
                              return n[w]
                                  ? ue(function (e, t, i, r) {
                                        for (var s, a = n(e, null, r, []), o = e.length; o--; ) (s = a[o]) && (e[o] = !(t[o] = s));
                                    })
                                  : function (e, r, s) {
                                        return (t[0] = e), n(t, null, s, i), (t[0] = null), !i.pop();
                                    };
                          }),
                          has: ue(function (e) {
                              return function (t) {
                                  return oe(e, t).length > 0;
                              };
                          }),
                          contains: ue(function (e) {
                              return (
                                  (e = e.replace(te, ie)),
                                  function (t) {
                                      return (t.textContent || r(t)).indexOf(e) > -1;
                                  }
                              );
                          }),
                          lang: ue(function (e) {
                              return (
                                  W.test(e || "") || oe.error("unsupported lang: " + e),
                                  (e = e.replace(te, ie).toLowerCase()),
                                  function (t) {
                                      var i;
                                      do {
                                          if ((i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-");
                                      } while ((t = t.parentNode) && 1 === t.nodeType);
                                      return !1;
                                  }
                              );
                          }),
                          target: function (t) {
                              var i = e.location && e.location.hash;
                              return i && i.slice(1) === t.id;
                          },
                          root: function (e) {
                              return e === f;
                          },
                          focus: function (e) {
                              return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                          },
                          enabled: me(!1),
                          disabled: me(!0),
                          checked: function (e) {
                              var t = e.nodeName.toLowerCase();
                              return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                          },
                          selected: function (e) {
                              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                          },
                          empty: function (e) {
                              for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                              return !0;
                          },
                          parent: function (e) {
                              return !n.pseudos.empty(e);
                          },
                          header: function (e) {
                              return Z.test(e.nodeName);
                          },
                          input: function (e) {
                              return K.test(e.nodeName);
                          },
                          button: function (e) {
                              var t = e.nodeName.toLowerCase();
                              return ("input" === t && "button" === e.type) || "button" === t;
                          },
                          text: function (e) {
                              var t;
                              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                          },
                          first: ve(function () {
                              return [0];
                          }),
                          last: ve(function (e, t) {
                              return [t - 1];
                          }),
                          eq: ve(function (e, t, i) {
                              return [i < 0 ? i + t : i];
                          }),
                          even: ve(function (e, t) {
                              for (var i = 0; i < t; i += 2) e.push(i);
                              return e;
                          }),
                          odd: ve(function (e, t) {
                              for (var i = 1; i < t; i += 2) e.push(i);
                              return e;
                          }),
                          lt: ve(function (e, t, i) {
                              for (var n = i < 0 ? i + t : i > t ? t : i; --n >= 0; ) e.push(n);
                              return e;
                          }),
                          gt: ve(function (e, t, i) {
                              for (var n = i < 0 ? i + t : i; ++n < t; ) e.push(n);
                              return e;
                          }),
                      },
                  }).pseudos.nth = n.pseudos.eq),
                  { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                      n.pseudos[t] = he(t);
                  for (t in { submit: !0, reset: !0 }) n.pseudos[t] = fe(t);
                  function ye() {}
                  function be(e) {
                      for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
                      return n;
                  }
                  function we(e, t, i) {
                      var n = t.dir,
                          r = t.next,
                          s = r || n,
                          a = i && "parentNode" === s,
                          o = E++;
                      return t.first
                          ? function (t, i, r) {
                                for (; (t = t[n]); ) if (1 === t.nodeType || a) return e(t, i, r);
                                return !1;
                            }
                          : function (t, i, l) {
                                var u,
                                    c,
                                    d,
                                    p = [S, o];
                                if (l) {
                                    for (; (t = t[n]); ) if ((1 === t.nodeType || a) && e(t, i, l)) return !0;
                                } else
                                    for (; (t = t[n]); )
                                        if (1 === t.nodeType || a)
                                            if (((c = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[n] || t;
                                            else {
                                                if ((u = c[s]) && u[0] === S && u[1] === o) return (p[2] = u[2]);
                                                if (((c[s] = p), (p[2] = e(t, i, l)))) return !0;
                                            }
                                return !1;
                            };
                  }
                  function xe(e) {
                      return e.length > 1
                          ? function (t, i, n) {
                                for (var r = e.length; r--; ) if (!e[r](t, i, n)) return !1;
                                return !0;
                            }
                          : e[0];
                  }
                  function Se(e, t, i, n, r) {
                      for (var s, a = [], o = 0, l = e.length, u = null != t; o < l; o++) (s = e[o]) && ((i && !i(s, n, r)) || (a.push(s), u && t.push(o)));
                      return a;
                  }
                  function Ee(e, t, i, n, r, s) {
                      return (
                          n && !n[w] && (n = Ee(n)),
                          r && !r[w] && (r = Ee(r, s)),
                          ue(function (s, a, o, l) {
                              var u,
                                  c,
                                  d,
                                  p = [],
                                  h = [],
                                  f = a.length,
                                  m =
                                      s ||
                                      (function (e, t, i) {
                                          for (var n = 0, r = t.length; n < r; n++) oe(e, t[n], i);
                                          return i;
                                      })(t || "*", o.nodeType ? [o] : o, []),
                                  v = !e || (!s && t) ? m : Se(m, p, e, o, l),
                                  g = i ? (r || (s ? e : f || n) ? [] : a) : v;
                              if ((i && i(v, g, o, l), n)) for (u = Se(g, h), n(u, [], o, l), c = u.length; c--; ) (d = u[c]) && (g[h[c]] = !(v[h[c]] = d));
                              if (s) {
                                  if (r || e) {
                                      if (r) {
                                          for (u = [], c = g.length; c--; ) (d = g[c]) && u.push((v[c] = d));
                                          r(null, (g = []), u, l);
                                      }
                                      for (c = g.length; c--; ) (d = g[c]) && (u = r ? _(s, d) : p[c]) > -1 && (s[u] = !(a[u] = d));
                                  }
                              } else (g = Se(g === a ? g.splice(f, g.length) : g)), r ? r(null, a, g, l) : L.apply(a, g);
                          })
                      );
                  }
                  function Ce(e) {
                      for (
                          var t,
                              i,
                              r,
                              s = e.length,
                              a = n.relative[e[0].type],
                              o = a || n.relative[" "],
                              l = a ? 1 : 0,
                              c = we(
                                  function (e) {
                                      return e === t;
                                  },
                                  o,
                                  !0
                              ),
                              d = we(
                                  function (e) {
                                      return _(t, e) > -1;
                                  },
                                  o,
                                  !0
                              ),
                              p = [
                                  function (e, i, n) {
                                      var r = (!a && (n || i !== u)) || ((t = i).nodeType ? c(e, i, n) : d(e, i, n));
                                      return (t = null), r;
                                  },
                              ];
                          l < s;
                          l++
                      )
                          if ((i = n.relative[e[l].type])) p = [we(xe(p), i)];
                          else {
                              if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
                                  for (r = ++l; r < s && !n.relative[e[r].type]; r++);
                                  return Ee(
                                      l > 1 && xe(p),
                                      l > 1 && be(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(V, "$1"),
                                      i,
                                      l < r && Ce(e.slice(l, r)),
                                      r < s && Ce((e = e.slice(r))),
                                      r < s && be(e)
                                  );
                              }
                              p.push(i);
                          }
                      return xe(p);
                  }
                  return (
                      (ye.prototype = n.filters = n.pseudos),
                      (n.setFilters = new ye()),
                      (a = oe.tokenize = function (e, t) {
                          var i,
                              r,
                              s,
                              a,
                              o,
                              l,
                              u,
                              c = T[e + " "];
                          if (c) return t ? 0 : c.slice(0);
                          for (o = e, l = [], u = n.preFilter; o; ) {
                              for (a in ((i && !(r = B.exec(o))) || (r && (o = o.slice(r[0].length) || o), l.push((s = []))),
                              (i = !1),
                              (r = U.exec(o)) && ((i = r.shift()), s.push({ value: i, type: r[0].replace(V, " ") }), (o = o.slice(i.length))),
                              n.filter))
                                  !(r = X[a].exec(o)) || (u[a] && !(r = u[a](r))) || ((i = r.shift()), s.push({ value: i, type: a, matches: r }), (o = o.slice(i.length)));
                              if (!i) break;
                          }
                          return t ? o.length : o ? oe.error(e) : T(e, l).slice(0);
                      }),
                      (o = oe.compile = function (e, t) {
                          var i,
                              r = [],
                              s = [],
                              o = k[e + " "];
                          if (!o) {
                              for (t || (t = a(e)), i = t.length; i--; ) (o = Ce(t[i]))[w] ? r.push(o) : s.push(o);
                              (o = k(
                                  e,
                                  (function (e, t) {
                                      var i = t.length > 0,
                                          r = e.length > 0,
                                          s = function (s, a, o, l, c) {
                                              var d,
                                                  f,
                                                  v,
                                                  g = 0,
                                                  y = "0",
                                                  b = s && [],
                                                  w = [],
                                                  x = u,
                                                  E = s || (r && n.find.TAG("*", c)),
                                                  C = (S += null == x ? 1 : Math.random() || 0.1),
                                                  T = E.length;
                                              for (c && (u = a == h || a || c); y !== T && null != (d = E[y]); y++) {
                                                  if (r && d) {
                                                      for (f = 0, a || d.ownerDocument == h || (p(d), (o = !m)); (v = e[f++]); )
                                                          if (v(d, a || h, o)) {
                                                              l.push(d);
                                                              break;
                                                          }
                                                      c && (S = C);
                                                  }
                                                  i && ((d = !v && d) && g--, s && b.push(d));
                                              }
                                              if (((g += y), i && y !== g)) {
                                                  for (f = 0; (v = t[f++]); ) v(b, w, a, o);
                                                  if (s) {
                                                      if (g > 0) for (; y--; ) b[y] || w[y] || (w[y] = D.call(l));
                                                      w = Se(w);
                                                  }
                                                  L.apply(l, w), c && !s && w.length > 0 && g + t.length > 1 && oe.uniqueSort(l);
                                              }
                                              return c && ((S = C), (u = x)), b;
                                          };
                                      return i ? ue(s) : s;
                                  })(s, r)
                              )).selector = e;
                          }
                          return o;
                      }),
                      (l = oe.select = function (e, t, i, r) {
                          var s,
                              l,
                              u,
                              c,
                              d,
                              p = "function" == typeof e && e,
                              h = !r && a((e = p.selector || e));
                          if (((i = i || []), 1 === h.length)) {
                              if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
                                  if (!(t = (n.find.ID(u.matches[0].replace(te, ie), t) || [])[0])) return i;
                                  p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                              }
                              for (s = X.needsContext.test(e) ? 0 : l.length; s-- && ((u = l[s]), !n.relative[(c = u.type)]); )
                                  if ((d = n.find[c]) && (r = d(u.matches[0].replace(te, ie), (ee.test(l[0].type) && ge(t.parentNode)) || t))) {
                                      if ((l.splice(s, 1), !(e = r.length && be(l)))) return L.apply(i, r), i;
                                      break;
                                  }
                          }
                          return (p || o(e, h))(r, t, !m, i, !t || (ee.test(e) && ge(t.parentNode)) || t), i;
                      }),
                      (i.sortStable = w.split("").sort(P).join("") === w),
                      (i.detectDuplicates = !!d),
                      p(),
                      (i.sortDetached = ce(function (e) {
                          return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
                      })),
                      ce(function (e) {
                          return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                      }) ||
                          de("type|href|height|width", function (e, t, i) {
                              if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                          }),
                      (i.attributes &&
                          ce(function (e) {
                              return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                          })) ||
                          de("value", function (e, t, i) {
                              if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                          }),
                      ce(function (e) {
                          return null == e.getAttribute("disabled");
                      }) ||
                          de(z, function (e, t, i) {
                              var n;
                              if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
                          }),
                      oe
                  );
              })(i);
          (E.find = T), (E.expr = T.selectors), (E.expr[":"] = E.expr.pseudos), (E.uniqueSort = E.unique = T.uniqueSort), (E.text = T.getText), (E.isXMLDoc = T.isXML), (E.contains = T.contains), (E.escapeSelector = T.escape);
          var k = function (e, t, i) {
                  for (var n = [], r = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
                      if (1 === e.nodeType) {
                          if (r && E(e).is(i)) break;
                          n.push(e);
                      }
                  return n;
              },
              M = function (e, t) {
                  for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
                  return i;
              },
              P = E.expr.match.needsContext;
          function A(e, t) {
              return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var $ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function D(e, t, i) {
              return g(t)
                  ? E.grep(e, function (e, n) {
                        return !!t.call(e, n, e) !== i;
                    })
                  : t.nodeType
                  ? E.grep(e, function (e) {
                        return (e === t) !== i;
                    })
                  : "string" != typeof t
                  ? E.grep(e, function (e) {
                        return c.call(t, e) > -1 !== i;
                    })
                  : E.filter(t, e, i);
          }
          (E.filter = function (e, t, i) {
              var n = t[0];
              return (
                  i && (e = ":not(" + e + ")"),
                  1 === t.length && 1 === n.nodeType
                      ? E.find.matchesSelector(n, e)
                          ? [n]
                          : []
                      : E.find.matches(
                            e,
                            E.grep(t, function (e) {
                                return 1 === e.nodeType;
                            })
                        )
              );
          }),
              E.fn.extend({
                  find: function (e) {
                      var t,
                          i,
                          n = this.length,
                          r = this;
                      if ("string" != typeof e)
                          return this.pushStack(
                              E(e).filter(function () {
                                  for (t = 0; t < n; t++) if (E.contains(r[t], this)) return !0;
                              })
                          );
                      for (i = this.pushStack([]), t = 0; t < n; t++) E.find(e, r[t], i);
                      return n > 1 ? E.uniqueSort(i) : i;
                  },
                  filter: function (e) {
                      return this.pushStack(D(this, e || [], !1));
                  },
                  not: function (e) {
                      return this.pushStack(D(this, e || [], !0));
                  },
                  is: function (e) {
                      return !!D(this, "string" == typeof e && P.test(e) ? E(e) : e || [], !1).length;
                  },
              });
          var O,
              L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((E.fn.init = function (e, t, i) {
              var n, r;
              if (!e) return this;
              if (((i = i || O), "string" == typeof e)) {
                  if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || (!n[1] && t)) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                  if (n[1]) {
                      if (((t = t instanceof E ? t[0] : t), E.merge(this, E.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), $.test(n[1]) && E.isPlainObject(t)))
                          for (n in t) g(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                      return this;
                  }
                  return (r = b.getElementById(n[2])) && ((this[0] = r), (this.length = 1)), this;
              }
              return e.nodeType ? ((this[0] = e), (this.length = 1), this) : g(e) ? (void 0 !== i.ready ? i.ready(e) : e(E)) : E.makeArray(e, this);
          }).prototype = E.fn),
              (O = E(b));
          var N = /^(?:parents|prev(?:Until|All))/,
              _ = { children: !0, contents: !0, next: !0, prev: !0 };
          function z(e, t) {
              for (; (e = e[t]) && 1 !== e.nodeType; );
              return e;
          }
          E.fn.extend({
              has: function (e) {
                  var t = E(e, this),
                      i = t.length;
                  return this.filter(function () {
                      for (var e = 0; e < i; e++) if (E.contains(this, t[e])) return !0;
                  });
              },
              closest: function (e, t) {
                  var i,
                      n = 0,
                      r = this.length,
                      s = [],
                      a = "string" != typeof e && E(e);
                  if (!P.test(e))
                      for (; n < r; n++)
                          for (i = this[n]; i && i !== t; i = i.parentNode)
                              if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && E.find.matchesSelector(i, e))) {
                                  s.push(i);
                                  break;
                              }
                  return this.pushStack(s.length > 1 ? E.uniqueSort(s) : s);
              },
              index: function (e) {
                  return e ? ("string" == typeof e ? c.call(E(e), this[0]) : c.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
              },
              add: function (e, t) {
                  return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
              },
              addBack: function (e) {
                  return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
              },
          }),
              E.each(
                  {
                      parent: function (e) {
                          var t = e.parentNode;
                          return t && 11 !== t.nodeType ? t : null;
                      },
                      parents: function (e) {
                          return k(e, "parentNode");
                      },
                      parentsUntil: function (e, t, i) {
                          return k(e, "parentNode", i);
                      },
                      next: function (e) {
                          return z(e, "nextSibling");
                      },
                      prev: function (e) {
                          return z(e, "previousSibling");
                      },
                      nextAll: function (e) {
                          return k(e, "nextSibling");
                      },
                      prevAll: function (e) {
                          return k(e, "previousSibling");
                      },
                      nextUntil: function (e, t, i) {
                          return k(e, "nextSibling", i);
                      },
                      prevUntil: function (e, t, i) {
                          return k(e, "previousSibling", i);
                      },
                      siblings: function (e) {
                          return M((e.parentNode || {}).firstChild, e);
                      },
                      children: function (e) {
                          return M(e.firstChild);
                      },
                      contents: function (e) {
                          return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes));
                      },
                  },
                  function (e, t) {
                      E.fn[e] = function (i, n) {
                          var r = E.map(this, t, i);
                          return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = E.filter(n, r)), this.length > 1 && (_[e] || E.uniqueSort(r), N.test(e) && r.reverse()), this.pushStack(r);
                      };
                  }
              );
          var j = /[^\x20\t\r\n\f]+/g;
          function I(e) {
              return e;
          }
          function H(e) {
              throw e;
          }
          function q(e, t, i, n) {
              var r;
              try {
                  e && g((r = e.promise)) ? r.call(e).done(t).fail(i) : e && g((r = e.then)) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n));
              } catch (e) {
                  i.apply(void 0, [e]);
              }
          }
          (E.Callbacks = function (e) {
              e =
                  "string" == typeof e
                      ? (function (e) {
                            var t = {};
                            return (
                                E.each(e.match(j) || [], function (e, i) {
                                    t[i] = !0;
                                }),
                                t
                            );
                        })(e)
                      : E.extend({}, e);
              var t,
                  i,
                  n,
                  r,
                  s = [],
                  a = [],
                  o = -1,
                  l = function () {
                      for (r = r || e.once, n = t = !0; a.length; o = -1) for (i = a.shift(); ++o < s.length; ) !1 === s[o].apply(i[0], i[1]) && e.stopOnFalse && ((o = s.length), (i = !1));
                      e.memory || (i = !1), (t = !1), r && (s = i ? [] : "");
                  },
                  u = {
                      add: function () {
                          return (
                              s &&
                                  (i && !t && ((o = s.length - 1), a.push(i)),
                                  (function t(i) {
                                      E.each(i, function (i, n) {
                                          g(n) ? (e.unique && u.has(n)) || s.push(n) : n && n.length && "string" !== S(n) && t(n);
                                      });
                                  })(arguments),
                                  i && !t && l()),
                              this
                          );
                      },
                      remove: function () {
                          return (
                              E.each(arguments, function (e, t) {
                                  for (var i; (i = E.inArray(t, s, i)) > -1; ) s.splice(i, 1), i <= o && o--;
                              }),
                              this
                          );
                      },
                      has: function (e) {
                          return e ? E.inArray(e, s) > -1 : s.length > 0;
                      },
                      empty: function () {
                          return s && (s = []), this;
                      },
                      disable: function () {
                          return (r = a = []), (s = i = ""), this;
                      },
                      disabled: function () {
                          return !s;
                      },
                      lock: function () {
                          return (r = a = []), i || t || (s = i = ""), this;
                      },
                      locked: function () {
                          return !!r;
                      },
                      fireWith: function (e, i) {
                          return r || ((i = [e, (i = i || []).slice ? i.slice() : i]), a.push(i), t || l()), this;
                      },
                      fire: function () {
                          return u.fireWith(this, arguments), this;
                      },
                      fired: function () {
                          return !!n;
                      },
                  };
              return u;
          }),
              E.extend({
                  Deferred: function (e) {
                      var t = [
                              ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                              ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                              ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"],
                          ],
                          n = "pending",
                          r = {
                              state: function () {
                                  return n;
                              },
                              always: function () {
                                  return s.done(arguments).fail(arguments), this;
                              },
                              catch: function (e) {
                                  return r.then(null, e);
                              },
                              pipe: function () {
                                  var e = arguments;
                                  return E.Deferred(function (i) {
                                      E.each(t, function (t, n) {
                                          var r = g(e[n[4]]) && e[n[4]];
                                          s[n[1]](function () {
                                              var e = r && r.apply(this, arguments);
                                              e && g(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, r ? [e] : arguments);
                                          });
                                      }),
                                          (e = null);
                                  }).promise();
                              },
                              then: function (e, n, r) {
                                  var s = 0;
                                  function a(e, t, n, r) {
                                      return function () {
                                          var o = this,
                                              l = arguments,
                                              u = function () {
                                                  var i, u;
                                                  if (!(e < s)) {
                                                      if ((i = n.apply(o, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                      (u = i && ("object" == typeof i || "function" == typeof i) && i.then),
                                                          g(u)
                                                              ? r
                                                                  ? u.call(i, a(s, t, I, r), a(s, t, H, r))
                                                                  : (s++, u.call(i, a(s, t, I, r), a(s, t, H, r), a(s, t, I, t.notifyWith)))
                                                              : (n !== I && ((o = void 0), (l = [i])), (r || t.resolveWith)(o, l));
                                                  }
                                              },
                                              c = r
                                                  ? u
                                                  : function () {
                                                        try {
                                                            u();
                                                        } catch (i) {
                                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(i, c.stackTrace), e + 1 >= s && (n !== H && ((o = void 0), (l = [i])), t.rejectWith(o, l));
                                                        }
                                                    };
                                          e ? c() : (E.Deferred.getStackHook && (c.stackTrace = E.Deferred.getStackHook()), i.setTimeout(c));
                                      };
                                  }
                                  return E.Deferred(function (i) {
                                      t[0][3].add(a(0, i, g(r) ? r : I, i.notifyWith)), t[1][3].add(a(0, i, g(e) ? e : I)), t[2][3].add(a(0, i, g(n) ? n : H));
                                  }).promise();
                              },
                              promise: function (e) {
                                  return null != e ? E.extend(e, r) : r;
                              },
                          },
                          s = {};
                      return (
                          E.each(t, function (e, i) {
                              var a = i[2],
                                  o = i[5];
                              (r[i[1]] = a.add),
                                  o &&
                                      a.add(
                                          function () {
                                              n = o;
                                          },
                                          t[3 - e][2].disable,
                                          t[3 - e][3].disable,
                                          t[0][2].lock,
                                          t[0][3].lock
                                      ),
                                  a.add(i[3].fire),
                                  (s[i[0]] = function () {
                                      return s[i[0] + "With"](this === s ? void 0 : this, arguments), this;
                                  }),
                                  (s[i[0] + "With"] = a.fireWith);
                          }),
                          r.promise(s),
                          e && e.call(s, s),
                          s
                      );
                  },
                  when: function (e) {
                      var t = arguments.length,
                          i = t,
                          n = Array(i),
                          r = o.call(arguments),
                          s = E.Deferred(),
                          a = function (e) {
                              return function (i) {
                                  (n[e] = this), (r[e] = arguments.length > 1 ? o.call(arguments) : i), --t || s.resolveWith(n, r);
                              };
                          };
                      if (t <= 1 && (q(e, s.done(a(i)).resolve, s.reject, !t), "pending" === s.state() || g(r[i] && r[i].then))) return s.then();
                      for (; i--; ) q(r[i], a(i), s.reject);
                      return s.promise();
                  },
              });
          var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (E.Deferred.exceptionHook = function (e, t) {
              i.console && i.console.warn && e && R.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
          }),
              (E.readyException = function (e) {
                  i.setTimeout(function () {
                      throw e;
                  });
              });
          var V = E.Deferred();
          function B() {
              b.removeEventListener("DOMContentLoaded", B), i.removeEventListener("load", B), E.ready();
          }
          (E.fn.ready = function (e) {
              return (
                  V.then(e).catch(function (e) {
                      E.readyException(e);
                  }),
                  this
              );
          }),
              E.extend({
                  isReady: !1,
                  readyWait: 1,
                  ready: function (e) {
                      (!0 === e ? --E.readyWait : E.isReady) || ((E.isReady = !0), (!0 !== e && --E.readyWait > 0) || V.resolveWith(b, [E]));
                  },
              }),
              (E.ready.then = V.then),
              "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll) ? i.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", B), i.addEventListener("load", B));
          var U = function (e, t, i, n, r, s, a) {
                  var o = 0,
                      l = e.length,
                      u = null == i;
                  if ("object" === S(i)) for (o in ((r = !0), i)) U(e, t, o, i[o], !0, s, a);
                  else if (
                      void 0 !== n &&
                      ((r = !0),
                      g(n) || (a = !0),
                      u &&
                          (a
                              ? (t.call(e, n), (t = null))
                              : ((u = t),
                                (t = function (e, t, i) {
                                    return u.call(E(e), i);
                                }))),
                      t)
                  )
                      for (; o < l; o++) t(e[o], i, a ? n : n.call(e[o], o, t(e[o], i)));
                  return r ? e : u ? t.call(e) : l ? t(e[0], i) : s;
              },
              F = /^-ms-/,
              G = /-([a-z])/g;
          function W(e, t) {
              return t.toUpperCase();
          }
          function X(e) {
              return e.replace(F, "ms-").replace(G, W);
          }
          var Y = function (e) {
              return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function K() {
              this.expando = E.expando + K.uid++;
          }
          (K.uid = 1),
              (K.prototype = {
                  cache: function (e) {
                      var t = e[this.expando];
                      return t || ((t = {}), Y(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                  },
                  set: function (e, t, i) {
                      var n,
                          r = this.cache(e);
                      if ("string" == typeof t) r[X(t)] = i;
                      else for (n in t) r[X(n)] = t[n];
                      return r;
                  },
                  get: function (e, t) {
                      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
                  },
                  access: function (e, t, i) {
                      return void 0 === t || (t && "string" == typeof t && void 0 === i) ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t);
                  },
                  remove: function (e, t) {
                      var i,
                          n = e[this.expando];
                      if (void 0 !== n) {
                          if (void 0 !== t) {
                              i = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in n ? [t] : t.match(j) || []).length;
                              for (; i--; ) delete n[t[i]];
                          }
                          (void 0 === t || E.isEmptyObject(n)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                      }
                  },
                  hasData: function (e) {
                      var t = e[this.expando];
                      return void 0 !== t && !E.isEmptyObject(t);
                  },
              });
          var Z = new K(),
              Q = new K(),
              J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              ee = /[A-Z]/g;
          function te(e, t, i) {
              var n;
              if (void 0 === i && 1 === e.nodeType)
                  if (((n = "data-" + t.replace(ee, "-$&").toLowerCase()), "string" == typeof (i = e.getAttribute(n)))) {
                      try {
                          i = (function (e) {
                              return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e));
                          })(i);
                      } catch (e) {}
                      Q.set(e, t, i);
                  } else i = void 0;
              return i;
          }
          E.extend({
              hasData: function (e) {
                  return Q.hasData(e) || Z.hasData(e);
              },
              data: function (e, t, i) {
                  return Q.access(e, t, i);
              },
              removeData: function (e, t) {
                  Q.remove(e, t);
              },
              _data: function (e, t, i) {
                  return Z.access(e, t, i);
              },
              _removeData: function (e, t) {
                  Z.remove(e, t);
              },
          }),
              E.fn.extend({
                  data: function (e, t) {
                      var i,
                          n,
                          r,
                          s = this[0],
                          a = s && s.attributes;
                      if (void 0 === e) {
                          if (this.length && ((r = Q.get(s)), 1 === s.nodeType && !Z.get(s, "hasDataAttrs"))) {
                              for (i = a.length; i--; ) a[i] && 0 === (n = a[i].name).indexOf("data-") && ((n = X(n.slice(5))), te(s, n, r[n]));
                              Z.set(s, "hasDataAttrs", !0);
                          }
                          return r;
                      }
                      return "object" == typeof e
                          ? this.each(function () {
                                Q.set(this, e);
                            })
                          : U(
                                this,
                                function (t) {
                                    var i;
                                    if (s && void 0 === t) return void 0 !== (i = Q.get(s, e)) || void 0 !== (i = te(s, e)) ? i : void 0;
                                    this.each(function () {
                                        Q.set(this, e, t);
                                    });
                                },
                                null,
                                t,
                                arguments.length > 1,
                                null,
                                !0
                            );
                  },
                  removeData: function (e) {
                      return this.each(function () {
                          Q.remove(this, e);
                      });
                  },
              }),
              E.extend({
                  queue: function (e, t, i) {
                      var n;
                      if (e) return (t = (t || "fx") + "queue"), (n = Z.get(e, t)), i && (!n || Array.isArray(i) ? (n = Z.access(e, t, E.makeArray(i))) : n.push(i)), n || [];
                  },
                  dequeue: function (e, t) {
                      t = t || "fx";
                      var i = E.queue(e, t),
                          n = i.length,
                          r = i.shift(),
                          s = E._queueHooks(e, t);
                      "inprogress" === r && ((r = i.shift()), n--),
                          r &&
                              ("fx" === t && i.unshift("inprogress"),
                              delete s.stop,
                              r.call(
                                  e,
                                  function () {
                                      E.dequeue(e, t);
                                  },
                                  s
                              )),
                          !n && s && s.empty.fire();
                  },
                  _queueHooks: function (e, t) {
                      var i = t + "queueHooks";
                      return (
                          Z.get(e, i) ||
                          Z.access(e, i, {
                              empty: E.Callbacks("once memory").add(function () {
                                  Z.remove(e, [t + "queue", i]);
                              }),
                          })
                      );
                  },
              }),
              E.fn.extend({
                  queue: function (e, t) {
                      var i = 2;
                      return (
                          "string" != typeof e && ((t = e), (e = "fx"), i--),
                          arguments.length < i
                              ? E.queue(this[0], e)
                              : void 0 === t
                              ? this
                              : this.each(function () {
                                    var i = E.queue(this, e, t);
                                    E._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && E.dequeue(this, e);
                                })
                      );
                  },
                  dequeue: function (e) {
                      return this.each(function () {
                          E.dequeue(this, e);
                      });
                  },
                  clearQueue: function (e) {
                      return this.queue(e || "fx", []);
                  },
                  promise: function (e, t) {
                      var i,
                          n = 1,
                          r = E.Deferred(),
                          s = this,
                          a = this.length,
                          o = function () {
                              --n || r.resolveWith(s, [s]);
                          };
                      for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (i = Z.get(s[a], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
                      return o(), r.promise(t);
                  },
              });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
              ne = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
              re = ["Top", "Right", "Bottom", "Left"],
              se = b.documentElement,
              ae = function (e) {
                  return E.contains(e.ownerDocument, e);
              },
              oe = { composed: !0 };
          se.getRootNode &&
              (ae = function (e) {
                  return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
              });
          var le = function (e, t) {
              return "none" === (e = t || e).style.display || ("" === e.style.display && ae(e) && "none" === E.css(e, "display"));
          };
          function ue(e, t, i, n) {
              var r,
                  s,
                  a = 20,
                  o = n
                      ? function () {
                            return n.cur();
                        }
                      : function () {
                            return E.css(e, t, "");
                        },
                  l = o(),
                  u = (i && i[3]) || (E.cssNumber[t] ? "" : "px"),
                  c = e.nodeType && (E.cssNumber[t] || ("px" !== u && +l)) && ne.exec(E.css(e, t));
              if (c && c[3] !== u) {
                  for (l /= 2, u = u || c[3], c = +l || 1; a--; ) E.style(e, t, c + u), (1 - s) * (1 - (s = o() / l || 0.5)) <= 0 && (a = 0), (c /= s);
                  (c *= 2), E.style(e, t, c + u), (i = i || []);
              }
              return i && ((c = +c || +l || 0), (r = i[1] ? c + (i[1] + 1) * i[2] : +i[2]), n && ((n.unit = u), (n.start = c), (n.end = r))), r;
          }
          var ce = {};
          function de(e) {
              var t,
                  i = e.ownerDocument,
                  n = e.nodeName,
                  r = ce[n];
              return r || ((t = i.body.appendChild(i.createElement(n))), (r = E.css(t, "display")), t.parentNode.removeChild(t), "none" === r && (r = "block"), (ce[n] = r), r);
          }
          function pe(e, t) {
              for (var i, n, r = [], s = 0, a = e.length; s < a; s++)
                  (n = e[s]).style &&
                      ((i = n.style.display),
                      t ? ("none" === i && ((r[s] = Z.get(n, "display") || null), r[s] || (n.style.display = "")), "" === n.style.display && le(n) && (r[s] = de(n))) : "none" !== i && ((r[s] = "none"), Z.set(n, "display", i)));
              for (s = 0; s < a; s++) null != r[s] && (e[s].style.display = r[s]);
              return e;
          }
          E.fn.extend({
              show: function () {
                  return pe(this, !0);
              },
              hide: function () {
                  return pe(this);
              },
              toggle: function (e) {
                  return "boolean" == typeof e
                      ? e
                          ? this.show()
                          : this.hide()
                      : this.each(function () {
                            le(this) ? E(this).show() : E(this).hide();
                        });
              },
          });
          var he,
              fe,
              me = /^(?:checkbox|radio)$/i,
              ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
              ge = /^$|^module$|\/(?:java|ecma)script/i;
          (he = b.createDocumentFragment().appendChild(b.createElement("div"))),
              (fe = b.createElement("input")).setAttribute("type", "radio"),
              fe.setAttribute("checked", "checked"),
              fe.setAttribute("name", "t"),
              he.appendChild(fe),
              (v.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (he.innerHTML = "<textarea>x</textarea>"),
              (v.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
              (he.innerHTML = "<option></option>"),
              (v.option = !!he.lastChild);
          var ye = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
          function be(e, t) {
              var i;
              return (i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && A(e, t)) ? E.merge([e], i) : i;
          }
          function we(e, t) {
              for (var i = 0, n = e.length; i < n; i++) Z.set(e[i], "globalEval", !t || Z.get(t[i], "globalEval"));
          }
          (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead), (ye.th = ye.td), v.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
          var xe = /<|&#?\w+;/;
          function Se(e, t, i, n, r) {
              for (var s, a, o, l, u, c, d = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
                  if ((s = e[h]) || 0 === s)
                      if ("object" === S(s)) E.merge(p, s.nodeType ? [s] : s);
                      else if (xe.test(s)) {
                          for (a = a || d.appendChild(t.createElement("div")), o = (ve.exec(s) || ["", ""])[1].toLowerCase(), l = ye[o] || ye._default, a.innerHTML = l[1] + E.htmlPrefilter(s) + l[2], c = l[0]; c--; ) a = a.lastChild;
                          E.merge(p, a.childNodes), ((a = d.firstChild).textContent = "");
                      } else p.push(t.createTextNode(s));
              for (d.textContent = "", h = 0; (s = p[h++]); )
                  if (n && E.inArray(s, n) > -1) r && r.push(s);
                  else if (((u = ae(s)), (a = be(d.appendChild(s), "script")), u && we(a), i)) for (c = 0; (s = a[c++]); ) ge.test(s.type || "") && i.push(s);
              return d;
          }
          var Ee = /^([^.]*)(?:\.(.+)|)/;
          function Ce() {
              return !0;
          }
          function Te() {
              return !1;
          }
          function ke(e, t) {
              return (
                  (e ===
                      (function () {
                          try {
                              return b.activeElement;
                          } catch (e) {}
                      })()) ==
                  ("focus" === t)
              );
          }
          function Me(e, t, i, n, r, s) {
              var a, o;
              if ("object" == typeof t) {
                  for (o in ("string" != typeof i && ((n = n || i), (i = void 0)), t)) Me(e, o, i, n, t[o], s);
                  return e;
              }
              if ((null == n && null == r ? ((r = i), (n = i = void 0)) : null == r && ("string" == typeof i ? ((r = n), (n = void 0)) : ((r = n), (n = i), (i = void 0))), !1 === r)) r = Te;
              else if (!r) return e;
              return (
                  1 === s &&
                      ((a = r),
                      ((r = function (e) {
                          return E().off(e), a.apply(this, arguments);
                      }).guid = a.guid || (a.guid = E.guid++))),
                  e.each(function () {
                      E.event.add(this, t, r, n, i);
                  })
              );
          }
          function Pe(e, t, i) {
              i
                  ? (Z.set(e, t, !1),
                    E.event.add(e, t, {
                        namespace: !1,
                        handler: function (e) {
                            var n,
                                r,
                                s = Z.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (s.length) (E.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (((s = o.call(arguments)), Z.set(this, t, s), (n = i(this, t)), this[t](), s !== (r = Z.get(this, t)) || n ? Z.set(this, t, !1) : (r = {}), s !== r))
                                    return e.stopImmediatePropagation(), e.preventDefault(), r && r.value;
                            } else s.length && (Z.set(this, t, { value: E.event.trigger(E.extend(s[0], E.Event.prototype), s.slice(1), this) }), e.stopImmediatePropagation());
                        },
                    }))
                  : void 0 === Z.get(e, t) && E.event.add(e, t, Ce);
          }
          (E.event = {
              global: {},
              add: function (e, t, i, n, r) {
                  var s,
                      a,
                      o,
                      l,
                      u,
                      c,
                      d,
                      p,
                      h,
                      f,
                      m,
                      v = Z.get(e);
                  if (Y(e))
                      for (
                          i.handler && ((i = (s = i).handler), (r = s.selector)),
                              r && E.find.matchesSelector(se, r),
                              i.guid || (i.guid = E.guid++),
                              (l = v.events) || (l = v.events = Object.create(null)),
                              (a = v.handle) ||
                                  (a = v.handle = function (t) {
                                      return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0;
                                  }),
                              u = (t = (t || "").match(j) || [""]).length;
                          u--;

                      )
                          (h = m = (o = Ee.exec(t[u]) || [])[1]),
                              (f = (o[2] || "").split(".").sort()),
                              h &&
                                  ((d = E.event.special[h] || {}),
                                  (h = (r ? d.delegateType : d.bindType) || h),
                                  (d = E.event.special[h] || {}),
                                  (c = E.extend({ type: h, origType: m, data: n, handler: i, guid: i.guid, selector: r, needsContext: r && E.expr.match.needsContext.test(r), namespace: f.join(".") }, s)),
                                  (p = l[h]) || (((p = l[h] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, n, f, a)) || (e.addEventListener && e.addEventListener(h, a))),
                                  d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)),
                                  r ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                                  (E.event.global[h] = !0));
              },
              remove: function (e, t, i, n, r) {
                  var s,
                      a,
                      o,
                      l,
                      u,
                      c,
                      d,
                      p,
                      h,
                      f,
                      m,
                      v = Z.hasData(e) && Z.get(e);
                  if (v && (l = v.events)) {
                      for (u = (t = (t || "").match(j) || [""]).length; u--; )
                          if (((h = m = (o = Ee.exec(t[u]) || [])[1]), (f = (o[2] || "").split(".").sort()), h)) {
                              for (d = E.event.special[h] || {}, p = l[(h = (n ? d.delegateType : d.bindType) || h)] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = p.length; s--; )
                                  (c = p[s]),
                                      (!r && m !== c.origType) ||
                                          (i && i.guid !== c.guid) ||
                                          (o && !o.test(c.namespace)) ||
                                          (n && n !== c.selector && ("**" !== n || !c.selector)) ||
                                          (p.splice(s, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                              a && !p.length && ((d.teardown && !1 !== d.teardown.call(e, f, v.handle)) || E.removeEvent(e, h, v.handle), delete l[h]);
                          } else for (h in l) E.event.remove(e, h + t[u], i, n, !0);
                      E.isEmptyObject(l) && Z.remove(e, "handle events");
                  }
              },
              dispatch: function (e) {
                  var t,
                      i,
                      n,
                      r,
                      s,
                      a,
                      o = new Array(arguments.length),
                      l = E.event.fix(e),
                      u = (Z.get(this, "events") || Object.create(null))[l.type] || [],
                      c = E.event.special[l.type] || {};
                  for (o[0] = l, t = 1; t < arguments.length; t++) o[t] = arguments[t];
                  if (((l.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, l))) {
                      for (a = E.event.handlers.call(this, l, u), t = 0; (r = a[t++]) && !l.isPropagationStopped(); )
                          for (l.currentTarget = r.elem, i = 0; (s = r.handlers[i++]) && !l.isImmediatePropagationStopped(); )
                              (l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace)) ||
                                  ((l.handleObj = s), (l.data = s.data), void 0 !== (n = ((E.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, o)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                      return c.postDispatch && c.postDispatch.call(this, l), l.result;
                  }
              },
              handlers: function (e, t) {
                  var i,
                      n,
                      r,
                      s,
                      a,
                      o = [],
                      l = t.delegateCount,
                      u = e.target;
                  if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                      for (; u !== this; u = u.parentNode || this)
                          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                              for (s = [], a = {}, i = 0; i < l; i++) void 0 === a[(r = (n = t[i]).selector + " ")] && (a[r] = n.needsContext ? E(r, this).index(u) > -1 : E.find(r, this, null, [u]).length), a[r] && s.push(n);
                              s.length && o.push({ elem: u, handlers: s });
                          }
                  return (u = this), l < t.length && o.push({ elem: u, handlers: t.slice(l) }), o;
              },
              addProp: function (e, t) {
                  Object.defineProperty(E.Event.prototype, e, {
                      enumerable: !0,
                      configurable: !0,
                      get: g(t)
                          ? function () {
                                if (this.originalEvent) return t(this.originalEvent);
                            }
                          : function () {
                                if (this.originalEvent) return this.originalEvent[e];
                            },
                      set: function (t) {
                          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                      },
                  });
              },
              fix: function (e) {
                  return e[E.expando] ? e : new E.Event(e);
              },
              special: {
                  load: { noBubble: !0 },
                  click: {
                      setup: function (e) {
                          var t = this || e;
                          return me.test(t.type) && t.click && A(t, "input") && Pe(t, "click", Ce), !1;
                      },
                      trigger: function (e) {
                          var t = this || e;
                          return me.test(t.type) && t.click && A(t, "input") && Pe(t, "click"), !0;
                      },
                      _default: function (e) {
                          var t = e.target;
                          return (me.test(t.type) && t.click && A(t, "input") && Z.get(t, "click")) || A(t, "a");
                      },
                  },
                  beforeunload: {
                      postDispatch: function (e) {
                          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                      },
                  },
              },
          }),
              (E.removeEvent = function (e, t, i) {
                  e.removeEventListener && e.removeEventListener(t, i);
              }),
              (E.Event = function (e, t) {
                  if (!(this instanceof E.Event)) return new E.Event(e, t);
                  e && e.type
                      ? ((this.originalEvent = e),
                        (this.type = e.type),
                        (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ce : Te),
                        (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                        (this.currentTarget = e.currentTarget),
                        (this.relatedTarget = e.relatedTarget))
                      : (this.type = e),
                      t && E.extend(this, t),
                      (this.timeStamp = (e && e.timeStamp) || Date.now()),
                      (this[E.expando] = !0);
              }),
              (E.Event.prototype = {
                  constructor: E.Event,
                  isDefaultPrevented: Te,
                  isPropagationStopped: Te,
                  isImmediatePropagationStopped: Te,
                  isSimulated: !1,
                  preventDefault: function () {
                      var e = this.originalEvent;
                      (this.isDefaultPrevented = Ce), e && !this.isSimulated && e.preventDefault();
                  },
                  stopPropagation: function () {
                      var e = this.originalEvent;
                      (this.isPropagationStopped = Ce), e && !this.isSimulated && e.stopPropagation();
                  },
                  stopImmediatePropagation: function () {
                      var e = this.originalEvent;
                      (this.isImmediatePropagationStopped = Ce), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                  },
              }),
              E.each(
                  {
                      altKey: !0,
                      bubbles: !0,
                      cancelable: !0,
                      changedTouches: !0,
                      ctrlKey: !0,
                      detail: !0,
                      eventPhase: !0,
                      metaKey: !0,
                      pageX: !0,
                      pageY: !0,
                      shiftKey: !0,
                      view: !0,
                      char: !0,
                      code: !0,
                      charCode: !0,
                      key: !0,
                      keyCode: !0,
                      button: !0,
                      buttons: !0,
                      clientX: !0,
                      clientY: !0,
                      offsetX: !0,
                      offsetY: !0,
                      pointerId: !0,
                      pointerType: !0,
                      screenX: !0,
                      screenY: !0,
                      targetTouches: !0,
                      toElement: !0,
                      touches: !0,
                      which: !0,
                  },
                  E.event.addProp
              ),
              E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                  E.event.special[e] = {
                      setup: function () {
                          return Pe(this, e, ke), !1;
                      },
                      trigger: function () {
                          return Pe(this, e), !0;
                      },
                      _default: function () {
                          return !0;
                      },
                      delegateType: t,
                  };
              }),
              E.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                  E.event.special[e] = {
                      delegateType: t,
                      bindType: t,
                      handle: function (e) {
                          var i,
                              n = this,
                              r = e.relatedTarget,
                              s = e.handleObj;
                          return (r && (r === n || E.contains(n, r))) || ((e.type = s.origType), (i = s.handler.apply(this, arguments)), (e.type = t)), i;
                      },
                  };
              }),
              E.fn.extend({
                  on: function (e, t, i, n) {
                      return Me(this, e, t, i, n);
                  },
                  one: function (e, t, i, n) {
                      return Me(this, e, t, i, n, 1);
                  },
                  off: function (e, t, i) {
                      var n, r;
                      if (e && e.preventDefault && e.handleObj) return (n = e.handleObj), E(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                      if ("object" == typeof e) {
                          for (r in e) this.off(r, t, e[r]);
                          return this;
                      }
                      return (
                          (!1 !== t && "function" != typeof t) || ((i = t), (t = void 0)),
                          !1 === i && (i = Te),
                          this.each(function () {
                              E.event.remove(this, e, i, t);
                          })
                      );
                  },
              });
          var Ae = /<script|<style|<link/i,
              $e = /checked\s*(?:[^=]|=\s*.checked.)/i,
              De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Oe(e, t) {
              return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0]) || e;
          }
          function Le(e) {
              return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
          }
          function Ne(e) {
              return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
          }
          function _e(e, t) {
              var i, n, r, s, a, o;
              if (1 === t.nodeType) {
                  if (Z.hasData(e) && (o = Z.get(e).events)) for (r in (Z.remove(t, "handle events"), o)) for (i = 0, n = o[r].length; i < n; i++) E.event.add(t, r, o[r][i]);
                  Q.hasData(e) && ((s = Q.access(e)), (a = E.extend({}, s)), Q.set(t, a));
              }
          }
          function ze(e, t) {
              var i = t.nodeName.toLowerCase();
              "input" === i && me.test(e.type) ? (t.checked = e.checked) : ("input" !== i && "textarea" !== i) || (t.defaultValue = e.defaultValue);
          }
          function je(e, t, i, n) {
              t = l(t);
              var r,
                  s,
                  a,
                  o,
                  u,
                  c,
                  d = 0,
                  p = e.length,
                  h = p - 1,
                  f = t[0],
                  m = g(f);
              if (m || (p > 1 && "string" == typeof f && !v.checkClone && $e.test(f)))
                  return e.each(function (r) {
                      var s = e.eq(r);
                      m && (t[0] = f.call(this, r, s.html())), je(s, t, i, n);
                  });
              if (p && ((s = (r = Se(t, e[0].ownerDocument, !1, e, n)).firstChild), 1 === r.childNodes.length && (r = s), s || n)) {
                  for (o = (a = E.map(be(r, "script"), Le)).length; d < p; d++) (u = r), d !== h && ((u = E.clone(u, !0, !0)), o && E.merge(a, be(u, "script"))), i.call(e[d], u, d);
                  if (o)
                      for (c = a[a.length - 1].ownerDocument, E.map(a, Ne), d = 0; d < o; d++)
                          (u = a[d]),
                              ge.test(u.type || "") &&
                                  !Z.access(u, "globalEval") &&
                                  E.contains(c, u) &&
                                  (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, c) : x(u.textContent.replace(De, ""), u, c));
              }
              return e;
          }
          function Ie(e, t, i) {
              for (var n, r = t ? E.filter(t, e) : e, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || E.cleanData(be(n)), n.parentNode && (i && ae(n) && we(be(n, "script")), n.parentNode.removeChild(n));
              return e;
          }
          E.extend({
              htmlPrefilter: function (e) {
                  return e;
              },
              clone: function (e, t, i) {
                  var n,
                      r,
                      s,
                      a,
                      o = e.cloneNode(!0),
                      l = ae(e);
                  if (!(v.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || E.isXMLDoc(e))) for (a = be(o), n = 0, r = (s = be(e)).length; n < r; n++) ze(s[n], a[n]);
                  if (t)
                      if (i) for (s = s || be(e), a = a || be(o), n = 0, r = s.length; n < r; n++) _e(s[n], a[n]);
                      else _e(e, o);
                  return (a = be(o, "script")).length > 0 && we(a, !l && be(e, "script")), o;
              },
              cleanData: function (e) {
                  for (var t, i, n, r = E.event.special, s = 0; void 0 !== (i = e[s]); s++)
                      if (Y(i)) {
                          if ((t = i[Z.expando])) {
                              if (t.events) for (n in t.events) r[n] ? E.event.remove(i, n) : E.removeEvent(i, n, t.handle);
                              i[Z.expando] = void 0;
                          }
                          i[Q.expando] && (i[Q.expando] = void 0);
                      }
              },
          }),
              E.fn.extend({
                  detach: function (e) {
                      return Ie(this, e, !0);
                  },
                  remove: function (e) {
                      return Ie(this, e);
                  },
                  text: function (e) {
                      return U(
                          this,
                          function (e) {
                              return void 0 === e
                                  ? E.text(this)
                                  : this.empty().each(function () {
                                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                    });
                          },
                          null,
                          e,
                          arguments.length
                      );
                  },
                  append: function () {
                      return je(this, arguments, function (e) {
                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Oe(this, e).appendChild(e);
                      });
                  },
                  prepend: function () {
                      return je(this, arguments, function (e) {
                          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                              var t = Oe(this, e);
                              t.insertBefore(e, t.firstChild);
                          }
                      });
                  },
                  before: function () {
                      return je(this, arguments, function (e) {
                          this.parentNode && this.parentNode.insertBefore(e, this);
                      });
                  },
                  after: function () {
                      return je(this, arguments, function (e) {
                          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                      });
                  },
                  empty: function () {
                      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(be(e, !1)), (e.textContent = ""));
                      return this;
                  },
                  clone: function (e, t) {
                      return (
                          (e = null != e && e),
                          (t = null == t ? e : t),
                          this.map(function () {
                              return E.clone(this, e, t);
                          })
                      );
                  },
                  html: function (e) {
                      return U(
                          this,
                          function (e) {
                              var t = this[0] || {},
                                  i = 0,
                                  n = this.length;
                              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                              if ("string" == typeof e && !Ae.test(e) && !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                                  e = E.htmlPrefilter(e);
                                  try {
                                      for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (E.cleanData(be(t, !1)), (t.innerHTML = e));
                                      t = 0;
                                  } catch (e) {}
                              }
                              t && this.empty().append(e);
                          },
                          null,
                          e,
                          arguments.length
                      );
                  },
                  replaceWith: function () {
                      var e = [];
                      return je(
                          this,
                          arguments,
                          function (t) {
                              var i = this.parentNode;
                              E.inArray(this, e) < 0 && (E.cleanData(be(this)), i && i.replaceChild(t, this));
                          },
                          e
                      );
                  },
              }),
              E.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                  E.fn[e] = function (e) {
                      for (var i, n = [], r = E(e), s = r.length - 1, a = 0; a <= s; a++) (i = a === s ? this : this.clone(!0)), E(r[a])[t](i), u.apply(n, i.get());
                      return this.pushStack(n);
                  };
              });
          var He = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
              qe = function (e) {
                  var t = e.ownerDocument.defaultView;
                  return (t && t.opener) || (t = i), t.getComputedStyle(e);
              },
              Re = function (e, t, i) {
                  var n,
                      r,
                      s = {};
                  for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
                  for (r in ((n = i.call(e)), t)) e.style[r] = s[r];
                  return n;
              },
              Ve = new RegExp(re.join("|"), "i");
          function Be(e, t, i) {
              var n,
                  r,
                  s,
                  a,
                  o = e.style;
              return (
                  (i = i || qe(e)) &&
                      ("" !== (a = i.getPropertyValue(t) || i[t]) || ae(e) || (a = E.style(e, t)),
                      !v.pixelBoxStyles() && He.test(a) && Ve.test(t) && ((n = o.width), (r = o.minWidth), (s = o.maxWidth), (o.minWidth = o.maxWidth = o.width = a), (a = i.width), (o.width = n), (o.minWidth = r), (o.maxWidth = s))),
                  void 0 !== a ? a + "" : a
              );
          }
          function Ue(e, t) {
              return {
                  get: function () {
                      if (!e()) return (this.get = t).apply(this, arguments);
                      delete this.get;
                  },
              };
          }
          !(function () {
              function e() {
                  if (c) {
                      (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                          (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                          se.appendChild(u).appendChild(c);
                      var e = i.getComputedStyle(c);
                      (n = "1%" !== e.top),
                          (l = 12 === t(e.marginLeft)),
                          (c.style.right = "60%"),
                          (a = 36 === t(e.right)),
                          (r = 36 === t(e.width)),
                          (c.style.position = "absolute"),
                          (s = 12 === t(c.offsetWidth / 3)),
                          se.removeChild(u),
                          (c = null);
                  }
              }
              function t(e) {
                  return Math.round(parseFloat(e));
              }
              var n,
                  r,
                  s,
                  a,
                  o,
                  l,
                  u = b.createElement("div"),
                  c = b.createElement("div");
              c.style &&
                  ((c.style.backgroundClip = "content-box"),
                  (c.cloneNode(!0).style.backgroundClip = ""),
                  (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
                  E.extend(v, {
                      boxSizingReliable: function () {
                          return e(), r;
                      },
                      pixelBoxStyles: function () {
                          return e(), a;
                      },
                      pixelPosition: function () {
                          return e(), n;
                      },
                      reliableMarginLeft: function () {
                          return e(), l;
                      },
                      scrollboxSize: function () {
                          return e(), s;
                      },
                      reliableTrDimensions: function () {
                          var e, t, n, r;
                          return (
                              null == o &&
                                  ((e = b.createElement("table")),
                                  (t = b.createElement("tr")),
                                  (n = b.createElement("div")),
                                  (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                                  (t.style.cssText = "border:1px solid"),
                                  (t.style.height = "1px"),
                                  (n.style.height = "9px"),
                                  (n.style.display = "block"),
                                  se.appendChild(e).appendChild(t).appendChild(n),
                                  (r = i.getComputedStyle(t)),
                                  (o = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight),
                                  se.removeChild(e)),
                              o
                          );
                      },
                  }));
          })();
          var Fe = ["Webkit", "Moz", "ms"],
              Ge = b.createElement("div").style,
              We = {};
          function Xe(e) {
              var t = E.cssProps[e] || We[e];
              return (
                  t ||
                  (e in Ge
                      ? e
                      : (We[e] =
                            (function (e) {
                                for (var t = e[0].toUpperCase() + e.slice(1), i = Fe.length; i--; ) if ((e = Fe[i] + t) in Ge) return e;
                            })(e) || e))
              );
          }
          var Ye = /^(none|table(?!-c[ea]).+)/,
              Ke = /^--/,
              Ze = { position: "absolute", visibility: "hidden", display: "block" },
              Qe = { letterSpacing: "0", fontWeight: "400" };
          function Je(e, t, i) {
              var n = ne.exec(t);
              return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
          }
          function et(e, t, i, n, r, s) {
              var a = "width" === t ? 1 : 0,
                  o = 0,
                  l = 0;
              if (i === (n ? "border" : "content")) return 0;
              for (; a < 4; a += 2)
                  "margin" === i && (l += E.css(e, i + re[a], !0, r)),
                      n
                          ? ("content" === i && (l -= E.css(e, "padding" + re[a], !0, r)), "margin" !== i && (l -= E.css(e, "border" + re[a] + "Width", !0, r)))
                          : ((l += E.css(e, "padding" + re[a], !0, r)), "padding" !== i ? (l += E.css(e, "border" + re[a] + "Width", !0, r)) : (o += E.css(e, "border" + re[a] + "Width", !0, r)));
              return !n && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - o - 0.5)) || 0), l;
          }
          function tt(e, t, i) {
              var n = qe(e),
                  r = (!v.boxSizingReliable() || i) && "border-box" === E.css(e, "boxSizing", !1, n),
                  s = r,
                  a = Be(e, t, n),
                  o = "offset" + t[0].toUpperCase() + t.slice(1);
              if (He.test(a)) {
                  if (!i) return a;
                  a = "auto";
              }
              return (
                  ((!v.boxSizingReliable() && r) || (!v.reliableTrDimensions() && A(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === E.css(e, "display", !1, n))) &&
                      e.getClientRects().length &&
                      ((r = "border-box" === E.css(e, "boxSizing", !1, n)), (s = o in e) && (a = e[o])),
                  (a = parseFloat(a) || 0) + et(e, t, i || (r ? "border" : "content"), s, n, a) + "px"
              );
          }
          function it(e, t, i, n, r) {
              return new it.prototype.init(e, t, i, n, r);
          }
          E.extend({
              cssHooks: {
                  opacity: {
                      get: function (e, t) {
                          if (t) {
                              var i = Be(e, "opacity");
                              return "" === i ? "1" : i;
                          }
                      },
                  },
              },
              cssNumber: {
                  animationIterationCount: !0,
                  columnCount: !0,
                  fillOpacity: !0,
                  flexGrow: !0,
                  flexShrink: !0,
                  fontWeight: !0,
                  gridArea: !0,
                  gridColumn: !0,
                  gridColumnEnd: !0,
                  gridColumnStart: !0,
                  gridRow: !0,
                  gridRowEnd: !0,
                  gridRowStart: !0,
                  lineHeight: !0,
                  opacity: !0,
                  order: !0,
                  orphans: !0,
                  widows: !0,
                  zIndex: !0,
                  zoom: !0,
              },
              cssProps: {},
              style: function (e, t, i, n) {
                  if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                      var r,
                          s,
                          a,
                          o = X(t),
                          l = Ke.test(t),
                          u = e.style;
                      if ((l || (t = Xe(o)), (a = E.cssHooks[t] || E.cssHooks[o]), void 0 === i)) return a && "get" in a && void 0 !== (r = a.get(e, !1, n)) ? r : u[t];
                      "string" === (s = typeof i) && (r = ne.exec(i)) && r[1] && ((i = ue(e, t, r)), (s = "number")),
                          null != i &&
                              i == i &&
                              ("number" !== s || l || (i += (r && r[3]) || (E.cssNumber[o] ? "" : "px")),
                              v.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                              (a && "set" in a && void 0 === (i = a.set(e, i, n))) || (l ? u.setProperty(t, i) : (u[t] = i)));
                  }
              },
              css: function (e, t, i, n) {
                  var r,
                      s,
                      a,
                      o = X(t);
                  return (
                      Ke.test(t) || (t = Xe(o)),
                      (a = E.cssHooks[t] || E.cssHooks[o]) && "get" in a && (r = a.get(e, !0, i)),
                      void 0 === r && (r = Be(e, t, n)),
                      "normal" === r && t in Qe && (r = Qe[t]),
                      "" === i || i ? ((s = parseFloat(r)), !0 === i || isFinite(s) ? s || 0 : r) : r
                  );
              },
          }),
              E.each(["height", "width"], function (e, t) {
                  E.cssHooks[t] = {
                      get: function (e, i, n) {
                          if (i)
                              return !Ye.test(E.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                  ? tt(e, t, n)
                                  : Re(e, Ze, function () {
                                        return tt(e, t, n);
                                    });
                      },
                      set: function (e, i, n) {
                          var r,
                              s = qe(e),
                              a = !v.scrollboxSize() && "absolute" === s.position,
                              o = (a || n) && "border-box" === E.css(e, "boxSizing", !1, s),
                              l = n ? et(e, t, n, o, s) : 0;
                          return (
                              o && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - et(e, t, "border", !1, s) - 0.5)),
                              l && (r = ne.exec(i)) && "px" !== (r[3] || "px") && ((e.style[t] = i), (i = E.css(e, t))),
                              Je(0, i, l)
                          );
                      },
                  };
              }),
              (E.cssHooks.marginLeft = Ue(v.reliableMarginLeft, function (e, t) {
                  if (t)
                      return (
                          (parseFloat(Be(e, "marginLeft")) ||
                              e.getBoundingClientRect().left -
                                  Re(e, { marginLeft: 0 }, function () {
                                      return e.getBoundingClientRect().left;
                                  })) + "px"
                      );
              })),
              E.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                  (E.cssHooks[e + t] = {
                      expand: function (i) {
                          for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[e + re[n] + t] = s[n] || s[n - 2] || s[0];
                          return r;
                      },
                  }),
                      "margin" !== e && (E.cssHooks[e + t].set = Je);
              }),
              E.fn.extend({
                  css: function (e, t) {
                      return U(
                          this,
                          function (e, t, i) {
                              var n,
                                  r,
                                  s = {},
                                  a = 0;
                              if (Array.isArray(t)) {
                                  for (n = qe(e), r = t.length; a < r; a++) s[t[a]] = E.css(e, t[a], !1, n);
                                  return s;
                              }
                              return void 0 !== i ? E.style(e, t, i) : E.css(e, t);
                          },
                          e,
                          t,
                          arguments.length > 1
                      );
                  },
              }),
              (E.Tween = it),
              (it.prototype = {
                  constructor: it,
                  init: function (e, t, i, n, r, s) {
                      (this.elem = e), (this.prop = i), (this.easing = r || E.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = n), (this.unit = s || (E.cssNumber[i] ? "" : "px"));
                  },
                  cur: function () {
                      var e = it.propHooks[this.prop];
                      return e && e.get ? e.get(this) : it.propHooks._default.get(this);
                  },
                  run: function (e) {
                      var t,
                          i = it.propHooks[this.prop];
                      return (
                          this.options.duration ? (this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                          (this.now = (this.end - this.start) * t + this.start),
                          this.options.step && this.options.step.call(this.elem, this.now, this),
                          i && i.set ? i.set(this) : it.propHooks._default.set(this),
                          this
                      );
                  },
              }),
              (it.prototype.init.prototype = it.prototype),
              (it.propHooks = {
                  _default: {
                      get: function (e) {
                          var t;
                          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                      },
                      set: function (e) {
                          E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!E.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)]) ? (e.elem[e.prop] = e.now) : E.style(e.elem, e.prop, e.now + e.unit);
                      },
                  },
              }),
              (it.propHooks.scrollTop = it.propHooks.scrollLeft = {
                  set: function (e) {
                      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                  },
              }),
              (E.easing = {
                  linear: function (e) {
                      return e;
                  },
                  swing: function (e) {
                      return 0.5 - Math.cos(e * Math.PI) / 2;
                  },
                  _default: "swing",
              }),
              (E.fx = it.prototype.init),
              (E.fx.step = {});
          var nt,
              rt,
              st = /^(?:toggle|show|hide)$/,
              at = /queueHooks$/;
          function ot() {
              rt && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(ot) : i.setTimeout(ot, E.fx.interval), E.fx.tick());
          }
          function lt() {
              return (
                  i.setTimeout(function () {
                      nt = void 0;
                  }),
                  (nt = Date.now())
              );
          }
          function ut(e, t) {
              var i,
                  n = 0,
                  r = { height: e };
              for (t = t ? 1 : 0; n < 4; n += 2 - t) r["margin" + (i = re[n])] = r["padding" + i] = e;
              return t && (r.opacity = r.width = e), r;
          }
          function ct(e, t, i) {
              for (var n, r = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), s = 0, a = r.length; s < a; s++) if ((n = r[s].call(i, t, e))) return n;
          }
          function dt(e, t, i) {
              var n,
                  r,
                  s = 0,
                  a = dt.prefilters.length,
                  o = E.Deferred().always(function () {
                      delete l.elem;
                  }),
                  l = function () {
                      if (r) return !1;
                      for (var t = nt || lt(), i = Math.max(0, u.startTime + u.duration - t), n = 1 - (i / u.duration || 0), s = 0, a = u.tweens.length; s < a; s++) u.tweens[s].run(n);
                      return o.notifyWith(e, [u, n, i]), n < 1 && a ? i : (a || o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u]), !1);
                  },
                  u = o.promise({
                      elem: e,
                      props: E.extend({}, t),
                      opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, i),
                      originalProperties: t,
                      originalOptions: i,
                      startTime: nt || lt(),
                      duration: i.duration,
                      tweens: [],
                      createTween: function (t, i) {
                          var n = E.Tween(e, u.opts, t, i, u.opts.specialEasing[t] || u.opts.easing);
                          return u.tweens.push(n), n;
                      },
                      stop: function (t) {
                          var i = 0,
                              n = t ? u.tweens.length : 0;
                          if (r) return this;
                          for (r = !0; i < n; i++) u.tweens[i].run(1);
                          return t ? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t])) : o.rejectWith(e, [u, t]), this;
                      },
                  }),
                  c = u.props;
              for (
                  !(function (e, t) {
                      var i, n, r, s, a;
                      for (i in e)
                          if (((r = t[(n = X(i))]), (s = e[i]), Array.isArray(s) && ((r = s[1]), (s = e[i] = s[0])), i !== n && ((e[n] = s), delete e[i]), (a = E.cssHooks[n]) && ("expand" in a)))
                              for (i in ((s = a.expand(s)), delete e[n], s)) (i in e) || ((e[i] = s[i]), (t[i] = r));
                          else t[n] = r;
                  })(c, u.opts.specialEasing);
                  s < a;
                  s++
              )
                  if ((n = dt.prefilters[s].call(u, e, c, u.opts))) return g(n.stop) && (E._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
              return (
                  E.map(c, ct, u),
                  g(u.opts.start) && u.opts.start.call(e, u),
                  u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
                  E.fx.timer(E.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
                  u
              );
          }
          (E.Animation = E.extend(dt, {
              tweeners: {
                  "*": [
                      function (e, t) {
                          var i = this.createTween(e, t);
                          return ue(i.elem, e, ne.exec(t), i), i;
                      },
                  ],
              },
              tweener: function (e, t) {
                  g(e) ? ((t = e), (e = ["*"])) : (e = e.match(j));
                  for (var i, n = 0, r = e.length; n < r; n++) (i = e[n]), (dt.tweeners[i] = dt.tweeners[i] || []), dt.tweeners[i].unshift(t);
              },
              prefilters: [
                  function (e, t, i) {
                      var n,
                          r,
                          s,
                          a,
                          o,
                          l,
                          u,
                          c,
                          d = "width" in t || "height" in t,
                          p = this,
                          h = {},
                          f = e.style,
                          m = e.nodeType && le(e),
                          v = Z.get(e, "fxshow");
                      for (n in (i.queue ||
                          (null == (a = E._queueHooks(e, "fx")).unqueued &&
                              ((a.unqueued = 0),
                              (o = a.empty.fire),
                              (a.empty.fire = function () {
                                  a.unqueued || o();
                              })),
                          a.unqueued++,
                          p.always(function () {
                              p.always(function () {
                                  a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
                              });
                          })),
                      t))
                          if (((r = t[n]), st.test(r))) {
                              if ((delete t[n], (s = s || "toggle" === r), r === (m ? "hide" : "show"))) {
                                  if ("show" !== r || !v || void 0 === v[n]) continue;
                                  m = !0;
                              }
                              h[n] = (v && v[n]) || E.style(e, n);
                          }
                      if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
                          for (n in (d &&
                              1 === e.nodeType &&
                              ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
                              null == (u = v && v.display) && (u = Z.get(e, "display")),
                              "none" === (c = E.css(e, "display")) && (u ? (c = u) : (pe([e], !0), (u = e.style.display || u), (c = E.css(e, "display")), pe([e]))),
                              ("inline" === c || ("inline-block" === c && null != u)) &&
                                  "none" === E.css(e, "float") &&
                                  (l ||
                                      (p.done(function () {
                                          f.display = u;
                                      }),
                                      null == u && ((c = f.display), (u = "none" === c ? "" : c))),
                                  (f.display = "inline-block"))),
                          i.overflow &&
                              ((f.overflow = "hidden"),
                              p.always(function () {
                                  (f.overflow = i.overflow[0]), (f.overflowX = i.overflow[1]), (f.overflowY = i.overflow[2]);
                              })),
                          (l = !1),
                          h))
                              l ||
                                  (v ? "hidden" in v && (m = v.hidden) : (v = Z.access(e, "fxshow", { display: u })),
                                  s && (v.hidden = !m),
                                  m && pe([e], !0),
                                  p.done(function () {
                                      for (n in (m || pe([e]), Z.remove(e, "fxshow"), h)) E.style(e, n, h[n]);
                                  })),
                                  (l = ct(m ? v[n] : 0, n, p)),
                                  n in v || ((v[n] = l.start), m && ((l.end = l.start), (l.start = 0)));
                  },
              ],
              prefilter: function (e, t) {
                  t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
              },
          })),
              (E.speed = function (e, t, i) {
                  var n = e && "object" == typeof e ? E.extend({}, e) : { complete: i || (!i && t) || (g(e) && e), duration: e, easing: (i && t) || (t && !g(t) && t) };
                  return (
                      E.fx.off ? (n.duration = 0) : "number" != typeof n.duration && (n.duration in E.fx.speeds ? (n.duration = E.fx.speeds[n.duration]) : (n.duration = E.fx.speeds._default)),
                      (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
                      (n.old = n.complete),
                      (n.complete = function () {
                          g(n.old) && n.old.call(this), n.queue && E.dequeue(this, n.queue);
                      }),
                      n
                  );
              }),
              E.fn.extend({
                  fadeTo: function (e, t, i, n) {
                      return this.filter(le).css("opacity", 0).show().end().animate({ opacity: t }, e, i, n);
                  },
                  animate: function (e, t, i, n) {
                      var r = E.isEmptyObject(e),
                          s = E.speed(t, i, n),
                          a = function () {
                              var t = dt(this, E.extend({}, e), s);
                              (r || Z.get(this, "finish")) && t.stop(!0);
                          };
                      return (a.finish = a), r || !1 === s.queue ? this.each(a) : this.queue(s.queue, a);
                  },
                  stop: function (e, t, i) {
                      var n = function (e) {
                          var t = e.stop;
                          delete e.stop, t(i);
                      };
                      return (
                          "string" != typeof e && ((i = t), (t = e), (e = void 0)),
                          t && this.queue(e || "fx", []),
                          this.each(function () {
                              var t = !0,
                                  r = null != e && e + "queueHooks",
                                  s = E.timers,
                                  a = Z.get(this);
                              if (r) a[r] && a[r].stop && n(a[r]);
                              else for (r in a) a[r] && a[r].stop && at.test(r) && n(a[r]);
                              for (r = s.length; r--; ) s[r].elem !== this || (null != e && s[r].queue !== e) || (s[r].anim.stop(i), (t = !1), s.splice(r, 1));
                              (!t && i) || E.dequeue(this, e);
                          })
                      );
                  },
                  finish: function (e) {
                      return (
                          !1 !== e && (e = e || "fx"),
                          this.each(function () {
                              var t,
                                  i = Z.get(this),
                                  n = i[e + "queue"],
                                  r = i[e + "queueHooks"],
                                  s = E.timers,
                                  a = n ? n.length : 0;
                              for (i.finish = !0, E.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--; ) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                              for (t = 0; t < a; t++) n[t] && n[t].finish && n[t].finish.call(this);
                              delete i.finish;
                          })
                      );
                  },
              }),
              E.each(["toggle", "show", "hide"], function (e, t) {
                  var i = E.fn[t];
                  E.fn[t] = function (e, n, r) {
                      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ut(t, !0), e, n, r);
                  };
              }),
              E.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                  E.fn[e] = function (e, i, n) {
                      return this.animate(t, e, i, n);
                  };
              }),
              (E.timers = []),
              (E.fx.tick = function () {
                  var e,
                      t = 0,
                      i = E.timers;
                  for (nt = Date.now(); t < i.length; t++) (e = i[t])() || i[t] !== e || i.splice(t--, 1);
                  i.length || E.fx.stop(), (nt = void 0);
              }),
              (E.fx.timer = function (e) {
                  E.timers.push(e), E.fx.start();
              }),
              (E.fx.interval = 13),
              (E.fx.start = function () {
                  rt || ((rt = !0), ot());
              }),
              (E.fx.stop = function () {
                  rt = null;
              }),
              (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
              (E.fn.delay = function (e, t) {
                  return (
                      (e = (E.fx && E.fx.speeds[e]) || e),
                      (t = t || "fx"),
                      this.queue(t, function (t, n) {
                          var r = i.setTimeout(t, e);
                          n.stop = function () {
                              i.clearTimeout(r);
                          };
                      })
                  );
              }),
              (function () {
                  var e = b.createElement("input"),
                      t = b.createElement("select").appendChild(b.createElement("option"));
                  (e.type = "checkbox"), (v.checkOn = "" !== e.value), (v.optSelected = t.selected), ((e = b.createElement("input")).value = "t"), (e.type = "radio"), (v.radioValue = "t" === e.value);
              })();
          var pt,
              ht = E.expr.attrHandle;
          E.fn.extend({
              attr: function (e, t) {
                  return U(this, E.attr, e, t, arguments.length > 1);
              },
              removeAttr: function (e) {
                  return this.each(function () {
                      E.removeAttr(this, e);
                  });
              },
          }),
              E.extend({
                  attr: function (e, t, i) {
                      var n,
                          r,
                          s = e.nodeType;
                      if (3 !== s && 8 !== s && 2 !== s)
                          return void 0 === e.getAttribute
                              ? E.prop(e, t, i)
                              : ((1 === s && E.isXMLDoc(e)) || (r = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)),
                                void 0 !== i
                                    ? null === i
                                        ? void E.removeAttr(e, t)
                                        : r && "set" in r && void 0 !== (n = r.set(e, i, t))
                                        ? n
                                        : (e.setAttribute(t, i + ""), i)
                                    : r && "get" in r && null !== (n = r.get(e, t))
                                    ? n
                                    : null == (n = E.find.attr(e, t))
                                    ? void 0
                                    : n);
                  },
                  attrHooks: {
                      type: {
                          set: function (e, t) {
                              if (!v.radioValue && "radio" === t && A(e, "input")) {
                                  var i = e.value;
                                  return e.setAttribute("type", t), i && (e.value = i), t;
                              }
                          },
                      },
                  },
                  removeAttr: function (e, t) {
                      var i,
                          n = 0,
                          r = t && t.match(j);
                      if (r && 1 === e.nodeType) for (; (i = r[n++]); ) e.removeAttribute(i);
                  },
              }),
              (pt = {
                  set: function (e, t, i) {
                      return !1 === t ? E.removeAttr(e, i) : e.setAttribute(i, i), i;
                  },
              }),
              E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
                  var i = ht[t] || E.find.attr;
                  ht[t] = function (e, t, n) {
                      var r,
                          s,
                          a = t.toLowerCase();
                      return n || ((s = ht[a]), (ht[a] = r), (r = null != i(e, t, n) ? a : null), (ht[a] = s)), r;
                  };
              });
          var ft = /^(?:input|select|textarea|button)$/i,
              mt = /^(?:a|area)$/i;
          function vt(e) {
              return (e.match(j) || []).join(" ");
          }
          function gt(e) {
              return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function yt(e) {
              return Array.isArray(e) ? e : ("string" == typeof e && e.match(j)) || [];
          }
          E.fn.extend({
              prop: function (e, t) {
                  return U(this, E.prop, e, t, arguments.length > 1);
              },
              removeProp: function (e) {
                  return this.each(function () {
                      delete this[E.propFix[e] || e];
                  });
              },
          }),
              E.extend({
                  prop: function (e, t, i) {
                      var n,
                          r,
                          s = e.nodeType;
                      if (3 !== s && 8 !== s && 2 !== s)
                          return (
                              (1 === s && E.isXMLDoc(e)) || ((t = E.propFix[t] || t), (r = E.propHooks[t])),
                              void 0 !== i ? (r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e[t] = i)) : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
                          );
                  },
                  propHooks: {
                      tabIndex: {
                          get: function (e) {
                              var t = E.find.attr(e, "tabindex");
                              return t ? parseInt(t, 10) : ft.test(e.nodeName) || (mt.test(e.nodeName) && e.href) ? 0 : -1;
                          },
                      },
                  },
                  propFix: { for: "htmlFor", class: "className" },
              }),
              v.optSelected ||
                  (E.propHooks.selected = {
                      get: function (e) {
                          var t = e.parentNode;
                          return t && t.parentNode && t.parentNode.selectedIndex, null;
                      },
                      set: function (e) {
                          var t = e.parentNode;
                          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                      },
                  }),
              E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                  E.propFix[this.toLowerCase()] = this;
              }),
              E.fn.extend({
                  addClass: function (e) {
                      var t,
                          i,
                          n,
                          r,
                          s,
                          a,
                          o,
                          l = 0;
                      if (g(e))
                          return this.each(function (t) {
                              E(this).addClass(e.call(this, t, gt(this)));
                          });
                      if ((t = yt(e)).length)
                          for (; (i = this[l++]); )
                              if (((r = gt(i)), (n = 1 === i.nodeType && " " + vt(r) + " "))) {
                                  for (a = 0; (s = t[a++]); ) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                                  r !== (o = vt(n)) && i.setAttribute("class", o);
                              }
                      return this;
                  },
                  removeClass: function (e) {
                      var t,
                          i,
                          n,
                          r,
                          s,
                          a,
                          o,
                          l = 0;
                      if (g(e))
                          return this.each(function (t) {
                              E(this).removeClass(e.call(this, t, gt(this)));
                          });
                      if (!arguments.length) return this.attr("class", "");
                      if ((t = yt(e)).length)
                          for (; (i = this[l++]); )
                              if (((r = gt(i)), (n = 1 === i.nodeType && " " + vt(r) + " "))) {
                                  for (a = 0; (s = t[a++]); ) for (; n.indexOf(" " + s + " ") > -1; ) n = n.replace(" " + s + " ", " ");
                                  r !== (o = vt(n)) && i.setAttribute("class", o);
                              }
                      return this;
                  },
                  toggleClass: function (e, t) {
                      var i = typeof e,
                          n = "string" === i || Array.isArray(e);
                      return "boolean" == typeof t && n
                          ? t
                              ? this.addClass(e)
                              : this.removeClass(e)
                          : g(e)
                          ? this.each(function (i) {
                                E(this).toggleClass(e.call(this, i, gt(this), t), t);
                            })
                          : this.each(function () {
                                var t, r, s, a;
                                if (n) for (r = 0, s = E(this), a = yt(e); (t = a[r++]); ) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                                else (void 0 !== e && "boolean" !== i) || ((t = gt(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""));
                            });
                  },
                  hasClass: function (e) {
                      var t,
                          i,
                          n = 0;
                      for (t = " " + e + " "; (i = this[n++]); ) if (1 === i.nodeType && (" " + vt(gt(i)) + " ").indexOf(t) > -1) return !0;
                      return !1;
                  },
              });
          var bt = /\r/g;
          E.fn.extend({
              val: function (e) {
                  var t,
                      i,
                      n,
                      r = this[0];
                  return arguments.length
                      ? ((n = g(e)),
                        this.each(function (i) {
                            var r;
                            1 === this.nodeType &&
                                (null == (r = n ? e.call(this, i, E(this).val()) : e)
                                    ? (r = "")
                                    : "number" == typeof r
                                    ? (r += "")
                                    : Array.isArray(r) &&
                                      (r = E.map(r, function (e) {
                                          return null == e ? "" : e + "";
                                      })),
                                ((t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
                        }))
                      : r
                      ? (t = E.valHooks[r.type] || E.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(r, "value"))
                          ? i
                          : "string" == typeof (i = r.value)
                          ? i.replace(bt, "")
                          : null == i
                          ? ""
                          : i
                      : void 0;
              },
          }),
              E.extend({
                  valHooks: {
                      option: {
                          get: function (e) {
                              var t = E.find.attr(e, "value");
                              return null != t ? t : vt(E.text(e));
                          },
                      },
                      select: {
                          get: function (e) {
                              var t,
                                  i,
                                  n,
                                  r = e.options,
                                  s = e.selectedIndex,
                                  a = "select-one" === e.type,
                                  o = a ? null : [],
                                  l = a ? s + 1 : r.length;
                              for (n = s < 0 ? l : a ? s : 0; n < l; n++)
                                  if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !A(i.parentNode, "optgroup"))) {
                                      if (((t = E(i).val()), a)) return t;
                                      o.push(t);
                                  }
                              return o;
                          },
                          set: function (e, t) {
                              for (var i, n, r = e.options, s = E.makeArray(t), a = r.length; a--; ) ((n = r[a]).selected = E.inArray(E.valHooks.option.get(n), s) > -1) && (i = !0);
                              return i || (e.selectedIndex = -1), s;
                          },
                      },
                  },
              }),
              E.each(["radio", "checkbox"], function () {
                  (E.valHooks[this] = {
                      set: function (e, t) {
                          if (Array.isArray(t)) return (e.checked = E.inArray(E(e).val(), t) > -1);
                      },
                  }),
                      v.checkOn ||
                          (E.valHooks[this].get = function (e) {
                              return null === e.getAttribute("value") ? "on" : e.value;
                          });
              }),
              (v.focusin = "onfocusin" in i);
          var wt = /^(?:focusinfocus|focusoutblur)$/,
              xt = function (e) {
                  e.stopPropagation();
              };
          E.extend(E.event, {
              trigger: function (e, t, n, r) {
                  var s,
                      a,
                      o,
                      l,
                      u,
                      c,
                      d,
                      p,
                      f = [n || b],
                      m = h.call(e, "type") ? e.type : e,
                      v = h.call(e, "namespace") ? e.namespace.split(".") : [];
                  if (
                      ((a = p = o = n = n || b),
                      3 !== n.nodeType &&
                          8 !== n.nodeType &&
                          !wt.test(m + E.event.triggered) &&
                          (m.indexOf(".") > -1 && ((v = m.split(".")), (m = v.shift()), v.sort()),
                          (u = m.indexOf(":") < 0 && "on" + m),
                          ((e = e[E.expando] ? e : new E.Event(m, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                          (e.namespace = v.join(".")),
                          (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                          (e.result = void 0),
                          e.target || (e.target = n),
                          (t = null == t ? [e] : E.makeArray(t, [e])),
                          (d = E.event.special[m] || {}),
                          r || !d.trigger || !1 !== d.trigger.apply(n, t)))
                  ) {
                      if (!r && !d.noBubble && !y(n)) {
                          for (l = d.delegateType || m, wt.test(l + m) || (a = a.parentNode); a; a = a.parentNode) f.push(a), (o = a);
                          o === (n.ownerDocument || b) && f.push(o.defaultView || o.parentWindow || i);
                      }
                      for (s = 0; (a = f[s++]) && !e.isPropagationStopped(); )
                          (p = a),
                              (e.type = s > 1 ? l : d.bindType || m),
                              (c = (Z.get(a, "events") || Object.create(null))[e.type] && Z.get(a, "handle")) && c.apply(a, t),
                              (c = u && a[u]) && c.apply && Y(a) && ((e.result = c.apply(a, t)), !1 === e.result && e.preventDefault());
                      return (
                          (e.type = m),
                          r ||
                              e.isDefaultPrevented() ||
                              (d._default && !1 !== d._default.apply(f.pop(), t)) ||
                              !Y(n) ||
                              (u &&
                                  g(n[m]) &&
                                  !y(n) &&
                                  ((o = n[u]) && (n[u] = null),
                                  (E.event.triggered = m),
                                  e.isPropagationStopped() && p.addEventListener(m, xt),
                                  n[m](),
                                  e.isPropagationStopped() && p.removeEventListener(m, xt),
                                  (E.event.triggered = void 0),
                                  o && (n[u] = o))),
                          e.result
                      );
                  }
              },
              simulate: function (e, t, i) {
                  var n = E.extend(new E.Event(), i, { type: e, isSimulated: !0 });
                  E.event.trigger(n, null, t);
              },
          }),
              E.fn.extend({
                  trigger: function (e, t) {
                      return this.each(function () {
                          E.event.trigger(e, t, this);
                      });
                  },
                  triggerHandler: function (e, t) {
                      var i = this[0];
                      if (i) return E.event.trigger(e, t, i, !0);
                  },
              }),
              v.focusin ||
                  E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                      var i = function (e) {
                          E.event.simulate(t, e.target, E.event.fix(e));
                      };
                      E.event.special[t] = {
                          setup: function () {
                              var n = this.ownerDocument || this.document || this,
                                  r = Z.access(n, t);
                              r || n.addEventListener(e, i, !0), Z.access(n, t, (r || 0) + 1);
                          },
                          teardown: function () {
                              var n = this.ownerDocument || this.document || this,
                                  r = Z.access(n, t) - 1;
                              r ? Z.access(n, t, r) : (n.removeEventListener(e, i, !0), Z.remove(n, t));
                          },
                      };
                  });
          var St = i.location,
              Et = { guid: Date.now() },
              Ct = /\?/;
          E.parseXML = function (e) {
              var t, n;
              if (!e || "string" != typeof e) return null;
              try {
                  t = new i.DOMParser().parseFromString(e, "text/xml");
              } catch (e) {}
              return (
                  (n = t && t.getElementsByTagName("parsererror")[0]),
                  (t && !n) ||
                      E.error(
                          "Invalid XML: " +
                              (n
                                  ? E.map(n.childNodes, function (e) {
                                        return e.textContent;
                                    }).join("\n")
                                  : e)
                      ),
                  t
              );
          };
          var Tt = /\[\]$/,
              kt = /\r?\n/g,
              Mt = /^(?:submit|button|image|reset|file)$/i,
              Pt = /^(?:input|select|textarea|keygen)/i;
          function At(e, t, i, n) {
              var r;
              if (Array.isArray(t))
                  E.each(t, function (t, r) {
                      i || Tt.test(e) ? n(e, r) : At(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, i, n);
                  });
              else if (i || "object" !== S(t)) n(e, t);
              else for (r in t) At(e + "[" + r + "]", t[r], i, n);
          }
          (E.param = function (e, t) {
              var i,
                  n = [],
                  r = function (e, t) {
                      var i = g(t) ? t() : t;
                      n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i);
                  };
              if (null == e) return "";
              if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
                  E.each(e, function () {
                      r(this.name, this.value);
                  });
              else for (i in e) At(i, e[i], t, r);
              return n.join("&");
          }),
              E.fn.extend({
                  serialize: function () {
                      return E.param(this.serializeArray());
                  },
                  serializeArray: function () {
                      return this.map(function () {
                          var e = E.prop(this, "elements");
                          return e ? E.makeArray(e) : this;
                      })
                          .filter(function () {
                              var e = this.type;
                              return this.name && !E(this).is(":disabled") && Pt.test(this.nodeName) && !Mt.test(e) && (this.checked || !me.test(e));
                          })
                          .map(function (e, t) {
                              var i = E(this).val();
                              return null == i
                                  ? null
                                  : Array.isArray(i)
                                  ? E.map(i, function (e) {
                                        return { name: t.name, value: e.replace(kt, "\r\n") };
                                    })
                                  : { name: t.name, value: i.replace(kt, "\r\n") };
                          })
                          .get();
                  },
              });
          var $t = /%20/g,
              Dt = /#.*$/,
              Ot = /([?&])_=[^&]*/,
              Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              Nt = /^(?:GET|HEAD)$/,
              _t = /^\/\//,
              zt = {},
              jt = {},
              It = "*/".concat("*"),
              Ht = b.createElement("a");
          function qt(e) {
              return function (t, i) {
                  "string" != typeof t && ((i = t), (t = "*"));
                  var n,
                      r = 0,
                      s = t.toLowerCase().match(j) || [];
                  if (g(i)) for (; (n = s[r++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i);
              };
          }
          function Rt(e, t, i, n) {
              var r = {},
                  s = e === jt;
              function a(o) {
                  var l;
                  return (
                      (r[o] = !0),
                      E.each(e[o] || [], function (e, o) {
                          var u = o(t, i, n);
                          return "string" != typeof u || s || r[u] ? (s ? !(l = u) : void 0) : (t.dataTypes.unshift(u), a(u), !1);
                      }),
                      l
                  );
              }
              return a(t.dataTypes[0]) || (!r["*"] && a("*"));
          }
          function Vt(e, t) {
              var i,
                  n,
                  r = E.ajaxSettings.flatOptions || {};
              for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
              return n && E.extend(!0, e, n), e;
          }
          (Ht.href = St.href),
              E.extend({
                  active: 0,
                  lastModified: {},
                  etag: {},
                  ajaxSettings: {
                      url: St.href,
                      type: "GET",
                      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
                      global: !0,
                      processData: !0,
                      async: !0,
                      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                      accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                      responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                      converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML },
                      flatOptions: { url: !0, context: !0 },
                  },
                  ajaxSetup: function (e, t) {
                      return t ? Vt(Vt(e, E.ajaxSettings), t) : Vt(E.ajaxSettings, e);
                  },
                  ajaxPrefilter: qt(zt),
                  ajaxTransport: qt(jt),
                  ajax: function (e, t) {
                      "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                      var n,
                          r,
                          s,
                          a,
                          o,
                          l,
                          u,
                          c,
                          d,
                          p,
                          h = E.ajaxSetup({}, t),
                          f = h.context || h,
                          m = h.context && (f.nodeType || f.jquery) ? E(f) : E.event,
                          v = E.Deferred(),
                          g = E.Callbacks("once memory"),
                          y = h.statusCode || {},
                          w = {},
                          x = {},
                          S = "canceled",
                          C = {
                              readyState: 0,
                              getResponseHeader: function (e) {
                                  var t;
                                  if (u) {
                                      if (!a) for (a = {}; (t = Lt.exec(s)); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                      t = a[e.toLowerCase() + " "];
                                  }
                                  return null == t ? null : t.join(", ");
                              },
                              getAllResponseHeaders: function () {
                                  return u ? s : null;
                              },
                              setRequestHeader: function (e, t) {
                                  return null == u && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (w[e] = t)), this;
                              },
                              overrideMimeType: function (e) {
                                  return null == u && (h.mimeType = e), this;
                              },
                              statusCode: function (e) {
                                  var t;
                                  if (e)
                                      if (u) C.always(e[C.status]);
                                      else for (t in e) y[t] = [y[t], e[t]];
                                  return this;
                              },
                              abort: function (e) {
                                  var t = e || S;
                                  return n && n.abort(t), T(0, t), this;
                              },
                          };
                      if (
                          (v.promise(C),
                          (h.url = ((e || h.url || St.href) + "").replace(_t, St.protocol + "//")),
                          (h.type = t.method || t.type || h.method || h.type),
                          (h.dataTypes = (h.dataType || "*").toLowerCase().match(j) || [""]),
                          null == h.crossDomain)
                      ) {
                          l = b.createElement("a");
                          try {
                              (l.href = h.url), (l.href = l.href), (h.crossDomain = Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host);
                          } catch (e) {
                              h.crossDomain = !0;
                          }
                      }
                      if ((h.data && h.processData && "string" != typeof h.data && (h.data = E.param(h.data, h.traditional)), Rt(zt, h, t, C), u)) return C;
                      for (d in ((c = E.event && h.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                      (h.type = h.type.toUpperCase()),
                      (h.hasContent = !Nt.test(h.type)),
                      (r = h.url.replace(Dt, "")),
                      h.hasContent
                          ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace($t, "+"))
                          : ((p = h.url.slice(r.length)),
                            h.data && (h.processData || "string" == typeof h.data) && ((r += (Ct.test(r) ? "&" : "?") + h.data), delete h.data),
                            !1 === h.cache && ((r = r.replace(Ot, "$1")), (p = (Ct.test(r) ? "&" : "?") + "_=" + Et.guid++ + p)),
                            (h.url = r + p)),
                      h.ifModified && (E.lastModified[r] && C.setRequestHeader("If-Modified-Since", E.lastModified[r]), E.etag[r] && C.setRequestHeader("If-None-Match", E.etag[r])),
                      ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) && C.setRequestHeader("Content-Type", h.contentType),
                      C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]),
                      h.headers))
                          C.setRequestHeader(d, h.headers[d]);
                      if (h.beforeSend && (!1 === h.beforeSend.call(f, C, h) || u)) return C.abort();
                      if (((S = "abort"), g.add(h.complete), C.done(h.success), C.fail(h.error), (n = Rt(jt, h, t, C)))) {
                          if (((C.readyState = 1), c && m.trigger("ajaxSend", [C, h]), u)) return C;
                          h.async &&
                              h.timeout > 0 &&
                              (o = i.setTimeout(function () {
                                  C.abort("timeout");
                              }, h.timeout));
                          try {
                              (u = !1), n.send(w, T);
                          } catch (e) {
                              if (u) throw e;
                              T(-1, e);
                          }
                      } else T(-1, "No Transport");
                      function T(e, t, a, l) {
                          var d,
                              p,
                              b,
                              w,
                              x,
                              S = t;
                          u ||
                              ((u = !0),
                              o && i.clearTimeout(o),
                              (n = void 0),
                              (s = l || ""),
                              (C.readyState = e > 0 ? 4 : 0),
                              (d = (e >= 200 && e < 300) || 304 === e),
                              a &&
                                  (w = (function (e, t, i) {
                                      for (var n, r, s, a, o = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                                      if (n)
                                          for (r in o)
                                              if (o[r] && o[r].test(n)) {
                                                  l.unshift(r);
                                                  break;
                                              }
                                      if (l[0] in i) s = l[0];
                                      else {
                                          for (r in i) {
                                              if (!l[0] || e.converters[r + " " + l[0]]) {
                                                  s = r;
                                                  break;
                                              }
                                              a || (a = r);
                                          }
                                          s = s || a;
                                      }
                                      if (s) return s !== l[0] && l.unshift(s), i[s];
                                  })(h, C, a)),
                              !d && E.inArray("script", h.dataTypes) > -1 && E.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {}),
                              (w = (function (e, t, i, n) {
                                  var r,
                                      s,
                                      a,
                                      o,
                                      l,
                                      u = {},
                                      c = e.dataTypes.slice();
                                  if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                                  for (s = c.shift(); s; )
                                      if ((e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = s), (s = c.shift())))
                                          if ("*" === s) s = l;
                                          else if ("*" !== l && l !== s) {
                                              if (!(a = u[l + " " + s] || u["* " + s]))
                                                  for (r in u)
                                                      if ((o = r.split(" "))[1] === s && (a = u[l + " " + o[0]] || u["* " + o[0]])) {
                                                          !0 === a ? (a = u[r]) : !0 !== u[r] && ((s = o[0]), c.unshift(o[1]));
                                                          break;
                                                      }
                                              if (!0 !== a)
                                                  if (a && e.throws) t = a(t);
                                                  else
                                                      try {
                                                          t = a(t);
                                                      } catch (e) {
                                                          return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + s };
                                                      }
                                          }
                                  return { state: "success", data: t };
                              })(h, w, C, d)),
                              d
                                  ? (h.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (E.lastModified[r] = x), (x = C.getResponseHeader("etag")) && (E.etag[r] = x)),
                                    204 === e || "HEAD" === h.type ? (S = "nocontent") : 304 === e ? (S = "notmodified") : ((S = w.state), (p = w.data), (d = !(b = w.error))))
                                  : ((b = S), (!e && S) || ((S = "error"), e < 0 && (e = 0))),
                              (C.status = e),
                              (C.statusText = (t || S) + ""),
                              d ? v.resolveWith(f, [p, S, C]) : v.rejectWith(f, [C, S, b]),
                              C.statusCode(y),
                              (y = void 0),
                              c && m.trigger(d ? "ajaxSuccess" : "ajaxError", [C, h, d ? p : b]),
                              g.fireWith(f, [C, S]),
                              c && (m.trigger("ajaxComplete", [C, h]), --E.active || E.event.trigger("ajaxStop")));
                      }
                      return C;
                  },
                  getJSON: function (e, t, i) {
                      return E.get(e, t, i, "json");
                  },
                  getScript: function (e, t) {
                      return E.get(e, void 0, t, "script");
                  },
              }),
              E.each(["get", "post"], function (e, t) {
                  E[t] = function (e, i, n, r) {
                      return g(i) && ((r = r || n), (n = i), (i = void 0)), E.ajax(E.extend({ url: e, type: t, dataType: r, data: i, success: n }, E.isPlainObject(e) && e));
                  };
              }),
              E.ajaxPrefilter(function (e) {
                  var t;
                  for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
              }),
              (E._evalUrl = function (e, t, i) {
                  return E.ajax({
                      url: e,
                      type: "GET",
                      dataType: "script",
                      cache: !0,
                      async: !1,
                      global: !1,
                      converters: { "text script": function () {} },
                      dataFilter: function (e) {
                          E.globalEval(e, t, i);
                      },
                  });
              }),
              E.fn.extend({
                  wrapAll: function (e) {
                      var t;
                      return (
                          this[0] &&
                              (g(e) && (e = e.call(this[0])),
                              (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                              this[0].parentNode && t.insertBefore(this[0]),
                              t
                                  .map(function () {
                                      for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                      return e;
                                  })
                                  .append(this)),
                          this
                      );
                  },
                  wrapInner: function (e) {
                      return g(e)
                          ? this.each(function (t) {
                                E(this).wrapInner(e.call(this, t));
                            })
                          : this.each(function () {
                                var t = E(this),
                                    i = t.contents();
                                i.length ? i.wrapAll(e) : t.append(e);
                            });
                  },
                  wrap: function (e) {
                      var t = g(e);
                      return this.each(function (i) {
                          E(this).wrapAll(t ? e.call(this, i) : e);
                      });
                  },
                  unwrap: function (e) {
                      return (
                          this.parent(e)
                              .not("body")
                              .each(function () {
                                  E(this).replaceWith(this.childNodes);
                              }),
                          this
                      );
                  },
              }),
              (E.expr.pseudos.hidden = function (e) {
                  return !E.expr.pseudos.visible(e);
              }),
              (E.expr.pseudos.visible = function (e) {
                  return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
              }),
              (E.ajaxSettings.xhr = function () {
                  try {
                      return new i.XMLHttpRequest();
                  } catch (e) {}
              });
          var Bt = { 0: 200, 1223: 204 },
              Ut = E.ajaxSettings.xhr();
          (v.cors = !!Ut && "withCredentials" in Ut),
              (v.ajax = Ut = !!Ut),
              E.ajaxTransport(function (e) {
                  var t, n;
                  if (v.cors || (Ut && !e.crossDomain))
                      return {
                          send: function (r, s) {
                              var a,
                                  o = e.xhr();
                              if ((o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) o[a] = e.xhrFields[a];
                              for (a in (e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) o.setRequestHeader(a, r[a]);
                              (t = function (e) {
                                  return function () {
                                      t &&
                                          ((t = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null),
                                          "abort" === e
                                              ? o.abort()
                                              : "error" === e
                                              ? "number" != typeof o.status
                                                  ? s(0, "error")
                                                  : s(o.status, o.statusText)
                                              : s(
                                                    Bt[o.status] || o.status,
                                                    o.statusText,
                                                    "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? { binary: o.response } : { text: o.responseText },
                                                    o.getAllResponseHeaders()
                                                ));
                                  };
                              }),
                                  (o.onload = t()),
                                  (n = o.onerror = o.ontimeout = t("error")),
                                  void 0 !== o.onabort
                                      ? (o.onabort = n)
                                      : (o.onreadystatechange = function () {
                                            4 === o.readyState &&
                                                i.setTimeout(function () {
                                                    t && n();
                                                });
                                        }),
                                  (t = t("abort"));
                              try {
                                  o.send((e.hasContent && e.data) || null);
                              } catch (e) {
                                  if (t) throw e;
                              }
                          },
                          abort: function () {
                              t && t();
                          },
                      };
              }),
              E.ajaxPrefilter(function (e) {
                  e.crossDomain && (e.contents.script = !1);
              }),
              E.ajaxSetup({
                  accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                  contents: { script: /\b(?:java|ecma)script\b/ },
                  converters: {
                      "text script": function (e) {
                          return E.globalEval(e), e;
                      },
                  },
              }),
              E.ajaxPrefilter("script", function (e) {
                  void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
              }),
              E.ajaxTransport("script", function (e) {
                  var t, i;
                  if (e.crossDomain || e.scriptAttrs)
                      return {
                          send: function (n, r) {
                              (t = E("<script>")
                                  .attr(e.scriptAttrs || {})
                                  .prop({ charset: e.scriptCharset, src: e.url })
                                  .on(
                                      "load error",
                                      (i = function (e) {
                                          t.remove(), (i = null), e && r("error" === e.type ? 404 : 200, e.type);
                                      })
                                  )),
                                  b.head.appendChild(t[0]);
                          },
                          abort: function () {
                              i && i();
                          },
                      };
              });
          var Ft,
              Gt = [],
              Wt = /(=)\?(?=&|$)|\?\?/;
          E.ajaxSetup({
              jsonp: "callback",
              jsonpCallback: function () {
                  var e = Gt.pop() || E.expando + "_" + Et.guid++;
                  return (this[e] = !0), e;
              },
          }),
              E.ajaxPrefilter("json jsonp", function (e, t, n) {
                  var r,
                      s,
                      a,
                      o = !1 !== e.jsonp && (Wt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(e.data) && "data");
                  if (o || "jsonp" === e.dataTypes[0])
                      return (
                          (r = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                          o ? (e[o] = e[o].replace(Wt, "$1" + r)) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                          (e.converters["script json"] = function () {
                              return a || E.error(r + " was not called"), a[0];
                          }),
                          (e.dataTypes[0] = "json"),
                          (s = i[r]),
                          (i[r] = function () {
                              a = arguments;
                          }),
                          n.always(function () {
                              void 0 === s ? E(i).removeProp(r) : (i[r] = s), e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)), a && g(s) && s(a[0]), (a = s = void 0);
                          }),
                          "script"
                      );
              }),
              (v.createHTMLDocument = (((Ft = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ft.childNodes.length)),
              (E.parseHTML = function (e, t, i) {
                  return "string" != typeof e
                      ? []
                      : ("boolean" == typeof t && ((i = t), (t = !1)),
                        t || (v.createHTMLDocument ? (((n = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href), t.head.appendChild(n)) : (t = b)),
                        (s = !i && []),
                        (r = $.exec(e)) ? [t.createElement(r[1])] : ((r = Se([e], t, s)), s && s.length && E(s).remove(), E.merge([], r.childNodes)));
                  var n, r, s;
              }),
              (E.fn.load = function (e, t, i) {
                  var n,
                      r,
                      s,
                      a = this,
                      o = e.indexOf(" ");
                  return (
                      o > -1 && ((n = vt(e.slice(o))), (e = e.slice(0, o))),
                      g(t) ? ((i = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                      a.length > 0 &&
                          E.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                              .done(function (e) {
                                  (s = arguments), a.html(n ? E("<div>").append(E.parseHTML(e)).find(n) : e);
                              })
                              .always(
                                  i &&
                                      function (e, t) {
                                          a.each(function () {
                                              i.apply(this, s || [e.responseText, t, e]);
                                          });
                                      }
                              ),
                      this
                  );
              }),
              (E.expr.pseudos.animated = function (e) {
                  return E.grep(E.timers, function (t) {
                      return e === t.elem;
                  }).length;
              }),
              (E.offset = {
                  setOffset: function (e, t, i) {
                      var n,
                          r,
                          s,
                          a,
                          o,
                          l,
                          u = E.css(e, "position"),
                          c = E(e),
                          d = {};
                      "static" === u && (e.style.position = "relative"),
                          (o = c.offset()),
                          (s = E.css(e, "top")),
                          (l = E.css(e, "left")),
                          ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1 ? ((a = (n = c.position()).top), (r = n.left)) : ((a = parseFloat(s) || 0), (r = parseFloat(l) || 0)),
                          g(t) && (t = t.call(e, i, E.extend({}, o))),
                          null != t.top && (d.top = t.top - o.top + a),
                          null != t.left && (d.left = t.left - o.left + r),
                          "using" in t ? t.using.call(e, d) : c.css(d);
                  },
              }),
              E.fn.extend({
                  offset: function (e) {
                      if (arguments.length)
                          return void 0 === e
                              ? this
                              : this.each(function (t) {
                                    E.offset.setOffset(this, e, t);
                                });
                      var t,
                          i,
                          n = this[0];
                      return n ? (n.getClientRects().length ? ((t = n.getBoundingClientRect()), (i = n.ownerDocument.defaultView), { top: t.top + i.pageYOffset, left: t.left + i.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                  },
                  position: function () {
                      if (this[0]) {
                          var e,
                              t,
                              i,
                              n = this[0],
                              r = { top: 0, left: 0 };
                          if ("fixed" === E.css(n, "position")) t = n.getBoundingClientRect();
                          else {
                              for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === E.css(e, "position"); ) e = e.parentNode;
                              e && e !== n && 1 === e.nodeType && (((r = E(e).offset()).top += E.css(e, "borderTopWidth", !0)), (r.left += E.css(e, "borderLeftWidth", !0)));
                          }
                          return { top: t.top - r.top - E.css(n, "marginTop", !0), left: t.left - r.left - E.css(n, "marginLeft", !0) };
                      }
                  },
                  offsetParent: function () {
                      return this.map(function () {
                          for (var e = this.offsetParent; e && "static" === E.css(e, "position"); ) e = e.offsetParent;
                          return e || se;
                      });
                  },
              }),
              E.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                  var i = "pageYOffset" === t;
                  E.fn[e] = function (n) {
                      return U(
                          this,
                          function (e, n, r) {
                              var s;
                              if ((y(e) ? (s = e) : 9 === e.nodeType && (s = e.defaultView), void 0 === r)) return s ? s[t] : e[n];
                              s ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset) : (e[n] = r);
                          },
                          e,
                          n,
                          arguments.length
                      );
                  };
              }),
              E.each(["top", "left"], function (e, t) {
                  E.cssHooks[t] = Ue(v.pixelPosition, function (e, i) {
                      if (i) return (i = Be(e, t)), He.test(i) ? E(e).position()[t] + "px" : i;
                  });
              }),
              E.each({ Height: "height", Width: "width" }, function (e, t) {
                  E.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (i, n) {
                      E.fn[n] = function (r, s) {
                          var a = arguments.length && (i || "boolean" != typeof r),
                              o = i || (!0 === r || !0 === s ? "margin" : "border");
                          return U(
                              this,
                              function (t, i, r) {
                                  var s;
                                  return y(t)
                                      ? 0 === n.indexOf("outer")
                                          ? t["inner" + e]
                                          : t.document.documentElement["client" + e]
                                      : 9 === t.nodeType
                                      ? ((s = t.documentElement), Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e]))
                                      : void 0 === r
                                      ? E.css(t, i, o)
                                      : E.style(t, i, r, o);
                              },
                              t,
                              a ? r : void 0,
                              a
                          );
                      };
                  });
              }),
              E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                  E.fn[t] = function (e) {
                      return this.on(t, e);
                  };
              }),
              E.fn.extend({
                  bind: function (e, t, i) {
                      return this.on(e, null, t, i);
                  },
                  unbind: function (e, t) {
                      return this.off(e, null, t);
                  },
                  delegate: function (e, t, i, n) {
                      return this.on(t, e, i, n);
                  },
                  undelegate: function (e, t, i) {
                      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i);
                  },
                  hover: function (e, t) {
                      return this.mouseenter(e).mouseleave(t || e);
                  },
              }),
              E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                  E.fn[t] = function (e, i) {
                      return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t);
                  };
              });
          var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (E.proxy = function (e, t) {
              var i, n, r;
              if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), g(e)))
                  return (
                      (n = o.call(arguments, 2)),
                      ((r = function () {
                          return e.apply(t || this, n.concat(o.call(arguments)));
                      }).guid = e.guid = e.guid || E.guid++),
                      r
                  );
          }),
              (E.holdReady = function (e) {
                  e ? E.readyWait++ : E.ready(!0);
              }),
              (E.isArray = Array.isArray),
              (E.parseJSON = JSON.parse),
              (E.nodeName = A),
              (E.isFunction = g),
              (E.isWindow = y),
              (E.camelCase = X),
              (E.type = S),
              (E.now = Date.now),
              (E.isNumeric = function (e) {
                  var t = E.type(e);
                  return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
              }),
              (E.trim = function (e) {
                  return null == e ? "" : (e + "").replace(Xt, "");
              }),
              void 0 ===
                  (n = function () {
                      return E;
                  }.apply(t, [])) || (e.exports = n);
          var Yt = i.jQuery,
              Kt = i.$;
          return (
              (E.noConflict = function (e) {
                  return i.$ === E && (i.$ = Kt), e && i.jQuery === E && (i.jQuery = Yt), E;
              }),
              void 0 === r && (i.jQuery = i.$ = E),
              E
          );
      });
  },
  function (e, t, i) {
      !(function (e) {
          "use strict";
          function t(e) {
              return "object" == typeof e && "function" == typeof e.to;
          }
          function i(e) {
              e.parentElement.removeChild(e);
          }
          function n(e) {
              return null != e;
          }
          function r(e) {
              e.preventDefault();
          }
          function s(e) {
              return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function a(e, t, i) {
              i > 0 &&
                  (c(e, t),
                  setTimeout(function () {
                      d(e, t);
                  }, i));
          }
          function o(e) {
              return Math.max(Math.min(e, 100), 0);
          }
          function l(e) {
              return Array.isArray(e) ? e : [e];
          }
          function u(e) {
              var t = (e = String(e)).split(".");
              return t.length > 1 ? t[1].length : 0;
          }
          function c(e, t) {
              e.classList && !/\s/.test(t) ? e.classList.add(t) : (e.className += " " + t);
          }
          function d(e, t) {
              e.classList && !/\s/.test(t) ? e.classList.remove(t) : (e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
          }
          function p(e) {
              var t = void 0 !== window.pageXOffset,
                  i = "CSS1Compat" === (e.compatMode || "");
              return { x: t ? window.pageXOffset : i ? e.documentElement.scrollLeft : e.body.scrollLeft, y: t ? window.pageYOffset : i ? e.documentElement.scrollTop : e.body.scrollTop };
          }
          function h(e, t) {
              return 100 / (t - e);
          }
          function f(e, t, i) {
              return (100 * t) / (e[i + 1] - e[i]);
          }
          function m(e, t) {
              for (var i = 1; e >= t[i]; ) i += 1;
              return i;
          }
          function v(e, t, i) {
              if (i >= e.slice(-1)[0]) return 100;
              var n = m(i, e),
                  r = e[n - 1],
                  s = e[n],
                  a = t[n - 1],
                  o = t[n];
              return (
                  a +
                  (function (e, t) {
                      return f(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
                  })([r, s], i) /
                      h(a, o)
              );
          }
          function g(e, t, i, n) {
              if (100 === n) return n;
              var r = m(n, e),
                  s = e[r - 1],
                  a = e[r];
              return i
                  ? n - s > (a - s) / 2
                      ? a
                      : s
                  : t[r - 1]
                  ? e[r - 1] +
                    (function (e, t) {
                        return Math.round(e / t) * t;
                    })(n - e[r - 1], t[r - 1])
                  : n;
          }
          var y, b;
          (e.PipsMode = void 0),
              ((b = e.PipsMode || (e.PipsMode = {})).Range = "range"),
              (b.Steps = "steps"),
              (b.Positions = "positions"),
              (b.Count = "count"),
              (b.Values = "values"),
              (e.PipsType = void 0),
              ((y = e.PipsType || (e.PipsType = {}))[(y.None = -1)] = "None"),
              (y[(y.NoValue = 0)] = "NoValue"),
              (y[(y.LargeValue = 1)] = "LargeValue"),
              (y[(y.SmallValue = 2)] = "SmallValue");
          var w = (function () {
                  function e(e, t, i) {
                      var n;
                      (this.xPct = []), (this.xVal = []), (this.xSteps = []), (this.xNumSteps = []), (this.xHighestCompleteStep = []), (this.xSteps = [i || !1]), (this.xNumSteps = [!1]), (this.snap = t);
                      var r = [];
                      for (
                          Object.keys(e).forEach(function (t) {
                              r.push([l(e[t]), t]);
                          }),
                              r.sort(function (e, t) {
                                  return e[0][0] - t[0][0];
                              }),
                              n = 0;
                          n < r.length;
                          n++
                      )
                          this.handleEntryPoint(r[n][1], r[n][0]);
                      for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) this.handleStepPoint(n, this.xNumSteps[n]);
                  }
                  return (
                      (e.prototype.getDistance = function (e) {
                          for (var t = [], i = 0; i < this.xNumSteps.length - 1; i++) t[i] = f(this.xVal, e, i);
                          return t;
                      }),
                      (e.prototype.getAbsoluteDistance = function (e, t, i) {
                          var n,
                              r = 0;
                          if (e < this.xPct[this.xPct.length - 1]) for (; e > this.xPct[r + 1]; ) r++;
                          else e === this.xPct[this.xPct.length - 1] && (r = this.xPct.length - 2);
                          i || e !== this.xPct[r + 1] || r++, null === t && (t = []);
                          var s = 1,
                              a = t[r],
                              o = 0,
                              l = 0,
                              u = 0,
                              c = 0;
                          for (n = i ? (e - this.xPct[r]) / (this.xPct[r + 1] - this.xPct[r]) : (this.xPct[r + 1] - e) / (this.xPct[r + 1] - this.xPct[r]); a > 0; )
                              (o = this.xPct[r + 1 + c] - this.xPct[r + c]),
                                  t[r + c] * s + 100 - 100 * n > 100 ? ((l = o * n), (s = (a - 100 * n) / t[r + c]), (n = 1)) : ((l = ((t[r + c] * o) / 100) * s), (s = 0)),
                                  i ? ((u -= l), this.xPct.length + c >= 1 && c--) : ((u += l), this.xPct.length - c >= 1 && c++),
                                  (a = t[r + c] * s);
                          return e + u;
                      }),
                      (e.prototype.toStepping = function (e) {
                          return (e = v(this.xVal, this.xPct, e));
                      }),
                      (e.prototype.fromStepping = function (e) {
                          return (function (e, t, i) {
                              if (i >= 100) return e.slice(-1)[0];
                              var n = m(i, t),
                                  r = e[n - 1],
                                  s = e[n],
                                  a = t[n - 1];
                              return (function (e, t) {
                                  return (t * (e[1] - e[0])) / 100 + e[0];
                              })([r, s], (i - a) * h(a, t[n]));
                          })(this.xVal, this.xPct, e);
                      }),
                      (e.prototype.getStep = function (e) {
                          return (e = g(this.xPct, this.xSteps, this.snap, e));
                      }),
                      (e.prototype.getDefaultStep = function (e, t, i) {
                          var n = m(e, this.xPct);
                          return (100 === e || (t && e === this.xPct[n - 1])) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / i;
                      }),
                      (e.prototype.getNearbySteps = function (e) {
                          var t = m(e, this.xPct);
                          return {
                              stepBefore: { startValue: this.xVal[t - 2], step: this.xNumSteps[t - 2], highestStep: this.xHighestCompleteStep[t - 2] },
                              thisStep: { startValue: this.xVal[t - 1], step: this.xNumSteps[t - 1], highestStep: this.xHighestCompleteStep[t - 1] },
                              stepAfter: { startValue: this.xVal[t], step: this.xNumSteps[t], highestStep: this.xHighestCompleteStep[t] },
                          };
                      }),
                      (e.prototype.countStepDecimals = function () {
                          var e = this.xNumSteps.map(u);
                          return Math.max.apply(null, e);
                      }),
                      (e.prototype.hasNoSize = function () {
                          return this.xVal[0] === this.xVal[this.xVal.length - 1];
                      }),
                      (e.prototype.convert = function (e) {
                          return this.getStep(this.toStepping(e));
                      }),
                      (e.prototype.handleEntryPoint = function (e, t) {
                          var i;
                          if (!s((i = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))) || !s(t[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
                          this.xPct.push(i), this.xVal.push(t[0]);
                          var n = Number(t[1]);
                          i ? this.xSteps.push(!isNaN(n) && n) : isNaN(n) || (this.xSteps[0] = n), this.xHighestCompleteStep.push(0);
                      }),
                      (e.prototype.handleStepPoint = function (e, t) {
                          if (t)
                              if (this.xVal[e] !== this.xVal[e + 1]) {
                                  this.xSteps[e] = f([this.xVal[e], this.xVal[e + 1]], t, 0) / h(this.xPct[e], this.xPct[e + 1]);
                                  var i = (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                                      n = Math.ceil(Number(i.toFixed(3)) - 1),
                                      r = this.xVal[e] + this.xNumSteps[e] * n;
                                  this.xHighestCompleteStep[e] = r;
                              } else this.xSteps[e] = this.xHighestCompleteStep[e] = this.xVal[e];
                      }),
                      e
                  );
              })(),
              x = {
                  to: function (e) {
                      return void 0 === e ? "" : e.toFixed(2);
                  },
                  from: Number,
              },
              S = {
                  target: "target",
                  base: "base",
                  origin: "origin",
                  handle: "handle",
                  handleLower: "handle-lower",
                  handleUpper: "handle-upper",
                  touchArea: "touch-area",
                  horizontal: "horizontal",
                  vertical: "vertical",
                  background: "background",
                  connect: "connect",
                  connects: "connects",
                  ltr: "ltr",
                  rtl: "rtl",
                  textDirectionLtr: "txt-dir-ltr",
                  textDirectionRtl: "txt-dir-rtl",
                  draggable: "draggable",
                  drag: "state-drag",
                  tap: "state-tap",
                  active: "active",
                  tooltip: "tooltip",
                  pips: "pips",
                  pipsHorizontal: "pips-horizontal",
                  pipsVertical: "pips-vertical",
                  marker: "marker",
                  markerHorizontal: "marker-horizontal",
                  markerVertical: "marker-vertical",
                  markerNormal: "marker-normal",
                  markerLarge: "marker-large",
                  markerSub: "marker-sub",
                  value: "value",
                  valueHorizontal: "value-horizontal",
                  valueVertical: "value-vertical",
                  valueNormal: "value-normal",
                  valueLarge: "value-large",
                  valueSub: "value-sub",
              },
              E = ".__tooltips",
              C = ".__aria";
          function T(e, t) {
              if (!s(t)) throw new Error("noUiSlider: 'step' is not numeric.");
              e.singleStep = t;
          }
          function k(e, t) {
              if (!s(t)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
              e.keyboardPageMultiplier = t;
          }
          function M(e, t) {
              if (!s(t)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
              e.keyboardMultiplier = t;
          }
          function P(e, t) {
              if (!s(t)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
              e.keyboardDefaultStep = t;
          }
          function A(e, t) {
              if ("object" != typeof t || Array.isArray(t)) throw new Error("noUiSlider: 'range' is not an object.");
              if (void 0 === t.min || void 0 === t.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
              e.spectrum = new w(t, e.snap || !1, e.singleStep);
          }
          function $(e, t) {
              if (((t = l(t)), !Array.isArray(t) || !t.length)) throw new Error("noUiSlider: 'start' option is incorrect.");
              (e.handles = t.length), (e.start = t);
          }
          function D(e, t) {
              if ("boolean" != typeof t) throw new Error("noUiSlider: 'snap' option must be a boolean.");
              e.snap = t;
          }
          function O(e, t) {
              if ("boolean" != typeof t) throw new Error("noUiSlider: 'animate' option must be a boolean.");
              e.animate = t;
          }
          function L(e, t) {
              if ("number" != typeof t) throw new Error("noUiSlider: 'animationDuration' option must be a number.");
              e.animationDuration = t;
          }
          function N(e, t) {
              var i,
                  n = [!1];
              if (("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]), !0 === t || !1 === t)) {
                  for (i = 1; i < e.handles; i++) n.push(t);
                  n.push(!1);
              } else {
                  if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
                  n = t;
              }
              e.connect = n;
          }
          function _(e, t) {
              switch (t) {
                  case "horizontal":
                      e.ort = 0;
                      break;
                  case "vertical":
                      e.ort = 1;
                      break;
                  default:
                      throw new Error("noUiSlider: 'orientation' option is invalid.");
              }
          }
          function z(e, t) {
              if (!s(t)) throw new Error("noUiSlider: 'margin' option must be numeric.");
              0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function j(e, t) {
              if (!s(t)) throw new Error("noUiSlider: 'limit' option must be numeric.");
              if (((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
          }
          function I(e, t) {
              var i;
              if (!s(t) && !Array.isArray(t)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
              if (Array.isArray(t) && 2 !== t.length && !s(t[0]) && !s(t[1])) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
              if (0 !== t) {
                  for (Array.isArray(t) || (t = [t, t]), e.padding = [e.spectrum.getDistance(t[0]), e.spectrum.getDistance(t[1])], i = 0; i < e.spectrum.xNumSteps.length - 1; i++)
                      if (e.padding[0][i] < 0 || e.padding[1][i] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
                  var n = t[0] + t[1],
                      r = e.spectrum.xVal[0];
                  if (n / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - r) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
              }
          }
          function H(e, t) {
              switch (t) {
                  case "ltr":
                      e.dir = 0;
                      break;
                  case "rtl":
                      e.dir = 1;
                      break;
                  default:
                      throw new Error("noUiSlider: 'direction' option was not recognized.");
              }
          }
          function q(e, t) {
              if ("string" != typeof t) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
              var i = t.indexOf("tap") >= 0,
                  n = t.indexOf("drag") >= 0,
                  r = t.indexOf("fixed") >= 0,
                  s = t.indexOf("snap") >= 0,
                  a = t.indexOf("hover") >= 0,
                  o = t.indexOf("unconstrained") >= 0,
                  l = t.indexOf("drag-all") >= 0;
              if (r) {
                  if (2 !== e.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                  z(e, e.start[1] - e.start[0]);
              }
              if (o && (e.margin || e.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
              e.events = { tap: i || s, drag: n, dragAll: l, fixed: r, snap: s, hover: a, unconstrained: o };
          }
          function R(e, i) {
              if (!1 !== i)
                  if (!0 === i || t(i)) {
                      e.tooltips = [];
                      for (var n = 0; n < e.handles; n++) e.tooltips.push(i);
                  } else {
                      if ((i = l(i)).length !== e.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                      i.forEach(function (e) {
                          if ("boolean" != typeof e && !t(e)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                      }),
                          (e.tooltips = i);
                  }
          }
          function V(e, t) {
              if (t.length !== e.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
              e.handleAttributes = t;
          }
          function B(e, i) {
              if (!t(i)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
              e.ariaFormat = i;
          }
          function U(e, i) {
              if (
                  !(function (e) {
                      return t(e) && "function" == typeof e.from;
                  })(i)
              )
                  throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
              e.format = i;
          }
          function F(e, t) {
              if ("boolean" != typeof t) throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
              e.keyboardSupport = t;
          }
          function G(e, t) {
              e.documentElement = t;
          }
          function W(e, t) {
              if ("string" != typeof t && !1 !== t) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
              e.cssPrefix = t;
          }
          function X(e, t) {
              if ("object" != typeof t) throw new Error("noUiSlider: 'cssClasses' must be an object.");
              "string" == typeof e.cssPrefix
                  ? ((e.cssClasses = {}),
                    Object.keys(t).forEach(function (i) {
                        e.cssClasses[i] = e.cssPrefix + t[i];
                    }))
                  : (e.cssClasses = t);
          }
          function Y(e) {
              var t = { margin: null, limit: null, padding: null, animate: !0, animationDuration: 300, ariaFormat: x, format: x },
                  i = {
                      step: { r: !1, t: T },
                      keyboardPageMultiplier: { r: !1, t: k },
                      keyboardMultiplier: { r: !1, t: M },
                      keyboardDefaultStep: { r: !1, t: P },
                      start: { r: !0, t: $ },
                      connect: { r: !0, t: N },
                      direction: { r: !0, t: H },
                      snap: { r: !1, t: D },
                      animate: { r: !1, t: O },
                      animationDuration: { r: !1, t: L },
                      range: { r: !0, t: A },
                      orientation: { r: !1, t: _ },
                      margin: { r: !1, t: z },
                      limit: { r: !1, t: j },
                      padding: { r: !1, t: I },
                      behaviour: { r: !0, t: q },
                      ariaFormat: { r: !1, t: B },
                      format: { r: !1, t: U },
                      tooltips: { r: !1, t: R },
                      keyboardSupport: { r: !0, t: F },
                      documentElement: { r: !1, t: G },
                      cssPrefix: { r: !0, t: W },
                      cssClasses: { r: !0, t: X },
                      handleAttributes: { r: !1, t: V },
                  },
                  r = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: !0, cssPrefix: "noUi-", cssClasses: S, keyboardPageMultiplier: 5, keyboardMultiplier: 1, keyboardDefaultStep: 10 };
              e.format && !e.ariaFormat && (e.ariaFormat = e.format),
                  Object.keys(i).forEach(function (s) {
                      if (n(e[s]) || void 0 !== r[s]) i[s].t(t, n(e[s]) ? e[s] : r[s]);
                      else if (i[s].r) throw new Error("noUiSlider: '" + s + "' is required.");
                  }),
                  (t.pips = e.pips);
              var s = document.createElement("div"),
                  a = void 0 !== s.style.msTransform,
                  o = void 0 !== s.style.transform;
              return (
                  (t.transformRule = o ? "transform" : a ? "msTransform" : "webkitTransform"),
                  (t.style = [
                      ["left", "top"],
                      ["right", "bottom"],
                  ][t.dir][t.ort]),
                  t
              );
          }
          function K(t, s, u) {
              var h,
                  f,
                  m,
                  v,
                  g,
                  y,
                  b,
                  w = window.navigator.pointerEnabled
                      ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
                      : window.navigator.msPointerEnabled
                      ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
                      : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" },
                  x =
                      window.CSS &&
                      CSS.supports &&
                      CSS.supports("touch-action", "none") &&
                      (function () {
                          var e = !1;
                          try {
                              var t = Object.defineProperty({}, "passive", {
                                  get: function () {
                                      e = !0;
                                  },
                              });
                              window.addEventListener("test", null, t);
                          } catch (e) {}
                          return e;
                      })(),
                  S = t,
                  T = s.spectrum,
                  k = [],
                  M = [],
                  P = [],
                  A = 0,
                  $ = {},
                  D = t.ownerDocument,
                  O = s.documentElement || D.documentElement,
                  L = D.body,
                  N = "rtl" === D.dir || 1 === s.ort ? 0 : 100;
              function _(e, t) {
                  var i = D.createElement("div");
                  return t && c(i, t), e.appendChild(i), i;
              }
              function z(e, t) {
                  var i = _(e, s.cssClasses.origin),
                      n = _(i, s.cssClasses.handle);
                  if (
                      (_(n, s.cssClasses.touchArea),
                      n.setAttribute("data-handle", String(t)),
                      s.keyboardSupport &&
                          (n.setAttribute("tabindex", "0"),
                          n.addEventListener("keydown", function (e) {
                              return (function (e, t) {
                                  if (H() || q(t)) return !1;
                                  var i = ["Left", "Right"],
                                      n = ["Down", "Up"],
                                      r = ["PageDown", "PageUp"],
                                      a = ["Home", "End"];
                                  s.dir && !s.ort ? i.reverse() : s.ort && !s.dir && (n.reverse(), r.reverse());
                                  var o,
                                      l = e.key.replace("Arrow", ""),
                                      u = l === r[0],
                                      c = l === r[1],
                                      d = l === n[0] || l === i[0] || u,
                                      p = l === n[1] || l === i[1] || c,
                                      h = l === a[0],
                                      f = l === a[1];
                                  if (!(d || p || h || f)) return !0;
                                  if ((e.preventDefault(), p || d)) {
                                      var m = d ? 0 : 1,
                                          v = ge(t)[m];
                                      if (null === v) return !1;
                                      !1 === v && (v = T.getDefaultStep(M[t], d, s.keyboardDefaultStep)), (v *= c || u ? s.keyboardPageMultiplier : s.keyboardMultiplier), (v = Math.max(v, 1e-7)), (v *= d ? -1 : 1), (o = k[t] + v);
                                  } else o = f ? s.spectrum.xVal[s.spectrum.xVal.length - 1] : s.spectrum.xVal[0];
                                  return pe(t, T.toStepping(o), !0, !0), ae("slide", t), ae("update", t), ae("change", t), ae("set", t), !1;
                              })(e, t);
                          })),
                      void 0 !== s.handleAttributes)
                  ) {
                      var r = s.handleAttributes[t];
                      Object.keys(r).forEach(function (e) {
                          n.setAttribute(e, r[e]);
                      });
                  }
                  return n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", s.ort ? "vertical" : "horizontal"), 0 === t ? c(n, s.cssClasses.handleLower) : t === s.handles - 1 && c(n, s.cssClasses.handleUpper), i;
              }
              function j(e, t) {
                  return !!t && _(e, s.cssClasses.connect);
              }
              function I(e, t) {
                  return !(!s.tooltips || !s.tooltips[t]) && _(e.firstChild, s.cssClasses.tooltip);
              }
              function H() {
                  return S.hasAttribute("disabled");
              }
              function q(e) {
                  return f[e].hasAttribute("disabled");
              }
              function R() {
                  g &&
                      (se("update" + E),
                      g.forEach(function (e) {
                          e && i(e);
                      }),
                      (g = null));
              }
              function V() {
                  R(),
                      (g = f.map(I)),
                      re("update" + E, function (e, t, i) {
                          if (g && s.tooltips && !1 !== g[t]) {
                              var n = e[t];
                              !0 !== s.tooltips[t] && (n = s.tooltips[t].to(i[t])), (g[t].innerHTML = n);
                          }
                      });
              }
              function B(e, t) {
                  return e.map(function (e) {
                      return T.fromStepping(t ? T.getStep(e) : e);
                  });
              }
              function U(t) {
                  var i,
                      n = (function (t) {
                          if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps) return T.xVal;
                          if (t.mode === e.PipsMode.Count) {
                              if (t.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                              for (var i = t.values - 1, n = 100 / i, r = []; i--; ) r[i] = i * n;
                              return r.push(100), B(r, t.stepped);
                          }
                          return t.mode === e.PipsMode.Positions
                              ? B(t.values, t.stepped)
                              : t.mode === e.PipsMode.Values
                              ? t.stepped
                                  ? t.values.map(function (e) {
                                        return T.fromStepping(T.getStep(T.toStepping(e)));
                                    })
                                  : t.values
                              : [];
                      })(t),
                      r = {},
                      s = T.xVal[0],
                      a = T.xVal[T.xVal.length - 1],
                      o = !1,
                      l = !1,
                      u = 0;
                  return (
                      (i = n.slice().sort(function (e, t) {
                          return e - t;
                      })),
                      (n = i.filter(function (e) {
                          return !this[e] && (this[e] = !0);
                      }, {}))[0] !== s && (n.unshift(s), (o = !0)),
                      n[n.length - 1] !== a && (n.push(a), (l = !0)),
                      n.forEach(function (i, s) {
                          var a,
                              c,
                              d,
                              p,
                              h,
                              f,
                              m,
                              v,
                              g,
                              y,
                              b = i,
                              w = n[s + 1],
                              x = t.mode === e.PipsMode.Steps;
                          for (x && (a = T.xNumSteps[s]), a || (a = w - b), void 0 === w && (w = b), a = Math.max(a, 1e-7), c = b; c <= w; c = Number((c + a).toFixed(7))) {
                              for (v = (h = (p = T.toStepping(c)) - u) / (t.density || 1), y = h / (g = Math.round(v)), d = 1; d <= g; d += 1) r[(f = u + d * y).toFixed(5)] = [T.fromStepping(f), 0];
                              (m = n.indexOf(c) > -1 ? e.PipsType.LargeValue : x ? e.PipsType.SmallValue : e.PipsType.NoValue), !s && o && c !== w && (m = 0), (c === w && l) || (r[p.toFixed(5)] = [c, m]), (u = p);
                          }
                      }),
                      r
                  );
              }
              function F(t, i, n) {
                  var r,
                      a,
                      o = D.createElement("div"),
                      l = (((r = {})[e.PipsType.None] = ""), (r[e.PipsType.NoValue] = s.cssClasses.valueNormal), (r[e.PipsType.LargeValue] = s.cssClasses.valueLarge), (r[e.PipsType.SmallValue] = s.cssClasses.valueSub), r),
                      u = (((a = {})[e.PipsType.None] = ""), (a[e.PipsType.NoValue] = s.cssClasses.markerNormal), (a[e.PipsType.LargeValue] = s.cssClasses.markerLarge), (a[e.PipsType.SmallValue] = s.cssClasses.markerSub), a),
                      d = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
                      p = [s.cssClasses.markerHorizontal, s.cssClasses.markerVertical];
                  function h(e, t) {
                      var i = t === s.cssClasses.value,
                          n = i ? l : u;
                      return t + " " + (i ? d : p)[s.ort] + " " + n[e];
                  }
                  return (
                      c(o, s.cssClasses.pips),
                      c(o, 0 === s.ort ? s.cssClasses.pipsHorizontal : s.cssClasses.pipsVertical),
                      Object.keys(t).forEach(function (r) {
                          !(function (t, r, a) {
                              if ((a = i ? i(r, a) : a) !== e.PipsType.None) {
                                  var l = _(o, !1);
                                  (l.className = h(a, s.cssClasses.marker)),
                                      (l.style[s.style] = t + "%"),
                                      a > e.PipsType.NoValue && (((l = _(o, !1)).className = h(a, s.cssClasses.value)), l.setAttribute("data-value", String(r)), (l.style[s.style] = t + "%"), (l.innerHTML = String(n.to(r))));
                              }
                          })(r, t[r][0], t[r][1]);
                      }),
                      o
                  );
              }
              function G() {
                  v && (i(v), (v = null));
              }
              function W(e) {
                  G();
                  var t = U(e),
                      i = e.filter,
                      n = e.format || {
                          to: function (e) {
                              return String(Math.round(e));
                          },
                      };
                  return (v = S.appendChild(F(t, i, n)));
              }
              function X() {
                  var e = h.getBoundingClientRect(),
                      t = "offset" + ["Width", "Height"][s.ort];
                  return 0 === s.ort ? e.width || h[t] : e.height || h[t];
              }
              function K(e, t, i, n) {
                  var r = function (r) {
                          var a,
                              o,
                              l = (function (e, t, i) {
                                  var n = 0 === e.type.indexOf("touch"),
                                      r = 0 === e.type.indexOf("mouse"),
                                      s = 0 === e.type.indexOf("pointer"),
                                      a = 0,
                                      o = 0;
                                  if ((0 === e.type.indexOf("MSPointer") && (s = !0), "mousedown" === e.type && !e.buttons && !e.touches)) return !1;
                                  if (n) {
                                      var l = function (t) {
                                          var n = t.target;
                                          return n === i || i.contains(n) || (e.composed && e.composedPath().shift() === i);
                                      };
                                      if ("touchstart" === e.type) {
                                          var u = Array.prototype.filter.call(e.touches, l);
                                          if (u.length > 1) return !1;
                                          (a = u[0].pageX), (o = u[0].pageY);
                                      } else {
                                          var c = Array.prototype.find.call(e.changedTouches, l);
                                          if (!c) return !1;
                                          (a = c.pageX), (o = c.pageY);
                                      }
                                  }
                                  return (t = t || p(D)), (r || s) && ((a = e.clientX + t.x), (o = e.clientY + t.y)), (e.pageOffset = t), (e.points = [a, o]), (e.cursor = r || s), e;
                              })(r, n.pageOffset, n.target || t);
                          return (
                              !!l &&
                              !(H() && !n.doNotReject) &&
                              ((a = S),
                              (o = s.cssClasses.tap),
                              !((a.classList ? a.classList.contains(o) : new RegExp("\\b" + o + "\\b").test(a.className)) && !n.doNotReject) &&
                                  !(e === w.start && void 0 !== l.buttons && l.buttons > 1) &&
                                  (!n.hover || !l.buttons) &&
                                  (x || l.preventDefault(), (l.calcPoint = l.points[s.ort]), void i(l, n)))
                          );
                      },
                      a = [];
                  return (
                      e.split(" ").forEach(function (e) {
                          t.addEventListener(e, r, !!x && { passive: !0 }), a.push([e, r]);
                      }),
                      a
                  );
              }
              function Z(e) {
                  var t,
                      i,
                      n,
                      r,
                      a,
                      l,
                      u =
                          (100 *
                              (e -
                                  ((t = h),
                                  (i = s.ort),
                                  (n = t.getBoundingClientRect()),
                                  (r = t.ownerDocument),
                                  (a = r.documentElement),
                                  (l = p(r)),
                                  /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (l.x = 0),
                                  i ? n.top + l.y - a.clientTop : n.left + l.x - a.clientLeft))) /
                          X();
                  return (u = o(u)), s.dir ? 100 - u : u;
              }
              function Q(e, t) {
                  "mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && ee(e, t);
              }
              function J(e, t) {
                  if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === e.buttons && 0 !== t.buttonsProperty) return ee(e, t);
                  var i = (s.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
                  ue(i > 0, (100 * i) / t.baseSize, t.locations, t.handleNumbers, t.connect);
              }
              function ee(e, t) {
                  t.handle && (d(t.handle, s.cssClasses.active), (A -= 1)),
                      t.listeners.forEach(function (e) {
                          O.removeEventListener(e[0], e[1]);
                      }),
                      0 === A && (d(S, s.cssClasses.drag), de(), e.cursor && ((L.style.cursor = ""), L.removeEventListener("selectstart", r))),
                      t.handleNumbers.forEach(function (e) {
                          ae("change", e), ae("set", e), ae("end", e);
                      });
              }
              function te(e, t) {
                  if (!t.handleNumbers.some(q)) {
                      var i;
                      1 === t.handleNumbers.length && ((i = f[t.handleNumbers[0]].children[0]), (A += 1), c(i, s.cssClasses.active)), e.stopPropagation();
                      var n = [],
                          a = K(w.move, O, J, {
                              target: e.target,
                              handle: i,
                              connect: t.connect,
                              listeners: n,
                              startCalcPoint: e.calcPoint,
                              baseSize: X(),
                              pageOffset: e.pageOffset,
                              handleNumbers: t.handleNumbers,
                              buttonsProperty: e.buttons,
                              locations: M.slice(),
                          }),
                          o = K(w.end, O, ee, { target: e.target, handle: i, listeners: n, doNotReject: !0, handleNumbers: t.handleNumbers }),
                          l = K("mouseout", O, Q, { target: e.target, handle: i, listeners: n, doNotReject: !0, handleNumbers: t.handleNumbers });
                      n.push.apply(n, a.concat(o, l)),
                          e.cursor && ((L.style.cursor = getComputedStyle(e.target).cursor), f.length > 1 && c(S, s.cssClasses.drag), L.addEventListener("selectstart", r, !1)),
                          t.handleNumbers.forEach(function (e) {
                              ae("start", e);
                          });
                  }
              }
              function ie(e) {
                  e.stopPropagation();
                  var t = Z(e.calcPoint),
                      i = (function (e) {
                          var t = 100,
                              i = !1;
                          return (
                              f.forEach(function (n, r) {
                                  if (!q(r)) {
                                      var s = M[r],
                                          a = Math.abs(s - e);
                                      (a < t || (a <= t && e > s) || (100 === a && 100 === t)) && ((i = r), (t = a));
                                  }
                              }),
                              i
                          );
                      })(t);
                  !1 !== i &&
                      (s.events.snap || a(S, s.cssClasses.tap, s.animationDuration),
                      pe(i, t, !0, !0),
                      de(),
                      ae("slide", i, !0),
                      ae("update", i, !0),
                      s.events.snap ? te(e, { handleNumbers: [i] }) : (ae("change", i, !0), ae("set", i, !0)));
              }
              function ne(e) {
                  var t = Z(e.calcPoint),
                      i = T.getStep(t),
                      n = T.fromStepping(i);
                  Object.keys($).forEach(function (e) {
                      "hover" === e.split(".")[0] &&
                          $[e].forEach(function (e) {
                              e.call(ye, n);
                          });
                  });
              }
              function re(e, t) {
                  ($[e] = $[e] || []),
                      $[e].push(t),
                      "update" === e.split(".")[0] &&
                          f.forEach(function (e, t) {
                              ae("update", t);
                          });
              }
              function se(e) {
                  var t = e && e.split(".")[0],
                      i = t ? e.substring(t.length) : e;
                  Object.keys($).forEach(function (e) {
                      var n = e.split(".")[0],
                          r = e.substring(n.length);
                      (t && t !== n) ||
                          (i && i !== r) ||
                          ((function (e) {
                              return e === C || e === E;
                          })(r) &&
                              i !== r) ||
                          delete $[e];
                  });
              }
              function ae(e, t, i) {
                  Object.keys($).forEach(function (n) {
                      var r = n.split(".")[0];
                      e === r &&
                          $[n].forEach(function (e) {
                              e.call(ye, k.map(s.format.to), t, k.slice(), i || !1, M.slice(), ye);
                          });
                  });
              }
              function oe(e, t, i, n, r, a) {
                  var l;
                  return (
                      f.length > 1 &&
                          !s.events.unconstrained &&
                          (n && t > 0 && ((l = T.getAbsoluteDistance(e[t - 1], s.margin, !1)), (i = Math.max(i, l))), r && t < f.length - 1 && ((l = T.getAbsoluteDistance(e[t + 1], s.margin, !0)), (i = Math.min(i, l)))),
                      f.length > 1 &&
                          s.limit &&
                          (n && t > 0 && ((l = T.getAbsoluteDistance(e[t - 1], s.limit, !1)), (i = Math.min(i, l))), r && t < f.length - 1 && ((l = T.getAbsoluteDistance(e[t + 1], s.limit, !0)), (i = Math.max(i, l)))),
                      s.padding && (0 === t && ((l = T.getAbsoluteDistance(0, s.padding[0], !1)), (i = Math.max(i, l))), t === f.length - 1 && ((l = T.getAbsoluteDistance(100, s.padding[1], !0)), (i = Math.min(i, l)))),
                      !((i = o((i = T.getStep(i)))) === e[t] && !a) && i
                  );
              }
              function le(e, t) {
                  var i = s.ort;
                  return (i ? t : e) + ", " + (i ? e : t);
              }
              function ue(e, t, i, n, r) {
                  var s = i.slice(),
                      a = n[0],
                      o = [!e, e],
                      l = [e, !e];
                  (n = n.slice()),
                      e && n.reverse(),
                      n.length > 1
                          ? n.forEach(function (e, i) {
                                var n = oe(s, e, s[e] + t, o[i], l[i], !1);
                                !1 === n ? (t = 0) : ((t = n - s[e]), (s[e] = n));
                            })
                          : (o = l = [!0]);
                  var u = !1;
                  n.forEach(function (e, n) {
                      u = pe(e, i[e] + t, o[n], l[n]) || u;
                  }),
                      u &&
                          (n.forEach(function (e) {
                              ae("update", e), ae("slide", e);
                          }),
                          null != r && ae("drag", a));
              }
              function ce(e, t) {
                  return s.dir ? 100 - e - t : e;
              }
              function de() {
                  P.forEach(function (e) {
                      var t = M[e] > 50 ? -1 : 1,
                          i = 3 + (f.length + t * e);
                      f[e].style.zIndex = String(i);
                  });
              }
              function pe(e, t, i, n, r) {
                  return (
                      r || (t = oe(M, e, t, i, n, !1)),
                      !1 !== t &&
                          ((function (e, t) {
                              (M[e] = t), (k[e] = T.fromStepping(t));
                              var i = "translate(" + le(ce(t, 0) - N + "%", "0") + ")";
                              (f[e].style[s.transformRule] = i), he(e), he(e + 1);
                          })(e, t),
                          !0)
                  );
              }
              function he(e) {
                  if (m[e]) {
                      var t = 0,
                          i = 100;
                      0 !== e && (t = M[e - 1]), e !== m.length - 1 && (i = M[e]);
                      var n = i - t,
                          r = "translate(" + le(ce(t, n) + "%", "0") + ")",
                          a = "scale(" + le(n / 100, "1") + ")";
                      m[e].style[s.transformRule] = r + " " + a;
                  }
              }
              function fe(e, t) {
                  return null === e || !1 === e || void 0 === e ? M[t] : ("number" == typeof e && (e = String(e)), !1 !== (e = s.format.from(e)) && (e = T.toStepping(e)), !1 === e || isNaN(e) ? M[t] : e);
              }
              function me(e, t, i) {
                  var n = l(e),
                      r = void 0 === M[0];
                  (t = void 0 === t || t),
                      s.animate && !r && a(S, s.cssClasses.tap, s.animationDuration),
                      P.forEach(function (e) {
                          pe(e, fe(n[e], e), !0, !1, i);
                      });
                  var o = 1 === P.length ? 0 : 1;
                  if (r && T.hasNoSize() && ((i = !0), (M[0] = 0), P.length > 1)) {
                      var u = 100 / (P.length - 1);
                      P.forEach(function (e) {
                          M[e] = e * u;
                      });
                  }
                  for (; o < P.length; ++o)
                      P.forEach(function (e) {
                          pe(e, M[e], !0, !0, i);
                      });
                  de(),
                      P.forEach(function (e) {
                          ae("update", e), null !== n[e] && t && ae("set", e);
                      });
              }
              function ve(e) {
                  if ((void 0 === e && (e = !1), e)) return 1 === k.length ? k[0] : k.slice(0);
                  var t = k.map(s.format.to);
                  return 1 === t.length ? t[0] : t;
              }
              function ge(e) {
                  var t = M[e],
                      i = T.getNearbySteps(t),
                      n = k[e],
                      r = i.thisStep.step,
                      a = null;
                  if (s.snap) return [n - i.stepBefore.startValue || null, i.stepAfter.startValue - n || null];
                  !1 !== r && n + r > i.stepAfter.startValue && (r = i.stepAfter.startValue - n),
                      (a = n > i.thisStep.startValue ? i.thisStep.step : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep),
                      100 === t ? (r = null) : 0 === t && (a = null);
                  var o = T.countStepDecimals();
                  return null !== r && !1 !== r && (r = Number(r.toFixed(o))), null !== a && !1 !== a && (a = Number(a.toFixed(o))), [a, r];
              }
              c((y = S), s.cssClasses.target),
                  0 === s.dir ? c(y, s.cssClasses.ltr) : c(y, s.cssClasses.rtl),
                  0 === s.ort ? c(y, s.cssClasses.horizontal) : c(y, s.cssClasses.vertical),
                  c(y, "rtl" === getComputedStyle(y).direction ? s.cssClasses.textDirectionRtl : s.cssClasses.textDirectionLtr),
                  (h = _(y, s.cssClasses.base)),
                  (function (e, t) {
                      var i = _(t, s.cssClasses.connects);
                      (f = []), (m = []).push(j(i, e[0]));
                      for (var n = 0; n < s.handles; n++) f.push(z(t, n)), (P[n] = n), m.push(j(i, e[n + 1]));
                  })(s.connect, h),
                  (b = s.events).fixed ||
                      f.forEach(function (e, t) {
                          K(w.start, e.children[0], te, { handleNumbers: [t] });
                      }),
                  b.tap && K(w.start, h, ie, {}),
                  b.hover && K(w.move, h, ne, { hover: !0 }),
                  b.drag &&
                      m.forEach(function (e, t) {
                          if (!1 !== e && 0 !== t && t !== m.length - 1) {
                              var i = f[t - 1],
                                  n = f[t],
                                  r = [e],
                                  a = [i, n],
                                  o = [t - 1, t];
                              c(e, s.cssClasses.draggable),
                                  b.fixed && (r.push(i.children[0]), r.push(n.children[0])),
                                  b.dragAll && ((a = f), (o = P)),
                                  r.forEach(function (t) {
                                      K(w.start, t, te, { handles: a, handleNumbers: o, connect: e });
                                  });
                          }
                      }),
                  me(s.start),
                  s.pips && W(s.pips),
                  s.tooltips && V(),
                  se("update" + C),
                  re("update" + C, function (e, t, i, n, r) {
                      P.forEach(function (e) {
                          var t = f[e],
                              n = oe(M, e, 0, !0, !0, !0),
                              a = oe(M, e, 100, !0, !0, !0),
                              o = r[e],
                              l = String(s.ariaFormat.to(i[e]));
                          (n = T.fromStepping(n).toFixed(1)),
                              (a = T.fromStepping(a).toFixed(1)),
                              (o = T.fromStepping(o).toFixed(1)),
                              t.children[0].setAttribute("aria-valuemin", n),
                              t.children[0].setAttribute("aria-valuemax", a),
                              t.children[0].setAttribute("aria-valuenow", o),
                              t.children[0].setAttribute("aria-valuetext", l);
                      });
                  });
              var ye = {
                  destroy: function () {
                      for (
                          se(C),
                              se(E),
                              Object.keys(s.cssClasses).forEach(function (e) {
                                  d(S, s.cssClasses[e]);
                              });
                          S.firstChild;

                      )
                          S.removeChild(S.firstChild);
                      delete S.noUiSlider;
                  },
                  steps: function () {
                      return P.map(ge);
                  },
                  on: re,
                  off: se,
                  get: ve,
                  set: me,
                  setHandle: function (e, t, i, n) {
                      if (!((e = Number(e)) >= 0 && e < P.length)) throw new Error("noUiSlider: invalid handle number, got: " + e);
                      pe(e, fe(t, e), !0, !0, n), ae("update", e), i && ae("set", e);
                  },
                  reset: function (e) {
                      me(s.start, e);
                  },
                  __moveHandles: function (e, t, i) {
                      ue(e, t, M, i);
                  },
                  options: u,
                  updateOptions: function (e, t) {
                      var i = ve(),
                          r = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                      r.forEach(function (t) {
                          void 0 !== e[t] && (u[t] = e[t]);
                      });
                      var a = Y(u);
                      r.forEach(function (t) {
                          void 0 !== e[t] && (s[t] = a[t]);
                      }),
                          (T = a.spectrum),
                          (s.margin = a.margin),
                          (s.limit = a.limit),
                          (s.padding = a.padding),
                          s.pips ? W(s.pips) : G(),
                          s.tooltips ? V() : R(),
                          (M = []),
                          me(n(e.start) ? e.start : i, t);
                  },
                  target: S,
                  removePips: G,
                  removeTooltips: R,
                  getPositions: function () {
                      return M.slice();
                  },
                  getTooltips: function () {
                      return g;
                  },
                  getOrigins: function () {
                      return f;
                  },
                  pips: W,
              };
              return ye;
          }
          function Z(e, t) {
              if (!e || !e.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + e);
              if (e.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
              var i = K(e, Y(t), t);
              return (e.noUiSlider = i), i;
          }
          var Q = { __spectrum: w, cssClasses: S, create: Z };
          (e.create = Z), (e.cssClasses = S), (e.default = Q), Object.defineProperty(e, "__esModule", { value: !0 });
      })(t);
  },
  function (e, t, i) {
      "use strict";
      function n(e) {
          return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
      }
      function r(e, t) {
          void 0 === e && (e = {}),
              void 0 === t && (t = {}),
              Object.keys(t).forEach(function (i) {
                  void 0 === e[i] ? (e[i] = t[i]) : n(t[i]) && n(e[i]) && Object.keys(t[i]).length > 0 && r(e[i], t[i]);
              });
      }
      i.d(t, "a", function () {
          return Z;
      });
      var s = {
          body: {},
          addEventListener: function () {},
          removeEventListener: function () {},
          activeElement: { blur: function () {}, nodeName: "" },
          querySelector: function () {
              return null;
          },
          querySelectorAll: function () {
              return [];
          },
          getElementById: function () {
              return null;
          },
          createEvent: function () {
              return { initEvent: function () {} };
          },
          createElement: function () {
              return {
                  children: [],
                  childNodes: [],
                  style: {},
                  setAttribute: function () {},
                  getElementsByTagName: function () {
                      return [];
                  },
              };
          },
          createElementNS: function () {
              return {};
          },
          importNode: function () {
              return null;
          },
          location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
      };
      function a() {
          var e = "undefined" != typeof document ? document : {};
          return r(e, s), e;
      }
      var o = {
          document: s,
          navigator: { userAgent: "" },
          location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
          history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
          CustomEvent: function () {
              return this;
          },
          addEventListener: function () {},
          removeEventListener: function () {},
          getComputedStyle: function () {
              return {
                  getPropertyValue: function () {
                      return "";
                  },
              };
          },
          Image: function () {},
          Date: function () {},
          screen: {},
          setTimeout: function () {},
          clearTimeout: function () {},
          matchMedia: function () {
              return {};
          },
          requestAnimationFrame: function (e) {
              return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
          },
          cancelAnimationFrame: function (e) {
              "undefined" != typeof setTimeout && clearTimeout(e);
          },
      };
      function l() {
          var e = "undefined" != typeof window ? window : {};
          return r(e, o), e;
      }
      function u(e) {
          return (u = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
      }
      function c(e, t) {
          return (c =
              Object.setPrototypeOf ||
              function (e, t) {
                  return (e.__proto__ = t), e;
              })(e, t);
      }
      function d() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
          } catch (e) {
              return !1;
          }
      }
      function p(e, t, i) {
          return (p = d()
              ? Reflect.construct
              : function (e, t, i) {
                    var n = [null];
                    n.push.apply(n, t);
                    var r = new (Function.bind.apply(e, n))();
                    return i && c(r, i.prototype), r;
                }).apply(null, arguments);
      }
      function h(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (h = function (e) {
              if (null === e || ((i = e), -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
              var i;
              if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
              if (void 0 !== t) {
                  if (t.has(e)) return t.get(e);
                  t.set(e, n);
              }
              function n() {
                  return p(e, arguments, u(this).constructor);
              }
              return (n.prototype = Object.create(e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } })), c(n, e);
          })(e);
      }
      var f = (function (e) {
          var t, i;
          function n(t) {
              var i, n, r;
              return (
                  (i = e.call.apply(e, [this].concat(t)) || this),
                  (n = (function (e) {
                      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return e;
                  })(i)),
                  (r = n.__proto__),
                  Object.defineProperty(n, "__proto__", {
                      get: function () {
                          return r;
                      },
                      set: function (e) {
                          r.__proto__ = e;
                      },
                  }),
                  i
              );
          }
          return (i = e), ((t = n).prototype = Object.create(i.prototype)), (t.prototype.constructor = t), (t.__proto__ = i), n;
      })(h(Array));
      function m(e) {
          void 0 === e && (e = []);
          var t = [];
          return (
              e.forEach(function (e) {
                  Array.isArray(e) ? t.push.apply(t, m(e)) : t.push(e);
              }),
              t
          );
      }
      function v(e, t) {
          return Array.prototype.filter.call(e, t);
      }
      function g(e, t) {
          var i = l(),
              n = a(),
              r = [];
          if (!t && e instanceof f) return e;
          if (!e) return new f(r);
          if ("string" == typeof e) {
              var s = e.trim();
              if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                  var o = "div";
                  0 === s.indexOf("<li") && (o = "ul"),
                      0 === s.indexOf("<tr") && (o = "tbody"),
                      (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (o = "tr"),
                      0 === s.indexOf("<tbody") && (o = "table"),
                      0 === s.indexOf("<option") && (o = "select");
                  var u = n.createElement(o);
                  u.innerHTML = s;
                  for (var c = 0; c < u.childNodes.length; c += 1) r.push(u.childNodes[c]);
              } else
                  r = (function (e, t) {
                      if ("string" != typeof e) return [e];
                      for (var i = [], n = t.querySelectorAll(e), r = 0; r < n.length; r += 1) i.push(n[r]);
                      return i;
                  })(e.trim(), t || n);
          } else if (e.nodeType || e === i || e === n) r.push(e);
          else if (Array.isArray(e)) {
              if (e instanceof f) return e;
              r = e;
          }
          return new f(
              (function (e) {
                  for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
                  return t;
              })(r)
          );
      }
      g.fn = f.prototype;
      var y = "resize scroll".split(" ");
      function b(e) {
          return function () {
              for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
              if (void 0 === i[0]) {
                  for (var r = 0; r < this.length; r += 1) y.indexOf(e) < 0 && (e in this[r] ? this[r][e]() : g(this[r]).trigger(e));
                  return this;
              }
              return this.on.apply(this, [e].concat(i));
          };
      }
      b("click"),
          b("blur"),
          b("focus"),
          b("focusin"),
          b("focusout"),
          b("keyup"),
          b("keydown"),
          b("keypress"),
          b("submit"),
          b("change"),
          b("mousedown"),
          b("mousemove"),
          b("mouseup"),
          b("mouseenter"),
          b("mouseleave"),
          b("mouseout"),
          b("mouseover"),
          b("touchstart"),
          b("touchend"),
          b("touchmove"),
          b("resize"),
          b("scroll");
      var w = {
          addClass: function () {
              for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
              var n = m(
                  t.map(function (e) {
                      return e.split(" ");
                  })
              );
              return (
                  this.forEach(function (e) {
                      var t;
                      (t = e.classList).add.apply(t, n);
                  }),
                  this
              );
          },
          removeClass: function () {
              for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
              var n = m(
                  t.map(function (e) {
                      return e.split(" ");
                  })
              );
              return (
                  this.forEach(function (e) {
                      var t;
                      (t = e.classList).remove.apply(t, n);
                  }),
                  this
              );
          },
          hasClass: function () {
              for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
              var n = m(
                  t.map(function (e) {
                      return e.split(" ");
                  })
              );
              return (
                  v(this, function (e) {
                      return (
                          n.filter(function (t) {
                              return e.classList.contains(t);
                          }).length > 0
                      );
                  }).length > 0
              );
          },
          toggleClass: function () {
              for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
              var n = m(
                  t.map(function (e) {
                      return e.split(" ");
                  })
              );
              this.forEach(function (e) {
                  n.forEach(function (t) {
                      e.classList.toggle(t);
                  });
              });
          },
          attr: function (e, t) {
              if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
              for (var i = 0; i < this.length; i += 1)
                  if (2 === arguments.length) this[i].setAttribute(e, t);
                  else for (var n in e) (this[i][n] = e[n]), this[i].setAttribute(n, e[n]);
              return this;
          },
          removeAttr: function (e) {
              for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
              return this;
          },
          transform: function (e) {
              for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
              return this;
          },
          transition: function (e) {
              for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
              return this;
          },
          on: function () {
              for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
              var n = t[0],
                  r = t[1],
                  s = t[2],
                  a = t[3];
              function o(e) {
                  var t = e.target;
                  if (t) {
                      var i = e.target.dom7EventData || [];
                      if ((i.indexOf(e) < 0 && i.unshift(e), g(t).is(r))) s.apply(t, i);
                      else for (var n = g(t).parents(), a = 0; a < n.length; a += 1) g(n[a]).is(r) && s.apply(n[a], i);
                  }
              }
              function l(e) {
                  var t = (e && e.target && e.target.dom7EventData) || [];
                  t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
              }
              "function" == typeof t[1] && ((n = t[0]), (s = t[1]), (a = t[2]), (r = void 0)), a || (a = !1);
              for (var u, c = n.split(" "), d = 0; d < this.length; d += 1) {
                  var p = this[d];
                  if (r)
                      for (u = 0; u < c.length; u += 1) {
                          var h = c[u];
                          p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[h] || (p.dom7LiveListeners[h] = []), p.dom7LiveListeners[h].push({ listener: s, proxyListener: o }), p.addEventListener(h, o, a);
                      }
                  else
                      for (u = 0; u < c.length; u += 1) {
                          var f = c[u];
                          p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[f] || (p.dom7Listeners[f] = []), p.dom7Listeners[f].push({ listener: s, proxyListener: l }), p.addEventListener(f, l, a);
                      }
              }
              return this;
          },
          off: function () {
              for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
              var n = t[0],
                  r = t[1],
                  s = t[2],
                  a = t[3];
              "function" == typeof t[1] && ((n = t[0]), (s = t[1]), (a = t[2]), (r = void 0)), a || (a = !1);
              for (var o = n.split(" "), l = 0; l < o.length; l += 1)
                  for (var u = o[l], c = 0; c < this.length; c += 1) {
                      var d = this[c],
                          p = void 0;
                      if ((!r && d.dom7Listeners ? (p = d.dom7Listeners[u]) : r && d.dom7LiveListeners && (p = d.dom7LiveListeners[u]), p && p.length))
                          for (var h = p.length - 1; h >= 0; h -= 1) {
                              var f = p[h];
                              (s && f.listener === s) || (s && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === s)
                                  ? (d.removeEventListener(u, f.proxyListener, a), p.splice(h, 1))
                                  : s || (d.removeEventListener(u, f.proxyListener, a), p.splice(h, 1));
                          }
                  }
              return this;
          },
          trigger: function () {
              for (var e = l(), t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
              for (var r = i[0].split(" "), s = i[1], a = 0; a < r.length; a += 1)
                  for (var o = r[a], u = 0; u < this.length; u += 1) {
                      var c = this[u];
                      if (e.CustomEvent) {
                          var d = new e.CustomEvent(o, { detail: s, bubbles: !0, cancelable: !0 });
                          (c.dom7EventData = i.filter(function (e, t) {
                              return t > 0;
                          })),
                              c.dispatchEvent(d),
                              (c.dom7EventData = []),
                              delete c.dom7EventData;
                      }
                  }
              return this;
          },
          transitionEnd: function (e) {
              var t = this;
              return (
                  e &&
                      t.on("transitionend", function i(n) {
                          n.target === this && (e.call(this, n), t.off("transitionend", i));
                      }),
                  this
              );
          },
          outerWidth: function (e) {
              if (this.length > 0) {
                  if (e) {
                      var t = this.styles();
                      return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                  }
                  return this[0].offsetWidth;
              }
              return null;
          },
          outerHeight: function (e) {
              if (this.length > 0) {
                  if (e) {
                      var t = this.styles();
                      return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                  }
                  return this[0].offsetHeight;
              }
              return null;
          },
          styles: function () {
              var e = l();
              return this[0] ? e.getComputedStyle(this[0], null) : {};
          },
          offset: function () {
              if (this.length > 0) {
                  var e = l(),
                      t = a(),
                      i = this[0],
                      n = i.getBoundingClientRect(),
                      r = t.body,
                      s = i.clientTop || r.clientTop || 0,
                      o = i.clientLeft || r.clientLeft || 0,
                      u = i === e ? e.scrollY : i.scrollTop,
                      c = i === e ? e.scrollX : i.scrollLeft;
                  return { top: n.top + u - s, left: n.left + c - o };
              }
              return null;
          },
          css: function (e, t) {
              var i,
                  n = l();
              if (1 === arguments.length) {
                  if ("string" != typeof e) {
                      for (i = 0; i < this.length; i += 1) for (var r in e) this[i].style[r] = e[r];
                      return this;
                  }
                  if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
              }
              if (2 === arguments.length && "string" == typeof e) {
                  for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                  return this;
              }
              return this;
          },
          each: function (e) {
              return e
                  ? (this.forEach(function (t, i) {
                        e.apply(t, [t, i]);
                    }),
                    this)
                  : this;
          },
          html: function (e) {
              if (void 0 === e) return this[0] ? this[0].innerHTML : null;
              for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
              return this;
          },
          text: function (e) {
              if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
              for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
              return this;
          },
          is: function (e) {
              var t,
                  i,
                  n = l(),
                  r = a(),
                  s = this[0];
              if (!s || void 0 === e) return !1;
              if ("string" == typeof e) {
                  if (s.matches) return s.matches(e);
                  if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                  if (s.msMatchesSelector) return s.msMatchesSelector(e);
                  for (t = g(e), i = 0; i < t.length; i += 1) if (t[i] === s) return !0;
                  return !1;
              }
              if (e === r) return s === r;
              if (e === n) return s === n;
              if (e.nodeType || e instanceof f) {
                  for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === s) return !0;
                  return !1;
              }
              return !1;
          },
          index: function () {
              var e,
                  t = this[0];
              if (t) {
                  for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                  return e;
              }
          },
          eq: function (e) {
              if (void 0 === e) return this;
              var t = this.length;
              if (e > t - 1) return g([]);
              if (e < 0) {
                  var i = t + e;
                  return g(i < 0 ? [] : [this[i]]);
              }
              return g([this[e]]);
          },
          append: function () {
              for (var e, t = a(), i = 0; i < arguments.length; i += 1) {
                  e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                  for (var n = 0; n < this.length; n += 1)
                      if ("string" == typeof e) {
                          var r = t.createElement("div");
                          for (r.innerHTML = e; r.firstChild; ) this[n].appendChild(r.firstChild);
                      } else if (e instanceof f) for (var s = 0; s < e.length; s += 1) this[n].appendChild(e[s]);
                      else this[n].appendChild(e);
              }
              return this;
          },
          prepend: function (e) {
              var t,
                  i,
                  n = a();
              for (t = 0; t < this.length; t += 1)
                  if ("string" == typeof e) {
                      var r = n.createElement("div");
                      for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(r.childNodes[i], this[t].childNodes[0]);
                  } else if (e instanceof f) for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                  else this[t].insertBefore(e, this[t].childNodes[0]);
              return this;
          },
          next: function (e) {
              return this.length > 0 ? (e ? (this[0].nextElementSibling && g(this[0].nextElementSibling).is(e) ? g([this[0].nextElementSibling]) : g([])) : this[0].nextElementSibling ? g([this[0].nextElementSibling]) : g([])) : g([]);
          },
          nextAll: function (e) {
              var t = [],
                  i = this[0];
              if (!i) return g([]);
              for (; i.nextElementSibling; ) {
                  var n = i.nextElementSibling;
                  e ? g(n).is(e) && t.push(n) : t.push(n), (i = n);
              }
              return g(t);
          },
          prev: function (e) {
              if (this.length > 0) {
                  var t = this[0];
                  return e ? (t.previousElementSibling && g(t.previousElementSibling).is(e) ? g([t.previousElementSibling]) : g([])) : t.previousElementSibling ? g([t.previousElementSibling]) : g([]);
              }
              return g([]);
          },
          prevAll: function (e) {
              var t = [],
                  i = this[0];
              if (!i) return g([]);
              for (; i.previousElementSibling; ) {
                  var n = i.previousElementSibling;
                  e ? g(n).is(e) && t.push(n) : t.push(n), (i = n);
              }
              return g(t);
          },
          parent: function (e) {
              for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? g(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
              return g(t);
          },
          parents: function (e) {
              for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].parentNode; n; ) e ? g(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
              return g(t);
          },
          closest: function (e) {
              var t = this;
              return void 0 === e ? g([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
          },
          find: function (e) {
              for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].querySelectorAll(e), r = 0; r < n.length; r += 1) t.push(n[r]);
              return g(t);
          },
          children: function (e) {
              for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].children, r = 0; r < n.length; r += 1) (e && !g(n[r]).is(e)) || t.push(n[r]);
              return g(t);
          },
          filter: function (e) {
              return g(v(this, e));
          },
          remove: function () {
              for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
              return this;
          },
      };
      Object.keys(w).forEach(function (e) {
          g.fn[e] = w[e];
      });
      var x,
          S,
          E,
          C = g;
      function T(e, t) {
          return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function k() {
          return Date.now();
      }
      function M(e, t) {
          void 0 === t && (t = "x");
          var i,
              n,
              r,
              s = l(),
              a = s.getComputedStyle(e, null);
          return (
              s.WebKitCSSMatrix
                  ? ((n = a.transform || a.webkitTransform).split(",").length > 6 &&
                        (n = n
                            .split(", ")
                            .map(function (e) {
                                return e.replace(",", ".");
                            })
                            .join(", ")),
                    (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
                  : (i = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
              "x" === t && (n = s.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
              "y" === t && (n = s.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
              n || 0
          );
      }
      function P(e) {
          return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
      }
      function A() {
          for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
              var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
              if (null != i)
                  for (var n = Object.keys(Object(i)), r = 0, s = n.length; r < s; r += 1) {
                      var a = n[r],
                          o = Object.getOwnPropertyDescriptor(i, a);
                      void 0 !== o && o.enumerable && (P(e[a]) && P(i[a]) ? A(e[a], i[a]) : !P(e[a]) && P(i[a]) ? ((e[a] = {}), A(e[a], i[a])) : (e[a] = i[a]));
                  }
          }
          return e;
      }
      function $(e, t) {
          Object.keys(t).forEach(function (i) {
              P(t[i]) &&
                  Object.keys(t[i]).forEach(function (n) {
                      "function" == typeof t[i][n] && (t[i][n] = t[i][n].bind(e));
                  }),
                  (e[i] = t[i]);
          });
      }
      function D() {
          return (
              x ||
                  (x = (function () {
                      var e = l(),
                          t = a();
                      return {
                          touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
                          pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
                          observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
                          passiveListener: (function () {
                              var t = !1;
                              try {
                                  var i = Object.defineProperty({}, "passive", {
                                      get: function () {
                                          t = !0;
                                      },
                                  });
                                  e.addEventListener("testPassiveListener", null, i);
                              } catch (e) {}
                              return t;
                          })(),
                          gestures: "ongesturestart" in e,
                      };
                  })()),
              x
          );
      }
      function O(e) {
          return (
              void 0 === e && (e = {}),
              S ||
                  (S = (function (e) {
                      var t = (void 0 === e ? {} : e).userAgent,
                          i = D(),
                          n = l(),
                          r = n.navigator.platform,
                          s = t || n.navigator.userAgent,
                          a = { ios: !1, android: !1 },
                          o = n.screen.width,
                          u = n.screen.height,
                          c = s.match(/(Android);?[\s\/]+([\d.]+)?/),
                          d = s.match(/(iPad).*OS\s([\d_]+)/),
                          p = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                          h = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                          f = "Win32" === r,
                          m = "MacIntel" === r;
                      return (
                          !d &&
                              m &&
                              i.touch &&
                              ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + u) >= 0 &&
                              ((d = s.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), (m = !1)),
                          c && !f && ((a.os = "android"), (a.android = !0)),
                          (d || h || p) && ((a.os = "ios"), (a.ios = !0)),
                          a
                      );
                  })(e)),
              S
          );
      }
      function L() {
          return (
              E ||
                  (E = (function () {
                      var e,
                          t = l();
                      return {
                          isEdge: !!t.navigator.userAgent.match(/Edge/g),
                          isSafari: ((e = t.navigator.userAgent.toLowerCase()), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
                      };
                  })()),
              E
          );
      }
      var N = {
          name: "resize",
          create: function () {
              var e = this;
              A(e, {
                  resize: {
                      observer: null,
                      createObserver: function () {
                          e &&
                              !e.destroyed &&
                              e.initialized &&
                              ((e.resize.observer = new ResizeObserver(function (t) {
                                  var i = e.width,
                                      n = e.height,
                                      r = i,
                                      s = n;
                                  t.forEach(function (t) {
                                      var i = t.contentBoxSize,
                                          n = t.contentRect,
                                          a = t.target;
                                      (a && a !== e.el) || ((r = n ? n.width : (i[0] || i).inlineSize), (s = n ? n.height : (i[0] || i).blockSize));
                                  }),
                                      (r === i && s === n) || e.resize.resizeHandler();
                              })),
                              e.resize.observer.observe(e.el));
                      },
                      removeObserver: function () {
                          e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), (e.resize.observer = null));
                      },
                      resizeHandler: function () {
                          e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                      },
                      orientationChangeHandler: function () {
                          e && !e.destroyed && e.initialized && e.emit("orientationchange");
                      },
                  },
              });
          },
          on: {
              init: function (e) {
                  var t = l();
                  e.params.resizeObserver && void 0 !== l().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler));
              },
              destroy: function (e) {
                  var t = l();
                  e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
              },
          },
      };
      function _() {
          return (_ =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var z = {
              attach: function (e, t) {
                  void 0 === t && (t = {});
                  var i = l(),
                      n = this,
                      r = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
                          if (1 !== e.length) {
                              var t = function () {
                                  n.emit("observerUpdate", e[0]);
                              };
                              i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
                          } else n.emit("observerUpdate", e[0]);
                      });
                  r.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), n.observer.observers.push(r);
              },
              init: function () {
                  if (this.support.observer && this.params.observer) {
                      if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                      this.observer.attach(this.$el[0], { childList: this.params.observeSlideChildren }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
                  }
              },
              destroy: function () {
                  this.observer.observers.forEach(function (e) {
                      e.disconnect();
                  }),
                      (this.observer.observers = []);
              },
          },
          j = {
              name: "observer",
              params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
              create: function () {
                  $(this, { observer: _({}, z, { observers: [] }) });
              },
              on: {
                  init: function (e) {
                      e.observer.init();
                  },
                  destroy: function (e) {
                      e.observer.destroy();
                  },
              },
          };
      function I(e) {
          var t = a(),
              i = l(),
              n = this.touchEventsData,
              r = this.params,
              s = this.touches;
          if (!this.animating || !r.preventInteractionOnTransition) {
              var o = e;
              o.originalEvent && (o = o.originalEvent);
              var u = C(o.target);
              if ("wrapper" !== r.touchEventsTarget || u.closest(this.wrapperEl).length)
                  if (((n.isTouchEvent = "touchstart" === o.type), n.isTouchEvent || !("which" in o) || 3 !== o.which))
                      if (!(!n.isTouchEvent && "button" in o && o.button > 0))
                          if (!n.isTouched || !n.isMoved)
                              if (
                                  (!!r.noSwipingClass && "" !== r.noSwipingClass && o.target && o.target.shadowRoot && e.path && e.path[0] && (u = C(e.path[0])),
                                  r.noSwiping && u.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0])
                              )
                                  this.allowClick = !0;
                              else if (!r.swipeHandler || u.closest(r.swipeHandler)[0]) {
                                  (s.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX), (s.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
                                  var c = s.currentX,
                                      d = s.currentY,
                                      p = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                                      h = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                                  if (p && (c <= h || c >= i.innerWidth - h)) {
                                      if ("prevent" !== p) return;
                                      e.preventDefault();
                                  }
                                  if (
                                      (A(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                                      (s.startX = c),
                                      (s.startY = d),
                                      (n.touchStartTime = k()),
                                      (this.allowClick = !0),
                                      this.updateSize(),
                                      (this.swipeDirection = void 0),
                                      r.threshold > 0 && (n.allowThresholdMove = !1),
                                      "touchstart" !== o.type)
                                  ) {
                                      var f = !0;
                                      u.is(n.formElements) && (f = !1), t.activeElement && C(t.activeElement).is(n.formElements) && t.activeElement !== u[0] && t.activeElement.blur();
                                      var m = f && this.allowTouchMove && r.touchStartPreventDefault;
                                      (!r.touchStartForcePreventDefault && !m) || u[0].isContentEditable || o.preventDefault();
                                  }
                                  this.emit("touchStart", o);
                              }
          }
      }
      function H(e) {
          var t = a(),
              i = this.touchEventsData,
              n = this.params,
              r = this.touches,
              s = this.rtlTranslate,
              o = e;
          if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
              if (!i.isTouchEvent || "touchmove" === o.type) {
                  var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                      u = "touchmove" === o.type ? l.pageX : o.pageX,
                      c = "touchmove" === o.type ? l.pageY : o.pageY;
                  if (o.preventedByNestedSwiper) return (r.startX = u), void (r.startY = c);
                  if (!this.allowTouchMove) return (this.allowClick = !1), void (i.isTouched && (A(r, { startX: u, startY: c, currentX: u, currentY: c }), (i.touchStartTime = k())));
                  if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                      if (this.isVertical()) {
                          if ((c < r.startY && this.translate <= this.maxTranslate()) || (c > r.startY && this.translate >= this.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
                      } else if ((u < r.startX && this.translate <= this.maxTranslate()) || (u > r.startX && this.translate >= this.minTranslate())) return;
                  if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && C(o.target).is(i.formElements)) return (i.isMoved = !0), void (this.allowClick = !1);
                  if ((i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1))) {
                      (r.currentX = u), (r.currentY = c);
                      var d = r.currentX - r.startX,
                          p = r.currentY - r.startY;
                      if (!(this.params.threshold && Math.sqrt(Math.pow(d, 2) + Math.pow(p, 2)) < this.params.threshold)) {
                          var h;
                          if (void 0 === i.isScrolling)
                              (this.isHorizontal() && r.currentY === r.startY) || (this.isVertical() && r.currentX === r.startX)
                                  ? (i.isScrolling = !1)
                                  : d * d + p * p >= 25 && ((h = (180 * Math.atan2(Math.abs(p), Math.abs(d))) / Math.PI), (i.isScrolling = this.isHorizontal() ? h > n.touchAngle : 90 - h > n.touchAngle));
                          if ((i.isScrolling && this.emit("touchMoveOpposite", o), void 0 === i.startMoving && ((r.currentX === r.startX && r.currentY === r.startY) || (i.startMoving = !0)), i.isScrolling)) i.isTouched = !1;
                          else if (i.startMoving) {
                              (this.allowClick = !1),
                                  !n.cssMode && o.cancelable && o.preventDefault(),
                                  n.touchMoveStopPropagation && !n.nested && o.stopPropagation(),
                                  i.isMoved ||
                                      (n.loop && this.loopFix(),
                                      (i.startTranslate = this.getTranslate()),
                                      this.setTransition(0),
                                      this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                      (i.allowMomentumBounce = !1),
                                      !n.grabCursor || (!0 !== this.allowSlideNext && !0 !== this.allowSlidePrev) || this.setGrabCursor(!0),
                                      this.emit("sliderFirstMove", o)),
                                  this.emit("sliderMove", o),
                                  (i.isMoved = !0);
                              var f = this.isHorizontal() ? d : p;
                              (r.diff = f), (f *= n.touchRatio), s && (f = -f), (this.swipeDirection = f > 0 ? "prev" : "next"), (i.currentTranslate = f + i.startTranslate);
                              var m = !0,
                                  v = n.resistanceRatio;
                              if (
                                  (n.touchReleaseOnEdges && (v = 0),
                                  f > 0 && i.currentTranslate > this.minTranslate()
                                      ? ((m = !1), n.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, v)))
                                      : f < 0 && i.currentTranslate < this.maxTranslate() && ((m = !1), n.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, v))),
                                  m && (o.preventedByNestedSwiper = !0),
                                  !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                  !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                  this.allowSlidePrev || this.allowSlideNext || (i.currentTranslate = i.startTranslate),
                                  n.threshold > 0)
                              ) {
                                  if (!(Math.abs(f) > n.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                  if (!i.allowThresholdMove)
                                      return (
                                          (i.allowThresholdMove = !0),
                                          (r.startX = r.currentX),
                                          (r.startY = r.currentY),
                                          (i.currentTranslate = i.startTranslate),
                                          void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                      );
                              }
                              n.followFinger &&
                                  !n.cssMode &&
                                  ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()),
                                  n.freeMode &&
                                      (0 === i.velocities.length && i.velocities.push({ position: r[this.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }),
                                      i.velocities.push({ position: r[this.isHorizontal() ? "currentX" : "currentY"], time: k() })),
                                  this.updateProgress(i.currentTranslate),
                                  this.setTranslate(i.currentTranslate));
                          }
                      }
                  }
              }
          } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
      }
      function q(e) {
          var t = this,
              i = t.touchEventsData,
              n = t.params,
              r = t.touches,
              s = t.rtlTranslate,
              a = t.$wrapperEl,
              o = t.slidesGrid,
              l = t.snapGrid,
              u = e;
          if ((u.originalEvent && (u = u.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", u), (i.allowTouchCallbacks = !1), !i.isTouched))
              return i.isMoved && n.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1);
          n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
          var c,
              d = k(),
              p = d - i.touchStartTime;
          if (
              (t.allowClick && (t.updateClickedSlide(u), t.emit("tap click", u), p < 300 && d - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", u)),
              (i.lastClickTime = k()),
              T(function () {
                  t.destroyed || (t.allowClick = !0);
              }),
              !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate)
          )
              return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
          if (((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1), (c = n.followFinger ? (s ? t.translate : -t.translate) : -i.currentTranslate), !n.cssMode))
              if (n.freeMode) {
                  if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                  if (c > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                  if (n.freeModeMomentum) {
                      if (i.velocities.length > 1) {
                          var h = i.velocities.pop(),
                              f = i.velocities.pop(),
                              m = h.position - f.position,
                              v = h.time - f.time;
                          (t.velocity = m / v), (t.velocity /= 2), Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (v > 150 || k() - h.time > 300) && (t.velocity = 0);
                      } else t.velocity = 0;
                      (t.velocity *= n.freeModeMomentumVelocityRatio), (i.velocities.length = 0);
                      var g = 1e3 * n.freeModeMomentumRatio,
                          y = t.velocity * g,
                          b = t.translate + y;
                      s && (b = -b);
                      var w,
                          x,
                          S = !1,
                          E = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                      if (b < t.maxTranslate())
                          n.freeModeMomentumBounce ? (b + t.maxTranslate() < -E && (b = t.maxTranslate() - E), (w = t.maxTranslate()), (S = !0), (i.allowMomentumBounce = !0)) : (b = t.maxTranslate()),
                              n.loop && n.centeredSlides && (x = !0);
                      else if (b > t.minTranslate())
                          n.freeModeMomentumBounce ? (b - t.minTranslate() > E && (b = t.minTranslate() + E), (w = t.minTranslate()), (S = !0), (i.allowMomentumBounce = !0)) : (b = t.minTranslate()),
                              n.loop && n.centeredSlides && (x = !0);
                      else if (n.freeModeSticky) {
                          for (var C, M = 0; M < l.length; M += 1)
                              if (l[M] > -b) {
                                  C = M;
                                  break;
                              }
                          b = -(b = Math.abs(l[C] - b) < Math.abs(l[C - 1] - b) || "next" === t.swipeDirection ? l[C] : l[C - 1]);
                      }
                      if (
                          (x &&
                              t.once("transitionEnd", function () {
                                  t.loopFix();
                              }),
                          0 !== t.velocity)
                      ) {
                          if (((g = s ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity)), n.freeModeSticky)) {
                              var P = Math.abs((s ? -b : b) - t.translate),
                                  A = t.slidesSizesGrid[t.activeIndex];
                              g = P < A ? n.speed : P < 2 * A ? 1.5 * n.speed : 2.5 * n.speed;
                          }
                      } else if (n.freeModeSticky) return void t.slideToClosest();
                      n.freeModeMomentumBounce && S
                          ? (t.updateProgress(w),
                            t.setTransition(g),
                            t.setTranslate(b),
                            t.transitionStart(!0, t.swipeDirection),
                            (t.animating = !0),
                            a.transitionEnd(function () {
                                t &&
                                    !t.destroyed &&
                                    i.allowMomentumBounce &&
                                    (t.emit("momentumBounce"),
                                    t.setTransition(n.speed),
                                    setTimeout(function () {
                                        t.setTranslate(w),
                                            a.transitionEnd(function () {
                                                t && !t.destroyed && t.transitionEnd();
                                            });
                                    }, 0));
                            }))
                          : t.velocity
                          ? (t.updateProgress(b),
                            t.setTransition(g),
                            t.setTranslate(b),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating ||
                                ((t.animating = !0),
                                a.transitionEnd(function () {
                                    t && !t.destroyed && t.transitionEnd();
                                })))
                          : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(b)),
                          t.updateActiveIndex(),
                          t.updateSlidesClasses();
                  } else {
                      if (n.freeModeSticky) return void t.slideToClosest();
                      n.freeMode && t.emit("_freeModeNoMomentumRelease");
                  }
                  (!n.freeModeMomentum || p >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
              } else {
                  for (var $ = 0, D = t.slidesSizesGrid[0], O = 0; O < o.length; O += O < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                      var L = O < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                      void 0 !== o[O + L] ? c >= o[O] && c < o[O + L] && (($ = O), (D = o[O + L] - o[O])) : c >= o[O] && (($ = O), (D = o[o.length - 1] - o[o.length - 2]));
                  }
                  var N = (c - o[$]) / D,
                      _ = $ < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                  if (p > n.longSwipesMs) {
                      if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                      "next" === t.swipeDirection && (N >= n.longSwipesRatio ? t.slideTo($ + _) : t.slideTo($)), "prev" === t.swipeDirection && (N > 1 - n.longSwipesRatio ? t.slideTo($ + _) : t.slideTo($));
                  } else {
                      if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                      t.navigation && (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl)
                          ? u.target === t.navigation.nextEl
                              ? t.slideTo($ + _)
                              : t.slideTo($)
                          : ("next" === t.swipeDirection && t.slideTo($ + _), "prev" === t.swipeDirection && t.slideTo($));
                  }
              }
      }
      function R() {
          var e = this.params,
              t = this.el;
          if (!t || 0 !== t.offsetWidth) {
              e.breakpoints && this.setBreakpoint();
              var i = this.allowSlideNext,
                  n = this.allowSlidePrev,
                  r = this.snapGrid;
              (this.allowSlideNext = !0),
                  (this.allowSlidePrev = !0),
                  this.updateSize(),
                  this.updateSlides(),
                  this.updateSlidesClasses(),
                  ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0),
                  this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
                  (this.allowSlidePrev = n),
                  (this.allowSlideNext = i),
                  this.params.watchOverflow && r !== this.snapGrid && this.checkOverflow();
          }
      }
      function V(e) {
          this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function B() {
          var e = this.wrapperEl,
              t = this.rtlTranslate;
          (this.previousTranslate = this.translate),
              this.isHorizontal() ? (this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft) : (this.translate = -e.scrollTop),
              -0 === this.translate && (this.translate = 0),
              this.updateActiveIndex(),
              this.updateSlidesClasses();
          var i = this.maxTranslate() - this.minTranslate();
          (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
      }
      var U = !1;
      function F() {}
      var G = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "container",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !1,
          nested: !1,
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: 0.02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: "column",
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !1,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: "swiper-container-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
          _emitClasses: !1,
      };
      function W(e, t) {
          for (var i = 0; i < t.length; i++) {
              var n = t[i];
              (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
      }
      var X = {
              modular: {
                  useParams: function (e) {
                      var t = this;
                      t.modules &&
                          Object.keys(t.modules).forEach(function (i) {
                              var n = t.modules[i];
                              n.params && A(e, n.params);
                          });
                  },
                  useModules: function (e) {
                      void 0 === e && (e = {});
                      var t = this;
                      t.modules &&
                          Object.keys(t.modules).forEach(function (i) {
                              var n = t.modules[i],
                                  r = e[i] || {};
                              n.on &&
                                  t.on &&
                                  Object.keys(n.on).forEach(function (e) {
                                      t.on(e, n.on[e]);
                                  }),
                                  n.create && n.create.bind(t)(r);
                          });
                  },
              },
              eventsEmitter: {
                  on: function (e, t, i) {
                      var n = this;
                      if ("function" != typeof t) return n;
                      var r = i ? "unshift" : "push";
                      return (
                          e.split(" ").forEach(function (e) {
                              n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][r](t);
                          }),
                          n
                      );
                  },
                  once: function (e, t, i) {
                      var n = this;
                      if ("function" != typeof t) return n;
                      function r() {
                          n.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                          for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                          t.apply(n, s);
                      }
                      return (r.__emitterProxy = t), n.on(e, r, i);
                  },
                  onAny: function (e, t) {
                      if ("function" != typeof e) return this;
                      var i = t ? "unshift" : "push";
                      return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this;
                  },
                  offAny: function (e) {
                      if (!this.eventsAnyListeners) return this;
                      var t = this.eventsAnyListeners.indexOf(e);
                      return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
                  },
                  off: function (e, t) {
                      var i = this;
                      return i.eventsListeners
                          ? (e.split(" ").forEach(function (e) {
                                void 0 === t
                                    ? (i.eventsListeners[e] = [])
                                    : i.eventsListeners[e] &&
                                      i.eventsListeners[e].forEach(function (n, r) {
                                          (n === t || (n.__emitterProxy && n.__emitterProxy === t)) && i.eventsListeners[e].splice(r, 1);
                                      });
                            }),
                            i)
                          : i;
                  },
                  emit: function () {
                      var e,
                          t,
                          i,
                          n = this;
                      if (!n.eventsListeners) return n;
                      for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                      "string" == typeof s[0] || Array.isArray(s[0]) ? ((e = s[0]), (t = s.slice(1, s.length)), (i = n)) : ((e = s[0].events), (t = s[0].data), (i = s[0].context || n)), t.unshift(i);
                      var o = Array.isArray(e) ? e : e.split(" ");
                      return (
                          o.forEach(function (e) {
                              n.eventsAnyListeners &&
                                  n.eventsAnyListeners.length &&
                                  n.eventsAnyListeners.forEach(function (n) {
                                      n.apply(i, [e].concat(t));
                                  }),
                                  n.eventsListeners &&
                                      n.eventsListeners[e] &&
                                      n.eventsListeners[e].forEach(function (e) {
                                          e.apply(i, t);
                                      });
                          }),
                          n
                      );
                  },
              },
              update: {
                  updateSize: function () {
                      var e,
                          t,
                          i = this.$el;
                      (e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth),
                          (t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight),
                          (0 === e && this.isHorizontal()) ||
                              (0 === t && this.isVertical()) ||
                              ((e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10)),
                              (t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10)),
                              Number.isNaN(e) && (e = 0),
                              Number.isNaN(t) && (t = 0),
                              A(this, { width: e, height: t, size: this.isHorizontal() ? e : t }));
                  },
                  updateSlides: function () {
                      var e = this,
                          t = function (t) {
                              return e.isHorizontal()
                                  ? t
                                  : {
                                        width: "height",
                                        "margin-top": "margin-left",
                                        "margin-bottom ": "margin-right",
                                        "margin-left": "margin-top",
                                        "margin-right": "margin-bottom",
                                        "padding-left": "padding-top",
                                        "padding-right": "padding-bottom",
                                        marginRight: "marginBottom",
                                    }[t];
                          },
                          i = function (e, i) {
                              return parseFloat(e.getPropertyValue(t(i)) || 0);
                          },
                          n = l(),
                          r = e.params,
                          s = e.$wrapperEl,
                          a = e.size,
                          o = e.rtlTranslate,
                          u = e.wrongRTL,
                          c = e.virtual && r.virtual.enabled,
                          d = c ? e.virtual.slides.length : e.slides.length,
                          p = s.children("." + e.params.slideClass),
                          h = c ? e.virtual.slides.length : p.length,
                          f = [],
                          m = [],
                          v = [],
                          g = r.slidesOffsetBefore;
                      "function" == typeof g && (g = r.slidesOffsetBefore.call(e));
                      var y = r.slidesOffsetAfter;
                      "function" == typeof y && (y = r.slidesOffsetAfter.call(e));
                      var b = e.snapGrid.length,
                          w = e.slidesGrid.length,
                          x = r.spaceBetween,
                          S = -g,
                          E = 0,
                          C = 0;
                      if (void 0 !== a) {
                          var T, k;
                          "string" == typeof x && x.indexOf("%") >= 0 && (x = (parseFloat(x.replace("%", "")) / 100) * a),
                              (e.virtualSize = -x),
                              o ? p.css({ marginLeft: "", marginTop: "" }) : p.css({ marginRight: "", marginBottom: "" }),
                              r.slidesPerColumn > 1 &&
                                  ((T = Math.floor(h / r.slidesPerColumn) === h / e.params.slidesPerColumn ? h : Math.ceil(h / r.slidesPerColumn) * r.slidesPerColumn),
                                  "auto" !== r.slidesPerView && "row" === r.slidesPerColumnFill && (T = Math.max(T, r.slidesPerView * r.slidesPerColumn)));
                          for (var M, P, $, D = r.slidesPerColumn, O = T / D, L = Math.floor(h / r.slidesPerColumn), N = 0; N < h; N += 1) {
                              k = 0;
                              var _ = p.eq(N);
                              if (r.slidesPerColumn > 1) {
                                  var z = void 0,
                                      j = void 0,
                                      I = void 0;
                                  if ("row" === r.slidesPerColumnFill && r.slidesPerGroup > 1) {
                                      var H = Math.floor(N / (r.slidesPerGroup * r.slidesPerColumn)),
                                          q = N - r.slidesPerColumn * r.slidesPerGroup * H,
                                          R = 0 === H ? r.slidesPerGroup : Math.min(Math.ceil((h - H * D * r.slidesPerGroup) / D), r.slidesPerGroup);
                                      (z = (j = q - (I = Math.floor(q / R)) * R + H * r.slidesPerGroup) + (I * T) / D),
                                          _.css({ "-webkit-box-ordinal-group": z, "-moz-box-ordinal-group": z, "-ms-flex-order": z, "-webkit-order": z, order: z });
                                  } else "column" === r.slidesPerColumnFill ? ((I = N - (j = Math.floor(N / D)) * D), (j > L || (j === L && I === D - 1)) && (I += 1) >= D && ((I = 0), (j += 1))) : (j = N - (I = Math.floor(N / O)) * O);
                                  _.css(t("margin-top"), 0 !== I && r.spaceBetween && r.spaceBetween + "px");
                              }
                              if ("none" !== _.css("display")) {
                                  if ("auto" === r.slidesPerView) {
                                      var V = n.getComputedStyle(_[0], null),
                                          B = _[0].style.transform,
                                          U = _[0].style.webkitTransform;
                                      if ((B && (_[0].style.transform = "none"), U && (_[0].style.webkitTransform = "none"), r.roundLengths)) k = e.isHorizontal() ? _.outerWidth(!0) : _.outerHeight(!0);
                                      else {
                                          var F = i(V, "width"),
                                              G = i(V, "padding-left"),
                                              W = i(V, "padding-right"),
                                              X = i(V, "margin-left"),
                                              Y = i(V, "margin-right"),
                                              K = V.getPropertyValue(V, "box-sizing");
                                          if (K && "border-box" === K) k = F + X + Y;
                                          else {
                                              var Z = _[0],
                                                  Q = Z.clientWidth;
                                              k = F + G + W + X + Y + (Z.offsetWidth - Q);
                                          }
                                      }
                                      B && (_[0].style.transform = B), U && (_[0].style.webkitTransform = U), r.roundLengths && (k = Math.floor(k));
                                  } else (k = (a - (r.slidesPerView - 1) * x) / r.slidesPerView), r.roundLengths && (k = Math.floor(k)), p[N] && (p[N].style[t("width")] = k + "px");
                                  p[N] && (p[N].swiperSlideSize = k),
                                      v.push(k),
                                      r.centeredSlides
                                          ? ((S = S + k / 2 + E / 2 + x),
                                            0 === E && 0 !== N && (S = S - a / 2 - x),
                                            0 === N && (S = S - a / 2 - x),
                                            Math.abs(S) < 0.001 && (S = 0),
                                            r.roundLengths && (S = Math.floor(S)),
                                            C % r.slidesPerGroup == 0 && f.push(S),
                                            m.push(S))
                                          : (r.roundLengths && (S = Math.floor(S)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && f.push(S), m.push(S), (S = S + k + x)),
                                      (e.virtualSize += k + x),
                                      (E = k),
                                      (C += 1);
                              }
                          }
                          if (((e.virtualSize = Math.max(e.virtualSize, a) + y), o && u && ("slide" === r.effect || "coverflow" === r.effect) && s.css({ width: e.virtualSize + r.spaceBetween + "px" }), r.setWrapperSize))
                              s.css((((P = {})[t("width")] = e.virtualSize + r.spaceBetween + "px"), P));
                          if (r.slidesPerColumn > 1)
                              if (
                                  ((e.virtualSize = (k + r.spaceBetween) * T),
                                  (e.virtualSize = Math.ceil(e.virtualSize / r.slidesPerColumn) - r.spaceBetween),
                                  s.css(((($ = {})[t("width")] = e.virtualSize + r.spaceBetween + "px"), $)),
                                  r.centeredSlides)
                              ) {
                                  M = [];
                                  for (var J = 0; J < f.length; J += 1) {
                                      var ee = f[J];
                                      r.roundLengths && (ee = Math.floor(ee)), f[J] < e.virtualSize + f[0] && M.push(ee);
                                  }
                                  f = M;
                              }
                          if (!r.centeredSlides) {
                              M = [];
                              for (var te = 0; te < f.length; te += 1) {
                                  var ie = f[te];
                                  r.roundLengths && (ie = Math.floor(ie)), f[te] <= e.virtualSize - a && M.push(ie);
                              }
                              (f = M), Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - a);
                          }
                          if ((0 === f.length && (f = [0]), 0 !== r.spaceBetween)) {
                              var ne,
                                  re = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
                              p.filter(function (e, t) {
                                  return !r.cssMode || t !== p.length - 1;
                              }).css((((ne = {})[re] = x + "px"), ne));
                          }
                          if (r.centeredSlides && r.centeredSlidesBounds) {
                              var se = 0;
                              v.forEach(function (e) {
                                  se += e + (r.spaceBetween ? r.spaceBetween : 0);
                              });
                              var ae = (se -= r.spaceBetween) - a;
                              f = f.map(function (e) {
                                  return e < 0 ? -g : e > ae ? ae + y : e;
                              });
                          }
                          if (r.centerInsufficientSlides) {
                              var oe = 0;
                              if (
                                  (v.forEach(function (e) {
                                      oe += e + (r.spaceBetween ? r.spaceBetween : 0);
                                  }),
                                  (oe -= r.spaceBetween) < a)
                              ) {
                                  var le = (a - oe) / 2;
                                  f.forEach(function (e, t) {
                                      f[t] = e - le;
                                  }),
                                      m.forEach(function (e, t) {
                                          m[t] = e + le;
                                      });
                              }
                          }
                          A(e, { slides: p, snapGrid: f, slidesGrid: m, slidesSizesGrid: v }),
                              h !== d && e.emit("slidesLengthChange"),
                              f.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                              m.length !== w && e.emit("slidesGridLengthChange"),
                              (r.watchSlidesProgress || r.watchSlidesVisibility) && e.updateSlidesOffset();
                      }
                  },
                  updateAutoHeight: function (e) {
                      var t,
                          i = [],
                          n = 0;
                      if (("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1))
                          if (this.params.centeredSlides)
                              this.visibleSlides.each(function (e) {
                                  i.push(e);
                              });
                          else
                              for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                                  var r = this.activeIndex + t;
                                  if (r > this.slides.length) break;
                                  i.push(this.slides.eq(r)[0]);
                              }
                      else i.push(this.slides.eq(this.activeIndex)[0]);
                      for (t = 0; t < i.length; t += 1)
                          if (void 0 !== i[t]) {
                              var s = i[t].offsetHeight;
                              n = s > n ? s : n;
                          }
                      n && this.$wrapperEl.css("height", n + "px");
                  },
                  updateSlidesOffset: function () {
                      for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
                  },
                  updateSlidesProgress: function (e) {
                      void 0 === e && (e = (this && this.translate) || 0);
                      var t = this.params,
                          i = this.slides,
                          n = this.rtlTranslate;
                      if (0 !== i.length) {
                          void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                          var r = -e;
                          n && (r = e), i.removeClass(t.slideVisibleClass), (this.visibleSlidesIndexes = []), (this.visibleSlides = []);
                          for (var s = 0; s < i.length; s += 1) {
                              var a = i[s],
                                  o = (r + (t.centeredSlides ? this.minTranslate() : 0) - a.swiperSlideOffset) / (a.swiperSlideSize + t.spaceBetween);
                              if (t.watchSlidesVisibility || (t.centeredSlides && t.autoHeight)) {
                                  var l = -(r - a.swiperSlideOffset),
                                      u = l + this.slidesSizesGrid[s];
                                  ((l >= 0 && l < this.size - 1) || (u > 1 && u <= this.size) || (l <= 0 && u >= this.size)) && (this.visibleSlides.push(a), this.visibleSlidesIndexes.push(s), i.eq(s).addClass(t.slideVisibleClass));
                              }
                              a.progress = n ? -o : o;
                          }
                          this.visibleSlides = C(this.visibleSlides);
                      }
                  },
                  updateProgress: function (e) {
                      if (void 0 === e) {
                          var t = this.rtlTranslate ? -1 : 1;
                          e = (this && this.translate && this.translate * t) || 0;
                      }
                      var i = this.params,
                          n = this.maxTranslate() - this.minTranslate(),
                          r = this.progress,
                          s = this.isBeginning,
                          a = this.isEnd,
                          o = s,
                          l = a;
                      0 === n ? ((r = 0), (s = !0), (a = !0)) : ((s = (r = (e - this.minTranslate()) / n) <= 0), (a = r >= 1)),
                          A(this, { progress: r, isBeginning: s, isEnd: a }),
                          (i.watchSlidesProgress || i.watchSlidesVisibility || (i.centeredSlides && i.autoHeight)) && this.updateSlidesProgress(e),
                          s && !o && this.emit("reachBeginning toEdge"),
                          a && !l && this.emit("reachEnd toEdge"),
                          ((o && !s) || (l && !a)) && this.emit("fromEdge"),
                          this.emit("progress", r);
                  },
                  updateSlidesClasses: function () {
                      var e,
                          t = this.slides,
                          i = this.params,
                          n = this.$wrapperEl,
                          r = this.activeIndex,
                          s = this.realIndex,
                          a = this.virtual && i.virtual.enabled;
                      t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
                          (e = a ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)).addClass(i.slideActiveClass),
                          i.loop &&
                              (e.hasClass(i.slideDuplicateClass)
                                  ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass)
                                  : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass));
                      var o = e
                          .nextAll("." + i.slideClass)
                          .eq(0)
                          .addClass(i.slideNextClass);
                      i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
                      var l = e
                          .prevAll("." + i.slideClass)
                          .eq(0)
                          .addClass(i.slidePrevClass);
                      i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
                          i.loop &&
                              (o.hasClass(i.slideDuplicateClass)
                                  ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass)
                                  : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
                              l.hasClass(i.slideDuplicateClass)
                                  ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)
                                  : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)),
                          this.emitSlidesClasses();
                  },
                  updateActiveIndex: function (e) {
                      var t,
                          i = this.rtlTranslate ? this.translate : -this.translate,
                          n = this.slidesGrid,
                          r = this.snapGrid,
                          s = this.params,
                          a = this.activeIndex,
                          o = this.realIndex,
                          l = this.snapIndex,
                          u = e;
                      if (void 0 === u) {
                          for (var c = 0; c < n.length; c += 1) void 0 !== n[c + 1] ? (i >= n[c] && i < n[c + 1] - (n[c + 1] - n[c]) / 2 ? (u = c) : i >= n[c] && i < n[c + 1] && (u = c + 1)) : i >= n[c] && (u = c);
                          s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
                      }
                      if (r.indexOf(i) >= 0) t = r.indexOf(i);
                      else {
                          var d = Math.min(s.slidesPerGroupSkip, u);
                          t = d + Math.floor((u - d) / s.slidesPerGroup);
                      }
                      if ((t >= r.length && (t = r.length - 1), u !== a)) {
                          var p = parseInt(this.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                          A(this, { snapIndex: t, realIndex: p, previousIndex: a, activeIndex: u }),
                              this.emit("activeIndexChange"),
                              this.emit("snapIndexChange"),
                              o !== p && this.emit("realIndexChange"),
                              (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
                      } else t !== l && ((this.snapIndex = t), this.emit("snapIndexChange"));
                  },
                  updateClickedSlide: function (e) {
                      var t,
                          i = this.params,
                          n = C(e.target).closest("." + i.slideClass)[0],
                          r = !1;
                      if (n)
                          for (var s = 0; s < this.slides.length; s += 1)
                              if (this.slides[s] === n) {
                                  (r = !0), (t = s);
                                  break;
                              }
                      if (!n || !r) return (this.clickedSlide = void 0), void (this.clickedIndex = void 0);
                      (this.clickedSlide = n),
                          this.virtual && this.params.virtual.enabled ? (this.clickedIndex = parseInt(C(n).attr("data-swiper-slide-index"), 10)) : (this.clickedIndex = t),
                          i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
                  },
              },
              translate: {
                  getTranslate: function (e) {
                      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                      var t = this.params,
                          i = this.rtlTranslate,
                          n = this.translate,
                          r = this.$wrapperEl;
                      if (t.virtualTranslate) return i ? -n : n;
                      if (t.cssMode) return n;
                      var s = M(r[0], e);
                      return i && (s = -s), s || 0;
                  },
                  setTranslate: function (e, t) {
                      var i = this.rtlTranslate,
                          n = this.params,
                          r = this.$wrapperEl,
                          s = this.wrapperEl,
                          a = this.progress,
                          o = 0,
                          l = 0;
                      this.isHorizontal() ? (o = i ? -e : e) : (l = e),
                          n.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                          n.cssMode ? (s[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l) : n.virtualTranslate || r.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
                          (this.previousTranslate = this.translate),
                          (this.translate = this.isHorizontal() ? o : l);
                      var u = this.maxTranslate() - this.minTranslate();
                      (0 === u ? 0 : (e - this.minTranslate()) / u) !== a && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
                  },
                  minTranslate: function () {
                      return -this.snapGrid[0];
                  },
                  maxTranslate: function () {
                      return -this.snapGrid[this.snapGrid.length - 1];
                  },
                  translateTo: function (e, t, i, n, r) {
                      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === n && (n = !0);
                      var s = this,
                          a = s.params,
                          o = s.wrapperEl;
                      if (s.animating && a.preventInteractionOnTransition) return !1;
                      var l,
                          u = s.minTranslate(),
                          c = s.maxTranslate();
                      if (((l = n && e > u ? u : n && e < c ? c : e), s.updateProgress(l), a.cssMode)) {
                          var d,
                              p = s.isHorizontal();
                          if (0 === t) o[p ? "scrollLeft" : "scrollTop"] = -l;
                          else if (o.scrollTo) o.scrollTo((((d = {})[p ? "left" : "top"] = -l), (d.behavior = "smooth"), d));
                          else o[p ? "scrollLeft" : "scrollTop"] = -l;
                          return !0;
                      }
                      return (
                          0 === t
                              ? (s.setTransition(0), s.setTranslate(l), i && (s.emit("beforeTransitionStart", t, r), s.emit("transitionEnd")))
                              : (s.setTransition(t),
                                s.setTranslate(l),
                                i && (s.emit("beforeTransitionStart", t, r), s.emit("transitionStart")),
                                s.animating ||
                                    ((s.animating = !0),
                                    s.onTranslateToWrapperTransitionEnd ||
                                        (s.onTranslateToWrapperTransitionEnd = function (e) {
                                            s &&
                                                !s.destroyed &&
                                                e.target === this &&
                                                (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                                                s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd),
                                                (s.onTranslateToWrapperTransitionEnd = null),
                                                delete s.onTranslateToWrapperTransitionEnd,
                                                i && s.emit("transitionEnd"));
                                        }),
                                    s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                                    s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))),
                          !0
                      );
                  },
              },
              transition: {
                  setTransition: function (e, t) {
                      this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
                  },
                  transitionStart: function (e, t) {
                      void 0 === e && (e = !0);
                      var i = this.activeIndex,
                          n = this.params,
                          r = this.previousIndex;
                      if (!n.cssMode) {
                          n.autoHeight && this.updateAutoHeight();
                          var s = t;
                          if ((s || (s = i > r ? "next" : i < r ? "prev" : "reset"), this.emit("transitionStart"), e && i !== r)) {
                              if ("reset" === s) return void this.emit("slideResetTransitionStart");
                              this.emit("slideChangeTransitionStart"), "next" === s ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
                          }
                      }
                  },
                  transitionEnd: function (e, t) {
                      void 0 === e && (e = !0);
                      var i = this.activeIndex,
                          n = this.previousIndex,
                          r = this.params;
                      if (((this.animating = !1), !r.cssMode)) {
                          this.setTransition(0);
                          var s = t;
                          if ((s || (s = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== n)) {
                              if ("reset" === s) return void this.emit("slideResetTransitionEnd");
                              this.emit("slideChangeTransitionEnd"), "next" === s ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
                          }
                      }
                  },
              },
              slide: {
                  slideTo: function (e, t, i, n) {
                      if ((void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e))
                          throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
                      if ("string" == typeof e) {
                          var r = parseInt(e, 10);
                          if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                          e = r;
                      }
                      var s = this,
                          a = e;
                      a < 0 && (a = 0);
                      var o = s.params,
                          l = s.snapGrid,
                          u = s.slidesGrid,
                          c = s.previousIndex,
                          d = s.activeIndex,
                          p = s.rtlTranslate,
                          h = s.wrapperEl;
                      if (s.animating && o.preventInteractionOnTransition) return !1;
                      var f = Math.min(s.params.slidesPerGroupSkip, a),
                          m = f + Math.floor((a - f) / s.params.slidesPerGroup);
                      m >= l.length && (m = l.length - 1), (d || o.initialSlide || 0) === (c || 0) && i && s.emit("beforeSlideChangeStart");
                      var v,
                          g = -l[m];
                      if ((s.updateProgress(g), o.normalizeSlideIndex))
                          for (var y = 0; y < u.length; y += 1) {
                              var b = -Math.floor(100 * g),
                                  w = Math.floor(100 * u[y]),
                                  x = Math.floor(100 * u[y + 1]);
                              void 0 !== u[y + 1] ? (b >= w && b < x - (x - w) / 2 ? (a = y) : b >= w && b < x && (a = y + 1)) : b >= w && (a = y);
                          }
                      if (s.initialized && a !== d) {
                          if (!s.allowSlideNext && g < s.translate && g < s.minTranslate()) return !1;
                          if (!s.allowSlidePrev && g > s.translate && g > s.maxTranslate() && (d || 0) !== a) return !1;
                      }
                      if (((v = a > d ? "next" : a < d ? "prev" : "reset"), (p && -g === s.translate) || (!p && g === s.translate)))
                          return s.updateActiveIndex(a), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== o.effect && s.setTranslate(g), "reset" !== v && (s.transitionStart(i, v), s.transitionEnd(i, v)), !1;
                      if (o.cssMode) {
                          var S,
                              E = s.isHorizontal(),
                              C = -g;
                          if ((p && (C = h.scrollWidth - h.offsetWidth - C), 0 === t)) h[E ? "scrollLeft" : "scrollTop"] = C;
                          else if (h.scrollTo) h.scrollTo((((S = {})[E ? "left" : "top"] = C), (S.behavior = "smooth"), S));
                          else h[E ? "scrollLeft" : "scrollTop"] = C;
                          return !0;
                      }
                      return (
                          0 === t
                              ? (s.setTransition(0), s.setTranslate(g), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, v), s.transitionEnd(i, v))
                              : (s.setTransition(t),
                                s.setTranslate(g),
                                s.updateActiveIndex(a),
                                s.updateSlidesClasses(),
                                s.emit("beforeTransitionStart", t, n),
                                s.transitionStart(i, v),
                                s.animating ||
                                    ((s.animating = !0),
                                    s.onSlideToWrapperTransitionEnd ||
                                        (s.onSlideToWrapperTransitionEnd = function (e) {
                                            s &&
                                                !s.destroyed &&
                                                e.target === this &&
                                                (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                                                s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd),
                                                (s.onSlideToWrapperTransitionEnd = null),
                                                delete s.onSlideToWrapperTransitionEnd,
                                                s.transitionEnd(i, v));
                                        }),
                                    s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                                    s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))),
                          !0
                      );
                  },
                  slideToLoop: function (e, t, i, n) {
                      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                      var r = e;
                      return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, i, n);
                  },
                  slideNext: function (e, t, i) {
                      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                      var n = this.params,
                          r = this.animating,
                          s = this.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
                      if (n.loop) {
                          if (r && n.loopPreventsSlide) return !1;
                          this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                      }
                      return this.slideTo(this.activeIndex + s, e, t, i);
                  },
                  slidePrev: function (e, t, i) {
                      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                      var n = this.params,
                          r = this.animating,
                          s = this.snapGrid,
                          a = this.slidesGrid,
                          o = this.rtlTranslate;
                      if (n.loop) {
                          if (r && n.loopPreventsSlide) return !1;
                          this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                      }
                      function l(e) {
                          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                      }
                      var u,
                          c = l(o ? this.translate : -this.translate),
                          d = s.map(function (e) {
                              return l(e);
                          }),
                          p = (s[d.indexOf(c)], s[d.indexOf(c) - 1]);
                      return (
                          void 0 === p &&
                              n.cssMode &&
                              s.forEach(function (e) {
                                  !p && c >= e && (p = e);
                              }),
                          void 0 !== p && (u = a.indexOf(p)) < 0 && (u = this.activeIndex - 1),
                          this.slideTo(u, e, t, i)
                      );
                  },
                  slideReset: function (e, t, i) {
                      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
                  },
                  slideToClosest: function (e, t, i, n) {
                      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = 0.5);
                      var r = this.activeIndex,
                          s = Math.min(this.params.slidesPerGroupSkip, r),
                          a = s + Math.floor((r - s) / this.params.slidesPerGroup),
                          o = this.rtlTranslate ? this.translate : -this.translate;
                      if (o >= this.snapGrid[a]) {
                          var l = this.snapGrid[a];
                          o - l > (this.snapGrid[a + 1] - l) * n && (r += this.params.slidesPerGroup);
                      } else {
                          var u = this.snapGrid[a - 1];
                          o - u <= (this.snapGrid[a] - u) * n && (r -= this.params.slidesPerGroup);
                      }
                      return (r = Math.max(r, 0)), (r = Math.min(r, this.slidesGrid.length - 1)), this.slideTo(r, e, t, i);
                  },
                  slideToClickedSlide: function () {
                      var e,
                          t = this,
                          i = t.params,
                          n = t.$wrapperEl,
                          r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                          s = t.clickedIndex;
                      if (i.loop) {
                          if (t.animating) return;
                          (e = parseInt(C(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
                              i.centeredSlides
                                  ? s < t.loopedSlides - r / 2 || s > t.slides.length - t.loopedSlides + r / 2
                                      ? (t.loopFix(),
                                        (s = n
                                            .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                                            .eq(0)
                                            .index()),
                                        T(function () {
                                            t.slideTo(s);
                                        }))
                                      : t.slideTo(s)
                                  : s > t.slides.length - r
                                  ? (t.loopFix(),
                                    (s = n
                                        .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                                        .eq(0)
                                        .index()),
                                    T(function () {
                                        t.slideTo(s);
                                    }))
                                  : t.slideTo(s);
                      } else t.slideTo(s);
                  },
              },
              loop: {
                  loopCreate: function () {
                      var e = this,
                          t = a(),
                          i = e.params,
                          n = e.$wrapperEl;
                      n.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                      var r = n.children("." + i.slideClass);
                      if (i.loopFillGroupWithBlank) {
                          var s = i.slidesPerGroup - (r.length % i.slidesPerGroup);
                          if (s !== i.slidesPerGroup) {
                              for (var o = 0; o < s; o += 1) {
                                  var l = C(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                  n.append(l);
                              }
                              r = n.children("." + i.slideClass);
                          }
                      }
                      "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length),
                          (e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10))),
                          (e.loopedSlides += i.loopAdditionalSlides),
                          e.loopedSlides > r.length && (e.loopedSlides = r.length);
                      var u = [],
                          c = [];
                      r.each(function (t, i) {
                          var n = C(t);
                          i < e.loopedSlides && c.push(t), i < r.length && i >= r.length - e.loopedSlides && u.push(t), n.attr("data-swiper-slide-index", i);
                      });
                      for (var d = 0; d < c.length; d += 1) n.append(C(c[d].cloneNode(!0)).addClass(i.slideDuplicateClass));
                      for (var p = u.length - 1; p >= 0; p -= 1) n.prepend(C(u[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
                  },
                  loopFix: function () {
                      this.emit("beforeLoopFix");
                      var e,
                          t = this.activeIndex,
                          i = this.slides,
                          n = this.loopedSlides,
                          r = this.allowSlidePrev,
                          s = this.allowSlideNext,
                          a = this.snapGrid,
                          o = this.rtlTranslate;
                      (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
                      var l = -a[t] - this.getTranslate();
                      if (t < n) (e = i.length - 3 * n + t), (e += n), this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
                      else if (t >= i.length - n) {
                          (e = -i.length + t + n), (e += n), this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
                      }
                      (this.allowSlidePrev = r), (this.allowSlideNext = s), this.emit("loopFix");
                  },
                  loopDestroy: function () {
                      var e = this.$wrapperEl,
                          t = this.params,
                          i = this.slides;
                      e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
                  },
              },
              grabCursor: {
                  setGrabCursor: function (e) {
                      if (!(this.support.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode)) {
                          var t = this.el;
                          (t.style.cursor = "move"), (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (t.style.cursor = e ? "grabbing" : "grab");
                      }
                  },
                  unsetGrabCursor: function () {
                      this.support.touch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode || (this.el.style.cursor = "");
                  },
              },
              manipulation: {
                  appendSlide: function (e) {
                      var t = this.$wrapperEl,
                          i = this.params;
                      if ((i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)) for (var n = 0; n < e.length; n += 1) e[n] && t.append(e[n]);
                      else t.append(e);
                      i.loop && this.loopCreate(), (i.observer && this.support.observer) || this.update();
                  },
                  prependSlide: function (e) {
                      var t = this.params,
                          i = this.$wrapperEl,
                          n = this.activeIndex;
                      t.loop && this.loopDestroy();
                      var r = n + 1;
                      if ("object" == typeof e && "length" in e) {
                          for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
                          r = n + e.length;
                      } else i.prepend(e);
                      t.loop && this.loopCreate(), (t.observer && this.support.observer) || this.update(), this.slideTo(r, 0, !1);
                  },
                  addSlide: function (e, t) {
                      var i = this.$wrapperEl,
                          n = this.params,
                          r = this.activeIndex;
                      n.loop && ((r -= this.loopedSlides), this.loopDestroy(), (this.slides = i.children("." + n.slideClass)));
                      var s = this.slides.length;
                      if (e <= 0) this.prependSlide(t);
                      else if (e >= s) this.appendSlide(t);
                      else {
                          for (var a = r > e ? r + 1 : r, o = [], l = s - 1; l >= e; l -= 1) {
                              var u = this.slides.eq(l);
                              u.remove(), o.unshift(u);
                          }
                          if ("object" == typeof t && "length" in t) {
                              for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                              a = r > e ? r + t.length : r;
                          } else i.append(t);
                          for (var d = 0; d < o.length; d += 1) i.append(o[d]);
                          n.loop && this.loopCreate(), (n.observer && this.support.observer) || this.update(), n.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1);
                      }
                  },
                  removeSlide: function (e) {
                      var t = this.params,
                          i = this.$wrapperEl,
                          n = this.activeIndex;
                      t.loop && ((n -= this.loopedSlides), this.loopDestroy(), (this.slides = i.children("." + t.slideClass)));
                      var r,
                          s = n;
                      if ("object" == typeof e && "length" in e) {
                          for (var a = 0; a < e.length; a += 1) (r = e[a]), this.slides[r] && this.slides.eq(r).remove(), r < s && (s -= 1);
                          s = Math.max(s, 0);
                      } else (r = e), this.slides[r] && this.slides.eq(r).remove(), r < s && (s -= 1), (s = Math.max(s, 0));
                      t.loop && this.loopCreate(), (t.observer && this.support.observer) || this.update(), t.loop ? this.slideTo(s + this.loopedSlides, 0, !1) : this.slideTo(s, 0, !1);
                  },
                  removeAllSlides: function () {
                      for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                      this.removeSlide(e);
                  },
              },
              events: {
                  attachEvents: function () {
                      var e = a(),
                          t = this.params,
                          i = this.touchEvents,
                          n = this.el,
                          r = this.wrapperEl,
                          s = this.device,
                          o = this.support;
                      (this.onTouchStart = I.bind(this)), (this.onTouchMove = H.bind(this)), (this.onTouchEnd = q.bind(this)), t.cssMode && (this.onScroll = B.bind(this)), (this.onClick = V.bind(this));
                      var l = !!t.nested;
                      if (!o.touch && o.pointerEvents) n.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, l), e.addEventListener(i.end, this.onTouchEnd, !1);
                      else {
                          if (o.touch) {
                              var u = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                              n.addEventListener(i.start, this.onTouchStart, u),
                                  n.addEventListener(i.move, this.onTouchMove, o.passiveListener ? { passive: !1, capture: l } : l),
                                  n.addEventListener(i.end, this.onTouchEnd, u),
                                  i.cancel && n.addEventListener(i.cancel, this.onTouchEnd, u),
                                  U || (e.addEventListener("touchstart", F), (U = !0));
                          }
                          ((t.simulateTouch && !s.ios && !s.android) || (t.simulateTouch && !o.touch && s.ios)) &&
                              (n.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1));
                      }
                      (t.preventClicks || t.preventClicksPropagation) && n.addEventListener("click", this.onClick, !0),
                          t.cssMode && r.addEventListener("scroll", this.onScroll),
                          t.updateOnWindowResize ? this.on(s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", R, !0) : this.on("observerUpdate", R, !0);
                  },
                  detachEvents: function () {
                      var e = a(),
                          t = this.params,
                          i = this.touchEvents,
                          n = this.el,
                          r = this.wrapperEl,
                          s = this.device,
                          o = this.support,
                          l = !!t.nested;
                      if (!o.touch && o.pointerEvents) n.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, l), e.removeEventListener(i.end, this.onTouchEnd, !1);
                      else {
                          if (o.touch) {
                              var u = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                              n.removeEventListener(i.start, this.onTouchStart, u),
                                  n.removeEventListener(i.move, this.onTouchMove, l),
                                  n.removeEventListener(i.end, this.onTouchEnd, u),
                                  i.cancel && n.removeEventListener(i.cancel, this.onTouchEnd, u);
                          }
                          ((t.simulateTouch && !s.ios && !s.android) || (t.simulateTouch && !o.touch && s.ios)) &&
                              (n.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, l), e.removeEventListener("mouseup", this.onTouchEnd, !1));
                      }
                      (t.preventClicks || t.preventClicksPropagation) && n.removeEventListener("click", this.onClick, !0),
                          t.cssMode && r.removeEventListener("scroll", this.onScroll),
                          this.off(s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", R);
                  },
              },
              breakpoints: {
                  setBreakpoint: function () {
                      var e = this.activeIndex,
                          t = this.initialized,
                          i = this.loopedSlides,
                          n = void 0 === i ? 0 : i,
                          r = this.params,
                          s = this.$el,
                          a = r.breakpoints;
                      if (a && (!a || 0 !== Object.keys(a).length)) {
                          var o = this.getBreakpoint(a, this.params.breakpointsBase, this.el);
                          if (o && this.currentBreakpoint !== o) {
                              var l = o in a ? a[o] : void 0;
                              l &&
                                  ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                                      var t = l[e];
                                      void 0 !== t && (l[e] = "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t) ? ("slidesPerView" === e ? parseFloat(t) : parseInt(t, 10)) : "auto");
                                  });
                              var u = l || this.originalParams,
                                  c = r.slidesPerColumn > 1,
                                  d = u.slidesPerColumn > 1;
                              c && !d
                                  ? (s.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), this.emitContainerClasses())
                                  : !c && d && (s.addClass(r.containerModifierClass + "multirow"), "column" === u.slidesPerColumnFill && s.addClass(r.containerModifierClass + "multirow-column"), this.emitContainerClasses());
                              var p = u.direction && u.direction !== r.direction,
                                  h = r.loop && (u.slidesPerView !== r.slidesPerView || p);
                              p && t && this.changeDirection(),
                                  A(this.params, u),
                                  A(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }),
                                  (this.currentBreakpoint = o),
                                  this.emit("_beforeBreakpoint", u),
                                  h && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - n + this.loopedSlides, 0, !1)),
                                  this.emit("breakpoint", u);
                          }
                      }
                  },
                  getBreakpoint: function (e, t, i) {
                      if ((void 0 === t && (t = "window"), e && ("container" !== t || i))) {
                          var n = !1,
                              r = l(),
                              s = "window" === t ? r.innerWidth : i.clientWidth,
                              a = "window" === t ? r.innerHeight : i.clientHeight,
                              o = Object.keys(e).map(function (e) {
                                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                                      var t = parseFloat(e.substr(1));
                                      return { value: a * t, point: e };
                                  }
                                  return { value: e, point: e };
                              });
                          o.sort(function (e, t) {
                              return parseInt(e.value, 10) - parseInt(t.value, 10);
                          });
                          for (var u = 0; u < o.length; u += 1) {
                              var c = o[u],
                                  d = c.point;
                              c.value <= s && (n = d);
                          }
                          return n || "max";
                      }
                  },
              },
              checkOverflow: {
                  checkOverflow: function () {
                      var e = this.params,
                          t = this.isLocked,
                          i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                      e.slidesOffsetBefore && e.slidesOffsetAfter && i ? (this.isLocked = i <= this.size) : (this.isLocked = 1 === this.snapGrid.length),
                          (this.allowSlideNext = !this.isLocked),
                          (this.allowSlidePrev = !this.isLocked),
                          t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                          t && t !== this.isLocked && ((this.isEnd = !1), this.navigation && this.navigation.update());
                  },
              },
              classes: {
                  addClasses: function () {
                      var e,
                          t,
                          i,
                          n = this.classNames,
                          r = this.params,
                          s = this.rtl,
                          a = this.$el,
                          o = this.device,
                          l = this.support,
                          u =
                              ((e = [
                                  "initialized",
                                  r.direction,
                                  { "pointer-events": l.pointerEvents && !l.touch },
                                  { "free-mode": r.freeMode },
                                  { autoheight: r.autoHeight },
                                  { rtl: s },
                                  { multirow: r.slidesPerColumn > 1 },
                                  { "multirow-column": r.slidesPerColumn > 1 && "column" === r.slidesPerColumnFill },
                                  { android: o.android },
                                  { ios: o.ios },
                                  { "css-mode": r.cssMode },
                              ]),
                              (t = r.containerModifierClass),
                              (i = []),
                              e.forEach(function (e) {
                                  "object" == typeof e
                                      ? Object.entries(e).forEach(function (e) {
                                            var n = e[0];
                                            e[1] && i.push(t + n);
                                        })
                                      : "string" == typeof e && i.push(t + e);
                              }),
                              i);
                      n.push.apply(n, u), a.addClass([].concat(n).join(" ")), this.emitContainerClasses();
                  },
                  removeClasses: function () {
                      var e = this.$el,
                          t = this.classNames;
                      e.removeClass(t.join(" ")), this.emitContainerClasses();
                  },
              },
              images: {
                  loadImage: function (e, t, i, n, r, s) {
                      var a,
                          o = l();
                      function u() {
                          s && s();
                      }
                      C(e).parent("picture")[0] || (e.complete && r) ? u() : t ? (((a = new o.Image()).onload = u), (a.onerror = u), n && (a.sizes = n), i && (a.srcset = i), t && (a.src = t)) : u();
                  },
                  preloadImages: function () {
                      var e = this;
                      function t() {
                          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                      }
                      e.imagesToLoad = e.$el.find("img");
                      for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                          var n = e.imagesToLoad[i];
                          e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t);
                      }
                  },
              },
          },
          Y = {},
          K = (function () {
              function e() {
                  for (var t, i, n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
                  if ((1 === r.length && r[0].constructor && r[0].constructor === Object ? (i = r[0]) : ((t = r[0]), (i = r[1])), i || (i = {}), (i = A({}, i)), t && !i.el && (i.el = t), i.el && C(i.el).length > 1)) {
                      var a = [];
                      return (
                          C(i.el).each(function (t) {
                              var n = A({}, i, { el: t });
                              a.push(new e(n));
                          }),
                          a
                      );
                  }
                  var o = this;
                  (o.support = D()),
                      (o.device = O({ userAgent: i.userAgent })),
                      (o.browser = L()),
                      (o.eventsListeners = {}),
                      (o.eventsAnyListeners = []),
                      void 0 === o.modules && (o.modules = {}),
                      Object.keys(o.modules).forEach(function (e) {
                          var t = o.modules[e];
                          if (t.params) {
                              var n = Object.keys(t.params)[0],
                                  r = t.params[n];
                              if ("object" != typeof r || null === r) return;
                              if (!(n in i) || !("enabled" in r)) return;
                              !0 === i[n] && (i[n] = { enabled: !0 }), "object" != typeof i[n] || "enabled" in i[n] || (i[n].enabled = !0), i[n] || (i[n] = { enabled: !1 });
                          }
                      });
                  var l,
                      u,
                      c = A({}, G);
                  return (
                      o.useParams(c),
                      (o.params = A({}, c, Y, i)),
                      (o.originalParams = A({}, o.params)),
                      (o.passedParams = A({}, i)),
                      o.params &&
                          o.params.on &&
                          Object.keys(o.params.on).forEach(function (e) {
                              o.on(e, o.params.on[e]);
                          }),
                      o.params && o.params.onAny && o.onAny(o.params.onAny),
                      (o.$ = C),
                      A(o, {
                          el: t,
                          classNames: [],
                          slides: C(),
                          slidesGrid: [],
                          snapGrid: [],
                          slidesSizesGrid: [],
                          isHorizontal: function () {
                              return "horizontal" === o.params.direction;
                          },
                          isVertical: function () {
                              return "vertical" === o.params.direction;
                          },
                          activeIndex: 0,
                          realIndex: 0,
                          isBeginning: !0,
                          isEnd: !1,
                          translate: 0,
                          previousTranslate: 0,
                          progress: 0,
                          velocity: 0,
                          animating: !1,
                          allowSlideNext: o.params.allowSlideNext,
                          allowSlidePrev: o.params.allowSlidePrev,
                          touchEvents:
                              ((l = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                              (u = ["mousedown", "mousemove", "mouseup"]),
                              o.support.pointerEvents && (u = ["pointerdown", "pointermove", "pointerup"]),
                              (o.touchEventsTouch = { start: l[0], move: l[1], end: l[2], cancel: l[3] }),
                              (o.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
                              o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop),
                          touchEventsData: {
                              isTouched: void 0,
                              isMoved: void 0,
                              allowTouchCallbacks: void 0,
                              touchStartTime: void 0,
                              isScrolling: void 0,
                              currentTranslate: void 0,
                              startTranslate: void 0,
                              allowThresholdMove: void 0,
                              formElements: "input, select, option, textarea, button, video, label",
                              lastClickTime: k(),
                              clickTimeout: void 0,
                              velocities: [],
                              allowMomentumBounce: void 0,
                              isTouchEvent: void 0,
                              startMoving: void 0,
                          },
                          allowClick: !0,
                          allowTouchMove: o.params.allowTouchMove,
                          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                          imagesToLoad: [],
                          imagesLoaded: 0,
                      }),
                      o.useModules(),
                      o.emit("_swiper"),
                      o.params.init && o.init(),
                      o
                  );
              }
              var t,
                  i,
                  n,
                  r = e.prototype;
              return (
                  (r.emitContainerClasses = function () {
                      var e = this;
                      if (e.params._emitClasses && e.el) {
                          var t = e.el.className.split(" ").filter(function (t) {
                              return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
                          });
                          e.emit("_containerClasses", t.join(" "));
                      }
                  }),
                  (r.getSlideClasses = function (e) {
                      var t = this;
                      return e.className
                          .split(" ")
                          .filter(function (e) {
                              return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
                          })
                          .join(" ");
                  }),
                  (r.emitSlidesClasses = function () {
                      var e = this;
                      if (e.params._emitClasses && e.el) {
                          var t = [];
                          e.slides.each(function (i) {
                              var n = e.getSlideClasses(i);
                              t.push({ slideEl: i, classNames: n }), e.emit("_slideClass", i, n);
                          }),
                              e.emit("_slideClasses", t);
                      }
                  }),
                  (r.slidesPerViewDynamic = function () {
                      var e = this.params,
                          t = this.slides,
                          i = this.slidesGrid,
                          n = this.size,
                          r = this.activeIndex,
                          s = 1;
                      if (e.centeredSlides) {
                          for (var a, o = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1) t[l] && !a && ((s += 1), (o += t[l].swiperSlideSize) > n && (a = !0));
                          for (var u = r - 1; u >= 0; u -= 1) t[u] && !a && ((s += 1), (o += t[u].swiperSlideSize) > n && (a = !0));
                      } else for (var c = r + 1; c < t.length; c += 1) i[c] - i[r] < n && (s += 1);
                      return s;
                  }),
                  (r.update = function () {
                      var e = this;
                      if (e && !e.destroyed) {
                          var t = e.snapGrid,
                              i = e.params;
                          i.breakpoints && e.setBreakpoint(),
                              e.updateSize(),
                              e.updateSlides(),
                              e.updateProgress(),
                              e.updateSlidesClasses(),
                              e.params.freeMode
                                  ? (n(), e.params.autoHeight && e.updateAutoHeight())
                                  : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(),
                              i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                              e.emit("update");
                      }
                      function n() {
                          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
                      }
                  }),
                  (r.changeDirection = function (e, t) {
                      void 0 === t && (t = !0);
                      var i = this.params.direction;
                      return (
                          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
                          e === i ||
                              ("horizontal" !== e && "vertical" !== e) ||
                              (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e),
                              this.emitContainerClasses(),
                              (this.params.direction = e),
                              this.slides.each(function (t) {
                                  "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                              }),
                              this.emit("changeDirection"),
                              t && this.update()),
                          this
                      );
                  }),
                  (r.mount = function (e) {
                      if (this.mounted) return !0;
                      var t,
                          i = C(e || this.params.el);
                      return (
                          !!(e = i[0]) &&
                          ((e.swiper = this),
                          e && e.shadowRoot && e.shadowRoot.querySelector
                              ? ((t = C(e.shadowRoot.querySelector("." + this.params.wrapperClass))).children = function (e) {
                                    return i.children(e);
                                })
                              : (t = i.children("." + this.params.wrapperClass)),
                          A(this, {
                              $el: i,
                              el: e,
                              $wrapperEl: t,
                              wrapperEl: t[0],
                              mounted: !0,
                              rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                              rtlTranslate: "horizontal" === this.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                              wrongRTL: "-webkit-box" === t.css("display"),
                          }),
                          !0)
                      );
                  }),
                  (r.init = function (e) {
                      return (
                          this.initialized ||
                              !1 === this.mount(e) ||
                              (this.emit("beforeInit"),
                              this.params.breakpoints && this.setBreakpoint(),
                              this.addClasses(),
                              this.params.loop && this.loopCreate(),
                              this.updateSize(),
                              this.updateSlides(),
                              this.params.watchOverflow && this.checkOverflow(),
                              this.params.grabCursor && this.setGrabCursor(),
                              this.params.preloadImages && this.preloadImages(),
                              this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
                              this.attachEvents(),
                              (this.initialized = !0),
                              this.emit("init"),
                              this.emit("afterInit")),
                          this
                      );
                  }),
                  (r.destroy = function (e, t) {
                      void 0 === e && (e = !0), void 0 === t && (t = !0);
                      var i,
                          n = this,
                          r = n.params,
                          s = n.$el,
                          a = n.$wrapperEl,
                          o = n.slides;
                      return (
                          void 0 === n.params ||
                              n.destroyed ||
                              (n.emit("beforeDestroy"),
                              (n.initialized = !1),
                              n.detachEvents(),
                              r.loop && n.loopDestroy(),
                              t &&
                                  (n.removeClasses(),
                                  s.removeAttr("style"),
                                  a.removeAttr("style"),
                                  o && o.length && o.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                              n.emit("destroy"),
                              Object.keys(n.eventsListeners).forEach(function (e) {
                                  n.off(e);
                              }),
                              !1 !== e &&
                                  ((n.$el[0].swiper = null),
                                  (i = n),
                                  Object.keys(i).forEach(function (e) {
                                      try {
                                          i[e] = null;
                                      } catch (e) {}
                                      try {
                                          delete i[e];
                                      } catch (e) {}
                                  })),
                              (n.destroyed = !0)),
                          null
                      );
                  }),
                  (e.extendDefaults = function (e) {
                      A(Y, e);
                  }),
                  (e.installModule = function (t) {
                      e.prototype.modules || (e.prototype.modules = {});
                      var i = t.name || Object.keys(e.prototype.modules).length + "_" + k();
                      e.prototype.modules[i] = t;
                  }),
                  (e.use = function (t) {
                      return Array.isArray(t)
                          ? (t.forEach(function (t) {
                                return e.installModule(t);
                            }),
                            e)
                          : (e.installModule(t), e);
                  }),
                  (t = e),
                  (n = [
                      {
                          key: "extendedDefaults",
                          get: function () {
                              return Y;
                          },
                      },
                      {
                          key: "defaults",
                          get: function () {
                              return G;
                          },
                      },
                  ]),
                  (i = null) && W(t.prototype, i),
                  n && W(t, n),
                  e
              );
          })();
      Object.keys(X).forEach(function (e) {
          Object.keys(X[e]).forEach(function (t) {
              K.prototype[t] = X[e][t];
          });
      }),
          K.use([N, j]);
      var Z = K;
      function Q() {
          return (Q =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var J = {
              update: function (e) {
                  var t = this,
                      i = t.params,
                      n = i.slidesPerView,
                      r = i.slidesPerGroup,
                      s = i.centeredSlides,
                      a = t.params.virtual,
                      o = a.addSlidesBefore,
                      l = a.addSlidesAfter,
                      u = t.virtual,
                      c = u.from,
                      d = u.to,
                      p = u.slides,
                      h = u.slidesGrid,
                      f = u.renderSlide,
                      m = u.offset;
                  t.updateActiveIndex();
                  var v,
                      g,
                      y,
                      b = t.activeIndex || 0;
                  (v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"), s ? ((g = Math.floor(n / 2) + r + l), (y = Math.floor(n / 2) + r + o)) : ((g = n + (r - 1) + l), (y = r + o));
                  var w = Math.max((b || 0) - y, 0),
                      x = Math.min((b || 0) + g, p.length - 1),
                      S = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);
                  function E() {
                      t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
                  }
                  if ((A(t.virtual, { from: w, to: x, offset: S, slidesGrid: t.slidesGrid }), c === w && d === x && !e)) return t.slidesGrid !== h && S !== m && t.slides.css(v, S + "px"), void t.updateProgress();
                  if (t.params.virtual.renderExternal)
                      return (
                          t.params.virtual.renderExternal.call(t, {
                              offset: S,
                              from: w,
                              to: x,
                              slides: (function () {
                                  for (var e = [], t = w; t <= x; t += 1) e.push(p[t]);
                                  return e;
                              })(),
                          }),
                          void (t.params.virtual.renderExternalUpdate && E())
                      );
                  var C = [],
                      T = [];
                  if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                  else for (var k = c; k <= d; k += 1) (k < w || k > x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + k + '"]').remove();
                  for (var M = 0; M < p.length; M += 1) M >= w && M <= x && (void 0 === d || e ? T.push(M) : (M > d && T.push(M), M < c && C.push(M)));
                  T.forEach(function (e) {
                      t.$wrapperEl.append(f(p[e], e));
                  }),
                      C.sort(function (e, t) {
                          return t - e;
                      }).forEach(function (e) {
                          t.$wrapperEl.prepend(f(p[e], e));
                      }),
                      t.$wrapperEl.children(".swiper-slide").css(v, S + "px"),
                      E();
              },
              renderSlide: function (e, t) {
                  var i = this.params.virtual;
                  if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                  var n = i.renderSlide ? C(i.renderSlide.call(this, e, t)) : C('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                  return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = n), n;
              },
              appendSlide: function (e) {
                  if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                  else this.virtual.slides.push(e);
                  this.virtual.update(!0);
              },
              prependSlide: function (e) {
                  var t = this.activeIndex,
                      i = t + 1,
                      n = 1;
                  if (Array.isArray(e)) {
                      for (var r = 0; r < e.length; r += 1) e[r] && this.virtual.slides.unshift(e[r]);
                      (i = t + e.length), (n = e.length);
                  } else this.virtual.slides.unshift(e);
                  if (this.params.virtual.cache) {
                      var s = this.virtual.cache,
                          a = {};
                      Object.keys(s).forEach(function (e) {
                          var t = s[e],
                              i = t.attr("data-swiper-slide-index");
                          i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), (a[parseInt(e, 10) + n] = t);
                      }),
                          (this.virtual.cache = a);
                  }
                  this.virtual.update(!0), this.slideTo(i, 0);
              },
              removeSlide: function (e) {
                  if (null != e) {
                      var t = this.activeIndex;
                      if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), (t = Math.max(t, 0));
                      else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), (t = Math.max(t, 0));
                      this.virtual.update(!0), this.slideTo(t, 0);
                  }
              },
              removeAllSlides: function () {
                  (this.virtual.slides = []), this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
              },
          },
          ee = {
              name: "virtual",
              params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } },
              create: function () {
                  $(this, { virtual: Q({}, J, { slides: this.params.virtual.slides, cache: {} }) });
              },
              on: {
                  beforeInit: function (e) {
                      if (e.params.virtual.enabled) {
                          e.classNames.push(e.params.containerModifierClass + "virtual");
                          var t = { watchSlidesProgress: !0 };
                          A(e.params, t), A(e.originalParams, t), e.params.initialSlide || e.virtual.update();
                      }
                  },
                  setTranslate: function (e) {
                      e.params.virtual.enabled && e.virtual.update();
                  },
              },
          };
      function te() {
          return (te =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var ie = {
              handle: function (e) {
                  var t = l(),
                      i = a(),
                      n = this.rtlTranslate,
                      r = e;
                  r.originalEvent && (r = r.originalEvent);
                  var s = r.keyCode || r.charCode,
                      o = this.params.keyboard.pageUpDown,
                      u = o && 33 === s,
                      c = o && 34 === s,
                      d = 37 === s,
                      p = 39 === s,
                      h = 38 === s,
                      f = 40 === s;
                  if (!this.allowSlideNext && ((this.isHorizontal() && p) || (this.isVertical() && f) || c)) return !1;
                  if (!this.allowSlidePrev && ((this.isHorizontal() && d) || (this.isVertical() && h) || u)) return !1;
                  if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || (i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase())))) {
                      if (this.params.keyboard.onlyInViewport && (u || c || d || p || h || f)) {
                          var m = !1;
                          if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                          var v = t.innerWidth,
                              g = t.innerHeight,
                              y = this.$el.offset();
                          n && (y.left -= this.$el[0].scrollLeft);
                          for (
                              var b = [
                                      [y.left, y.top],
                                      [y.left + this.width, y.top],
                                      [y.left, y.top + this.height],
                                      [y.left + this.width, y.top + this.height],
                                  ],
                                  w = 0;
                              w < b.length;
                              w += 1
                          ) {
                              var x = b[w];
                              if (x[0] >= 0 && x[0] <= v && x[1] >= 0 && x[1] <= g) {
                                  if (0 === x[0] && 0 === x[1]) continue;
                                  m = !0;
                              }
                          }
                          if (!m) return;
                      }
                      this.isHorizontal()
                          ? ((u || c || d || p) && (r.preventDefault ? r.preventDefault() : (r.returnValue = !1)), (((c || p) && !n) || ((u || d) && n)) && this.slideNext(), (((u || d) && !n) || ((c || p) && n)) && this.slidePrev())
                          : ((u || c || h || f) && (r.preventDefault ? r.preventDefault() : (r.returnValue = !1)), (c || f) && this.slideNext(), (u || h) && this.slidePrev()),
                          this.emit("keyPress", s);
                  }
              },
              enable: function () {
                  var e = a();
                  this.keyboard.enabled || (C(e).on("keydown", this.keyboard.handle), (this.keyboard.enabled = !0));
              },
              disable: function () {
                  var e = a();
                  this.keyboard.enabled && (C(e).off("keydown", this.keyboard.handle), (this.keyboard.enabled = !1));
              },
          },
          ne = {
              name: "keyboard",
              params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
              create: function () {
                  $(this, { keyboard: te({ enabled: !1 }, ie) });
              },
              on: {
                  init: function (e) {
                      e.params.keyboard.enabled && e.keyboard.enable();
                  },
                  destroy: function (e) {
                      e.keyboard.enabled && e.keyboard.disable();
                  },
              },
          };
      var re = {
          lastScrollTime: k(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          event: function () {
              return l().navigator.userAgent.indexOf("firefox") > -1
                  ? "DOMMouseScroll"
                  : (function () {
                        var e = a(),
                            t = "onwheel" in e;
                        if (!t) {
                            var i = e.createElement("div");
                            i.setAttribute("onwheel", "return;"), (t = "function" == typeof i.onwheel);
                        }
                        return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t;
                    })()
                  ? "wheel"
                  : "mousewheel";
          },
          normalize: function (e) {
              var t = 0,
                  i = 0,
                  n = 0,
                  r = 0;
              return (
                  "detail" in e && (i = e.detail),
                  "wheelDelta" in e && (i = -e.wheelDelta / 120),
                  "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
                  "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                  "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
                  (n = 10 * t),
                  (r = 10 * i),
                  "deltaY" in e && (r = e.deltaY),
                  "deltaX" in e && (n = e.deltaX),
                  e.shiftKey && !n && ((n = r), (r = 0)),
                  (n || r) && e.deltaMode && (1 === e.deltaMode ? ((n *= 40), (r *= 40)) : ((n *= 800), (r *= 800))),
                  n && !t && (t = n < 1 ? -1 : 1),
                  r && !i && (i = r < 1 ? -1 : 1),
                  { spinX: t, spinY: i, pixelX: n, pixelY: r }
              );
          },
          handleMouseEnter: function () {
              this.mouseEntered = !0;
          },
          handleMouseLeave: function () {
              this.mouseEntered = !1;
          },
          handle: function (e) {
              var t = e,
                  i = this,
                  n = i.params.mousewheel;
              i.params.cssMode && t.preventDefault();
              var r = i.$el;
              if (("container" !== i.params.mousewheel.eventsTarget && (r = C(i.params.mousewheel.eventsTarget)), !i.mouseEntered && !r[0].contains(t.target) && !n.releaseOnEdges)) return !0;
              t.originalEvent && (t = t.originalEvent);
              var s = 0,
                  a = i.rtlTranslate ? -1 : 1,
                  o = re.normalize(t);
              if (n.forceToAxis)
                  if (i.isHorizontal()) {
                      if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                      s = -o.pixelX * a;
                  } else {
                      if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                      s = -o.pixelY;
                  }
              else s = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * a : -o.pixelY;
              if (0 === s) return !0;
              n.invert && (s = -s);
              var l = i.getTranslate() + s * n.sensitivity;
              if (
                  (l >= i.minTranslate() && (l = i.minTranslate()),
                  l <= i.maxTranslate() && (l = i.maxTranslate()),
                  (!!i.params.loop || !(l === i.minTranslate() || l === i.maxTranslate())) && i.params.nested && t.stopPropagation(),
                  i.params.freeMode)
              ) {
                  var u = { time: k(), delta: Math.abs(s), direction: Math.sign(s) },
                      c = i.mousewheel.lastEventBeforeSnap,
                      d = c && u.time < c.time + 500 && u.delta <= c.delta && u.direction === c.direction;
                  if (!d) {
                      (i.mousewheel.lastEventBeforeSnap = void 0), i.params.loop && i.loopFix();
                      var p = i.getTranslate() + s * n.sensitivity,
                          h = i.isBeginning,
                          f = i.isEnd;
                      if (
                          (p >= i.minTranslate() && (p = i.minTranslate()),
                          p <= i.maxTranslate() && (p = i.maxTranslate()),
                          i.setTransition(0),
                          i.setTranslate(p),
                          i.updateProgress(),
                          i.updateActiveIndex(),
                          i.updateSlidesClasses(),
                          ((!h && i.isBeginning) || (!f && i.isEnd)) && i.updateSlidesClasses(),
                          i.params.freeModeSticky)
                      ) {
                          clearTimeout(i.mousewheel.timeout), (i.mousewheel.timeout = void 0);
                          var m = i.mousewheel.recentWheelEvents;
                          m.length >= 15 && m.shift();
                          var v = m.length ? m[m.length - 1] : void 0,
                              g = m[0];
                          if ((m.push(u), v && (u.delta > v.delta || u.direction !== v.direction))) m.splice(0);
                          else if (m.length >= 15 && u.time - g.time < 500 && g.delta - u.delta >= 1 && u.delta <= 6) {
                              var y = s > 0 ? 0.8 : 0.2;
                              (i.mousewheel.lastEventBeforeSnap = u),
                                  m.splice(0),
                                  (i.mousewheel.timeout = T(function () {
                                      i.slideToClosest(i.params.speed, !0, void 0, y);
                                  }, 0));
                          }
                          i.mousewheel.timeout ||
                              (i.mousewheel.timeout = T(function () {
                                  (i.mousewheel.lastEventBeforeSnap = u), m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                              }, 500));
                      }
                      if ((d || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate())) return !0;
                  }
              } else {
                  var b = { time: k(), delta: Math.abs(s), direction: Math.sign(s), raw: e },
                      w = i.mousewheel.recentWheelEvents;
                  w.length >= 2 && w.shift();
                  var x = w.length ? w[w.length - 1] : void 0;
                  if ((w.push(b), x ? (b.direction !== x.direction || b.delta > x.delta || b.time > x.time + 150) && i.mousewheel.animateSlider(b) : i.mousewheel.animateSlider(b), i.mousewheel.releaseScroll(b))) return !0;
              }
              return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
          },
          animateSlider: function (e) {
              var t = l();
              return (
                  !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) &&
                  !(this.params.mousewheel.thresholdTime && k() - this.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) &&
                  ((e.delta >= 6 && k() - this.mousewheel.lastScrollTime < 60) ||
                      (e.direction < 0
                          ? (this.isEnd && !this.params.loop) || this.animating || (this.slideNext(), this.emit("scroll", e.raw))
                          : (this.isBeginning && !this.params.loop) || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)),
                      (this.mousewheel.lastScrollTime = new t.Date().getTime()),
                      !1))
              );
          },
          releaseScroll: function (e) {
              var t = this.params.mousewheel;
              if (e.direction < 0) {
                  if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
              } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
              return !1;
          },
          enable: function () {
              var e = re.event();
              if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
              if (!e) return !1;
              if (this.mousewheel.enabled) return !1;
              var t = this.$el;
              return (
                  "container" !== this.params.mousewheel.eventsTarget && (t = C(this.params.mousewheel.eventsTarget)),
                  t.on("mouseenter", this.mousewheel.handleMouseEnter),
                  t.on("mouseleave", this.mousewheel.handleMouseLeave),
                  t.on(e, this.mousewheel.handle),
                  (this.mousewheel.enabled = !0),
                  !0
              );
          },
          disable: function () {
              var e = re.event();
              if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
              if (!e) return !1;
              if (!this.mousewheel.enabled) return !1;
              var t = this.$el;
              return "container" !== this.params.mousewheel.eventsTarget && (t = C(this.params.mousewheel.eventsTarget)), t.off(e, this.mousewheel.handle), (this.mousewheel.enabled = !1), !0;
          },
      };
      function se() {
          return (se =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var ae = {
          update: function () {
              var e = this.params.navigation;
              if (!this.params.loop) {
                  var t = this.navigation,
                      i = t.$nextEl,
                      n = t.$prevEl;
                  n && n.length > 0 && (this.isBeginning ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
                      i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
              }
          },
          onPrevClick: function (e) {
              e.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev();
          },
          onNextClick: function (e) {
              e.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext();
          },
          init: function () {
              var e,
                  t,
                  i = this.params.navigation;
              (i.nextEl || i.prevEl) &&
                  (i.nextEl && ((e = C(i.nextEl)), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))),
                  i.prevEl && ((t = C(i.prevEl)), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))),
                  e && e.length > 0 && e.on("click", this.navigation.onNextClick),
                  t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
                  A(this.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
          },
          destroy: function () {
              var e = this.navigation,
                  t = e.$nextEl,
                  i = e.$prevEl;
              t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)),
                  i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
          },
      };
      function oe() {
          return (oe =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var le = {
          update: function () {
              var e = this.rtl,
                  t = this.params.pagination;
              if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                  var i,
                      n = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                      r = this.pagination.$el,
                      s = this.params.loop ? Math.ceil((n - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                  if (
                      (this.params.loop
                          ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > n - 1 - 2 * this.loopedSlides && (i -= n - 2 * this.loopedSlides),
                            i > s - 1 && (i -= s),
                            i < 0 && "bullets" !== this.params.paginationType && (i = s + i))
                          : (i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0),
                      "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0)
                  ) {
                      var a,
                          o,
                          l,
                          u = this.pagination.bullets;
                      if (
                          (t.dynamicBullets &&
                              ((this.pagination.bulletSize = u.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                              r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"),
                              t.dynamicMainBullets > 1 &&
                                  void 0 !== this.previousIndex &&
                                  ((this.pagination.dynamicBulletIndex += i - this.previousIndex),
                                  this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1
                                      ? (this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1)
                                      : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                              (a = i - this.pagination.dynamicBulletIndex),
                              (l = ((o = a + (Math.min(u.length, t.dynamicMainBullets) - 1)) + a) / 2)),
                          u.removeClass(
                              t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"
                          ),
                          r.length > 1)
                      )
                          u.each(function (e) {
                              var n = C(e),
                                  r = n.index();
                              r === i && n.addClass(t.bulletActiveClass),
                                  t.dynamicBullets &&
                                      (r >= a && r <= o && n.addClass(t.bulletActiveClass + "-main"),
                                      r === a &&
                                          n
                                              .prev()
                                              .addClass(t.bulletActiveClass + "-prev")
                                              .prev()
                                              .addClass(t.bulletActiveClass + "-prev-prev"),
                                      r === o &&
                                          n
                                              .next()
                                              .addClass(t.bulletActiveClass + "-next")
                                              .next()
                                              .addClass(t.bulletActiveClass + "-next-next"));
                          });
                      else {
                          var c = u.eq(i),
                              d = c.index();
                          if ((c.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                              for (var p = u.eq(a), h = u.eq(o), f = a; f <= o; f += 1) u.eq(f).addClass(t.bulletActiveClass + "-main");
                              if (this.params.loop)
                                  if (d >= u.length - t.dynamicMainBullets) {
                                      for (var m = t.dynamicMainBullets; m >= 0; m -= 1) u.eq(u.length - m).addClass(t.bulletActiveClass + "-main");
                                      u.eq(u.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                                  } else
                                      p
                                          .prev()
                                          .addClass(t.bulletActiveClass + "-prev")
                                          .prev()
                                          .addClass(t.bulletActiveClass + "-prev-prev"),
                                          h
                                              .next()
                                              .addClass(t.bulletActiveClass + "-next")
                                              .next()
                                              .addClass(t.bulletActiveClass + "-next-next");
                              else
                                  p
                                      .prev()
                                      .addClass(t.bulletActiveClass + "-prev")
                                      .prev()
                                      .addClass(t.bulletActiveClass + "-prev-prev"),
                                      h
                                          .next()
                                          .addClass(t.bulletActiveClass + "-next")
                                          .next()
                                          .addClass(t.bulletActiveClass + "-next-next");
                          }
                      }
                      if (t.dynamicBullets) {
                          var v = Math.min(u.length, t.dynamicMainBullets + 4),
                              g = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - l * this.pagination.bulletSize,
                              y = e ? "right" : "left";
                          u.css(this.isHorizontal() ? y : "top", g + "px");
                      }
                  }
                  if (("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(s))), "progressbar" === t.type)) {
                      var b;
                      b = t.progressbarOpposite ? (this.isHorizontal() ? "vertical" : "horizontal") : this.isHorizontal() ? "horizontal" : "vertical";
                      var w = (i + 1) / s,
                          x = 1,
                          S = 1;
                      "horizontal" === b ? (x = w) : (S = w),
                          r
                              .find("." + t.progressbarFillClass)
                              .transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + S + ")")
                              .transition(this.params.speed);
                  }
                  "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, s)), this.emit("paginationRender", r[0])) : this.emit("paginationUpdate", r[0]),
                      r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
              }
          },
          render: function () {
              var e = this.params.pagination;
              if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                  var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                      i = this.pagination.$el,
                      n = "";
                  if ("bullets" === e.type) {
                      var r = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                      this.params.freeMode && !this.params.loop && r > t && (r = t);
                      for (var s = 0; s < r; s += 1) e.renderBullet ? (n += e.renderBullet.call(this, s, e.bulletClass)) : (n += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">");
                      i.html(n), (this.pagination.bullets = i.find("." + e.bulletClass.replace(/ /g, ".")));
                  }
                  "fraction" === e.type && ((n = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>'), i.html(n)),
                      "progressbar" === e.type && ((n = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>'), i.html(n)),
                      "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
              }
          },
          init: function () {
              var e = this,
                  t = e.params.pagination;
              if (t.el) {
                  var i = C(t.el);
                  0 !== i.length &&
                      (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)),
                      "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                      i.addClass(t.modifierClass + t.type),
                      "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), (e.pagination.dynamicBulletIndex = 0), t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                      "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                      t.clickable &&
                          i.on("click", "." + t.bulletClass.replace(/ /g, "."), function (t) {
                              t.preventDefault();
                              var i = C(this).index() * e.params.slidesPerGroup;
                              e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                          }),
                      A(e.pagination, { $el: i, el: i[0] }));
              }
          },
          destroy: function () {
              var e = this.params.pagination;
              if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                  var t = this.pagination.$el;
                  t.removeClass(e.hiddenClass),
                      t.removeClass(e.modifierClass + e.type),
                      this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
                      e.clickable && t.off("click", "." + e.bulletClass.replace(/ /g, "."));
              }
          },
      };
      function ue() {
          return (ue =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var ce = {
          setTranslate: function () {
              if (this.params.scrollbar.el && this.scrollbar.el) {
                  var e = this.scrollbar,
                      t = this.rtlTranslate,
                      i = this.progress,
                      n = e.dragSize,
                      r = e.trackSize,
                      s = e.$dragEl,
                      a = e.$el,
                      o = this.params.scrollbar,
                      l = n,
                      u = (r - n) * i;
                  t ? ((u = -u) > 0 ? ((l = n - u), (u = 0)) : -u + n > r && (l = r + u)) : u < 0 ? ((l = n + u), (u = 0)) : u + n > r && (l = r - u),
                      this.isHorizontal() ? (s.transform("translate3d(" + u + "px, 0, 0)"), (s[0].style.width = l + "px")) : (s.transform("translate3d(0px, " + u + "px, 0)"), (s[0].style.height = l + "px")),
                      o.hide &&
                          (clearTimeout(this.scrollbar.timeout),
                          (a[0].style.opacity = 1),
                          (this.scrollbar.timeout = setTimeout(function () {
                              (a[0].style.opacity = 0), a.transition(400);
                          }, 1e3)));
              }
          },
          setTransition: function (e) {
              this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
          },
          updateSize: function () {
              if (this.params.scrollbar.el && this.scrollbar.el) {
                  var e = this.scrollbar,
                      t = e.$dragEl,
                      i = e.$el;
                  (t[0].style.width = ""), (t[0].style.height = "");
                  var n,
                      r = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                      s = this.size / this.virtualSize,
                      a = s * (r / this.size);
                  (n = "auto" === this.params.scrollbar.dragSize ? r * s : parseInt(this.params.scrollbar.dragSize, 10)),
                      this.isHorizontal() ? (t[0].style.width = n + "px") : (t[0].style.height = n + "px"),
                      (i[0].style.display = s >= 1 ? "none" : ""),
                      this.params.scrollbar.hide && (i[0].style.opacity = 0),
                      A(e, { trackSize: r, divider: s, moveDivider: a, dragSize: n }),
                      e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
              }
          },
          getPointerPosition: function (e) {
              return this.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX) : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
          },
          setDragPosition: function (e) {
              var t,
                  i = this.scrollbar,
                  n = this.rtlTranslate,
                  r = i.$el,
                  s = i.dragSize,
                  a = i.trackSize,
                  o = i.dragStartPos;
              (t = (i.getPointerPosition(e) - r.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : s / 2)) / (a - s)), (t = Math.max(Math.min(t, 1), 0)), n && (t = 1 - t);
              var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
              this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses();
          },
          onDragStart: function (e) {
              var t = this.params.scrollbar,
                  i = this.scrollbar,
                  n = this.$wrapperEl,
                  r = i.$el,
                  s = i.$dragEl;
              (this.scrollbar.isTouched = !0),
                  (this.scrollbar.dragStartPos = e.target === s[0] || e.target === s ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null),
                  e.preventDefault(),
                  e.stopPropagation(),
                  n.transition(100),
                  s.transition(100),
                  i.setDragPosition(e),
                  clearTimeout(this.scrollbar.dragTimeout),
                  r.transition(0),
                  t.hide && r.css("opacity", 1),
                  this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"),
                  this.emit("scrollbarDragStart", e);
          },
          onDragMove: function (e) {
              var t = this.scrollbar,
                  i = this.$wrapperEl,
                  n = t.$el,
                  r = t.$dragEl;
              this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t.setDragPosition(e), i.transition(0), n.transition(0), r.transition(0), this.emit("scrollbarDragMove", e));
          },
          onDragEnd: function (e) {
              var t = this.params.scrollbar,
                  i = this.scrollbar,
                  n = this.$wrapperEl,
                  r = i.$el;
              this.scrollbar.isTouched &&
                  ((this.scrollbar.isTouched = !1),
                  this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), n.transition("")),
                  t.hide &&
                      (clearTimeout(this.scrollbar.dragTimeout),
                      (this.scrollbar.dragTimeout = T(function () {
                          r.css("opacity", 0), r.transition(400);
                      }, 1e3))),
                  this.emit("scrollbarDragEnd", e),
                  t.snapOnRelease && this.slideToClosest());
          },
          enableDraggable: function () {
              if (this.params.scrollbar.el) {
                  var e = a(),
                      t = this.scrollbar,
                      i = this.touchEventsTouch,
                      n = this.touchEventsDesktop,
                      r = this.params,
                      s = this.support,
                      o = t.$el[0],
                      l = !(!s.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                      u = !(!s.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                  o &&
                      (s.touch
                          ? (o.addEventListener(i.start, this.scrollbar.onDragStart, l), o.addEventListener(i.move, this.scrollbar.onDragMove, l), o.addEventListener(i.end, this.scrollbar.onDragEnd, u))
                          : (o.addEventListener(n.start, this.scrollbar.onDragStart, l), e.addEventListener(n.move, this.scrollbar.onDragMove, l), e.addEventListener(n.end, this.scrollbar.onDragEnd, u)));
              }
          },
          disableDraggable: function () {
              if (this.params.scrollbar.el) {
                  var e = a(),
                      t = this.scrollbar,
                      i = this.touchEventsTouch,
                      n = this.touchEventsDesktop,
                      r = this.params,
                      s = this.support,
                      o = t.$el[0],
                      l = !(!s.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                      u = !(!s.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                  o &&
                      (s.touch
                          ? (o.removeEventListener(i.start, this.scrollbar.onDragStart, l), o.removeEventListener(i.move, this.scrollbar.onDragMove, l), o.removeEventListener(i.end, this.scrollbar.onDragEnd, u))
                          : (o.removeEventListener(n.start, this.scrollbar.onDragStart, l), e.removeEventListener(n.move, this.scrollbar.onDragMove, l), e.removeEventListener(n.end, this.scrollbar.onDragEnd, u)));
              }
          },
          init: function () {
              if (this.params.scrollbar.el) {
                  var e = this.scrollbar,
                      t = this.$el,
                      i = this.params.scrollbar,
                      n = C(i.el);
                  this.params.uniqueNavElements && "string" == typeof i.el && n.length > 1 && 1 === t.find(i.el).length && (n = t.find(i.el));
                  var r = n.find("." + this.params.scrollbar.dragClass);
                  0 === r.length && ((r = C('<div class="' + this.params.scrollbar.dragClass + '"></div>')), n.append(r)), A(e, { $el: n, el: n[0], $dragEl: r, dragEl: r[0] }), i.draggable && e.enableDraggable();
              }
          },
          destroy: function () {
              this.scrollbar.disableDraggable();
          },
      };
      function de() {
          return (de =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var pe = {
          setTransform: function (e, t) {
              var i = this.rtl,
                  n = C(e),
                  r = i ? -1 : 1,
                  s = n.attr("data-swiper-parallax") || "0",
                  a = n.attr("data-swiper-parallax-x"),
                  o = n.attr("data-swiper-parallax-y"),
                  l = n.attr("data-swiper-parallax-scale"),
                  u = n.attr("data-swiper-parallax-opacity");
              if (
                  (a || o ? ((a = a || "0"), (o = o || "0")) : this.isHorizontal() ? ((a = s), (o = "0")) : ((o = s), (a = "0")),
                  (a = a.indexOf("%") >= 0 ? parseInt(a, 10) * t * r + "%" : a * t * r + "px"),
                  (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px"),
                  null != u)
              ) {
                  var c = u - (u - 1) * (1 - Math.abs(t));
                  n[0].style.opacity = c;
              }
              if (null == l) n.transform("translate3d(" + a + ", " + o + ", 0px)");
              else {
                  var d = l - (l - 1) * (1 - Math.abs(t));
                  n.transform("translate3d(" + a + ", " + o + ", 0px) scale(" + d + ")");
              }
          },
          setTranslate: function () {
              var e = this,
                  t = e.$el,
                  i = e.slides,
                  n = e.progress,
                  r = e.snapGrid;
              t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
                  e.parallax.setTransform(t, n);
              }),
                  i.each(function (t, i) {
                      var s = t.progress;
                      e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (s += Math.ceil(i / 2) - n * (r.length - 1)),
                          (s = Math.min(Math.max(s, -1), 1)),
                          C(t)
                              .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
                              .each(function (t) {
                                  e.parallax.setTransform(t, s);
                              });
                  });
          },
          setTransition: function (e) {
              void 0 === e && (e = this.params.speed);
              this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
                  var i = C(t),
                      n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                  0 === e && (n = 0), i.transition(n);
              });
          },
      };
      function he() {
          return (he =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var fe = {
          getDistanceBetweenTouches: function (e) {
              if (e.targetTouches.length < 2) return 1;
              var t = e.targetTouches[0].pageX,
                  i = e.targetTouches[0].pageY,
                  n = e.targetTouches[1].pageX,
                  r = e.targetTouches[1].pageY;
              return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2));
          },
          onGestureStart: function (e) {
              var t = this.support,
                  i = this.params.zoom,
                  n = this.zoom,
                  r = n.gesture;
              if (((n.fakeGestureTouched = !1), (n.fakeGestureMoved = !1), !t.gestures)) {
                  if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                  (n.fakeGestureTouched = !0), (r.scaleStart = fe.getDistanceBetweenTouches(e));
              }
              (r.$slideEl && r.$slideEl.length) ||
              ((r.$slideEl = C(e.target).closest("." + this.params.slideClass)),
              0 === r.$slideEl.length && (r.$slideEl = this.slides.eq(this.activeIndex)),
              (r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
              (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)),
              (r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
              0 !== r.$imageWrapEl.length)
                  ? (r.$imageEl && r.$imageEl.transition(0), (this.zoom.isScaling = !0))
                  : (r.$imageEl = void 0);
          },
          onGestureChange: function (e) {
              var t = this.support,
                  i = this.params.zoom,
                  n = this.zoom,
                  r = n.gesture;
              if (!t.gestures) {
                  if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                  (n.fakeGestureMoved = !0), (r.scaleMove = fe.getDistanceBetweenTouches(e));
              }
              r.$imageEl && 0 !== r.$imageEl.length
                  ? (t.gestures ? (n.scale = e.scale * n.currentScale) : (n.scale = (r.scaleMove / r.scaleStart) * n.currentScale),
                    n.scale > r.maxRatio && (n.scale = r.maxRatio - 1 + Math.pow(n.scale - r.maxRatio + 1, 0.5)),
                    n.scale < i.minRatio && (n.scale = i.minRatio + 1 - Math.pow(i.minRatio - n.scale + 1, 0.5)),
                    r.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"))
                  : "gesturechange" === e.type && n.onGestureStart(e);
          },
          onGestureEnd: function (e) {
              var t = this.device,
                  i = this.support,
                  n = this.params.zoom,
                  r = this.zoom,
                  s = r.gesture;
              if (!i.gestures) {
                  if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
                  if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !t.android)) return;
                  (r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1);
              }
              s.$imageEl &&
                  0 !== s.$imageEl.length &&
                  ((r.scale = Math.max(Math.min(r.scale, s.maxRatio), n.minRatio)),
                  s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"),
                  (r.currentScale = r.scale),
                  (r.isScaling = !1),
                  1 === r.scale && (s.$slideEl = void 0));
          },
          onTouchStart: function (e) {
              var t = this.device,
                  i = this.zoom,
                  n = i.gesture,
                  r = i.image;
              n.$imageEl &&
                  0 !== n.$imageEl.length &&
                  (r.isTouched ||
                      (t.android && e.cancelable && e.preventDefault(),
                      (r.isTouched = !0),
                      (r.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                      (r.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
          },
          onTouchMove: function (e) {
              var t = this.zoom,
                  i = t.gesture,
                  n = t.image,
                  r = t.velocity;
              if (i.$imageEl && 0 !== i.$imageEl.length && ((this.allowClick = !1), n.isTouched && i.$slideEl)) {
                  n.isMoved ||
                      ((n.width = i.$imageEl[0].offsetWidth),
                      (n.height = i.$imageEl[0].offsetHeight),
                      (n.startX = M(i.$imageWrapEl[0], "x") || 0),
                      (n.startY = M(i.$imageWrapEl[0], "y") || 0),
                      (i.slideWidth = i.$slideEl[0].offsetWidth),
                      (i.slideHeight = i.$slideEl[0].offsetHeight),
                      i.$imageWrapEl.transition(0),
                      this.rtl && ((n.startX = -n.startX), (n.startY = -n.startY)));
                  var s = n.width * t.scale,
                      a = n.height * t.scale;
                  if (!(s < i.slideWidth && a < i.slideHeight)) {
                      if (
                          ((n.minX = Math.min(i.slideWidth / 2 - s / 2, 0)),
                          (n.maxX = -n.minX),
                          (n.minY = Math.min(i.slideHeight / 2 - a / 2, 0)),
                          (n.maxY = -n.minY),
                          (n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                          (n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                          !n.isMoved && !t.isScaling)
                      ) {
                          if (this.isHorizontal() && ((Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x) || (Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)))
                              return void (n.isTouched = !1);
                          if (!this.isHorizontal() && ((Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y) || (Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)))
                              return void (n.isTouched = !1);
                      }
                      e.cancelable && e.preventDefault(),
                          e.stopPropagation(),
                          (n.isMoved = !0),
                          (n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX),
                          (n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY),
                          n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, 0.8)),
                          n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, 0.8)),
                          n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, 0.8)),
                          n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, 0.8)),
                          r.prevPositionX || (r.prevPositionX = n.touchesCurrent.x),
                          r.prevPositionY || (r.prevPositionY = n.touchesCurrent.y),
                          r.prevTime || (r.prevTime = Date.now()),
                          (r.x = (n.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2),
                          (r.y = (n.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2),
                          Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                          Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                          (r.prevPositionX = n.touchesCurrent.x),
                          (r.prevPositionY = n.touchesCurrent.y),
                          (r.prevTime = Date.now()),
                          i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)");
                  }
              }
          },
          onTouchEnd: function () {
              var e = this.zoom,
                  t = e.gesture,
                  i = e.image,
                  n = e.velocity;
              if (t.$imageEl && 0 !== t.$imageEl.length) {
                  if (!i.isTouched || !i.isMoved) return (i.isTouched = !1), void (i.isMoved = !1);
                  (i.isTouched = !1), (i.isMoved = !1);
                  var r = 300,
                      s = 300,
                      a = n.x * r,
                      o = i.currentX + a,
                      l = n.y * s,
                      u = i.currentY + l;
                  0 !== n.x && (r = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (s = Math.abs((u - i.currentY) / n.y));
                  var c = Math.max(r, s);
                  (i.currentX = o), (i.currentY = u);
                  var d = i.width * e.scale,
                      p = i.height * e.scale;
                  (i.minX = Math.min(t.slideWidth / 2 - d / 2, 0)),
                      (i.maxX = -i.minX),
                      (i.minY = Math.min(t.slideHeight / 2 - p / 2, 0)),
                      (i.maxY = -i.minY),
                      (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
                      (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
                      t.$imageWrapEl.transition(c).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
              }
          },
          onTransitionEnd: function () {
              var e = this.zoom,
                  t = e.gesture;
              t.$slideEl &&
                  this.previousIndex !== this.activeIndex &&
                  (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                  t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
                  (e.scale = 1),
                  (e.currentScale = 1),
                  (t.$slideEl = void 0),
                  (t.$imageEl = void 0),
                  (t.$imageWrapEl = void 0));
          },
          toggle: function (e) {
              var t = this.zoom;
              t.scale && 1 !== t.scale ? t.out() : t.in(e);
          },
          in: function (e) {
              var t,
                  i,
                  n,
                  r,
                  s,
                  a,
                  o,
                  u,
                  c,
                  d,
                  p,
                  h,
                  f,
                  m,
                  v,
                  g,
                  y = l(),
                  b = this.zoom,
                  w = this.params.zoom,
                  x = b.gesture,
                  S = b.image;
              (x.$slideEl ||
                  (this.params.virtual && this.params.virtual.enabled && this.virtual ? (x.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass)) : (x.$slideEl = this.slides.eq(this.activeIndex)),
                  (x.$imageEl = x.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                  (x.$imageWrapEl = x.$imageEl.parent("." + w.containerClass))),
              x.$imageEl && 0 !== x.$imageEl.length) &&
                  (x.$slideEl.addClass("" + w.zoomedSlideClass),
                  void 0 === S.touchesStart.x && e
                      ? ((t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX), (i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
                      : ((t = S.touchesStart.x), (i = S.touchesStart.y)),
                  (b.scale = x.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                  (b.currentScale = x.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                  e
                      ? ((v = x.$slideEl[0].offsetWidth),
                        (g = x.$slideEl[0].offsetHeight),
                        (n = x.$slideEl.offset().left + y.scrollX + v / 2 - t),
                        (r = x.$slideEl.offset().top + y.scrollY + g / 2 - i),
                        (o = x.$imageEl[0].offsetWidth),
                        (u = x.$imageEl[0].offsetHeight),
                        (c = o * b.scale),
                        (d = u * b.scale),
                        (f = -(p = Math.min(v / 2 - c / 2, 0))),
                        (m = -(h = Math.min(g / 2 - d / 2, 0))),
                        (s = n * b.scale) < p && (s = p),
                        s > f && (s = f),
                        (a = r * b.scale) < h && (a = h),
                        a > m && (a = m))
                      : ((s = 0), (a = 0)),
                  x.$imageWrapEl.transition(300).transform("translate3d(" + s + "px, " + a + "px,0)"),
                  x.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
          },
          out: function () {
              var e = this.zoom,
                  t = this.params.zoom,
                  i = e.gesture;
              i.$slideEl ||
                  (this.params.virtual && this.params.virtual.enabled && this.virtual ? (i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass)) : (i.$slideEl = this.slides.eq(this.activeIndex)),
                  (i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                  (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
                  i.$imageEl &&
                      0 !== i.$imageEl.length &&
                      ((e.scale = 1),
                      (e.currentScale = 1),
                      i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                      i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                      i.$slideEl.removeClass("" + t.zoomedSlideClass),
                      (i.$slideEl = void 0));
          },
          toggleGestures: function (e) {
              var t = this.zoom,
                  i = t.slideSelector,
                  n = t.passiveListener;
              this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, n), this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, n), this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, n);
          },
          enableGestures: function () {
              this.zoom.gesturesEnabled || ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures("on"));
          },
          disableGestures: function () {
              this.zoom.gesturesEnabled && ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures("off"));
          },
          enable: function () {
              var e = this.support,
                  t = this.zoom;
              if (!t.enabled) {
                  t.enabled = !0;
                  var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 },
                      n = !e.passiveListener || { passive: !1, capture: !0 },
                      r = "." + this.params.slideClass;
                  (this.zoom.passiveListener = i),
                      (this.zoom.slideSelector = r),
                      e.gestures
                          ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i))
                          : "touchstart" === this.touchEvents.start &&
                            (this.$wrapperEl.on(this.touchEvents.start, r, t.onGestureStart, i),
                            this.$wrapperEl.on(this.touchEvents.move, r, t.onGestureChange, n),
                            this.$wrapperEl.on(this.touchEvents.end, r, t.onGestureEnd, i),
                            this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, r, t.onGestureEnd, i)),
                      this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, n);
              }
          },
          disable: function () {
              var e = this.zoom;
              if (e.enabled) {
                  var t = this.support;
                  this.zoom.enabled = !1;
                  var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 },
                      n = !t.passiveListener || { passive: !1, capture: !0 },
                      r = "." + this.params.slideClass;
                  t.gestures
                      ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i))
                      : "touchstart" === this.touchEvents.start &&
                        (this.$wrapperEl.off(this.touchEvents.start, r, e.onGestureStart, i),
                        this.$wrapperEl.off(this.touchEvents.move, r, e.onGestureChange, n),
                        this.$wrapperEl.off(this.touchEvents.end, r, e.onGestureEnd, i),
                        this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, r, e.onGestureEnd, i)),
                      this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, n);
              }
          },
      };
      function me() {
          return (me =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var ve = {
          loadInSlide: function (e, t) {
              void 0 === t && (t = !0);
              var i = this,
                  n = i.params.lazy;
              if (void 0 !== e && 0 !== i.slides.length) {
                  var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                      s = r.find("." + n.elementClass + ":not(." + n.loadedClass + "):not(." + n.loadingClass + ")");
                  !r.hasClass(n.elementClass) || r.hasClass(n.loadedClass) || r.hasClass(n.loadingClass) || s.push(r[0]),
                      0 !== s.length &&
                          s.each(function (e) {
                              var s = C(e);
                              s.addClass(n.loadingClass);
                              var a = s.attr("data-background"),
                                  o = s.attr("data-src"),
                                  l = s.attr("data-srcset"),
                                  u = s.attr("data-sizes"),
                                  c = s.parent("picture");
                              i.loadImage(s[0], o || a, l, u, !1, function () {
                                  if (null != i && i && (!i || i.params) && !i.destroyed) {
                                      if (
                                          (a
                                              ? (s.css("background-image", 'url("' + a + '")'), s.removeAttr("data-background"))
                                              : (l && (s.attr("srcset", l), s.removeAttr("data-srcset")),
                                                u && (s.attr("sizes", u), s.removeAttr("data-sizes")),
                                                c.length &&
                                                    c.children("source").each(function (e) {
                                                        var t = C(e);
                                                        t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                                                    }),
                                                o && (s.attr("src", o), s.removeAttr("data-src"))),
                                          s.addClass(n.loadedClass).removeClass(n.loadingClass),
                                          r.find("." + n.preloaderClass).remove(),
                                          i.params.loop && t)
                                      ) {
                                          var e = r.attr("data-swiper-slide-index");
                                          if (r.hasClass(i.params.slideDuplicateClass)) {
                                              var d = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                              i.lazy.loadInSlide(d.index(), !1);
                                          } else {
                                              var p = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                              i.lazy.loadInSlide(p.index(), !1);
                                          }
                                      }
                                      i.emit("lazyImageReady", r[0], s[0]), i.params.autoHeight && i.updateAutoHeight();
                                  }
                              }),
                                  i.emit("lazyImageLoad", r[0], s[0]);
                          });
              }
          },
          load: function () {
              var e = this,
                  t = e.$wrapperEl,
                  i = e.params,
                  n = e.slides,
                  r = e.activeIndex,
                  s = e.virtual && i.virtual.enabled,
                  a = i.lazy,
                  o = i.slidesPerView;
              function l(e) {
                  if (s) {
                      if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                  } else if (n[e]) return !0;
                  return !1;
              }
              function u(e) {
                  return s ? C(e).attr("data-swiper-slide-index") : C(e).index();
              }
              if (("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility))
                  t.children("." + i.slideVisibleClass).each(function (t) {
                      var i = s ? C(t).attr("data-swiper-slide-index") : C(t).index();
                      e.lazy.loadInSlide(i);
                  });
              else if (o > 1) for (var c = r; c < r + o; c += 1) l(c) && e.lazy.loadInSlide(c);
              else e.lazy.loadInSlide(r);
              if (a.loadPrevNext)
                  if (o > 1 || (a.loadPrevNextAmount && a.loadPrevNextAmount > 1)) {
                      for (var d = a.loadPrevNextAmount, p = o, h = Math.min(r + p + Math.max(d, p), n.length), f = Math.max(r - Math.max(p, d), 0), m = r + o; m < h; m += 1) l(m) && e.lazy.loadInSlide(m);
                      for (var v = f; v < r; v += 1) l(v) && e.lazy.loadInSlide(v);
                  } else {
                      var g = t.children("." + i.slideNextClass);
                      g.length > 0 && e.lazy.loadInSlide(u(g));
                      var y = t.children("." + i.slidePrevClass);
                      y.length > 0 && e.lazy.loadInSlide(u(y));
                  }
          },
          checkInViewOnLoad: function () {
              var e = l();
              if (this && !this.destroyed) {
                  var t = this.params.lazy.scrollingElement ? C(this.params.lazy.scrollingElement) : C(e),
                      i = t[0] === e,
                      n = i ? e.innerWidth : t[0].offsetWidth,
                      r = i ? e.innerHeight : t[0].offsetHeight,
                      s = this.$el.offset(),
                      a = !1;
                  this.rtlTranslate && (s.left -= this.$el[0].scrollLeft);
                  for (
                      var o = [
                              [s.left, s.top],
                              [s.left + this.width, s.top],
                              [s.left, s.top + this.height],
                              [s.left + this.width, s.top + this.height],
                          ],
                          u = 0;
                      u < o.length;
                      u += 1
                  ) {
                      var c = o[u];
                      if (c[0] >= 0 && c[0] <= n && c[1] >= 0 && c[1] <= r) {
                          if (0 === c[0] && 0 === c[1]) continue;
                          a = !0;
                      }
                  }
                  a ? (this.lazy.load(), t.off("scroll", this.lazy.checkInViewOnLoad)) : this.lazy.scrollHandlerAttached || ((this.lazy.scrollHandlerAttached = !0), t.on("scroll", this.lazy.checkInViewOnLoad));
              }
          },
      };
      function ge() {
          return (ge =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var ye = {
          LinearSpline: function (e, t) {
              var i,
                  n,
                  r,
                  s,
                  a,
                  o = function (e, t) {
                      for (n = -1, i = e.length; i - n > 1; ) e[(r = (i + n) >> 1)] <= t ? (n = r) : (i = r);
                      return i;
                  };
              return (
                  (this.x = e),
                  (this.y = t),
                  (this.lastIndex = e.length - 1),
                  (this.interpolate = function (e) {
                      return e ? ((a = o(this.x, e)), (s = a - 1), ((e - this.x[s]) * (this.y[a] - this.y[s])) / (this.x[a] - this.x[s]) + this.y[s]) : 0;
                  }),
                  this
              );
          },
          getInterpolateFunction: function (e) {
              this.controller.spline || (this.controller.spline = this.params.loop ? new ye.LinearSpline(this.slidesGrid, e.slidesGrid) : new ye.LinearSpline(this.snapGrid, e.snapGrid));
          },
          setTranslate: function (e, t) {
              var i,
                  n,
                  r = this,
                  s = r.controller.control,
                  a = r.constructor;
              function o(e) {
                  var t = r.rtlTranslate ? -r.translate : r.translate;
                  "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), (n = -r.controller.spline.interpolate(-t))),
                      (n && "container" !== r.params.controller.by) || ((i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate())), (n = (t - r.minTranslate()) * i + e.minTranslate())),
                      r.params.controller.inverse && (n = e.maxTranslate() - n),
                      e.updateProgress(n),
                      e.setTranslate(n, r),
                      e.updateActiveIndex(),
                      e.updateSlidesClasses();
              }
              if (Array.isArray(s)) for (var l = 0; l < s.length; l += 1) s[l] !== t && s[l] instanceof a && o(s[l]);
              else s instanceof a && t !== s && o(s);
          },
          setTransition: function (e, t) {
              var i,
                  n = this,
                  r = n.constructor,
                  s = n.controller.control;
              function a(t) {
                  t.setTransition(e, n),
                      0 !== e &&
                          (t.transitionStart(),
                          t.params.autoHeight &&
                              T(function () {
                                  t.updateAutoHeight();
                              }),
                          t.$wrapperEl.transitionEnd(function () {
                              s && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd());
                          }));
              }
              if (Array.isArray(s)) for (i = 0; i < s.length; i += 1) s[i] !== t && s[i] instanceof r && a(s[i]);
              else s instanceof r && t !== s && a(s);
          },
      };
      function be() {
          return (be =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var we = {
          getRandomNumber: function (e) {
              void 0 === e && (e = 16);
              return "x".repeat(e).replace(/x/g, function () {
                  return Math.round(16 * Math.random()).toString(16);
              });
          },
          makeElFocusable: function (e) {
              return e.attr("tabIndex", "0"), e;
          },
          makeElNotFocusable: function (e) {
              return e.attr("tabIndex", "-1"), e;
          },
          addElRole: function (e, t) {
              return e.attr("role", t), e;
          },
          addElRoleDescription: function (e, t) {
              return e.attr("aria-role-description", t), e;
          },
          addElControls: function (e, t) {
              return e.attr("aria-controls", t), e;
          },
          addElLabel: function (e, t) {
              return e.attr("aria-label", t), e;
          },
          addElId: function (e, t) {
              return e.attr("id", t), e;
          },
          addElLive: function (e, t) {
              return e.attr("aria-live", t), e;
          },
          disableEl: function (e) {
              return e.attr("aria-disabled", !0), e;
          },
          enableEl: function (e) {
              return e.attr("aria-disabled", !1), e;
          },
          onEnterOrSpaceKey: function (e) {
              if (13 === e.keyCode || 32 === e.keyCode) {
                  var t = this.params.a11y,
                      i = C(e.target);
                  this.navigation &&
                      this.navigation.$nextEl &&
                      i.is(this.navigation.$nextEl) &&
                      ((this.isEnd && !this.params.loop) || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
                      this.navigation &&
                          this.navigation.$prevEl &&
                          i.is(this.navigation.$prevEl) &&
                          ((this.isBeginning && !this.params.loop) || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
                      this.pagination && i.is("." + this.params.pagination.bulletClass.replace(/ /g, ".")) && i[0].click();
              }
          },
          notify: function (e) {
              var t = this.a11y.liveRegion;
              0 !== t.length && (t.html(""), t.html(e));
          },
          updateNavigation: function () {
              if (!this.params.loop && this.navigation) {
                  var e = this.navigation,
                      t = e.$nextEl,
                      i = e.$prevEl;
                  i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))),
                      t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
              }
          },
          updatePagination: function () {
              var e = this,
                  t = e.params.a11y;
              e.pagination &&
                  e.params.pagination.clickable &&
                  e.pagination.bullets &&
                  e.pagination.bullets.length &&
                  e.pagination.bullets.each(function (i) {
                      var n = C(i);
                      e.a11y.makeElFocusable(n), e.params.pagination.renderBullet || (e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, t.paginationBulletMessage.replace(/\{\{index\}\}/, n.index() + 1)));
                  });
          },
          init: function () {
              var e = this,
                  t = e.params.a11y;
              e.$el.append(e.a11y.liveRegion);
              var i = e.$el;
              t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(i, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(i, t.containerMessage);
              var n,
                  r,
                  s,
                  a = e.$wrapperEl,
                  o = a.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
              e.a11y.addElId(a, o),
                  (n = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite"),
                  e.a11y.addElLive(a, n),
                  t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(C(e.slides), t.itemRoleDescriptionMessage),
                  e.a11y.addElRole(C(e.slides), "group"),
                  e.slides.each(function (t) {
                      var i = C(t);
                      e.a11y.addElLabel(i, i.index() + 1 + " / " + e.slides.length);
                  }),
                  e.navigation && e.navigation.$nextEl && (r = e.navigation.$nextEl),
                  e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
                  r && r.length && (e.a11y.makeElFocusable(r), "BUTTON" !== r[0].tagName && (e.a11y.addElRole(r, "button"), r.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(r, t.nextSlideMessage), e.a11y.addElControls(r, o)),
                  s && s.length && (e.a11y.makeElFocusable(s), "BUTTON" !== s[0].tagName && (e.a11y.addElRole(s, "button"), s.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(s, t.prevSlideMessage), e.a11y.addElControls(s, o)),
                  e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass.replace(/ /g, "."), e.a11y.onEnterOrSpaceKey);
          },
          destroy: function () {
              var e, t;
              this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
                  this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
                  this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
                  e && e.off("keydown", this.a11y.onEnterOrSpaceKey),
                  t && t.off("keydown", this.a11y.onEnterOrSpaceKey),
                  this.pagination &&
                      this.params.pagination.clickable &&
                      this.pagination.bullets &&
                      this.pagination.bullets.length &&
                      this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass.replace(/ /g, "."), this.a11y.onEnterOrSpaceKey);
          },
      };
      function xe() {
          return (xe =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var Se = {
          init: function () {
              var e = l();
              if (this.params.history) {
                  if (!e.history || !e.history.pushState) return (this.params.history.enabled = !1), void (this.params.hashNavigation.enabled = !0);
                  var t = this.history;
                  (t.initialized = !0),
                      (t.paths = Se.getPathValues(this.params.url)),
                      (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState));
              }
          },
          destroy: function () {
              var e = l();
              this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
          },
          setHistoryPopState: function () {
              (this.history.paths = Se.getPathValues(this.params.url)), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
          },
          getPathValues: function (e) {
              var t = l(),
                  i = (e ? new URL(e) : t.location).pathname
                      .slice(1)
                      .split("/")
                      .filter(function (e) {
                          return "" !== e;
                      }),
                  n = i.length;
              return { key: i[n - 2], value: i[n - 1] };
          },
          setHistory: function (e, t) {
              var i = l();
              if (this.history.initialized && this.params.history.enabled) {
                  var n;
                  n = this.params.url ? new URL(this.params.url) : i.location;
                  var r = this.slides.eq(t),
                      s = Se.slugify(r.attr("data-history"));
                  n.pathname.includes(e) || (s = e + "/" + s);
                  var a = i.history.state;
                  (a && a.value === s) || (this.params.history.replaceState ? i.history.replaceState({ value: s }, null, s) : i.history.pushState({ value: s }, null, s));
              }
          },
          slugify: function (e) {
              return e
                  .toString()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]+/g, "")
                  .replace(/--+/g, "-")
                  .replace(/^-+/, "")
                  .replace(/-+$/, "");
          },
          scrollToSlide: function (e, t, i) {
              if (t)
                  for (var n = 0, r = this.slides.length; n < r; n += 1) {
                      var s = this.slides.eq(n);
                      if (Se.slugify(s.attr("data-history")) === t && !s.hasClass(this.params.slideDuplicateClass)) {
                          var a = s.index();
                          this.slideTo(a, e, i);
                      }
                  }
              else this.slideTo(0, e, i);
          },
      };
      function Ee() {
          return (Ee =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var Ce = {
          onHashCange: function () {
              var e = a();
              this.emit("hashChange");
              var t = e.location.hash.replace("#", "");
              if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                  var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                  if (void 0 === i) return;
                  this.slideTo(i);
              }
          },
          setHash: function () {
              var e = l(),
                  t = a();
              if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                  if (this.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || !1), this.emit("hashSet");
                  else {
                      var i = this.slides.eq(this.activeIndex),
                          n = i.attr("data-hash") || i.attr("data-history");
                      (t.location.hash = n || ""), this.emit("hashSet");
                  }
          },
          init: function () {
              var e = a(),
                  t = l();
              if (!(!this.params.hashNavigation.enabled || (this.params.history && this.params.history.enabled))) {
                  this.hashNavigation.initialized = !0;
                  var i = e.location.hash.replace("#", "");
                  if (i)
                      for (var n = 0, r = this.slides.length; n < r; n += 1) {
                          var s = this.slides.eq(n);
                          if ((s.attr("data-hash") || s.attr("data-history")) === i && !s.hasClass(this.params.slideDuplicateClass)) {
                              var o = s.index();
                              this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
                          }
                      }
                  this.params.hashNavigation.watchState && C(t).on("hashchange", this.hashNavigation.onHashCange);
              }
          },
          destroy: function () {
              var e = l();
              this.params.hashNavigation.watchState && C(e).off("hashchange", this.hashNavigation.onHashCange);
          },
      };
      function Te() {
          return (Te =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var ke = {
          run: function () {
              var e = this,
                  t = e.slides.eq(e.activeIndex),
                  i = e.params.autoplay.delay;
              t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                  clearTimeout(e.autoplay.timeout),
                  (e.autoplay.timeout = T(function () {
                      var t;
                      e.params.autoplay.reverseDirection
                          ? e.params.loop
                              ? (e.loopFix(), (t = e.slidePrev(e.params.speed, !0, !0)), e.emit("autoplay"))
                              : e.isBeginning
                              ? e.params.autoplay.stopOnLastSlide
                                  ? e.autoplay.stop()
                                  : ((t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)), e.emit("autoplay"))
                              : ((t = e.slidePrev(e.params.speed, !0, !0)), e.emit("autoplay"))
                          : e.params.loop
                          ? (e.loopFix(), (t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay"))
                          : e.isEnd
                          ? e.params.autoplay.stopOnLastSlide
                              ? e.autoplay.stop()
                              : ((t = e.slideTo(0, e.params.speed, !0, !0)), e.emit("autoplay"))
                          : ((t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay")),
                          ((e.params.cssMode && e.autoplay.running) || !1 === t) && e.autoplay.run();
                  }, i));
          },
          start: function () {
              return void 0 === this.autoplay.timeout && !this.autoplay.running && ((this.autoplay.running = !0), this.emit("autoplayStart"), this.autoplay.run(), !0);
          },
          stop: function () {
              return (
                  !!this.autoplay.running &&
                  void 0 !== this.autoplay.timeout &&
                  (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), (this.autoplay.timeout = void 0)), (this.autoplay.running = !1), this.emit("autoplayStop"), !0)
              );
          },
          pause: function (e) {
              this.autoplay.running &&
                  (this.autoplay.paused ||
                      (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
                      (this.autoplay.paused = !0),
                      0 !== e && this.params.autoplay.waitForTransition
                          ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd))
                          : ((this.autoplay.paused = !1), this.autoplay.run())));
          },
          onVisibilityChange: function () {
              var e = a();
              "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), (this.autoplay.paused = !1));
          },
          onTransitionEnd: function (e) {
              this &&
                  !this.destroyed &&
                  this.$wrapperEl &&
                  e.target === this.$wrapperEl[0] &&
                  (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd),
                  this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd),
                  (this.autoplay.paused = !1),
                  this.autoplay.running ? this.autoplay.run() : this.autoplay.stop());
          },
      };
      function Me() {
          return (Me =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var Pe = {
          setTranslate: function () {
              for (var e = this.slides, t = 0; t < e.length; t += 1) {
                  var i = this.slides.eq(t),
                      n = -i[0].swiperSlideOffset;
                  this.params.virtualTranslate || (n -= this.translate);
                  var r = 0;
                  this.isHorizontal() || ((r = n), (n = 0));
                  var s = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                  i.css({ opacity: s }).transform("translate3d(" + n + "px, " + r + "px, 0px)");
              }
          },
          setTransition: function (e) {
              var t = this,
                  i = t.slides,
                  n = t.$wrapperEl;
              if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
                  var r = !1;
                  i.transitionEnd(function () {
                      if (!r && t && !t.destroyed) {
                          (r = !0), (t.animating = !1);
                          for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i]);
                      }
                  });
              }
          },
      };
      function Ae() {
          return (Ae =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var $e = {
          setTranslate: function () {
              var e,
                  t = this.$el,
                  i = this.$wrapperEl,
                  n = this.slides,
                  r = this.width,
                  s = this.height,
                  a = this.rtlTranslate,
                  o = this.size,
                  l = this.browser,
                  u = this.params.cubeEffect,
                  c = this.isHorizontal(),
                  d = this.virtual && this.params.virtual.enabled,
                  p = 0;
              u.shadow &&
                  (c
                      ? (0 === (e = i.find(".swiper-cube-shadow")).length && ((e = C('<div class="swiper-cube-shadow"></div>')), i.append(e)), e.css({ height: r + "px" }))
                      : 0 === (e = t.find(".swiper-cube-shadow")).length && ((e = C('<div class="swiper-cube-shadow"></div>')), t.append(e)));
              for (var h = 0; h < n.length; h += 1) {
                  var f = n.eq(h),
                      m = h;
                  d && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                  var v = 90 * m,
                      g = Math.floor(v / 360);
                  a && ((v = -v), (g = Math.floor(-v / 360)));
                  var y = Math.max(Math.min(f[0].progress, 1), -1),
                      b = 0,
                      w = 0,
                      x = 0;
                  m % 4 == 0 ? ((b = 4 * -g * o), (x = 0)) : (m - 1) % 4 == 0 ? ((b = 0), (x = 4 * -g * o)) : (m - 2) % 4 == 0 ? ((b = o + 4 * g * o), (x = o)) : (m - 3) % 4 == 0 && ((b = -o), (x = 3 * o + 4 * o * g)),
                      a && (b = -b),
                      c || ((w = b), (b = 0));
                  var S = "rotateX(" + (c ? 0 : -v) + "deg) rotateY(" + (c ? v : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + x + "px)";
                  if ((y <= 1 && y > -1 && ((p = 90 * m + 90 * y), a && (p = 90 * -m - 90 * y)), f.transform(S), u.slideShadows)) {
                      var E = c ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                          T = c ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                      0 === E.length && ((E = C('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>')), f.append(E)),
                          0 === T.length && ((T = C('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>')), f.append(T)),
                          E.length && (E[0].style.opacity = Math.max(-y, 0)),
                          T.length && (T[0].style.opacity = Math.max(y, 0));
                  }
              }
              if (
                  (i.css({ "-webkit-transform-origin": "50% 50% -" + o / 2 + "px", "-moz-transform-origin": "50% 50% -" + o / 2 + "px", "-ms-transform-origin": "50% 50% -" + o / 2 + "px", "transform-origin": "50% 50% -" + o / 2 + "px" }),
                  u.shadow)
              )
                  if (c) e.transform("translate3d(0px, " + (r / 2 + u.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
                  else {
                      var k = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
                          M = 1.5 - (Math.sin((2 * k * Math.PI) / 360) / 2 + Math.cos((2 * k * Math.PI) / 360) / 2),
                          P = u.shadowScale,
                          A = u.shadowScale / M,
                          $ = u.shadowOffset;
                      e.transform("scale3d(" + P + ", 1, " + A + ") translate3d(0px, " + (s / 2 + $) + "px, " + -s / 2 / A + "px) rotateX(-90deg)");
                  }
              var D = l.isSafari || l.isWebView ? -o / 2 : 0;
              i.transform("translate3d(0px,0," + D + "px) rotateX(" + (this.isHorizontal() ? 0 : p) + "deg) rotateY(" + (this.isHorizontal() ? -p : 0) + "deg)");
          },
          setTransition: function (e) {
              var t = this.$el;
              this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                  this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
          },
      };
      function De() {
          return (De =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var Oe = {
          setTranslate: function () {
              for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                  var n = e.eq(i),
                      r = n[0].progress;
                  this.params.flipEffect.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
                  var s = -180 * r,
                      a = 0,
                      o = -n[0].swiperSlideOffset,
                      l = 0;
                  if ((this.isHorizontal() ? t && (s = -s) : ((l = o), (o = 0), (a = -s), (s = 0)), (n[0].style.zIndex = -Math.abs(Math.round(r)) + e.length), this.params.flipEffect.slideShadows)) {
                      var u = this.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                          c = this.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                      0 === u.length && ((u = C('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>')), n.append(u)),
                          0 === c.length && ((c = C('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>')), n.append(c)),
                          u.length && (u[0].style.opacity = Math.max(-r, 0)),
                          c.length && (c[0].style.opacity = Math.max(r, 0));
                  }
                  n.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + a + "deg) rotateY(" + s + "deg)");
              }
          },
          setTransition: function (e) {
              var t = this,
                  i = t.slides,
                  n = t.activeIndex,
                  r = t.$wrapperEl;
              if ((i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e)) {
                  var s = !1;
                  i.eq(n).transitionEnd(function () {
                      if (!s && t && !t.destroyed) {
                          (s = !0), (t.animating = !1);
                          for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) r.trigger(e[i]);
                      }
                  });
              }
          },
      };
      function Le() {
          return (Le =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var Ne = {
          setTranslate: function () {
              for (
                  var e = this.width,
                      t = this.height,
                      i = this.slides,
                      n = this.slidesSizesGrid,
                      r = this.params.coverflowEffect,
                      s = this.isHorizontal(),
                      a = this.translate,
                      o = s ? e / 2 - a : t / 2 - a,
                      l = s ? r.rotate : -r.rotate,
                      u = r.depth,
                      c = 0,
                      d = i.length;
                  c < d;
                  c += 1
              ) {
                  var p = i.eq(c),
                      h = n[c],
                      f = ((o - p[0].swiperSlideOffset - h / 2) / h) * r.modifier,
                      m = s ? l * f : 0,
                      v = s ? 0 : l * f,
                      g = -u * Math.abs(f),
                      y = r.stretch;
                  "string" == typeof y && -1 !== y.indexOf("%") && (y = (parseFloat(r.stretch) / 100) * h);
                  var b = s ? 0 : y * f,
                      w = s ? y * f : 0,
                      x = 1 - (1 - r.scale) * Math.abs(f);
                  Math.abs(w) < 0.001 && (w = 0), Math.abs(b) < 0.001 && (b = 0), Math.abs(g) < 0.001 && (g = 0), Math.abs(m) < 0.001 && (m = 0), Math.abs(v) < 0.001 && (v = 0), Math.abs(x) < 0.001 && (x = 0);
                  var S = "translate3d(" + w + "px," + b + "px," + g + "px)  rotateX(" + v + "deg) rotateY(" + m + "deg) scale(" + x + ")";
                  if ((p.transform(S), (p[0].style.zIndex = 1 - Math.abs(Math.round(f))), r.slideShadows)) {
                      var E = s ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"),
                          T = s ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                      0 === E.length && ((E = C('<div class="swiper-slide-shadow-' + (s ? "left" : "top") + '"></div>')), p.append(E)),
                          0 === T.length && ((T = C('<div class="swiper-slide-shadow-' + (s ? "right" : "bottom") + '"></div>')), p.append(T)),
                          E.length && (E[0].style.opacity = f > 0 ? f : 0),
                          T.length && (T[0].style.opacity = -f > 0 ? -f : 0);
                  }
              }
          },
          setTransition: function (e) {
              this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
          },
      };
      function _e() {
          return (_e =
              Object.assign ||
              function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var i = arguments[t];
                      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                  }
                  return e;
              }).apply(this, arguments);
      }
      var ze = {
              init: function () {
                  var e = this.params.thumbs;
                  if (this.thumbs.initialized) return !1;
                  this.thumbs.initialized = !0;
                  var t = this.constructor;
                  return (
                      e.swiper instanceof t
                          ? ((this.thumbs.swiper = e.swiper), A(this.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), A(this.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
                          : P(e.swiper) && ((this.thumbs.swiper = new t(A({}, e.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 }))), (this.thumbs.swiperCreated = !0)),
                      this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
                      this.thumbs.swiper.on("tap", this.thumbs.onThumbClick),
                      !0
                  );
              },
              onThumbClick: function () {
                  var e = this.thumbs.swiper;
                  if (e) {
                      var t = e.clickedIndex,
                          i = e.clickedSlide;
                      if (!((i && C(i).hasClass(this.params.thumbs.slideThumbActiveClass)) || null == t)) {
                          var n;
                          if (((n = e.params.loop ? parseInt(C(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t), this.params.loop)) {
                              var r = this.activeIndex;
                              this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft), (r = this.activeIndex));
                              var s = this.slides
                                      .eq(r)
                                      .prevAll('[data-swiper-slide-index="' + n + '"]')
                                      .eq(0)
                                      .index(),
                                  a = this.slides
                                      .eq(r)
                                      .nextAll('[data-swiper-slide-index="' + n + '"]')
                                      .eq(0)
                                      .index();
                              n = void 0 === s ? a : void 0 === a ? s : a - r < r - s ? a : s;
                          }
                          this.slideTo(n);
                      }
                  }
              },
              update: function (e) {
                  var t = this.thumbs.swiper;
                  if (t) {
                      var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
                          n = this.params.thumbs.autoScrollOffset,
                          r = n && !t.params.loop;
                      if (this.realIndex !== t.realIndex || r) {
                          var s,
                              a,
                              o = t.activeIndex;
                          if (t.params.loop) {
                              t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), (t._clientLeft = t.$wrapperEl[0].clientLeft), (o = t.activeIndex));
                              var l = t.slides
                                      .eq(o)
                                      .prevAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                                      .eq(0)
                                      .index(),
                                  u = t.slides
                                      .eq(o)
                                      .nextAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                                      .eq(0)
                                      .index();
                              (s = void 0 === l ? u : void 0 === u ? l : u - o == o - l ? o : u - o < o - l ? u : l), (a = this.activeIndex > this.previousIndex ? "next" : "prev");
                          } else a = (s = this.realIndex) > this.previousIndex ? "next" : "prev";
                          r && (s += "next" === a ? n : -1 * n),
                              t.visibleSlidesIndexes &&
                                  t.visibleSlidesIndexes.indexOf(s) < 0 &&
                                  (t.params.centeredSlides ? (s = s > o ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1) : s > o && (s = s - i + 1), t.slideTo(s, e ? 0 : void 0));
                      }
                      var c = 1,
                          d = this.params.thumbs.slideThumbActiveClass;
                      if (
                          (this.params.slidesPerView > 1 && !this.params.centeredSlides && (c = this.params.slidesPerView),
                          this.params.thumbs.multipleActiveThumbs || (c = 1),
                          (c = Math.floor(c)),
                          t.slides.removeClass(d),
                          t.params.loop || (t.params.virtual && t.params.virtual.enabled))
                      )
                          for (var p = 0; p < c; p += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + p) + '"]').addClass(d);
                      else for (var h = 0; h < c; h += 1) t.slides.eq(this.realIndex + h).addClass(d);
                  }
              },
          },
          je = [
              ee,
              ne,
              {
                  name: "mousewheel",
                  params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } },
                  create: function () {
                      $(this, {
                          mousewheel: {
                              enabled: !1,
                              lastScrollTime: k(),
                              lastEventBeforeSnap: void 0,
                              recentWheelEvents: [],
                              enable: re.enable,
                              disable: re.disable,
                              handle: re.handle,
                              handleMouseEnter: re.handleMouseEnter,
                              handleMouseLeave: re.handleMouseLeave,
                              animateSlider: re.animateSlider,
                              releaseScroll: re.releaseScroll,
                          },
                      });
                  },
                  on: {
                      init: function (e) {
                          !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
                      },
                      destroy: function (e) {
                          e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
                      },
                  },
              },
              {
                  name: "navigation",
                  params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                  create: function () {
                      $(this, { navigation: se({}, ae) });
                  },
                  on: {
                      init: function (e) {
                          e.navigation.init(), e.navigation.update();
                      },
                      toEdge: function (e) {
                          e.navigation.update();
                      },
                      fromEdge: function (e) {
                          e.navigation.update();
                      },
                      destroy: function (e) {
                          e.navigation.destroy();
                      },
                      click: function (e, t) {
                          var i = e.navigation,
                              n = i.$nextEl,
                              r = i.$prevEl,
                              s = t.target;
                          if (e.params.navigation.hideOnClick && !C(s).is(r) && !C(s).is(n)) {
                              if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === s || e.pagination.el.contains(s))) return;
                              var a;
                              n ? (a = n.hasClass(e.params.navigation.hiddenClass)) : r && (a = r.hasClass(e.params.navigation.hiddenClass)),
                                  !0 === a ? e.emit("navigationShow") : e.emit("navigationHide"),
                                  n && n.toggleClass(e.params.navigation.hiddenClass),
                                  r && r.toggleClass(e.params.navigation.hiddenClass);
                          }
                      },
                  },
              },
              {
                  name: "pagination",
                  params: {
                      pagination: {
                          el: null,
                          bulletElement: "span",
                          clickable: !1,
                          hideOnClick: !1,
                          renderBullet: null,
                          renderProgressbar: null,
                          renderFraction: null,
                          renderCustom: null,
                          progressbarOpposite: !1,
                          type: "bullets",
                          dynamicBullets: !1,
                          dynamicMainBullets: 1,
                          formatFractionCurrent: function (e) {
                              return e;
                          },
                          formatFractionTotal: function (e) {
                              return e;
                          },
                          bulletClass: "swiper-pagination-bullet",
                          bulletActiveClass: "swiper-pagination-bullet-active",
                          modifierClass: "swiper-pagination-",
                          currentClass: "swiper-pagination-current",
                          totalClass: "swiper-pagination-total",
                          hiddenClass: "swiper-pagination-hidden",
                          progressbarFillClass: "swiper-pagination-progressbar-fill",
                          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                          clickableClass: "swiper-pagination-clickable",
                          lockClass: "swiper-pagination-lock",
                      },
                  },
                  create: function () {
                      $(this, { pagination: oe({ dynamicBulletIndex: 0 }, le) });
                  },
                  on: {
                      init: function (e) {
                          e.pagination.init(), e.pagination.render(), e.pagination.update();
                      },
                      activeIndexChange: function (e) {
                          (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
                      },
                      snapIndexChange: function (e) {
                          e.params.loop || e.pagination.update();
                      },
                      slidesLengthChange: function (e) {
                          e.params.loop && (e.pagination.render(), e.pagination.update());
                      },
                      snapGridLengthChange: function (e) {
                          e.params.loop || (e.pagination.render(), e.pagination.update());
                      },
                      destroy: function (e) {
                          e.pagination.destroy();
                      },
                      click: function (e, t) {
                          var i = t.target;
                          if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !C(i).hasClass(e.params.pagination.bulletClass)) {
                              if (e.navigation && ((e.navigation.nextEl && i === e.navigation.nextEl) || (e.navigation.prevEl && i === e.navigation.prevEl))) return;
                              !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
                          }
                      },
                  },
              },
              {
                  name: "scrollbar",
                  params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                  create: function () {
                      $(this, { scrollbar: ue({ isTouched: !1, timeout: null, dragTimeout: null }, ce) });
                  },
                  on: {
                      init: function (e) {
                          e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
                      },
                      update: function (e) {
                          e.scrollbar.updateSize();
                      },
                      resize: function (e) {
                          e.scrollbar.updateSize();
                      },
                      observerUpdate: function (e) {
                          e.scrollbar.updateSize();
                      },
                      setTranslate: function (e) {
                          e.scrollbar.setTranslate();
                      },
                      setTransition: function (e, t) {
                          e.scrollbar.setTransition(t);
                      },
                      destroy: function (e) {
                          e.scrollbar.destroy();
                      },
                  },
              },
              {
                  name: "parallax",
                  params: { parallax: { enabled: !1 } },
                  create: function () {
                      $(this, { parallax: de({}, pe) });
                  },
                  on: {
                      beforeInit: function (e) {
                          e.params.parallax.enabled && ((e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
                      },
                      init: function (e) {
                          e.params.parallax.enabled && e.parallax.setTranslate();
                      },
                      setTranslate: function (e) {
                          e.params.parallax.enabled && e.parallax.setTranslate();
                      },
                      setTransition: function (e, t) {
                          e.params.parallax.enabled && e.parallax.setTransition(t);
                      },
                  },
              },
              {
                  name: "zoom",
                  params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                  create: function () {
                      var e = this;
                      $(e, {
                          zoom: he(
                              {
                                  enabled: !1,
                                  scale: 1,
                                  currentScale: 1,
                                  isScaling: !1,
                                  gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                                  image: {
                                      isTouched: void 0,
                                      isMoved: void 0,
                                      currentX: void 0,
                                      currentY: void 0,
                                      minX: void 0,
                                      minY: void 0,
                                      maxX: void 0,
                                      maxY: void 0,
                                      width: void 0,
                                      height: void 0,
                                      startX: void 0,
                                      startY: void 0,
                                      touchesStart: {},
                                      touchesCurrent: {},
                                  },
                                  velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                              },
                              fe
                          ),
                      });
                      var t = 1;
                      Object.defineProperty(e.zoom, "scale", {
                          get: function () {
                              return t;
                          },
                          set: function (i) {
                              if (t !== i) {
                                  var n = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                      r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                                  e.emit("zoomChange", i, n, r);
                              }
                              t = i;
                          },
                      });
                  },
                  on: {
                      init: function (e) {
                          e.params.zoom.enabled && e.zoom.enable();
                      },
                      destroy: function (e) {
                          e.zoom.disable();
                      },
                      touchStart: function (e, t) {
                          e.zoom.enabled && e.zoom.onTouchStart(t);
                      },
                      touchEnd: function (e, t) {
                          e.zoom.enabled && e.zoom.onTouchEnd(t);
                      },
                      doubleTap: function (e, t) {
                          !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
                      },
                      transitionEnd: function (e) {
                          e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
                      },
                      slideChange: function (e) {
                          e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
                      },
                  },
              },
              {
                  name: "lazy",
                  params: {
                      lazy: {
                          checkInView: !1,
                          enabled: !1,
                          loadPrevNext: !1,
                          loadPrevNextAmount: 1,
                          loadOnTransitionStart: !1,
                          scrollingElement: "",
                          elementClass: "swiper-lazy",
                          loadingClass: "swiper-lazy-loading",
                          loadedClass: "swiper-lazy-loaded",
                          preloaderClass: "swiper-lazy-preloader",
                      },
                  },
                  create: function () {
                      $(this, { lazy: me({ initialImageLoaded: !1 }, ve) });
                  },
                  on: {
                      beforeInit: function (e) {
                          e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
                      },
                      init: function (e) {
                          e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load());
                      },
                      scroll: function (e) {
                          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
                      },
                      "scrollbarDragMove resize _freeModeNoMomentumRelease": function (e) {
                          e.params.lazy.enabled && e.lazy.load();
                      },
                      transitionStart: function (e) {
                          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) && e.lazy.load();
                      },
                      transitionEnd: function (e) {
                          e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
                      },
                      slideChange: function (e) {
                          e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
                      },
                  },
              },
              {
                  name: "controller",
                  params: { controller: { control: void 0, inverse: !1, by: "slide" } },
                  create: function () {
                      $(this, { controller: ge({ control: this.params.controller.control }, ye) });
                  },
                  on: {
                      update: function (e) {
                          e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                      },
                      resize: function (e) {
                          e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                      },
                      observerUpdate: function (e) {
                          e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                      },
                      setTranslate: function (e, t, i) {
                          e.controller.control && e.controller.setTranslate(t, i);
                      },
                      setTransition: function (e, t, i) {
                          e.controller.control && e.controller.setTransition(t, i);
                      },
                  },
              },
              {
                  name: "a11y",
                  params: {
                      a11y: {
                          enabled: !0,
                          notificationClass: "swiper-notification",
                          prevSlideMessage: "Previous slide",
                          nextSlideMessage: "Next slide",
                          firstSlideMessage: "This is the first slide",
                          lastSlideMessage: "This is the last slide",
                          paginationBulletMessage: "Go to slide {{index}}",
                          containerMessage: null,
                          containerRoleDescriptionMessage: null,
                          itemRoleDescriptionMessage: null,
                      },
                  },
                  create: function () {
                      $(this, { a11y: be({}, we, { liveRegion: C('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') }) });
                  },
                  on: {
                      afterInit: function (e) {
                          e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
                      },
                      toEdge: function (e) {
                          e.params.a11y.enabled && e.a11y.updateNavigation();
                      },
                      fromEdge: function (e) {
                          e.params.a11y.enabled && e.a11y.updateNavigation();
                      },
                      paginationUpdate: function (e) {
                          e.params.a11y.enabled && e.a11y.updatePagination();
                      },
                      destroy: function (e) {
                          e.params.a11y.enabled && e.a11y.destroy();
                      },
                  },
              },
              {
                  name: "history",
                  params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
                  create: function () {
                      $(this, { history: xe({}, Se) });
                  },
                  on: {
                      init: function (e) {
                          e.params.history.enabled && e.history.init();
                      },
                      destroy: function (e) {
                          e.params.history.enabled && e.history.destroy();
                      },
                      transitionEnd: function (e) {
                          e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
                      },
                      slideChange: function (e) {
                          e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
                      },
                  },
              },
              {
                  name: "hash-navigation",
                  params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
                  create: function () {
                      $(this, { hashNavigation: Ee({ initialized: !1 }, Ce) });
                  },
                  on: {
                      init: function (e) {
                          e.params.hashNavigation.enabled && e.hashNavigation.init();
                      },
                      destroy: function (e) {
                          e.params.hashNavigation.enabled && e.hashNavigation.destroy();
                      },
                      transitionEnd: function (e) {
                          e.hashNavigation.initialized && e.hashNavigation.setHash();
                      },
                      slideChange: function (e) {
                          e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
                      },
                  },
              },
              {
                  name: "autoplay",
                  params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                  create: function () {
                      $(this, { autoplay: Te({}, ke, { running: !1, paused: !1 }) });
                  },
                  on: {
                      init: function (e) {
                          e.params.autoplay.enabled && (e.autoplay.start(), a().addEventListener("visibilitychange", e.autoplay.onVisibilityChange));
                      },
                      beforeTransitionStart: function (e, t, i) {
                          e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
                      },
                      sliderFirstMove: function (e) {
                          e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
                      },
                      touchEnd: function (e) {
                          e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
                      },
                      destroy: function (e) {
                          e.autoplay.running && e.autoplay.stop(), a().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
                      },
                  },
              },
              {
                  name: "effect-fade",
                  params: { fadeEffect: { crossFade: !1 } },
                  create: function () {
                      $(this, { fadeEffect: Me({}, Pe) });
                  },
                  on: {
                      beforeInit: function (e) {
                          if ("fade" === e.params.effect) {
                              e.classNames.push(e.params.containerModifierClass + "fade");
                              var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                              A(e.params, t), A(e.originalParams, t);
                          }
                      },
                      setTranslate: function (e) {
                          "fade" === e.params.effect && e.fadeEffect.setTranslate();
                      },
                      setTransition: function (e, t) {
                          "fade" === e.params.effect && e.fadeEffect.setTransition(t);
                      },
                  },
              },
              {
                  name: "effect-cube",
                  params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
                  create: function () {
                      $(this, { cubeEffect: Ae({}, $e) });
                  },
                  on: {
                      beforeInit: function (e) {
                          if ("cube" === e.params.effect) {
                              e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                              var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                              A(e.params, t), A(e.originalParams, t);
                          }
                      },
                      setTranslate: function (e) {
                          "cube" === e.params.effect && e.cubeEffect.setTranslate();
                      },
                      setTransition: function (e, t) {
                          "cube" === e.params.effect && e.cubeEffect.setTransition(t);
                      },
                  },
              },
              {
                  name: "effect-flip",
                  params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                  create: function () {
                      $(this, { flipEffect: De({}, Oe) });
                  },
                  on: {
                      beforeInit: function (e) {
                          if ("flip" === e.params.effect) {
                              e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                              var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                              A(e.params, t), A(e.originalParams, t);
                          }
                      },
                      setTranslate: function (e) {
                          "flip" === e.params.effect && e.flipEffect.setTranslate();
                      },
                      setTransition: function (e, t) {
                          "flip" === e.params.effect && e.flipEffect.setTransition(t);
                      },
                  },
              },
              {
                  name: "effect-coverflow",
                  params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0 } },
                  create: function () {
                      $(this, { coverflowEffect: Le({}, Ne) });
                  },
                  on: {
                      beforeInit: function (e) {
                          "coverflow" === e.params.effect &&
                              (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), (e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
                      },
                      setTranslate: function (e) {
                          "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
                      },
                      setTransition: function (e, t) {
                          "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
                      },
                  },
              },
              {
                  name: "thumbs",
                  params: { thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                  create: function () {
                      $(this, { thumbs: _e({ swiper: null, initialized: !1 }, ze) });
                  },
                  on: {
                      beforeInit: function (e) {
                          var t = e.params.thumbs;
                          t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
                      },
                      slideChange: function (e) {
                          e.thumbs.swiper && e.thumbs.update();
                      },
                      update: function (e) {
                          e.thumbs.swiper && e.thumbs.update();
                      },
                      resize: function (e) {
                          e.thumbs.swiper && e.thumbs.update();
                      },
                      observerUpdate: function (e) {
                          e.thumbs.swiper && e.thumbs.update();
                      },
                      setTransition: function (e, t) {
                          var i = e.thumbs.swiper;
                          i && i.setTransition(t);
                      },
                      beforeDestroy: function (e) {
                          var t = e.thumbs.swiper;
                          t && e.thumbs.swiperCreated && t && t.destroy();
                      },
                  },
              },
          ];
      Z.use(je);
  },
  function (e, t, i) {
      "use strict";
      i.r(t);
      i(7), i(4), i(5), i(6);
  },
  function (e, t, i) {
      !(function (e) {
          "use strict";
          function t(e) {
              return "object" == typeof e && "function" == typeof e.to;
          }
          function i(e) {
              e.parentElement.removeChild(e);
          }
          function n(e) {
              return null != e;
          }
          function r(e) {
              e.preventDefault();
          }
          function s(e) {
              return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function a(e, t, i) {
              0 < i &&
                  (c(e, t),
                  setTimeout(function () {
                      d(e, t);
                  }, i));
          }
          function o(e) {
              return Math.max(Math.min(e, 100), 0);
          }
          function l(e) {
              return Array.isArray(e) ? e : [e];
          }
          function u(e) {
              return 1 < (e = (e = String(e)).split(".")).length ? e[1].length : 0;
          }
          function c(e, t) {
              e.classList && !/\s/.test(t) ? e.classList.add(t) : (e.className += " " + t);
          }
          function d(e, t) {
              e.classList && !/\s/.test(t) ? e.classList.remove(t) : (e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
          }
          function p(e) {
              var t = void 0 !== window.pageXOffset,
                  i = "CSS1Compat" === (e.compatMode || "");
              return { x: t ? window.pageXOffset : (i ? e.documentElement : e.body).scrollLeft, y: t ? window.pageYOffset : (i ? e.documentElement : e.body).scrollTop };
          }
          function h(e, t) {
              return 100 / (t - e);
          }
          function f(e, t, i) {
              return (100 * t) / (e[i + 1] - e[i]);
          }
          function m(e, t) {
              for (var i = 1; e >= t[i]; ) i += 1;
              return i;
          }
          (e.PipsMode = void 0),
              ((Y = e.PipsMode || (e.PipsMode = {})).Range = "range"),
              (Y.Steps = "steps"),
              (Y.Positions = "positions"),
              (Y.Count = "count"),
              (Y.Values = "values"),
              (e.PipsType = void 0),
              ((Y = e.PipsType || (e.PipsType = {}))[(Y.None = -1)] = "None"),
              (Y[(Y.NoValue = 0)] = "NoValue"),
              (Y[(Y.LargeValue = 1)] = "LargeValue"),
              (Y[(Y.SmallValue = 2)] = "SmallValue");
          var v =
              ((g.prototype.getDistance = function (e) {
                  for (var t = [], i = 0; i < this.xNumSteps.length - 1; i++) t[i] = f(this.xVal, e, i);
                  return t;
              }),
              (g.prototype.getAbsoluteDistance = function (e, t, i) {
                  var n = 0;
                  if (e < this.xPct[this.xPct.length - 1]) for (; e > this.xPct[n + 1]; ) n++;
                  else e === this.xPct[this.xPct.length - 1] && (n = this.xPct.length - 2);
                  i || e !== this.xPct[n + 1] || n++;
                  for (var r, s = 1, a = (t = null === t ? [] : t)[n], o = 0, l = 0, u = 0, c = i ? (e - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n]) : (this.xPct[n + 1] - e) / (this.xPct[n + 1] - this.xPct[n]); 0 < a; )
                      (r = this.xPct[n + 1 + u] - this.xPct[n + u]),
                          100 < t[n + u] * s + 100 - 100 * c ? ((o = r * c), (s = (a - 100 * c) / t[n + u]), (c = 1)) : ((o = ((t[n + u] * r) / 100) * s), (s = 0)),
                          i ? ((l -= o), 1 <= this.xPct.length + u && u--) : ((l += o), 1 <= this.xPct.length - u && u++),
                          (a = t[n + u] * s);
                  return e + l;
              }),
              (g.prototype.toStepping = function (e) {
                  return (function (e, t, i) {
                      if (i >= e.slice(-1)[0]) return 100;
                      var n = e[(s = m(i, e)) - 1],
                          r = e[s],
                          s = ((e = t[s - 1]), t[s]);
                      return e + ((i = i), f((r = [n, r]), r[0] < 0 ? i + Math.abs(r[0]) : i - r[0], 0) / h(e, s));
                  })(this.xVal, this.xPct, e);
              }),
              (g.prototype.fromStepping = function (e) {
                  return (function (e, t, i) {
                      if (100 <= i) return e.slice(-1)[0];
                      var n,
                          r = e[(n = m(i, t)) - 1],
                          s = e[n];
                      return ((i - (e = t[n - 1])) * h(e, (n = t[n])) * ((s = [r, s])[1] - s[0])) / 100 + s[0];
                  })(this.xVal, this.xPct, e);
              }),
              (g.prototype.getStep = function (e) {
                  return (function (e, t, i, n) {
                      if (100 === n) return n;
                      var r = m(n, e),
                          s = e[r - 1],
                          a = e[r];
                      return i ? ((a - s) / 2 < n - s ? a : s) : t[r - 1] ? e[r - 1] + ((e = n - e[r - 1]), (r = t[r - 1]), Math.round(e / r) * r) : n;
                  })(this.xPct, this.xSteps, this.snap, e);
              }),
              (g.prototype.getDefaultStep = function (e, t, i) {
                  var n = m(e, this.xPct);
                  return (100 === e || (t && e === this.xPct[n - 1])) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / i;
              }),
              (g.prototype.getNearbySteps = function (e) {
                  return (
                      (e = m(e, this.xPct)),
                      {
                          stepBefore: { startValue: this.xVal[e - 2], step: this.xNumSteps[e - 2], highestStep: this.xHighestCompleteStep[e - 2] },
                          thisStep: { startValue: this.xVal[e - 1], step: this.xNumSteps[e - 1], highestStep: this.xHighestCompleteStep[e - 1] },
                          stepAfter: { startValue: this.xVal[e], step: this.xNumSteps[e], highestStep: this.xHighestCompleteStep[e] },
                      }
                  );
              }),
              (g.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(u);
                  return Math.max.apply(null, e);
              }),
              (g.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
              }),
              (g.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
              }),
              (g.prototype.handleEntryPoint = function (e, t) {
                  if (!s((e = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))) || !s(t[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(e), this.xVal.push(t[0]), (t = Number(t[1])), e ? this.xSteps.push(!isNaN(t) && t) : isNaN(t) || (this.xSteps[0] = t), this.xHighestCompleteStep.push(0);
              }),
              (g.prototype.handleStepPoint = function (e, t) {
                  t &&
                      (this.xVal[e] !== this.xVal[e + 1]
                          ? ((this.xSteps[e] = f([this.xVal[e], this.xVal[e + 1]], t, 0) / h(this.xPct[e], this.xPct[e + 1])),
                            (t = (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e]),
                            (t = Math.ceil(Number(t.toFixed(3)) - 1)),
                            (t = this.xVal[e] + this.xNumSteps[e] * t),
                            (this.xHighestCompleteStep[e] = t))
                          : (this.xSteps[e] = this.xHighestCompleteStep[e] = this.xVal[e]));
              }),
              g);
          function g(e, t, i) {
              var n;
              (this.xPct = []), (this.xVal = []), (this.xSteps = []), (this.xNumSteps = []), (this.xHighestCompleteStep = []), (this.xSteps = [i || !1]), (this.xNumSteps = [!1]), (this.snap = t);
              var r = [];
              for (
                  Object.keys(e).forEach(function (t) {
                      r.push([l(e[t]), t]);
                  }),
                      r.sort(function (e, t) {
                          return e[0][0] - t[0][0];
                      }),
                      n = 0;
                  n < r.length;
                  n++
              )
                  this.handleEntryPoint(r[n][1], r[n][0]);
              for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) this.handleStepPoint(n, this.xNumSteps[n]);
          }
          var y = {
                  to: function (e) {
                      return void 0 === e ? "" : e.toFixed(2);
                  },
                  from: Number,
              },
              b = {
                  target: "target",
                  base: "base",
                  origin: "origin",
                  handle: "handle",
                  handleLower: "handle-lower",
                  handleUpper: "handle-upper",
                  touchArea: "touch-area",
                  horizontal: "horizontal",
                  vertical: "vertical",
                  background: "background",
                  connect: "connect",
                  connects: "connects",
                  ltr: "ltr",
                  rtl: "rtl",
                  textDirectionLtr: "txt-dir-ltr",
                  textDirectionRtl: "txt-dir-rtl",
                  draggable: "draggable",
                  drag: "state-drag",
                  tap: "state-tap",
                  active: "active",
                  tooltip: "tooltip",
                  pips: "pips",
                  pipsHorizontal: "pips-horizontal",
                  pipsVertical: "pips-vertical",
                  marker: "marker",
                  markerHorizontal: "marker-horizontal",
                  markerVertical: "marker-vertical",
                  markerNormal: "marker-normal",
                  markerLarge: "marker-large",
                  markerSub: "marker-sub",
                  value: "value",
                  valueHorizontal: "value-horizontal",
                  valueVertical: "value-vertical",
                  valueNormal: "value-normal",
                  valueLarge: "value-large",
                  valueSub: "value-sub",
              },
              w = ".__tooltips",
              x = ".__aria";
          function S(e, t) {
              if (!s(t)) throw new Error("noUiSlider: 'step' is not numeric.");
              e.singleStep = t;
          }
          function E(e, t) {
              if (!s(t)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
              e.keyboardPageMultiplier = t;
          }
          function C(e, t) {
              if (!s(t)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
              e.keyboardMultiplier = t;
          }
          function T(e, t) {
              if (!s(t)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
              e.keyboardDefaultStep = t;
          }
          function k(e, t) {
              if ("object" != typeof t || Array.isArray(t)) throw new Error("noUiSlider: 'range' is not an object.");
              if (void 0 === t.min || void 0 === t.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
              e.spectrum = new v(t, e.snap || !1, e.singleStep);
          }
          function M(e, t) {
              if (((t = l(t)), !Array.isArray(t) || !t.length)) throw new Error("noUiSlider: 'start' option is incorrect.");
              (e.handles = t.length), (e.start = t);
          }
          function P(e, t) {
              if ("boolean" != typeof t) throw new Error("noUiSlider: 'snap' option must be a boolean.");
              e.snap = t;
          }
          function A(e, t) {
              if ("boolean" != typeof t) throw new Error("noUiSlider: 'animate' option must be a boolean.");
              e.animate = t;
          }
          function $(e, t) {
              if ("number" != typeof t) throw new Error("noUiSlider: 'animationDuration' option must be a number.");
              e.animationDuration = t;
          }
          function D(e, t) {
              var i,
                  n = [!1];
              if (("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]), !0 === t || !1 === t)) {
                  for (i = 1; i < e.handles; i++) n.push(t);
                  n.push(!1);
              } else {
                  if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
                  n = t;
              }
              e.connect = n;
          }
          function O(e, t) {
              switch (t) {
                  case "horizontal":
                      e.ort = 0;
                      break;
                  case "vertical":
                      e.ort = 1;
                      break;
                  default:
                      throw new Error("noUiSlider: 'orientation' option is invalid.");
              }
          }
          function L(e, t) {
              if (!s(t)) throw new Error("noUiSlider: 'margin' option must be numeric.");
              0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function N(e, t) {
              if (!s(t)) throw new Error("noUiSlider: 'limit' option must be numeric.");
              if (((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
          }
          function _(e, t) {
              var i;
              if (!s(t) && !Array.isArray(t)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
              if (Array.isArray(t) && 2 !== t.length && !s(t[0]) && !s(t[1])) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
              if (0 !== t) {
                  for (Array.isArray(t) || (t = [t, t]), e.padding = [e.spectrum.getDistance(t[0]), e.spectrum.getDistance(t[1])], i = 0; i < e.spectrum.xNumSteps.length - 1; i++)
                      if (e.padding[0][i] < 0 || e.padding[1][i] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
                  var n = t[0] + t[1];
                  if (((t = e.spectrum.xVal[0]), 1 < n / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - t))) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
              }
          }
          function z(e, t) {
              switch (t) {
                  case "ltr":
                      e.dir = 0;
                      break;
                  case "rtl":
                      e.dir = 1;
                      break;
                  default:
                      throw new Error("noUiSlider: 'direction' option was not recognized.");
              }
          }
          function j(e, t) {
              if ("string" != typeof t) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
              var i = 0 <= t.indexOf("tap"),
                  n = 0 <= t.indexOf("drag"),
                  r = 0 <= t.indexOf("fixed"),
                  s = 0 <= t.indexOf("snap"),
                  a = 0 <= t.indexOf("hover"),
                  o = 0 <= t.indexOf("unconstrained");
              if (((t = 0 <= t.indexOf("drag-all")), r)) {
                  if (2 !== e.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                  L(e, e.start[1] - e.start[0]);
              }
              if (o && (e.margin || e.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
              e.events = { tap: i || s, drag: n, dragAll: t, fixed: r, snap: s, hover: a, unconstrained: o };
          }
          function I(e, i) {
              if (!1 !== i)
                  if (!0 === i || t(i)) {
                      e.tooltips = [];
                      for (var n = 0; n < e.handles; n++) e.tooltips.push(i);
                  } else {
                      if ((i = l(i)).length !== e.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                      i.forEach(function (e) {
                          if ("boolean" != typeof e && !t(e)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                      }),
                          (e.tooltips = i);
                  }
          }
          function H(e, t) {
              if (t.length !== e.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
              e.handleAttributes = t;
          }
          function q(e, i) {
              if (!t(i)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
              e.ariaFormat = i;
          }
          function R(e, i) {
              if (!t((n = i)) || "function" != typeof n.from) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
              var n;
              e.format = i;
          }
          function V(e, t) {
              if ("boolean" != typeof t) throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
              e.keyboardSupport = t;
          }
          function B(e, t) {
              e.documentElement = t;
          }
          function U(e, t) {
              if ("string" != typeof t && !1 !== t) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
              e.cssPrefix = t;
          }
          function F(e, t) {
              if ("object" != typeof t) throw new Error("noUiSlider: 'cssClasses' must be an object.");
              "string" == typeof e.cssPrefix
                  ? ((e.cssClasses = {}),
                    Object.keys(t).forEach(function (i) {
                        e.cssClasses[i] = e.cssPrefix + t[i];
                    }))
                  : (e.cssClasses = t);
          }
          function G(e) {
              var t = { margin: null, limit: null, padding: null, animate: !0, animationDuration: 300, ariaFormat: y, format: y },
                  i = {
                      step: { r: !1, t: S },
                      keyboardPageMultiplier: { r: !1, t: E },
                      keyboardMultiplier: { r: !1, t: C },
                      keyboardDefaultStep: { r: !1, t: T },
                      start: { r: !0, t: M },
                      connect: { r: !0, t: D },
                      direction: { r: !0, t: z },
                      snap: { r: !1, t: P },
                      animate: { r: !1, t: A },
                      animationDuration: { r: !1, t: $ },
                      range: { r: !0, t: k },
                      orientation: { r: !1, t: O },
                      margin: { r: !1, t: L },
                      limit: { r: !1, t: N },
                      padding: { r: !1, t: _ },
                      behaviour: { r: !0, t: j },
                      ariaFormat: { r: !1, t: q },
                      format: { r: !1, t: R },
                      tooltips: { r: !1, t: I },
                      keyboardSupport: { r: !0, t: V },
                      documentElement: { r: !1, t: B },
                      cssPrefix: { r: !0, t: U },
                      cssClasses: { r: !0, t: F },
                      handleAttributes: { r: !1, t: H },
                  },
                  r = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: !0, cssPrefix: "noUi-", cssClasses: b, keyboardPageMultiplier: 5, keyboardMultiplier: 1, keyboardDefaultStep: 10 };
              e.format && !e.ariaFormat && (e.ariaFormat = e.format),
                  Object.keys(i).forEach(function (s) {
                      if (n(e[s]) || void 0 !== r[s]) i[s].t(t, (n(e[s]) ? e : r)[s]);
                      else if (i[s].r) throw new Error("noUiSlider: '" + s + "' is required.");
                  }),
                  (t.pips = e.pips);
              var s = void 0 !== (a = document.createElement("div")).style.msTransform,
                  a = void 0 !== a.style.transform;
              return (
                  (t.transformRule = a ? "transform" : s ? "msTransform" : "webkitTransform"),
                  (t.style = [
                      ["left", "top"],
                      ["right", "bottom"],
                  ][t.dir][t.ort]),
                  t
              );
          }
          function W(t, s, u) {
              var h,
                  f,
                  m,
                  v,
                  g,
                  y,
                  b = window.navigator.pointerEnabled
                      ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
                      : window.navigator.msPointerEnabled
                      ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
                      : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" },
                  S =
                      window.CSS &&
                      CSS.supports &&
                      CSS.supports("touch-action", "none") &&
                      (function () {
                          var e = !1;
                          try {
                              var t = Object.defineProperty({}, "passive", {
                                  get: function () {
                                      e = !0;
                                  },
                              });
                              window.addEventListener("test", null, t);
                          } catch (e) {}
                          return e;
                      })(),
                  E = t,
                  C = s.spectrum,
                  T = [],
                  k = [],
                  M = [],
                  P = 0,
                  A = {},
                  $ = t.ownerDocument,
                  D = s.documentElement || $.documentElement,
                  O = $.body,
                  L = "rtl" === $.dir || 1 === s.ort ? 0 : 100;
              function N(e, t) {
                  var i = $.createElement("div");
                  return t && c(i, t), e.appendChild(i), i;
              }
              function _(e, t) {
                  e = N(e, s.cssClasses.origin);
                  var i,
                      n = N(e, s.cssClasses.handle);
                  return (
                      N(n, s.cssClasses.touchArea),
                      n.setAttribute("data-handle", String(t)),
                      s.keyboardSupport &&
                          (n.setAttribute("tabindex", "0"),
                          n.addEventListener("keydown", function (e) {
                              return (function (e, t) {
                                  if (I() || H(t)) return !1;
                                  var i = ["Left", "Right"],
                                      n = ["Down", "Up"],
                                      r = ["PageDown", "PageUp"],
                                      a = ["Home", "End"];
                                  s.dir && !s.ort ? i.reverse() : s.ort && !s.dir && (n.reverse(), r.reverse());
                                  var o = e.key.replace("Arrow", ""),
                                      l = o === r[0],
                                      u = o === r[1];
                                  if (((r = o === n[0] || o === i[0] || l), (n = o === n[1] || o === i[1] || u), (i = o === a[0]), (a = o === a[1]), !(r || n || i || a))) return !0;
                                  if ((e.preventDefault(), n || r)) {
                                      var c = r ? 0 : 1;
                                      if (null === (c = pe(t)[c])) return !1;
                                      !1 === c && (c = C.getDefaultStep(k[t], r, s.keyboardDefaultStep)), (c *= u || l ? s.keyboardPageMultiplier : s.keyboardMultiplier), (c = Math.max(c, 1e-7)), (c *= r ? -1 : 1), (c = T[t] + c);
                                  } else c = a ? s.spectrum.xVal[s.spectrum.xVal.length - 1] : s.spectrum.xVal[0];
                                  return oe(t, C.toStepping(c), !0, !0), te("slide", t), te("update", t), te("change", t), te("set", t), !1;
                              })(e, t);
                          })),
                      void 0 !== s.handleAttributes &&
                          ((i = s.handleAttributes[t]),
                          Object.keys(i).forEach(function (e) {
                              n.setAttribute(e, i[e]);
                          })),
                      n.setAttribute("role", "slider"),
                      n.setAttribute("aria-orientation", s.ort ? "vertical" : "horizontal"),
                      0 === t ? c(n, s.cssClasses.handleLower) : t === s.handles - 1 && c(n, s.cssClasses.handleUpper),
                      e
                  );
              }
              function z(e, t) {
                  return !!t && N(e, s.cssClasses.connect);
              }
              function j(e, t) {
                  return !(!s.tooltips || !s.tooltips[t]) && N(e.firstChild, s.cssClasses.tooltip);
              }
              function I() {
                  return E.hasAttribute("disabled");
              }
              function H(e) {
                  return f[e].hasAttribute("disabled");
              }
              function q() {
                  g &&
                      (ee("update" + w),
                      g.forEach(function (e) {
                          e && i(e);
                      }),
                      (g = null));
              }
              function R() {
                  q(),
                      (g = f.map(j)),
                      J("update" + w, function (e, t, i) {
                          g && s.tooltips && !1 !== g[t] && ((e = e[t]), !0 !== s.tooltips[t] && (e = s.tooltips[t].to(i[t])), (g[t].innerHTML = e));
                      });
              }
              function V(e, t) {
                  return e.map(function (e) {
                      return C.fromStepping(t ? C.getStep(e) : e);
                  });
              }
              function B() {
                  v && (i(v), (v = null));
              }
              function U(t) {
                  B();
                  var i = (function (t) {
                          var i = (function (t) {
                                  if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps) return C.xVal;
                                  if (t.mode !== e.PipsMode.Count)
                                      return t.mode === e.PipsMode.Positions
                                          ? V(t.values, t.stepped)
                                          : t.mode === e.PipsMode.Values
                                          ? t.stepped
                                              ? t.values.map(function (e) {
                                                    return C.fromStepping(C.getStep(C.toStepping(e)));
                                                })
                                              : t.values
                                          : [];
                                  if (t.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                                  for (var i = t.values - 1, n = 100 / i, r = []; i--; ) r[i] = i * n;
                                  return r.push(100), V(r, t.stepped);
                              })(t),
                              n = {},
                              r = C.xVal[0],
                              s = C.xVal[C.xVal.length - 1],
                              a = !1,
                              o = !1,
                              l = 0;
                          return (
                              (i = i
                                  .slice()
                                  .sort(function (e, t) {
                                      return e - t;
                                  })
                                  .filter(function (e) {
                                      return !this[e] && (this[e] = !0);
                                  }, {}))[0] !== r && (i.unshift(r), (a = !0)),
                              i[i.length - 1] !== s && (i.push(s), (o = !0)),
                              i.forEach(function (r, s) {
                                  r = r;
                                  var u,
                                      c,
                                      d,
                                      p,
                                      h,
                                      f,
                                      m,
                                      v,
                                      g = i[s + 1],
                                      y = t.mode === e.PipsMode.Steps,
                                      b = (b = y ? C.xNumSteps[s] : b) || g - r;
                                  for (void 0 === g && (g = r), b = Math.max(b, 1e-7), u = r; u <= g; u = Number((u + b).toFixed(7))) {
                                      for (f = (p = (d = C.toStepping(u)) - l) / (t.density || 1), v = p / (m = Math.round(f)), c = 1; c <= m; c += 1) n[(h = l + c * v).toFixed(5)] = [C.fromStepping(h), 0];
                                      (f = -1 < i.indexOf(u) ? e.PipsType.LargeValue : y ? e.PipsType.SmallValue : e.PipsType.NoValue), !s && a && u !== g && (f = 0), (u === g && o) || (n[d.toFixed(5)] = [u, f]), (l = d);
                                  }
                              }),
                              n
                          );
                      })(t),
                      n = t.filter;
                  return (
                      (t = t.format || {
                          to: function (e) {
                              return String(Math.round(e));
                          },
                      }),
                      (v = E.appendChild(
                          (function (t, i, n) {
                              var r,
                                  a = $.createElement("div"),
                                  o = (((r = {})[e.PipsType.None] = ""), (r[e.PipsType.NoValue] = s.cssClasses.valueNormal), (r[e.PipsType.LargeValue] = s.cssClasses.valueLarge), (r[e.PipsType.SmallValue] = s.cssClasses.valueSub), r),
                                  l = (((r = {})[e.PipsType.None] = ""), (r[e.PipsType.NoValue] = s.cssClasses.markerNormal), (r[e.PipsType.LargeValue] = s.cssClasses.markerLarge), (r[e.PipsType.SmallValue] = s.cssClasses.markerSub), r),
                                  u = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
                                  d = [s.cssClasses.markerHorizontal, s.cssClasses.markerVertical];
                              function p(e, t) {
                                  var i = t === s.cssClasses.value;
                                  return t + " " + (i ? u : d)[s.ort] + " " + (i ? o : l)[e];
                              }
                              return (
                                  c(a, s.cssClasses.pips),
                                  c(a, 0 === s.ort ? s.cssClasses.pipsHorizontal : s.cssClasses.pipsVertical),
                                  Object.keys(t).forEach(function (r) {
                                      var o, l, u;
                                      (l = t[(o = r)][0]),
                                          (u = t[r][1]),
                                          (u = i ? i(l, u) : u) !== e.PipsType.None &&
                                              (((r = N(a, !1)).className = p(u, s.cssClasses.marker)),
                                              (r.style[s.style] = o + "%"),
                                              u > e.PipsType.NoValue && (((r = N(a, !1)).className = p(u, s.cssClasses.value)), r.setAttribute("data-value", String(l)), (r.style[s.style] = o + "%"), (r.innerHTML = String(n.to(l)))));
                                  }),
                                  a
                              );
                          })(i, n, t)
                      ))
                  );
              }
              function F() {
                  var e = h.getBoundingClientRect(),
                      t = "offset" + ["Width", "Height"][s.ort];
                  return 0 === s.ort ? e.width || h[t] : e.height || h[t];
              }
              function W(e, t, i, n) {
                  function r(r) {
                      var a,
                          o = (function (e, t, i) {
                              var n = 0 === e.type.indexOf("touch"),
                                  r = 0 === e.type.indexOf("mouse"),
                                  s = 0 === e.type.indexOf("pointer"),
                                  a = 0,
                                  o = 0;
                              if ((0 === e.type.indexOf("MSPointer") && (s = !0), "mousedown" === e.type && !e.buttons && !e.touches)) return !1;
                              if (n) {
                                  var l = function (t) {
                                      return (t = t.target) === i || i.contains(t) || (e.composed && e.composedPath().shift() === i);
                                  };
                                  if ("touchstart" === e.type) {
                                      if (1 < (n = Array.prototype.filter.call(e.touches, l)).length) return !1;
                                      (a = n[0].pageX), (o = n[0].pageY);
                                  } else {
                                      if (!(l = Array.prototype.find.call(e.changedTouches, l))) return !1;
                                      (a = l.pageX), (o = l.pageY);
                                  }
                              }
                              return (t = t || p($)), (r || s) && ((a = e.clientX + t.x), (o = e.clientY + t.y)), (e.pageOffset = t), (e.points = [a, o]), (e.cursor = r || s), e;
                          })(r, n.pageOffset, n.target || t);
                      return (
                          !!o &&
                          !(I() && !n.doNotReject) &&
                          ((a = E),
                          (r = s.cssClasses.tap),
                          !((a.classList ? a.classList.contains(r) : new RegExp("\\b" + r + "\\b").test(a.className)) && !n.doNotReject) &&
                              !(e === b.start && void 0 !== o.buttons && 1 < o.buttons) &&
                              (!n.hover || !o.buttons) &&
                              (S || o.preventDefault(), (o.calcPoint = o.points[s.ort]), void i(o, n)))
                      );
                  }
                  var a = [];
                  return (
                      e.split(" ").forEach(function (e) {
                          t.addEventListener(e, r, !!S && { passive: !0 }), a.push([e, r]);
                      }),
                      a
                  );
              }
              function X(e) {
                  var t,
                      i,
                      n = o(
                          (n =
                              (100 *
                                  (e -
                                      ((n = h),
                                      (t = s.ort),
                                      (i = n.getBoundingClientRect()),
                                      (n = (e = n.ownerDocument).documentElement),
                                      (e = p(e)),
                                      /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (e.x = 0),
                                      t ? i.top + e.y - n.clientTop : i.left + e.x - n.clientLeft))) /
                              F())
                      );
                  return s.dir ? 100 - n : n;
              }
              function Y(e, t) {
                  "mouseout" === e.type && "HTML" === e.target.nodeName && null === e.relatedTarget && Z(e, t);
              }
              function K(e, t) {
                  if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === e.buttons && 0 !== t.buttonsProperty) return Z(e, t);
                  re(0 < (e = (s.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint)), (100 * e) / t.baseSize, t.locations, t.handleNumbers, t.connect);
              }
              function Z(e, t) {
                  t.handle && (d(t.handle, s.cssClasses.active), --P),
                      t.listeners.forEach(function (e) {
                          D.removeEventListener(e[0], e[1]);
                      }),
                      0 === P && (d(E, s.cssClasses.drag), ae(), e.cursor && ((O.style.cursor = ""), O.removeEventListener("selectstart", r))),
                      t.handleNumbers.forEach(function (e) {
                          te("change", e), te("set", e), te("end", e);
                      });
              }
              function Q(e, t) {
                  var i, n, a, o;
                  t.handleNumbers.some(H) ||
                      (1 === t.handleNumbers.length && ((o = f[t.handleNumbers[0]].children[0]), (P += 1), c(o, s.cssClasses.active)),
                      e.stopPropagation(),
                      (n = W(b.move, D, K, {
                          target: e.target,
                          handle: o,
                          connect: t.connect,
                          listeners: (i = []),
                          startCalcPoint: e.calcPoint,
                          baseSize: F(),
                          pageOffset: e.pageOffset,
                          handleNumbers: t.handleNumbers,
                          buttonsProperty: e.buttons,
                          locations: k.slice(),
                      })),
                      (a = W(b.end, D, Z, { target: e.target, handle: o, listeners: i, doNotReject: !0, handleNumbers: t.handleNumbers })),
                      (o = W("mouseout", D, Y, { target: e.target, handle: o, listeners: i, doNotReject: !0, handleNumbers: t.handleNumbers })),
                      i.push.apply(i, n.concat(a, o)),
                      e.cursor && ((O.style.cursor = getComputedStyle(e.target).cursor), 1 < f.length && c(E, s.cssClasses.drag), O.addEventListener("selectstart", r, !1)),
                      t.handleNumbers.forEach(function (e) {
                          te("start", e);
                      }));
              }
              function J(e, t) {
                  (A[e] = A[e] || []),
                      A[e].push(t),
                      "update" === e.split(".")[0] &&
                          f.forEach(function (e, t) {
                              te("update", t);
                          });
              }
              function ee(e) {
                  var t = e && e.split(".")[0],
                      i = t ? e.substring(t.length) : e;
                  Object.keys(A).forEach(function (e) {
                      var n = e.split(".")[0],
                          r = e.substring(n.length);
                      (t && t !== n) || (i && i !== r) || ((((n = r) !== x && n !== w) || i === r) && delete A[e]);
                  });
              }
              function te(e, t, i) {
                  Object.keys(A).forEach(function (n) {
                      var r = n.split(".")[0];
                      e === r &&
                          A[n].forEach(function (e) {
                              e.call(he, T.map(s.format.to), t, T.slice(), i || !1, k.slice(), he);
                          });
                  });
              }
              function ie(e, t, i, n, r, a) {
                  var l;
                  return (
                      1 < f.length &&
                          !s.events.unconstrained &&
                          (n && 0 < t && ((l = C.getAbsoluteDistance(e[t - 1], s.margin, !1)), (i = Math.max(i, l))), r && t < f.length - 1 && ((l = C.getAbsoluteDistance(e[t + 1], s.margin, !0)), (i = Math.min(i, l)))),
                      1 < f.length &&
                          s.limit &&
                          (n && 0 < t && ((l = C.getAbsoluteDistance(e[t - 1], s.limit, !1)), (i = Math.min(i, l))), r && t < f.length - 1 && ((l = C.getAbsoluteDistance(e[t + 1], s.limit, !0)), (i = Math.max(i, l)))),
                      s.padding && (0 === t && ((l = C.getAbsoluteDistance(0, s.padding[0], !1)), (i = Math.max(i, l))), t === f.length - 1 && ((l = C.getAbsoluteDistance(100, s.padding[1], !0)), (i = Math.min(i, l)))),
                      !((i = o((i = C.getStep(i)))) === e[t] && !a) && i
                  );
              }
              function ne(e, t) {
                  var i = s.ort;
                  return (i ? t : e) + ", " + (i ? e : t);
              }
              function re(e, t, i, n, r) {
                  var s = i.slice(),
                      a = n[0],
                      o = [!e, e],
                      l = [e, !e];
                  (n = n.slice()),
                      e && n.reverse(),
                      1 < n.length
                          ? n.forEach(function (e, i) {
                                !1 === (i = ie(s, e, s[e] + t, o[i], l[i], !1)) ? (t = 0) : ((t = i - s[e]), (s[e] = i));
                            })
                          : (o = l = [!0]);
                  var u = !1;
                  n.forEach(function (e, n) {
                      u = oe(e, i[e] + t, o[n], l[n]) || u;
                  }),
                      u &&
                          (n.forEach(function (e) {
                              te("update", e), te("slide", e);
                          }),
                          null != r && te("drag", a));
              }
              function se(e, t) {
                  return s.dir ? 100 - e - t : e;
              }
              function ae() {
                  M.forEach(function (e) {
                      var t = 50 < k[e] ? -1 : 1;
                      (t = 3 + (f.length + t * e)), (f[e].style.zIndex = String(t));
                  });
              }
              function oe(e, t, i, n, r) {
                  return (
                      !1 !== (t = r ? t : ie(k, e, t, i, n, !1)) && ((t = t), (k[(e = e)] = t), (T[e] = C.fromStepping(t)), (t = "translate(" + ne(se(t, 0) - L + "%", "0") + ")"), (f[e].style[s.transformRule] = t), le(e), le(e + 1), !0)
                  );
              }
              function le(e) {
                  var t, i;
                  m[e] &&
                      ((i = 100),
                      (t = "translate(" + ne(se((t = (t = 0) !== e ? k[e - 1] : t), (i = (i = e !== m.length - 1 ? k[e] : i) - t)) + "%", "0") + ")"),
                      (i = "scale(" + ne(i / 100, "1") + ")"),
                      (m[e].style[s.transformRule] = t + " " + i));
              }
              function ue(e, t) {
                  return null === e || !1 === e || void 0 === e ? k[t] : ("number" == typeof e && (e = String(e)), !1 === (e = !1 !== (e = s.format.from(e)) ? C.toStepping(e) : e) || isNaN(e) ? k[t] : e);
              }
              function ce(e, t, i) {
                  var n = l(e);
                  (e = void 0 === k[0]),
                      (t = void 0 === t || t),
                      s.animate && !e && a(E, s.cssClasses.tap, s.animationDuration),
                      M.forEach(function (e) {
                          oe(e, ue(n[e], e), !0, !1, i);
                      });
                  var r,
                      o = 1 === M.length ? 0 : 1;
                  for (
                      e &&
                      C.hasNoSize() &&
                      ((i = !0),
                      (k[0] = 0),
                      1 < M.length &&
                          ((r = 100 / (M.length - 1)),
                          M.forEach(function (e) {
                              k[e] = e * r;
                          })));
                      o < M.length;
                      ++o
                  )
                      M.forEach(function (e) {
                          oe(e, k[e], !0, !0, i);
                      });
                  ae(),
                      M.forEach(function (e) {
                          te("update", e), null !== n[e] && t && te("set", e);
                      });
              }
              function de(e) {
                  return (e = void 0 !== e && e) ? (1 === T.length ? T[0] : T.slice(0)) : 1 === (e = T.map(s.format.to)).length ? e[0] : e;
              }
              function pe(e) {
                  var t = k[e],
                      i = C.getNearbySteps(t),
                      n = T[e],
                      r = i.thisStep.step;
                  return (
                      (e = null),
                      s.snap
                          ? [n - i.stepBefore.startValue || null, i.stepAfter.startValue - n || null]
                          : (!1 !== r && n + r > i.stepAfter.startValue && (r = i.stepAfter.startValue - n),
                            (e = n > i.thisStep.startValue ? i.thisStep.step : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep),
                            100 === t ? (r = null) : 0 === t && (e = null),
                            (t = C.countStepDecimals()),
                            null !== r && !1 !== r && (r = Number(r.toFixed(t))),
                            [(e = null !== e && !1 !== e ? Number(e.toFixed(t)) : e), r])
                  );
              }
              c((t = E), s.cssClasses.target),
                  0 === s.dir ? c(t, s.cssClasses.ltr) : c(t, s.cssClasses.rtl),
                  0 === s.ort ? c(t, s.cssClasses.horizontal) : c(t, s.cssClasses.vertical),
                  c(t, "rtl" === getComputedStyle(t).direction ? s.cssClasses.textDirectionRtl : s.cssClasses.textDirectionLtr),
                  (h = N(t, s.cssClasses.base)),
                  (function (e, t) {
                      var i = N(t, s.cssClasses.connects);
                      (f = []), (m = []).push(z(i, e[0]));
                      for (var n = 0; n < s.handles; n++) f.push(_(t, n)), (M[n] = n), m.push(z(i, e[n + 1]));
                  })(s.connect, h),
                  (y = s.events).fixed ||
                      f.forEach(function (e, t) {
                          W(b.start, e.children[0], Q, { handleNumbers: [t] });
                      }),
                  y.tap &&
                      W(
                          b.start,
                          h,
                          function (e) {
                              e.stopPropagation();
                              var t,
                                  i,
                                  n,
                                  r = X(e.calcPoint),
                                  o =
                                      ((t = r),
                                      (n = !(i = 100)),
                                      f.forEach(function (e, r) {
                                          var s, a;
                                          H(r) || ((s = k[r]), ((a = Math.abs(s - t)) < i || (a <= i && s < t) || (100 === a && 100 === i)) && ((n = r), (i = a)));
                                      }),
                                      n);
                              !1 !== o &&
                                  (s.events.snap || a(E, s.cssClasses.tap, s.animationDuration),
                                  oe(o, r, !0, !0),
                                  ae(),
                                  te("slide", o, !0),
                                  te("update", o, !0),
                                  s.events.snap ? Q(e, { handleNumbers: [o] }) : (te("change", o, !0), te("set", o, !0)));
                          },
                          {}
                      ),
                  y.hover &&
                      W(
                          b.move,
                          h,
                          function (e) {
                              (e = X(e.calcPoint)), (e = C.getStep(e));
                              var t = C.fromStepping(e);
                              Object.keys(A).forEach(function (e) {
                                  "hover" === e.split(".")[0] &&
                                      A[e].forEach(function (e) {
                                          e.call(he, t);
                                      });
                              });
                          },
                          { hover: !0 }
                      ),
                  y.drag &&
                      m.forEach(function (e, t) {
                          var i, n, r, a, o;
                          !1 !== e &&
                              0 !== t &&
                              t !== m.length - 1 &&
                              ((i = f[t - 1]),
                              (n = f[t]),
                              (r = [e]),
                              (a = [i, n]),
                              (o = [t - 1, t]),
                              c(e, s.cssClasses.draggable),
                              y.fixed && (r.push(i.children[0]), r.push(n.children[0])),
                              y.dragAll && ((a = f), (o = M)),
                              r.forEach(function (t) {
                                  W(b.start, t, Q, { handles: a, handleNumbers: o, connect: e });
                              }));
                      }),
                  ce(s.start),
                  s.pips && U(s.pips),
                  s.tooltips && R(),
                  ee("update" + x),
                  J("update" + x, function (e, t, i, n, r) {
                      M.forEach(function (e) {
                          var t = f[e],
                              n = ie(k, e, 0, !0, !0, !0),
                              a = ie(k, e, 100, !0, !0, !0),
                              o = r[e];
                          (e = String(s.ariaFormat.to(i[e]))),
                              (n = C.fromStepping(n).toFixed(1)),
                              (a = C.fromStepping(a).toFixed(1)),
                              (o = C.fromStepping(o).toFixed(1)),
                              t.children[0].setAttribute("aria-valuemin", n),
                              t.children[0].setAttribute("aria-valuemax", a),
                              t.children[0].setAttribute("aria-valuenow", o),
                              t.children[0].setAttribute("aria-valuetext", e);
                      });
                  });
              var he = {
                  destroy: function () {
                      for (
                          ee(x),
                              ee(w),
                              Object.keys(s.cssClasses).forEach(function (e) {
                                  d(E, s.cssClasses[e]);
                              });
                          E.firstChild;

                      )
                          E.removeChild(E.firstChild);
                      delete E.noUiSlider;
                  },
                  steps: function () {
                      return M.map(pe);
                  },
                  on: J,
                  off: ee,
                  get: de,
                  set: ce,
                  setHandle: function (e, t, i, n) {
                      if (!(0 <= (e = Number(e)) && e < M.length)) throw new Error("noUiSlider: invalid handle number, got: " + e);
                      oe(e, ue(t, e), !0, !0, n), te("update", e), i && te("set", e);
                  },
                  reset: function (e) {
                      ce(s.start, e);
                  },
                  __moveHandles: function (e, t, i) {
                      re(e, t, k, i);
                  },
                  options: u,
                  updateOptions: function (e, t) {
                      var i = de(),
                          r = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                      r.forEach(function (t) {
                          void 0 !== e[t] && (u[t] = e[t]);
                      });
                      var a = G(u);
                      r.forEach(function (t) {
                          void 0 !== e[t] && (s[t] = a[t]);
                      }),
                          (C = a.spectrum),
                          (s.margin = a.margin),
                          (s.limit = a.limit),
                          (s.padding = a.padding),
                          s.pips ? U(s.pips) : B(),
                          (s.tooltips ? R : q)(),
                          (k = []),
                          ce(n(e.start) ? e.start : i, t);
                  },
                  target: E,
                  removePips: B,
                  removeTooltips: q,
                  getPositions: function () {
                      return k.slice();
                  },
                  getTooltips: function () {
                      return g;
                  },
                  getOrigins: function () {
                      return f;
                  },
                  pips: U,
              };
              return he;
          }
          function X(e, t) {
              if (!e || !e.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + e);
              if (e.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
              return (t = W(e, G(t), t)), (e.noUiSlider = t);
          }
          var Y = { __spectrum: v, cssClasses: b, create: X };
          (e.create = X), (e.cssClasses = b), (e.default = Y), Object.defineProperty(e, "__esModule", { value: !0 });
      })(t);
  },
  function (e, t, i) {
      (function (n) {
          var r, s, a;
          /*! Select2 4.0.12 | https://github.com/select2/select2/blob/master/LICENSE.md */ (s = [i(0)]),
              void 0 ===
                  (a =
                      "function" ==
                      typeof (r = function (t) {
                          var i = (function () {
                                  if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var i = t.fn.select2.amd;
                                  var r, s, a, o, l, u, c, d, p, h, f, m, v, g, y, b;
                                  function w(e, t) {
                                      return v.call(e, t);
                                  }
                                  function x(e, t) {
                                      var i,
                                          n,
                                          r,
                                          s,
                                          a,
                                          o,
                                          l,
                                          u,
                                          c,
                                          d,
                                          p,
                                          h = t && t.split("/"),
                                          m = f.map,
                                          v = (m && m["*"]) || {};
                                      if (e) {
                                          for (
                                              a = (e = e.split("/")).length - 1, f.nodeIdCompat && y.test(e[a]) && (e[a] = e[a].replace(y, "")), "." === e[0].charAt(0) && h && (e = h.slice(0, h.length - 1).concat(e)), c = 0;
                                              c < e.length;
                                              c++
                                          )
                                              if ("." === (p = e[c])) e.splice(c, 1), (c -= 1);
                                              else if (".." === p) {
                                                  if (0 === c || (1 === c && ".." === e[2]) || ".." === e[c - 1]) continue;
                                                  0 < c && (e.splice(c - 1, 2), (c -= 2));
                                              }
                                          e = e.join("/");
                                      }
                                      if ((h || v) && m) {
                                          for (c = (i = e.split("/")).length; 0 < c; c -= 1) {
                                              if (((n = i.slice(0, c).join("/")), h))
                                                  for (d = h.length; 0 < d; d -= 1)
                                                      if ((r = (r = m[h.slice(0, d).join("/")]) && r[n])) {
                                                          (s = r), (o = c);
                                                          break;
                                                      }
                                              if (s) break;
                                              !l && v && v[n] && ((l = v[n]), (u = c));
                                          }
                                          !s && l && ((s = l), (o = u)), s && (i.splice(0, o, s), (e = i.join("/")));
                                      }
                                      return e;
                                  }
                                  function S(e, t) {
                                      return function () {
                                          var i = g.call(arguments, 0);
                                          return "string" != typeof i[0] && 1 === i.length && i.push(null), u.apply(o, i.concat([e, t]));
                                      };
                                  }
                                  function E(e) {
                                      return function (t) {
                                          p[e] = t;
                                      };
                                  }
                                  function C(e) {
                                      if (w(h, e)) {
                                          var t = h[e];
                                          delete h[e], (m[e] = !0), l.apply(o, t);
                                      }
                                      if (!w(p, e) && !w(m, e)) throw new Error("No " + e);
                                      return p[e];
                                  }
                                  function T(e) {
                                      var t,
                                          i = e ? e.indexOf("!") : -1;
                                      return -1 < i && ((t = e.substring(0, i)), (e = e.substring(i + 1, e.length))), [t, e];
                                  }
                                  function k(e) {
                                      return e ? T(e) : [];
                                  }
                                  return (
                                      (i && i.requirejs) ||
                                          (i ? (s = i) : (i = {}),
                                          (p = {}),
                                          (h = {}),
                                          (f = {}),
                                          (m = {}),
                                          (v = Object.prototype.hasOwnProperty),
                                          (g = [].slice),
                                          (y = /\.js$/),
                                          (c = function (e, t) {
                                              var i,
                                                  n = T(e),
                                                  r = n[0],
                                                  s = t[1];
                                              return (
                                                  (e = n[1]),
                                                  r && (i = C((r = x(r, s)))),
                                                  r
                                                      ? (e =
                                                            i && i.normalize
                                                                ? i.normalize(
                                                                      e,
                                                                      (function (e) {
                                                                          return function (t) {
                                                                              return x(t, e);
                                                                          };
                                                                      })(s)
                                                                  )
                                                                : x(e, s))
                                                      : ((r = (n = T((e = x(e, s))))[0]), (e = n[1]), r && (i = C(r))),
                                                  { f: r ? r + "!" + e : e, n: e, pr: r, p: i }
                                              );
                                          }),
                                          (d = {
                                              require: function (e) {
                                                  return S(e);
                                              },
                                              exports: function (e) {
                                                  var t = p[e];
                                                  return void 0 !== t ? t : (p[e] = {});
                                              },
                                              module: function (e) {
                                                  return {
                                                      id: e,
                                                      uri: "",
                                                      exports: p[e],
                                                      config: (function (e) {
                                                          return function () {
                                                              return (f && f.config && f.config[e]) || {};
                                                          };
                                                      })(e),
                                                  };
                                              },
                                          }),
                                          (l = function (e, t, i, n) {
                                              var r,
                                                  s,
                                                  a,
                                                  l,
                                                  u,
                                                  f,
                                                  v,
                                                  g = [],
                                                  y = typeof i;
                                              if (((f = k((n = n || e))), "undefined" == y || "function" == y)) {
                                                  for (t = !t.length && i.length ? ["require", "exports", "module"] : t, u = 0; u < t.length; u += 1)
                                                      if ("require" === (s = (l = c(t[u], f)).f)) g[u] = d.require(e);
                                                      else if ("exports" === s) (g[u] = d.exports(e)), (v = !0);
                                                      else if ("module" === s) r = g[u] = d.module(e);
                                                      else if (w(p, s) || w(h, s) || w(m, s)) g[u] = C(s);
                                                      else {
                                                          if (!l.p) throw new Error(e + " missing " + s);
                                                          l.p.load(l.n, S(n, !0), E(s), {}), (g[u] = p[s]);
                                                      }
                                                  (a = i ? i.apply(p[e], g) : void 0), e && (r && r.exports !== o && r.exports !== p[e] ? (p[e] = r.exports) : (a === o && v) || (p[e] = a));
                                              } else e && (p[e] = i);
                                          }),
                                          (r = s = u = function (e, t, i, n, r) {
                                              if ("string" == typeof e) return d[e] ? d[e](t) : C(c(e, k(t)).f);
                                              if (!e.splice) {
                                                  if (((f = e).deps && u(f.deps, f.callback), !t)) return;
                                                  t.splice ? ((e = t), (t = i), (i = null)) : (e = o);
                                              }
                                              return (
                                                  (t = t || function () {}),
                                                  "function" == typeof i && ((i = n), (n = r)),
                                                  n
                                                      ? l(o, e, t, i)
                                                      : setTimeout(function () {
                                                            l(o, e, t, i);
                                                        }, 4),
                                                  u
                                              );
                                          }),
                                          (u.config = function (e) {
                                              return u(e);
                                          }),
                                          (r._defined = p),
                                          ((a = function (e, t, i) {
                                              if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                                              t.splice || ((i = t), (t = [])), w(p, e) || w(h, e) || (h[e] = [e, t, i]);
                                          }).amd = { jQuery: !0 }),
                                          (i.requirejs = r),
                                          (i.require = s),
                                          (i.define = a)),
                                      i.define("almond", function () {}),
                                      i.define("jquery", [], function () {
                                          var e = t || n;
                                          return (
                                              null == e &&
                                                  console &&
                                                  console.error &&
                                                  console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
                                              e
                                          );
                                      }),
                                      i.define("select2/utils", ["jquery"], function (e) {
                                          var t = {};
                                          function i(e) {
                                              var t = e.prototype,
                                                  i = [];
                                              for (var n in t) "function" == typeof t[n] && "constructor" !== n && i.push(n);
                                              return i;
                                          }
                                          function n() {
                                              this.listeners = {};
                                          }
                                          (t.Extend = function (e, t) {
                                              var i = {}.hasOwnProperty;
                                              function n() {
                                                  this.constructor = e;
                                              }
                                              for (var r in t) i.call(t, r) && (e[r] = t[r]);
                                              return (n.prototype = t.prototype), (e.prototype = new n()), (e.__super__ = t.prototype), e;
                                          }),
                                              (t.Decorate = function (e, t) {
                                                  var n = i(t),
                                                      r = i(e);
                                                  function s() {
                                                      var i = Array.prototype.unshift,
                                                          n = t.prototype.constructor.length,
                                                          r = e.prototype.constructor;
                                                      0 < n && (i.call(arguments, e.prototype.constructor), (r = t.prototype.constructor)), r.apply(this, arguments);
                                                  }
                                                  (t.displayName = e.displayName),
                                                      (s.prototype = new (function () {
                                                          this.constructor = s;
                                                      })());
                                                  for (var a = 0; a < r.length; a++) {
                                                      var o = r[a];
                                                      s.prototype[o] = e.prototype[o];
                                                  }
                                                  function l(e) {
                                                      var i = function () {};
                                                      e in s.prototype && (i = s.prototype[e]);
                                                      var n = t.prototype[e];
                                                      return function () {
                                                          return Array.prototype.unshift.call(arguments, i), n.apply(this, arguments);
                                                      };
                                                  }
                                                  for (var u = 0; u < n.length; u++) {
                                                      var c = n[u];
                                                      s.prototype[c] = l(c);
                                                  }
                                                  return s;
                                              }),
                                              (n.prototype.on = function (e, t) {
                                                  (this.listeners = this.listeners || {}), e in this.listeners ? this.listeners[e].push(t) : (this.listeners[e] = [t]);
                                              }),
                                              (n.prototype.trigger = function (e) {
                                                  var t = Array.prototype.slice,
                                                      i = t.call(arguments, 1);
                                                  (this.listeners = this.listeners || {}),
                                                      null == i && (i = []),
                                                      0 === i.length && i.push({}),
                                                      (i[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)),
                                                      "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
                                              }),
                                              (n.prototype.invoke = function (e, t) {
                                                  for (var i = 0, n = e.length; i < n; i++) e[i].apply(this, t);
                                              }),
                                              (t.Observable = n),
                                              (t.generateChars = function (e) {
                                                  for (var t = "", i = 0; i < e; i++) t += Math.floor(36 * Math.random()).toString(36);
                                                  return t;
                                              }),
                                              (t.bind = function (e, t) {
                                                  return function () {
                                                      e.apply(t, arguments);
                                                  };
                                              }),
                                              (t._convertData = function (e) {
                                                  for (var t in e) {
                                                      var i = t.split("-"),
                                                          n = e;
                                                      if (1 !== i.length) {
                                                          for (var r = 0; r < i.length; r++) {
                                                              var s = i[r];
                                                              (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in n || (n[s] = {}), r == i.length - 1 && (n[s] = e[t]), (n = n[s]);
                                                          }
                                                          delete e[t];
                                                      }
                                                  }
                                                  return e;
                                              }),
                                              (t.hasScroll = function (t, i) {
                                                  var n = e(i),
                                                      r = i.style.overflowX,
                                                      s = i.style.overflowY;
                                                  return (r !== s || ("hidden" !== s && "visible" !== s)) && ("scroll" === r || "scroll" === s || n.innerHeight() < i.scrollHeight || n.innerWidth() < i.scrollWidth);
                                              }),
                                              (t.escapeMarkup = function (e) {
                                                  var t = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };
                                                  return "string" != typeof e
                                                      ? e
                                                      : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                                                            return t[e];
                                                        });
                                              }),
                                              (t.appendMany = function (t, i) {
                                                  if ("1.7" === e.fn.jquery.substr(0, 3)) {
                                                      var n = e();
                                                      e.map(i, function (e) {
                                                          n = n.add(e);
                                                      }),
                                                          (i = n);
                                                  }
                                                  t.append(i);
                                              }),
                                              (t.__cache = {});
                                          var r = 0;
                                          return (
                                              (t.GetUniqueElementId = function (e) {
                                                  var t = e.getAttribute("data-select2-id");
                                                  return null == t && (e.id ? ((t = e.id), e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++r), (t = r.toString()))), t;
                                              }),
                                              (t.StoreData = function (e, i, n) {
                                                  var r = t.GetUniqueElementId(e);
                                                  t.__cache[r] || (t.__cache[r] = {}), (t.__cache[r][i] = n);
                                              }),
                                              (t.GetData = function (i, n) {
                                                  var r = t.GetUniqueElementId(i);
                                                  return n ? (t.__cache[r] && null != t.__cache[r][n] ? t.__cache[r][n] : e(i).data(n)) : t.__cache[r];
                                              }),
                                              (t.RemoveData = function (e) {
                                                  var i = t.GetUniqueElementId(e);
                                                  null != t.__cache[i] && delete t.__cache[i], e.removeAttribute("data-select2-id");
                                              }),
                                              t
                                          );
                                      }),
                                      i.define("select2/results", ["jquery", "./utils"], function (e, t) {
                                          function i(e, t, n) {
                                              (this.$element = e), (this.data = n), (this.options = t), i.__super__.constructor.call(this);
                                          }
                                          return (
                                              t.Extend(i, t.Observable),
                                              (i.prototype.render = function () {
                                                  var t = e('<ul class="select2-results__options" role="listbox"></ul>');
                                                  return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), (this.$results = t);
                                              }),
                                              (i.prototype.clear = function () {
                                                  this.$results.empty();
                                              }),
                                              (i.prototype.displayMessage = function (t) {
                                                  var i = this.options.get("escapeMarkup");
                                                  this.clear(), this.hideLoading();
                                                  var n = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                                                      r = this.options.get("translations").get(t.message);
                                                  n.append(i(r(t.args))), (n[0].className += " select2-results__message"), this.$results.append(n);
                                              }),
                                              (i.prototype.hideMessages = function () {
                                                  this.$results.find(".select2-results__message").remove();
                                              }),
                                              (i.prototype.append = function (e) {
                                                  this.hideLoading();
                                                  var t = [];
                                                  if (null != e.results && 0 !== e.results.length) {
                                                      e.results = this.sort(e.results);
                                                      for (var i = 0; i < e.results.length; i++) {
                                                          var n = e.results[i],
                                                              r = this.option(n);
                                                          t.push(r);
                                                      }
                                                      this.$results.append(t);
                                                  } else 0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" });
                                              }),
                                              (i.prototype.position = function (e, t) {
                                                  t.find(".select2-results").append(e);
                                              }),
                                              (i.prototype.sort = function (e) {
                                                  return this.options.get("sorter")(e);
                                              }),
                                              (i.prototype.highlightFirstItem = function () {
                                                  var e = this.$results.find(".select2-results__option[aria-selected]"),
                                                      t = e.filter("[aria-selected=true]");
                                                  0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible();
                                              }),
                                              (i.prototype.setClasses = function () {
                                                  var i = this;
                                                  this.data.current(function (n) {
                                                      var r = e.map(n, function (e) {
                                                          return e.id.toString();
                                                      });
                                                      i.$results.find(".select2-results__option[aria-selected]").each(function () {
                                                          var i = e(this),
                                                              n = t.GetData(this, "data"),
                                                              s = "" + n.id;
                                                          (null != n.element && n.element.selected) || (null == n.element && -1 < e.inArray(s, r)) ? i.attr("aria-selected", "true") : i.attr("aria-selected", "false");
                                                      });
                                                  });
                                              }),
                                              (i.prototype.showLoading = function (e) {
                                                  this.hideLoading();
                                                  var t = { disabled: !0, loading: !0, text: this.options.get("translations").get("searching")(e) },
                                                      i = this.option(t);
                                                  (i.className += " loading-results"), this.$results.prepend(i);
                                              }),
                                              (i.prototype.hideLoading = function () {
                                                  this.$results.find(".loading-results").remove();
                                              }),
                                              (i.prototype.option = function (i) {
                                                  var n = document.createElement("li");
                                                  n.className = "select2-results__option";
                                                  var r = { role: "option", "aria-selected": "false" },
                                                      s = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                                                  for (var a in (((null != i.element && s.call(i.element, ":disabled")) || (null == i.element && i.disabled)) && (delete r["aria-selected"], (r["aria-disabled"] = "true")),
                                                  null == i.id && delete r["aria-selected"],
                                                  null != i._resultId && (n.id = i._resultId),
                                                  i.title && (n.title = i.title),
                                                  i.children && ((r.role = "group"), (r["aria-label"] = i.text), delete r["aria-selected"]),
                                                  r)) {
                                                      var o = r[a];
                                                      n.setAttribute(a, o);
                                                  }
                                                  if (i.children) {
                                                      var l = e(n),
                                                          u = document.createElement("strong");
                                                      (u.className = "select2-results__group"), e(u), this.template(i, u);
                                                      for (var c = [], d = 0; d < i.children.length; d++) {
                                                          var p = i.children[d],
                                                              h = this.option(p);
                                                          c.push(h);
                                                      }
                                                      var f = e("<ul></ul>", { class: "select2-results__options select2-results__options--nested" });
                                                      f.append(c), l.append(u), l.append(f);
                                                  } else this.template(i, n);
                                                  return t.StoreData(n, "data", i), n;
                                              }),
                                              (i.prototype.bind = function (i, n) {
                                                  var r = this,
                                                      s = i.id + "-results";
                                                  this.$results.attr("id", s),
                                                      i.on("results:all", function (e) {
                                                          r.clear(), r.append(e.data), i.isOpen() && (r.setClasses(), r.highlightFirstItem());
                                                      }),
                                                      i.on("results:append", function (e) {
                                                          r.append(e.data), i.isOpen() && r.setClasses();
                                                      }),
                                                      i.on("query", function (e) {
                                                          r.hideMessages(), r.showLoading(e);
                                                      }),
                                                      i.on("select", function () {
                                                          i.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem());
                                                      }),
                                                      i.on("unselect", function () {
                                                          i.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem());
                                                      }),
                                                      i.on("open", function () {
                                                          r.$results.attr("aria-expanded", "true"), r.$results.attr("aria-hidden", "false"), r.setClasses(), r.ensureHighlightVisible();
                                                      }),
                                                      i.on("close", function () {
                                                          r.$results.attr("aria-expanded", "false"), r.$results.attr("aria-hidden", "true"), r.$results.removeAttr("aria-activedescendant");
                                                      }),
                                                      i.on("results:toggle", function () {
                                                          var e = r.getHighlightedResults();
                                                          0 !== e.length && e.trigger("mouseup");
                                                      }),
                                                      i.on("results:select", function () {
                                                          var e = r.getHighlightedResults();
                                                          if (0 !== e.length) {
                                                              var i = t.GetData(e[0], "data");
                                                              "true" == e.attr("aria-selected") ? r.trigger("close", {}) : r.trigger("select", { data: i });
                                                          }
                                                      }),
                                                      i.on("results:previous", function () {
                                                          var e = r.getHighlightedResults(),
                                                              t = r.$results.find("[aria-selected]"),
                                                              i = t.index(e);
                                                          if (!(i <= 0)) {
                                                              var n = i - 1;
                                                              0 === e.length && (n = 0);
                                                              var s = t.eq(n);
                                                              s.trigger("mouseenter");
                                                              var a = r.$results.offset().top,
                                                                  o = s.offset().top,
                                                                  l = r.$results.scrollTop() + (o - a);
                                                              0 === n ? r.$results.scrollTop(0) : o - a < 0 && r.$results.scrollTop(l);
                                                          }
                                                      }),
                                                      i.on("results:next", function () {
                                                          var e = r.getHighlightedResults(),
                                                              t = r.$results.find("[aria-selected]"),
                                                              i = t.index(e) + 1;
                                                          if (!(i >= t.length)) {
                                                              var n = t.eq(i);
                                                              n.trigger("mouseenter");
                                                              var s = r.$results.offset().top + r.$results.outerHeight(!1),
                                                                  a = n.offset().top + n.outerHeight(!1),
                                                                  o = r.$results.scrollTop() + a - s;
                                                              0 === i ? r.$results.scrollTop(0) : s < a && r.$results.scrollTop(o);
                                                          }
                                                      }),
                                                      i.on("results:focus", function (e) {
                                                          e.element.addClass("select2-results__option--highlighted");
                                                      }),
                                                      i.on("results:message", function (e) {
                                                          r.displayMessage(e);
                                                      }),
                                                      e.fn.mousewheel &&
                                                          this.$results.on("mousewheel", function (e) {
                                                              var t = r.$results.scrollTop(),
                                                                  i = r.$results.get(0).scrollHeight - t + e.deltaY,
                                                                  n = 0 < e.deltaY && t - e.deltaY <= 0,
                                                                  s = e.deltaY < 0 && i <= r.$results.height();
                                                              n
                                                                  ? (r.$results.scrollTop(0), e.preventDefault(), e.stopPropagation())
                                                                  : s && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()), e.preventDefault(), e.stopPropagation());
                                                          }),
                                                      this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (i) {
                                                          var n = e(this),
                                                              s = t.GetData(this, "data");
                                                          "true" !== n.attr("aria-selected")
                                                              ? r.trigger("select", { originalEvent: i, data: s })
                                                              : r.options.get("multiple")
                                                              ? r.trigger("unselect", { originalEvent: i, data: s })
                                                              : r.trigger("close", {});
                                                      }),
                                                      this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (i) {
                                                          var n = t.GetData(this, "data");
                                                          r.getHighlightedResults().removeClass("select2-results__option--highlighted"), r.trigger("results:focus", { data: n, element: e(this) });
                                                      });
                                              }),
                                              (i.prototype.getHighlightedResults = function () {
                                                  return this.$results.find(".select2-results__option--highlighted");
                                              }),
                                              (i.prototype.destroy = function () {
                                                  this.$results.remove();
                                              }),
                                              (i.prototype.ensureHighlightVisible = function () {
                                                  var e = this.getHighlightedResults();
                                                  if (0 !== e.length) {
                                                      var t = this.$results.find("[aria-selected]").index(e),
                                                          i = this.$results.offset().top,
                                                          n = e.offset().top,
                                                          r = this.$results.scrollTop() + (n - i),
                                                          s = n - i;
                                                      (r -= 2 * e.outerHeight(!1)), t <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(r);
                                                  }
                                              }),
                                              (i.prototype.template = function (t, i) {
                                                  var n = this.options.get("templateResult"),
                                                      r = this.options.get("escapeMarkup"),
                                                      s = n(t, i);
                                                  null == s ? (i.style.display = "none") : "string" == typeof s ? (i.innerHTML = r(s)) : e(i).append(s);
                                              }),
                                              i
                                          );
                                      }),
                                      i.define("select2/keys", [], function () {
                                          return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };
                                      }),
                                      i.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (e, t, i) {
                                          function n(e, t) {
                                              (this.$element = e), (this.options = t), n.__super__.constructor.call(this);
                                          }
                                          return (
                                              t.Extend(n, t.Observable),
                                              (n.prototype.render = function () {
                                                  var i = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                                                  return (
                                                      (this._tabindex = 0),
                                                      null != t.GetData(this.$element[0], "old-tabindex")
                                                          ? (this._tabindex = t.GetData(this.$element[0], "old-tabindex"))
                                                          : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                                                      i.attr("title", this.$element.attr("title")),
                                                      i.attr("tabindex", this._tabindex),
                                                      i.attr("aria-disabled", "false"),
                                                      (this.$selection = i)
                                                  );
                                              }),
                                              (n.prototype.bind = function (e, t) {
                                                  var n = this,
                                                      r = e.id + "-results";
                                                  (this.container = e),
                                                      this.$selection.on("focus", function (e) {
                                                          n.trigger("focus", e);
                                                      }),
                                                      this.$selection.on("blur", function (e) {
                                                          n._handleBlur(e);
                                                      }),
                                                      this.$selection.on("keydown", function (e) {
                                                          n.trigger("keypress", e), e.which === i.SPACE && e.preventDefault();
                                                      }),
                                                      e.on("results:focus", function (e) {
                                                          n.$selection.attr("aria-activedescendant", e.data._resultId);
                                                      }),
                                                      e.on("selection:update", function (e) {
                                                          n.update(e.data);
                                                      }),
                                                      e.on("open", function () {
                                                          n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", r), n._attachCloseHandler(e);
                                                      }),
                                                      e.on("close", function () {
                                                          n.$selection.attr("aria-expanded", "false"),
                                                              n.$selection.removeAttr("aria-activedescendant"),
                                                              n.$selection.removeAttr("aria-owns"),
                                                              n.$selection.trigger("focus"),
                                                              n._detachCloseHandler(e);
                                                      }),
                                                      e.on("enable", function () {
                                                          n.$selection.attr("tabindex", n._tabindex), n.$selection.attr("aria-disabled", "false");
                                                      }),
                                                      e.on("disable", function () {
                                                          n.$selection.attr("tabindex", "-1"), n.$selection.attr("aria-disabled", "true");
                                                      });
                                              }),
                                              (n.prototype._handleBlur = function (t) {
                                                  var i = this;
                                                  window.setTimeout(function () {
                                                      document.activeElement == i.$selection[0] || e.contains(i.$selection[0], document.activeElement) || i.trigger("blur", t);
                                                  }, 1);
                                              }),
                                              (n.prototype._attachCloseHandler = function (i) {
                                                  e(document.body).on("mousedown.select2." + i.id, function (i) {
                                                      var n = e(i.target).closest(".select2");
                                                      e(".select2.select2-container--open").each(function () {
                                                          this != n[0] && t.GetData(this, "element").select2("close");
                                                      });
                                                  });
                                              }),
                                              (n.prototype._detachCloseHandler = function (t) {
                                                  e(document.body).off("mousedown.select2." + t.id);
                                              }),
                                              (n.prototype.position = function (e, t) {
                                                  t.find(".selection").append(e);
                                              }),
                                              (n.prototype.destroy = function () {
                                                  this._detachCloseHandler(this.container);
                                              }),
                                              (n.prototype.update = function (e) {
                                                  throw new Error("The `update` method must be defined in child classes.");
                                              }),
                                              n
                                          );
                                      }),
                                      i.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, i, n) {
                                          function r() {
                                              r.__super__.constructor.apply(this, arguments);
                                          }
                                          return (
                                              i.Extend(r, t),
                                              (r.prototype.render = function () {
                                                  var e = r.__super__.render.call(this);
                                                  return (
                                                      e.addClass("select2-selection--single"),
                                                      e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
                                                      e
                                                  );
                                              }),
                                              (r.prototype.bind = function (e, t) {
                                                  var i = this;
                                                  r.__super__.bind.apply(this, arguments);
                                                  var n = e.id + "-container";
                                                  this.$selection.find(".select2-selection__rendered").attr("id", n).attr("role", "textbox").attr("aria-readonly", "true"),
                                                      this.$selection.attr("aria-labelledby", n),
                                                      this.$selection.on("mousedown", function (e) {
                                                          1 === e.which && i.trigger("toggle", { originalEvent: e });
                                                      }),
                                                      this.$selection.on("focus", function (e) {}),
                                                      this.$selection.on("blur", function (e) {}),
                                                      e.on("focus", function (t) {
                                                          e.isOpen() || i.$selection.trigger("focus");
                                                      });
                                              }),
                                              (r.prototype.clear = function () {
                                                  var e = this.$selection.find(".select2-selection__rendered");
                                                  e.empty(), e.removeAttr("title");
                                              }),
                                              (r.prototype.display = function (e, t) {
                                                  var i = this.options.get("templateSelection");
                                                  return this.options.get("escapeMarkup")(i(e, t));
                                              }),
                                              (r.prototype.selectionContainer = function () {
                                                  return e("<span></span>");
                                              }),
                                              (r.prototype.update = function (e) {
                                                  if (0 !== e.length) {
                                                      var t = e[0],
                                                          i = this.$selection.find(".select2-selection__rendered"),
                                                          n = this.display(t, i);
                                                      i.empty().append(n);
                                                      var r = t.title || t.text;
                                                      r ? i.attr("title", r) : i.removeAttr("title");
                                                  } else this.clear();
                                              }),
                                              r
                                          );
                                      }),
                                      i.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (e, t, i) {
                                          function n(e, t) {
                                              n.__super__.constructor.apply(this, arguments);
                                          }
                                          return (
                                              i.Extend(n, t),
                                              (n.prototype.render = function () {
                                                  var e = n.__super__.render.call(this);
                                                  return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e;
                                              }),
                                              (n.prototype.bind = function (t, r) {
                                                  var s = this;
                                                  n.__super__.bind.apply(this, arguments),
                                                      this.$selection.on("click", function (e) {
                                                          s.trigger("toggle", { originalEvent: e });
                                                      }),
                                                      this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
                                                          if (!s.options.get("disabled")) {
                                                              var n = e(this).parent(),
                                                                  r = i.GetData(n[0], "data");
                                                              s.trigger("unselect", { originalEvent: t, data: r });
                                                          }
                                                      });
                                              }),
                                              (n.prototype.clear = function () {
                                                  var e = this.$selection.find(".select2-selection__rendered");
                                                  e.empty(), e.removeAttr("title");
                                              }),
                                              (n.prototype.display = function (e, t) {
                                                  var i = this.options.get("templateSelection");
                                                  return this.options.get("escapeMarkup")(i(e, t));
                                              }),
                                              (n.prototype.selectionContainer = function () {
                                                  return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                                              }),
                                              (n.prototype.update = function (e) {
                                                  if ((this.clear(), 0 !== e.length)) {
                                                      for (var t = [], n = 0; n < e.length; n++) {
                                                          var r = e[n],
                                                              s = this.selectionContainer(),
                                                              a = this.display(r, s);
                                                          s.append(a);
                                                          var o = r.title || r.text;
                                                          o && s.attr("title", o), i.StoreData(s[0], "data", r), t.push(s);
                                                      }
                                                      var l = this.$selection.find(".select2-selection__rendered");
                                                      i.appendMany(l, t);
                                                  }
                                              }),
                                              n
                                          );
                                      }),
                                      i.define("select2/selection/placeholder", ["../utils"], function (e) {
                                          function t(e, t, i) {
                                              (this.placeholder = this.normalizePlaceholder(i.get("placeholder"))), e.call(this, t, i);
                                          }
                                          return (
                                              (t.prototype.normalizePlaceholder = function (e, t) {
                                                  return "string" == typeof t && (t = { id: "", text: t }), t;
                                              }),
                                              (t.prototype.createPlaceholder = function (e, t) {
                                                  var i = this.selectionContainer();
                                                  return i.html(this.display(t)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i;
                                              }),
                                              (t.prototype.update = function (e, t) {
                                                  var i = 1 == t.length && t[0].id != this.placeholder.id;
                                                  if (1 < t.length || i) return e.call(this, t);
                                                  this.clear();
                                                  var n = this.createPlaceholder(this.placeholder);
                                                  this.$selection.find(".select2-selection__rendered").append(n);
                                              }),
                                              t
                                          );
                                      }),
                                      i.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (e, t, i) {
                                          function n() {}
                                          return (
                                              (n.prototype.bind = function (e, t, i) {
                                                  var n = this;
                                                  e.call(this, t, i),
                                                      null == this.placeholder &&
                                                          this.options.get("debug") &&
                                                          window.console &&
                                                          console.error &&
                                                          console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                                                      this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                                                          n._handleClear(e);
                                                      }),
                                                      t.on("keypress", function (e) {
                                                          n._handleKeyboardClear(e, t);
                                                      });
                                              }),
                                              (n.prototype._handleClear = function (e, t) {
                                                  if (!this.options.get("disabled")) {
                                                      var n = this.$selection.find(".select2-selection__clear");
                                                      if (0 !== n.length) {
                                                          t.stopPropagation();
                                                          var r = i.GetData(n[0], "data"),
                                                              s = this.$element.val();
                                                          this.$element.val(this.placeholder.id);
                                                          var a = { data: r };
                                                          if ((this.trigger("clear", a), a.prevented)) this.$element.val(s);
                                                          else {
                                                              for (var o = 0; o < r.length; o++) if (((a = { data: r[o] }), this.trigger("unselect", a), a.prevented)) return void this.$element.val(s);
                                                              this.$element.trigger("change"), this.trigger("toggle", {});
                                                          }
                                                      }
                                                  }
                                              }),
                                              (n.prototype._handleKeyboardClear = function (e, i, n) {
                                                  n.isOpen() || (i.which != t.DELETE && i.which != t.BACKSPACE) || this._handleClear(i);
                                              }),
                                              (n.prototype.update = function (t, n) {
                                                  if ((t.call(this, n), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === n.length))) {
                                                      var r = this.options.get("translations").get("removeAllItems"),
                                                          s = e('<span class="select2-selection__clear" title="' + r() + '">&times;</span>');
                                                      i.StoreData(s[0], "data", n), this.$selection.find(".select2-selection__rendered").prepend(s);
                                                  }
                                              }),
                                              n
                                          );
                                      }),
                                      i.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (e, t, i) {
                                          function n(e, t, i) {
                                              e.call(this, t, i);
                                          }
                                          return (
                                              (n.prototype.render = function (t) {
                                                  var i = e(
                                                      '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>'
                                                  );
                                                  (this.$searchContainer = i), (this.$search = i.find("input"));
                                                  var n = t.call(this);
                                                  return this._transferTabIndex(), n;
                                              }),
                                              (n.prototype.bind = function (e, n, r) {
                                                  var s = this,
                                                      a = n.id + "-results";
                                                  e.call(this, n, r),
                                                      n.on("open", function () {
                                                          s.$search.attr("aria-controls", a), s.$search.trigger("focus");
                                                      }),
                                                      n.on("close", function () {
                                                          s.$search.val(""), s.$search.removeAttr("aria-controls"), s.$search.removeAttr("aria-activedescendant"), s.$search.trigger("focus");
                                                      }),
                                                      n.on("enable", function () {
                                                          s.$search.prop("disabled", !1), s._transferTabIndex();
                                                      }),
                                                      n.on("disable", function () {
                                                          s.$search.prop("disabled", !0);
                                                      }),
                                                      n.on("focus", function (e) {
                                                          s.$search.trigger("focus");
                                                      }),
                                                      n.on("results:focus", function (e) {
                                                          e.data._resultId ? s.$search.attr("aria-activedescendant", e.data._resultId) : s.$search.removeAttr("aria-activedescendant");
                                                      }),
                                                      this.$selection.on("focusin", ".select2-search--inline", function (e) {
                                                          s.trigger("focus", e);
                                                      }),
                                                      this.$selection.on("focusout", ".select2-search--inline", function (e) {
                                                          s._handleBlur(e);
                                                      }),
                                                      this.$selection.on("keydown", ".select2-search--inline", function (e) {
                                                          if ((e.stopPropagation(), s.trigger("keypress", e), (s._keyUpPrevented = e.isDefaultPrevented()), e.which === i.BACKSPACE && "" === s.$search.val())) {
                                                              var n = s.$searchContainer.prev(".select2-selection__choice");
                                                              if (0 < n.length) {
                                                                  var r = t.GetData(n[0], "data");
                                                                  s.searchRemoveChoice(r), e.preventDefault();
                                                              }
                                                          }
                                                      }),
                                                      this.$selection.on("click", ".select2-search--inline", function (e) {
                                                          s.$search.val() && e.stopPropagation();
                                                      });
                                                  var o = document.documentMode,
                                                      l = o && o <= 11;
                                                  this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
                                                      l ? s.$selection.off("input.search input.searchcheck") : s.$selection.off("keyup.search");
                                                  }),
                                                      this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
                                                          if (l && "input" === e.type) s.$selection.off("input.search input.searchcheck");
                                                          else {
                                                              var t = e.which;
                                                              t != i.SHIFT && t != i.CTRL && t != i.ALT && t != i.TAB && s.handleSearch(e);
                                                          }
                                                      });
                                              }),
                                              (n.prototype._transferTabIndex = function (e) {
                                                  this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
                                              }),
                                              (n.prototype.createPlaceholder = function (e, t) {
                                                  this.$search.attr("placeholder", t.text);
                                              }),
                                              (n.prototype.update = function (e, t) {
                                                  var i = this.$search[0] == document.activeElement;
                                                  this.$search.attr("placeholder", ""),
                                                      e.call(this, t),
                                                      this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),
                                                      this.resizeSearch(),
                                                      i && this.$search.trigger("focus");
                                              }),
                                              (n.prototype.handleSearch = function () {
                                                  if ((this.resizeSearch(), !this._keyUpPrevented)) {
                                                      var e = this.$search.val();
                                                      this.trigger("query", { term: e });
                                                  }
                                                  this._keyUpPrevented = !1;
                                              }),
                                              (n.prototype.searchRemoveChoice = function (e, t) {
                                                  this.trigger("unselect", { data: t }), this.$search.val(t.text), this.handleSearch();
                                              }),
                                              (n.prototype.resizeSearch = function () {
                                                  this.$search.css("width", "25px");
                                                  var e = "";
                                                  (e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").width() : 0.75 * (this.$search.val().length + 1) + "em"), this.$search.css("width", e);
                                              }),
                                              n
                                          );
                                      }),
                                      i.define("select2/selection/eventRelay", ["jquery"], function (e) {
                                          function t() {}
                                          return (
                                              (t.prototype.bind = function (t, i, n) {
                                                  var r = this,
                                                      s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                                                      a = ["opening", "closing", "selecting", "unselecting", "clearing"];
                                                  t.call(this, i, n),
                                                      i.on("*", function (t, i) {
                                                          if (-1 !== e.inArray(t, s)) {
                                                              i = i || {};
                                                              var n = e.Event("select2:" + t, { params: i });
                                                              r.$element.trigger(n), -1 !== e.inArray(t, a) && (i.prevented = n.isDefaultPrevented());
                                                          }
                                                      });
                                              }),
                                              t
                                          );
                                      }),
                                      i.define("select2/translation", ["jquery", "require"], function (e, t) {
                                          function i(e) {
                                              this.dict = e || {};
                                          }
                                          return (
                                              (i.prototype.all = function () {
                                                  return this.dict;
                                              }),
                                              (i.prototype.get = function (e) {
                                                  return this.dict[e];
                                              }),
                                              (i.prototype.extend = function (t) {
                                                  this.dict = e.extend({}, t.all(), this.dict);
                                              }),
                                              (i._cache = {}),
                                              (i.loadPath = function (e) {
                                                  if (!(e in i._cache)) {
                                                      var n = t(e);
                                                      i._cache[e] = n;
                                                  }
                                                  return new i(i._cache[e]);
                                              }),
                                              i
                                          );
                                      }),
                                      i.define("select2/diacritics", [], function () {
                                          return {
                                              "Ⓐ": "A",
                                              Ａ: "A",
                                              À: "A",
                                              Á: "A",
                                              Â: "A",
                                              Ầ: "A",
                                              Ấ: "A",
                                              Ẫ: "A",
                                              Ẩ: "A",
                                              Ã: "A",
                                              Ā: "A",
                                              Ă: "A",
                                              Ằ: "A",
                                              Ắ: "A",
                                              Ẵ: "A",
                                              Ẳ: "A",
                                              Ȧ: "A",
                                              Ǡ: "A",
                                              Ä: "A",
                                              Ǟ: "A",
                                              Ả: "A",
                                              Å: "A",
                                              Ǻ: "A",
                                              Ǎ: "A",
                                              Ȁ: "A",
                                              Ȃ: "A",
                                              Ạ: "A",
                                              Ậ: "A",
                                              Ặ: "A",
                                              Ḁ: "A",
                                              Ą: "A",
                                              Ⱥ: "A",
                                              Ɐ: "A",
                                              Ꜳ: "AA",
                                              Æ: "AE",
                                              Ǽ: "AE",
                                              Ǣ: "AE",
                                              Ꜵ: "AO",
                                              Ꜷ: "AU",
                                              Ꜹ: "AV",
                                              Ꜻ: "AV",
                                              Ꜽ: "AY",
                                              "Ⓑ": "B",
                                              Ｂ: "B",
                                              Ḃ: "B",
                                              Ḅ: "B",
                                              Ḇ: "B",
                                              Ƀ: "B",
                                              Ƃ: "B",
                                              Ɓ: "B",
                                              "Ⓒ": "C",
                                              Ｃ: "C",
                                              Ć: "C",
                                              Ĉ: "C",
                                              Ċ: "C",
                                              Č: "C",
                                              Ç: "C",
                                              Ḉ: "C",
                                              Ƈ: "C",
                                              Ȼ: "C",
                                              Ꜿ: "C",
                                              "Ⓓ": "D",
                                              Ｄ: "D",
                                              Ḋ: "D",
                                              Ď: "D",
                                              Ḍ: "D",
                                              Ḑ: "D",
                                              Ḓ: "D",
                                              Ḏ: "D",
                                              Đ: "D",
                                              Ƌ: "D",
                                              Ɗ: "D",
                                              Ɖ: "D",
                                              Ꝺ: "D",
                                              Ǳ: "DZ",
                                              Ǆ: "DZ",
                                              ǲ: "Dz",
                                              ǅ: "Dz",
                                              "Ⓔ": "E",
                                              Ｅ: "E",
                                              È: "E",
                                              É: "E",
                                              Ê: "E",
                                              Ề: "E",
                                              Ế: "E",
                                              Ễ: "E",
                                              Ể: "E",
                                              Ẽ: "E",
                                              Ē: "E",
                                              Ḕ: "E",
                                              Ḗ: "E",
                                              Ĕ: "E",
                                              Ė: "E",
                                              Ë: "E",
                                              Ẻ: "E",
                                              Ě: "E",
                                              Ȅ: "E",
                                              Ȇ: "E",
                                              Ẹ: "E",
                                              Ệ: "E",
                                              Ȩ: "E",
                                              Ḝ: "E",
                                              Ę: "E",
                                              Ḙ: "E",
                                              Ḛ: "E",
                                              Ɛ: "E",
                                              Ǝ: "E",
                                              "Ⓕ": "F",
                                              Ｆ: "F",
                                              Ḟ: "F",
                                              Ƒ: "F",
                                              Ꝼ: "F",
                                              "Ⓖ": "G",
                                              Ｇ: "G",
                                              Ǵ: "G",
                                              Ĝ: "G",
                                              Ḡ: "G",
                                              Ğ: "G",
                                              Ġ: "G",
                                              Ǧ: "G",
                                              Ģ: "G",
                                              Ǥ: "G",
                                              Ɠ: "G",
                                              Ꞡ: "G",
                                              Ᵹ: "G",
                                              Ꝿ: "G",
                                              "Ⓗ": "H",
                                              Ｈ: "H",
                                              Ĥ: "H",
                                              Ḣ: "H",
                                              Ḧ: "H",
                                              Ȟ: "H",
                                              Ḥ: "H",
                                              Ḩ: "H",
                                              Ḫ: "H",
                                              Ħ: "H",
                                              Ⱨ: "H",
                                              Ⱶ: "H",
                                              Ɥ: "H",
                                              "Ⓘ": "I",
                                              Ｉ: "I",
                                              Ì: "I",
                                              Í: "I",
                                              Î: "I",
                                              Ĩ: "I",
                                              Ī: "I",
                                              Ĭ: "I",
                                              İ: "I",
                                              Ï: "I",
                                              Ḯ: "I",
                                              Ỉ: "I",
                                              Ǐ: "I",
                                              Ȉ: "I",
                                              Ȋ: "I",
                                              Ị: "I",
                                              Į: "I",
                                              Ḭ: "I",
                                              Ɨ: "I",
                                              "Ⓙ": "J",
                                              Ｊ: "J",
                                              Ĵ: "J",
                                              Ɉ: "J",
                                              "Ⓚ": "K",
                                              Ｋ: "K",
                                              Ḱ: "K",
                                              Ǩ: "K",
                                              Ḳ: "K",
                                              Ķ: "K",
                                              Ḵ: "K",
                                              Ƙ: "K",
                                              Ⱪ: "K",
                                              Ꝁ: "K",
                                              Ꝃ: "K",
                                              Ꝅ: "K",
                                              Ꞣ: "K",
                                              "Ⓛ": "L",
                                              Ｌ: "L",
                                              Ŀ: "L",
                                              Ĺ: "L",
                                              Ľ: "L",
                                              Ḷ: "L",
                                              Ḹ: "L",
                                              Ļ: "L",
                                              Ḽ: "L",
                                              Ḻ: "L",
                                              Ł: "L",
                                              Ƚ: "L",
                                              Ɫ: "L",
                                              Ⱡ: "L",
                                              Ꝉ: "L",
                                              Ꝇ: "L",
                                              Ꞁ: "L",
                                              Ǉ: "LJ",
                                              ǈ: "Lj",
                                              "Ⓜ": "M",
                                              Ｍ: "M",
                                              Ḿ: "M",
                                              Ṁ: "M",
                                              Ṃ: "M",
                                              Ɱ: "M",
                                              Ɯ: "M",
                                              "Ⓝ": "N",
                                              Ｎ: "N",
                                              Ǹ: "N",
                                              Ń: "N",
                                              Ñ: "N",
                                              Ṅ: "N",
                                              Ň: "N",
                                              Ṇ: "N",
                                              Ņ: "N",
                                              Ṋ: "N",
                                              Ṉ: "N",
                                              Ƞ: "N",
                                              Ɲ: "N",
                                              Ꞑ: "N",
                                              Ꞥ: "N",
                                              Ǌ: "NJ",
                                              ǋ: "Nj",
                                              "Ⓞ": "O",
                                              Ｏ: "O",
                                              Ò: "O",
                                              Ó: "O",
                                              Ô: "O",
                                              Ồ: "O",
                                              Ố: "O",
                                              Ỗ: "O",
                                              Ổ: "O",
                                              Õ: "O",
                                              Ṍ: "O",
                                              Ȭ: "O",
                                              Ṏ: "O",
                                              Ō: "O",
                                              Ṑ: "O",
                                              Ṓ: "O",
                                              Ŏ: "O",
                                              Ȯ: "O",
                                              Ȱ: "O",
                                              Ö: "O",
                                              Ȫ: "O",
                                              Ỏ: "O",
                                              Ő: "O",
                                              Ǒ: "O",
                                              Ȍ: "O",
                                              Ȏ: "O",
                                              Ơ: "O",
                                              Ờ: "O",
                                              Ớ: "O",
                                              Ỡ: "O",
                                              Ở: "O",
                                              Ợ: "O",
                                              Ọ: "O",
                                              Ộ: "O",
                                              Ǫ: "O",
                                              Ǭ: "O",
                                              Ø: "O",
                                              Ǿ: "O",
                                              Ɔ: "O",
                                              Ɵ: "O",
                                              Ꝋ: "O",
                                              Ꝍ: "O",
                                              Œ: "OE",
                                              Ƣ: "OI",
                                              Ꝏ: "OO",
                                              Ȣ: "OU",
                                              "Ⓟ": "P",
                                              Ｐ: "P",
                                              Ṕ: "P",
                                              Ṗ: "P",
                                              Ƥ: "P",
                                              Ᵽ: "P",
                                              Ꝑ: "P",
                                              Ꝓ: "P",
                                              Ꝕ: "P",
                                              "Ⓠ": "Q",
                                              Ｑ: "Q",
                                              Ꝗ: "Q",
                                              Ꝙ: "Q",
                                              Ɋ: "Q",
                                              "Ⓡ": "R",
                                              Ｒ: "R",
                                              Ŕ: "R",
                                              Ṙ: "R",
                                              Ř: "R",
                                              Ȑ: "R",
                                              Ȓ: "R",
                                              Ṛ: "R",
                                              Ṝ: "R",
                                              Ŗ: "R",
                                              Ṟ: "R",
                                              Ɍ: "R",
                                              Ɽ: "R",
                                              Ꝛ: "R",
                                              Ꞧ: "R",
                                              Ꞃ: "R",
                                              "Ⓢ": "S",
                                              Ｓ: "S",
                                              ẞ: "S",
                                              Ś: "S",
                                              Ṥ: "S",
                                              Ŝ: "S",
                                              Ṡ: "S",
                                              Š: "S",
                                              Ṧ: "S",
                                              Ṣ: "S",
                                              Ṩ: "S",
                                              Ș: "S",
                                              Ş: "S",
                                              Ȿ: "S",
                                              Ꞩ: "S",
                                              Ꞅ: "S",
                                              "Ⓣ": "T",
                                              Ｔ: "T",
                                              Ṫ: "T",
                                              Ť: "T",
                                              Ṭ: "T",
                                              Ț: "T",
                                              Ţ: "T",
                                              Ṱ: "T",
                                              Ṯ: "T",
                                              Ŧ: "T",
                                              Ƭ: "T",
                                              Ʈ: "T",
                                              Ⱦ: "T",
                                              Ꞇ: "T",
                                              Ꜩ: "TZ",
                                              "Ⓤ": "U",
                                              Ｕ: "U",
                                              Ù: "U",
                                              Ú: "U",
                                              Û: "U",
                                              Ũ: "U",
                                              Ṹ: "U",
                                              Ū: "U",
                                              Ṻ: "U",
                                              Ŭ: "U",
                                              Ü: "U",
                                              Ǜ: "U",
                                              Ǘ: "U",
                                              Ǖ: "U",
                                              Ǚ: "U",
                                              Ủ: "U",
                                              Ů: "U",
                                              Ű: "U",
                                              Ǔ: "U",
                                              Ȕ: "U",
                                              Ȗ: "U",
                                              Ư: "U",
                                              Ừ: "U",
                                              Ứ: "U",
                                              Ữ: "U",
                                              Ử: "U",
                                              Ự: "U",
                                              Ụ: "U",
                                              Ṳ: "U",
                                              Ų: "U",
                                              Ṷ: "U",
                                              Ṵ: "U",
                                              Ʉ: "U",
                                              "Ⓥ": "V",
                                              Ｖ: "V",
                                              Ṽ: "V",
                                              Ṿ: "V",
                                              Ʋ: "V",
                                              Ꝟ: "V",
                                              Ʌ: "V",
                                              Ꝡ: "VY",
                                              "Ⓦ": "W",
                                              Ｗ: "W",
                                              Ẁ: "W",
                                              Ẃ: "W",
                                              Ŵ: "W",
                                              Ẇ: "W",
                                              Ẅ: "W",
                                              Ẉ: "W",
                                              Ⱳ: "W",
                                              "Ⓧ": "X",
                                              Ｘ: "X",
                                              Ẋ: "X",
                                              Ẍ: "X",
                                              "Ⓨ": "Y",
                                              Ｙ: "Y",
                                              Ỳ: "Y",
                                              Ý: "Y",
                                              Ŷ: "Y",
                                              Ỹ: "Y",
                                              Ȳ: "Y",
                                              Ẏ: "Y",
                                              Ÿ: "Y",
                                              Ỷ: "Y",
                                              Ỵ: "Y",
                                              Ƴ: "Y",
                                              Ɏ: "Y",
                                              Ỿ: "Y",
                                              "Ⓩ": "Z",
                                              Ｚ: "Z",
                                              Ź: "Z",
                                              Ẑ: "Z",
                                              Ż: "Z",
                                              Ž: "Z",
                                              Ẓ: "Z",
                                              Ẕ: "Z",
                                              Ƶ: "Z",
                                              Ȥ: "Z",
                                              Ɀ: "Z",
                                              Ⱬ: "Z",
                                              Ꝣ: "Z",
                                              "ⓐ": "a",
                                              ａ: "a",
                                              ẚ: "a",
                                              à: "a",
                                              á: "a",
                                              â: "a",
                                              ầ: "a",
                                              ấ: "a",
                                              ẫ: "a",
                                              ẩ: "a",
                                              ã: "a",
                                              ā: "a",
                                              ă: "a",
                                              ằ: "a",
                                              ắ: "a",
                                              ẵ: "a",
                                              ẳ: "a",
                                              ȧ: "a",
                                              ǡ: "a",
                                              ä: "a",
                                              ǟ: "a",
                                              ả: "a",
                                              å: "a",
                                              ǻ: "a",
                                              ǎ: "a",
                                              ȁ: "a",
                                              ȃ: "a",
                                              ạ: "a",
                                              ậ: "a",
                                              ặ: "a",
                                              ḁ: "a",
                                              ą: "a",
                                              ⱥ: "a",
                                              ɐ: "a",
                                              ꜳ: "aa",
                                              æ: "ae",
                                              ǽ: "ae",
                                              ǣ: "ae",
                                              ꜵ: "ao",
                                              ꜷ: "au",
                                              ꜹ: "av",
                                              ꜻ: "av",
                                              ꜽ: "ay",
                                              "ⓑ": "b",
                                              ｂ: "b",
                                              ḃ: "b",
                                              ḅ: "b",
                                              ḇ: "b",
                                              ƀ: "b",
                                              ƃ: "b",
                                              ɓ: "b",
                                              "ⓒ": "c",
                                              ｃ: "c",
                                              ć: "c",
                                              ĉ: "c",
                                              ċ: "c",
                                              č: "c",
                                              ç: "c",
                                              ḉ: "c",
                                              ƈ: "c",
                                              ȼ: "c",
                                              ꜿ: "c",
                                              ↄ: "c",
                                              "ⓓ": "d",
                                              ｄ: "d",
                                              ḋ: "d",
                                              ď: "d",
                                              ḍ: "d",
                                              ḑ: "d",
                                              ḓ: "d",
                                              ḏ: "d",
                                              đ: "d",
                                              ƌ: "d",
                                              ɖ: "d",
                                              ɗ: "d",
                                              ꝺ: "d",
                                              ǳ: "dz",
                                              ǆ: "dz",
                                              "ⓔ": "e",
                                              ｅ: "e",
                                              è: "e",
                                              é: "e",
                                              ê: "e",
                                              ề: "e",
                                              ế: "e",
                                              ễ: "e",
                                              ể: "e",
                                              ẽ: "e",
                                              ē: "e",
                                              ḕ: "e",
                                              ḗ: "e",
                                              ĕ: "e",
                                              ė: "e",
                                              ë: "e",
                                              ẻ: "e",
                                              ě: "e",
                                              ȅ: "e",
                                              ȇ: "e",
                                              ẹ: "e",
                                              ệ: "e",
                                              ȩ: "e",
                                              ḝ: "e",
                                              ę: "e",
                                              ḙ: "e",
                                              ḛ: "e",
                                              ɇ: "e",
                                              ɛ: "e",
                                              ǝ: "e",
                                              "ⓕ": "f",
                                              ｆ: "f",
                                              ḟ: "f",
                                              ƒ: "f",
                                              ꝼ: "f",
                                              "ⓖ": "g",
                                              ｇ: "g",
                                              ǵ: "g",
                                              ĝ: "g",
                                              ḡ: "g",
                                              ğ: "g",
                                              ġ: "g",
                                              ǧ: "g",
                                              ģ: "g",
                                              ǥ: "g",
                                              ɠ: "g",
                                              ꞡ: "g",
                                              ᵹ: "g",
                                              ꝿ: "g",
                                              "ⓗ": "h",
                                              ｈ: "h",
                                              ĥ: "h",
                                              ḣ: "h",
                                              ḧ: "h",
                                              ȟ: "h",
                                              ḥ: "h",
                                              ḩ: "h",
                                              ḫ: "h",
                                              ẖ: "h",
                                              ħ: "h",
                                              ⱨ: "h",
                                              ⱶ: "h",
                                              ɥ: "h",
                                              ƕ: "hv",
                                              "ⓘ": "i",
                                              ｉ: "i",
                                              ì: "i",
                                              í: "i",
                                              î: "i",
                                              ĩ: "i",
                                              ī: "i",
                                              ĭ: "i",
                                              ï: "i",
                                              ḯ: "i",
                                              ỉ: "i",
                                              ǐ: "i",
                                              ȉ: "i",
                                              ȋ: "i",
                                              ị: "i",
                                              į: "i",
                                              ḭ: "i",
                                              ɨ: "i",
                                              ı: "i",
                                              "ⓙ": "j",
                                              ｊ: "j",
                                              ĵ: "j",
                                              ǰ: "j",
                                              ɉ: "j",
                                              "ⓚ": "k",
                                              ｋ: "k",
                                              ḱ: "k",
                                              ǩ: "k",
                                              ḳ: "k",
                                              ķ: "k",
                                              ḵ: "k",
                                              ƙ: "k",
                                              ⱪ: "k",
                                              ꝁ: "k",
                                              ꝃ: "k",
                                              ꝅ: "k",
                                              ꞣ: "k",
                                              "ⓛ": "l",
                                              ｌ: "l",
                                              ŀ: "l",
                                              ĺ: "l",
                                              ľ: "l",
                                              ḷ: "l",
                                              ḹ: "l",
                                              ļ: "l",
                                              ḽ: "l",
                                              ḻ: "l",
                                              ſ: "l",
                                              ł: "l",
                                              ƚ: "l",
                                              ɫ: "l",
                                              ⱡ: "l",
                                              ꝉ: "l",
                                              ꞁ: "l",
                                              ꝇ: "l",
                                              ǉ: "lj",
                                              "ⓜ": "m",
                                              ｍ: "m",
                                              ḿ: "m",
                                              ṁ: "m",
                                              ṃ: "m",
                                              ɱ: "m",
                                              ɯ: "m",
                                              "ⓝ": "n",
                                              ｎ: "n",
                                              ǹ: "n",
                                              ń: "n",
                                              ñ: "n",
                                              ṅ: "n",
                                              ň: "n",
                                              ṇ: "n",
                                              ņ: "n",
                                              ṋ: "n",
                                              ṉ: "n",
                                              ƞ: "n",
                                              ɲ: "n",
                                              ŉ: "n",
                                              ꞑ: "n",
                                              ꞥ: "n",
                                              ǌ: "nj",
                                              "ⓞ": "o",
                                              ｏ: "o",
                                              ò: "o",
                                              ó: "o",
                                              ô: "o",
                                              ồ: "o",
                                              ố: "o",
                                              ỗ: "o",
                                              ổ: "o",
                                              õ: "o",
                                              ṍ: "o",
                                              ȭ: "o",
                                              ṏ: "o",
                                              ō: "o",
                                              ṑ: "o",
                                              ṓ: "o",
                                              ŏ: "o",
                                              ȯ: "o",
                                              ȱ: "o",
                                              ö: "o",
                                              ȫ: "o",
                                              ỏ: "o",
                                              ő: "o",
                                              ǒ: "o",
                                              ȍ: "o",
                                              ȏ: "o",
                                              ơ: "o",
                                              ờ: "o",
                                              ớ: "o",
                                              ỡ: "o",
                                              ở: "o",
                                              ợ: "o",
                                              ọ: "o",
                                              ộ: "o",
                                              ǫ: "o",
                                              ǭ: "o",
                                              ø: "o",
                                              ǿ: "o",
                                              ɔ: "o",
                                              ꝋ: "o",
                                              ꝍ: "o",
                                              ɵ: "o",
                                              œ: "oe",
                                              ƣ: "oi",
                                              ȣ: "ou",
                                              ꝏ: "oo",
                                              "ⓟ": "p",
                                              ｐ: "p",
                                              ṕ: "p",
                                              ṗ: "p",
                                              ƥ: "p",
                                              ᵽ: "p",
                                              ꝑ: "p",
                                              ꝓ: "p",
                                              ꝕ: "p",
                                              "ⓠ": "q",
                                              ｑ: "q",
                                              ɋ: "q",
                                              ꝗ: "q",
                                              ꝙ: "q",
                                              "ⓡ": "r",
                                              ｒ: "r",
                                              ŕ: "r",
                                              ṙ: "r",
                                              ř: "r",
                                              ȑ: "r",
                                              ȓ: "r",
                                              ṛ: "r",
                                              ṝ: "r",
                                              ŗ: "r",
                                              ṟ: "r",
                                              ɍ: "r",
                                              ɽ: "r",
                                              ꝛ: "r",
                                              ꞧ: "r",
                                              ꞃ: "r",
                                              "ⓢ": "s",
                                              ｓ: "s",
                                              ß: "s",
                                              ś: "s",
                                              ṥ: "s",
                                              ŝ: "s",
                                              ṡ: "s",
                                              š: "s",
                                              ṧ: "s",
                                              ṣ: "s",
                                              ṩ: "s",
                                              ș: "s",
                                              ş: "s",
                                              ȿ: "s",
                                              ꞩ: "s",
                                              ꞅ: "s",
                                              ẛ: "s",
                                              "ⓣ": "t",
                                              ｔ: "t",
                                              ṫ: "t",
                                              ẗ: "t",
                                              ť: "t",
                                              ṭ: "t",
                                              ț: "t",
                                              ţ: "t",
                                              ṱ: "t",
                                              ṯ: "t",
                                              ŧ: "t",
                                              ƭ: "t",
                                              ʈ: "t",
                                              ⱦ: "t",
                                              ꞇ: "t",
                                              ꜩ: "tz",
                                              "ⓤ": "u",
                                              ｕ: "u",
                                              ù: "u",
                                              ú: "u",
                                              û: "u",
                                              ũ: "u",
                                              ṹ: "u",
                                              ū: "u",
                                              ṻ: "u",
                                              ŭ: "u",
                                              ü: "u",
                                              ǜ: "u",
                                              ǘ: "u",
                                              ǖ: "u",
                                              ǚ: "u",
                                              ủ: "u",
                                              ů: "u",
                                              ű: "u",
                                              ǔ: "u",
                                              ȕ: "u",
                                              ȗ: "u",
                                              ư: "u",
                                              ừ: "u",
                                              ứ: "u",
                                              ữ: "u",
                                              ử: "u",
                                              ự: "u",
                                              ụ: "u",
                                              ṳ: "u",
                                              ų: "u",
                                              ṷ: "u",
                                              ṵ: "u",
                                              ʉ: "u",
                                              "ⓥ": "v",
                                              ｖ: "v",
                                              ṽ: "v",
                                              ṿ: "v",
                                              ʋ: "v",
                                              ꝟ: "v",
                                              ʌ: "v",
                                              ꝡ: "vy",
                                              "ⓦ": "w",
                                              ｗ: "w",
                                              ẁ: "w",
                                              ẃ: "w",
                                              ŵ: "w",
                                              ẇ: "w",
                                              ẅ: "w",
                                              ẘ: "w",
                                              ẉ: "w",
                                              ⱳ: "w",
                                              "ⓧ": "x",
                                              ｘ: "x",
                                              ẋ: "x",
                                              ẍ: "x",
                                              "ⓨ": "y",
                                              ｙ: "y",
                                              ỳ: "y",
                                              ý: "y",
                                              ŷ: "y",
                                              ỹ: "y",
                                              ȳ: "y",
                                              ẏ: "y",
                                              ÿ: "y",
                                              ỷ: "y",
                                              ẙ: "y",
                                              ỵ: "y",
                                              ƴ: "y",
                                              ɏ: "y",
                                              ỿ: "y",
                                              "ⓩ": "z",
                                              ｚ: "z",
                                              ź: "z",
                                              ẑ: "z",
                                              ż: "z",
                                              ž: "z",
                                              ẓ: "z",
                                              ẕ: "z",
                                              ƶ: "z",
                                              ȥ: "z",
                                              ɀ: "z",
                                              ⱬ: "z",
                                              ꝣ: "z",
                                              Ά: "Α",
                                              Έ: "Ε",
                                              Ή: "Η",
                                              Ί: "Ι",
                                              Ϊ: "Ι",
                                              Ό: "Ο",
                                              Ύ: "Υ",
                                              Ϋ: "Υ",
                                              Ώ: "Ω",
                                              ά: "α",
                                              έ: "ε",
                                              ή: "η",
                                              ί: "ι",
                                              ϊ: "ι",
                                              ΐ: "ι",
                                              ό: "ο",
                                              ύ: "υ",
                                              ϋ: "υ",
                                              ΰ: "υ",
                                              ώ: "ω",
                                              ς: "σ",
                                              "’": "'",
                                          };
                                      }),
                                      i.define("select2/data/base", ["../utils"], function (e) {
                                          function t(e, i) {
                                              t.__super__.constructor.call(this);
                                          }
                                          return (
                                              e.Extend(t, e.Observable),
                                              (t.prototype.current = function (e) {
                                                  throw new Error("The `current` method must be defined in child classes.");
                                              }),
                                              (t.prototype.query = function (e, t) {
                                                  throw new Error("The `query` method must be defined in child classes.");
                                              }),
                                              (t.prototype.bind = function (e, t) {}),
                                              (t.prototype.destroy = function () {}),
                                              (t.prototype.generateResultId = function (t, i) {
                                                  var n = t.id + "-result-";
                                                  return (n += e.generateChars(4)), null != i.id ? (n += "-" + i.id.toString()) : (n += "-" + e.generateChars(4)), n;
                                              }),
                                              t
                                          );
                                      }),
                                      i.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, i) {
                                          function n(e, t) {
                                              (this.$element = e), (this.options = t), n.__super__.constructor.call(this);
                                          }
                                          return (
                                              t.Extend(n, e),
                                              (n.prototype.current = function (e) {
                                                  var t = [],
                                                      n = this;
                                                  this.$element.find(":selected").each(function () {
                                                      var e = i(this),
                                                          r = n.item(e);
                                                      t.push(r);
                                                  }),
                                                      e(t);
                                              }),
                                              (n.prototype.select = function (e) {
                                                  var t = this;
                                                  if (((e.selected = !0), i(e.element).is("option"))) return (e.element.selected = !0), void this.$element.trigger("change");
                                                  if (this.$element.prop("multiple"))
                                                      this.current(function (n) {
                                                          var r = [];
                                                          (e = [e]).push.apply(e, n);
                                                          for (var s = 0; s < e.length; s++) {
                                                              var a = e[s].id;
                                                              -1 === i.inArray(a, r) && r.push(a);
                                                          }
                                                          t.$element.val(r), t.$element.trigger("change");
                                                      });
                                                  else {
                                                      var n = e.id;
                                                      this.$element.val(n), this.$element.trigger("change");
                                                  }
                                              }),
                                              (n.prototype.unselect = function (e) {
                                                  var t = this;
                                                  if (this.$element.prop("multiple")) {
                                                      if (((e.selected = !1), i(e.element).is("option"))) return (e.element.selected = !1), void this.$element.trigger("change");
                                                      this.current(function (n) {
                                                          for (var r = [], s = 0; s < n.length; s++) {
                                                              var a = n[s].id;
                                                              a !== e.id && -1 === i.inArray(a, r) && r.push(a);
                                                          }
                                                          t.$element.val(r), t.$element.trigger("change");
                                                      });
                                                  }
                                              }),
                                              (n.prototype.bind = function (e, t) {
                                                  var i = this;
                                                  (this.container = e).on("select", function (e) {
                                                      i.select(e.data);
                                                  }),
                                                      e.on("unselect", function (e) {
                                                          i.unselect(e.data);
                                                      });
                                              }),
                                              (n.prototype.destroy = function () {
                                                  this.$element.find("*").each(function () {
                                                      t.RemoveData(this);
                                                  });
                                              }),
                                              (n.prototype.query = function (e, t) {
                                                  var n = [],
                                                      r = this;
                                                  this.$element.children().each(function () {
                                                      var t = i(this);
                                                      if (t.is("option") || t.is("optgroup")) {
                                                          var s = r.item(t),
                                                              a = r.matches(e, s);
                                                          null !== a && n.push(a);
                                                      }
                                                  }),
                                                      t({ results: n });
                                              }),
                                              (n.prototype.addOptions = function (e) {
                                                  t.appendMany(this.$element, e);
                                              }),
                                              (n.prototype.option = function (e) {
                                                  var n;
                                                  e.children ? ((n = document.createElement("optgroup")).label = e.text) : void 0 !== (n = document.createElement("option")).textContent ? (n.textContent = e.text) : (n.innerText = e.text),
                                                      void 0 !== e.id && (n.value = e.id),
                                                      e.disabled && (n.disabled = !0),
                                                      e.selected && (n.selected = !0),
                                                      e.title && (n.title = e.title);
                                                  var r = i(n),
                                                      s = this._normalizeItem(e);
                                                  return (s.element = n), t.StoreData(n, "data", s), r;
                                              }),
                                              (n.prototype.item = function (e) {
                                                  var n = {};
                                                  if (null != (n = t.GetData(e[0], "data"))) return n;
                                                  if (e.is("option")) n = { id: e.val(), text: e.text(), disabled: e.prop("disabled"), selected: e.prop("selected"), title: e.prop("title") };
                                                  else if (e.is("optgroup")) {
                                                      n = { text: e.prop("label"), children: [], title: e.prop("title") };
                                                      for (var r = e.children("option"), s = [], a = 0; a < r.length; a++) {
                                                          var o = i(r[a]),
                                                              l = this.item(o);
                                                          s.push(l);
                                                      }
                                                      n.children = s;
                                                  }
                                                  return ((n = this._normalizeItem(n)).element = e[0]), t.StoreData(e[0], "data", n), n;
                                              }),
                                              (n.prototype._normalizeItem = function (e) {
                                                  return (
                                                      e !== Object(e) && (e = { id: e, text: e }),
                                                      null != (e = i.extend({}, { text: "" }, e)).id && (e.id = e.id.toString()),
                                                      null != e.text && (e.text = e.text.toString()),
                                                      null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)),
                                                      i.extend({}, { selected: !1, disabled: !1 }, e)
                                                  );
                                              }),
                                              (n.prototype.matches = function (e, t) {
                                                  return this.options.get("matcher")(e, t);
                                              }),
                                              n
                                          );
                                      }),
                                      i.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, i) {
                                          function n(e, t) {
                                              (this._dataToConvert = t.get("data") || []), n.__super__.constructor.call(this, e, t);
                                          }
                                          return (
                                              t.Extend(n, e),
                                              (n.prototype.bind = function (e, t) {
                                                  n.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert));
                                              }),
                                              (n.prototype.select = function (e) {
                                                  var t = this.$element.find("option").filter(function (t, i) {
                                                      return i.value == e.id.toString();
                                                  });
                                                  0 === t.length && ((t = this.option(e)), this.addOptions(t)), n.__super__.select.call(this, e);
                                              }),
                                              (n.prototype.convertToOptions = function (e) {
                                                  var n = this,
                                                      r = this.$element.find("option"),
                                                      s = r
                                                          .map(function () {
                                                              return n.item(i(this)).id;
                                                          })
                                                          .get(),
                                                      a = [];
                                                  function o(e) {
                                                      return function () {
                                                          return i(this).val() == e.id;
                                                      };
                                                  }
                                                  for (var l = 0; l < e.length; l++) {
                                                      var u = this._normalizeItem(e[l]);
                                                      if (0 <= i.inArray(u.id, s)) {
                                                          var c = r.filter(o(u)),
                                                              d = this.item(c),
                                                              p = i.extend(!0, {}, u, d),
                                                              h = this.option(p);
                                                          c.replaceWith(h);
                                                      } else {
                                                          var f = this.option(u);
                                                          if (u.children) {
                                                              var m = this.convertToOptions(u.children);
                                                              t.appendMany(f, m);
                                                          }
                                                          a.push(f);
                                                      }
                                                  }
                                                  return a;
                                              }),
                                              n
                                          );
                                      }),
                                      i.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, i) {
                                          function n(e, t) {
                                              (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                                                  null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                                                  n.__super__.constructor.call(this, e, t);
                                          }
                                          return (
                                              t.Extend(n, e),
                                              (n.prototype._applyDefaults = function (e) {
                                                  var t = {
                                                      data: function (e) {
                                                          return i.extend({}, e, { q: e.term });
                                                      },
                                                      transport: function (e, t, n) {
                                                          var r = i.ajax(e);
                                                          return r.then(t), r.fail(n), r;
                                                      },
                                                  };
                                                  return i.extend({}, t, e, !0);
                                              }),
                                              (n.prototype.processResults = function (e) {
                                                  return e;
                                              }),
                                              (n.prototype.query = function (e, t) {
                                                  var n = this;
                                                  null != this._request && (i.isFunction(this._request.abort) && this._request.abort(), (this._request = null));
                                                  var r = i.extend({ type: "GET" }, this.ajaxOptions);
                                                  function s() {
                                                      var s = r.transport(
                                                          r,
                                                          function (r) {
                                                              var s = n.processResults(r, e);
                                                              n.options.get("debug") &&
                                                                  window.console &&
                                                                  console.error &&
                                                                  ((s && s.results && i.isArray(s.results)) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                                                                  t(s);
                                                          },
                                                          function () {
                                                              ("status" in s && (0 === s.status || "0" === s.status)) || n.trigger("results:message", { message: "errorLoading" });
                                                          }
                                                      );
                                                      n._request = s;
                                                  }
                                                  "function" == typeof r.url && (r.url = r.url.call(this.$element, e)),
                                                      "function" == typeof r.data && (r.data = r.data.call(this.$element, e)),
                                                      this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), (this._queryTimeout = window.setTimeout(s, this.ajaxOptions.delay))) : s();
                                              }),
                                              n
                                          );
                                      }),
                                      i.define("select2/data/tags", ["jquery"], function (e) {
                                          function t(t, i, n) {
                                              var r = n.get("tags"),
                                                  s = n.get("createTag");
                                              void 0 !== s && (this.createTag = s);
                                              var a = n.get("insertTag");
                                              if ((void 0 !== a && (this.insertTag = a), t.call(this, i, n), e.isArray(r)))
                                                  for (var o = 0; o < r.length; o++) {
                                                      var l = r[o],
                                                          u = this._normalizeItem(l),
                                                          c = this.option(u);
                                                      this.$element.append(c);
                                                  }
                                          }
                                          return (
                                              (t.prototype.query = function (e, t, i) {
                                                  var n = this;
                                                  this._removeOldTags(),
                                                      null != t.term && null == t.page
                                                          ? e.call(this, t, function e(r, s) {
                                                                for (var a = r.results, o = 0; o < a.length; o++) {
                                                                    var l = a[o],
                                                                        u = null != l.children && !e({ results: l.children }, !0);
                                                                    if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || u) return !s && ((r.data = a), void i(r));
                                                                }
                                                                if (s) return !0;
                                                                var c = n.createTag(t);
                                                                if (null != c) {
                                                                    var d = n.option(c);
                                                                    d.attr("data-select2-tag", !0), n.addOptions([d]), n.insertTag(a, c);
                                                                }
                                                                (r.results = a), i(r);
                                                            })
                                                          : e.call(this, t, i);
                                              }),
                                              (t.prototype.createTag = function (t, i) {
                                                  var n = e.trim(i.term);
                                                  return "" === n ? null : { id: n, text: n };
                                              }),
                                              (t.prototype.insertTag = function (e, t, i) {
                                                  t.unshift(i);
                                              }),
                                              (t.prototype._removeOldTags = function (t) {
                                                  this.$element.find("option[data-select2-tag]").each(function () {
                                                      this.selected || e(this).remove();
                                                  });
                                              }),
                                              t
                                          );
                                      }),
                                      i.define("select2/data/tokenizer", ["jquery"], function (e) {
                                          function t(e, t, i) {
                                              var n = i.get("tokenizer");
                                              void 0 !== n && (this.tokenizer = n), e.call(this, t, i);
                                          }
                                          return (
                                              (t.prototype.bind = function (e, t, i) {
                                                  e.call(this, t, i), (this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field"));
                                              }),
                                              (t.prototype.query = function (t, i, n) {
                                                  var r = this;
                                                  i.term = i.term || "";
                                                  var s = this.tokenizer(i, this.options, function (t) {
                                                      var i = r._normalizeItem(t);
                                                      if (
                                                          !r.$element.find("option").filter(function () {
                                                              return e(this).val() === i.id;
                                                          }).length
                                                      ) {
                                                          var n = r.option(i);
                                                          n.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([n]);
                                                      }
                                                      !(function (e) {
                                                          r.trigger("select", { data: e });
                                                      })(i);
                                                  });
                                                  s.term !== i.term && (this.$search.length && (this.$search.val(s.term), this.$search.trigger("focus")), (i.term = s.term)), t.call(this, i, n);
                                              }),
                                              (t.prototype.tokenizer = function (t, i, n, r) {
                                                  for (
                                                      var s = n.get("tokenSeparators") || [],
                                                          a = i.term,
                                                          o = 0,
                                                          l =
                                                              this.createTag ||
                                                              function (e) {
                                                                  return { id: e.term, text: e.term };
                                                              };
                                                      o < a.length;

                                                  ) {
                                                      var u = a[o];
                                                      if (-1 !== e.inArray(u, s)) {
                                                          var c = a.substr(0, o),
                                                              d = l(e.extend({}, i, { term: c }));
                                                          null != d ? (r(d), (a = a.substr(o + 1) || ""), (o = 0)) : o++;
                                                      } else o++;
                                                  }
                                                  return { term: a };
                                              }),
                                              t
                                          );
                                      }),
                                      i.define("select2/data/minimumInputLength", [], function () {
                                          function e(e, t, i) {
                                              (this.minimumInputLength = i.get("minimumInputLength")), e.call(this, t, i);
                                          }
                                          return (
                                              (e.prototype.query = function (e, t, i) {
                                                  (t.term = t.term || ""),
                                                      t.term.length < this.minimumInputLength
                                                          ? this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: t.term, params: t } })
                                                          : e.call(this, t, i);
                                              }),
                                              e
                                          );
                                      }),
                                      i.define("select2/data/maximumInputLength", [], function () {
                                          function e(e, t, i) {
                                              (this.maximumInputLength = i.get("maximumInputLength")), e.call(this, t, i);
                                          }
                                          return (
                                              (e.prototype.query = function (e, t, i) {
                                                  (t.term = t.term || ""),
                                                      0 < this.maximumInputLength && t.term.length > this.maximumInputLength
                                                          ? this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: t.term, params: t } })
                                                          : e.call(this, t, i);
                                              }),
                                              e
                                          );
                                      }),
                                      i.define("select2/data/maximumSelectionLength", [], function () {
                                          function e(e, t, i) {
                                              (this.maximumSelectionLength = i.get("maximumSelectionLength")), e.call(this, t, i);
                                          }
                                          return (
                                              (e.prototype.bind = function (e, t, i) {
                                                  var n = this;
                                                  e.call(this, t, i),
                                                      t.on("select", function () {
                                                          n._checkIfMaximumSelected();
                                                      });
                                              }),
                                              (e.prototype.query = function (e, t, i) {
                                                  var n = this;
                                                  this._checkIfMaximumSelected(function () {
                                                      e.call(n, t, i);
                                                  });
                                              }),
                                              (e.prototype._checkIfMaximumSelected = function (e, t) {
                                                  var i = this;
                                                  this.current(function (e) {
                                                      var n = null != e ? e.length : 0;
                                                      0 < i.maximumSelectionLength && n >= i.maximumSelectionLength ? i.trigger("results:message", { message: "maximumSelected", args: { maximum: i.maximumSelectionLength } }) : t && t();
                                                  });
                                              }),
                                              e
                                          );
                                      }),
                                      i.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
                                          function i(e, t) {
                                              (this.$element = e), (this.options = t), i.__super__.constructor.call(this);
                                          }
                                          return (
                                              t.Extend(i, t.Observable),
                                              (i.prototype.render = function () {
                                                  var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                                                  return t.attr("dir", this.options.get("dir")), (this.$dropdown = t);
                                              }),
                                              (i.prototype.bind = function () {}),
                                              (i.prototype.position = function (e, t) {}),
                                              (i.prototype.destroy = function () {
                                                  this.$dropdown.remove();
                                              }),
                                              i
                                          );
                                      }),
                                      i.define("select2/dropdown/search", ["jquery", "../utils"], function (e, t) {
                                          function i() {}
                                          return (
                                              (i.prototype.render = function (t) {
                                                  var i = t.call(this),
                                                      n = e(
                                                          '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                                                      );
                                                  return (this.$searchContainer = n), (this.$search = n.find("input")), i.prepend(n), i;
                                              }),
                                              (i.prototype.bind = function (t, i, n) {
                                                  var r = this,
                                                      s = i.id + "-results";
                                                  t.call(this, i, n),
                                                      this.$search.on("keydown", function (e) {
                                                          r.trigger("keypress", e), (r._keyUpPrevented = e.isDefaultPrevented());
                                                      }),
                                                      this.$search.on("input", function (t) {
                                                          e(this).off("keyup");
                                                      }),
                                                      this.$search.on("keyup input", function (e) {
                                                          r.handleSearch(e);
                                                      }),
                                                      i.on("open", function () {
                                                          r.$search.attr("tabindex", 0),
                                                              r.$search.attr("aria-controls", s),
                                                              r.$search.trigger("focus"),
                                                              window.setTimeout(function () {
                                                                  r.$search.trigger("focus");
                                                              }, 0);
                                                      }),
                                                      i.on("close", function () {
                                                          r.$search.attr("tabindex", -1), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.val(""), r.$search.trigger("blur");
                                                      }),
                                                      i.on("focus", function () {
                                                          i.isOpen() || r.$search.trigger("focus");
                                                      }),
                                                      i.on("results:all", function (e) {
                                                          (null != e.query.term && "" !== e.query.term) || (r.showSearch(e) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide"));
                                                      }),
                                                      i.on("results:focus", function (e) {
                                                          e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant");
                                                      });
                                              }),
                                              (i.prototype.handleSearch = function (e) {
                                                  if (!this._keyUpPrevented) {
                                                      var t = this.$search.val();
                                                      this.trigger("query", { term: t });
                                                  }
                                                  this._keyUpPrevented = !1;
                                              }),
                                              (i.prototype.showSearch = function (e, t) {
                                                  return !0;
                                              }),
                                              i
                                          );
                                      }),
                                      i.define("select2/dropdown/hidePlaceholder", [], function () {
                                          function e(e, t, i, n) {
                                              (this.placeholder = this.normalizePlaceholder(i.get("placeholder"))), e.call(this, t, i, n);
                                          }
                                          return (
                                              (e.prototype.append = function (e, t) {
                                                  (t.results = this.removePlaceholder(t.results)), e.call(this, t);
                                              }),
                                              (e.prototype.normalizePlaceholder = function (e, t) {
                                                  return "string" == typeof t && (t = { id: "", text: t }), t;
                                              }),
                                              (e.prototype.removePlaceholder = function (e, t) {
                                                  for (var i = t.slice(0), n = t.length - 1; 0 <= n; n--) {
                                                      var r = t[n];
                                                      this.placeholder.id === r.id && i.splice(n, 1);
                                                  }
                                                  return i;
                                              }),
                                              e
                                          );
                                      }),
                                      i.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
                                          function t(e, t, i, n) {
                                              (this.lastParams = {}), e.call(this, t, i, n), (this.$loadingMore = this.createLoadingMore()), (this.loading = !1);
                                          }
                                          return (
                                              (t.prototype.append = function (e, t) {
                                                  this.$loadingMore.remove(), (this.loading = !1), e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
                                              }),
                                              (t.prototype.bind = function (e, t, i) {
                                                  var n = this;
                                                  e.call(this, t, i),
                                                      t.on("query", function (e) {
                                                          (n.lastParams = e), (n.loading = !0);
                                                      }),
                                                      t.on("query:append", function (e) {
                                                          (n.lastParams = e), (n.loading = !0);
                                                      }),
                                                      this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
                                              }),
                                              (t.prototype.loadMoreIfNeeded = function () {
                                                  var t = e.contains(document.documentElement, this.$loadingMore[0]);
                                                  if (!this.loading && t) {
                                                      var i = this.$results.offset().top + this.$results.outerHeight(!1);
                                                      this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= i + 50 && this.loadMore();
                                                  }
                                              }),
                                              (t.prototype.loadMore = function () {
                                                  this.loading = !0;
                                                  var t = e.extend({}, { page: 1 }, this.lastParams);
                                                  t.page++, this.trigger("query:append", t);
                                              }),
                                              (t.prototype.showLoadingMore = function (e, t) {
                                                  return t.pagination && t.pagination.more;
                                              }),
                                              (t.prototype.createLoadingMore = function () {
                                                  var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                                                      i = this.options.get("translations").get("loadingMore");
                                                  return t.html(i(this.lastParams)), t;
                                              }),
                                              t
                                          );
                                      }),
                                      i.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (e, t) {
                                          function i(t, i, n) {
                                              (this.$dropdownParent = e(n.get("dropdownParent") || document.body)), t.call(this, i, n);
                                          }
                                          return (
                                              (i.prototype.bind = function (e, t, i) {
                                                  var n = this;
                                                  e.call(this, t, i),
                                                      t.on("open", function () {
                                                          n._showDropdown(), n._attachPositioningHandler(t), n._bindContainerResultHandlers(t);
                                                      }),
                                                      t.on("close", function () {
                                                          n._hideDropdown(), n._detachPositioningHandler(t);
                                                      }),
                                                      this.$dropdownContainer.on("mousedown", function (e) {
                                                          e.stopPropagation();
                                                      });
                                              }),
                                              (i.prototype.destroy = function (e) {
                                                  e.call(this), this.$dropdownContainer.remove();
                                              }),
                                              (i.prototype.position = function (e, t, i) {
                                                  t.attr("class", i.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({ position: "absolute", top: -999999 }), (this.$container = i);
                                              }),
                                              (i.prototype.render = function (t) {
                                                  var i = e("<span></span>"),
                                                      n = t.call(this);
                                                  return i.append(n), (this.$dropdownContainer = i);
                                              }),
                                              (i.prototype._hideDropdown = function (e) {
                                                  this.$dropdownContainer.detach();
                                              }),
                                              (i.prototype._bindContainerResultHandlers = function (e, t) {
                                                  if (!this._containerResultsHandlersBound) {
                                                      var i = this;
                                                      t.on("results:all", function () {
                                                          i._positionDropdown(), i._resizeDropdown();
                                                      }),
                                                          t.on("results:append", function () {
                                                              i._positionDropdown(), i._resizeDropdown();
                                                          }),
                                                          t.on("results:message", function () {
                                                              i._positionDropdown(), i._resizeDropdown();
                                                          }),
                                                          t.on("select", function () {
                                                              i._positionDropdown(), i._resizeDropdown();
                                                          }),
                                                          t.on("unselect", function () {
                                                              i._positionDropdown(), i._resizeDropdown();
                                                          }),
                                                          (this._containerResultsHandlersBound = !0);
                                                  }
                                              }),
                                              (i.prototype._attachPositioningHandler = function (i, n) {
                                                  var r = this,
                                                      s = "scroll.select2." + n.id,
                                                      a = "resize.select2." + n.id,
                                                      o = "orientationchange.select2." + n.id,
                                                      l = this.$container.parents().filter(t.hasScroll);
                                                  l.each(function () {
                                                      t.StoreData(this, "select2-scroll-position", { x: e(this).scrollLeft(), y: e(this).scrollTop() });
                                                  }),
                                                      l.on(s, function (i) {
                                                          var n = t.GetData(this, "select2-scroll-position");
                                                          e(this).scrollTop(n.y);
                                                      }),
                                                      e(window).on(s + " " + a + " " + o, function (e) {
                                                          r._positionDropdown(), r._resizeDropdown();
                                                      });
                                              }),
                                              (i.prototype._detachPositioningHandler = function (i, n) {
                                                  var r = "scroll.select2." + n.id,
                                                      s = "resize.select2." + n.id,
                                                      a = "orientationchange.select2." + n.id;
                                                  this.$container.parents().filter(t.hasScroll).off(r), e(window).off(r + " " + s + " " + a);
                                              }),
                                              (i.prototype._positionDropdown = function () {
                                                  var t = e(window),
                                                      i = this.$dropdown.hasClass("select2-dropdown--above"),
                                                      n = this.$dropdown.hasClass("select2-dropdown--below"),
                                                      r = null,
                                                      s = this.$container.offset();
                                                  s.bottom = s.top + this.$container.outerHeight(!1);
                                                  var a = { height: this.$container.outerHeight(!1) };
                                                  (a.top = s.top), (a.bottom = s.top + a.height);
                                                  var o = this.$dropdown.outerHeight(!1),
                                                      l = t.scrollTop(),
                                                      u = t.scrollTop() + t.height(),
                                                      c = l < s.top - o,
                                                      d = u > s.bottom + o,
                                                      p = { left: s.left, top: a.bottom },
                                                      h = this.$dropdownParent;
                                                  "static" === h.css("position") && (h = h.offsetParent());
                                                  var f = { top: 0, left: 0 };
                                                  (e.contains(document.body, h[0]) || h[0].isConnected) && (f = h.offset()),
                                                      (p.top -= f.top),
                                                      (p.left -= f.left),
                                                      i || n || (r = "below"),
                                                      d || !c || i ? !c && d && i && (r = "below") : (r = "above"),
                                                      ("above" == r || (i && "below" !== r)) && (p.top = a.top - f.top - o),
                                                      null != r &&
                                                          (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r),
                                                          this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)),
                                                      this.$dropdownContainer.css(p);
                                              }),
                                              (i.prototype._resizeDropdown = function () {
                                                  var e = { width: this.$container.outerWidth(!1) + "px" };
                                                  this.options.get("dropdownAutoWidth") && ((e.minWidth = e.width), (e.position = "relative"), (e.width = "auto")), this.$dropdown.css(e);
                                              }),
                                              (i.prototype._showDropdown = function (e) {
                                                  this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
                                              }),
                                              i
                                          );
                                      }),
                                      i.define("select2/dropdown/minimumResultsForSearch", [], function () {
                                          function e(e, t, i, n) {
                                              (this.minimumResultsForSearch = i.get("minimumResultsForSearch")), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, i, n);
                                          }
                                          return (
                                              (e.prototype.showSearch = function (e, t) {
                                                  return (
                                                      !(
                                                          (function e(t) {
                                                              for (var i = 0, n = 0; n < t.length; n++) {
                                                                  var r = t[n];
                                                                  r.children ? (i += e(r.children)) : i++;
                                                              }
                                                              return i;
                                                          })(t.data.results) < this.minimumResultsForSearch
                                                      ) && e.call(this, t)
                                                  );
                                              }),
                                              e
                                          );
                                      }),
                                      i.define("select2/dropdown/selectOnClose", ["../utils"], function (e) {
                                          function t() {}
                                          return (
                                              (t.prototype.bind = function (e, t, i) {
                                                  var n = this;
                                                  e.call(this, t, i),
                                                      t.on("close", function (e) {
                                                          n._handleSelectOnClose(e);
                                                      });
                                              }),
                                              (t.prototype._handleSelectOnClose = function (t, i) {
                                                  if (i && null != i.originalSelect2Event) {
                                                      var n = i.originalSelect2Event;
                                                      if ("select" === n._type || "unselect" === n._type) return;
                                                  }
                                                  var r = this.getHighlightedResults();
                                                  if (!(r.length < 1)) {
                                                      var s = e.GetData(r[0], "data");
                                                      (null != s.element && s.element.selected) || (null == s.element && s.selected) || this.trigger("select", { data: s });
                                                  }
                                              }),
                                              t
                                          );
                                      }),
                                      i.define("select2/dropdown/closeOnSelect", [], function () {
                                          function e() {}
                                          return (
                                              (e.prototype.bind = function (e, t, i) {
                                                  var n = this;
                                                  e.call(this, t, i),
                                                      t.on("select", function (e) {
                                                          n._selectTriggered(e);
                                                      }),
                                                      t.on("unselect", function (e) {
                                                          n._selectTriggered(e);
                                                      });
                                              }),
                                              (e.prototype._selectTriggered = function (e, t) {
                                                  var i = t.originalEvent;
                                                  (i && (i.ctrlKey || i.metaKey)) || this.trigger("close", { originalEvent: i, originalSelect2Event: t });
                                              }),
                                              e
                                          );
                                      }),
                                      i.define("select2/i18n/en", [], function () {
                                          return {
                                              errorLoading: function () {
                                                  return "The results could not be loaded.";
                                              },
                                              inputTooLong: function (e) {
                                                  var t = e.input.length - e.maximum,
                                                      i = "Please delete " + t + " character";
                                                  return 1 != t && (i += "s"), i;
                                              },
                                              inputTooShort: function (e) {
                                                  return "Please enter " + (e.minimum - e.input.length) + " or more characters";
                                              },
                                              loadingMore: function () {
                                                  return "Loading more results…";
                                              },
                                              maximumSelected: function (e) {
                                                  var t = "You can only select " + e.maximum + " item";
                                                  return 1 != e.maximum && (t += "s"), t;
                                              },
                                              noResults: function () {
                                                  return "No results found";
                                              },
                                              searching: function () {
                                                  return "Searching…";
                                              },
                                              removeAllItems: function () {
                                                  return "Remove all items";
                                              },
                                          };
                                      }),
                                      i.define(
                                          "select2/defaults",
                                          [
                                              "jquery",
                                              "require",
                                              "./results",
                                              "./selection/single",
                                              "./selection/multiple",
                                              "./selection/placeholder",
                                              "./selection/allowClear",
                                              "./selection/search",
                                              "./selection/eventRelay",
                                              "./utils",
                                              "./translation",
                                              "./diacritics",
                                              "./data/select",
                                              "./data/array",
                                              "./data/ajax",
                                              "./data/tags",
                                              "./data/tokenizer",
                                              "./data/minimumInputLength",
                                              "./data/maximumInputLength",
                                              "./data/maximumSelectionLength",
                                              "./dropdown",
                                              "./dropdown/search",
                                              "./dropdown/hidePlaceholder",
                                              "./dropdown/infiniteScroll",
                                              "./dropdown/attachBody",
                                              "./dropdown/minimumResultsForSearch",
                                              "./dropdown/selectOnClose",
                                              "./dropdown/closeOnSelect",
                                              "./i18n/en",
                                          ],
                                          function (e, t, i, n, r, s, a, o, l, u, c, d, p, h, f, m, v, g, y, b, w, x, S, E, C, T, k, M, P) {
                                              function A() {
                                                  this.reset();
                                              }
                                              return (
                                                  (A.prototype.apply = function (c) {
                                                      if (null == (c = e.extend(!0, {}, this.defaults, c)).dataAdapter) {
                                                          if (
                                                              (null != c.ajax ? (c.dataAdapter = f) : null != c.data ? (c.dataAdapter = h) : (c.dataAdapter = p),
                                                              0 < c.minimumInputLength && (c.dataAdapter = u.Decorate(c.dataAdapter, g)),
                                                              0 < c.maximumInputLength && (c.dataAdapter = u.Decorate(c.dataAdapter, y)),
                                                              0 < c.maximumSelectionLength && (c.dataAdapter = u.Decorate(c.dataAdapter, b)),
                                                              c.tags && (c.dataAdapter = u.Decorate(c.dataAdapter, m)),
                                                              (null == c.tokenSeparators && null == c.tokenizer) || (c.dataAdapter = u.Decorate(c.dataAdapter, v)),
                                                              null != c.query)
                                                          ) {
                                                              var d = t(c.amdBase + "compat/query");
                                                              c.dataAdapter = u.Decorate(c.dataAdapter, d);
                                                          }
                                                          if (null != c.initSelection) {
                                                              var P = t(c.amdBase + "compat/initSelection");
                                                              c.dataAdapter = u.Decorate(c.dataAdapter, P);
                                                          }
                                                      }
                                                      if (
                                                          (null == c.resultsAdapter &&
                                                              ((c.resultsAdapter = i),
                                                              null != c.ajax && (c.resultsAdapter = u.Decorate(c.resultsAdapter, E)),
                                                              null != c.placeholder && (c.resultsAdapter = u.Decorate(c.resultsAdapter, S)),
                                                              c.selectOnClose && (c.resultsAdapter = u.Decorate(c.resultsAdapter, k))),
                                                          null == c.dropdownAdapter)
                                                      ) {
                                                          if (c.multiple) c.dropdownAdapter = w;
                                                          else {
                                                              var A = u.Decorate(w, x);
                                                              c.dropdownAdapter = A;
                                                          }
                                                          if (
                                                              (0 !== c.minimumResultsForSearch && (c.dropdownAdapter = u.Decorate(c.dropdownAdapter, T)),
                                                              c.closeOnSelect && (c.dropdownAdapter = u.Decorate(c.dropdownAdapter, M)),
                                                              null != c.dropdownCssClass || null != c.dropdownCss || null != c.adaptDropdownCssClass)
                                                          ) {
                                                              var $ = t(c.amdBase + "compat/dropdownCss");
                                                              c.dropdownAdapter = u.Decorate(c.dropdownAdapter, $);
                                                          }
                                                          c.dropdownAdapter = u.Decorate(c.dropdownAdapter, C);
                                                      }
                                                      if (null == c.selectionAdapter) {
                                                          if (
                                                              (c.multiple ? (c.selectionAdapter = r) : (c.selectionAdapter = n),
                                                              null != c.placeholder && (c.selectionAdapter = u.Decorate(c.selectionAdapter, s)),
                                                              c.allowClear && (c.selectionAdapter = u.Decorate(c.selectionAdapter, a)),
                                                              c.multiple && (c.selectionAdapter = u.Decorate(c.selectionAdapter, o)),
                                                              null != c.containerCssClass || null != c.containerCss || null != c.adaptContainerCssClass)
                                                          ) {
                                                              var D = t(c.amdBase + "compat/containerCss");
                                                              c.selectionAdapter = u.Decorate(c.selectionAdapter, D);
                                                          }
                                                          c.selectionAdapter = u.Decorate(c.selectionAdapter, l);
                                                      }
                                                      (c.language = this._resolveLanguage(c.language)), c.language.push("en");
                                                      for (var O = [], L = 0; L < c.language.length; L++) {
                                                          var N = c.language[L];
                                                          -1 === O.indexOf(N) && O.push(N);
                                                      }
                                                      return (c.language = O), (c.translations = this._processTranslations(c.language, c.debug)), c;
                                                  }),
                                                  (A.prototype.reset = function () {
                                                      function t(e) {
                                                          return e.replace(/[^\u0000-\u007E]/g, function (e) {
                                                              return d[e] || e;
                                                          });
                                                      }
                                                      this.defaults = {
                                                          amdBase: "./",
                                                          amdLanguageBase: "./i18n/",
                                                          closeOnSelect: !0,
                                                          debug: !1,
                                                          dropdownAutoWidth: !1,
                                                          escapeMarkup: u.escapeMarkup,
                                                          language: {},
                                                          matcher: function i(n, r) {
                                                              if ("" === e.trim(n.term)) return r;
                                                              if (r.children && 0 < r.children.length) {
                                                                  for (var s = e.extend(!0, {}, r), a = r.children.length - 1; 0 <= a; a--) null == i(n, r.children[a]) && s.children.splice(a, 1);
                                                                  return 0 < s.children.length ? s : i(n, s);
                                                              }
                                                              var o = t(r.text).toUpperCase(),
                                                                  l = t(n.term).toUpperCase();
                                                              return -1 < o.indexOf(l) ? r : null;
                                                          },
                                                          minimumInputLength: 0,
                                                          maximumInputLength: 0,
                                                          maximumSelectionLength: 0,
                                                          minimumResultsForSearch: 0,
                                                          selectOnClose: !1,
                                                          scrollAfterSelect: !1,
                                                          sorter: function (e) {
                                                              return e;
                                                          },
                                                          templateResult: function (e) {
                                                              return e.text;
                                                          },
                                                          templateSelection: function (e) {
                                                              return e.text;
                                                          },
                                                          theme: "default",
                                                          width: "resolve",
                                                      };
                                                  }),
                                                  (A.prototype.applyFromElement = function (e, t) {
                                                      var i = e.language,
                                                          n = this.defaults.language,
                                                          r = t.prop("lang"),
                                                          s = t.closest("[lang]").prop("lang"),
                                                          a = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(i), this._resolveLanguage(n), this._resolveLanguage(s));
                                                      return (e.language = a), e;
                                                  }),
                                                  (A.prototype._resolveLanguage = function (t) {
                                                      if (!t) return [];
                                                      if (e.isEmptyObject(t)) return [];
                                                      if (e.isPlainObject(t)) return [t];
                                                      var i;
                                                      i = e.isArray(t) ? t : [t];
                                                      for (var n = [], r = 0; r < i.length; r++)
                                                          if ((n.push(i[r]), "string" == typeof i[r] && 0 < i[r].indexOf("-"))) {
                                                              var s = i[r].split("-")[0];
                                                              n.push(s);
                                                          }
                                                      return n;
                                                  }),
                                                  (A.prototype._processTranslations = function (t, i) {
                                                      for (var n = new c(), r = 0; r < t.length; r++) {
                                                          var s = new c(),
                                                              a = t[r];
                                                          if ("string" == typeof a)
                                                              try {
                                                                  s = c.loadPath(a);
                                                              } catch (t) {
                                                                  try {
                                                                      (a = this.defaults.amdLanguageBase + a), (s = c.loadPath(a));
                                                                  } catch (t) {
                                                                      i && window.console && console.warn && console.warn('Select2: The language file for "' + a + '" could not be automatically loaded. A fallback will be used instead.');
                                                                  }
                                                              }
                                                          else s = e.isPlainObject(a) ? new c(a) : a;
                                                          n.extend(s);
                                                      }
                                                      return n;
                                                  }),
                                                  (A.prototype.set = function (t, i) {
                                                      var n = {};
                                                      n[e.camelCase(t)] = i;
                                                      var r = u._convertData(n);
                                                      e.extend(!0, this.defaults, r);
                                                  }),
                                                  new A()
                                              );
                                          }
                                      ),
                                      i.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (e, t, i, n) {
                                          function r(t, r) {
                                              if (((this.options = t), null != r && this.fromElement(r), null != r && (this.options = i.applyFromElement(this.options, r)), (this.options = i.apply(this.options)), r && r.is("input"))) {
                                                  var s = e(this.get("amdBase") + "compat/inputData");
                                                  this.options.dataAdapter = n.Decorate(this.options.dataAdapter, s);
                                              }
                                          }
                                          return (
                                              (r.prototype.fromElement = function (e) {
                                                  var i = ["select2"];
                                                  null == this.options.multiple && (this.options.multiple = e.prop("multiple")),
                                                      null == this.options.disabled && (this.options.disabled = e.prop("disabled")),
                                                      null == this.options.dir &&
                                                          (e.prop("dir") ? (this.options.dir = e.prop("dir")) : e.closest("[dir]").prop("dir") ? (this.options.dir = e.closest("[dir]").prop("dir")) : (this.options.dir = "ltr")),
                                                      e.prop("disabled", this.options.disabled),
                                                      e.prop("multiple", this.options.multiple),
                                                      n.GetData(e[0], "select2Tags") &&
                                                          (this.options.debug &&
                                                              window.console &&
                                                              console.warn &&
                                                              console.warn(
                                                                  'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                                                              ),
                                                          n.StoreData(e[0], "data", n.GetData(e[0], "select2Tags")),
                                                          n.StoreData(e[0], "tags", !0)),
                                                      n.GetData(e[0], "ajaxUrl") &&
                                                          (this.options.debug &&
                                                              window.console &&
                                                              console.warn &&
                                                              console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                                                          e.attr("ajax--url", n.GetData(e[0], "ajaxUrl")),
                                                          n.StoreData(e[0], "ajax-Url", n.GetData(e[0], "ajaxUrl")));
                                                  var r = {};
                                                  function s(e, t) {
                                                      return t.toUpperCase();
                                                  }
                                                  for (var a = 0; a < e[0].attributes.length; a++) {
                                                      var o = e[0].attributes[a].name,
                                                          l = "data-";
                                                      if (o.substr(0, l.length) == l) {
                                                          var u = o.substring(l.length),
                                                              c = n.GetData(e[0], u);
                                                          r[u.replace(/-([a-z])/g, s)] = c;
                                                      }
                                                  }
                                                  t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (r = t.extend(!0, {}, e[0].dataset, r));
                                                  var d = t.extend(!0, {}, n.GetData(e[0]), r);
                                                  for (var p in (d = n._convertData(d))) -1 < t.inArray(p, i) || (t.isPlainObject(this.options[p]) ? t.extend(this.options[p], d[p]) : (this.options[p] = d[p]));
                                                  return this;
                                              }),
                                              (r.prototype.get = function (e) {
                                                  return this.options[e];
                                              }),
                                              (r.prototype.set = function (e, t) {
                                                  this.options[e] = t;
                                              }),
                                              r
                                          );
                                      }),
                                      i.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (e, t, i, n) {
                                          var r = function (e, n) {
                                              null != i.GetData(e[0], "select2") && i.GetData(e[0], "select2").destroy(),
                                                  (this.$element = e),
                                                  (this.id = this._generateId(e)),
                                                  (n = n || {}),
                                                  (this.options = new t(n, e)),
                                                  r.__super__.constructor.call(this);
                                              var s = e.attr("tabindex") || 0;
                                              i.StoreData(e[0], "old-tabindex", s), e.attr("tabindex", "-1");
                                              var a = this.options.get("dataAdapter");
                                              this.dataAdapter = new a(e, this.options);
                                              var o = this.render();
                                              this._placeContainer(o);
                                              var l = this.options.get("selectionAdapter");
                                              (this.selection = new l(e, this.options)), (this.$selection = this.selection.render()), this.selection.position(this.$selection, o);
                                              var u = this.options.get("dropdownAdapter");
                                              (this.dropdown = new u(e, this.options)), (this.$dropdown = this.dropdown.render()), this.dropdown.position(this.$dropdown, o);
                                              var c = this.options.get("resultsAdapter");
                                              (this.results = new c(e, this.options, this.dataAdapter)), (this.$results = this.results.render()), this.results.position(this.$results, this.$dropdown);
                                              var d = this;
                                              this._bindAdapters(),
                                                  this._registerDomEvents(),
                                                  this._registerDataEvents(),
                                                  this._registerSelectionEvents(),
                                                  this._registerDropdownEvents(),
                                                  this._registerResultsEvents(),
                                                  this._registerEvents(),
                                                  this.dataAdapter.current(function (e) {
                                                      d.trigger("selection:update", { data: e });
                                                  }),
                                                  e.addClass("select2-hidden-accessible"),
                                                  e.attr("aria-hidden", "true"),
                                                  this._syncAttributes(),
                                                  i.StoreData(e[0], "select2", this),
                                                  e.data("select2", this);
                                          };
                                          return (
                                              i.Extend(r, i.Observable),
                                              (r.prototype._generateId = function (e) {
                                                  return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + i.generateChars(2) : i.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
                                              }),
                                              (r.prototype._placeContainer = function (e) {
                                                  e.insertAfter(this.$element);
                                                  var t = this._resolveWidth(this.$element, this.options.get("width"));
                                                  null != t && e.css("width", t);
                                              }),
                                              (r.prototype._resolveWidth = function (e, t) {
                                                  var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                                                  if ("resolve" == t) {
                                                      var n = this._resolveWidth(e, "style");
                                                      return null != n ? n : this._resolveWidth(e, "element");
                                                  }
                                                  if ("element" == t) {
                                                      var r = e.outerWidth(!1);
                                                      return r <= 0 ? "auto" : r + "px";
                                                  }
                                                  if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
                                                  var s = e.attr("style");
                                                  if ("string" != typeof s) return null;
                                                  for (var a = s.split(";"), o = 0, l = a.length; o < l; o += 1) {
                                                      var u = a[o].replace(/\s/g, "").match(i);
                                                      if (null !== u && 1 <= u.length) return u[1];
                                                  }
                                                  return null;
                                              }),
                                              (r.prototype._bindAdapters = function () {
                                                  this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
                                              }),
                                              (r.prototype._registerDomEvents = function () {
                                                  var t = this;
                                                  this.$element.on("change.select2", function () {
                                                      t.dataAdapter.current(function (e) {
                                                          t.trigger("selection:update", { data: e });
                                                      });
                                                  }),
                                                      this.$element.on("focus.select2", function (e) {
                                                          t.trigger("focus", e);
                                                      }),
                                                      (this._syncA = i.bind(this._syncAttributes, this)),
                                                      (this._syncS = i.bind(this._syncSubtree, this)),
                                                      this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                                                  var n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                                                  null != n
                                                      ? ((this._observer = new n(function (i) {
                                                            e.each(i, t._syncA), e.each(i, t._syncS);
                                                        })),
                                                        this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 }))
                                                      : this.$element[0].addEventListener &&
                                                        (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1),
                                                        this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1),
                                                        this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1));
                                              }),
                                              (r.prototype._registerDataEvents = function () {
                                                  var e = this;
                                                  this.dataAdapter.on("*", function (t, i) {
                                                      e.trigger(t, i);
                                                  });
                                              }),
                                              (r.prototype._registerSelectionEvents = function () {
                                                  var t = this,
                                                      i = ["toggle", "focus"];
                                                  this.selection.on("toggle", function () {
                                                      t.toggleDropdown();
                                                  }),
                                                      this.selection.on("focus", function (e) {
                                                          t.focus(e);
                                                      }),
                                                      this.selection.on("*", function (n, r) {
                                                          -1 === e.inArray(n, i) && t.trigger(n, r);
                                                      });
                                              }),
                                              (r.prototype._registerDropdownEvents = function () {
                                                  var e = this;
                                                  this.dropdown.on("*", function (t, i) {
                                                      e.trigger(t, i);
                                                  });
                                              }),
                                              (r.prototype._registerResultsEvents = function () {
                                                  var e = this;
                                                  this.results.on("*", function (t, i) {
                                                      e.trigger(t, i);
                                                  });
                                              }),
                                              (r.prototype._registerEvents = function () {
                                                  var e = this;
                                                  this.on("open", function () {
                                                      e.$container.addClass("select2-container--open");
                                                  }),
                                                      this.on("close", function () {
                                                          e.$container.removeClass("select2-container--open");
                                                      }),
                                                      this.on("enable", function () {
                                                          e.$container.removeClass("select2-container--disabled");
                                                      }),
                                                      this.on("disable", function () {
                                                          e.$container.addClass("select2-container--disabled");
                                                      }),
                                                      this.on("blur", function () {
                                                          e.$container.removeClass("select2-container--focus");
                                                      }),
                                                      this.on("query", function (t) {
                                                          e.isOpen() || e.trigger("open", {}),
                                                              this.dataAdapter.query(t, function (i) {
                                                                  e.trigger("results:all", { data: i, query: t });
                                                              });
                                                      }),
                                                      this.on("query:append", function (t) {
                                                          this.dataAdapter.query(t, function (i) {
                                                              e.trigger("results:append", { data: i, query: t });
                                                          });
                                                      }),
                                                      this.on("keypress", function (t) {
                                                          var i = t.which;
                                                          e.isOpen()
                                                              ? i === n.ESC || i === n.TAB || (i === n.UP && t.altKey)
                                                                  ? (e.close(), t.preventDefault())
                                                                  : i === n.ENTER
                                                                  ? (e.trigger("results:select", {}), t.preventDefault())
                                                                  : i === n.SPACE && t.ctrlKey
                                                                  ? (e.trigger("results:toggle", {}), t.preventDefault())
                                                                  : i === n.UP
                                                                  ? (e.trigger("results:previous", {}), t.preventDefault())
                                                                  : i === n.DOWN && (e.trigger("results:next", {}), t.preventDefault())
                                                              : (i === n.ENTER || i === n.SPACE || (i === n.DOWN && t.altKey)) && (e.open(), t.preventDefault());
                                                      });
                                              }),
                                              (r.prototype._syncAttributes = function () {
                                                  this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
                                              }),
                                              (r.prototype._syncSubtree = function (e, t) {
                                                  var i = !1,
                                                      n = this;
                                                  if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                                                      if (t)
                                                          if (t.addedNodes && 0 < t.addedNodes.length) for (var r = 0; r < t.addedNodes.length; r++) t.addedNodes[r].selected && (i = !0);
                                                          else t.removedNodes && 0 < t.removedNodes.length && (i = !0);
                                                      else i = !0;
                                                      i &&
                                                          this.dataAdapter.current(function (e) {
                                                              n.trigger("selection:update", { data: e });
                                                          });
                                                  }
                                              }),
                                              (r.prototype.trigger = function (e, t) {
                                                  var i = r.__super__.trigger,
                                                      n = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting", clear: "clearing" };
                                                  if ((void 0 === t && (t = {}), e in n)) {
                                                      var s = n[e],
                                                          a = { prevented: !1, name: e, args: t };
                                                      if ((i.call(this, s, a), a.prevented)) return void (t.prevented = !0);
                                                  }
                                                  i.call(this, e, t);
                                              }),
                                              (r.prototype.toggleDropdown = function () {
                                                  this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
                                              }),
                                              (r.prototype.open = function () {
                                                  this.isOpen() || this.trigger("query", {});
                                              }),
                                              (r.prototype.close = function () {
                                                  this.isOpen() && this.trigger("close", {});
                                              }),
                                              (r.prototype.isOpen = function () {
                                                  return this.$container.hasClass("select2-container--open");
                                              }),
                                              (r.prototype.hasFocus = function () {
                                                  return this.$container.hasClass("select2-container--focus");
                                              }),
                                              (r.prototype.focus = function (e) {
                                                  this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
                                              }),
                                              (r.prototype.enable = function (e) {
                                                  this.options.get("debug") &&
                                                      window.console &&
                                                      console.warn &&
                                                      console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                                                      (null != e && 0 !== e.length) || (e = [!0]);
                                                  var t = !e[0];
                                                  this.$element.prop("disabled", t);
                                              }),
                                              (r.prototype.data = function () {
                                                  this.options.get("debug") &&
                                                      0 < arguments.length &&
                                                      window.console &&
                                                      console.warn &&
                                                      console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                                                  var e = [];
                                                  return (
                                                      this.dataAdapter.current(function (t) {
                                                          e = t;
                                                      }),
                                                      e
                                                  );
                                              }),
                                              (r.prototype.val = function (t) {
                                                  if (
                                                      (this.options.get("debug") &&
                                                          window.console &&
                                                          console.warn &&
                                                          console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                                                      null == t || 0 === t.length)
                                                  )
                                                      return this.$element.val();
                                                  var i = t[0];
                                                  e.isArray(i) &&
                                                      (i = e.map(i, function (e) {
                                                          return e.toString();
                                                      })),
                                                      this.$element.val(i).trigger("change");
                                              }),
                                              (r.prototype.destroy = function () {
                                                  this.$container.remove(),
                                                      this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA),
                                                      null != this._observer
                                                          ? (this._observer.disconnect(), (this._observer = null))
                                                          : this.$element[0].removeEventListener &&
                                                            (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1),
                                                            this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1),
                                                            this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)),
                                                      (this._syncA = null),
                                                      (this._syncS = null),
                                                      this.$element.off(".select2"),
                                                      this.$element.attr("tabindex", i.GetData(this.$element[0], "old-tabindex")),
                                                      this.$element.removeClass("select2-hidden-accessible"),
                                                      this.$element.attr("aria-hidden", "false"),
                                                      i.RemoveData(this.$element[0]),
                                                      this.$element.removeData("select2"),
                                                      this.dataAdapter.destroy(),
                                                      this.selection.destroy(),
                                                      this.dropdown.destroy(),
                                                      this.results.destroy(),
                                                      (this.dataAdapter = null),
                                                      (this.selection = null),
                                                      (this.dropdown = null),
                                                      (this.results = null);
                                              }),
                                              (r.prototype.render = function () {
                                                  var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                                                  return (
                                                      t.attr("dir", this.options.get("dir")),
                                                      (this.$container = t),
                                                      this.$container.addClass("select2-container--" + this.options.get("theme")),
                                                      i.StoreData(t[0], "element", this.$element),
                                                      t
                                                  );
                                              }),
                                              r
                                          );
                                      }),
                                      i.define("select2/compat/utils", ["jquery"], function (e) {
                                          return {
                                              syncCssClasses: function (t, i, n) {
                                                  var r,
                                                      s,
                                                      a = [];
                                                  (r = e.trim(t.attr("class"))) &&
                                                      e((r = "" + r).split(/\s+/)).each(function () {
                                                          0 === this.indexOf("select2-") && a.push(this);
                                                      }),
                                                      (r = e.trim(i.attr("class"))) &&
                                                          e((r = "" + r).split(/\s+/)).each(function () {
                                                              0 !== this.indexOf("select2-") && null != (s = n(this)) && a.push(s);
                                                          }),
                                                      t.attr("class", a.join(" "));
                                              },
                                          };
                                      }),
                                      i.define("select2/compat/containerCss", ["jquery", "./utils"], function (e, t) {
                                          function i(e) {
                                              return null;
                                          }
                                          function n() {}
                                          return (
                                              (n.prototype.render = function (n) {
                                                  var r = n.call(this),
                                                      s = this.options.get("containerCssClass") || "";
                                                  e.isFunction(s) && (s = s(this.$element));
                                                  var a = this.options.get("adaptContainerCssClass");
                                                  if (((a = a || i), -1 !== s.indexOf(":all:"))) {
                                                      s = s.replace(":all:", "");
                                                      var o = a;
                                                      a = function (e) {
                                                          var t = o(e);
                                                          return null != t ? t + " " + e : e;
                                                      };
                                                  }
                                                  var l = this.options.get("containerCss") || {};
                                                  return e.isFunction(l) && (l = l(this.$element)), t.syncCssClasses(r, this.$element, a), r.css(l), r.addClass(s), r;
                                              }),
                                              n
                                          );
                                      }),
                                      i.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (e, t) {
                                          function i(e) {
                                              return null;
                                          }
                                          function n() {}
                                          return (
                                              (n.prototype.render = function (n) {
                                                  var r = n.call(this),
                                                      s = this.options.get("dropdownCssClass") || "";
                                                  e.isFunction(s) && (s = s(this.$element));
                                                  var a = this.options.get("adaptDropdownCssClass");
                                                  if (((a = a || i), -1 !== s.indexOf(":all:"))) {
                                                      s = s.replace(":all:", "");
                                                      var o = a;
                                                      a = function (e) {
                                                          var t = o(e);
                                                          return null != t ? t + " " + e : e;
                                                      };
                                                  }
                                                  var l = this.options.get("dropdownCss") || {};
                                                  return e.isFunction(l) && (l = l(this.$element)), t.syncCssClasses(r, this.$element, a), r.css(l), r.addClass(s), r;
                                              }),
                                              n
                                          );
                                      }),
                                      i.define("select2/compat/initSelection", ["jquery"], function (e) {
                                          function t(e, t, i) {
                                              i.get("debug") &&
                                                  window.console &&
                                                  console.warn &&
                                                  console.warn(
                                                      "Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"
                                                  ),
                                                  (this.initSelection = i.get("initSelection")),
                                                  (this._isInitialized = !1),
                                                  e.call(this, t, i);
                                          }
                                          return (
                                              (t.prototype.current = function (t, i) {
                                                  var n = this;
                                                  this._isInitialized
                                                      ? t.call(this, i)
                                                      : this.initSelection.call(null, this.$element, function (t) {
                                                            (n._isInitialized = !0), e.isArray(t) || (t = [t]), i(t);
                                                        });
                                              }),
                                              t
                                          );
                                      }),
                                      i.define("select2/compat/inputData", ["jquery", "../utils"], function (e, t) {
                                          function i(e, t, i) {
                                              (this._currentData = []),
                                                  (this._valueSeparator = i.get("valueSeparator") || ","),
                                                  "hidden" === t.prop("type") &&
                                                      i.get("debug") &&
                                                      console &&
                                                      console.warn &&
                                                      console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),
                                                  e.call(this, t, i);
                                          }
                                          return (
                                              (i.prototype.current = function (t, i) {
                                                  function n(t, i) {
                                                      var r = [];
                                                      return t.selected || -1 !== e.inArray(t.id, i) ? ((t.selected = !0), r.push(t)) : (t.selected = !1), t.children && r.push.apply(r, n(t.children, i)), r;
                                                  }
                                                  for (var r = [], s = 0; s < this._currentData.length; s++) {
                                                      var a = this._currentData[s];
                                                      r.push.apply(r, n(a, this.$element.val().split(this._valueSeparator)));
                                                  }
                                                  i(r);
                                              }),
                                              (i.prototype.select = function (t, i) {
                                                  if (this.options.get("multiple")) {
                                                      var n = this.$element.val();
                                                      (n += this._valueSeparator + i.id), this.$element.val(n), this.$element.trigger("change");
                                                  } else
                                                      this.current(function (t) {
                                                          e.map(t, function (e) {
                                                              e.selected = !1;
                                                          });
                                                      }),
                                                          this.$element.val(i.id),
                                                          this.$element.trigger("change");
                                              }),
                                              (i.prototype.unselect = function (e, t) {
                                                  var i = this;
                                                  (t.selected = !1),
                                                      this.current(function (e) {
                                                          for (var n = [], r = 0; r < e.length; r++) {
                                                              var s = e[r];
                                                              t.id != s.id && n.push(s.id);
                                                          }
                                                          i.$element.val(n.join(i._valueSeparator)), i.$element.trigger("change");
                                                      });
                                              }),
                                              (i.prototype.query = function (e, t, i) {
                                                  for (var n = [], r = 0; r < this._currentData.length; r++) {
                                                      var s = this._currentData[r],
                                                          a = this.matches(t, s);
                                                      null !== a && n.push(a);
                                                  }
                                                  i({ results: n });
                                              }),
                                              (i.prototype.addOptions = function (i, n) {
                                                  var r = e.map(n, function (e) {
                                                      return t.GetData(e[0], "data");
                                                  });
                                                  this._currentData.push.apply(this._currentData, r);
                                              }),
                                              i
                                          );
                                      }),
                                      i.define("select2/compat/matcher", ["jquery"], function (e) {
                                          return function (t) {
                                              return function (i, n) {
                                                  var r = e.extend(!0, {}, n);
                                                  if (null == i.term || "" === e.trim(i.term)) return r;
                                                  if (n.children) {
                                                      for (var s = n.children.length - 1; 0 <= s; s--) {
                                                          var a = n.children[s];
                                                          t(i.term, a.text, a) || r.children.splice(s, 1);
                                                      }
                                                      if (0 < r.children.length) return r;
                                                  }
                                                  return t(i.term, n.text, n) ? r : null;
                                              };
                                          };
                                      }),
                                      i.define("select2/compat/query", [], function () {
                                          function e(e, t, i) {
                                              i.get("debug") &&
                                                  window.console &&
                                                  console.warn &&
                                                  console.warn(
                                                      "Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."
                                                  ),
                                                  e.call(this, t, i);
                                          }
                                          return (
                                              (e.prototype.query = function (e, t, i) {
                                                  (t.callback = i), this.options.get("query").call(null, t);
                                              }),
                                              e
                                          );
                                      }),
                                      i.define("select2/dropdown/attachContainer", [], function () {
                                          function e(e, t, i) {
                                              e.call(this, t, i);
                                          }
                                          return (
                                              (e.prototype.position = function (e, t, i) {
                                                  i.find(".dropdown-wrapper").append(t), t.addClass("select2-dropdown--below"), i.addClass("select2-container--below");
                                              }),
                                              e
                                          );
                                      }),
                                      i.define("select2/dropdown/stopPropagation", [], function () {
                                          function e() {}
                                          return (
                                              (e.prototype.bind = function (e, t, i) {
                                                  e.call(this, t, i),
                                                      this.$dropdown.on(
                                                          [
                                                              "blur",
                                                              "change",
                                                              "click",
                                                              "dblclick",
                                                              "focus",
                                                              "focusin",
                                                              "focusout",
                                                              "input",
                                                              "keydown",
                                                              "keyup",
                                                              "keypress",
                                                              "mousedown",
                                                              "mouseenter",
                                                              "mouseleave",
                                                              "mousemove",
                                                              "mouseover",
                                                              "mouseup",
                                                              "search",
                                                              "touchend",
                                                              "touchstart",
                                                          ].join(" "),
                                                          function (e) {
                                                              e.stopPropagation();
                                                          }
                                                      );
                                              }),
                                              e
                                          );
                                      }),
                                      i.define("select2/selection/stopPropagation", [], function () {
                                          function e() {}
                                          return (
                                              (e.prototype.bind = function (e, t, i) {
                                                  e.call(this, t, i),
                                                      this.$selection.on(
                                                          [
                                                              "blur",
                                                              "change",
                                                              "click",
                                                              "dblclick",
                                                              "focus",
                                                              "focusin",
                                                              "focusout",
                                                              "input",
                                                              "keydown",
                                                              "keyup",
                                                              "keypress",
                                                              "mousedown",
                                                              "mouseenter",
                                                              "mouseleave",
                                                              "mousemove",
                                                              "mouseover",
                                                              "mouseup",
                                                              "search",
                                                              "touchend",
                                                              "touchstart",
                                                          ].join(" "),
                                                          function (e) {
                                                              e.stopPropagation();
                                                          }
                                                      );
                                              }),
                                              e
                                          );
                                      }),
                                      (b = function (e) {
                                          var t,
                                              i,
                                              n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                                              r = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                                              s = Array.prototype.slice;
                                          if (e.event.fixHooks) for (var a = n.length; a; ) e.event.fixHooks[n[--a]] = e.event.mouseHooks;
                                          var o = (e.event.special.mousewheel = {
                                              version: "3.1.12",
                                              setup: function () {
                                                  if (this.addEventListener) for (var t = r.length; t; ) this.addEventListener(r[--t], l, !1);
                                                  else this.onmousewheel = l;
                                                  e.data(this, "mousewheel-line-height", o.getLineHeight(this)), e.data(this, "mousewheel-page-height", o.getPageHeight(this));
                                              },
                                              teardown: function () {
                                                  if (this.removeEventListener) for (var t = r.length; t; ) this.removeEventListener(r[--t], l, !1);
                                                  else this.onmousewheel = null;
                                                  e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height");
                                              },
                                              getLineHeight: function (t) {
                                                  var i = e(t),
                                                      n = i["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                                                  return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16;
                                              },
                                              getPageHeight: function (t) {
                                                  return e(t).height();
                                              },
                                              settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
                                          });
                                          function l(n) {
                                              var r,
                                                  a = n || window.event,
                                                  l = s.call(arguments, 1),
                                                  d = 0,
                                                  p = 0,
                                                  h = 0,
                                                  f = 0,
                                                  m = 0;
                                              if (
                                                  (((n = e.event.fix(a)).type = "mousewheel"),
                                                  "detail" in a && (h = -1 * a.detail),
                                                  "wheelDelta" in a && (h = a.wheelDelta),
                                                  "wheelDeltaY" in a && (h = a.wheelDeltaY),
                                                  "wheelDeltaX" in a && (p = -1 * a.wheelDeltaX),
                                                  "axis" in a && a.axis === a.HORIZONTAL_AXIS && ((p = -1 * h), (h = 0)),
                                                  (d = 0 === h ? p : h),
                                                  "deltaY" in a && (d = h = -1 * a.deltaY),
                                                  "deltaX" in a && ((p = a.deltaX), 0 === h && (d = -1 * p)),
                                                  0 !== h || 0 !== p)
                                              ) {
                                                  if (1 === a.deltaMode) {
                                                      var v = e.data(this, "mousewheel-line-height");
                                                      (d *= v), (h *= v), (p *= v);
                                                  } else if (2 === a.deltaMode) {
                                                      var g = e.data(this, "mousewheel-page-height");
                                                      (d *= g), (h *= g), (p *= g);
                                                  }
                                                  if (
                                                      ((r = Math.max(Math.abs(h), Math.abs(p))),
                                                      (!i || r < i) && c(a, (i = r)) && (i /= 40),
                                                      c(a, r) && ((d /= 40), (p /= 40), (h /= 40)),
                                                      (d = Math[1 <= d ? "floor" : "ceil"](d / i)),
                                                      (p = Math[1 <= p ? "floor" : "ceil"](p / i)),
                                                      (h = Math[1 <= h ? "floor" : "ceil"](h / i)),
                                                      o.settings.normalizeOffset && this.getBoundingClientRect)
                                                  ) {
                                                      var y = this.getBoundingClientRect();
                                                      (f = n.clientX - y.left), (m = n.clientY - y.top);
                                                  }
                                                  return (
                                                      (n.deltaX = p),
                                                      (n.deltaY = h),
                                                      (n.deltaFactor = i),
                                                      (n.offsetX = f),
                                                      (n.offsetY = m),
                                                      (n.deltaMode = 0),
                                                      l.unshift(n, d, p, h),
                                                      t && clearTimeout(t),
                                                      (t = setTimeout(u, 200)),
                                                      (e.event.dispatch || e.event.handle).apply(this, l)
                                                  );
                                              }
                                          }
                                          function u() {
                                              i = null;
                                          }
                                          function c(e, t) {
                                              return o.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0;
                                          }
                                          e.fn.extend({
                                              mousewheel: function (e) {
                                                  return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
                                              },
                                              unmousewheel: function (e) {
                                                  return this.unbind("mousewheel", e);
                                              },
                                          });
                                      }),
                                      "function" == typeof i.define && i.define.amd ? i.define("jquery-mousewheel", ["jquery"], b) : (e.exports = b),
                                      i.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (e, t, i, n, r) {
                                          if (null == e.fn.select2) {
                                              var s = ["open", "close", "destroy"];
                                              e.fn.select2 = function (t) {
                                                  if ("object" == typeof (t = t || {}))
                                                      return (
                                                          this.each(function () {
                                                              var n = e.extend(!0, {}, t);
                                                              new i(e(this), n);
                                                          }),
                                                          this
                                                      );
                                                  if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
                                                  var n,
                                                      a = Array.prototype.slice.call(arguments, 1);
                                                  return (
                                                      this.each(function () {
                                                          var e = r.GetData(this, "select2");
                                                          null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), (n = e[t].apply(e, a));
                                                      }),
                                                      -1 < e.inArray(t, s) ? this : n
                                                  );
                                              };
                                          }
                                          return null == e.fn.select2.defaults && (e.fn.select2.defaults = n), i;
                                      }),
                                      { define: i.define, require: i.require }
                                  );
                              })(),
                              r = i.require("jquery.select2");
                          return (t.fn.select2.amd = i), r;
                      })
                          ? r.apply(t, s)
                          : r) || (e.exports = a);
      }.call(this, i(0)));
  },
  function (e, t, i) {
      "use strict";
      (function (e) {
          var t = i(2),
              n = i(1),
              r = i.n(n);
          e(document).ready(function () {
              e(".burger").click(function () {
                  e(this).toggleClass("is-active"), e(".header-menu-mob").toggle(), e("body,html").toggleClass("overflow"), e(".header").toggleClass("new-bg");
              }),
                  e(".nav-link").click(function () {
                      e(".nav-link.active").removeClass("active"), e(this).addClass("active");
                  }),
                  e(".lang").click(function () {
                      var t = e(this);
                      e(this).toggleClass("active"),
                          e(document).mouseup(function (e) {
                              var i = t;
                              i.is(e.target) || 0 !== i.has(e.target).length || i.removeClass("active");
                          });
                  }),
                  e(".js-init-select").select2(),
                  e(window).width() > 662 &&
                      (e(".header-popup-link").mouseenter(function () {
                          e(".header-popup-item").hide(), e(this).find(".header-popup-item").show();
                      }),
                      e(".header-popup-item").mouseleave(function () {
                          e(this).hide();
                      }),
                      e(".header-popup-link").mouseleave(function () {
                          e(".header-popup-item").hide();
                      })),
                  e(".js-curtain").length > 0 &&
                      e(".js-curtain").click(function () {
                          e(this).next().slideToggle(), e(this).closest(".instruction-item").toggleClass("active");
                      }),
                  e(window).width() < 661 &&
                      (e(".js-open-cat").click(function () {
                          e(".header-popup-mob").addClass("show");
                      }),
                      e(".header-popup-link").click(function () {
                          e(this).children(".header-popup-item").hasClass("show") ? e(".header-popup-item").removeClass("show") : e(this).children(".header-popup-item").addClass("show");
                      }),
                      e(".js-open-cat").click(function () {
                          e(".header").addClass("cat-open");
                      }),
                      e(".cat-close").click(function () {
                          e(".header").removeClass("cat-open");
                      })),
                  e(".cat-close").click(function () {
                      e(".header-popup-mob").removeClass("show");
                  }),
                  e(".sort-links a").click(function (t) {
                      t.preventDefault(), e(".sort-links .active").removeClass("active"), e(this).addClass("active");
                  });
              new t.a(".recommend-slider", {
                  slidesPerView: 5.5,
                  spaceBetween: 38,
                  loop: !0,
                  autoHeight: true,
                  pagination: { el: ".recommend-pagination", clickable: !0 },
                  navigation: { nextEl: ".swiper-recommend-next", prevEl: ".swiper-recommend-prev" },
                  breakpoints: {
                      320: { slidesPerView: 4, spaceBetween: 16, direction: "vertical", pagination: { el: ".swiper-pagination" } },
                      768: { slidesPerView: 3, spaceBetween: 12 },
                      992: { slidesPerView: 4, spaceBetween: 25 },
                      1200: { slidesPerView: 5, spaceBetween: 20 },
                      1400: { slidesPerView: 5, spaceBetween: 38 },
                  },
              });
              if (e(".filter-price").length > 0) {
                  var i = document.querySelector(".filter-price"),
                      n = [document.querySelector(".input-with-keypress-0"), document.querySelector(".input-with-keypress-1")],
                      s = Number(e(".input-with-keypress-0").val()),
                      a = Number(e(".input-with-keypress-1").val());
                  r.a.create(i, {
                      start: [s, a],
                      connect: !0,
                      step: 1,
                      range: { min: [s], max: [a] },
                      format: {
                          from: function (e) {
                              return parseInt(e);
                          },
                          to: function (e) {
                              return parseInt(e);
                          },
                      },
                  }),
                      i.noUiSlider.on("update", function (e, t) {
                          function r(e, t) {
                              var n = [null, null];
                              (n[e] = t), i.noUiSlider.set(n);
                          }
                          (n[t].value = e[t]),
                              n.forEach(function (e, t) {
                                  e.addEventListener("change", function () {
                                      r(t, this.value);
                                  }),
                                      e.addEventListener("keydown", function (e) {
                                          var n,
                                              s = i.noUiSlider.get(),
                                              a = Number(s[t]),
                                              o = i.noUiSlider.steps()[t];
                                          switch (e.which) {
                                              case 13:
                                                  r(t, this.value);
                                                  break;
                                              case 38:
                                                  !1 === (n = o[1]) && (n = 1), null !== n && r(t, a + n);
                                                  break;
                                              case 40:
                                                  !1 === (n = o[0]) && (n = 1), null !== n && r(t, a - n);
                                          }
                                      });
                              });
                      });
              }
              e('.form-input[type="checkbox"]').click(function () {
                  e(this).is(":checked") ? (e(this).closest(".form-label").addClass("checked"), console.log("checked")) : (e(this).closest(".form-label").removeClass("checked"), console.log("not-checked"));
              }),
                  e(".pagination-link").click(function (t) {
                      t.preventDefault(), e(".pagination-link.active").removeClass("active"), e(this).addClass("active");
                  }),
                  e(".filter-mob").length > 0 &&
                      e(".filter-mob").click(function () {
                          e(this).toggleClass("active");
                      }),
                  e(".close-filter").click(function (t) {
                      t.preventDefault(), e(".filter-mob.active").removeClass("active");
                  }),
                  e(document).on("mouseup", function (t) {
                      let i = e(".filter-content");
                      i.is(t.target) || 0 !== i.has(t.target).length || e(".filter-mob.active").removeClass("active");
                  }),
                  e(".scroll-to").on("click", function (t) {
                      t.preventDefault();
                      var i = e(this).attr("href"),
                          n = e(i).offset().top;
                      e("body,html").animate({ scrollTop: n }, 1500);
                  });
              e(".btn-to-top");
              e(window).scroll(function () {
                  e(window).scrollTop() > 300 ? e(".btn-to-top").addClass("show") : e(".btn-to-top").removeClass("show");
              }),
                  e(".btn-to-top").on("click", function (t) {
                      t.preventDefault(), e("html, body").animate({ scrollTop: 0 }, "300");
                  }),
                  e(".filter-item").click(function () {
                      e(".filter-item.active").removeClass("active"), e(this).addClass("active");
                  });
          });
      }.call(this, i(0)));
  },
  function (e, t) {},
]);
//# sourceMappingURL=main.js.map
