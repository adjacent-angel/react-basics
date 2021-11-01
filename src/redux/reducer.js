// //use the action from the constant
// import { ADD_BUTTON_ONE, SUBMIT_FORM } from "./constants";

// //create object to initialize state of the reducer
// const initialState = {
//     count: 0
// };

// //create a simple reducer that is connected to a action of ADD_BUTTON_ONE
// //it will return state or state of count plus 1
// export const buttonOneReducer = (state=initialState, action={}) => {
//     switch(action.type) {
//         case ADD_BUTTON_ONE:
//             return {count: state.count + 1}
//         default:
//             return state;
//     }
// };

// //using an object to initialize state
// const userState = {
//     email: '',
//     password: ''
// }

// //a simple reducer that is connected to an action of SUBMIT_FORM
// //this reducer will recieve a payload and reassign the user to a new object
// export const userReducer = (state=userState, action={}) => {
//     switch(action.type) {
//         case SUBMIT_FORM:
//             return action.payload;
//         default:
//             return state;
//     }
// }