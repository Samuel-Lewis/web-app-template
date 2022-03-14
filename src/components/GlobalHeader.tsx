import React from "react";
import { Header, Group, Button } from "@mantine/core";
import type { Link as LinkType } from "../types";
import { Link, matchPath, useLocation } from "react-router-dom";
import { DarkModeSwitch } from "./GlobalTheme";

export type GlobalHeaderProps = {
  links: LinkType[];
  logo: React.ReactNode;
  title: string;
};

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  links,
  logo,
  title,
}) => {
  const location = useLocation();
  const currentPath = links.find((l) => matchPath(location.pathname, l.link));

  document.title = title + (currentPath ? ` | ${currentPath.label}` : "");

  const items = links
    .filter((l) => !l.hide)
    .map((link) => (
      <Button
        component={Link}
        to={link.link}
        variant={
          currentPath && currentPath.link === link.link ? "light" : "subtle"
        }
        key={link.link}
      >
        {link.label}
      </Button>
    ));

  return (
    <Header height={60} px="xs">
      <Group
        position="apart"
        style={{
          height: "100%",
        }}
      >
        {logo}
        <Group spacing="sm">
          {items}
          <DarkModeSwitch />
        </Group>
      </Group>
    </Header>
  );
};
