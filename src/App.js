import "./App.css";

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navi from "./components/Navi";

function App() {
  const submitHandler = (name, email, description) => {
    const obj = { name: name, email: email, description: description };
 
    console.log(obj) };

  return (
    <>
      <BrowserRouter>
        <Navi />
        <Routes>
          <Route path="/spots" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<Contact onAddForm={submitHandler} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
