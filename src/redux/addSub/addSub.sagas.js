//import saga effects takeEvery, put
import { takeEvery, put } from '@redux-saga/core/effects';
//import action.types object from addSub.types.js
import AddSubActionTypes from './addSub.types';

//import actions
import { addToReducer } from './addSub.actions';

//create generate function for addSaga
function* addSaga() {
    try {
        yield console.log('addSaga');
        yield put(addToReducer());
    } catch(error) {
        console.log('error', error);
    } finally {
        console.log('finally always runs');
    }
}

//create generate function for subSaga

//create top generate function to monitor all sagas from the addSub files
export function* addOrSubSaga() {
    yield takeEvery(AddSubActionTypes.INCREMENT_SAGA, addSaga)
}