_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(t,e,a){a("GcxT"),t.exports=a("nOHt")},"1TCz":function(t,e,a){"use strict";a.r(e);var c=a("rePB"),i=a("nKUr"),r=(a("OEcT"),a("/MKj")),o=a("ANjH"),s=a("KQm4"),n=a("Jde/"),l=a("7Cbv"),d=a("SJDW");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,c)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){Object(c.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u=a("Sgyi"),y={currentlyEditing:null,blocks:[{id:Object(l.a)(),type:"section",tag:"section",classList:["relative","pt-12","pb-12"],data:[{id:Object(l.a)(),type:"row",tag:"div",classList:["relative","container","mx-auto","bg-blue-500","flex","flex-wrap","p-4"],data:[{id:Object(l.a)(),type:"column",tag:"div",classList:["w-full","md:w-1/2","p-4"],data:[{id:Object(l.a)(),type:"text",tag:"p",classList:["text-black","text-4xl","pb-12","font-black"],data:"Campfire is a website editor made with react + tailwind"},{id:Object(l.a)(),type:"text",tag:"p",classList:["text-black","text-base","mb-4"],data:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},{id:Object(l.a)(),type:"link",tag:"a",classList:["px-4","py-2","bg-green-500","text-white","rounded","block","text-center"],data:{target:"_self",href:"#",title:"Try Today"}}]},{id:Object(l.a)(),type:"column",tag:"div",classList:["w-full","md:w-1/2","p-4"],data:[{id:Object(l.a)(),type:"image",tag:"img",classList:["text-black","text-3xl","text-center","bg-orange-800"],data:{src:"https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",alt:"Highway Photo"}}]}]},{id:Object(l.a)(),type:"section-background",tag:"div",classList:["absolute","top-0","left-0","w-full","h-full","bg-cover","bg-fixed","bg-center"],data:{degree:180,gradient_type:"linear",color_start:"rgba(255, 255, 255, 0.5)",color_end:"rgba(255, 255, 255, 0.5)",blur:0,src:"https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"}}]},{id:Object(l.a)(),type:"section",tag:"section",classList:["py-12","relative","bg-orange-500"],data:[{id:Object(l.a)(),type:"row",tag:"div",classList:["max-w-4xl","mx-auto","bg-blue-500","flex","flex-wrap","p-4","mt-24"],data:[{id:Object(l.a)(),type:"column",tag:"div",classList:["w-full","md:w-1/3","p-4"],data:[{id:Object(l.a)(),type:"image",tag:"img",classList:[],data:{src:"https://images.unsplash.com/photo-1503945839639-aea48daa250f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"}}]},{id:Object(l.a)(),type:"column",tag:"div",classList:["w-full","md:w-1/3","p-4"],data:[{id:Object(l.a)(),type:"image",tag:"img",classList:[],data:{alt:"image",src:"https://images.unsplash.com/photo-1505739679850-7adc7776516b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"}}]},{id:Object(l.a)(),type:"column",tag:"div",classList:["w-full","md:w-1/3","p-4"],data:[{id:Object(l.a)(),type:"image",tag:"img",classList:[],data:{alt:"image",src:"https://images.unsplash.com/photo-1508176850193-21de4476f385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"}}]}]}]}]},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.h:return b(b({},t),{},{currentlyEditing:e.payload?e.payload:null});case n.j:return b(b({},t),{},{blocks:u.changeProps(t.blocks,{id:e.payload.id},b({},e.payload))});case n.k:return b(b({},t),{},{currentlyEditing:e.payload});case n.c:return e.payload?b(b({},t),{},{blocks:u.insertObjectAfter(t.blocks,{id:e.payload.id},Object(d.a)("section"))}):b(b({},t),{},{blocks:[].concat(Object(s.a)(t.blocks),[Object(d.a)("section")])});case n.b:var a=u.returnFound(t.blocks,{id:e.payload.id});return b(b({},t),{},{blocks:u.changeProps(t.blocks,{id:e.payload.id},{data:[].concat(Object(s.a)(a.data),[Object(d.a)("row",e.payload.columns)])})});case n.e:return b(b({},t),{},{blocks:u.insertObjectAfter(t.blocks,{id:e.payload.id},Object(d.a)("row",e.payload.columns))});case n.g:return b(b({},t),{},{blocks:u.removeObject(t.blocks,{id:e.payload.id})});case n.i:var c=function(t,e,a){if(a>=t.length)for(var c=a-t.length+1;c--;)t.push(void 0);return t.splice(a,0,t.splice(e,1)[0]),t},i=c(t.blocks,e.payload.removedIndex,e.payload.addedIndex);return b(b({},t),{},{blocks:Object(s.a)(i)});case n.a:var r=u.returnFound(t.blocks,{id:e.payload.id});return b(b({},t),{},{blocks:u.changeProps(t.blocks,{id:e.payload.id},{data:[].concat(Object(s.a)(r.data),[Object(d.a)(e.payload.type)])})});case n.d:return b(b({},t),{},{blocks:u.insertObjectAfter(t.blocks,{id:e.payload.id},Object(d.a)(e.payload.type))});case n.f:return b(b({},t),{},{blocks:u.insertObjectAfter(t.blocks,{id:e.payload.id},b(b({},e.payload),{},{id:Object(l.a)()}))});default:return t}},g=Object(o.b)(O);function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,c)}return a}function j(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){Object(c.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e.default=function(t){var e=t.Component,a=t.pageProps;return Object(i.jsx)(r.a,{store:g,children:Object(i.jsx)(e,j({},a))})}},GcxT:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a("1TCz")}])},OEcT:function(t,e,a){}},[[0,0,1,4,3,2]]]);