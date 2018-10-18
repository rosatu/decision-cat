import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd'
import Container from './container'
import {connect} from 'react-redux'
import {handleConDelete, handleConSlider} from '../redux/actions'

class Con extends Component{
  render() {
    return (
    <Draggable draggableId={`draggable-${this.props.id}`} index={this.props.index}>
    {(provided)=>(
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={provided.innerRef}
      >
      {this.props.name}
      <input onChange={(e)=>this.props.handleConSlider(this.props.con,e)}type="range" min="0" max="1" name="pro-slider" value={this.props.weight} step="0.10" class="slider" id="myRange" key={this.props.name} />
      <button onClick={()=>this.props.handleConDelete(this.props.con)}>X</button>
    </Container>

    )}
    </Draggable>
    )
  }
}

export default connect(null,{handleConDelete, handleConSlider})(Con)
