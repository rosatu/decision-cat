export const loadQuestions = () =>{
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/questions')
    .then(r=> r.json())
    .then(questions => dispatch({
      type: 'LOAD_QUESTIONS',
      payload: questions
    })
  )
  }
}
export const loadFactors = () =>{
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/factors')
    .then(r=> r.json())
    .then(factors => dispatch({
      type: 'LOAD_FACTORS',
      payload: factors
    })
  )
  }
}

export const onDragEnd = result => {
  return{
    type: 'DRAG_END',
    payload: result
  }

}
