import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogIndex from "pages/BlogIndex";
import RecipeIndex from "pages/RecipeIndex";
import About from "pages/About";
import SimpleLandingPage from "demos/SimpleLandingPage";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/components/:type/:name" element={<ComponentRenderer />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blogs" element={<BlogIndex />} />
          <Route path="/recipe" element={<RecipeIndex />} />
          <Route path="/recipes" element={<RecipeIndex />} />
          <Route path="/" element={<SimpleLandingPage />} />
          <Route path="/home" element={<SimpleLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}