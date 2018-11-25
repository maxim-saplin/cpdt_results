import React, { Component } from 'react';
import l18n from './translations';
import db from './data';

class TestResults extends Component {
  render() {
    let items = db.results.getResults(this.props.selectedPlatforms, this.props.selectedTest, this.props.device);

    return (
      items.map(i =>
        <div className="item">
          <span className="leftColumn">
            {i.device}
            <br />
            <span className="greyed">
              {i.deviceYear}, {i.deviceDetail}
            </span>
          </span>
          <span className="rightColumn">
            <span style={{width: i.percent*80 +"%"} }>
              {i[this.props.selectedTest]} {this.props.selectedTest === "memCopy" ? l18n.gbps : l18n.mbps} 
            </span>
          </span>
        </div>)
    )
  }
}

export default TestResults;