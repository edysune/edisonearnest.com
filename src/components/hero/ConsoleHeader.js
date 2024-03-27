import React, { useRef } from "react";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import './ConsoleHeader.css';
import {generateNextFrame, generateNextName} from './DrawService.js';
import {fetchNextImage, generateNextFrameV2, updateImageState} from './DrawServiceV2.js';

const Console = tw.div`z-0 bg-black relative overflow-hidden`;

const TopConsole = tw.div`z-20 absolute w-full overflow-hidden`;
const ConsoleText = tw.p`text-[22vw] leading-[20vw] sm:text-[15vw] sm:leading-[15vw]`;
const TopLeftConsoleRow = tw(ConsoleText)`font-mono text-white opacity-50`;
const TopRightConsoleRow = tw(ConsoleText)`font-mono text-white opacity-50`;

const BottomConsole = tw.div`z-1 absolute w-full bg-[#1e293b] overflow-hidden whitespace-nowrap`;
const BottomConsoleRow = tw.p`font-mono text-xl text-[#60a5fa] opacity-25 overflow-hidden whitespace-pre`;

export default ({ //eslint-disable-line
}) => {
  const frontRefreshRate = 400;
  const backRefreshRate = 200;
  const tockRefreshRate = 100;
  const firstModel = generateNextFrame([]);
  const [model, setModel] = useState(firstModel);
  const name1 = 'Edison';
  const name2 = 'Earnest';
  const [currentName1, setName1] = useState(name1);
  const [currentName2, setName2] = useState(name2);

  const [modelCache, setCache] = useState([]);
  // eslint-disable-next-line
  // const [currentImageIndex, setImageIndex] = useState(0);
  const imageType = 'water-color';

  let currentImageIndex = useRef(0);
  let currentDirection = useRef(1);

  // const ref = useRef(null);

  const onTockIntervalChange = () => {
    const newState = updateImageState(0, currentDirection.current, currentImageIndex.current);

    if (newState.currentIndex !== currentImageIndex.current) {
      console.log('new index achieved', newState.currentIndex)
      // setImageIndex(newState.currentIndex);
      currentImageIndex.current = newState.currentIndex;
    }
    if (newState.direction !== currentDirection.current) {
      currentDirection.current = newState.direction;
    }
  };

  const onBackIntervalChange = () => {
    //todo: figure out ratios, or maybe I need to figure out if I can stretch out text or something? Width doesn't work because zooming in/out doesn't 
    // console.log('width', ref.current ? ref.current.offsetWidth : 0);

    console.log('currentIndex', currentImageIndex.current);
    if (modelCache.length === 0 || !modelCache[currentImageIndex.current]){
      fetchNextImage(imageType, currentImageIndex.current).then((r) => {
  
        modelCache[currentImageIndex.current] = r.split('\r\n');

        if (modelCache[currentImageIndex.current].length === 1) {
          console.warn('linux line endings found!');
          modelCache[currentImageIndex.current] = r.split('\n');
        }

        setCache(modelCache);

        let nextFrame = generateNextFrameV2(modelCache[currentImageIndex.current], currentImageIndex);
        setModel(nextFrame);
      })
    } else {
      // console.log(modelCache)
      let nextFrame = generateNextFrameV2(modelCache[currentImageIndex.current], currentImageIndex);
      setModel(nextFrame);
    }
  };

  const onFrontIntervalChange = () => {
    let nextName1 = generateNextName(currentName1, name1);
    let nextName2 = generateNextName(currentName2, name2);
    setName1(nextName1);
    setName2(nextName2);
  };

  useEffect(() => {
    const backConsoleInterval = setInterval(() => {
      // console.log('interval hit!');
      onBackIntervalChange();
    }, backRefreshRate);

    const tockInterval = setInterval(() => {
      // console.log('interval hit!');
      onTockIntervalChange();
    }, tockRefreshRate);

    const frontConsoleInterval = setInterval(() => {
      // console.log('interval hit!');
      onFrontIntervalChange();
    }, frontRefreshRate);

    return () => {
      clearInterval(backConsoleInterval);
      clearInterval(frontConsoleInterval);
      clearInterval(tockInterval);
    }
  }, []);//eslint-disable-line

  function TopConsoleContent() {
    return <div className="vertical-center center">
      <TopLeftConsoleRow>{currentName1}</TopLeftConsoleRow>
      <TopRightConsoleRow>{currentName2}</TopRightConsoleRow>
    </div>
  }

  function BottomConsoleContent() {
    return model.map(row => {
      return <BottomConsoleRow style={{fontSize: '1vh', height: '1vh', lineHeight: '1vh'}}>{row}</BottomConsoleRow>;
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

