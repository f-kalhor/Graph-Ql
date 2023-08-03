import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography, Container } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <AppBar position='sticky'>
                <Container maxWidth="lg" >
                    <Toolbar >
                        <Typography variant='h5' component="div" fontWeight={500} flex={1} >
                            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>وبلاگ موکال استارت</Link>
                        </Typography>
                        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                            <BookIcon />
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;