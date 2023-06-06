function G(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function $e(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Hn(t) {
  let n, e, r;
  t.length !== 2 ? (n = G, e = (l, s) => G(t(l), s), r = (l, s) => t(l) - s) : (n = t === G || t === $e ? t : Ne, e = t, r = t);
  function i(l, s, u = 0, f = l.length) {
    if (u < f) {
      if (n(s, s) !== 0)
        return f;
      do {
        const h = u + f >>> 1;
        e(l[h], s) < 0 ? u = h + 1 : f = h;
      } while (u < f);
    }
    return u;
  }
  function a(l, s, u = 0, f = l.length) {
    if (u < f) {
      if (n(s, s) !== 0)
        return f;
      do {
        const h = u + f >>> 1;
        e(l[h], s) <= 0 ? u = h + 1 : f = h;
      } while (u < f);
    }
    return u;
  }
  function o(l, s, u = 0, f = l.length) {
    const h = i(l, s, u, f - 1);
    return h > u && r(l[h - 1], s) > -r(l[h], s) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function Ne() {
  return 0;
}
function Se(t) {
  return t === null ? NaN : +t;
}
function* Ee(t, n) {
  if (n === void 0)
    for (let e of t)
      e != null && (e = +e) >= e && (yield e);
  else {
    let e = -1;
    for (let r of t)
      (r = n(r, ++e, t)) != null && (r = +r) >= r && (yield r);
  }
}
const Ce = Hn(G), Te = Ce.right;
Hn(Se).center;
const ze = Te;
function Ft(t, n) {
  let e, r;
  if (n === void 0)
    for (const i of t)
      i != null && (e === void 0 ? i >= i && (e = r = i) : (e > i && (e = i), r < i && (r = i)));
  else {
    let i = -1;
    for (let a of t)
      (a = n(a, ++i, t)) != null && (e === void 0 ? a >= a && (e = r = a) : (e > a && (e = a), r < a && (r = a)));
  }
  return [e, r];
}
function Pe(t = G) {
  if (t === G)
    return On;
  if (typeof t != "function")
    throw new TypeError("compare is not a function");
  return (n, e) => {
    const r = t(n, e);
    return r || r === 0 ? r : (t(e, e) === 0) - (t(n, n) === 0);
  };
}
function On(t, n) {
  return (t == null || !(t >= t)) - (n == null || !(n >= n)) || (t < n ? -1 : t > n ? 1 : 0);
}
const Re = Math.sqrt(50), Le = Math.sqrt(10), Fe = Math.sqrt(2);
function $t(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Re ? 10 : a >= Le ? 5 : a >= Fe ? 2 : 1;
  let l, s, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, l = Math.round(t * u), s = Math.round(n * u), l / u < t && ++l, s / u > n && --s, u = -u) : (u = Math.pow(10, i) * o, l = Math.round(t / u), s = Math.round(n / u), l * u < t && ++l, s * u > n && --s), s < l && 0.5 <= e && e < 2 ? $t(t, n, e * 2) : [l, s, u];
}
function Ie(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0))
    return [];
  if (t === n)
    return [t];
  const r = n < t, [i, a, o] = r ? $t(n, t, e) : $t(t, n, e);
  if (!(a >= i))
    return [];
  const l = a - i + 1, s = new Array(l);
  if (r)
    if (o < 0)
      for (let u = 0; u < l; ++u)
        s[u] = (a - u) / -o;
    else
      for (let u = 0; u < l; ++u)
        s[u] = (a - u) * o;
  else if (o < 0)
    for (let u = 0; u < l; ++u)
      s[u] = (i + u) / -o;
  else
    for (let u = 0; u < l; ++u)
      s[u] = (i + u) * o;
  return s;
}
function Yt(t, n, e) {
  return n = +n, t = +t, e = +e, $t(t, n, e)[2];
}
function qe(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Yt(n, t, e) : Yt(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ht(t, n) {
  let e;
  if (n === void 0)
    for (const r of t)
      r != null && (e < r || e === void 0 && r >= r) && (e = r);
  else {
    let r = -1;
    for (let i of t)
      (i = n(i, ++r, t)) != null && (e < i || e === void 0 && i >= i) && (e = i);
  }
  return e;
}
function jt(t, n) {
  let e;
  if (n === void 0)
    for (const r of t)
      r != null && (e > r || e === void 0 && r >= r) && (e = r);
  else {
    let r = -1;
    for (let i of t)
      (i = n(i, ++r, t)) != null && (e > i || e === void 0 && i >= i) && (e = i);
  }
  return e;
}
function Bn(t, n, e = 0, r = 1 / 0, i) {
  if (n = Math.floor(n), e = Math.floor(Math.max(0, e)), r = Math.floor(Math.min(t.length - 1, r)), !(e <= n && n <= r))
    return t;
  for (i = i === void 0 ? On : Pe(i); r > e; ) {
    if (r - e > 600) {
      const s = r - e + 1, u = n - e + 1, f = Math.log(s), h = 0.5 * Math.exp(2 * f / 3), c = 0.5 * Math.sqrt(f * h * (s - h) / s) * (u - s / 2 < 0 ? -1 : 1), g = Math.max(e, Math.floor(n - u * h / s + c)), x = Math.min(r, Math.floor(n + (s - u) * h / s + c));
      Bn(t, n, g, x, i);
    }
    const a = t[n];
    let o = e, l = r;
    for (ot(t, e, n), i(t[r], a) > 0 && ot(t, e, r); o < l; ) {
      for (ot(t, o, l), ++o, --l; i(t[o], a) < 0; )
        ++o;
      for (; i(t[l], a) > 0; )
        --l;
    }
    i(t[e], a) === 0 ? ot(t, e, l) : (++l, ot(t, l, r)), l <= n && (e = l + 1), n <= l && (r = l - 1);
  }
  return t;
}
function ot(t, n, e) {
  const r = t[n];
  t[n] = t[e], t[e] = r;
}
function Ht(t, n, e) {
  if (t = Float64Array.from(Ee(t, e)), !(!(r = t.length) || isNaN(n = +n))) {
    if (n <= 0 || r < 2)
      return jt(t);
    if (n >= 1)
      return ht(t);
    var r, i = (r - 1) * n, a = Math.floor(i), o = ht(Bn(t, a).subarray(0, a + 1)), l = jt(t.subarray(a + 1));
    return o + (l - o) * (i - a);
  }
}
function Ve(t, n) {
  let e = 0, r = 0;
  if (n === void 0)
    for (let i of t)
      i != null && (i = +i) >= i && (++e, r += i);
  else {
    let i = -1;
    for (let a of t)
      (a = n(a, ++i, t)) != null && (a = +a) >= a && (++e, r += a);
  }
  if (e)
    return r / e;
}
function xn(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
function De(t) {
  return t;
}
var bt = 1, Ot = 2, Wt = 3, st = 4, yn = 1e-6;
function He(t) {
  return "translate(" + t + ",0)";
}
function Oe(t) {
  return "translate(0," + t + ")";
}
function Be(t) {
  return (n) => +t(n);
}
function Xe(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Ye() {
  return !this.__axis;
}
function an(t, n) {
  var e = [], r = null, i = null, a = 6, o = 6, l = 3, s = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === bt || t === st ? -1 : 1, f = t === st || t === Ot ? "x" : "y", h = t === bt || t === Wt ? He : Oe;
  function c(g) {
    var x = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), y = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : De), b = Math.max(a, 0) + l, S = n.range(), _ = +S[0] + s, d = +S[S.length - 1] + s, p = (n.bandwidth ? Xe : Be)(n.copy(), s), m = g.selection ? g.selection() : g, v = m.selectAll(".domain").data([null]), k = m.selectAll(".tick").data(x, n).order(), M = k.exit(), T = k.enter().append("g").attr("class", "tick"), N = k.select("line"), w = k.select("text");
    v = v.merge(v.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), k = k.merge(T), N = N.merge(T.append("line").attr("stroke", "currentColor").attr(f + "2", u * a)), w = w.merge(T.append("text").attr("fill", "currentColor").attr(f, u * b).attr("dy", t === bt ? "0em" : t === Wt ? "0.71em" : "0.32em")), g !== m && (v = v.transition(g), k = k.transition(g), N = N.transition(g), w = w.transition(g), M = M.transition(g).attr("opacity", yn).attr("transform", function(A) {
      return isFinite(A = p(A)) ? h(A + s) : this.getAttribute("transform");
    }), T.attr("opacity", yn).attr("transform", function(A) {
      var $ = this.parentNode.__axis;
      return h(($ && isFinite($ = $(A)) ? $ : p(A)) + s);
    })), M.remove(), v.attr("d", t === st || t === Ot ? o ? "M" + u * o + "," + _ + "H" + s + "V" + d + "H" + u * o : "M" + s + "," + _ + "V" + d : o ? "M" + _ + "," + u * o + "V" + s + "H" + d + "V" + u * o : "M" + _ + "," + s + "H" + d), k.attr("opacity", 1).attr("transform", function(A) {
      return h(p(A) + s);
    }), N.attr(f + "2", u * a), w.attr(f, u * b).text(y), m.filter(Ye).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Ot ? "start" : t === st ? "end" : "middle"), m.each(function() {
      this.__axis = p;
    });
  }
  return c.scale = function(g) {
    return arguments.length ? (n = g, c) : n;
  }, c.ticks = function() {
    return e = Array.from(arguments), c;
  }, c.tickArguments = function(g) {
    return arguments.length ? (e = g == null ? [] : Array.from(g), c) : e.slice();
  }, c.tickValues = function(g) {
    return arguments.length ? (r = g == null ? null : Array.from(g), c) : r && r.slice();
  }, c.tickFormat = function(g) {
    return arguments.length ? (i = g, c) : i;
  }, c.tickSize = function(g) {
    return arguments.length ? (a = o = +g, c) : a;
  }, c.tickSizeInner = function(g) {
    return arguments.length ? (a = +g, c) : a;
  }, c.tickSizeOuter = function(g) {
    return arguments.length ? (o = +g, c) : o;
  }, c.tickPadding = function(g) {
    return arguments.length ? (l = +g, c) : l;
  }, c.offset = function(g) {
    return arguments.length ? (s = +g, c) : s;
  }, c;
}
function je(t) {
  return an(bt, t);
}
function on(t) {
  return an(Wt, t);
}
function Xn(t) {
  return an(st, t);
}
var We = { value: () => {
} };
function ln() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new kt(e);
}
function kt(t) {
  this._ = t;
}
function Ge(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
kt.prototype = ln.prototype = {
  constructor: kt,
  on: function(t, n) {
    var e = this._, r = Ge(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; )
        if ((i = (t = r[a]).type) && (i = Ue(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type)
        e[i] = _n(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = _n(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new kt(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, a; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r)
      a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i)
      r[i].value.apply(n, e);
  }
};
function Ue(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function _n(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = We, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Gt = "http://www.w3.org/1999/xhtml";
const wn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Gt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function It(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), wn.hasOwnProperty(n) ? { space: wn[n], local: t } : t;
}
function Ke(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Gt && n.documentElement.namespaceURI === Gt ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ze(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Yn(t) {
  var n = It(t);
  return (n.local ? Ze : Ke)(n);
}
function Qe() {
}
function sn(t) {
  return t == null ? Qe : function() {
    return this.querySelector(t);
  };
}
function Je(t) {
  typeof t != "function" && (t = sn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, l = r[i] = new Array(o), s, u, f = 0; f < o; ++f)
      (s = a[f]) && (u = t.call(s, s.__data__, f, a)) && ("__data__" in s && (u.__data__ = s.__data__), l[f] = u);
  return new F(r, this._parents);
}
function tr(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function nr() {
  return [];
}
function jn(t) {
  return t == null ? nr : function() {
    return this.querySelectorAll(t);
  };
}
function er(t) {
  return function() {
    return tr(t.apply(this, arguments));
  };
}
function rr(t) {
  typeof t == "function" ? t = er(t) : t = jn(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], l = o.length, s, u = 0; u < l; ++u)
      (s = o[u]) && (r.push(t.call(s, s.__data__, u, o)), i.push(s));
  return new F(r, i);
}
function Wn(t) {
  return function() {
    return this.matches(t);
  };
}
function Gn(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ir = Array.prototype.find;
function ar(t) {
  return function() {
    return ir.call(this.children, t);
  };
}
function or() {
  return this.firstElementChild;
}
function lr(t) {
  return this.select(t == null ? or : ar(typeof t == "function" ? t : Gn(t)));
}
var sr = Array.prototype.filter;
function ur() {
  return Array.from(this.children);
}
function fr(t) {
  return function() {
    return sr.call(this.children, t);
  };
}
function cr(t) {
  return this.selectAll(t == null ? ur : fr(typeof t == "function" ? t : Gn(t)));
}
function hr(t) {
  typeof t != "function" && (t = Wn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, l = r[i] = [], s, u = 0; u < o; ++u)
      (s = a[u]) && t.call(s, s.__data__, u, a) && l.push(s);
  return new F(r, this._parents);
}
function Un(t) {
  return new Array(t.length);
}
function dr() {
  return new F(this._enter || this._groups.map(Un), this._parents);
}
function Nt(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Nt.prototype = {
  constructor: Nt,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function gr(t) {
  return function() {
    return t;
  };
}
function pr(t, n, e, r, i, a) {
  for (var o = 0, l, s = n.length, u = a.length; o < u; ++o)
    (l = n[o]) ? (l.__data__ = a[o], r[o] = l) : e[o] = new Nt(t, a[o]);
  for (; o < s; ++o)
    (l = n[o]) && (i[o] = l);
}
function mr(t, n, e, r, i, a, o) {
  var l, s, u = /* @__PURE__ */ new Map(), f = n.length, h = a.length, c = new Array(f), g;
  for (l = 0; l < f; ++l)
    (s = n[l]) && (c[l] = g = o.call(s, s.__data__, l, n) + "", u.has(g) ? i[l] = s : u.set(g, s));
  for (l = 0; l < h; ++l)
    g = o.call(t, a[l], l, a) + "", (s = u.get(g)) ? (r[l] = s, s.__data__ = a[l], u.delete(g)) : e[l] = new Nt(t, a[l]);
  for (l = 0; l < f; ++l)
    (s = n[l]) && u.get(c[l]) === s && (i[l] = s);
}
function xr(t) {
  return t.__data__;
}
function yr(t, n) {
  if (!arguments.length)
    return Array.from(this, xr);
  var e = n ? mr : pr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = gr(t));
  for (var a = i.length, o = new Array(a), l = new Array(a), s = new Array(a), u = 0; u < a; ++u) {
    var f = r[u], h = i[u], c = h.length, g = _r(t.call(f, f && f.__data__, u, r)), x = g.length, y = l[u] = new Array(x), b = o[u] = new Array(x), S = s[u] = new Array(c);
    e(f, h, y, b, S, g, n);
    for (var _ = 0, d = 0, p, m; _ < x; ++_)
      if (p = y[_]) {
        for (_ >= d && (d = _ + 1); !(m = b[d]) && ++d < x; )
          ;
        p._next = m || null;
      }
  }
  return o = new F(o, r), o._enter = l, o._exit = s, o;
}
function _r(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function wr() {
  return new F(this._exit || this._groups.map(Un), this._parents);
}
function vr(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function br(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), l = new Array(i), s = 0; s < o; ++s)
    for (var u = e[s], f = r[s], h = u.length, c = l[s] = new Array(h), g, x = 0; x < h; ++x)
      (g = u[x] || f[x]) && (c[x] = g);
  for (; s < i; ++s)
    l[s] = e[s];
  return new F(l, this._parents);
}
function kr() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Mr(t) {
  t || (t = Ar);
  function n(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], l = o.length, s = i[a] = new Array(l), u, f = 0; f < l; ++f)
      (u = o[f]) && (s[f] = u);
    s.sort(n);
  }
  return new F(i, this._parents).order();
}
function Ar(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function $r() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Nr() {
  return Array.from(this);
}
function Sr() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o)
        return o;
    }
  return null;
}
function Er() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function Cr() {
  return !this.node();
}
function Tr(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, l; a < o; ++a)
      (l = i[a]) && t.call(l, l.__data__, a, i);
  return this;
}
function zr(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Pr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Rr(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Lr(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Fr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Ir(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function qr(t, n) {
  var e = It(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Pr : zr : typeof n == "function" ? e.local ? Ir : Fr : e.local ? Lr : Rr)(e, n));
}
function Kn(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Vr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Dr(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Hr(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Or(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Vr : typeof n == "function" ? Hr : Dr)(t, n, e ?? "")) : et(this.node(), t);
}
function et(t, n) {
  return t.style.getPropertyValue(n) || Kn(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Br(t) {
  return function() {
    delete this[t];
  };
}
function Xr(t, n) {
  return function() {
    this[t] = n;
  };
}
function Yr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function jr(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Br : typeof n == "function" ? Yr : Xr)(t, n)) : this.node()[t];
}
function Zn(t) {
  return t.trim().split(/^|\s+/);
}
function un(t) {
  return t.classList || new Qn(t);
}
function Qn(t) {
  this._node = t, this._names = Zn(t.getAttribute("class") || "");
}
Qn.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Jn(t, n) {
  for (var e = un(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function te(t, n) {
  for (var e = un(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function Wr(t) {
  return function() {
    Jn(this, t);
  };
}
function Gr(t) {
  return function() {
    te(this, t);
  };
}
function Ur(t, n) {
  return function() {
    (n.apply(this, arguments) ? Jn : te)(this, t);
  };
}
function Kr(t, n) {
  var e = Zn(t + "");
  if (arguments.length < 2) {
    for (var r = un(this.node()), i = -1, a = e.length; ++i < a; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Ur : n ? Wr : Gr)(e, n));
}
function Zr() {
  this.textContent = "";
}
function Qr(t) {
  return function() {
    this.textContent = t;
  };
}
function Jr(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ti(t) {
  return arguments.length ? this.each(t == null ? Zr : (typeof t == "function" ? Jr : Qr)(t)) : this.node().textContent;
}
function ni() {
  this.innerHTML = "";
}
function ei(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ri(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ii(t) {
  return arguments.length ? this.each(t == null ? ni : (typeof t == "function" ? ri : ei)(t)) : this.node().innerHTML;
}
function ai() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function oi() {
  return this.each(ai);
}
function li() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function si() {
  return this.each(li);
}
function ui(t) {
  var n = typeof t == "function" ? t : Yn(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function fi() {
  return null;
}
function ci(t, n) {
  var e = typeof t == "function" ? t : Yn(t), r = n == null ? fi : typeof n == "function" ? n : sn(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function hi() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function di() {
  return this.each(hi);
}
function gi() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function pi() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function mi(t) {
  return this.select(t ? pi : gi);
}
function xi(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function yi(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function _i(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function wi(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function vi(t, n, e) {
  return function() {
    var r = this.__on, i, a = yi(n);
    if (r) {
      for (var o = 0, l = r.length; o < l; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function bi(t, n, e) {
  var r = _i(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var s = 0, u = l.length, f; s < u; ++s)
        for (i = 0, f = l[s]; i < a; ++i)
          if ((o = r[i]).type === f.type && o.name === f.name)
            return f.value;
    }
    return;
  }
  for (l = n ? vi : wi, i = 0; i < a; ++i)
    this.each(l(r[i], n, e));
  return this;
}
function ne(t, n, e) {
  var r = Kn(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function ki(t, n) {
  return function() {
    return ne(this, t, n);
  };
}
function Mi(t, n) {
  return function() {
    return ne(this, t, n.apply(this, arguments));
  };
}
function Ai(t, n) {
  return this.each((typeof n == "function" ? Mi : ki)(t, n));
}
function* $i() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var ee = [null];
function F(t, n) {
  this._groups = t, this._parents = n;
}
function at() {
  return new F([[document.documentElement]], ee);
}
function Ni() {
  return this;
}
F.prototype = at.prototype = {
  constructor: F,
  select: Je,
  selectAll: rr,
  selectChild: lr,
  selectChildren: cr,
  filter: hr,
  data: yr,
  enter: dr,
  exit: wr,
  join: vr,
  merge: br,
  selection: Ni,
  order: kr,
  sort: Mr,
  call: $r,
  nodes: Nr,
  node: Sr,
  size: Er,
  empty: Cr,
  each: Tr,
  attr: qr,
  style: Or,
  property: jr,
  classed: Kr,
  text: ti,
  html: ii,
  raise: oi,
  lower: si,
  append: ui,
  insert: ci,
  remove: di,
  clone: mi,
  datum: xi,
  on: bi,
  dispatch: Ai,
  [Symbol.iterator]: $i
};
function Si(t) {
  return typeof t == "string" ? new F([[document.querySelector(t)]], [document.documentElement]) : new F([[t]], ee);
}
function Ei(t) {
  let n;
  for (; n = t.sourceEvent; )
    t = n;
  return t;
}
function Ci(t, n) {
  if (t = Ei(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
function fn(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function re(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function mt() {
}
var dt = 0.7, St = 1 / dt, nt = "\\s*([+-]?\\d+)\\s*", gt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", H = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ti = /^#([0-9a-f]{3,8})$/, zi = new RegExp(`^rgb\\(${nt},${nt},${nt}\\)$`), Pi = new RegExp(`^rgb\\(${H},${H},${H}\\)$`), Ri = new RegExp(`^rgba\\(${nt},${nt},${nt},${gt}\\)$`), Li = new RegExp(`^rgba\\(${H},${H},${H},${gt}\\)$`), Fi = new RegExp(`^hsl\\(${gt},${H},${H}\\)$`), Ii = new RegExp(`^hsla\\(${gt},${H},${H},${gt}\\)$`), vn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
fn(mt, K, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: bn,
  // Deprecated! Use color.formatHex.
  formatHex: bn,
  formatHex8: qi,
  formatHsl: Vi,
  formatRgb: kn,
  toString: kn
});
function bn() {
  return this.rgb().formatHex();
}
function qi() {
  return this.rgb().formatHex8();
}
function Vi() {
  return ie(this).formatHsl();
}
function kn() {
  return this.rgb().formatRgb();
}
function K(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Ti.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Mn(n) : e === 3 ? new L(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? yt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? yt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = zi.exec(t)) ? new L(n[1], n[2], n[3], 1) : (n = Pi.exec(t)) ? new L(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Ri.exec(t)) ? yt(n[1], n[2], n[3], n[4]) : (n = Li.exec(t)) ? yt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Fi.exec(t)) ? Nn(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ii.exec(t)) ? Nn(n[1], n[2] / 100, n[3] / 100, n[4]) : vn.hasOwnProperty(t) ? Mn(vn[t]) : t === "transparent" ? new L(NaN, NaN, NaN, 0) : null;
}
function Mn(t) {
  return new L(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function yt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new L(t, n, e, r);
}
function Di(t) {
  return t instanceof mt || (t = K(t)), t ? (t = t.rgb(), new L(t.r, t.g, t.b, t.opacity)) : new L();
}
function Ut(t, n, e, r) {
  return arguments.length === 1 ? Di(t) : new L(t, n, e, r ?? 1);
}
function L(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
fn(L, Ut, re(mt, {
  brighter(t) {
    return t = t == null ? St : Math.pow(St, t), new L(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? dt : Math.pow(dt, t), new L(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new L(U(this.r), U(this.g), U(this.b), Et(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: An,
  // Deprecated! Use color.formatHex.
  formatHex: An,
  formatHex8: Hi,
  formatRgb: $n,
  toString: $n
}));
function An() {
  return `#${W(this.r)}${W(this.g)}${W(this.b)}`;
}
function Hi() {
  return `#${W(this.r)}${W(this.g)}${W(this.b)}${W((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function $n() {
  const t = Et(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${U(this.r)}, ${U(this.g)}, ${U(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Et(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function U(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function W(t) {
  return t = U(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Nn(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new V(t, n, e, r);
}
function ie(t) {
  if (t instanceof V)
    return new V(t.h, t.s, t.l, t.opacity);
  if (t instanceof mt || (t = K(t)), !t)
    return new V();
  if (t instanceof V)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, l = a - i, s = (a + i) / 2;
  return l ? (n === a ? o = (e - r) / l + (e < r) * 6 : e === a ? o = (r - n) / l + 2 : o = (n - e) / l + 4, l /= s < 0.5 ? a + i : 2 - a - i, o *= 60) : l = s > 0 && s < 1 ? 0 : o, new V(o, l, s, t.opacity);
}
function Oi(t, n, e, r) {
  return arguments.length === 1 ? ie(t) : new V(t, n, e, r ?? 1);
}
function V(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
fn(V, Oi, re(mt, {
  brighter(t) {
    return t = t == null ? St : Math.pow(St, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? dt : Math.pow(dt, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new L(
      Bt(t >= 240 ? t - 240 : t + 120, i, r),
      Bt(t, i, r),
      Bt(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new V(Sn(this.h), _t(this.s), _t(this.l), Et(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Et(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Sn(this.h)}, ${_t(this.s) * 100}%, ${_t(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Sn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function _t(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Bt(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const cn = (t) => () => t;
function Bi(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Xi(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Yi(t) {
  return (t = +t) == 1 ? ae : function(n, e) {
    return e - n ? Xi(n, e, t) : cn(isNaN(n) ? e : n);
  };
}
function ae(t, n) {
  var e = n - t;
  return e ? Bi(t, e) : cn(isNaN(t) ? n : t);
}
const Ct = function t(n) {
  var e = Yi(n);
  function r(i, a) {
    var o = e((i = Ut(i)).r, (a = Ut(a)).r), l = e(i.g, a.g), s = e(i.b, a.b), u = ae(i.opacity, a.opacity);
    return function(f) {
      return i.r = o(f), i.g = l(f), i.b = s(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function ji(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function Wi(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Gi(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o)
    i[o] = hn(t[o], n[o]);
  for (; o < e; ++o)
    a[o] = n[o];
  return function(l) {
    for (o = 0; o < r; ++o)
      a[o] = i[o](l);
    return a;
  };
}
function Ui(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function q(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Ki(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = hn(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e)
      r[i] = e[i](a);
    return r;
  };
}
var Kt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xt = new RegExp(Kt.source, "g");
function Zi(t) {
  return function() {
    return t;
  };
}
function Qi(t) {
  return function(n) {
    return t(n) + "";
  };
}
function oe(t, n) {
  var e = Kt.lastIndex = Xt.lastIndex = 0, r, i, a, o = -1, l = [], s = [];
  for (t = t + "", n = n + ""; (r = Kt.exec(t)) && (i = Xt.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), l[o] ? l[o] += a : l[++o] = a), (r = r[0]) === (i = i[0]) ? l[o] ? l[o] += i : l[++o] = i : (l[++o] = null, s.push({ i: o, x: q(r, i) })), e = Xt.lastIndex;
  return e < n.length && (a = n.slice(e), l[o] ? l[o] += a : l[++o] = a), l.length < 2 ? s[0] ? Qi(s[0].x) : Zi(n) : (n = s.length, function(u) {
    for (var f = 0, h; f < n; ++f)
      l[(h = s[f]).i] = h.x(u);
    return l.join("");
  });
}
function hn(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? cn(n) : (e === "number" ? q : e === "string" ? (r = K(n)) ? (n = r, Ct) : oe : n instanceof K ? Ct : n instanceof Date ? Ui : Wi(n) ? ji : Array.isArray(n) ? Gi : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Ki : q)(t, n);
}
function Ji(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var En = 180 / Math.PI, Zt = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function le(t, n, e, r, i, a) {
  var o, l, s;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (s = t * e + n * r) && (e -= t * s, r -= n * s), (l = Math.sqrt(e * e + r * r)) && (e /= l, r /= l, s /= l), t * r < n * e && (t = -t, n = -n, s = -s, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * En,
    skewX: Math.atan(s) * En,
    scaleX: o,
    scaleY: l
  };
}
var wt;
function ta(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Zt : le(n.a, n.b, n.c, n.d, n.e, n.f);
}
function na(t) {
  return t == null || (wt || (wt = document.createElementNS("http://www.w3.org/2000/svg", "g")), wt.setAttribute("transform", t), !(t = wt.transform.baseVal.consolidate())) ? Zt : (t = t.matrix, le(t.a, t.b, t.c, t.d, t.e, t.f));
}
function se(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, f, h, c, g, x) {
    if (u !== h || f !== c) {
      var y = g.push("translate(", null, n, null, e);
      x.push({ i: y - 4, x: q(u, h) }, { i: y - 2, x: q(f, c) });
    } else
      (h || c) && g.push("translate(" + h + n + c + e);
  }
  function o(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: q(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function l(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: q(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function s(u, f, h, c, g, x) {
    if (u !== h || f !== c) {
      var y = g.push(i(g) + "scale(", null, ",", null, ")");
      x.push({ i: y - 4, x: q(u, h) }, { i: y - 2, x: q(f, c) });
    } else
      (h !== 1 || c !== 1) && g.push(i(g) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = t(u), f = t(f), a(u.translateX, u.translateY, f.translateX, f.translateY, h, c), o(u.rotate, f.rotate, h, c), l(u.skewX, f.skewX, h, c), s(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(g) {
      for (var x = -1, y = c.length, b; ++x < y; )
        h[(b = c[x]).i] = b.x(g);
      return h.join("");
    };
  };
}
var ea = se(ta, "px, ", "px)", "deg)"), ra = se(na, ", ", ")", ")"), rt = 0, ut = 0, lt = 0, ue = 1e3, Tt, ft, zt = 0, Z = 0, qt = 0, pt = typeof performance == "object" && performance.now ? performance : Date, fe = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function dn() {
  return Z || (fe(ia), Z = pt.now() + qt);
}
function ia() {
  Z = 0;
}
function Pt() {
  this._call = this._time = this._next = null;
}
Pt.prototype = ce.prototype = {
  constructor: Pt,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? dn() : +e) + (n == null ? 0 : +n), !this._next && ft !== this && (ft ? ft._next = this : Tt = this, ft = this), this._call = t, this._time = e, Qt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Qt());
  }
};
function ce(t, n, e) {
  var r = new Pt();
  return r.restart(t, n, e), r;
}
function aa() {
  dn(), ++rt;
  for (var t = Tt, n; t; )
    (n = Z - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --rt;
}
function Cn() {
  Z = (zt = pt.now()) + qt, rt = ut = 0;
  try {
    aa();
  } finally {
    rt = 0, la(), Z = 0;
  }
}
function oa() {
  var t = pt.now(), n = t - zt;
  n > ue && (qt -= n, zt = t);
}
function la() {
  for (var t, n = Tt, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Tt = e);
  ft = t, Qt(r);
}
function Qt(t) {
  if (!rt) {
    ut && (ut = clearTimeout(ut));
    var n = t - Z;
    n > 24 ? (t < 1 / 0 && (ut = setTimeout(Cn, t - pt.now() - qt)), lt && (lt = clearInterval(lt))) : (lt || (zt = pt.now(), lt = setInterval(oa, ue)), rt = 1, fe(Cn));
  }
}
function Tn(t, n, e) {
  var r = new Pt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var sa = ln("start", "end", "cancel", "interrupt"), ua = [], he = 0, zn = 1, Jt = 2, Mt = 3, Pn = 4, tn = 5, At = 6;
function Vt(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o)
    t.__transition = {};
  else if (e in o)
    return;
  fa(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: sa,
    tween: ua,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: he
  });
}
function gn(t, n) {
  var e = D(t, n);
  if (e.state > he)
    throw new Error("too late; already scheduled");
  return e;
}
function O(t, n) {
  var e = D(t, n);
  if (e.state > Mt)
    throw new Error("too late; already running");
  return e;
}
function D(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function fa(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = ce(a, 0, e.time);
  function a(u) {
    e.state = zn, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var f, h, c, g;
    if (e.state !== zn)
      return s();
    for (f in r)
      if (g = r[f], g.name === e.name) {
        if (g.state === Mt)
          return Tn(o);
        g.state === Pn ? (g.state = At, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[f]) : +f < n && (g.state = At, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[f]);
      }
    if (Tn(function() {
      e.state === Mt && (e.state = Pn, e.timer.restart(l, e.delay, e.time), l(u));
    }), e.state = Jt, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Jt) {
      for (e.state = Mt, i = new Array(c = e.tween.length), f = 0, h = -1; f < c; ++f)
        (g = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = g);
      i.length = h + 1;
    }
  }
  function l(u) {
    for (var f = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(s), e.state = tn, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, f);
    e.state === tn && (e.on.call("end", t, t.__data__, e.index, e.group), s());
  }
  function s() {
    e.state = At, e.timer.stop(), delete r[n];
    for (var u in r)
      return;
    delete t.__transition;
  }
}
function ca(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > Jt && r.state < tn, r.state = At, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function ha(t) {
  return this.each(function() {
    ca(this, t);
  });
}
function da(t, n) {
  var e, r;
  return function() {
    var i = O(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, l = r.length; o < l; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function ga(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var a = O(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var l = { name: n, value: e }, s = 0, u = i.length; s < u; ++s)
        if (i[s].name === n) {
          i[s] = l;
          break;
        }
      s === u && i.push(l);
    }
    a.tween = i;
  };
}
function pa(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = D(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? da : ga)(e, t, n));
}
function pn(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = O(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return D(i, r).value[n];
  };
}
function de(t, n) {
  var e;
  return (typeof n == "number" ? q : n instanceof K ? Ct : (e = K(n)) ? (n = e, Ct) : oe)(t, n);
}
function ma(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function xa(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ya(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function _a(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function wa(t, n, e) {
  var r, i, a;
  return function() {
    var o, l = e(this), s;
    return l == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), s = l + "", o === s ? null : o === r && s === i ? a : (i = s, a = n(r = o, l)));
  };
}
function va(t, n, e) {
  var r, i, a;
  return function() {
    var o, l = e(this), s;
    return l == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), s = l + "", o === s ? null : o === r && s === i ? a : (i = s, a = n(r = o, l)));
  };
}
function ba(t, n) {
  var e = It(t), r = e === "transform" ? ra : de;
  return this.attrTween(t, typeof n == "function" ? (e.local ? va : wa)(e, r, pn(this, "attr." + t, n)) : n == null ? (e.local ? xa : ma)(e) : (e.local ? _a : ya)(e, r, n));
}
function ka(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Ma(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Aa(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Ma(t, a)), e;
  }
  return i._value = n, i;
}
function $a(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && ka(t, a)), e;
  }
  return i._value = n, i;
}
function Na(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = It(t);
  return this.tween(e, (r.local ? Aa : $a)(r, n));
}
function Sa(t, n) {
  return function() {
    gn(this, t).delay = +n.apply(this, arguments);
  };
}
function Ea(t, n) {
  return n = +n, function() {
    gn(this, t).delay = n;
  };
}
function Ca(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Sa : Ea)(n, t)) : D(this.node(), n).delay;
}
function Ta(t, n) {
  return function() {
    O(this, t).duration = +n.apply(this, arguments);
  };
}
function za(t, n) {
  return n = +n, function() {
    O(this, t).duration = n;
  };
}
function Pa(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ta : za)(n, t)) : D(this.node(), n).duration;
}
function Ra(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    O(this, t).ease = n;
  };
}
function La(t) {
  var n = this._id;
  return arguments.length ? this.each(Ra(n, t)) : D(this.node(), n).ease;
}
function Fa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    O(this, t).ease = e;
  };
}
function Ia(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Fa(this._id, t));
}
function qa(t) {
  typeof t != "function" && (t = Wn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, l = r[i] = [], s, u = 0; u < o; ++u)
      (s = a[u]) && t.call(s, s.__data__, u, a) && l.push(s);
  return new X(r, this._parents, this._name, this._id);
}
function Va(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), l = 0; l < a; ++l)
    for (var s = n[l], u = e[l], f = s.length, h = o[l] = new Array(f), c, g = 0; g < f; ++g)
      (c = s[g] || u[g]) && (h[g] = c);
  for (; l < r; ++l)
    o[l] = n[l];
  return new X(o, this._parents, this._name, this._id);
}
function Da(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Ha(t, n, e) {
  var r, i, a = Da(n) ? gn : O;
  return function() {
    var o = a(this, t), l = o.on;
    l !== r && (i = (r = l).copy()).on(n, e), o.on = i;
  };
}
function Oa(t, n) {
  var e = this._id;
  return arguments.length < 2 ? D(this.node(), e).on.on(t) : this.each(Ha(e, t, n));
}
function Ba(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function Xa() {
  return this.on("end.remove", Ba(this._id));
}
function Ya(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = sn(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var l = r[o], s = l.length, u = a[o] = new Array(s), f, h, c = 0; c < s; ++c)
      (f = l[c]) && (h = t.call(f, f.__data__, c, l)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, Vt(u[c], n, e, c, u, D(f, e)));
  return new X(a, this._parents, n, e);
}
function ja(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = jn(t));
  for (var r = this._groups, i = r.length, a = [], o = [], l = 0; l < i; ++l)
    for (var s = r[l], u = s.length, f, h = 0; h < u; ++h)
      if (f = s[h]) {
        for (var c = t.call(f, f.__data__, h, s), g, x = D(f, e), y = 0, b = c.length; y < b; ++y)
          (g = c[y]) && Vt(g, n, e, y, c, x);
        a.push(c), o.push(f);
      }
  return new X(a, o, n, e);
}
var Wa = at.prototype.constructor;
function Ga() {
  return new Wa(this._groups, this._parents);
}
function Ua(t, n) {
  var e, r, i;
  return function() {
    var a = et(this, t), o = (this.style.removeProperty(t), et(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function ge(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ka(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = et(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Za(t, n, e) {
  var r, i, a;
  return function() {
    var o = et(this, t), l = e(this), s = l + "";
    return l == null && (s = l = (this.style.removeProperty(t), et(this, t))), o === s ? null : o === r && s === i ? a : (i = s, a = n(r = o, l));
  };
}
function Qa(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, l;
  return function() {
    var s = O(this, t), u = s.on, f = s.value[a] == null ? l || (l = ge(n)) : void 0;
    (u !== e || i !== f) && (r = (e = u).copy()).on(o, i = f), s.on = r;
  };
}
function Ja(t, n, e) {
  var r = (t += "") == "transform" ? ea : de;
  return n == null ? this.styleTween(t, Ua(t, r)).on("end.style." + t, ge(t)) : typeof n == "function" ? this.styleTween(t, Za(t, r, pn(this, "style." + t, n))).each(Qa(this._id, t)) : this.styleTween(t, Ka(t, r, n), e).on("end.style." + t, null);
}
function to(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function no(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && to(t, o, e)), r;
  }
  return a._value = n, a;
}
function eo(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, no(t, n, e ?? ""));
}
function ro(t) {
  return function() {
    this.textContent = t;
  };
}
function io(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function ao(t) {
  return this.tween("text", typeof t == "function" ? io(pn(this, "text", t)) : ro(t == null ? "" : t + ""));
}
function oo(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function lo(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && oo(i)), n;
  }
  return r._value = t, r;
}
function so(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, lo(t));
}
function uo() {
  for (var t = this._name, n = this._id, e = me(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, s, u = 0; u < l; ++u)
      if (s = o[u]) {
        var f = D(s, n);
        Vt(s, t, e, u, o, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new X(r, this._parents, t, e);
}
function fo() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var l = { value: o }, s = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = O(this, r), f = u.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(l), n._.interrupt.push(l), n._.end.push(s)), u.on = n;
    }), i === 0 && a();
  });
}
var co = 0;
function X(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function pe(t) {
  return at().transition(t);
}
function me() {
  return ++co;
}
var B = at.prototype;
X.prototype = pe.prototype = {
  constructor: X,
  select: Ya,
  selectAll: ja,
  selectChild: B.selectChild,
  selectChildren: B.selectChildren,
  filter: qa,
  merge: Va,
  selection: Ga,
  transition: uo,
  call: B.call,
  nodes: B.nodes,
  node: B.node,
  size: B.size,
  empty: B.empty,
  each: B.each,
  on: Oa,
  attr: ba,
  attrTween: Na,
  style: Ja,
  styleTween: eo,
  text: ao,
  textTween: so,
  remove: Xa,
  tween: pa,
  delay: Ca,
  duration: Pa,
  ease: La,
  easeVarying: Ia,
  end: fo,
  [Symbol.iterator]: B[Symbol.iterator]
};
function ho(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var go = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ho
};
function po(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function mo(t) {
  var n, e;
  t instanceof X ? (n = t._id, t = t._name) : (n = me(), (e = go).time = dn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, s, u = 0; u < l; ++u)
      (s = o[u]) && Vt(s, t, n, u, o, e || po(s, n));
  return new X(r, this._parents, t, n);
}
at.prototype.interrupt = ha;
at.prototype.transition = mo;
const nn = Math.PI, en = 2 * nn, j = 1e-6, xo = en - j;
function xe(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function yo(t) {
  let n = Math.floor(t);
  if (!(n >= 0))
    throw new Error(`invalid digits: ${t}`);
  if (n > 15)
    return xe;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class _o {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? xe : yo(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0)
      throw new Error(`negative radius: ${a}`);
    let o = this._x1, l = this._y1, s = r - n, u = i - e, f = o - n, h = l - e, c = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > j)
      if (!(Math.abs(h * s - u * f) > j) || !a)
        this._append`L${this._x1 = n},${this._y1 = e}`;
      else {
        let g = r - o, x = i - l, y = s * s + u * u, b = g * g + x * x, S = Math.sqrt(y), _ = Math.sqrt(c), d = a * Math.tan((nn - Math.acos((y + c - b) / (2 * S * _))) / 2), p = d / _, m = d / S;
        Math.abs(p - 1) > j && this._append`L${n + p * f},${e + p * h}`, this._append`A${a},${a},0,0,${+(h * g > f * x)},${this._x1 = n + m * s},${this._y1 = e + m * u}`;
      }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0)
      throw new Error(`negative radius: ${r}`);
    let l = r * Math.cos(i), s = r * Math.sin(i), u = n + l, f = e + s, h = 1 ^ o, c = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > j || Math.abs(this._y1 - f) > j) && this._append`L${u},${f}`, r && (c < 0 && (c = c % en + en), c > xo ? this._append`A${r},${r},0,1,${h},${n - l},${e - s}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > j && this._append`A${r},${r},0,${+(c >= nn)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function wo(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Rt(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function it(t) {
  return t = Rt(Math.abs(t)), t ? t[1] : NaN;
}
function vo(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, l = t[0], s = 0; i > 0 && l > 0 && (s + l + 1 > r && (l = Math.max(1, r - s)), a.push(e.substring(i -= l, i + l)), !((s += l + 1) > r)); )
      l = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function bo(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var ko = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Lt(t) {
  if (!(n = ko.exec(t)))
    throw new Error("invalid format: " + t);
  var n;
  return new mn({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Lt.prototype = mn.prototype;
function mn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
mn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Mo(t) {
  t:
    for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
      switch (t[e]) {
        case ".":
          r = i = e;
          break;
        case "0":
          r === 0 && (r = e), i = e;
          break;
        default:
          if (!+t[e])
            break t;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var ye;
function Ao(t, n) {
  var e = Rt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1], a = i - (ye = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Rt(t, Math.max(0, n + a - 1))[0];
}
function Rn(t, n) {
  var e = Rt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Ln = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: wo,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Rn(t * 100, n),
  r: Rn,
  s: Ao,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Fn(t) {
  return t;
}
var In = Array.prototype.map, qn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function $o(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Fn : vo(In.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Fn : bo(In.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", l = t.minus === void 0 ? "−" : t.minus + "", s = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Lt(h);
    var c = h.fill, g = h.align, x = h.sign, y = h.symbol, b = h.zero, S = h.width, _ = h.comma, d = h.precision, p = h.trim, m = h.type;
    m === "n" ? (_ = !0, m = "g") : Ln[m] || (d === void 0 && (d = 12), p = !0, m = "g"), (b || c === "0" && g === "=") && (b = !0, c = "0", g = "=");
    var v = y === "$" ? e : y === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", k = y === "$" ? r : /[%p]/.test(m) ? o : "", M = Ln[m], T = /[defgprs%]/.test(m);
    d = d === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d));
    function N(w) {
      var A = v, $ = k, C, P, E;
      if (m === "c")
        $ = M(w) + $, w = "";
      else {
        w = +w;
        var R = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? s : M(Math.abs(w), d), p && (w = Mo(w)), R && +w == 0 && x !== "+" && (R = !1), A = (R ? x === "(" ? x : l : x === "-" || x === "(" ? "" : x) + A, $ = (m === "s" ? qn[8 + ye / 3] : "") + $ + (R && x === "(" ? ")" : ""), T) {
          for (C = -1, P = w.length; ++C < P; )
            if (E = w.charCodeAt(C), 48 > E || E > 57) {
              $ = (E === 46 ? i + w.slice(C + 1) : w.slice(C)) + $, w = w.slice(0, C);
              break;
            }
        }
      }
      _ && !b && (w = n(w, 1 / 0));
      var Y = A.length + w.length + $.length, I = Y < S ? new Array(S - Y + 1).join(c) : "";
      switch (_ && b && (w = n(I + w, I.length ? S - $.length : 1 / 0), I = ""), g) {
        case "<":
          w = A + w + $ + I;
          break;
        case "=":
          w = A + I + w + $;
          break;
        case "^":
          w = I.slice(0, Y = I.length >> 1) + A + w + $ + I.slice(Y);
          break;
        default:
          w = I + A + w + $;
          break;
      }
      return a(w);
    }
    return N.toString = function() {
      return h + "";
    }, N;
  }
  function f(h, c) {
    var g = u((h = Lt(h), h.type = "f", h)), x = Math.max(-8, Math.min(8, Math.floor(it(c) / 3))) * 3, y = Math.pow(10, -x), b = qn[8 + x / 3];
    return function(S) {
      return g(y * S) + b;
    };
  }
  return {
    format: u,
    formatPrefix: f
  };
}
var vt, _e, we;
No({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function No(t) {
  return vt = $o(t), _e = vt.format, we = vt.formatPrefix, vt;
}
function So(t) {
  return Math.max(0, -it(Math.abs(t)));
}
function Eo(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(it(n) / 3))) * 3 - it(Math.abs(t)));
}
function Co(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, it(n) - it(t)) + 1;
}
function To(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function zo(t) {
  return function() {
    return t;
  };
}
function Po(t) {
  return +t;
}
var Vn = [0, 1];
function tt(t) {
  return t;
}
function rn(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : zo(isNaN(n) ? NaN : 0.5);
}
function Ro(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Lo(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = rn(i, r), a = e(o, a)) : (r = rn(r, i), a = e(a, o)), function(l) {
    return a(r(l));
  };
}
function Fo(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = rn(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(l) {
    var s = ze(t, l, 1, r) - 1;
    return a[s](i[s](l));
  };
}
function Io(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function qo() {
  var t = Vn, n = Vn, e = hn, r, i, a, o = tt, l, s, u;
  function f() {
    var c = Math.min(t.length, n.length);
    return o !== tt && (o = Ro(t[0], t[c - 1])), l = c > 2 ? Fo : Lo, s = u = null, h;
  }
  function h(c) {
    return c == null || isNaN(c = +c) ? a : (s || (s = l(t.map(r), n, e)))(r(o(c)));
  }
  return h.invert = function(c) {
    return o(i((u || (u = l(n, t.map(r), q)))(c)));
  }, h.domain = function(c) {
    return arguments.length ? (t = Array.from(c, Po), f()) : t.slice();
  }, h.range = function(c) {
    return arguments.length ? (n = Array.from(c), f()) : n.slice();
  }, h.rangeRound = function(c) {
    return n = Array.from(c), e = Ji, f();
  }, h.clamp = function(c) {
    return arguments.length ? (o = c ? !0 : tt, f()) : o !== tt;
  }, h.interpolate = function(c) {
    return arguments.length ? (e = c, f()) : e;
  }, h.unknown = function(c) {
    return arguments.length ? (a = c, h) : a;
  }, function(c, g) {
    return r = c, i = g, f();
  };
}
function Vo() {
  return qo()(tt, tt);
}
function Do(t, n, e, r) {
  var i = qe(t, n, e), a;
  switch (r = Lt(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Eo(i, o)) && (r.precision = a), we(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Co(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = So(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return _e(r);
}
function Ho(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Ie(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Do(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], l = r[a], s, u, f = 10;
    for (l < o && (u = o, o = l, l = u, u = i, i = a, a = u); f-- > 0; ) {
      if (u = Yt(o, l, e), u === s)
        return r[i] = o, r[a] = l, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, l = Math.ceil(l / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, l = Math.floor(l * u) / u;
      else
        break;
      s = u;
    }
    return t;
  }, t;
}
function Q() {
  var t = Vo();
  return t.copy = function() {
    return Io(t, Q());
  }, To.apply(t, arguments), Ho(t);
}
function J(t) {
  return function() {
    return t;
  };
}
function Oo(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length)
      return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0))
        throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new _o(n);
}
function Bo(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ve(t) {
  this._context = t;
}
ve.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function be(t) {
  return new ve(t);
}
function Xo(t) {
  return t[0];
}
function Yo(t) {
  return t[1];
}
function ke(t, n) {
  var e = J(!0), r = null, i = be, a = null, o = Oo(l);
  t = typeof t == "function" ? t : t === void 0 ? Xo : J(t), n = typeof n == "function" ? n : n === void 0 ? Yo : J(n);
  function l(s) {
    var u, f = (s = Bo(s)).length, h, c = !1, g;
    for (r == null && (a = i(g = o())), u = 0; u <= f; ++u)
      !(u < f && e(h = s[u], u, s)) === c && ((c = !c) ? a.lineStart() : a.lineEnd()), c && a.point(+t(h, u, s), +n(h, u, s));
    if (g)
      return a = null, g + "" || null;
  }
  return l.x = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : J(+s), l) : t;
  }, l.y = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : J(+s), l) : n;
  }, l.defined = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : J(!!s), l) : e;
  }, l.curve = function(s) {
    return arguments.length ? (i = s, r != null && (a = i(r)), l) : i;
  }, l.context = function(s) {
    return arguments.length ? (s == null ? r = a = null : a = i(r = s), l) : r;
  }, l;
}
function Dn(t, n, e) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + n) / 6,
    (t._y0 + 4 * t._y1 + e) / 6
  );
}
function Me(t) {
  this._context = t;
}
Me.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Dn(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        Dn(this, t, n);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
  }
};
function Ae(t) {
  return new Me(t);
}
function ct(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
ct.prototype = {
  constructor: ct,
  scale: function(t) {
    return t === 1 ? this : new ct(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new ct(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
ct.prototype;
function jo() {
  let t, n, e, r, i, a;
  const o = ln("change"), l = (s) => {
    s.attr("class", "accent-slate-600 py-2 sm:py-4"), s.selectAll("label").data([null]).join("label").attr("for", t).attr("class", "pr-2").text(n), s.selectAll("input").data([null]).join("input").attr("type", "range").attr("id", t).attr("min", e).attr("max", r).attr("value", a).on("change", (u) => {
      s.selectAll("output").data([null]).join("output").attr("id", t).text(u.target.value), o.call("change", null, u.target.value);
    }), s.selectAll("output").data([null]).join("output").attr("id", t).attr("class", "pl-2 sm:pl-4").text(a);
  };
  return l.id = function(s) {
    return arguments.length ? (t = s, l) : t;
  }, l.labelText = function(s) {
    return arguments.length ? (n = s, l) : n;
  }, l.min = function(s) {
    return arguments.length ? (e = +s, l) : e;
  }, l.max = function(s) {
    return arguments.length ? (r = +s, l) : r;
  }, l.step = function(s) {
    return arguments.length ? (i = +s, l) : i;
  }, l.value = function(s) {
    return arguments.length ? (a = +s, l) : a;
  }, l.on = function() {
    let s = o.on.apply(o, arguments);
    return s === o ? l : s;
  }, l;
}
function Wo() {
  let t, n, e, r, i, a, o, l = "red", s, u, f, h = "rgb(122, 255, 248, 0.7)", c = 1.5, g = 1, x, y = 15, b = 0, S = 0, _ = !1;
  const d = (p) => {
    const m = p.selectAll("svg.box-plot").data([null]).join("svg").attr("class", "box-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", y);
    let v = Ft(r);
    v[0] = i ?? v[0], v[1] = a ?? v[1];
    const k = Q().domain(v).range([e.left, t - e.right]), M = Ht(r, 0.25), T = Ht(r, 0.5), N = Ht(r, 0.75), w = N - M;
    let A = M - w * 1.5;
    const $ = jt(r);
    A = $ > A ? $ : A;
    let C = N + w * 1.5;
    const P = ht(r);
    C = P < C ? P : C;
    const E = r.filter((z) => z < A || z > C), R = r.reduce((z, xt) => z + xt, 0) / r.length, Y = p.selectAll("div.tooltip").data([null]).join("div").attr("class", "tooltip").style("position", "absolute").style("opacity", 0);
    m.on("mouseover", function(z) {
      const Dt = `
        Minimum: ${A.toFixed(5)}<br>
        25th percentile: ${M.toFixed(5)}<br>
        Median: ${T.toFixed(5)}<br>
        75th percentile: ${N.toFixed(5)}<br>
        Maximum: ${C.toFixed(5)}<br>
        Inter-quartile range: ${w.toFixed(5)}<br>
        Mean: ${R.toFixed(5)}
        `;
      Y.style("opacity", 1).style("border-color", h).html(Dt);
    }).on("mouseout", () => {
      Y.style("opacity", 0);
    }).on("mousemove", function(z) {
      const [xt, Dt] = Ci(z, this);
      Y.style("left", xt + b + "px").style("top", Dt + S + "px");
    });
    const I = E.filter((z) => z < v[1] && z > v[0]);
    m.selectAll("circle").data(I).join("circle").attr("cx", (z) => k(z)).attr("cy", () => n / 2 + (Math.random() * (f / 2) - f / 4)).attr("r", x).attr("fill", h).attr("opacity", g).attr("stroke", "black").attr("stroke-width", c), m.selectAll("rect").data([null]).join("rect").attr("x", k(M)).attr("y", n / 2 - f / 2).attr("width", k(N) - k(M)).attr("height", f).attr("fill", h).attr("stroke", "black").attr("stroke-width", c), m.selectAll("#median").data([null]).join("line").attr("id", "median").attr("x1", k(T)).attr("y1", n / 2 - f / 2).attr("x2", k(T)).attr("y2", n / 2 + f / 2).attr("stroke", "black").attr("stroke-width", c * 2), m.selectAll("#lower-whisker").data([null]).join("line").attr("id", "lower-whisker").attr("x1", k(A)).attr("y1", n / 2).attr("x2", k(M)).attr("y2", n / 2).attr("stroke", "black").attr("stroke-width", c), m.selectAll("#lower-whisker-edge").data([null]).join("line").attr("id", "lower-whisker-edge").attr("x1", k(A)).attr("y1", n / 2 - f / 4).attr("x2", k(A)).attr("y2", n / 2 + f / 4).attr("stroke", "black").attr("stroke-width", c), m.selectAll("#upper-whisker").data([null]).join("line").attr("id", "upper-whisker").attr("x1", k(N)).attr("y1", n / 2).attr("x2", k(C)).attr("y2", n / 2).attr("stroke", "black").attr("stroke-width", c), m.selectAll("#upper-whisker-edge").data([null]).join("line").attr("id", "upper-whisker-edge").attr("x1", k(C)).attr("y1", n / 2 - f / 4).attr("x2", k(C)).attr("y2", n / 2 + f / 4).attr("stroke", "black").attr("stroke-width", c), _ || (m.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${n - e.bottom})`).call(on(k)), s && m.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", n - e.bottom / 3).text(s).style("font-size", y * (3 / 4))), o !== void 0 && m.selectAll(".vLines").data(o).join("line").attr("class", "vLines").attr("x1", (z) => k(z)).attr("y1", n / 2 - f / 2).attr("x2", (z) => k(z)).attr("y2", n / 2 + f / 2).attr("stroke", l).attr("stroke-width", 1.5), u && m.selectAll(".title").data([null]).join("text").attr("class", "title").text(u).attr("text-anchor", "middle").attr("x", t / 2).attr("y", e.top / 2);
  };
  return d.width = function(p) {
    return arguments.length ? (t = +p, d) : t;
  }, d.height = function(p) {
    return arguments.length ? (n = +p, d) : n;
  }, d.margin = function(p) {
    return arguments.length ? (e = p, d) : e;
  }, d.data = function(p) {
    return arguments.length ? (r = p, d) : r;
  }, d.xMin = function(p) {
    return arguments.length ? (i = +p, d) : i;
  }, d.xMax = function(p) {
    return arguments.length ? (a = +p, d) : a;
  }, d.vLines = function(p) {
    return arguments.length ? (o = p, d) : o;
  }, d.vLineColor = function(p) {
    return arguments.length ? (l = p, d) : l;
  }, d.xLabel = function(p) {
    return arguments.length ? (s = p, d) : s;
  }, d.title = function(p) {
    return arguments.length ? (u = p, d) : u;
  }, d.boxWidth = function(p) {
    return arguments.length ? (f = +p, d) : f;
  }, d.color = function(p) {
    return arguments.length ? (h = p, d) : h;
  }, d.strokeWidth = function(p) {
    return arguments.length ? (c = +p, d) : c;
  }, d.opacity = function(p) {
    return arguments.length ? (g = +p, d) : g;
  }, d.radius = function(p) {
    return arguments.length ? (x = +p, d) : x;
  }, d.fontSize = function(p) {
    return arguments.length ? (y = +p, d) : y;
  }, d.hoverOffsetX = function(p) {
    return arguments.length ? (b = +p, d) : b;
  }, d.hoverOffsetY = function(p) {
    return arguments.length ? (S = +p, d) : S;
  }, d.removeAxis = function(p) {
    return arguments.length ? (_ = p, d) : _;
  }, d;
}
function Go() {
  let t, n, e, r, i, a, o, l, s, u, f = "red", h = 40, c, g = "rgb(122, 255, 248, 0.7)", x = 1, y, b, S = 15;
  const _ = (m) => (v) => Math.abs(v /= m) <= 1 ? 0.75 * (1 - v * v) / m : 0, d = (m, v, k) => v.map((M) => [M, Ve(k, (T) => m(M - T))]), p = (m) => {
    const v = m.selectAll("svg.density-plot").data([null]).join("svg").attr("class", "density-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", S);
    let k = Ft(r);
    k[0] = i ?? k[0], k[1] = a ?? k[1];
    const M = Q().domain(k).range([e.left, t - e.right]), T = M.ticks(h), N = d(_(c), T, r), w = s ?? Math.max(...N.map((E) => E[1])), A = Q().domain([0, w]).range([n - e.bottom, e.top]);
    N[0][1] !== 0 && N.unshift([N[0][0], 0]), N[N.length - 1][1] !== 0 && N.push([N[N.length - 1][0], 0]);
    const $ = ke().curve(Ae).x((E) => M(E[0])).y((E) => A(E[1])), C = pe().duration(1e3);
    let P = v.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id", "color-gradient");
    if (y && b && b.length === y.length + 1) {
      P.append("stop").attr("offset", "0%").attr("stop-color", b[0]);
      for (let E = 0; E < y.length; E++) {
        let R = ((y[E] - k[0]) / (k[1] - k[0]) * 100).toFixed(1);
        R < 0 && (R = 0), R > 100 && (R = 100), P.append("stop").attr("offset", `${R}%`).attr("stop-color", b[E]), P.append("stop").attr("offset", `${R}%`).attr("stop-color", b[E + 1]);
      }
      P.append("stop").attr("offset", "100%").attr("stop-color", b[b.length - 1]);
    } else
      P.append("stop").attr("offset", "100%").attr("stop-color", g);
    v.selectAll("path").data([null]).join(
      (E) => E.append("path").attr("stroke", "black").attr("stroke-width", 1.5).attr("stroke-linejoin", "round").attr("opacity", x).attr("d", $(N)).style("fill", "url(#color-gradient)"),
      (E) => E.call(
        (R) => R.transition(C).attr("d", $(N))
      ),
      (E) => E.remove()
    ), v.selectAll(".y-axis").data([null]).join("g").attr("class", "y-axis").attr("transform", `translate(${e.left},0)`).call(Xn(A)), v.selectAll(".y-axis-label").data([null]).join("text").attr("class", "y-axis-label").text("Density →").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("x", -e.top).attr("y", e.left / 3).style("font-size", S * (3 / 4)), v.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${n - e.bottom})`).call(on(M)), v.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", n - e.bottom / 3).text(o).style("font-size", S * (3 / 4)), u !== void 0 && v.selectAll(".vLines").data(u).join("line").attr("class", "vLines").attr("x1", (E) => M(E)).attr("y1", A(0)).attr("x2", (E) => M(E)).attr("y2", A(w)).attr("stroke", f).attr("stroke-width", 1.5).attr("stroke-linejoin", "round").attr("opacity", x), v.selectAll(".title").data([null]).join("text").attr("class", "title").text(l).attr("text-anchor", "middle").attr("x", t / 2).attr("y", e.top / 2);
  };
  return p.width = function(m) {
    return arguments.length ? (t = +m, p) : t;
  }, p.height = function(m) {
    return arguments.length ? (n = +m, p) : n;
  }, p.margin = function(m) {
    return arguments.length ? (e = m, p) : e;
  }, p.data = function(m) {
    return arguments.length ? (r = m, p) : r;
  }, p.xMin = function(m) {
    return arguments.length ? (i = +m, p) : i;
  }, p.xMax = function(m) {
    return arguments.length ? (a = +m, p) : a;
  }, p.xLabel = function(m) {
    return arguments.length ? (o = m, p) : o;
  }, p.title = function(m) {
    return arguments.length ? (l = m, p) : l;
  }, p.yMax = function(m) {
    return arguments.length ? (s = +m, p) : s;
  }, p.vLines = function(m) {
    return arguments.length ? (u = m, p) : u;
  }, p.vLineColor = function(m) {
    return arguments.length ? (f = m, p) : f;
  }, p.numBins = function(m) {
    return arguments.length ? (h = +m, p) : h;
  }, p.bandwidth = function(m) {
    return arguments.length ? (c = +m, p) : c;
  }, p.color = function(m) {
    return arguments.length ? (g = m, p) : g;
  }, p.opacity = function(m) {
    return arguments.length ? (x = +m, p) : x;
  }, p.cutoffs = function(m) {
    return arguments.length ? (y = m, p) : y;
  }, p.cutoffColors = function(m) {
    return arguments.length ? (b = m, p) : b;
  }, p.fontSize = function(m) {
    return arguments.length ? (S = +m, p) : S;
  }, p;
}
function Uo(t, n) {
  const e = [], r = 1e-3 * (Math.max(...n) - Math.min(...n)), i = Math.max(...n) - Math.min(...n);
  for (let a = 0; a < t; a++) {
    const o = Math.log10(r) + (Math.log10(i) - Math.log10(r)) * a / (t - 1);
    e.push(Math.pow(10, o));
  }
  return e;
}
function Ko() {
  let t, n, e, r, i, a, o, l, s = "rgb(122, 255, 248, 0.7)", u = 1.5, f = 1, h = 3, c = 1.5, g = 15, x = 15, y = !1, b;
  const S = (d, p) => {
    const m = new Float64Array(d.length), v = p ** 2, k = 1e-3;
    let M = null, T = null;
    const N = (w, A) => {
      let $ = M;
      for (; $; ) {
        const C = $.index;
        if (v - k > (d[C] - w) ** 2 + (m[C] - A) ** 2)
          return !0;
        $ = $.next;
      }
      return !1;
    };
    for (const w of xn(d.length).sort((A, $) => d[A] - d[$])) {
      for (; M && d[M.index] < d[w] - v; )
        M = M.next;
      if (N(d[w], m[w] = 0)) {
        let $ = M;
        m[w] = 1 / 0;
        do {
          const C = $.index;
          let P = m[C] + Math.sqrt(v - (d[C] - d[w]) ** 2);
          P < m[w] && !N(d[w], P) && (m[w] = P), $ = $.next;
        } while ($);
      }
      const A = { index: w, next: null };
      M === null ? M = T = A : T = T.next = A;
    }
    return m;
  }, _ = (d) => {
    const p = d.selectAll("svg.beeswarm-plot").data([null]).join("svg").attr("class", "beeswarm-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", x);
    let m = Ft(r);
    m[0] = i ?? m[0], m[1] = a ?? m[1];
    const v = Q().domain(m).range([e.left, t - e.right]), k = S(r.map((M) => v(M)), h * 2 + c).map((M) => M + e.top + g);
    p.selectAll("g.marker").data(xn(r.length)).join("g").attr("class", "marker").attr("transform", (M) => `translate(${v(r[M])}, ${k[M]})`).each(function(M) {
      const T = Si(this);
      if (T.append("circle").attr("r", h).attr("fill", s).attr("opacity", f).attr("stroke", "black").attr("stroke-width", u).append("title").text((N) => `Value:
${r[N].toFixed(5)}`), b) {
        const N = 7 * b.length;
        T.append("text").attr("x", h - N / 2 + 5).attr("y", h + 20).attr("font-size", "12px").text(b[M]);
      }
    }), y || (p.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${e.top})`).call(je(v)), o && p.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", e.top * (2 / 3)).text(o).style("font-size", x * (3 / 4)));
  };
  return _.width = function(d) {
    return arguments.length ? (t = +d, _) : t;
  }, _.height = function(d) {
    return arguments.length ? (n = +d, _) : n;
  }, _.margin = function(d) {
    return arguments.length ? (e = d, _) : e;
  }, _.data = function(d) {
    return arguments.length ? (r = d, _) : r;
  }, _.xMin = function(d) {
    return arguments.length ? (i = +d, _) : i;
  }, _.xMax = function(d) {
    return arguments.length ? (a = +d, _) : a;
  }, _.xLabel = function(d) {
    return arguments.length ? (o = d, _) : o;
  }, _.title = function(d) {
    return arguments.length ? (l = d, _) : l;
  }, _.color = function(d) {
    return arguments.length ? (s = d, _) : s;
  }, _.strokeWidth = function(d) {
    return arguments.length ? (u = +d, _) : u;
  }, _.opacity = function(d) {
    return arguments.length ? (f = +d, _) : f;
  }, _.radius = function(d) {
    return arguments.length ? (h = +d, _) : h;
  }, _.markerPadding = function(d) {
    return arguments.length ? (c = +d, _) : c;
  }, _.plotPadding = function(d) {
    return arguments.length ? (g = +d, _) : g;
  }, _.fontSize = function(d) {
    return arguments.length ? (x = +d, _) : x;
  }, _.removeAxis = function(d) {
    return arguments.length ? (y = d, _) : y;
  }, _.markerText = function(d) {
    return arguments.length ? (b = d, _) : b;
  }, _;
}
function Zo() {
  let t, n, e, r, i, a, o, l, s;
  const u = (f) => {
    const c = t / 3.1, g = t - c, x = (g - s.left - s.right) / 10, y = x / 2, b = 2, S = 15, _ = Math.floor(10 * 10 * (e / 100)), d = 10 * 10 * (e / 100) - _, p = Array.from({ length: 10 * 10 }, (A, $) => ({ index: $, color: $ < _ ? r : i })), m = "m62.096 8.5859c-5.208 0-9.424 4.2191-9.424 9.4261 0.001 5.203 4.217 9.424 9.424 9.424 5.202 0 9.422-4.221 9.422-9.424 0-5.208-4.22-9.4261-9.422-9.4261zm-10.41 21.268c-6.672 0-12.131 5.407-12.131 12.07v29.23c0 2.275 1.791 4.123 4.07 4.123 2.28 0 4.127-1.846 4.127-4.123v-26.355h2.102s0.048 68.811 0.048 73.331c0 3.05 2.478 5.53 5.532 5.53 3.052 0 5.525-2.48 5.525-5.53v-42.581h2.27v42.581c0 3.05 2.473 5.53 5.531 5.53 3.054 0 5.549-2.48 5.549-5.53v-73.331h2.127v26.355c0 2.275 1.85 4.123 4.126 4.123 2.28 0 4.073-1.846 4.073-4.123v-29.23c0-6.663-5.463-12.07-12.129-12.07h-20.82z", v = f.selectAll("svg#population-prevalence-plot").data([null]).join("svg").attr("id", "population-prevalence-plot").attr("width", t).attr("height", n).attr("viewBox", `0 0 ${t} ${g}`).attr("font-family", "sans-serif");
    v.selectAll(".population-border").data([null]).join("rect").attr("class", "population-border").attr("width", g).attr("height", g).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 3).attr("transform", `translate(${b}, ${b})`);
    let k = v.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id", "color-gradient-fraction").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
    k.append("stop").attr("offset", "0%").attr("stop-color", r), k.append("stop").attr("offset", `${d * 100}%`).attr("stop-color", r), k.append("stop").attr("offset", `${d * 100}%`).attr("stop-color", i), k.append("stop").attr("offset", "100%").attr("stop-color", i);
    const M = v.selectAll("g.person").data(p);
    M.enter().append("g").attr("class", "person").merge(M).attr("transform", (A, $) => `translate(${s.left + $ % 10 * x + b}, ${s.top + Math.floor($ / 10) * x + b}) scale(${x / 124.19})`).selectAll("path").data((A) => [A]).join("path").attr("d", m).attr("fill", (A) => A.index === _ && d > 0 ? "url(#color-gradient-fraction)" : A.color), M.exit().remove();
    const w = v.selectAll("g.population-legend").data([null]).join("g").attr("class", "color-legend").attr("transform", `translate(${g + S}, ${s.top + S})`);
    w.selectAll("rect.population-legend-border").data([null]).join("rect").attr("class", "population-legend-border").attr("width", c - 20).attr("height", y * 4).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 2), w.selectAll("rect.population-legend-case-color").data([null]).join("rect").attr("class", "population-legend-case-color").attr("x", y / 2).attr("y", y / 2).attr("width", y).attr("height", y).attr("fill", r).attr("stroke", "black").attr("stroke-width", 1), w.selectAll("rect.population-legend-case-labal").data([null]).join("text").attr("class", "population-legend-case-labal").attr("x", y * 2).attr("y", x / 2).attr("dy", ".35em").text(a ?? "Case").style("font-size", `${l ?? y / 1.25}px`).style(), w.selectAll("rect.population-legend-control-color").data([null]).join("rect").attr("class", "population-legend-control-color").attr("x", y / 2).attr("y", y * 4 / 2 + y / 2).attr("width", y).attr("height", y).attr("fill", i).attr("stroke", "black").attr("stroke-width", 1), w.selectAll("rect.population-legend-control-labal").data([null]).join("text").attr("class", "population-legend-control-labal").attr("x", y * 2).attr("y", x + x / 2).attr("dy", ".35em").text(o ?? "Control").style("font-size", `${l ?? y / 1.25}px`);
  };
  return u.width = function(f) {
    return arguments.length ? (t = +f, u) : t;
  }, u.height = function(f) {
    return arguments.length ? (n = +f, u) : n;
  }, u.prevalence = function(f) {
    return arguments.length ? (e = +f, u) : e;
  }, u.colorCase = function(f) {
    return arguments.length ? (r = f, u) : r;
  }, u.colorControl = function(f) {
    return arguments.length ? (i = f, u) : i;
  }, u.labelCase = function(f) {
    return arguments.length ? (a = f, u) : a;
  }, u.labelControl = function(f) {
    return arguments.length ? (o = f, u) : o;
  }, u.fontSize = function(f) {
    return arguments.length ? (l = +f, u) : l;
  }, u.margin = function(f) {
    return arguments.length ? (s = f, u) : s;
  }, u;
}
function Qo() {
  let t, n, e, r, i, a, o, l = !1, s, u, f, h = 1, c, g = 15;
  const x = (y) => {
    const b = y.selectAll("svg.line-plot").data([null]).join("svg").attr("class", "line-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", g);
    e.sort((d, p) => G(r(d), r(p)));
    const S = Q().domain(Ft(e, r)).nice().range([c.left, t - c.right]), _ = Q().domain([0, ht(e, (d) => ht(i, (p) => p(d)))]).nice().range([n - c.bottom, c.top]);
    i.forEach((d, p) => {
      const m = ke().defined((v) => d(v) !== null).curve(l ? Ae : be).x((v) => S(r(v))).y((v) => _(d(v)));
      b.selectAll(`.line-path-${p}`).data([e]).join("path").attr("class", `line-path-${p}`).attr("fill", "none").attr("stroke", a[p]).attr("stroke-width", 1.5).attr("d", m), b.append("g").attr("transform", `translate(${c.left + 20},${c.top + p * 20})`).call((v) => v.append("rect").attr("width", 10).attr("height", 10).style("fill", a[p])).call((v) => v.append("text").attr("x", 15).attr("y", 10).text(o[p]));
    }), b.selectAll(".y-axis").data([null]).join("g").attr("class", "y-axis").attr("transform", `translate(${c.left},0)`).call(Xn(_)), b.selectAll(".y-axis-label").data([null]).join("text").attr("class", "y-axis-label").text("Density →").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("x", -c.top).attr("y", c.left / 3).style("font-size", g * (3 / 4)), b.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${n - c.bottom})`).call(on(S)), b.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", n - c.bottom / 3).text(s).style("font-size", g * (3 / 4)), b.selectAll(".title").data([null]).join("text").attr("class", "title").text(f).attr("text-anchor", "middle").attr("x", t / 2).attr("y", c.top / 2);
  };
  return x.width = function(y) {
    return arguments.length ? (t = +y, x) : t;
  }, x.height = function(y) {
    return arguments.length ? (n = +y, x) : n;
  }, x.data = function(y) {
    return arguments.length ? (e = y, x) : e;
  }, x.xValue = function(y) {
    return arguments.length ? (r = y, x) : r;
  }, x.yValues = function(y) {
    return arguments.length ? (i = y, x) : i;
  }, x.colors = function(y) {
    return arguments.length ? (a = y, x) : a;
  }, x.labels = function(y) {
    return arguments.length ? (o = y, x) : o;
  }, x.fitCurve = function(y) {
    return arguments.length ? (l = !!y, x) : l;
  }, x.xLabel = function(y) {
    return arguments.length ? (s = y, x) : s;
  }, x.yLabel = function(y) {
    return arguments.length ? (u = y, x) : u;
  }, x.title = function(y) {
    return arguments.length ? (f = y, x) : f;
  }, x.strokeWidth = function(y) {
    return arguments.length ? (h = +y, x) : h;
  }, x.margin = function(y) {
    return arguments.length ? (c = y, x) : c;
  }, x.fontSize = function(y) {
    return arguments.length ? (g = +y, x) : g;
  }, x;
}
export {
  Ko as beeswarmPlot,
  Wo as boxPlot,
  Go as densityPlot,
  Uo as getBandwidthValues,
  Qo as linePlot,
  Zo as populationPrevalencePlot,
  jo as slider
};
//# sourceMappingURL=risk-viz.js.map
