import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";

import Selfie4 from "images/about/selfie_4.jpg";
import Ufo1 from "images/about/ufo_1.jpg";
import Ufo2 from "images/about/ufo_2.jpg";
import Bigfoot1 from "images/about/bigfoot_1.jpg";
import Bigfoot2 from "images/about/bigfoot_2.jpg";
import Bigfoot3 from "images/about/bigfoot_3.jpg";
import Bigfoot4 from "images/about/bigfoot_4.jpg";

export default () => { //eslint-disable-line

  function getRandomAiStarterImage() {
    const photos = [Ufo1, Ufo2, Bigfoot1, Bigfoot2, Bigfoot3, Bigfoot4];
    return photos[Math.floor(Math.random()*photos.length)];
  }

  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        heading="The Short"
        description="Hey, I'm Edison Earnest and this is my site.
        I'm a full-stack software developer in the Utah area, and I program cool things in my spare time.
        Lately I've been working on website, poking at different AI software, maintaining my growing hoard of servers, and going on walks with my doggo."
        imageSrc={getRandomAiStarterImage()}
      />
      <MainFeature1
        heading="The Long"
        description="I grew up in the part of Washington that always rains, and somehow ended up in Utah for college at Utah Valley University (UVU). 
        After struggling with learning to program, I became a Computer Science tutor at UVU where I helped teach and reinforce core programming concepts to others.
        During college I started working with Microfocus (now OpenText) as a QA Engineer, where I tested Teradata UDF encryption software made by Voltage Encryption.
        Currently I work as a Full-Stack Developer for Motorola Solutions, creating cloud-based web applications using Javascript, Angular, .Net, and various Microsoft Azure web services."
        imageSrc={Selfie4}
        textOnLeft={false}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
