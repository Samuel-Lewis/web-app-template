import React from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { getModKey } from '@/utils/os';
import {
  ActionIcon,
  Kbd,
  Tooltip,
  useMantineColorScheme,
  Group,
} from '@mantine/core';
import { useHotkeys, useOs } from '@mantine/hooks';

export const ThemeSwitcher: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const os = useOs();
  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  const toolTipContent = (
    <Group spacing="xs">
      Switch to {colorScheme === 'light' ? 'dark' : 'light'} mode
      <Kbd>{getModKey(os)} + J</Kbd>
    </Group>
  );

  return (
    <Tooltip label={toolTipContent}>
      <ActionIcon onClick={() => toggleColorScheme()}>
        {colorScheme === 'dark' ? (
          <IoSunnyOutline size={18} />
        ) : (
          <IoMoonOutline size={18} />
        )}
      </ActionIcon>
    </Tooltip>
  );
};
