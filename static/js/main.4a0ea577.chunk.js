(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{153:function(e,t,a){e.exports=a(285)},158:function(e,t,a){},159:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(11),l=a.n(i),o=(a(158),a(19)),r=(a(159),a(43)),s=a.n(r);r.initializeApp({apiKey:"AIzaSyD6DnGbVfdJlDJ_pEOUfDfTDJrA8j3lIs8",authDomain:"dv-inventory.firebaseapp.com",databaseURL:"https://dv-inventory.firebaseio.com",projectId:"dv-inventory",storageBucket:"dv-inventory.appspot.com",messagingSenderId:"130062240176",appId:"1:130062240176:web:ecbca5d29b37d25c6cee75"});var u,m=r.firestore(),d=a(105);u=null;var v;v=null;function p(e){var t=e.id,a=e.name,n=e.parts,i=e.setSelect,l=e.setSelectedPlace;return c.a.createElement("div",null,c.a.createElement("button",{className:"place",onClick:function(){i(t),function(e){u=e}(t),l(t),function(e){v=e}(n)}},a))}function f(e){e.id;var t=e.placeID,a=e.name,n=e.count;return t===u?c.a.createElement("div",{className:"item"},c.a.createElement("div",{className:"itemname"},a),c.a.createElement("div",{className:"itemcount"},n)):null}function b(e){var t=e.places1,a=e.setSelect,n=e.setSelectedPlace;return c.a.createElement("div",null,null===t||void 0===t?void 0:t.map((function(e){if(function(e){if(t&&e){var a,n=Object(d.a)(t);try{for(n.s();!(a=n.n()).done;){var c=a.value;if(c.parts){var i,l=Object(d.a)(c.parts);try{for(l.s();!(i=l.n()).done;){if(i.value===e)return!1}}catch(o){l.e(o)}finally{l.f()}}}}catch(o){n.e(o)}finally{n.f()}return!0}}(e.id)||function(e){if(v){var t,a=Object(d.a)(v);try{for(a.s();!(t=a.n()).done;){if(e===t.value)return!0}}catch(n){a.e(n)}finally{a.f()}}}(e.id))return c.a.createElement(p,{key:e.id,name:e.data.name,parts:e.parts,id:e.id,setSelect:a,setSelectedPlace:n})})))}var O=a(289),y=a(293),E=a(30),I=a(290),j=a(288),S=(a(108),I.a.OptGroup),N=I.a.Option,h=c.a.memo((function(e){var t=e.inventory,a=e.selectedPlace,n=e.setSelectedItem;return c.a.createElement(E.c,{initialValues:{itemForRemove:""},onSubmit:function(){},enableReinitialize:!0},(function(){return c.a.createElement(j.a,null,c.a.createElement(I.a,{name:"itemForRemove",className:"select",onChange:n},c.a.createElement(S,{label:"Delete Item",className:"optGroup"},null===t||void 0===t?void 0:t.map((function(e){if(a===e.placeId)return c.a.createElement(N,{className:"option",key:e.id,value:e.id},""===e.data.name?"Unknown Item":e.data.name," - ",e.id)})))))}))})),g=c.a.memo((function(e){var t=e.isVisible,a=e.setIsVisible,i=e.inventory,l=e.selectedPlace,r=e.setInventory,u=Object(n.useState)(""),d=Object(o.a)(u,2),v=d[0],p=d[1],f=Object(n.useState)(!1),b=Object(o.a)(f,2),E=b[0],I=function(e,t){return Object(n.useCallback)((function(a,n){""!==a?(t(!0),s.a.firestore().collection("inventory").doc(a).delete().then((function(){m.collection("inventory").get().then((function(a){var c=a.docs.map((function(e){var t;return{id:e.id,data:e.data(),placeId:null===(t=e.data().place)||void 0===t?void 0:t.id}}));e(c),t(!1),n(!1)}))}))):y.a.error({message:"Oops...",description:"Field must be filled"})}),[e,t])}(r,b[1]);return c.a.createElement(O.a,{title:"Delete Item",visible:t,onOk:function(){I(v,a)},confirmLoading:E,onCancel:function(){a(!1)}},c.a.createElement(h,{inventory:i,selectedPlace:l,setSelectedItem:p}))}));var k=a(286),C=a(291),V=I.a.OptGroup,P=I.a.Option,D=c.a.memo((function(e){var t=e.places,a=e.setCount,n=e.setInventoryName,i=e.setPlaceId,l={count:1,inventoryName:"",placeId:""};return c.a.createElement(E.c,{initialValues:l,onSubmit:function(){},enableReinitialize:!0},(function(){return c.a.createElement(j.a,null,c.a.createElement(k.a,{min:1,max:99,name:"count",defaultValue:l.count,onChange:a}),c.a.createElement(C.a,{name:"inventoryName",placeholder:"Inventory name",defaultValue:l.inventoryName,onBlur:function(e){n(e.target.value)}}),c.a.createElement(I.a,{name:"placeId",className:"select",onChange:i},c.a.createElement(V,{label:"Place",className:"optGroup"},null===t||void 0===t?void 0:t.map((function(e){return c.a.createElement(P,{className:"option",key:e.id,value:e.id},""===e.data.name?"Unknown place":e.data.name)})))))}))})),R=c.a.memo((function(e){var t=e.places,a=e.isVisible,i=e.setIsVisible,l=e.setInventory,r=Object(n.useState)(1),u=Object(o.a)(r,2),d=u[0],v=u[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),b=f[0],E=f[1],I=Object(n.useState)(""),j=Object(o.a)(I,2),S=j[0],N=j[1],h=Object(n.useState)(!1),g=Object(o.a)(h,2),k=g[0],C=function(e,t){return Object(n.useCallback)((function(a,n,c,i){a&&n&&c?(t(!0),s.a.firestore().collection("inventory").doc().set({name:n,count:a,place:s.a.firestore().collection("places").doc(c)}).then((function(){m.collection("inventory").get().then((function(a){var n=a.docs.map((function(e){var t;return{id:e.id,data:e.data(),placeId:null===(t=e.data().place)||void 0===t?void 0:t.id}}));e(n),t(!1),i(!1)}))}))):y.a.error({message:"Oops...",description:"Fields must be filled"})}),[e,t])}(l,g[1]);return c.a.createElement(O.a,{title:"Add Item",visible:a,onOk:function(){C(d,b,S,i)},confirmLoading:k,onCancel:function(){i(!1)}},c.a.createElement(D,{places:t,setCount:v,setInventoryName:E,setPlaceId:N}))}));var A=a(287),F=I.a.OptGroup,G=I.a.Option,J=c.a.memo((function(e){var t=e.inventory,a=e.selectedPlace,n=e.setSelectedItem,i=e.setCount;return c.a.createElement(E.c,{initialValues:{itemForRemove:""},onSubmit:function(){},enableReinitialize:!0},(function(){return c.a.createElement(j.a,null,c.a.createElement(A.a,{min:1,max:99,name:"count",defaultValue:1,onChange:i}),c.a.createElement(I.a,{name:"itemForRemove",className:"select",onChange:n},c.a.createElement(F,{label:"Modify Item",className:"optGroup"},null===t||void 0===t?void 0:t.map((function(e){if(a===e.placeId)return c.a.createElement(G,{className:"option",key:e.id,value:JSON.stringify({id:e.id,name:e.data.name,place:e.placeId})},""===e.data.name?"Unknown Item":e.data.name," - ",e.id)})))))}))})),w=c.a.memo((function(e){var t=e.isVisible,a=e.setIsVisible,i=e.inventory,l=e.selectedPlace,r=e.setInventory,u=Object(n.useState)(""),d=Object(o.a)(u,2),v=d[0],p=d[1],f=Object(n.useState)(!1),b=Object(o.a)(f,2),E=b[0],I=b[1],j=Object(n.useState)(1),S=Object(o.a)(j,2),N=S[0],h=S[1],g=function(e,t){return Object(n.useCallback)((function(a,n,c){var i=JSON.parse(n);a&&n?(t(!0),s.a.firestore().collection("inventory").doc(i.id).delete().then((function(){s.a.firestore().collection("inventory").doc().set({name:i.name,count:a,place:s.a.firestore().collection("places").doc(i.place)}).then((function(){m.collection("inventory").get().then((function(a){var n=a.docs.map((function(e){var t;return{id:e.id,data:e.data(),placeId:null===(t=e.data().place)||void 0===t?void 0:t.id}}));e(n),t(!1),c(!1)}))}))}))):y.a.error({message:"Oops...",description:"Fields must be filled"})}),[e,t])}(r,I);return c.a.createElement(O.a,{title:"Modify Item",visible:t,onOk:function(){g(N,v,a)},confirmLoading:E,onCancel:function(){a(!1)}},c.a.createElement(J,{inventory:i,selectedPlace:l,setSelectedItem:p,setCount:h}))}));var U=c.a.memo((function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(),r=Object(o.a)(l,2),s=r[0],u=r[1],d=Object(n.useState)(),v=Object(o.a)(d,2),p=(v[0],v[1]),O=Object(n.useState)(""),y=Object(o.a)(O,2),E=y[0],I=y[1],j=Object(n.useState)(!1),S=Object(o.a)(j,2),N=S[0],h=S[1],k=Object(n.useState)(!1),C=Object(o.a)(k,2),V=C[0],P=C[1],D=Object(n.useState)(!1),A=Object(o.a)(D,2),F=A[0],G=A[1];return Object(n.useEffect)((function(){m.collection("places").get().then((function(e){var t=e.docs.map((function(e){return{id:e.id,data:e.data(),parts:e.data().parts&&e.data().parts.map((function(e){return null===e||void 0===e?void 0:e.id}))}}));i(t)})),m.collection("inventory").get().then((function(e){var t=e.docs.map((function(e){var t;return{id:e.id,data:e.data(),placeId:null===(t=e.data().place)||void 0===t?void 0:t.id}}));u(t)}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"places"},c.a.createElement("div",{className:"placeshead"},"Places"),c.a.createElement(b,{places1:a,setSelect:p,setSelectedPlace:I})),c.a.createElement("div",{className:"items"},c.a.createElement("div",{className:"itemshead"},"Items"),c.a.createElement("div",{className:"itemsproperties"},c.a.createElement("div",{className:"nameproperty"},"NAME"),c.a.createElement("div",{className:"countproperty"},"COUNT")),null===s||void 0===s?void 0:s.map((function(e){return c.a.createElement(f,{placeID:e.placeId,key:e.id,name:e.data.name,count:e.data.count,id:e.id})}))),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"button",onClick:function(){G(!0)}},"Add Item"),c.a.createElement("button",{className:"button",onClick:function(){h(!0)}},"Delete Item"),c.a.createElement("button",{className:"button",onClick:function(){P(!0)}},"Modify Item")),c.a.createElement(g,{isVisible:N,setIsVisible:h,inventory:s,setInventory:u,selectedPlace:E}),c.a.createElement(w,{isVisible:V,setIsVisible:P,inventory:s,setInventory:u,selectedPlace:E}),c.a.createElement(R,{isVisible:F,setIsVisible:G,places:a,setInventory:u}))}));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,null)),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.4a0ea577.chunk.js.map