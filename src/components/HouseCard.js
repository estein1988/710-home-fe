import React from 'react';
import UserFavoritesCard from './UserFavoritesCard'
import UserModal from './UserModal'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

export default function HouseCard({home, allHomes, user, clickAction, favorites, deleteFavorite}) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }
    
    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();
    
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

        const [modalStyle] = React.useState(getModalStyle);
        const [open, setOpen] = React.useState(false);
    
        const handleOpen = () => {
            setOpen(true);
        };
    
        const handleClose = () => {
            setOpen(false);
        };

        const renderUsers = () => home.users.map(
            user => <UserFavoritesCard
                key={user.id}
                user={user}
                favorites={favorites}
                deleteFavorite={deleteFavorite}
            />
        )
        
        return (
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={home.photo}
                    title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {home.street}
                </Typography>
                <Typography gutterBottom variant="h6" component="h6">
                    {home.city} - {home.state} - {home.zip_code}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Single family home priced at ${home.price}. {home.bed} beds and {home.bath} baths. Located in {home.city}'s South Denver neighborhood. Listing ID: 2922984512.  
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon onClick={() => clickAction(home, user)} />
                </IconButton>
                <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                    <div>
                        {renderUsers()}
                    </div>
                <div>
                <button type="button" onClick={handleOpen}>
                    Additonal Favorite Info.
                </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">{home.street} has been favorited by:</h2>
                        <p id="simple-modal-description">
                            {home.users.map(user => 
                                <UserModal
                                    key={user.id}
                                    user={user}
                                />
                            )}
                        </p>
                </div>
                </Modal>
                </div>
                </Typography>
                </CardContent>
            </Collapse>
        </Card>
        )
    }