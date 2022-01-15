import React from "react";
import {
    FiMoon,
    FiSun
} from "react-icons/fi";
import {
    ActionIcon,
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
    Tooltip
} from "@mantine/core";
import {
    useColorScheme,
    useLocalStorageValue
} from "@mantine/hooks";

export type WithThemeProps = {
  render: (
    theme: ColorScheme,
    ThemeToggle: React.ReactElement
  ) => React.ReactNode;
};

export const WithTheme: React.FC<WithThemeProps> = ({ render }) => {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: preferredColorScheme,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    const v = value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(v);
  };

  const ThemeToggle = (
    <Tooltip
      label={`Switch to ${colorScheme === "dark" ? "light" : "dark"} mode`}
      position="left"
    >
      <ActionIcon onClick={() => toggleColorScheme()} size="lg">
        {colorScheme === "dark" ? <FiSun /> : <FiMoon />}
      </ActionIcon>
    </Tooltip>
  );

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
        {render(colorScheme, ThemeToggle)}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
