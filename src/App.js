import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Model from "./pages/Model";
import Trending from "./pages/Trending";
import NotFound from "./components/NotFound";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="w-3/4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="model/:id" element={<Model />} />
            <Route component={NotFound} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
