(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{A2KZ:function(t,e,n){"use strict";n("3bBZ"),n("4mDm"),n("07d7"),n("tkto"),n("zKZe");var r=n("iYmT"),i=n("q1tI"),o=n.n(i),s=n("bq/u"),c=n.n(s),a=n("PGlZ"),l=n("rlVJ"),u=n("qKvR");function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}e.a=function(t){var e=t.threshold,n=void 0===e?.15:e,o=t.containerProps,s=(o=void 0===o?{}:o).css,l=void 0===s?{}:s,d=p(o,["css"]),b=t.showControls,v=void 0!==b&&b,y=p(t,["threshold","containerProps","showControls"]),g=Object(a.a)({threshold:n}),O=g[0],w=g[1],j=Object(i.useState)(!0),V=j[0],k=j[1];return Object(u.jsx)("div",h({ref:O,css:Object(r.a)(Object.assign({"--controlOpacity":0,":hover":{"--controlOpacity":1}},l),"")},d),Object(u.jsx)(c.a,h({autoPlay:!0,playsinline:!0,playing:w&&V,muted:!0,loop:!0,width:"100%",height:"auto"},y)),v&&Object(u.jsx)(f,{mode:V?"pause":"play",onClick:function(){return k((function(t){return!t}))}}))};var d={name:"12jr8cp",styles:"position:absolute;bottom:16px;right:16px;cursor:pointer;opacity:var(--controlOpacity);transition:opacity 200ms, color 200ms;color:#30303080;:hover{color:#303030D0;}"},f=function(t){var e=t.mode,n=t.onClick,r=p(t,["mode","onClick"]);return Object(u.jsx)(l.a,{onClick:n,css:d},Object(u.jsx)("svg",h({width:"56",height:"46",viewBox:"0 0 56 46",fill:"none"},r),Object(u.jsx)("rect",{width:"56",height:"46",rx:"8.5",fill:"currentColor"}),"play"===e?Object(u.jsx)("path",{d:"M21 34V12L39 23L21 34Z",fill:"white"}):Object(u.jsx)(o.a.Fragment,null,Object(u.jsx)("rect",{x:"18",y:"11",width:"8",height:"24",fill:"white"}),Object(u.jsx)("rect",{x:"30",y:"11",width:"8",height:"24",fill:"white"}))))}},PGlZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("q1tI");function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var o=new Map,s=new Map,c=0;function a(t){return Object.keys(t).filter(Boolean).sort().map((function(e){return e+"_"+("root"===e?(n=t.root)?(s.has(n)||(c+=1,s.set(n,c.toString())),s.get(n)):"0":t[e]);var n})).toString()}function l(t,e,n){if(void 0===n&&(n={}),!t)return function(){};var r=function(t){var e=a(t),n=o.get(e);if(!n){var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n,o=e.isIntersecting&&i.thresholds.some((function(t){return e.intersectionRatio>=t}));t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=o),null==(n=r.get(e.target))||n.forEach((function(t){t(o,e)}))}))}),t);n={id:e,observer:i,elements:r},o.set(e,n)}return n}(n),i=r.id,s=r.observer,c=r.elements,l=c.get(t)||[];return c.has(t)||c.set(t,l),l.push(e),s.observe(t),function(){l.splice(l.indexOf(e),1),0===l.length&&(c.delete(t),s.unobserve(t)),0===c.size&&(s.disconnect(),o.delete(i))}}function u(t){return"function"!=typeof t.children}var h=function(t){var e,n;function o(e){var n;return(n=t.call(this,e)||this).node=null,n._unobserveCb=null,n.handleNode=function(t){n.node&&(n.unobserve(),t||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=t||null,n.observeNode()},n.handleChange=function(t,e){t&&n.props.triggerOnce&&n.unobserve(),u(n.props)||n.setState({inView:t,entry:e}),n.props.onChange&&n.props.onChange(t,e)},n.state={inView:!!e.initialInView,entry:void 0},n}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s=o.prototype;return s.componentDidUpdate=function(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var t=this.props,e=t.threshold,n=t.root,r=t.rootMargin,i=t.trackVisibility,o=t.delay;this._unobserveCb=l(this.node,this.handleChange,{threshold:e,root:n,rootMargin:r,trackVisibility:i,delay:o})}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!u(this.props)){var t=this.state,e=t.inView,n=t.entry;return this.props.children({inView:e,entry:n,ref:this.handleNode})}var o=this.props,s=o.children,c=o.as,a=o.tag,l=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(r.createElement)(c||a||"div",i({ref:this.handleNode},l),s)},o}(r.Component);function p(t){var e=void 0===t?{}:t,n=e.threshold,i=e.delay,o=e.trackVisibility,s=e.rootMargin,c=e.root,a=e.triggerOnce,u=e.skip,h=e.initialInView,p=Object(r.useRef)(),d=Object(r.useState)({inView:!!h}),f=d[0],b=d[1],v=Object(r.useCallback)((function(t){void 0!==p.current&&(p.current(),p.current=void 0),u||t&&(p.current=l(t,(function(t,e){b({inView:t,entry:e}),e.isIntersecting&&a&&p.current&&(p.current(),p.current=void 0)}),{root:c,rootMargin:s,threshold:n,trackVisibility:o,delay:i}))}),[n,c,s,a,u,o,i]);Object(r.useEffect)((function(){p.current||!f.entry||a||u||b({inView:!!h})}));var y=[v,f.inView,f.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}h.displayName="InView",h.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}}}]);