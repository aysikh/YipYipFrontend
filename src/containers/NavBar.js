import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { NavLink, Redirect, Link } from 'react-router-dom'

export default function NavBar(){
  const useStyles = makeStyles({
    appbar: {
      flexGrow: 1,
      maxWidth: '90%'
    },
  });
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <div className="NavBar">
      <center>
        <Paper square className={classes.appbar}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab icon={<NewReleasesIcon />} label="NEW" />
            <Tab icon={<WhatshotIcon />} label="HOT" />
            <Tab icon={<AccountCircleIcon />} label="PROFILE" />
            <Tab icon={<ExitToAppIcon />} label="LOGOUT" />
          </Tabs>
        </Paper>
      </center>
    </div>
  )
}