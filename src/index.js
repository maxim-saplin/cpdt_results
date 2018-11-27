import 'babel-polyfill'
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

let benchmark = false;
let testDb = false;

const benchmarkParam = urlParams.get("benchmark");
const testDbParam = urlParams.get("testdb");
if (benchmarkParam === "true") { benchmark = true; testDb = true; }
else if (testDbParam === "true") testDb = true; 

l18n.init();
document.title = l18n.pageTitle;
db.init(testDb).then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
  if (benchmark){
    document.title = "Running benchmark...";
    runBenchmark();
  }
});


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