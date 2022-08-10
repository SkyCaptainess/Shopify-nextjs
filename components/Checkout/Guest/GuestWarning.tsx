import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { styles } from "../../utils";
import { LOGIN } from "../../../constants/routes";

const GuestWarning = () => (
  <GuestWarningWrapper>
    You are checking out as a guest, so you will not be able to track your
    orders!
    <br />
  </GuestWarningWrapper>
);

const GuestWarningWrapper = styled.div`
  background-color: ${styles.colors.warningColor};
  border-radius: 10px;
  margin-bottom: 2rem;
  padding: 1rem;
  text-align: center;

  a {
    font-weight: bold;
  }
`;

export default GuestWarning;
