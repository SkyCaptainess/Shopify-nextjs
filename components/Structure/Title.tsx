import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { styles } from "../utils";

const Title = ({ title, subtitle, className }) => (
  <div className={className}>
    <h4>
      <span className="title">{title}</span>
      <span>{subtitle}</span>
    </h4>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  className: PropTypes.string
};

Title.defaultProps = {
  className: ""
};

export default styled(Title)`
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 2rem;

  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: ${styles.colors.successColor};
    padding-top: 1rem;
  }

  .title {
    color: ${styles.colors.mainBlack};
    margin-bottom: 0.5rem;
  }
  span {
    display: block;
  }

  @media (min-width: ${styles.size.tablet}) {
    span {
      display: inline;
      margin: 0 0.35rem;
    }

    .title {
      margin-bottom: 0;
    }
  }
`;
