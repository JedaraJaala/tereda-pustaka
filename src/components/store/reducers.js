import { ADD, UPDATE, REMOVE, UPDATEAUTHOR } from "./action";

//define reducer

const defaultState = { 
  genres: [], 
  feed: [],
   author: "",
   application:"teredapustaka" 
  }

export const genresReducer = (state = defaultState, action) => {
  let newState = {...state};
  switch (action.type) {
    case ADD:
      newState.genres=[action.genre];
      return newState;
    case REMOVE:
      let tmp = newState.genres;
      let filtered = tmp.filter((value, index, tmp) => value !== action.genre);
      newState.genres = filtered;
      return newState;
    case UPDATE:
      newState.feed = action.feed;
      return newState;
    case UPDATEAUTHOR:
      return {...state,author:action.author};
    default:
      return state;
  }
};
