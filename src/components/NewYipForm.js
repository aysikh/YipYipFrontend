import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

export default function NewYipForm(){


  return(
    <div>
      <label>New Yip!</label>
      <br/> <br/>
      <div>
        <TextField
            id="outlined-multiline-static"
            label="Your response"
            multiline
            variant="outlined"
            rows={3}
            fullWidth
        />
        <br/> <br/>
        <Button 
          type="submit" 
          variant="contained" 
          color="secondary">
          Submit
        </Button> 
      </div>
    </div>
  )
}