import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import LogoImage from "images/ee-icon.png";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const Container = tw.div`relative bg-gray-100 text-gray-700 border-dashed border-t-2 border-gray-500 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;
const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;
const ColumnHeading = tw.h5`uppercase font-bold`;
const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;
const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;
const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;
const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;
const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;

const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => { //eslint-disable-line
  return (
    <Container>
      <Content>
        <SixColumns>
          <Column>
            <ColumnHeading>Main</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/blog">Blog</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/recipes">Recipes</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/about">About</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Github Projects</ColumnHeading>
            <LinkList>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Contact</ColumnHeading>
            <LinkList>
            </LinkList>
          </Column>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>EdisonEarnest.com</LogoText>
          </LogoContainer>
          <CopywrightNotice>&copy; 2024 EdisonEarnest.com All Rights Reserved.</CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://github.com/edysune">
              <GithubIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/edison-earnest-3275501b6/">
              <LinkedinIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
