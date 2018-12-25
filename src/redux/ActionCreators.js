import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});     // Creates an action object

export const fetchDishes = () => (dispatch) => {        // Create a thunk

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
    // SetTimeOut was originally put in place in other to simulate the communication with the server. Now, I'm going to replace that by the 
    // actual communication with the server. So, this is where we're going to make use of fetch to communicate with the server. 

    // So, how do we communicate with the server? So, I we'll say return fetch(baseUrl + 'dishes'). So recall the dishes are accessible at a 
    // localhost:3001/dishes. So when we set up fetch we need to give the full URL of the location where we are able to fetch the dishes 
    // information. And then after that we realize that we will setup the .then to handle the promise that is returned. So in the then when
    // the promise resolves, We'll first convert the incoming response into JSON by calling response.json. So this would convert that into 
    // JSON so that it can be processed there after. Now once we have done that, then we need to, Take that JSON. So once the JSON, so this 
    // response.json will convert that to response.json and then it will become available here. And then we'll call that as the parameter as 
    // a dish, dishes parameter. So this is the callback function that we have setup here, and then similarly this is the callback function. 
    // Now you see me using the arrow function here. So we'll say dishes and when the dishes is obtained, they will dispatch this to addDishes 
    // method that we have set up. And then simply pass the dishes into the ADD_DISHES method. That is it, so my fetchDishes is now set up to 
    // go and fetch the dishes and then, Once the dishes are obtained, then it'll push the dishes into the redux store here by dispatching 
    // that to the dishes.
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());
    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});