import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { colors } from 'theme';
import { BrowserRouter } from 'react-router-dom';

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter basename="/itis-team-6">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);
