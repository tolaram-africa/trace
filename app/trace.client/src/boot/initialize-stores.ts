import { boot } from 'quasar/wrappers';
import { useThemeStore } from 'src/shared/layouts/stores';

export default boot(({}) => {
  const { initializeTheme } = useThemeStore();

  initializeTheme();
});
