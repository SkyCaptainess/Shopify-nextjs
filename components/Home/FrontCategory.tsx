import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { styles } from "../utils";
import { SHOPCATEGORY } from "../../constants/routes";
import { NexusGenObjects } from "../../generated/nexus-typegen";

interface FrontCategoryProp {
  category: NexusGenObjects["Category"];
}

const FrontCategory: React.FC<FrontCategoryProp> = ({ category }) => {
  return (
    <Link href={SHOPCATEGORY} as={category.handle}>
      <FrontCategoryWrapper>
        <div className="imageContainer">
          {category.image && (
            <Image
              src={category.image}
              layout="fill"
              className="img"
              alt={category.title}
            />
          )}
          <h3 className="title">{category.title}</h3>
          <p className="description">{category.description}</p>
        </div>
      </FrontCategoryWrapper>
    </Link>
  );
};

// // FrontCategory.propTypes = {
// //   category: PropTypes.shape({
// //     id: PropTypes.string.isRequired,
// //     name: PropTypes.string.isRequired,
// //     // image: PropTypes.string.isRequired,
// //     // title: PropTypes.string,
// //     // description: PropTypes.string,
// //     // categoryCode: PropTypes.string.isRequired
// //   }).isRequired
// // };

const FrontCategoryWrapper = styled.li`
  box-shadow: ${styles.shadows.lightShadow};
  ${styles.transDefault};
  cursor: pointer;

  display: grid;

  &:hover {
    box-shadow: ${styles.shadows.darkShadow};
  }

  .imageContainer {
    position: relative;
    overflow: hidden;
    ${styles.transDefault};
    background: ${styles.colors.mainBlack};

    .img {
      width: 100%;
      height: 100%;
      ${styles.transDefault};
    }

    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${styles.colors.mainWhite};
      font-size: 2rem;
      font-weight: 600;
      ${styles.transDefault};
      text-shadow: 3px 3px 1px gray;
    }

    &:hover .img {
      opacity: 0.3;
    }

    &:hover .description {
      opacity: 1;
    }

    &:hover .title {
      opacity: 0;
    }

    .description {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      text-align: center;
      text-transform: uppercase;
      color: ${styles.colors.mainWhite};
      padding: 0.5rem 0.7rem;
      display: inline-block;
      ${styles.transDefault};
    }
  }
`;

export default FrontCategory;
