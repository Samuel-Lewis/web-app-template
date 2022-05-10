import React from 'react';
import { Title } from '@mantine/core';

export type HomePageProps = {};

export const HomePage: React.FC<HomePageProps> = (props) => {
  return <Title order={2}>Home Page</Title>;
};
