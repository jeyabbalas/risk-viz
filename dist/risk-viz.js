function K(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ne(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Hn(t) {
  let n, e, r;
  t.length !== 2 ? (n = K, e = (l, s) => K(t(l), s), r = (l, s) => t(l) - s) : (n = t === K || t === Ne ? t : Se, e = t, r = t);
  function i(l, s, u = 0, c = l.length) {
    if (u < c) {
      if (n(s, s) !== 0)
        return c;
      do {
        const d = u + c >>> 1;
        e(l[d], s) < 0 ? u = d + 1 : c = d;
      } while (u < c);
    }
    return u;
  }
  function a(l, s, u = 0, c = l.length) {
    if (u < c) {
      if (n(s, s) !== 0)
        return c;
      do {
        const d = u + c >>> 1;
        e(l[d], s) <= 0 ? u = d + 1 : c = d;
      } while (u < c);
    }
    return u;
  }
  function o(l, s, u = 0, c = l.length) {
    const d = i(l, s, u, c - 1);
    return d > u && r(l[d - 1], s) > -r(l[d], s) ? d - 1 : d;
  }
  return { left: i, center: o, right: a };
}
function Se() {
  return 0;
}
function Ee(t) {
  return t === null ? NaN : +t;
}
function* Ce(t, n) {
  if (n === void 0)
    for (let e of t)
      e != null && (e = +e) >= e && (yield e);
  else {
    let e = -1;
    for (let r of t)
      (r = n(r, ++e, t)) != null && (r = +r) >= r && (yield r);
  }
}
const ze = Hn(K), Te = ze.right;
Hn(Ee).center;
const Pe = Te;
function Vt(t, n) {
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
function Le(t = K) {
  if (t === K)
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
const Fe = Math.sqrt(50), Re = Math.sqrt(10), Ie = Math.sqrt(2);
function St(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Fe ? 10 : a >= Re ? 5 : a >= Ie ? 2 : 1;
  let l, s, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, l = Math.round(t * u), s = Math.round(n * u), l / u < t && ++l, s / u > n && --s, u = -u) : (u = Math.pow(10, i) * o, l = Math.round(t / u), s = Math.round(n / u), l * u < t && ++l, s * u > n && --s), s < l && 0.5 <= e && e < 2 ? St(t, n, e * 2) : [l, s, u];
}
function Ve(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0))
    return [];
  if (t === n)
    return [t];
  const r = n < t, [i, a, o] = r ? St(n, t, e) : St(t, n, e);
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
function Gt(t, n, e) {
  return n = +n, t = +t, e = +e, St(t, n, e)[2];
}
function qe(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Gt(n, t, e) : Gt(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function H(t, n) {
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
function et(t, n) {
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
  for (i = i === void 0 ? On : Le(i); r > e; ) {
    if (r - e > 600) {
      const s = r - e + 1, u = n - e + 1, c = Math.log(s), d = 0.5 * Math.exp(2 * c / 3), h = 0.5 * Math.sqrt(c * d * (s - d) / s) * (u - s / 2 < 0 ? -1 : 1), p = Math.max(e, Math.floor(n - u * d / s + h)), m = Math.min(r, Math.floor(n + (s - u) * d / s + h));
      Bn(t, n, p, m, i);
    }
    const a = t[n];
    let o = e, l = r;
    for (st(t, e, n), i(t[r], a) > 0 && st(t, e, r); o < l; ) {
      for (st(t, o, l), ++o, --l; i(t[o], a) < 0; )
        ++o;
      for (; i(t[l], a) > 0; )
        --l;
    }
    i(t[e], a) === 0 ? st(t, e, l) : (++l, st(t, l, r)), l <= n && (e = l + 1), n <= l && (r = l - 1);
  }
  return t;
}
function st(t, n, e) {
  const r = t[n];
  t[n] = t[e], t[e] = r;
}
function Xt(t, n, e) {
  if (t = Float64Array.from(Ce(t, e)), !(!(r = t.length) || isNaN(n = +n))) {
    if (n <= 0 || r < 2)
      return et(t);
    if (n >= 1)
      return H(t);
    var r, i = (r - 1) * n, a = Math.floor(i), o = H(Bn(t, a).subarray(0, a + 1)), l = et(t.subarray(a + 1));
    return o + (l - o) * (i - a);
  }
}
function De(t, n) {
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
function yn(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
function je(t) {
  return t;
}
var kt = 1, Mt = 2, Ut = 3, ct = 4, _n = 1e-6;
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
function qt(t, n) {
  var e = [], r = null, i = null, a = 6, o = 6, l = 3, s = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === kt || t === ct ? -1 : 1, c = t === ct || t === Mt ? "x" : "y", d = t === kt || t === Ut ? He : Oe;
  function h(p) {
    var m = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), x = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : je), w = Math.max(a, 0) + l, N = n.range(), _ = +N[0] + s, f = +N[N.length - 1] + s, g = (n.bandwidth ? Xe : Be)(n.copy(), s), y = p.selection ? p.selection() : p, M = y.selectAll(".domain").data([null]), b = y.selectAll(".tick").data(m, n).order(), A = b.exit(), T = b.enter().append("g").attr("class", "tick"), C = b.select("line"), v = b.select("text");
    M = M.merge(M.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), b = b.merge(T), C = C.merge(T.append("line").attr("stroke", "currentColor").attr(c + "2", u * a)), v = v.merge(T.append("text").attr("fill", "currentColor").attr(c, u * w).attr("dy", t === kt ? "0em" : t === Ut ? "0.71em" : "0.32em")), p !== y && (M = M.transition(p), b = b.transition(p), C = C.transition(p), v = v.transition(p), A = A.transition(p).attr("opacity", _n).attr("transform", function(k) {
      return isFinite(k = g(k)) ? d(k + s) : this.getAttribute("transform");
    }), T.attr("opacity", _n).attr("transform", function(k) {
      var $ = this.parentNode.__axis;
      return d(($ && isFinite($ = $(k)) ? $ : g(k)) + s);
    })), A.remove(), M.attr("d", t === ct || t === Mt ? o ? "M" + u * o + "," + _ + "H" + s + "V" + f + "H" + u * o : "M" + s + "," + _ + "V" + f : o ? "M" + _ + "," + u * o + "V" + s + "H" + f + "V" + u * o : "M" + _ + "," + s + "H" + f), b.attr("opacity", 1).attr("transform", function(k) {
      return d(g(k) + s);
    }), C.attr(c + "2", u * a), v.attr(c, u * w).text(x), y.filter(Ye).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Mt ? "start" : t === ct ? "end" : "middle"), y.each(function() {
      this.__axis = g;
    });
  }
  return h.scale = function(p) {
    return arguments.length ? (n = p, h) : n;
  }, h.ticks = function() {
    return e = Array.from(arguments), h;
  }, h.tickArguments = function(p) {
    return arguments.length ? (e = p == null ? [] : Array.from(p), h) : e.slice();
  }, h.tickValues = function(p) {
    return arguments.length ? (r = p == null ? null : Array.from(p), h) : r && r.slice();
  }, h.tickFormat = function(p) {
    return arguments.length ? (i = p, h) : i;
  }, h.tickSize = function(p) {
    return arguments.length ? (a = o = +p, h) : a;
  }, h.tickSizeInner = function(p) {
    return arguments.length ? (a = +p, h) : a;
  }, h.tickSizeOuter = function(p) {
    return arguments.length ? (o = +p, h) : o;
  }, h.tickPadding = function(p) {
    return arguments.length ? (l = +p, h) : l;
  }, h.offset = function(p) {
    return arguments.length ? (s = +p, h) : s;
  }, h;
}
function Xn(t) {
  return qt(kt, t);
}
function We(t) {
  return qt(Mt, t);
}
function Dt(t) {
  return qt(Ut, t);
}
function ln(t) {
  return qt(ct, t);
}
var Ge = { value: () => {
} };
function sn() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new At(e);
}
function At(t) {
  this._ = t;
}
function Ue(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
At.prototype = sn.prototype = {
  constructor: At,
  on: function(t, n) {
    var e = this._, r = Ue(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; )
        if ((i = (t = r[a]).type) && (i = Ke(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type)
        e[i] = wn(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = wn(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new At(t);
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
function Ke(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function wn(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Ge, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Kt = "http://www.w3.org/1999/xhtml";
const vn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Kt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function jt(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), vn.hasOwnProperty(n) ? { space: vn[n], local: t } : t;
}
function Ze(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Kt && n.documentElement.namespaceURI === Kt ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Qe(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Yn(t) {
  var n = jt(t);
  return (n.local ? Qe : Ze)(n);
}
function Je() {
}
function un(t) {
  return t == null ? Je : function() {
    return this.querySelector(t);
  };
}
function tr(t) {
  typeof t != "function" && (t = un(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, l = r[i] = new Array(o), s, u, c = 0; c < o; ++c)
      (s = a[c]) && (u = t.call(s, s.__data__, c, a)) && ("__data__" in s && (u.__data__ = s.__data__), l[c] = u);
  return new I(r, this._parents);
}
function nr(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function er() {
  return [];
}
function Wn(t) {
  return t == null ? er : function() {
    return this.querySelectorAll(t);
  };
}
function rr(t) {
  return function() {
    return nr(t.apply(this, arguments));
  };
}
function ir(t) {
  typeof t == "function" ? t = rr(t) : t = Wn(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], l = o.length, s, u = 0; u < l; ++u)
      (s = o[u]) && (r.push(t.call(s, s.__data__, u, o)), i.push(s));
  return new I(r, i);
}
function Gn(t) {
  return function() {
    return this.matches(t);
  };
}
function Un(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ar = Array.prototype.find;
function or(t) {
  return function() {
    return ar.call(this.children, t);
  };
}
function lr() {
  return this.firstElementChild;
}
function sr(t) {
  return this.select(t == null ? lr : or(typeof t == "function" ? t : Un(t)));
}
var ur = Array.prototype.filter;
function cr() {
  return Array.from(this.children);
}
function fr(t) {
  return function() {
    return ur.call(this.children, t);
  };
}
function hr(t) {
  return this.selectAll(t == null ? cr : fr(typeof t == "function" ? t : Un(t)));
}
function dr(t) {
  typeof t != "function" && (t = Gn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, l = r[i] = [], s, u = 0; u < o; ++u)
      (s = a[u]) && t.call(s, s.__data__, u, a) && l.push(s);
  return new I(r, this._parents);
}
function Kn(t) {
  return new Array(t.length);
}
function gr() {
  return new I(this._enter || this._groups.map(Kn), this._parents);
}
function Et(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Et.prototype = {
  constructor: Et,
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
function pr(t) {
  return function() {
    return t;
  };
}
function mr(t, n, e, r, i, a) {
  for (var o = 0, l, s = n.length, u = a.length; o < u; ++o)
    (l = n[o]) ? (l.__data__ = a[o], r[o] = l) : e[o] = new Et(t, a[o]);
  for (; o < s; ++o)
    (l = n[o]) && (i[o] = l);
}
function xr(t, n, e, r, i, a, o) {
  var l, s, u = /* @__PURE__ */ new Map(), c = n.length, d = a.length, h = new Array(c), p;
  for (l = 0; l < c; ++l)
    (s = n[l]) && (h[l] = p = o.call(s, s.__data__, l, n) + "", u.has(p) ? i[l] = s : u.set(p, s));
  for (l = 0; l < d; ++l)
    p = o.call(t, a[l], l, a) + "", (s = u.get(p)) ? (r[l] = s, s.__data__ = a[l], u.delete(p)) : e[l] = new Et(t, a[l]);
  for (l = 0; l < c; ++l)
    (s = n[l]) && u.get(h[l]) === s && (i[l] = s);
}
function yr(t) {
  return t.__data__;
}
function _r(t, n) {
  if (!arguments.length)
    return Array.from(this, yr);
  var e = n ? xr : mr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = pr(t));
  for (var a = i.length, o = new Array(a), l = new Array(a), s = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], d = i[u], h = d.length, p = wr(t.call(c, c && c.__data__, u, r)), m = p.length, x = l[u] = new Array(m), w = o[u] = new Array(m), N = s[u] = new Array(h);
    e(c, d, x, w, N, p, n);
    for (var _ = 0, f = 0, g, y; _ < m; ++_)
      if (g = x[_]) {
        for (_ >= f && (f = _ + 1); !(y = w[f]) && ++f < m; )
          ;
        g._next = y || null;
      }
  }
  return o = new I(o, r), o._enter = l, o._exit = s, o;
}
function wr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function vr() {
  return new I(this._exit || this._groups.map(Kn), this._parents);
}
function br(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function kr(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), l = new Array(i), s = 0; s < o; ++s)
    for (var u = e[s], c = r[s], d = u.length, h = l[s] = new Array(d), p, m = 0; m < d; ++m)
      (p = u[m] || c[m]) && (h[m] = p);
  for (; s < i; ++s)
    l[s] = e[s];
  return new I(l, this._parents);
}
function Mr() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Ar(t) {
  t || (t = $r);
  function n(d, h) {
    return d && h ? t(d.__data__, h.__data__) : !d - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], l = o.length, s = i[a] = new Array(l), u, c = 0; c < l; ++c)
      (u = o[c]) && (s[c] = u);
    s.sort(n);
  }
  return new I(i, this._parents).order();
}
function $r(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Nr() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Sr() {
  return Array.from(this);
}
function Er() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o)
        return o;
    }
  return null;
}
function Cr() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function zr() {
  return !this.node();
}
function Tr(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, l; a < o; ++a)
      (l = i[a]) && t.call(l, l.__data__, a, i);
  return this;
}
function Pr(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Lr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Fr(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Rr(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Ir(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Vr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function qr(t, n) {
  var e = jt(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Lr : Pr : typeof n == "function" ? e.local ? Vr : Ir : e.local ? Rr : Fr)(e, n));
}
function Zn(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Dr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function jr(t, n, e) {
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
  return arguments.length > 1 ? this.each((n == null ? Dr : typeof n == "function" ? Hr : jr)(t, n, e ?? "")) : it(this.node(), t);
}
function it(t, n) {
  return t.style.getPropertyValue(n) || Zn(t).getComputedStyle(t, null).getPropertyValue(n);
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
function Wr(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Br : typeof n == "function" ? Yr : Xr)(t, n)) : this.node()[t];
}
function Qn(t) {
  return t.trim().split(/^|\s+/);
}
function cn(t) {
  return t.classList || new Jn(t);
}
function Jn(t) {
  this._node = t, this._names = Qn(t.getAttribute("class") || "");
}
Jn.prototype = {
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
function te(t, n) {
  for (var e = cn(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function ne(t, n) {
  for (var e = cn(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function Gr(t) {
  return function() {
    te(this, t);
  };
}
function Ur(t) {
  return function() {
    ne(this, t);
  };
}
function Kr(t, n) {
  return function() {
    (n.apply(this, arguments) ? te : ne)(this, t);
  };
}
function Zr(t, n) {
  var e = Qn(t + "");
  if (arguments.length < 2) {
    for (var r = cn(this.node()), i = -1, a = e.length; ++i < a; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Kr : n ? Gr : Ur)(e, n));
}
function Qr() {
  this.textContent = "";
}
function Jr(t) {
  return function() {
    this.textContent = t;
  };
}
function ti(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ni(t) {
  return arguments.length ? this.each(t == null ? Qr : (typeof t == "function" ? ti : Jr)(t)) : this.node().textContent;
}
function ei() {
  this.innerHTML = "";
}
function ri(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ii(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ai(t) {
  return arguments.length ? this.each(t == null ? ei : (typeof t == "function" ? ii : ri)(t)) : this.node().innerHTML;
}
function oi() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function li() {
  return this.each(oi);
}
function si() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ui() {
  return this.each(si);
}
function ci(t) {
  var n = typeof t == "function" ? t : Yn(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function fi() {
  return null;
}
function hi(t, n) {
  var e = typeof t == "function" ? t : Yn(t), r = n == null ? fi : typeof n == "function" ? n : un(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function di() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function gi() {
  return this.each(di);
}
function pi() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function mi() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function xi(t) {
  return this.select(t ? mi : pi);
}
function yi(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function _i(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function wi(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function vi(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function bi(t, n, e) {
  return function() {
    var r = this.__on, i, a = _i(n);
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
function ki(t, n, e) {
  var r = wi(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var s = 0, u = l.length, c; s < u; ++s)
        for (i = 0, c = l[s]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (l = n ? bi : vi, i = 0; i < a; ++i)
    this.each(l(r[i], n, e));
  return this;
}
function ee(t, n, e) {
  var r = Zn(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Mi(t, n) {
  return function() {
    return ee(this, t, n);
  };
}
function Ai(t, n) {
  return function() {
    return ee(this, t, n.apply(this, arguments));
  };
}
function $i(t, n) {
  return this.each((typeof n == "function" ? Ai : Mi)(t, n));
}
function* Ni() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var re = [null];
function I(t, n) {
  this._groups = t, this._parents = n;
}
function lt() {
  return new I([[document.documentElement]], re);
}
function Si() {
  return this;
}
I.prototype = lt.prototype = {
  constructor: I,
  select: tr,
  selectAll: ir,
  selectChild: sr,
  selectChildren: hr,
  filter: dr,
  data: _r,
  enter: gr,
  exit: vr,
  join: br,
  merge: kr,
  selection: Si,
  order: Mr,
  sort: Ar,
  call: Nr,
  nodes: Sr,
  node: Er,
  size: Cr,
  empty: zr,
  each: Tr,
  attr: qr,
  style: Or,
  property: Wr,
  classed: Zr,
  text: ni,
  html: ai,
  raise: li,
  lower: ui,
  append: ci,
  insert: hi,
  remove: gi,
  clone: xi,
  datum: yi,
  on: ki,
  dispatch: $i,
  [Symbol.iterator]: Ni
};
function Ei(t) {
  return typeof t == "string" ? new I([[document.querySelector(t)]], [document.documentElement]) : new I([[t]], re);
}
function Ci(t) {
  let n;
  for (; n = t.sourceEvent; )
    t = n;
  return t;
}
function zi(t, n) {
  if (t = Ci(t), n === void 0 && (n = t.currentTarget), n) {
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
function ie(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function xt() {
}
var gt = 0.7, Ct = 1 / gt, rt = "\\s*([+-]?\\d+)\\s*", pt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", O = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ti = /^#([0-9a-f]{3,8})$/, Pi = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), Li = new RegExp(`^rgb\\(${O},${O},${O}\\)$`), Fi = new RegExp(`^rgba\\(${rt},${rt},${rt},${pt}\\)$`), Ri = new RegExp(`^rgba\\(${O},${O},${O},${pt}\\)$`), Ii = new RegExp(`^hsl\\(${pt},${O},${O}\\)$`), Vi = new RegExp(`^hsla\\(${pt},${O},${O},${pt}\\)$`), bn = {
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
fn(xt, Q, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: kn,
  // Deprecated! Use color.formatHex.
  formatHex: kn,
  formatHex8: qi,
  formatHsl: Di,
  formatRgb: Mn,
  toString: Mn
});
function kn() {
  return this.rgb().formatHex();
}
function qi() {
  return this.rgb().formatHex8();
}
function Di() {
  return ae(this).formatHsl();
}
function Mn() {
  return this.rgb().formatRgb();
}
function Q(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Ti.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? An(n) : e === 3 ? new R(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? _t(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? _t(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Pi.exec(t)) ? new R(n[1], n[2], n[3], 1) : (n = Li.exec(t)) ? new R(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Fi.exec(t)) ? _t(n[1], n[2], n[3], n[4]) : (n = Ri.exec(t)) ? _t(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ii.exec(t)) ? Sn(n[1], n[2] / 100, n[3] / 100, 1) : (n = Vi.exec(t)) ? Sn(n[1], n[2] / 100, n[3] / 100, n[4]) : bn.hasOwnProperty(t) ? An(bn[t]) : t === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function An(t) {
  return new R(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function _t(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new R(t, n, e, r);
}
function ji(t) {
  return t instanceof xt || (t = Q(t)), t ? (t = t.rgb(), new R(t.r, t.g, t.b, t.opacity)) : new R();
}
function Zt(t, n, e, r) {
  return arguments.length === 1 ? ji(t) : new R(t, n, e, r ?? 1);
}
function R(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
fn(R, Zt, ie(xt, {
  brighter(t) {
    return t = t == null ? Ct : Math.pow(Ct, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? gt : Math.pow(gt, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new R(Z(this.r), Z(this.g), Z(this.b), zt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: $n,
  // Deprecated! Use color.formatHex.
  formatHex: $n,
  formatHex8: Hi,
  formatRgb: Nn,
  toString: Nn
}));
function $n() {
  return `#${U(this.r)}${U(this.g)}${U(this.b)}`;
}
function Hi() {
  return `#${U(this.r)}${U(this.g)}${U(this.b)}${U((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Nn() {
  const t = zt(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Z(this.r)}, ${Z(this.g)}, ${Z(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function zt(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Z(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function U(t) {
  return t = Z(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Sn(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new D(t, n, e, r);
}
function ae(t) {
  if (t instanceof D)
    return new D(t.h, t.s, t.l, t.opacity);
  if (t instanceof xt || (t = Q(t)), !t)
    return new D();
  if (t instanceof D)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, l = a - i, s = (a + i) / 2;
  return l ? (n === a ? o = (e - r) / l + (e < r) * 6 : e === a ? o = (r - n) / l + 2 : o = (n - e) / l + 4, l /= s < 0.5 ? a + i : 2 - a - i, o *= 60) : l = s > 0 && s < 1 ? 0 : o, new D(o, l, s, t.opacity);
}
function Oi(t, n, e, r) {
  return arguments.length === 1 ? ae(t) : new D(t, n, e, r ?? 1);
}
function D(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
fn(D, Oi, ie(xt, {
  brighter(t) {
    return t = t == null ? Ct : Math.pow(Ct, t), new D(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? gt : Math.pow(gt, t), new D(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new R(
      Yt(t >= 240 ? t - 240 : t + 120, i, r),
      Yt(t, i, r),
      Yt(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new D(En(this.h), wt(this.s), wt(this.l), zt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = zt(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${En(this.h)}, ${wt(this.s) * 100}%, ${wt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function En(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function wt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Yt(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const hn = (t) => () => t;
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
  return (t = +t) == 1 ? oe : function(n, e) {
    return e - n ? Xi(n, e, t) : hn(isNaN(n) ? e : n);
  };
}
function oe(t, n) {
  var e = n - t;
  return e ? Bi(t, e) : hn(isNaN(t) ? n : t);
}
const Tt = function t(n) {
  var e = Yi(n);
  function r(i, a) {
    var o = e((i = Zt(i)).r, (a = Zt(a)).r), l = e(i.g, a.g), s = e(i.b, a.b), u = oe(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = l(c), i.b = s(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Wi(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function Gi(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ui(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o)
    i[o] = dn(t[o], n[o]);
  for (; o < e; ++o)
    a[o] = n[o];
  return function(l) {
    for (o = 0; o < r; ++o)
      a[o] = i[o](l);
    return a;
  };
}
function Ki(t, n) {
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
function Zi(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = dn(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e)
      r[i] = e[i](a);
    return r;
  };
}
var Qt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Wt = new RegExp(Qt.source, "g");
function Qi(t) {
  return function() {
    return t;
  };
}
function Ji(t) {
  return function(n) {
    return t(n) + "";
  };
}
function le(t, n) {
  var e = Qt.lastIndex = Wt.lastIndex = 0, r, i, a, o = -1, l = [], s = [];
  for (t = t + "", n = n + ""; (r = Qt.exec(t)) && (i = Wt.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), l[o] ? l[o] += a : l[++o] = a), (r = r[0]) === (i = i[0]) ? l[o] ? l[o] += i : l[++o] = i : (l[++o] = null, s.push({ i: o, x: q(r, i) })), e = Wt.lastIndex;
  return e < n.length && (a = n.slice(e), l[o] ? l[o] += a : l[++o] = a), l.length < 2 ? s[0] ? Ji(s[0].x) : Qi(n) : (n = s.length, function(u) {
    for (var c = 0, d; c < n; ++c)
      l[(d = s[c]).i] = d.x(u);
    return l.join("");
  });
}
function dn(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? hn(n) : (e === "number" ? q : e === "string" ? (r = Q(n)) ? (n = r, Tt) : le : n instanceof Q ? Tt : n instanceof Date ? Ki : Gi(n) ? Wi : Array.isArray(n) ? Ui : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Zi : q)(t, n);
}
function ta(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Cn = 180 / Math.PI, Jt = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function se(t, n, e, r, i, a) {
  var o, l, s;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (s = t * e + n * r) && (e -= t * s, r -= n * s), (l = Math.sqrt(e * e + r * r)) && (e /= l, r /= l, s /= l), t * r < n * e && (t = -t, n = -n, s = -s, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * Cn,
    skewX: Math.atan(s) * Cn,
    scaleX: o,
    scaleY: l
  };
}
var vt;
function na(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Jt : se(n.a, n.b, n.c, n.d, n.e, n.f);
}
function ea(t) {
  return t == null || (vt || (vt = document.createElementNS("http://www.w3.org/2000/svg", "g")), vt.setAttribute("transform", t), !(t = vt.transform.baseVal.consolidate())) ? Jt : (t = t.matrix, se(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ue(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, d, h, p, m) {
    if (u !== d || c !== h) {
      var x = p.push("translate(", null, n, null, e);
      m.push({ i: x - 4, x: q(u, d) }, { i: x - 2, x: q(c, h) });
    } else
      (d || h) && p.push("translate(" + d + n + h + e);
  }
  function o(u, c, d, h) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), h.push({ i: d.push(i(d) + "rotate(", null, r) - 2, x: q(u, c) })) : c && d.push(i(d) + "rotate(" + c + r);
  }
  function l(u, c, d, h) {
    u !== c ? h.push({ i: d.push(i(d) + "skewX(", null, r) - 2, x: q(u, c) }) : c && d.push(i(d) + "skewX(" + c + r);
  }
  function s(u, c, d, h, p, m) {
    if (u !== d || c !== h) {
      var x = p.push(i(p) + "scale(", null, ",", null, ")");
      m.push({ i: x - 4, x: q(u, d) }, { i: x - 2, x: q(c, h) });
    } else
      (d !== 1 || h !== 1) && p.push(i(p) + "scale(" + d + "," + h + ")");
  }
  return function(u, c) {
    var d = [], h = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, d, h), o(u.rotate, c.rotate, d, h), l(u.skewX, c.skewX, d, h), s(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, h), u = c = null, function(p) {
      for (var m = -1, x = h.length, w; ++m < x; )
        d[(w = h[m]).i] = w.x(p);
      return d.join("");
    };
  };
}
var ra = ue(na, "px, ", "px)", "deg)"), ia = ue(ea, ", ", ")", ")"), at = 0, ft = 0, ut = 0, ce = 1e3, Pt, ht, Lt = 0, J = 0, Ht = 0, mt = typeof performance == "object" && performance.now ? performance : Date, fe = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function gn() {
  return J || (fe(aa), J = mt.now() + Ht);
}
function aa() {
  J = 0;
}
function Ft() {
  this._call = this._time = this._next = null;
}
Ft.prototype = he.prototype = {
  constructor: Ft,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? gn() : +e) + (n == null ? 0 : +n), !this._next && ht !== this && (ht ? ht._next = this : Pt = this, ht = this), this._call = t, this._time = e, tn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, tn());
  }
};
function he(t, n, e) {
  var r = new Ft();
  return r.restart(t, n, e), r;
}
function oa() {
  gn(), ++at;
  for (var t = Pt, n; t; )
    (n = J - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --at;
}
function zn() {
  J = (Lt = mt.now()) + Ht, at = ft = 0;
  try {
    oa();
  } finally {
    at = 0, sa(), J = 0;
  }
}
function la() {
  var t = mt.now(), n = t - Lt;
  n > ce && (Ht -= n, Lt = t);
}
function sa() {
  for (var t, n = Pt, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Pt = e);
  ht = t, tn(r);
}
function tn(t) {
  if (!at) {
    ft && (ft = clearTimeout(ft));
    var n = t - J;
    n > 24 ? (t < 1 / 0 && (ft = setTimeout(zn, t - mt.now() - Ht)), ut && (ut = clearInterval(ut))) : (ut || (Lt = mt.now(), ut = setInterval(la, ce)), at = 1, fe(zn));
  }
}
function Tn(t, n, e) {
  var r = new Ft();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var ua = sn("start", "end", "cancel", "interrupt"), ca = [], de = 0, Pn = 1, nn = 2, $t = 3, Ln = 4, en = 5, Nt = 6;
function Ot(t, n, e, r, i, a) {
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
    on: ua,
    tween: ca,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: de
  });
}
function pn(t, n) {
  var e = j(t, n);
  if (e.state > de)
    throw new Error("too late; already scheduled");
  return e;
}
function B(t, n) {
  var e = j(t, n);
  if (e.state > $t)
    throw new Error("too late; already running");
  return e;
}
function j(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function fa(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = he(a, 0, e.time);
  function a(u) {
    e.state = Pn, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, d, h, p;
    if (e.state !== Pn)
      return s();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === $t)
          return Tn(o);
        p.state === Ln ? (p.state = Nt, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = Nt, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (Tn(function() {
      e.state === $t && (e.state = Ln, e.timer.restart(l, e.delay, e.time), l(u));
    }), e.state = nn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === nn) {
      for (e.state = $t, i = new Array(h = e.tween.length), c = 0, d = -1; c < h; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++d] = p);
      i.length = d + 1;
    }
  }
  function l(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(s), e.state = en, 1), d = -1, h = i.length; ++d < h; )
      i[d].call(t, c);
    e.state === en && (e.on.call("end", t, t.__data__, e.index, e.group), s());
  }
  function s() {
    e.state = Nt, e.timer.stop(), delete r[n];
    for (var u in r)
      return;
    delete t.__transition;
  }
}
function ha(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > nn && r.state < en, r.state = Nt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function da(t) {
  return this.each(function() {
    ha(this, t);
  });
}
function ga(t, n) {
  var e, r;
  return function() {
    var i = B(this, t), a = i.tween;
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
function pa(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var a = B(this, t), o = a.tween;
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
function ma(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = j(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? ga : pa)(e, t, n));
}
function mn(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = B(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return j(i, r).value[n];
  };
}
function ge(t, n) {
  var e;
  return (typeof n == "number" ? q : n instanceof Q ? Tt : (e = Q(n)) ? (n = e, Tt) : le)(t, n);
}
function xa(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ya(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function _a(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function wa(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function va(t, n, e) {
  var r, i, a;
  return function() {
    var o, l = e(this), s;
    return l == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), s = l + "", o === s ? null : o === r && s === i ? a : (i = s, a = n(r = o, l)));
  };
}
function ba(t, n, e) {
  var r, i, a;
  return function() {
    var o, l = e(this), s;
    return l == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), s = l + "", o === s ? null : o === r && s === i ? a : (i = s, a = n(r = o, l)));
  };
}
function ka(t, n) {
  var e = jt(t), r = e === "transform" ? ia : ge;
  return this.attrTween(t, typeof n == "function" ? (e.local ? ba : va)(e, r, mn(this, "attr." + t, n)) : n == null ? (e.local ? ya : xa)(e) : (e.local ? wa : _a)(e, r, n));
}
function Ma(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Aa(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function $a(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Aa(t, a)), e;
  }
  return i._value = n, i;
}
function Na(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Ma(t, a)), e;
  }
  return i._value = n, i;
}
function Sa(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = jt(t);
  return this.tween(e, (r.local ? $a : Na)(r, n));
}
function Ea(t, n) {
  return function() {
    pn(this, t).delay = +n.apply(this, arguments);
  };
}
function Ca(t, n) {
  return n = +n, function() {
    pn(this, t).delay = n;
  };
}
function za(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ea : Ca)(n, t)) : j(this.node(), n).delay;
}
function Ta(t, n) {
  return function() {
    B(this, t).duration = +n.apply(this, arguments);
  };
}
function Pa(t, n) {
  return n = +n, function() {
    B(this, t).duration = n;
  };
}
function La(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ta : Pa)(n, t)) : j(this.node(), n).duration;
}
function Fa(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    B(this, t).ease = n;
  };
}
function Ra(t) {
  var n = this._id;
  return arguments.length ? this.each(Fa(n, t)) : j(this.node(), n).ease;
}
function Ia(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    B(this, t).ease = e;
  };
}
function Va(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Ia(this._id, t));
}
function qa(t) {
  typeof t != "function" && (t = Gn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, l = r[i] = [], s, u = 0; u < o; ++u)
      (s = a[u]) && t.call(s, s.__data__, u, a) && l.push(s);
  return new Y(r, this._parents, this._name, this._id);
}
function Da(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), l = 0; l < a; ++l)
    for (var s = n[l], u = e[l], c = s.length, d = o[l] = new Array(c), h, p = 0; p < c; ++p)
      (h = s[p] || u[p]) && (d[p] = h);
  for (; l < r; ++l)
    o[l] = n[l];
  return new Y(o, this._parents, this._name, this._id);
}
function ja(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Ha(t, n, e) {
  var r, i, a = ja(n) ? pn : B;
  return function() {
    var o = a(this, t), l = o.on;
    l !== r && (i = (r = l).copy()).on(n, e), o.on = i;
  };
}
function Oa(t, n) {
  var e = this._id;
  return arguments.length < 2 ? j(this.node(), e).on.on(t) : this.each(Ha(e, t, n));
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
  typeof t != "function" && (t = un(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var l = r[o], s = l.length, u = a[o] = new Array(s), c, d, h = 0; h < s; ++h)
      (c = l[h]) && (d = t.call(c, c.__data__, h, l)) && ("__data__" in c && (d.__data__ = c.__data__), u[h] = d, Ot(u[h], n, e, h, u, j(c, e)));
  return new Y(a, this._parents, n, e);
}
function Wa(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Wn(t));
  for (var r = this._groups, i = r.length, a = [], o = [], l = 0; l < i; ++l)
    for (var s = r[l], u = s.length, c, d = 0; d < u; ++d)
      if (c = s[d]) {
        for (var h = t.call(c, c.__data__, d, s), p, m = j(c, e), x = 0, w = h.length; x < w; ++x)
          (p = h[x]) && Ot(p, n, e, x, h, m);
        a.push(h), o.push(c);
      }
  return new Y(a, o, n, e);
}
var Ga = lt.prototype.constructor;
function Ua() {
  return new Ga(this._groups, this._parents);
}
function Ka(t, n) {
  var e, r, i;
  return function() {
    var a = it(this, t), o = (this.style.removeProperty(t), it(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function pe(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Za(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = it(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Qa(t, n, e) {
  var r, i, a;
  return function() {
    var o = it(this, t), l = e(this), s = l + "";
    return l == null && (s = l = (this.style.removeProperty(t), it(this, t))), o === s ? null : o === r && s === i ? a : (i = s, a = n(r = o, l));
  };
}
function Ja(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, l;
  return function() {
    var s = B(this, t), u = s.on, c = s.value[a] == null ? l || (l = pe(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), s.on = r;
  };
}
function to(t, n, e) {
  var r = (t += "") == "transform" ? ra : ge;
  return n == null ? this.styleTween(t, Ka(t, r)).on("end.style." + t, pe(t)) : typeof n == "function" ? this.styleTween(t, Qa(t, r, mn(this, "style." + t, n))).each(Ja(this._id, t)) : this.styleTween(t, Za(t, r, n), e).on("end.style." + t, null);
}
function no(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function eo(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && no(t, o, e)), r;
  }
  return a._value = n, a;
}
function ro(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, eo(t, n, e ?? ""));
}
function io(t) {
  return function() {
    this.textContent = t;
  };
}
function ao(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function oo(t) {
  return this.tween("text", typeof t == "function" ? ao(mn(this, "text", t)) : io(t == null ? "" : t + ""));
}
function lo(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function so(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && lo(i)), n;
  }
  return r._value = t, r;
}
function uo(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, so(t));
}
function co() {
  for (var t = this._name, n = this._id, e = xe(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, s, u = 0; u < l; ++u)
      if (s = o[u]) {
        var c = j(s, n);
        Ot(s, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Y(r, this._parents, t, e);
}
function fo() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var l = { value: o }, s = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = B(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(l), n._.interrupt.push(l), n._.end.push(s)), u.on = n;
    }), i === 0 && a();
  });
}
var ho = 0;
function Y(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function me(t) {
  return lt().transition(t);
}
function xe() {
  return ++ho;
}
var X = lt.prototype;
Y.prototype = me.prototype = {
  constructor: Y,
  select: Ya,
  selectAll: Wa,
  selectChild: X.selectChild,
  selectChildren: X.selectChildren,
  filter: qa,
  merge: Da,
  selection: Ua,
  transition: co,
  call: X.call,
  nodes: X.nodes,
  node: X.node,
  size: X.size,
  empty: X.empty,
  each: X.each,
  on: Oa,
  attr: ka,
  attrTween: Sa,
  style: to,
  styleTween: ro,
  text: oo,
  textTween: uo,
  remove: Xa,
  tween: ma,
  delay: za,
  duration: La,
  ease: Ra,
  easeVarying: Va,
  end: fo,
  [Symbol.iterator]: X[Symbol.iterator]
};
function go(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var po = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: go
};
function mo(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function xo(t) {
  var n, e;
  t instanceof Y ? (n = t._id, t = t._name) : (n = xe(), (e = po).time = gn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, s, u = 0; u < l; ++u)
      (s = o[u]) && Ot(s, t, n, u, o, e || mo(s, n));
  return new Y(r, this._parents, t, n);
}
lt.prototype.interrupt = da;
lt.prototype.transition = xo;
const rn = Math.PI, an = 2 * rn, G = 1e-6, yo = an - G;
function ye(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function _o(t) {
  let n = Math.floor(t);
  if (!(n >= 0))
    throw new Error(`invalid digits: ${t}`);
  if (n > 15)
    return ye;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class wo {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? ye : _o(n);
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
    let o = this._x1, l = this._y1, s = r - n, u = i - e, c = o - n, d = l - e, h = c * c + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > G)
      if (!(Math.abs(d * s - u * c) > G) || !a)
        this._append`L${this._x1 = n},${this._y1 = e}`;
      else {
        let p = r - o, m = i - l, x = s * s + u * u, w = p * p + m * m, N = Math.sqrt(x), _ = Math.sqrt(h), f = a * Math.tan((rn - Math.acos((x + h - w) / (2 * N * _))) / 2), g = f / _, y = f / N;
        Math.abs(g - 1) > G && this._append`L${n + g * c},${e + g * d}`, this._append`A${a},${a},0,0,${+(d * p > c * m)},${this._x1 = n + y * s},${this._y1 = e + y * u}`;
      }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0)
      throw new Error(`negative radius: ${r}`);
    let l = r * Math.cos(i), s = r * Math.sin(i), u = n + l, c = e + s, d = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > G || Math.abs(this._y1 - c) > G) && this._append`L${u},${c}`, r && (h < 0 && (h = h % an + an), h > yo ? this._append`A${r},${r},0,1,${d},${n - l},${e - s}A${r},${r},0,1,${d},${this._x1 = u},${this._y1 = c}` : h > G && this._append`A${r},${r},0,${+(h >= rn)},${d},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function vo(t) {
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
function ot(t) {
  return t = Rt(Math.abs(t)), t ? t[1] : NaN;
}
function bo(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, l = t[0], s = 0; i > 0 && l > 0 && (s + l + 1 > r && (l = Math.max(1, r - s)), a.push(e.substring(i -= l, i + l)), !((s += l + 1) > r)); )
      l = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function ko(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Mo = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function It(t) {
  if (!(n = Mo.exec(t)))
    throw new Error("invalid format: " + t);
  var n;
  return new xn({
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
It.prototype = xn.prototype;
function xn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
xn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ao(t) {
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
var _e;
function $o(t, n) {
  var e = Rt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1], a = i - (_e = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Rt(t, Math.max(0, n + a - 1))[0];
}
function Fn(t, n) {
  var e = Rt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Rn = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: vo,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Fn(t * 100, n),
  r: Fn,
  s: $o,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function In(t) {
  return t;
}
var Vn = Array.prototype.map, qn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function No(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? In : bo(Vn.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? In : ko(Vn.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", l = t.minus === void 0 ? "−" : t.minus + "", s = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(d) {
    d = It(d);
    var h = d.fill, p = d.align, m = d.sign, x = d.symbol, w = d.zero, N = d.width, _ = d.comma, f = d.precision, g = d.trim, y = d.type;
    y === "n" ? (_ = !0, y = "g") : Rn[y] || (f === void 0 && (f = 12), g = !0, y = "g"), (w || h === "0" && p === "=") && (w = !0, h = "0", p = "=");
    var M = x === "$" ? e : x === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "", b = x === "$" ? r : /[%p]/.test(y) ? o : "", A = Rn[y], T = /[defgprs%]/.test(y);
    f = f === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, f)) : Math.max(0, Math.min(20, f));
    function C(v) {
      var k = M, $ = b, z, S, E;
      if (y === "c")
        $ = A(v) + $, v = "";
      else {
        v = +v;
        var F = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? s : A(Math.abs(v), f), g && (v = Ao(v)), F && +v == 0 && m !== "+" && (F = !1), k = (F ? m === "(" ? m : l : m === "-" || m === "(" ? "" : m) + k, $ = (y === "s" ? qn[8 + _e / 3] : "") + $ + (F && m === "(" ? ")" : ""), T) {
          for (z = -1, S = v.length; ++z < S; )
            if (E = v.charCodeAt(z), 48 > E || E > 57) {
              $ = (E === 46 ? i + v.slice(z + 1) : v.slice(z)) + $, v = v.slice(0, z);
              break;
            }
        }
      }
      _ && !w && (v = n(v, 1 / 0));
      var P = k.length + v.length + $.length, V = P < N ? new Array(N - P + 1).join(h) : "";
      switch (_ && w && (v = n(V + v, V.length ? N - $.length : 1 / 0), V = ""), p) {
        case "<":
          v = k + v + $ + V;
          break;
        case "=":
          v = k + V + v + $;
          break;
        case "^":
          v = V.slice(0, P = V.length >> 1) + k + v + $ + V.slice(P);
          break;
        default:
          v = V + k + v + $;
          break;
      }
      return a(v);
    }
    return C.toString = function() {
      return d + "";
    }, C;
  }
  function c(d, h) {
    var p = u((d = It(d), d.type = "f", d)), m = Math.max(-8, Math.min(8, Math.floor(ot(h) / 3))) * 3, x = Math.pow(10, -m), w = qn[8 + m / 3];
    return function(N) {
      return p(x * N) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var bt, we, ve;
So({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function So(t) {
  return bt = No(t), we = bt.format, ve = bt.formatPrefix, bt;
}
function Eo(t) {
  return Math.max(0, -ot(Math.abs(t)));
}
function Co(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ot(n) / 3))) * 3 - ot(Math.abs(t)));
}
function zo(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, ot(n) - ot(t)) + 1;
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
function Po(t) {
  return function() {
    return t;
  };
}
function Lo(t) {
  return +t;
}
var Dn = [0, 1];
function nt(t) {
  return t;
}
function on(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Po(isNaN(n) ? NaN : 0.5);
}
function Fo(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Ro(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = on(i, r), a = e(o, a)) : (r = on(r, i), a = e(a, o)), function(l) {
    return a(r(l));
  };
}
function Io(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = on(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(l) {
    var s = Pe(t, l, 1, r) - 1;
    return a[s](i[s](l));
  };
}
function Vo(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function qo() {
  var t = Dn, n = Dn, e = dn, r, i, a, o = nt, l, s, u;
  function c() {
    var h = Math.min(t.length, n.length);
    return o !== nt && (o = Fo(t[0], t[h - 1])), l = h > 2 ? Io : Ro, s = u = null, d;
  }
  function d(h) {
    return h == null || isNaN(h = +h) ? a : (s || (s = l(t.map(r), n, e)))(r(o(h)));
  }
  return d.invert = function(h) {
    return o(i((u || (u = l(n, t.map(r), q)))(h)));
  }, d.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Lo), c()) : t.slice();
  }, d.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, d.rangeRound = function(h) {
    return n = Array.from(h), e = ta, c();
  }, d.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : nt, c()) : o !== nt;
  }, d.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, d.unknown = function(h) {
    return arguments.length ? (a = h, d) : a;
  }, function(h, p) {
    return r = h, i = p, c();
  };
}
function Do() {
  return qo()(nt, nt);
}
function jo(t, n, e, r) {
  var i = qe(t, n, e), a;
  switch (r = It(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Co(i, o)) && (r.precision = a), ve(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = zo(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Eo(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return we(r);
}
function Ho(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Ve(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return jo(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], l = r[a], s, u, c = 10;
    for (l < o && (u = o, o = l, l = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = Gt(o, l, e), u === s)
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
function W() {
  var t = Do();
  return t.copy = function() {
    return Vo(t, W());
  }, To.apply(t, arguments), Ho(t);
}
function tt(t) {
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
  }, () => new wo(n);
}
function Bo(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function be(t) {
  this._context = t;
}
be.prototype = {
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
function ke(t) {
  return new be(t);
}
function Xo(t) {
  return t[0];
}
function Yo(t) {
  return t[1];
}
function Me(t, n) {
  var e = tt(!0), r = null, i = ke, a = null, o = Oo(l);
  t = typeof t == "function" ? t : t === void 0 ? Xo : tt(t), n = typeof n == "function" ? n : n === void 0 ? Yo : tt(n);
  function l(s) {
    var u, c = (s = Bo(s)).length, d, h = !1, p;
    for (r == null && (a = i(p = o())), u = 0; u <= c; ++u)
      !(u < c && e(d = s[u], u, s)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+t(d, u, s), +n(d, u, s));
    if (p)
      return a = null, p + "" || null;
  }
  return l.x = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : tt(+s), l) : t;
  }, l.y = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : tt(+s), l) : n;
  }, l.defined = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : tt(!!s), l) : e;
  }, l.curve = function(s) {
    return arguments.length ? (i = s, r != null && (a = i(r)), l) : i;
  }, l.context = function(s) {
    return arguments.length ? (s == null ? r = a = null : a = i(r = s), l) : r;
  }, l;
}
function jn(t, n, e) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + n) / 6,
    (t._y0 + 4 * t._y1 + e) / 6
  );
}
function Ae(t) {
  this._context = t;
}
Ae.prototype = {
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
        jn(this, this._x1, this._y1);
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
        jn(this, t, n);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
  }
};
function $e(t) {
  return new Ae(t);
}
function dt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
dt.prototype = {
  constructor: dt,
  scale: function(t) {
    return t === 1 ? this : new dt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new dt(this.k, this.x + this.k * t, this.y + this.k * n);
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
dt.prototype;
function Wo() {
  let t, n, e, r, i, a;
  const o = sn("change"), l = (s) => {
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
function Go() {
  let t, n, e, r, i, a, o, l = "red", s, u, c, d = "rgb(122, 255, 248, 0.7)", h = 1.5, p = 1, m, x = 15, w = 0, N = 0, _ = !1;
  const f = (g) => {
    const y = g.selectAll("svg.box-plot").data([null]).join("svg").attr("class", "box-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", x);
    let M = Vt(r);
    M[0] = i ?? M[0], M[1] = a ?? M[1];
    const b = W().domain(M).range([e.left, t - e.right]), A = Xt(r, 0.25), T = Xt(r, 0.5), C = Xt(r, 0.75), v = C - A;
    let k = A - v * 1.5;
    const $ = et(r);
    k = $ > k ? $ : k;
    let z = C + v * 1.5;
    const S = H(r);
    z = S < z ? S : z;
    const E = r.filter((L) => L < k || L > z), F = r.reduce((L, yt) => L + yt, 0) / r.length, P = g.selectAll("div.tooltip").data([null]).join("div").attr("class", "tooltip").style("position", "absolute").style("opacity", 0);
    y.on("mouseover", function(L) {
      const Bt = `
        Minimum: ${k.toFixed(5)}<br>
        25th percentile: ${A.toFixed(5)}<br>
        Median: ${T.toFixed(5)}<br>
        75th percentile: ${C.toFixed(5)}<br>
        Maximum: ${z.toFixed(5)}<br>
        Inter-quartile range: ${v.toFixed(5)}<br>
        Mean: ${F.toFixed(5)}
        `;
      P.style("opacity", 1).style("border-color", d).html(Bt);
    }).on("mouseout", () => {
      P.style("opacity", 0);
    }).on("mousemove", function(L) {
      const [yt, Bt] = zi(L, this);
      P.style("left", yt + w + "px").style("top", Bt + N + "px");
    });
    const V = E.filter((L) => L < M[1] && L > M[0]);
    y.selectAll("circle").data(V).join("circle").attr("cx", (L) => b(L)).attr("cy", () => n / 2 + (Math.random() * (c / 2) - c / 4)).attr("r", m).attr("fill", d).attr("opacity", p).attr("stroke", "black").attr("stroke-width", h), y.selectAll("rect").data([null]).join("rect").attr("x", b(A)).attr("y", n / 2 - c / 2).attr("width", b(C) - b(A)).attr("height", c).attr("fill", d).attr("stroke", "black").attr("stroke-width", h), y.selectAll("#median").data([null]).join("line").attr("id", "median").attr("x1", b(T)).attr("y1", n / 2 - c / 2).attr("x2", b(T)).attr("y2", n / 2 + c / 2).attr("stroke", "black").attr("stroke-width", h * 2), y.selectAll("#lower-whisker").data([null]).join("line").attr("id", "lower-whisker").attr("x1", b(k)).attr("y1", n / 2).attr("x2", b(A)).attr("y2", n / 2).attr("stroke", "black").attr("stroke-width", h), y.selectAll("#lower-whisker-edge").data([null]).join("line").attr("id", "lower-whisker-edge").attr("x1", b(k)).attr("y1", n / 2 - c / 4).attr("x2", b(k)).attr("y2", n / 2 + c / 4).attr("stroke", "black").attr("stroke-width", h), y.selectAll("#upper-whisker").data([null]).join("line").attr("id", "upper-whisker").attr("x1", b(C)).attr("y1", n / 2).attr("x2", b(z)).attr("y2", n / 2).attr("stroke", "black").attr("stroke-width", h), y.selectAll("#upper-whisker-edge").data([null]).join("line").attr("id", "upper-whisker-edge").attr("x1", b(z)).attr("y1", n / 2 - c / 4).attr("x2", b(z)).attr("y2", n / 2 + c / 4).attr("stroke", "black").attr("stroke-width", h), _ || (y.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${n - e.bottom})`).call(Dt(b)), s && y.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", n - e.bottom / 3).text(s).style("font-size", x * (3 / 4))), o !== void 0 && y.selectAll(".vLines").data(o).join("line").attr("class", "vLines").attr("x1", (L) => b(L)).attr("y1", n / 2 - c / 2).attr("x2", (L) => b(L)).attr("y2", n / 2 + c / 2).attr("stroke", l).attr("stroke-width", 1.5), u && y.selectAll(".title").data([null]).join("text").attr("class", "title").text(u).attr("text-anchor", "middle").attr("x", t / 2).attr("y", e.top / 2);
  };
  return f.width = function(g) {
    return arguments.length ? (t = +g, f) : t;
  }, f.height = function(g) {
    return arguments.length ? (n = +g, f) : n;
  }, f.margin = function(g) {
    return arguments.length ? (e = g, f) : e;
  }, f.data = function(g) {
    return arguments.length ? (r = g, f) : r;
  }, f.xMin = function(g) {
    return arguments.length ? (i = +g, f) : i;
  }, f.xMax = function(g) {
    return arguments.length ? (a = +g, f) : a;
  }, f.vLines = function(g) {
    return arguments.length ? (o = g, f) : o;
  }, f.vLineColor = function(g) {
    return arguments.length ? (l = g, f) : l;
  }, f.xLabel = function(g) {
    return arguments.length ? (s = g, f) : s;
  }, f.title = function(g) {
    return arguments.length ? (u = g, f) : u;
  }, f.boxWidth = function(g) {
    return arguments.length ? (c = +g, f) : c;
  }, f.color = function(g) {
    return arguments.length ? (d = g, f) : d;
  }, f.strokeWidth = function(g) {
    return arguments.length ? (h = +g, f) : h;
  }, f.opacity = function(g) {
    return arguments.length ? (p = +g, f) : p;
  }, f.radius = function(g) {
    return arguments.length ? (m = +g, f) : m;
  }, f.fontSize = function(g) {
    return arguments.length ? (x = +g, f) : x;
  }, f.hoverOffsetX = function(g) {
    return arguments.length ? (w = +g, f) : w;
  }, f.hoverOffsetY = function(g) {
    return arguments.length ? (N = +g, f) : N;
  }, f.removeAxis = function(g) {
    return arguments.length ? (_ = g, f) : _;
  }, f;
}
function Uo() {
  let t, n, e, r, i = [], a, o, l, s, u, c, d = "red", h = 40, p, m = ["rgb(122, 255, 248, 0.7)"], x = 1, w = 15;
  const N = (g) => (y) => Math.abs(y /= g) <= 1 ? 0.75 * (1 - y * y) / g : 0, _ = (g, y, M) => y.map((b) => [b, De(M, (A) => g(b - A))]), f = (g) => {
    const y = g.selectAll("svg.density-plot").data([null]).join("svg").attr("class", "density-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", w);
    let M = [].concat(...r), b = Vt(M);
    b[0] = a ?? b[0], b[1] = o ?? b[1];
    const A = W().domain(b).range([e.left, t - e.right]), T = A.ticks(h), C = r.map((S) => {
      const E = _(N(p), T, S);
      return E[0][1] !== 0 && E.unshift([E[0][0], 0]), E[E.length - 1][1] !== 0 && E.push([E[E.length - 1][0], 0]), E;
    }), v = u ?? H(C, (S) => H(S, (E) => E[1])), k = W().domain([0, v]).range([n - e.bottom, e.top]), $ = Me().curve($e).x((S) => A(S[0])).y((S) => k(S[1])), z = me().duration(1e3);
    if (y.selectAll("path").data(C).join(
      (S) => S.append("path").attr("stroke", "black").attr("stroke-width", 1.5).attr("stroke-linejoin", "round").attr("stroke-opacity", 1).attr("fill-opacity", x).attr("d", (E) => $(E)).style("fill", (E, F) => m[F]),
      (S) => S.call(
        (E) => E.transition(z).attr("d", (F) => $(F))
      ),
      (S) => S.remove()
    ), y.selectAll(".y-axis").data([null]).join("g").attr("class", "y-axis").attr("transform", `translate(${e.left},0)`).call(ln(k)), y.selectAll(".y-axis-label").data([null]).join("text").attr("class", "y-axis-label").text("Density →").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("x", -e.top).attr("y", e.left / 3).style("font-size", w * (3 / 4)), y.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${n - e.bottom})`).call(Dt(A)), y.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", n - e.bottom / 3).text(l).style("font-size", w * (3 / 4)), c !== void 0 && y.selectAll(".vLines").data(c).join("line").attr("class", "vLines").attr("x1", (S) => A(S)).attr("y1", k(0)).attr("x2", (S) => A(S)).attr("y2", k(v)).attr("stroke", d).attr("stroke-width", 1.5).attr("stroke-linejoin", "round").attr("opacity", x), y.selectAll(".title").data([null]).join("text").attr("class", "title").text(s).attr("text-anchor", "middle").attr("x", t / 2).attr("y", e.top / 2), i.length > 1) {
      const S = i.reduce((F, P) => Math.max(F, P.length), 0), E = y.selectAll(".legend").data(m).enter().append("g").attr("class", "legend").attr("transform", function(F, P) {
        return `translate(-${e.right + S * w / 3}, ${P * 25 + e.top + 30})`;
      });
      E.append("rect").attr("x", t - e.right).attr("width", 18).attr("height", 18).attr("stroke", "black").style("fill", function(F, P) {
        return m[P];
      }), E.append("text").attr("x", t - e.right + 24).attr("y", 9).attr("dy", ".35em").style("text-anchor", "start").text(function(F, P) {
        return i[P];
      });
    }
  };
  return f.width = function(g) {
    return arguments.length ? (t = +g, f) : t;
  }, f.height = function(g) {
    return arguments.length ? (n = +g, f) : n;
  }, f.margin = function(g) {
    return arguments.length ? (e = g, f) : e;
  }, f.data = function(g) {
    return arguments.length ? (r = g, f) : r;
  }, f.labels = function(g) {
    return arguments.length ? (i = g, f) : i;
  }, f.xMin = function(g) {
    return arguments.length ? (a = +g, f) : a;
  }, f.xMax = function(g) {
    return arguments.length ? (o = +g, f) : o;
  }, f.xLabel = function(g) {
    return arguments.length ? (l = g, f) : l;
  }, f.title = function(g) {
    return arguments.length ? (s = g, f) : s;
  }, f.yMax = function(g) {
    return arguments.length ? (u = +g, f) : u;
  }, f.vLines = function(g) {
    return arguments.length ? (c = g, f) : c;
  }, f.vLineColor = function(g) {
    return arguments.length ? (d = g, f) : d;
  }, f.numBins = function(g) {
    return arguments.length ? (h = +g, f) : h;
  }, f.bandwidth = function(g) {
    return arguments.length ? (p = +g, f) : p;
  }, f.colors = function(g) {
    return arguments.length ? (m = g, f) : m;
  }, f.opacity = function(g) {
    return arguments.length ? (x = +g, f) : x;
  }, f.fontSize = function(g) {
    return arguments.length ? (w = +g, f) : w;
  }, f;
}
function Ko(t, n) {
  const e = [], r = 1e-3 * (Math.max(...n) - Math.min(...n)), i = Math.max(...n) - Math.min(...n);
  for (let a = 0; a < t; a++) {
    const o = Math.log10(r) + (Math.log10(i) - Math.log10(r)) * a / (t - 1);
    e.push(Math.pow(10, o));
  }
  return e;
}
function Zo() {
  let t, n, e, r, i, a, o, l, s = "rgb(122, 255, 248, 0.7)", u = 1.5, c = 1, d = 3, h = 1.5, p = 15, m = 15, x = !1, w;
  const N = (f, g) => {
    const y = new Float64Array(f.length), M = g ** 2, b = 1e-3;
    let A = null, T = null;
    const C = (v, k) => {
      let $ = A;
      for (; $; ) {
        const z = $.index;
        if (M - b > (f[z] - v) ** 2 + (y[z] - k) ** 2)
          return !0;
        $ = $.next;
      }
      return !1;
    };
    for (const v of yn(f.length).sort((k, $) => f[k] - f[$])) {
      for (; A && f[A.index] < f[v] - M; )
        A = A.next;
      if (C(f[v], y[v] = 0)) {
        let $ = A;
        y[v] = 1 / 0;
        do {
          const z = $.index;
          let S = y[z] + Math.sqrt(M - (f[z] - f[v]) ** 2);
          S < y[v] && !C(f[v], S) && (y[v] = S), $ = $.next;
        } while ($);
      }
      const k = { index: v, next: null };
      A === null ? A = T = k : T = T.next = k;
    }
    return y;
  }, _ = (f) => {
    const g = f.selectAll("svg.beeswarm-plot").data([null]).join("svg").attr("class", "beeswarm-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", m);
    let y = Vt(r);
    y[0] = i ?? y[0], y[1] = a ?? y[1];
    const M = W().domain(y).range([e.left, t - e.right]), b = N(r.map((A) => M(A)), d * 2 + h).map((A) => A + e.top + p);
    g.selectAll("g.marker").data(yn(r.length)).join("g").attr("class", "marker").attr("transform", (A) => `translate(${M(r[A])}, ${b[A]})`).each(function(A) {
      const T = Ei(this);
      if (T.append("circle").attr("r", d).attr("fill", s).attr("opacity", c).attr("stroke", "black").attr("stroke-width", u).append("title").text((C) => `Value:
${r[C].toFixed(5)}`), w) {
        const C = 7 * w.length;
        T.append("text").attr("x", d - C / 2 + 5).attr("y", d + 20).attr("font-size", "12px").text(w[A]);
      }
    }), x || (g.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${e.top})`).call(Xn(M)), o && g.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", e.top * (2 / 3)).text(o).style("font-size", m * (3 / 4)));
  };
  return _.width = function(f) {
    return arguments.length ? (t = +f, _) : t;
  }, _.height = function(f) {
    return arguments.length ? (n = +f, _) : n;
  }, _.margin = function(f) {
    return arguments.length ? (e = f, _) : e;
  }, _.data = function(f) {
    return arguments.length ? (r = f, _) : r;
  }, _.xMin = function(f) {
    return arguments.length ? (i = +f, _) : i;
  }, _.xMax = function(f) {
    return arguments.length ? (a = +f, _) : a;
  }, _.xLabel = function(f) {
    return arguments.length ? (o = f, _) : o;
  }, _.title = function(f) {
    return arguments.length ? (l = f, _) : l;
  }, _.color = function(f) {
    return arguments.length ? (s = f, _) : s;
  }, _.strokeWidth = function(f) {
    return arguments.length ? (u = +f, _) : u;
  }, _.opacity = function(f) {
    return arguments.length ? (c = +f, _) : c;
  }, _.radius = function(f) {
    return arguments.length ? (d = +f, _) : d;
  }, _.markerPadding = function(f) {
    return arguments.length ? (h = +f, _) : h;
  }, _.plotPadding = function(f) {
    return arguments.length ? (p = +f, _) : p;
  }, _.fontSize = function(f) {
    return arguments.length ? (m = +f, _) : m;
  }, _.removeAxis = function(f) {
    return arguments.length ? (x = f, _) : x;
  }, _.markerText = function(f) {
    return arguments.length ? (w = f, _) : w;
  }, _;
}
function Qo() {
  let t, n, e, r, i, a, o, l, s;
  const u = (c) => {
    const h = t / 3.1, p = t - h, m = (p - s.left - s.right) / 10, x = m / 2, w = 2, N = 15, _ = Math.floor(10 * 10 * (e / 100)), f = 10 * 10 * (e / 100) - _, g = Array.from({ length: 10 * 10 }, (k, $) => ({ index: $, color: $ < _ ? r : i })), y = "m62.096 8.5859c-5.208 0-9.424 4.2191-9.424 9.4261 0.001 5.203 4.217 9.424 9.424 9.424 5.202 0 9.422-4.221 9.422-9.424 0-5.208-4.22-9.4261-9.422-9.4261zm-10.41 21.268c-6.672 0-12.131 5.407-12.131 12.07v29.23c0 2.275 1.791 4.123 4.07 4.123 2.28 0 4.127-1.846 4.127-4.123v-26.355h2.102s0.048 68.811 0.048 73.331c0 3.05 2.478 5.53 5.532 5.53 3.052 0 5.525-2.48 5.525-5.53v-42.581h2.27v42.581c0 3.05 2.473 5.53 5.531 5.53 3.054 0 5.549-2.48 5.549-5.53v-73.331h2.127v26.355c0 2.275 1.85 4.123 4.126 4.123 2.28 0 4.073-1.846 4.073-4.123v-29.23c0-6.663-5.463-12.07-12.129-12.07h-20.82z", M = c.selectAll("svg#population-prevalence-plot").data([null]).join("svg").attr("id", "population-prevalence-plot").attr("width", t).attr("height", n).attr("viewBox", `0 0 ${t} ${p}`).attr("font-family", "sans-serif");
    M.selectAll(".population-border").data([null]).join("rect").attr("class", "population-border").attr("width", p).attr("height", p).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 3).attr("transform", `translate(${w}, ${w})`);
    let b = M.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id", "color-gradient-fraction").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
    b.append("stop").attr("offset", "0%").attr("stop-color", r), b.append("stop").attr("offset", `${f * 100}%`).attr("stop-color", r), b.append("stop").attr("offset", `${f * 100}%`).attr("stop-color", i), b.append("stop").attr("offset", "100%").attr("stop-color", i);
    const A = M.selectAll("g.person").data(g);
    A.enter().append("g").attr("class", "person").merge(A).attr("transform", (k, $) => `translate(${s.left + $ % 10 * m + w}, ${s.top + Math.floor($ / 10) * m + w}) scale(${m / 124.19})`).selectAll("path").data((k) => [k]).join("path").attr("d", y).attr("fill", (k) => k.index === _ && f > 0 ? "url(#color-gradient-fraction)" : k.color), A.exit().remove();
    const v = M.selectAll("g.population-legend").data([null]).join("g").attr("class", "color-legend").attr("transform", `translate(${p + N}, ${s.top + N})`);
    v.selectAll("rect.population-legend-border").data([null]).join("rect").attr("class", "population-legend-border").attr("width", h - 20).attr("height", x * 4).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 2), v.selectAll("rect.population-legend-case-color").data([null]).join("rect").attr("class", "population-legend-case-color").attr("x", x / 2).attr("y", x / 2).attr("width", x).attr("height", x).attr("fill", r).attr("stroke", "black").attr("stroke-width", 1), v.selectAll("rect.population-legend-case-labal").data([null]).join("text").attr("class", "population-legend-case-labal").attr("x", x * 2).attr("y", m / 2).attr("dy", ".35em").text(a ?? "Case").style("font-size", `${l ?? x / 1.25}px`).style(), v.selectAll("rect.population-legend-control-color").data([null]).join("rect").attr("class", "population-legend-control-color").attr("x", x / 2).attr("y", x * 4 / 2 + x / 2).attr("width", x).attr("height", x).attr("fill", i).attr("stroke", "black").attr("stroke-width", 1), v.selectAll("rect.population-legend-control-labal").data([null]).join("text").attr("class", "population-legend-control-labal").attr("x", x * 2).attr("y", m + m / 2).attr("dy", ".35em").text(o ?? "Control").style("font-size", `${l ?? x / 1.25}px`);
  };
  return u.width = function(c) {
    return arguments.length ? (t = +c, u) : t;
  }, u.height = function(c) {
    return arguments.length ? (n = +c, u) : n;
  }, u.prevalence = function(c) {
    return arguments.length ? (e = +c, u) : e;
  }, u.colorCase = function(c) {
    return arguments.length ? (r = c, u) : r;
  }, u.colorControl = function(c) {
    return arguments.length ? (i = c, u) : i;
  }, u.labelCase = function(c) {
    return arguments.length ? (a = c, u) : a;
  }, u.labelControl = function(c) {
    return arguments.length ? (o = c, u) : o;
  }, u.fontSize = function(c) {
    return arguments.length ? (l = +c, u) : l;
  }, u.margin = function(c) {
    return arguments.length ? (s = c, u) : s;
  }, u;
}
function Jo() {
  let t, n, e, r, i, a, o, l = !1, s, u, c, d = 1, h, p = 15;
  const m = (x) => {
    const w = x.selectAll("svg.line-plot").data([null]).join("svg").attr("class", "line-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", p);
    e.sort((f, g) => K(r(f), r(g)));
    const N = W().domain(Vt(e, r)).nice().range([h.left, t - h.right]), _ = W().domain([0, H(e, (f) => H(i, (g) => g(f)))]).nice().range([n - h.bottom, h.top]);
    i.forEach((f, g) => {
      const y = Me().defined((M) => f(M) !== null).curve(l ? $e : ke).x((M) => N(r(M))).y((M) => _(f(M)));
      w.selectAll(`.line-path-${g}`).data([e]).join("path").attr("class", `line-path-${g}`).attr("fill", "none").attr("stroke", a[g]).attr("stroke-width", 1.5).attr("d", y), w.append("g").attr("transform", `translate(${h.left + 20},${h.top + g * 20})`).call((M) => M.append("rect").attr("width", 10).attr("height", 10).style("fill", a[g])).call((M) => M.append("text").attr("x", 15).attr("y", 10).text(o[g]));
    }), w.selectAll(".y-axis").data([null]).join("g").attr("class", "y-axis").attr("transform", `translate(${h.left},0)`).call(ln(_)), w.selectAll(".y-axis-label").data([null]).join("text").attr("class", "y-axis-label").text("Density →").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("x", -h.top).attr("y", h.left / 3).style("font-size", p * (3 / 4)), w.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${n - h.bottom})`).call(Dt(N)), w.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", n - h.bottom / 3).text(s).style("font-size", p * (3 / 4)), w.selectAll(".title").data([null]).join("text").attr("class", "title").text(c).attr("text-anchor", "middle").attr("x", t / 2).attr("y", h.top / 2);
  };
  return m.width = function(x) {
    return arguments.length ? (t = +x, m) : t;
  }, m.height = function(x) {
    return arguments.length ? (n = +x, m) : n;
  }, m.data = function(x) {
    return arguments.length ? (e = x, m) : e;
  }, m.xValue = function(x) {
    return arguments.length ? (r = x, m) : r;
  }, m.yValues = function(x) {
    return arguments.length ? (i = x, m) : i;
  }, m.colors = function(x) {
    return arguments.length ? (a = x, m) : a;
  }, m.labels = function(x) {
    return arguments.length ? (o = x, m) : o;
  }, m.fitCurve = function(x) {
    return arguments.length ? (l = !!x, m) : l;
  }, m.xLabel = function(x) {
    return arguments.length ? (s = x, m) : s;
  }, m.yLabel = function(x) {
    return arguments.length ? (u = x, m) : u;
  }, m.title = function(x) {
    return arguments.length ? (c = x, m) : c;
  }, m.strokeWidth = function(x) {
    return arguments.length ? (d = +x, m) : d;
  }, m.margin = function(x) {
    return arguments.length ? (h = x, m) : h;
  }, m.fontSize = function(x) {
    return arguments.length ? (p = +x, m) : p;
  }, m;
}
function tl() {
  let t, n, e, r, i, a, o, l, s, u, c, d = 1, h = "black", p = 15;
  const m = (x) => {
    const w = x.selectAll("svg.calibration-plot").data([null]).join("svg").attr("class", "calibration-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", p);
    let N = et(e, (y) => a[0](y));
    et(e, r) < N && (N = et(e, r));
    let _ = H(e, (y) => a[1](y));
    H(e, r) > _ && (_ = H(e, r));
    const f = W().domain([N, _]).nice().range([u.left, t - u.right]), g = W().domain([N, _]).nice().range([n - u.bottom, u.top]);
    w.selectAll("circle").data(e).join("circle").attr("cx", (y) => f(r(y))).attr("cy", (y) => g(i(y))).attr("r", c).attr("stroke", "black").attr("stroke-width", d).attr("fill", h).append("title").text((y) => `${o.replace(/\s*→*\s*$/, "")}: ${r(y).toFixed(4)}
${l.replace(/\s*→*\s*$/, "")}: ${i(y).toFixed(4)} [${a[0](y).toFixed(4)}, ${a[1](y).toFixed(4)}]`), a !== void 0 && (w.selectAll(".error-bar-lower").data(e).join("line").attr("class", "error-bar-lower").attr("stroke", "black").attr("stroke-width", d).attr("x1", (y) => f(r(y))).attr("y1", (y) => g(a[0](y))).attr("x2", (y) => f(r(y))).attr("y2", (y) => g(i(y)) + c), w.selectAll(".error-bar-upper").data(e).join("line").attr("class", "error-bar-upper").attr("stroke", "black").attr("stroke-width", d).attr("x1", (y) => f(r(y))).attr("y1", (y) => g(i(y)) - c).attr("x2", (y) => f(r(y))).attr("y2", (y) => g(a[1](y))), w.selectAll(".error-bar-lower-cap").data(e).join("line").attr("class", "error-bar-lower-cap").attr("stroke", "black").attr("stroke-width", d).attr("x1", (y) => f(r(y)) - 5).attr("y1", (y) => g(a[0](y))).attr("x2", (y) => f(r(y)) + 5).attr("y2", (y) => g(a[0](y))), w.selectAll(".error-bar-upper-cap").data(e).join("line").attr("class", "error-bar-upper-cap").attr("stroke", "black").attr("stroke-width", d).attr("x1", (y) => f(r(y)) - 5).attr("y1", (y) => g(a[1](y))).attr("x2", (y) => f(r(y)) + 5).attr("y2", (y) => g(a[1](y)))), w.selectAll(".y-axis-left").data([null]).join("g").attr("class", "y-axis-left").attr("transform", `translate(${u.left},0)`).call(ln(g)), w.selectAll(".y-axis-right").data([null]).join("g").attr("class", "y-axis-right").attr("transform", `translate(${t - u.right},0)`).call(We(g).tickSize(0).tickFormat("")), w.selectAll(".y-axis-label").data([null]).join("text").attr("class", "y-axis-label").text(l).attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("x", -u.top).attr("y", u.left / 3).style("font-size", p * (3 / 4)), w.selectAll(".x-axis-bottom").data([null]).join("g").attr("class", "x-axis-bottom").attr("transform", `translate(0,${n - u.bottom})`).call(Dt(f)), w.selectAll(".x-axis-top").data([null]).join("g").attr("class", "x-axis-top").attr("transform", `translate(0,${u.top})`).call(Xn(f).tickSize(0).tickFormat("")), w.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t - u.right).attr("y", n - u.bottom / 3).text(o).style("font-size", p * (3 / 4)), w.selectAll(".title").data([null]).join("text").attr("class", "title").text(s).attr("text-anchor", "middle").attr("x", t / 2).attr("y", u.top / 2), w.selectAll(".perfect-calibration-line").data([null]).join("line").attr("class", "perfect-calibration-line").attr("stroke", "black").attr("stroke-width", 1).attr("stroke-dasharray", "3,3").attr("x1", f(f.domain()[0])).attr("y1", g(f.domain()[0])).attr("x2", f(f.domain()[1])).attr("y2", g(f.domain()[1]));
  };
  return m.width = function(x) {
    return arguments.length ? (t = +x, m) : t;
  }, m.height = function(x) {
    return arguments.length ? (n = +x, m) : n;
  }, m.data = function(x) {
    return arguments.length ? (e = x, m) : e;
  }, m.xValue = function(x) {
    return arguments.length ? (r = x, m) : r;
  }, m.yValue = function(x) {
    return arguments.length ? (i = x, m) : i;
  }, m.yError = function(x) {
    return arguments.length ? (a = x, m) : a;
  }, m.xLabel = function(x) {
    return arguments.length ? (o = x, m) : o;
  }, m.yLabel = function(x) {
    return arguments.length ? (l = x, m) : l;
  }, m.title = function(x) {
    return arguments.length ? (s = x, m) : s;
  }, m.margin = function(x) {
    return arguments.length ? (u = x, m) : u;
  }, m.radius = function(x) {
    return arguments.length ? (c = +x, m) : c;
  }, m.strokeWidth = function(x) {
    return arguments.length ? (d = +x, m) : d;
  }, m.markerColor = function(x) {
    return arguments.length ? (h = x, m) : h;
  }, m.fontSize = function(x) {
    return arguments.length ? (p = +x, m) : p;
  }, m;
}
export {
  Zo as beeswarmPlot,
  Go as boxPlot,
  tl as calibrationPlot,
  Uo as densityPlot,
  Ko as getBandwidthValues,
  Jo as linePlot,
  Qo as populationPrevalencePlot,
  Wo as slider
};
//# sourceMappingURL=risk-viz.js.map
