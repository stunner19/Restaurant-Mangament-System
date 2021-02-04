import * as ActionTypes from './ActionTypes';

export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}
            // use this sprint operator from ES6. So, that means that this state, that whatever the state is, I'm just going to take the same state and then I can add, 
            // and so this is the sprint operator that I'm going to load in here. So, it will take the current value of the state and then whatever else that I passing 
            // in after this will be applied as modifications to the state. So again, the state itself will not be mutated, instead, I take the state, I create a new 
            // object from the original state and then make some changes to that object and then return that object. So that's why I am returning an immutable from here.
            // So, the state itself is not going to be mutated here. Maybe in between, you're refreshing the information from the server. So at that point, you will want 
            // to do it this way. You said that isLoading to two and the remaining two, you will set to null and the dishes to an empty object here.
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
            // So, by doing this, what we are specifying is that their dishes have tried to be loaded but it failed. This is the corresponding error message that I've
            // received, so that is what I'm going to be setting the error message. Now, by doing this, when your state is set up like that, when your React Component 
            // retrieves the state, it can then interpret this information accordingly and then display this information in the view, as per what the state contains. 
        default:
            return state;
    }
};