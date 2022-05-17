var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,a;function i(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function p(){return $(" ")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e,n){t.classList[n?"add":"remove"](e)}function h(t){a=t}const x=[],b=[],v=[],y=[],_=Promise.resolve();let w=!1;function T(t){v.push(t)}const k=new Set;let E=0;function z(){const t=a;do{for(;E<x.length;){const t=x[E];E++,h(t),A(t.$$)}for(h(null),x.length=0,E=0;b.length;)b.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];k.has(e)||(k.add(e),e())}v.length=0}while(x.length);for(;y.length;)y.pop()();w=!1,k.clear(),h(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const C=new Set;function M(t,e){t&&t.i&&(C.delete(t),t.i(e))}function S(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),undefined.c.push((()=>{C.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function j(t){t&&t.c()}function L(t,n,s,c){const{fragment:a,on_mount:i,on_destroy:l,after_update:u}=t.$$;a&&a.m(n,s),c||T((()=>{const n=i.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(T)}function I(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(x.push(t),w||(w=!0,_.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,r,s,c,i,l,u,d=[-1]){const $=a;h(e);const p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||($?$.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||$.$$.root};u&&u(p.root);let m=!1;if(p.ctx=s?s(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&D(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();r.intro&&M(e.$$.fragment),L(e,r.target,r.anchor,r.customElement),z()}h($)}class G{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(e){let n;return{c(){n=d("div"),n.innerHTML='<a target="_blank" href="mailto:garbelotti2@gmail"><i class="icone fa fa-envelope-o svelte-xdbc6t" aria-hidden="true"></i></a> \n\n    <a target="_blank" href="https://wa.me/qr/6VDDUWFXEGTBE1"><i class="icone fa fa-whatsapp svelte-xdbc6t" aria-hidden="true"></i></a> \n\n    <a target="_blank" href="https://github.com/IGarbelotti"><i class="icone fa fa-github svelte-xdbc6t" aria-hidden="true"></i></a>',m(n,"class","icones svelte-xdbc6t")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class N extends G{constructor(t){super(),H(this,t,null,J,s,{})}}function q(e){let n,o,r,s,a,i,$,g,h,x,b;return x=new N({}),{c(){var t,e;n=d("div"),o=d("div"),r=d("img"),a=p(),i=d("h1"),i.textContent="Isabela Garbelotti",$=p(),g=d("h2"),g.textContent="Estudante de Anlise e Desenvolvimento de Sistemas",h=p(),j(x.$$.fragment),t=r.src,e=s="./img/foto.jpeg",c||(c=document.createElement("a")),c.href=e,t!==c.href&&m(r,"src","./img/foto.jpeg"),m(r,"alt","Foto de Isabela"),m(r,"class","foto svelte-9mluw0"),m(i,"class","titulo svelte-9mluw0"),m(g,"class","descricao svelte-9mluw0"),m(o,"class","centro svelte-9mluw0"),m(n,"class","fundo svelte-9mluw0")},m(t,e){u(t,n,e),l(n,o),l(o,r),l(o,a),l(o,i),l(o,$),l(o,g),l(o,h),L(x,o,null),b=!0},p:t,i(t){b||(M(x.$$.fragment,t),b=!0)},o(t){S(x.$$.fragment,t),b=!1},d(t){t&&f(n),I(x)}}}class B extends G{constructor(t){super(),H(this,t,null,q,s,{})}}function F(e){let n;return{c(){n=d("footer"),n.innerHTML="<span>© 2022 Isabela Garbelotti</span>",m(n,"class","rodape svelte-1jckh33")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class O extends G{constructor(t){super(),H(this,t,null,F,s,{})}}function P(t){let e,n,o,r,s;const c=t[3].default,a=function(t,e,n,o){if(t){const r=i(t,e,n,o);return t[0](r)}}(c,t,t[2],null);return{c(){e=d("section"),n=d("h1"),o=$(t[0]),r=p(),a&&a.c(),m(n,"class","titulo svelte-1x5st3h"),m(e,"class","secao svelte-1x5st3h"),g(e,"centralizar",t[1])},m(t,c){u(t,e,c),l(e,n),l(n,o),l(e,r),a&&a.m(e,null),s=!0},p(t,[n]){(!s||1&n)&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(o,t[0]),a&&a.p&&(!s||4&n)&&function(t,e,n,o,r,s){if(r){const c=i(e,n,o,s);t.p(c,r)}}(a,c,t,t[2],s?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(c,t[2],n,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[2]),null),2&n&&g(e,"centralizar",t[1])},i(t){s||(M(a,t),s=!0)},o(t){S(a,t),s=!1},d(t){t&&f(e),a&&a.d(t)}}}function U(t,e,n){let{$$slots:o={},$$scope:r}=e,{titulo:s}=e,{centralizarTexto:c=!1}=e;return t.$$set=t=>{"titulo"in t&&n(0,s=t.titulo),"centralizarTexto"in t&&n(1,c=t.centralizarTexto),"$$scope"in t&&n(2,r=t.$$scope)},[s,c,r,o]}class V extends G{constructor(t){super(),H(this,t,U,P,s,{titulo:0,centralizarTexto:1})}}function W(e){let n;return{c(){n=d("p"),n.textContent="Sou estudante do curso de Analise e Desenvolvimento de Sistemas no\n\t\tInstituto Federal de Sao Paulo, campus Campos do Jordao."},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function X(e){let n;return{c(){n=d("ul"),n.innerHTML="<li><strong>Aprendizagem:</strong> JavaScript, Java, Python,</li>"},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function K(e){let n;return{c(){n=d("div"),n.innerHTML="<h2>INATEL</h2> \n\t\t<span>Backend Dev</span> \n\t\t<ul><li>Java</li></ul>"},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function Q(e){let n;return{c(){n=d("ul"),n.innerHTML="<li>udemy</li>"},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function R(t){let e,n,o,r,s,c,a,i,l,d,$,m;return e=new B({}),o=new V({props:{titulo:"Sobre Mim",centralizarTexto:!0,$$slots:{default:[W]},$$scope:{ctx:t}}}),s=new V({props:{titulo:"Competencias",$$slots:{default:[X]},$$scope:{ctx:t}}}),a=new V({props:{titulo:"Experiencia",$$slots:{default:[K]},$$scope:{ctx:t}}}),l=new V({props:{titulo:"Conquistas",$$slots:{default:[Q]},$$scope:{ctx:t}}}),$=new O({}),{c(){j(e.$$.fragment),n=p(),j(o.$$.fragment),r=p(),j(s.$$.fragment),c=p(),j(a.$$.fragment),i=p(),j(l.$$.fragment),d=p(),j($.$$.fragment)},m(t,f){L(e,t,f),u(t,n,f),L(o,t,f),u(t,r,f),L(s,t,f),u(t,c,f),L(a,t,f),u(t,i,f),L(l,t,f),u(t,d,f),L($,t,f),m=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r);const c={};1&e&&(c.$$scope={dirty:e,ctx:t}),a.$set(c);const i={};1&e&&(i.$$scope={dirty:e,ctx:t}),l.$set(i)},i(t){m||(M(e.$$.fragment,t),M(o.$$.fragment,t),M(s.$$.fragment,t),M(a.$$.fragment,t),M(l.$$.fragment,t),M($.$$.fragment,t),m=!0)},o(t){S(e.$$.fragment,t),S(o.$$.fragment,t),S(s.$$.fragment,t),S(a.$$.fragment,t),S(l.$$.fragment,t),S($.$$.fragment,t),m=!1},d(t){I(e,t),t&&f(n),I(o,t),t&&f(r),I(s,t),t&&f(c),I(a,t),t&&f(i),I(l,t),t&&f(d),I($,t)}}}return new class extends G{constructor(t){super(),H(this,t,null,R,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
