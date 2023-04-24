import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';

export default function AppLayout() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box flex="1 1 auto">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
