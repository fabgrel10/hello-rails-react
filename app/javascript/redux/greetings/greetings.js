const initialState = '';

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GREETING':
      return action.payload;
    default:
      return state;
  }
};

export const fetchgreeting = () => async (dispatch) => {
  await fetch('/v1/greetings')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'GET_GREETING', payload: data });
    });
};

export default greetingReducer;
