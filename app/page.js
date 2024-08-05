// This is for Next.js 13+
'use client';
import { Container, Box, ThemeProvider} from '@mui/material/';
import Navbar from './navbar'
import theme from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ bgcolor: 'primary.main', width: '100vw', height: '100vh',
        padding: '0px', margin: '-10px'
      }}>
        <Navbar />
        <Box 
          sx={{ 
            bgcolor: 'secondary.main', // Set background color to the secondary color
            color: 'white', // Set text color to white for better contrast
            padding: '16px', // Add some padding for better visual spacing
            borderRadius: '8px' // Optional: add border radius for styling
          }}
        >
          This is working
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
