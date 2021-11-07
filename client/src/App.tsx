import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/global.scss';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

/* Redux  */
import { Provider } from 'react-redux';
import store from './store';
/*******************************/

/* AUTH USER */
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
/****************/

/* auth pages */
import Signin from './pages/Signin';
import Signup from './pages/Signup';
/**********************************/

/*  layout components */
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
/***************************************/

/* pages */
import DiscoverAds from './pages/DiscoverAds';
import Profile from './pages/Profile';
import PublishAd from './pages/PublishAd';
import Ad from './pages/Ad';
import RentAdPage from './pages/RentAdPage';
/***************************************/
/* 
declare module '@material-ui/core/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#F88472',
      darker: '#053e85',
    },
    secondary: {
      main: '#0B9882',
      darker: '#053e85',
    },
    neutral: {
      main: '#4fff58',
      contrastText: '#fff',
    },
  },
}); */

/* if (localStorage.token) {
  setAuthToken(localStorage.token);
} */

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Provider store={store}>
        {/* <ThemeProvider theme={theme}> */}
        <Router>
          <Header />
          <Navbar />
          <main className='app_main_container'>
            <Switch>
              <Route exact path='/signin' component={Signin} />
              <Route exact path='/signup' component={Signup} />

              <Route exact path='/' component={DiscoverAds} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/publish' component={PublishAd} />
              <Route exact path='/ad/:id' component={Ad} />
              <Route exact path='/rent/:id' component={RentAdPage} />
            </Switch>
          </main>
        </Router>
        {/* </ThemeProvider> */}
      </Provider>
    </>
  );
}

export default App;
