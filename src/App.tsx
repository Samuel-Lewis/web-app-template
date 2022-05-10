import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppShell, MantineProvider, Paper, Text as T } from '@mantine/core';
import { withLocation } from './analytics';
import { GlobalFooter, GlobalHeader, GlobalTheme } from './components';

import type { Link as LinkType } from "./types";
export type AppProps = {
  links: LinkType[];
};

const App: React.FC<AppProps> = ({ links }) => {
  return (
    <GlobalTheme>
      <AppShell
        padding="md"
        styles={() => ({
          root: {
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bright-squares.png)`,
            height: "100%",
            minHeight: "100vh",
          },
        })}
        header={
          <MantineProvider theme={{ colorScheme: "dark" }}>
            <GlobalHeader
              title="TODO: title"
              logo={
                <T
                  variant="gradient"
                  size="xl"
                  weight={700}
                  gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                  component={Link}
                  to="/"
                >
                  Web App Template
                </T>
              }
              links={links}
            />
          </MantineProvider>
        }
        footer={<GlobalFooter />}
      >
        <Paper p="xl" sx={{ marginBottom: "60px", marginTop: "60px" }}>
          <Outlet />
        </Paper>
      </AppShell>
    </GlobalTheme>
  );
};

export default withLocation(App);
