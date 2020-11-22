import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
    media: {
        maxHeight: 345,
        paddingTop: '56.25%', // 16:9
    },
    mb20: {
        marginBottom: "10px"
    },
    mt40: {
        marginTop: "40px"
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
            <br/>
            <hr/>
            <br/>
            <CardContent>
                <div className={classes.mb20}>
                    <Typography variant="body1" color="textPrimary" component="p" className={classes.flexVertical}>
                        Price: &nbsp;<b>500Euro</b>
                    </Typography>
                </div>

                <div className={classes.mb20}>
                    <Typography variant="body1" color="textPrimary" component="p" className={classes.flexVertical}>
                            Bookable:&nbsp; <CheckIcon style={{color: 'red'}}/>
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

                <p style={{display: 'flex'}}>
                    <Typography variant="body1" color="textPrimary" component="p">
                        This is a certified program by Athens Tech College, the first educational institution in Greece that specialises in computer science and ICT studies.
                        <br/><br/>
                        Participant's registration (payment's completion) implies full compliance and acceptance of Code.Learn Terms & Conditions.
                    </Typography>
                </p>

                <div className={classes.mb20}>
                    <Button variant="contained" color="default">
                        Edit
                    </Button>
                    <Button variant="contained" color="secondary" style={{marginLeft: "1em"}}>
                        Delete
                    </Button>
                </div>

                <div className={classes.mt40}>
                    <Typography variant="h4" color="textPrimary" component="p">
                        Instructors
                    </Typography>
                    <br/>
                    <Typography variant="h5" color="textPrimary" component="p">
                        John Tsevdos (1982-02-26)
                    </Typography>
                    <br/>
                    <Typography variant="h6" color="textPrimary" component="p">
                        Email: tsevdosjohn@gmail.com | LinkedIn
                    </Typography>
                    <br/>
                    <Typography variant="h6" color="textPrimary" component="p">
                        Front-end developer from Athens, Greece
                    </Typography>

                </div>
            </CardContent>
        </Card>
    );
}
