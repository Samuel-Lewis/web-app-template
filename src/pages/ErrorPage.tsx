import React from "react";
import { Link } from "react-router-dom";
import { Button, createStyles, Group, Text, Title } from "@mantine/core";

export type ErrorPageProps = {
  title?: string;
  message?: string;
};

const useStyles = createStyles((theme) => ({
  label: {
    fontWeight: 900,
    fontSize: 220,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 120,
    },
  },
}));

export const ErrorPage: React.FC<ErrorPageProps> = ({ title, message }) => {
  const displayTitle = title || "Page not found";
  const displayMessage =
    message ||
    "Sorry, we can't find the page you were looking for. This page may no longer exist, or has moved to a different URL.";

  const { classes } = useStyles();

  return (
    <Group position="center" direction="column">
      <Title className={classes.label}>404</Title>
      <Title>{displayTitle}</Title>
      <Text color="dimmed" size="lg" align="center">
        {displayMessage}
      </Text>
      <Button component={Link} to="/" variant="subtle">
        Back to home page
      </Button>
    </Group>
  );
};
