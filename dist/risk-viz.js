function Q(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ve(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function In(t) {
  let n, e, r;
  t.length !== 2 ? (n = Q, e = (l, s) => Q(t(l), s), r = (l, s) => t(l) - s) : (n = t === Q || t === ve ? t : be, e = t, r = t);
  function i(l, s, u = 0, f = l.length) {
    if (u < f) {
      if (n(s, s) !== 0)
        return f;
      do {
        const c = u + f >>> 1;
        e(l[c], s) < 0 ? u = c + 1 : f = c;
      } while (u < f);
    }
    return u;
  }
  function o(l, s, u = 0, f = l.length) {
    if (u < f) {
      if (n(s, s) !== 0)
        return f;
      do {
        const c = u + f >>> 1;
        e(l[c], s) <= 0 ? u = c + 1 : f = c;
      } while (u < f);
    }
    return u;
  }
  function a(l, s, u = 0, f = l.length) {
    const c = i(l, s, u, f - 1);
    return c > u && r(l[c - 1], s) > -r(l[c], s) ? c - 1 : c;
  }
  return { left: i, center: a, right: o };
}
function be() {
  return 0;
}
function ke(t) {
  return t === null ? NaN : +t;
}
function* Me(t, n) {
  if (n === void 0)
    for (let e of t)
      e != null && (e = +e) >= e && (yield e);
  else {
    let e = -1;
    for (let r of t)
      (r = n(r, ++e, t)) != null && (r = +r) >= r && (yield r);
  }
}
const Ae = In(Q), $e = Ae.right;
In(ke).center;
const Ne = $e;
function tn(t, n) {
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
function Se(t = Q) {
  if (t === Q)
    return Dn;
  if (typeof t != "function")
    throw new TypeError("compare is not a function");
  return (n, e) => {
    const r = t(n, e);
    return r || r === 0 ? r : (t(e, e) === 0) - (t(n, n) === 0);
  };
}
function Dn(t, n) {
  return (t == null || !(t >= t)) - (n == null || !(n >= n)) || (t < n ? -1 : t > n ? 1 : 0);
}
const Ee = Math.sqrt(50), Ce = Math.sqrt(10), Te = Math.sqrt(2);
function kt(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Ee ? 10 : o >= Ce ? 5 : o >= Te ? 2 : 1;
  let l, s, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, l = Math.round(t * u), s = Math.round(n * u), l / u < t && ++l, s / u > n && --s, u = -u) : (u = Math.pow(10, i) * a, l = Math.round(t / u), s = Math.round(n / u), l * u < t && ++l, s * u > n && --s), s < l && 0.5 <= e && e < 2 ? kt(t, n, e * 2) : [l, s, u];
}
function ze(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0))
    return [];
  if (t === n)
    return [t];
  const r = n < t, [i, o, a] = r ? kt(n, t, e) : kt(t, n, e);
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
function Ht(t, n, e) {
  return n = +n, t = +t, e = +e, kt(t, n, e)[2];
}
function Pe(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Ht(n, t, e) : Ht(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ot(t, n) {
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
function Vt(t, n) {
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
function Hn(t, n, e = 0, r = 1 / 0, i) {
  if (n = Math.floor(n), e = Math.floor(Math.max(0, e)), r = Math.floor(Math.min(t.length - 1, r)), !(e <= n && n <= r))
    return t;
  for (i = i === void 0 ? Dn : Se(i); r > e; ) {
    if (r - e > 600) {
      const s = r - e + 1, u = n - e + 1, f = Math.log(s), c = 0.5 * Math.exp(2 * f / 3), h = 0.5 * Math.sqrt(f * c * (s - c) / s) * (u - s / 2 < 0 ? -1 : 1), d = Math.max(e, Math.floor(n - u * c / s + h)), _ = Math.min(r, Math.floor(n + (s - u) * c / s + h));
      Hn(t, n, d, _, i);
    }
    const o = t[n];
    let a = e, l = r;
    for (it(t, e, n), i(t[r], o) > 0 && it(t, e, r); a < l; ) {
      for (it(t, a, l), ++a, --l; i(t[a], o) < 0; )
        ++a;
      for (; i(t[l], o) > 0; )
        --l;
    }
    i(t[e], o) === 0 ? it(t, e, l) : (++l, it(t, l, r)), l <= n && (e = l + 1), n <= l && (r = l - 1);
  }
  return t;
}
function it(t, n, e) {
  const r = t[n];
  t[n] = t[e], t[e] = r;
}
function Lt(t, n, e) {
  if (t = Float64Array.from(Me(t, e)), !(!(r = t.length) || isNaN(n = +n))) {
    if (n <= 0 || r < 2)
      return Vt(t);
    if (n >= 1)
      return Ot(t);
    var r, i = (r - 1) * n, o = Math.floor(i), a = Ot(Hn(t, o).subarray(0, o + 1)), l = Vt(t.subarray(o + 1));
    return a + (l - a) * (i - o);
  }
}
function Re(t, n) {
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
function gn(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function Fe(t) {
  return t;
}
var _t = 1, qt = 2, Bt = 3, at = 4, pn = 1e-6;
function Le(t) {
  return "translate(" + t + ",0)";
}
function qe(t) {
  return "translate(0," + t + ")";
}
function Ie(t) {
  return (n) => +t(n);
}
function De(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function He() {
  return !this.__axis;
}
function nn(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, l = 3, s = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = t === _t || t === at ? -1 : 1, f = t === at || t === qt ? "x" : "y", c = t === _t || t === Bt ? Le : qe;
  function h(d) {
    var _ = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), w = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : Fe), k = Math.max(o, 0) + l, S = n.range(), p = +S[0] + s, g = +S[S.length - 1] + s, x = (n.bandwidth ? De : Ie)(n.copy(), s), m = d.selection ? d.selection() : d, v = m.selectAll(".domain").data([null]), A = m.selectAll(".tick").data(_, n).order(), M = A.exit(), C = A.enter().append("g").attr("class", "tick"), N = A.select("line"), y = A.select("text");
    v = v.merge(v.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(C), N = N.merge(C.append("line").attr("stroke", "currentColor").attr(f + "2", u * o)), y = y.merge(C.append("text").attr("fill", "currentColor").attr(f, u * k).attr("dy", t === _t ? "0em" : t === Bt ? "0.71em" : "0.32em")), d !== m && (v = v.transition(d), A = A.transition(d), N = N.transition(d), y = y.transition(d), M = M.transition(d).attr("opacity", pn).attr("transform", function($) {
      return isFinite($ = x($)) ? c($ + s) : this.getAttribute("transform");
    }), C.attr("opacity", pn).attr("transform", function($) {
      var b = this.parentNode.__axis;
      return c((b && isFinite(b = b($)) ? b : x($)) + s);
    })), M.remove(), v.attr("d", t === at || t === qt ? a ? "M" + u * a + "," + p + "H" + s + "V" + g + "H" + u * a : "M" + s + "," + p + "V" + g : a ? "M" + p + "," + u * a + "V" + s + "H" + g + "V" + u * a : "M" + p + "," + s + "H" + g), A.attr("opacity", 1).attr("transform", function($) {
      return c(x($) + s);
    }), N.attr(f + "2", u * o), y.attr(f, u * k).text(w), m.filter(He).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === qt ? "start" : t === at ? "end" : "middle"), m.each(function() {
      this.__axis = x;
    });
  }
  return h.scale = function(d) {
    return arguments.length ? (n = d, h) : n;
  }, h.ticks = function() {
    return e = Array.from(arguments), h;
  }, h.tickArguments = function(d) {
    return arguments.length ? (e = d == null ? [] : Array.from(d), h) : e.slice();
  }, h.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), h) : r && r.slice();
  }, h.tickFormat = function(d) {
    return arguments.length ? (i = d, h) : i;
  }, h.tickSize = function(d) {
    return arguments.length ? (o = a = +d, h) : o;
  }, h.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, h) : o;
  }, h.tickSizeOuter = function(d) {
    return arguments.length ? (a = +d, h) : a;
  }, h.tickPadding = function(d) {
    return arguments.length ? (l = +d, h) : l;
  }, h.offset = function(d) {
    return arguments.length ? (s = +d, h) : s;
  }, h;
}
function Oe(t) {
  return nn(_t, t);
}
function On(t) {
  return nn(Bt, t);
}
function Ve(t) {
  return nn(at, t);
}
var Be = { value: () => {
} };
function en() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new wt(e);
}
function wt(t) {
  this._ = t;
}
function Xe(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
wt.prototype = en.prototype = {
  constructor: wt,
  on: function(t, n) {
    var e = this._, r = Xe(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; )
        if ((i = (t = r[o]).type) && (i = Ye(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type)
        e[i] = mn(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = mn(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new wt(t);
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
function Ye(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function mn(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Be, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Xt = "http://www.w3.org/1999/xhtml";
const xn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Xt,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Pt(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), xn.hasOwnProperty(n) ? { space: xn[n], local: t } : t;
}
function We(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Xt && n.documentElement.namespaceURI === Xt ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ue(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Vn(t) {
  var n = Pt(t);
  return (n.local ? Ue : We)(n);
}
function je() {
}
function rn(t) {
  return t == null ? je : function() {
    return this.querySelector(t);
  };
}
function Ge(t) {
  typeof t != "function" && (t = rn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, l = r[i] = new Array(a), s, u, f = 0; f < a; ++f)
      (s = o[f]) && (u = t.call(s, s.__data__, f, o)) && ("__data__" in s && (u.__data__ = s.__data__), l[f] = u);
  return new L(r, this._parents);
}
function Ke(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Ze() {
  return [];
}
function Bn(t) {
  return t == null ? Ze : function() {
    return this.querySelectorAll(t);
  };
}
function Qe(t) {
  return function() {
    return Ke(t.apply(this, arguments));
  };
}
function Je(t) {
  typeof t == "function" ? t = Qe(t) : t = Bn(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], l = a.length, s, u = 0; u < l; ++u)
      (s = a[u]) && (r.push(t.call(s, s.__data__, u, a)), i.push(s));
  return new L(r, i);
}
function Xn(t) {
  return function() {
    return this.matches(t);
  };
}
function Yn(t) {
  return function(n) {
    return n.matches(t);
  };
}
var tr = Array.prototype.find;
function nr(t) {
  return function() {
    return tr.call(this.children, t);
  };
}
function er() {
  return this.firstElementChild;
}
function rr(t) {
  return this.select(t == null ? er : nr(typeof t == "function" ? t : Yn(t)));
}
var ir = Array.prototype.filter;
function or() {
  return Array.from(this.children);
}
function ar(t) {
  return function() {
    return ir.call(this.children, t);
  };
}
function lr(t) {
  return this.selectAll(t == null ? or : ar(typeof t == "function" ? t : Yn(t)));
}
function sr(t) {
  typeof t != "function" && (t = Xn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, l = r[i] = [], s, u = 0; u < a; ++u)
      (s = o[u]) && t.call(s, s.__data__, u, o) && l.push(s);
  return new L(r, this._parents);
}
function Wn(t) {
  return new Array(t.length);
}
function ur() {
  return new L(this._enter || this._groups.map(Wn), this._parents);
}
function Mt(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Mt.prototype = {
  constructor: Mt,
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
function fr(t) {
  return function() {
    return t;
  };
}
function cr(t, n, e, r, i, o) {
  for (var a = 0, l, s = n.length, u = o.length; a < u; ++a)
    (l = n[a]) ? (l.__data__ = o[a], r[a] = l) : e[a] = new Mt(t, o[a]);
  for (; a < s; ++a)
    (l = n[a]) && (i[a] = l);
}
function hr(t, n, e, r, i, o, a) {
  var l, s, u = /* @__PURE__ */ new Map(), f = n.length, c = o.length, h = new Array(f), d;
  for (l = 0; l < f; ++l)
    (s = n[l]) && (h[l] = d = a.call(s, s.__data__, l, n) + "", u.has(d) ? i[l] = s : u.set(d, s));
  for (l = 0; l < c; ++l)
    d = a.call(t, o[l], l, o) + "", (s = u.get(d)) ? (r[l] = s, s.__data__ = o[l], u.delete(d)) : e[l] = new Mt(t, o[l]);
  for (l = 0; l < f; ++l)
    (s = n[l]) && u.get(h[l]) === s && (i[l] = s);
}
function dr(t) {
  return t.__data__;
}
function gr(t, n) {
  if (!arguments.length)
    return Array.from(this, dr);
  var e = n ? hr : cr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = fr(t));
  for (var o = i.length, a = new Array(o), l = new Array(o), s = new Array(o), u = 0; u < o; ++u) {
    var f = r[u], c = i[u], h = c.length, d = pr(t.call(f, f && f.__data__, u, r)), _ = d.length, w = l[u] = new Array(_), k = a[u] = new Array(_), S = s[u] = new Array(h);
    e(f, c, w, k, S, d, n);
    for (var p = 0, g = 0, x, m; p < _; ++p)
      if (x = w[p]) {
        for (p >= g && (g = p + 1); !(m = k[g]) && ++g < _; )
          ;
        x._next = m || null;
      }
  }
  return a = new L(a, r), a._enter = l, a._exit = s, a;
}
function pr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function mr() {
  return new L(this._exit || this._groups.map(Wn), this._parents);
}
function xr(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function yr(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), l = new Array(i), s = 0; s < a; ++s)
    for (var u = e[s], f = r[s], c = u.length, h = l[s] = new Array(c), d, _ = 0; _ < c; ++_)
      (d = u[_] || f[_]) && (h[_] = d);
  for (; s < i; ++s)
    l[s] = e[s];
  return new L(l, this._parents);
}
function _r() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function wr(t) {
  t || (t = vr);
  function n(c, h) {
    return c && h ? t(c.__data__, h.__data__) : !c - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], l = a.length, s = i[o] = new Array(l), u, f = 0; f < l; ++f)
      (u = a[f]) && (s[f] = u);
    s.sort(n);
  }
  return new L(i, this._parents).order();
}
function vr(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function br() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function kr() {
  return Array.from(this);
}
function Mr() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a)
        return a;
    }
  return null;
}
function Ar() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function $r() {
  return !this.node();
}
function Nr(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, l; o < a; ++o)
      (l = i[o]) && t.call(l, l.__data__, o, i);
  return this;
}
function Sr(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Er(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Cr(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Tr(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function zr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Pr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Rr(t, n) {
  var e = Pt(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Er : Sr : typeof n == "function" ? e.local ? Pr : zr : e.local ? Tr : Cr)(e, n));
}
function Un(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Fr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Lr(t, n, e) {
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
function Ir(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Fr : typeof n == "function" ? qr : Lr)(t, n, e ?? "")) : tt(this.node(), t);
}
function tt(t, n) {
  return t.style.getPropertyValue(n) || Un(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Dr(t) {
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
function Vr(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Dr : typeof n == "function" ? Or : Hr)(t, n)) : this.node()[t];
}
function jn(t) {
  return t.trim().split(/^|\s+/);
}
function on(t) {
  return t.classList || new Gn(t);
}
function Gn(t) {
  this._node = t, this._names = jn(t.getAttribute("class") || "");
}
Gn.prototype = {
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
function Kn(t, n) {
  for (var e = on(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function Zn(t, n) {
  for (var e = on(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function Br(t) {
  return function() {
    Kn(this, t);
  };
}
function Xr(t) {
  return function() {
    Zn(this, t);
  };
}
function Yr(t, n) {
  return function() {
    (n.apply(this, arguments) ? Kn : Zn)(this, t);
  };
}
function Wr(t, n) {
  var e = jn(t + "");
  if (arguments.length < 2) {
    for (var r = on(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Yr : n ? Br : Xr)(e, n));
}
function Ur() {
  this.textContent = "";
}
function jr(t) {
  return function() {
    this.textContent = t;
  };
}
function Gr(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Kr(t) {
  return arguments.length ? this.each(t == null ? Ur : (typeof t == "function" ? Gr : jr)(t)) : this.node().textContent;
}
function Zr() {
  this.innerHTML = "";
}
function Qr(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Jr(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ti(t) {
  return arguments.length ? this.each(t == null ? Zr : (typeof t == "function" ? Jr : Qr)(t)) : this.node().innerHTML;
}
function ni() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ei() {
  return this.each(ni);
}
function ri() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ii() {
  return this.each(ri);
}
function oi(t) {
  var n = typeof t == "function" ? t : Vn(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function ai() {
  return null;
}
function li(t, n) {
  var e = typeof t == "function" ? t : Vn(t), r = n == null ? ai : typeof n == "function" ? n : rn(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function si() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ui() {
  return this.each(si);
}
function fi() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ci() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function hi(t) {
  return this.select(t ? ci : fi);
}
function di(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function gi(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function pi(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function mi(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function xi(t, n, e) {
  return function() {
    var r = this.__on, i, o = gi(n);
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
function yi(t, n, e) {
  var r = pi(t + ""), i, o = r.length, a;
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
  for (l = n ? xi : mi, i = 0; i < o; ++i)
    this.each(l(r[i], n, e));
  return this;
}
function Qn(t, n, e) {
  var r = Un(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function _i(t, n) {
  return function() {
    return Qn(this, t, n);
  };
}
function wi(t, n) {
  return function() {
    return Qn(this, t, n.apply(this, arguments));
  };
}
function vi(t, n) {
  return this.each((typeof n == "function" ? wi : _i)(t, n));
}
function* bi() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Jn = [null];
function L(t, n) {
  this._groups = t, this._parents = n;
}
function rt() {
  return new L([[document.documentElement]], Jn);
}
function ki() {
  return this;
}
L.prototype = rt.prototype = {
  constructor: L,
  select: Ge,
  selectAll: Je,
  selectChild: rr,
  selectChildren: lr,
  filter: sr,
  data: gr,
  enter: ur,
  exit: mr,
  join: xr,
  merge: yr,
  selection: ki,
  order: _r,
  sort: wr,
  call: br,
  nodes: kr,
  node: Mr,
  size: Ar,
  empty: $r,
  each: Nr,
  attr: Rr,
  style: Ir,
  property: Vr,
  classed: Wr,
  text: Kr,
  html: ti,
  raise: ei,
  lower: ii,
  append: oi,
  insert: li,
  remove: ui,
  clone: hi,
  datum: di,
  on: yi,
  dispatch: vi,
  [Symbol.iterator]: bi
};
function Mi(t) {
  return typeof t == "string" ? new L([[document.querySelector(t)]], [document.documentElement]) : new L([[t]], Jn);
}
function an(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function te(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function gt() {
}
var ft = 0.7, At = 1 / ft, J = "\\s*([+-]?\\d+)\\s*", ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", H = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ai = /^#([0-9a-f]{3,8})$/, $i = new RegExp(`^rgb\\(${J},${J},${J}\\)$`), Ni = new RegExp(`^rgb\\(${H},${H},${H}\\)$`), Si = new RegExp(`^rgba\\(${J},${J},${J},${ct}\\)$`), Ei = new RegExp(`^rgba\\(${H},${H},${H},${ct}\\)$`), Ci = new RegExp(`^hsl\\(${ct},${H},${H}\\)$`), Ti = new RegExp(`^hsla\\(${ct},${H},${H},${ct}\\)$`), yn = {
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
an(gt, U, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _n,
  // Deprecated! Use color.formatHex.
  formatHex: _n,
  formatHex8: zi,
  formatHsl: Pi,
  formatRgb: wn,
  toString: wn
});
function _n() {
  return this.rgb().formatHex();
}
function zi() {
  return this.rgb().formatHex8();
}
function Pi() {
  return ne(this).formatHsl();
}
function wn() {
  return this.rgb().formatRgb();
}
function U(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Ai.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? vn(n) : e === 3 ? new F(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? pt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? pt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = $i.exec(t)) ? new F(n[1], n[2], n[3], 1) : (n = Ni.exec(t)) ? new F(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Si.exec(t)) ? pt(n[1], n[2], n[3], n[4]) : (n = Ei.exec(t)) ? pt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ci.exec(t)) ? Mn(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ti.exec(t)) ? Mn(n[1], n[2] / 100, n[3] / 100, n[4]) : yn.hasOwnProperty(t) ? vn(yn[t]) : t === "transparent" ? new F(NaN, NaN, NaN, 0) : null;
}
function vn(t) {
  return new F(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function pt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new F(t, n, e, r);
}
function Ri(t) {
  return t instanceof gt || (t = U(t)), t ? (t = t.rgb(), new F(t.r, t.g, t.b, t.opacity)) : new F();
}
function Yt(t, n, e, r) {
  return arguments.length === 1 ? Ri(t) : new F(t, n, e, r ?? 1);
}
function F(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
an(F, Yt, te(gt, {
  brighter(t) {
    return t = t == null ? At : Math.pow(At, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ft : Math.pow(ft, t), new F(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new F(W(this.r), W(this.g), W(this.b), $t(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: bn,
  // Deprecated! Use color.formatHex.
  formatHex: bn,
  formatHex8: Fi,
  formatRgb: kn,
  toString: kn
}));
function bn() {
  return `#${Y(this.r)}${Y(this.g)}${Y(this.b)}`;
}
function Fi() {
  return `#${Y(this.r)}${Y(this.g)}${Y(this.b)}${Y((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function kn() {
  const t = $t(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${W(this.r)}, ${W(this.g)}, ${W(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function $t(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function W(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Y(t) {
  return t = W(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Mn(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new I(t, n, e, r);
}
function ne(t) {
  if (t instanceof I)
    return new I(t.h, t.s, t.l, t.opacity);
  if (t instanceof gt || (t = U(t)), !t)
    return new I();
  if (t instanceof I)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, l = o - i, s = (o + i) / 2;
  return l ? (n === o ? a = (e - r) / l + (e < r) * 6 : e === o ? a = (r - n) / l + 2 : a = (n - e) / l + 4, l /= s < 0.5 ? o + i : 2 - o - i, a *= 60) : l = s > 0 && s < 1 ? 0 : a, new I(a, l, s, t.opacity);
}
function Li(t, n, e, r) {
  return arguments.length === 1 ? ne(t) : new I(t, n, e, r ?? 1);
}
function I(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
an(I, Li, te(gt, {
  brighter(t) {
    return t = t == null ? At : Math.pow(At, t), new I(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ft : Math.pow(ft, t), new I(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new F(
      It(t >= 240 ? t - 240 : t + 120, i, r),
      It(t, i, r),
      It(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new I(An(this.h), mt(this.s), mt(this.l), $t(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = $t(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${An(this.h)}, ${mt(this.s) * 100}%, ${mt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function An(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function mt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function It(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const ln = (t) => () => t;
function qi(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Ii(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Di(t) {
  return (t = +t) == 1 ? ee : function(n, e) {
    return e - n ? Ii(n, e, t) : ln(isNaN(n) ? e : n);
  };
}
function ee(t, n) {
  var e = n - t;
  return e ? qi(t, e) : ln(isNaN(t) ? n : t);
}
const Nt = function t(n) {
  var e = Di(n);
  function r(i, o) {
    var a = e((i = Yt(i)).r, (o = Yt(o)).r), l = e(i.g, o.g), s = e(i.b, o.b), u = ee(i.opacity, o.opacity);
    return function(f) {
      return i.r = a(f), i.g = l(f), i.b = s(f), i.opacity = u(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Hi(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Oi(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Vi(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a)
    i[a] = sn(t[a], n[a]);
  for (; a < e; ++a)
    o[a] = n[a];
  return function(l) {
    for (a = 0; a < r; ++a)
      o[a] = i[a](l);
    return o;
  };
}
function Bi(t, n) {
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
function Xi(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = sn(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
var Wt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Dt = new RegExp(Wt.source, "g");
function Yi(t) {
  return function() {
    return t;
  };
}
function Wi(t) {
  return function(n) {
    return t(n) + "";
  };
}
function re(t, n) {
  var e = Wt.lastIndex = Dt.lastIndex = 0, r, i, o, a = -1, l = [], s = [];
  for (t = t + "", n = n + ""; (r = Wt.exec(t)) && (i = Dt.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), l[a] ? l[a] += o : l[++a] = o), (r = r[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, s.push({ i: a, x: q(r, i) })), e = Dt.lastIndex;
  return e < n.length && (o = n.slice(e), l[a] ? l[a] += o : l[++a] = o), l.length < 2 ? s[0] ? Wi(s[0].x) : Yi(n) : (n = s.length, function(u) {
    for (var f = 0, c; f < n; ++f)
      l[(c = s[f]).i] = c.x(u);
    return l.join("");
  });
}
function sn(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ln(n) : (e === "number" ? q : e === "string" ? (r = U(n)) ? (n = r, Nt) : re : n instanceof U ? Nt : n instanceof Date ? Bi : Oi(n) ? Hi : Array.isArray(n) ? Vi : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Xi : q)(t, n);
}
function Ui(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var $n = 180 / Math.PI, Ut = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ie(t, n, e, r, i, o) {
  var a, l, s;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (s = t * e + n * r) && (e -= t * s, r -= n * s), (l = Math.sqrt(e * e + r * r)) && (e /= l, r /= l, s /= l), t * r < n * e && (t = -t, n = -n, s = -s, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * $n,
    skewX: Math.atan(s) * $n,
    scaleX: a,
    scaleY: l
  };
}
var xt;
function ji(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Ut : ie(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Gi(t) {
  return t == null || (xt || (xt = document.createElementNS("http://www.w3.org/2000/svg", "g")), xt.setAttribute("transform", t), !(t = xt.transform.baseVal.consolidate())) ? Ut : (t = t.matrix, ie(t.a, t.b, t.c, t.d, t.e, t.f));
}
function oe(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, f, c, h, d, _) {
    if (u !== c || f !== h) {
      var w = d.push("translate(", null, n, null, e);
      _.push({ i: w - 4, x: q(u, c) }, { i: w - 2, x: q(f, h) });
    } else
      (c || h) && d.push("translate(" + c + n + h + e);
  }
  function a(u, f, c, h) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: q(u, f) })) : f && c.push(i(c) + "rotate(" + f + r);
  }
  function l(u, f, c, h) {
    u !== f ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: q(u, f) }) : f && c.push(i(c) + "skewX(" + f + r);
  }
  function s(u, f, c, h, d, _) {
    if (u !== c || f !== h) {
      var w = d.push(i(d) + "scale(", null, ",", null, ")");
      _.push({ i: w - 4, x: q(u, c) }, { i: w - 2, x: q(f, h) });
    } else
      (c !== 1 || h !== 1) && d.push(i(d) + "scale(" + c + "," + h + ")");
  }
  return function(u, f) {
    var c = [], h = [];
    return u = t(u), f = t(f), o(u.translateX, u.translateY, f.translateX, f.translateY, c, h), a(u.rotate, f.rotate, c, h), l(u.skewX, f.skewX, c, h), s(u.scaleX, u.scaleY, f.scaleX, f.scaleY, c, h), u = f = null, function(d) {
      for (var _ = -1, w = h.length, k; ++_ < w; )
        c[(k = h[_]).i] = k.x(d);
      return c.join("");
    };
  };
}
var Ki = oe(ji, "px, ", "px)", "deg)"), Zi = oe(Gi, ", ", ")", ")"), nt = 0, lt = 0, ot = 0, ae = 1e3, St, st, Et = 0, j = 0, Rt = 0, ht = typeof performance == "object" && performance.now ? performance : Date, le = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function un() {
  return j || (le(Qi), j = ht.now() + Rt);
}
function Qi() {
  j = 0;
}
function Ct() {
  this._call = this._time = this._next = null;
}
Ct.prototype = se.prototype = {
  constructor: Ct,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? un() : +e) + (n == null ? 0 : +n), !this._next && st !== this && (st ? st._next = this : St = this, st = this), this._call = t, this._time = e, jt();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, jt());
  }
};
function se(t, n, e) {
  var r = new Ct();
  return r.restart(t, n, e), r;
}
function Ji() {
  un(), ++nt;
  for (var t = St, n; t; )
    (n = j - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --nt;
}
function Nn() {
  j = (Et = ht.now()) + Rt, nt = lt = 0;
  try {
    Ji();
  } finally {
    nt = 0, no(), j = 0;
  }
}
function to() {
  var t = ht.now(), n = t - Et;
  n > ae && (Rt -= n, Et = t);
}
function no() {
  for (var t, n = St, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : St = e);
  st = t, jt(r);
}
function jt(t) {
  if (!nt) {
    lt && (lt = clearTimeout(lt));
    var n = t - j;
    n > 24 ? (t < 1 / 0 && (lt = setTimeout(Nn, t - ht.now() - Rt)), ot && (ot = clearInterval(ot))) : (ot || (Et = ht.now(), ot = setInterval(to, ae)), nt = 1, le(Nn));
  }
}
function Sn(t, n, e) {
  var r = new Ct();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var eo = en("start", "end", "cancel", "interrupt"), ro = [], ue = 0, En = 1, Gt = 2, vt = 3, Cn = 4, Kt = 5, bt = 6;
function Ft(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a)
    t.__transition = {};
  else if (e in a)
    return;
  io(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: eo,
    tween: ro,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ue
  });
}
function fn(t, n) {
  var e = D(t, n);
  if (e.state > ue)
    throw new Error("too late; already scheduled");
  return e;
}
function O(t, n) {
  var e = D(t, n);
  if (e.state > vt)
    throw new Error("too late; already running");
  return e;
}
function D(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function io(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = se(o, 0, e.time);
  function o(u) {
    e.state = En, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var f, c, h, d;
    if (e.state !== En)
      return s();
    for (f in r)
      if (d = r[f], d.name === e.name) {
        if (d.state === vt)
          return Sn(a);
        d.state === Cn ? (d.state = bt, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[f]) : +f < n && (d.state = bt, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[f]);
      }
    if (Sn(function() {
      e.state === vt && (e.state = Cn, e.timer.restart(l, e.delay, e.time), l(u));
    }), e.state = Gt, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Gt) {
      for (e.state = vt, i = new Array(h = e.tween.length), f = 0, c = -1; f < h; ++f)
        (d = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++c] = d);
      i.length = c + 1;
    }
  }
  function l(u) {
    for (var f = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(s), e.state = Kt, 1), c = -1, h = i.length; ++c < h; )
      i[c].call(t, f);
    e.state === Kt && (e.on.call("end", t, t.__data__, e.index, e.group), s());
  }
  function s() {
    e.state = bt, e.timer.stop(), delete r[n];
    for (var u in r)
      return;
    delete t.__transition;
  }
}
function oo(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Gt && r.state < Kt, r.state = bt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function ao(t) {
  return this.each(function() {
    oo(this, t);
  });
}
function lo(t, n) {
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
function so(t, n, e) {
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
function uo(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = D(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? lo : so)(e, t, n));
}
function cn(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = O(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return D(i, r).value[n];
  };
}
function fe(t, n) {
  var e;
  return (typeof n == "number" ? q : n instanceof U ? Nt : (e = U(n)) ? (n = e, Nt) : re)(t, n);
}
function fo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function co(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ho(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function go(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function po(t, n, e) {
  var r, i, o;
  return function() {
    var a, l = e(this), s;
    return l == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), s = l + "", a === s ? null : a === r && s === i ? o : (i = s, o = n(r = a, l)));
  };
}
function mo(t, n, e) {
  var r, i, o;
  return function() {
    var a, l = e(this), s;
    return l == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), s = l + "", a === s ? null : a === r && s === i ? o : (i = s, o = n(r = a, l)));
  };
}
function xo(t, n) {
  var e = Pt(t), r = e === "transform" ? Zi : fe;
  return this.attrTween(t, typeof n == "function" ? (e.local ? mo : po)(e, r, cn(this, "attr." + t, n)) : n == null ? (e.local ? co : fo)(e) : (e.local ? go : ho)(e, r, n));
}
function yo(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function _o(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function wo(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && _o(t, o)), e;
  }
  return i._value = n, i;
}
function vo(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && yo(t, o)), e;
  }
  return i._value = n, i;
}
function bo(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = Pt(t);
  return this.tween(e, (r.local ? wo : vo)(r, n));
}
function ko(t, n) {
  return function() {
    fn(this, t).delay = +n.apply(this, arguments);
  };
}
function Mo(t, n) {
  return n = +n, function() {
    fn(this, t).delay = n;
  };
}
function Ao(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ko : Mo)(n, t)) : D(this.node(), n).delay;
}
function $o(t, n) {
  return function() {
    O(this, t).duration = +n.apply(this, arguments);
  };
}
function No(t, n) {
  return n = +n, function() {
    O(this, t).duration = n;
  };
}
function So(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? $o : No)(n, t)) : D(this.node(), n).duration;
}
function Eo(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    O(this, t).ease = n;
  };
}
function Co(t) {
  var n = this._id;
  return arguments.length ? this.each(Eo(n, t)) : D(this.node(), n).ease;
}
function To(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    O(this, t).ease = e;
  };
}
function zo(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(To(this._id, t));
}
function Po(t) {
  typeof t != "function" && (t = Xn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, l = r[i] = [], s, u = 0; u < a; ++u)
      (s = o[u]) && t.call(s, s.__data__, u, o) && l.push(s);
  return new B(r, this._parents, this._name, this._id);
}
function Ro(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), l = 0; l < o; ++l)
    for (var s = n[l], u = e[l], f = s.length, c = a[l] = new Array(f), h, d = 0; d < f; ++d)
      (h = s[d] || u[d]) && (c[d] = h);
  for (; l < r; ++l)
    a[l] = n[l];
  return new B(a, this._parents, this._name, this._id);
}
function Fo(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Lo(t, n, e) {
  var r, i, o = Fo(n) ? fn : O;
  return function() {
    var a = o(this, t), l = a.on;
    l !== r && (i = (r = l).copy()).on(n, e), a.on = i;
  };
}
function qo(t, n) {
  var e = this._id;
  return arguments.length < 2 ? D(this.node(), e).on.on(t) : this.each(Lo(e, t, n));
}
function Io(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function Do() {
  return this.on("end.remove", Io(this._id));
}
function Ho(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = rn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var l = r[a], s = l.length, u = o[a] = new Array(s), f, c, h = 0; h < s; ++h)
      (f = l[h]) && (c = t.call(f, f.__data__, h, l)) && ("__data__" in f && (c.__data__ = f.__data__), u[h] = c, Ft(u[h], n, e, h, u, D(f, e)));
  return new B(o, this._parents, n, e);
}
function Oo(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Bn(t));
  for (var r = this._groups, i = r.length, o = [], a = [], l = 0; l < i; ++l)
    for (var s = r[l], u = s.length, f, c = 0; c < u; ++c)
      if (f = s[c]) {
        for (var h = t.call(f, f.__data__, c, s), d, _ = D(f, e), w = 0, k = h.length; w < k; ++w)
          (d = h[w]) && Ft(d, n, e, w, h, _);
        o.push(h), a.push(f);
      }
  return new B(o, a, n, e);
}
var Vo = rt.prototype.constructor;
function Bo() {
  return new Vo(this._groups, this._parents);
}
function Xo(t, n) {
  var e, r, i;
  return function() {
    var o = tt(this, t), a = (this.style.removeProperty(t), tt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function ce(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Yo(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = tt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Wo(t, n, e) {
  var r, i, o;
  return function() {
    var a = tt(this, t), l = e(this), s = l + "";
    return l == null && (s = l = (this.style.removeProperty(t), tt(this, t))), a === s ? null : a === r && s === i ? o : (i = s, o = n(r = a, l));
  };
}
function Uo(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, l;
  return function() {
    var s = O(this, t), u = s.on, f = s.value[o] == null ? l || (l = ce(n)) : void 0;
    (u !== e || i !== f) && (r = (e = u).copy()).on(a, i = f), s.on = r;
  };
}
function jo(t, n, e) {
  var r = (t += "") == "transform" ? Ki : fe;
  return n == null ? this.styleTween(t, Xo(t, r)).on("end.style." + t, ce(t)) : typeof n == "function" ? this.styleTween(t, Wo(t, r, cn(this, "style." + t, n))).each(Uo(this._id, t)) : this.styleTween(t, Yo(t, r, n), e).on("end.style." + t, null);
}
function Go(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Ko(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Go(t, a, e)), r;
  }
  return o._value = n, o;
}
function Zo(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, Ko(t, n, e ?? ""));
}
function Qo(t) {
  return function() {
    this.textContent = t;
  };
}
function Jo(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function ta(t) {
  return this.tween("text", typeof t == "function" ? Jo(cn(this, "text", t)) : Qo(t == null ? "" : t + ""));
}
function na(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function ea(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && na(i)), n;
  }
  return r._value = t, r;
}
function ra(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, ea(t));
}
function ia() {
  for (var t = this._name, n = this._id, e = de(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], l = a.length, s, u = 0; u < l; ++u)
      if (s = a[u]) {
        var f = D(s, n);
        Ft(s, t, e, u, a, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new B(r, this._parents, t, e);
}
function oa() {
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
var aa = 0;
function B(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function he(t) {
  return rt().transition(t);
}
function de() {
  return ++aa;
}
var V = rt.prototype;
B.prototype = he.prototype = {
  constructor: B,
  select: Ho,
  selectAll: Oo,
  selectChild: V.selectChild,
  selectChildren: V.selectChildren,
  filter: Po,
  merge: Ro,
  selection: Bo,
  transition: ia,
  call: V.call,
  nodes: V.nodes,
  node: V.node,
  size: V.size,
  empty: V.empty,
  each: V.each,
  on: qo,
  attr: xo,
  attrTween: bo,
  style: jo,
  styleTween: Zo,
  text: ta,
  textTween: ra,
  remove: Do,
  tween: uo,
  delay: Ao,
  duration: So,
  ease: Co,
  easeVarying: zo,
  end: oa,
  [Symbol.iterator]: V[Symbol.iterator]
};
function la(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var sa = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: la
};
function ua(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function fa(t) {
  var n, e;
  t instanceof B ? (n = t._id, t = t._name) : (n = de(), (e = sa).time = un(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], l = a.length, s, u = 0; u < l; ++u)
      (s = a[u]) && Ft(s, t, n, u, a, e || ua(s, n));
  return new B(r, this._parents, t, n);
}
rt.prototype.interrupt = ao;
rt.prototype.transition = fa;
const Zt = Math.PI, Qt = 2 * Zt, X = 1e-6, ca = Qt - X;
function ge(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function ha(t) {
  let n = Math.floor(t);
  if (!(n >= 0))
    throw new Error(`invalid digits: ${t}`);
  if (n > 15)
    return ge;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class da {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? ge : ha(n);
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
    let a = this._x1, l = this._y1, s = r - n, u = i - e, f = a - n, c = l - e, h = f * f + c * c;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > X)
      if (!(Math.abs(c * s - u * f) > X) || !o)
        this._append`L${this._x1 = n},${this._y1 = e}`;
      else {
        let d = r - a, _ = i - l, w = s * s + u * u, k = d * d + _ * _, S = Math.sqrt(w), p = Math.sqrt(h), g = o * Math.tan((Zt - Math.acos((w + h - k) / (2 * S * p))) / 2), x = g / p, m = g / S;
        Math.abs(x - 1) > X && this._append`L${n + x * f},${e + x * c}`, this._append`A${o},${o},0,0,${+(c * d > f * _)},${this._x1 = n + m * s},${this._y1 = e + m * u}`;
      }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0)
      throw new Error(`negative radius: ${r}`);
    let l = r * Math.cos(i), s = r * Math.sin(i), u = n + l, f = e + s, c = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${f}` : (Math.abs(this._x1 - u) > X || Math.abs(this._y1 - f) > X) && this._append`L${u},${f}`, r && (h < 0 && (h = h % Qt + Qt), h > ca ? this._append`A${r},${r},0,1,${c},${n - l},${e - s}A${r},${r},0,1,${c},${this._x1 = u},${this._y1 = f}` : h > X && this._append`A${r},${r},0,${+(h >= Zt)},${c},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function ga(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Tt(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function et(t) {
  return t = Tt(Math.abs(t)), t ? t[1] : NaN;
}
function pa(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, l = t[0], s = 0; i > 0 && l > 0 && (s + l + 1 > r && (l = Math.max(1, r - s)), o.push(e.substring(i -= l, i + l)), !((s += l + 1) > r)); )
      l = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function ma(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var xa = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function zt(t) {
  if (!(n = xa.exec(t)))
    throw new Error("invalid format: " + t);
  var n;
  return new hn({
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
zt.prototype = hn.prototype;
function hn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
hn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ya(t) {
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
var pe;
function _a(t, n) {
  var e = Tt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1], o = i - (pe = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Tt(t, Math.max(0, n + o - 1))[0];
}
function Tn(t, n) {
  var e = Tt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const zn = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: ga,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Tn(t * 100, n),
  r: Tn,
  s: _a,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Pn(t) {
  return t;
}
var Rn = Array.prototype.map, Fn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function wa(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Pn : pa(Rn.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Pn : ma(Rn.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", l = t.minus === void 0 ? "−" : t.minus + "", s = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(c) {
    c = zt(c);
    var h = c.fill, d = c.align, _ = c.sign, w = c.symbol, k = c.zero, S = c.width, p = c.comma, g = c.precision, x = c.trim, m = c.type;
    m === "n" ? (p = !0, m = "g") : zn[m] || (g === void 0 && (g = 12), x = !0, m = "g"), (k || h === "0" && d === "=") && (k = !0, h = "0", d = "=");
    var v = w === "$" ? e : w === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", A = w === "$" ? r : /[%p]/.test(m) ? a : "", M = zn[m], C = /[defgprs%]/.test(m);
    g = g === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));
    function N(y) {
      var $ = v, b = A, z, R, E;
      if (m === "c")
        b = M(y) + b, y = "";
      else {
        y = +y;
        var P = y < 0 || 1 / y < 0;
        if (y = isNaN(y) ? s : M(Math.abs(y), g), x && (y = ya(y)), P && +y == 0 && _ !== "+" && (P = !1), $ = (P ? _ === "(" ? _ : l : _ === "-" || _ === "(" ? "" : _) + $, b = (m === "s" ? Fn[8 + pe / 3] : "") + b + (P && _ === "(" ? ")" : ""), C) {
          for (z = -1, R = y.length; ++z < R; )
            if (E = y.charCodeAt(z), 48 > E || E > 57) {
              b = (E === 46 ? i + y.slice(z + 1) : y.slice(z)) + b, y = y.slice(0, z);
              break;
            }
        }
      }
      p && !k && (y = n(y, 1 / 0));
      var G = $.length + y.length + b.length, T = G < S ? new Array(S - G + 1).join(h) : "";
      switch (p && k && (y = n(T + y, T.length ? S - b.length : 1 / 0), T = ""), d) {
        case "<":
          y = $ + y + b + T;
          break;
        case "=":
          y = $ + T + y + b;
          break;
        case "^":
          y = T.slice(0, G = T.length >> 1) + $ + y + b + T.slice(G);
          break;
        default:
          y = T + $ + y + b;
          break;
      }
      return o(y);
    }
    return N.toString = function() {
      return c + "";
    }, N;
  }
  function f(c, h) {
    var d = u((c = zt(c), c.type = "f", c)), _ = Math.max(-8, Math.min(8, Math.floor(et(h) / 3))) * 3, w = Math.pow(10, -_), k = Fn[8 + _ / 3];
    return function(S) {
      return d(w * S) + k;
    };
  }
  return {
    format: u,
    formatPrefix: f
  };
}
var yt, me, xe;
va({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function va(t) {
  return yt = wa(t), me = yt.format, xe = yt.formatPrefix, yt;
}
function ba(t) {
  return Math.max(0, -et(Math.abs(t)));
}
function ka(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(et(n) / 3))) * 3 - et(Math.abs(t)));
}
function Ma(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, et(n) - et(t)) + 1;
}
function Aa(t, n) {
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
function $a(t) {
  return function() {
    return t;
  };
}
function Na(t) {
  return +t;
}
var Ln = [0, 1];
function Z(t) {
  return t;
}
function Jt(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : $a(isNaN(n) ? NaN : 0.5);
}
function Sa(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Ea(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Jt(i, r), o = e(a, o)) : (r = Jt(r, i), o = e(o, a)), function(l) {
    return o(r(l));
  };
}
function Ca(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Jt(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(l) {
    var s = Ne(t, l, 1, r) - 1;
    return o[s](i[s](l));
  };
}
function Ta(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function za() {
  var t = Ln, n = Ln, e = sn, r, i, o, a = Z, l, s, u;
  function f() {
    var h = Math.min(t.length, n.length);
    return a !== Z && (a = Sa(t[0], t[h - 1])), l = h > 2 ? Ca : Ea, s = u = null, c;
  }
  function c(h) {
    return h == null || isNaN(h = +h) ? o : (s || (s = l(t.map(r), n, e)))(r(a(h)));
  }
  return c.invert = function(h) {
    return a(i((u || (u = l(n, t.map(r), q)))(h)));
  }, c.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Na), f()) : t.slice();
  }, c.range = function(h) {
    return arguments.length ? (n = Array.from(h), f()) : n.slice();
  }, c.rangeRound = function(h) {
    return n = Array.from(h), e = Ui, f();
  }, c.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : Z, f()) : a !== Z;
  }, c.interpolate = function(h) {
    return arguments.length ? (e = h, f()) : e;
  }, c.unknown = function(h) {
    return arguments.length ? (o = h, c) : o;
  }, function(h, d) {
    return r = h, i = d, f();
  };
}
function Pa() {
  return za()(Z, Z);
}
function Ra(t, n, e, r) {
  var i = Pe(t, n, e), o;
  switch (r = zt(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = ka(i, a)) && (r.precision = o), xe(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Ma(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = ba(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return me(r);
}
function Fa(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ze(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Ra(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], l = r[o], s, u, f = 10;
    for (l < a && (u = a, a = l, l = u, u = i, i = o, o = u); f-- > 0; ) {
      if (u = Ht(a, l, e), u === s)
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
function dt() {
  var t = Pa();
  return t.copy = function() {
    return Ta(t, dt());
  }, Aa.apply(t, arguments), Fa(t);
}
function K(t) {
  return function() {
    return t;
  };
}
function La(t) {
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
  }, () => new da(n);
}
function qa(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ye(t) {
  this._context = t;
}
ye.prototype = {
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
function Ia(t) {
  return new ye(t);
}
function Da(t) {
  return t[0];
}
function Ha(t) {
  return t[1];
}
function Oa(t, n) {
  var e = K(!0), r = null, i = Ia, o = null, a = La(l);
  t = typeof t == "function" ? t : t === void 0 ? Da : K(t), n = typeof n == "function" ? n : n === void 0 ? Ha : K(n);
  function l(s) {
    var u, f = (s = qa(s)).length, c, h = !1, d;
    for (r == null && (o = i(d = a())), u = 0; u <= f; ++u)
      !(u < f && e(c = s[u], u, s)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+t(c, u, s), +n(c, u, s));
    if (d)
      return o = null, d + "" || null;
  }
  return l.x = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : K(+s), l) : t;
  }, l.y = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : K(+s), l) : n;
  }, l.defined = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : K(!!s), l) : e;
  }, l.curve = function(s) {
    return arguments.length ? (i = s, r != null && (o = i(r)), l) : i;
  }, l.context = function(s) {
    return arguments.length ? (s == null ? r = o = null : o = i(r = s), l) : r;
  }, l;
}
function qn(t, n, e) {
  t._context.bezierCurveTo(
    (2 * t._x0 + t._x1) / 3,
    (2 * t._y0 + t._y1) / 3,
    (t._x0 + 2 * t._x1) / 3,
    (t._y0 + 2 * t._y1) / 3,
    (t._x0 + 4 * t._x1 + n) / 6,
    (t._y0 + 4 * t._y1 + e) / 6
  );
}
function _e(t) {
  this._context = t;
}
_e.prototype = {
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
        qn(this, this._x1, this._y1);
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
        qn(this, t, n);
        break;
    }
    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
  }
};
function Va(t) {
  return new _e(t);
}
function ut(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
ut.prototype = {
  constructor: ut,
  scale: function(t) {
    return t === 1 ? this : new ut(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new ut(this.k, this.x + this.k * t, this.y + this.k * n);
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
ut.prototype;
function Ba() {
  let t, n, e, r, i, o;
  const a = en("change"), l = (s) => {
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
function Xa() {
  let t, n, e, r, i, o, a, l, s, u, f = "rgb(122, 255, 248, 0.7)", c = 1.5, h = 1, d, _ = 15, w = 0, k = 0, S = !1;
  const p = (g) => {
    const x = g.selectAll("svg.box-plot").data([null]).join("svg").attr("class", "box-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", _);
    let m = tn(r);
    m[0] = i ?? m[0], m[1] = o ?? m[1];
    const v = dt().domain(m).range([e.left, t - e.right]), A = Lt(r, 0.25), M = Lt(r, 0.5), C = Lt(r, 0.75), N = C - A;
    let y = A - N * 1.5;
    const $ = Vt(r);
    y = $ > y ? $ : y;
    let b = C + N * 1.5;
    const z = Ot(r);
    b = z < b ? z : b;
    const R = r.filter((T) => T < y || T > b), E = r.reduce((T, dn) => T + dn, 0) / r.length, P = g.selectAll("div.tooltip").data([null]).join("div").attr("class", "p-2 text-white rounded-md border border-white border-opacity-50 shadow-sm pointer-events-none -translate-x-[40%] -translate-y-[75%] font-sans text-xs bg-black bg-opacity-60 transition-opacity duration-200 ease-out transition-border-color duration-100 ease-out backdrop-blur-md").style("position", "absolute").style("opacity", 0);
    x.on("mouseover", function(T) {
      const we = `
        Minimum: ${y.toFixed(1)} %<br>
        25th percentile: ${A.toFixed(1)} %<br>
        Median: ${M.toFixed(1)} %<br>
        75th percentile: ${C.toFixed(1)} %<br>
        Maximum: ${b.toFixed(1)} %<br>
        Inter-quartile range: ${N.toFixed(1)} %<br>
        Mean: ${E.toFixed(1)} %
        `;
      P.style("opacity", 1).style("border-color", f).html(we);
    }).on("mouseout", () => {
      P.style("opacity", 0);
    }).on("mousemove", function(T) {
      P.style("left", T.pageX + w + "px").style("top", T.pageY + k + "px");
    });
    const G = R.filter((T) => T < m[1] && T > m[0]);
    x.selectAll("circle").data(G).join("circle").attr("cx", (T) => v(T)).attr("cy", () => n / 2 + (Math.random() * (u / 2) - u / 4)).attr("r", d).attr("fill", f).attr("opacity", h).attr("stroke", "black").attr("stroke-width", c), x.selectAll("rect").data([null]).join("rect").attr("x", v(A)).attr("y", n / 2 - u / 2).attr("width", v(C) - v(A)).attr("height", u).attr("fill", f).attr("stroke", "black").attr("stroke-width", c), x.selectAll("#median").data([null]).join("line").attr("id", "median").attr("x1", v(M)).attr("y1", n / 2 - u / 2).attr("x2", v(M)).attr("y2", n / 2 + u / 2).attr("stroke", "black").attr("stroke-width", c * 2), x.selectAll("#lower-whisker").data([null]).join("line").attr("id", "lower-whisker").attr("x1", v(y)).attr("y1", n / 2).attr("x2", v(A)).attr("y2", n / 2).attr("stroke", "black").attr("stroke-width", c), x.selectAll("#lower-whisker-edge").data([null]).join("line").attr("id", "lower-whisker-edge").attr("x1", v(y)).attr("y1", n / 2 - u / 4).attr("x2", v(y)).attr("y2", n / 2 + u / 4).attr("stroke", "black").attr("stroke-width", c), x.selectAll("#upper-whisker").data([null]).join("line").attr("id", "upper-whisker").attr("x1", v(C)).attr("y1", n / 2).attr("x2", v(b)).attr("y2", n / 2).attr("stroke", "black").attr("stroke-width", c), x.selectAll("#upper-whisker-edge").data([null]).join("line").attr("id", "upper-whisker-edge").attr("x1", v(b)).attr("y1", n / 2 - u / 4).attr("x2", v(b)).attr("y2", n / 2 + u / 4).attr("stroke", "black").attr("stroke-width", c), S || (x.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${n - e.bottom})`).call(On(v)), l && x.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", n - e.bottom / 3).text(l).style("font-size", _ * (3 / 4))), a !== void 0 && x.selectAll("#vLine").data([null]).join("line").attr("id", "vLine").attr("x1", v(a)).attr("y1", n / 2 - u / 2).attr("x2", v(a)).attr("y2", n / 2 + u / 2).attr("stroke", "red").attr("stroke-width", 1.5), s && x.selectAll(".title").data([null]).join("text").attr("class", "title").text(s).attr("text-anchor", "middle").attr("x", t / 2).attr("y", e.top / 2);
  };
  return p.width = function(g) {
    return arguments.length ? (t = +g, p) : t;
  }, p.height = function(g) {
    return arguments.length ? (n = +g, p) : n;
  }, p.margin = function(g) {
    return arguments.length ? (e = g, p) : e;
  }, p.data = function(g) {
    return arguments.length ? (r = g, p) : r;
  }, p.xMin = function(g) {
    return arguments.length ? (i = +g, p) : i;
  }, p.xMax = function(g) {
    return arguments.length ? (o = +g, p) : o;
  }, p.vLine = function(g) {
    return arguments.length ? (a = +g, p) : a;
  }, p.xLabel = function(g) {
    return arguments.length ? (l = g, p) : l;
  }, p.title = function(g) {
    return arguments.length ? (s = g, p) : s;
  }, p.boxWidth = function(g) {
    return arguments.length ? (u = +g, p) : u;
  }, p.color = function(g) {
    return arguments.length ? (f = g, p) : f;
  }, p.strokeWidth = function(g) {
    return arguments.length ? (c = +g, p) : c;
  }, p.opacity = function(g) {
    return arguments.length ? (h = +g, p) : h;
  }, p.radius = function(g) {
    return arguments.length ? (d = +g, p) : d;
  }, p.fontSize = function(g) {
    return arguments.length ? (_ = +g, p) : _;
  }, p.hoverOffsetX = function(g) {
    return arguments.length ? (w = +g, p) : w;
  }, p.hoverOffsetY = function(g) {
    return arguments.length ? (k = +g, p) : k;
  }, p.removeAxis = function(g) {
    return arguments.length ? (S = g, p) : S;
  }, p;
}
function Ya() {
  let t, n, e, r, i, o, a, l, s, u, f = "red", c = 40, h, d = "rgb(122, 255, 248, 0.7)", _ = 1, w, k, S = 15;
  const p = (m) => (v) => Math.abs(v /= m) <= 1 ? 0.75 * (1 - v * v) / m : 0, g = (m, v, A) => v.map((M) => [M, Re(A, (C) => m(M - C))]), x = (m) => {
    const v = m.selectAll("svg.density-plot").data([null]).join("svg").attr("class", "density-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", S);
    let A = tn(r);
    A[0] = i ?? A[0], A[1] = o ?? A[1];
    const M = dt().domain(A).range([e.left, t - e.right]), C = M.ticks(c), N = g(p(h), C, r), y = s ?? Math.max(...N.map((E) => E[1])), $ = dt().domain([0, y]).range([n - e.bottom, e.top]);
    N[0][1] !== 0 && N.unshift([N[0][0], 0]), N[N.length - 1][1] !== 0 && N.push([N[N.length - 1][0], 0]);
    const b = Oa().curve(Va).x((E) => M(E[0])).y((E) => $(E[1])), z = he().duration(1e3);
    let R = v.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id", "color-gradient");
    if (w && k && k.length === w.length + 1) {
      R.append("stop").attr("offset", "0%").attr("stop-color", k[0]);
      for (let E = 0; E < w.length; E++) {
        let P = ((w[E] - A[0]) / (A[1] - A[0]) * 100).toFixed(1);
        P < 0 && (P = 0), P > 100 && (P = 100), R.append("stop").attr("offset", `${P}%`).attr("stop-color", k[E]), R.append("stop").attr("offset", `${P}%`).attr("stop-color", k[E + 1]);
      }
      R.append("stop").attr("offset", "100%").attr("stop-color", k[k.length - 1]);
    } else
      R.append("stop").attr("offset", "100%").attr("stop-color", d);
    v.selectAll("path").data([null]).join(
      (E) => E.append("path").attr("stroke", "black").attr("stroke-width", 1.5).attr("stroke-linejoin", "round").attr("opacity", _).attr("d", b(N)).style("fill", "url(#color-gradient)"),
      (E) => E.call(
        (P) => P.transition(z).attr("d", b(N))
      ),
      (E) => E.remove()
    ), v.selectAll(".y-axis").data([null]).join("g").attr("class", "y-axis").attr("transform", `translate(${e.left},0)`).call(Ve($)), v.selectAll(".y-axis-label").data([null]).join("text").attr("class", "y-axis-label").text("Density →").attr("text-anchor", "end").attr("transform", "rotate(-90)").attr("x", -e.top).attr("y", e.left / 3).style("font-size", S * (3 / 4)), v.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${n - e.bottom})`).call(On(M)), v.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", n - e.bottom / 3).text(a).style("font-size", S * (3 / 4)), u !== void 0 && v.selectAll(".vLines").data(u).join("line").attr("class", "vLines").attr("x1", (E) => M(E)).attr("y1", $(0)).attr("x2", (E) => M(E)).attr("y2", $(y)).attr("stroke", f).attr("stroke-width", 1.5).attr("stroke-linejoin", "round").attr("opacity", _), v.selectAll(".title").data([null]).join("text").attr("class", "title").text(l).attr("text-anchor", "middle").attr("x", t / 2).attr("y", e.top / 2);
  };
  return x.width = function(m) {
    return arguments.length ? (t = +m, x) : t;
  }, x.height = function(m) {
    return arguments.length ? (n = +m, x) : n;
  }, x.margin = function(m) {
    return arguments.length ? (e = m, x) : e;
  }, x.data = function(m) {
    return arguments.length ? (r = m, x) : r;
  }, x.xMin = function(m) {
    return arguments.length ? (i = +m, x) : i;
  }, x.xMax = function(m) {
    return arguments.length ? (o = +m, x) : o;
  }, x.xLabel = function(m) {
    return arguments.length ? (a = m, x) : a;
  }, x.title = function(m) {
    return arguments.length ? (l = m, x) : l;
  }, x.yMax = function(m) {
    return arguments.length ? (s = +m, x) : s;
  }, x.vLines = function(m) {
    return arguments.length ? (u = m, x) : u;
  }, x.vLineColor = function(m) {
    return arguments.length ? (f = m, x) : f;
  }, x.numBins = function(m) {
    return arguments.length ? (c = +m, x) : c;
  }, x.bandwidth = function(m) {
    return arguments.length ? (h = +m, x) : h;
  }, x.color = function(m) {
    return arguments.length ? (d = m, x) : d;
  }, x.opacity = function(m) {
    return arguments.length ? (_ = +m, x) : _;
  }, x.cutoffs = function(m) {
    return arguments.length ? (w = m, x) : w;
  }, x.cutoffColors = function(m) {
    return arguments.length ? (k = m, x) : k;
  }, x.fontSize = function(m) {
    return arguments.length ? (S = +m, x) : S;
  }, x;
}
function Wa(t, n) {
  const e = [], r = 1e-3 * (Math.max(...n) - Math.min(...n)), i = Math.max(...n) - Math.min(...n);
  for (let o = 0; o < t; o++) {
    const a = Math.log10(r) + (Math.log10(i) - Math.log10(r)) * o / (t - 1);
    e.push(Math.pow(10, a));
  }
  return e;
}
function Ua() {
  let t, n, e, r, i, o, a, l, s = "rgb(122, 255, 248, 0.7)", u = 1.5, f = 1, c = 3, h = 1.5, d = 15, _ = 15, w = !1, k = "Value";
  const S = (g, x) => {
    const m = new Float64Array(g.length), v = x ** 2, A = 1e-3;
    let M = null, C = null;
    const N = (y, $) => {
      let b = M;
      for (; b; ) {
        const z = b.index;
        if (v - A > (g[z] - y) ** 2 + (m[z] - $) ** 2)
          return !0;
        b = b.next;
      }
      return !1;
    };
    for (const y of gn(g.length).sort(($, b) => g[$] - g[b])) {
      for (; M && g[M.index] < g[y] - v; )
        M = M.next;
      if (N(g[y], m[y] = 0)) {
        let b = M;
        m[y] = 1 / 0;
        do {
          const z = b.index;
          let R = m[z] + Math.sqrt(v - (g[z] - g[y]) ** 2);
          R < m[y] && !N(g[y], R) && (m[y] = R), b = b.next;
        } while (b);
      }
      const $ = { index: y, next: null };
      M === null ? M = C = $ : C = C.next = $;
    }
    return m;
  }, p = (g) => {
    const x = g.selectAll("svg.beeswarm-plot").data([null]).join("svg").attr("class", "beeswarm-plot").attr("width", t).attr("height", n).attr("font-family", "sans-serif").attr("font-size", _);
    let m = tn(r);
    m[0] = i ?? m[0], m[1] = o ?? m[1];
    const v = dt().domain(m).range([e.left, t - e.right]), A = S(r.map((M) => v(M)), c * 2 + h).map((M) => M + e.top + d);
    x.selectAll("g.marker").data(gn(r.length)).join("g").attr("class", "marker").attr("transform", (M) => `translate(${v(r[M])}, ${A[M]})`).each(function(M) {
      const C = Mi(this);
      C.append("circle").attr("r", c).attr("fill", s).attr("opacity", f).attr("stroke", "black").attr("stroke-width", u);
      const N = 7 * k.length;
      C.append("rect").attr("x", c - N / 2).attr("y", c + 5).attr("width", N).attr("height", 20).attr("fill", "white").attr("stroke", "black").attr("stroke-width", u), C.append("text").attr("x", c - N / 2 + 5).attr("y", c + 20).attr("font-size", "12px").text(`${k}: ${r[M].toFixed(1)} %`);
    }), w || (x.selectAll(".x-axis").data([null]).join("g").attr("class", "x-axis").attr("transform", `translate(0,${e.top})`).call(Oe(v)), a && x.selectAll(".x-axis-label").data([null]).join("text").attr("class", "x-axis-label").attr("text-anchor", "end").attr("x", t).attr("y", e.top * (2 / 3)).text(a).style("font-size", _ * (3 / 4)));
  };
  return p.width = function(g) {
    return arguments.length ? (t = +g, p) : t;
  }, p.height = function(g) {
    return arguments.length ? (n = +g, p) : n;
  }, p.margin = function(g) {
    return arguments.length ? (e = g, p) : e;
  }, p.data = function(g) {
    return arguments.length ? (r = g, p) : r;
  }, p.xMin = function(g) {
    return arguments.length ? (i = +g, p) : i;
  }, p.xMax = function(g) {
    return arguments.length ? (o = +g, p) : o;
  }, p.xLabel = function(g) {
    return arguments.length ? (a = g, p) : a;
  }, p.title = function(g) {
    return arguments.length ? (l = g, p) : l;
  }, p.color = function(g) {
    return arguments.length ? (s = g, p) : s;
  }, p.strokeWidth = function(g) {
    return arguments.length ? (u = +g, p) : u;
  }, p.opacity = function(g) {
    return arguments.length ? (f = +g, p) : f;
  }, p.radius = function(g) {
    return arguments.length ? (c = +g, p) : c;
  }, p.markerPadding = function(g) {
    return arguments.length ? (h = +g, p) : h;
  }, p.plotPadding = function(g) {
    return arguments.length ? (d = +g, p) : d;
  }, p.fontSize = function(g) {
    return arguments.length ? (_ = +g, p) : _;
  }, p.removeAxis = function(g) {
    return arguments.length ? (w = g, p) : w;
  }, p.markerText = function(g) {
    return arguments.length ? (k = g, p) : k;
  }, p;
}
function ja() {
  let t, n, e, r, i, o, a, l, s;
  const u = (f) => {
    const h = t / 3.1, d = t - h, _ = (d - s.left - s.right) / 10, w = _ / 2, k = 2, S = 15, p = Math.floor(10 * 10 * (e / 100)), g = 10 * 10 * (e / 100) - p, x = Array.from({ length: 10 * 10 }, ($, b) => ({ index: b, color: b < p ? r : i })), m = "m62.096 8.5859c-5.208 0-9.424 4.2191-9.424 9.4261 0.001 5.203 4.217 9.424 9.424 9.424 5.202 0 9.422-4.221 9.422-9.424 0-5.208-4.22-9.4261-9.422-9.4261zm-10.41 21.268c-6.672 0-12.131 5.407-12.131 12.07v29.23c0 2.275 1.791 4.123 4.07 4.123 2.28 0 4.127-1.846 4.127-4.123v-26.355h2.102s0.048 68.811 0.048 73.331c0 3.05 2.478 5.53 5.532 5.53 3.052 0 5.525-2.48 5.525-5.53v-42.581h2.27v42.581c0 3.05 2.473 5.53 5.531 5.53 3.054 0 5.549-2.48 5.549-5.53v-73.331h2.127v26.355c0 2.275 1.85 4.123 4.126 4.123 2.28 0 4.073-1.846 4.073-4.123v-29.23c0-6.663-5.463-12.07-12.129-12.07h-20.82z", v = f.selectAll("svg#population-prevalence-plot").data([null]).join("svg").attr("id", "population-prevalence-plot").attr("width", t).attr("height", n).attr("viewBox", `0 0 ${t} ${d}`).attr("font-family", "sans-serif");
    v.selectAll(".population-border").data([null]).join("rect").attr("class", "population-border").attr("width", d).attr("height", d).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 3).attr("transform", `translate(${k}, ${k})`);
    let A = v.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id", "color-gradient-fraction").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
    A.append("stop").attr("offset", "0%").attr("stop-color", r), A.append("stop").attr("offset", `${g * 100}%`).attr("stop-color", r), A.append("stop").attr("offset", `${g * 100}%`).attr("stop-color", i), A.append("stop").attr("offset", "100%").attr("stop-color", i);
    const M = v.selectAll("g.person").data(x);
    M.enter().append("g").attr("class", "person").merge(M).attr("transform", ($, b) => `translate(${s.left + b % 10 * _ + k}, ${s.top + Math.floor(b / 10) * _ + k}) scale(${_ / 124.19})`).selectAll("path").data(($) => [$]).join("path").attr("d", m).attr("fill", ($) => $.index === p && g > 0 ? "url(#color-gradient-fraction)" : $.color), M.exit().remove();
    const y = v.selectAll("g.population-legend").data([null]).join("g").attr("class", "color-legend").attr("transform", `translate(${d + S}, ${s.top + S})`);
    y.selectAll("rect.population-legend-border").data([null]).join("rect").attr("class", "population-legend-border").attr("width", h - 20).attr("height", w * 4).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 2), y.selectAll("rect.population-legend-case-color").data([null]).join("rect").attr("class", "population-legend-case-color").attr("x", w / 2).attr("y", w / 2).attr("width", w).attr("height", w).attr("fill", r).attr("stroke", "black").attr("stroke-width", 1), y.selectAll("rect.population-legend-case-labal").data([null]).join("text").attr("class", "population-legend-case-labal").attr("x", w * 2).attr("y", _ / 2).attr("dy", ".35em").text(o ?? "Case").style("font-size", `${l ?? w / 1.25}px`).style(), y.selectAll("rect.population-legend-control-color").data([null]).join("rect").attr("class", "population-legend-control-color").attr("x", w / 2).attr("y", w * 4 / 2 + w / 2).attr("width", w).attr("height", w).attr("fill", i).attr("stroke", "black").attr("stroke-width", 1), y.selectAll("rect.population-legend-control-labal").data([null]).join("text").attr("class", "population-legend-control-labal").attr("x", w * 2).attr("y", _ + _ / 2).attr("dy", ".35em").text(a ?? "Control").style("font-size", `${l ?? w / 1.25}px`);
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
  Ua as beeswarmPlot,
  Xa as boxPlot,
  Ya as densityPlot,
  Wa as getBandwidthValues,
  ja as populationPrevalencePlot,
  Ba as slider
};
//# sourceMappingURL=risk-viz.js.map
