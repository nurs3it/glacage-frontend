import classes from "./index.module.css";

import { Grid, Skeleton, Typography } from "@mui/material";

import AboutPhoto from "assets/image/about.png";

import { useRequest } from "ahooks";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { getAbout } from "api/about";

import { AboutBody } from "types/body";

import ReactMarkdown from "react-markdown";

import ProgressiveImage from "components/UI/ProgressiveImage";

import { setAbout } from "store/about.store";

const About = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({} as AboutBody);
  const [aboutImage, setAboutImage] = useState("");

  const parseData = (data: AboutBody) => {
    setData(data as AboutBody);
    setAboutImage(
      `${data.background.data.attributes.formats.thumbnail.url}` || AboutPhoto
    );
  };

  const { runAsync, loading, error } = useRequest(getAbout, {
    manual: true,
    onSuccess: (result) => {
      parseData(result.data.data.attributes);
      dispatch(setAbout(result.data.data.attributes));
    },
  });

  useEffect(() => {
    runAsync().then((r) => r);
  }, [runAsync]);

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid sx={{ padding: "8px" }} item xs={12} md={6}>
        {loading || !aboutImage || error ? (
          <Skeleton
            variant="rectangular"
            width="100%"
            className={classes.image}
          />
        ) : (
          <ProgressiveImage
            className={classes.image}
            image={data.background.data}
          />
        )}
      </Grid>
      <Grid sx={{ padding: "8px" }} item xs={12} md={6}>
        {loading || error ? (
          <>
            <Skeleton width="100%">
              <Typography className={classes.skeletonText}>.</Typography>
            </Skeleton>
            <Skeleton width="100%">
              <Typography className={classes.skeletonText}>.</Typography>
            </Skeleton>
            <Skeleton width="100%">
              <Typography className={classes.skeletonText}>.</Typography>
            </Skeleton>
            <Skeleton width="40%">
              <Typography className={classes.skeletonText}>.</Typography>
            </Skeleton>
          </>
        ) : (
          <Typography>
            <ReactMarkdown>{data.about || ""}</ReactMarkdown>
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default About;
