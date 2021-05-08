import { ADD, UPDATE, REMOVE, UPDATEAUTHOR } from "./action";

//define reducer

const defaultState = [{ genres: [], feed: [], author: "kuvempu" }];

export const genresReducer = (state = defaultState, action) => {
  let newState = state[0];
  switch (action.type) {
    case ADD:
      newState.genres.push(action.genre);
      return [newState];
    case REMOVE:
      let tmp = newState.genres;
      let filtered = tmp.filter((value, index, tmp) => value !== action.genre);
      newState.genres = filtered;
      return [newState];
    case UPDATE:
      newState.feed = action.feed;
      return [newState];
    case UPDATEAUTHOR:
      newState.author = action.author;
      return [newState];
    default:
      return state;
  }
};
