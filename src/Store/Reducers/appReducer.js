const initialState = {
  colorsDark: false
}

export default function appReducer(state = initialState, action) {

  switch (action.type) {

    case 'SWITCH_THEME':
      return {
        colorsDark: !state.colorsDark
      };

    default:
      return state

  }
}
