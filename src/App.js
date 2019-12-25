import React, { Component } from 'react'
import ReactSwipeEvents from 'react-swipe-events'
import l18n from './translations'
import PressableLink from './PressableLink'
import ListSelector from './ListSelector'
import Search from './Search'
import TestResults from './TestResults'
import Hint from './Hint'
import AboutEn from './AboutEn'
import AboutRu from './AboutRu'
import AboutFr from './AboutFr'
import db from './data'

class App extends Component {
  constructor(props) {
    super(props);

    this.platformClick = this.platformClick.bind(this);
    this.testClick = this.testClick.bind(this);
    this.searchChanged = this.searchChanged.bind(this);
    this.resultSelected = this.resultSelected.bind(this);
    this.selectedIdRemoved = this.selectedIdRemoved.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.swipe = this.swipe.bind(this);
    this.wpf = "wpf";
    this.android = "android";
    this.macos = "macos";

    this.urlParams = new URLSearchParams(window.location.search ? window.location.search : "");
    
    this.selectedIdsParam = "selected";
    this.aboutParam = "about";
    this.showDownloadParam = "download";
    this.qParam = "q";
    this.inappParam = "inapp";

    let selectedResultIds = this.getSelectedIdsFromParam()
    let inAppPlatform = this.urlParams.get(this.inappParam) ? this.urlParams.get(this.inappParam).toLocaleLowerCase() : null;
    let selectedPlatforms = db.dictionaries.getPlatforms().map(p => p.key);
    let q = this.urlParams.get(this.qParam) ? this.urlParams.get(this.qParam).toLocaleLowerCase() : null;

    ({ selectedPlatforms, selectedResultIds } = this.inAppAdjustments(inAppPlatform, selectedPlatforms, selectedResultIds));

    this.state = {
      selectedTest: db.dictionaries.getTests()[0].key,
      selectedResultIds: selectedResultIds,
      inAppPlatform: inAppPlatform,
      selectedPlatforms: selectedPlatforms,
      device: q,
      showAbout: this.urlParams.has(this.aboutParam),
      showDownload: this.urlParams.has(this.showDownloadParam)
    };

    this.title = this.urlParams.get("ttl") ? decodeURIComponent(this.urlParams.get("ttl")) : null;

    this.renderCounter = 0;
  }

  inAppAdjustments(inAppPlatform, selectedPlatforms, selectedResultIds) {
    if (inAppPlatform) {
      if (inAppPlatform === this.wpf) selectedPlatforms = [db.dictionaries.Windows];
      else if (inAppPlatform === this.android) selectedPlatforms = [db.dictionaries.Android];
      else if (inAppPlatform === this.macos) selectedPlatforms = [db.dictionaries.macOS];
      let yourDevice = this.urlParams.get("yd");
      if (yourDevice) {
        let yd = null;
        try {
          yd = JSON.parse(yourDevice);
          if (yd) {
            yd.platform = selectedPlatforms[0];
            db.results.addYourDeviceResult(yd);
          }
          selectedResultIds = [db.results.yourDeviceId];
        }
        catch { }
      }
    }
    return { selectedPlatforms, selectedResultIds };
  }

  getSelectedIdsFromParam(){
    let param = this.urlParams.get(this.selectedIdsParam);
    let ids = [];

    if (param) {
      let split = param.split(",");
      
      for (let i = 0; i < split.length; i++){
        let id = parseInt(split[i]);
        if (Number.isInteger(id) && db.results.idExists(id) && !ids.includes(id)){
          ids.push(id);
        }
      }
    }

    return ids;
  }

  addSelectedIdsToParam(ids){
    if (ids.length > 0){ 
      let param = "";

      for (let i = 0; i < ids.length; i++) {
        param += ids[i];
        if (i !== ids.length-1) param+=",";
      }

      this.urlParams.set(this.selectedIdsParam, param);
    }
    else {
      this.urlParams.delete(this.selectedIdsParam);
    }
    window.history.replaceState({},null,"?"+this.urlParams.toString());
  }

  testClick(key){
    this.setState({selectedTest: key, swipeHint: true});
  }

  swipe(left){
    let t = db.dictionaries.getTests();
    let i = 0;

    for (i; i < t.length; i++){
      if (t[i].key === this.state.selectedTest) break;
    }

    if (left) i++; else i--;

    if (i < 0) i = t.length-1;
    else if (i >= t.length) i = 0;
    
    this.setState({selectedTest: t[i].key, swipeHint: true});
  }

  platformClick(key){
    this.setState({selectedPlatforms: key});
  }

  searchChanged(val){
    this.setState({device: val});
  }

  resultSelected(resultId, clearDevice){
    let selectedResultIds = this.state.selectedResultIds;
    selectedResultIds.push(resultId);
    if (clearDevice) {
      this.setState({device: ""});
    }
    this.setSelectedIds(selectedResultIds);
  }

  setSelectedIds(selectedResultIds) {
    this.setState({ selectedResultIds: selectedResultIds });
    this.addSelectedIdsToParam(selectedResultIds);
  }

  selectedIdRemoved(id){
    let selectedResultIds = this.state.selectedResultIds;
    selectedResultIds = selectedResultIds.filter(i => i !== id);
    this.setSelectedIds(selectedResultIds);
  }

  setTitle(title){
    document.title = title;
  }

  toggleAbout(){
    let showAbout = !(this.state.showAbout || this.state.showDownload);

    this.setState({showAbout: showAbout, showDownload: false});

    if (showAbout) this.urlParams.set(this.aboutParam, "");
    else {
      this.urlParams.delete(this.aboutParam);
      this.urlParams.delete(this.showDownloadParam);
    }

    window.history.replaceState({},null,"?"+this.urlParams.toString());
  }

  render() {
    let stl = this.setTitle;

    if (this.title){ // TestResults can change title, upon first load override title with the value from parm
      stl(this.title);
      this.title = null;
      stl = null;
    }
    else {
      if (this.state.showAbout) this.setTitle(l18n.aboutTitle);
      else if (this.state.showDownload) this.setTitle(l18n.downloadTitle);
      else this.setTitle(l18n.title);
    }

    this.renderCounter++;

    let helpLinkClass = "leftCorner";
    if (this.state.inAppPlatform) helpLinkClass +=" inapp";
    if (this.renderCounter < 2 ) helpLinkClass +=" textColorVibration";

    return (
      !this.state.showAbout && !this.state.showDownload ?
      <ReactSwipeEvents id="swipe" onSwipedLeft={() => this.swipe(true)} onSwipedRight={() => this.swipe(false)} threshold={75}>
        <>
          <div className={this.state.inAppPlatform !== this.wpf ? "pad" : null}>
            {!this.state.inAppPlatform && <h1>{l18n.title}: </h1>}
            {!this.state.inAppPlatform && <h2>{l18n.subTitle}</h2>}
            <PressableLink className={helpLinkClass} onClick={this.toggleAbout}>[?]</PressableLink>
            
            <ListSelector itemClick={this.platformClick} selectedKey={this.state.selectedPlatforms} 
              items={db.dictionaries.getPlatforms()} selectAll={true} />
            <ListSelector itemClick={this.testClick} selectedKey={this.state.selectedTest} 
              items={db.dictionaries.getTests()} />
            <Search searchChanged={this.searchChanged} enterPressed={this.resultSelected} value={this.state.device}/>
            <br/>
            <TestResults 
              selectedTest={this.state.selectedTest}
              selectedPlatforms={this.state.selectedPlatforms}
              selectedResultIds={this.state.selectedResultIds}
              selectedIdRemoved={this.selectedIdRemoved}
              resultSelected={this.resultSelected}
              device={this.state.device}
              setTitle={stl}
            />        
          </div>
          {'ontouchstart' in window && this.state.swipeHint && <Hint>{l18n.hintSwipe}</Hint>}
        </>
      </ReactSwipeEvents>
      : l18n.locale === l18n.ruLocale 
        ? <AboutRu toggleAbout={this.toggleAbout} linkClass={helpLinkClass} inApp={this.state.inAppPlatform != null} download={this.state.showDownload}/> 
        : (l18n.locale === l18n.frLocale 
          ? <AboutFr toggleAbout={this.toggleAbout} linkClass={helpLinkClass} inApp={this.state.inAppPlatform != null} download={this.state.showDownload}/> 
          : <AboutEn toggleAbout={this.toggleAbout} linkClass={helpLinkClass} inApp={this.state.inAppPlatform != null} download={this.state.showDownload}/>));
  }
}

export default App;