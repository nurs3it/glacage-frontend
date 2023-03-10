import { FC } from "react";

import { Props } from "./types";

import { Container } from "@mui/material";

import classes from "./index.module.css";

import { useBreakpoints } from "hooks/useBreakpoints";

const IContainer: FC<Props> = ({ children, className }) => {
  const { desktop } = useBreakpoints();
  return (
    <Container
      className={`${!desktop && classes.resetPadding} ${
        className && className
      }`}
    >
      {children}
    </Container>
  );
};

export default IContainer;
