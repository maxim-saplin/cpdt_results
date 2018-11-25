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

    this.state = {
      selectedTest: db.dictionaries.getTests()[0].key,
      selectedPlatforms: db.dictionaries.getPlatforms().map(p => p.key),
      device: ""
    };
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

  render() {
    return (
      <div>
        <h1>{l18n.title}: </h1>
        <h2>{l18n.subTitle}</h2>
        <ListSelector itemClick={this.testClick} selectedKey={this.state.selectedTest} 
          items={db.dictionaries.getTests()} />
        <ListSelector itemClick={this.platformClick} selectedKey={this.state.selectedPlatforms} 
          items={db.dictionaries.getPlatforms()} selectAll={true} />
        <Search searchChanged={this.searchChanged}/>
        <br/>
        <TestResults 
          selectedTest={this.state.selectedTest}
          selectedPlatforms={this.state.selectedPlatforms}
          device={this.state.device}
        />
      </div>
    );
  }
}

export default App;