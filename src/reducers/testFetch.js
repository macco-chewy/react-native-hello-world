import { REQUEST_FETCH, RESOLVE_FETCH, FAIL_FETCH } from 'constants';

export default function testFetch(state = null, action) {
  switch (action.type) {
    case RESOLVE_FETCH:
      return action.data;
    case FAIL_FETCH:
      return null;
    case REQUEST_FETCH:
    default:
      return state;
  }
}
