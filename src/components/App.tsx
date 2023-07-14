import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import SingleBeer from "../pages/SingleBeer";
import Header from "./Header";

const App: FC = () => {
  return (
    <>
    <Router>
      <Header />
      <main className="max-w-[85%] m-auto  ">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<SingleBeer />} />
          </Routes>
      </main>
      
      </Router>
    </>
  );
};

export default App;
