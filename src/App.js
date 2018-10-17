import React, { Component } from 'react';
import './stylesheets/App.css';
import {loadQuestions, loadFactors, onDragEnd, handleDecide} from './redux/actions'
import {connect} from 'react-redux'
import FactorsContainer from './components/containers/factors_container'
import QuestionsContainer from './components/containers/questions_container'
import QuestionDisplay from './components/question_display'
import ProsContainer from './components/containers/pros_container'
import ConsContainer from './components/containers/cons_container'
import { Grid} from 'semantic-ui-react'
import {DragDropContext} from 'react-beautiful-dnd'
import logo from './logo.svg'

class App extends Component {
  componentDidMount() {
    this.props.loadQuestions()
    this.props.loadFactors()
  }


  render() {
    return(
      <div>

        <div className="App-header">
          <img onClick={()=>this.props.handleDecide(this.props.pros, this.props.cons, this.props.currentQ)} src={logo} className="App-logo" alt="logo" />
      </div>
        <Grid divided='vertically'>
          <Grid.Column className="short-column">
        <QuestionsContainer />
        </Grid.Column>
          <Grid.Column className='short-column'>
        <QuestionDisplay/>
        </Grid.Column>
      </Grid>
      <h2>{this.props.decision ? (this.props.decision > 50 ? `YES, YOU SHOULD! you are ${this.props.decision} percent sure about this!`:`Nope! Abort Mission. You are ${100 - parseInt(this.props.decision)} percent sure this is a bad idea`):null}</h2>
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
    ...state,
    questions: state.questions,
    factors: state.factors,
    containers: state.containers,
    containerOrder: state.containerOrder,
    currentQ:state.currentQ,
    pros:state.pros,
    cons:state.cons,
    decision:state.decision

  }
}
export default connect(mapStateToProps, {loadQuestions, loadFactors, onDragEnd, handleDecide})(App)
