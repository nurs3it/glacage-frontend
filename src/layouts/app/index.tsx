import { FC } from "react";

import { Props } from "layouts/app/types";

import IContainer from "layouts/container";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

import { useBreakpoints } from "hooks/useBreakpoints";
import { useLocation } from "react-router-dom";

import classes from "./index.module.css";

const AppLayout: FC<Props> = ({ children, pageTitle = "" }) => {
  const { mobile } = useBreakpoints();
  const { pathname } = useLocation();

  return (
    <>
      <IContainer className={classes.sticky}>
        <Navbar pageTitle={pageTitle} />
      </IContainer>
      {children}
      {(pathname === "/" || !mobile) && <Footer />}
    </>
  );
};

export default AppLayout;
