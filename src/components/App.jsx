import { Route, Routes } from 'react-router-dom';
import { SharedLayout, Home, PlayGame, PlayTeamGame } from 'pages';
import { useState } from 'react';
import { Statistics } from 'pages/Statistics/Statistics';

export const App = () => {
  const [sharedLay, setSharedLay] = useState(
    document.location.pathname.includes('play' || 'teamplay' || 'statistics')
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout sharedLay={sharedLay} />}>
          <Route index element={<Home setSharedLay={setSharedLay} />} />
          <Route path="/play" element={<PlayGame />} />
          <Route path="/teamplay" element={<PlayTeamGame />} />
          <Route path="/statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </>
  );
};
