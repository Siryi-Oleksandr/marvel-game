import { Route, Routes } from 'react-router-dom';
import { SharedLayout, Home, PlayGame, PlayTeamGame } from 'pages';
import { GlobalStyle } from './ChooseTeamList/ChooseTeamList.styled'
export const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/play" element={<PlayGame />} />
          <Route path="/teamplay" element={<PlayTeamGame />} />
        </Route>
      </Routes>
    </>
  );
};
