/* eslint-disable quotes */
import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";

function Loading() {
  return (
    <Grid container>
      <CircularProgress
        size={100}
        color="primary"
        style={{
          display: "block",
          margin: "auto",
          marginTop: "10%",
        }}
      />
    </Grid>
  );
}

export default Loading;
