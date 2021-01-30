import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

export default function NewYipForm(){


  return(
    <div>
      <label>New Yip!</label>
      <div>
        <TextField
            id="outlined-multiline-static"
            label="Your response"
            multiline
            height={ '20%' }
            width={ '50%' }
            variant="outlined"
        />
      </div>
    </div>
  )
}