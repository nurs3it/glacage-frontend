import { FC } from "react";

import Counter from "react-counter-input";

import classes from "./index.module.css";

import { Props } from "components/CounterInput/types";

const CounterInput: FC<Props> = ({ count, onChangeCount }) => {
  return (
    <div className={classes.root}>
      <Counter
        count={count}
        min={0}
        max={100}
        onCountChange={(count) => onChangeCount(count)}
      />
    </div>
  );
};

export default CounterInput;
