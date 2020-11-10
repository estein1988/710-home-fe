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
            <Typography variant="body2" color="textSecondary" component="p">
            Single family home priced at ${favorite.home.price}. {favorite.home.beds} beds and {favorite.home.baths} baths. Located in {favorite.home.city}'s South Denver neighborhood. 
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