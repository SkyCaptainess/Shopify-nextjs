import React from "react";
import styled from "styled-components";
import { Carousel } from "../utils";
import { NexusGenObjects } from "../../generated/nexus-typegen";

interface SingleProductType {
  image: NexusGenObjects["ProductImage"];
  additionalImages: Array<NexusGenObjects["ProductImage"]>;
}

const SingleProductImages: React.FC<SingleProductType> = ({
  image,
  additionalImages = [],
}) => {
  return (
    <ProductImagesWrapper>
      <Carousel infiniteLoop>
        <div>
          <img src={image.url} alt={image.alt} />
        </div>
        {additionalImages &&
          additionalImages.map((img) => (
            <div key={img.url}>
              <img src={img.url} alt={img.alt} />
            </div>
          ))}
      </Carousel>
    </ProductImagesWrapper>
  );
};

const ProductImagesWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export default SingleProductImages;
