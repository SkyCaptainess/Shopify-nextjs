import styled, { css } from "styled-components";
import { styles } from "..";

export const Container = css<{}>`
  padding: 0.5rem 1rem;
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${styles.size.mobileL}) {
    max-width: ${425 - 30}px;
  }

  @media (min-width: ${styles.size.tablet}) {
    max-width: ${768 - 40}px;
    padding: 1rem 2rem;
  }

  @media (min-width: ${styles.size.laptop}) {
    max-width: ${1024 - 50}px;
  }

  @media (min-width: ${styles.size.laptopL}) {
    max-width: ${1440 - 60}px;
  }
`;

export const ContainerWrapper = styled.div`
  ${Container};
`;

export const LoginContainerWrapper = styled.div`
  ${Container};
  color: #fff;
  padding-bottom: 200px;
  padding-top: 15vh !important;
  position: relative;
  z-index: 2;
  width: auto;

  @media (min-width: ${styles.size.tablet}) {
    padding-top: 20vh !important;
  }
`;
export const MainRaisedWrapper = styled.div`
  background: #ffffff;
  padding-bottom: 2.5rem;
  position: relative;
  z-index: 3;
  min-height: 90vh;

  margin: -60px 30px 0px;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  @media (max-width: ${styles.size.tablet}) {
    margin: -30px 30px 0px;

    margin-left: 10px;
    margin-right: 10px;
  }
`;
