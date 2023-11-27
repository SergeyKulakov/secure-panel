import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import { Amplify } from '@aws-amplify/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import App from './routes';
import theme from './constants/theme';
import { store } from './redux/store';
import styles from './style';
import './index.css';
import reportWebVitals from './reportWebVitals';
import awsConfig from './awsConfig';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const queryClient = new QueryClient();
Amplify.configure(awsConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Grid container component="main" sx={styles.root}>
              <CssBaseline />
              <Router>
                <App />
              </Router>
            </Grid>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
