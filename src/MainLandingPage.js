import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import PlainHero from "components/hero/PlainNavLinkHeader.js";
import ConsoleHero from "components/hero/ConsoleHeader.js";
import ConsoleNavButtons from "components/hero/ConsoleNavButtons.js";
import LoadingComponent from "components/features/LoadingSpinner.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";
import './styles.css';

const Row = tw.div`flex`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;
const UpdateNotice = tw.div`flex-1 absolute z-30 w-full flex-auto mb-4 sm:mb-8 rounded px-4 py-3 sm:px-5 sm:py-4 bg-orange-100 text-orange-800 flex items-center sm:items-start md:items-center justify-center lg:justify-start border border-orange-200 text-xs sm:text-sm text-center sm:text-left md:leading-none`;
const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;

export default () => { //eslint-disable-line
  return (
    <AnimationRevealPage>
      {/* <UpdateNotice className=".absolute-no-border">
        <UpdateNoticeIcon />
          Last Updated 03/06/2024 - Welcome to my site and pardon my dust! I'm currently working on the front page! Feel free to check out some of my other webpages in the meantime!
      </UpdateNotice> */}
      <ConsoleHero></ConsoleHero>
      <ConsoleNavButtons></ConsoleNavButtons>
      <Footer />
    </AnimationRevealPage>
  );
}
