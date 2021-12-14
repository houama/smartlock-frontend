import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles'

export const theme = createTheme({
  components: {
    MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#00A8E8'
          }
        }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
          fontWeight: 'bold'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
          fontSize: '14px'
        }
      }
    }
   
  },
});

export default makeStyles({
  body: {
    backgroundColor: '#007EA7'
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(4),
  },
  submit: {
    '& .MuiButton-root': {
      margin: theme.spacing(2, 0, 2),
      height: '50px'
    }
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  appBarTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: '24px'
  },
  appBarNav: {
    display: 'flex',
    flexGrow: '1',
    marginLeft: '24px',
  },
  navText: {
    fontSize: '14px'
  },
  linkText: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: '12px',
    cursor: 'pointer'
  },
  error: {
    marginTop: theme.spacing(2),
  }
});