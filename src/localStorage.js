import Quotes from "./quotes.json";

const defaultState = { 
  genres: [], 
  feed: Quotes,
   author: "kuvempu",
   application:"teredapustaka" 
  }


export const  loadState = () => {
  try {
    
    const serializedState = localStorage.getItem("state");
    if (serializedState !== null && serializedState.application==="teredapustaka") {
      return JSON.parse(serializedState); 
    }
    return defaultState;
    
  } catch (err) {
    return defaultState;
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
