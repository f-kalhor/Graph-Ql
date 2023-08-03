import { useQuery } from '@apollo/client';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_BLOG_INFO } from '../../graphql/queris';
import Loader from '../shared/Loader';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';
import CommentForm from '../comment/CommentForm';
import Comments from '../comment/Comments';

const BlogPage = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const { data, loading } = useQuery(GET_BLOG_INFO, {
        variables: { slug: slug }
    })
    if (loading) return <Loader />
    console.log(data);
    return (
        <Container maxWidth="lg">
            <Grid container mb={4}>
                <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
                    <Typography component="h2" variant='h4' color="primary" fontWeight={700}>
                        {data.post.title}
                    </Typography>
                    <ArrowBackIcon onClick={() => navigate(-1)} />
                </Grid>
                <Grid item xs={12} mt={6} >
                    <img src={data.post.coverphoto.url} alt={data.post.slug} width="100%" style={{ borderRadius: "20px" }} />
                </Grid>
                <Divider variant="middle" />
                <Grid item xs={12} mt={7} display="flex" alignItems="center ">
                    <Avatar src={data.post.author.avatar.url} sx={{ width: 95, height: 95, marginLeft: 2.5 }} />
                    <Box component="div" >
                        <Typography component="p" variant='h6' >
                            {data.post.author.name}
                        </Typography>
                        <Typography component="p" variant='p' color="text.secondary" fontWeight={500}>
                            {data.post.author.field}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12 } mt = {7}>
                    <div dangerouslySetInnerHTML={{
                        __html: sanitizeHtml(data.post.content.html),
                    }}>
                    </div>
                </Grid>
                <Grid item xs = {12}>
                         <CommentForm slug = {slug }/>   
                </Grid>
                <Grid item xs = {12}>
                         <Comments slug = {slug }/>   
                </Grid>
            </Grid>
        </Container>

    );
};

export default BlogPage;