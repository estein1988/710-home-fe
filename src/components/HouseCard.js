import React from 'react';
import UserFavoritesCardTwo from './UserFavoritesCardTwo'
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
var Sentencer = require('sentencer');

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
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
        padding: theme.spacing(2, 4, 3)
    },
}))

export default function HouseCard({home, allHomes, user, clickAction, favorites, profileFetch, favoriteFetch, homeFetch}) {
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
            user => <UserFavoritesCardTwo
                key={user.id}
                user={user}
                favorites={favorites}
                profileFetch={profileFetch}
                favoriteFetch={favoriteFetch}
                homeFetch={homeFetch}
            />
        )
        
        return (
            <div className="house-cards">
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={home.thumbnail}
                    title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {home.line}
                </Typography>
                <Typography gutterBottom variant="h6" component="h6">
                    {home.city} - {home.state} - {home.postal_code}
                </Typography>
                <Typography variant="body" color="textSecondary" component="p">
                    A { Sentencer.make( " {{adjective}} " ) } {home.prop_type.replace(/_/g, " ")}. Priced at ${home.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}. {home.beds} beds and {home.baths} baths. {home.size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} {home.units}. Located in {home.city}'s {home.neighborhood_name} neighborhood.
                    <br></br>
                    <br></br><a href={home.href} target="_blank">Virtual Tour</a>
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
                <button class="ui inverted primary button" onClick={handleOpen}>
                    Additonal Favorite Info.
                </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                <div style={modalStyle} className={classes.paper}>
                <div class="ui yellow message">
                    <i class="star icon"></i>
                        {home.line} favorites:
                    </div>
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
        </div>
        )
    }