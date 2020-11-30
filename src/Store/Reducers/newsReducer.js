const initialState = {
  news: [],
  getLoading: false,
  getError: '',
}

export default function usersReducer(state = initialState, action) {

  switch (action.type) {

    case 'GET_News_START':
      console.log('GET_News_START')
      return {
        ...state,
        getLoading: true,
      };

    case 'GET_News_SUCCESS':
      return {
        ...state,
        getLoading: false,
        news: action.payload,
      };

    case 'GET_News_ERROR':
      return {
        ...state,
        getLoading: false,
        getError: action.payload,
      };

    case 'News_APPROOVE':
      let updatedNews = state.news.map(item => {
        if (item.id === action.payload){
          return {...item, approved: true}
        } else return item
      })
      return {
        ...state,
        getLoading: false,
        news: updatedNews
      };

    case 'DELETE_News':
      let updatedNewsDelete = state.news.filter(item => {
        return item.id !== action.payload
      })
      return {
        ...state,
        getLoading: false,
        news: updatedNewsDelete
      };

    case 'CREATE_News_START':
      return {
        ...state,
        getLoading: true,
      };

    case 'CREATE_News_SUCCESS':
      console.log('action.payload.content',action.payload.content)
      let date = new Date()
      let updatedNewsCreate = {
        id: state.news.length + 1,
        author: action.payload.currentUser,
        title: action.payload.title,
        content: action.payload.content,
        approved: false,
        created: date.toString()
      }
      console.log([...state.news, updatedNewsCreate])
      return {
        ...state,
        getLoading: false,
        news: [...state.news, updatedNewsCreate],
      };

    case 'CREATE_News_ERROR':
      return {
        ...state,
        getLoading: false,
        getError: action.payload,
      };

    default:
      return state

  }
}
