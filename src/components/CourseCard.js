import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    mb20: {
        marginBottom: "10px"
    },
    flexVertical: {
        display: 'flex',
        alignItems: 'center'
    }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title="React"
            />
            <CardMedia
                className={classes.media}
                image="./angular.png"
                title="Paella dish"
            />
            <CardContent>
                <div className={classes.mb20}>
                    <Typography variant="body1" color="textPrimary" component="p" className={classes.flexVertical}>
                        Price: &nbsp;<b>500Euro</b> &nbsp;| Bookable:&nbsp; <CheckIcon style={{color: 'red'}}/>
                    </Typography>
                </div>

                <div className={classes.mb20}>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Duration: &nbsp;<b>2 Fridays and 4 Saturdays</b>
                    </Typography>
                </div>

                <div className={classes.mb20}>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Dates: &nbsp;<b>10/10 - 11/02</b>
                    </Typography>
                </div>
            </CardContent>
            <CardActions style={{display: "flex", justifyContent: "flex-end"}}>
                <Button variant="contained" color="primary">
                    View
                </Button>
            </CardActions>
        </Card>
    );
}
