import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import tw from "twin.macro";
import { searchForAllBlogImages, getRandomBlogImage } from "components/blogs/BlogSearchService.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import styled from "styled-components"; //eslint-disable-line
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageCarousel from 'components/blogs/ImageCarousel.js';

export default function BlogContent({ //eslint-disable-line
    blog = null
}) {
    const IconContainer = tw.div`text-center`;

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
    // const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-lg lg:text-3xl font-medium leading-relaxed text-secondary-100`;
    // const HeadingInfoContainerLeft = tw.div`flex flex-col`;
    
    const TextColumn = styled(Column)(props => [
      tw`md:w-6/12 mt-16 md:mt-0`,
      props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
    ]);

    const Image = styled.img(props => [
        props.imageRounded && tw`rounded`,
        props.imageBorder && tw`border`,
        props.imageShadow && tw`shadow`,
        tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`
    ]);
    
    function StandardImageList(textOnLeft, blog, title, subheading, description) {
        
        // const itemData = [
        //     {
        //       img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        //       title: 'Breakfast',
        //     },
        //     {
        //       img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        //       title: 'Burger',
        //     },
        //     {
        //       img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        //       title: 'Camera',
        //     },
        //     {
        //       img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        //       title: 'Coffee',
        //     },
        //     {
        //       img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        //       title: 'Hats',
        //     },
        //     {
        //       img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        //       title: 'Honey',
        //     },
        //     {
        //       img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        //       title: 'Basketball',
        //     },
        //     {
        //       img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        //       title: 'Fern',
        //     },
        //     {
        //       img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        //       title: 'Mushrooms',
        //     },
        //     {
        //       img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        //       title: 'Tomato basil',
        //     },
        //     {
        //       img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        //       title: 'Sea star',
        //     },
        //     {
        //       img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        //       title: 'Bike',
        //     },
        //   ];
    
      return (
        <div>
        <SingleColumn>
            <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
                <Heading>{title}</Heading>
                <Subheading>{subheading}</Subheading>
                <TextContent>{description}</TextContent>
            </TextContent>
        </TextColumn>
        </SingleColumn>
                <ImageCarousel images={searchForAllBlogImages(blog)}></ImageCarousel>
                </div>
      );
    }

    // blog: [
    //     {
    //       type: "text",
    //       text: "Paragraph 1"
    //     },
    //     {
    //       type: "left-picture",
    //       picture: ["ai1"],
    //       text: "Paragraph 2"
    //     },
    //     {
    //       type: "right-picture",
    //       picture: ["ai2"],
    //       text: "Paragraph 3"
    //     },
    //     {
    //       type: "pictures",
    //       picture: ["ai1", "ai2"],
    //       text: "Paragraph 1",
    //     }
    //   ]

    function Generate2ColumnComponent(textOnLeft, imgSource, title, subheading, description) {
        
        return (
            <TwoColumn>
                <ImageColumn>
                    <Image src={imgSource}/>
                </ImageColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        <Heading>{title}</Heading>
                        <Subheading>{subheading}</Subheading>
                        <TextContent>{description}</TextContent>
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        );
    }

    function Generate1ColumnComponent(textOnLeft, title, subheading, description) {

        return (
            <SingleColumn>
                {/* <Divider></Divider> */}
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        <Heading>{title}</Heading>
                        <Subheading>{subheading}</Subheading>
                        <TextContent>{description}</TextContent>
                    </TextContent>
                </TextColumn>
            </SingleColumn>
        );
    }

    function GetBlogFromType(blog) {
        console.log(blog, blog?.type);
        const fs = 70;            
        switch (blog?.type) {
            case 'text':
                return Generate1ColumnComponent(true, blog?.type, blog?.type, blog?.text);
            case 'left-picture':
                return Generate2ColumnComponent(false, getRandomBlogImage(blog), blog?.type, blog?.type, blog?.text);
            case 'right-picture':
                return Generate2ColumnComponent(true, getRandomBlogImage(blog), blog?.type, blog?.type, blog?.text);
            case 'pictures':
                return StandardImageList(true, blog, blog?.type, blog?.type, blog?.text);
            default:
                return <QuestionMarkIcon sx={{ fontSize: fs }} />;
        }
    }
    // return;
    if (!blog) {
        return;
    } else {
        return GetBlogFromType(blog);
    }
}