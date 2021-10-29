//import action string here
import { ADD_BUTTON_ONE } from "./constants";

//create action that will dispatch to a reducer which will update redux state
export const addButtonOne = () => ({
    type: ADD_BUTTON_ONE
});