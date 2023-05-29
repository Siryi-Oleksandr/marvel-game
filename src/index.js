import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { colors } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Curtain } from 'components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/marvel-game">
      <ChakraProvider theme={colors}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById('modal-root')).render(
  <React.StrictMode>
    <ChakraProvider theme={colors}>
      <Curtain />
    </ChakraProvider>
  </React.StrictMode>
);
