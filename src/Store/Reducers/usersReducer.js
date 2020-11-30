const initialState = {
  currentUser: '',
  getLoading: false,
  getError: '',
}

export default function usersReducer(state = initialState, action) {

  switch (action.type) {

    case 'LOGIN_user':
      return {
        ...state,
        getLoading: true,
        getError: '',
      };

    case 'LOGIN_user_SUCCESS':
      return {
        ...state,
        getLoading: false,
        currentUser: action.payload,
      };

    case 'LOGIN_user_ERROR':
      return {
        ...state,
        getLoading: false,
        getError: action.payload,
      };

    case 'LOGOUT_user':
      return {
        ...state,
        getLoading: false,
        getError: '',
        currentUser: '',
      };

    default:
      return state

  }
}
