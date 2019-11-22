import { MovieActions } from '../actions/movies';

const movies = (state = {
  listLoaded: false,
  list: [],
  error: undefined,
}, action) => {
  switch(action.type) {
    case MovieActions.FETCH_MOVIES_SUCCESS:
      console.log('Setting movie list...');
      return {
        ...state,
        listLoaded: true,
        error: undefined,
        list: action.data
      }
    case MovieActions.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        listLoaded: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default movies;