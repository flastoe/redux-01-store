export const MovieActions = {
  'FETCH_MOVIES_SUCCESS': 'Movies.FETCH_MOVIES_SUCCESS',
  'FETCH_MOVIES_FAILURE': 'Movies.FETCH_MOVIES_FAILURE',
}

const API = 'http://10.25.68.120:3000';

export const fetchMovies = async () => {
  try {
    console.log('Fetching movies...')
    const url = `${API}/movies`;
    const response = await fetch(url);
    console.log('Response: ', response.status);
    const data = await response.json();
    console.log('DATA', data);
    return {
      type: MovieActions.FETCH_MOVIES_SUCCESS,
      data,
    }
  } catch(error) {
    return {
      type: MovieActions.FETCH_MOVIES_FAILURE,
      error: error,
    }
  }
}