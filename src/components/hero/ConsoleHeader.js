// import React, { useRef } from "react";
import React from "react";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import './ConsoleHeader.css';
import {generateNextFrame} from './DrawService.js';

const Console = tw.div`z-0 bg-black relative overflow-hidden`;

const TopConsole = tw.div`z-20 absolute w-full overflow-hidden`;
const TopLeftConsoleRow = tw.p`font-mono text-white opacity-50`;
const TopRightConsoleRow = tw.p`font-mono text-white opacity-50`;

const BottomConsole = tw.div`z-1 absolute w-full bg-[#1e293b] overflow-hidden whitespace-nowrap`;
const BottomConsoleRow = tw.p`font-mono text-xl text-[#60a5fa] opacity-25 overflow-hidden whitespace-pre`;

export default ({ //eslint-disable-line
}) => {
  const frontRefreshRate = 400;
  const backRefreshRate = 500;
  const firstModel = generateNextFrame([]);
  const [model, setModel] = useState(firstModel);
  const name1 = 'Edison';
  const name2 = 'Earnest';
  const [currentName1, setName1] = useState(name1);
  const [currentName2, setName2] = useState(name2);
  // const ref = useRef(null);

  const rateToChange = ".1"
  const rateToChangeBack = ".02"

  const onBackIntervalChange = () => {
    //todo: figure out ratios, or maybe I need to figure out if I can stretch out text or something? Width doesn't work because zooming in/out doesn't 
    // console.log('width', ref.current ? ref.current.offsetWidth : 0);
    let nextFrame = generateNextFrame(model);
    setModel(nextFrame);
  };

  const onFrontIntervalChange = () => {
    setName1(modifyName(currentName1, name1));
    setName2(modifyName(currentName2, name2));
  };

  useEffect(() => {
    const backConsoleInterval = setInterval(() => {
      // console.log('interval hit!');
      onBackIntervalChange();
    }, backRefreshRate);

    const frontConsoleInterval = setInterval(() => {
      // console.log('interval hit!');
      onFrontIntervalChange();
    }, frontRefreshRate);

    return () => {
      clearInterval(backConsoleInterval);
      clearInterval(frontConsoleInterval);
    }
  }, []);//eslint-disable-line

  function modifyName(modifiedName, originalName){
    let newName = "";
    for(let i = 0; i < modifiedName.length; i++) {
      if (modifiedName[i] !== originalName[i]) {
        if(Math.random() < rateToChangeBack) {
          newName = newName + originalName[i];
        } else {
          newName = newName + modifiedName[i];
        }
      } else if(Math.random() < rateToChange) {
        newName = newName + getMappedChar(originalName[i]);
      } else {
        newName = newName + originalName[i];
      }
    }

    return newName;
  }

  function getMappedChar(char) {
    const getRandom = (items) => {
      return items[Math.floor(Math.random()*items.length)];
    };
    //todo: move this stuff out of here!
    switch(char.toLowerCase()) {
      case 'e':
        return getRandom(['e','3']);
      case 'a':
        return getRandom(['A','@']);
      case 'r':
        return getRandom(['R','4']);
      case 'n':
        return getRandom(['N']);
      case 's':
        return getRandom(['S']);
      case 't':
        return getRandom(['T']);
      case 'd':
        return getRandom(['D']);
      case 'i':
        return getRandom(['1', 'I', '|']);
      case 'o':
        return getRandom(['O', '0', '*']);
      default:
        return char;
    }
  }

  function TopConsoleContent() {
    return <div className="vertical-center center">
      <TopLeftConsoleRow style={{fontSize: '15vw', lineHeight: '11vw'}}>{currentName1}</TopLeftConsoleRow>;
      <TopRightConsoleRow style={{fontSize: '15vw', lineHeight: '11vw'}}>{currentName2}</TopRightConsoleRow>;
    </div>
  }

  function BottomConsoleContent() {
    return model.map(row => {
      return <BottomConsoleRow style={{fontSize: '2vh', height: '2vh', lineHeight: '2vh'}}>{row}</BottomConsoleRow>;
    });
  }

  return (
    <>
      <Console className="container" style={{ height: '70vh'}}>
        <TopConsole className="center" style={{ height: '70vh'}}>
          {TopConsoleContent()}
        </TopConsole>
        <BottomConsole className="center" style={{ height: '70vh' }}>
          {BottomConsoleContent()}
        </BottomConsole>
      </Console>
      {/* <Header links={navLinks} /> */}
    </>
  );
};

