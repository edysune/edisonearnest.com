import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant'; //Prepare
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'; //Cook
import CompressIcon from '@mui/icons-material/Compress';
import ScaleIcon from '@mui/icons-material/Scale';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import tw, {css} from "twin.macro";

export default function RecipeOverviewCard({ //eslint-disable-line
    info = null
}) {
    const IconContainer = tw.div`text-center`;


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

    if (info.value === "N/A") {
        return;
    } else {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    {/* <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                    /> */}
                    <IconContainer>
                        {GetIconFromType(info.type)}
                    </IconContainer>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.text} {info.value}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}