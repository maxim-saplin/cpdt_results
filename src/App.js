import React, { Component } from 'react';
import l18n from './translations';
import ListSelector from './ListSelector'
import Search from './Search'
import TestResults from './TestResults'
import db from './data';

class App extends Component {
  constructor(props) {
    super(props);

    this.platformClick = this.platformClick.bind(this);
    this.testClick = this.testClick.bind(this);
    this.searchChanged = this.searchChanged.bind(this);
    this.resultSelected = this.resultSelected.bind(this);
    this.selectedIdRemoved = this.selectedIdRemoved.bind(this);

    this.urlParams = new URLSearchParams(window.location.search ? window.location.search : "");
    this.selectedIdsParam = "selected";

    this.state = {
      selectedTest: db.dictionaries.getTests()[0].key,
      selectedPlatforms: db.dictionaries.getPlatforms().map(p => p.key),
      selectedResultIds: this.getSelectedIdsFromParam(),
      inApp: this.urlParams.get("inapp") !== null,
      device: ""
    };
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
    //window.location.hash = this.urlParams.toString();
  }

  testClick(key){
    this.setState({selectedTest: key});
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

  render() {
    return (
      <div>
        {!this.state.inApp && <h1>{l18n.title}: </h1>}
        {!this.state.inApp && <h2>{l18n.subTitle}</h2>}
        {this.state.inApp && <ListSelector className="close" itemClick={() => window.location.search += "&close"} 
          items={[{name:l18n.close, shortcut:"c", key:"0"}]} />}
        <ListSelector itemClick={this.testClick} selectedKey={this.state.selectedTest} 
          items={db.dictionaries.getTests()} />
        <ListSelector itemClick={this.platformClick} selectedKey={this.state.selectedPlatforms} 
          items={db.dictionaries.getPlatforms()} selectAll={true} />
        <Search searchChanged={this.searchChanged} enterPressed={this.resultSelected}/>
        <br/>
        <TestResults 
          selectedTest={this.state.selectedTest}
          selectedPlatforms={this.state.selectedPlatforms}
          selectedResultIds={this.state.selectedResultIds}
          selectedIdRemoved={this.selectedIdRemoved}
          resultSelected={this.resultSelected}
          device={this.state.device}
        />
      </div>
    );
  }
}

export default App;