import React from "react";
import { Box, Stack} from '@mui/material';
import RecipeOverviewCard from 'components/recipes/RecipeOverviewCard';
import './RenderRecipe.css';

const RenderInfoSection = ({ //eslint-disable-line
  recipeMatch = null,
}) => {
  return (
  <div>
    <RecipeOverviewCard info={recipeMatch?.overviewInfo}></RecipeOverviewCard>
  </div>
  );
};

export default RenderInfoSection;
