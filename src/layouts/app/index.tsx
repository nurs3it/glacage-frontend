import { FC } from "react";

import { Props } from "layouts/app/types";

import IContainer from "layouts/container";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <IContainer>
        <Navbar />
      </IContainer>
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
