import React, { useState, useEffect } from "react";
import Head from "next/head";

import Sections from "../components/Structure/Sections";
import ACCOUNTSECTIONS from "../components/Account/AccountSections";
import { BouncingLoader, PageTitle } from "../components/utils";
import useCustomer from "../frontend-structure/user/hooks/useCustomer";

const AccountPage = () => {
  const user = useCustomer({ redirectTo: "/login" });

  const [accountSection, setAccountSection] = useState("orders");
  const [AccountComponent, setAccountComponent] = useState(null);

  useEffect(() => {
    const section = ACCOUNTSECTIONS.find((x) => x.link === accountSection);
    setAccountComponent(section.component);
  }, [accountSection]);

  return (
    <>
      <Head>
        <title>Account | @escapemanuele shop</title>
      </Head>
      <PageTitle>My account</PageTitle>
      {user && (
        <>
          <Sections
            sections={ACCOUNTSECTIONS}
            setSection={setAccountSection}
            section={accountSection}
          />

          {AccountComponent != null ? AccountComponent : <BouncingLoader />}
        </>
      )}
    </>
  );
};

export default AccountPage;
