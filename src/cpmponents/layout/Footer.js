import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <div>
            <Typography
                component="p"
                variant="p"
                bgcolor="#f7f7f7"
                color="primary"
                padding="10px"
                mt= {10}
                fontWeight = {500}
                textAlign="center" >
               پروژه وبلاگ با GraphQl 
            </Typography>
        </div>
    );
};

export default Footer;