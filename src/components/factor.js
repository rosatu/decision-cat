import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd'
import Container from './container'
export default class Factor extends Component{
  render() {
    return (
    <Draggable draggableId={`droppable-${this.props.factor.id}`} index={this.props.index}>
    {(provided)=>(
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={provided.innerRef}
      >
    {this.props.factor.name}
    </Container>
    )}
    </Draggable>
    )
  }
}
