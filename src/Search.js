import React, { PureComponent } from 'react';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.textChanged = this.textChanged.bind(this);
    this.state = {extraSpaces: true, blink:false};
    this.textInput = React.createRef();
  }

  textChanged(e){
    if (this.props.searchChanged) this.props.searchChanged(e.target.innerText);
    if (e.target.innerText && this.state.extraSpaces) this.setState({extraSpaces: false});
    else if (!e.target.innerText && !this.state.extraSpaces) this.setState({extraSpaces: true});
  }

  render() {
    return (
      <div className="searchBox">
        <span contentEditable="true" ref={this.textInput} onInput={this.textChanged} onFocus={() => {this.setState({blink:true})}} onBlur={() => {this.setState({blink:false})}}></span>
        <span className={this.state.blink ? "blink" : ""} onClick={() => {this.textInput.current.focus()}}>{!this.state.blink && this.state.extraSpaces && "\xA0\xA0\xA0\xA0"}_</span>
        &lt;/
      </div>
    )
  }
}

export default Search;