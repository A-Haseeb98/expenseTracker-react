import * as React from 'react';

import TextField from '@mui/material/TextField';

export default function BasicTextFields({ label, type, onChange }) {
  return (

    <TextField type={type} id="outlined-basic" onChange={onChange} fullWidth={true} label={label} variant="outlined" />

  );
}
