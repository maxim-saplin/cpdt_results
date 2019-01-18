import React, { PureComponent } from 'react';
import db from './data';
import l18n from './translations';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.textChanged = this.textChanged.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.moveCursorToEnd = this.moveCursorToEnd.bind(this);

    this.state = {
      extraSpaces: props.value ? false : true, 
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
      this.props.searchChanged(e.target.innerText, true);
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

  moveCursorToEnd(el){
    if(el.innerText && document.createRange)
    {
      window.setTimeout(() =>
        {
          let selection = document.getSelection();
          let range = document.createRange();
      
          range.setStart(el.childNodes[0],el.innerText.length);
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      ,1);
    }
  }

  componentDidUpdate(){
    if (document.activeElement === this.textInput.current) 
      this.moveCursorToEnd(this.textInput.current);
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
            onFocus={(e) => {this.setState({blink:true}); this.moveCursorToEnd(e.nativeEvent.target)}} 
            onBlur={() => {this.setState({blink:false})}}
          >
          {this.props.value}
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
          {l18n.hitEnter}
        </span>
      </>
    )
  }
}

export default Search;