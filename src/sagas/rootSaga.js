import { all } from 'redux-saga/effects'
import utillSaga from './utillSaga';
function* rootSaga() {
  yield all([
	utillSaga()
  ]);
}
export default rootSaga;
