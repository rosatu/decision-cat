import React from 'react';
import '../../stylesheets/containers.css'
import {connect} from 'react-redux'
import Con from '../con'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import TaskList from './tasklist'

const Container = styled.div``

 const ConsContainer = ({weight, container, factors}) =>  {
    return(
    <Container className='column'>
    <h3 className='title'>CONS</h3>
    <label>{"Once you select your cons, drag slider to right for something thats really important, drag left if it's less important"}</label>
      <Droppable droppableId={container}>
      {provided=>(
          <TaskList
          innerRef={provided.innerRef}
          {...provided.droppableProps}>
          {container.factorIds.map((con, index) => <Con con={factors[con]} id={factors[con].id} index={index} name={factors[con].name} weight={factors[con].weight}/>)}
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
    weight: state.weight,
    container: state.containers['container-3']
  }
}
export default connect(mapStateToProps)(ConsContainer)
