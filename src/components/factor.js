import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd'
import Container from './container'
import {connect} from 'react-redux'
import {handleCon, handleDelete, handlePro} from '../redux/actions'


class Factor extends Component{
  render() {
    return (
    <Draggable draggableId={`draggable-${this.props.factor.id}`} index={this.props.index}>
    {(provided, snapshot)=>(
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={provided.innerRef}
        isdragging={snapshot.isDragging}
      >
    {this.props.factor.name}
    <button onClick={()=>this.props.handleDelete(this.props.factor)}>X</button>
    </Container>

    )}
    </Draggable>
    )
  }
}

export default connect(null,{handlePro, handleCon, handleDelete})(Factor)
