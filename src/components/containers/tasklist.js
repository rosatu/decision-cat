import React from 'react';

class TaskList extends React.Component {
  render() {
    return (
      <div {...this.props} ref={this.props.innerRef}>

      </div>
    );
  }
}

export default TaskList
