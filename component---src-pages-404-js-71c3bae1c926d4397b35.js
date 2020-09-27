(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    w2l6: function(e, t, n) {
      'use strict';
      n.r(t);
      var o = n('q1tI'),
        i = n.n(o),
        c = n('Wbzz'),
        a = n('VeD8'),
        r = n('pQ8y'),
        f = n('Kvkj'),
        u = n('vOnD'),
        l = n('InJ6');
      function s() {
        var e = v(['font-size: 30px;']);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = v(['font-size: 50px;']);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = v(['font-size: 120px;']);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = v(['font-size: 200px;']);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function v(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      var g = l.h.colors,
        h = l.h.fonts,
        w = Object(u.c)(l.d).withConfig({
          displayName: 'sc-404__StyledMainContainer',
          componentId: 'sc-15v8fvd-0',
        })(['', ';flex-direction:column;'], l.g.flexCenter),
        b = u.c.h1.withConfig({ displayName: 'sc-404__StyledTitle', componentId: 'sc-15v8fvd-1' })(
          ['color:', ';font-family:', ';font-size:12vw;line-height:1;', ' ', ';'],
          g.green,
          h.SFMono,
          l.f.bigDesktop(d()),
          l.f.phablet(p()),
        ),
        y = u.c.h2.withConfig({
          displayName: 'sc-404__StyledSubtitle',
          componentId: 'sc-15v8fvd-2',
        })(['font-size:3vw;font-weight:400;', ';', ';'], l.f.bigDesktop(m()), l.f.phablet(s())),
        z = Object(u.c)(c.Link).withConfig({
          displayName: 'sc-404__StyledHomeButton',
          componentId: 'sc-15v8fvd-3',
        })(['', ';margin-top:40px;'], l.g.bigButton);
      t.default = function(e) {
        var t = e.location,
          n = Object(o.useState)(!1),
          c = n[0],
          u = n[1];
        return (
          Object(o.useEffect)(function() {
            var e = setTimeout(function() {
              return u(!0);
            }, 1e3);
            return function() {
              return clearTimeout(e);
            };
          }, []),
          i.a.createElement(
            f.i,
            { location: t },
            i.a.createElement(
              a.a,
              { component: null },
              c &&
                i.a.createElement(
                  r.a,
                  { timeout: 500, classNames: 'fade' },
                  i.a.createElement(
                    w,
                    { className: 'fillHeight' },
                    i.a.createElement(b, null, '404'),
                    i.a.createElement(y, null, 'Page Not Found'),
                    i.a.createElement(z, { to: '/' }, 'Go Home'),
                  ),
                ),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-71c3bae1c926d4397b35.js.map
