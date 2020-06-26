(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1dde":function(t,n,a){var e=a("d039"),r=a("b622"),i=a("2d00"),o=r("species");t.exports=function(t){return i>=51||!e((function(){var n=[],a=n.constructor={};return a[o]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"4a76":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("b-container",[t.cardObject?t._e():a("b-row",{attrs:{id:"vocablist"}},t._l(t.$options.japaneseVocab.n5_vocab,(function(n){return a("b-col",{key:n.id,staticClass:"mb-3",attrs:{sm:"6",lg:"4"}},[a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[n.kanji?a("div",{staticClass:"card-header"},[t._v(t._s(n.kanji))]):t._e(),n.kanji?t._e():a("div",{staticClass:"card-header"},[t._v(t._s(n.kana))]),a("div",{staticClass:"card-body"},[n.kanji?a("p",{staticClass:"card-text"},[t._v(t._s(n.kana))]):t._e(),a("p",{staticClass:"card-text"},[t._v(t._s(n.eng))]),n.kanji?t._e():a("br")])])])})),1),t.cardObject?a("b-row",{staticClass:"my-5"}):t._e(),a("b-row",{attrs:{id:"flashcards"}},[!1===t.quizStats.finished?a("b-col",{attrs:{id:"quiz"}},[a("b-jumbotron",{attrs:{header:"Quiz",lead:"JLPT N5 Vocab"}},[a("b-row",[t.cardObject?a("b-col",{staticClass:"flashcard "},[a("h5",[t._v("Score: "+t._s(t.quizStats.score))]),a("h3",[t._v(t._s(t.cardObject.kanji))]),t.cardObject.kanji?t._e():a("h3",[t._v(t._s(t.cardObject.kana))]),a("b-form-input",{attrs:{type:"text",name:"kana",value:"hiragana for this?"},model:{value:t.userInput,callback:function(n){t.userInput=n},expression:"userInput"}})],1):t._e()],1),a("b-row",{staticClass:"mt-4"},[a("b-col",[t.cardObject?a("b-button",{staticClass:"mr-3",attrs:{squared:"",variant:"info",type:"button",name:"check"},on:{click:function(n){return t.quiz(n,t.userInput,t.cardObject,t.quizStats,t.changeCard)}}},[t._v("Check Answer")]):t._e(),t.cardObject?t._e():a("b-button",{attrs:{squared:"",variant:"success",type:"button",name:"button"},on:{click:function(n){return t.changeCard(n)}}},[t._v("Start Quiz")])],1)],1)],1)],1):t._e(),!0===t.quizStats.finished?a("b-col",{attrs:{id:"finishedQuiz"}},[a("b-jumbotron",{attrs:{header:"Quiz",lead:"JLPT N5 Vocab"}},[a("h3",[t._v("Congradualations! All correct!")]),a("b-button",{attrs:{squared:"",variant:"info",type:"button",name:"startOver"},on:{click:function(n){return t.startOver(n,t.quizStats)}}},[t._v("Start Over")])],1)],1):t._e()],1),a("b-row",{staticClass:"mt-3"})],1)},r=[],i=(a("a623"),a("d81d"),a("b83a")),o={name:"Vocab",components:{},japaneseVocab:i,data:function(){return{flashcards:null,title:"Japanese Vocab",showInput:!1,dataChanged:!1,manageMode:!1,cardObject:null,userInput:null,quizStats:{score:0,wrongAnswers:[],correctAnswers:[],quizCounter:0,correctStatus:!1,finished:!1}}},methods:{changeCard:function(t,n){var a;function e(t){return Math.floor(Math.random()*t.length)}function r(t,n){var a=t.map((function(t){return t.id==n.id}));return!a.every((function(t){return!1===t}))}function o(t){var n=e(t);return i.n5_vocab[n]}function c(){return""}function s(t,n){return t.length<n.length}if(console.log(i.n5_vocab.length),a=o(i.n5_vocab),arguments.length<=2?void 0:arguments[2]){if(!1===s(arguments.length<=2?void 0:arguments[2],i.n5_vocab))return n.finished=!0;while(r(arguments.length<=2?void 0:arguments[2],a))console.log("switched card again"),a=o(i.n5_vocab);return this.userInput=c(),this.cardObject=a}return this.userInput=c(),this.cardObject=a},quiz:function(t,n,a,e,r){function i(n,e,r,i){return n===e?(r.score++,r.quizCounter++,r.correctStatus=!0,r.correctAnswers.push(a),i(t,r,r.correctAnswers),r):(r.quizCounter++,r.wrongAnswers.push(a),i(t,r,r.correctAnswers),r.correctStatus=!1,r)}return a.kanji?i(n,a.kana,e,r):i(n,a.eng,e,r)},startOver:function(t,n){return n={score:0,wrongAnswers:[],correctAnswers:[],quizCounter:0,correctStatus:!1,finished:!1},this.userInput="",this.quizStats=n}},mounted:function(){this.updateCards()}},c=o,s=a("2877"),u=Object(s["a"])(c,e,r,!1,null,"3c0ecf08",null);n["default"]=u.exports},"65f0":function(t,n,a){var e=a("861d"),r=a("e8b5"),i=a("b622"),o=i("species");t.exports=function(t,n){var a;return r(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?e(a)&&(a=a[o],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===n?0:n)}},a623:function(t,n,a){"use strict";var e=a("23e7"),r=a("b727").every,i=a("a640"),o=a("ae40"),c=i("every"),s=o("every");e({target:"Array",proto:!0,forced:!c||!s},{every:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},a640:function(t,n,a){"use strict";var e=a("d039");t.exports=function(t,n){var a=[][t];return!!a&&e((function(){a.call(null,n||function(){throw 1},1)}))}},ae40:function(t,n,a){var e=a("83ab"),r=a("d039"),i=a("5135"),o=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var a=[][t],u=!!i(n,"ACCESSORS")&&n.ACCESSORS,d=i(n,0)?n[0]:s,l=i(n,1)?n[1]:void 0;return c[t]=!!a&&!r((function(){if(u&&!e)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:s}):t[1]=1,a.call(t,d,l)}))}},b727:function(t,n,a){var e=a("0366"),r=a("44ad"),i=a("7b0b"),o=a("50c4"),c=a("65f0"),s=[].push,u=function(t){var n=1==t,a=2==t,u=3==t,d=4==t,l=6==t,f=5==t||l;return function(b,h,v,p){for(var k,g,m=i(b),_=r(m),j=e(h,v,3),w=o(_.length),y=0,C=p||c,O=n?C(b,w):a?C(b,0):void 0;w>y;y++)if((f||y in _)&&(k=_[y],g=j(k,y,m),t))if(n)O[y]=g;else if(g)switch(t){case 3:return!0;case 5:return k;case 6:return y;case 2:s.call(O,k)}else if(d)return!1;return l?-1:u||d?d:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},b83a:function(t){t.exports=JSON.parse('{"n5_vocab":[{"id":1,"kana":"あっち","eng":"over there"},{"id":2,"kana":"あちら","eng":"there"},{"id":3,"kana":"あか","kanji":"赤","eng":"red; crimson; scarlet"},{"id":4,"kana":"あき","kanji":"秋","eng":"autumn; fall"},{"id":5,"kana":"あめ","kanji":"飴","eng":"candy"},{"id":6,"kana":"あめ","kanji":"雨","eng":"rain"},{"id":7,"kana":"あなた","eng":"you"},{"id":8,"kana":"あね","kanji":"姉","eng":"older sister; elder sister"},{"id":9,"kana":"あに","kanji":"兄","eng":"elder brother; older brother"},{"id":10,"kana":"あの","eng":"that"},{"id":11,"kana":"あお","kanji":"青","eng":"blue; azure"},{"id":12,"kana":"アパート","eng":"apartment"},{"id":13,"kana":"あれ","eng":"that"},{"id":14,"kana":"あさ","kanji":"朝","eng":"morning"},{"id":15,"kana":"あさごはん","kanji":"朝ご飯","eng":"breakfast"},{"id":16,"kana":"あさって","kanji":"明後日","eng":"day after tomorrow"},{"id":17,"kana":"あし","kanji":"足","eng":"foot; leg; paw; arm"},{"id":18,"kana":"あした","kanji":"明日","eng":"tomorrow"},{"id":19,"kana":"あそこ","eng":"over there"},{"id":20,"kana":"あたま","kanji":"頭","eng":"head"},{"id":21,"kana":"あと","kanji":"後","eng":"behind; after; remainder; left; also"},{"id":22,"kana":"ばんごはん","kanji":"晩ご飯","eng":"dinner; evening meal"}]}')},d81d:function(t,n,a){"use strict";var e=a("23e7"),r=a("b727").map,i=a("1dde"),o=a("ae40"),c=i("map"),s=o("map");e({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,n,a){var e=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},f820:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("b-container",[a("b-row",[a("b-col",{staticClass:"about"},[a("h1",[t._v("Jamie Lynn")]),a("p",[t._v(" I built this Japanese study flashcard and quiz app to get back into studying Japanese and to use what I've learned from freecodecamp and udemy. I want to become a better front end developer and understand both Javascript and Japanese better! Thank you for taking a look at my app. If you have any feedback, then please email me at "),a("a",{attrs:{href:"mailto:toby2494@hotmail.com"}},[t._v("toby2494@hotmail.com")])])])],1)],1)},r=[],i=a("2877"),o={},c=Object(i["a"])(o,e,r,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=about.32d2e965.js.map