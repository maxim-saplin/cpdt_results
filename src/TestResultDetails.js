import React, { PureComponent } from 'react';
import l18n from './translations';
import db from './data';

class TestResultDetails extends PureComponent {
  render() {
    let i = this.props.item;

    if (i) return (
      <span className={this.props.noHighlight ? "centerColumn noHighlight" : "centerColumn"}>

        <span className={this.props.selectedTest === db.dictionaries.seqWrite ? "singleRes selected" : "singleRes"}>
          <span className="ttl">{l18n.result_SW}</span>
          <br/>
          <span className="res">{i[db.dictionaries.seqWrite]}</span>
          <span className="unit">{l18n.mbps}</span>
        </span>

        <span className={this.props.selectedTest === db.dictionaries.seqRead ? "singleRes selected" : "singleRes"}>
          <span className="ttl">{l18n.result_SR}</span>
          <br/>
          <span className="res">{i[db.dictionaries.seqRead]}</span>
          <span className="unit">{l18n.mbps}</span>
        </span>
        
        <span className={this.props.selectedTest === db.dictionaries.randWrite ? "singleRes selected" : "singleRes"}>
          <span className="ttl">{l18n.result_RW}</span>
          <br/>
          <span className="res">{i[db.dictionaries.randWrite]}</span>
          <span className="unit">{l18n.mbps}</span>
        </span>

        <span className={this.props.selectedTest === db.dictionaries.randRead ? "singleRes selected" : "singleRes"}>
          <span className="ttl">{l18n.result_RR}</span>
          <br/>
          <span className="res">{i[db.dictionaries.randRead]}</span>
          <span className="unit">{l18n.mbps}</span>
        </span>

        <span className={this.props.selectedTest === db.dictionaries.memCopy ? "singleRes selected" : "singleRes"}>
          <span className="ttl">{l18n.result_MEM}</span>
          <br/>
          <span className="res">{i[db.dictionaries.memCopy]}</span>
          <span className="unit">{l18n.gbps}</span>
        </span>

      </span>);

      return null;
  }
}

export default TestResultDetails;