import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {...state, errMess: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
      return {...state, errMess: action.payload};

    case ActionTypes.ADD_COMMENT:
        var comment = action.payload;
        // the comment ID is automatically created by the server, so that'll be all automatically included there. So, I can remove this from 
        // the addComment, and then similar to the date, we've already put that into place in the postComment, so I can remove that from there.
        // when you post a comment, you will first send the comment over to the server, and if the comment is successfully added on the server
        // site and the server sends back a success of the posting of the comment, only then you will add it to the redux store. So, that way,
        // you ensure that the comment posted by the user is actually reflected by changing the data on the server site before even adding it
        // to that redux store.
        return { ...state, comments: state.comments.concat(comment)};

    default:
      return state;
  }
};

// similar to dishes.