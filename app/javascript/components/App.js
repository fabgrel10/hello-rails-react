import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloWorld />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
