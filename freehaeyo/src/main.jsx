import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { worker } from './mocks/worker.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const theme = createTheme({
  /** Put your mantine theme override here */
});

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  await worker;

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </React.StrictMode>,
  );
});
