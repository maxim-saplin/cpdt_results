import React, { Component } from 'react';
import l18n from './translations';

class ListSelector extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  toggle(key) {
    if (this.props.selectedKey.includes(key)) { // remove key
      if (this.props.selectedKey.length > 1) {
        return this.props.selectedKey.filter(k => k !== key);
      }
      else {
        return this.props.selectedKey;
      }
    }

    this.props.selectedKey.push(key);

    return this.props.selectedKey;
  }

  selectAll() {
    return this.props.items.map(p => p.key);
  }

  onKeyPress(e) {
    if (document.activeElement instanceof HTMLBodyElement){
      if (this.shortcuts.has(e.key))
      {
        let val = this.shortcuts.get(e.key);

        //TODO - add suport for repeting shortcuts in multiselect list
        if (Array.isArray(val)){ // single select, repeat shortcuts
          let key = val[0].key;
          
          for (let i = 0; i < val.length; i++){
            if (val[i].key === this.props.selectedKey){
              if (i+1 < val.length) key = val[i+1].key;
            }
          }

          this.props.itemClick(key);
        }
        else if (Array.isArray(this.props.selectedKey)){ // multi select select, non-repeat shortcuts        
          this.props.itemClick(this.toggle(val.key));
        } else if (val.key !== this.props.selectedKey) { // single select, non-repeat shortcuts
          this.props.itemClick(val.key);
        } 
      }
    }
  }

  componentWillUnmount(){
    if (this.keyPressSubscribed)
      document.removeEventListener('keypress', this.onKeyPress);
  }

  initShortcuts() {
    this.prevItems = this.props.items;
    this.shortcuts = new Map();
    for (var i in this.prevItems) {
      if (this.prevItems[i].shortcut) {
        if (!this.shortcuts.has(this.prevItems[i].shortcut))
          this.shortcuts.set(this.prevItems[i].shortcut, this.prevItems[i]);
        else {
          let sc = this.shortcuts.get(this.prevItems[i].shortcut);

          if (Array.isArray(sc)) sc.push(this.prevItems[i]);
          else {
            let arr = [sc, this.prevItems[i]];
            this.shortcuts.set(this.prevItems[i].shortcut, arr);
          }
        }
      }
    }
    if (this.shortcuts.size > 0) {
      document.addEventListener('keypress', this.onKeyPress);
      this.keyPressSubscribed = true;
    }
    else if (this.keyPressSubscribed) {
      document.removeEventListener('keypress', this.onKeyPress);
      this.keyPressSubscribed = false;
    }
  }

  updateShortcuts() {
    if (!this.prevItems) {
      this.initShortcuts();
    }
    else if (this.prevItems !== this.props.items) {
      this.initShortcuts();
    }
  }

  render() {
    this.updateShortcuts();

    if (this.props.items)
      return (
        <ul className={this.props.className}>
          {
              this.props.items.map( // multiselect
                i =>
                  <li
                    key={i.key}
                    className={this.props.selectedKey.includes(i.key) ? "selected" : null}
                    onClick={
                      Array.isArray(this.props.selectedKey) ? 
                      () => this.props.itemClick(this.toggle(i.key)) : // multiselect
                      () => this.props.itemClick(i.key) //single select
                    }
                  >
                    {i.name}
                  </li>
              )
          }

          {
            this.props.selectAll && <li onClick={() => this.props.itemClick(this.selectAll())}>{l18n.all}</li>
          }
        </ul>
      )

      return null;
  }
}



export default ListSelector;