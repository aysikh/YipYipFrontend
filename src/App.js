import React from 'react'
import './App.css';
import NavBar from './containers/NavBar'
import MainContainer from './containers/MainContainer'
import Logo from './assets/yipyiplogo2.png'
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

import NewsfeedContainer from './containers/NewsfeedContainer'

function App() {
  const useStyles = makeStyles({
    logo: {
      maxWidth: '12%',
    }
  })

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className="App">
      <center>
        <img src={Logo} className={classes.logo}/> 
      </center>
      <NavBar />

      <Switch>
        <Route exact path="/newsfeed" component={NewsfeedContainer} />
      </Switch>
    </div>
  );
}

export default App;
