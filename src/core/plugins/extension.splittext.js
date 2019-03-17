export default (jQuery) => {
  /*!
  * VERSION: beta 0.3.4
  * DATE: 2015-08-15
  * UPDATES AND DOCS AT: http://greensock.com
  *
  * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
  * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
  * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
  * This work is subject to the software agreement that was issued with your membership.
  *
  * @author: Jack Doyle, jack@greensock.com
  */


  /* eslint-disable */

  var _gsScope = 'undefined' != typeof module && module.exports && 'undefined' != typeof global ? global : this || window;
  (function (t) {
    'use strict';
    var e = t.GreenSockGlobals || t,
      i = function (t) {
        var i, s = t.split('.'),
          r = e;
        for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {};
        return r;
      },
      s = i('com.greensock.utils'),
      r = function (t) {
        var e = t.nodeType,
          i = '';
        if (1 === e || 9 === e || 11 === e) {
          if ('string' == typeof t.textContent) return t.textContent;
          for (t = t.firstChild; t; t = t.nextSibling) i += r(t);
        } else if (3 === e || 4 === e) return t.nodeValue;
        return i;
      },
      n = document,
      a = n.defaultView ? n.defaultView.getComputedStyle : function () { },
      o = /([A-Z])/g,
      l = function (t, e, i, s) {
        var r;
        return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, '-$1').toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), s ? r : parseInt(r, 10) || 0;
      },
      h = function (t) {
        return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1;
      },
      _ = function (t) {
        var e, i, s, r = [],
          n = t.length;
        for (e = 0; n > e; e++)
          if (i = t[e], h(i))
            for (s = i.length, s = 0; i.length > s; s++) r.push(i[s]);
          else r.push(i);
        return r;
      },
      u = ')eefec303079ad17405c',
      c = /(?:<br>|<br\/>|<br \/>)/gi,
      f = n.all && !n.addEventListener,
      p = '<div style=\'position:relative;display:inline-block;' + (f ? '*display:inline;*zoom:1;\'' : '\''),
      m = function (t) {
        t = t || '';
        var e = -1 !== t.indexOf('++'),
          i = 1;
        return e && (t = t.split('++').join('')),
          function () {
            return p + (t ? ' class=\'' + t + (e ? i++ : '') + '\'>' : '>');
          };
      },
      d = s.SplitText = e.SplitText = function (t, e) {
        if ('string' == typeof t && (t = d.selector(t)), !t) throw 'cannot split a null element.';
        this.elements = h(t) ? _(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e);
      },
      g = function (t, e, i) {
        var s = t.nodeType;
        if (1 === s || 9 === s || 11 === s)
          for (t = t.firstChild; t; t = t.nextSibling) g(t, e, i);
        else (3 === s || 4 === s) && (t.nodeValue = t.nodeValue.split(e).join(i));
      },
      v = function (t, e) {
        for (var i = e.length; --i > -1;) t.push(e[i]);
      },
      y = function (t, e, i, s, o) {
        c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));
        var h, _, f, p, d, y, T, w, b, x, P, S, k, C, R = r(t),
          O = e.type || e.split || 'chars,words,lines',
          A = -1 !== O.indexOf('lines') ? [] : null,
          D = -1 !== O.indexOf('words'),
          M = -1 !== O.indexOf('chars'),
          L = 'absolute' === e.position || e.absolute === !0,
          F = L ? '&#173; ' : ' ',
          z = -999,
          I = a(t),
          E = l(t, 'paddingLeft', I),
          N = l(t, 'borderBottomWidth', I) + l(t, 'borderTopWidth', I),
          X = l(t, 'borderLeftWidth', I) + l(t, 'borderRightWidth', I),
          B = l(t, 'paddingTop', I) + l(t, 'paddingBottom', I),
          j = l(t, 'paddingLeft', I) + l(t, 'paddingRight', I),
          U = l(t, 'textAlign', I, !0),
          Y = t.clientHeight,
          q = t.clientWidth,
          V = '</div>',
          G = m(e.wordsClass),
          Q = m(e.charsClass),
          W = -1 !== (e.linesClass || '').indexOf('++'),
          Z = e.linesClass,
          H = -1 !== R.indexOf('<'),
          $ = !0,
          K = [],
          J = [],
          te = [];
        for (W && (Z = Z.split('++').join('')), H && (R = R.split('<').join('{{LT}}')), h = R.length, p = G(), d = 0; h > d; d++)
          if (T = R.charAt(d), ')' === T && R.substr(d, 20) === u) p += ($ ? V : '') + '<BR/>', $ = !1, d !== h - 20 && R.substr(d + 20, 20) !== u && (p += ' ' + G(), $ = !0), d += 19;
          else if (' ' === T && ' ' !== R.charAt(d - 1) && d !== h - 1 && R.substr(d - 20, 20) !== u) {
            for (p += $ ? V : '', $ = !1;
              ' ' === R.charAt(d + 1);) p += F, d++;
            (')' !== R.charAt(d + 1) || R.substr(d + 1, 20) !== u) && (p += F + G(), $ = !0);
          } else '{' === T && '{{LT}}' === R.substr(d, 6) ? (p += M ? Q() + '{{LT}}' + '</div>' : '{{LT}}', d += 5) : p += M && ' ' !== T ? Q() + T + '</div>' : T;
        for (t.innerHTML = p + ($ ? V : ''), H && g(t, '{{LT}}', '<'), y = t.getElementsByTagName('*'), h = y.length, w = [], d = 0; h > d; d++) w[d] = y[d];
        if (A || L)
          for (d = 0; h > d; d++) b = w[d], f = b.parentNode === t, (f || L || M && !D) && (x = b.offsetTop, A && f && x !== z && 'BR' !== b.nodeName && (_ = [], A.push(_), z = x), L && (b._x = b.offsetLeft, b._y = x, b._w = b.offsetWidth, b._h = b.offsetHeight), A && (D !== f && M || (_.push(b), b._x -= E), f && d && (w[d - 1]._wordEnd = !0), 'BR' === b.nodeName && b.nextSibling && 'BR' === b.nextSibling.nodeName && A.push([])));
        for (d = 0; h > d; d++) b = w[d], f = b.parentNode === t, 'BR' !== b.nodeName ? (L && (S = b.style, D || f || (b._x += b.parentNode._x, b._y += b.parentNode._y), S.left = b._x + 'px', S.top = b._y + 'px', S.position = 'absolute', S.display = 'block', S.width = b._w + 1 + 'px', S.height = b._h + 'px'), D ? f && '' !== b.innerHTML ? J.push(b) : M && K.push(b) : f ? (t.removeChild(b), w.splice(d--, 1), h--) : !f && M && (x = !A && !L && b.nextSibling, t.appendChild(b), x || t.appendChild(n.createTextNode(' ')), K.push(b))) : A || L ? (t.removeChild(b), w.splice(d--, 1), h--) : D || t.appendChild(b);
        if (A) {
          for (L && (P = n.createElement('div'), t.appendChild(P), k = P.offsetWidth + 'px', x = P.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(P)), S = t.style.cssText, t.style.cssText = 'display:none;'; t.firstChild;) t.removeChild(t.firstChild);
          for (C = !L || !D && !M, d = 0; A.length > d; d++) {
            for (_ = A[d], P = n.createElement('div'), P.style.cssText = 'display:block;text-align:' + U + ';position:' + (L ? 'absolute;' : 'relative;'), Z && (P.className = Z + (W ? d + 1 : '')), te.push(P), h = _.length, y = 0; h > y; y++) 'BR' !== _[y].nodeName && (b = _[y], P.appendChild(b), C && (b._wordEnd || D) && P.appendChild(n.createTextNode(' ')), L && (0 === y && (P.style.top = b._y + 'px', P.style.left = E + x + 'px'), b.style.top = '0px', x && (b.style.left = b._x - x + 'px')));
            0 === h && (P.innerHTML = '&nbsp;'), D || M || (P.innerHTML = r(P).split(String.fromCharCode(160)).join(' ')), L && (P.style.width = k, P.style.height = b._h + 'px'), t.appendChild(P);
          }
          t.style.cssText = S;
        }
        L && (Y > t.clientHeight && (t.style.height = Y - B + 'px', Y > t.clientHeight && (t.style.height = Y + N + 'px')), q > t.clientWidth && (t.style.width = q - j + 'px', q > t.clientWidth && (t.style.width = q + X + 'px'))), v(i, K), v(s, J), v(o, te);
      },
      T = d.prototype;
    T.split = function (t) {
      this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
      for (var e = this.elements.length; --e > -1;) this._originals[e] = this.elements[e].innerHTML, y(this.elements[e], this.vars, this.chars, this.words, this.lines);
      return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this;
    }, T.revert = function () {
      if (!this._originals) throw 'revert() call wasn\'t scoped properly.';
      for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
      return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this;
    }, d.selector = t.$ || t.jQuery || function (e) {
      var i = t.$ || t.jQuery;
      return i ? (d.selector = i, i(e)) : 'undefined' == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById('#' === e.charAt(0) ? e.substr(1) : e);
    }, d.version = '0.3.4';
  })(_gsScope),
    //export to CommonJS/Node
    module.exports = (_gsScope.GreenSockGlobals || _gsScope)["SplitText"];


  // try {
  //     window.GreenSockGlobals = null;
  //     window._gsQueue = null;
  //     window._gsDefine = null;

  //     delete(window.GreenSockGlobals);
  //     delete(window._gsQueue);
  //     delete(window._gsDefine);
  // } catch (e) {}

  // try {
  //     window.GreenSockGlobals = oldgs;
  //     window._gsQueue = oldgs_queue;
  // } catch (e) {}

  if (window.tplogs == true)
    try {
      console.groupEnd();
    } catch (e) { }

  (function (e, t) {
    e.waitForImages = {
      hasImageProperties: ['backgroundImage', 'listStyleImage', 'borderImage', 'borderCornerImage']
    };
    e.expr[':'].uncached = function (t) {
      var n = document.createElement('img');
      n.src = t.src;
      return e(t).is('img[src!=""]') && !n.complete;
    };
    e.fn.waitForImages = function (t, n, r) {
      if (e.isPlainObject(arguments[0])) {
        n = t.each;
        r = t.waitForAll;
        t = t.finished;
      }
      t = t || e.noop;
      n = n || e.noop;
      r = !!r;
      if (!e.isFunction(t) || !e.isFunction(n)) {
        throw new TypeError('An invalid callback was supplied.');
      }
      return this.each(function () {
        var i = e(this),
          s = [];
        if (r) {
          var o = e.waitForImages.hasImageProperties || [],
            u = /url\((['"]?)(.*?)\1\)/g;
          i.find('*').each(function () {
            var t = e(this);
            if (t.is('img:uncached')) {
              s.push({
                src: t.attr('src'),
                element: t[0]
              });
            }
            e.each(o, function (e, n) {
              var r = t.css(n);
              if (!r) {
                return true;
              }
              var i;
              while (i = u.exec(r)) {
                s.push({
                  src: i[2],
                  element: t[0]
                });
              }
            });
          });
        } else {
          i.find('img:uncached').each(function () {
            s.push({
              src: this.src,
              element: this
            });
          });
        }
        var f = s.length,
          l = 0;
        if (f == 0) {
          t.call(i[0]);
        }
        e.each(s, function (r, s) {
          var o = new Image;
          e(o).bind('load error', function (e) {
            l++;
            n.call(s.element, l, f, e.type == 'load');
            if (l == f) {
              t.call(i[0]);
              return false;
            }
          });
          o.src = s.src;
        });
      });
    };
  })(jQuery);
};
