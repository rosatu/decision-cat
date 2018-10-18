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
    return(
    <Container className='column'>
    <Title className='title'>Factors</Title>
    <form onSubmit={(e) => { e.preventDefault(); this.props.handleNewFactor(this.refs.factor)}}>
    <label>Choose one, or create your own</label>
    <input type="text" ref="factor" />
    <input type='submit' value='submit'/>
    </form>
    <Droppable droppableId={this.props.container}>
    {provided=>(
        <TaskList
        innerRef={provided.innerRef}
        {...provided.droppableProps}>
        {this.props.factors.map((factor, index) => <Factor key={factor.id} factor={factor} index={index}/>)}
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
