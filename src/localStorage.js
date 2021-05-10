import Quotes from "./quotes.json";



export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return [{ genres: [], feed: Quotes, author: "kuvempu" }];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [{ genres: [], feed: Quotes, author: "kuvempu" }];
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    //ignore
  }
};
