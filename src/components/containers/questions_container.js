import React from 'react';
import {connect} from 'react-redux'
import {handleCurrentQ} from '../../redux/actions'

const QuestionsContainer = ({questions, handleCurrentQ}) =>{
  return(
    <div>
    <label>Choose a question</label>
    <select onChange={handleCurrentQ}>
      {questions.map(question => <option key={question.id}>{question.question}</option>)}
    </select>
    <br/>
    <label>Or write your own question</label><textarea onChange={handleCurrentQ}placeholder="type your question here"/>
    </div>
  )
}

//this makes sure that this component(QuestionContainer) has access to questions as a prop
const mapStateToProps = (state)=> {
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps, {handleCurrentQ})(QuestionsContainer)
