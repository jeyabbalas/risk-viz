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
        const h = u + c >>> 1;
        e(l[h], s) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(l, s, u = 0, c = l.length) {
    if (u < c) {
      if (n(s, s) !== 0)
        return c;
      do {
        const h = u + c >>> 1;
        e(l[h], s) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(l, s, u = 0, c = l.length) {
    const h = i(l, s, u, c - 1);
    return h > u && r(l[h - 1], s) > -r(l[h], s) ? h - 1 : h;
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
function W(t, n) {
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
      const s = r - e + 1, u = n - e + 1, c = Math.log(s), h = 0.5 * Math.exp(2 * c / 3), f = 0.5 * Math.sqrt(c * h * (s - h) / s) * (u - s / 2 < 0 ? -1 : 1), p = Math.max(e, Math.floor(n - u * h / s + f)), x = Math.min(r, Math.floor(n + (s - u) * h / s + f));
      Bn(t, n, p, x, i);
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
      return W(t);
    var r, i = (r - 1) * n, a = Math.floor(i), o = W(Bn(t, a).subarray(0, a + 1)), l = et(t.subarray(a + 1));
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
  var e = [], r = null, i = null, a = 6, o = 6, l = 3, s = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === kt || t === ct ? -1 : 1, c = t === ct || t === Mt ? "x" : "y", h = t === kt || t === Ut ? He : Oe;
  function f(p) {
    var x = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), y = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : je), w = Math.max(a, 0) + l, N = n.range(), _ = +N[0] + s, g = +N[N.length - 1] + s, m = (n.bandwidth ? Xe : Be)(n.copy(), s), d = p.selection ? p.selection() : p, b = d.selectAll(".domain").data([null]), k = d.selectAll(".tick").data(x, n).order(), M = k.exit(), z = k.enter().append("g").attr("class", "tick"), S = k.select("line"), v = k.select("text");
    b = b.merge(b.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), k = k.merge(z), S = S.merge(z.append("line").attr("stroke", "currentColor").attr(c + "2", u * a)), v = v.merge(z.append("text").attr("fill", "currentColor").attr(c, u * w).attr("dy", t === kt ? "0em" : t === Ut ? "0.71em" : "0.32em")), p !== d && (b = b.transition(p), k = k.transition(p), S = S.transition(p), v = v.transition(p), M = M.transition(p).attr("opacity", _n).attr("transform", function(A) {
      return isFinite(A = m(A)) ? h(A + s) : this.getAttribute("transform");
    }), z.attr("opacity", _n).attr("transform", function(A) {
      var $ = this.parentNode.__axis;
      return h(($ && isFinite($ = $(A)) ? $ : m(A)) + s);
    })), M.remove(), b.attr("d", t === ct || t === Mt ? o ? "M" + u * o + "," + _ + "H" + s + "V" + g + "H" + u * o : "M" + s + "," + _ + "V" + g : o ? "M" + _ + "," + u * o + "V" + s + "H" + g + "V" + u * o : "M" + _ + "," + s + "H" + g), k.attr("opacity", 1).attr("transform", function(A) {
      return h(m(A) + s);
    }), S.attr(c + "2", u * a), v.attr(c, u * w).text(y), d.filter(Ye).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Mt ? "start" : t === ct ? "end" : "middle"), d.each(function() {
      this.__axis = m;
    });
  }
  return f.scale = function(p) {
    return arguments.length ? (n = p, f) : n;
  }, f.ticks = function() {
    return e = Array.from(arguments), f;
  }, f.tickArguments = function(p) {
    return arguments.length ? (e = p == null ? [] : Array.from(p), f) : e.slice();
  }, f.tickValues = function(p) {
    return arguments.length ? (r = p == null ? null : Array.from(p), f) : r && r.slice();
  }, f.tickFormat = function(p) {
    return arguments.length ? (i = p, f) : i;
  }, f.tickSize = function(p) {
    return arguments.length ? (a = o = +p, f) : a;
  }, f.tickSizeInner = function(p) {
    return arguments.length ? (a = +p, f) : a;
  }, f.tickSizeOuter = function(p) {
    return arguments.length ? (o = +p, f) : o;
  }, f.tickPadding = function(p) {
    return arguments.length ? (l = +p, f) : l;
  }, f.offset = function(p) {
    return arguments.length ? (s = +p, f) : s;
  }, f;
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
  return new R(r, this._parents);
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
  return new R(r, i);
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
  return new R(r, this._parents);
}
function Kn(t) {
  return new Array(t.length);
}
function gr() {
  return new R(this._enter || this._groups.map(Kn), this._parents);
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
  var l, s, u = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (l = 0; l < c; ++l)
    (s = n[l]) && (f[l] = p = o.call(s, s.__data__, l, n) + "", u.has(p) ? i[l] = s : u.set(p, s));
  for (l = 0; l < h; ++l)
    p = o.call(t, a[l], l, a) + "", (s = u.get(p)) ? (r[l] = s, s.__data__ = a[l], u.delete(p)) : e[l] = new Et(t, a[l]);
  for (l = 0; l < c; ++l)
    (s = n[l]) && u.get(f[l]) === s && (i[l] = s);
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
    var c = r[u], h = i[u], f = h.length, p = wr(t.call(c, c && c.__data__, u, r)), x = p.length, y = l[u] = new Array(x), w = o[u] = new Array(x), N = s[u] = new Array(f);
    e(c, h, y, w, N, p, n);
    for (var _ = 0, g = 0, m, d; _ < x; ++_)
      if (m = y[_]) {
        for (_ >= g && (g = _ + 1); !(d = w[g]) && ++g < x; )
          ;
        m._next = d || null;
      }
  }
  return o = new R(o, r), o._enter = l, o._exit = s, o;
}
function wr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function vr() {
  return new R(this._exit || this._groups.map(Kn), this._parents);
}
function br(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function kr(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), l = new Array(i), s = 0; s < o; ++s)
    for (var u = e[s], c = r[s], h = u.length, f = l[s] = new Array(h), p, x = 0; x < h; ++x)
      (p = u[x] || c[x]) && (f[x] = p);
  for (; s < i; ++s)
    l[s] = e[s];
  return new R(l, this._parents);
}
function Mr() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Ar(t) {
  t || (t = $r);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], l = o.length, s = i[a] = new Array(l), u, c = 0; c < l; ++c)
      (u = o[c]) && (s[c] = u);
    s.sort(n);
  }
  return new R(i, this._parents).order();
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
function R(t, n) {
  this._groups = t, this._parents = n;
}
function lt() {
  return new R([[document.documentElement]], re);
}
function Si() {
  return this;
}
R.prototype = lt.prototype = {
  constructor: R,
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
  return typeof t == "string" ? new R([[document.querySelector(t)]], [document.documentElement]) : new R([[t]], re);
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
var gt = 0.7, Ct = 1 / gt, rt = "\\s*([+-]?\\d+)\\s*", pt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", j = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ti = /^#([0-9a-f]{3,8})$/, Pi = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), Li = new RegExp(`^rgb\\(${j},${j},${j}\\)$`), Fi = new RegExp(`^rgba\\(${rt},${rt},${rt},${pt}\\)$`), Ri = new RegExp(`^rgba\\(${j},${j},${j},${pt}\\)$`), Ii = new RegExp(`^hsl\\(${pt},${j},${j}\\)$`), Vi = new RegExp(`^hsla\\(${pt},${j},${j},${pt}\\)$`), bn = {
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
  return t = (t + "").trim().toLowerCase(), (n = Ti.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? An(n) : e === 3 ? new F(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? _t(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? _t(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Pi.exec(t)) ? new F(n[1], n[2], n[3], 1) : (n = Li.exec(t)) ? new F(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Fi.exec(t)) ? _t(n[1], n[2], n[3], n[4]) : (n = Ri.exec(t)) ? _t(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ii.exec(t)) ? Sn(n[1], n[2] / 100, n[3] / 100, 1) : (n = Vi.exec(t)) ? Sn(n[1], n[2] / 100, n[3] / 100, n[4]) : bn.hasOwnProperty(t) ? An(bn[t]) : t === "transparent" ? new F(NaN, NaN, NaN, 0) : null;
}
function An(t) {
  return new F(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function _t(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new F(t, n, e, r);
}
function ji(t) {
  return t instanceof xt || (t = Q(t)), t ? (t = t.rgb(), new F(t.r, t.g, t.b, t.opacity)) : new F();
}
function Zt(t, n, e, r) {
  return arguments.length === 1 ? ji(t) : new F(t, n, e, r ?? 1);
}
function F(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
fn(F, Zt, ie(xt, {
  brighter(t) {
    return t = t == null ? Ct : Math.pow(Ct, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? gt : Math.pow(gt, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new F(Z(this.r), Z(this.g), Z(this.b), zt(this.opacity));
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
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new q(t, n, e, r);
}
function ae(t) {
  if (t instanceof q)
    return new q(t.h, t.s, t.l, t.opacity);
  if (t instanceof xt || (t = Q(t)), !t)
    return new q();
  if (t instanceof q)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, l = a - i, s = (a + i) / 2;
  return l ? (n === a ? o = (e - r) / l + (e < r) * 6 : e === a ? o = (r - n) / l + 2 : o = (n - e) / l + 4, l /= s < 0.5 ? a + i : 2 - a - i, o *= 60) : l = s > 0 && s < 1 ? 0 : o, new q(o, l, s, t.opacity);
}
function Oi(t, n, e, r) {
  return arguments.length === 1 ? ae(t) : new q(t, n, e, r ?? 1);
}
function q(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
fn(q, Oi, ie(xt, {
  brighter(t) {
    return t = t == null ? Ct : Math.pow(Ct, t), new q(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? gt : Math.pow(gt, t), new q(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new F(
      Yt(t >= 240 ? t - 240 : t + 120, i, r),
      Yt(t, i, r),
      Yt(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new q(En(this.h), wt(this.s), wt(this.l), zt(this.opacity));
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
function V(t, n) {
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
    (a = i.index) > e && (a = n.slice(e, a), l[o] ? l[o] += a : l[++o] = a), (r = r[0]) === (i = i[0]) ? l[o] ? l[o] += i : l[++o] = i : (l[++o] = null, s.push({ i: o, x: V(r, i) })), e = Wt.lastIndex;
  return e < n.length && (a = n.slice(e), l[o] ? l[o] += a : l[++o] = a), l.length < 2 ? s[0] ? Ji(s[0].x) : Qi(n) : (n = s.length, function(u) {
    for (var c = 0, h; c < n; ++c)
      l[(h = s[c]).i] = h.x(u);
    return l.join("");
  });
}
function dn(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? hn(n) : (e === "number" ? V : e === "string" ? (r = Q(n)) ? (n = r, Tt) : le : n instanceof Q ? Tt : n instanceof Date ? Ki : Gi(n) ? Wi : Array.isArray(n) ? Ui : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Zi : V)(t, n);
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
  function a(u, c, h, f, p, x) {
    if (u !== h || c !== f) {
      var y = p.push("translate(", null, n, null, e);
      x.push({ i: y - 4, x: V(u, h) }, { i: y - 2, x: V(c, f) });
    } else
      (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: V(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function l(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: V(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function s(u, c, h, f, p, x) {
    if (u !== h || c !== f) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      x.push({ i: y - 4, x: V(u, h) }, { i: y - 2, x: V(c, f) });
    } else
      (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), o(u.rotate, c.rotate, h, f), l(u.skewX, c.skewX, h, f), s(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var x = -1, y = f.length, w; ++x < y; )
        h[(w = f[x]).i] = w.x(p);
      return h.join("");
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
  var e = D(t, n);
  if (e.state > de)
    throw new Error("too late; already scheduled");
  return e;
}
function H(t, n) {
  var e = D(t, n);
  if (e.state > $t)
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
  r[n] = e, e.timer = he(a, 0, e.time);
  function a(u) {
    e.state = Pn, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, h, f, p;
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
      for (e.state = $t, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function l(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(s), e.state = en, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
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
    var i = H(this, t), a = i.tween;
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
    var a = H(this, t), o = a.tween;
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
    for (var r = D(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? ga : pa)(e, t, n));
}
function mn(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = H(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return D(i, r).value[n];
  };
}
function ge(t, n) {
  var e;
  return (typeof n == "number" ? V : n instanceof Q ? Tt : (e = Q(n)) ? (n = e, Tt) : le)(t, n);
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
  return arguments.length ? this.each((typeof t == "function" ? Ea : Ca)(n, t)) : D(this.node(), n).delay;
}
function Ta(t, n) {
  return function() {
    H(this, t).duration = +n.apply(this, arguments);
  };
}
function Pa(t, n) {
  return n = +n, function() {
    H(this, t).duration = n;
  };
}
function La(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ta : Pa)(n, t)) : D(this.node(), n).duration;
}
function Fa(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    H(this, t).ease = n;
  };
}
function Ra(t) {
  var n = this._id;
  return arguments.length ? this.each(Fa(n, t)) : D(this.node(), n).ease;
}
function Ia(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    H(this, t).ease = e;
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
  return new B(r, this._parents, this._name, this._id);
}
function Da(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), l = 0; l < a; ++l)
    for (var s = n[l], u = e[l], c = s.length, h = o[l] = new Array(c), f, p = 0; p < c; ++p)
      (f = s[p] || u[p]) && (h[p] = f);
  for (; l < r; ++l)
    o[l] = n[l];
  return new B(o, this._parents, this._name, this._id);
}
function ja(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Ha(t, n, e) {
  var r, i, a = ja(n) ? pn : H;
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
  typeof t != "function" && (t = un(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var l = r[o], s = l.length, u = a[o] = new Array(s), c, h, f = 0; f < s; ++f)
      (c = l[f]) && (h = t.call(c, c.__data__, f, l)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Ot(u[f], n, e, f, u, D(c, e)));
  return new B(a, this._parents, n, e);
}
function Wa(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Wn(t));
  for (var r = this._groups, i = r.length, a = [], o = [], l = 0; l < i; ++l)
    for (var s = r[l], u = s.length, c, h = 0; h < u; ++h)
      if (c = s[h]) {
        for (var f = t.call(c, c.__data__, h, s), p, x = D(c, e), y = 0, w = f.length; y < w; ++y)
          (p = f[y]) && Ot(p, n, e, y, f, x);
        a.push(f), o.push(c);
      }
  return new B(a, o, n, e);
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
    var s = H(this, t), u = s.on, c = s.value[a] == null ? l || (l = pe(n)) : void 0;
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
        var c = D(s, n);
        Ot(s, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new B(r, this._parents, t, e);
}
function fo() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var l = { value: o }, s = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = H(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(l), n._.interrupt.push(l), n._.end.push(s)), u.on = n;
    }), i === 0 && a();
  });
}
var ho = 0;
function B(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function me(t) {
  return lt().transition(t);
}
function xe() {
  return ++ho;
}
var O = lt.prototype;
B.prototype = me.prototype = {
  constructor: B,
  select: Ya,
  selectAll: Wa,
  selectChild: O.selectChild,
  selectChildren: O.selectChildren,
  filter: qa,
  merge: Da,
  selection: Ua,
  transition: co,
  call: O.call,
  nodes: O.nodes,
  node: O.node,
  size: O.size,
  empty: O.empty,
  each: O.each,
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
  [Symbol.iterator]: O[Symbol.iterator]
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
  t instanceof B ? (n = t._id, t = t._name) : (n = xe(), (e = po).time = gn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], l = o.length, s, u = 0; u < l; ++u)
      (s = o[u]) && Ot(s, t, n, u, o, e || mo(s, n));
  return new B(r, this._parents, t, n);
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
    let o = this._x1, l = this._y1, s = r - n, u = i - e, c = o - n, h = l - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > G)
      if (!(Math.abs(h * s - u * c) > G) || !a)
        this._append`L${this._x1 = n},${this._y1 = e}`;
      else {
        let p = r - o, x = i - l, y = s * s + u * u, w = p * p + x * x, N = Math.sqrt(y), _ = Math.sqrt(f), g = a * Math.tan((rn - Math.acos((y + f - w) / (2 * N * _))) / 2), m = g / _, d = g / N;
        Math.abs(m - 1) > G && this._append`L${n + m * c},${e + m * h}`, this._append`A${a},${a},0,0,${+(h * p > c * x)},${this._x1 = n + d * s},${this._y1 = e + d * u}`;
      }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0)
      throw new Error(`negative radius: ${r}`);
    let l = r * Math.cos(i), s = r * Math.sin(i), u = n + l, c = e + s, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > G || Math.abs(this._y1 - c) > G) && this._append`L${u},${c}`, r && (f < 0 && (f = f % an + an), f > yo ? this._append`A${r},${r},0,1,${h},${n - l},${e - s}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > G && this._append`A${r},${r},0,${+(f >= rn)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
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
  function u(h) {
    h = It(h);
    var f = h.fill, p = h.align, x = h.sign, y = h.symbol, w = h.zero, N = h.width, _ = h.comma, g = h.precision, m = h.trim, d = h.type;
    d === "n" ? (_ = !0, d = "g") : Rn[d] || (g === void 0 && (g = 12), m = !0, d = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var b = y === "$" ? e : y === "#" && /[boxX]/.test(d) ? "0" + d.toLowerCase() : "", k = y === "$" ? r : /[%p]/.test(d) ? o : "", M = Rn[d], z = /[defgprs%]/.test(d);
    g = g === void 0 ? 6 : /[gprs]/.test(d) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));
    function S(v) {
      var A = b, $ = k, C, P, E;
      if (d === "c")
        $ = M(v) + $, v = "";
      else {
        v = +v;
        var L = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? s : M(Math.abs(v), g), m && (v = Ao(v)), L && +v == 0 && x !== "+" && (L = !1), A = (L ? x === "(" ? x : l : x === "-" || x === "(" ? "" : x) + A, $ = (d === "s" ? qn[8 + _e / 3] : "") + $ + (L && x === "(" ? ")" : ""), z) {
          for (C = -1, P = v.length; ++C < P; )
            if (E = v.charCodeAt(C), 48 > E || E > 57) {
              $ = (E === 46 ? i + v.slice(C + 1) : v.slice(C)) + $, v = v.slice(0, C);
              break;
            }
        }
      }
      _ && !w && (v = n(v, 1 / 0));
      var Y = A.length + v.length + $.length, I = Y < N ? new Array(N - Y + 1).join(f) : "";
      switch (_ && w && (v = n(I + v, I.length ? N - $.length : 1 / 0), I = ""), p) {
        case "<":
          v = A + v + $ + I;
          break;
        case "=":
          v = A + I + v + $;
          break;
        case "^":
          v = I.slice(0, Y = I.length >> 1) + A + v + $ + I.slice(Y);
          break;
        default:
          v = I + A + v + $;
          break;
      }
      return a(v);
    }
    return S.toString = function() {
      return h + "";
    }, S;
  }
  function c(h, f) {
    var p = u((h = It(h), h.type = "f", h)), x = Math.max(-8, Math.min(8, Math.floor(ot(f) / 3))) * 3, y = Math.pow(10, -x), w = qn[8 + x / 3];
    return function(N) {
      return p(y * N) + w;
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
    var f = Math.min(t.length, n.length);
    return o !== nt && (o = Fo(t[0], t[f - 1])), l = f > 2 ? Io : Ro, s = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (s || (s = l(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = l(n, t.map(r), V)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, Lo), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = ta, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : nt, c()) : o !== nt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
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
function X() {
  var t = Do();
  return t.copy = function() {
    return Vo(t, X());
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
    var u, c = (s = Bo(s)).length, h, f = !1, p;
    for (r == null && (a = i(p = o())), u = 0; u <= c; ++u)
      !(u < c && e(h = s[u], u, s)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+t(h, u, s), +n(h, u, s));
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
  let t, n, e, r, i, a, o, l = "red", s, u, c, h = "rgb(122, 255, 248, 0.7)", f = 1.5, p = 1, x, y = 15, w = 0, N = 0, _ = !1;
  const g = (m) => {
    const d = m.selectAll("svg.box-plot").data([null]).join("svg").attr("class", "box-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", y);
    let b = Vt(r);
    b[0] = i ?? b[0], b[1] = a ?? b[1];
    const k = X().domain(b).range([e.left, t - e.right]), M = Xt(r, 0.25), z = Xt(r, 0.5), S = Xt(r, 0.75), v = S - M;
    let A = M - v * 1.5;
    const $ = et(r);
    A = $ > A ? $ : A;
    let C = S + v * 1.5;
    const P = W(r);
    C = P < C ? P : C;
    const E = r.filter((T) => T < A || T > C), L = r.reduce((T, yt) => T + yt, 0) / r.length, Y = m.selectAll("div.tooltip").data([null]).join("div").attr("class", "tooltip").style("position", "absolute").style("opacity", 0);
    d.on("mouseover", function(T) {
      const Bt = `
        Minimum: ${A.toFixed(5)}<br>
        25th percentile: ${M.toFixed(5)}<br>
        Median: ${z.toFixed(5)}<br>
        75th percentile: ${S.toFixed(5)}<br>
        Maximum: ${C.toFixed(5)}<br>
        Inter-quartile range: ${v.toFixed(5)}<br>
        Mean: ${L.toFixed(5)}
        `;
      Y.style("opacity", 1).style("border-color", h).html(Bt);
    }).on("mouseout", () => {
      Y.style("opacity", 0);
    }).on("mousemove", function(T) {
      const [yt, Bt] = zi(T, this);
      Y.style("left", yt + w + "px").style("top", Bt + N + "px");
    });
    const I = E.filter((T) => T < b[1] && T > b[0]);
    d.selectAll("circle").data(I).join("circle").attr("cx", (T) => k(T)).attr("cy", () => n / 2 + (Math.random() * (c / 2) - c / 4)).attr("r", x).attr("fill", h).attr("opacity", p).attr("stroke", "black").attr("stroke-width", f), d.selectAll("rect").data([null]).join("rect").attr("x", k(M)).attr("y", n / 2 - c / 2).attr("width", k(S) - k(M)).attr("height", c).attr("fill", h).attr("stroke", "black").attr("stroke-width", f), d.selectAll("#median").data([null]).join("line").attr("id", "median").attr("x1", k(z)).attr("y1", n / 2 - c / 2).attr("x2", k(z)).attr("y2", n / 2 + c / 2).attr("stroke", "black").attr("stroke-width", f * 2), d.selectAll("#lower-whisker").data([null]).join("line").attr("id", "lower-whisker").attr("x1", k(A)).attr("y1", n / 2).attr("x2", k(M)).attr("y2", n / 2).attr("stroke", "black").attr("stroke-width", f), d.selectAll("#lower-whisker-edge").data([null]).join("line").attr("id", "lower-whisker-edge").attr("x1", k(A)).attr("y1", n / 2 - c / 4).attr("x2", k(A)).attr("y2", n / 2 + c / 4).attr("stroke", "black").attr("stroke-width", f), d.selectAll("#upper-whisker").data([null]).join("line").attr("id", "upper-whisker").attr("x1", k(S)).attr("y1", n / 2).attr("x2", k(C)).attr("y2", n / 2).attr("stroke", "black").attr("stroke-width", f), d.selectAll("#upper-whisker-edge").data([null]).join("line").attr("id", "upper-whisker-edge").attr("x1", k(C)).attr("y1", n / 2 - c / 4).attr("x2", k(C)).attr("y2", n / 2 + c / 4).attr("stroke", "black").attr("stroke-width", f), _ || (d.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${n - e.bottom})`).call(Dt(k)), s && d.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", n - e.bottom / 3).text(s).style("font-size", y * (3 / 4))), o !== void 0 && d.selectAll(".vLines").data(o).join("line").attr("class", "vLines").attr("x1", (T) => k(T)).attr("y1", n / 2 - c / 2).attr("x2", (T) => k(T)).attr("y2", n / 2 + c / 2).attr("stroke", l).attr("stroke-width", 1.5), u && d.selectAll(".title").data([null]).join("text").attr("class", "title").text(u).attr("text-anchor", "middle").attr("x", t / 2).attr("y", e.top / 2);
  };
  return g.width = function(m) {
    return arguments.length ? (t = +m, g) : t;
  }, g.height = function(m) {
    return arguments.length ? (n = +m, g) : n;
  }, g.margin = function(m) {
    return arguments.length ? (e = m, g) : e;
  }, g.data = function(m) {
    return arguments.length ? (r = m, g) : r;
  }, g.xMin = function(m) {
    return arguments.length ? (i = +m, g) : i;
  }, g.xMax = function(m) {
    return arguments.length ? (a = +m, g) : a;
  }, g.vLines = function(m) {
    return arguments.length ? (o = m, g) : o;
  }, g.vLineColor = function(m) {
    return arguments.length ? (l = m, g) : l;
  }, g.xLabel = function(m) {
    return arguments.length ? (s = m, g) : s;
  }, g.title = function(m) {
    return arguments.length ? (u = m, g) : u;
  }, g.boxWidth = function(m) {
    return arguments.length ? (c = +m, g) : c;
  }, g.color = function(m) {
    return arguments.length ? (h = m, g) : h;
  }, g.strokeWidth = function(m) {
    return arguments.length ? (f = +m, g) : f;
  }, g.opacity = function(m) {
    return arguments.length ? (p = +m, g) : p;
  }, g.radius = function(m) {
    return arguments.length ? (x = +m, g) : x;
  }, g.fontSize = function(m) {
    return arguments.length ? (y = +m, g) : y;
  }, g.hoverOffsetX = function(m) {
    return arguments.length ? (w = +m, g) : w;
  }, g.hoverOffsetY = function(m) {
    return arguments.length ? (N = +m, g) : N;
  }, g.removeAxis = function(m) {
    return arguments.length ? (_ = m, g) : _;
  }, g;
}
function Uo() {
  let t, n, e, r, i, a, o, l, s, u, c = "red", h = 40, f, p = "rgb(122, 255, 248, 0.7)", x = 1, y, w, N = 15;
  const _ = (d) => (b) => Math.abs(b /= d) <= 1 ? 0.75 * (1 - b * b) / d : 0, g = (d, b, k) => b.map((M) => [M, De(k, (z) => d(M - z))]), m = (d) => {
    const b = d.selectAll("svg.density-plot").data([null]).join("svg").attr("class", "density-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", N);
    let k = Vt(r);
    k[0] = i ?? k[0], k[1] = a ?? k[1];
    const M = X().domain(k).range([e.left, t - e.right]), z = M.ticks(h), S = g(_(f), z, r), v = s ?? Math.max(...S.map((E) => E[1])), A = X().domain([0, v]).range([n - e.bottom, e.top]);
    S[0][1] !== 0 && S.unshift([S[0][0], 0]), S[S.length - 1][1] !== 0 && S.push([S[S.length - 1][0], 0]);
    const $ = Me().curve($e).x((E) => M(E[0])).y((E) => A(E[1])), C = me().duration(1e3);
    let P = b.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id", "color-gradient");
    if (y && w && w.length === y.length + 1) {
      P.append("stop").attr("offset", "0%").attr("stop-color", w[0]);
      for (let E = 0; E < y.length; E++) {
        let L = ((y[E] - k[0]) / (k[1] - k[0]) * 100).toFixed(1);
        L < 0 && (L = 0), L > 100 && (L = 100), P.append("stop").attr("offset", `${L}%`).attr("stop-color", w[E]), P.append("stop").attr("offset", `${L}%`).attr("stop-color", w[E + 1]);
      }
      P.append("stop").attr("offset", "100%").attr("stop-color", w[w.length - 1]);
    } else
      P.append("stop").attr("offset", "100%").attr("stop-color", p);
    b.selectAll("path").data([null]).join(
      (E) => E.append("path").attr("stroke", "black").attr("stroke-width", 1.5).attr("stroke-linejoin", "round").attr("opacity", x).attr("d", $(S)).style("fill", "url(#color-gradient)"),
      (E) => E.call(
        (L) => L.transition(C).attr("d", $(S))
      ),
      (E) => E.remove()
    ), b.selectAll(".y-axis").data([null]).join("g").attr("class", "y-axis").attr("transform", `translate(${e.left},0)`).call(ln(A)), b.selectAll(".y-axis-label").data([null]).join("text").attr("class", "y-axis-label").text("Density →").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("x", -e.top).attr("y", e.left / 3).style("font-size", N * (3 / 4)), b.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${n - e.bottom})`).call(Dt(M)), b.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", n - e.bottom / 3).text(o).style("font-size", N * (3 / 4)), u !== void 0 && b.selectAll(".vLines").data(u).join("line").attr("class", "vLines").attr("x1", (E) => M(E)).attr("y1", A(0)).attr("x2", (E) => M(E)).attr("y2", A(v)).attr("stroke", c).attr("stroke-width", 1.5).attr("stroke-linejoin", "round").attr("opacity", x), b.selectAll(".title").data([null]).join("text").attr("class", "title").text(l).attr("text-anchor", "middle").attr("x", t / 2).attr("y", e.top / 2);
  };
  return m.width = function(d) {
    return arguments.length ? (t = +d, m) : t;
  }, m.height = function(d) {
    return arguments.length ? (n = +d, m) : n;
  }, m.margin = function(d) {
    return arguments.length ? (e = d, m) : e;
  }, m.data = function(d) {
    return arguments.length ? (r = d, m) : r;
  }, m.xMin = function(d) {
    return arguments.length ? (i = +d, m) : i;
  }, m.xMax = function(d) {
    return arguments.length ? (a = +d, m) : a;
  }, m.xLabel = function(d) {
    return arguments.length ? (o = d, m) : o;
  }, m.title = function(d) {
    return arguments.length ? (l = d, m) : l;
  }, m.yMax = function(d) {
    return arguments.length ? (s = +d, m) : s;
  }, m.vLines = function(d) {
    return arguments.length ? (u = d, m) : u;
  }, m.vLineColor = function(d) {
    return arguments.length ? (c = d, m) : c;
  }, m.numBins = function(d) {
    return arguments.length ? (h = +d, m) : h;
  }, m.bandwidth = function(d) {
    return arguments.length ? (f = +d, m) : f;
  }, m.color = function(d) {
    return arguments.length ? (p = d, m) : p;
  }, m.opacity = function(d) {
    return arguments.length ? (x = +d, m) : x;
  }, m.cutoffs = function(d) {
    return arguments.length ? (y = d, m) : y;
  }, m.cutoffColors = function(d) {
    return arguments.length ? (w = d, m) : w;
  }, m.fontSize = function(d) {
    return arguments.length ? (N = +d, m) : N;
  }, m;
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
  let t, n, e, r, i, a, o, l, s = "rgb(122, 255, 248, 0.7)", u = 1.5, c = 1, h = 3, f = 1.5, p = 15, x = 15, y = !1, w;
  const N = (g, m) => {
    const d = new Float64Array(g.length), b = m ** 2, k = 1e-3;
    let M = null, z = null;
    const S = (v, A) => {
      let $ = M;
      for (; $; ) {
        const C = $.index;
        if (b - k > (g[C] - v) ** 2 + (d[C] - A) ** 2)
          return !0;
        $ = $.next;
      }
      return !1;
    };
    for (const v of yn(g.length).sort((A, $) => g[A] - g[$])) {
      for (; M && g[M.index] < g[v] - b; )
        M = M.next;
      if (S(g[v], d[v] = 0)) {
        let $ = M;
        d[v] = 1 / 0;
        do {
          const C = $.index;
          let P = d[C] + Math.sqrt(b - (g[C] - g[v]) ** 2);
          P < d[v] && !S(g[v], P) && (d[v] = P), $ = $.next;
        } while ($);
      }
      const A = { index: v, next: null };
      M === null ? M = z = A : z = z.next = A;
    }
    return d;
  }, _ = (g) => {
    const m = g.selectAll("svg.beeswarm-plot").data([null]).join("svg").attr("class", "beeswarm-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", x);
    let d = Vt(r);
    d[0] = i ?? d[0], d[1] = a ?? d[1];
    const b = X().domain(d).range([e.left, t - e.right]), k = N(r.map((M) => b(M)), h * 2 + f).map((M) => M + e.top + p);
    m.selectAll("g.marker").data(yn(r.length)).join("g").attr("class", "marker").attr("transform", (M) => `translate(${b(r[M])}, ${k[M]})`).each(function(M) {
      const z = Ei(this);
      if (z.append("circle").attr("r", h).attr("fill", s).attr("opacity", c).attr("stroke", "black").attr("stroke-width", u).append("title").text((S) => `Value:
${r[S].toFixed(5)}`), w) {
        const S = 7 * w.length;
        z.append("text").attr("x", h - S / 2 + 5).attr("y", h + 20).attr("font-size", "12px").text(w[M]);
      }
    }), y || (m.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${e.top})`).call(Xn(b)), o && m.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", e.top * (2 / 3)).text(o).style("font-size", x * (3 / 4)));
  };
  return _.width = function(g) {
    return arguments.length ? (t = +g, _) : t;
  }, _.height = function(g) {
    return arguments.length ? (n = +g, _) : n;
  }, _.margin = function(g) {
    return arguments.length ? (e = g, _) : e;
  }, _.data = function(g) {
    return arguments.length ? (r = g, _) : r;
  }, _.xMin = function(g) {
    return arguments.length ? (i = +g, _) : i;
  }, _.xMax = function(g) {
    return arguments.length ? (a = +g, _) : a;
  }, _.xLabel = function(g) {
    return arguments.length ? (o = g, _) : o;
  }, _.title = function(g) {
    return arguments.length ? (l = g, _) : l;
  }, _.color = function(g) {
    return arguments.length ? (s = g, _) : s;
  }, _.strokeWidth = function(g) {
    return arguments.length ? (u = +g, _) : u;
  }, _.opacity = function(g) {
    return arguments.length ? (c = +g, _) : c;
  }, _.radius = function(g) {
    return arguments.length ? (h = +g, _) : h;
  }, _.markerPadding = function(g) {
    return arguments.length ? (f = +g, _) : f;
  }, _.plotPadding = function(g) {
    return arguments.length ? (p = +g, _) : p;
  }, _.fontSize = function(g) {
    return arguments.length ? (x = +g, _) : x;
  }, _.removeAxis = function(g) {
    return arguments.length ? (y = g, _) : y;
  }, _.markerText = function(g) {
    return arguments.length ? (w = g, _) : w;
  }, _;
}
function Qo() {
  let t, n, e, r, i, a, o, l, s;
  const u = (c) => {
    const f = t / 3.1, p = t - f, x = (p - s.left - s.right) / 10, y = x / 2, w = 2, N = 15, _ = Math.floor(10 * 10 * (e / 100)), g = 10 * 10 * (e / 100) - _, m = Array.from({ length: 10 * 10 }, (A, $) => ({ index: $, color: $ < _ ? r : i })), d = "m62.096 8.5859c-5.208 0-9.424 4.2191-9.424 9.4261 0.001 5.203 4.217 9.424 9.424 9.424 5.202 0 9.422-4.221 9.422-9.424 0-5.208-4.22-9.4261-9.422-9.4261zm-10.41 21.268c-6.672 0-12.131 5.407-12.131 12.07v29.23c0 2.275 1.791 4.123 4.07 4.123 2.28 0 4.127-1.846 4.127-4.123v-26.355h2.102s0.048 68.811 0.048 73.331c0 3.05 2.478 5.53 5.532 5.53 3.052 0 5.525-2.48 5.525-5.53v-42.581h2.27v42.581c0 3.05 2.473 5.53 5.531 5.53 3.054 0 5.549-2.48 5.549-5.53v-73.331h2.127v26.355c0 2.275 1.85 4.123 4.126 4.123 2.28 0 4.073-1.846 4.073-4.123v-29.23c0-6.663-5.463-12.07-12.129-12.07h-20.82z", b = c.selectAll("svg#population-prevalence-plot").data([null]).join("svg").attr("id", "population-prevalence-plot").attr("width", t).attr("height", n).attr("viewBox", `0 0 ${t} ${p}`).attr("font-family", "sans-serif");
    b.selectAll(".population-border").data([null]).join("rect").attr("class", "population-border").attr("width", p).attr("height", p).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 3).attr("transform", `translate(${w}, ${w})`);
    let k = b.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id", "color-gradient-fraction").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
    k.append("stop").attr("offset", "0%").attr("stop-color", r), k.append("stop").attr("offset", `${g * 100}%`).attr("stop-color", r), k.append("stop").attr("offset", `${g * 100}%`).attr("stop-color", i), k.append("stop").attr("offset", "100%").attr("stop-color", i);
    const M = b.selectAll("g.person").data(m);
    M.enter().append("g").attr("class", "person").merge(M).attr("transform", (A, $) => `translate(${s.left + $ % 10 * x + w}, ${s.top + Math.floor($ / 10) * x + w}) scale(${x / 124.19})`).selectAll("path").data((A) => [A]).join("path").attr("d", d).attr("fill", (A) => A.index === _ && g > 0 ? "url(#color-gradient-fraction)" : A.color), M.exit().remove();
    const v = b.selectAll("g.population-legend").data([null]).join("g").attr("class", "color-legend").attr("transform", `translate(${p + N}, ${s.top + N})`);
    v.selectAll("rect.population-legend-border").data([null]).join("rect").attr("class", "population-legend-border").attr("width", f - 20).attr("height", y * 4).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 2), v.selectAll("rect.population-legend-case-color").data([null]).join("rect").attr("class", "population-legend-case-color").attr("x", y / 2).attr("y", y / 2).attr("width", y).attr("height", y).attr("fill", r).attr("stroke", "black").attr("stroke-width", 1), v.selectAll("rect.population-legend-case-labal").data([null]).join("text").attr("class", "population-legend-case-labal").attr("x", y * 2).attr("y", x / 2).attr("dy", ".35em").text(a ?? "Case").style("font-size", `${l ?? y / 1.25}px`).style(), v.selectAll("rect.population-legend-control-color").data([null]).join("rect").attr("class", "population-legend-control-color").attr("x", y / 2).attr("y", y * 4 / 2 + y / 2).attr("width", y).attr("height", y).attr("fill", i).attr("stroke", "black").attr("stroke-width", 1), v.selectAll("rect.population-legend-control-labal").data([null]).join("text").attr("class", "population-legend-control-labal").attr("x", y * 2).attr("y", x + x / 2).attr("dy", ".35em").text(o ?? "Control").style("font-size", `${l ?? y / 1.25}px`);
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
  let t, n, e, r, i, a, o, l = !1, s, u, c, h = 1, f, p = 15;
  const x = (y) => {
    const w = y.selectAll("svg.line-plot").data([null]).join("svg").attr("class", "line-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", p);
    e.sort((g, m) => K(r(g), r(m)));
    const N = X().domain(Vt(e, r)).nice().range([f.left, t - f.right]), _ = X().domain([0, W(e, (g) => W(i, (m) => m(g)))]).nice().range([n - f.bottom, f.top]);
    i.forEach((g, m) => {
      const d = Me().defined((b) => g(b) !== null).curve(l ? $e : ke).x((b) => N(r(b))).y((b) => _(g(b)));
      w.selectAll(`.line-path-${m}`).data([e]).join("path").attr("class", `line-path-${m}`).attr("fill", "none").attr("stroke", a[m]).attr("stroke-width", 1.5).attr("d", d), w.append("g").attr("transform", `translate(${f.left + 20},${f.top + m * 20})`).call((b) => b.append("rect").attr("width", 10).attr("height", 10).style("fill", a[m])).call((b) => b.append("text").attr("x", 15).attr("y", 10).text(o[m]));
    }), w.selectAll(".y-axis").data([null]).join("g").attr("class", "y-axis").attr("transform", `translate(${f.left},0)`).call(ln(_)), w.selectAll(".y-axis-label").data([null]).join("text").attr("class", "y-axis-label").text("Density →").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("x", -f.top).attr("y", f.left / 3).style("font-size", p * (3 / 4)), w.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${n - f.bottom})`).call(Dt(N)), w.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", n - f.bottom / 3).text(s).style("font-size", p * (3 / 4)), w.selectAll(".title").data([null]).join("text").attr("class", "title").text(c).attr("text-anchor", "middle").attr("x", t / 2).attr("y", f.top / 2);
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
    return arguments.length ? (c = y, x) : c;
  }, x.strokeWidth = function(y) {
    return arguments.length ? (h = +y, x) : h;
  }, x.margin = function(y) {
    return arguments.length ? (f = y, x) : f;
  }, x.fontSize = function(y) {
    return arguments.length ? (p = +y, x) : p;
  }, x;
}
function tl() {
  let t, n, e, r, i, a, o, l, s, u, c, h = 1, f = "black", p = 15;
  const x = (y) => {
    const w = y.selectAll("svg.calibration-plot").data([null]).join("svg").attr("class", "calibration-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", p);
    let N = et(e, (d) => a[0](d));
    et(e, r) < N && (N = et(e, r));
    let _ = W(e, (d) => a[1](d));
    W(e, r) > _ && (_ = W(e, r));
    const g = X().domain([N, _]).nice().range([u.left, t - u.right]), m = X().domain([N, _]).nice().range([n - u.bottom, u.top]);
    w.selectAll("circle").data(e).join("circle").attr("cx", (d) => g(r(d))).attr("cy", (d) => m(i(d))).attr("r", c).attr("stroke", "black").attr("stroke-width", h).attr("fill", f).append("title").text((d) => `${o.replace(/\s*→*\s*$/, "")}: ${r(d).toFixed(4)}
${l.replace(/\s*→*\s*$/, "")}: ${i(d).toFixed(4)} [${a[0](d).toFixed(4)}, ${a[1](d).toFixed(4)}]`), a !== void 0 && (w.selectAll(".error-bar-lower").data(e).join("line").attr("class", "error-bar-lower").attr("stroke", "black").attr("stroke-width", h).attr("x1", (d) => g(r(d))).attr("y1", (d) => m(a[0](d))).attr("x2", (d) => g(r(d))).attr("y2", (d) => m(i(d)) + c), w.selectAll(".error-bar-upper").data(e).join("line").attr("class", "error-bar-upper").attr("stroke", "black").attr("stroke-width", h).attr("x1", (d) => g(r(d))).attr("y1", (d) => m(i(d)) - c).attr("x2", (d) => g(r(d))).attr("y2", (d) => m(a[1](d))), w.selectAll(".error-bar-lower-cap").data(e).join("line").attr("class", "error-bar-lower-cap").attr("stroke", "black").attr("stroke-width", h).attr("x1", (d) => g(r(d)) - 5).attr("y1", (d) => m(a[0](d))).attr("x2", (d) => g(r(d)) + 5).attr("y2", (d) => m(a[0](d))), w.selectAll(".error-bar-upper-cap").data(e).join("line").attr("class", "error-bar-upper-cap").attr("stroke", "black").attr("stroke-width", h).attr("x1", (d) => g(r(d)) - 5).attr("y1", (d) => m(a[1](d))).attr("x2", (d) => g(r(d)) + 5).attr("y2", (d) => m(a[1](d)))), w.selectAll(".y-axis-left").data([null]).join("g").attr("class", "y-axis-left").attr("transform", `translate(${u.left},0)`).call(ln(m)), w.selectAll(".y-axis-right").data([null]).join("g").attr("class", "y-axis-right").attr("transform", `translate(${t - u.right},0)`).call(We(m).tickSize(0).tickFormat("")), w.selectAll(".y-axis-label").data([null]).join("text").attr("class", "y-axis-label").text(l).attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("x", -u.top).attr("y", u.left / 3).style("font-size", p * (3 / 4)), w.selectAll(".x-axis-bottom").data([null]).join("g").attr("class", "x-axis-bottom").attr("transform", `translate(0,${n - u.bottom})`).call(Dt(g)), w.selectAll(".x-axis-top").data([null]).join("g").attr("class", "x-axis-top").attr("transform", `translate(0,${u.top})`).call(Xn(g).tickSize(0).tickFormat("")), w.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t - u.right).attr("y", n - u.bottom / 3).text(o).style("font-size", p * (3 / 4)), w.selectAll(".title").data([null]).join("text").attr("class", "title").text(s).attr("text-anchor", "middle").attr("x", t / 2).attr("y", u.top / 2), w.selectAll(".perfect-calibration-line").data([null]).join("line").attr("class", "perfect-calibration-line").attr("stroke", "black").attr("stroke-width", 1).attr("stroke-dasharray", "3,3").attr("x1", g(g.domain()[0])).attr("y1", m(g.domain()[0])).attr("x2", g(g.domain()[1])).attr("y2", m(g.domain()[1]));
  };
  return x.width = function(y) {
    return arguments.length ? (t = +y, x) : t;
  }, x.height = function(y) {
    return arguments.length ? (n = +y, x) : n;
  }, x.data = function(y) {
    return arguments.length ? (e = y, x) : e;
  }, x.xValue = function(y) {
    return arguments.length ? (r = y, x) : r;
  }, x.yValue = function(y) {
    return arguments.length ? (i = y, x) : i;
  }, x.yError = function(y) {
    return arguments.length ? (a = y, x) : a;
  }, x.xLabel = function(y) {
    return arguments.length ? (o = y, x) : o;
  }, x.yLabel = function(y) {
    return arguments.length ? (l = y, x) : l;
  }, x.title = function(y) {
    return arguments.length ? (s = y, x) : s;
  }, x.margin = function(y) {
    return arguments.length ? (u = y, x) : u;
  }, x.radius = function(y) {
    return arguments.length ? (c = +y, x) : c;
  }, x.strokeWidth = function(y) {
    return arguments.length ? (h = +y, x) : h;
  }, x.markerColor = function(y) {
    return arguments.length ? (f = y, x) : f;
  }, x.fontSize = function(y) {
    return arguments.length ? (p = +y, x) : p;
  }, x;
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
