import * as React from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant'; //Prepare
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'; //Cook
import CompressIcon from '@mui/icons-material/Compress';
import ScaleIcon from '@mui/icons-material/Scale';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import tw from "twin.macro";

export default function RecipeOverviewCard({ //eslint-disable-line
    info = null
}) {
    const InfoContainer = tw.div` w-full max-w-md mx-auto md:max-w-none md:mx-0`;
    const InfoItemBox = tw.div`inline-block align-top w-1/3 h-full`;
    const InfoItemBoxBorder = tw(InfoItemBox)`border-r border-[#0]`;
    const Item = tw.p`m-5`;
    const ItemLabel = tw.span`font-extrabold`;

    function GetIconFromType(iconType) {
        const fs = 70;            
        switch (iconType) {
            case 'prepTime':
                return <RestaurantIcon sx={{ fontSize: fs }} />;
            case 'cookTime':
                return <AccessAlarmIcon sx={{ fontSize: fs }} />;
            case 'pressureCookTime':
                return <CompressIcon sx={{ fontSize: fs }} />;
            case 'servings':
                return <ScaleIcon sx={{ fontSize: fs }} />;
            default:
                return <QuestionMarkIcon sx={{ fontSize: fs }} />;
        }
    }

    function GenItemBox(hasBorder = true) {
        return hasBorder ? InfoItemBox : InfoItemBox;
    }

    function GenItem(label, value, units = 'N/A', hideOnNull = false) {
        if (hideOnNull && (!value || value === 0 || value === 'N/A')) { return; }
        return (
            <Item><ItemLabel>{label}</ItemLabel> {value}{units !== 'N/A' ? ` ${units}` : ''}</Item>
        )
    }

    if (info.value === "N/A") {
        return;
    } else {
        return (
            <InfoContainer>
                <InfoItemBoxBorder>
                    {GenItem('Level: ', info?.level)}
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
