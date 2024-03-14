import * as React from 'react';
import tw from "twin.macro";

export default function RecipeOverviewCard({ //eslint-disable-line
    info = null
}) {
    const InfoContainer = tw.div`mt-5 w-full max-w-md mx-auto md:max-w-none md:mx-0 text-center`;
    const InfoItemBox = tw.div`inline-block align-top w-1/3`;
    const InfoItemBoxBorder = tw(InfoItemBox)`border-r border-opacity-10`;
    const Item = tw.p`h-full mx-[3px] my-5`;
    const ItemLabel = tw.span`font-extrabold`;

    const Easy = tw.span`text-green-500`;
    const Medium = tw.span`text-orange-500`;
    const Hard = tw.span`text-red-500`;

    function GenItem(label, value, units = 'N/A', hideOnNull = false, addValueStyle = false) {
        if (hideOnNull && (!value || value === 0 || value === 'N/A')) { return; }
        let itemText = (<>{value}{units !== 'N/A' ? ` ${units}` : ''}</>);
        if (addValueStyle) {
            switch(value) {
                case 'Easy':
                    itemText = (<Easy> {value}{units !== 'N/A' ? ` ${units}` : ''}</Easy>);
                    break;
                case 'Medium':
                    itemText = (<Medium> {value}{units !== 'N/A' ? ` ${units}` : ''}</Medium>);
                    break;
                case 'Hard':
                    itemText = (<Hard> {value}{units !== 'N/A' ? ` ${units}` : ''}</Hard>);
                    break;
                default:
                    break;
            }
        }
        return (<Item><ItemLabel>{label}</ItemLabel>{itemText}</Item>)
    }

    if (info.value === "N/A") {
        return;
    } else {
        return (
            <InfoContainer>
                <InfoItemBoxBorder>
                    {GenItem('Level: ', info?.level, 'N/A', null, true)}
                    {GenItem('Total Time: ', info?.cookTime?.prepTime + info?.cookTime?.cookTime, info?.cookTime?.units)}
                </InfoItemBoxBorder>
                <InfoItemBoxBorder>
                    {GenItem('Prep Time: ', info?.cookTime?.prepTime, info?.cookTime?.units)}
                    {GenItem('Cook Time: ', info?.cookTime?.cookTime, info?.cookTime?.units)}
                    {GenItem('Pressure Cook Time: ', info?.cookTime?.pressureCookTime, info?.cookTime?.units, true)}
                </InfoItemBoxBorder>
                <InfoItemBox>
                    {GenItem('Servings: ', info?.servings?.totalServings, info?.servings?.units, false, false)}
                </InfoItemBox>
            </InfoContainer>
        );
    }
}
