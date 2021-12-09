import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainThing from "./Component]/MaintThing";
import HelloWorld from "./Component]/movieindetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainThing />}></Route>
        <Route path="/:id" exact element={<HelloWorld />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
