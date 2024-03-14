import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogIndex from "pages/BlogIndex";
import RecipeIndex from "pages/RecipeIndex";
import About from "pages/About";
import MainLandingPage from "MainLandingPage";
import RenderRecipeTemplate from "components/recipes/RenderRecipeTemplate"
import RenderBlogTemplate from "components/blogs/RenderBlogTemplate"

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/blog/:url" element={<RenderBlogTemplate />} />
          <Route path="/recipe/:url" element={<RenderRecipeTemplate />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blogs" element={<BlogIndex />} />
          <Route path="/recipe" element={<RecipeIndex />} />
          <Route path="/recipes" element={<RecipeIndex />} />
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/home" element={<MainLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}
