import React from 'react';
import '../../stylesheets/containers.css'
import {connect} from 'react-redux'
import Pro from '../pro'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import TaskList from './tasklist'

const Container = styled.div``
 const ProsContainer = ({factors, weight, proContainer}) =>{
    return(
    <Container className='column'>
    <h3 className='title'>PROS</h3>
      <Droppable droppableId={proContainer}>
      {(provided, snapshot)=>(
          <TaskList
          innerRef={provided.innerRef}
          {...provided.droppableProps}
          isdraggingover={snapshot.isDraggingOver}>
          {proContainer.factorIds.map((pro, index) => <Pro pro={factors[pro]} id={factors[pro].id} index={index} name={factors[pro].name} />)}
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
    proContainer: state.containers['container-2']
  }
}
export default connect(mapStateToProps)(ProsContainer)
