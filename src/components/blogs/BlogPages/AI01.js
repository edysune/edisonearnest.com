import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import LoadingSpinner from "components/features/LoadingSpinner.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

export default () => { //eslint-disable-line
  return (
    <AnimationRevealPage>
      <Header />
      <LoadingSpinner></LoadingSpinner>
      <Footer />
    </AnimationRevealPage>
  );
};
