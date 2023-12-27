import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogIndex from "pages/BlogIndex";
import RecipeIndex from "pages/RecipeIndex";
import About from "pages/About";
import SimpleLandingPage from "demos/SimpleLandingPage";
import AI01 from "components/blogs/BlogPages/AI01";
import MeetRolly from "components/blogs/BlogPages/MeetRolly";
import RenderRecipeTemplate from "components/recipes/RenderRecipeTemplate"

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/blog/ai-journey-part-1" element={<AI01 />} />
          <Route path="/blog/meet-rolly" element={<MeetRolly />} />
          <Route path="/recipe/:url" element={<RenderRecipeTemplate />} />
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
