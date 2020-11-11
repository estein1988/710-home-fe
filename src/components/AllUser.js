import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
root: {
    maxWidth: 300,
},
media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
avatar: {
    backgroundColor: red[500],
},
}));

export default function AllUser({user}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

return (
    <Card className={classes.root}>
        <CardHeader
        avatar={
            <Avatar aria-label="avatar" className={classes.avatar}>
                {user.name[0]}
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
            </IconButton>
        }
        title={user.name}
        subheader={user.username}
        />
        <CardMedia
        className={classes.media}
        image={user.picture}
        title="user-picture"
        />
        <CardContent>
        <Typography variant="body" color="textPrimary" component="p">
            Enjoys {user.hobbies}<br></br>
            Ready to purchase a ${user.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} homewith someone.
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
            <ShareIcon />
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
            <Typography paragraph>Additional Info:</Typography>
            <Typography paragraph>
            </Typography>
            <Typography paragraph>
            </Typography>
            <Typography paragraph>
            </Typography>
            <Typography>
            </Typography>
        </CardContent>
        </Collapse>
    </Card>
    )
}