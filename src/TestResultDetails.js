import React, { PureComponent } from 'react';
import l18n from './translations';
import db from './data';

class TestResultDetails extends PureComponent {
  render() {
    let i = this.props.item;

    if (i) return (
      <span className={this.props.noHighlight ? "centerColumn noHighlight" : "centerColumn"}>
        <span className="ttl">{l18n.result_SRW}:</span>
        <span className="res">{i[db.dictionaries.seqWrite]}÷{i[db.dictionaries.seqRead]}</span>
        <span className="unit">{l18n.mbps} </span>

        <span className="ttl">{l18n.result_SRW}:</span>
        <span className="res">{i[db.dictionaries.randWrite]}÷{i[db.dictionaries.randRead]}</span>
        <span className="unit">{l18n.mbps} </span>

        <span className="ttl"> Mem.cpy:</span>
        <span className="res">{i[db.dictionaries.memCopy]}</span>
        <span className="unit">{l18n.gbps}</span>
      </span>);

      return null;
  }
}

export default TestResultDetails;