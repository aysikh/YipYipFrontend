import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NewYipForm from '../components/NewYipForm'

export default function NewsfeedContainer(){
  const useStyles = makeStyles({
    mainDiv: {
      padding: '1%',
      marginLeft: '5%',
      marginRight: '5%',
      backgroundColor: 'gray',
    }
  })

  const classes = useStyles();

  return(
    <div className={classes.mainDiv}>
      <h1> Newsfeed container </h1>
      <NewYipForm /> 
      
      
    </div>
  )
}