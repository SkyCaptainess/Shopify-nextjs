import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ItemsList from "./ItemsList";
import Title from "../Structure/Title";

const RelatedItems = ({ related }) => (
  <RelatedWrapper>
    {related.length > 0 && (
      <>
        <Title title="articoli" subtitle="collegati" />
        <ItemsList products={related} />
      </>
    )}
  </RelatedWrapper>
);

RelatedItems.propTypes = {
  related: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const RelatedWrapper = styled.div`
  margin-top: 3rem;
`;

export default RelatedItems;
