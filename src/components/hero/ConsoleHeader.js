// import React, { useRef } from "react";
import React from "react";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import './ConsoleHeader.css';
import {generateNextFrame} from './DrawService.js';

const TopConsole = tw.div`w-full m-0 p-0 rounded-lg absolute overflow-hidden`;
const TopLeftConsoleRow = tw.p`font-mono text-white opacity-50`;
const TopRightConsoleRow = tw.p`font-mono text-white opacity-50`;

const BottomConsole = tw.div`bg-[#1e293b] w-full m-0 p-0 rounded-lg overflow-hidden whitespace-nowrap`;
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

  function getMappedChar(char){
    //todo: move this stuff out of here!
    switch(char.toLowerCase()) {
      case 'e':
        return '3';
      case 'a':
        return '@';
      case 'r':
        return 'R';
      case 'n':
        return 'N';
      case 's':
        return 'S';
      case 't':
        return 'T';
      case 'd':
        return 'D';
      case 'i':
        return '1';
      case 'o':
        return '0';
      default:
        return char;
    } 
  }

  function TopConsoleContent() {
    return <div className="vertical-center center">
      <TopLeftConsoleRow style={{fontSize: '13vw', lineHeight: '8vw'}}>{currentName1}</TopLeftConsoleRow>;
      <TopRightConsoleRow style={{fontSize: '13vw', lineHeight: '8vw'}}>{currentName2}</TopRightConsoleRow>;
    </div>
  }

  function BottomConsoleContent() {
    return model.map(row => {
      return <BottomConsoleRow style={{fontSize: '2vh', height: '2vh', lineHeight: '2vh'}}>{row}</BottomConsoleRow>;
    });
  }

  return (
    <>
      <TopConsole style={{ height: '70vh'}}>
        {TopConsoleContent()}
      </TopConsole>
      <BottomConsole style={{ height: '70vh' }}>
        {BottomConsoleContent()}
      </BottomConsole>
      {/* <Header links={navLinks} /> */}
    </>
  );
};

