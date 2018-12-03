import 'babel-polyfill';
import 'url-search-params-polyfill';
import 'whatwg-fetch'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index_dark.css';
import App from './App';
import l18n from './translations';
import db from './data';

let benchmark = false;
let testDb = false;
let themeParam = null;

initParams(); 
start();

function start(){
  l18n.init();
  document.title = l18n.pageTitle;
  if (themeParam !== "white") document.body.className="dark";

  db.init(testDb).then(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
    if (benchmark){
      document.title = "Running benchmark...";
      runBenchmark();
    }
  });
}

function initParams(){
  const urlParams = new URLSearchParams(window.location.search);
  themeParam = urlParams.get("theme");
  if (urlParams.get("benchmark") === "true") { benchmark = true; testDb = true; }
  else if (urlParams.get("testdb") === "true") testDb = true
}

function runBenchmark(){
  let t1 = performance.now();
  const repeats = 5;
  for (var i = 0; i < repeats; i++){
    ReactDOM.render(<span>Swap</span>, document.getElementById('root'))
    ReactDOM.render(<App />, document.getElementById('root'))
  }
  let t2 = performance.now();

  let result = "Rendering page took on average: " + ((t2-t1)/repeats).toFixed(2) + "ms";
  document.title = "Becnchmark completed. " + result;
  alert(result);
}