import { Title } from "@mantine/core";
import React from "react";

export type HomePageProps = {};

export const HomePage: React.FC<HomePageProps> = (props) => {
  return <Title order={2}>Home Page</Title>;
};
