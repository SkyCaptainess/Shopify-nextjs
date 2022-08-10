import styled from "styled-components";
import { styles } from "..";

export const PageTitle = styled.h1`
  font-size: 2rem;
  padding-top: 1rem;

  @media (min-width: ${styles.size.tablet}) {
    font-size: 3rem;
    padding-top: 2rem;
  }
`;

export const PageSubtitle = styled.h3`
  font-weight: 400;
`;
