(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,s){e.exports=s(346)},342:function(e,t,s){},344:function(e,t,s){},346:function(e,t,s){"use strict";s.r(t);s(135),s(337);var n,r,a=s(2),i=s.n(a),c=s(71),o=s.n(c),l=(s(342),s(344),s(34)),d=s(35),u=s(37),m=s(36),h=s(38),p=s(10),f={pageTitle:"CPDT: \u0411\u0430\u0437\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432",title:"CPDT. \u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 SSD/HDD",subTitle:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432",seqWrite:"[\u041f]\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c",seqRead:"[\u041f]\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0447\u0442\u0435\u043d\u0438\u0435",randWrite:"[\u041f]\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c (4\u041a\u0411)",randRead:"[\u041f]\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0447\u0442\u0435\u043d\u0438\u0435 (4\u041a\u0411)",memCopy:"[\u041a]\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043c\u044f\u0442\u0438",seqWrite_s:"[\u041f]\u043e\u0441\u043b. \u0437\u0430\u043f\u0438\u0441\u044c",seqRead_s:"[\u041f]\u043e\u0441\u043b. \u0447\u0442\u0435\u043d\u0438\u0435",randWrite_s:"[\u041f]\u0440\u043e\u0438\u0437\u0432. \u0437\u0430\u043f\u0438\u0441\u044c (4\u041a\u0411)",randRead_s:"[\u041f]\u0440\u043e\u0438\u0437\u0432. \u0447\u0442\u0435\u043d\u0438\u0435 (4\u041a\u0411)",memCopy_s:"[\u041a]\u043e\u043f. \u043f\u0430\u043c\u044f\u0442\u0438",seqWrite_f:"\u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c",seqRead_f:"\u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0447\u0442\u0435\u043d\u0438\u0435",randWrite_f:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c (4\u041a\u0411)",randRead_f:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0447\u0442\u0435\u043d\u0438\u0435 (4\u041a\u0411)",memCopy_f:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043c\u044f\u0442\u0438",throughput:"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u0430\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c",nothingToShow:"Nothing to show",Android:"[A]ndroid",macOS:"mac[O]S",Windows:"[W]indows",all:"\u0412\u0441\u0435",mbps:"\u041c\u0411/\u0441",gbps:"\u0413\u0411/\u0441"},y={helloWorld:"Bonjour!"},v={pageTitle:"CPDT: Results Database",title:"CPDT SSD/HDD Benchmark",subTitle:"Performance Chart",seqWrite:"[S]equential write",seqRead:"[S]equential read",randWrite:"[R]andom write (4KB)",randRead:"[R]andom read (4KB)",memCopy:"[M]emory copy",seqWrite_s:"[S]eq. write",seqRead_s:"[S]eq. read",randWrite_s:"[R]and. write (4KB)",randRead_s:"[R]and. read (4KB)",memCopy_s:"[M]em. copy",seqWrite_f:"Sequential write",seqRead_f:"Sequential read",randWrite_f:"Random write (4KB)",randRead_f:"Random read (4KB)",memCopy_f:"Memory copy",throughput:"Throughput",nothingToShow:"Nothing to show",Android:"[A]ndroid",macOS:"mac[O]S",Windows:"[W]indows",all:"All",mbps:"MB/s",gbps:"GB/s",init:function(){var e,t=new URLSearchParams(window.location.search).get("lang"),s="en";(s=t?t.toLocaleLowerCase():navigator.language.toLowerCase()).includes("ru")?e=f:s.includes("fr")&&(e=y),e&&Object.keys(v).forEach(function(t){e[t]&&(v[t]=e[t])})}},k=v,g=function(e){function t(e){var s;return Object(l.a)(this,t),(s=Object(u.a)(this,Object(m.a)(t).call(this,e))).toggle=s.toggle.bind(Object(p.a)(Object(p.a)(s))),s.selectAll=s.selectAll.bind(Object(p.a)(Object(p.a)(s))),s.keyPress=s.keyPress.bind(Object(p.a)(Object(p.a)(s))),s}return Object(h.a)(t,e),Object(d.a)(t,[{key:"toggle",value:function(e){return this.props.selectedKey.includes(e)?this.props.selectedKey.length>1?this.props.selectedKey.filter(function(t){return t!==e}):this.props.selectedKey:(this.props.selectedKey.push(e),this.props.selectedKey)}},{key:"selectAll",value:function(){return this.props.items.map(function(e){return e.key})}},{key:"keyPress",value:function(e){if(document.activeElement instanceof HTMLBodyElement&&this.shortcuts.has(e.key)){var t=this.shortcuts.get(e.key);if(Array.isArray(t)){for(var s=t[0].key,n=0;n<t.length;n++)t[n].key===this.props.selectedKey&&n+1<t.length&&(s=t[n+1].key);this.props.itemClick(s)}else Array.isArray(this.props.selectedKey)?this.props.itemClick(this.toggle(t.key)):t.key!==this.props.selectedKey&&this.props.itemClick(t.key)}}},{key:"componentWillUnmount",value:function(){this.keyPressSubscribed&&document.removeEventListener("keypress",this.keyPress)}},{key:"initShortcuts",value:function(){for(var e in this.prevItems=this.props.items,this.shortcuts=new Map,this.prevItems)if(this.prevItems[e].shortcut)if(this.shortcuts.has(this.prevItems[e].shortcut)){var t=this.shortcuts.get(this.prevItems[e].shortcut);if(Array.isArray(t))t.push(this.prevItems[e]);else{var s=[t,this.prevItems[e]];this.shortcuts.set(this.prevItems[e].shortcut,s)}}else this.shortcuts.set(this.prevItems[e].shortcut,this.prevItems[e]);this.shortcuts.size>0?(document.addEventListener("keypress",this.keyPress),this.keyPressSubscribed=!0):this.keyPressSubscribed&&(document.removeEventListener("keypress",this.keyPress),this.keyPressSubscribed=!1)}},{key:"updateShortcuts",value:function(){this.prevItems?this.prevItems!==this.props.items&&this.initShortcuts():this.initShortcuts()}},{key:"render",value:function(){var e=this;return this.updateShortcuts(),this.props.items?i.a.createElement("ul",null,Array.isArray(this.props.selectedKey)?this.props.items.map(function(t){return i.a.createElement("li",{key:t.key,className:e.props.selectedKey.includes(t.key)?"selected":null,onClick:function(){return e.props.itemClick(e.toggle(t.key))}},t.name)}):this.props.items.map(function(t){return i.a.createElement("li",{key:t.key,className:e.props.selectedKey===t.key?"selected":null,onClick:function(){return e.props.itemClick(t.key)}},t.name)}),this.props.selectAll&&i.a.createElement("li",{onClick:function(){return e.props.itemClick(e.selectAll())}},k.all)):null}}]),t}(a.Component),b=function(e){function t(e){var s;return Object(l.a)(this,t),(s=Object(u.a)(this,Object(m.a)(t).call(this,e))).textChanged=s.textChanged.bind(Object(p.a)(Object(p.a)(s))),s.state={extraSpaces:!0,blink:!1},s.textInput=i.a.createRef(),s}return Object(h.a)(t,e),Object(d.a)(t,[{key:"textChanged",value:function(e){this.props.searchChanged&&this.props.searchChanged(e.target.innerText),e.target.innerText&&this.state.extraSpaces?this.setState({extraSpaces:!1}):e.target.innerText||this.state.extraSpaces||this.setState({extraSpaces:!0})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"searchBox"},i.a.createElement("span",{contentEditable:"true",ref:this.textInput,onInput:this.textChanged,onFocus:function(){e.setState({blink:!0})},onBlur:function(){e.setState({blink:!1})}}),i.a.createElement("span",{className:this.state.blink?"blink":"",onClick:function(){e.textInput.current.focus()}},!this.state.blink&&this.state.extraSpaces&&"\xa0\xa0\xa0\xa0","_"),"</")}}]),t}(a.PureComponent),C=/[^\[]+(?=\])/;function S(e){return e.map(function(e){var t={key:e,name:k[e]?k[e]:e,shortcut:null};return function(e){var t=e.name.match(C);t&&1===t.length&&(e.shortcut=t[0].toLowerCase())}(t),t})}var w={getTests:function(){return r||(r=S(this.data.tests)),r},getPlatforms:function(){return n||(n=S(this.data.platforms)),n}},R={getResults:function(e,t,s){var n=this.data.results;if(e&&Array.isArray(e)&&(n=n.filter(function(t){return e.includes(t.platform)})),s&&(n=n.filter(function(e){return e.device.toLowerCase().includes(s.toLowerCase())})),t&&(n.sort(function(e,s){return s[t]-e[t]}),n.length>0))for(var r=n[0][t],a=0;a<n.length;a++)n[a].percent=n[a][t]/r;return n}},O="https://raw.githubusercontent.com/maxim-saplin/cpdt_results/master/Results.json",j={dictionaries:w,results:R,init:function(e){var t=this,s=function(){return new Promise(function(e){fetch("https://raw.githubusercontent.com/maxim-saplin/cpdt_results/master/Results_version.json",{cache:"no-store"}).then(function(e){return e.json()}).then(function(s){a.setItem("cpdt_db_version",s.v),t.version=s.v,e(s.v)})})},n=function(){return new Promise(function(e){fetch(O,{cache:"no-store"}).then(function(e){return e.json()}).then(function(t){a.setItem("cpdt_db",JSON.stringify(t)),w.data=t,R.data=t,e(t)})})},r=null,a=window.localStorage;e&&(O="https://raw.githubusercontent.com/maxim-saplin/cpdt_results/master/Results_test.json",a.setItem("cpdt_db_version","test"));var i=a.getItem("cpdt_db");if(i){try{i=JSON.parse(i)}catch(o){}i.results||(i=null)}var c=a.getItem("cpdt_db_version");return i?r=new Promise(function(t){s().then(function(s){e&&a.setItem("cpdt_db_version","test"),s!==c?n().then(function(e){return t(e)}):(w.data=i,R.data=i,t(i))})}):(s(),r=n()),r},initFake:function(){w.data={results:[{id:"1",device:"Xiaomi Mi8 SE",platfrom:"Android",deviceDetail:"Snapdragon 710, 64GB",deviceComment:"",deviceYear:"2018",dateTested:"23.10.2018",seqWrite:"110",seqRead:"299",randWrite:"18,9",randRead:"9,5",memCopy:"4,65"},{id:"2",device:"Samsung Galaxy S9",platfrom:"Android",deviceDetail:"Exynos 9810, 64Gb",deviceComment:"",deviceYear:"2018",dateTested:"04.10.2018",seqWrite:"118",seqRead:"654",randWrite:"1,72",randRead:"14,43",memCopy:"12,7"},{id:"3",device:"Essential Phone PH-1",platfrom:"Android",deviceDetail:"Snapdragon 835, 128GB",deviceComment:"",deviceYear:"2017",dateTested:"30.09.2018",seqWrite:"125",seqRead:"440",randWrite:"4,3",randRead:"17,4",memCopy:"6,6"},{id:"4",device:'15" MacBook Pro',platfrom:"macOS",deviceDetail:"macOS, APFS",deviceComment:"",deviceYear:"2018",dateTested:"03.10.2018",seqWrite:"1331,2",seqRead:"2088,96",randWrite:"75",randRead:"38",memCopy:"10,3"},{id:"5",device:'15" MacBook Pro',platfrom:"macOS",deviceDetail:"macOS, NTFS partition",deviceComment:"",deviceYear:"2018",dateTested:"03.10.2018",seqWrite:"730",seqRead:"694",randWrite:"27",randRead:"8",memCopy:"10,3"},{id:"6",device:'15" MacBook Pro',platfrom:"Windows",deviceDetail:"Windows 10 Bootcamp, NTFS",deviceComment:"",deviceYear:"2018",dateTested:"03.10.2018",seqWrite:"343",seqRead:"1617,92",randWrite:"0,5625",randRead:"11,01",memCopy:"8,5"},{id:"7",device:'15" MacBook Pro',platfrom:"Windows",deviceDetail:"Windows 10, VMWare Fusion, NTFS",deviceComment:"",deviceYear:"2018",dateTested:"03.10.2018",seqWrite:"850",seqRead:"2457,6",randWrite:"12",randRead:"29",memCopy:"5,8"}],platforms:["Android","macOS","Windows"],tests:["seqWrite","seqRead","randWrite","randRead","memCopy"]},R.data=w.data}},T=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"getAllResults",value:function(e){for(var t=k.throughput+"\n",s=j.dictionaries.getTests(),n=0;n<s.length;n++)t+=k[s[n].key+"_f"]+": "+e[s[n].key]+" ",t+="memCopy"===s[n].key?k.gbps:k.mbps,n!==s.length-1&&(t+="\n");return t}},{key:"render",value:function(){var e=this,t=j.results.getResults(this.props.selectedPlatforms,this.props.selectedTest,this.props.device);return t&&t.length>0?t.map(function(t){return i.a.createElement("div",{key:t.id,className:"item",title:e.getAllResults(t)},i.a.createElement("span",{className:"leftColumn"},t.device,i.a.createElement("br",null),i.a.createElement("span",{className:"greyed"},t.deviceYear,", ",t.deviceDetail)),i.a.createElement("span",{className:"rightColumn"},i.a.createElement("span",{style:{width:80*t.percent+"%"}},t[e.props.selectedTest]," ","memCopy"===e.props.selectedTest?k.gbps:k.mbps)))}):k.nothingToShow}}]),t}(a.Component),W=function(e){function t(e){var s;return Object(l.a)(this,t),(s=Object(u.a)(this,Object(m.a)(t).call(this,e))).platformClick=s.platformClick.bind(Object(p.a)(Object(p.a)(s))),s.testClick=s.testClick.bind(Object(p.a)(Object(p.a)(s))),s.searchChanged=s.searchChanged.bind(Object(p.a)(Object(p.a)(s))),s.state={selectedTest:j.dictionaries.getTests()[0].key,selectedPlatforms:j.dictionaries.getPlatforms().map(function(e){return e.key}),device:""},s}return Object(h.a)(t,e),Object(d.a)(t,[{key:"testClick",value:function(e){this.setState({selectedTest:e})}},{key:"platformClick",value:function(e){this.setState({selectedPlatforms:e})}},{key:"searchChanged",value:function(e){this.setState({device:e})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,k.title,": "),i.a.createElement("h2",null,k.subTitle),i.a.createElement(g,{itemClick:this.testClick,selectedKey:this.state.selectedTest,items:j.dictionaries.getTests()}),i.a.createElement(g,{itemClick:this.platformClick,selectedKey:this.state.selectedPlatforms,items:j.dictionaries.getPlatforms(),selectAll:!0}),i.a.createElement(b,{searchChanged:this.searchChanged}),i.a.createElement("br",null),i.a.createElement(T,{selectedTest:this.state.selectedTest,selectedPlatforms:this.state.selectedPlatforms,device:this.state.device}))}}]),t}(a.Component),E=new URLSearchParams(window.location.search);"white"!==E.get("theme")&&(document.body.className="dark");var P=!1,_=!1,q=E.get("benchmark"),A=E.get("testdb");"true"===q?(P=!0,_=!0):"true"===A&&(_=!0),k.init(),document.title=k.pageTitle,j.init(_).then(function(){o.a.render(i.a.createElement(W,null),document.getElementById("root")),P&&(document.title="Running benchmark...",function(){for(var e=performance.now(),t=0;t<5;t++)o.a.render(i.a.createElement("span",null,"Swap"),document.getElementById("root")),o.a.render(i.a.createElement(W,null),document.getElementById("root"));var s="Rendering page took on average: "+((performance.now()-e)/5).toFixed(2)+"ms";document.title="Becnchmark completed. "+s,alert(s)}())})}},[[134,2,1]]]);
//# sourceMappingURL=main.94b1ce04.chunk.js.map