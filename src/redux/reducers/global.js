const initialState = {
  myName: 'Wisit Phusi',
}

export const globalReducers = (state = initialState, action) => {
  if (action.type === 'CHANGE_MY_NAME') {
    return { ...state, myName: action.name }
  }
  return state
}