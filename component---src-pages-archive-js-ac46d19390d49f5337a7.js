(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    nRki: function(e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'pageQuery', function() {
          return y;
        });
      var n = a('q1tI'),
        r = a.n(n),
        l = a('TJpk'),
        i = a('nLfd'),
        o = a('8SHQ'),
        c = a('Kvkj'),
        m = a('g67X'),
        s = a('vOnD'),
        f = a('InJ6');
      function u() {
        var e = b(['\n        font-size: ', ';\n      ']);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = b(['\n      padding: 10px;\n    ']);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = b(['\n      display: none;\n    ']);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = b(['\n    margin: 100px -10px;\n  ']);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function b(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      var g = f.h.colors,
        E = f.h.fonts,
        v = f.h.fontSizes,
        w = Object(s.c)(f.d).withConfig({
          displayName: 'archive__StyledMainContainer',
          componentId: 'x0r5cw-0',
        })(['']),
        k = s.c.div.withConfig({
          displayName: 'archive__StyledTableContainer',
          componentId: 'x0r5cw-1',
        })(['margin:100px -20px;', ';'], f.f.tablet(h())),
        x = s.c.table.withConfig({ displayName: 'archive__StyledTable', componentId: 'x0r5cw-2' })(
          [
            'width:100%;border-collapse:collapse;.hide-on-mobile{',
            ';}tbody tr{transition:',
            ';&:hover,&:focus{background-color:',
            ';}}th,td{cursor:default;line-height:1.5;padding:10px 20px;',
            ';}th{text-align:left;}td{&.year{width:10%;',
            ';}&.title{padding-top:15px;color:',
            ';font-size:',
            ';font-weight:700;}&.company{width:15%;padding-top:15px;font-size:',
            ';}&.tech{font-size:',
            ';font-family:',
            ';.separator{margin:0 5px;}span{display:inline-block;}}&.links{span{display:flex;align-items:center;a{',
            ';}a + a{margin-left:10px;}svg{width:20px;height:20px;}}}}',
          ],
          f.f.tablet(d()),
          f.h.transition,
          g.lightNavy,
          f.f.tablet(p()),
          f.f.tablet(u(), v.sm),
          g.lightestSlate,
          v.xl,
          v.lg,
          v.xs,
          E.SFMono,
          f.g.flexCenter,
        );
      t.default = function(e) {
        var t = e.location,
          a = e.data.allMarkdownRemark.edges,
          s = Object(n.useRef)(null),
          f = Object(n.useRef)(null),
          u = Object(n.useRef)([]);
        return (
          Object(n.useEffect)(function() {
            i.a.reveal(s.current, Object(o.srConfig)()),
              i.a.reveal(f.current, Object(o.srConfig)()),
              u.current.forEach(function(e, t) {
                return i.a.reveal(e, Object(o.srConfig)(10 * t));
              });
          }, []),
          r.a.createElement(
            c.i,
            { location: t },
            r.a.createElement(
              l.Helmet,
              null,
              r.a.createElement('title', null, 'Archive | David Sullivan'),
              r.a.createElement('link', { rel: 'canonical', href: 'https://dsully.dev/archive' }),
            ),
            r.a.createElement(
              w,
              null,
              r.a.createElement(
                'header',
                { ref: s },
                r.a.createElement('h1', { className: 'big-title' }, 'Archive'),
                r.a.createElement(
                  'p',
                  { className: 'subtitle' },
                  'A big list of things I’ve worked on',
                ),
              ),
              r.a.createElement(
                k,
                { ref: f },
                r.a.createElement(
                  x,
                  null,
                  r.a.createElement(
                    'thead',
                    null,
                    r.a.createElement(
                      'tr',
                      null,
                      r.a.createElement('th', null, 'Year'),
                      r.a.createElement('th', null, 'Title'),
                      r.a.createElement('th', { className: 'hide-on-mobile' }, 'Made at'),
                      r.a.createElement('th', { className: 'hide-on-mobile' }, 'Built with'),
                      r.a.createElement('th', null, 'Link'),
                    ),
                  ),
                  r.a.createElement(
                    'tbody',
                    null,
                    a.length > 0 &&
                      a.map(function(e, t) {
                        var a = e.node.frontmatter,
                          n = a.date,
                          l = a.github,
                          i = a.gitlab,
                          o = a.external,
                          c = a.ios,
                          s = a.android,
                          f = a.title,
                          p = a.tech,
                          d = a.company;
                        return r.a.createElement(
                          'tr',
                          {
                            key: t,
                            ref: function(e) {
                              return (u.current[t] = e);
                            },
                          },
                          r.a.createElement(
                            'td',
                            { className: 'overline year' },
                            '' + new Date(n).getFullYear(),
                          ),
                          r.a.createElement('td', { className: 'title' }, f),
                          r.a.createElement(
                            'td',
                            { className: 'company hide-on-mobile' },
                            d
                              ? r.a.createElement('span', null, d)
                              : r.a.createElement('span', null, '—'),
                          ),
                          r.a.createElement(
                            'td',
                            { className: 'tech hide-on-mobile' },
                            p.length > 0 &&
                              p.map(function(e, t) {
                                return r.a.createElement(
                                  'span',
                                  { key: t },
                                  e,
                                  '',
                                  t !== p.length - 1 &&
                                    r.a.createElement('span', { className: 'separator' }, '·'),
                                );
                              }),
                          ),
                          r.a.createElement(
                            'td',
                            { className: 'links' },
                            r.a.createElement(
                              'span',
                              null,
                              o &&
                                r.a.createElement(
                                  'a',
                                  {
                                    href: o,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'External Link',
                                  },
                                  r.a.createElement(m.a, { name: 'External' }),
                                ),
                              l &&
                                r.a.createElement(
                                  'a',
                                  {
                                    href: l,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'GitHub Link',
                                  },
                                  r.a.createElement(m.a, { name: 'GitHub' }),
                                ),
                              i &&
                                r.a.createElement(
                                  'a',
                                  {
                                    href: i,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'GitLab Link',
                                  },
                                  r.a.createElement(m.a, { name: 'GitLab' }),
                                ),
                              c &&
                                r.a.createElement(
                                  'a',
                                  {
                                    href: c,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'Apple App Store Link',
                                  },
                                  r.a.createElement(m.a, { name: 'AppStore' }),
                                ),
                              s &&
                                r.a.createElement(
                                  'a',
                                  {
                                    href: s,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'Google Play Store Link',
                                  },
                                  r.a.createElement(m.a, { name: 'PlayStore' }),
                                ),
                            ),
                          ),
                        );
                      }),
                  ),
                ),
              ),
            ),
          )
        );
      };
      var y = '568168402';
    },
  },
]);
//# sourceMappingURL=component---src-pages-archive-js-ac46d19390d49f5337a7.js.map