import React, {Component} from 'react';
import {Draggable} from 'react-beautiful-dnd'
import Container from './container'
import {connect} from 'react-redux'
import {handleProDelete, handleProSlider} from '../redux/actions'

class Pro extends Component{
  render() {
    return (
    <Draggable draggableId={`draggable-${this.props.id}`} index={this.props.index}>
    {(provided, snapshot) =>(
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={provided.innerRef}
        isdragging={snapshot.isDragging}
      >
      {this.props.name}<hr/>
      <button className='xbutton' onClick={()=>this.props.handleProDelete(this.props.pro)}>X</button>
      <input onChange={(e)=>this.props.handleProSlider(this.props.pro,e)}type="range" min="0" max="1" name="pro-slider" value={this.props.weightedPros[this.props.id]} step="0.10" class="slider" id="myRange" key={this.props.name} />
    </Container>

    )}
    </Draggable>
    )
  }
}

const mapStateToProps = state => {
  return{
    ...state,
    weightedPros: state.weightedPros
  }
}

export default connect(mapStateToProps,{handleProDelete, handleProSlider})(Pro)
