import { Users } from '../../Api/Users'

export function userLogin(name, password) {
  return async dispatch => {
    dispatch({
      type: "LOGIN_user",
    });

    try {
      let users = Users;
      let userFound = false;
      let error = '';

      for (let user of users) {
        if (user.name === name) {
          if (user.password === password) {
            userFound = true
          } else {
            error = 'Неверный пароль'
          }
        } else {
          error = 'Пользователь не зарегестрирован'
        }
      }

      if (userFound) {
        await dispatch({
          type: "LOGIN_user_SUCCESS",
          payload: name,
        });
      } else {
        await dispatch({
          type: "LOGIN_user_ERROR",
          payload: error,
        });
      }

    } catch (err) {
      dispatch({
        type: "CREATE_User_ERROR",
        payload: err.User || "Failed to get User! :C",
      });
    }

  };
}

export function userLogout() {
  return async dispatch => {
    dispatch({
      type: "LOGOUT_user",
    });
  }
}

// export function createUser(title) {
//   return async (dispatch) => {
//     dispatch({
//       type: "CREATE_User",
//     });
//
//     try {
//       const User = '';
//       dispatch({
//         type: "CREATE_User_SUCCESS",
//         payload: User,
//       });
//     } catch (err) {
//       dispatch({
//         type: "CREATE_User_SUCCESS",
//         payload: err.User || "Failed to create User!",
//       });
//     }
//   };
// }
//
// export function deleteUser(id) {
//   return async (dispatch) => {
//     dispatch({
//       type: "DELETE_User",
//     });
//
//     try {
//       dispatch({
//         type: "DELETE_User_SUCCESS",
//         payload: id,
//       });
//     } catch (err) {
//       dispatch({
//         type: "DELETE_User_SUCCESS",
//         payload: err.User || "Failed to delete User!",
//       });
//     }
//   };
// }
