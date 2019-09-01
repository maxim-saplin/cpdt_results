import React, { PureComponent } from 'react';

class TestResultDetailsItem extends PureComponent {
  render() {
    return(
    <>
      <span className={this.props.selectedTest === this.props.test? "singleRes selected" : "singleRes"}>
      <span className="ttl">{this.props.testName}</span>
      <br/>
      <span className="res">{this.props.result}</span>
      <br className="unitBreak"/>
      <span className="unit">{this.props.unit}</span>
      </span>
    </>);
  }
}

export default TestResultDetailsItem;