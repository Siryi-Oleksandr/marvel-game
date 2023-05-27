import { Box } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Loader, Tab } from 'components';
import { Outlet } from 'react-router-dom';

export const SharedLayout = ({ sharedLay }) => {
  return (
    <Box h="100vh" w="100vw" overflowX="hidden">
      <>
        {sharedLay && (
          <Box display="flex" justifyContent="space-evenly" w="100vw" gap="0px">
            <Tab to="/play">Create your own team</Tab>
            <Tab to="/teamplay">Choose your team</Tab>
            <Tab to="/statistics">Statistics</Tab>
          </Box>
        )}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    </Box>
  );
};
