import React from "react";
import { Button, styles } from "../../utils";
import styled from "styled-components";

const ContactsButtons = () => {
  return (
    <ContactsButtonsWrapper>
      {/* <ContactsItem>
        <div>CALL ME</div>
        <Button title="Chiamami sul telefono" href="tel:+393515595121">
          <i className="socialIcons fa fa-phone" aria-hidden="true"></i>
          CALL
        </Button>
      </ContactsItem> */}
      <ContactsItem>
        <div>Find me on Linkedin</div>
        <Button
          title="Write me on Instagram!"
          href="https://www.linkedin.com/in/ebuccelli/"
          target="_blank"
        >
          <i className="socialIcons fab fa-instagram" />
          Linkedin
        </Button>
      </ContactsItem>
      <ContactsItem>
        <div>Find me on Github</div>
        <Button
          color="whatsapp"
          target="_blank"
          title="Scrivimi su github!"
          href="https://github.com/escapemanuele"
        >
          GITHUB
        </Button>
      </ContactsItem>
    </ContactsButtonsWrapper>
  );
};

const ContactsButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  @media (min-width: ${styles.size.tablet}) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const ContactsItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;

  div {
    flex: 1;
  }
  a {
    flex: 1;
  }

  .socialIcons {
    font-size: 20px !important;
    margin-right: 1rem;
    position: relative;
  }

  @media (min-width: ${styles.size.tablet}) {
    flex-direction: column;
  }
`;

export default ContactsButtons;
