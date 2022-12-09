import { Grid } from "@aws-amplify/ui-react";
import React from "react";

export function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <Grid
      gap="1rem"
      templateRows="auto 1fr"
      height="100%"
      justifyContent="center"
    >
      {children}
    </Grid>
  );
}
