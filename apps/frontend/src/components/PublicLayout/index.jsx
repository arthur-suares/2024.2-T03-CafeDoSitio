import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Centralização, Layout } from "./styled";

const PublicLayout = ({children}) => {
  return(
    <>
      <Header />
      <Centralização>
        <Layout>
          <main>{children}</main>
        </Layout>
      </Centralização>
      <Footer />
    </>
  );
};

export default PublicLayout;