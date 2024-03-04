import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase, { NavLinks, NavLink } from "components/headers/light.js";
import './ConsoleHeader.css';

const Header = tw(HeaderBase)`max-w-none`;
const Console = tw.div`bg-[#1e293b] w-full m-0 p-0 rounded-lg overflow-hidden`;
const ConsoleRow = tw.div`font-mono text-[#60a5fa] opacity-25 whitespace-nowrap`;

export default ({ //eslint-disable-line
}) => {
  let imageModel = [];
  let isInitialized = false;
  const cols = 300;
  const rows = 50;
  const hideCharPercent = .3;

  function replaceAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
  }

  function generateChar() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    if(Math.random() < hideCharPercent) {
      return ' ';
    }
    return chars[Math.floor(Math.random() * chars.length)]
  }

  function generateRow(length = cols) {
    let randomString = "";
    for (let i = 0; i < length; i++) {
      randomString += generateChar();
    }
    return randomString;
  }

  // function applyFilter() {
  //   for(let i = 0; i < imageModel.length; i++) {
  //     let row = imageModel[i];
  //     for(let j = 0; j < row.length; j++) {
  //       if(Math.random() < hideCharPercent) {
  //         // imageModel[i][j] = ' ';
  //         console.log(row);
  //         console.log(imageModel[i][j]);
  //         // imageModel[i][j] = ' ';
  //         replaceAt(imageModel[i][j], j, ' ')
  //       }
  //     }
  //   }
  // }

  function generateImage() {
    if (!isInitialized) {
      imageModel = [];
      for(let i = 0; i < rows; i++) {
        imageModel.push(generateRow())
      }
      isInitialized = true;
    }
    else {

    }
  }

  function ConsoleContent() {
    generateImage();
    return imageModel.map(row => {
      return <ConsoleRow>{row}</ConsoleRow>;
    });
  }

  let content = ConsoleContent();

  const interval = setInterval(() => {
    // todo: figure out what this does: react re-render component
    console.log(`Hello world!`)
    content = ConsoleContent();
  }, 1000);

  // let mainLoopId = setInterval(function(){
  //   content = ConsoleContent();
  //   console.log("HELLO!");
  // }, 40000);

  return (
    <>
      <Console style={{ height: '70vh' }}>
        {content}
      </Console>
      {/* <Header links={navLinks} /> */}
    </>
  );
};
