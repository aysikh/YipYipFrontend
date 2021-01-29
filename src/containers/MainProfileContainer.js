import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

export default function MainProfileContainer(){
  const useStyles = makeStyles({
    mainProfileDiv: {
      padding: '1%',
      marginLeft: '5%',
      marginRight: '5%',
      backgroundColor: 'gray',
    }
  })

  const classes = useStyles();
  return(
    <div className={classes.mainProfileDiv}>
      <h1> Main profile container here </h1>
      <h1> Main profile container here </h1>
      <h1> Main profile container here </h1>
      <h1> Main profile container here </h1>
      <h1> Main profile container here </h1>
      <h1> Main profile container here </h1>
      
    </div>
  )
}