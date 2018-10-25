import React from 'react';
import '../../stylesheets/containers.css'
import {connect} from 'react-redux'
import Con from '../con'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import TaskList from './tasklist'

const Container = styled.div``

 const ConsContainer = ({weight, conContainer, factors}) =>  {
    return(
    <Container className='column'>
    <h3 className='title'>CONS</h3>
      <label>{"LESS IMPORTANT <========> MORE IMPORTANT"}</label>
      <Droppable droppableId={conContainer}>
      {provided=>(
          <TaskList
          innerRef={provided.innerRef}
          {...provided.droppableProps}>
          {conContainer.factorIds.map((con, index) => <Con con={factors[con]} id={factors[con].id} index={index} name={factors[con].name}/>)}
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
    factors: state.factors,
    conContainer: state.containers['container-3']
  }
}
export default connect(mapStateToProps)(ConsContainer)
