(this.webpackJsonpreact2=this.webpackJsonpreact2||[]).push([[0],{129:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(15),o=a.n(s),r=a(64),c=a.n(r);class i extends n.Component{render(){return l.a.createElement("div",{className:"title-container"},l.a.createElement("span",{className:"web-logo"},l.a.createElement("span",null,"\u4e4c\u5e15"),l.a.createElement("img",{src:c.a,alt:"logo"})))}}var m=i,u=a(205),p=a(206),d=a(207),h=a(43),v=a(208);const b=v.a.TextArea;class E extends n.Component{constructor(e){super(e),this.valueChange=this.valueChange.bind(this)}valueChange(e){let t=e.target.value,a=this.props.index;this.props.onUpdate(t,a)}render(){let e=this.props.listInfo;return e.auto?l.a.createElement(b,{value:e.value,onChange:this.valueChange,placeholder:e.label,autoSize:e.auto}):l.a.createElement(v.a,{placeholder:e.label,value:e.value,onChange:this.valueChange})}}var C=E;a(129);class g extends n.Component{constructor(e){super(e),this.clipBoard=e=>{let t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.focus(),t.select(),document.execCommand("copy")&&document.execCommand("copy"),t.blur(),document.body.removeChild(t)},this.state={list:[{label:"\u6807\u9898",value:"",auto:!1},{label:"\u76ee\u7684",value:"",auto:{minRows:2,maxRows:5}},{label:"\u60f3\u6cd5\u548c\u601d\u8def",value:"",auto:{minRows:2,maxRows:5}},{label:"\u95ee\u9898\u63cf\u8ff0",value:"",auto:{minRows:2,maxRows:5}},{label:"\u5b9e\u73b0\u4ee3\u7801",value:"",auto:{minRows:2,maxRows:5}}]},this.onUpdate=this.onUpdate.bind(this),this.onCopy=this.onCopy.bind(this)}onUpdate(e,t){let a=this.state.list;a[t].value=e,this.setState({list:a})}onCopy(){let e=this.state.list.reduce((e,t)=>e+="".concat(t.label,":\r\n    ").concat(t.value,"\r\n"),"");this.clipBoard(e)}render(){let e=this.state.list;const t={wrapperCol:{offset:4,span:20}};return l.a.createElement("div",{className:"qtable-container"},l.a.createElement(u.a,null,l.a.createElement(p.a,{span:20,offset:4},l.a.createElement("h3",null,"\u63d0\u95ee\u8868\u683c"))),l.a.createElement(d.a,Object.assign({name:"basic"},{labelCol:{span:4},wrapperCol:{span:20}},{onFinish:this.onCopy}),e.map((e,t)=>l.a.createElement(d.a.Item,{name:e.label,label:e.label,key:e.label},l.a.createElement(C,{listInfo:e,index:t,onUpdate:this.onUpdate}))),l.a.createElement(d.a.Item,t,l.a.createElement(h.a,{type:"primary",htmlType:"submit"},"\u590d\u5236\u5230\u526a\u8d34\u677f"))))}}var w=g;class x extends n.Component{render(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"copyright"},l.a.createElement("a",{href:"http://www.beian.miit.gov.cn/",target:"_blank",rel:"noopener noreferrer"},"\u6d59ICP\u590720016375\u53f7-1")))}}var f=x;class y extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(w,null),l.a.createElement(f,null))}}var R=y;a(202);o.a.render(l.a.createElement(R,null),document.getElementById("root"))},64:function(e,t,a){e.exports=a.p+"static/media/wupa.12945ff3.jpg"},78:function(e,t,a){e.exports=a(203)}},[[78,1,2]]]);
//# sourceMappingURL=main.63db3674.chunk.js.map