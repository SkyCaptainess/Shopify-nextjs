import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import styled from "styled-components";
import { styles, Button, PageTitle } from "../../utils";
import { useRouter } from "next/router";
import { CONTACTS } from "../../../constants/routes";

const HowItWorksOffline = () => {
  const [showContact, setShowContact] = useState(false);
  const router = useRouter();

  const goToContacts = () => {
    router.push({
      pathname: CONTACTS
    });
  };

  return (
    <div>
      <PageTitle>Oppure vieni nel mio laboratorio!</PageTitle>
      <HIWWrapper>
        <div>
          <PhoneIcon />
          <div className="contact-button">
            <Button color="primary" onClick={() => setShowContact(true)}>
              Prenota un appuntamento
            </Button>
            {showContact && (
              <Button color="success" onClick={goToContacts}>
                Contattami
              </Button>
            )}
          </div>
        </div>
        <ArrowDownwardIcon className="arrowdown" />
        <div>
          <div className="hiwstep_bring">
            <img src="/images/car.png" className="enter_left" />
            <img src="/images/sartoria.png" />
          </div>
          <div className="steptext">Portami i tuoi capi da riparare</div>
        </div>
        <ArrowDownwardIcon className="arrowdown" />
        <div>
          <img src="/images/macchina-per-cucito.png" className="rotate" />
          <div className="steptext">In poco tempo sistemerò i tuoi capi</div>
        </div>
        <ArrowDownwardIcon className="arrowdown" />
        <div>
          {/* <img src="/images/macchina-per-cucito.png" /> */}
          <div className="steptext">Passa a ritirarli!</div>
        </div>
      </HIWWrapper>
    </div>
  );
};

const HIWWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;
    width: 60%;


    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
        width: 100%;

        svg {
            font-size: 4rem;
            margin-right: 1rem;
        }

        img {
            width: 6rem;
        }

        img.rotate {
            animation: ${styles.animations.rotate} 5s infinite;
        }

        .steptext {
            /* background: ${styles.colors.mainBlack};
            border: 1px solid ${styles.colors.primaryColor};
            border-radius: 5px; */
            color: ${styles.colors.mainBlack};
            font-size: 1.4rem;
            font-weight: 500;
            padding: 1rem 3rem;
        }

        .hiwstep_bring {
            display: flex;
            flex-direction: row;
            justify-content: center;

            .enter_left {
                animation: ${styles.animations.fromLeft} 4s;
            }
        }
    }

    .arrowdown {
        font-size: 4rem;
    }


`;

export default HowItWorksOffline;
