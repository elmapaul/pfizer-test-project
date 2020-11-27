import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CourseCardComponent from "./CourseCardComponent";
import {API_HOST_NAME} from "../../shared/routes";
import Typography from "@material-ui/core/Typography";
import {useQuery} from './../../hooks/useQuery';

const useStyles = makeStyles(() => ({
    title: {
        fontFamily: 'Avenir',
        marginBottom: '0.5em'
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}));

export default function GridList() {
    const classes = useStyles();

    const { data: courses, error, loading } = useQuery(`${API_HOST_NAME}/courses`);

    return (
        <div style={{margin: '2em'}}>
            <Typography variant="h2" color="textPrimary" component="p" className={classes.title}>
                { loading ? "LOADING, PLEASE WAIT..." : "ALL COURSES" }
            </Typography>

            <div className={classes.wrapper}>
                {
                    !error && courses?.length && courses?.map(course => (
                        <CourseCardComponent key={course?.id} data={course}/>)
                    )
                }
            </div>
        </div>
    );
}
