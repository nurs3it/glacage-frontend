import { FC, useState } from "react";

import { Props } from "layouts/app/types";

import IContainer from "layouts/container";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MobileContactDrawer from "components/MobileContactDrawer";
import IIcon from "components/UI/IIcon";
import ContactDrawerMenus from "components/ContactDrawerMenus";

import { useBreakpoints } from "hooks/useBreakpoints";
import { useLocation } from "react-router-dom";
import { useContacts } from "hooks/useContacts";

import Phone from "assets/svg/phone.svg";

import { Drawer, Fab, Menu } from "@mui/material";

import classes from "./index.module.css";

const AppLayout: FC<Props> = ({ children, pageTitle = "" }) => {
  const { mobile } = useBreakpoints();
  const { pathname } = useLocation();
  const { number } = useContacts();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const menuOpen = Boolean(anchorEl);

  const isMainPage = pathname === "/";

  return (
    <div style={{ position: "relative" }}>
      <div className={classes.sticky}>
        <IContainer>
          <Navbar pageTitle={pageTitle} />
        </IContainer>
      </div>
      {children}

      {isMainPage && number && (
        <Fab
          className={classes.phoneFabButton}
          color="primary"
          aria-controls={menuOpen ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={menuOpen ? "true" : undefined}
          aria-label="phone"
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
            setOpen(true);
          }}
        >
          <IIcon icon={Phone} />
        </Fab>
      )}
      {(isMainPage || !mobile) && <Footer />}
      {mobile && number && (
        <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
          <MobileContactDrawer />
        </Drawer>
      )}
      {!mobile && number && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <ContactDrawerMenus />
        </Menu>
      )}
    </div>
  );
};

export default AppLayout;
