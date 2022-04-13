import { Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Locate Station',
    route: '/locator',
  },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            noWrap
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Synergy
          </Typography>

          <Box sx={{ flexGrow: 1, display: { sx: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={(e: MouseEvent<HTMLElement>) =>
                setAnchorElNav(e.currentTarget)
              }
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              onClose={() => setAnchorElNav(null)}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {navLinks.map(navLink => (
                <MenuItem
                  key={navLink.label}
                  onClick={() => {
                    navigate(navLink.route);
                    setAnchorElNav(null);
                  }}
                >
                  <Typography textAlign="center">{navLink.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Synergy
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map(navLink => (
              <Button
                key={navLink.label}
                onClick={() => navigate(navLink.route)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {navLink.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
