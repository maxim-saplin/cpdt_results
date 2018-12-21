import React, { PureComponent } from 'react';
import l18n from './translations';

class TestResult extends PureComponent {
  render() {
    let i = this.props.item;

    if (i) return (
      <>
        <span className="leftColumn">
          <em itemProp="name">
            {i.device}
          </em>
          <br />
          <span className="greyed" itemProp="description">
            {i.deviceYear}{i.deviceDetail && ","} {i.deviceDetail}
          </span>
        </span>
        <span className="rightColumn">
          <span style={{ width: i.percent * 80 + "%" }} itemProp="throughput" > 
            {i[this.props.selectedTest]} {this.props.selectedTest === "memCopy" ? l18n.gbps : l18n.mbps}
          </span>
          {this.props.closableX && <button onClick={() => this.props.selectedIdRemoved(i.id)}>X</button>}
          {this.props.closableEsc && <button onClick={() => this.props.selectedIdRemoved(i.id)}>[Esc]</button>}
        </span>
      </>);

    return null;
  }
}

export default TestResult;