import Counter from "react-counter-input";

import classes from "./index.module.css";

const CounterInput = () => {
  return (
    <div className={classes.root}>
      <Counter min={0} max={10} onCountChange={(count) => console.log(count)} />
    </div>
  );
};

export default CounterInput;
