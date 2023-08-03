import { useQuery } from '@apollo/client';
import { Avatar, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_AUTHOR_INFO } from '../../graphql/queris';
import sanitizeHtml from "sanitize-html"
import CardEL from '../shared/CardEL';
import Loader from '../shared/Loader';
const AuthorPage = () => {

    
    const { slug } = useParams()
    
    const { loading, data } = useQuery(GET_AUTHOR_INFO, {
        variables: { slug: slug }
    })
    if (loading) return <Loader/>
    console.log(data);
    const { author: { avatar, description, name, field , posts } } = data ;


    return (
        <Container maxWidth="lg">
            <Grid container mt={10} >
                <Grid item xs={12} display="flex" flexDirection='column' alignItems="center">
                    <Avatar src={avatar.url} sx={{ width: "250px", height: "250px" }} />
                    <Typography componet="h3" variant="h5" fontWeight={700} mt={4}>
                        {name}
                    </Typography>
                    <Typography componet="p" variant="h5" fontWeight={500} color="text.secondary" mt={2}>
                        {field}
                    </Typography>
                </Grid>
                <Grid item xs={12} mt={5} >
                    <div 
                    dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}>
                    </div>
                </Grid>
                <Grid item xs={12} mt={8}>
                    <Typography component="h3" variant="h5" fontWeight={700} >
                        مقالات {name}
                    </Typography>
                    <Grid container spacing={2} mt={3}>
                        {posts.map(post => (
                            <Grid item xs={12} sm={6} md={4} key={post.id} >
                                <CardEL
                                    title={post.title}
                                    slug={post.slug}
                                    coverphoto={post.coverphoto}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AuthorPage;