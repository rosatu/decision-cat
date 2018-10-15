export const loadQuestions = () =>{
  console.log("in loadQuestions")
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
  console.log("in loadFactors")
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
