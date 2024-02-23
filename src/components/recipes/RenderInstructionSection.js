import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import React from "react";
import { SectionHeadingLeftWithBottomSpacing } from "components/misc/Headings.js";
import './RenderRecipe.css';

const InstructionText = styled.p(props => [
  tw`lg:py-0 text-left md:text-left leading-relaxed text-secondary-100`
]);

const InstructionPrefix = styled.p`
  font-size: 40px;
  font-weight: 400;
`;

const RenderInstructionSection = ({ //eslint-disable-line
  recipeMatch = null,
}) => {
  function highlightInstruction(event) {
    event.currentTarget.classList.toggle('highlight-instruction');
  }

  function createInstructionsData(recipeMatch) {
    let cookingInstructions = [];
    let index = 0;
    cookingInstructions = recipeMatch.instructions.map(instruction => {
      index = index + 1;
      return { prefix: `${index}`, instruction: `${instruction}`};
    });
    return cookingInstructions;
  }

  const instructionRows = createInstructionsData(recipeMatch);

  return (
  <div>
    <SectionHeadingLeftWithBottomSpacing>Cooking Instructions</SectionHeadingLeftWithBottomSpacing>
    {instructionRows.map((instruction) => (
      <div style={{ display: 'flex' }} onClick={highlightInstruction}>
        <div style={{ float: 'left', width: 'auto', paddingLeft: '5px', paddingRight: '5px' }}>
          <InstructionPrefix style={{ color: 'rgb(1, 58, 106)' }}>{instruction.prefix}</InstructionPrefix>
        </div>
        <div>
          <InstructionText style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            {instruction.instruction}
          </InstructionText>
        </div>
      </div>
    ))}
  </div>
  );
};

export default RenderInstructionSection;
