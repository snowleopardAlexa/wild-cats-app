import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AppContext } from './components/context/context';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter> 
    <AppContext>
   
    <App />
   
    </AppContext>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);


