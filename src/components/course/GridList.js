import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CourseCardComponent from "./CourseCardComponent";
import axios from "axios";
import {API_HOST_NAME} from "../../shared/routes";
import Typography from "@material-ui/core/Typography";

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
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get(`${API_HOST_NAME}/courses`)
            .then(({data}) => setCourses(data))
            .catch(_ => console.log('Error with courses fetching!'));
    },[]);

    return (
        <div style={{margin: '2em'}}>
            <Typography variant="h2" color="textPrimary" component="p" className={classes.title}>
                ALL COURSES
            </Typography>

            <div className={classes.wrapper}>
                {
                    courses?.length && courses?.map(course => (
                        <CourseCardComponent key={course?.title} data={course}/>)
                    )
                }
            </div>
        </div>
    );
}
