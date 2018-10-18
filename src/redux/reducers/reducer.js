const initialState = {
  currentUser: {name: "Eric Kim", id:1},
  questions: [],
  factors: [],
  pros: [],
  weight: .5,
  weightedPros: {},
  cons: [],
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
    const factorIds = action.payload.map(factor=> factor.id)
    return {
      ...state,
      factors: action.payload,
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
    return {
      ...state,
      factors: [...state.factors, action.payload]
    }
    case "DRAG_END":
    const {destination, source} = action.payload
  if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index))
  return{
      ...state
   }
   if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index))
   return{
       ...state
    }

   break;
   //  const container = action.payload.source.droppableId
   //  const newFactorIds = Array.from(container.factorIds);
   //  newFactorIds.splice(source.index, 1)
   //  newFactorIds.splice(destination.index, 0, draggableId)
   //  const newContainer = {
   //    ...container,
   //    factorIds: newFactorIds
   //  }
   //  return{
   //    ...state,
   //    containers: {
   //      ...state.containers,
   //      [newContainer.id]: newContainer
   //      }


      case 'MOVE_TO_CON':
      return {
        ...state,
        factors: state.factors.filter(factor => factor.id !== action.payload.id),
        cons: state.cons.length? [...state.cons, action.payload] : [action.payload]
      }

      case 'MOVE_TO_PRO':
      return {
        ...state,
        factors: state.factors.filter(factor => factor.id !== action.payload.id),
        pros: state.pros.length? [...state.pros, action.payload] : [action.payload]
      }

      case 'DELETE_FACTOR':
      return {
        ...state,
        factors: state.factors.filter(factor => factor.id !== action.payload.id)
      }
      case 'DELETE_PRO':
      return {
        ...state,
        factors: [...state.factors, action.payload],
        pros: state.pros.filter(pro => pro.id !== action.payload.id)
      }
      case 'DELETE_CON':
      return {
        ...state,
        factors: [...state.factors, action.payload],
        cons: state.cons.filter(con => con.id !== action.payload.id)
      }
      case 'UPDATE_PRO_WEIGHT':
      const weightedPro = {...action.payload2, weight: parseFloat(action.payload1)}
      return {
        ...state,
        pros: [...state.pros.map(pro => pro.id === action.payload2.id ? weightedPro : pro)]
      }
      case 'UPDATE_CON_WEIGHT':
      const weightedCon = {...action.payload2, weight: parseFloat(action.payload1)}
      return {
        ...state,
        cons: [...state.cons.map(con => con.id === action.payload2.id ? weightedCon : con)]
      }
      case 'DECIDE':
      return {
        ...state,
        decision: action.payload
      }
    default:
    return state
}
}
