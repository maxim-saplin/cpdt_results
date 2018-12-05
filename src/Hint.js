import React, { PureComponent } from 'react';

class Hint extends PureComponent {
  render() {
    return <span className="hint">{this.props.children}</span>
  }
}

export default Hint;