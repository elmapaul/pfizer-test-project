import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Jumbotron from "./JumbotronComponent";
import InfoBoxComponent from "./InfoBoxComponent";
import TableGrid from "./TableGrid";
import axios from 'axios';
import {API_HOST_NAME} from './../../shared/routes';

const useStyles = makeStyles({
    main: {
        minHeight: "100vh"
    },
    boxContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: "2em"
    }
});

const Main = () => {
    const classes = useStyles();
    const [courses, setCourses] = useState([]);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        axios.get(`${API_HOST_NAME}/courses`)
            .then(({data}) => setCourses(data));

        axios.get(`${API_HOST_NAME}/stats`)
            .then(({data}) => setStats(data));
    }, []);

    return (
        <main className={classes.main}>
            <Jumbotron/>

            {/*Stats section*/}
            <div className={classes.boxContainer}>
                {stats && stats?.map(({title, amount}) => <InfoBoxComponent title={title.toUpperCase()} key={title} count={amount}/>)}
            </div>

            {courses.length && <TableGrid courses={courses}/>}
        </main>
    );
};

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
