import { useQuery } from '@apollo/client';
import { Typography, Grid, Avatar, Box } from '@mui/material';
import React from 'react';
import { GET_POST_COMMENTS } from '../../graphql/queris';

const Comments = ({ slug }) => {
    const { loading, data } = useQuery(GET_POST_COMMENTS, {
        variables: { slug }
    })
    if (loading) return null
    console.log(data);
    return (
        <Grid container
            sx={{
                boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
                borderRadius: 4,
                py: 1,
                mt: 5,
            }} >
                
            <Grid item xs={12} m={2}>
                <Typography component="p" variant='h6' fontWeight={700} color="primary">
                    کامنت ها
                </Typography>
                {data.comments.map((comment) => (
                    <Grid item xs={12} key={comment.id} border="1px solid silver" m={2} p={2} borderRadius={1} >
                        <Box display="flex" alignItems="center" mb = {3}>
                            <Avatar>{comment.name[0]}</Avatar>
                            <Typography component="span" variant="p" fontWeight={700} mr={1} >
                                {comment.name}
                            </Typography>
                        </Box>
                        <Typography componet = "p" variant='p' >
                            {comment.text}
                        </Typography>
                    </Grid >
                ))}
            </Grid>
        </Grid>
    );
};

export default Comments;