import { SectionHeadingLeftWithBottomSpacing } from "components/misc/Headings.js";
import React from "react";
import './RenderRecipe.css';

function checkboxEventHandler(event) {
  console.log("HELLO WORLD")
  event.currentTarget.classList.toggle('checked-ingrediant');
  event.currentTarget.classList.toggle('unchecked-ingrediant');
}

const RenderIngredientSection = ({ //eslint-disable-line
  recipeMatch = null,
}) => {

  return (
  <div>
    <SectionHeadingLeftWithBottomSpacing>Ingredients</SectionHeadingLeftWithBottomSpacing>
    {recipeMatch?.ingredients.map((ingredient) => (
      <div
        onClick={checkboxEventHandler}
        className="unchecked-ingrediant ingrediant-item"
        sx={{ margin: '10px', fontWeight: 'bold' }}
      >
        {ingredient}
      </div>
    ))}
  </div>
  );
};

export default RenderIngredientSection;
