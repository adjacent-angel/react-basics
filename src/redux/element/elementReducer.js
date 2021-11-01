const INITIAL_STATE = ['fire', 'ice', 'wind', 'lightning', 'water', 'earth'];

export const elementReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_ELEMENTS':
            return action.payload;
        default:
            return state;
    }
};