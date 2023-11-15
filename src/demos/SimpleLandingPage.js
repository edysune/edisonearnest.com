import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/PlainNavLinkHeader";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";

const Row = tw.div`flex`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;
const Column = tw.div`flex-1`;
const UpdateNotice = tw(Column)`w-full flex-auto mb-4 sm:mb-8 rounded px-4 py-3 sm:px-5 sm:py-4 bg-orange-100 text-orange-800 flex items-center sm:items-start md:items-center justify-center lg:justify-start border border-orange-200 text-xs sm:text-sm text-center sm:text-left md:leading-none`;
const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;

export default () => { //eslint-disable-line
  return (
    <AnimationRevealPage>
      <Hero />
      <HeroRow>
        <UpdateNotice>
          <UpdateNoticeIcon />
            Check out my source code: https://github.com/edysune/edisonearnest.com
        </UpdateNotice>
      </HeroRow>
      <Footer />
    </AnimationRevealPage>
  );
}
