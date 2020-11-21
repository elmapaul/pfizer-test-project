import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2em 0"
    },
    paper: {
        backgroundColor: '#eee',
        padding: "4em 2em",
        border: 0,
        borderRadius: '15px'
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h2">
                            Welcome to Code.Hub Dashboard
                        </Typography>

                        <Typography variant="h4" style={{paddingTop: '1em'}}>
                            Manage everything and have fun!
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
