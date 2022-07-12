import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Greeting from "./Greeting";
import {Provider} from "react-redux";
import store from "../redux/configureStore";
import "./App.css";

function App() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Greeting/>}/>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </div>
  )
}

export default App
