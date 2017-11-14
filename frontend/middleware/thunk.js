const thunk = ({dispatch, getState}) => next => action => {
	// side effects, if any
  if (typeof action === 'function') {
    return action(dispatch, getSate)
  }
  return next(action);
};

export default thunk;
