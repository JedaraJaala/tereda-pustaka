import "./styles.scss";
import Posts from "./components/Posts.js";
import pictures from "./pictures.json";
import Genres from "./components/Genres.js";
import Header from "./components/Header.js";
import Pictures from "./components/Pictures.js";
//import Author from "./components/Author";

//redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import { saveState, loadState } from "./localStorage";
import { genresReducer } from "./components/store/reducers";

//Router
import { Route, Switch } from "react-router-dom";

//others

import React, { useEffect } from "react";
import Author from "./components/Author";

//define persisted state
const persistedState = loadState();

// define redux store
const store = createStore(genresReducer, persistedState);
store.subscribe(() => {
  saveState(store.getState());
});
/*
const Author = Loadable({
  loader: () => import("./components/Author"),
  loading: CircularProgress
});
*/

export default function App() {
  useEffect(()=>{
    loadState()
  },[])
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="pictures">
          <Pictures Images={pictures} />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Genres />
              <Posts />
            </Route>
            <Route exact path="/author">
              <Author />
            </Route>
          </Switch>
        </div>
      </div>
    </Provider>
  );
}
