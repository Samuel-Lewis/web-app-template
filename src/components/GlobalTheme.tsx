import React from "react";
import {
  useMantineColorScheme,
  ActionIcon,
  Tooltip,
  ColorScheme,
  MantineProvider,
  ColorSchemeProvider,
} from "@mantine/core";
import { FiMoon, FiSun } from "react-icons/fi";
import { useColorScheme, useLocalStorageValue } from "@mantine/hooks";

export const DarkModeSwitch: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Tooltip
      label={`Switch to ${colorScheme === "dark" ? "light" : "dark"} mode`}
      position="left"
    >
      <ActionIcon onClick={() => toggleColorScheme()} size="lg">
        {colorScheme === "dark" ? <FiSun /> : <FiMoon />}
      </ActionIcon>
    </Tooltip>
  );
};

export const GlobalTheme: React.FC = ({ children }) => {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: preferredColorScheme,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
