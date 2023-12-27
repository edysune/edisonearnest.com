import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { SectionHeadingLeftWithBottomSpacing, SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import React from "react";
import { searchForRecipeImage } from "components/recipes/RecipeSearchService.js";
import { Stack, Divider, Chip } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled as materialStyled } from '@mui/material/styles';
import RecipeOverviewCard from 'components/recipes/RecipeOverviewCard';

const Container = tw.div`relative`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-5 lg:py-10`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto items-center pt-10`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-lg lg:text-3xl font-medium leading-relaxed text-secondary-100`;
const HeadingInfoContainerLeft = tw.div`flex flex-col`;

const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Item = materialStyled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
  tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`
]);

const RenderRecipe = ({ //eslint-disable-line
  recipe = null,
  textOnLeft = true
}) => {
  const recipeMatch = recipe;
  const recipeMatchImage = searchForRecipeImage(recipeMatch);

  const myStyle={
    // width:'1000px', 
    // height:'1000px', 
  }; 

  function createNutritionData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  function createInstructionsData(recipeMatch) {
    let cookingInstructions = [];
    let index = 0;
    cookingInstructions = recipeMatch.instructions.map(instruction => {
      index = index + 1;
      return { prefix: `[Step ${index}]`, instruction: `${instruction}`};
    });
    return cookingInstructions;
  }

  const nutritionRows = recipeMatch.nutrition.map(nutrition => 
    createNutritionData(nutrition.servingSize, nutrition.calories, nutrition.fat, nutrition.carbs, nutrition.protein));

  const instructionRows = createInstructionsData(recipeMatch);

  return (
  <Container>
    <TwoColumn>
      <ImageColumn>
        <Image style={myStyle} src={recipeMatchImage}/>
      </ImageColumn>
      <TextColumn textOnLeft={textOnLeft}>
        <TextContent>
        <Stack direction="row" spacing={1}>
            {recipeMatch?.tags.map((tag, index) => (
              <Chip
                sx={{
                  fontSize: '20px',
                }}
                key={index}
                label={tag}
                color="primary"
                readOnly
              />
            ))}
          </Stack>
          <Heading>{recipeMatch?.title}</Heading>
          {/* <Description>Author: {recipeMatch?.author}</Description> */}
          <Subheading>Last Updated: {recipeMatch?.date}</Subheading>
          <Subheading>Recipe Source: {recipeMatch?.source}</Subheading>
          <TextContent>{recipeMatch?.description}</TextContent>
        </TextContent>
        <Divider></Divider>
      </TextColumn>
    </TwoColumn>
    <SingleColumn>
      <Stack 
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={4}
      >
        {recipeMatch?.overviewInfo.map((info) => (
          <RecipeOverviewCard info={info}></RecipeOverviewCard>
        ))}
      </Stack>
      <HeadingInfoContainerLeft>
        <SectionHeadingLeftWithBottomSpacing>Ingredients</SectionHeadingLeftWithBottomSpacing>
        <Stack 
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={4}
        >
          {recipeMatch?.ingredients.map((ingredient) => (
           <Item sx={{ backgroundColor: 'rgb(209, 213, 219)', padding: '15px', margin: '30px', fontWeight: 'bold' }}>{ingredient}</Item>
          ))}
        </Stack>
      </HeadingInfoContainerLeft>
    </SingleColumn>
    <SingleColumn>
      <Divider></Divider>
      <HeadingInfoContainerLeft>
        <SectionHeadingLeftWithBottomSpacing>Cooking Instructions</SectionHeadingLeftWithBottomSpacing>
        {instructionRows.map((instruction) => (
          <Description><span style={{color: 'rgb(1, 58, 106)'}}>{instruction.prefix}</span> {instruction.instruction}</Description>
        ))}
      </HeadingInfoContainerLeft>
    </SingleColumn>
    <SingleColumn>
      <Divider></Divider>
        <HeadingInfoContainerLeft>
          <SectionHeadingLeftWithBottomSpacing>Nutrition Facts</SectionHeadingLeftWithBottomSpacing>
        </HeadingInfoContainerLeft>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>(1 serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nutritionRows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SingleColumn>
  </Container>
  );
};

export default RenderRecipe;
