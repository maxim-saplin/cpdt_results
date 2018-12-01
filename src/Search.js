import React, { PureComponent } from 'react';
import db from './data';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.textChanged = this.textChanged.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

    this.state = {
      extraSpaces: true, 
      blink: false,
      showHitn: false
    };
    this.textInput = React.createRef();
  }

  textChanged(e){
    if (this.enterPressed) {
      e.target.innerText = ""; 
      this.enterPressed = false;
    }
    
    if (this.props.searchChanged) {
      this.props.searchChanged(e.target.innerText);
    }
    if (e.target.innerText && this.state.extraSpaces) this.setState({extraSpaces: false});
    else if (!e.target.innerText && !this.state.extraSpaces) this.setState({extraSpaces: true});
  }

  onKeyPress(e){
    if (e.key === "Enter" || e.charCode === 13) {
      this.enterPressed = true;
      let last = db.results.getLastResultId();
      if (e.target.innerText && this.props.enterPressed && last) this.props.enterPressed(last);
    }
    else this.enterPressed = false;
  }

  render() {
    return (
      <>      
        <span className="searchBox">
          <span 
            contentEditable="true" 
            ref={this.textInput} 
            onInput={this.textChanged} 
            onKeyPress={this.onKeyPress}
            onFocus={() => {this.setState({blink:true})}} 
            onBlur={() => {this.setState({blink:false})}}
          >
          </span>
          <span 
            className={this.state.blink ? "blink" : ""} 
            onClick={() => {this.textInput.current.focus()}}
          >
            {!this.state.blink && this.state.extraSpaces && "\xA0\xA0\xA0\xA0"}_
          </span>
          &lt;/
        </span>
        <span className={!this.state.extraSpaces && this.state.blink ? "searchBoxHint visible" : "searchBoxHint"}>
          "Enter" & fix top result
        </span>
      </>
    )
  }
}

export default Search;