
const initialState = {
  currentUser: {name: "Eric Kim", id:1},
  questions: [],
  factors: {},
  weightedPros: {},
  weightedCons: {},
  currentQ: '',
    containers: {
      'container-1': {
        id: 'container-1',
        title: 'FactorsContainer',
        factorIds: []
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
    let factorObj = {}
    const factorObjs = action.payload.forEach(factor => {
      factorObj[factor.id] = {...factor}
    })

    const factorIds = action.payload.map(factor=> factor.id)
    return {
      ...state,
      factors: factorObj,
      containers: {...state.containers,
        "container-1": {...state.containers['container-1'], factorIds: factorIds}
      },
    }

    case 'UPDATE_CURRENT_Q':
    return {
      ...state,
      currentQ: action.payload
    }
    case 'ADD_FACTOR':
    const newFactors = {...state.factors}
    newFactors[action.payload.id] = action.payload

    return {
      ...state,
      factors: newFactors
    }
    case "DRAG_END":
    const {destination, source, draggableId} = action.payload
  if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index))
  return{
      ...state
   }
      const draggableIndex = parseInt(action.payload.draggableId.split("-")[1]);
      const startingContainer = action.payload.source.droppableId;
      const endingContainer = action.payload.destination.droppableId;
      console.log(action.payload)

      if (startingContainer === endingContainer);
      const newFactorIds = Array.from(startingContainer.factorIds);
      newFactorIds.splice(source.index, 1);
      newFactorIds.splice(destination.index, 0, draggableIndex);
      const newContainer = {
      ...startingContainer,
      factorIds: newFactorIds
      }
      return{
       ...state,
      containers: {
        ...state.containers,
        [newContainer.id]: newContainer
        }
      }

      const startFactorIds = Array.from(startingContainer.factorIds);
      startFactorIds.splice(source.index, 1);

      const updatedStartingContainer = {
        ...startingContainer,
        factorIds: startFactorIds
      }

      const endFactorIds = Array.from(endingContainer.factorIds)
      endFactorIds.splice(destination.index, 0, draggableIndex);

      const updatedEndingContainer = {
        ...endingContainer,
        factorIds: endFactorIds
      }

      return{
        ...state,
        containers: {
          ...state.containers,
          [updatedStartingContainer.id]: updatedStartingContainer,
          [updatedEndingContainer.id]: updatedEndingContainer,

          }
      }


      case 'MOVE_TO_CON':
      const newNewFactIds = state.containers["container-1"].factorIds
      newNewFactIds.splice(newNewFactIds.indexOf(action.payload.id), 1)
      const newConIds = state.containers["container-3"].factorIds
      newConIds.unshift(action.payload.id)
      const wconsWCON = {...state.weightedCons}
      wconsWCON[action.payload.id] = .5
      return {
        ...state,
        containers: {...state.containers,
          "container-1": {...state.containers['container-1'], factorIds: newNewFactIds},
          "container-3": {...state.containers['container-3'], factorIds: newConIds}
        },
        weightedCons: wconsWCON
      }
      case 'MOVE_TO_PRO':
      const newFactIds = state.containers["container-1"].factorIds
      newFactIds.splice(newFactIds.indexOf(action.payload.id), 1)
      const newProIds = state.containers["container-2"].factorIds
      newProIds.unshift(action.payload.id)
      const wprosWPRO = {...state.weightedPros}
      wprosWPRO[action.payload.id] = .5
      return {
        ...state,
        containers: {...state.containers,
          "container-1": {...state.containers['container-1'], factorIds: newFactIds},
          "container-2": {...state.containers['container-2'], factorIds: newProIds}
        },
        weightedPros: wprosWPRO
      }

      case 'DELETE_FACTOR':
      const factIds = state.containers["container-1"].factorIds
      factIds.splice(factIds.indexOf(action.payload.id), 1)
      return {
        ...state,
        containers: {...state.containers,
          "container-1": {...state.containers['container-1'], factorIds: factIds}
        }
      }
      case 'DELETE_PRO':
      const newPros = [...state.containers['container-2'].factorIds.filter(pro => pro !== action.payload.id)]
      return {
        ...state,
        containers: {...state.containers,
          "container-2": {...state.containers['container-2'], factorIds: newPros}
        }
      }
      case 'DELETE_CON':
      const newCons = [...state.containers['container-3'].factorIds.filter(con => con !== action.payload.id)]
      return {
        ...state,
        containers: {...state.containers,
          "container-3": {...state.containers['container-3'], factorIds: newCons}
        }
      }

      case 'UPDATE_PRO_WEIGHT':
      const newWeightedPros = {...state.weightedPros}
      newWeightedPros[action.payload2.id] = parseFloat(action.payload1)
      return {
        ...state,
        weightedPros: newWeightedPros
      }
      case 'UPDATE_CON_WEIGHT':
      const newWeightedCons = {...state.weightedCons}
      newWeightedCons[action.payload2.id] = parseFloat(action.payload1)
      return {
        ...state,
        weightedCons: newWeightedCons
      }

      // case 'UPDATE_CON_WEIGHT':
      // const weightedCon = {...action.payload2, weight: parseFloat(action.payload1)}
      // return {
      //   ...state,
      //   cons: [...state.cons.map(con => con.id === action.payload2.id ? weightedCon : con)]
      // }
      case 'DECIDE':
      return {
        ...state,
        decision: action.payload
      }
    default:
    return state
}
}
