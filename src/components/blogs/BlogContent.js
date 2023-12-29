import * as React from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import tw from "twin.macro";
import { searchForAllBlogImages, getRandomBlogImage } from "components/blogs/BlogSearchService.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import styled from "styled-components"; //eslint-disable-line
import ImageCarousel from 'components/blogs/ImageCarousel.js';

export default function BlogContent({ //eslint-disable-line
    blog = null
}) {
    // const IconContainer = tw.div`text-center`;
    // const Container = tw.div`relative`;
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
      return (
        <div>
        <SingleColumn>
            <TextColumn textOnLeft={textOnLeft}>
                {GenerateText(title, subheading, description)}
            </TextColumn>
        </SingleColumn>
                <ImageCarousel images={searchForAllBlogImages(blog)}></ImageCarousel>
                </div>
      );
    }

    function Generate2ColumnComponent(textOnLeft, imgSource, title, subheading, description) {
        
        return (
            <TwoColumn>
                <ImageColumn>
                    <Image src={imgSource}/>
                </ImageColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    {GenerateText(title, subheading, description)}
                </TextColumn>
            </TwoColumn>
        );
    }

    function GenerateText(title, subheading, description) {
        const genTitle = (title) => {
            if (!title) {
                return;
            }
            return <Heading>{title}</Heading>;
        }

        const genSubheading = (subheading) => {
            if (!subheading) {
                return;
            }
            return <Subheading>{subheading}</Subheading>;
        }

        const genDescription = (description) => {
            if (!description) {
                return;
            }
            return <TextContent>{description}</TextContent>;
        }

        return (
            <TextContent>
                {genTitle(title)}
                {genSubheading(subheading)}
                {genDescription(description)}
            </TextContent>
        );
    }

    function Generate1ColumnComponent(textOnLeft, title, subheading, description) {

        return (
            <SingleColumn>
                {/* <Divider></Divider> */}
                <TextColumn textOnLeft={textOnLeft}>
                    {GenerateText(title, subheading, description)}
                </TextColumn>
            </SingleColumn>
        );
    }

    function GetBlogFromType(blog) {
        const fs = 70;            
        switch (blog?.type) {
            case 'text':
                return Generate1ColumnComponent(true, blog?.title, blog?.subheading, blog?.text);
            case 'left-picture':
                return Generate2ColumnComponent(false, getRandomBlogImage(blog), blog?.title, blog?.subheading, blog?.text);
            case 'right-picture':
                return Generate2ColumnComponent(true, getRandomBlogImage(blog), blog?.title, blog?.subheading, blog?.text);
            case 'pictures':
                return StandardImageList(true, blog, blog?.title, blog?.subheading, blog?.text);
            default:
                return <QuestionMarkIcon sx={{ fontSize: fs }} />;
        }
    }
    if (!blog) {
        return;
    } else {
        return GetBlogFromType(blog);
    }
}