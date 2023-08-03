import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_AUTHORS_INFO } from '../../graphql/queris';
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import Loader from '../shared/Loader';
const Author = () => {
    const { loading, data, errors } = useQuery(GET_AUTHORS_INFO)
    if (loading) return <Loader/>
    if (errors) return <h3>error...</h3>
    console.log(data);
    return (

        <Grid container sx={{ boxShadow: "rgba(0 ,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
            {data.authors.map((author, index) => (
                <React.Fragment key={author.id}>
                    <Grid item xs={12} padding={2}>
                        <Link to={`/authors/${author.slug}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                textDecoration: "none",
                            }}>
                            <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
                            <Typography component="p" variant="p" color="text.secondary" fontWeight={500}>
                                {author.name}
                            </Typography>
                        </Link>
                    </Grid>
                    {index !== data.authors.length - 1 && (
                        <Grid item xs={12}>
                            <Divider variant='middle' />
                        </Grid>
                    )}
                </React.Fragment>
            ))}
        </Grid>
    );
};

export default Author;