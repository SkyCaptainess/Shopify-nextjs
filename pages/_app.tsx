import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from "next/head";
import PageLayout from '../components/Structure/Layouts/PageLayout';
import { styles, DefaultFont } from "../components/utils";
import { createGlobalStyle } from 'styled-components';
import { ApolloProvider } from '@apollo/react-common';
import ApolloClient from "apollo-boost";

const apollo = new ApolloClient({
    uri: process.env.LOCAL_API_GRAPHQL_ENDPOINT,
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: "include",
        },
      });
    },
  });

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || PageLayout;

  return (
    <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <ApolloProvider client={apollo}>
            <Layout pageProps={pageProps}>
                <GlobalStyles />
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    </>
  )
}

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *:before, *:after{
        box-sizing: inherit;
    }

    body {
        ${DefaultFont};
        padding: 0;
        margin: 0;
        font-size: 1rem;

        ${styles.ScrollbarCss};

        @media (max-width: ${styles.size.mobileL}) {
          .swal2-container {
            width: 100%;
          }

          .swal2-popup {
            margin-bottom: 60px;
          }
        }
    }

    @font-face {
      font-family: 'LaMoscaNera';
      src: url('/fonts/DoodlesOfFun.ttf');
    }

    a {
        text-decoration: none;
        color: ${styles.colors.mainBlack};
    }
`;
