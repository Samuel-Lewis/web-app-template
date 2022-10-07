import React from 'react';
import { AppShell, Group, Header, Title } from '@mantine/core';
import { ThemeProvider, ThemeSwitcher } from './theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppShell
        fixed
        header={
          <Header height={60} p="md">
            <Group position="apart" p={0}>
              <Title order={4}>TODO APP TITLE</Title>
              <ThemeSwitcher />
            </Group>
          </Header>
        }
      >
        Hello there
      </AppShell>
    </ThemeProvider>
  );
};
