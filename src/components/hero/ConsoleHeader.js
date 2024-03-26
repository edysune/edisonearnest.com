// import React, { useRef } from "react";
import React from "react";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import './ConsoleHeader.css';
import {generateNextFrame, generateNextName} from './DrawService.js';
import {fetchNextImage, generateNextFrameV2} from './DrawServiceV2.js';

const Console = tw.div`z-0 bg-black relative overflow-hidden`;

const TopConsole = tw.div`z-20 absolute w-full overflow-hidden`;
const TopLeftConsoleRow = tw.p`font-mono text-white opacity-50`;
const TopRightConsoleRow = tw.p`font-mono text-white opacity-50`;

const BottomConsole = tw.div`z-1 absolute w-full bg-[#1e293b] overflow-hidden whitespace-nowrap`;
const BottomConsoleRow = tw.p`font-mono text-xl text-[#60a5fa] opacity-25 overflow-hidden whitespace-pre`;

export default ({ //eslint-disable-line
}) => {
  const frontRefreshRate = 400;
  const backRefreshRate = 200;
  const firstModel = generateNextFrame([]);
  const [model, setModel] = useState(firstModel);
  const name1 = 'Edison';
  const name2 = 'Earnest';
  const [currentName1, setName1] = useState(name1);
  const [currentName2, setName2] = useState(name2);

  const [modelCache, setCache] = useState([]);
  // eslint-disable-next-line
  const [currentImageIndex, setImageIndex] = useState(0);
  const imageType = 'water-color';

  // const ref = useRef(null);

  const onBackIntervalChange = () => {
    //todo: figure out ratios, or maybe I need to figure out if I can stretch out text or something? Width doesn't work because zooming in/out doesn't 
    // console.log('width', ref.current ? ref.current.offsetWidth : 0);

    if (modelCache.length === 0 || !modelCache[currentImageIndex]){
      fetchNextImage(imageType, currentImageIndex).then((r) => {
  
        modelCache[currentImageIndex] = r.split('\r\n');
        setCache(modelCache);

        let nextFrame = generateNextFrameV2(modelCache[currentImageIndex]);
        setModel(nextFrame);
      })
    } else {
      console.log(modelCache)
      let nextFrame = generateNextFrameV2(modelCache[currentImageIndex]);
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

    const frontConsoleInterval = setInterval(() => {
      // console.log('interval hit!');
      onFrontIntervalChange();
    }, frontRefreshRate);

    return () => {
      clearInterval(backConsoleInterval);
      clearInterval(frontConsoleInterval);
    }
  }, []);//eslint-disable-line

  function TopConsoleContent() {
    return <div className="vertical-center center">
      <TopLeftConsoleRow style={{fontSize: '15vw', lineHeight: '11vw'}}>{currentName1}</TopLeftConsoleRow>
      <TopRightConsoleRow style={{fontSize: '15vw', lineHeight: '11vw'}}>{currentName2}</TopRightConsoleRow>
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

