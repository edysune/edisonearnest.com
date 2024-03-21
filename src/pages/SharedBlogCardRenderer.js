import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
// import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
import { Stack, Chip } from '@mui/material';

import noResults1 from "images/codes/noResults_1.jpg";

const NoResultsTitle = tw.h1`mt-20 text-lg`;
const NoResultsImage = tw.img`rounded-3xl mx-auto h-[40%] w-[40%]`;

const Posts = tw.div`sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-r-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg h-full border-2 hover:border-[#facc15] hover:bg-[#fefce8]`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
// const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Info = tw.div`p-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-[#013a6a] transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({ //eslint-disable-line
  posts = []
}) => {
  const errorNoResultsMsg = 'No matches found!';
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => { //eslint-disable-line
    setVisible(v => v + 6);
  };

  if (!posts?.length || posts.length === 0) {
    return (<>
      <NoResultsTitle style={{textAlign:"center", fontSize: '3rem'}}>{errorNoResultsMsg}</NoResultsTitle>
      <NoResultsImage src={noResults1}  />
    </>);
  }

  return (
    <>
      <Posts>
      {posts.slice(0, visible).map((post, index) => (
        <PostContainer key={index} featured={post.featured}>
          <Post className="group" as="a" href={post.url}>
            <Image imageSrc={post.imageSrc} />
            <Info>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {post?.tags?.map((tag, index) => (
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
              <CreationDate>{post.date}</CreationDate>
              <Title>{post.title}</Title>
              {post.featured && post.description && <Description>{post.description}</Description>}
            </Info>
          </Post>
        </PostContainer>
      ))}
    </Posts>
    {visible < posts.length && (
      <ButtonContainer>
        <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
      </ButtonContainer>
    )}
  </>
  );
};