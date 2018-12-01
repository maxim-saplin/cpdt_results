import React, { Component } from 'react';
import l18n from './translations';
import db from './data';

class TestResults extends Component {
  constructor(props) {
    super(props);

    this.onKeyUp = this.onKeyUp.bind(this);
  }

  getAllResults(result) {
    let text = l18n.throughput + "\x0A";
    let tests = db.dictionaries.getTests();

    for (var i = 0; i < tests.length; i++) {
      text += l18n[tests[i].key + "_f"] + ": " + result[tests[i].key] + " ";
      text += tests[i].key === "memCopy" ? l18n.gbps : l18n.mbps;
      if (i !== tests.length - 1) text += "\x0A";
    }

    return text;
  }

  componentWillUnmount(){
    if (this.keyPressSubscribed)
      document.removeEventListener('keyup', this.onKeyUp);
  }

  onKeyUp(e){
    if ((e.key === "Escape" || e.keyCode === 27) && this.deletableId) {
      this.props.selectedIdRemoved(this.deletableId);
    }
  }

  render() {
    let items = db.results.getResults(this.props.selectedPlatforms, this.props.selectedTest, this.props.device, this.props.selectedResultIds);
    let selectedCount = -1;
    this.deletableId = null;

    if (this.props.selectedResultIds && this.props.selectedResultIds.length > 0){
      let selectedResults = this.props.selectedResultIds.map(id => db.results.getResultById(id));
      items = selectedResults.concat(items);
      selectedCount = selectedResults.length;
      this.deletableId = selectedResults[selectedCount-1].id;
    }
    
    if (!this.deletableId && this.keyPressSubscribed){
      document.removeEventListener('keyup', this.onKeyUp);
      this.keyPressSubscribed = false;
    } else if (this.deletableId && !this.keyPressSubscribed) {
      document.addEventListener('keyup', this.onKeyUp);
      this.keyPressSubscribed = true;
    }

    if (items && items.length > 0) {
      db.results.setPercents(items, this.props.selectedTest);
      return (
        items.map(i =>
          <div key={i.id} className={selectedCount-- > 0 ? "item selected" : "item"} title={this.getAllResults(i)}>
            <span className="leftColumn">
              {i.device}
              <br />
              <span className="greyed">
                {i.deviceYear}, {i.deviceDetail}
              </span>
            </span>
            <span className="rightColumn">
              <span style={{ width: i.percent * 80 + "%" }}>
                {i[this.props.selectedTest]} {this.props.selectedTest === "memCopy" ? l18n.gbps : l18n.mbps}
              </span>
              {selectedCount === 0 && <button onClick={() => this.props.selectedIdRemoved(i.id)}>[Esc]</button>}
            </span>
          </div>)
      )
    }
    else return <div className="nothing">{l18n.nothingToShow}</div>
  }
}

export default TestResults;