// import React, { useRef } from "react";
import React from "react";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import './ConsoleHeader.css';
import {generateNextFrame, generateNextName} from './DrawService.js';
import { useNavigate } from "react-router-dom";

const Row = tw.div`flex`;
const NavContainer = tw.div`z-20 grid grid-cols-3 gap-5 content-stretch`;
const ConsoleNavButton = tw.div`z-20 border-[3px] rounded-[10px] hover:bg-blue-700`;
const NavText = tw.p`relative font-mono text-center`;

const NavButtonSize = '20vh';

export default ({ //eslint-disable-line
}) => {
  const navigate = useNavigate();
  const buttonRefreshRate = 400;
  // const backRefreshRate = 500;
  // const firstModel = generateNextFrame([]);
  // const [model, setModel] = useState(firstModel);
  // const name1 = 'Edison';
  // const name2 = 'Earnest';
  // const [currentName1, setName1] = useState(name1);
  // const [currentName2, setName2] = useState(name2);
  // // const ref = useRef(null);

  const onButtonIntervalChange = () => {
    //todo: figure out ratios, or maybe I need to figure out if I can stretch out text or something? Width doesn't work because zooming in/out doesn't 
    // console.log('width', ref.current ? ref.current.offsetWidth : 0);
    // let nextFrame = generateNextFrame(model);
    // setModel(nextFrame);
  };

  const onAboutNavigation = () => {
    navigate("/about");
  }

  const onBlogNavigation = () => {
    navigate("/blogs");
  }

  const onRecipieNavigation = () => {
    navigate("/recipes");
  }

  useEffect(() => {
    const buttonConsoleInterval = setInterval(() => {
      // console.log('interval hit!');
      onButtonIntervalChange();
    }, buttonRefreshRate);

    return () => {
      clearInterval(buttonConsoleInterval);
    }
  }, []);//eslint-disable-line

  function NavTextContent(text, color = "yellow") {
    // const customClasses = 'vertical-center ' + color;
    const customClasses = 'vertical-center nav-button-text';
    return <>
      <NavText className={customClasses} style={{fontSize: '6vw'}}>{text}</NavText>
    </>
  }

  return (
    <>
      <NavContainer className="containerNavButtons" style={{ height: NavButtonSize }}>
        <ConsoleNavButton onClick={onAboutNavigation} className="center yellow" style={{ height: NavButtonSize }}>{NavTextContent('About', 'yellow')}</ConsoleNavButton>
        <ConsoleNavButton onClick={onBlogNavigation} className="center green" style={{ height: NavButtonSize }}>{NavTextContent('Blogs', 'green')}</ConsoleNavButton>
        <ConsoleNavButton onClick={onRecipieNavigation} className="center blue" style={{ height: NavButtonSize }}>{NavTextContent('Recipes', 'blue')}</ConsoleNavButton>
      </NavContainer>
    </>
  );
};
