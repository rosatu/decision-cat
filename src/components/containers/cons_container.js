import React from 'react';
import '../../stylesheets/containers.css'
import {connect} from 'react-redux'
import Con from '../con'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import TaskList from './tasklist'

const Container = styled.div``

 const ConsContainer = ({cons,weight, container}) =>  {
    return(
    <Container className='column'>
    <h3 className='title'>CONS</h3>
    <label>{"Once you select your cons, drag slider to right for something thats really important, drag left if it's less important"}</label>
      <Droppable droppableId={container}>
      {provided=>(
          <TaskList
          innerRef={provided.innerRef}
          {...provided.droppableProps}>
          {cons.map((con, index) => <Con con={con} id={con.id} index={index} name={con.name} weight={con.weight}/>)}
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
    cons: state.cons,
    weight: state.weight,
    container: state.containers['container-3']
  }
}
export default connect(mapStateToProps)(ConsContainer)
