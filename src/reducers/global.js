
export function fetch(state = {}, action) {
  if (/^REQUEST_.*/.test(action.type)) {
    return {
      active: true,
      lastError: state.lastError || null,
    };
  }

  if (/^RESOLVE_.*/.test(action.type)) {
    return {
      active: false,
      lastError: state.lastError || null,
    };
  }

  if (/^FAIL_.*/.test(action.type)) {
    return {
      active: false,
      lastError: state.error,
    };
  }

  return state;
}
