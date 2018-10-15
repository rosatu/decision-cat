import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';
import {loadQuestions, loadFactors} from './redux/actions'
import {connect} from 'react-redux'
import FactorsContainer from './components/containers/factors_container'
import QuestionsContainer from './components/containers/questions_container'
import ProsContainer from './components/containers/pros_container'
import ConsContainer from './components/containers/cons_container'
import { Grid, Image } from 'semantic-ui-react'
import {DragDropContext} from 'react-beautiful-dnd'



class App extends Component {

  componentDidMount() {
    this.props.loadQuestions()
    this.props.loadFactors()
  }

  onDragEnd = result => {
    // todo:reorder column
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        <QuestionsContainer />
        <DragDropContext
            onDragEnd={this.onDragEnd}>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    factors: state.factors
  }
}
export default connect(mapStateToProps, {loadQuestions, loadFactors})(App)
