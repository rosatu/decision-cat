import React from 'react';
import {connect} from 'react-redux'

const QuestionDisplay = ({currentQ}) => {
  return (
    <div>
      <label className="label">QUESTION:</label><h1>{currentQ}</h1>
    <br/>
      <label className="label">When you've weighed your pros and cons, CLICK THE CAT</label>
    </div>
  )

}
const mapStateToProps = state =>{
  return {
    ...state,
    currentQ: state.currentQ
  }
}
export default connect(mapStateToProps)(QuestionDisplay)
