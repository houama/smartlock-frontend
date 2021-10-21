import React from 'react';
import { Grid, IconButton, TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Input = ({ name, handleChange, autofocus, label, type, error, handleShowPassword }) => {
  return (
    <Grid item xs={12} >
            <TextField
                name={name}
                onChange={handleChange}
                variant="outlined"
                error={error}
                required
                fullWidth
                label={label}
                autoFocus={autofocus}
                type={type}
                InputProps={name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                        </InputAdornment>
                    )
                }: null}
            /> 
        </Grid>
  )
}

export default Input