const initState = {
  posts: [],
  currentPost: null,
  postLoading: true,
  currentPostLoading: true
}

export const postReducers = (state = initState, action) => {
  console.log(action)
  if (action.type === 'SAVE_POST') {
    return {
      ...state,
      posts: action.posts,
      postLoading: action.loading
    }
  } else if (action.type === 'SAVE_CURRENT_POST') {
    return {
      ...state,
      currentPost: action.post,
      currentPostLoading: action.loading
    }
  }
  return state
}