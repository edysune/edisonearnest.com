import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { useParams } from 'react-router-dom';
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import RenderBlog from "components/blogs/RenderBlog.js";
import { getBlogFromUrl } from "components/blogs/BlogSearchService.js";

export default () => { //eslint-disable-line
  let { url } = useParams()
  let urlBase = '/blog/'
  let blogMatch = getBlogFromUrl(`${urlBase}${url}`);
  return (
    <AnimationRevealPage>
      <Header />
      <RenderBlog blog={blogMatch}></RenderBlog>
      <Footer />
    </AnimationRevealPage>
  );
}
