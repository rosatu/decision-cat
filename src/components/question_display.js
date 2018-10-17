import React from 'react';
import {connect} from 'react-redux'

const QuestionDisplay = ({currentQ}) => {
  return (
    <div>
    <h2>{currentQ}</h2>
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
