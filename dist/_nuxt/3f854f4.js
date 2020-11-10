(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(t,e,r){"use strict";r.d(e,"g",(function(){return c})),r.d(e,"a",(function(){return o})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return m})),r.d(e,"h",(function(){return f})),r.d(e,"b",(function(){return d})),r.d(e,"d",(function(){return v})),r.d(e,"c",(function(){return O})),r.d(e,"j",(function(){return h}));var n=r(61),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},l=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},d=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},v=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},O=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},h=function(data,t){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})}},182:function(t,e,r){"use strict";r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"e",(function(){return m})),r.d(e,"f",(function(){return f})),r.d(e,"b",(function(){return d}));var n=r(61),c=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},o=function(data){return Object(n.b)({method:"POST",url:"/api/users",data:data})},l=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})},f=function(data){return Object(n.b)({method:"PUT",url:"/api/user",data:data})},d=function(t){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(t)})}},254:function(t,e,r){"use strict";r.r(e);r(77),r(30),r(31),r(13),r(60);var n=r(43),c=(r(29),r(3)),o=r(198),l=r.n(o),m=r(181),f=r(182),d=r(32);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var O={name:"ArticleMeta",components:{},props:{article:{type:Object,required:!0}},data:function(){return{isAutor:!1,deleteing:!1}},mounted:function(){this.user.username===this.article.author.username&&(this.isAutor=!0)},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)(["user"])),methods:{onFavorite:function(article){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.changingFavorite=!0,!article.favorited){t.next=8;break}return t.next=4,Object(m.e)(article.slug);case 4:article.favorited=!1,article.favoritesCount-=1,t.next=12;break;case 8:return t.next=10,Object(m.a)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.changingFavorite=!1;case 13:case"end":return t.stop()}}),t)})))()},onFollow:function(article){return Object(c.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=article.author).changingFollow=!0,!e.following){t.next=8;break}return t.next=5,Object(f.e)(e.username);case 5:e.following=!1,t.next=11;break;case 8:return t.next=10,Object(f.a)(e.username);case 10:e.following=!0;case 11:e.changingFollow=!1;case 12:case"end":return t.stop()}}),t)})))()},onDeleteArticle:function(article){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.deleteing=!0,e.next=4,Object(m.d)(article.slug);case 4:e.sent,t.deleteing=!1,t.$router.push({name:"home"}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.dir(e.t0),t.deleteing=!1;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},h=r(20),j=Object(h.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v("\n      "+t._s(t.article.author.username)+"\n    ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),t.isAutor?[r("nuxt-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:{name:"editor",params:{slug:t.article.slug}}}},[r("i",{staticClass:"ion-edit"}),t._v(" Edit Article")]),t._v(" "),r("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{disabled:t.deleteing},on:{click:function(e){return t.onDeleteArticle(t.article)}}},[r("i",{staticClass:"ion-trash-a"}),t._v(" Delete Article\n    ")])]:[r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following},attrs:{disabled:t.article.author.changingFollow},on:{click:function(e){return t.onFollow(t.article)}}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n        "+t._s(t.article.author.following?"Unfollow":"Follow")+"\n        "+t._s(t.article.author.username)+"\n    ")]),t._v("\n      \n    "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited},attrs:{disabled:t.article.changingFavorite},on:{click:function(e){return t.onFavorite(t.article)}}},[r("i",{staticClass:"ion-heart"}),t._v("\n       \n      Favorite Post "),r("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])]],2)}),[],!1,null,null,null).exports;function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var _={name:"ArticleComments",components:{},props:{article:{type:Object,required:!0}},data:function(){return{comments:[],comment:"",submitting:!1}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.h)(t.article.slug);case 2:r=e.sent,data=r.data,t.comments=data.comments;case 5:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)(["user"])),methods:{onCommitComment:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.submitting=!0,e.next=4,Object(m.b)(t.article.slug,{comment:{body:t.comment}});case 4:r=e.sent,data=r.data,t.comments.unshift(data.comment),t.submitting=!1,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.dir(e.t0),t.submitting=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}};function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var C={name:"Article",head:function(){return{title:"".concat(this.article.title," - RealWorld"),meta:[{hid:"description",name:"description",content:this.article.description}]}},components:{ArticleMeta:j,ArticleComments:Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{staticClass:"card comment-form",on:{submit:function(e){return e.preventDefault(),t.onCommitComment(e)}}},[r("div",{staticClass:"card-block"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:t.user.image}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary",attrs:{disabled:t.submitting}},[t._v("\n      Post Comment\n      ")])])]),t._v(" "),t._l(t.comments,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.body)+".")])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v("        \n       \n      "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:e.author.username}}}},[t._v("\n        "+t._s(e.author.username)+"\n      ")]),t._v(" "),r("a",{staticClass:"comment-author",attrs:{href:""}},[t._v("Jacob Schmidt")]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(e.createdAt,"MMM DD, YYYY")))])],1)])}))],2)}),[],!1,null,null,null).exports},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(m.f)(r.slug);case 3:return n=e.sent,data=n.data,article=data.article,c=new l.a,article.body=c.render(article.body),e.abrupt("return",{article:article});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{}},created:function(){this.article.changingFavorite=!1,this.article.author.changingFollow=!1},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)(["user"])),methods:{}},P=Object(h.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("article-meta",{attrs:{article:t.article}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("article-meta",{attrs:{article:t.article}})],1),t._v(" "),t.user?r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("article-comments",{attrs:{article:t.article}})],1)]):t._e()])])}),[],!1,null,null,null);e.default=P.exports}}]);