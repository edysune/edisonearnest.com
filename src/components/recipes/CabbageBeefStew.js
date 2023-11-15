import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import LoadingSpinner from "components/features/LoadingSpinner.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";

import HackermanImage1 from "images/about/synthwave_hackerman_01.jpg";
import HackermanImage2 from "images/about/synthwave_hackerman_02.jpg";
import HackermanImage3 from "images/about/synthwave_hackerman_03.jpg";
import HackermanImage4 from "images/about/synthwave_hackerman_04.jpg";
import Selfie4 from "images/about/selfie_4.jpg";
import Ufo1 from "images/about/ufo_1.jpg";
import Ufo2 from "images/about/ufo_2.jpg";
import Bigfoot1 from "images/about/bigfoot_1.jpg";
import Bigfoot2 from "images/about/bigfoot_2.jpg";
import Bigfoot3 from "images/about/bigfoot_3.jpg";
import Bigfoot4 from "images/about/bigfoot_4.jpg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => { //eslint-disable-line

  function getRandomAiStarterImage() {
    const photos = [Ufo1, Ufo2, Bigfoot1, Bigfoot2, Bigfoot3, Bigfoot4];
    return photos[Math.floor(Math.random()*photos.length)];
  }

  function getRandomAiPersonImage() {
    const photos = [HackermanImage1, HackermanImage2, HackermanImage3, HackermanImage4];
    return photos[Math.floor(Math.random()*photos.length)];
  }

  return (
    <AnimationRevealPage>
      <Header />
      <LoadingSpinner></LoadingSpinner>
      <Footer />
    </AnimationRevealPage>
  );
};
