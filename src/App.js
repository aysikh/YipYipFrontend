import React from 'react'
import './App.css';
import NavBar from './containers/NavBar'
import MainContainer from './containers/MainContainer'
import Logo from './assets/yipyiplogo2.png'
import { makeStyles } from '@material-ui/core/styles';


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
      <MainContainer />
    </div>
  );
}

export default App;
