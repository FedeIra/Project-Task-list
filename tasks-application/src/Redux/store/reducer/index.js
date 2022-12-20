// Import actions:
import { ADD_TO_LIST } from '../../actions/const';

// Initial state of global store:
const initialState = {
  list: [],
};

// Reducer:
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
