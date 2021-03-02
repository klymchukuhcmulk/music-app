import { types } from './actions'

const initialState = {
  charts: []
}

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CHARTS:
      return {
        ...state,
        charts: action.payload
      }
    default:
      return state
  }
}
