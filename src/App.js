import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const Model = lazy(() => import("./pages/Model"));
const Trending = lazy(() => import("./pages/Trending"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ModelForm = lazy(() => import("./pages/ModelForm"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="md:w-5/6 h-[88vh] overflow-y-scroll">
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/search" element={<Search />} />
                <Route path="/add" element={<ModelForm />} />
                <Route path="/model/:id" element={<Model />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
