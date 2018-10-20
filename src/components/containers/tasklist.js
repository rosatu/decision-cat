import React from 'react';

class TaskList extends React.Component {
  render() {
    return (
      <div className={this.props.isdraggingover ? "container": null}{...this.props} ref={this.props.innerRef}>

      </div>
    );
  }
}

export default TaskList
