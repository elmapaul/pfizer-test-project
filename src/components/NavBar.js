import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {COURSES_ALL, COURSE_NEW, DASHBOARD} from "../shared/routes";
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
        background: 'black',
        borderRadius: 5,
        padding: "4px 10px",
    },
    btnCourses: {
        border: '1px solid white',
        marginRight: '1em'
    },
    link: {
        textDecoration: "none",
        color: "inherit"
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
                    <span>
                        <Link to={DASHBOARD} style={{textDecoration: "none", color: "inherit"}}>
                            <Typography variant="h4" className={classes.title}>
                                Code.Hub Dashboard
                            </Typography>
                        </Link>
                    </span>

                    <span>
                        <Link to={COURSES_ALL} className={classes.link}>
                            <Button color="inherit" className={classes.btnCourses}>Courses</Button>
                        </Link>

                        <Link to={COURSE_NEW} className={classes.link}>
                            <Button color="inherit">Add new course</Button>
                        </Link>
                    </span>
                </Toolbar>
            </AppBar>
        </div>
    );
}
