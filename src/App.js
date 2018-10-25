import React, { Component } from 'react';
import './stylesheets/App.css';
import {loadQuestions, loadFactors, onDragEnd, handleDecide} from './redux/actions'
import {connect} from 'react-redux'
import FactorsContainer from './components/containers/factors_container'
import QuestionsContainer from './components/containers/questions_container'
import QuestionDisplay from './components/question_display'
import ProsContainer from './components/containers/pros_container'
import ConsContainer from './components/containers/cons_container'
import { Grid,  Button, Header, Image, Modal} from 'semantic-ui-react'
import {DragDropContext} from 'react-beautiful-dnd'
import logo from './logo.svg'

class App extends Component {
  componentDidMount() {
    this.props.loadQuestions()
    this.props.loadFactors()
  }
  ModalModalExample = (str, percent) => (
  <Modal className='modal-btn' trigger={<Button color="red" size="large" >DecisionCat has made a decision for you</Button>}closeIcon>
    <Modal.Header>You wanted to know "{this.props.currentQ}" DecisionCat says:</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={logo} />
      <Modal.Description>
        <Header className='answer'>{`${str}`}</Header>
        <p>DecisionCat is {percent} percent sure about this decision</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)


  render() {
    return(
      <div>

        <div className="App-header">
          <img onClick={()=>this.props.handleDecide(this.props.weightedPros, this.props.weightedCons, this.props.currentQ, this.props.currentUser)} src={logo} className="App-logo" alt="logo" />
      </div>
        <Grid divided='vertically'>
          <Grid.Column className="short-column">
        <QuestionsContainer  />
        </Grid.Column>
          <Grid.Column className='short-column'>
        <QuestionDisplay/>
        </Grid.Column>
      </Grid>
      <h2 className='welcome-modal'>{this.props.decision ? (this.props.decision > 50 ? this.ModalModalExample("YES.  DO IT.", parseInt(this.props.decision)):this.ModalModalExample("NO.  DO NOT DO IT.", (100 - parseInt(this.props.decision)))):null}</h2>
        <DragDropContext
            onDragEnd={this.props.onDragEnd}>
          <Grid divided='vertically'>
              <Grid.Column className='third-f'>
                <FactorsContainer factors={this.props.factors} />
              </Grid.Column>
              <Grid.Column className='third'>
                <ProsContainer factors={this.props.factors} />
              </Grid.Column>
              <Grid.Column className='third-c'>
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
    weightedPros:state.weightedPros,
    weightedCons:state.weightedCons,
    decision:state.decision,
    currentUser:state.currentUser

  }
}
export default connect(mapStateToProps, {loadQuestions, loadFactors, onDragEnd, handleDecide})(App)
