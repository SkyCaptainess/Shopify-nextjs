import React from "react";
import styled, { css } from "styled-components";
import { styles } from "../utils";

const SectionBlock = ({ icon, iconClass, title, description, active }) => (
  <BlockWrapper active={active}>
    <span className="section_icon">
      {icon ? <>{icon}</> : <i className={iconClass} />}
    </span>
    <div className="section_info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </BlockWrapper>
);

const BlockWrapper = styled.article<{ active: boolean }>`
  border: 1px solid ${styles.colors.mainGrey};
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  padding: 1rem;

  ${(props) =>
    props.active &&
    css`
      background-color: ${styles.colors.lightGrey};

      .section_icon svg {
        animation: ${styles.animations.pulse} 1s 1;
      }
    `}

  &:hover {
    background: ${styles.colors.lightGrey};
  }

  .section_icon {
    font-size: 3rem;
    font-weight: 200;
    color: var(--primaryColor);
  }

  .section_info {
    align-self: start;

    h3 {
      font-size: 1rem;
      font-weight: 500;
      margin: 0.2rem;
    }

    p {
      display: none;
    }
  }

  @media (min-width: ${styles.size.tablet}) {
    display: grid;
    grid-template-columns: auto 3fr;
    align-items: center;

    .section_info {
      h3 {
        font-size: 1.6rem;
      }

      p {
        display: block;
      }
    }
  }
`;

export default SectionBlock;
