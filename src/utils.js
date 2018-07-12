export function pad(string) {
  return (`0${string}`).slice(-2);
}

export function formatTime(seconds) {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());

  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
}

export const createReducer = (initState, handlers) => (state = initState, action) => {
  // eslint-disable-next-line no-prototype-builtins
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};
