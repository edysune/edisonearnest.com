import React from "react";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import './ConsoleHeader.css';
import { useNavigate } from "react-router-dom";
import {generateNextButtonFrame} from './DrawService.js';

const NavContainer = tw.div`z-20 grid grid-cols-3 gap-3 content-stretch`;
const ConsoleNavButton = tw.div`z-20 border-[5px] rounded-[10px] hover:bg-blue-700`;
const NavButton = tw.div`relative z-30 w-full h-full overflow-hidden rounded-[10px]`;
const NavButtonText = tw.p`absolute text-center h-full w-full`;
const TextBackground = tw.p`text-white text-left opacity-25 whitespace-pre font-mono`;

const NavButtonSize = '20vh';

export default ({ //eslint-disable-line
}) => {
  const navigate = useNavigate();
  const buttonRefreshRate = 300;
  const [aboutModel, setAboutModel] = useState(generateNextButtonFrame([]));
  const [blogsModel, setBlogsModel] = useState(generateNextButtonFrame([]));
  const [recipesModel, setRecipesModel] = useState(generateNextButtonFrame([]));

  const onButtonIntervalChange = () => {
    let nextAboutFrame = generateNextButtonFrame(aboutModel);
    let nextBlogsFrame = generateNextButtonFrame(blogsModel);
    let nextRecipesFrame = generateNextButtonFrame(recipesModel);
    setAboutModel(nextAboutFrame);
    setBlogsModel(nextBlogsFrame);
    setRecipesModel(nextRecipesFrame);
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

  function ButtonBackgroundTex(model) {
    return model.map(row => {
      return <TextBackground style={{fontSize: '1vh', height: '1vh', lineHeight: '1vh'}}>{row}</TextBackground>;
    });
  }

  function NavTextContent(text, model, color = "yellow") {
    return <NavButton>
      <NavButtonText><div style={{fontSize: '6vw'}} className="vertical-center nav-button-text">{text}</div></NavButtonText>
      {ButtonBackgroundTex(model)}
    </NavButton>
  }

  return (
    <>
      <NavContainer className="containerNavButtons" style={{ height: NavButtonSize }}>
        <ConsoleNavButton onClick={onAboutNavigation} className="center yellow" style={{ height: NavButtonSize }}>{NavTextContent('About', aboutModel, 'yellow')}</ConsoleNavButton>
        <ConsoleNavButton onClick={onBlogNavigation} className="center green" style={{ height: NavButtonSize }}>{NavTextContent('Blogs', blogsModel, 'green')}</ConsoleNavButton>
        <ConsoleNavButton onClick={onRecipieNavigation} className="center blue" style={{ height: NavButtonSize }}>{NavTextContent('Recipes', recipesModel, 'blue')}</ConsoleNavButton>
      </NavContainer>
    </>
  );
};
