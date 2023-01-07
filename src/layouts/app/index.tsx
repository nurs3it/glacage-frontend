import { FC } from "react";

import { Props } from "layouts/app/types";

import IContainer from "layouts/container";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

const AppLayout: FC<Props> = ({ children, pageTitle = "" }) => {
  return (
    <>
      <IContainer>
        <Navbar pageTitle={pageTitle} />
      </IContainer>
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
