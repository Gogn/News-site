import { News } from '../../Api/News'

export function getNewsStart() {
  return async dispatch => {
    dispatch({
      type: "GET_News_START",
    });
  }
}

export function getNewsSuccess(news) {
  return async dispatch => {
    dispatch({
      type: "GET_News_SUCCESS",
      payload: news,
    });
  }
}

export function getNewsError(error) {
  return async dispatch => {
    dispatch({
      type: "GET_News_ERROR",
      payload: error,
    });
  }
}

export function approoveNews(id) {
  return async dispatch => {
    dispatch({
      type: "News_APPROOVE",
      payload: id,
    });
  }
}

  export function getNews() {
  return async dispatch => {
    dispatch(getNewsStart())

    try {
      const news = News;
      if (news) {
        dispatch(getNewsSuccess(news))
      } else {
        dispatch(getNewsError('Error'))
      }
    } catch (err) {
      dispatch({
        type: "GET_News_ERROR",
        payload: err.User || "Failed to get User! :C",
      });
    }

  }
}

export function createNewsStart() {
  return async (dispatch) => {
    dispatch({
      type: "CREATE_News_START",
    });
  }
}
export function createNewsSuccess(title, content, currentUser) {
  return async (dispatch) => {
    dispatch({
      type: "CREATE_News_SUCCESS",
      payload: { title, content, currentUser },
    });
  }
}

export function createNews(title, content, currentUser) {
  return async dispatch => {
    dispatch(createNewsStart())

    try {
      dispatch(createNewsSuccess(title, content, currentUser))
    } catch (err) {
      dispatch({
        type: "CREATE_News_ERROR",
        payload: err.User || "Failed to create News!",
      });
    }
  };
}

export function deleteNews(id) {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_News",
      payload: id,
    });

    try {
      dispatch({
        type: "DELETE_News_SUCCESS",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "DELETE_News_ERROR",
        payload: err.User || "Failed to delete news!",
      });
    }
  };
}
