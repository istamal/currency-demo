(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{148:function(e,a,t){e.exports=t(273)},153:function(e,a,t){},155:function(e,a,t){},273:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),c=t.n(o),l=(t(153),t(88)),u=t.n(l),i=t(118),s=t(90),m=t(119),d=(t(155),t(275)),f=t(278),h=t(67),v=t(276),g=t(277),p=t(120),w=t.n(p),y=(t(156),t(122)),E=t(121),x=t.n(E),b="https://www.cbr-xml-daily.ru/daily_utf8.xml";function k(){var e=Object(m.a)(["\n  color: #fff;\n  "]);return k=function(){return e},e}var j=y.a.h1(k()),I=d.a.Header,O=d.a.Content;var B=function(){var e=r.a.useState({name:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435...",value:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435..."}),a=Object(s.a)(e,2),t=a[0],n=a[1],o=r.a.useState(b),c=Object(s.a)(o,2),l=c[0],m=c[1],p=function(){var e=Object(i.a)(u.a.mark((function e(){var a,t,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(l);case 2:"string"===typeof(a=e.sent).data?(t=(new w.a).parseFromString(a.data),r=t.children.find((function(e){return"R01239"===e.attributes.ID})),console.log("fetching xml"),n({name:r.children[3].value,value:r.children[4].value})):(o=a.data.Valute.EUR,console.log("fetching json"),n({name:o.Name,value:o.Value}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=[{key:"1",name:t.name,course:t.value}];return r.a.useEffect((function(){p();var e=setInterval((function(){return p()}),1e4);return function(){clearInterval(e)}}),[l]),r.a.createElement(d.a,null,r.a.createElement(I,{thema:"dark",className:"header"},r.a.createElement(j,null,"Online Currency")),r.a.createElement(d.a,{style:{height:"100vh",padding:"0 24px 24px"}},r.a.createElement(O,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280}},r.a.createElement(f.a,{title:"Euro course"},r.a.createElement(h.a.Group,{value:l,onChange:function(e){m(e.target.value),console.log(l)}},r.a.createElement(h.a.Button,{value:b},"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a 1"),r.a.createElement(h.a.Button,{value:"https://www.cbr-xml-daily.ru/daily_json.js"},"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a 2")),r.a.createElement(v.a,null),r.a.createElement(g.a,{style:{width:"100%"},pagination:!1,columns:[{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",dataIndex:"name",key:"name"},{title:"\u041a\u0443\u0440\u0441",dataIndex:"course",key:"course"}],dataSource:y})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[148,1,2]]]);
//# sourceMappingURL=main.8fa4610c.chunk.js.map