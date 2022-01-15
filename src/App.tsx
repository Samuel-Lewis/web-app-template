import "./App.css";
import React from "react";
import {
    Link,
    Outlet
} from "react-router-dom";
import {
    AppShell,
    Button,
    Center,
    Group,
    Header,
    MantineProvider,
    Paper,
    Text as T
} from "@mantine/core";
import { withLocation } from "./analytics";
import { WithTheme } from "./theme";

const App: React.FC = () => {
  return (
    <WithTheme
      render={(_, ThemeToggle) => (
        <>
          <AppShell
            padding="md"
            styles={(theme) => ({
              root: {
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bright-squares.png)`,
                height: "100%",
                minHeight: "100vh",
              },
            })}
            header={
              <MantineProvider theme={{ colorScheme: "dark" }}>
                <Header height={60} padding="xs">
                  <Group position="apart">
                    {/* Navigation Items */}
                    <Group spacing="xs">
                      {/* Logo */}

                      <T
                        variant="gradient"
                        size="xl"
                        weight={700}
                        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                        component={Link}
                        to="/"
                      >
                        Web App Template!
                      </T>
                      <Button component={Link} to="/" variant="subtle">
                        Home
                      </Button>
                      <Button component={Link} to="/about" variant="subtle">
                        About
                      </Button>
                    </Group>

                    {/* Theme toggle */}
                    {ThemeToggle}
                  </Group>
                </Header>
              </MantineProvider>
            }
          >
            <Paper padding="xl">
              <Outlet />
            </Paper>
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
          </AppShell>
        </>
      )}
    />
  );
};

export default withLocation(App);
