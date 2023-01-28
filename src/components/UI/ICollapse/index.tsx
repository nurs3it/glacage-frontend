import classes from "./index.module.css";
import { Collapse, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import IIcon from "components/UI/IIcon";
import chevronDown from "assets/svg/chevronDown.svg";

const ICollapse = ({ title, value }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant="h6"
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}{" "}
        <IIcon
          className={`${open && classes.opened}`}
          size={18}
          icon={chevronDown}
        />
      </Typography>
      <Collapse in={open}>
        <Typography variant="body2">
          <ReactMarkdown>{value}</ReactMarkdown>
        </Typography>
      </Collapse>
    </div>
  );
};

export default ICollapse;
