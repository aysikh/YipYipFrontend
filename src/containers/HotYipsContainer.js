import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

export default function HotYipsContainer(){
  const useStyles = makeStyles({
    hotMainDiv: {
      padding: '1%',
      marginLeft: '5%',
      marginRight: '5%',
      backgroundColor: 'gray',
    }
  })

  const classes = useStyles();

  return(
    <div className={classes.hotMainDiv}>
      <h1> Hot Yips Container </h1>
      <h1> Hot Yips Container </h1>
      <h1> Hot Yips Container </h1>
      <h1> Hot Yips Container </h1>
      <h1> Hot Yips Container </h1>
      <h1> Hot Yips Container </h1>
      <h1> Hot Yips Container </h1>
      
    </div>
  )
}