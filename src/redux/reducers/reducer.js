const initialState = {
  questions: [],
  factors: [],
  currentQ: {question:""},
    containers: {
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
    },
    containerOrder: ['container-1','container-2','container-3']
}

/// these are taking in the state and replacing it with a new state depending on what actions are dispatched
export const reducer = (state = initialState, action) => {


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
    case "DRAG_END":
  //   const {destination, source, draggableId} = action.payload
  // if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index))
  return{
      ...state
   }
  //   const container = action.payload.source.droppableId
  //   const newFactorIds = Array.from(container.factorIds);
  //   newFactorIds.splice(source.index, 1)
  //   newFactorIds.splice(destination.index, 0, draggableId)
  //   const newContainer = {
  //     ...container,
  //     factorIds: newFactorIds
  //   }
  //   return{
  //     ...state,
  //     containers: {
  //       ...state.containers,
  //       [newContainer.id]: newContainer
  //       }
  //     }


    return
    default:
  return state
}
}
