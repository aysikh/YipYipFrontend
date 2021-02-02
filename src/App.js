import React from 'react'
import './App.css';
import NavBar from './containers/NavBar'
import MainContainer from './containers/MainContainer'
import Logo from './assets/yipyiplogo2.png'
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

import HotYipsContainer from './containers/HotYipsContainer'
import MainProfileContainer from './containers/MainProfileContainer'
import NewsfeedContainer from './containers/NewsfeedContainer'
import LogoutLogin from './containers/LoginLogoutContainer'

function App() {
  const useStyles = makeStyles({
    logo: {
      maxWidth: '12%',
    }
  })

  const classes = useStyles();

  return (
    <div className="App">
      <center>
        <img src={Logo} className={classes.logo}/> 
      </center>
      <NavBar />

      <Switch>
        <Route exact path="/newsfeed" component={NewsfeedContainer} />
        <Route exact path="/hot" component={HotYipsContainer} />
        <Route exact path="/profile" component={MainProfileContainer} />
        <Route exact path="/logout" component={LogoutLogin} />
      </Switch>
    </div>
  );
}

export default App;
