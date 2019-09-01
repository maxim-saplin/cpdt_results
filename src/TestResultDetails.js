import React, { PureComponent } from 'react';
import TestResultDetailsItem from './TestResultDetailsItem';
import l18n from './translations';
import db from './data';

class TestResultDetails extends PureComponent {
  render() {
    let i = this.props.item;

    if (i) return (
      <span className={this.props.noHighlight ? "centerColumn noHighlight" : "centerColumn"}>

        <TestResultDetailsItem 
          selectedTest={this.props.selectedTest}
          test={db.dictionaries.seqWrite}
          testName={l18n.result_SW}
          unit={l18n.mbps}
          result={i[db.dictionaries.seqWrite]}
        />

        <TestResultDetailsItem 
          selectedTest={this.props.selectedTest}
          test={db.dictionaries.seqRead}
          testName={l18n.result_SR}
          unit={l18n.mbps}
          result={i[db.dictionaries.seqRead]}
        />

        <TestResultDetailsItem 
          selectedTest={this.props.selectedTest}
          test={db.dictionaries.randWrite}
          testName={l18n.result_RW}
          unit={l18n.mbps}
          result={i[db.dictionaries.randWrite]}
        />

        <TestResultDetailsItem 
          selectedTest={this.props.selectedTest}
          test={db.dictionaries.randRead}
          testName={l18n.result_RR}
          unit={l18n.mbps}
          result={i[db.dictionaries.randRead]}
        />        
        
        <TestResultDetailsItem 
          selectedTest={this.props.selectedTest}
          test={db.dictionaries.memCopy}
          testName={l18n.result_MEM}
          unit={l18n.gbps}
          result={i[db.dictionaries.memCopy]}
        /> 

      </span>);

      return null;
  }
}

export default TestResultDetails;