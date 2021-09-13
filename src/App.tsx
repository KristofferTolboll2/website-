import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "style/theme";
import Layout from "./layouts/layout";
import {Helmet} from "react-helmet";
import { metaData } from "data/data";


//TODO add dynamic data from backend

const HelmetWrapper = () => { 
  console.log(metaData.meta.keywords.join(", "))
  return (
      <div>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.meta.description} />
        <meta name="keywords" content={metaData.meta.keywords.join(", ")} />
        </Helmet>
      </div>

  )
}




export const App = () => (
  <ChakraProvider theme={theme} resetCSS={true}>
    <HelmetWrapper />
    <Layout />
  </ChakraProvider>
);