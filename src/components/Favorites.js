import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

    const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    });

    export default function Favorites({deleteFavorite, favorite}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={favorite.home.thumbnail}
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {favorite.home.line}
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
                {favorite.home.city} - {favorite.home.state} - {favorite.home.postal_code}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="body1">
                ${favorite.home.price}
                <br></br>
                {favorite.home.beds} beds {favorite.home.baths} baths
                <br></br>
                {favorite.home.neighborhood_name}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button onClick={ ()=> deleteFavorite(favorite)} size="small" color="primary">
                Remove Favorite
            </Button>
        </CardActions>
        </Card>
    );
}

