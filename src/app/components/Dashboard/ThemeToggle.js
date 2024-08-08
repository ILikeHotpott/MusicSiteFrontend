// components/ThemeToggle.js
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const ThemeToggle = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Switch
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      iconOn={<Icon icon="solar:moon-bold" />}
      iconOff={<Icon icon="solar:sun-bold" />}
    />
  );
};

export default ThemeToggle;
