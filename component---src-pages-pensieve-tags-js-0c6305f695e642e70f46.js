(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    '+W3S': function(e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, 'pageQuery', function() {
          return w;
        });
      var n = t('q1tI'),
        l = t.n(n),
        o = t('TJpk'),
        i = t('Wbzz'),
        r = t('N1om'),
        c = t.n(r),
        s = t('Kvkj'),
        m = t('vOnD'),
        u = t('InJ6'),
        d = u.h.colors,
        p = u.h.fontSizes,
        f = u.h.fonts,
        g = Object(m.c)(u.d).withConfig({
          displayName: 'tags__StyledTagsContainer',
          componentId: 'sc-50wa5d-0',
        })(
          [
            'max-width:1000px;h1{margin-bottom:50px;}ul{color:',
            ';li{font-size:',
            ';a{',
            ';color:',
            ';.count{color:',
            ';font-family:',
            ';font-size:',
            ';}}}}',
          ],
          d.lightSlate,
          p.xxl,
          u.g.inlineLink,
          d.lightSlate,
          d.slate,
          f.SFMono,
          p.md,
        );
      a.default = function(e) {
        var a = e.data,
          t = a.allMarkdownRemark.group,
          n = a.site.siteMetadata.title,
          r = e.location;
        return l.a.createElement(
          s.i,
          { location: r },
          l.a.createElement(o.Helmet, { title: n }),
          l.a.createElement(
            g,
            null,
            l.a.createElement(
              'span',
              { className: 'breadcrumb' },
              l.a.createElement('span', { className: 'arrow' }, '←'),
              l.a.createElement(i.Link, { to: '/pensieve' }, 'All memories'),
            ),
            l.a.createElement('h1', null, 'Tags'),
            l.a.createElement(
              'ul',
              { className: 'fancy-list' },
              t.map(function(e) {
                return l.a.createElement(
                  'li',
                  { key: e.fieldValue },
                  l.a.createElement(
                    i.Link,
                    { to: '/pensieve/tags/' + c()(e.fieldValue) + '/' },
                    e.fieldValue,
                    ' ',
                    l.a.createElement('span', { className: 'count' }, '(', e.totalCount, ')'),
                  ),
                );
              }),
            ),
          ),
        );
      };
      var w = '689409133';
    },
  },
]);
//# sourceMappingURL=component---src-pages-pensieve-tags-js-0c6305f695e642e70f46.js.map
