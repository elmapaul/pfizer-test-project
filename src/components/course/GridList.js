import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CourseCardComponent from "./CourseCardComponent";

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
        // Cards map
        CourseCardComponent
    );
}
