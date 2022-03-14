import React from "react";

export type Link = {
  link: string;
  label: string;
  component: JSX.Element;
  hide?: boolean;
};
