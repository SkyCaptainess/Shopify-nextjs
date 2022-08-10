import React from "react";
import Head from "next/head";
import HowItWorksOnline from "../../components/About/HowItWorks/HowItWorksOnline";
import HowItWorksOffline from "../../components/About/HowItWorks/HowItWorksOffline";
import styled from "styled-components";

const HowItWorks = () => {
  return (
    <>
      <Head>
        <title>How it works | @escapemanuele Store </title>
      </Head>
      <IntroductionWrapper>Explanation...</IntroductionWrapper>

      <HowItWorksOnline />
      {/* <HowItWorksOffline /> */}
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const IntroductionWrapper = styled.div`
  font-size: 1.3rem;
`;

export default HowItWorks;
