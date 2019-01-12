import React, { PureComponent } from 'react';
import l18n from './translations';
import db from './data';

class TestResultDetails extends PureComponent {
  render() {
    let i = this.props.item;

    if (i) return (
      <span className={this.props.noHighlight ? "centerColumn noHighlight" : "centerColumn"}>
        <span className="ttl">{l18n.result_SRW}:</span>
        <span className="res">
          {this.props.selectedTest === db.dictionaries.seqWrite ? 
          <em>{i[db.dictionaries.seqWrite]}</em> :
          i[db.dictionaries.seqWrite]}          
          ÷
          {this.props.selectedTest === db.dictionaries.seqRead ? 
          <em>{i[db.dictionaries.seqRead]}</em> :
          i[db.dictionaries.seqRead]}   
        </span>
        <span className="unit">{l18n.mbps} </span>

        <span className="ttl">{l18n.result_RRW}:</span>
        <span className="res">
          {this.props.selectedTest === db.dictionaries.randWrite ? 
          <em>{i[db.dictionaries.randWrite]}</em> :
          i[db.dictionaries.randWrite]}          
          ÷
          {this.props.selectedTest === db.dictionaries.randRead ? 
          <em>{i[db.dictionaries.randRead]}</em> :
          i[db.dictionaries.randRead]}   
        </span>
        <span className="unit">{l18n.mbps} </span>

        <span className="ttl">{l18n.result_MEM}:</span>
        <span className="res">
          {this.props.selectedTest === db.dictionaries.memCopy ? 
          <em>{i[db.dictionaries.memCopy]}</em> :
          i[db.dictionaries.memCopy]}          
        </span>
        <span className="unit">{l18n.gbps}</span>
      </span>);

      return null;
  }
}

export default TestResultDetails;