// This is for Next.js 13+
'use client';
import { AppBar, Toolbar, Typography, Button, Box} from '@mui/material/';
import { useTheme } from '@mui/material/styles';

function Navbar() {
    const theme = useTheme();

  return (
    <AppBar
    position="static"
    sx={{
      backgroundColor: theme.palette.primary.main,
      boxShadow: 'none', // Optional: Remove shadow if desired
    }}
  >
    <Toolbar sx={{ justifyContent: 'flex-end', padding: '0 16px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2, // Space between buttons
          padding: '8px 16px', // Padding around buttons
          marginRight: 2, // Margin to push it away from the right edge
        }}
      >
        <Button color="inherit">Home</Button>
        <Button color="inherit">App</Button>
        <Button color="inherit">About</Button>
      </Box>
    </Toolbar>
  </AppBar>
  );
}

export default Navbar;
