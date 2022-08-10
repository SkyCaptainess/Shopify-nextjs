import React from "react";
// import FrontPageCategories from "../components/Home/FrontPageCategories";
import FeaturedProducts from "../components/Home/FeaturedProducts";

function Error({ statusCode }) {
  let content = "";

  if (statusCode === 500) {
    content = (
      <h1>C'è stato un errore imprevisto! Ci dispiace per il disagio!</h1>
    );
  } else {
    content = <h1>Purtroppo la pagina non è stata trovata!</h1>;
  }
  return (
    <>
      {content}
      <h3>Cosa cercavi?</h3>
      {/* <FrontPageCategories /> */}
      <FeaturedProducts />
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
