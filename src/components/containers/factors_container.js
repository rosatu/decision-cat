import React, {Component} from 'react';
import '../../stylesheets/containers.css'
import Factor from '../factor'
import { Droppable } from 'react-beautiful-dnd'
import {connect} from 'react-redux'
import styled from 'styled-components'
import TaskList from './tasklist'
import {handleNewFactor} from '../../redux/actions'

const Container = styled.div``
const Title = styled.h3``


class FactorsContainer extends Component{
  render() {
    const {container, factors, handleNewFactor} = this.props
    return(
    <Container className='column'>
    <Title className='title'>FACTORS</Title>
    <form onSubmit={(e) => { e.preventDefault(); handleNewFactor(this.refs.factor)}}>
    <label className='label'>NEW FACTOR</label>
    <input className='label' type="text" ref="factor" />
    <input className='label' type='submit' value='submit'/>
    </form>
    <Droppable droppableId={container}>
    {(provided, snapshot)=>(
        <TaskList
        innerRef={provided.innerRef}
        {...provided.droppableProps}
        isdraggingover={snapshot.isDraggingOver}>
        {container.factorIds.map((factor, index) => <Factor key={factors[factor].id} factor={factors[factor]} index={index}/>)}
        {provided.placeholder}
        </TaskList>
      )}
    </Droppable>
    </Container>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    container: state.containers['container-1'],
    factors: state.factors
  }
}

export default connect(mapStateToProps, {handleNewFactor})(FactorsContainer)
