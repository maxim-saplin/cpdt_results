import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index_dark.css';
import App from './App';
import l18n from './translations';
import db from './data';

const urlParams = new URLSearchParams(window.location.search);
const themeParam = urlParams.get("theme");
if (themeParam !== "white") document.body.className="dark";

const testDbParam = urlParams.get("testdb");
let testDb = false;
if (testDbParam === "true") testDb = true; 

l18n.init();
document.title = l18n.pageTitle;
db.init(testDb).then(() => ReactDOM.render(<App />, document.getElementById('root')));