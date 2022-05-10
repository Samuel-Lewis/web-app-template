import React from 'react';
import { Footer, Text as T } from '@mantine/core';

export type GlobalFooterProps = {};

export const GlobalFooter: React.FC<GlobalFooterProps> = () => {
  return (
    <Footer fixed height={60} p="md" sx={{ textAlign: "center" }}>
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
    </Footer>
  );
};
