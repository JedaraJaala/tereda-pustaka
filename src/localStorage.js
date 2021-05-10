import Quotes from "./quotes.json";

export const  loadState = () => {
  try {
    
    const serializedState = localStorage.getItem("state");
    if (serializedState !== null && serializedState[0].application==="teredapustaka") {
      return JSON.parse(serializedState); 
    }
    return [{ genres: [], feed: Quotes, author: "kuvempu",application:"teredapustaka" }];
    
  } catch (err) {
    return [{ genres: [], feed: Quotes, author: "kuvempu",application:"teredapustaka" }];
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
