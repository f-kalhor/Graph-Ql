import React from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CardEL = ({ slug, title, coverphoto, author }) => {
    return (
        <Card sx={{ boxShadow: "rgba(0 ,0,0,0.1) 0px 4px 12px", borderRadius: 4 }} >
            {author && (
                <CardHeader
                    avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
                    title={
                        <Typography variant='p' component="p" color="text.secondary" fontWeight={700}>
                            {author.name}
                        </Typography>
                    }
                />
            )}

            <CardMedia
                component='img'
                height="200px"
                src={coverphoto.url}
                alt={slug}
            />
            <CardContent>
                <Typography
                    component="h3"
                    variant='h6'
                    color="text.primary"
                    fontWeight={600}
                >
                    {title}
                </Typography>
            </CardContent>
            <Divider variant="middle" sx={{ margin: "10px" }} />
            <CardActions>
                <Link to={`/blogs/${slug}`} style={{ textDecoration: "none", width: "100%" }}>
                    <Button size='small' sx={{ width: "100%", borderRadius: 3 }} variant="outlined" >
                        مطالعه مقاله
                    </Button>
                </Link>
            </CardActions>


        </Card>
    );
};

export default CardEL;