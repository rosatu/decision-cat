const initialState = {
  questions: [],
  factors: [],
  currentQ: {question:""},
  containers: [
    'container-1': {
      id: 'container-1',
      title: 'FactorsContainer',
      factorIds: [1,2]
    },
    'container-2': {
      id: 'container-2',
      title: 'ProsContainer',
      factorIds: []
    },
    'container-3': {
      id: 'container-3',
      title: 'ConsContainer',
      factorIds: []
    }
  ],
  containerOrder: ['container-1','container-2','container-3']
}

/// these are taking in the state and replacing it with a new state depending on what actions are dispatched
export const reducer = (state = initialState, action) => {
  console.log("in reducer", state)
  switch (action.type) {
    case "LOAD_QUESTIONS":
    return {
      ...state,
      questions: action.payload
    }
    case "LOAD_FACTORS":
    return {
      ...state,
      factors: action.payload
    }
    default:
  return state
}
}
