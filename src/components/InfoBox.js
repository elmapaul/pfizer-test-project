import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    boxWrap: {
        width: 'auto',
        height: 'auto',
        padding: '2em 10em 2em 2em',
        display: 'flex'
    },
    label: {
        backgroundColor: '#6c757d',
        padding: '0.1em 1em',
        borderRadius: '10px',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '1em'
    }
}));

export default function SimplePaper({text, count}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper variant='outlined' className={classes.boxWrap}>
                {/*Label*/}
                <Typography variant='h4' style={{color: '#6c757d'}}>
                    {text}
                </Typography>

                {/*Quantity*/}
                <Typography variant='h6' className={classes.label}>
                    {count}
                </Typography>
            </Paper>
        </div>
    );
}
