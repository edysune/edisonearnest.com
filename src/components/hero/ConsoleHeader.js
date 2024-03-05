import React from "react";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import './ConsoleHeader.css';
import {generateNextFrame} from './DrawService.js';

const Console = tw.div`bg-[#1e293b] w-full m-0 p-0 rounded-lg overflow-hidden`;
const ConsoleRow = tw.p`font-mono text-xl text-[#60a5fa] opacity-25 whitespace-pre`;

export default ({ //eslint-disable-line
}) => {
  const refreshRate = 1000;
  const firstModel = generateNextFrame([]);
  const [model, setModel] = useState(firstModel);

  const onIntervalChange = () => {
    let nextFrame = generateNextFrame(model);
    setModel(nextFrame);
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      // console.log('interval hit!');
      onIntervalChange();
    }, refreshRate);
    return () => clearInterval(myInterval);
  }, []);//eslint-disable-line


  function ConsoleContent() {
    return model.map(row => {
      return <ConsoleRow style={{fontSize: '2vh', height: '2vh', lineHeight: '2vh'}}>{row}</ConsoleRow>;
    });
  }

  return (
    <>
      <Console style={{ height: '70vh' }}>
        {ConsoleContent(model)}
      </Console>
      {/* <Header links={navLinks} /> */}
    </>
  );
};
