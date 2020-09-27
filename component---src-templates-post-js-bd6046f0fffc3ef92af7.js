(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    '6qSS': function(e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'pageQuery', function() {
          return g;
        });
      var n = a('q1tI'),
        l = a.n(n),
        r = a('Wbzz'),
        m = a('N1om'),
        o = a.n(m),
        i = a('Kvkj'),
        c = a('vOnD'),
        s = a('InJ6'),
        p = s.h.colors,
        d = Object(c.c)(s.d).withConfig({
          displayName: 'post__StyledPostContainer',
          componentId: 'sc-4l7ru9-0',
        })(['max-width:1000px;']),
        u = c.c.header.withConfig({
          displayName: 'post__StyledPostHeader',
          componentId: 'sc-4l7ru9-1',
        })(['margin-bottom:50px;.tag{margin-right:10px;}']),
        h = c.c.div.withConfig({
          displayName: 'post__StyledPostContent',
          componentId: 'sc-4l7ru9-2',
        })(
          [
            'margin-bottom:100px;h1,h2,h3,h4,h5,h6{margin:2em 0 1em;}p{margin:1em 0;line-height:1.5;color:',
            ';}',
          ],
          p.lightSlate,
        );
      t.default = function(e) {
        var t = e.data,
          a = e.location,
          n = t.markdownRemark,
          m = n.frontmatter,
          c = n.html,
          s = m.title,
          p = m.date,
          g = m.tags;
        return l.a.createElement(
          i.i,
          { location: a },
          l.a.createElement(
            d,
            null,
            l.a.createElement(
              'span',
              { className: 'breadcrumb' },
              l.a.createElement('span', { className: 'arrow' }, '←'),
              l.a.createElement(r.Link, { to: '/pensieve' }, 'All memories'),
            ),
            l.a.createElement(
              u,
              null,
              l.a.createElement('h1', { className: 'medium-title' }, s),
              l.a.createElement(
                'p',
                { className: 'subtitle' },
                l.a.createElement(
                  'time',
                  null,
                  new Date(p).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }),
                ),
                l.a.createElement('span', null, ' — '),
                g &&
                  g.length > 0 &&
                  g.map(function(e, t) {
                    return l.a.createElement(
                      r.Link,
                      { key: t, to: '/pensieve/tags/' + o()(e) + '/', className: 'tag' },
                      '#',
                      e,
                    );
                  }),
              ),
            ),
            l.a.createElement(h, { dangerouslySetInnerHTML: { __html: c } }),
          ),
        );
      };
      var g = '2562189066';
    },
  },
]);
//# sourceMappingURL=component---src-templates-post-js-bd6046f0fffc3ef92af7.js.map
