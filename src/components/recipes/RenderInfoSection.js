import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import React from "react";
import { Box, Stack} from '@mui/material';
import RecipeOverviewCard from 'components/recipes/RecipeOverviewCard';
import './RenderRecipe.css';

const RenderInfoSection = ({ //eslint-disable-line
  recipeMatch = null,
}) => {
  return (
  <div>
    <Box sx={{ width: "60%" }}>
      <Stack 
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={4}
        useFlexGap
        flexWrap="wrap"
      >
        {recipeMatch?.overviewInfo.map((info) => (
          <RecipeOverviewCard info={info}></RecipeOverviewCard>
        ))}
      </Stack>
    </Box>
  </div>
  );
};

export default RenderInfoSection;
