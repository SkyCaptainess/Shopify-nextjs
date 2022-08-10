import React from "react";
import Head from "next/head";
import { PageTitle, PageSubtitle } from "../../components/utils";
import ContactsButtons from "../../components/About/Contacts/ContactButtons";
import ContactMap from "../../components/About/Contacts/ContactMap";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Contacts | @escapemanuele shop</title>
      </Head>
      <PageTitle>Contact me</PageTitle>
      {/* <PageSubtitle>
        Sentiti libero di contattarmi con il mezzo che più preferisci, senza
        assolutamente nessun impegno!
      </PageSubtitle> */}
      <ContactsButtons />
      {/* <ContactMap /> */}
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Contacts;
