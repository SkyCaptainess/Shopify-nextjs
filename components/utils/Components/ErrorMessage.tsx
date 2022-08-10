import React from "react";
import styled from "styled-components";
import { styles } from "..";

const ErrorMessage = ({ message, children }) => (
  <ErrorWrapper>
    <div>{message}</div>
    {children}
  </ErrorWrapper>
);

const ErrorWrapper = styled.div`
  background-color: ${styles.colors.dangerColor};
  font-weight: bold;
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
`;
export default ErrorMessage;
