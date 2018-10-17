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

export const handleCurrentQ = (e) => {
    return{
      type: 'UPDATE_CURRENT_Q',
      payload: e.target.value
    }
}

export const handleNewFactor = (input) =>{
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/factors',{
      method: 'POST',
      headers:{
    'Content-Type': 'application/json',
    'Accept' : 'application/json'
  },
      body: JSON.stringify({
        name: input.value})
    })
    .then(r=> r.json())
    .then(factor => dispatch({
      type: 'ADD_FACTOR',
      payload: factor
    })
  )
  input.value = ''
  }

}

export const handleCon = (factor) => {
  return{
    type: 'MOVE_TO_CON',
    payload: factor
  }
}

export const handlePro = (factor) => {
  return{
    type: 'MOVE_TO_PRO',
    payload: factor
  }
}

export const handleDelete = (factor) => {
  console.log("delete", factor)
  return{
    type: 'DELETE_FACTOR',
    payload: factor
  }
}
export const handleProSlider = (pro, e) => {
  e.preventDefault()
  return{
    type: 'UPDATE_PRO_WEIGHT',
    payload1: e.target.value,
    payload2: pro
  }
}

export const handleConSlider = (con, e) => {
  e.preventDefault()
  return{
    type: 'UPDATE_CON_WEIGHT',
    payload1: e.target.value,
    payload2: con
  }
}

export const handleDecide = (pros,cons,currentQ) =>{
  console.log("decide",pros,cons,currentQ)
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/decide',{
      method: 'POST',
      headers:{
    'Content-Type': 'application/json',
    'Accept' : 'application/json'
  },
      body: JSON.stringify({
        currentQ,
        pros,
        cons})
    })
    .then(r=> r.json())
    .then(decision => dispatch({
      type: 'DECIDE',
      payload: decision
    })
  )
  }

}
