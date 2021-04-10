(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a,r,o=n(1),i=n.n(o),c=n(7),s=n.n(c),l=n(8),u=n(2),h=n(3),b=n(5),j=n(4),p=(n(13),n(0)),f=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"cabecalho",children:Object(p.jsxs)("h1",{className:"cabecalho__titulo",children:["Pretty Little ",Object(p.jsx)("span",{children:"Notes"})]})})}}]),n}(o.Component),O=(n(15),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).titulo="",a.texto="",a}return Object(h.a)(n,[{key:"_handleTitulo",value:function(t){t.stopPropagation(),this.titulo=t.target.value}},{key:"_handleTexto",value:function(t){t.stopPropagation(),this.texto=t.target.value}},{key:"_criarNota",value:function(t){t.preventDefault(),this.props.criarNota(this.titulo,this.texto)}},{key:"render",value:function(){return Object(p.jsxs)("form",{className:"formulario",onSubmit:this._criarNota.bind(this),children:[Object(p.jsx)("input",{className:"formulario__titulo",type:"text",placeholder:"Titulo...",maxLength:"24",onChange:this._handleTitulo.bind(this)}),Object(p.jsx)("textarea",{className:"formulario__texto",placeholder:"Nota...",maxLength:"256",onChange:this._handleTexto.bind(this)}),Object(p.jsx)("button",{className:"formulario__botao",children:"Criar"})]})}}]),n}(o.Component));n(16);function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function v(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function m(t,e){var n=t.title,i=t.titleId,c=v(t,["title","titleId"]);return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:e,"aria-labelledby":i},c),n?o.createElement("title",{id:i},n):null,a||(a=o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),r||(r=o.createElement("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"})))}var x,y=o.forwardRef(m),g=(n.p,function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(h.a)(n,[{key:"apagarNota",value:function(){var t=this.props.indice;this.props.apagarNota(t)}},{key:"render",value:function(){return Object(p.jsxs)("section",{className:"nota",children:[Object(p.jsx)("h3",{className:"nota__titulo",children:this.props.titulo}),Object(p.jsx)("div",{className:"nota__divisoria"}),Object(p.jsx)("p",{className:"nota__texto",children:this.props.texto}),Object(p.jsx)(y,{className:"nota__icone",onClick:this.apagarNota.bind(this)})]})}}]),n}(o.Component)),N=(n(17),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(u.a)(this,n),e.call(this,t)}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsx)("ul",{className:"lista-de-notas",children:this.props.notas.map((function(e,n){return Object(p.jsx)("li",{children:Object(p.jsx)(g,{titulo:e.titulo,texto:e.texto,indice:n,apagarNota:t.props.apagarNota})},n)}))})}}]),n}(o.Component));function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function w(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function k(t,e){var n=t.title,a=t.titleId,r=w(t,["title","titleId"]);return o.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:e,"aria-labelledby":a},r),n?o.createElement("title",{id:a},n):null,x||(x=o.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})))}var C=o.forwardRef(k),E=(n.p,n(18),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("footer",{className:"rodape",children:[Object(p.jsx)("p",{className:"rodape__informacao",children:"Designed by Bruno Sousa"}),Object(p.jsx)("a",{href:"https://github.com/brunorsousa1998",children:Object(p.jsx)(C,{className:"rodape__icone"})})]})}}]),n}(o.Component)),P=(n(19),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={notas:[]},t}return Object(h.a)(n,[{key:"criarNota",value:function(t,e){if(""!=t&&""!=e){var n={titulo:t,texto:e};this.setState({notas:[].concat(Object(l.a)(this.state.notas),[n])})}}},{key:"apagarNota",value:function(t){var e=this.state.notas;e.splice(t,1),this.setState({notas:e})}},{key:"render",value:function(){return Object(p.jsxs)("section",{className:"app",children:[Object(p.jsx)(f,{}),Object(p.jsx)(O,{criarNota:this.criarNota.bind(this)}),Object(p.jsx)(N,{notas:this.state.notas,apagarNota:this.apagarNota.bind(this)}),Object(p.jsx)(E,{})]})}}]),n}(o.Component));n(20),n(21);s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.78991aa3.chunk.js.map