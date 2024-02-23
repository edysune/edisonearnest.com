import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { SectionHeadingLeftWithBottomSpacing } from "components/misc/Headings.js";
import React from "react";
import Paper from '@mui/material/Paper';
import { styled as materialStyled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import './RenderRecipe.css';

const Item = materialStyled(Paper)(({ theme }) => ({
  width: '50%',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

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
