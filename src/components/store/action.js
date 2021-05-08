export const ADD = "ADD";
export const addGenre = (genre) => ({
  type: ADD,
  genre
});

export const REMOVE = "REMOVE";
export const removeGenre = (genre) => ({
  type: REMOVE,
  genre
});

export const UPDATE = "UPDATE";
export const updateFeed = (feed) => ({
  type: UPDATE,
  feed
});

export const UPDATEAUTHOR = "ADDAUTHOR";
export const updateAuthor = (author) => ({
  type: UPDATEAUTHOR,
  author
});
