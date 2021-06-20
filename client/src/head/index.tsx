import React, { FunctionComponent } from "react";

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
    <>
      <meta charSet="utf-8" />
      <link rel="icon" href={`public/${getFavIcon()}.ico`} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Learn more about Joe Greathead" />
      <title>About Joe G</title>
    </>
  );
};
