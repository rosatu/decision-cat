import React from 'react';

class Container extends React.Component {
  render() {
    return (
      <div className={this.props.isDragging ? "movingTaskList" : "taskList"} {...this.props} ref={this.props.innerRef}>

      </div>
    );
  }
}

export default Container
