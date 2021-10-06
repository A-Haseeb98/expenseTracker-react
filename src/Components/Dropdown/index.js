import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react'

export default function SelectLabels({ getCurrency }) {
    const [currency, setCurrency] = useState('PKR');
    const handleChange = (event) => {
        console.log(currency, 'before currency')
        setCurrency(event.target.value);
    };
    React.useEffect(() => {
        console.log(currency, 'after currency')
        getCurrency(currency)

    }, [currency])
    return (
        <div>
            <FormControl fullWidth={true} sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="demo-simple-select-helper-label">Currency</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={currency}
                    label="Currency"
                    onChange={handleChange}>

                    <MenuItem value={'PKR'}>PKR</MenuItem>
                    <MenuItem value={'USD'}>USD</MenuItem>
                    <MenuItem value={'EUR'}>EUR</MenuItem>
                    <MenuItem value={'AED'}>AED</MenuItem>
                    <MenuItem value={'INR'}>INR</MenuItem>
                </Select>
                <FormHelperText>Please select your currency</FormHelperText>
            </FormControl>

        </div>
    );
}
