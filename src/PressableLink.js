import React, { Component } from 'react';

const shortcutRegex = /[^\[]+(?=\])/;

class PressableLink extends Component {
  constructor(props) {
    super(props);

    this.onKeyPress = this.onKeyPress.bind(this);
    this.initShortcut = this.initShortcut.bind(this);

    this.shortcut = null;
    if (this.props.children){
      let match = this.props.children.match(shortcutRegex);
      if (match && match.length === 1)
        this.shortcut = match[0].toLowerCase();
    }
  }

  initShortcut() {
    if (this.shortcut && !this.keyPressSubscribed) {
      document.addEventListener('keypress', this.onKeyPress);
      this.keyPressSubscribed = true;
    }
    else if (this.keyPressSubscribed) {
      document.removeEventListener('keypress', this.onKeyPress);
      this.keyPressSubscribed = false;
    }
  }

  onKeyPress(e) {
    if (document.activeElement instanceof HTMLBodyElement){
      if (this.shortcut === e.key && this.props.onClick)
      {
        this.props.onClick();
      }
    }
  }

  componentWillUnmount(){
    if (this.keyPressSubscribed)
      document.removeEventListener('keypress', this.onKeyPress);
  }

  render() {
    this.initShortcut();
    return <a className={this.props.className} onClick={this.props.onClick}>{this.props.children}</a>
  }

}

export default PressableLink;