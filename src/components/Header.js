import { Button, AppBar, Toolbar, createTheme, ThemeProvider } from '@mui/material';
const pages = ['WHAT', 'MISSION', 'NEWS'];

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
            <Button
              key={page}
              sx={{
                color: 'black',
                fontFamily: 'Koulen',
                marginLeft: 3
              }}
            >
              {page}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
