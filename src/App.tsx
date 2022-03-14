import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AppShell, MantineProvider, Paper, Text as T } from "@mantine/core";
import { GlobalFooter, GlobalHeader, GlobalTheme } from "./components";

import type { Link as LinkType } from "./types";
import { withLocation } from "./analytics";

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
      >
        <Paper px="xl" style={{ padding: "20px" }}>
          <Outlet />
        </Paper>
        <GlobalFooter />
      </AppShell>
    </GlobalTheme>
  );
};

export default withLocation(App);
