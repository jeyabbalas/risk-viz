function J(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function be(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Vn(t) {
  let n, e, r;
  t.length !== 2 ? (n = J, e = (l, s) => J(t(l), s), r = (l, s) => t(l) - s) : (n = t === J || t === be ? t : ke, e = t, r = t);
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
  function o(l, s, u = 0, f = l.length) {
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
  function a(l, s, u = 0, f = l.length) {
    const h = i(l, s, u, f - 1);
    return h > u && r(l[h - 1], s) > -r(l[h], s) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function ke() {
  return 0;
}
function Me(t) {
  return t === null ? NaN : +t;
}
function* Ae(t, n) {
  if (n === void 0)
    for (let e of t)
      e != null && (e = +e) >= e && (yield e);
  else {
    let e = -1;
    for (let r of t)
      (r = n(r, ++e, t)) != null && (r = +r) >= r && (yield r);
  }
}
const $e = Vn(J), Ne = $e.right;
Vn(Me).center;
const Se = Ne;
function rn(t, n) {
  let e, r;
  if (n === void 0)
    for (const i of t)
      i != null && (e === void 0 ? i >= i && (e = r = i) : (e > i && (e = i), r < i && (r = i)));
  else {
    let i = -1;
    for (let o of t)
      (o = n(o, ++i, t)) != null && (e === void 0 ? o >= o && (e = r = o) : (e > o && (e = o), r < o && (r = o)));
  }
  return [e, r];
}
function Ee(t = J) {
  if (t === J)
    return Hn;
  if (typeof t != "function")
    throw new TypeError("compare is not a function");
  return (n, e) => {
    const r = t(n, e);
    return r || r === 0 ? r : (t(e, e) === 0) - (t(n, n) === 0);
  };
}
function Hn(t, n) {
  return (t == null || !(t >= t)) - (n == null || !(n >= n)) || (t < n ? -1 : t > n ? 1 : 0);
}
const Ce = Math.sqrt(50), Te = Math.sqrt(10), ze = Math.sqrt(2);
function At(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Ce ? 10 : o >= Te ? 5 : o >= ze ? 2 : 1;
  let l, s, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, l = Math.round(t * u), s = Math.round(n * u), l / u < t && ++l, s / u > n && --s, u = -u) : (u = Math.pow(10, i) * a, l = Math.round(t / u), s = Math.round(n / u), l * u < t && ++l, s * u > n && --s), s < l && 0.5 <= e && e < 2 ? At(t, n, e * 2) : [l, s, u];
}
function Pe(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0))
    return [];
  if (t === n)
    return [t];
  const r = n < t, [i, o, a] = r ? At(n, t, e) : At(t, n, e);
  if (!(o >= i))
    return [];
  const l = o - i + 1, s = new Array(l);
  if (r)
    if (a < 0)
      for (let u = 0; u < l; ++u)
        s[u] = (o - u) / -a;
    else
      for (let u = 0; u < l; ++u)
        s[u] = (o - u) * a;
  else if (a < 0)
    for (let u = 0; u < l; ++u)
      s[u] = (i + u) / -a;
  else
    for (let u = 0; u < l; ++u)
      s[u] = (i + u) * a;
  return s;
}
function Bt(t, n, e) {
  return n = +n, t = +t, e = +e, At(t, n, e)[2];
}
function Re(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Bt(n, t, e) : Bt(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Xt(t, n) {
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
function Yt(t, n) {
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
function On(t, n, e = 0, r = 1 / 0, i) {
  if (n = Math.floor(n), e = Math.floor(Math.max(0, e)), r = Math.floor(Math.min(t.length - 1, r)), !(e <= n && n <= r))
    return t;
  for (i = i === void 0 ? Hn : Ee(i); r > e; ) {
    if (r - e > 600) {
      const s = r - e + 1, u = n - e + 1, f = Math.log(s), h = 0.5 * Math.exp(2 * f / 3), c = 0.5 * Math.sqrt(f * h * (s - h) / s) * (u - s / 2 < 0 ? -1 : 1), d = Math.max(e, Math.floor(n - u * h / s + c)), _ = Math.min(r, Math.floor(n + (s - u) * h / s + c));
      On(t, n, d, _, i);
    }
    const o = t[n];
    let a = e, l = r;
    for (ot(t, e, n), i(t[r], o) > 0 && ot(t, e, r); a < l; ) {
      for (ot(t, a, l), ++a, --l; i(t[a], o) < 0; )
        ++a;
      for (; i(t[l], o) > 0; )
        --l;
    }
    i(t[e], o) === 0 ? ot(t, e, l) : (++l, ot(t, l, r)), l <= n && (e = l + 1), n <= l && (r = l - 1);
  }
  return t;
}
function ot(t, n, e) {
  const r = t[n];
  t[n] = t[e], t[e] = r;
}
function Dt(t, n, e) {
  if (t = Float64Array.from(Ae(t, e)), !(!(r = t.length) || isNaN(n = +n))) {
    if (n <= 0 || r < 2)
      return Yt(t);
    if (n >= 1)
      return Xt(t);
    var r, i = (r - 1) * n, o = Math.floor(i), a = Xt(On(t, o).subarray(0, o + 1)), l = Yt(t.subarray(o + 1));
    return a + (l - a) * (i - o);
  }
}
function Fe(t, n) {
  let e = 0, r = 0;
  if (n === void 0)
    for (let i of t)
      i != null && (i = +i) >= i && (++e, r += i);
  else {
    let i = -1;
    for (let o of t)
      (o = n(o, ++i, t)) != null && (o = +o) >= o && (++e, r += o);
  }
  if (e)
    return r / e;
}
function mn(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function Le(t) {
  return t;
}
var vt = 1, Vt = 2, Gt = 3, lt = 4, xn = 1e-6;
function Ie(t) {
  return "translate(" + t + ",0)";
}
function qe(t) {
  return "translate(0," + t + ")";
}
function De(t) {
  return (n) => +t(n);
}
function Ve(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function He() {
  return !this.__axis;
}
function on(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, l = 3, s = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === vt || t === lt ? -1 : 1, f = t === lt || t === Vt ? "x" : "y", h = t === vt || t === Gt ? Ie : qe;
  function c(d) {
    var _ = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), w = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : Le), b = Math.max(o, 0) + l, S = n.range(), x = +S[0] + s, g = +S[S.length - 1] + s, p = (n.bandwidth ? Ve : De)(n.copy(), s), m = d.selection ? d.selection() : d, k = m.selectAll(".domain").data([null]), v = m.selectAll(".tick").data(_, n).order(), M = v.exit(), T = v.enter().append("g").attr("class", "tick"), N = v.select("line"), y = v.select("text");
    k = k.merge(k.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), v = v.merge(T), N = N.merge(T.append("line").attr("stroke", "currentColor").attr(f + "2", u * o)), y = y.merge(T.append("text").attr("fill", "currentColor").attr(f, u * b).attr("dy", t === vt ? "0em" : t === Gt ? "0.71em" : "0.32em")), d !== m && (k = k.transition(d), v = v.transition(d), N = N.transition(d), y = y.transition(d), M = M.transition(d).attr("opacity", xn).attr("transform", function(A) {
      return isFinite(A = p(A)) ? h(A + s) : this.getAttribute("transform");
    }), T.attr("opacity", xn).attr("transform", function(A) {
      var $ = this.parentNode.__axis;
      return h(($ && isFinite($ = $(A)) ? $ : p(A)) + s);
    })), M.remove(), k.attr("d", t === lt || t === Vt ? a ? "M" + u * a + "," + x + "H" + s + "V" + g + "H" + u * a : "M" + s + "," + x + "V" + g : a ? "M" + x + "," + u * a + "V" + s + "H" + g + "V" + u * a : "M" + x + "," + s + "H" + g), v.attr("opacity", 1).attr("transform", function(A) {
      return h(p(A) + s);
    }), N.attr(f + "2", u * o), y.attr(f, u * b).text(w), m.filter(He).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Vt ? "start" : t === lt ? "end" : "middle"), m.each(function() {
      this.__axis = p;
    });
  }
  return c.scale = function(d) {
    return arguments.length ? (n = d, c) : n;
  }, c.ticks = function() {
    return e = Array.from(arguments), c;
  }, c.tickArguments = function(d) {
    return arguments.length ? (e = d == null ? [] : Array.from(d), c) : e.slice();
  }, c.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), c) : r && r.slice();
  }, c.tickFormat = function(d) {
    return arguments.length ? (i = d, c) : i;
  }, c.tickSize = function(d) {
    return arguments.length ? (o = a = +d, c) : o;
  }, c.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, c) : o;
  }, c.tickSizeOuter = function(d) {
    return arguments.length ? (a = +d, c) : a;
  }, c.tickPadding = function(d) {
    return arguments.length ? (l = +d, c) : l;
  }, c.offset = function(d) {
    return arguments.length ? (s = +d, c) : s;
  }, c;
}
function Oe(t) {
  return on(vt, t);
}
function Bn(t) {
  return on(Gt, t);
}
function Be(t) {
  return on(lt, t);
}
var Xe = { value: () => {
} };
function an() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new bt(e);
}
function bt(t) {
  this._ = t;
}
function Ye(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
bt.prototype = an.prototype = {
  constructor: bt,
  on: function(t, n) {
    var e = this._, r = Ye(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (t = r[o]).type) && (i = Ge(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type)
        e[i] = yn(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = yn(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new bt(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, o; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(n, e);
  }
};
function Ge(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function yn(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Xe, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Wt = "http://www.w3.org/1999/xhtml";
const _n = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Wt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ft(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), _n.hasOwnProperty(n) ? { space: _n[n], local: t } : t;
}
function We(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Wt && n.documentElement.namespaceURI === Wt ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ue(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Xn(t) {
  var n = Ft(t);
  return (n.local ? Ue : We)(n);
}
function je() {
}
function ln(t) {
  return t == null ? je : function() {
    return this.querySelector(t);
  };
}
function Ke(t) {
  typeof t != "function" && (t = ln(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, l = r[i] = new Array(a), s, u, f = 0; f < a; ++f)
      (s = o[f]) && (u = t.call(s, s.__data__, f, o)) && ("__data__" in s && (u.__data__ = s.__data__), l[f] = u);
  return new L(r, this._parents);
}
function Ze(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Qe() {
  return [];
}
function Yn(t) {
  return t == null ? Qe : function() {
    return this.querySelectorAll(t);
  };
}
function Je(t) {
  return function() {
    return Ze(t.apply(this, arguments));
  };
}
function tr(t) {
  typeof t == "function" ? t = Je(t) : t = Yn(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], l = a.length, s, u = 0; u < l; ++u)
      (s = a[u]) && (r.push(t.call(s, s.__data__, u, a)), i.push(s));
  return new L(r, i);
}
function Gn(t) {
  return function() {
    return this.matches(t);
  };
}
function Wn(t) {
  return function(n) {
    return n.matches(t);
  };
}
var nr = Array.prototype.find;
function er(t) {
  return function() {
    return nr.call(this.children, t);
  };
}
function rr() {
  return this.firstElementChild;
}
function ir(t) {
  return this.select(t == null ? rr : er(typeof t == "function" ? t : Wn(t)));
}
var or = Array.prototype.filter;
function ar() {
  return Array.from(this.children);
}
function lr(t) {
  return function() {
    return or.call(this.children, t);
  };
}
function sr(t) {
  return this.selectAll(t == null ? ar : lr(typeof t == "function" ? t : Wn(t)));
}
function ur(t) {
  typeof t != "function" && (t = Gn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, l = r[i] = [], s, u = 0; u < a; ++u)
      (s = o[u]) && t.call(s, s.__data__, u, o) && l.push(s);
  return new L(r, this._parents);
}
function Un(t) {
  return new Array(t.length);
}
function fr() {
  return new L(this._enter || this._groups.map(Un), this._parents);
}
function $t(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
$t.prototype = {
  constructor: $t,
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
function cr(t) {
  return function() {
    return t;
  };
}
function hr(t, n, e, r, i, o) {
  for (var a = 0, l, s = n.length, u = o.length; a < u; ++a)
    (l = n[a]) ? (l.__data__ = o[a], r[a] = l) : e[a] = new $t(t, o[a]);
  for (; a < s; ++a)
    (l = n[a]) && (i[a] = l);
}
function dr(t, n, e, r, i, o, a) {
  var l, s, u = /* @__PURE__ */ new Map(), f = n.length, h = o.length, c = new Array(f), d;
  for (l = 0; l < f; ++l)
    (s = n[l]) && (c[l] = d = a.call(s, s.__data__, l, n) + "", u.has(d) ? i[l] = s : u.set(d, s));
  for (l = 0; l < h; ++l)
    d = a.call(t, o[l], l, o) + "", (s = u.get(d)) ? (r[l] = s, s.__data__ = o[l], u.delete(d)) : e[l] = new $t(t, o[l]);
  for (l = 0; l < f; ++l)
    (s = n[l]) && u.get(c[l]) === s && (i[l] = s);
}
function gr(t) {
  return t.__data__;
}
function pr(t, n) {
  if (!arguments.length)
    return Array.from(this, gr);
  var e = n ? dr : hr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = cr(t));
  for (var o = i.length, a = new Array(o), l = new Array(o), s = new Array(o), u = 0; u < o; ++u) {
    var f = r[u], h = i[u], c = h.length, d = mr(t.call(f, f && f.__data__, u, r)), _ = d.length, w = l[u] = new Array(_), b = a[u] = new Array(_), S = s[u] = new Array(c);
    e(f, h, w, b, S, d, n);
    for (var x = 0, g = 0, p, m; x < _; ++x)
      if (p = w[x]) {
        for (x >= g && (g = x + 1); !(m = b[g]) && ++g < _; )
          ;
        p._next = m || null;
      }
  }
  return a = new L(a, r), a._enter = l, a._exit = s, a;
}
function mr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function xr() {
  return new L(this._exit || this._groups.map(Un), this._parents);
}
function yr(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function _r(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), l = new Array(i), s = 0; s < a; ++s)
    for (var u = e[s], f = r[s], h = u.length, c = l[s] = new Array(h), d, _ = 0; _ < h; ++_)
      (d = u[_] || f[_]) && (c[_] = d);
  for (; s < i; ++s)
    l[s] = e[s];
  return new L(l, this._parents);
}
function wr() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function vr(t) {
  t || (t = br);
  function n(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], l = a.length, s = i[o] = new Array(l), u, f = 0; f < l; ++f)
      (u = a[f]) && (s[f] = u);
    s.sort(n);
  }
  return new L(i, this._parents).order();
}
function br(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function kr() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Mr() {
  return Array.from(this);
}
function Ar() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a)
        return a;
    }
  return null;
}
function $r() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function Nr() {
  return !this.node();
}
function Sr(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, l; o < a; ++o)
      (l = i[o]) && t.call(l, l.__data__, o, i);
  return this;
}
function Er(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Cr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Tr(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function zr(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Pr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Rr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Fr(t, n) {
  var e = Ft(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Cr : Er : typeof n == "function" ? e.local ? Rr : Pr : e.local ? zr : Tr)(e, n));
}
function jn(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Lr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ir(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function qr(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Dr(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Lr : typeof n == "function" ? qr : Ir)(t, n, e ?? "")) : nt(this.node(), t);
}
function nt(t, n) {
  return t.style.getPropertyValue(n) || jn(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Vr(t) {
  return function() {
    delete this[t];
  };
}
function Hr(t, n) {
  return function() {
    this[t] = n;
  };
}
function Or(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Br(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Vr : typeof n == "function" ? Or : Hr)(t, n)) : this.node()[t];
}
function Kn(t) {
  return t.trim().split(/^|\s+/);
}
function sn(t) {
  return t.classList || new Zn(t);
}
function Zn(t) {
  this._node = t, this._names = Kn(t.getAttribute("class") || "");
}
Zn.prototype = {
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
function Qn(t, n) {
  for (var e = sn(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function Jn(t, n) {
  for (var e = sn(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function Xr(t) {
  return function() {
    Qn(this, t);
  };
}
function Yr(t) {
  return function() {
    Jn(this, t);
  };
}
function Gr(t, n) {
  return function() {
    (n.apply(this, arguments) ? Qn : Jn)(this, t);
  };
}
function Wr(t, n) {
  var e = Kn(t + "");
  if (arguments.length < 2) {
    for (var r = sn(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Gr : n ? Xr : Yr)(e, n));
}
function Ur() {
  this.textContent = "";
}
function jr(t) {
  return function() {
    this.textContent = t;
  };
}
function Kr(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Zr(t) {
  return arguments.length ? this.each(t == null ? Ur : (typeof t == "function" ? Kr : jr)(t)) : this.node().textContent;
}
function Qr() {
  this.innerHTML = "";
}
function Jr(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ti(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ni(t) {
  return arguments.length ? this.each(t == null ? Qr : (typeof t == "function" ? ti : Jr)(t)) : this.node().innerHTML;
}
function ei() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ri() {
  return this.each(ei);
}
function ii() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function oi() {
  return this.each(ii);
}
function ai(t) {
  var n = typeof t == "function" ? t : Xn(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function li() {
  return null;
}
function si(t, n) {
  var e = typeof t == "function" ? t : Xn(t), r = n == null ? li : typeof n == "function" ? n : ln(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ui() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function fi() {
  return this.each(ui);
}
function ci() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function hi() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function di(t) {
  return this.select(t ? hi : ci);
}
function gi(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function pi(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function mi(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function xi(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function yi(t, n, e) {
  return function() {
    var r = this.__on, i, o = pi(n);
    if (r) {
      for (var a = 0, l = r.length; a < l; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function _i(t, n, e) {
  var r = mi(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var s = 0, u = l.length, f; s < u; ++s)
        for (i = 0, f = l[s]; i < o; ++i)
          if ((a = r[i]).type === f.type && a.name === f.name)
            return f.value;
    }
    return;
  }
  for (l = n ? yi : xi, i = 0; i < o; ++i)
    this.each(l(r[i], n, e));
  return this;
}
function te(t, n, e) {
  var r = jn(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function wi(t, n) {
  return function() {
    return te(this, t, n);
  };
}
function vi(t, n) {
  return function() {
    return te(this, t, n.apply(this, arguments));
  };
}
function bi(t, n) {
  return this.each((typeof n == "function" ? vi : wi)(t, n));
}
function* ki() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ne = [null];
function L(t, n) {
  this._groups = t, this._parents = n;
}
function it() {
  return new L([[document.documentElement]], ne);
}
function Mi() {
  return this;
}
L.prototype = it.prototype = {
  constructor: L,
  select: Ke,
  selectAll: tr,
  selectChild: ir,
  selectChildren: sr,
  filter: ur,
  data: pr,
  enter: fr,
  exit: xr,
  join: yr,
  merge: _r,
  selection: Mi,
  order: wr,
  sort: vr,
  call: kr,
  nodes: Mr,
  node: Ar,
  size: $r,
  empty: Nr,
  each: Sr,
  attr: Fr,
  style: Dr,
  property: Br,
  classed: Wr,
  text: Zr,
  html: ni,
  raise: ri,
  lower: oi,
  append: ai,
  insert: si,
  remove: fi,
  clone: di,
  datum: gi,
  on: _i,
  dispatch: bi,
  [Symbol.iterator]: ki
};
function Ai(t) {
  return typeof t == "string" ? new L([[document.querySelector(t)]], [document.documentElement]) : new L([[t]], ne);
}
function $i(t) {
  let n;
  for (; n = t.sourceEvent; )
    t = n;
  return t;
}
function Ni(t, n) {
  if (t = $i(t), n === void 0 && (n = t.currentTarget), n) {
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
function un(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ee(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function pt() {
}
var ct = 0.7, Nt = 1 / ct, tt = "\\s*([+-]?\\d+)\\s*", ht = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", H = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Si = /^#([0-9a-f]{3,8})$/, Ei = new RegExp(`^rgb\\(${tt},${tt},${tt}\\)$`), Ci = new RegExp(`^rgb\\(${H},${H},${H}\\)$`), Ti = new RegExp(`^rgba\\(${tt},${tt},${tt},${ht}\\)$`), zi = new RegExp(`^rgba\\(${H},${H},${H},${ht}\\)$`), Pi = new RegExp(`^hsl\\(${ht},${H},${H}\\)$`), Ri = new RegExp(`^hsla\\(${ht},${H},${H},${ht}\\)$`), wn = {
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
un(pt, j, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: vn,
  // Deprecated! Use color.formatHex.
  formatHex: vn,
  formatHex8: Fi,
  formatHsl: Li,
  formatRgb: bn,
  toString: bn
});
function vn() {
  return this.rgb().formatHex();
}
function Fi() {
  return this.rgb().formatHex8();
}
function Li() {
  return re(this).formatHsl();
}
function bn() {
  return this.rgb().formatRgb();
}
function j(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Si.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? kn(n) : e === 3 ? new F(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? xt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? xt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Ei.exec(t)) ? new F(n[1], n[2], n[3], 1) : (n = Ci.exec(t)) ? new F(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Ti.exec(t)) ? xt(n[1], n[2], n[3], n[4]) : (n = zi.exec(t)) ? xt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Pi.exec(t)) ? $n(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ri.exec(t)) ? $n(n[1], n[2] / 100, n[3] / 100, n[4]) : wn.hasOwnProperty(t) ? kn(wn[t]) : t === "transparent" ? new F(NaN, NaN, NaN, 0) : null;
}
function kn(t) {
  return new F(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function xt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new F(t, n, e, r);
}
function Ii(t) {
  return t instanceof pt || (t = j(t)), t ? (t = t.rgb(), new F(t.r, t.g, t.b, t.opacity)) : new F();
}
function Ut(t, n, e, r) {
  return arguments.length === 1 ? Ii(t) : new F(t, n, e, r ?? 1);
}
function F(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
un(F, Ut, ee(pt, {
  brighter(t) {
    return t = t == null ? Nt : Math.pow(Nt, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ct : Math.pow(ct, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new F(U(this.r), U(this.g), U(this.b), St(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Mn,
  // Deprecated! Use color.formatHex.
  formatHex: Mn,
  formatHex8: qi,
  formatRgb: An,
  toString: An
}));
function Mn() {
  return `#${W(this.r)}${W(this.g)}${W(this.b)}`;
}
function qi() {
  return `#${W(this.r)}${W(this.g)}${W(this.b)}${W((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function An() {
  const t = St(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${U(this.r)}, ${U(this.g)}, ${U(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function St(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function U(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function W(t) {
  return t = U(t), (t < 16 ? "0" : "") + t.toString(16);
}
function $n(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new D(t, n, e, r);
}
function re(t) {
  if (t instanceof D)
    return new D(t.h, t.s, t.l, t.opacity);
  if (t instanceof pt || (t = j(t)), !t)
    return new D();
  if (t instanceof D)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, l = o - i, s = (o + i) / 2;
  return l ? (n === o ? a = (e - r) / l + (e < r) * 6 : e === o ? a = (r - n) / l + 2 : a = (n - e) / l + 4, l /= s < 0.5 ? o + i : 2 - o - i, a *= 60) : l = s > 0 && s < 1 ? 0 : a, new D(a, l, s, t.opacity);
}
function Di(t, n, e, r) {
  return arguments.length === 1 ? re(t) : new D(t, n, e, r ?? 1);
}
function D(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
un(D, Di, ee(pt, {
  brighter(t) {
    return t = t == null ? Nt : Math.pow(Nt, t), new D(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ct : Math.pow(ct, t), new D(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new F(
      Ht(t >= 240 ? t - 240 : t + 120, i, r),
      Ht(t, i, r),
      Ht(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new D(Nn(this.h), yt(this.s), yt(this.l), St(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = St(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Nn(this.h)}, ${yt(this.s) * 100}%, ${yt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Nn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function yt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ht(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const fn = (t) => () => t;
function Vi(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Hi(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Oi(t) {
  return (t = +t) == 1 ? ie : function(n, e) {
    return e - n ? Hi(n, e, t) : fn(isNaN(n) ? e : n);
  };
}
function ie(t, n) {
  var e = n - t;
  return e ? Vi(t, e) : fn(isNaN(t) ? n : t);
}
const Et = function t(n) {
  var e = Oi(n);
  function r(i, o) {
    var a = e((i = Ut(i)).r, (o = Ut(o)).r), l = e(i.g, o.g), s = e(i.b, o.b), u = ie(i.opacity, o.opacity);
    return function(f) {
      return i.r = a(f), i.g = l(f), i.b = s(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Bi(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Xi(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Yi(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a)
    i[a] = cn(t[a], n[a]);
  for (; a < e; ++a)
    o[a] = n[a];
  return function(l) {
    for (a = 0; a < r; ++a)
      o[a] = i[a](l);
    return o;
  };
}
function Gi(t, n) {
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
function Wi(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = cn(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
var jt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ot = new RegExp(jt.source, "g");
function Ui(t) {
  return function() {
    return t;
  };
}
function ji(t) {
  return function(n) {
    return t(n) + "";
  };
}
function oe(t, n) {
  var e = jt.lastIndex = Ot.lastIndex = 0, r, i, o, a = -1, l = [], s = [];
  for (t = t + "", n = n + ""; (r = jt.exec(t)) && (i = Ot.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), l[a] ? l[a] += o : l[++a] = o), (r = r[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, s.push({ i: a, x: q(r, i) })), e = Ot.lastIndex;
  return e < n.length && (o = n.slice(e), l[a] ? l[a] += o : l[++a] = o), l.length < 2 ? s[0] ? ji(s[0].x) : Ui(n) : (n = s.length, function(u) {
    for (var f = 0, h; f < n; ++f)
      l[(h = s[f]).i] = h.x(u);
    return l.join("");
  });
}
function cn(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? fn(n) : (e === "number" ? q : e === "string" ? (r = j(n)) ? (n = r, Et) : oe : n instanceof j ? Et : n instanceof Date ? Gi : Xi(n) ? Bi : Array.isArray(n) ? Yi : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Wi : q)(t, n);
}
function Ki(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Sn = 180 / Math.PI, Kt = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ae(t, n, e, r, i, o) {
  var a, l, s;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (s = t * e + n * r) && (e -= t * s, r -= n * s), (l = Math.sqrt(e * e + r * r)) && (e /= l, r /= l, s /= l), t * r < n * e && (t = -t, n = -n, s = -s, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Sn,
    skewX: Math.atan(s) * Sn,
    scaleX: a,
    scaleY: l
  };
}
var _t;
function Zi(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Kt : ae(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Qi(t) {
  return t == null || (_t || (_t = document.createElementNS("http://www.w3.org/2000/svg", "g")), _t.setAttribute("transform", t), !(t = _t.transform.baseVal.consolidate())) ? Kt : (t = t.matrix, ae(t.a, t.b, t.c, t.d, t.e, t.f));
}
function le(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, f, h, c, d, _) {
    if (u !== h || f !== c) {
      var w = d.push("translate(", null, n, null, e);
      _.push({ i: w - 4, x: q(u, h) }, { i: w - 2, x: q(f, c) });
    } else
      (h || c) && d.push("translate(" + h + n + c + e);
  }
  function a(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: q(u, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function l(u, f, h, c) {
    u !== f ? c.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: q(u, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function s(u, f, h, c, d, _) {
    if (u !== h || f !== c) {
      var w = d.push(i(d) + "scale(", null, ",", null, ")");
      _.push({ i: w - 4, x: q(u, h) }, { i: w - 2, x: q(f, c) });
    } else
      (h !== 1 || c !== 1) && d.push(i(d) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = t(u), f = t(f), o(u.translateX, u.translateY, f.translateX, f.translateY, h, c), a(u.rotate, f.rotate, h, c), l(u.skewX, f.skewX, h, c), s(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(d) {
      for (var _ = -1, w = c.length, b; ++_ < w; )
        h[(b = c[_]).i] = b.x(d);
      return h.join("");
    };
  };
}
var Ji = le(Zi, "px, ", "px)", "deg)"), to = le(Qi, ", ", ")", ")"), et = 0, st = 0, at = 0, se = 1e3, Ct, ut, Tt = 0, K = 0, Lt = 0, dt = typeof performance == "object" && performance.now ? performance : Date, ue = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function hn() {
  return K || (ue(no), K = dt.now() + Lt);
}
function no() {
  K = 0;
}
function zt() {
  this._call = this._time = this._next = null;
}
zt.prototype = fe.prototype = {
  constructor: zt,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? hn() : +e) + (n == null ? 0 : +n), !this._next && ut !== this && (ut ? ut._next = this : Ct = this, ut = this), this._call = t, this._time = e, Zt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Zt());
  }
};
function fe(t, n, e) {
  var r = new zt();
  return r.restart(t, n, e), r;
}
function eo() {
  hn(), ++et;
  for (var t = Ct, n; t; )
    (n = K - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --et;
}
function En() {
  K = (Tt = dt.now()) + Lt, et = st = 0;
  try {
    eo();
  } finally {
    et = 0, io(), K = 0;
  }
}
function ro() {
  var t = dt.now(), n = t - Tt;
  n > se && (Lt -= n, Tt = t);
}
function io() {
  for (var t, n = Ct, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Ct = e);
  ut = t, Zt(r);
}
function Zt(t) {
  if (!et) {
    st && (st = clearTimeout(st));
    var n = t - K;
    n > 24 ? (t < 1 / 0 && (st = setTimeout(En, t - dt.now() - Lt)), at && (at = clearInterval(at))) : (at || (Tt = dt.now(), at = setInterval(ro, se)), et = 1, ue(En));
  }
}
function Cn(t, n, e) {
  var r = new zt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var oo = an("start", "end", "cancel", "interrupt"), ao = [], ce = 0, Tn = 1, Qt = 2, kt = 3, zn = 4, Jt = 5, Mt = 6;
function It(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a)
    t.__transition = {};
  else if (e in a)
    return;
  lo(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: oo,
    tween: ao,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ce
  });
}
function dn(t, n) {
  var e = V(t, n);
  if (e.state > ce)
    throw new Error("too late; already scheduled");
  return e;
}
function O(t, n) {
  var e = V(t, n);
  if (e.state > kt)
    throw new Error("too late; already running");
  return e;
}
function V(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function lo(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = fe(o, 0, e.time);
  function o(u) {
    e.state = Tn, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var f, h, c, d;
    if (e.state !== Tn)
      return s();
    for (f in r)
      if (d = r[f], d.name === e.name) {
        if (d.state === kt)
          return Cn(a);
        d.state === zn ? (d.state = Mt, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[f]) : +f < n && (d.state = Mt, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[f]);
      }
    if (Cn(function() {
      e.state === kt && (e.state = zn, e.timer.restart(l, e.delay, e.time), l(u));
    }), e.state = Qt, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Qt) {
      for (e.state = kt, i = new Array(c = e.tween.length), f = 0, h = -1; f < c; ++f)
        (d = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function l(u) {
    for (var f = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(s), e.state = Jt, 1), h = -1, c = i.length; ++h < c; )
      i[h].call(t, f);
    e.state === Jt && (e.on.call("end", t, t.__data__, e.index, e.group), s());
  }
  function s() {
    e.state = Mt, e.timer.stop(), delete r[n];
    for (var u in r)
      return;
    delete t.__transition;
  }
}
function so(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Qt && r.state < Jt, r.state = Mt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function uo(t) {
  return this.each(function() {
    so(this, t);
  });
}
function fo(t, n) {
  var e, r;
  return function() {
    var i = O(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, l = r.length; a < l; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function co(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var o = O(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var l = { name: n, value: e }, s = 0, u = i.length; s < u; ++s)
        if (i[s].name === n) {
          i[s] = l;
          break;
        }
      s === u && i.push(l);
    }
    o.tween = i;
  };
}
function ho(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = V(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? fo : co)(e, t, n));
}
function gn(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = O(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return V(i, r).value[n];
  };
}
function he(t, n) {
  var e;
  return (typeof n == "number" ? q : n instanceof j ? Et : (e = j(n)) ? (n = e, Et) : oe)(t, n);
}
function go(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function po(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function mo(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function xo(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function yo(t, n, e) {
  var r, i, o;
  return function() {
    var a, l = e(this), s;
    return l == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), s = l + "", a === s ? null : a === r && s === i ? o : (i = s, o = n(r = a, l)));
  };
}
function _o(t, n, e) {
  var r, i, o;
  return function() {
    var a, l = e(this), s;
    return l == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), s = l + "", a === s ? null : a === r && s === i ? o : (i = s, o = n(r = a, l)));
  };
}
function wo(t, n) {
  var e = Ft(t), r = e === "transform" ? to : he;
  return this.attrTween(t, typeof n == "function" ? (e.local ? _o : yo)(e, r, gn(this, "attr." + t, n)) : n == null ? (e.local ? po : go)(e) : (e.local ? xo : mo)(e, r, n));
}
function vo(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function bo(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function ko(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && bo(t, o)), e;
  }
  return i._value = n, i;
}
function Mo(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && vo(t, o)), e;
  }
  return i._value = n, i;
}
function Ao(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = Ft(t);
  return this.tween(e, (r.local ? ko : Mo)(r, n));
}
function $o(t, n) {
  return function() {
    dn(this, t).delay = +n.apply(this, arguments);
  };
}
function No(t, n) {
  return n = +n, function() {
    dn(this, t).delay = n;
  };
}
function So(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? $o : No)(n, t)) : V(this.node(), n).delay;
}
function Eo(t, n) {
  return function() {
    O(this, t).duration = +n.apply(this, arguments);
  };
}
function Co(t, n) {
  return n = +n, function() {
    O(this, t).duration = n;
  };
}
function To(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Eo : Co)(n, t)) : V(this.node(), n).duration;
}
function zo(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    O(this, t).ease = n;
  };
}
function Po(t) {
  var n = this._id;
  return arguments.length ? this.each(zo(n, t)) : V(this.node(), n).ease;
}
function Ro(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    O(this, t).ease = e;
  };
}
function Fo(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Ro(this._id, t));
}
function Lo(t) {
  typeof t != "function" && (t = Gn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, l = r[i] = [], s, u = 0; u < a; ++u)
      (s = o[u]) && t.call(s, s.__data__, u, o) && l.push(s);
  return new X(r, this._parents, this._name, this._id);
}
function Io(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), l = 0; l < o; ++l)
    for (var s = n[l], u = e[l], f = s.length, h = a[l] = new Array(f), c, d = 0; d < f; ++d)
      (c = s[d] || u[d]) && (h[d] = c);
  for (; l < r; ++l)
    a[l] = n[l];
  return new X(a, this._parents, this._name, this._id);
}
function qo(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Do(t, n, e) {
  var r, i, o = qo(n) ? dn : O;
  return function() {
    var a = o(this, t), l = a.on;
    l !== r && (i = (r = l).copy()).on(n, e), a.on = i;
  };
}
function Vo(t, n) {
  var e = this._id;
  return arguments.length < 2 ? V(this.node(), e).on.on(t) : this.each(Do(e, t, n));
}
function Ho(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function Oo() {
  return this.on("end.remove", Ho(this._id));
}
function Bo(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ln(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var l = r[a], s = l.length, u = o[a] = new Array(s), f, h, c = 0; c < s; ++c)
      (f = l[c]) && (h = t.call(f, f.__data__, c, l)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, It(u[c], n, e, c, u, V(f, e)));
  return new X(o, this._parents, n, e);
}
function Xo(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Yn(t));
  for (var r = this._groups, i = r.length, o = [], a = [], l = 0; l < i; ++l)
    for (var s = r[l], u = s.length, f, h = 0; h < u; ++h)
      if (f = s[h]) {
        for (var c = t.call(f, f.__data__, h, s), d, _ = V(f, e), w = 0, b = c.length; w < b; ++w)
          (d = c[w]) && It(d, n, e, w, c, _);
        o.push(c), a.push(f);
      }
  return new X(o, a, n, e);
}
var Yo = it.prototype.constructor;
function Go() {
  return new Yo(this._groups, this._parents);
}
function Wo(t, n) {
  var e, r, i;
  return function() {
    var o = nt(this, t), a = (this.style.removeProperty(t), nt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function de(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Uo(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = nt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function jo(t, n, e) {
  var r, i, o;
  return function() {
    var a = nt(this, t), l = e(this), s = l + "";
    return l == null && (s = l = (this.style.removeProperty(t), nt(this, t))), a === s ? null : a === r && s === i ? o : (i = s, o = n(r = a, l));
  };
}
function Ko(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, l;
  return function() {
    var s = O(this, t), u = s.on, f = s.value[o] == null ? l || (l = de(n)) : void 0;
    (u !== e || i !== f) && (r = (e = u).copy()).on(a, i = f), s.on = r;
  };
}
function Zo(t, n, e) {
  var r = (t += "") == "transform" ? Ji : he;
  return n == null ? this.styleTween(t, Wo(t, r)).on("end.style." + t, de(t)) : typeof n == "function" ? this.styleTween(t, jo(t, r, gn(this, "style." + t, n))).each(Ko(this._id, t)) : this.styleTween(t, Uo(t, r, n), e).on("end.style." + t, null);
}
function Qo(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Jo(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Qo(t, a, e)), r;
  }
  return o._value = n, o;
}
function ta(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, Jo(t, n, e ?? ""));
}
function na(t) {
  return function() {
    this.textContent = t;
  };
}
function ea(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function ra(t) {
  return this.tween("text", typeof t == "function" ? ea(gn(this, "text", t)) : na(t == null ? "" : t + ""));
}
function ia(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function oa(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && ia(i)), n;
  }
  return r._value = t, r;
}
function aa(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, oa(t));
}
function la() {
  for (var t = this._name, n = this._id, e = pe(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], l = a.length, s, u = 0; u < l; ++u)
      if (s = a[u]) {
        var f = V(s, n);
        It(s, t, e, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new X(r, this._parents, t, e);
}
function sa() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var l = { value: a }, s = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = O(this, r), f = u.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(l), n._.interrupt.push(l), n._.end.push(s)), u.on = n;
    }), i === 0 && o();
  });
}
var ua = 0;
function X(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function ge(t) {
  return it().transition(t);
}
function pe() {
  return ++ua;
}
var B = it.prototype;
X.prototype = ge.prototype = {
  constructor: X,
  select: Bo,
  selectAll: Xo,
  selectChild: B.selectChild,
  selectChildren: B.selectChildren,
  filter: Lo,
  merge: Io,
  selection: Go,
  transition: la,
  call: B.call,
  nodes: B.nodes,
  node: B.node,
  size: B.size,
  empty: B.empty,
  each: B.each,
  on: Vo,
  attr: wo,
  attrTween: Ao,
  style: Zo,
  styleTween: ta,
  text: ra,
  textTween: aa,
  remove: Oo,
  tween: ho,
  delay: So,
  duration: To,
  ease: Po,
  easeVarying: Fo,
  end: sa,
  [Symbol.iterator]: B[Symbol.iterator]
};
function fa(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var ca = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: fa
};
function ha(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function da(t) {
  var n, e;
  t instanceof X ? (n = t._id, t = t._name) : (n = pe(), (e = ca).time = hn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], l = a.length, s, u = 0; u < l; ++u)
      (s = a[u]) && It(s, t, n, u, a, e || ha(s, n));
  return new X(r, this._parents, t, n);
}
it.prototype.interrupt = uo;
it.prototype.transition = da;
const tn = Math.PI, nn = 2 * tn, G = 1e-6, ga = nn - G;
function me(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function pa(t) {
  let n = Math.floor(t);
  if (!(n >= 0))
    throw new Error(`invalid digits: ${t}`);
  if (n > 15)
    return me;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class ma {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? me : pa(n);
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
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0)
      throw new Error(`negative radius: ${o}`);
    let a = this._x1, l = this._y1, s = r - n, u = i - e, f = a - n, h = l - e, c = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > G)
      if (!(Math.abs(h * s - u * f) > G) || !o)
        this._append`L${this._x1 = n},${this._y1 = e}`;
      else {
        let d = r - a, _ = i - l, w = s * s + u * u, b = d * d + _ * _, S = Math.sqrt(w), x = Math.sqrt(c), g = o * Math.tan((tn - Math.acos((w + c - b) / (2 * S * x))) / 2), p = g / x, m = g / S;
        Math.abs(p - 1) > G && this._append`L${n + p * f},${e + p * h}`, this._append`A${o},${o},0,0,${+(h * d > f * _)},${this._x1 = n + m * s},${this._y1 = e + m * u}`;
      }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0)
      throw new Error(`negative radius: ${r}`);
    let l = r * Math.cos(i), s = r * Math.sin(i), u = n + l, f = e + s, h = 1 ^ a, c = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > G || Math.abs(this._y1 - f) > G) && this._append`L${u},${f}`, r && (c < 0 && (c = c % nn + nn), c > ga ? this._append`A${r},${r},0,1,${h},${n - l},${e - s}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = f}` : c > G && this._append`A${r},${r},0,${+(c >= tn)},${h},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function xa(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Pt(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function rt(t) {
  return t = Pt(Math.abs(t)), t ? t[1] : NaN;
}
function ya(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, l = t[0], s = 0; i > 0 && l > 0 && (s + l + 1 > r && (l = Math.max(1, r - s)), o.push(e.substring(i -= l, i + l)), !((s += l + 1) > r)); )
      l = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function _a(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var wa = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Rt(t) {
  if (!(n = wa.exec(t)))
    throw new Error("invalid format: " + t);
  var n;
  return new pn({
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
Rt.prototype = pn.prototype;
function pn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
pn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function va(t) {
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
var xe;
function ba(t, n) {
  var e = Pt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1], o = i - (xe = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Pt(t, Math.max(0, n + o - 1))[0];
}
function Pn(t, n) {
  var e = Pt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Rn = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: xa,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Pn(t * 100, n),
  r: Pn,
  s: ba,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Fn(t) {
  return t;
}
var Ln = Array.prototype.map, In = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ka(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Fn : ya(Ln.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Fn : _a(Ln.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", l = t.minus === void 0 ? "−" : t.minus + "", s = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Rt(h);
    var c = h.fill, d = h.align, _ = h.sign, w = h.symbol, b = h.zero, S = h.width, x = h.comma, g = h.precision, p = h.trim, m = h.type;
    m === "n" ? (x = !0, m = "g") : Rn[m] || (g === void 0 && (g = 12), p = !0, m = "g"), (b || c === "0" && d === "=") && (b = !0, c = "0", d = "=");
    var k = w === "$" ? e : w === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", v = w === "$" ? r : /[%p]/.test(m) ? a : "", M = Rn[m], T = /[defgprs%]/.test(m);
    g = g === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));
    function N(y) {
      var A = k, $ = v, C, P, E;
      if (m === "c")
        $ = M(y) + $, y = "";
      else {
        y = +y;
        var R = y < 0 || 1 / y < 0;
        if (y = isNaN(y) ? s : M(Math.abs(y), g), p && (y = va(y)), R && +y == 0 && _ !== "+" && (R = !1), A = (R ? _ === "(" ? _ : l : _ === "-" || _ === "(" ? "" : _) + A, $ = (m === "s" ? In[8 + xe / 3] : "") + $ + (R && _ === "(" ? ")" : ""), T) {
          for (C = -1, P = y.length; ++C < P; )
            if (E = y.charCodeAt(C), 48 > E || E > 57) {
              $ = (E === 46 ? i + y.slice(C + 1) : y.slice(C)) + $, y = y.slice(0, C);
              break;
            }
        }
      }
      x && !b && (y = n(y, 1 / 0));
      var Y = A.length + y.length + $.length, I = Y < S ? new Array(S - Y + 1).join(c) : "";
      switch (x && b && (y = n(I + y, I.length ? S - $.length : 1 / 0), I = ""), d) {
        case "<":
          y = A + y + $ + I;
          break;
        case "=":
          y = A + I + y + $;
          break;
        case "^":
          y = I.slice(0, Y = I.length >> 1) + A + y + $ + I.slice(Y);
          break;
        default:
          y = I + A + y + $;
          break;
      }
      return o(y);
    }
    return N.toString = function() {
      return h + "";
    }, N;
  }
  function f(h, c) {
    var d = u((h = Rt(h), h.type = "f", h)), _ = Math.max(-8, Math.min(8, Math.floor(rt(c) / 3))) * 3, w = Math.pow(10, -_), b = In[8 + _ / 3];
    return function(S) {
      return d(w * S) + b;
    };
  }
  return {
    format: u,
    formatPrefix: f
  };
}
var wt, ye, _e;
Ma({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ma(t) {
  return wt = ka(t), ye = wt.format, _e = wt.formatPrefix, wt;
}
function Aa(t) {
  return Math.max(0, -rt(Math.abs(t)));
}
function $a(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(rt(n) / 3))) * 3 - rt(Math.abs(t)));
}
function Na(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, rt(n) - rt(t)) + 1;
}
function Sa(t, n) {
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
function Ea(t) {
  return function() {
    return t;
  };
}
function Ca(t) {
  return +t;
}
var qn = [0, 1];
function Q(t) {
  return t;
}
function en(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Ea(isNaN(n) ? NaN : 0.5);
}
function Ta(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function za(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = en(i, r), o = e(a, o)) : (r = en(r, i), o = e(o, a)), function(l) {
    return o(r(l));
  };
}
function Pa(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = en(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(l) {
    var s = Se(t, l, 1, r) - 1;
    return o[s](i[s](l));
  };
}
function Ra(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Fa() {
  var t = qn, n = qn, e = cn, r, i, o, a = Q, l, s, u;
  function f() {
    var c = Math.min(t.length, n.length);
    return a !== Q && (a = Ta(t[0], t[c - 1])), l = c > 2 ? Pa : za, s = u = null, h;
  }
  function h(c) {
    return c == null || isNaN(c = +c) ? o : (s || (s = l(t.map(r), n, e)))(r(a(c)));
  }
  return h.invert = function(c) {
    return a(i((u || (u = l(n, t.map(r), q)))(c)));
  }, h.domain = function(c) {
    return arguments.length ? (t = Array.from(c, Ca), f()) : t.slice();
  }, h.range = function(c) {
    return arguments.length ? (n = Array.from(c), f()) : n.slice();
  }, h.rangeRound = function(c) {
    return n = Array.from(c), e = Ki, f();
  }, h.clamp = function(c) {
    return arguments.length ? (a = c ? !0 : Q, f()) : a !== Q;
  }, h.interpolate = function(c) {
    return arguments.length ? (e = c, f()) : e;
  }, h.unknown = function(c) {
    return arguments.length ? (o = c, h) : o;
  }, function(c, d) {
    return r = c, i = d, f();
  };
}
function La() {
  return Fa()(Q, Q);
}
function Ia(t, n, e, r) {
  var i = Re(t, n, e), o;
  switch (r = Rt(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = $a(i, a)) && (r.precision = o), _e(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Na(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Aa(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return ye(r);
}
function qa(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Pe(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Ia(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], l = r[o], s, u, f = 10;
    for (l < a && (u = a, a = l, l = u, u = i, i = o, o = u); f-- > 0; ) {
      if (u = Bt(a, l, e), u === s)
        return r[i] = a, r[o] = l, n(r);
      if (u > 0)
        a = Math.floor(a / u) * u, l = Math.ceil(l / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, l = Math.floor(l * u) / u;
      else
        break;
      s = u;
    }
    return t;
  }, t;
}
function gt() {
  var t = La();
  return t.copy = function() {
    return Ra(t, gt());
  }, Sa.apply(t, arguments), qa(t);
}
function Z(t) {
  return function() {
    return t;
  };
}
function Da(t) {
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
  }, () => new ma(n);
}
function Va(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function we(t) {
  this._context = t;
}
we.prototype = {
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
function Ha(t) {
  return new we(t);
}
function Oa(t) {
  return t[0];
}
function Ba(t) {
  return t[1];
}
function Xa(t, n) {
  var e = Z(!0), r = null, i = Ha, o = null, a = Da(l);
  t = typeof t == "function" ? t : t === void 0 ? Oa : Z(t), n = typeof n == "function" ? n : n === void 0 ? Ba : Z(n);
  function l(s) {
    var u, f = (s = Va(s)).length, h, c = !1, d;
    for (r == null && (o = i(d = a())), u = 0; u <= f; ++u)
      !(u < f && e(h = s[u], u, s)) === c && ((c = !c) ? o.lineStart() : o.lineEnd()), c && o.point(+t(h, u, s), +n(h, u, s));
    if (d)
      return o = null, d + "" || null;
  }
  return l.x = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Z(+s), l) : t;
  }, l.y = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : Z(+s), l) : n;
  }, l.defined = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : Z(!!s), l) : e;
  }, l.curve = function(s) {
    return arguments.length ? (i = s, r != null && (o = i(r)), l) : i;
  }, l.context = function(s) {
    return arguments.length ? (s == null ? r = o = null : o = i(r = s), l) : r;
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
function Ya(t) {
  return new ve(t);
}
function ft(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
ft.prototype = {
  constructor: ft,
  scale: function(t) {
    return t === 1 ? this : new ft(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new ft(this.k, this.x + this.k * t, this.y + this.k * n);
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
ft.prototype;
function Ga() {
  let t, n, e, r, i, o;
  const a = an("change"), l = (s) => {
    s.attr("class", "accent-slate-600 py-2 sm:py-4"), s.selectAll("label").data([null]).join("label").attr("for", t).attr("class", "pr-2").text(n), s.selectAll("input").data([null]).join("input").attr("type", "range").attr("id", t).attr("min", e).attr("max", r).attr("value", o).on("change", (u) => {
      s.selectAll("output").data([null]).join("output").attr("id", t).text(u.target.value), a.call("change", null, u.target.value);
    }), s.selectAll("output").data([null]).join("output").attr("id", t).attr("class", "pl-2 sm:pl-4").text(o);
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
    return arguments.length ? (o = +s, l) : o;
  }, l.on = function() {
    let s = a.on.apply(a, arguments);
    return s === a ? l : s;
  }, l;
}
function Wa() {
  let t, n, e, r, i, o, a, l = "red", s, u, f, h = "rgb(122, 255, 248, 0.7)", c = 1.5, d = 1, _, w = 15, b = 0, S = 0, x = !1;
  const g = (p) => {
    const m = p.selectAll("svg.box-plot").data([null]).join("svg").attr("class", "box-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", w);
    let k = rn(r);
    k[0] = i ?? k[0], k[1] = o ?? k[1];
    const v = gt().domain(k).range([e.left, t - e.right]), M = Dt(r, 0.25), T = Dt(r, 0.5), N = Dt(r, 0.75), y = N - M;
    let A = M - y * 1.5;
    const $ = Yt(r);
    A = $ > A ? $ : A;
    let C = N + y * 1.5;
    const P = Xt(r);
    C = P < C ? P : C;
    const E = r.filter((z) => z < A || z > C), R = r.reduce((z, mt) => z + mt, 0) / r.length, Y = p.selectAll("div.tooltip").data([null]).join("div").attr("class", "tooltip").style("position", "absolute").style("opacity", 0);
    m.on("mouseover", function(z) {
      const qt = `
        Minimum: ${A.toFixed(5)}<br>
        25th percentile: ${M.toFixed(5)}<br>
        Median: ${T.toFixed(5)}<br>
        75th percentile: ${N.toFixed(5)}<br>
        Maximum: ${C.toFixed(5)}<br>
        Inter-quartile range: ${y.toFixed(5)}<br>
        Mean: ${R.toFixed(5)}
        `;
      Y.style("opacity", 1).style("border-color", h).html(qt);
    }).on("mouseout", () => {
      Y.style("opacity", 0);
    }).on("mousemove", function(z) {
      const [mt, qt] = Ni(z, this);
      Y.style("left", mt + b + "px").style("top", qt + S + "px");
    });
    const I = E.filter((z) => z < k[1] && z > k[0]);
    m.selectAll("circle").data(I).join("circle").attr("cx", (z) => v(z)).attr("cy", () => n / 2 + (Math.random() * (f / 2) - f / 4)).attr("r", _).attr("fill", h).attr("opacity", d).attr("stroke", "black").attr("stroke-width", c), m.selectAll("rect").data([null]).join("rect").attr("x", v(M)).attr("y", n / 2 - f / 2).attr("width", v(N) - v(M)).attr("height", f).attr("fill", h).attr("stroke", "black").attr("stroke-width", c), m.selectAll("#median").data([null]).join("line").attr("id", "median").attr("x1", v(T)).attr("y1", n / 2 - f / 2).attr("x2", v(T)).attr("y2", n / 2 + f / 2).attr("stroke", "black").attr("stroke-width", c * 2), m.selectAll("#lower-whisker").data([null]).join("line").attr("id", "lower-whisker").attr("x1", v(A)).attr("y1", n / 2).attr("x2", v(M)).attr("y2", n / 2).attr("stroke", "black").attr("stroke-width", c), m.selectAll("#lower-whisker-edge").data([null]).join("line").attr("id", "lower-whisker-edge").attr("x1", v(A)).attr("y1", n / 2 - f / 4).attr("x2", v(A)).attr("y2", n / 2 + f / 4).attr("stroke", "black").attr("stroke-width", c), m.selectAll("#upper-whisker").data([null]).join("line").attr("id", "upper-whisker").attr("x1", v(N)).attr("y1", n / 2).attr("x2", v(C)).attr("y2", n / 2).attr("stroke", "black").attr("stroke-width", c), m.selectAll("#upper-whisker-edge").data([null]).join("line").attr("id", "upper-whisker-edge").attr("x1", v(C)).attr("y1", n / 2 - f / 4).attr("x2", v(C)).attr("y2", n / 2 + f / 4).attr("stroke", "black").attr("stroke-width", c), x || (m.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${n - e.bottom})`).call(Bn(v)), s && m.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", n - e.bottom / 3).text(s).style("font-size", w * (3 / 4))), a !== void 0 && m.selectAll(".vLines").data(a).join("line").attr("class", "vLines").attr("x1", (z) => v(z)).attr("y1", n / 2 - f / 2).attr("x2", (z) => v(z)).attr("y2", n / 2 + f / 2).attr("stroke", l).attr("stroke-width", 1.5), u && m.selectAll(".title").data([null]).join("text").attr("class", "title").text(u).attr("text-anchor", "middle").attr("x", t / 2).attr("y", e.top / 2);
  };
  return g.width = function(p) {
    return arguments.length ? (t = +p, g) : t;
  }, g.height = function(p) {
    return arguments.length ? (n = +p, g) : n;
  }, g.margin = function(p) {
    return arguments.length ? (e = p, g) : e;
  }, g.data = function(p) {
    return arguments.length ? (r = p, g) : r;
  }, g.xMin = function(p) {
    return arguments.length ? (i = +p, g) : i;
  }, g.xMax = function(p) {
    return arguments.length ? (o = +p, g) : o;
  }, g.vLines = function(p) {
    return arguments.length ? (a = p, g) : a;
  }, g.vLineColor = function(p) {
    return arguments.length ? (l = p, g) : l;
  }, g.xLabel = function(p) {
    return arguments.length ? (s = p, g) : s;
  }, g.title = function(p) {
    return arguments.length ? (u = p, g) : u;
  }, g.boxWidth = function(p) {
    return arguments.length ? (f = +p, g) : f;
  }, g.color = function(p) {
    return arguments.length ? (h = p, g) : h;
  }, g.strokeWidth = function(p) {
    return arguments.length ? (c = +p, g) : c;
  }, g.opacity = function(p) {
    return arguments.length ? (d = +p, g) : d;
  }, g.radius = function(p) {
    return arguments.length ? (_ = +p, g) : _;
  }, g.fontSize = function(p) {
    return arguments.length ? (w = +p, g) : w;
  }, g.hoverOffsetX = function(p) {
    return arguments.length ? (b = +p, g) : b;
  }, g.hoverOffsetY = function(p) {
    return arguments.length ? (S = +p, g) : S;
  }, g.removeAxis = function(p) {
    return arguments.length ? (x = p, g) : x;
  }, g;
}
function Ua() {
  let t, n, e, r, i, o, a, l, s, u, f = "red", h = 40, c, d = "rgb(122, 255, 248, 0.7)", _ = 1, w, b, S = 15;
  const x = (m) => (k) => Math.abs(k /= m) <= 1 ? 0.75 * (1 - k * k) / m : 0, g = (m, k, v) => k.map((M) => [M, Fe(v, (T) => m(M - T))]), p = (m) => {
    const k = m.selectAll("svg.density-plot").data([null]).join("svg").attr("class", "density-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", S);
    let v = rn(r);
    v[0] = i ?? v[0], v[1] = o ?? v[1];
    const M = gt().domain(v).range([e.left, t - e.right]), T = M.ticks(h), N = g(x(c), T, r), y = s ?? Math.max(...N.map((E) => E[1])), A = gt().domain([0, y]).range([n - e.bottom, e.top]);
    N[0][1] !== 0 && N.unshift([N[0][0], 0]), N[N.length - 1][1] !== 0 && N.push([N[N.length - 1][0], 0]);
    const $ = Xa().curve(Ya).x((E) => M(E[0])).y((E) => A(E[1])), C = ge().duration(1e3);
    let P = k.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id", "color-gradient");
    if (w && b && b.length === w.length + 1) {
      P.append("stop").attr("offset", "0%").attr("stop-color", b[0]);
      for (let E = 0; E < w.length; E++) {
        let R = ((w[E] - v[0]) / (v[1] - v[0]) * 100).toFixed(1);
        R < 0 && (R = 0), R > 100 && (R = 100), P.append("stop").attr("offset", `${R}%`).attr("stop-color", b[E]), P.append("stop").attr("offset", `${R}%`).attr("stop-color", b[E + 1]);
      }
      P.append("stop").attr("offset", "100%").attr("stop-color", b[b.length - 1]);
    } else
      P.append("stop").attr("offset", "100%").attr("stop-color", d);
    k.selectAll("path").data([null]).join(
      (E) => E.append("path").attr("stroke", "black").attr("stroke-width", 1.5).attr("stroke-linejoin", "round").attr("opacity", _).attr("d", $(N)).style("fill", "url(#color-gradient)"),
      (E) => E.call(
        (R) => R.transition(C).attr("d", $(N))
      ),
      (E) => E.remove()
    ), k.selectAll(".y-axis").data([null]).join("g").attr("class", "y-axis").attr("transform", `translate(${e.left},0)`).call(Be(A)), k.selectAll(".y-axis-label").data([null]).join("text").attr("class", "y-axis-label").text("Density →").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("x", -e.top).attr("y", e.left / 3).style("font-size", S * (3 / 4)), k.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${n - e.bottom})`).call(Bn(M)), k.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", n - e.bottom / 3).text(a).style("font-size", S * (3 / 4)), u !== void 0 && k.selectAll(".vLines").data(u).join("line").attr("class", "vLines").attr("x1", (E) => M(E)).attr("y1", A(0)).attr("x2", (E) => M(E)).attr("y2", A(y)).attr("stroke", f).attr("stroke-width", 1.5).attr("stroke-linejoin", "round").attr("opacity", _), k.selectAll(".title").data([null]).join("text").attr("class", "title").text(l).attr("text-anchor", "middle").attr("x", t / 2).attr("y", e.top / 2);
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
    return arguments.length ? (o = +m, p) : o;
  }, p.xLabel = function(m) {
    return arguments.length ? (a = m, p) : a;
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
    return arguments.length ? (d = m, p) : d;
  }, p.opacity = function(m) {
    return arguments.length ? (_ = +m, p) : _;
  }, p.cutoffs = function(m) {
    return arguments.length ? (w = m, p) : w;
  }, p.cutoffColors = function(m) {
    return arguments.length ? (b = m, p) : b;
  }, p.fontSize = function(m) {
    return arguments.length ? (S = +m, p) : S;
  }, p;
}
function ja(t, n) {
  const e = [], r = 1e-3 * (Math.max(...n) - Math.min(...n)), i = Math.max(...n) - Math.min(...n);
  for (let o = 0; o < t; o++) {
    const a = Math.log10(r) + (Math.log10(i) - Math.log10(r)) * o / (t - 1);
    e.push(Math.pow(10, a));
  }
  return e;
}
function Ka() {
  let t, n, e, r, i, o, a, l, s = "rgb(122, 255, 248, 0.7)", u = 1.5, f = 1, h = 3, c = 1.5, d = 15, _ = 15, w = !1, b;
  const S = (g, p) => {
    const m = new Float64Array(g.length), k = p ** 2, v = 1e-3;
    let M = null, T = null;
    const N = (y, A) => {
      let $ = M;
      for (; $; ) {
        const C = $.index;
        if (k - v > (g[C] - y) ** 2 + (m[C] - A) ** 2)
          return !0;
        $ = $.next;
      }
      return !1;
    };
    for (const y of mn(g.length).sort((A, $) => g[A] - g[$])) {
      for (; M && g[M.index] < g[y] - k; )
        M = M.next;
      if (N(g[y], m[y] = 0)) {
        let $ = M;
        m[y] = 1 / 0;
        do {
          const C = $.index;
          let P = m[C] + Math.sqrt(k - (g[C] - g[y]) ** 2);
          P < m[y] && !N(g[y], P) && (m[y] = P), $ = $.next;
        } while ($);
      }
      const A = { index: y, next: null };
      M === null ? M = T = A : T = T.next = A;
    }
    return m;
  }, x = (g) => {
    const p = g.selectAll("svg.beeswarm-plot").data([null]).join("svg").attr("class", "beeswarm-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", _);
    let m = rn(r);
    m[0] = i ?? m[0], m[1] = o ?? m[1];
    const k = gt().domain(m).range([e.left, t - e.right]), v = S(r.map((M) => k(M)), h * 2 + c).map((M) => M + e.top + d);
    p.selectAll("g.marker").data(mn(r.length)).join("g").attr("class", "marker").attr("transform", (M) => `translate(${k(r[M])}, ${v[M]})`).each(function(M) {
      const T = Ai(this);
      if (T.append("circle").attr("r", h).attr("fill", s).attr("opacity", f).attr("stroke", "black").attr("stroke-width", u).append("title").text((N) => `Value:
${r[N].toFixed(5)}`), b) {
        const N = 7 * b.length;
        T.append("text").attr("x", h - N / 2 + 5).attr("y", h + 20).attr("font-size", "12px").text(b[M]);
      }
    }), w || (p.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${e.top})`).call(Oe(k)), a && p.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", e.top * (2 / 3)).text(a).style("font-size", _ * (3 / 4)));
  };
  return x.width = function(g) {
    return arguments.length ? (t = +g, x) : t;
  }, x.height = function(g) {
    return arguments.length ? (n = +g, x) : n;
  }, x.margin = function(g) {
    return arguments.length ? (e = g, x) : e;
  }, x.data = function(g) {
    return arguments.length ? (r = g, x) : r;
  }, x.xMin = function(g) {
    return arguments.length ? (i = +g, x) : i;
  }, x.xMax = function(g) {
    return arguments.length ? (o = +g, x) : o;
  }, x.xLabel = function(g) {
    return arguments.length ? (a = g, x) : a;
  }, x.title = function(g) {
    return arguments.length ? (l = g, x) : l;
  }, x.color = function(g) {
    return arguments.length ? (s = g, x) : s;
  }, x.strokeWidth = function(g) {
    return arguments.length ? (u = +g, x) : u;
  }, x.opacity = function(g) {
    return arguments.length ? (f = +g, x) : f;
  }, x.radius = function(g) {
    return arguments.length ? (h = +g, x) : h;
  }, x.markerPadding = function(g) {
    return arguments.length ? (c = +g, x) : c;
  }, x.plotPadding = function(g) {
    return arguments.length ? (d = +g, x) : d;
  }, x.fontSize = function(g) {
    return arguments.length ? (_ = +g, x) : _;
  }, x.removeAxis = function(g) {
    return arguments.length ? (w = g, x) : w;
  }, x.markerText = function(g) {
    return arguments.length ? (b = g, x) : b;
  }, x;
}
function Za() {
  let t, n, e, r, i, o, a, l, s;
  const u = (f) => {
    const c = t / 3.1, d = t - c, _ = (d - s.left - s.right) / 10, w = _ / 2, b = 2, S = 15, x = Math.floor(10 * 10 * (e / 100)), g = 10 * 10 * (e / 100) - x, p = Array.from({ length: 10 * 10 }, (A, $) => ({ index: $, color: $ < x ? r : i })), m = "m62.096 8.5859c-5.208 0-9.424 4.2191-9.424 9.4261 0.001 5.203 4.217 9.424 9.424 9.424 5.202 0 9.422-4.221 9.422-9.424 0-5.208-4.22-9.4261-9.422-9.4261zm-10.41 21.268c-6.672 0-12.131 5.407-12.131 12.07v29.23c0 2.275 1.791 4.123 4.07 4.123 2.28 0 4.127-1.846 4.127-4.123v-26.355h2.102s0.048 68.811 0.048 73.331c0 3.05 2.478 5.53 5.532 5.53 3.052 0 5.525-2.48 5.525-5.53v-42.581h2.27v42.581c0 3.05 2.473 5.53 5.531 5.53 3.054 0 5.549-2.48 5.549-5.53v-73.331h2.127v26.355c0 2.275 1.85 4.123 4.126 4.123 2.28 0 4.073-1.846 4.073-4.123v-29.23c0-6.663-5.463-12.07-12.129-12.07h-20.82z", k = f.selectAll("svg#population-prevalence-plot").data([null]).join("svg").attr("id", "population-prevalence-plot").attr("width", t).attr("height", n).attr("viewBox", `0 0 ${t} ${d}`).attr("font-family", "sans-serif");
    k.selectAll(".population-border").data([null]).join("rect").attr("class", "population-border").attr("width", d).attr("height", d).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 3).attr("transform", `translate(${b}, ${b})`);
    let v = k.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id", "color-gradient-fraction").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
    v.append("stop").attr("offset", "0%").attr("stop-color", r), v.append("stop").attr("offset", `${g * 100}%`).attr("stop-color", r), v.append("stop").attr("offset", `${g * 100}%`).attr("stop-color", i), v.append("stop").attr("offset", "100%").attr("stop-color", i);
    const M = k.selectAll("g.person").data(p);
    M.enter().append("g").attr("class", "person").merge(M).attr("transform", (A, $) => `translate(${s.left + $ % 10 * _ + b}, ${s.top + Math.floor($ / 10) * _ + b}) scale(${_ / 124.19})`).selectAll("path").data((A) => [A]).join("path").attr("d", m).attr("fill", (A) => A.index === x && g > 0 ? "url(#color-gradient-fraction)" : A.color), M.exit().remove();
    const y = k.selectAll("g.population-legend").data([null]).join("g").attr("class", "color-legend").attr("transform", `translate(${d + S}, ${s.top + S})`);
    y.selectAll("rect.population-legend-border").data([null]).join("rect").attr("class", "population-legend-border").attr("width", c - 20).attr("height", w * 4).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 2), y.selectAll("rect.population-legend-case-color").data([null]).join("rect").attr("class", "population-legend-case-color").attr("x", w / 2).attr("y", w / 2).attr("width", w).attr("height", w).attr("fill", r).attr("stroke", "black").attr("stroke-width", 1), y.selectAll("rect.population-legend-case-labal").data([null]).join("text").attr("class", "population-legend-case-labal").attr("x", w * 2).attr("y", _ / 2).attr("dy", ".35em").text(o ?? "Case").style("font-size", `${l ?? w / 1.25}px`).style(), y.selectAll("rect.population-legend-control-color").data([null]).join("rect").attr("class", "population-legend-control-color").attr("x", w / 2).attr("y", w * 4 / 2 + w / 2).attr("width", w).attr("height", w).attr("fill", i).attr("stroke", "black").attr("stroke-width", 1), y.selectAll("rect.population-legend-control-labal").data([null]).join("text").attr("class", "population-legend-control-labal").attr("x", w * 2).attr("y", _ + _ / 2).attr("dy", ".35em").text(a ?? "Control").style("font-size", `${l ?? w / 1.25}px`);
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
    return arguments.length ? (o = f, u) : o;
  }, u.labelControl = function(f) {
    return arguments.length ? (a = f, u) : a;
  }, u.fontSize = function(f) {
    return arguments.length ? (l = +f, u) : l;
  }, u.margin = function(f) {
    return arguments.length ? (s = f, u) : s;
  }, u;
}
export {
  Ka as beeswarmPlot,
  Wa as boxPlot,
  Ua as densityPlot,
  ja as getBandwidthValues,
  Za as populationPrevalencePlot,
  Ga as slider
};
//# sourceMappingURL=risk-viz.js.map
