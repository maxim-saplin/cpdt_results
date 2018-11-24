import React, { PureComponent } from 'react';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.textChanged = this.textChanged.bind(this);
    this.state = {text: "", blink:false};
    this.textInput = React.createRef();
  }

  textChanged(e){
    this.setState({text: e.value});
    e.preventDefault();
  }

  render() {
    return (
      <div className="searchBox">
        <span contentEditable="true" ref={this.textInput} value={this.state.text} onChange={this.textChanged} onFocus={() => {this.setState({blink:true})}} onBlur={() => {this.setState({blink:false})}}></span>
        <span className={this.state.blink ? "blink" : ""} onClick={() => {this.textInput.current.focus()}}>_</span>
        &lt;/
      </div>
    )
  }
}

export default Search;