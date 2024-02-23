import tw from "twin.macro";
import { SectionHeadingLeftWithBottomSpacing } from "components/misc/Headings.js";
import React from "react";
import './RenderRecipe.css';

const Item = tw.div`lg:w-1/2 sm:w-5/6`;

function checkboxEventHandler(event) {
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
      <Item
        onClick={checkboxEventHandler}
        className="unchecked-ingrediant ingrediant-item"
        sx={{ margin: '10px', fontWeight: 'bold' }}
      >
        {ingredient}
      </Item>
    ))}
  </div>
  );
};

export default RenderIngredientSection;
