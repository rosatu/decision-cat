import React, { Component } from 'react';
import './stylesheets/App.css';
import {loadQuestions, loadFactors, onDragEnd} from './redux/actions'
import {connect} from 'react-redux'
import FactorsContainer from './components/containers/factors_container'
import QuestionsContainer from './components/containers/questions_container'
import ProsContainer from './components/containers/pros_container'
import ConsContainer from './components/containers/cons_container'
import { Grid} from 'semantic-ui-react'
import {DragDropContext} from 'react-beautiful-dnd'

class App extends Component {
  componentDidMount() {
    this.props.loadQuestions()
    this.props.loadFactors()
  }

  render() {
    return(
      <div>
        <QuestionsContainer />
        <DragDropContext
            onDragEnd={this.props.onDragEnd}>
          <Grid divided='vertically'>
              <Grid.Column className='third'>
                <FactorsContainer factors={this.props.factors} />
              </Grid.Column>
              <Grid.Column className='third'>
                <ProsContainer factors={this.props.factors} />
              </Grid.Column>
              <Grid.Column className='third'>
                <ConsContainer factors={this.props.factors} />
              </Grid.Column>
          </Grid>
        </DragDropContext>
      </div>
    )
    }
  }

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    factors: state.factors,
    containers: state.containers,
    containerOrder: state.containerOrder

  }
}
export default connect(mapStateToProps, {loadQuestions, loadFactors, onDragEnd})(App)
