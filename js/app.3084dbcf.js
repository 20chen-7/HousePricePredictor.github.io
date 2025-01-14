(function(){"use strict";var t={4138:function(t,e,a){var o=a(5130),n=a(6768);const s={id:"app"};function i(t,e,a,o,i,l){const r=(0,n.g2)("CodingChallenge");return(0,n.uX)(),(0,n.CE)("div",s,[(0,n.bF)(r,{optionsData:i.sampleData},null,8,["optionsData"])])}var l=a(4232);const r={class:"option-profit-calculator"},c={class:"title-box"},d={class:"content"},h={class:"input-row"},u={class:"state"},p={class:"country"},g={class:"date-range"},f={class:"search-btn"},k={class:"toggle-row"},m={class:"chart-row"},b={class:"chart-container"},y={class:"final-row"},C={class:"download-btn-container"};function v(t,e,a,o,s,i){const v=(0,n.g2)("WarningDia"),L=(0,n.g2)("multiselect"),w=(0,n.g2)("VueDatePicker"),D=(0,n.g2)("line-chart");return(0,n.uX)(),(0,n.CE)("div",r,[(0,n.Lk)("div",c,[(0,n.Lk)("h1",null,[e[10]||(e[10]=(0,n.eW)("House Price Predictor ")),((0,n.uX)(),(0,n.CE)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-info-circle intro",viewBox:"0 0 16 16",onClick:e[0]||(e[0]=(...t)=>i.showInstruction&&i.showInstruction(...t))},e[9]||(e[9]=[(0,n.Lk)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},null,-1),(0,n.eW)(),(0,n.Lk)("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"},null,-1)])))]),(0,n.bF)(v,{modelValue:t.showInstructionDialog,"onUpdate:modelValue":e[2]||(e[2]=e=>t.showInstructionDialog=e),title:"Warning"},{header:(0,n.k6)((()=>e[11]||(e[11]=[(0,n.Lk)("h3",null,"House Price Predictor",-1)]))),footer:(0,n.k6)((()=>[(0,n.Lk)("button",{onClick:e[1]||(e[1]=e=>t.showInstructionDialog=!1)},"Dismiss")])),default:(0,n.k6)((()=>[e[12]||(e[12]=(0,n.Lk)("template",null,[(0,n.Lk)("p",null,"1. Based on the details of four type of State and Region, you can select for each option. "),(0,n.Lk)("p",null,"2. Then, you can choose forcast or not according to the data range. "),(0,n.Lk)("p",null,[(0,n.eW)("3. After that, click the "),(0,n.Lk)("strong",null,"Search Icon"),(0,n.eW)(" button, you will get the chart based on your choices, and summary for statics ")]),(0,n.Lk)("p",null,"4. Finially, You can download the chartData as json file.")],-1))])),_:1},8,["modelValue"]),e[13]||(e[13]=(0,n.Lk)("div",{class:"strike-table-intro"},[(0,n.Lk)("p",{class:"strike-intro-para"},"Here is the list of Strike and visualization of the option profit.")],-1))]),(0,n.Lk)("div",d,[(0,n.Lk)("div",h,[(0,n.Lk)("div",u,[e[14]||(e[14]=(0,n.Lk)("label",{class:"typo__label",for:"state"},"States:",-1)),(0,n.bF)(L,{modelValue:s.selectedStates,"onUpdate:modelValue":e[3]||(e[3]=t=>s.selectedStates=t),"tag-placeholder":"Add this as new tag",placeholder:"Select a states",options:s.statesOptions||[],multiple:!0,taggable:!0,onTag:i.addStates,"close-on-select":!1},null,8,["modelValue","options","onTag"])]),(0,n.Lk)("div",p,[e[15]||(e[15]=(0,n.Lk)("label",{class:"typo__label",for:"country"},"Countries:",-1)),(0,n.bF)(L,{modelValue:s.selectedCountry,"onUpdate:modelValue":e[4]||(e[4]=t=>s.selectedCountry=t),"tag-placeholder":"Add this as new tag",placeholder:"Select a country",label:"CountryName","track-by":"CountryName",options:s.countryOptions||[],multiple:!0,taggable:!0,onTag:i.addCountries,"close-on-select":!1},null,8,["modelValue","options","onTag"])]),(0,n.Lk)("div",g,[e[16]||(e[16]=(0,n.Lk)("label",{for:"dateRange"},"Date Range:",-1)),(0,n.bF)(w,{modelValue:s.selectedDateRange,"onUpdate:modelValue":e[5]||(e[5]=t=>s.selectedDateRange=t),placeholder:"Select Monthly Range","month-picker":"",range:"","multi-calendars":""},null,8,["modelValue"])]),(0,n.Lk)("div",f,[(0,n.Lk)("button",{class:"bouncy-focus",onClick:e[6]||(e[6]=t=>i.getPredicted(s.selectedStates,s.selectedCountry,s.selectedDateRange))},e[17]||(e[17]=[(0,n.Lk)("svg",{height:"24",width:"24",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 70 70"},[(0,n.Lk)("g",null,[(0,n.Lk)("path",{d:"M66.829,51.329L56.593,41.093c1.479-3.56,2.248-7.387,2.248-11.282c0-16.222-13.198-29.42-29.421-29.42\n                    C13.198,0.391,0,13.589,0,29.811c0,16.223,13.198,29.421,29.42,29.421c4.318,0,8.518-0.932,12.37-2.724l9.931,9.932\n                    c2.019,2.019,4.701,3.13,7.556,3.13s5.539-1.112,7.557-3.132c2.016-2.015,3.127-4.698,3.127-7.553\n                    C69.96,56.032,68.849,53.348,66.829,51.329z M62.588,62.198c-0.914,0.915-2.113,1.372-3.312,1.372s-2.397-0.457-3.313-1.372\n                    L42.798,49.031c-3.794,2.646-8.403,4.201-13.378,4.201C16.485,53.232,6,42.746,6,29.811s10.485-23.42,23.42-23.42\n                    s23.421,10.485,23.421,23.42c0,4.57-1.314,8.832-3.578,12.438l13.325,13.325C64.418,57.403,64.418,60.369,62.588,62.198z"}),(0,n.Lk)("path",{d:"M29.42,13.061c-9.235,0-16.749,7.514-16.749,16.75s7.514,16.75,16.749,16.75c9.236,0,16.75-7.514,16.75-16.75\n                    S38.656,13.061,29.42,13.061z M29.42,40.561c-5.927,0-10.749-4.822-10.749-10.75s4.822-10.75,10.749-10.75\n                    c5.928,0,10.75,4.822,10.75,10.75S35.348,40.561,29.42,40.561z"})])],-1)]))])]),(0,n.Lk)("div",k,[(0,n.Lk)("div",{class:"toggle-container",onClick:e[7]||(e[7]=t=>s.isPredicted=!s.isPredicted)},[e[18]||(e[18]=(0,n.Lk)("label",{for:"isPredicted"},"Forecast",-1)),(0,n.Lk)("div",{class:(0,l.C4)(["toggle-switch",{active:s.isPredicted}])},[(0,n.Lk)("div",{class:(0,l.C4)(["toggle-knob",{"move-right":s.isPredicted}])},null,2)],2)])]),(0,n.Lk)("div",m,[(0,n.Lk)("div",b,[s.chartData.labels&&s.chartData.datasets.length?((0,n.uX)(),(0,n.Wv)(D,{key:0,data:s.chartData,options:s.options,onClick:i.onLineChartClick},null,8,["data","options","onClick"])):(0,n.Q3)("",!0)])]),(0,n.Lk)("div",y,[(0,n.Lk)("div",C,[s.chartData.labels&&s.chartData.datasets.length?((0,n.uX)(),(0,n.CE)("button",{key:0,class:"download-btn",onClick:e[8]||(e[8]=t=>i.downloadChartData())},"Download Data")):(0,n.Q3)("",!0)])])])])}a(4114),a(8992),a(1454),a(7550),a(4603),a(7566),a(8721);var L=a(1010),w=a(17),D=a(8784);const S={class:"dialog-header"},P={class:"dialog-body"},_={class:"dialog-footer"};function O(t,e,a,s,i,r){return a.visible?((0,n.uX)(),(0,n.CE)("div",{key:0,class:"dialog-overlay",onClick:e[2]||(e[2]=(...t)=>r.close&&r.close(...t))},[(0,n.Lk)("div",{class:(0,l.C4)(["dialog-content",t.dialogClass]),onClick:e[1]||(e[1]=(0,o.D$)((()=>{}),["stop"]))},[(0,n.Lk)("header",S,[(0,n.RG)(t.$slots,"header",{},(()=>[(0,n.Lk)("h3",null,(0,l.v_)(a.title),1)]),!0)]),(0,n.Lk)("section",P,[(0,n.RG)(t.$slots,"default",{},(()=>[e[3]||(e[3]=(0,n.eW)(" Default body content "))]),!0)]),(0,n.Lk)("footer",_,[(0,n.RG)(t.$slots,"footer",{},(()=>[(0,n.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>r.close&&r.close(...t))},"Close")]),!0)])],2)])):(0,n.Q3)("",!0)}var x={props:{title:{type:String,default:"Dialog Title"},visible:{type:Boolean,default:!1},type:{type:String,default:"default"}},methods:{close(){this.$emit("update:visible",!1)}}},R=a(1241);const A=(0,R.A)(x,[["render",O],["__scopeId","data-v-39cfb170"]]);var E=A,T=a(2638),j=a(9093);w.t1.register(w.hE,w.m_,w.s$,w.No,w.FN,w.kc,w.PP,D.Ay);var z={name:"CodingChallenge",props:{},components:{LineChart:L.N1,WarningDia:E,Multiselect:T.Ay,VueDatePicker:j.A},data(){return console.log("here"),{chartData:{},statesOptions:["CO","CA"],countryOptions:[{CountryName:"Denver",StateName:"CO"}],selectedStates:[],selectedCountry:[],selectedDateRange:[],predictions:[],options:{},loaded:!1,isPredicted:!1,barChartData:null}},methods:{toggle(){this.isPredicted=!this.isPredicted},fetchStates(){fetch("http://localhost:5001/getStates",{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"}).then((t=>t.json())).then((t=>{this.statesOptions=t})).catch((t=>console.error("Error fetching States:",t)))},addStates(t){this.selectedStates.push(t)},addCountries(t){const e=this.countryOptions.some((e=>e.countryName===t));this.selectedCountry.push({StateName:e,CountryName:t})},fetchCountries(){this.selectedStates.length>0&&fetch("http://localhost:5001/get_countries",{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:JSON.stringify({selectedStates:this.selectedStates})}).then((t=>t.json())).then((t=>{this.countryOptions=t})).catch((t=>console.error("Error fetching country data:",t)))},fetchPredictions(){fetch("http://localhost:5001/predict",{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:JSON.stringify({selectedCountry:this.selectedCountry,selectedDateRange:this.selectedDateRange,isPredicted:this.isPredicted})}).then((t=>t.json())).then((t=>{console.log("predictions fetch",t.predictions),this.predictions=t.predictions,this.generateChartData(t.predictions)})).catch((t=>console.error("Error fetching country data:",t)))},getPredicted(){this.fetchPredictions(),this.loaded=!this.loaded},getRandomColor(){const t="0123456789ABCDEF";let e="#";for(let a=0;a<6;a++)e+=t[Math.floor(16*Math.random())];return e},generateChartData(t){if(this.selectedCountry.length>0){const e=this.selectedCountry.map((({CountryName:t,StateName:e,SizeRank:a})=>`${t},${e},${a}`)),a=t.map(((t,a)=>({label:e[a],data:t.map((t=>t.PredictedPrice)),borderColor:this.getRandomColor(),backgroundColor:"rgba(75, 192, 192, 0.2)",fill:!0}))),o=t[0].map((t=>t.Date));this.chartData={labels:o,datasets:a},this.options={responsive:!0,maintainAspectRatio:1.5,scales:{x:{grid:{display:!0,color:"rgba(211, 211, 211, 1)",lineWidth:.5},ticks:{color:"rgba(211, 211, 211, 1)",font:{size:14,weight:"bold"},padding:10,autoSkip:!0,maxRotation:45,minRotation:0}},y:{grid:{display:!0,color:"rgba(211, 211, 211, 1)",lineWidth:.5},ticks:{color:"rgba(211, 211, 211, 1)",font:{size:14,weight:"bold"},padding:10,autoSkip:!0,maxRotation:45,minRotation:0}}},plugins:{legend:{labels:{color:"black"}},title:{display:!0,text:"House Price vs Date Graph",color:"black",font:{size:"20vmin"}},zoom:{zoom:{wheel:{enabled:!0,modifierKey:"ctrl"},pinch:{enabled:!0},drag:{enabled:!0}}}}}}else console.error("Empty Countries Selected!")},downloadChartData(){const t=this.chartData,e=JSON.stringify(t),a=new Blob([e],{type:"application/json"}),o=document.createElement("a");o.href=URL.createObjectURL(a),o.download="chartData.json",o.click()},onLineChartClick(t){const e=this.$refs.lineChart.chart.getElementsAtEventForMode(t,"nearest",{intersect:!0},!1);if(e.length>0){const t=e[0].index,a=this.lineChartData.labels[t];this.updateBarChart(a)}},updateBarChart(t){console.log("barchart",this.chartData.dataset,t)},summary(){if(!this.chartData.datasets.length)return[];this.summaryArray=this.chartData.datasets.map((t=>{if(Array.isArray(t.data)&&t.data.length)return{label:t.label,maxProfit:Math.max(...t.data),maxLoss:Math.min(...t.data),breakEvenPoint:t.breakEvenPoint}}))},showInstruction(){this.showInstructionDialog=!0}},mounted(){this.fetchStates()},watch:{selectedStates(){console.log("states"),this.countryOptions=this.fetchCountries()}}};const N=(0,R.A)(z,[["render",v],["__scopeId","data-v-074f7cbe"]]);var M=N,V={name:"App",components:{CodingChallenge:M},data(){return{sampleData:[{strike_price:100,type:"Call",bid:10.05,ask:12.04,long_short:"long",expiration_date:"2025-12-17T00:00:00Z"},{strike_price:102.5,type:"Call",bid:12.1,ask:14,long_short:"long",expiration_date:"2025-12-17T00:00:00Z"},{strike_price:103,type:"Put",bid:14,ask:15.5,long_short:"short",expiration_date:"2025-12-17T00:00:00Z"},{strike_price:105,type:"Put",bid:16,ask:18,long_short:"long",expiration_date:"2025-12-17T00:00:00Z"}]}}};const F=(0,R.A)(V,[["render",i]]);var W=F;(0,o.Ef)(W).mount("#app")}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,o,n,s){if(!o){var i=1/0;for(d=0;d<t.length;d++){o=t[d][0],n=t[d][1],s=t[d][2];for(var l=!0,r=0;r<o.length;r++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](o[r])}))?o.splice(r--,1):(l=!1,s<i&&(i=s));if(l){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[o,n,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,s,i=o[0],l=o[1],r=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(r)var d=r(a)}for(e&&e(o);c<i.length;c++)s=i[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(d)},o=self["webpackChunkhouse_price_predictor"]=self["webpackChunkhouse_price_predictor"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(4138)}));o=a.O(o)})();
//# sourceMappingURL=app.3084dbcf.js.map