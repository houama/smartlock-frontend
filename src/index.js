import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store }  from './state/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00A8E8'
    },
    secondary: {
      main: '#007EA7'
    }
  },
  typography: {
    fontFamily: 'Poppins',
    h4: {
      fontWeight: 'bolder'
    }
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          marginLeft: '10px',
          color: '#ffffff'
          
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#ffffff'
        }
      }
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
