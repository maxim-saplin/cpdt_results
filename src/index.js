import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index_dark.css';
import App from './App';
import l18n from './translations';
import db from './data';

const urlParams = new URLSearchParams(window.location.search);
const param = urlParams.get("theme");

if (param !== "white") document.body.className="dark";

l18n.init();
document.title = l18n.pageTitle;
db.init().then(() => ReactDOM.render(<App />, document.getElementById('root')));