import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, { NavLinks, NavLink } from "components/headers/light.js";

const Header = tw(HeaderBase)`max-w-none`;

export default ({ //eslint-disable-line
}) => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/recipes">Recipes</NavLink>
    </NavLinks>
  ];
  return (
    <>
      <Header links={navLinks} />
    </>
  );
};
