import React from "react";
import styled from "styled-components";
import PropTypes, { object } from "prop-types";
import SectionBlock from "./SectionBlock";

const AccountSections = ({ sections, setSection, section }) => (
  <AccountSectionsWrapper>
    <ul>
      {sections.map((sec) => {
        const { title, icon, iconClass, description, link } = sec;

        const active = link === section;
        return (
          <li key={title} onClick={() => setSection(link)}>
            <SectionBlock
              icon={icon}
              iconClass={iconClass}
              title={title}
              description={description}
              active={active}
            />
          </li>
        );
      })}
    </ul>
  </AccountSectionsWrapper>
);

const AccountSectionsWrapper = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    /* justify-content: center; */
    grid-gap: 1.5rem;

    list-style: none;
    padding-left: 0;
  }
`;

export default AccountSections;
