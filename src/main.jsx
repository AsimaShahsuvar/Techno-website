import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from '@material-tailwind/react';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* look again provider for redux */}
    <ThemeProvider >
    <App />
    </ThemeProvider>
 </React.StrictMode>,
)
