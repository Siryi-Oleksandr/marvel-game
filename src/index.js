import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { colors } from 'theme';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Curtain } from 'components';

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <BrowserRouter basename="/itis-team-6">
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </ChakraProvider>
);
ReactDOM.createRoot(document.getElementById('modal-root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Curtain />
    </React.StrictMode>
  </ChakraProvider>
);
