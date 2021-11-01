//import action.types object here
import AddSubActionTypes from "./addSub.types";

//reducer actions
//addOnButtonPress
export const addToReducer = () => ({
    type: AddSubActionTypes.INCREMENT
});

//subOnButtonPress

//Sagas actions
//addFromSaga
export const addFromSaga = () => ({
    type: AddSubActionTypes.INCREMENT_SAGA
});

//subFromSaga