import IIcon from "components/UI/IIcon";
import MenuContent from "components/BurgerMenu/MenuContent";

import Burger from "assets/svg/menu.svg";

import { IconButton, SwipeableDrawer } from "@mui/material";

import { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <IIcon size={18} icon={Burger} />
      </IconButton>

      <SwipeableDrawer
        variant="temporary"
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <MenuContent onClose={toggleDrawer} />
      </SwipeableDrawer>
    </>
  );
};

export default BurgerMenu;
