import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {COURSES_ALL, COURSE_NEW} from "../shared/routes";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    btnCourses: {
        border: '1px solid white',
        marginRight: '1em'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Code.Hub Dashboard
                    </Typography>
                    <Link to={COURSES_ALL} style={{textDecoration: "none", color: "inherit"}}>
                        <Button color="inherit" className={classes.btnCourses}>Courses</Button>
                    </Link>

                    <Link to={COURSE_NEW} style={{textDecoration: "none", color: "inherit"}}>
                        <Button color="inherit">Add new course</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
