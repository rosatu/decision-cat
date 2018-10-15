import React, {Component} from 'react';
import '../../stylesheets/containers.css'
import Factor from '../factor'
import { Droppable } from 'react-beautiful-dnd'
import {connect} from 'react-redux'
import styled from 'styled-components'
import TaskList from './tasklist'

const Container = styled.div``
const Title = styled.h3``


class FactorsContainer extends Component{
  render() {
    console.log("factors component",this.props);
    return(
    <Container className='column'>
    <Title className='title'>Factors</Title>
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
    container: state.containers[0],
    factors: state.factors
  }
}

export default connect(mapStateToProps)(FactorsContainer)