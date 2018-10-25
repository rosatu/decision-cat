import React from 'react';
import {connect} from 'react-redux'
import {handleCurrentQ} from '../../redux/actions'

const QuestionsContainer = ({questions, handleCurrentQ}) =>{
  return(
    <div>
      <br/>
    <label className="label">CHOOSE A QUESTION</label>
    <select onChange={handleCurrentQ}>
      {questions.map(question => <option key={question.id}>{question.question}</option>)}
    </select>
    <br/>
    <label className="label" >OR WRITE YOUR OWN YES/NO QUESTION </label><textarea onChange={handleCurrentQ}/>
    <br/>
    <br/>
  
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
