export function switchTheme() {
  return async dispatch => {
    dispatch({
      type: "SWITCH_THEME",
    });
  }
}
