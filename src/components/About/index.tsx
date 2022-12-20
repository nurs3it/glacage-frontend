import classes from "./index.module.css";

import { Grid, Typography } from "@mui/material";

import AboutPhoto from "assets/image/about.png";

const About = () => {
  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12} md={6}>
        <img className={classes.image} src={AboutPhoto} alt="about" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography className={classes.aboutText} variant="body2">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
