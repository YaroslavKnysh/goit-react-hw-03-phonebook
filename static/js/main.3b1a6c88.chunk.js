(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),s=(n(18),n(12)),i=n(9),u=n(10),d=n(13),l=n(11),b=(n(5),n(0)),h=function(t){var e=t.contacts,n=t.onDelete;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsxs)("li",{children:[t.name,": ",t.number," ",Object(b.jsx)("button",{type:"button",onClick:function(e){return n(t.id)},children:"Delete"})]},t.id)}))})},j=function(t){var e=t.value,n=t.onChange;return Object(b.jsx)("input",{value:e,onChange:function(t){return n(t.currentTarget.value)},type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})},m=n(7),p=n(6),f=function(t){var e=t.onAddContact,n=t.contacts,a=c.a.useState(""),r=Object(m.a)(a,2),o=r[0],s=r[1],i=c.a.useState(""),u=Object(m.a)(i,2),d=u[0],l=u[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{value:o,onChange:function(t){return s(t.currentTarget.value)},type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),Object(b.jsx)("label",{children:"Number"}),Object(b.jsx)("input",{value:d,onChange:function(t){return l(t.currentTarget.value)},type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),Object(b.jsx)("button",{type:"button",onClick:function(){if(n.find((function(t){return t.name.toLowerCase()===o.toLowerCase()})))return window.alert("".concat(o," is already in contacts"));e({id:Object(p.a)(),name:o,number:d}),s(""),l("")},children:"Add contact"})]})},O=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t}return Object(u.a)(n,[{key:"filterContacts",value:function(){var t=this;return this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))}},{key:"deleteContact",value:function(t){this.setState({contacts:this.state.contacts.filter((function(e){return e.id!==t}))})}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("newContacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("newContacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{onAddContact:function(e){return t.setState({contacts:[].concat(Object(s.a)(t.state.contacts),[e])})},contacts:this.state.contacts}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)("h3",{children:"Find contacts by name"}),Object(b.jsx)(j,{value:this.state.filter,onChange:function(e){return t.setState({filter:e})}}),Object(b.jsx)(h,{contacts:this.filterContacts(),onDelete:function(e){return t.deleteContact(e)}})]})}}]),n}(a.Component);var C=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(O,{})})};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))},5:function(t,e,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.3b1a6c88.chunk.js.map