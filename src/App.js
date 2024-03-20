import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "pages/About";
import MainLandingPage from "MainLandingPage";
import RenderRecipeTemplate from "components/recipes/RenderRecipeTemplate"
import RenderBlogTemplate from "components/blogs/RenderBlogTemplate"
import SharedBlogIndex from "pages/SharedBlogIndex";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/blog/:url" element={<RenderBlogTemplate />} />
          <Route path="/recipe/:url" element={<RenderRecipeTemplate />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<SharedBlogIndex type='blog'/>} />
          <Route path="/blogs" element={<SharedBlogIndex type='blog'/>} />
          <Route path="/recipe" element={<SharedBlogIndex type='recipes'/>} />
          <Route path="/recipes" element={<SharedBlogIndex type='recipes'/>} />
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/home" element={<MainLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}
