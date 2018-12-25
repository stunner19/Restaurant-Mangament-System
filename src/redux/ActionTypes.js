export const ADD_COMMENT = 'ADD_COMMENT';
export const DISHES_LOADING = 'DISHES_LOADING';
export const DISHES_FAILED = 'DISHES_FAILED';
export const ADD_DISHES = 'ADD_DISHES';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const COMMENTS_FAILED = 'COMMENTS_FAILED';
export const PROMOS_LOADING = 'PROMOS_LOADING';
export const ADD_PROMOS = 'ADD_PROMOS';
export const PROMOS_FAILED = 'PROMOS_FAILED';

// You may be wondering why we don't have a COMMENTS_LOADING, the comments will be loaded behind the scenes. When we render our application, 
// we'll first render the home component. By the time the home component is rendered, the comments will also be fetched in. So, by the time we 
// navigate to the dish details component, the comments would have already been fetched in. So that's why I don't have a specific comments 
// loading part setup in my application. 