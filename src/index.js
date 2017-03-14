import './stylesheets/title.css'
import './stylesheets/paragraph.scss'
import {} from 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

//Clean the above later

import React from "react"
import ReactDOM from "react-dom"

import Hello from "./components/Hello"

const app = document.getElementById('app')

ReactDOM.render(<Hello />, app);


//
// console.log("HELLO");
// // var el = document.getElementById("app");
// // el.innerHTML = "<h1>WORLD!!!</h1><p>Lorem Ipsum Paragraph</p>";
//
// $("#app").html("<h1>World!!</h1>");
// $("#app").append("<p>Lorem Ipsum</p>"+
// '<button class="btn btn-primary" data-toggle="popover" title="Popover Header"' +
// 'data-content="Some content inside the popover">Toggle popover</button>');
//
// console.log($.fn.popover);
// console.log(_.now());
//
// $('[data-toggle="popover"]').popover();
