import React from "react";
import styled from "styled-components";
import { styles } from "../../utils";

const ContactMap = () => {
  return (
    <MapWrapper>
      <div className="info_content">
        <h3>Si riceve su appuntamento!</h3>
        <div>
          <i className="socialIcons fa fa-map-marker" aria-hidden="true"></i>
          Viale Abruzzi, 430, 47521 Cesena FC
        </div>
        <div>
          <i className="socialIcons fa fa-phone" aria-hidden="true"></i>
          351 559 5121
        </div>
      </div>
      <div className="map_content">
        <iframe
          frameBorder="0"
          scrolling="no"
          width="100%"
          height="350px"
          src="https://maps.google.com/maps?q=Viale%20Abruzzi%2C%20430%2C%2047521%20Cesena%20FC&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
          aria-label="Viale Abruzzi, 430, 47521 Cesena FC"
        ></iframe>
      </div>
    </MapWrapper>
  );
};

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 1 rem;

  .info_content {
    font-size: 1.4rem;
    text-align: center;

    display: flex;
    flex-direction: column;

    div {
      font-weight: 400;
      margin-top: 1rem;
    }

    .socialIcons {
      font-size: 1.8rem !important;
      margin-right: 1rem;
      position: relative;
    }
  }

  @media (min-width: ${styles.size.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    align-items: center;
  }
`;

export default ContactMap;
