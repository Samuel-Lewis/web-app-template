import React from "react";
import { Center, Text as T } from "@mantine/core";

export type GlobalFooterProps = {};

export const GlobalFooter: React.FC<GlobalFooterProps> = () => {
  return (
    <Center style={{ height: "60px" }}>
      <T>
        Created by{" "}
        <T
          component="a"
          variant="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://samuel-lewis.com"
        >
          Samuel Lewis
        </T>
      </T>
    </Center>
  );
};
