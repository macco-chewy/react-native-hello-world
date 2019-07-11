import { REQUEST_FETCH, RESOLVE_FETCH, FAIL_FETCH } from 'constants';
import getPeople from 'api';

export function testFetchRequest() {
  return {
    type: REQUEST_FETCH,
  };
}

export function testFetchSuccess(data) {
  return {
    type: RESOLVE_FETCH,
    data,
  };
}

export function testFetchFailure() {
  return {
    type: FAIL_FETCH,
  };
}

export function testFetch() {
  return (dispatch) => {
    dispatch(testFetchRequest());
    getPeople()
      .then((data) => {
        dispatch(testFetchSuccess(data));
      })
      .catch((e) => {
        dispatch(testFetchFailure(e));
      });
  };
}
