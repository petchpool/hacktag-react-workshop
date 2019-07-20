const initState = {
  app_name: 'Redux Tutorial',
  count: 1
}

export const globalReducers = (state = initState, action) => {
  console.log(state, action)
  if (action.type === 'COUNT_UP') {
    return {
      ...state,
      count: state.count + action.number
    }
  } else if (action.type === 'COUNT_DOWN') {
    return {
      ...state,
      count: state.count - action.number
    }
  }
  return state
}