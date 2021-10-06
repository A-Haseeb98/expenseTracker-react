import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({ onClick, children, fullWidth }) {
    return (
        <Button fullWidth={fullWidth} onClick={onClick} variant="contained">{children}</Button>
    );
}
