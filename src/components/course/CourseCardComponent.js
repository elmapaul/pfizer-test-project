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
import {COURSE_BASE_PATH} from "../../shared/routes";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        marginBottom: '1.5em',
        marginRight: '1.5em',
        maxWidth: '450px'
    },
    media: {
        height: 200,
        minWidth: 400
    },
    mb20: {
        marginBottom: "10px"
    },
    flexVertical: {
        display: 'flex',
        alignItems: 'center'
    }
}));

export default function RecipeReviewCard({data}) {
    const classes = useStyles();

    const { title, price, dates, imagePath, open, duration, id } = data || '';

    return (
        <Card className={classes.root}>
            <CardHeader
                title={title}
            />

            <CardMedia
                className={classes.media}
                image={imagePath}
                title={title}
            />

            <CardContent>
                <div className={classes.mb20}>
                    <Typography variant="body1" color="textPrimary" component="p" className={classes.flexVertical}>
                        Price: &nbsp;<b>{price?.normal}</b> &nbsp;| Bookable:&nbsp;
                        {open && <CheckIcon style={{color: 'red'}}/>}
                    </Typography>
                </div>

                <div className={classes.mb20}>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Duration: &nbsp;<b>{duration}</b>
                    </Typography>
                </div>

                <div className={classes.mb20}>
                    <Typography variant="body1" color="textPrimary" component="p">
                        Dates: &nbsp;<b>{dates?.start_date} - {dates?.end_date}</b>
                    </Typography>
                </div>
            </CardContent>

            <CardActions style={{display: "flex", justifyContent: "flex-end"}}>
                <Link to={`${COURSE_BASE_PATH}/${id}`} style={{textDecoration: "none"}}>
                    <Button variant="contained" color="primary">
                        View
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}
