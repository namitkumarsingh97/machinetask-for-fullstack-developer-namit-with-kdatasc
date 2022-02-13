import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Button.css';

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2} className='buttons'>
      <Button variant="contained" style={{color: "black", backgroundColor: "#88FCA3"}}>
        STOP
      </Button>
      <Button variant="contained" style={{color: "black", backgroundColor: "#88FCA3"}}>
        CLEAR
      </Button>
    </Stack>
  );
}
