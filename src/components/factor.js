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
      {this.props.factor.name}<br/><hr/>
      <button className='xbutton' onClick={()=>this.props.handleDelete(this.props.factor)}>X</button>
    <button className='button' onClick={()=>this.props.handlePro(this.props.factor)}>PRO</button>
    <button className='button' onClick={()=>this.props.handleCon(this.props.factor)}>CON</button>
    </Container>

    )}
    </Draggable>
    )
  }
}

export default connect(null,{handlePro, handleCon, handleDelete})(Factor)
