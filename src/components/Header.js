import { Button, AppBar, Toolbar, createTheme, ThemeProvider } from '@mui/material';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const pages = [{ name: 'WHAT', link: '#what' }, { name: 'MISSION', link: '#mission' }, { name: 'NEWS', link: '#news' }];

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
  },
  typography: {
    button: {
      fontSize: '20px',
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          {pages.map(page => (
            <AnchorLink key={page.link} href={page.link} offset='20' style={{ textDecoration: 'none' }}>
              <Button
                key={page.name}
                sx={{
                  color: 'black',
                  fontFamily: 'Koulen',
                  marginLeft: 3
                }}
              >
                {page.name}
              </Button>
            </AnchorLink>
          ))}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
