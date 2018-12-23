import React, { Component } from 'react';
import TestResultDetails from './TestResultDetails';
import TestResult from './TestResult';
import Hint from './Hint';
import l18n from './translations';
import db from './data';

class TestResults extends Component {
  constructor(props) {
    super(props);

    this.onKeyUp = this.onKeyUp.bind(this);
    this.state = {expandedId: null, doubleTapHint: false};
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

  keyboardEventsSubscription() {
    if (!this.deletableId && this.keyPressSubscribed) {
      document.removeEventListener('keyup', this.onKeyUp);
      this.keyPressSubscribed = false;
    }
    else if (this.deletableId && !this.keyPressSubscribed) {
      document.addEventListener('keyup', this.onKeyUp);
      this.keyPressSubscribed = true;
    }
  }

  render() {
   
    let items = db.results.getResults(this.props.selectedPlatforms, this.props.selectedTest, this.props.device, this.props.selectedResultIds);
    let selectedCount = -1;
    this.deletableId = null;
    let title = "";

    let selectedResultIds = this.props.selectedResultIds;
    let expandedId = this.state.expandedId;

    if (selectedResultIds && selectedResultIds.length > 0){
      let selectedResults = selectedResultIds.map(id => db.results.getResultById(id));
      items = selectedResults.concat(items);
      selectedCount = selectedResults.length;
      this.deletableId = selectedResults[selectedCount-1].id;

      for (let i = 0; (i < 2) && (i < selectedResults.length); i++){
        title += selectedResults[i].device;
        if (i === 1 || i === selectedResults.length-1) title +=" - "; else title +=", ";
      }
    }

    if (this.props.setTitle) this.props.setTitle(title + l18n.pageTitle);
    
    this.keyboardEventsSubscription();

    if (items && items.length > 0) {
      db.results.setPercents(items, this.props.selectedTest);
      return (
        <>
        {this.state.doubleTapHint && <Hint>{l18n.hintDoubleTap}</Hint>}
        {items.map(i =>
          <div 
            itemScope
            key={i.id} 
            className={selectedCount-- > 0 ? "item selected" : (expandedId === i.id) ? "item highlight" : "item"} 
            id={selectedCount === 0 ? "last" : null}
            title={this.getAllResults(i)}
            onClick={
              (!selectedResultIds || selectedResultIds.length === 0 || !selectedResultIds.includes(i.id)) ?
              () => {
                this.setState({expandedId: expandedId === i.id ? null : i.id});
                if (!this.state.doubleTapHint) this.setState({doubleTapHint:true});
              }
              : null
            }
            onDoubleClick={
              (!selectedResultIds || selectedResultIds.length === 0 || !selectedResultIds.includes(i.id)) ?
              (e) => {
                let selection = window.getSelection();
                if (selection.empty) selection.empty(); 
                this.props.resultSelected(i.id); 
                if (expandedId === i.id) this.setState({expandedId: null});
              }
              : null
            }
          >
            <TestResult
              item={i}
              percent={i.percent} // hack to make PureComponent re-render, somehow for selected id's percent inside 'item' is'nt considered as changed, though the filed differs. For non selcted ids it works fine
              selectedTest={this.props.selectedTest }
              selectedIdRemoved={this.props.selectedIdRemoved}
              closableX={selectedCount > 0 && i.id !== db.results.yourDeviceId}
              closableEsc={selectedCount === 0 && i.id !== db.results.yourDeviceId}
            />
            {((selectedCount >= 0) || (expandedId === i.id)) && <TestResultDetails item={i} noHighlight={expandedId === i.id}/> }
          </div>)}
      </>)
    }
    else return <div className="nothing">{l18n.nothingToShow}</div>
  }
}

export default TestResults;