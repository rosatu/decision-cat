import React from 'react';

class Container extends React.Component {
  render() {
    return (
      <div className="taskList" {...this.props} ref={this.props.innerRef}>

      </div>
    );
  }
}

export default Container
