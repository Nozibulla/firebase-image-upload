(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(41)},26:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),s=n(12),r=n.n(s),c=(n(26),n(13)),i=n(14),l=n(18),u=n(15),p=n(19),d=n(20),g=n(17),h=n.n(g),f=n(6),m=n.n(f);n(39),n(40);m.a.initializeApp({apiKey:"AIzaSyCfb5j-BP1l_oJi-ru9AdsYTYq9CXyBs0I",authDomain:"headless-graphql.firebaseapp.com",databaseURL:"https://headless-graphql.firebaseio.com",projectId:"headless-graphql",storageBucket:"headless-graphql.appspot.com",messagingSenderId:"678900724624"});var b=m.a.firestore(),v=m.a.storage();b.settings({timestampsInSnapshots:!0});var w=function(e){var t=e.substr(e.lastIndexOf("/")+1),n="thumb_".concat(t),a=e.substr(0,e.lastIndexOf("/")+1);return"".concat(a).concat(n)},k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={image:[]},n.onDrop=function(e){console.log(e),n.setState({image:e})},n.sendToFirebase=function(){var e=n.state.image;if(e.length){var t=v.ref(e[0].name);try{var a=t.put(e[0]);a.on("state_changed",function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case"PAUSED":console.log("Upload is paused");break;case"RUNNING":console.log("Upload is running")}},function(e){switch(e.code){case"storage/unauthorized":console.log("not auth");break;case"storage/canceled":console.log("calcelled");break;case"storage/unknown":console.log("unknown")}},function(){a.snapshot.ref.getDownloadURL().then(function(e){console.log("File available at",e);var t=w(e);console.log(t,"again")})})}catch(o){console.error(o)}}},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,{onDrop:this.onDrop},function(e){var t=e.getRootProps,n=e.getInputProps,a=e.isDragActive;return o.a.createElement("div",Object.assign({},t(),{className:h()("dropzone",{"dropzone--isActive":a})}),o.a.createElement("input",n()),a?o.a.createElement("p",null,"Drop files here..."):o.a.createElement("p",null,"Try dropping some files here, or click to select files to upload."))}),o.a.createElement("button",{onClick:this.sendToFirebase},"Send to firebase"))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.f5865c2f.chunk.js.map