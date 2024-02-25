import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import React from "react";
import { searchForBlogImage } from "components/blogs/BlogSearchService.js";
import { Stack, Chip } from '@mui/material';
// import BlogContent from 'components/blogs/BlogContent.js';
import BlogRTEContent from 'components/blogs/BlogRTEContent.js';

const Container = tw.div`relative pb-20`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto items-center pt-10`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const BlogDescription = tw.div`pt-10 pb-12 text-center md:text-left`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

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

const RenderBlog = ({ //eslint-disable-line
  blog = null,
  textOnLeft = true
}) => {
  const blogMatch = blog;
  const blogMatchImage = searchForBlogImage(blogMatch);

  const myStyle={
    // width:'1000px', 
    // height:'1000px', 
  }; 

  const genBlogContent = (blogMatch) => {
    return <BlogRTEContent blog={blogMatch}></BlogRTEContent>;
    // if (!!blogMatch?.hidden) {
    //   return;
    // }
    // return <BlogContent blog={nextBlog}></BlogContent>
  }

  return (
  <Container>
    <TwoColumn>
      <ImageColumn>
        <Image style={myStyle} src={blogMatchImage}/>
      </ImageColumn>
      <TextColumn textOnLeft={textOnLeft}>
        <TextContent>
        <Stack direction="row" spacing={1}>
            {blogMatch?.tags.map((tag, index) => (
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
          <Heading>{blogMatch?.title}</Heading>
          {/* <Description>Author: {blogMatch?.author}</Description> */}
          <Subheading>Last Updated: {blogMatch?.date}</Subheading>
          {/* <Subheading>Blog Source: {blogMatch?.source}</Subheading> */}
          <BlogDescription>{blogMatch?.description}</BlogDescription>
        </TextContent>
      </TextColumn>
    </TwoColumn>
    {genBlogContent(blogMatch)}
    {/* {blogMatch?.blogs.map((b) => 
      genBlogContent(blogMatch, b)
    )} */}
  </Container>
  );
};

export default RenderBlog;
