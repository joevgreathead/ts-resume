import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

export const Head: FunctionComponent = () => {
  const getFavIcon = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "favicon-dark";
    }
    return "favicon-light";
  };

  return (
    <Helmet>
      <link rel="icon" href={`public/${getFavIcon()}.ico`} />
    </Helmet>
  );
};
