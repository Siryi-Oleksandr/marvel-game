import { Box } from '@chakra-ui/react';
import { Suspense } from 'react';
import Loader2 from 'components/Loader2/Loader';
import { NavLink, Outlet } from 'react-router-dom';
import './SharedLayout.scss';

export const SharedLayout = ({ sharedLay }) => {
  return (
    <Box h="100vh" w="100vw" overflowX="hidden">
      <>
        {sharedLay && (
          <Box display="flex" justifyContent="space-evenly" w="100vw" gap="0px">
            <Box w="100%" as={NavLink} to="/play" className="nav-link">
              Create your own team
            </Box>

            <Box as={NavLink} w="100%" to="/teamplay" className="nav-link">
              Choose your team
            </Box>
            <Box as={NavLink} w="100%" to="/statistics" className="nav-link">
              Statistics
            </Box>
          </Box>
        )}
        <Suspense fallback={<Loader2 />}>
          <Outlet />
        </Suspense>
      </>
    </Box>
  );
};
