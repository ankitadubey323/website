import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
import './index.css';

// // createRoot(document.getElementById('root')!).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>
// // );
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <App />
// );
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './index.css';

// const container = document.getElementById('root');

// if (!container) {
//   throw new Error('Root container missing');
// }

// createRoot(container).render(
//   <App />
// );
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

