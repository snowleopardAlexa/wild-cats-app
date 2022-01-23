import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AppContext } from './components/context/context';

ReactDOM.render(
    <BrowserRouter> 
    <AppContext>
     <App />
    </AppContext>
    </BrowserRouter>,
  document.getElementById('root')
);


