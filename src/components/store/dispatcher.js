import { addGenre, removeGenre, updateFeed } from "./action";

export const mapDispatchToProps = (dispatch) => {
  return {
    addNewGenre: (genre) => {
      dispatch(addGenre(genre));
    },
    removeOldGenre: (genre) => {
      dispatch(removeGenre(genre));
    },
    updateUserFeed: (feed) => {
      dispatch(updateFeed(feed));
    }
  };
};
