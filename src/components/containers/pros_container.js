import React from 'react';
import '../../stylesheets/containers.css'
import {connect} from 'react-redux'
import Pro from '../pro'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import TaskList from './tasklist'

const Container = styled.div``

 const ProsContainer = ({pros,weight, container}) =>  {
    return(
    <Container className='column'>
    <h3 className='title'>PROS</h3>
    <label>{"Once you select your pros, drag slider to left for something thats really important, drag to right if it's less important"}</label>
      <Droppable droppableId={container}>
      {provided=>(
          <TaskList
          innerRef={provided.innerRef}
          {...provided.droppableProps}>
          {pros.map((pro, index) => <Pro pro={pro} id={pro.id} index={index} name={pro.name} weight={pro.weight}/>)}
          {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      </Container>
  )
  }

const mapStateToProps = state => {
  return{
    ...state,
    pros: state.pros,
    weight: state.weight,
    container: state.containers['container-2']
  }
}
export default connect(mapStateToProps)(ProsContainer)
