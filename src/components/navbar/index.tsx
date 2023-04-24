import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageMenu from 'src/components/language-menu';

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <AppBar position="sticky" color="inherit" sx={{ zIndex: 999999 }}>
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          component={Link}
          to="/"
          sx={{ textDecoration: 'none' }}
        >
          {t("Guo Yunhe's Stack")}
        </Typography>
        <Box flex="1 1 auto" />
        <LanguageMenu />
      </Toolbar>
    </AppBar>
  );
}
