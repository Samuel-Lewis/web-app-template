import React from "react";
import { FiXCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Alert, Button } from "@mantine/core";

export type ErrorPageProps = {
  title?: string;
  message?: string;
};

export const ErrorPage: React.FC<ErrorPageProps> = ({ title, message }) => {
  const displayTitle = title || "404 - Page not found";
  const displayMessage =
    message || "Sorry, we can't find the page you were looking for";

  return (
    <Alert icon={<FiXCircle size={16} />} title={displayTitle} color="red">
      {displayMessage}
      <Button component={Link} to="/" variant="subtle">
        Home
      </Button>
    </Alert>
  );
};
