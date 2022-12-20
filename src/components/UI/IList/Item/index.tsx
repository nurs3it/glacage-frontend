import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

import IIcon from "components/UI/IIcon";

import { FC } from "react";

import { Props } from "components/UI/IList/Item/types";

import classes from "./index.module.css";

import Arrow from "assets/svg/arrowRight.svg";

const Item: FC<Props> = ({ icon, text, onClick, secondIcon }) => {
  return (
    <ListItem className={classes.root} disablePadding>
      <ListItemButton className={classes.button} onClick={onClick}>
        <ListItemIcon className={classes.icon}>
          <IIcon icon={icon} />
        </ListItemIcon>
        {secondIcon && (
          <ListItemIcon className={classes.icon}>
            <IIcon icon={secondIcon} />
          </ListItemIcon>
        )}
        <ListItemText className={classes.text} primary={text} />
        <IconButton edge="end" aria-label="comments">
          <IIcon size={12} icon={Arrow} />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
};

export default Item;
