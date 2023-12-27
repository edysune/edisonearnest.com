import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { useParams } from 'react-router-dom';
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import RenderRecipe from "components/recipes/RenderRecipe.js";
import { getRecipeFromUrl } from "components/recipes/RecipeSearchService.js";

export default () => { //eslint-disable-line
  let { url } = useParams()
  let urlBase = '/recipe/'

  let recipeMatch = getRecipeFromUrl(`${urlBase}${url}`);
  // console.log("RECIPE MATCH:" + url);
  // console.log(recipeMatch);

  return (
    <AnimationRevealPage>
      <Header />
      <RenderRecipe recipe={recipeMatch}></RenderRecipe>
      <Footer />
    </AnimationRevealPage>
  );
}
