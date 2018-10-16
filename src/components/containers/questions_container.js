import React from 'react';
import {connect} from 'react-redux'

const QuestionContainer = ({questions}) =>{
  return(
    <div>
    <label>Choose a question</label>
    <select >
      {questions.map(question => question.question)}
    </select>
    <br/>
    <label>Or write your own question</label><textarea placeholder="type your question here"/>
    </div>
  )
}

//this makes sure that this component(QuestionContainer) has access to questions as a prop
const mapStateToProps = (state)=> {
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps)(QuestionContainer)
